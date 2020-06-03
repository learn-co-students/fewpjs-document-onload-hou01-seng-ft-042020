document.addEventListener("DOMContentLoaded", function () {
  updateDOM();
});

function updateDOM() {
  const test = document.getElementById("text");
  test.textContent = "This is really cool!";
}
