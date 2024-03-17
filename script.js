window.onload = () => {
  const scrollText = document.querySelector(".scroll-text");
  const textContent = scrollText.innerText;

  scrollText.innerHTML = "";
  for (const char of textContent) {
    const span = document.createElement("span");
    span.textContent = char;
    scrollText.appendChild(span);
  }

  const nodes = document.querySelectorAll(".scroll-text span");
  const step = 1;
  let hue = 0;

  (function loop() {
    nodes.forEach((node, index) => {
      node.style.color = `hsl(${
        (hue + step * (nodes.length - index)) % 360
      }, 100%, 50%)`;
    });
    hue = (hue + step) % 360;
    window.requestAnimationFrame(loop);
  })();
};

function randomColor() {
  const textElements = document.querySelectorAll(".text");
  let hue = 0;

  setInterval(() => {
    textElements.forEach((text) => {
      text.style.color = `hsl(${hue}, 100%, 50%)`;
      hue = (hue + 1) % 360;
    });
  }, 50);
}

randomColor();
