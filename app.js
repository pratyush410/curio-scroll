// Navigation highlight
window.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href.includes(currentPage) || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Sidebar link effects
document.querySelectorAll(".sidebar-link").forEach(link => {
  link.addEventListener("mouseenter", function() {
    this.style.color = "#a78bfa";
  });
  link.addEventListener("mouseleave", function() {
    this.style.color = "";
  });
});

// DEBATE & THOUGHT EXPERIMENTS
function voteDebate(btn, option) {
  btn.classList.add("selected");
  btn.textContent = "✓ Your vote counted!";
  setTimeout(() => {
    btn.classList.remove("selected");
    btn.textContent = btn.textContent.replace("✓ Your vote counted!", `${option === 'threat' ? '🚨 Threat' : '🚀 Opportunity'} (${Math.floor(Math.random() * 300 + 200)} votes)`);
  }, 1500);
}

function chooseOption(btn, choice) {
  btn.classList.add("selected");
  btn.textContent = "✓ Your choice saved!";
  setTimeout(() => {
    btn.classList.remove("selected");
  }, 1500);
}

function joinThread(btn) {
  alert("You've joined the discussion! Share your thoughts in the comments.");
}

// REELS FUNCTIONALITY
let currentReelIndex = 0;
const reels = document.querySelectorAll(".reel");

function scrollReel(direction) {
  if (reels.length === 0) return;
  reels[currentReelIndex].classList.remove("active");
  currentReelIndex += direction;
  if (currentReelIndex < 0) currentReelIndex = reels.length - 1;
  if (currentReelIndex >= reels.length) currentReelIndex = 0;
  reels[currentReelIndex].classList.add("active");
}

// INTERACTIVE REEL FEATURES
function answerQuiz(btn, isCorrect) {
  if (isCorrect) {
    btn.style.background = "#10b981";
    btn.textContent = "✓ Correct!";
  } else {
    btn.style.background = "#ef4444";
    btn.textContent = "✗ Try again";
  }
  setTimeout(() => {
    btn.style.background = "";
    btn.textContent = btn.textContent.replace("✓ Correct!", "").replace("✗ Try again", "");
  }, 1500);
}

function joinChallenge(btn, days) {
  openModal(`🎉 You've joined the ${days}-day challenge! Start your journey today.`);
}

function votePoll(btn, choice) {
  const percent = choice === 'sunrise' ? 65 : 35;
  btn.style.background = var(--accent);
  openModal(`You voted for ${choice}. Current result: ${percent}%`);
}

// GAMES
function startGame(gameType) {
  const gameModal = document.getElementById("game-modal");
  const gameTitle = document.getElementById("game-title");
  const gameContent = document.getElementById("game-content");

  const games = {
    "guess-word": { title: "Guess The Word", content: "Can you guess: _ _ _ _ _ (5 letters: A writing system)<br><br><button class='action-btn' onclick='endGame()'>ANSWER: SCRIPT</button>" },
    "speed-typing": { title: "Speed Typing", content: "Type this sentence as fast as you can:<br>'The quick brown fox jumps over the lazy dog'<br><br><input type='text' placeholder='Type here...' style='width:100%;padding:10px;margin:10px 0;border-radius:8px;border:none;'><br><button class='action-btn' onclick='endGame()'>Submit</button>" },
    "puzzle": { title: "Puzzle Master", content: "Solve: 8 ÷ 2(2+2) = ?<br><br><button class='action-btn' onclick='endGame(\"1\")'>1</button><br><button class='action-btn' onclick='endGame(\"16\")'>16</button><br><button class='action-btn' onclick='endGame(\"4\")'>4</button>" },
    "color-match": { title: "Color Match", content: "Match the colors before time runs out!<br><div style='display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:20px 0;'><div style='background:#ef4444;padding:20px;border-radius:8px;cursor:pointer;'>Red</div><div style='background:#3b82f6;padding:20px;border-radius:8px;cursor:pointer;'>Blue</div><div style='background:#10b981;padding:20px;border-radius:8px;cursor:pointer;'>Green</div><div style='background:#f59e0b;padding:20px;border-radius:8px;cursor:pointer;'>Yellow</div></div><button class='action-btn' onclick='endGame()'>Score: 1200</button>" },
    "trivia": { title: "Trivia Battle", content: "Q: Which planet is known as the Red Planet?<br><br><button class='action-btn' onclick='endGame(\"Mars\")'>Mars</button><br><button class='action-btn' onclick='endGame()'>Venus</button><br><button class='action-btn' onclick='endGame()'>Jupiter</button>" },
    "memory": { title: "Memory Lane", content: "Tap tiles to find pairs!<br><div style='display:grid;grid-template-columns:2fr 2fr;gap:10px;margin:20px 0;'><div style='background:#6366f1;padding:20px;border-radius:8px;cursor:pointer;'>?</div><div style='background:#6366f1;padding:20px;border-radius:8px;cursor:pointer;'>?</div><div style='background:#6366f1;padding:20px;border-radius:8px;cursor:pointer;'>?</div><div style='background:#6366f1;padding:20px;border-radius:8px;cursor:pointer;'>?</div></div><button class='action-btn' onclick='endGame()'>Score: 850</button>" }
  };

  gameTitle.textContent = games[gameType].title;
  gameContent.innerHTML = games[gameType].content;
  gameModal.style.display = "flex";
}

function closeGame() {
  document.getElementById("game-modal").style.display = "none";
}

function endGame(answer = null) {
  openModal(`🎉 Game Complete! Your Score: ${Math.floor(Math.random() * 500 + 800)}`);
  closeGame();
}

// AI TASKS
function startTask(taskType) {
  const tasks = {
    "color-psychology": "Create a mood board with 3 colors. Upload your result!",
    "micropoetry": "Write 3 micro-poems. Share your favorite with the community!",
    "perspective-flip": "Write about a problem from 3 angles. Deep thinking ahead!",
    "future-vision": "Create your 5-year vision board. Dream big!",
    "sensory": "Explore one object with all 5 senses. Document it!",
    "reverse-story": "Write a story backwards. Time to think creatively!"
  };
  openModal(`Task: ${tasks[taskType]}<br><br><button class='action-btn' onclick='completeTask()'>Mark Complete</button>`);
}

function completeTask() {
  openModal("🎉 Task Completed! +100 XP earned!");
}

// eBOOK
function filterEbooks(category) {
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
  
  document.querySelectorAll(".ebook-card").forEach(card => {
    if (category === "all" || card.getAttribute("data-category") === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function readEbook(bookId) {
  openModal("📖 Opening eBook reader...<br>Happy reading!");
}

function downloadEbook(bookId) {
  openModal("⬇️ Downloading...<br>Your eBook will be ready shortly!");
}

// POST ACTIONS
function likePost(btn) {
  btn.textContent = "❤️ Liked!";
  btn.style.background = "#ef4444";
  setTimeout(() => {
    btn.textContent = btn.dataset.default || "👍 Like";
    btn.style.background = "";
  }, 1200);
}

function likeReel(btn) {
  const currentText = btn.textContent;
  const count = parseInt(currentText.match(/\d+\.?\d*/)[0]);
  btn.textContent = `❤️ ${(count + 0.1).toFixed(1)}K`;
  btn.style.background = "#ef4444";
  setTimeout(() => {
    btn.textContent = currentText;
    btn.style.background = "";
  }, 1200);
}

function commentPost() {
  const comment = prompt("Enter your comment:");
  if (comment) {
    openModal("💬 Your comment has been posted!");
  }
}

function sharePost() {
  openModal("🔄 Link copied to clipboard!");
}

// MODAL
function openModal(msg) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `<div class="modal-content">
    <p>${msg}</p>
    <button onclick="this.parentNode.parentNode.remove()">Close</button>
  </div>`;
  document.body.appendChild(modal);
}

// Keyboard navigation for reels
document.addEventListener("keydown", function(e) {
  if (window.location.pathname.includes("reels.html")) {
    if (e.key === "ArrowUp") scrollReel(-1);
    if (e.key === "ArrowDown") scrollReel(1);
  }
});
