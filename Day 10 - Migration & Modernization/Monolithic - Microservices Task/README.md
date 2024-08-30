# Expense Tracker Application

## Overview

This project involves creating a 3-tier monolithic application for tracking expenses and categories, and then migrating that application to a microservices architecture. The monolithic application includes a frontend, backend, and database all tightly coupled. The microservices architecture splits these components into separate services, enhancing scalability, maintainability, and deployment flexibility.

## Table of Contents

- [Expense Tracker Application](#expense-tracker-application)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Monolithic Application](#monolithic-application)
    - [Architecture](#architecture)
    - [Setup Instructions](#setup-instructions)
    - [Running the Application](#running-the-application)
  - [Migrating to Microservices](#migrating-to-microservices)
    - [Microservices Architecture](#microservices-architecture)
    - [Microservices Setup Instructions](#microservices-setup-instructions)
    - [Running the Microservices Application](#running-the-microservices-application)
  - [Additional Information](#additional-information)
    - [Environment Variables](#environment-variables)
    - [Docker Configuration](#docker-configuration)
    - [API Endpoints](#api-endpoints)

---

## Monolithic Application

### Architecture

The monolithic application is a traditional 3-tier architecture where the frontend, backend, and database are tightly coupled into a single codebase.

- **Frontend**: Built with React, providing a user interface for managing categories and expenses.
- **Backend**: Built with Node.js and Express, handling API requests and business logic.
- **Database**: MongoDB is used for data storage, managed directly by the backend.

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker
   ```

2. **Install Dependencies**:
   - Install backend dependencies:
     ```bash
     cd backend
     yarn install
     ```
   - Install frontend dependencies:
     ```bash
     cd frontend
     yarn install
     ```

3. **Environment Variables**:
   - Create a `.env` file in the `backend/` directory with the following variables:
     ```env
     MONGO_URI=mongodb://localhost:27017/expense-tracker
     PORT=5000
     NODE_ENV=development
     ```

4. **Running MongoDB**:
   - Ensure MongoDB is running locally on port 27017.

### Running the Application

1. **Run the Backend**:
   ```bash
   cd backend
   npm start
   ```

2. **Run the Frontend**:
   ```bash
   cd frontend
   npm start
   ```

3. **Access the Application**:
   - Open your browser and go to `http://localhost:3000`.

---

## Migrating to Microservices

### Microservices Architecture

The microservices version splits the monolithic application into distinct services:

- **Frontend Service**: A public-facing service built with React, served by Nginx.
- **Category Service**: A private backend service handling category-related operations, built with Node.js and Express.
- **Expense Service**: A private backend service managing expenses, also built with Node.js and Express.
- **Database**: A MongoDB instance running in a private Docker container, shared by the backend services.

### Microservices Setup Instructions

1. **Folder Structure**:
   - Create separate directories for each service:
     ```
     expense-tracker/
     ├── category-service/
     ├── expense-service/
     ├── frontend/
     └── docker-compose.yml
     ```

2. **Dockerize Each Service**:
   - Create Dockerfiles for each service:
     - `category-service/Dockerfile`
     - `expense-service/Dockerfile`
     - `frontend/Dockerfile`

3. **Environment Variables**:
   - Each service should have its own `.env` file:
     - `category-service/.env`
     - `expense-service/.env`
     - `frontend/.env`

4. **Docker Compose Setup**:
   - Use `docker-compose.yml` to define your services and network configurations. The database and backend services should be private, only accessible within the Docker network.

### Running the Microservices Application

1. **Build and Start the Services**:
   - Ensure you are in the root directory where `docker-compose.yml` is located.
   - Run the following command to build the images and start the containers:
     ```bash
     docker-compose up --build
     ```

   - **Explanation of the Command**:
     - `docker-compose up`: This command creates and starts the containers.
     - `--build`: This flag forces a rebuild of the images before starting the containers. Use this if you’ve made changes to your Dockerfiles or code.

2. **Verify Services are Running**:
   - After running `docker-compose up`, you should see logs from the various services indicating that they have started successfully.
   - You can verify the running containers with:
     ```bash
     docker ps
     ```

3. **Access the Application**:
   - Open your browser and go to `http://localhost:3000` to access the frontend.
   - The backend services (`category-service` and `expense-service`) are running on `http://localhost:5001` and `http://localhost:5002` respectively, but they are private and only accessible within the Docker network.

4. **Shutting Down the Services**:
   - To stop the containers, run:
     ```bash
     docker-compose down
     ```
   - This will stop and remove the containers, networks, and volumes created by `docker-compose up`.

---

## Additional Information

### Environment Variables

- **Category Service**:
  ```env
  MONGO_URI=mongodb://mongo:27017/category-db
  PORT=5001
  ```

- **Expense Service**:
  ```env
  MONGO_URI=mongodb://mongo:27017/expense-db
  PORT=5002
  ```

- **Frontend**:
  ```env
  VITE_API_URL=http://localhost:5001
  ```

### Docker Configuration

- **Docker Compose**:
  The `docker-compose.yml` file is used to manage and orchestrate the different services, ensuring they can communicate within a private network.

### API Endpoints

- **Category Service**:
  - `GET /api/categories`
  - `POST /api/categories`

- **Expense Service**:
  - `GET /api/expenses`
  - `POST /api/expenses`
