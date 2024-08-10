document.addEventListener("DOMContentLoaded", () => {
    const barsMain = document.getElementById("barsMain");
    const menuBar = document.querySelector("[data-menu-bar]");
    const carouselContainer = document.getElementById("carousel");
    const prevBtn = document.createElement("button");
    const nextBtn = document.createElement("button");

    prevBtn.className = "prev-btn";
    prevBtn.innerHTML = "&lt;";
    nextBtn.className = "next-btn";
    nextBtn.innerHTML = "&gt;";

    carouselContainer.appendChild(prevBtn);
    carouselContainer.appendChild(nextBtn);

    let carouselData = [];
    let currentIndex = 0;
    let autoSlideInterval;
    let userInteracted = false;

    barsMain.addEventListener("click", () => {
        menuBar.classList.toggle("menuActive");
    });

    async function fetchCarouselData() {
        try {
            const response = await fetch(
                "https://66b484d19f9169621ea34a4f.mockapi.io/carousel/carousel"
            );
            const data = await response.json();
            carouselData = data;
            populateCarousel();
            showItem(currentIndex);
            startAutoSlide();
        } catch (e) {
            console.log("Error fetching carousel data:", e.message);
        }
    }

    function populateCarousel() {
        carouselContainer.innerHTML = "";

        carouselData.forEach((item, index) => {
            const carouselItem = document.createElement("div");
            carouselItem.className = "carousel-item";
            carouselItem.style.transform = `translateX(${index * 100} %)`;

            const carouselImage = document.createElement("div");
            carouselImage.className = "carousel-image";
            carouselImage.style.backgroundImage = `url('${item.img}')`;

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
            price.textContent = `Price: $${item.price}`;

            const discount = document.createElement("p");
            discount.className = "carousel-discount";
            if (item.discount <= 0) {
                discount.textContent = "New";
            } else {
                discount.textContent = `Discount: ${item.discount}%`;
            }
            carouselContent.appendChild(title);
            carouselContent.appendChild(description);
            carouselContent.appendChild(price);
            carouselContent.appendChild(discount);

            carouselItem.appendChild(carouselImage);
            carouselItem.appendChild(carouselContent);

            carouselContainer.appendChild(carouselItem);
        });
    }

    function showItem(index) {
        const items = document.querySelectorAll(".carousel-item");
        items.forEach((item, i) => {
            item.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            if (!userInteracted) {
                currentIndex = (currentIndex + 1) % carouselData.length;
                showItem(currentIndex);
            }
        }, 6000); // Change slide every 6 seconds
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
            (currentIndex - 1 + carouselData.length) % carouselData.length;
        showItem(currentIndex);
        resetAutoSlide();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % carouselData.length;
        showItem(currentIndex);
        resetAutoSlide();
    });

    fetchCarouselData();
});







try {
    async function AccessoriesGeneralProduct() {
        await fetch("https://66b47c1f9f9169621ea321ce.mockapi.io/products")
            .then(res => res.json())
            .then(data => createHomeProduct(data))


        function createHomeProduct(product) {

            let accessories = product.filter((item) => item.type == "Aksessuars")

            let product_general_box = document.getElementById("product_general_box");

            accessories.forEach((item) => {
                let accessoriesMain = document.querySelector("[data-accessories]");

                let discountAmount = (item.price * item.discount) / 100;
                let finalPrice = item.price - discountAmount;
                accessoriesMain.innerHTML += `
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

            console.log(accessories);

        }


    }

    AccessoriesGeneralProduct();
} catch (e) {
    console.log(e.message);
}