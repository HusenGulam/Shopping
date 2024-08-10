// Carusel Section

const carouselData = [{
  title: "Product 1",
  description: "Description for product 1",
  price: "$19.99",
  discount: "20% Off",
  imageUrl: "https://omnitail.net/wp-content/uploads/2021/06/amazon-clothes-sm.png"
}, {
  title: "Product 2",
  description: "Description for product 2",
  price: "$29.99",
  discount: "15% Off",
  imageUrl: "https://www.cato.org/sites/cato.org/files/styles/aside_3x/public/2023-11/fast-fashion2.jpeg?itok=72ek8bxI"
}, {
  title: "Product 3",
  description: "Description for product 3",
  price: "$39.99",
  discount: "10% Off",
  imageUrl: "https://www.hollywoodreporter.com/wp-content/uploads/2022/07/best-mens-hats-H-MAIN-2022.jpg",
},
];

const carouselContainer = document.getElementById("carousel");
const prevBtn = document.createElement("button");
const nextBtn = document.createElement("button");

prevBtn.className = "prev-btn";
prevBtn.innerHTML = "&lt;";
nextBtn.className = "next-btn";
nextBtn.innerHTML = "&gt;";

carouselContainer.appendChild(prevBtn);
carouselContainer.appendChild(nextBtn);

carouselData.forEach((item, index) => {
  const carouselItem = document.createElement("div");
  carouselItem.className = "carousel-item";
  carouselItem.style.transform = `translateX(${index * 100}%)`;

  const carouselImage = document.createElement("div");
  carouselImage.className = "carousel-image";
  carouselImage.style.backgroundImage = `url('${item.imageUrl}')`;

  const carouselContent = document.createElement("div");
  carouselContent.className = "carousel-content";

  const title = document.createElement("h2");
  title.className = "carousel-title";
  title.textContent = item.title;

  const description = document.createElement("p");
  description.className = "carousel-description";
  description.textContent = item.description;

  const price = document.createElement("p");
  price.className = "carousel-price";
  price.textContent = item.price;

  const discount = document.createElement("p");
  discount.className = "carousel-discount";
  discount.textContent = item.discount;

  carouselContent.appendChild(title);
  carouselContent.appendChild(description);
  carouselContent.appendChild(price);
  carouselContent.appendChild(discount);

  carouselItem.appendChild(carouselImage);
  carouselItem.appendChild(carouselContent);

  carouselContainer.appendChild(carouselItem);
});

let currentIndex = 0;

let autoSlideInterval;
let userInteracted = false;

function showItem(index) {
  const items = document.querySelectorAll(".carousel-item");
  items.forEach((item, i) => {
      item.style.transform = `translateX(${(i - index) * 100}%)`;
  });
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
      if (!userInteracted) {
          currentIndex = currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1;
          showItem(currentIndex);
      }
  }, 6000); // Change slide every 4 seconds
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  userInteracted = true;
  setTimeout(() => {
      userInteracted = false;
  }, 5000); // Wait 5 seconds before resuming auto-slide
  startAutoSlide();
}

prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1;
  showItem(currentIndex);
  resetAutoSlide();
});

nextBtn.addEventListener("click", () => {
  currentIndex = currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1;
  showItem(currentIndex);
  resetAutoSlide();
});

// Initialize carousel and start auto-slide
showItem(currentIndex);
startAutoSlide();

// Carusel Section End


try {
  async function ElectronicsGeneralProduct() {
      await fetch("https://66b47c1f9f9169621ea321ce.mockapi.io/products")
          .then(res => res.json())
          .then(data => createHomeProduct(data))


      function createHomeProduct(product) {

          let electronics = product.filter((item) => item.type == "electronics")
          let clothes = product.filter((item) => item.type == "clothes")

          let product_general_box = document.getElementById("product_general_box");

          clothes.forEach((item) => {
              let electronicsMain = document.querySelector("[data-electronics]");
          

              let discountAmount = (item.price * item.discount) / 100;
              let finalPrice = item.price - discountAmount;
              electronicsMain.innerHTML += `
                 <div class="product"> 
                     <img src="${item.img}" title="${item.name}" alt="${item.name}">
                     <h3 id="productName">${item.name}</h3>
                     <h4 id="productAbout">${item.about}</h4>
                     <div class="priceRow">
                     <h3 id="productOldPrice">$${item.price}</h3>
                     <h3 id="productNewPrice">$${finalPrice}</h3>
                  </div>
                 </div>
                 `;
          })

          console.log(clothes);

      }


  }

  ElectronicsGeneralProduct();
} catch (e) {
  console.log(e.message);
}