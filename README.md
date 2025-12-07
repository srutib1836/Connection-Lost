#😷 Lockdown Nostalgia 2020 - CTF Challenge

"Connection Restored... hopefully."

Welcome to Lockdown Nostalgia 2020, a browser-based Capture The Flag (CTF) puzzle game that transports you back to the chaos of remote work in early 2020. This project simulates a retro/glitchy desktop environment where players must cooperate to reboot a crashed server.

#🎮 Game Overview

The game is designed for two players (or one player alternating roles) who must communicate to solve the puzzle.

The Employee: Stuck on a glitchy desktop interface, they must find broken files and error messages.

The SysAdmin: Accesses the server logs and reference manuals. They hold the key to translating the Employee's chaos into technical data.

Objective: Find 6 specific system errors, translate them into HTTP Status Codes, and enter the correct sequence to reboot the server.

#🛠️ Tech Stack

This project uses a secure client-server architecture to prevent client-side cheating (inspect element).

Frontend: HTML5, CSS3 (Animations), Vanilla JavaScript.

Backend: Node.js, Express.js.

Security: Server-side validation of the answer key.

#🚀 Installation & Setup

Prerequisites

You must have Node.js installed on your computer.

Step 1: Download

Download the project files and ensure your folder structure looks like this:

lockdown-ctf/
├── package.json
├── server.js
├── config/
│   └── gameConfig.js
├── routes/
│   └── gameRoutes.js
└── public/
    ├── index.html
    ├── css/
    │   └── style.css
    └── js/
        └── script.js



Step 2: Install Dependencies

Open your terminal/command prompt, navigate to the project folder, and run:

npm install



Step 3: Run the Server

Start the application by running:

node server.js



You should see the message:
✅ Server is running securely at http://localhost:3000

Step 4: Play!

Open your web browser and navigate to:
http://localhost:3000

#🕵️ How to Play

Role 1: The Employee 👤

Your View: A chaotic desktop filled with icons (Zoom, Slack, Netflix, etc.).

Your Job: Click around! Most icons are decoys, but 6 specific icons will trigger SYSTEM ERRORS.

The Hint: Read the Yellow Post-it Note ("My Day So Far") to understand the order of events.

The Task: Describe the error messages to the SysAdmin.

Role 2: The SysAdmin 🖥️

Your View: A terminal interface with server logs and technical tables.

Your Job: Look at the Incident Log to see when errors occurred.

The Task: Match the Employee's description to the HTTP Status Code Reference Manual (e.g., "Page not found" = 404).

The Solution: Provide the Employee with the correct code sequence.

#🔐 Security Features

Unlike basic HTML games, the answer code is not stored in the browser.

The User enters a code.

script.js sends a POST request to /api/check-code.

The server compares it against the secret in config/gameConfig.js.

The server responds with Success or Fail.

Trying to cheat by inspecting the source code will only reveal the API endpoint, not the password!

📝 License

This project is open source. Feel free to modify the chaos!
