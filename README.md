# Postman Pechkin API

## Documentation

Welcome to the Postman Pechkin API! This documentation will supply
with you all the information you need to start making your HTTP
requests. Give our documentation a read before you get started on
your project!

## Base URL

https://postman-pechkin.herokuapp.com/api/

## Rate Limit

This API is free. However, to prevent harmful activity, there is a rate limit of 10,000 requests a day. If you happen to reach that limit, you will receive a 429 status code, and regain access after 24 hours.

## API Endpoints

### Send mail POST request

Endpoint from sending a letter from Gmail.

```
/api/mail
```

#### Mail Request Attributes

| Attribute |  Type  | Description           |
| --------- | :----: | --------------------- |
| email     | string | Mail recipient        |
| subject   | string | Subject of the letter |
| text      | string | Body of the letter    |

### Send telegram message POST request

Endpoint for sending letter to [@IgorIvanovichPechkinBot](https://t.me/IgorIvanovichPechkinBot), if you start a conversation with the bot. You should find out the chat ID with the bot, whether it is a personal chat or a group (with [@IgorIvanovichPechkinBot](https://t.me/IgorIvanovichPechkinBot)).

```
/api/telegram
```

#### Telegram Message Request Attributes

| Attribute |      Type n      | Description         |
| --------- | :--------------: | ------------------- |
| cid       | string \| number | Recipient chat ID   |
| message   |      string      | Body of the message |

#### Get all quotes

_Work in progress..._

```
/api/quotes
```

### Developers

- **Kotov** (kotov.smtp@gmail.com)

Made with love ❤️
