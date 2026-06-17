<div align="center">

# 김찬혁입니다 👋

Backend · AI · Full-stack에 관심이 많고,  
아이디어를 실제 서비스, API, 데이터 흐름, 배포까지 연결하는 개발을 좋아합니다.

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-inhadissolve-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/inhadissolve)
[![Email](https://img.shields.io/badge/Email-dissolve1882%40naver.com-03C75A?style=flat-square&logo=naver&logoColor=white)](mailto:dissolve1882@naver.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-Notion-000000?style=flat-square&logo=notion&logoColor=white)](https://www.notion.so/UMC-10th-0f72a03e23d9832d8dc381d08168d0c7)

</div>

---

## About Me

- 인하대학교 전기전자공학부 재학 중이며, Backend · AI · Full-stack 개발에 관심이 많습니다.
- FastAPI, Node.js, PostgreSQL 등을 활용해 **API 설계, DB 연동, 사용자 기록 관리, 운영형 서비스 구축**을 경험하고 있습니다.
- AI 프로젝트에서는 데이터 전처리, 모델 학습, 실시간 추론, 모델 서빙 구조를 경험했고, 이를 실제 웹서비스와 연결하는 방향으로 확장하고 있습니다.
- 단순히 기능을 구현하는 것보다, **사용자가 실제로 쓰고 운영자가 관리할 수 있는 형태로 완성하는 과정**을 중요하게 생각합니다.
- KSEB 부트캠프 4기 수료 · 우수 교육생 선정 (8명 중), UMC 10th Backend(Node.js) 파트 챌린저로 활동 중입니다.

---

## Tech Stack

### Languages & Frameworks
<p>
  <img src="https://skillicons.dev/icons?i=py,js,ts,fastapi,react,nextjs,nodejs&perline=9" />
</p>

### AI / Data
<p>
  <img src="https://skillicons.dev/icons?i=tensorflow,pytorch,opencv&perline=9" />
</p>

### Database / Infra / Tools
<p>
  <img src="https://skillicons.dev/icons?i=postgres,sqlite,docker,firebase,git,github,vercel&perline=9" />
</p>

### Also Worked With
- REST API 설계 및 서버-클라이언트 연동
- JWT 기반 인증/인가 및 API 보호
- PostgreSQL / SQLite 기반 데이터 모델링
- Alembic 기반 DB 마이그레이션
- Supabase Storage 기반 이미지 파이프라인
- MediaPipe 기반 keypoint 추출
- 실시간 추론 파이프라인 구현 (sliding window · confidence threshold)
- Firebase Firestore 실시간 구독 및 FCM 알림 자동화
- 관리자 페이지 및 운영형 서비스 화면 설계

---

## Awards & Activities

| 기간 | 구분 | 내용 |
|---|---|---|
| 2026.03 ~ | Activity | UMC 10th Backend(Node.js) 파트 챌린저 |
| 2025.01 ~ 2025.11 | Activity | KSEB 부트캠프 4기 수료 · **우수 교육생 선정 (8명 중)** |
| 2025.09 ~ 2025.12 | 🏆 Award | 탄소중립 Innovation Academy 5기 기업 연계 프로젝트 **대상** |
| 2025.07 ~ 2025.09 | 🥇 Award | 오픈소스 SW 페스티벌 **최우수상** (인하대학교 총장상) |
| 2025.07 ~ 2025.09 | 🥉 Award | KSEB 팀 프로젝트 **우수상** |
| 2025.03 ~ 2025.06 | 🥇 Award | KSEB 미니프로젝트 **대상** (1위) |

---

## Featured Projects

### 1. [FocusLink](https://github.com/inhadissolve)
> 공부 집중 관리 Android 앱 — 1인 풀스택

- 실제 앱 사용 기록을 수집하고 집중 세션을 시작·종료·회고할 수 있는 Android 앱입니다.
- FastAPI + PostgreSQL 백엔드와 Jetpack Compose 기반 Android 앱으로 구성된 1인 풀스택 프로젝트입니다.
- UsageStatsManager로 실제 앱 사용량을 수집하고, batch 업로드 idempotent 처리(append → upsert)로 중복 데이터를 방지했습니다.
- Git feature 브랜치 전략과 Codex를 활용해 기능 단위로 개발을 진행했습니다.

**Tech Stack**  
`FastAPI` `PostgreSQL` `SQLAlchemy` `Alembic` `Docker` `Jetpack Compose` `Android`

---

### 2. [수담(手談)](https://github.com/KSEB-MEGA-CREW)
> 실시간 양방향 수어 인식·번역 서비스

- 청각장애인과 비장애인의 의사소통 장벽을 줄이기 위한 실시간 수어 인식·번역 서비스입니다.
- 팀장으로서 AI 파이프라인(keypoint 추출 → 모델 학습 → 실시간 추론 → FastAPI 서버 → 프론트 연동) 전반을 담당했습니다.
- sliding window · none 라벨 · confidence threshold로 실시간 예측을 안정화했습니다.
- AI · Frontend · Backend · DevOps · Unity · 발표 6개 파트 간 일정 조율 및 MVP 범위를 조정했습니다.

**Tech Stack**  
`Python` `TensorFlow/Keras` `MediaPipe` `OpenCV` `FastAPI` `NumPy` `Docker`

🏅 KSEB 팀 프로젝트 우수상 · 오픈소스 SW 페스티벌 최우수상 (인하대학교 총장상)

---

### 3. [RealGain](https://github.com/inhadissolve/Real_Gain)
> 산업 데이터 기반 이상탐지 AI

- 산업 설비의 진동·Orbit 데이터를 활용해 정상/비정상 상태를 분류하는 이상탐지 AI 프로젝트입니다.
- BIN → Orbit 이미지 변환 파이프라인을 구성하고, ResNet18 기반 분류 모델을 학습했습니다.
- Precision · Recall · F1 · Confusion Matrix 기반 평가 코드를 개선하고, Grad-CAM으로 모델 판단 근거를 시각화했습니다.
- 백엔드 연동을 위해 `--bin_path` CLI 추론, `--json` 옵션 출력, README 문서화까지 서비스 가능한 추론 모듈 형태로 정리했습니다.

**Tech Stack**  
`Python` `TensorFlow/Keras` `Pandas` `FastAPI` `Grad-CAM` `Google Colab`

🏆 탄소중립 Innovation Academy 5기 기업 연계 프로젝트 대상

---

### 4. [아노익시 — GreenBrain](https://github.com/GreenBrain-Inha/BE_GreenBrain)
> AI 기반 탄소중립 실천 웹서비스

- 사용자의 온보딩 정보를 기반으로 맞춤형 챌린지를 생성하고, 인증 사진 업로드 · 피드 공유 · 좋아요 · 토큰 보상으로 이어지는 실천형 서비스입니다.
- FastAPI + PostgreSQL + Supabase Storage 기반 백엔드를 담당했습니다.
- 좋아요 milestone 보상 중복 지급을 `token_transactions` 이력 기반 idempotent 구조로 방지했습니다.
- Router-Service-Schema 구조로 책임을 분리하고, `ChallengeService` · `ChallengePhotoService`로 도메인을 분리했습니다.

**Tech Stack**  
`Python` `FastAPI` `PostgreSQL` `SQLAlchemy` `Alembic` `Supabase` `Docker` `pytest`

---

### 5. [IssueOne](https://github.com/inhadissolve/ISSUE_ONE)
> AI 개인 맞춤 뉴스 요약 서비스

- RSS · 웹 크롤링으로 기사를 수집하고, 본문 정제 후 KoBART · 외부 API로 요약하는 서비스입니다.
- 수집 → 정제 → 저장 → 요약 → 응답 전체 파이프라인을 FastAPI + SQLite 기반으로 구현했습니다.
- 단일 기사 요약(`/summarize`)과 다수 기사 concat 후 재요약하는 결론 요약(`/conclude`) 엔드포인트를 분리했습니다.
- 배포 환경 메모리 제약으로 KoBART 로컬 추론에서 Hugging Face Inference API · OpenAI API 외부 연계 구조로 전환했습니다.

**Tech Stack**  
`Python` `FastAPI` `SQLite` `HuggingFace API` `OpenAI API` `Pandas` `BeautifulSoup`

🥇 KSEB 미니프로젝트 대상 (1위)

---

### 6. [인천교회 농선부 통합 관리 웹서비스](https://github.com/inhadissolve)
> 청각장애인 선교부 운영 통합 관리 — 1인 개발 · 실제 운영 중

- 출석 관리 · 수어교실 · 좌석 배치 · 당번 관리를 하나의 플랫폼으로 통합한 실사용 웹서비스입니다.
- Firestore `onSnapshot` 실시간 구독, Firebase Functions 기반 FCM 당번 알림 자동화(전날 · 당일 · 미완료 재알림 3단계)를 구현했습니다.
- MASTER/GENERAL 2단계 권한, 탭·출석 종류별 세분화 권한 시스템을 직접 설계했습니다.
- ExcelJS 기반 출석 데이터 내보내기, recharts 기반 통계 대시보드를 구현했습니다.

**Tech Stack**  
`TypeScript` `React` `TailwindCSS` `Firebase` `Firestore` `ExcelJS`

---

### 7. [꿀단지 레이스](https://github.com/inhadissolve)
> 성경읽기 대항전 실시간 레이스 게임 — 3인 팀 (개발 1 · 디자이너 1 · 기획자 1) · 실제 운영 중

- 5개 연합팀 점수에 따라 꿀벌 5마리가 레이스 트랙을 달리는 대형 스크린 실시간 디스플레이 서비스입니다.
- 300vw 슬라이드 레이아웃으로 대기 · 레이스 · 시상식 3스테이지를 구성하고, Framer Motion으로 전환했습니다.
- Firestore 실시간 구독으로 관리자 상태 변경이 즉시 레이스 화면에 반영됩니다.

**Tech Stack**  
`JavaScript` `React` `TailwindCSS` `Framer Motion` `Firebase` `Firestore`

---

### 8. [CueKit](https://github.com/inhadissolve)
> AI 기반 인터랙티브 퀴즈·활동 제작 플랫폼 — 개인 SaaS MVP 개발 중

- 교사와 행사 진행자가 AI로 퀴즈를 생성하고, QR 기반 라이브 룸을 열어 참가자와 함께 진행하는 SaaS 플랫폼입니다.
- WBS · ERD · API 계약서 · room state machine · 화면 인벤토리를 먼저 정리한 뒤 구현을 진행했습니다.
- Codex(DB · API · 검증 · PR 리뷰)와 Claude Code(UI · 시각 QA)로 역할을 분리하여 1인 AI 협업 체계를 구축했습니다.

**Tech Stack**  
`TypeScript` `Next.js` `React` `TailwindCSS` `shadcn/ui` `Supabase`

---

## GitHub Stats

<p align="center">
  <img height="160em" src="https://github-readme-stats.vercel.app/api?username=inhadissolve&show_icons=true&theme=transparent&hide_border=true&count_private=true&include_all_commits=true" />
  <img height="160em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=inhadissolve&layout=compact&theme=transparent&hide_border=true&langs_count=8" />
</p>

---

## Development Focus

- Backend API 설계와 DB 연동
- 사용자 기록 기반 서비스 로직 구현
- AI 모델 결과를 실제 서비스와 연결
- 운영자가 관리할 수 있는 웹서비스 구조 설계
- 실시간 데이터 처리 및 이벤트 기반 서비스 개발

---

## Contact

- GitHub: [inhadissolve](https://github.com/inhadissolve)
- Email: [dissolve1882@naver.com](mailto:dissolve1882@naver.com)
- Portfolio: [Notion](https://www.notion.so/UMC-10th-0f72a03e23d9832d8dc381d08168d0c7)
