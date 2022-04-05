---
sidebar_position: 2
---

# Clicks

Clicks can be registered by using the placement ID.

## GET `https://api.enlay.io/p/{placement_id}/c`

### Authorization

No authorization is required for this endpoint.

### URL fields

| Field        | Description                                   |
| ------------ | --------------------------------------------- |
| placement_id | The ID of the placement that has been clicked |

### Query parameters

| Field        | Required | Description                                                                                                                                               | Example             |
| ------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| redirect_url | No       | A URL to redirect users to once they click on the advertisement. With this parameter the response code is set to `302` with a `Location` response header. | https://example.com |
