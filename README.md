# Medical Appointment Booking Website (MERN Stack)

Welcome to the Medical Appointment Booking Website repository! This web application is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, and it allows users to book medical appointments with ease. The project also integrates JWT authentication for user security. Additionally, I have implemented Tailwind CSS to ensure that the project is fully responsive across various devices and screen sizes. Another goal of this project to explore how to use PostgreSQL with Javascript, so I started to implement it with the help of TypeORM in a side branch.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)

## Features

- **User Authentication:** Secure user registration and login using JWT (JSON Web Tokens).
- **Appointment Booking:** Users can easily search for available medical services and book appointments.
- **User Dashboard:** A user-friendly dashboard for managing appointments and personal information.
- **Responsive Design:** Modern and mobile-responsive user interface for a seamless experience on all devices.

## Demo

![Demo1](./frontend/src/assets/images/demo1.png)
![Demo2](./frontend/src/assets/images/demo2.png)
![Demo3](./frontend/src/assets/images/demo3.png)
![Demo4](./frontend/src/assets/images/demo4.png)
![Demo5](./frontend/src/assets/images/demo5.png)
![Demo6](./frontend/src/assets/images/demo6.png)
![Demo6](./frontend/src/assets/images/demo7.png)

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone git@github.com:bettitaksas/medi-pointment.git

2. Navigate to the project directory
3. Install server and cliend dependencies after navigating backand or frontend folder:

   ```bash
   npm install

4. Create a .env file in the server directory and configure your environment variables. You will need to set up MongoDB and Stripe credentials: 

   ```bash
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key

5. Start the server from the backend folder and the client from the frontend folder:

   ```bash
   npm run dev

## Technologies

- **Frontend:** 
    - React.js
    - React Router for routing
    - Tailwind
- **Backend:** 
    - Node.js with Express.js
    - MongoDB for database storage
    - PostgreSQL for database storage - in a side branch
    - JSON Web Tokens (JWT) for authentication

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and ensure the code is properly tested.
- Submit a pull request with a detailed description of your changes.
