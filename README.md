# 🎬 MoviesAPI

A RESTful API built with **Node.js, Express, Prisma ORM, and PostgreSQL** for managing movie-related data. The project provides a foundation for building applications that store, retrieve, and manage movie information through HTTP endpoints.

🚧 Project Status: In Progress
MoviesAPI is still under active development. New features, improvements, and bug fixes are being worked on, so some functionality may change as the project evolves.


[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge\&logo=prisma\&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge\&logo=postgresql\&logoColor=white)](https://www.postgresql.org/)

## 📋 Table of Contents

* [Overview](#-overview)
* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [Project Structure](#-project-structure)
* [Getting Started](#-getting-started)
* [Environment Variables](#-environment-variables)
* [Database Setup](#-database-setup)
* [Running the Application](#-running-the-application)
* [API Usage](#-api-usage)
* [Error Handling](#-error-handling)
* [Contributing](#-contributing)
* [License](#-license)

## 🚀 Overview

MoviesAPI is a backend project designed to provide a structured way to manage movie data. It uses Express to handle HTTP requests and Prisma ORM to interact with a relational database.

The project is suitable for learning backend development, database integration, REST API design, and server-side JavaScript using modern ES modules.

## ✨ Features

* **REST API architecture** — Build HTTP endpoints for movie-related resources.
* **Express.js server** — Handle incoming requests and API responses.
* **Prisma ORM** — Define data models and interact with the database.
* **PostgreSQL integration** — Store structured application data.
* **Environment configuration** — Keep database connection details outside application code.
* **JavaScript ES modules** — Use modern `import` and `export` syntax.
* **Development workflow** — Use Nodemon to restart the server during development.

> Note: Specific movie operations, authentication, search, pagination, and filtering should be documented as available once their implementation is confirmed in the source code.

## 🛠️ Tech Stack

| Technology                    | Purpose                               |
| ----------------------------- | ------------------------------------- |
| Node.js                       | JavaScript runtime                    |
| Express.js 5                  | HTTP server and routing               |
| Prisma ORM                    | Database access and schema management |
| PostgreSQL                    | Relational database                   |
| JavaScript (ES modules)       | Application development               |
| Nodemon                       | Development server restarts           |
| dotenv / Prisma configuration | Environment variable loading          |

## 📁 Project Structure

The main repository structure is organized as follows:

```text
moviesapi/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   └── server.js
├── .gitignore
├── package.json
├── package-lock.json
├── prisma.config.ts
└── README.md
```

**Directory overview**

* `src/` — Application source code and server entry point.
* `prisma/` — Database schema and migration files.
* `prisma/schema.prisma` — Defines the database models and relationships.
* `prisma.config.ts` — Configures Prisma schema, migrations, and database connection settings.
* `package.json` — Project dependencies and npm scripts.
* `.gitignore` — Files and directories excluded from version control.

## ⚙️ Getting Started

### Prerequisites

Install the following before running the project:

* [Node.js](https://nodejs.org/) — a version compatible with your dependencies.
* npm — included with Node.js.
* A PostgreSQL database, either local or hosted.
* A database connection URL.

### 1. Clone the repository

```bash
git clone https://github.com/Ibrahist/moviesapi.git
```

Navigate into the project directory:

```bash
cd moviesapi
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?sslmode=require"
```

Replace the example values with your actual PostgreSQL credentials.

For a local database, use the appropriate local host, port, database name, and credentials. For a hosted database such as Neon, use the connection URL provided by your database provider.

**Important:** Never commit your `.env` file or expose database credentials in public repositories.

## 🗄️ Database Setup

MoviesAPI uses Prisma to manage its database schema.

### Generate the Prisma client

```bash
npx prisma generate
```

### Apply database migrations

If the project contains Prisma migrations, apply them with:

```bash
npx prisma migrate deploy
```

During local development, if you are creating and managing migrations, use:

```bash
npx prisma migrate dev --name init
```

Use the development migration command only when appropriate for your environment and schema.

### Inspect the database

To open Prisma Studio:

```bash
npx prisma studio
```

Prisma Studio provides a graphical interface for viewing and managing database records.

## ▶️ Running the Application

### Development mode

Start the server with Nodemon:

```bash
npm run dev
```

### Production mode

Start the application using Node.js:

```bash
npm start
```

The server's address and port depend on the configuration in `src/server.js`. Once the server starts, use the configured local URL to send API requests.

For example, if the server is configured to use port `3000`:

```text
http://localhost:3000
```

## 🌐 API Usage

The API endpoints depend on the routes implemented in the project. The examples below illustrate a possible RESTful interface; make sure the paths and request fields match your actual implementation.

### Example endpoint design

| Method | Example endpoint  | Purpose                |
| ------ | ----------------- | ---------------------- |
| GET    | `/api/movies`     | Retrieve movie records |
| GET    | `/api/movies/:id` | Retrieve one movie     |
| POST   | `/api/movies`     | Create a movie         |
| PATCH  | `/api/movies/:id` | Update a movie         |
| DELETE | `/api/movies/:id` | Delete a movie         |

### Example request: Retrieve movies

```bash
curl http://localhost:3000/api/movies
```

### Example request: Create a movie

The following payload is illustrative. Adapt the fields to your Prisma model and Express validation rules.

```bash
curl -X POST http://localhost:3000/api/movies \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Interstellar",
    "genre": "Science Fiction",
    "releaseYear": 2014
  }'
```

### Example response

A successful request might return a JSON object similar to:

```json
{
  "id": 1,
  "title": "Interstellar",
  "genre": "Science Fiction",
  "releaseYear": 2014
}
```

The actual response structure depends on the implemented model and route handlers.

## 🧪 Testing

The current `package.json` contains a placeholder test script rather than a configured automated test suite.

To run the existing script:

```bash
npm test
```

To add automated tests, consider using a testing framework such as Jest or Vitest and testing route behavior, request validation, database operations, and error responses.

## 🛡️ Error Handling

For a robust API, consider returning consistent HTTP status codes:

| Status code                 | Meaning                           |
| --------------------------- | --------------------------------- |
| `200 OK`                    | Request completed successfully    |
| `201 Created`               | Resource created successfully     |
| `400 Bad Request`           | Invalid request data              |
| `404 Not Found`             | Requested resource does not exist |
| `500 Internal Server Error` | Unexpected server error           |

Avoid returning database credentials, environment variables, or detailed internal stack traces in production responses.

## 🔒 Security Best Practices

* Store secrets and database credentials in environment variables.
* Validate and sanitize incoming request data.
* Use parameterized database operations through Prisma.
* Handle errors without exposing internal implementation details.
* Configure CORS according to the application's requirements.
* Use HTTPS in production.
* Keep dependencies updated and review security advisories.

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork the repository.

2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your feature"
   ```

4. Push your branch:

   ```bash
   git push origin feature/your-feature
   ```

5. Open a pull request describing your changes.

## 📄 License

The repository currently declares the **ISC License** in `package.json`. Refer to the project's license file, if present, for the applicable terms.

## 👨‍💻 Author

**Ibrahist**

* GitHub: [@Ibrahist](https://github.com/Ibrahist)
* Repository: [MoviesAPI](https://github.com/Ibrahist/moviesapi)

---

⭐ If you find this project useful, consider starring the repository and contributing improvements.
