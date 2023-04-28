//YOU DON'T HAVE TO REMEMBER ANY OF THIS!

const req = new XMLHttpRequest();

req.onload = function() {
    console.log("it worked!")
    const data = JSON.parse(this.responseText); //creating a javascript object
                            //responseText has our JSON string
    console.log(data.name, data.height);  
}

req.onerror = function() {
    console.log("error!");
    console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/4/")
req.send();

