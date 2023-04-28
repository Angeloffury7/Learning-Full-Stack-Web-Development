const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const catName = input.value;
    const newLi = document.createElement("li");
    newLi.innerText = catName;
    // console.log(newLi);
    list.append(newLi);
    input.value = "";
});
