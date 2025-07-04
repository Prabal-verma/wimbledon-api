
# 🎾 Wimbledon Finals REST API

A production-ready RESTful API to fetch details of the Wimbledon Men's Singles Final for a given year. Built with **Node.js**, **Express**, and designed for **performance**, **security**, and **scalability**.

---

## 🚀 Features

- ✅ Fetch final match details by year
- ✅ Input validation with `Joi`
- ✅ Rate limiting with `express-rate-limit`
- ✅ Clean modular architecture
- ✅ Dockerized for easy deployment
- ✅ Production-ready logging with `morgan`
- ✅ Well-documented Postman Collection

---

## 📦 Technologies Used

- Node.js
- Express.js
- Joi (validation)
- express-rate-limit (rate limiting)
- Morgan (logging)
- CORS
- Docker

---

## 📚 API Reference

### 🔗 `GET /wimbledon?year=<year>`

Fetch Wimbledon final match data for a given year.

#### ✅ Query Parameters

| Parameter | Type   | Description              |
|-----------|--------|--------------------------|
| `year`    | Number | Year of the final (e.g., 2021) |

#### 📥 Example Request

```http
GET /wimbledon?year=2022
````

#### 📤 Example Response

```json
{
  "year": 2022,
  "champion": "Novak Djokovic",
  "runner_up": "Nick Kyrgios",
  "score": "4–6, 6–3, 6–4, 7–6(7–3)",
  "sets": 4,
  "tiebreak": true
}
```

---

## 🚧 Error Handling

| Status | Message                                 |
| ------ | --------------------------------------- |
| 400    | Invalid or missing `year` parameter     |
| 404    | No match data found for that year       |
| 429    | Too many requests (rate limit exceeded) |
| 404    | Route not found                         |

---

## ⏳ Rate Limiting

To prevent abuse, the API allows a maximum of:

* **100 requests per IP**
* **Per 15-minute window**

After which, you'll receive:

```json
{
  "status": 429,
  "error": "Too many requests, please try again later."
}
```

---

## 🧪 Testing with Postman

A Postman Collection is included to test:

* ✅ Valid responses
* ❌ Invalid/missing years
* ❌ 404 not found
* 🚀 Rate limiting

> 🔗 [Postman Collection JSON](./wimbledon-api.postman_collection.json)

To run rate limiting test:

* Open the Postman Collection Runner
* Set 101 iterations for the **"Rate Limit Test"** request

---

## 📁 Folder Structure

```
wimbledon-api/
├── controllers/         # Request handlers
├── routes/              # API route definitions
├── validators/          # Joi validation logic
├── data/                # Static JSON data
├── middlewares/         # Custom middlewares (e.g. rateLimiter)
├── app.js               # App setup
├── server.js            # Server entry point
├── Dockerfile           # Container setup
├── .env                 # Environment variables
├── README.md            # You're here
```

---

## ⚙️ Local Setup

### 🖥 Prerequisites

* Node.js v16+
* npm
* (Optional) Docker

### 🔧 Install Dependencies

```bash
git clone https://github.com/Prabal-verma/wimbledon-api.git
cd wimbledon-api
npm install
```

### 🔐 Environment Setup

Create a `.env` file:

```env
PORT=3000
NODE_ENV=development
```

### ▶️ Start the Server

```bash
npm run dev   # For development
npm start     # For production
```

---
