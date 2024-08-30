# Day 8: Git Integration, CI/CD Pipelines, and Exploration of Jenkins

## Overview

Continuous Integration (CI) and Continuous Deployment (CD) are crucial practices in modern software development. CI/CD pipelines automate the process of building, testing, and deploying applications, ensuring that code changes are consistently integrated, tested, and released with minimal manual intervention.

### Key Concepts

#### 1. CI/CD Pipelines
A **CI/CD pipeline** is a series of automated processes that enable DevOps teams to streamline and automate the software delivery process. It involves several stages:

- **Source Code Management (SCM):** Typically integrated with version control systems like Git, where the source code is stored and managed.
- **Build:** The process of compiling the code, resolving dependencies, and creating artifacts that can be deployed.
- **Test:** Automated tests are run to ensure the integrity of the code, including unit tests, integration tests, and more.
- **Deploy:** The final stage where the code is deployed to different environments (e.g., staging, production).

#### 2. Webhooks
**Webhooks** are automated messages sent from apps when something happens. They are a way for one system to notify another system of an event or change, often triggering a CI/CD pipeline. For example:

- When code is pushed to a Git repository, a webhook can trigger a CI build process.
- Webhooks can be configured in Azure DevOps, GitHub, GitLab, etc., to integrate with external systems like Jenkins, Slack, or custom applications.

#### 3. Jenkins
**Jenkins** is an open-source automation server that helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery.

- **Plugins:** Jenkins is highly extensible with a rich ecosystem of plugins that support various tools, services, and workflows.
- **Declarative Pipelines:** Jenkins uses a domain-specific language (DSL) written in Groovy to define CI/CD pipelines. Pipelines can be declarative or scripted, providing flexibility in how CI/CD processes are configured.
- **Integration:** Jenkins integrates with various source control systems, including Git, and can trigger builds based on webhooks, schedules, or manual triggers.

## Azure Boards Projects - PRESIDIO PROJECT

### Internal Portal

1. **Internal Backend App** - [View Project](https://dev.azure.com/HireEz/HireEZ-portal-backend)  
   This project is dedicated to the development of the backend for the internal admin application. It includes features for user management, reporting, and data handling.

2. **Internal Frontend App** - [View Project](https://dev.azure.com/HireEz/HireEZ-portal-frontend)  
   This project focuses on the frontend development of the internal admin application. It includes the user interface for user management, application reviews, reporting, and a customizable dashboard.

### External App

3. **External Backend App** - [View Project](https://dev.azure.com/HireEz/HireEZ-app-backend)  
   This project is dedicated to the development of the backend for the external user and company application. It includes features for job listings, user profiles, company profiles, and notification system handling.

4. **External Frontend App** - [View Project](https://dev.azure.com/HireEz/HireEZ-app-frontend)  
   This project focuses on the frontend development of the external user and company application. It includes the user interface for job listings, user profiles, company profiles, and notifications.

By clicking on the links, you will be redirected to the respective Azure Boards projects where you can look at the progress.

## CI/CD Pipeline in Azure DevOps

In Azure DevOps, you can create a CI/CD pipeline by setting up a build pipeline and a release pipeline. Here’s a general overview of how it works:

1. **Build Pipeline:**
   - The build pipeline automates the process of compiling and testing your code.
   - It integrates with source control repositories like Git, where it can be triggered by code pushes, pull requests, or other events.
   - The build artifacts are stored and can be used later in the release pipeline.

2. **Release Pipeline:**
   - The release pipeline deploys your build artifacts to various environments like development, staging, and production.
   - It can be triggered automatically after a successful build or manually.



## Exploring Jenkins

### Setting Up Jenkins
- **Installation:** Jenkins can be installed on various platforms, including Windows, macOS, and Linux. It can also be run inside a Docker container.
- **Job Configuration:** In Jenkins, a "job" or "project" is a task or a group of tasks that Jenkins runs. You can configure jobs for building projects, running tests, or deploying applications.
- **Pipeline as Code:** Jenkins allows you to define your pipeline using a `Jenkinsfile`. This file is stored in the root of your repository and defines the steps to be executed.

### Sample Jenkins Pipeline (Declarative)
```groovy
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'yarn install'
                sh 'yarn build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'yarn test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Add deployment steps here
            }
        }
    }
}
```

