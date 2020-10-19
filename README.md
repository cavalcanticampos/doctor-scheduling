# Doctor Scheduling

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Api

### Setup

- `npm install` to install dependencies
- `node index.js` to run (port 4000)

## Client

### Setup

- `npm install` to install dependencies
- `npm run start` to run (port 3000)

### Preamble

## Database

I used MongoDB to save the data in two collections (users and appointments). If you want to run locally, change URI in `db.js`

## Api

The api was built in Node.js using the Express framework to handle requests. Routes have been created:

- /users (GET, POST)
- /users/doctors (GET)
- /appointments (GET, POST)
- /login (POST)

Authentication was built using JSON Web Token (JWT)

If I had more time I would improve:

- develop an authorization flow
- logout route
- create unit tests
- encrypt the password.
- create enviroments

## Client

Client was made with React.js, and been styled with Styled-Components. Atomic Design was the Pattern i choose for Folder Structure.

If I had more time I would improve:

- Create unit tests
- Improve UX (components like Snackbar, Toaster, Alert, Loading etc...)
- Refactor Registration and Create Appointment as a Modal Molecule
- Develop Delete and Edit Appointment
- Create enviroments
- Would add a more detail Appointment and user (such as photo, address price...)
