console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  // load images
  fetch(imgUrl)
    .then((res) => res.json())
    .then(console.log("image test"))
    .then((results) => {
      results.message.forEach((image) => addImage(image));
    });

  // load breeds
  fetch(breedUrl)
    .then((res) => res.json())
    .then(console.log("breed test"))
    .then((results) => {
      breeds = Object.keys(results.message);
      showBreedList(breeds);
      breedSelectListener();
    });
});

// challenge #1
function addImage(dogPic) {
  let container = document.getElementById("dog-image-container");
  let newImage = document.createElement("img");
  newImage.src = dogPic;
  container.append(newImage);
}

// challenge #2
function addBreed(breed) {
  let ul = document.getElementById("dog-breeds");
  let li = document.createElement("li");
  li.innerText = breed;
  ul.append(li);
  li.addEventListener("click", changeColor);
  //console.log(breed);
}

function showBreedList(breeds) {
  let ul = document.getElementById("dog-breeds");
  removeChildren(ul);
  breeds.forEach((breed) => addBreed(breed));
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

// challenge #3
function changeColor(e) {
  e.target.style.color = "cadetblue";
}

// challenge #4
function selectBreed(letter) {
  showBreedList(breeds.filter((breed) => breed.startsWith(letter)));
}

function breedSelectListener() {
  let breedDropdown = document.querySelector("#breed-dropdown");
  breedDropdown.addEventListener("change", (e) => {
    selectBreed(e.target.value);
  });
}