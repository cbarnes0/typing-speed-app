// app.ts

const paragraphs: string[] = [
    "The quick brown fox jumps over the lazy dog. The fox scampers silently through the forest. The animals around stir in mild curiosity. Even the birds pause mid-flight to observe this peculiar moment.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed fringilla, leo in ullamcorper gravida, orci felis dapibus augue, vel dignissim lorem nulla nec nulla.",
    "In a quaint village by the rolling hills, the days passed with a gentle rhythm. Neighbors shared smiles and kind words each morning. The marketplace buzzed with life and the sound of friendly chatter. Every sunset painted the sky in hues of orange and purple.",
    "Sphinx of black quartz, judge my vow. The ancient stone stood as a silent witness to centuries past. Mysteries swirled around its weathered surface. Every visitor felt the pull of history and the echo of forgotten secrets."
  ];
  
  let startTime: number | null = null;
  
  const paragraphElement = document.getElementById("paragraph") as HTMLParagraphElement;
  const startButton = document.getElementById("startButton") as HTMLButtonElement;
  const submitButton = document.getElementById("submitButton") as HTMLButtonElement;
  const typingArea = document.getElementById("typingArea") as HTMLTextAreaElement;
  const resultsDiv = document.getElementById("results") as HTMLDivElement;
  
  // Display a random paragraph when the page loads.
  window.addEventListener("DOMContentLoaded", () => {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    paragraphElement.textContent = paragraphs[randomIndex];
  });
  
  startButton.addEventListener("click", () => {
    startTime = Date.now();
    typingArea.disabled = false;
    typingArea.focus();
    startButton.style.display = "none";
    submitButton.style.display = "inline-block";
  });
  
  submitButton.addEventListener("click", () => {
    if (startTime === null) return;
    const endTime = Date.now();
    const elapsedSeconds = (endTime - startTime) / 1000;
    // Calculate word count based on the displayed paragraph.
    const wordCount = paragraphElement.textContent?.split(" ").length || 0;
    const wpm = (wordCount / elapsedSeconds) * 60;
    resultsDiv.innerHTML = `<p>Time taken: ${elapsedSeconds.toFixed(2)} seconds</p>
                            <p>Words per minute (WPM): ${wpm.toFixed(2)}</p>`;
    // Disable the textarea after submitting.
    typingArea.disabled = true;
    submitButton.style.display = "none";
  });
  