# London Rug Cleaning

This is a web application for a fictional company, London Rug Cleaning, that specializes in professional rug cleaning services in London. The application allows users to browse services, view a gallery of work, read blog posts about rug care, and request a free quote.

## Features

  * **Services Overview**: Detailed descriptions of various rug cleaning services offered, including Persian, Oriental, wool, and antique rug cleaning.
  * **Before & After Gallery**: A gallery showcasing the results of the company's cleaning services.
  * **Blog**: A blog with articles on rug care and maintenance.
  * **Contact Form**: A form for users to request a free quote.
  * **Responsive Design**: The application is designed to be accessible on various devices, including desktops, tablets, and mobile phones.

## Technologies Used

This project is a single-page application built with the following technologies:

  * **Vite**: A fast build tool for modern web development.
  * **React**: A JavaScript library for building user interfaces.
  * **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
  * **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
  * **shadcn-ui**: A collection of re-usable components built with Radix UI and Tailwind CSS.
  * **React Router**: For client-side routing.
  * **React Helmet Async**: To manage changes to the document head.
  * **Resend**: For handling email delivery of quote requests.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can install them using [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating).

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/london-rug-cleaning/london-rug-cleaning.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd london-rug-cleaning
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```
4.  Start the development server:
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:8080`.

## Project Structure

The project follows a standard React application structure:

  * `public/`: Contains static assets like images, fonts, and the `index.html` file.
  * `src/`: Contains the main source code of the application.
      * `components/`: Contains reusable UI components.
      * `pages/`: Contains the main pages of the application.
      * `lib/`: Contains utility functions.
      * `hooks/`: Contains custom React hooks.
      * `data/`: Contains mock data for the blog.
  * `functions/`: Contains serverless functions for handling backend logic, such as sending emails.

## Deployment

This project can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages. For deploying to Cloudflare Pages, you can use the `wrangler.toml` file included in the repository.