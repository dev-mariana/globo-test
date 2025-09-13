# Globo Test - Video Feedback Platform

A GraphQL-based backend API for managing videos and user feedback, built with Node.js, TypeScript, and MongoDB.

## 🚀 Features

- **Video Management**: Create and fetch videos with metadata
- **Feedback System**: Users can rate and comment on videos
- **GraphQL API**: Modern, type-safe API with Apollo Server
- **MongoDB Integration**: Scalable document-based data storage
- **Docker Support**: Containerized deployment with Docker Compose
- **TypeScript**: Full type safety and modern JavaScript features

## 🏗️ Architecture & Technical Decisions

### Project Structure

```
src/
├── app.ts                          # Express app configuration
├── server.ts                       # Server entry point
├── config/
│   ├── database/mongo/             # MongoDB configuration
│   │   ├── index.ts               # Database connection
│   │   └── schema/                # Mongoose schemas
│   │       ├── feedback.ts
│   │       └── video.ts
│   ├── env/                       # Environment configuration
│   │   └── index.ts
│   ├── graphql/                   # GraphQL configuration
│   │   ├── index.ts              # Apollo Server setup
│   │   ├── schema-loader.ts      # Schema loading
│   │   ├── query.graphql         # Query definitions
│   │   ├── mutation.graphql      # Mutation definitions
│   │   ├── video.graphql         # Video type definitions
│   │   └── feedback.graphql      # Feedback type definitions
│   └── repositories/              # Data access layer
│       ├── feedback.interface.ts
│       ├── feedback.repository.ts
│       ├── videos.interface.ts
│       └── videos.repository.ts
├── dto/                          # Data Transfer Objects
│   ├── create-feedback.dto.ts
│   ├── fetch-videos.dto.ts
│   └── fetch-feedback-by-video-id.dto.ts
├── models/                       # Mongoose models
│   ├── feedback.ts
│   └── video.ts
├── resolvers/                    # GraphQL resolvers
│   ├── create-feedback.resolver.ts
│   └── fetch-videos.resolver.ts
└── services/                     # Business logic layer
    ├── create-feedback.service.ts
    ├── fetch-videos.service.ts
    └── fetch-feedback-by-video-id.service.ts
```

### Architectural Decisions

#### Layered Architecture

- **Why**: Clear separation of concerns for maintainability and testability
- **Implementation**: Three distinct layers - Presentation (resolvers), Business Logic (services), Data Access (repositories)
- **Benefits**: Easy to test individual layers, swap implementations, and scale

#### Schema-First GraphQL Approach

- **Why**: Define API contract first, then implement resolvers
- **Implementation**: Separate `.graphql` files for types, queries, and mutations
- **Benefits**: Self-documenting API, better client-server contract, easier frontend development

#### Repository Pattern

- **Why**: Abstracts data access logic from business logic
- **Implementation**: Interface + implementation for each entity
- **Benefits**: Easy to swap data sources, testable, follows SOLID principles

#### Service Layer Architecture

- **Why**: Encapsulates business logic separately from data access
- **Implementation**: Services orchestrate repositories and transform data using DTOs
- **Benefits**: Reusable business logic, easier unit testing, single responsibility

#### DTO (Data Transfer Object) Pattern

- **Why**: Type-safe data contracts between layers
- **Implementation**: Separate DTOs for requests/responses, transforming DB models to API responses
- **Benefits**: Prevents data leakage, ensures API stability, clear data contracts

### Technology Choices & Reasoning

#### Node.js 22

- **Why**: Latest LTS with improved V8 performance and ES modules support
- **Benefits**: Better memory management, faster startup, modern JavaScript features
- **Decision**: Chosen for performance and ecosystem maturity

#### TypeScript

- **Why**: Type safety and better developer experience
- **Configuration**: Strict mode with path mapping (`~/*` aliases)
- **Benefits**: Catch errors at compile time, better IntelliSense, self-documenting code

#### GraphQL over REST

- **Why**: Single endpoint, type-safe queries, efficient data fetching
- **Implementation**: Apollo Server with schema-first approach
- **Benefits**: Clients request only needed data, reduces over-fetching, built-in documentation

#### MongoDB with Mongoose

- **Why**: Document-based storage fits GraphQL's flexible nature
- **Implementation**: Mongoose ODM for type safety and validation
- **Benefits**: Schema evolution, horizontal scaling, native JSON support

#### Express.js

- **Why**: Minimal, unopinionated framework
- **Benefits**: Lightweight, flexible, large ecosystem
- **Decision**: Simple setup for GraphQL integration

#### Zod for Validation

- **Why**: Runtime type validation and schema parsing
- **Benefits**: Type-safe validation, better error messages, schema inference
- **Decision**: Chosen over Joi for TypeScript integration

#### Biome over ESLint + Prettier

- **Why**: Single tool for linting and formatting
- **Benefits**: Faster execution, simpler configuration, unified rules
- **Decision**: Modern alternative with better performance

#### Docker & Docker Compose

- **Why**: Consistent development and deployment environment
- **Benefits**: Easy setup, reproducible builds, production parity
- **Decision**: Standard containerization approach

## 🛠️ Tech Stack

- **Runtime**: Node.js 22
- **Language**: TypeScript
- **Framework**: Express.js
- **API**: GraphQL with Apollo Server
- **Database**: MongoDB with Mongoose ODM
- **Validation**: Zod
- **Linting**: Biome
- **Containerization**: Docker & Docker Compose

## 📋 Prerequisites

- Node.js 22+
- MongoDB (or Docker)
- npm or yarn

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/dev-mariana/globo-test
cd globo-test
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
NODE_ENV=
MONGODB_URI=
PORT=
```

### 4. Start MongoDB (Docker)

```bash
docker-compose up -d
```

### 5. Run the Application

#### Development Mode

```bash
npm run dev
```

#### Production Mode

```bash
npm run build
npm start
```

The server will start on `http://localhost:8080`

## 📚 API Documentation

### GraphQL Playground

Visit `http://localhost:8080/graphql` to access the GraphQL Playground for interactive API exploration.

### Available Operations

#### Queries

```graphql
# Fetch all videos
query GetVideos {
  videos {
    id
    title
    url
    feedbacks {
      id
    }
  }
}

# Fetch feedback for a specific video
query GetFeedbackByVideo($videoId: ID!) {
  feedbackByVideo(videoId: $videoId) {
    id
    rating
    comment
    user
    video {
      id
    }
  }
}
```

#### Mutations

```graphql
# Create feedback for a video
mutation CreateFeedback($input: FeedbackInput!) {
  createFeedback(input: $input) {
    id
    rating
    comment
    user
    video {
      id
    }
  }
}
```

### Data Types

#### Video

- `id: ID!` - Unique identifier
- `title: String!` - Video title
- `url: String!` - Video URL
- `feedbacks: [Feedback!]` - Associated feedback

#### Feedback

- `id: ID!` - Unique identifier
- `rating: Int!` - Rating (1-5)
- `comment: String!` - User comment
- `user: String!` - Username
- `video: Video!` - Associated video

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run Biome linter

### Code Quality

This project uses Biome for linting and formatting:

```bash
npm run lint
```

## 🔧 Configuration

### Environment Variables

| Variable      | Description               | Default       |
| ------------- | ------------------------- | ------------- |
| `NODE_ENV`    | Environment mode          | `development` |
| `MONGODB_URI` | MongoDB connection string | Required      |
| `PORT`        | Server port               | `3000`        |

### Database Schema

#### Videos Collection

```typescript
{
  _id: ObjectId,
  title: string,
  url: string,
  feedbacks: ObjectId[]
}
```

#### Feedback Collection

```typescript
{
  _id: ObjectId,
  rating: number,
  comment: string,
  user: string,
  video: ObjectId
}
```

## 📝 License

MIT

## 👨‍💻 Author

**Mariana Bastos**

---

## 🚀 Quick Start Example

```bash
# 1. Start the database
docker-compose up -d

# 2. Install dependencies
npm install

# 3. Start the server
npm run dev

# 4. Open GraphQL Playground
open http://localhost:8080/graphql
```

The API will be ready to accept GraphQL queries and mutations!
