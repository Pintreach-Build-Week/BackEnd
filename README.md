# BackEnd

Pintereach

As a researcher, it's difficult to keep track of articles you want to read later. Pintereach helps you research by enabling you to save and organize articles in to categories to read later.

## Auth endpoints(Register/Login/GET users)

# Register endpoint:
- /api/auth/register (POST)

- payload (body):
   ex: {
        username: "username here...",
        password: "password here..."
    }

- no text response/auth token

# Login endpoint:
- /api/auth/login (POST)

- payload (body):
   ex: {
        username: "username here...",
        password: "password here..."
    }

- text response/auth token:
    'Welcome username! here is a token...' { auth token }

# GET users endpoint
- /api/auth/users (GET)

- no payload (body)

# GET users by id
- /api/auth/users/:id (GET)

- payload (body): 
   ex: {
        id: 1
    }