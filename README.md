# 📚 Backend Library API – DevOps Project

## Project Description

This project implements a **backend REST API for managing a library of books**, developed as part of a **Backend and DevOps learning project**.

The API provides endpoints to manage and retrieve information about **books and authors**.

In addition to backend development, the project demonstrates **DevOps practices**, including:

- Version control
- Continuous Integration (CI)
- Infrastructure as Code (IaC)
- Automated cloud deployment

The source code is hosted on **GitHub**, and the infrastructure is automatically provisioned on **AWS** using **Terraform**.

---

# Architecture Overview

The project follows this workflow:

1. Code is stored in **GitHub**
2. **GitHub Actions** runs the CI pipeline
3. **Terraform** provisions infrastructure in **AWS**
4. The backend application runs on an **EC2 instance**

---

# Tech Stack

- Node.js  
- Express  
- Git  
- GitHub  
- GitHub Actions  
- Terraform  
- AWS EC2  
- AWS Security Groups  

---

# Branch Strategy

The project uses two main branches.

## develop
Used for:
- development
- new features
- integration testing

## main
Contains:
- stable code
- production-ready versions

All changes should go through **Pull Requests** before being merged.

---

# Continuous Integration (CI)

The project uses **GitHub Actions** to implement Continuous Integration.

The CI pipeline runs automatically when:

- a commit is pushed
- a Pull Request is opened or updated

## Pipeline Steps

1. Checkout repository  
2. Install dependencies  
3. Run automated tests  
4. Validate results  

If any test fails, the pipeline fails and prevents the code from being merged.

Benefits:

- early bug detection  
- prevention of regressions  
- higher code stability  

---

# Infrastructure (Terraform)

The infrastructure is provisioned using **Terraform**, following the **Infrastructure as Code (IaC)** approach.

Resources are created in **AWS**.

## Infrastructure Components

### EC2 Instance

An **EC2 instance** runs the backend application.

During instance initialization, an automated script performs:

- system update
- Node.js installation
- Git installation
- repository cloning
- dependency installation
- application build
- server startup

### Security Group

The **Security Group** controls access to the EC2 instance.

Open ports:

| Port | Description |
|-----|-------------|
| 22 | SSH access |
| 3000 | Backend API |

---

# Prerequisites

Before running the project, install:

- Git
- Node.js
- Terraform
- AWS CLI

You must also have access to:

- an **AWS account**
- or **AWS Academy**

---

# AWS Credentials Configuration

For security reasons, **AWS credentials are NOT stored in the repository**.

Credentials must be configured locally.

Example:

```bash
aws configure
```

Or using environment variables:

```bash
export AWS_ACCESS_KEY_ID=<ACCESS_KEY>
export AWS_SECRET_ACCESS_KEY=<SECRET_KEY>
export AWS_SESSION_TOKEN=<SESSION_TOKEN>
```

---

# How to Deploy the Infrastructure

Clone the repository:

```bash
git clone <REPOSITORY_URL>
```

Navigate to the Terraform folder:

```bash
cd terraform
```

Initialize Terraform:

```bash
terraform init
```

Preview infrastructure changes:

```bash
terraform plan
```

Apply the infrastructure:

```bash
terraform apply
```

Terraform will automatically create:

- EC2 instance
- Security Group
- environment required to run the application

---

# Accessing the API

After deployment, Terraform will output the **public IP** of the EC2 instance.

Example:

```
public_ip = 3.80.32.160
```

You can access the API using:

```
http://<PUBLIC_IP>:3000/library/books
```

Example:

```
http://3.80.32.160:3000/library/books
```

---

# Running the Application Locally

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

Access the API:

```
http://localhost:3000/library/books
```

Start application via docker:
1- Build the project via docker
```
docker build -t backend-class .
```
2- Run application on port 3000
```
docker run -p 3000:3000 backend-class
```

Observability
```
docker logs <container_id>
```

---

# Base URL

Local environment:
Or you can change manually on 

```
http://localhost:3000
```

Cloud environment (AWS EC2):

```
http://<PUBLIC_IP>:3000
```

---

# API Endpoints

## Get Libraries

Returns registered libraries.

```
GET /librarys
```

Example:

```
GET http://localhost:3000/librarys
```

---

## Get All Books

Returns all books.

```
GET /library/books
```

Example:

```
GET http://localhost:3000/library/books
```

---

## Create a Book

Adds a new book.

```
POST /library/book
```

Example:

```
POST http://localhost:3000/library/book
```

### Request Body

```json
{
  "titulo": "Backend Class",
  "autor": "Guilherme Martins"
}
```

| Field | Type | Description |
|------|------|-------------|
| titulo | string | book title |
| autor | string | author name |

---

## Get Books by Author

Returns books written by a specific author.

```
GET /library/bookAuthor
```

Query parameter:

```
autor=<author_name>
```

Example:

```
GET http://localhost:3000/library/bookAuthor?autor=Huguinho%20Pato
```

---

## Get Authors

Returns all authors.

```
GET /library/Authors
```

Example:

```
GET http://localhost:3000/library/Authors
```

---

## Get Book Titles

Returns all book titles.

```
GET /library/titles
```

Example:

```
GET http://localhost:3000/library/titles
```

---

# Testing the API

Example using **curl**.

### Create a Book

```bash
curl -X POST http://localhost:3000/library/book \
-H "Content-Type: application/json" \
-d '{
"titulo": "Backend Class",
"autor": "Guilherme Martins"
}'
```

### Get Books by Author

```bash
curl http://localhost:3000/library/bookAuthor?autor=Huguinho%20Pato
```

---

# Running Tests

Unit tests:

```bash
npm run test
```

E2E tests:

```bash
npm run test:e2e
```

Test coverage:

```bash
npm run test:cov
```

---

# Notes

When the infrastructure is recreated with Terraform, a **new public IP may be generated**.

In that case, the API URL will change to the new IP address.

---

# Author

**Guilherme Martins**