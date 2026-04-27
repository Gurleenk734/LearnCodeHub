// progress.js

// Initialize progress
function initProgress() {
  if (!localStorage.getItem("learnProgress")) {
    const data = {
      lessons: [],     // completed lessons
      quizzes: {},     // quiz scores
      points: 0,
      badges: []
    };
    localStorage.setItem("learnProgress", JSON.stringify(data));
  }
}

// Get data
function getData() {
  return JSON.parse(localStorage.getItem("learnProgress"));
}

// Save data
function saveData(data) {
  localStorage.setItem("learnProgress", JSON.stringify(data));
}

// ✅ MARK LESSON COMPLETE (matches your button)
function completeTutorial(lessonId) {
  let data = getData();

  if (!data.lessons.includes(lessonId)) {
    data.lessons.push(lessonId);
    data.points += 10;
  }

  updateBadges(data);
  saveData(data);

  alert("✅ Lesson Completed!");
}

// ✅ SAVE QUIZ SCORE (matches your quiz)
function saveQuizScore(quizName, score) {
  let data = getData();

  data.quizzes[quizName] = score;
  data.points += score;

  updateBadges(data);
  saveData(data);
}

// 🏆 BADGES
function updateBadges(data) {
  if (data.points >= 20 && !data.badges.includes("Beginner")) {
    data.badges.push("Beginner");
  }
  if (data.points >= 50 && !data.badges.includes("Intermediate")) {
    data.badges.push("Intermediate");
  }
  if (data.points >= 100 && !data.badges.includes("Pro")) {
    data.badges.push("Pro");
  }
}

// 📊 DISPLAY PROGRESS (for future page)
function displayProgress() {
  let data = getData();

  let lessonEl = document.getElementById("tutorialCount");
  let pointEl = document.getElementById("points");
  let badgeEl = document.getElementById("badges");

  if (lessonEl) lessonEl.innerText = data.lessons.length;
  if (pointEl) pointEl.innerText = data.points;
  if (badgeEl) badgeEl.innerText = data.badges.join(", ") || "None";
}

// INIT
initProgress();