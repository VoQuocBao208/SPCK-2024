async function VQB() {
    try {
      const responseVQB = await fetch("Home.json");
      const resultVQB = await responseVQB.json();
      console.log(resultVQB);
      const name = resultVQB;
      
  
      const list = document.getElementById("listSP");
  
      name.forEach((item) => {
      const sanpham = document.createElement("div")
      sanpham.classList.add("col")

        const img=document.createElement("img")
        const card = document.createElement("div");
        card.classList.add("card")

        
  
        const nameSP = document.createElement("h5");
        const price = document.createElement("h3");
        const nut = document.createElement("button");
        nut.classList.add("btn")
        nut.classList.add("btn-primary")
        const body = document.createElement("div");
        body.classList.add("card-body")



        img.src = item.img;
        nameSP.innerText =  item.name;
        price.innerText=item.price
        nut.innerText="Mua"
  
        card.appendChild(img);
        card.appendChild(body);
        card.appendChild(price);
        card.appendChild(nut);
        body.appendChild(nameSP);

        

  
        
        

  
        
        sanpham.appendChild(card);
        list.appendChild(sanpham);
      });
    } catch (error) {
      console.log(error);
    }
  }
  VQB();




  



