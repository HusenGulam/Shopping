
const barsMain = document.getElementById("barsMain");
const menuBar = document.querySelector("[data-menu-bar]");
const mainNav = document.querySelector("[data-main-nav]");

barsMain.addEventListener("click", () => {
  menuBar.classList.toggle("menuActive");
});

const carouselData = [
  {
    title: "Product 1",
    description: "Description for product 1",
    price: "$19.99",
    discount: "20% Off",
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    title: "Product 2",
    description: "Description for product 2",
    price: "$29.99",
    discount: "15% Off",
    imageUrl: "data:image/jpeg;base64,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",
  },
  {
    title: "Product 3",
    description: "Description for product 3",
    price: "$39.99",
    discount: "10% Off",
    imageUrl: "data:image/jpeg;base64,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",
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
      currentIndex =
        currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1;
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
  currentIndex =
    currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1;
  showItem(currentIndex);
  resetAutoSlide();
});

nextBtn.addEventListener("click", () => {
  currentIndex =
    currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1;
  showItem(currentIndex);
  resetAutoSlide();
});

// Initialize carousel and start auto-slide
showItem(currentIndex);
startAutoSlide();










try{
  async function homeGeneralProduct(){
    await fetch("https://66b47c1f9f9169621ea321ce.mockapi.io/products")
    .then(res => res.json())
    .then(data => createHomeProduct(data))


    function createHomeProduct(product){

      

      console.log(product);
    }
  

  }
  homeGeneralProduct();
}catch(e){
  console.log(e.message);
}

