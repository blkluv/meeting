# MeetONS

🚀 `A free WebRTC browser-based video call, chat and screen sharing` 🚀

<br>
(https://github.com/keshavguptawork/meetons-purple)

<br>

## Features

- Is `100% Free` - `Open Source` - `Self Hosted` 
- No download, plug-in, or login required, entirely browser-based
- Unlimited number of conference rooms without call time limitation
- Translated in 13 languages=
- Possibility to password protect the room during the meeting
- Desktop and Mobile compatible
- Optimized Room URL Sharing for mobile
- Audio Streaming crystal clear with detect speaking and volume indicator
- Screen Sharing to present documents, slides, and more...
- Select Audio Input - Output and Video source
- Chat with Emoji Picker to show you feeling, private messages, Markdown support, possibility to Save the conversations, and many more
- Speech recognition to send the speeches
- Full-Screen Mode on mouse click on the Video element, Pin/Unpin, Zoom in-out video element
- Possibility to Change UI Themes
- Right-click on the Video elements for more options
- ...

## Demo

- `Open` https://MeetONS.cleverapps.io/newcall `or` https://viMeetONSp.railway.app/newcall
- `Pick` your personal Room name and `Join To Room`
- `Allow` to use the camera and microphone
- `Share` the Room URL and `Wait` someone to join for video conference

## Room name

- You can also `join` directly to your room name by going to https://MeetONS.cleverapps.io/join/your-room-name-goes-here `or` https://viMeetONSp.railway.app/join/your-room-name-goes-here

## Quick start

- You will need to have [Node.js](https://nodejs.org/en/blog/release/v12.22.1/) installed, this project has been tested with Node version 12.X
- Clone this repo

```bash
git clone https://github.com/keshav
cd MeetONS
```

## Setup Turn and Ngrok

- Copy .env.template to .env

```bash
cp .env.template .env
```

`Turn`

Not mandatory but recommended.

- Create an account on http://numb.viagenie.ca
- Get your Account USERNAME and PASSWORD
- Fill in your credentials in the `.env` file
- Set `TURN_ENABLED=true`, if you want enable the Turn Server.

`Ngrok`

Not mandatory at all, but useful for tests and debug.

- Get started for free https://ngrok.com/
- Fill in your authtoken in the `.env` file
- Set `NGROK_ENABLED=true`, if you want to expose the server using the https tunnel, starting it from your local PC.

## Install dependencies

```js
npm install
```

## Start the server

```js
npm start
```

- Open http://localhost:3000 in browser

---

---

## Contributing

- Pull Requests are welcome! 🙂
- Please run [prettier](https://prettier.io) on all of your PRs before submitting, this can be done with `prettier --write MeetONS/`

---

<p align="center"> Made with ❤️ by <a href="https://www.github.com/keshavguptawork/">Keshav Gupta</a></p>
