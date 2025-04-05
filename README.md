# React eCommerce Client

This is the frontend of an eCommerce application built using React. The client is designed to interact with a Django backend to manage products, shopping carts, and user interactions.

## Features

- **Product Listings:** Display a list of products fetched from the Django backend.
- **Shopping Cart:** Add, remove, and update product quantities in the cart.
- **User Cart Persistence:** Cart data is saved locally in the browser for convenience.
- **Responsive Layout:** The layout is designed to be responsive for mobile and desktop views.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Vite:** Development server for fast builds and hot module replacement.
- **Axios:** For making HTTP requests to the Django API.
- **CSS (optional):** For styling the components, using basic CSS or styled-components.
- **LocalStorage:** For persisting cart data in the user's browser.

## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://npmjs.com/) (v6 or later)

### Clone the repository

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:EmmanuelOnyekachi21/MyShopREACTJS.git
   ```

2. Navigate into the project directory:

    ```bash
    cd my_shop_app
    ```
### Install dependencies
3. Install the required dependencies:

    ```bash
    npm install
    ```
### Run the development server
4. Start the React development server:
    ```bash
    npm run dev
    ```
    This will start the Vite development server, and the application should be accessible at http://localhost:5173.

## API integration
The frontend interacts with the following Django backend API endpoints:
- ```POST /add_to_cart/```- Adds an item to the cart.
- ```GET /get_cart/```- Retrieves the current user's cart data.
- ```GET /remove_cart_item/```- Removes an item from the cart.
- ```GET /get_num_of_items/```- Retrieves the number of items in the cart.
- ```GET /item_in_cart/```- Checks if a specific item is already in the cart.

### Ensure the backend is set up and running on your local or remote server.