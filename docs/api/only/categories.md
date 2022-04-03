---
sidebar_position: 2
---

# Categories

Categories are created and set up on the publisher dashboard. You are only able to fetch the categories that you have created through the
PublisherAPI. Under each category is the collection of [slots](./slots.md).

## GraphQL Request

```graphql
query {
    currentPublisher {
        findCategories(input: {
            publisherId: "e19ie-..."
            filter: {
                id: "2319ef-..."
            }
        }) {
            id
            name
            description
            ...
        }
    }
}
```

| Field       | Required | Description                       | Format          | Default |
| ----------- | -------- | --------------------------------- | --------------- | ------- |
| publisherId | true     | Your publisher id                 | UUID v4         |
| filter      | false    | Additional filters for categories | Category filter |

#### Category filter

| Field | Required | Description     | Format  | Default |
| ----- | -------- | --------------- | ------- | ------- |
| id    | true     | Slot identifier | UUID v4 |

### Response

```json
{
  "data": {
    "findCategories": [
      {
        "id": "3cc60e23-6a81-4958-8c6e-b2a5b9a89267",
        "name": "Category name",
        "description": "Description of my category"
      }
    ]
  }
}
```

| Field       | Description          | Format  |
| ----------- | -------------------- | ------- |
| id          | Category id          | UUID v4 |
| name        | Category name        | String  |
| description | Category description | String  |
