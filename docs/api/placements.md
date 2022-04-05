---
sidebar_position: 4
---

# Placements

To get an advertisement to display you need to create a _placement_.

A _placement_ represents an single showing of an ad.

## GraphQL Request

```graphql
mutation {
  createPlacements(
    input: {
      slotId: "d4af8161-0993-4589-a0d5-f8718b062d93"
      max: 1
      unique: true
    }
  ) {
    # The time the placement was created
    timestamp

    # Unique ID of this placement
    id

    # ID of the advertisement showing in this placement
    advertisementId
  }
}
```

| Field  | Required | Description                                                                                                                                                                                                          | Format  | Default |
| ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| slotId | Yes      | The ID of the slot you'd like to get advertisements for.                                                                                                                                                             | UUID v4 |
| max    | No       | The maximum number of advertisements you'd like to show for a slot. For example, you may want to have a single slot for the front page of your slot, but on the page you'd like to display 3 ads in different spots. | Integer | 1       |
| unique | No       | When specifying a max of more than 1, setting `unique` to true ensures that different ads are returned instead of the same one multiple times.                                                                       | Boolean | true    |

### Response

```json
{
  "data": {
    "createPlacements": [
      {
        "timestamp": "2021-12-29T16:35:53+00:00",
        "id": "3cc60e23-6a81-4958-8c6e-b2a5b9a89267",
        "advertisementId": "015ec88f-5463-4c7e-bf34-362d0c60caba"
      }
    ]
  }
}
```

| Field           | Description                                              | Format                   |
| --------------- | -------------------------------------------------------- | ------------------------ |
| timestamp       | The time the placement was created                       | UTC timestamp as RFC3339 |
| id              | Unique ID of this placement                              | UUID v4                  |
| advertisementId | Unique ID of the advertisement showing in this placement | UUID v4                  |
