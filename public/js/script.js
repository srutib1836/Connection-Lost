function playErrorSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        gainNode.gain.value = 0.3;
        oscillator.start();
        setTimeout(() => oscillator.frequency.value = 400, 100);
        setTimeout(() => oscillator.stop(), 200);
    } catch (e) { console.log('Audio not available'); }
}

// --- NEW: Authentication Logic ---
async function authenticateUser() {
    const accessCode = document.getElementById('accessCodeInput').value.trim();
    const errorMsg = document.getElementById('loginError');

    if (!accessCode) return;

    try {
        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ accessCode: accessCode })
        });
        
        const data = await response.json();

        if (data.success) {
            // Hide Login Screen
            document.getElementById('landing').classList.add('hidden');
            
            // Show Specific Role Interface based on backend response
            if (data.role === 'employee') {
                document.getElementById('employee').style.display = 'block';
                updateClock();
                setInterval(updateClock, 1000);
                setTimeout(showInfoModal, 500);
            } else if (data.role === 'sysadmin') {
                document.getElementById('sysadmin').style.display = 'block';
            }
        } else {
            // Show Error
            playErrorSound();
            errorMsg.style.display = 'block';
            setTimeout(() => errorMsg.style.display = 'none', 3000);
        }
    } catch (error) {
        console.error('Auth Error:', error);
    }
}

function updateClock() {
    var now = new Date();
    var timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('clock').textContent = timeStr + ' | ' + now.toLocaleDateString();
}

function showModal(title, content) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalContent').innerHTML = content;
    document.getElementById('modalOverlay').style.display = 'block';
    document.getElementById('genericModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('genericModal').style.display = 'none';
    document.getElementById('genericModal').classList.remove('info-modal');
}

function showInfoModal() {
    var content = '<div style="font-family: \'Courier New\', monospace;">' +
        '<h3 style="color: #000080; border-bottom: 2px solid #000080; padding-bottom: 5px;">🎮 GAME RULES - LOCKDOWN 2020 CTF</h3>' +
        '<p><strong>OBJECTIVE:</strong> Find 6 hidden errors and decode them into HTTP status codes.</p>' +
        '<h3 style="color: #c00; margin-top: 15px;">👤 FOR THE EMPLOYEE:</h3>' +
        '<ul><li>Click icons to find errors</li><li>Read the Yellow Diary note for clues</li><li>Enter codes in the REBOOT panel</li></ul>' +
        '<h3 style="color: #080; margin-top: 15px;">🖥️ FOR THE SYSADMIN:</h3>' +
        '<ul><li>Check the INCIDENT LOG for the timeline</li><li>Match errors to the correct time</li><li>Tell the Employee the correct order</li></ul>' +
        '</div>';
    
    var modal = document.getElementById('genericModal');
    modal.classList.add('info-modal');
    showModal('📋 INFO.TXT - Game Instructions', content);
}

function showDecoy(type) {
    var decoys = {
        calc: { title: 'Calculator', content: '<div style="text-align: center; font-size: 3rem; font-family: monospace;">80085</div>' },
        notepad: { title: 'Notepad', content: 'Toilet paper<br>Sanity (out of stock)' },
        solitaire: { title: 'Solitaire', content: '<div style="text-align: center; font-size: 4rem;">🂡 🂢 🂣 🂤</div>' },
        mspaint: { title: 'MS Paint', content: '<div style="text-align: center; font-size: 2rem;">😊</div>' },
        music: { title: 'Winamp', content: '♫ Now Playing: Darude - Sandstorm' },
        email: { title: 'Outlook', content: '<strong>From:</strong> Your Boss<br>Can you jump on a call?' },
        recycle: { title: 'Recycle Bin', content: 'your_dignity.txt<br>free_time (folder)' },
        photos: { title: 'Photos', content: 'Remember outside? Good times.' },
        games: { title: 'Steam', content: 'Games in Library: 487<br>Completed: 12' },
        chat: { title: 'Slack', content: '<strong>@you:</strong> <em>(typing...)</em>' },
        zoom: { title: 'Zoom', content: '<strong>You are the only one here.</strong>' },
        word: { title: 'Word', content: 'A blank page stares back at you.' },
        excel: { title: 'Excel', content: '#DIV/0! Error' },
        powerpoint: { title: 'PowerPoint', content: 'Slide 1 of 47' },
        spotify: { title: 'Spotify', content: 'Lofi Hip Hop Radio - Beats to Work/Study to' },
        discord: { title: 'Discord', content: 'You are set to "Invisible"' },
        chrome: { title: 'Chrome', content: 'Memory usage: 8.2 GB' },
        calendar: { title: 'Calendar', content: '9:00 AM - Standup<br>4:00 PM - Alignment' },
        tasks: { title: 'To-Do', content: 'Procrastinate ✓' },
        camera: { title: 'Camera', content: '❌ Camera is currently being used by Zoom' },
        files: { title: 'Docs', content: '📁 FINAL_FINAL_v2' },
        weather: { title: 'Weather', content: '72°F - Not that you are going outside.' },
        terminal: { title: 'Terminal', content: '$ whoami<br>stressed_employee' },
        settings: { title: 'Settings', content: 'Meeting reminders: ON' },
        backup: { title: 'Backup', content: 'Last backup: 127 days ago' }
    };
    if (decoys[type]) showModal(decoys[type].title, decoys[type].content);
}

function showError1() {
    playErrorSound();
    showModal('📁 File Explorer', '<div class="file-explorer"><div class="file-item" onclick="showError1Part2()"><span style="font-size: 1.5rem;">📄</span><span>Bonus_Report.xlsx</span></div></div>');
}
function showError1Part2() {
    playErrorSound();
    showModal('⚠️ Access Error', '<div class="modal-icon">🔒</div><strong style="color: #c00;">STOP. IDENTITY COULD NOT BE VERIFIED.</strong>');
}
function showError2() {
    playErrorSound();
    showModal('🌐 Intranet', '<div class="browser-window"><div class="browser-content"><div class="broken-image">🖼️</div><strong>DEAD END</strong></div></div>');
}
function showError3() {
    playErrorSound();
    showModal('🎬 Netflix Party', '<div class="spinner"></div><strong>SYSTEM MELTDOWN</strong>');
}
function showError4() {
    playErrorSound();
    showModal('🍞 Smart Toaster', '<div class="modal-icon">🫖</div><strong>I\'M A TEAPOT</strong>');
}
function showError5() {
    playErrorSound();
    showModal('🔒 Corporate VPN', '<div class="padlock">🔐</div><strong style="color: #c00;">FORBIDDEN</strong>');
}
function showError6() {
    playErrorSound();
    showModal('📂 Folder', '<span class="modal-link" onclick="showError6Part2()">➜ Go to Project Files</span>');
}
function showError6Part2() {
    playErrorSound();
    showModal('⚠️ Redirect', '<div class="modal-icon">🚚</div><strong>MOVED</strong><p>We don\'t live here anymore.</p>');
}

// --- SECURE BACKEND CHECK ---
async function checkCode() {
    const input = document.getElementById('codeInput').value.trim();
    const messageDiv = document.getElementById('codeMessage');

    messageDiv.style.display = 'block';
    messageDiv.className = 'code-message';
    messageDiv.textContent = '⏳ Verifying with server...';

    try {
        const response = await fetch('/api/check-code', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: input })
        });
        
        const data = await response.json();

        if (data.success) {
            messageDiv.className = 'code-message code-success';
            messageDiv.textContent = '✓ ' + data.message;
            setTimeout(() => {
                document.getElementById('employee').style.display = 'none';
                document.getElementById('success').style.display = 'block';
                createConfetti();
            }, 1500);
        } else {
            playErrorSound();
            messageDiv.className = 'code-message code-error';
            messageDiv.textContent = '✕ ' + data.message;
            setTimeout(() => messageDiv.style.display = 'none', 4000);
        }
    } catch (error) {
        console.error('Error:', error);
        messageDiv.textContent = '⚠️ Server Connection Error';
    }
}

function createConfetti() {
    var colors = ['#0f0', '#0ff', '#f0f', '#ff0', '#fff'];
    for (var i = 0; i < 80; i++) {
        setTimeout(function() {
            var confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.getElementById('success').appendChild(confetti);
        }, i * 40);
    }
}
