const preview = document.querySelector("#phase-preview");
const previewName = document.querySelector("#preview-name");
const previewNote = document.querySelector("#preview-note");
const phaseButtons = document.querySelectorAll(".phase-options button");

const phaseInfo = {
  p1: { name: "Phase 1", note: "A cool mix of green and darker tones." },
  p2: { name: "Phase 2", note: "A brighter mix with more vivid green." },
  p3: { name: "Phase 3", note: "A balanced blend of green and teal." },
  p4: { name: "Phase 4", note: "A luminous mix with strong cyan notes." },
  emerald: { name: "Emerald", note: "A vivid green-dominant finish." }
};

phaseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const phase = button.dataset.phase;
    preview.dataset.phase = phase;
    previewName.textContent = phaseInfo[phase].name;
    previewNote.textContent = phaseInfo[phase].note;
    phaseButtons.forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
  });
});