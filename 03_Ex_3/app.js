let url = "https://fe-api-jquery.firebaseio.com/fe-api-jquery.json";

fetch(url)
    .then(res => res.json())
    .then(data => {
        let list = document.getElementById("movies")
        for (let i = 0; i < data.length; i++) {
            let li = document.createElement("li");
            let h2 = document.createElement("h2");
            let h3 = document.createElement("h3");

            h2.innerText = data[i].title
            h3.innerText = data[i].year

            li.appendChild(h2);
            li.appendChild(h3);

            list.appendChild(li)
        }
    })
    .catch(err => console.log(err));