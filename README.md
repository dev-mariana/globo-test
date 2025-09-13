# Globo Test - Video Feedback Platform

A GraphQL-based backend API for managing videos and user feedback, built with Node.js, TypeScript, and MongoDB.

## 🚀 Features

- **Video Management**: Create and fetch videos with metadata
- **Feedback System**: Users can rate and comment on videos
- **GraphQL API**: Modern, type-safe API with Apollo Server
- **MongoDB Integration**: Scalable document-based data storage
- **Docker Support**: Containerized deployment with Docker Compose
- **TypeScript**: Full type safety and modern JavaScript features

## 🏗️ Architecture

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

### Design Patterns

- **Repository Pattern**: Clean separation between data access and business logic
- **Service Layer**: Business logic encapsulation
- **DTO Pattern**: Type-safe data transfer between layers
- **Dependency Injection**: Loose coupling between components

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
git clone <repository-url>
cd globo-test
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
NODE_ENV=development
MONGODB_URI=mongodb://root:root123@localhost:27017/feedback-platform?authSource=admin
PORT=8080
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

## 🐳 Docker Deployment

### Using Docker Compose

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Manual Docker Build

```bash
# Build image
docker build -t globo-test .

# Run container
docker run -p 8080:8080 --env-file .env globo-test
```

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
| `PORT`        | Server port               | `8080`        |

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

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mariana Bastos** - [GitHub Profile](https://github.com/mariana-bastos)

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
