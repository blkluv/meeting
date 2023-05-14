const fetch = require("node-fetch");

const API_KEY = "MeetONS_default_secret";
// const MeetONS_URL = 'http://localhost:3000/api/v1/meeting';
// const MeetONS_URL = 'https://meetons.up.railway.app/api/v1/meeting';
const MeetONS_URL = "https://meetons.cleverapps.io/api/v1/meeting";

function getResponse() {
  return fetch(MeetONS_URL, {
    method: "POST",
    headers: {
      authorization: API_KEY,
      "Content-Type": "application/json",
    },
  });
}

getResponse().then(async (res) => {
  console.log("Status code:", res.status);
  const data = await res.json();
  console.log("meeting:", data.meeting);
});
