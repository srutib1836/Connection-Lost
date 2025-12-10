# 😷 Lockdown Nostalgia 2020 – CTF Challenge

**“Connection Restored... hopefully.”**

Lockdown Nostalgia 2020 is a browser-based Capture The Flag (CTF) puzzle game set during the early days of remote work in 2020. Players navigate a retro, glitchy desktop environment and work together to reboot a crashed server.

---

## 🎮 Game Overview

The game supports **two players** (or one player switching roles):

### 👤 The Employee
- Clicks icons on a glitchy desktop
- Finds hidden system errors
- Reports error messages to the SysAdmin

### 🖥️ The SysAdmin
- Reads server logs and documentation
- Matches errors to HTTP status codes
- Provides the correct 6-digit reboot code

### 🎯 Objective
Find 6 system errors, convert them into HTTP status codes, and enter the correct sequence to reboot the server.

---

## 🛠️ Tech Stack

### Frontend
- HTML5  
- CSS3 (Animations)  
- Vanilla JavaScript

### Backend
- Node.js  
- Express.js

### Security
- Server-side validation  
- No client-side answer exposure

---

## 🚀 Installation & Setup

### 1️⃣ Prerequisites
You must have **Node.js** installed.

### 2️⃣ Project Structure

```text
lockdown-ctf/
├── package.json             # Dependencies configuration
├── server.js                # Main server entry point
├── config/
│   └── gameConfig.js        # Secret answer key location
├── routes/
│   └── gameRoutes.js        # API route logic
└── public/
    ├── index.html           # Main game interface
    ├── css/
    │   └── style.css        # Styles and animations
    └── js/
        └── script.js        # Frontend logic
```
## 🚀 Installation & Setup

### 1️⃣ Install Dependencies

Navigate to your project folder and run:

```bash
npm install
```

```bash
node server.js
```

You should see:

```text
✅ Server is running securely at http://localhost:3000
```

Play the Game
Open your browser and go to:
```text
http://localhost:3000
```

## 🕵️ How to Play

### PASSCODES : 
- Employee - WFH_HERO
- Sysadmin - SUDO_MASTER

### 👤 Role 1: The Employee

**View:** A chaotic desktop filled with Zoom, Slack, Netflix, and decoy icons.

**Tasks:**
- Click around to find the 6 real system errors
- Read the yellow Post-it Note (“My Day So Far”) to determine the correct order
- Describe each error message to the SysAdmin

### 🖥️ Role 2: The SysAdmin

**View:** Terminal interface showing logs and documentation.

**Tasks:**
- Check timestamps in the incident log
- Match the Employee’s errors to HTTP status codes using the Reference Manual
- Provide the correct 6-digit reboot code

---

## 📖 Reference Manual (HTTP Status Codes)

| HTTP Code | Status             | Meaning                                        |
|----------:|-------------------|------------------------------------------------|
| 301       | Moved Permanently  | Resource moved (e.g., folder relocated)       |
| 401       | Unauthorized       | Login or authentication failed                |
| 403       | Forbidden          | Server refuses access (e.g., VPN blocked)     |
| 404       | Not Found          | Resource not found                             |
| 418       | I'm a Teapot       | Cannot brew coffee with a teapot (Smart Toaster) |
| 503       | Service Unavailable| Server overloaded (e.g., Netflix crash)      |

---

## 🔐 Security Features

- Player enters a **6-digit code**
- `script.js` sends a **POST** request to `/api/check-code`
- The server validates it against the secret in:

```text
config/gameConfig.js
```

