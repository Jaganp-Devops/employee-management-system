# 🚀 Employee Management System on AWS

<p align="center">

![AWS](https://img.shields.io/badge/AWS-Cloud-orange)
![Docker](https://img.shields.io/badge/Docker-Container-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MySQL](https://img.shields.io/badge/MySQL-RDS-blue)
![Nginx](https://img.shields.io/badge/Nginx-WebServer-success)
![License](https://img.shields.io/badge/License-MIT-yellow)

</p>

---

# 📖 Project Overview

The **Employee Management System** is a production-style **3-Tier Web Application** deployed on **Amazon Web Services (AWS)**.

This project demonstrates how to design, deploy, secure, monitor, and scale a cloud application using AWS and Docker.

The application allows administrators to:

- 🔐 Login securely
- 👨‍💼 Add Employees
- ✏ Edit Employees
- ❌ Delete Employees
- 🔍 Search Employees
- 📊 View Dashboard Statistics

---

# 🎯 Project Objectives

- Learn AWS Infrastructure
- Build a Production-Style Architecture
- Deploy Docker Containers
- Configure Amazon RDS
- Configure Application Load Balancer
- Implement Auto Scaling
- Monitor using CloudWatch
- Store Docker Images in Amazon ECR

---

# 🏗 Architecture

> Replace this image with your architecture diagram.

```text
Internet
     │
     ▼
Application Load Balancer
     │
 ┌───┴─────────────┐
 │                 │
 ▼                 ▼
Frontend EC2    Backend EC2
 (Docker)        (Docker)
                     │
                     ▼
               Amazon RDS
```

📷

```text
screenshots/architecture/aws-architecture.png
```

---

# ☁ AWS Services Used

| Service | Purpose |
|----------|----------|
| Amazon VPC | Create isolated private network |
| Public Subnets | Internet-facing resources |
| Private App Subnets | Backend servers |
| Private DB Subnets | Amazon RDS |
| Internet Gateway | Internet access |
| NAT Gateway | Outbound internet for private instances |
| Route Tables | Network routing |
| Security Groups | Firewall rules |
| EC2 | Host frontend and backend |
| Amazon RDS | MySQL database |
| Docker | Containerization |
| Amazon ECR | Store Docker images |
| Application Load Balancer | Traffic distribution |
| Target Groups | Backend registration |
| Auto Scaling Group | High Availability |
| CloudWatch | Monitoring |
| IAM | Secure permissions |

---

# 🛠 Technology Stack

| Category | Technology |
|-----------|------------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | MySQL (Amazon RDS) |
| Container | Docker |
| Web Server | Nginx |
| Cloud | AWS |
| Monitoring | CloudWatch |
| Image Registry | Amazon ECR |
| OS | Ubuntu 24.04 |

---

# 📂 Project Structure

```text
Employee-Management-System/
│
├── backend/
├── frontend/
├── database/
├── docs/
├── screenshots/
│
├── README.md
├── .gitignore
├── .env.example
└── LICENSE
```

---

# 📚 Documentation

Detailed documentation is available in the **docs** folder.

| File | Description |
|------|-------------|
| 📄 01-Networking.md | VPC, Subnets, IGW, NAT Gateway |
| 📄 02-Compute-Database.md | EC2, Security Groups, RDS |
| 📄 03-Docker-ECR.md | Docker & Amazon ECR |
| 📄 04-LoadBalancer-ASG.md | ALB, Target Groups, Auto Scaling |
| 📄 05-Monitoring-Security.md | CloudWatch, IAM, CloudTrail |
| 📄 06-Deployment-Testing.md | Deployment, Testing & Troubleshooting |

---

# 📷 Project Screenshots

## AWS Infrastructure

- Amazon VPC
- Public & Private Subnets
- Route Tables
- Security Groups
- EC2 Instances
- Amazon RDS
- Application Load Balancer
- Target Groups
- Auto Scaling Group
- Amazon ECR
- CloudWatch

## Application

- Login Page
- Dashboard
- Employee List
- Add Employee
- Edit Employee

---

# 🚀 Features

✅ Secure Login

✅ Employee CRUD Operations

✅ Docker Deployment

✅ Amazon RDS Database

✅ Auto Scaling

✅ Application Load Balancer

✅ CloudWatch Monitoring

✅ Amazon ECR

---

# 📈 Future Enhancements

- 🚀 GitHub Actions CI/CD
- 🏗 Terraform
- ☸ Amazon EKS
- 🌐 Route 53
- 🔒 HTTPS using ACM
- 🛡 AWS WAF
- 📊 Prometheus
- 📈 Grafana

---

# 👨‍💻 Author

**Jagan P**

Junior Cloud & DevOps Engineer

### Skills

- AWS
- Linux
- Docker
- Amazon ECR
- Amazon RDS
- EC2
- VPC
- IAM
- CloudWatch
- Auto Scaling
- Application Load Balancer
- Git & GitHub

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

# 📄 License

This project is licensed under the **MIT License**.
---
# 🌐 AWS Networking Guide

This document explains the networking architecture used in the **Employee Management System** project.

---

# 📖 Table of Contents

1. Amazon VPC
2. Public Subnets
3. Private Application Subnets
4. Private Database Subnets
5. Internet Gateway

---

# 1️⃣ Amazon VPC (Virtual Private Cloud)

## 🎯 What is Amazon VPC?

Amazon VPC (Virtual Private Cloud) is a logically isolated network inside AWS where you launch your cloud resources securely.

Think of a VPC as your own private data center in the AWS cloud.

---

## ❓ Why do we use VPC?

Without a VPC:

- EC2 instances cannot be organized securely.
- RDS cannot be isolated.
- Load Balancer cannot route traffic properly.
- Security becomes difficult to manage.

A VPC allows you to:

- Build isolated networks
- Create public and private subnets
- Control traffic using route tables
- Protect resources using Security Groups and NACLs

---

## ⚙ Configuration Used

| Setting | Value |
|---------|-------|
| Name | ems-vpc |
| IPv4 CIDR | 10.0.0.0/16 |
| DNS Resolution | Enabled |
| DNS Hostnames | Enabled |
| IPv6 | Disabled |

---

## 💡 Why CIDR 10.0.0.0/16?

This network provides approximately **65,536 private IP addresses**.

Example:

10.0.1.0/24

10.0.2.0/24

10.0.3.0/24

10.0.4.0/24

10.0.5.0/24

10.0.6.0/24

Enough space for future scaling.

---

## 🖥 AWS Console Steps

AWS Console

↓

VPC

↓

Create VPC

↓

VPC Only

↓

Name = ems-vpc

↓

IPv4 CIDR = 10.0.0.0/16

↓

Enable DNS Resolution

↓

Enable DNS Hostnames

↓

Create

---

## ✅ Verification

- State = Available
- DNS Resolution = Enabled
- DNS Hostnames = Enabled

---

## 📸 Screenshot

```
screenshots/aws/vpc.png
```

---

## 🎤 Interview Question

**Q:** Why use a custom VPC instead of the default VPC?

**Answer:**

A custom VPC provides complete control over IP addressing, subnet design, routing, security, and high availability. It is the preferred choice for production workloads.

---

# 2️⃣ Public Subnets

## 🎯 What is a Public Subnet?

A public subnet is a subnet that has a route to an Internet Gateway.

Resources inside it can communicate with the internet.

---

## ❓ Why use Public Subnets?

Public subnets host internet-facing services.

Examples:

- Application Load Balancer
- NAT Gateway
- Bastion Host (optional)

---

## ⚙ Configuration

| Name | Availability Zone | CIDR |
|------|-------------------|------|
| public-subnet-1 | ap-south-1a | 10.0.1.0/24 |
| public-subnet-2 | ap-south-1b | 10.0.2.0/24 |

---

## 💡 Why two Public Subnets?

AWS recommends using at least two Availability Zones for High Availability.

If one AZ fails, the ALB continues serving traffic from the second AZ.

---

## 📸 Screenshot

```
screenshots/aws/public-subnets.png
```

---

## 🎤 Interview Question

Why does an Application Load Balancer require two public subnets?

---

# 3️⃣ Private Application Subnets

## 🎯 What is a Private Application Subnet?

A private subnet does not have direct internet access.

Backend application servers are deployed here.

---

## ❓ Why use Private App Subnets?

- Improved security
- No public IP
- Accessible only through the ALB
- Internet access only through NAT Gateway

---

## ⚙ Configuration

| Name | Availability Zone | CIDR |
|------|-------------------|------|
| app-subnet-1 | ap-south-1a | 10.0.3.0/24 |
| app-subnet-2 | ap-south-1b | 10.0.4.0/24 |

---

## 📸 Screenshot

```
screenshots/aws/private-app-subnets.png
```

---

## 🎤 Interview Question

Why shouldn't backend servers have public IP addresses?

---

# 4️⃣ Private Database Subnets

## 🎯 What is a Database Subnet?

A dedicated private subnet used only for databases.

Amazon RDS is deployed here.

---

## ❓ Why?

Databases should never be directly accessible from the internet.

Only backend EC2 instances can connect to RDS using Security Groups.

---

## ⚙ Configuration

| Name | Availability Zone | CIDR |
|------|-------------------|------|
| db-subnet-1 | ap-south-1a | 10.0.5.0/24 |
| db-subnet-2 | ap-south-1b | 10.0.6.0/24 |

---

## 📸 Screenshot

```
screenshots/aws/private-db-subnets.png
```

---

## 🎤 Interview Question

Why does Amazon RDS require a DB Subnet Group?

---

# 5️⃣ Internet Gateway

## 🎯 What is an Internet Gateway?

An Internet Gateway (IGW) connects your VPC to the public internet.

Without an IGW, public resources cannot receive or send internet traffic.

---

## ❓ Why do we use it?

Used by:

- Application Load Balancer
- NAT Gateway
- Bastion Host

---

## ⚙ Configuration

| Setting | Value |
|---------|-------|
| Name | ems-igw |
| Attached To | ems-vpc |

---

## 🖥 AWS Console Steps

VPC

↓

Internet Gateways

↓

Create Internet Gateway

↓

Attach to

↓

ems-vpc

---

## 📸 Screenshot

```
screenshots/aws/internet-gateway.png
```

---

## ✅ Verification

- State = Attached
- Route Table contains:

```
0.0.0.0/0 → Internet Gateway
```

---

## 🎤 Interview Question

What happens if an Internet Gateway is not attached to the VPC?

**Answer:**

Public subnet resources lose internet connectivity. Internet-facing services such as the Application Load Balancer and NAT Gateway will not function correctly.

---

# ✅ Summary

In this chapter, we configured:

- ✅ Amazon VPC
- ✅ Public Subnets
- ✅ Private Application Subnets
- ✅ Private Database Subnets
- ✅ Internet Gateway

➡️ Next: **02-Compute-Database.md**
---
# 💻 Compute & Database Guide

This document explains the compute and database components used in the Employee Management System AWS deployment.

---

# 📖 Table of Contents

6. NAT Gateway
7. Route Tables
8. Security Groups
9. Amazon EC2
10. Amazon RDS MySQL

---

# 6️⃣ NAT Gateway

## 🎯 What is NAT Gateway?

A NAT (Network Address Translation) Gateway allows resources inside a **private subnet** to access the internet **without allowing inbound internet access**.

It acts as a bridge between private resources and the internet.

---

## ❓ Why do we use NAT Gateway?

Backend servers require internet access for:

- Docker image pull
- apt update
- Node.js packages
- Security updates
- AWS CLI

Without exposing the server to the internet.

---

## ⚙ Configuration Used

| Setting | Value |
|---------|-------|
| Name | ems-nat |
| Subnet | public-subnet-1 |
| Elastic IP | Yes |

---

## 🖥 AWS Console Steps

AWS Console

↓

VPC

↓

NAT Gateways

↓

Create NAT Gateway

↓

Name = ems-nat

↓

Subnet = public-subnet-1

↓

Allocate Elastic IP

↓

Create

---

## 📸 Screenshot

```
screenshots/aws/nat-gateway.png
```

---

## ✅ Verification

Private EC2 should successfully execute:

```bash
sudo apt update
```

---

## 🎤 Interview Question

Why can't a private EC2 directly access the internet?

Answer:

Because it has no public IP address. Internet access is provided through the NAT Gateway.

---

# 7️⃣ Route Tables

## 🎯 What is a Route Table?

A Route Table controls where network traffic is sent.

Every subnet must be associated with a Route Table.

---

## Public Route Table

### Used For

- Public Subnets

### Routes

| Destination | Target |
|-------------|---------|
| Local | VPC |
| 0.0.0.0/0 | Internet Gateway |

---

## Private Route Table

### Used For

- App Subnets
- DB Subnets

### Routes

| Destination | Target |
|-------------|---------|
| Local | VPC |
| 0.0.0.0/0 | NAT Gateway |

---

## 📸 Screenshot

```
screenshots/aws/route-table.png
```

---

## 🎤 Interview Question

What happens if the private route table has no NAT Gateway?

Answer:

Private instances cannot download packages or access AWS services on the internet.

---

# 8️⃣ Security Groups

## 🎯 What is a Security Group?

A Security Group is a virtual firewall that controls inbound and outbound traffic for AWS resources.

---

## Security Groups Used

| Security Group | Purpose |
|---------------|----------|
| alb-sg | ALB |
| frontend-sg | Frontend EC2 |
| backend-sg | Backend EC2 |
| rds-sg | Database |

---

## ALB Security Group

### Inbound

| Type | Port | Source |
|------|------|--------|
| HTTP | 80 | 0.0.0.0/0 |

---

## Frontend EC2

### Inbound

| Type | Port | Source |
|------|------|--------|
| HTTP | 80 | ALB SG |
| SSH | 22 | My IP |

---

## Backend EC2

### Inbound

| Type | Port | Source |
|------|------|--------|
| HTTP | 5000 | Frontend SG |
| SSH | 22 | Frontend SG |

---

## RDS

### Inbound

| Type | Port | Source |
|------|------|--------|
| MySQL | 3306 | Backend SG |

---

## 📸 Screenshot

```
screenshots/aws/security-groups.png
```

---

## 🎤 Interview Question

Security Group vs Network ACL?

Answer:

Security Groups are stateful and attached to instances.

Network ACLs are stateless and attached to subnets.

---

# 9️⃣ Amazon EC2

## 🎯 What is EC2?

Amazon EC2 (Elastic Compute Cloud) provides virtual servers in AWS.

---

## EC2 Instances Used

### Frontend

| Setting | Value |
|---------|-------|
| Name | frontend-server |
| OS | Ubuntu 24.04 |
| Instance | t3.small |
| Docker | Yes |
| Nginx | Yes |

---

### Backend

| Setting | Value |
|---------|-------|
| Name | backend-server |
| OS | Ubuntu 24.04 |
| Instance | t3.small |
| Docker | Yes |
| Node.js | Yes |

---

## Why Two EC2 Instances?

Separating frontend and backend provides:

- Better security
- Easier scaling
- Independent deployment
- Production architecture

---

## 📸 Screenshot

```
screenshots/aws/ec2-instances.png
```

---

## 🎤 Interview Question

Why use separate frontend and backend servers?

Answer:

To isolate responsibilities, improve scalability, and increase security.

---

# 🔟 Amazon RDS

## 🎯 What is Amazon RDS?

Amazon RDS (Relational Database Service) is a managed database service.

---

## Why RDS?

AWS manages:

- Backups
- Patching
- Storage
- Monitoring
- High Availability

Developers only manage the database.

---

## Configuration Used

| Setting | Value |
|---------|-------|
| Engine | MySQL |
| Version | 8.x |
| DB Name | employee_db |
| Port | 3306 |
| Public Access | No |
| Multi AZ | No |

---

## Backend Connection

```env
DB_HOST=your-rds-endpoint

DB_PORT=3306

DB_USER=admin

DB_PASSWORD=********

DB_NAME=employee_db
```

---

## 📸 Screenshot

```
screenshots/aws/rds.png
```

---

## ✅ Verification

Backend should connect successfully.

```bash
pm2 logs

or

docker logs ems-backend
```

Should display

```
Database Connected Successfully
```

---

## Common Errors

❌ Access denied

Reason

Wrong username/password

---

❌ Connection Timeout

Reason

Security Group blocks port 3306

---

❌ ECONNREFUSED

Reason

Wrong DB endpoint

---

## 🎤 Interview Question

Why should RDS be in a private subnet?

Answer:

Databases should never be directly exposed to the internet. Only backend application servers should communicate with the database through controlled Security Group rules.

---

# ✅ Summary

In this chapter we configured:

- ✅ NAT Gateway
- ✅ Route Tables
- ✅ Security Groups
- ✅ Amazon EC2
- ✅ Amazon RDS

➡️ Next: **03-Docker-ECR.md**
---
# 🐳 Docker & Amazon ECR Guide

This document explains how Docker was used to containerize the Employee Management System and how Amazon Elastic Container Registry (Amazon ECR) stores Docker images.

---

# 📖 Table of Contents

11. Docker
12. Dockerfile
13. Docker Compose
14. Amazon ECR
15. Docker Deployment

---

# 1️⃣1️⃣ Docker

## 🎯 What is Docker?

Docker is a containerization platform that packages an application along with all its dependencies into a lightweight container.

Unlike Virtual Machines, Docker shares the host operating system kernel, making containers faster and more efficient.

---

## ❓ Why Docker?

Docker solves the classic problem:

> "It works on my machine but not on the server."

Benefits:

- Portable
- Lightweight
- Fast deployment
- Easy rollback
- Version control
- Same environment everywhere

---

## 🏗 Docker Architecture

```
Developer

↓

Docker Build

↓

Docker Image

↓

Docker Container

↓

Application Running
```

---

## Install Docker

Ubuntu

```bash
sudo apt update

sudo apt install docker.io -y

sudo systemctl enable docker

sudo systemctl start docker
```

---

## Verify Installation

```bash
docker --version
```

Example

```
Docker version 28.x.x
```

---

## Useful Commands

```bash
docker images

docker ps

docker ps -a

docker logs container-name

docker exec -it container-name bash

docker stop container-name

docker rm container-name
```

---

## 📸 Screenshot

```
screenshots/docker/docker-install.png
```

---

## 🎤 Interview Question

Difference between Docker Image and Docker Container?

Answer

Docker Image is a template.

Docker Container is a running instance of that image.

---

# 1️⃣2️⃣ Dockerfile

## 🎯 What is Dockerfile?

A Dockerfile is a text file that contains instructions for building a Docker image.

---

## Why use Dockerfile?

Instead of installing software manually every time, Dockerfile automates the process.

---

## Backend Dockerfile Example

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","start"]
```

---

## Frontend Dockerfile Example

```dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html
```

---

## Build Image

Backend

```bash
docker build -t ems-backend:v1 .
```

Frontend

```bash
docker build -t ems-frontend:v1 .
```

---

## Verify

```bash
docker images
```

---

## 📸 Screenshot

```
screenshots/docker/docker-build.png
```

---

## 🎤 Interview Question

Why COPY package.json before COPY . ?

Answer

Docker caches layers.

If dependencies don't change, Docker skips reinstalling packages, making builds faster.

---

# 1️⃣3️⃣ Docker Compose

## 🎯 What is Docker Compose?

Docker Compose allows multiple containers to be managed together using a single YAML file.

---

## Why use Docker Compose?

Instead of running many docker run commands, Docker Compose starts all services together.

---

## Example

```yaml
services:

  backend:
    image: ems-backend:v1
    ports:
      - "5000:5000"

  frontend:
    image: ems-frontend:v1
    ports:
      - "80:80"
```

---

## Commands

Start

```bash
docker compose up -d
```

Stop

```bash
docker compose down
```

View

```bash
docker compose ps
```

---

## 📸 Screenshot

```
screenshots/docker/docker-compose.png
```

---

## 🎤 Interview Question

Docker Compose vs Docker Swarm?

---

# 1️⃣4️⃣ Amazon ECR

## 🎯 What is Amazon ECR?

Amazon Elastic Container Registry (ECR) is AWS's managed Docker image repository.

---

## Why ECR?

Instead of storing images locally:

```
Laptop

↓

Amazon ECR

↓

EC2

↓

Docker Pull
```

Benefits

- Secure
- Private
- IAM Integration
- High Availability

---

## Repositories Used

| Repository | Purpose |
|------------|----------|
| ems-backend | Backend Image |
| ems-frontend | Frontend Image |

---

## Login to ECR

```bash
aws ecr get-login-password \
--region ap-south-1 \
| docker login \
--username AWS \
--password-stdin ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com
```

---

## Tag Image

```bash
docker tag ems-backend:v1 \
ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/ems-backend:v1
```

---

## Push

```bash
docker push ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/ems-backend:v1
```

---

## Verify

AWS Console

↓

Amazon ECR

↓

Repositories

↓

Image Available

---

## 📸 Screenshot

```
screenshots/aws/ecr.png
```

---

## 🎤 Interview Question

Why use ECR instead of Docker Hub?

Answer

ECR integrates with AWS IAM, provides private repositories by default, and offers better performance for AWS workloads.

---

# 1️⃣5️⃣ Docker Deployment

## 🎯 Deploy Backend

```bash
docker run -d \
--name ems-backend \
-p 5000:5000 \
--env-file .env \
ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/ems-backend:v1
```

---

## Deploy Frontend

```bash
docker run -d \
--name ems-frontend \
-p 80:80 \
ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/ems-frontend:v1
```

---

## Verify

```bash
docker ps
```

Expected

```
ems-backend

ems-frontend
```

---

## Useful Commands

Restart

```bash
docker restart ems-backend
```

Logs

```bash
docker logs ems-backend
```

Shell

```bash
docker exec -it ems-backend sh
```

Remove

```bash
docker rm -f ems-backend
```

---

## 📸 Screenshot

```
screenshots/docker/docker-running.png
```

---

## Common Errors

❌ Image not found

Reason

Wrong image tag

---

❌ Port already allocated

Reason

Another container uses the same port.

---

❌ Failed to connect Database

Reason

Wrong .env configuration.

---

## 🎤 Interview Questions

Q1. What is Docker?

Q2. Docker Image vs Container?

Q3. Why Dockerfile?

Q4. Why Docker Compose?

Q5. Why Amazon ECR?

Q6. Difference between CMD and ENTRYPOINT?

Q7. What is a Docker Volume?

Q8. What is Docker Networking?

---

# ✅ Summary

In this chapter we configured:

- ✅ Docker
- ✅ Dockerfile
- ✅ Docker Compose
- ✅ Amazon ECR
- ✅ Docker Deployment

➡️ Next: **docs/04-LoadBalancer-ASG.md**
---
# ⚖️ Application Load Balancer & Auto Scaling Guide

This document explains how traffic is distributed across the application and how AWS automatically scales backend instances to maintain high availability.

---

# 📖 Table of Contents

16. Application Load Balancer (ALB)

17. Target Groups

18. Health Checks

19. Launch Template

20. Auto Scaling Group

---

# 1️⃣6️⃣ Application Load Balancer (ALB)

## 🎯 What is an Application Load Balancer?

Application Load Balancer (ALB) distributes incoming HTTP/HTTPS requests across multiple backend servers.

It operates at **Layer 7 (Application Layer)** of the OSI Model.

---

## ❓ Why do we use ALB?

Without ALB

```
User
 ↓
Frontend EC2
```

If Frontend EC2 fails

Application Down ❌

---

With ALB

```
User
 ↓
ALB
 ↓
Frontend EC2
 ↓
Backend EC2
```

Benefits

- High Availability
- Fault Tolerance
- Health Checks
- Path Based Routing
- Auto Scaling Integration

---

## ⚙ Configuration Used

| Setting | Value |
|---------|-------|
| Name | ems-alb |
| Type | Internet Facing |
| Scheme | IPv4 |
| Listener | HTTP :80 |

---

## Subnets

- Public Subnet 1
- Public Subnet 2

---

## Security Group

alb-sg

Inbound

| Port | Source |
|------|--------|
|80|0.0.0.0/0|

---

## Listener

HTTP

↓

Port 80

↓

Forward Request

↓

Target Group

---

## 📸 Screenshot

```
screenshots/aws/alb.png
```

---

## ✅ Verification

Open

```
http://ALB-DNS
```

Application Login Page should appear.

---

## 🎤 Interview Question

Difference between ALB and NLB?

Answer

ALB works on Layer 7 and supports HTTP/HTTPS routing.

NLB works on Layer 4 and supports TCP/UDP traffic.

---

# 1️⃣7️⃣ Target Groups

## 🎯 What is Target Group?

Target Group contains backend servers that receive traffic from ALB.

---

## Why?

ALB does not directly send traffic to EC2.

It forwards requests through Target Groups.

---

## Target Groups Used

| Target Group | Purpose |
|--------------|----------|
| ems-frontend-tg | Frontend |
| ems-backend-tg | Backend |

---

## Backend Port

5000

Frontend Port

80

---

## Listener Rule

```
/api/*
↓

Backend TG

Everything Else

↓

Frontend TG
```

---

## 📸 Screenshot

```
screenshots/aws/target-group.png
```

---

## Verification

Both instances should display

Healthy

---

## Interview Question

Why create separate Target Groups?

Answer

Frontend and Backend use different ports and routing rules.

---

# 1️⃣8️⃣ Health Checks

## 🎯 What is Health Check?

Health Check determines whether an instance is healthy before receiving traffic.

---

## Why?

If an instance crashes

↓

ALB stops sending requests

↓

Healthy instance receives traffic

---

## Configuration

| Setting | Value |
|---------|-------|
| Protocol | HTTP |
| Port | Traffic Port |
| Path | /health |

---

## Healthy Threshold

5

---

## Unhealthy Threshold

2

---

## Success Code

200

---

## Backend Route

```
GET /health

↓

200 OK
```

---

## Verification

AWS Console

↓

Target Group

↓

Targets

↓

Healthy

---

## 📸 Screenshot

```
screenshots/aws/health-check.png
```

---

## Interview Question

Why create /health endpoint?

Answer

ALB periodically checks this endpoint to ensure the backend application is running.

---

# 1️⃣9️⃣ Launch Template

## 🎯 What is Launch Template?

Launch Template stores EC2 configuration for Auto Scaling.

---

## Why?

Instead of configuring every new EC2 manually,

Auto Scaling launches new instances automatically.

---

## Configuration

| Setting | Value |
|---------|-------|
| Name | ems-backend-template |
| AMI | Ubuntu 24.04 |
| Instance Type | t3.small |
| Security Group | backend-sg |
| IAM Role | EC2-ECR-Role |

---

## User Data

Install Docker

Pull Image

Run Container

---

## 📸 Screenshot

```
screenshots/aws/launch-template.png
```

---

## Interview Question

Why use Launch Template instead of Launch Configuration?

Answer

Launch Templates support newer AWS features and are the recommended option.

---

# 2️⃣0️⃣ Auto Scaling Group

## 🎯 What is Auto Scaling?

Auto Scaling automatically increases or decreases EC2 instances based on demand.

---

## Why?

Benefits

- High Availability
- Fault Tolerance
- Automatic Scaling
- Lower Cost

---

## Configuration

| Setting | Value |
|---------|-------|
| Name | ems-backend-asg |
| Minimum | 2 |
| Desired | 2 |
| Maximum | 4 |

---

## Scaling Policy

CPU Utilization

↓

70%

↓

Launch New Instance

---

## Auto Scaling Flow

```
CPU > 70%

↓

Launch Template

↓

New Backend EC2

↓

Register

↓

Target Group

↓

Healthy

↓

Traffic Starts
```

---

## Verification

AWS Console

↓

Auto Scaling Group

↓

Instances

↓

Desired = 2

Running = 2

---

## 📸 Screenshot

```
screenshots/aws/auto-scaling-group.png
```

---

## Common Errors

❌ Target Unhealthy

Reason

Wrong Health Check Path

---

❌ Instance Not Registering

Reason

Wrong Security Group

---

❌ ALB 404

Reason

Wrong Listener Rule

---

## Interview Questions

Q1 What is ALB?

Q2 Why Target Groups?

Q3 Why Health Check?

Q4 What is Launch Template?

Q5 Difference between Desired and Minimum Capacity?

Q6 Difference between ALB and NLB?

Q7 How does Auto Scaling work?

---

# ✅ Summary

In this chapter we configured

✅ Application Load Balancer

✅ Target Groups

✅ Health Checks

✅ Launch Template

✅ Auto Scaling Group

➡️ Next

📄 docs/05-Monitoring-Security.md
---
# 📊 Monitoring, Security & Deployment Guide

This document explains how monitoring, logging, security, deployment verification, troubleshooting, and future enhancements were implemented in the Employee Management System.

---

# 📖 Table of Contents

21. Amazon CloudWatch

22. CloudWatch Alarms

23. Amazon SNS

24. AWS CloudTrail

25. IAM

26. Git & GitHub

27. GitHub Actions (Future)

28. Deployment Verification

29. Application Testing

30. Common Errors

31. Troubleshooting

32. Cost Optimization

33. Security Best Practices

34. AWS Interview Questions

35. Future Improvements

---

# 2️⃣1️⃣ Amazon CloudWatch

## 🎯 What is CloudWatch?

Amazon CloudWatch is AWS's monitoring service used to collect metrics, logs, and events from AWS resources.

---

## Why CloudWatch?

CloudWatch helps monitor:

- EC2 CPU
- Network Traffic
- Disk Operations
- Status Checks
- Application Logs

---

## Services Monitored

| Resource | Metrics |
|-----------|----------|
| EC2 | CPU, Network |
| ALB | Request Count |
| RDS | CPU, Storage |
| Auto Scaling | Instance Health |

---

## Verification

AWS Console

↓

CloudWatch

↓

Metrics

↓

EC2

---

## Screenshot

```
screenshots/monitoring/cloudwatch.png
```

---

## Interview Question

Why is CloudWatch important?

Answer

CloudWatch continuously monitors AWS resources, allowing administrators to detect issues early and automate responses through alarms.

---

# 2️⃣2️⃣ CloudWatch Alarm

## What is CloudWatch Alarm?

CloudWatch Alarm monitors a metric and performs an action when a threshold is crossed.

---

## Alarm Created

CPU Utilization

Threshold

```
70%
```

---

## Alarm Flow

```
CPU > 70%

↓

Alarm

↓

SNS Notification

↓

Administrator
```

---

## Verification

CloudWatch

↓

Alarms

↓

State

```
OK

or

ALARM
```

---

## Screenshot

```
screenshots/monitoring/cloudwatch-alarm.png
```

---

# 2️⃣3️⃣ Amazon SNS

## What is Amazon SNS?

Amazon Simple Notification Service sends notifications through Email, SMS, Lambda, etc.

---

## Why SNS?

Notify administrators when:

- CPU High
- Instance Failure
- Storage Full

---

## Notification Flow

```
CloudWatch

↓

SNS

↓

Email

↓

Administrator
```

---

## Screenshot

```
screenshots/monitoring/sns.png
```

---

# 2️⃣4️⃣ AWS CloudTrail

## What is CloudTrail?

CloudTrail records every AWS API call.

---

## Why CloudTrail?

Audit

Security

Compliance

Troubleshooting

---

## Example

```
User Created EC2

↓

CloudTrail Records Event
```

---

## Screenshot

```
screenshots/monitoring/cloudtrail.png
```

---

# 2️⃣5️⃣ IAM

## What is IAM?

IAM controls authentication and authorization in AWS.

---

## IAM Components

- Users
- Groups
- Roles
- Policies

---

## IAM Role Used

```
EC2-ECR-Role
```

Permissions

- AmazonEC2ContainerRegistryReadOnly
- CloudWatchAgentServerPolicy

---

## Principle

Least Privilege

Only grant required permissions.

---

## Screenshot

```
screenshots/aws/iam-role.png
```

---

# 2️⃣6️⃣ Git & GitHub

Git was used for source code management.

GitHub stores project code remotely.

Useful Commands

```bash
git init
git add .
git commit -m "Initial Commit"
git push
```

---

## Repository Structure

```
backend/

frontend/

docs/

screenshots/

README.md
```

---

# 2️⃣7️⃣ GitHub Actions (Future)

## Purpose

Automate deployment.

Workflow

```
Git Push

↓

GitHub Actions

↓

Docker Build

↓

Push to ECR

↓

Deploy EC2
```

---

# 2️⃣8️⃣ Deployment Verification

Verify

✅ Login

✅ Dashboard

✅ Add Employee

✅ Edit Employee

✅ Delete Employee

✅ Search Employee

---

Infrastructure Verification

✅ EC2 Running

✅ Docker Running

✅ ALB Healthy

✅ Target Groups Healthy

✅ Auto Scaling Healthy

✅ RDS Connected

---

# 2️⃣9️⃣ Application Testing

Functional Testing

- Login
- CRUD
- Search

Performance Testing

- Multiple Users
- Response Time

Security Testing

- SQL Injection
- Authentication
- Authorization

---

# 3️⃣0️⃣ Common Errors

## Failed to Fetch

Reason

Backend API unavailable.

---

## Docker Container Exit

Reason

Application Crash

---

## RDS Access Denied

Reason

Wrong Credentials

---

## ALB 404

Reason

Wrong Listener Rule

---

## Target Unhealthy

Reason

Health Check Path Incorrect

---

## CORS Error

Reason

Wrong CORS_ORIGIN

---

# 3️⃣1️⃣ Troubleshooting

Issue

Docker not starting

Solution

```
sudo systemctl restart docker
```

---

Issue

Backend Offline

Solution

```
docker logs ems-backend
```

---

Issue

Database Connection Failed

Check

- DB Endpoint
- Username
- Password
- Security Group

---

Issue

ALB Not Working

Check

- Target Group
- Health Check
- Listener Rules

---

# 3️⃣2️⃣ Cost Optimization

Use

- t3.small
- Delete unused EBS
- Remove unused Elastic IP
- Stop unused EC2
- Delete old Docker Images
- Delete unused ECR Images

---

# 3️⃣3️⃣ Security Best Practices

✅ Backend in Private Subnet

✅ Database in Private Subnet

✅ Least Privilege IAM

✅ Security Groups

✅ Private RDS

✅ Docker Containers

Future

- HTTPS
- WAF
- Secrets Manager

---

# 3️⃣4️⃣ AWS Interview Questions

Q1 What is CloudWatch?

Q2 Difference between CloudWatch and CloudTrail?

Q3 What is SNS?

Q4 What is IAM Role?

Q5 Why Least Privilege?

Q6 What is Auto Scaling?

Q7 Difference between ALB and NLB?

Q8 Why Docker?

Q9 Why ECR?

Q10 Explain your project architecture.

---

# 3️⃣5️⃣ Future Improvements

This project can be enhanced by adding:

- GitHub Actions
- Terraform
- Amazon EKS
- Prometheus
- Grafana
- Route 53
- AWS Certificate Manager
- HTTPS
- CloudFront
- AWS WAF
- AWS Secrets Manager

---

# 🎉 Project Completed

## AWS Services Implemented

✅ Amazon VPC

✅ Public & Private Subnets

✅ Internet Gateway

✅ NAT Gateway

✅ Route Tables

✅ Security Groups

✅ EC2

✅ Amazon RDS

✅ Docker

✅ Amazon ECR

✅ Application Load Balancer

✅ Target Groups

✅ Health Checks

✅ Auto Scaling Group

✅ CloudWatch

✅ CloudWatch Alarm

✅ Amazon SNS

✅ IAM

---

## 🎓 Learning Outcomes

After completing this project you will understand:

- AWS Networking
- Linux Administration
- Docker
- Amazon ECR
- Application Load Balancer
- Auto Scaling
- Cloud Monitoring
- AWS Security
- Production Deployment
- DevOps Best Practices

---

## 👨‍💻 Author

**Jagan P**

Junior Cloud & DevOps Engineer

AWS | Linux | Docker | Node.js | MySQL | ECR | ALB | Auto Scaling | CloudWatch

---
# 🤝 Contributing to Employee Management System

Thank you for your interest in contributing to this project! 🎉

Contributions are always welcome. Whether you're fixing a bug, improving documentation, adding a feature, or optimizing the code, your help is appreciated.

---

# 📋 Table of Contents

- Code of Conduct
- Ways to Contribute
- Getting Started
- Project Setup
- Branch Strategy
- Commit Guidelines
- Pull Request Process
- Coding Standards
- Reporting Issues
- Feature Requests
- Contact

---

# 🎯 Ways to Contribute

You can contribute by:

- 🐛 Fixing bugs
- ✨ Adding new features
- 📚 Improving documentation
- 🔒 Enhancing security
- ⚡ Improving performance
- 🧪 Adding test cases
- 🐳 Improving Docker configuration
- ☁ Enhancing AWS architecture

---

# 🚀 Getting Started

## 1️⃣ Fork Repository

Click the **Fork** button on GitHub.

---

## 2️⃣ Clone Repository

```bash
git clone https://github.com/<your-username>/Employee-Management-System.git
```

---

## 3️⃣ Go to Project

```bash
cd Employee-Management-System
```

---

## 4️⃣ Install Backend Dependencies

```bash
cd backend

npm install
```

---

## 5️⃣ Configure Environment

Copy

```
.env.example
```

Rename

```
.env
```

Update

```
DB_HOST

DB_USER

DB_PASSWORD

DB_NAME

JWT_SECRET
```

---

## 6️⃣ Run Backend

```bash
npm start
```

---

## 7️⃣ Run Frontend

Using Docker

```bash
docker build -t ems-frontend:v1 .

docker run -d -p 80:80 ems-frontend:v1
```

---

# 🌿 Branch Strategy

Never push directly to

```
main
```

Create a new branch

```bash
git checkout -b feature/add-search
```

Examples

```
feature/docker

feature/login

bugfix/rds

docs/readme

security/jwt
```

---

# 📝 Commit Guidelines

Good examples

```text
feat: Add employee search

fix: Resolve database connection issue

docs: Update README

refactor: Improve Dockerfile

security: Secure JWT authentication
```

Avoid

```
update

changes

test

123
```

---

# 🔀 Pull Request Process

1. Fork repository

2. Create branch

3. Commit changes

4. Push branch

5. Open Pull Request

6. Wait for review

---

# 💻 Coding Standards

## JavaScript

- Use meaningful variable names
- Write comments when needed
- Keep functions small
- Handle errors properly

---

## Docker

- Use small base images
- Remove unnecessary files
- Optimize image size

---

## AWS

- Follow Least Privilege Principle
- Keep RDS private
- Use Security Groups correctly

---

# 🐞 Reporting Bugs

When creating a bug report include:

- Operating System
- Browser
- Error Message
- Steps to Reproduce
- Screenshot
- Expected Result
- Actual Result

---

# 💡 Feature Requests

Example

```
Title

Add Employee Export Feature

Description

Export employee list to PDF and Excel.
```

---

# 🔒 Security

Never upload

- .env
- AWS Credentials
- SSH Keys
- Private Certificates
- Database Passwords

---

# 📚 Documentation

Update documentation whenever:

- New feature added
- AWS architecture changes
- Docker updated
- Deployment changes

---

# ❤️ Thank You

Thank you for helping improve the Employee Management System project!

Every contribution, no matter how small, is appreciated.

Happy Coding! 🚀

---

# 👨‍💻 Maintainer

**Jagan P**

Junior Cloud & DevOps Engineer

AWS • Linux • Docker • Node.js • DevOps

---
