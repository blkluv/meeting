#!/bin/bash

API_KEY="MeetONS_default_secret"
# MeetONS_URL="http://localhost:3000/api/v1/meeting"
# MeetONS_URL="https://meetons.up.railway.app/api/v1/meeting"
MeetONS_URL="https://meetons.cleverapps.io/api/v1/meeting"

curl $MeetONS_URL \
    --header "authorization: $API_KEY" \
    --header "Content-Type: application/json" \
    --request POST