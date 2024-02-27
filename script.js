const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

//console.log(arrows);
//console.log(movieList);
arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  //   console.log(imageItem);
  arrow.addEventListener("click", function () {
    const widthRatio = Math.floor(window.innerWidth / 300);
    clickCounter++;
    if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
      // movieLists[i].style.transform = "translateX(-300px)";
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`; //alt + ,
    } else {
      movieLists[i].style.transform = `translateX(0)`;
      clickCounter = 0;
    }
  });
  // console.log(movieLists[i].computedStyleMap().get("transform"));
  // console.log(movieLists[i].computedStyleMap().get("height"));
  // console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value);
  //   console.log(window.innerWidth); ekran genişliği
});

/* Dark mode */
const ball = document.querySelector(".toogle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.sidebar i,.toogle,.toogle-ball,.movie-list-filter select,.movie-list-title"
);
ball.addEventListener("click", function () {
  // console.log("click");
  items.forEach((item) => item.classList.toggle("active"));
});
