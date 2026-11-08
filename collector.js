const checks = [...document.querySelectorAll("[data-item]")];
const progress = document.querySelector("#checklist-progress");
const resetButton = document.querySelector("#reset-checklist");
const storageKey = "m9-gamma-inspection-checklist";

function updateProgress() {
  const checkedCount = checks.filter((item) => item.checked).length;
  progress.textContent = `${checkedCount} of ${checks.length} checked`;
}

const savedChecks = JSON.parse(localStorage.getItem(storageKey) || "{}");
checks.forEach((item) => {
  item.checked = Boolean(savedChecks[item.dataset.item]);
  item.addEventListener("change", () => {
    const state = Object.fromEntries(checks.map((check) => [check.dataset.item, check.checked]));
    localStorage.setItem(storageKey, JSON.stringify(state));
    updateProgress();
  });
});

resetButton.addEventListener("click", () => {
  checks.forEach((item) => { item.checked = false; });
  localStorage.removeItem(storageKey);
  updateProgress();
});
updateProgress();