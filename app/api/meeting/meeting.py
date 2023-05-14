import requests
import json

API_KEY = "MeetONS_default_secret"
# MeetONS_URL = "http://localhost:3000/api/v1/meeting"
# MeetONS_URL = "https://meetons.up.railway.app/api/v1/meeting"
MeetONS_URL = "https://meetons.cleverapps.io/api/v1/meeting"

headers = {
    "authorization": API_KEY,
    "Content-Type": "application/json",
}

response = requests.post(
    MeetONS_URL,
    headers=headers
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("meeting:", data["meeting"])
