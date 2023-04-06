const btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let h1Value;
btn.addEventListener("click", function (e) {
  h1Value = Number(h2.innerHTML) + 1;
  h2.innerHTML = h1Value;
  if (h1Value >= 10) {
    document.body.style.backgroundColor = "#291c1c";
    console.log(h2.innerHTML);
  } else if (h1Value >= 5) {
    document.body.style.backgroundColor = "#1d161e";
    console.log(h2.innerHTML);
  } else {
    document.body.style.backgroundColor = "#16161e";
    console.log(h2.innerHTML);
  }
});
