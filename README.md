# Car API

This Car API is a basic Node.js application built with TypeScript and Fastify to manage car records. It demonstrates foundational knowledge of Node.js, Fastify, TypeScript, and Prisma for database interactions, using a PostgreSQL database running in Docker.

## Features

- **Create a Car:** Add a new car with details like make, model, year, and price.
- **Retrieve Cars:** Get a list of all cars or retrieve a specific car by its ID.
- **Update a Car:** Update the information of an existing car.
- **Delete a Car:** Remove a car from the collection.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Fastify**: Fast and low-overhead web framework for Node.js.
- **Prisma**: Next-generation ORM for Node.js and TypeScript.
- **Zod**: TypeScript-first schema declaration and validation library.
- **PostgreSQL**: Open-source relational database system.
- **Docker Compose**: Tool for defining and running multi-container Docker applications.

## Project Setup

Follow these steps to set up the project locally:

1. **Initialize the Node.js project:**
    ```bash
    npm init -y
    ```

2. **Install TypeScript and related tools:**
    ```bash
    npm install -D typescript @types/node tsx tsup
    ```

3. **Initialize TypeScript configuration:**
    ```bash
    npx tsc --init
    ```
    - Edit the `tsconfig.json` file to set the `target` to `ES2020`.

4. **Install Fastify:**
    ```bash
    npm install fastify
    ```

5. **Install Prisma:**
    ```bash
    npm install -D prisma
    npm install @prisma/client
    ```

6. **Initialize Prisma:**
    ```bash
    npx prisma init
    ```
    - Configure your `prisma/schema.prisma` file to use PostgreSQL as the database provider.

7. **Install Zod for validation:**
    ```bash
    npm install zod
    ```

8. **Set up PostgreSQL with Docker Compose:**
    - Create a `docker-compose.yml` file in the root of your project:
      ```yaml
      version: '3.8'
        services:
            db:
            image: postgres:latest
            restart: always
            environment:
                - POSTGRES_USER=postgres
                - POSTGRES_PASSWORD=postgres
            ports:
                - '5432:5432'
            volumes: 
                - db:/var/lib/postgresql/data
        volumes:
            db:
            driver: local
      ```
    - Start the Docker container:
      ```bash
      docker-compose up -d
      ```

## Running the Project

1. **Apply Prisma Migrations:**
    ```bash
    npx prisma migrate dev
    ```
    - This will apply the migrations and create the necessary database schema.

2. **Compile TypeScript:**
    ```bash
    npm run build
    ```
    - This will compile TypeScript files into JavaScript.

3. **Start the server:**
    ```bash
    npm run dev
    ```
    - The server will run on `http://localhost:3333` if no port is mentioned on the .env file.