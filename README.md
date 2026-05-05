<div align="center">

# 김찬혁입니다 👋

Backend · AI · Full-stack에 관심이 많고,  
아이디어를 실제 서비스, API, 데이터 흐름, 배포까지 연결하는 개발을 좋아합니다.

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-inhadissolve-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/inhadissolve)
[![Email](https://img.shields.io/badge/Email-dissolve1882%40naver.com-03C75A?style=flat-square&logo=naver&logoColor=white)](mailto:dissolve1882@naver.com)

</div>

---

## About Me

- Backend, AI, Full-stack을 함께 경험하며 **기능 구현을 실제 서비스 구조로 연결하는 개발**에 관심이 있습니다.
- FastAPI, Node.js, PostgreSQL, MySQL 등을 활용해 **API 설계, DB 연동, 사용자 기록 관리, 운영형 서비스 구축**을 경험하고 있습니다.
- TimeFit, 인천교회 차량 운영 시스템처럼 실제 사용자의 문제를 서비스 흐름으로 바꾸는 프로젝트를 진행했습니다.
- AI 프로젝트에서는 데이터 전처리, 모델 추론, 실시간 인식, 모델 서빙 구조를 경험했고, 이를 웹서비스와 연결하는 방향으로 확장하고 있습니다.
- 단순히 코드를 작성하는 것보다, **사용자가 실제로 쓰고 운영자가 관리할 수 있는 형태로 완성하는 과정**을 중요하게 생각합니다.

---

## Tech Stack

### Languages & Frameworks
<p>
  <img src="https://skillicons.dev/icons?i=py,java,js,ts,spring,fastapi,react,vite,nodejs&perline=9" />
</p>

### AI / Data
<p>
  <img src="https://skillicons.dev/icons?i=tensorflow,pytorch,opencv,mysql,postgres,sqlite&perline=6" />
</p>

### Infra / Tools
<p>
  <img src="https://skillicons.dev/icons?i=docker,linux,git,github,vercel,postman,vscode&perline=7" />
</p>

### Also Worked With
- REST API 설계 및 서버-클라이언트 연동
- 인증/인가 기반 API 보호
- PostgreSQL / MySQL 기반 데이터 모델링
- Alembic 기반 DB 마이그레이션
- 실시간 추론 파이프라인 구현
- MediaPipe 기반 keypoint 추출
- 데이터 전처리 및 모델 서빙
- 관리자 페이지 및 운영형 서비스 화면 설계

---

## Featured Projects

### 1. [TimeFit]
> 앱 사용 시간 관리 및 학습 집중 서비스

- 사용자의 앱 사용 기록을 저장하고, 일간/주간 사용량 통계와 앱 잠금 규칙을 관리하는 서비스입니다.
- FastAPI와 PostgreSQL 기반으로 사용자 인증, 앱 사용 기록, 공부 세션, 기기 권한 상태 관리 API를 설계했습니다.
- 단순 CRUD를 넘어 날짜별 집계, 제한 시간 초과 여부 판단, 공부 기록 관리 등 실제 서비스 로직을 구현했습니다.
- 모바일 앱과 연동 가능한 백엔드 구조를 고민하며 API 명세와 데이터 흐름을 정리했습니다.

**Tech Stack**  
`FastAPI` `PostgreSQL` `SQLAlchemy` `Alembic` `Docker` `GitHub` `DataGrip`

---

### 2. [Incheon Church Vehicle Management System](https://incheon-church-vehicle-log.vercel.app/)
> 인천교회 주차부·차량 운영 관리 웹서비스

- 교회 차량의 운행 기록, 주차 위치, 최근 운행 내역을 관리하기 위한 운영형 웹서비스입니다.
- 실제 현장에서 빠르게 입력할 수 있도록 모바일 중심 UI와 단계형 입력 흐름을 설계했습니다.
- 차량번호, 차량명, 출발/도착 km, 운행거리, 주차 위치 등을 한눈에 확인할 수 있도록 화면을 구성했습니다.
- 단순 홍보용 페이지가 아니라, 실제 운영 문제를 웹서비스로 구조화한 프로젝트입니다.

**Tech Stack**  
`Next.js` `TypeScript` `React` `TailwindCSS` `GitHub`

---

### 3. [RealGain](https://github.com/inhadissolve/Real_Gain)
> 산업 데이터 기반 이상탐지 AI 프로젝트

- 진동 및 orbit 데이터를 바탕으로 정상/비정상 상태를 분류하는 AI 시스템을 설계한 프로젝트입니다.
- 데이터 전처리, 모델 학습, abnormal 확률 출력, Grad-CAM 기반 시각화 흐름을 경험했습니다.
- 백엔드와 연동하기 좋은 형태로 모델 추론 구조를 정리하며, AI 결과를 서비스에 연결하는 방식을 고민했습니다.
- 탄소중립 Innovation Academy 5기 기업 연계 프로젝트에서 최우수상을 수상했습니다.

**Tech Stack**  
`Python` `TensorFlow/Keras` `Pandas` `FastAPI` `Grad-CAM`

---

### 4. [Sudam](https://github.com/inhadissolve/Sudam)
> 실시간 양방향 수어 인식·번역 서비스

- MediaPipe 기반 keypoint 추출과 AI 모델을 활용해 수어를 인식하는 프로젝트입니다.
- 정적 수어와 동적 수어 데이터를 함께 다루며 데이터 수집, 전처리, 모델 학습, 실시간 추론 흐름을 경험했습니다.
- 실시간 예측 환경에서 padding, confidence threshold, sliding window 방식을 적용해 안정성을 개선했습니다.
- 팀장으로서 AI 파트와 서비스화 방향을 함께 조율했습니다.

**Tech Stack**  
`Python` `TensorFlow/Keras` `MediaPipe` `OpenCV` `FastAPI` `NumPy`

---

### 5. [Samuel School](https://github.com/inhadissolve/REPO_NAME)

웹사이트: (https://samuel-school.vercel.app/)
> 학습과 복습을 연결하는 웹서비스

- 성경 암송 학습을 퀴즈, 오답노트, 복습 흐름으로 반복할 수 있도록 만든 웹서비스입니다.
- 프론트엔드와 백엔드가 분리된 구조에서 학습 기록, 퀴즈 생성, 랭킹, 복습 기능을 구현했습니다.
- 학습자가 꾸준히 반복 학습할 수 있도록 사용자 경험과 운영 흐름을 함께 고려했습니다.
- AI 기능을 학습 서비스에 자연스럽게 연결하는 경험을 쌓았습니다.

**Tech Stack**  
`React` `Vite` `TypeScript` `FastAPI` `PostgreSQL` `OpenAI API` `Vercel`

---

### 6. [Issue One](https://github.com/inhadissolve/ISSUE_ONE)
> 이슈 탐색 및 요약 중심 서비스 프로젝트

- 사용자가 핵심 이슈를 더 빠르게 파악할 수 있도록 정보를 정리하고 제공하는 프로젝트입니다.
- 검색, 요약, 데이터 가공, 사용자 중심 정보 구조 설계에 관심을 두고 개발했습니다.
- 단순 정보 나열보다 핵심 내용을 빠르게 이해할 수 있는 서비스 흐름을 고민했습니다.
- AI 요약과 백엔드 API를 연결해 정보 탐색 경험을 개선하는 방향으로 설계했습니다.

**Tech Stack**  
`Python` `FastAPI` `SQLite` `OpenAI API` `Pandas`

---

## Awards & Activities

| Type | Description |
|---|---|
| Award | 2025 탄소중립 Innovation Academy 5기 최우수상 |
| Award | 2025 KSEB 미니프로젝트 대상 |
| Award | 2025 KSEB 팀 프로젝트 우수상 |
| Award | 2025 오픈소스 SW 페스티벌 최우수상 |
| Activity | UMC 10th Backend 파트 활동 |
| Activity | AI/ML 스터디 및 워크숍 참여 |

---

<!-- GitHub Stats는 외부 API 상태에 따라 표시되지 않을 수 있어 주석 처리 -->
<!--
## GitHub Stats

<p>
  <img height="160em" src="https://github-readme-stats.vercel.app/api?username=inhadissolve&show_icons=true&theme=transparent&cache_seconds=86400" />
  <img height="160em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=inhadissolve&layout=compact&theme=transparent&langs_count=8&cache_seconds=86400" />
</p>
-->

## Development Focus

- Backend API 설계와 DB 연동
- 사용자 기록 기반 서비스 로직 구현
- AI 모델 결과를 실제 서비스와 연결
- 운영자가 관리할 수 있는 웹서비스 구조 설계
- GitHub README 기반 프로젝트 문서화

## Interests

- Backend Architecture
- REST API Design
- Database Modeling
- AI Model Serving
- Real-time Inference Systems
- Data Processing Pipelines
- Full-stack Service Development
- Operation-focused Web Services

---

## Contact

- GitHub: [inhadissolve](https://github.com/inhadissolve)
- Email: [dissolve1882@naver.com](mailto:dissolve1882@naver.com)
