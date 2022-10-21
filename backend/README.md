# ChotaURL-api
***
### Rest API for url shortening / obfuscation and pastebin clone

## Installation

* run `$ npm install` or `$yarn`
* create a `.env` file and add
    `DB_URI=<your postgres database uri>`
* run **schema.sql** to create tables for your database

### Usage
Local Machine API: `http://localhost:5000/`

1.  #### URL Shortener / obfuscator 

* `GET  /q/<shortened url id>`
* `POST /q/`
```js
    {
      url: '<URL to be shortened>',
      flavor: '<your endpoint name>' [optional]
    }
```

2. #### Pastebin Clone
* `GET /p/<id>`
* `POST /p/`

```js
    {
        title: '<title of content>',
        content: '<your content>',
        language: '<programming language if any>' [optional]
    }
```


### ErrorIds
* 1 ERROR_CREATION
* 2 ERROR_INVALID_URL
* 3 ERROR_AUTHENTICATION [Admin Authentication]
* 4 ERROR_INVALID_USER
