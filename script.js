let cart = JSON.parse(localStorage.getItem("carts"));

const cartNumber = document.getElementById("cart-number-container");

if (!cart) {
  localStorage.setItem("carts", JSON.stringify([]));
  cart = [];

  cartNumber.innerHTML = "";
  let span = document.createElement("span");
  span.innerHTML = "0";
  cartNumber.appendChild(span);
} else {
  cartNumber.innerHTML = "";
  let span = document.createElement("span");
  span.innerHTML = cart.length;
  cartNumber.appendChild(span);
}

async function VQB() {
  try {
    const responseVQB = await fetch("Home.json");
    const resultVQB = await responseVQB.json();
    console.log(resultVQB);
    const name = resultVQB;

    const list = document.getElementById("listSP");

    name.forEach((item) => {
      const sanpham = document.createElement("div");
      sanpham.classList.add("col");

      const img = document.createElement("img");
      img.classList.add("card-img-top");
      const card = document.createElement("div");
      card.classList.add("card");

      const nameSP = document.createElement("h4");
      const description = document.createElement("p");
      const price = document.createElement("h3");
      const nut = document.createElement("button");
      nut.classList.add("btn");
      nut.classList.add("btn-primary");
      const body = document.createElement("div");
      body.classList.add("card-body");

      img.src = item.img;

      nameSP.innerText = item.name;
      description.innerText = item.description;
      price.innerText = item.price + " VNĐ";
      nut.innerText = "Mua";

      nut.addEventListener("click", () => {
        cart.push(item);
        localStorage.setItem("carts", JSON.stringify(cart));
        cartNumber.innerText = cart.length;
      });

      card.appendChild(img);
      card.appendChild(body);
      card.appendChild(price);
      card.appendChild(nut);
      body.appendChild(nameSP);
      body.appendChild(description);

      sanpham.appendChild(card);
      list.appendChild(sanpham);
    });
  } catch (error) {
    console.log(error);
  }
}
VQB();



let isShowFeedBack = false;

function showOverlayDisplay() {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight &&
    isShowFeedBack === false
  ) {
    isShowFeedBack = true;
    setTimeout(function () {
      var overlayDiv = document.createElement("div");
      overlayDiv.classList.add("card");
      overlayDiv.classList.add("fitcontent");

      const title = document.createElement("div");
      title.classList.add("card-header");
      const title1 = document.createElement("span");
      title1.innerText = "Đánh giá:";

      const danhgia1 = document.createElement("span");
      danhgia1.innerText = "Tốt";
      danhgia1.classList.add("badge");
      danhgia1.classList.add("badge-pill");
      danhgia1.classList.add("bg-success");
      danhgia1.classList.add("cursor-pointer");

      danhgia1.addEventListener("click", () => {
        overlayDiv.classList.add("d-none");
      });

      const danhgia2 = document.createElement("span");
      danhgia2.innerText = "Khá ổn";
      danhgia2.classList.add("badge");
      danhgia2.classList.add("badge-pill");
      danhgia2.classList.add("bg-secondary");
      danhgia2.classList.add("cursor-pointer");

      danhgia2.addEventListener("click", () => {
        overlayDiv.classList.add("d-none");
      });

      const danhgia3 = document.createElement("span");
      danhgia3.innerText = "Chưa tốt";
      danhgia3.classList.add("badge");
      danhgia3.classList.add("badge-pill");
      danhgia3.classList.add("bg-danger");
      danhgia3.classList.add("cursor-pointer");

      danhgia3.addEventListener("click", () => {
        overlayDiv.classList.add("d-none");
      });

      title.classList.add("d-flex");

      title.appendChild(title1);
      title.appendChild(danhgia1);
      title.appendChild(danhgia2);
      title.appendChild(danhgia3);
      overlayDiv.appendChild(title);
      document.body.appendChild(overlayDiv);
    }, 2000);
  }
}
window.addEventListener("scroll", showOverlayDisplay);
