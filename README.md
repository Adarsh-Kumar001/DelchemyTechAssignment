# Weather App

A simple weather application that fetches weather data for a searched city using a deployed API. The backend is built with Express, and the frontend is built with Next.js.

## Features
- Get weather data (temperature, condition, humidity, wind speed) for a given city.
- Built with Express.js backend and Next.js frontend.
- Deployed backend API on Railway and frontend on Vercel.

### Deployment

#### Backend Deployment (Railway)
1. Push the backend code to a GitHub repository.
2. Create a Railway project and link it to the GitHub repository.
3. Deploy the backend and update the deployed URL in frontend

Deployment https://backend-production-04b2.up.railway.app/

To test it write this for ex: api/weather?city=thecity

Hence, for Chennai : https://backend-production-04b2.up.railway.app/api/weather?city=chennai

#### Frontend Deployment (Vercel)
1. Push the frontend code to a GitHub repository.
2. Create a Vercel project and link it to the GitHub repository.
3. Deploy the frontend to Vercel.

Deployment url : https://delchemy-tech-assignment.vercel.app/

### Usage

1. Enter a city name in the search bar on the frontend.
2. View the weather details (temperature, condition, humidity, wind speed) for that city.
