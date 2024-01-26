document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const description = document.getElementById("new-task-description");
  const list = document.getElementById("tasks");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    const val = description.value;
    delBtn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
    delBtn.style = "left:30px";
    const newLi = document.createElement("li");
    newLi.textContent = val + " ";
    newLi.appendChild(delBtn);
    list.appendChild(newLi);
    description.value = "";
  });
  const ulist = document.getElementById("tasks");
});
