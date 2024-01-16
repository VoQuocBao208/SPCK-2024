let gh = JSON.parse(localStorage.getItem("carts"));
if(gh ===0){
  alert("bạn chưa mua gì cả")
}
else{
  gh.forEach(function (item, index) {
    
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
}
console.log(gh);

{
  /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}


