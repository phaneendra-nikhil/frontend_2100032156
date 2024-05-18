function highlightWords() {
  const paragraph = document.getElementById("paragraph");
  const wordLength = document.getElementById("wordLength").value;

  if (!wordLength || wordLength < 1) {
    alert("Please enter a valid word length.");
    return;
  }

  let text = paragraph.textContent;
  const wordRegex = new RegExp(`\\b\\w{${wordLength},}\\b`, "g");
  const highlightedText = text.replace(
    wordRegex,
    (word) => `<span class="highlight">${word}</span>`
  );
  const highlightedWords = highlightedText.match(
    /<span class="highlight">.*?<\/span>/g
  );
  const highlightedWordCount = highlightedWords ? highlightedWords.length : 0;
  const totalWords = text.split(/\s+/).length;

  document.getElementById(
    "wordCount"
  ).textContent = `Highlighted: ${highlightedWordCount} / ${totalWords}`;

  if (highlightedWordCount === 0) {
    showToast();
  } else {
    paragraph.innerHTML = highlightedText;
  }
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.className = "toast show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

function showExactSizeWords() {
  const paragraph = document.getElementById("paragraph").textContent;
  const wordLength = document.getElementById("wordLength").value;

  if (!wordLength || wordLength < 1) {
    alert("Please enter a valid word length.");
    return;
  }

  const wordRegex = new RegExp(`\\b\\w{${wordLength}}\\b`, "g");
  const exactSizeWords = paragraph.match(wordRegex);

  document.getElementById("exactSizeWords").innerHTML = `${
    exactSizeWords ? exactSizeWords.join(", ") : "None"
  }`;
}

function showMoreSizeWords() {
  const paragraph = document.getElementById("paragraph").textContent;
  const wordLength = document.getElementById("wordLength").value;

  if (!wordLength || wordLength < 1) {
    alert("Please enter a valid word length.");
    return;
  }

  const wordRegex = new RegExp(`\\b\\w{${+wordLength + 1},}\\b`, "g");
  const moreSizeWords = paragraph.match(wordRegex);

  document.getElementById("moreSizeWords").innerHTML = `${
    moreSizeWords ? moreSizeWords.join(", ") : "None"
  }`;
}

document
  .getElementById("highlightButton")
  .addEventListener("click", highlightWords);
document.getElementById("wordLength").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    highlightWords();
  }
});
document
  .getElementById("exactSizeButton")
  .addEventListener("click", showExactSizeWords);
document
  .getElementById("moreSizeButton")
  .addEventListener("click", showMoreSizeWords);
