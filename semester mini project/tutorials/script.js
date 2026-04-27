// Run Code
function runCode() {
  let code = document.getElementById("code").value;
  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML = code;
}

// Mark Complete
function markComplete(lesson) {
  localStorage.setItem(lesson, "done");
  loadProgress();
}

// Load ticks
function loadProgress() {
  let lessons = document.querySelectorAll(".sidebar a");

  lessons.forEach(link => {
    let id = link.getAttribute("data-lesson");

    if (localStorage.getItem(id) === "done") {
      link.classList.add("completed");
    }
  });
}
function runJS() {
  let code = document.getElementById("code").value;
  let frame = document.getElementById("output");

  frame.srcdoc = `
    <html>
    <body>
    <script>
      try {
        ${code}
      } catch(e) {
        document.body.innerHTML = e;
      }
    <\/script>
    </body>
    </html>
  `;
}
function runHTML() {
  let code = document.getElementById("code").value;
  let frame = document.getElementById("output");

  frame.srcdoc = code;
}
window.onload = loadProgress;