# BOOK STORE API

> This api is developed using Node.js, Express and MySQL. Its main focus is on how to handle CRUD(Create, Read, Update, Delete) operations breezily and efficiently based on best practices.

## Creation and Setup

### Creating a Node.js app

> Initialize a new node.js project with the command below:

``` bash
mkdir book-store-api && cd book-store-api
npm init --yes
npm install cors dotenv express nanoid mysql2
npm install nodemon -D
```

## Used packages

1. **dotenv:** a zero-dependency module that loads environment variables from a .env file into Node.js app process.env. to ease configurations.

2. **cors:** Enables Cross-Origin Resource Sharing, which allows a server to specify who can access its resources.

3. **express:** Node.js framework for simplifying the process of building web applications and APIs.

4. **mysql2:** A drop-in package as a replacement for mysql which provides a faster and efficient way to interact with MySQL databases in Node.js compared to MySQL-Native.

5. **Nanoid:** A tiny, secure, URL-friendly, unique string ID generator for JS. It consistently outperforms UUID in terms of ID generation time, making it a better choice when performance is a priority.

6. **nodemon:** Helps develop Node.js based applications by automatically restarting the node application when file changes in the app.

## Middlewares Description

- **cors:**: This middleware is used to enable CORS for requests coming from **"http://localhost:5173"**
ie. Vite app). CORS allows the specified origin to access the server's resources.

- **express.json():** This middleware parses incoming JSON data from the request body and makes it available on the req.body object.

- **notFound:** This middleware handles 404 responses, meaning that if no route matches the incoming request, this middleware will be triggered and send a proper 404 response.

- **handleError:** This middleware is responsible for handling errors that occur during the request-response cycle. It helps provide consistent error responses for various situations.

## Database Structure

```mysql
CREATE DATABASE 'api_database'

CREATE TABLE `books` (
    num INT(5) NOT NULL AUTO_INCREMENT,
    id VARCHAR(120) NOT NULL,
    title VARCHAR(200) NOT NULL,
    content MEDIUMTEXT NOT NULL UNIQUE,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY(num)
);
```

## Version Control

```git
echo "# books-store-api-node" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Gadrawingz/books-store-api-node.git
```

## Screenshots

### Create a Book (POST)

![Create a Book](/images/create-book.png "POST")

### Get All books (GET)

![Get all Books](/images/get-all-books.png "GET")

### Get a single Book (GET)

![Get single Book](/images/get-single-book.png "GET")

### Update a single book (PATCH)

![Update Book](/images/update-book.png "PATCH")
