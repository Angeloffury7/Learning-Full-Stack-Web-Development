const form = document.querySelector('#searchForm');

form.addEventListener("submit", async (evt) => {
    evt.preventDefault();
    // console.dir(form);
    // console.log(form.elements.query.value); //'query' is the name we gave, yahan pe text rakha hai
    const searchTerm = form.elements.query.value;
    // const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);

    const config = {params: {q: searchTerm}};//yay, thank you axios!
    const res = await axios.get("http://api.tvmaze.com/search/shows", config);
    console.log(res.data);
    makeImg(res.data);
    form.elements.query.value = "";
});

const makeImg = (shows) => {
    for (let results of shows) {
        if (results.show.image) { //some images didn't have an image, so it was showing an error
            const img = document.createElement("img");
            img.src = results.show.image.medium;
            document.body.append(img);
        }
    }
}