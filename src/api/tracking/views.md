# Registering views

Views can be registered by using the placement ID.

This endpoint should be called when an advertisement has been seen. What 'seen' means is up to you, for example:
- When the page has been loaded.
- When a user has scrolled down so that the advertisement is on their screen.
- When a user hovers over the advertisement.

## POST `https://api.enlay.io/p/v`

### Authorization
No authorization is required for this endpoint.

### Required headers
```
Content-Type: application/json
```

### Request body
```json
[
    { "id": "f85ad1c4-9c67-4218-a2b0-a637f155036f" },
    { "id": "8c873628-f6bb-4230-b8ee-3e112c361b3b" }
]
```

| Field | Description 
| --- | --- 
| id | The ID of the placement that has been viewed 
