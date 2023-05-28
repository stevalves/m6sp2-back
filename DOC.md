### Paths:

+ [**Users Routes**](https://github.com/stevalves/m6sp2-back/blob/main/DOC.md#users)
+ [**Login Routes**](https://github.com/stevalves/m6sp2-back/blob/main/DOC.md#login)
+ [**Contacts Routes**](https://github.com/stevalves/m6sp2-back/blob/main/DOC.md#contacts)

## Users

#### POST - _localhost:3000/users_
+ Request (application/json)

    + Body

            {
                "name": "example",
	            "email": "example@mail.com",
	            "password": "example",
	            "phone": 1234
            }

+ Response 201 (application/json)

    + Body

            {
              "id": "ce24e55d-a449-4b90-b08a-45eeb0e1c2e8",
              "name": "example",
              "email": "example@mail.com",
              "phone": 1234,
              "created_at": "2023-05-28T05:21:11.980Z"
            }
           
#### GET - _localhost:3000/users_
+ Request (application/json)

+ Response 200 (application/json)

    + Body

            
            [
              {
                 "id": "ce24e55d-a449-4b90-b08a-45eeb0e1c2e8",
                "name": "example",
                "email": "example@mail.com",
                "phone": 1234,
                "created_at": "2023-05-28T05:21:11.980Z"
              }
            ]
            
#### PATCH - _localhost:3000/users_
+ Request (application/json)

    + Headers

            Authorization: Bearer [access_token]

    + Body

            {
              "name": "exampleUpdated"
            }

+ Response 200 (application/json)

    + Body

            {
              "id": "ce24e55d-a449-4b90-b08a-45eeb0e1c2e8",
              "name": "exampleUpdated",
              "email": "example@mail.com",
              "phone": 1234,
              "created_at": "2023-05-28T05:21:11.980Z"
            }
            
#### DELETE - _localhost:3000/users_
+ Request (application/json)

    + Headers

            Authorization: Bearer [access_token]

+ Response 204 (no-content)

## Login
            
#### POST - _localhost:3000/login_
+ Request (application/json)

    + Body

            {
              "email": "example@mail.com",
              "password": "example"
            }

+ Response 200 (application/json)

    + Body

            {
              "token": [access_token]
            }
            
## Contacts

#### POST - _localhost:3000/contacts_
+ Request (application/json)

    + Headers

            Authorization: Bearer [access_token]
            
    + Body

            {
              "name": "example",
              "email": "example@mail.com",
              "phone": 1234
            }

+ Response 201 (application/json)

    + Body

            {
              "id": "d1af6fd4-0976-4542-91ad-5f5af560a9f3",
              "name": "example",
              "email": "example@mail.com",
              "phone": 1234,
              "created_at": "2023-05-28T05:35:33.038Z"
            }
            
#### GET - _localhost:3000/contacts_
+ Request (application/json)

    + Headers

            Authorization: Bearer [access_token]

+ Response 200 (application/json)

    + Body

            [
              {
                "id": "d1af6fd4-0976-4542-91ad-5f5af560a9f3",
                "name": "example",
                "email": "example@mail.com",
                "phone": 1234,
                "created_at": "2023-05-28T05:35:33.038Z"
              }
            ]
            
#### PATCH - _localhost:3000/contacts/:id_
+ Request (application/json)

    + Headers

            Authorization: Bearer [access_token]

    + Body

            {
              "name": "exampleUpdated"
            }

+ Response 200 (application/json)

    + Body

            {
              "id": "d1af6fd4-0976-4542-91ad-5f5af560a9f3",
              "name": "exampleUpdated",
              "email": "example@mail.com",
              "phone": 1234,
              "created_at": "2023-05-28T05:35:33.038Z"
            }
            
#### DELETE - _localhost:3000/contacts/:id_
+ Request (application/json)

    + Headers

            Authorization: Bearer [access_token]

+ Response 204 (no-content)
