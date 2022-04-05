---
sidebar_position: 2
---

# Fetching promotables

Enlay uses a webhook to make a request to your API to fetch a users promotables. It is advised when users log in to use the same email or credentials which relates to
the respective publisher (e.g If your site uses discord to log in, then it's recommended the user uses discord as a means of logging into their advertisement portal).

Below is an example of the request that we send. This will be sent at advertisement creation time to fetch the viable promotables for that user. For this example, it will target a specific API path (this is configurable on the publisher dashboard).

## POST `https://yourapi.com/api/v1/enlay/products`

### Signature validation

No validation required as of yet. We will notify when this is added.

### Request body

```json
{
    "id" "uuidv4...",
    "timestamp": "...",
    "type": "PROMOTABLE",
    "data": {
        "promotable": {
            "category": {
                "id": "uuidv4...",
                "name": "Category name"
            },
            "advertiser": {
                "email": "useremail@gmail.com",
                "discord_id": "1948237428423..."
            }
        }
    }
}
```

### Webhook structure

| Field     | Description               |
| --------- | ------------------------- |
| id        | The webhook ID            |
| timestamp | Webhook sent at timestamp |
| type      | Webhook type              |
| data      | Promotable                |

### Promotable object

| Field      | Description |
| ---------- | ----------- |
| category   | Category    |
| advertiser | Advertiser  |

### Category

| Field | Description   |
| ----- | ------------- |
| id    | Category ID   |
| name  | Category name |

### Advertiser

| Field      | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| email      | Advertiser email address                                    |
| discord_id | Advertiser discord id (optional depending on login options) |

## Expected response

We schema check every response you give back for validity checks. There are several fields you can store on an advertisement object (useful if you are wanting to generate placements on the frontend rather than the backend). The expected response payload is shown below.

### Expected response payload

```json
[
  {
    "id": "8cba...",
    "display_name": "Shiny shoes",
    "description": "Pink shoes with green laces",
    "image_url": "https://yourapi.com/api/v1/images/shiny-shoes.png"
  }
]
```

### Promotable

| Field        | Description                                               | Required |
| ------------ | --------------------------------------------------------- | -------- |
| id           | ID of the promotable/product on your platform             | Yes      |
| display_name | How the promotable is displayed to users on your platform | Yes      |
| description  | Description of the promotable to users                    | No       |
| image_url    | Image of the promotable                                   | No       |
