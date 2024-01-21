let gh = JSON.parse(localStorage.getItem("carts"));

  gh?.forEach(function (item, index) {
    
    const card = document.getElementById("card1");
    const ig = document.createElement("img");
    ig.classList.add("card-img-top");
    const body = document.createElement("div");
    body.classList.add("card-body");
    const title = document.createElement("h5");
    title.classList.add("card-title");
    const text = document.createElement("p");
    text.classList.add("card-text");
    const nut = document.createElement("a");
    nut.classList.add("btn");
    nut.classList.add("btn-primary");
  
    ig.src = item.img;
    title.innerText = item.name;
    text.innerText = item.description;
    nut.innerText = "Hủy mua hàng";
  
    card.appendChild(ig);
    card.appendChild(body);
    body.appendChild(title);
    body.appendChild(text);
    body.appendChild(nut);
  });





