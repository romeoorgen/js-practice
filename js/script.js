var button = document.querySelector(".show-cat");
button.addEventListener("click", function () {
button.innerText = "it's working."
});
//console.log(button);
var cat = document.querySelector(".cat");
cat.classList.add("show");
//console.log(cat);