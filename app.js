const btn = document.querySelector("button");
let h2 = document.querySelector("h2");
btn.addEventListener("click", function (e) {
  h2.innerHTML = Number(h2.innerHTML) + 1;
  if (Number(h2.innerHTML) >= 10) {
    document.body.style.backgroundColor = "#291c1c";
    console.log(h2.innerHTML);
  } else if (Number(h2.innerHTML) >= 5) {
    document.body.style.backgroundColor = "#1d161e";
    console.log(h2.innerHTML);
  } else {
    document.body.style.backgroundColor = "#16161e";
    console.log(h2.innerHTML);
  }
});
