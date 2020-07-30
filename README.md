# BackEnd

Pintereach

As a researcher, it's difficult to keep track of articles you want to read later. Pintereach helps you research by enabling you to save and organize articles in to categories to read later.

# Dummy user:
    {
        username: "Darcy Lewis",
        password: "MewMew"
    }

## Auth endpoints(Register/Login/GET users)

# Register endpoint:
- https://bw-pt-pintereach-1-ebi-backend.herokuapp.com/api/auth/register (POST)

- payload (body):
   ex: {
        username: "username here...",
        password: "password here..."
    }

- no text response/auth token

# Login endpoint:
- https://bw-pt-pintereach-1-ebi-backend.herokuapp.com/api/auth/login (POST)

- payload (body):
   ex: {
        username: "username here...",
        password: "password here..."
    }

- text response/auth token:
    'Welcome username! here is a token...' { auth token }

# GET users endpoint
- https://bw-pt-pintereach-1-ebi-backend.herokuapp.com/api/auth/users (GET)

- no payload (body)

# GET users by id
- https://bw-pt-pintereach-1-ebi-backend.herokuapp.com/api/auth/users/:id (GET)

- payload (body): 
   ex: {
        id: 1
    }

# POST New Article
- https://bw-pt-pintereach-1-ebi-backend.herokuapp.com/articles (POST)
- example: POST localhost:4000/articles
- payload ex: { article: "Article data goes here"}

# GET All Articles
- https://bw-pt-pintereach-1-ebi-backend.herokuapp.com/articles (GET)
- example: GET localhost:4000/articles

# GET Article by ID
- https://bw-pt-pintereach-1-ebi-backend.herokuapp.com/articles/:id (GET)
- example: GET localhost:4000/articles/1

# PUT Update Article by ID
- https://bw-pt-pintereach-1-ebi-backend.herokuapp.com/articles/:id (PUT)
- example: PUT localhost:4000/articles/1
- payload ex: { article : "article updated" }

# DELETE Article by ID
- https://bw-pt-pintereach-1-ebi-backend.herokuapp.com/articles/:id (DELETE)
- example: DELETE localhost:4000/articles/1
