# Gordon & Bros - Shoe E-commerce Frontend

This is a responsive e-commerce frontend project built using React and Tailwind CSS. The project showcases a modern UI for an online shoe store with multiple features like product browsing, cart management, and user authentication (frontend-based).

## Live Demo
idyllic-griffin-896839.netlify.app

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

src/
│
├── components/      # Reusable components (Navbar, ProductCard)
├── context/         # Context API (Auth, Cart, Search)
├── pages/           # All pages (Home, About, Contact, Cart, etc.)
├── datas/           # Static product data
├── assets/          # Images and media
└── App.jsx          # Main routing

## How to Run Locally

1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git

2. Go to project folder
cd your-repo-name

3. Install dependencies
npm install

4. Start the project
npm run dev

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