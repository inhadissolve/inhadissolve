import { mkdir, writeFile } from "node:fs/promises";

const username = process.env.GITHUB_REPOSITORY_OWNER || process.argv[2] || "inhadissolve";
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const apiBase = "https://api.github.com";

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": `${username}-profile-stats`,
  "X-GitHub-Api-Version": "2022-11-28",
};

if (token) headers.Authorization = `Bearer ${token}`;

async function fetchJson(path) {
  const response = await fetch(`${apiBase}${path}`, { headers });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`GitHub API ${response.status}: ${detail.slice(0, 240)}`);
  }
  return response.json();
}

async function fetchOwnedRepositories() {
  const repositories = [];

  for (let page = 1; ; page += 1) {
    const batch = await fetchJson(
      `/users/${encodeURIComponent(username)}/repos?type=owner&sort=updated&per_page=100&page=${page}`,
    );
    repositories.push(...batch);
    if (batch.length < 100) return repositories;
  }
}

async function fetchSearchCount(query) {
  const result = await fetchJson(`/search/issues?q=${encodeURIComponent(query)}&per_page=1`);
  return result.total_count;
}

const escapeXml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const formatNumber = (value) => new Intl.NumberFormat("en-US").format(value);
const updatedAt = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

const languageColors = {
  Python: "#3572A5",
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  Java: "#B07219",
  Kotlin: "#A97BFF",
  HTML: "#E34C26",
  CSS: "#663399",
  Shell: "#89E051",
  C: "#555555",
  "C++": "#F34B7D",
  CMake: "#DA3434",
  Dart: "#00B4AB",
  Jupyter: "#DA5B0B",
  Vue: "#41B883",
};

function cardStyles() {
  return `
    .background { fill: #ffffff; stroke: #e5e7eb; }
    .title { fill: #111827; font: 700 20px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .subtitle { fill: #6b7280; font: 500 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .metric { fill: #3457ff; font: 700 24px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .label { fill: #6b7280; font: 600 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .language { fill: #374151; font: 600 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .percent { fill: #6b7280; font: 500 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    @media (prefers-color-scheme: dark) {
      .background { fill: #0d1117; stroke: #30363d; }
      .title { fill: #f0f6fc; }
      .subtitle, .label, .percent { fill: #8b949e; }
      .language { fill: #c9d1d9; }
    }
  `;
}

function createOverviewSvg(user, mergedPullRequests, openedIssues) {
  const metrics = [
    ["Public repositories", user.public_repos],
    ["Merged pull requests", mergedPullRequests],
    ["Issues opened", openedIssues],
    ["Followers", user.followers],
  ];

  const metricMarkup = metrics
    .map(([label, value], index) => {
      const x = index % 2 === 0 ? 30 : 280;
      const y = index < 2 ? 105 : 170;
      return `
        <text class="metric" x="${x}" y="${y}">${formatNumber(value)}</text>
        <text class="label" x="${x}" y="${y + 21}">${escapeXml(label)}</text>`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="520" height="210" viewBox="0 0 520 210" role="img" aria-labelledby="title description">
  <title id="title">${escapeXml(username)} GitHub overview</title>
  <desc id="description">Public repositories, merged pull requests, opened issues and followers, updated ${escapeXml(updatedAt)}</desc>
  <style>${cardStyles()}</style>
  <rect class="background" x="0.5" y="0.5" width="519" height="209" rx="14"/>
  <text class="title" x="28" y="38">GitHub Overview</text>
  <text class="subtitle" x="28" y="59">Public activity · updated ${escapeXml(updatedAt)}</text>
  ${metricMarkup}
</svg>`;
}

function createLanguagesSvg(languages) {
  const topLanguages = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
  const total = topLanguages.reduce((sum, [, bytes]) => sum + bytes, 0) || 1;

  let barX = 28;
  const barWidth = 464;
  const segments = topLanguages
    .map(([language, bytes]) => {
      const width = (bytes / total) * barWidth;
      const segment = `<rect x="${barX.toFixed(2)}" y="72" width="${Math.max(width, 1).toFixed(2)}" height="10" fill="${languageColors[language] || "#9ca3af"}"/>`;
      barX += width;
      return segment;
    })
    .join("");

  const rows = topLanguages
    .map(([language, bytes], index) => {
      const column = index % 2;
      const row = Math.floor(index / 2);
      const x = column === 0 ? 30 : 280;
      const y = 113 + row * 29;
      const percentage = ((bytes / total) * 100).toFixed(1);
      return `
        <circle cx="${x + 5}" cy="${y - 4}" r="5" fill="${languageColors[language] || "#9ca3af"}"/>
        <text class="language" x="${x + 18}" y="${y}">${escapeXml(language)}</text>
        <text class="percent" x="${x + 185}" y="${y}" text-anchor="end">${percentage}%</text>`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="520" height="210" viewBox="0 0 520 210" role="img" aria-labelledby="title description">
  <title id="title">${escapeXml(username)} top languages</title>
  <desc id="description">Top languages from owned non-fork public repositories, updated ${escapeXml(updatedAt)}</desc>
  <style>${cardStyles()}</style>
  <rect class="background" x="0.5" y="0.5" width="519" height="209" rx="14"/>
  <text class="title" x="28" y="38">Top Languages</text>
  <text class="subtitle" x="28" y="59">Owned non-fork public repositories · by code size</text>
  <clipPath id="language-bar"><rect x="28" y="72" width="464" height="10" rx="5"/></clipPath>
  <g clip-path="url(#language-bar)">${segments}</g>
  ${rows}
</svg>`;
}

const [user, repositories, mergedPullRequests, openedIssues] = await Promise.all([
  fetchJson(`/users/${encodeURIComponent(username)}`),
  fetchOwnedRepositories(),
  fetchSearchCount(`type:pr author:${username} is:merged`),
  fetchSearchCount(`type:issue author:${username}`),
]);
const languageRepositories = repositories.filter(
  (repo) => !repo.fork && !repo.archived && !repo.disabled && repo.size > 0,
);

const languageResults = await Promise.all(
  languageRepositories.map((repo) => fetchJson(`/repos/${repo.full_name}/languages`)),
);

const languages = languageResults.reduce((totals, repositoryLanguages) => {
  for (const [language, bytes] of Object.entries(repositoryLanguages)) {
    totals[language] = (totals[language] || 0) + bytes;
  }
  return totals;
}, {});

await mkdir("assets", { recursive: true });
await Promise.all([
  writeFile(
    "assets/github-overview.svg",
    createOverviewSvg(user, mergedPullRequests, openedIssues),
    "utf8",
  ),
  writeFile("assets/top-languages.svg", createLanguagesSvg(languages), "utf8"),
]);

console.log(`Generated profile statistics for ${username} from ${languageRepositories.length} repositories.`);
