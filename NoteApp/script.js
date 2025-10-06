const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

function saveNotes() {
  const notes = document.querySelectorAll(".note .content");
  const titles = document.querySelectorAll(".note .title");

  const data = [];

  notes.forEach((note, index) => {
    const content = note.value.trim();
    const title = titles[index].value.trim();
    if (content || title) {
      data.push({ title, content });
    }
  });

  localStorage.setItem("notesData", JSON.stringify(data));
}

function addNote(content = "", title = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <div class="icons">
      <i class="save fas fa-save" title="Save"></i>
      <i class="trash fas fa-trash" title="Delete"></i>
    </div>
    <div class="title-div">
      <textarea class="title" placeholder="Note title...">${title}</textarea>
    </div>
    <textarea class="content" placeholder="Write your note...">${content}</textarea>
  `;

  const saveButton = note.querySelector(".save");
  const deleteButton = note.querySelector(".trash");

  saveButton.addEventListener("click", saveNotes);
  deleteButton.addEventListener("click", () => {
    note.remove();
    saveNotes();
  });

  main.appendChild(note);
  saveNotes();
}

function loadNotes() {
  const data = JSON.parse(localStorage.getItem("notesData")) || [];
  data.forEach(item => addNote(item.content, item.title));
}

addBtn.addEventListener("click", () => addNote());

loadNotes();
