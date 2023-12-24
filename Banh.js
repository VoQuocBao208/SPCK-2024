async function Banh() {
    try {
      const responseBanh = await fetch("Banh.json");
      const resultBanh = await responseBanh.json();
      console.log(resultBanh);
      const nameBanh = resultBanh;
      
  
      const listBanh = document.getElementById("listSPB");
  
      nameBanh.forEach((item) => {
      const sanphamBanh = document.createElement("div")
      sanphamBanh.classList.add("col")

        const img=document.createElement("img")
        const card = document.createElement("div");
        card.classList.add("card")
        
  
        const nameSPBanh = document.createElement("h5");
        const price = document.createElement("h3");
        const nut = document.createElement("button");
        nut.classList.add("btn")
        nut.classList.add("btn-primary")
        const body = document.createElement("div");
        body.classList.add("card-body")


        img.src = item.image;
        nameSPBanh.innerText =  item.name;
        price.innerText=item.price
        nut.innerText="Mua"
  
        card.appendChild(img);
        card.appendChild(body);
        card.appendChild(price);
        card.appendChild(nut);
        body.appendChild(nameSPBanh);
  
        
        sanphamBanh.appendChild(card);
        listBanh.appendChild(sanphamBanh);
      });
    } catch (error) {
      console.log(error);
    }
  }
  Banh();