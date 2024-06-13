

### Blog API

This project is a RESTful Blog API built using Express.js and connected to a MongoDB database. It includes user authentication and supports various CRUD operations for blog posts.

#### Features:

- **User Authentication**:
  - **Sign Up**: Create a new account.
  - **Log In**: Authenticate with an existing account.
  
- **Blog Posts**:
  - **Create Post**: Add a new blog post.
  - **Read Posts**: Retrieve a list of all blog posts or a specific post by ID.
  - **Update Post**: Edit an existing blog post.
  - **Delete Post**: Remove a blog post.

#### Technologies Used:

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Token)**: For securing user authentication.

#### Setup and Installation:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```
     PORT=3000
     MONGODB_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     ```

4. **Start the server**:
   ```bash
   npm start
   ```

#### API Endpoints:

- **User Authentication**:
  - `POST /signup`: Register a new user.
  - `POST /login`: Authenticate an existing user.

- **Blog Posts**:
  - `POST /posts`: Create a new post. (Requires authentication)
  - `GET /posts`: Retrieve all posts.
  - `GET /posts/:id`: Retrieve a specific post by ID.
  - `PUT /posts/:id`: Update a specific post by ID. (Requires authentication)
  - `DELETE /posts/:id`: Delete a specific post by ID. (Requires authentication)

