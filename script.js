document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMsg');

  if (username === "admin" && password === "1234") {
    window.location.href = "index.html";
  } else {
    errorMsg.textContent = "Invalid username or password!";
  }
});
