# ⚡ ZZRRT

ZZRRT(찌리릿) is a tournament-based matching site integrated with Naver’s streaming platform “Chzzk(치지직)”
to promote real-time interaction between streamers and viewers.
This project allows users to create and participate in tournaments
and enables streamers and viewers to interact and vote through live chat.

## 📝 Project Overview

### Project Goals

- Use Naver’s API to synchronize live chat, voting, and reaction data to enhance streamer-viewer interaction.
- Allow users to create and participate in tournament-style matches.

### Meaning of ZZRRT

- In Korean language, the sound of being electrically shocked is transcribed as '찌리릿'(Jjiririt) -- 'Zap' being the most
  similar onomatopoeia in English.
- I created the name by replacing 'J's with 'Z's to emphasize and omitted redundant
  vowels for a more impactful presentation.

### Key Features

- **Login**: Authentication via Google, Kakao, and Naver.
- **Match Features**:
    - Create, edit, and delete matches.
    - Real-time match voting.
    - Match recommendation (like/dislike) and comments.
- **Ranking**: Display of popular and recent match rankings.

## 🛠️ Tech Stack

- **Frontend**: Next.js, Chakra UI
- **Backend**: Spring Boot
- **Database**: PostgreSQL

## 🏗️ Architecture Design

### System Structure

- **Frontend**: A SPA (Single Page Application) built with Next.js.
- **Backend**: API server built with Spring Boot.
- **Database**: PostgreSQL hosted on Amazon RDS.

## 📋 Feature Details

1. **Login**
    - Social login with Google, Kakao, and Naver for user authentication.
2. **Match Creation/Participation/Deletion**
    - Create tournament matches with a minimum of 8 options (16 participants) and a maximum of 128 options (256
      participants).
    - Real-time voting for viewer participation in matches.
3. **Comments and Recommendations**
    - Users can leave comments on matches and vote to like or dislike them.
4. **Ranking System**
    - Popular and recent matches are displayed based on user activity.

[//]: # (## 📂 Project Structure)

[//]: # ()

[//]: # (```plaintext)

[//]: # (ZZRRT/)

[//]: # (├── backend/)

[//]: # (│   ├── src/)

[//]: # (│   └── Dockerfile.backend)

[//]: # (├── frontend/)

[//]: # (│   ├── pages/)

[//]: # (│   └── Dockerfile.frontend)

[//]: # (└── docker-compose.yml)

[//]: # (```)