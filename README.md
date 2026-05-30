# Gordon & Bros - Shoe E-commerce Frontend

This is a responsive e-commerce frontend project built using React and Tailwind CSS. The project showcases a modern UI for an online shoe store with multiple features like product browsing, cart management, and user authentication (frontend-based).

## Live Demo
https://idyllic-griffin-896839.netlify.app
## GitHub Repository
https://github.com/surpalsinh22/gordon-bros-frontend.git
## Features

- Responsive Navbar with search functionality
- Product categories (Boots, Sandals, Formal, Sneakers)
- Product detail page with size and quantity selection
- Add to cart functionality
- Cart management (add/remove items)
- Basic authentication using localStorage (Signup/Login)
- Payment page UI (frontend only)
- Search functionality across products
- Clean and modern UI using Tailwind CSS

## Tech Stack

- React JS
- Tailwind CSS
- React Router DOM
- Context API (for state management)

## Project Structure

## Project Structure

src

components
- Navbar.jsx
- ProductCard.jsx
- Footer.jsx

context
- AuthContext.jsx
- CartContext.jsx
- SearchContext.jsx

pages
- Home.jsx
- About.jsx
- Contact.jsx
- Cart.jsx
- Login.jsx
- Signup.jsx
- ProductDetails.jsx
- Payment.jsx

datas
- products.js

assets

App.jsx
main.jsx



## How to Run Locally

1. Clone the repository  
git clone https://github.com/surpalsinh22/gordon-bros-frontend.git
  

2. Go to project folder  
cd gordon-bros-frontend  

3. Install dependencies  
npm install  

4. Start the project  
npm start

## Important Note

This is a frontend-only project. All data (user authentication and cart) is handled using localStorage. No backend or database is integrated.

## Future Improvements

- Integrate backend using Node.js and Express
- Add MongoDB for database
- Implement real authentication (JWT)
- Add real payment gateway integration
- Improve performance and security

## Author

Surpalsinh Ramlavat
Frontend Developer