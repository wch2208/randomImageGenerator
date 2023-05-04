function get(selector) {
  return document.querySelector(selector);
}
function el(selector) {
  return document.createElement(selector);
}

const generateBtn = get("#generateBtn");
const sizeSelec = get("#size");
const gridContainer = get("#gridContainer");

let size = sizeSelec.addEventListener("change", e => {
  e.preventDefault();
  size = e.target.value;
});

generateBtn.addEventListener("click", () => {
  const toastTrigger = document.getElementById("liveToastBtn");
  const toastLiveExample = document.getElementById("liveToast");
  console.log(size);
  if (size === undefined || size === 0 || size === "") {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
    return;
  }

  gridContainer.innerHTML = "";
  let count = 0;
  const generateImg = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    const imgUrl = `https://picsum.photos/${size}?random=${randomNumber}`;
    const img = el("img");
    img.classList.add("rounded");
    img.src = imgUrl;

    gridContainer.appendChild(img);
    count++;
    if (count === 10) {
      clearInterval(generateImg);
    }
  }, 100);
});
