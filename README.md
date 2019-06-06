# Role-Assigner - A platform that randomly assign roles to members of a given team.

[![Build Status](https://travis-ci.com/NedyUdombat/Role-Assigner.svg?branch=develop)](https://travis-ci.com/NedyUdombat/Role-Assigner)
[![Coverage Status](https://coveralls.io/repos/github/NedyUdombat/Role-Assigner/badge.svg?branch=develop)](https://coveralls.io/github/NedyUdombat/Role-Assigner?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/8802540ba9799ce15cd2/maintainability)](https://codeclimate.com/github/NedyUdombat/Role-Assigner/maintainability)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)

## Vision

Create a platform where teams can use to rotate their team leaders and quality Assurance personnels given a specific time.

---

## API Versioning

The API Versioning will follow this format:

```source-json
https://**/api/v1/** - for version 1 of the api.
https://**/api/v2/** - for version 2 of the api.
```

## API Spec

The preferred JSON object to be returned by the API should be structured as follows:

### Registration

`POST /api/v1/signup`

Example response body:

```source-json
{
  "user":{
    "email": "john.doe@email.com",
    "username": "johndoe",
    "token": "jwt.token.here",
  }
}
```

## Endpoints

#### Registration

`POST /api/v1/auth/signup`

Example request body:

```source-json
{
  "user":{
    "username": "Johndoe",
    "email": "john.doe@email.com",
    "password": "johndoe123"
  }
}
```

No authentication required, creates an account for the user

Required fields: `email`, `username`, `password`

#### Authentication

`POST /api/v1/auth/login`

Example request body:

```source-json
{
  "user":{
    "email": "jake@jake.jake",
    "password": "jakejake"
  }
}
```

No authentication required, returns a token and logs a user in.

Required fields: `email`, `password`

### ALL ENDPOINTS

```Javascript
##AUTHENTICATION
POST Request -> **/api/v1/auth/signup
POST Request -> **/api/v1/auth/login

##TEAM
POST Request -> **/api/v1/team/members = add a list of team members
GET Request ->  **/api/v1/team/members = get the list of all team members

##ROLE ASSIGNER
POST Request ->  **/api/v1/team/lead = generates a list  of team lead to lead for per specified duration for a certain period of time
POST Request ->  **/api/v1/team/qa = generates a list of 2 qa's to work per specified duration for a certain period of time.

```
