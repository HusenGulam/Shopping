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
        discount.textContent = `New`;
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
  async function homeGeneralProduct() {
    await fetch("https://66b47c1f9f9169621ea321ce.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => createHomeProduct(data));
    function createHomeProduct(product) {
      let sport = product.filter((item) => item.type == "sport");
      let clothes = product.filter((item) => item.type == "clothes");
      let food = product.filter((item) => item.type == "food");
      let aksessuars = product.filter((item) => item.type == "Aksessuars");
      let electronics = product.filter((item) => item.type == "electronics");

      let product_general_box = document.getElementById("product_general_box");
      let section = document.createElement("section");
      let title = document.createElement("h1");
      title.innerHTML = `<a href="../Users-panel/Clothes/clothes.html">Clothes <i class="fas fa-solid fa-chevron-right"></i></a>`;
      title.classList = "section_title";
      product_general_box.appendChild(title);
      section.classList = "main_section";
      product_general_box.appendChild(section);

      let reversedEClothes = clothes.slice().reverse().slice(0, 4);

      reversedEClothes.forEach((element) => {
        let box = document.createElement("div");
        box.classList = "box";
        section.appendChild(box);
        let persent = document.createElement("div");
        persent.classList = "discountDiv";
        persent.innerText = `${element.discount}%`;
        if (element.discount <= 0) {
        } else {
          box.appendChild(persent);
        }
        let img = document.createElement("img");
        img.src = `${element.img}`;
        box.appendChild(img);
        let name = document.createElement("h3");
        name.innerText = `${element.name}`;
        let about = document.createElement("p");
        about.innerText = `${element.about}`;
        box.appendChild(name);
        box.appendChild(about);
        let price = document.createElement("h5");
        price.innerText = `${element.price} $`;
        box.appendChild(price);
        let discount = document.createElement("h4");
        let res = (element.price * element.discount) / 100;
        let resultPrice = Math.round(element.price - res);
        discount.innerText = `${resultPrice} $`;
        if (element.discount <= 0) {
          price.style.background = "yellow";
        } else {
          box.appendChild(discount);
          price.style.textDecoration = "line-through";
          price.style.verticalAlign = "middle";
        }
      });
      let section1 = document.createElement("section");
      let title1 = document.createElement("h1");
      title1.innerHTML = `<a href="../Users-panel/Electronics/electronics.html">Electronics <i class="fas fa-solid fa-chevron-right"></i></a>`;
      title1.classList = "section_title";
      product_general_box.appendChild(title1);
      section1.classList = "main_section";
      product_general_box.appendChild(section1);
      let reversedElectronics = electronics.slice().reverse().slice(0, 4);
      reversedElectronics.forEach((element) => {
        let box = document.createElement("div");
        box.classList = "box";
        section1.appendChild(box);
        let persent = document.createElement("div");
        persent.classList = "discountDiv";
        persent.innerText = `${element.discount}%`;
        if (element.discount <= 0) {
        } else {
          box.appendChild(persent);
        }
        let img = document.createElement("img");
        img.src = `${element.img}`;
        box.appendChild(img);
        let name = document.createElement("h3");
        name.innerText = `${element.name}`;
        box.appendChild(name);
        let about = document.createElement("p");
        about.innerText = `${element.about}`;
        box.appendChild(about);
        let price = document.createElement("h5");
        price.innerText = `${element.price} $`;
        box.appendChild(price);
        let discount = document.createElement("h4");
        let res = (element.price * element.discount) / 100;
        let resultPrice = Math.round(element.price - res);
        discount.innerText = `${resultPrice} $`;
        discount.innerText = `${resultPrice} $`;
        if (element.discount <= 0) {
          price.style.background = "yellow";
        } else {
          box.appendChild(discount);
          price.style.textDecoration = "line-through";
          price.style.verticalAlign = "middle";
        }
      });
      let section2 = document.createElement("section");
      let title2 = document.createElement("h1");
      title2.innerHTML = `<a href="../Users-panel/Food/food.html"> Foods <i class="fas fa-solid fa-chevron-right"></i></a>`;
      title2.classList = "section_title";
      product_general_box.appendChild(title2);
      section2.classList = "main_section";
      product_general_box.appendChild(section2);
      let reversedFoods = food.slice().reverse().slice(0, 4);

      reversedFoods.forEach((element) => {
        let box = document.createElement("div");
        box.classList = "box";
        section2.appendChild(box);
        let persent = document.createElement("div");
        persent.classList = "discountDiv";
        persent.innerText = `${element.discount}%`;
        if (element.discount <= 0) {
        } else {
          box.appendChild(persent);
        }
        let img = document.createElement("img");
        img.src = `${element.img}`;
        box.appendChild(img);
        let name = document.createElement("h3");
        name.innerText = `${element.name}`;
        box.appendChild(name);
        let about = document.createElement("p");
        about.innerText = `${element.about}`;
        box.appendChild(about);
        let price = document.createElement("h5");
        price.innerText = `${element.price} $`;
        box.appendChild(price);
        let discount = document.createElement("h4");
        let res = (element.price * element.discount) / 100;
        let resultPrice = Math.round(element.price - res);
        discount.innerText = `${resultPrice} $`;
        discount.innerText = `${resultPrice} $`;
        if (element.discount <= 0) {
          price.style.background = "yellow";
        } else {
          box.appendChild(discount);
          price.style.textDecoration = "line-through";
          price.style.verticalAlign = "middle";
        }
      });

      let section3 = document.createElement("section");
      let title3 = document.createElement("h1");
      title3.innerHTML = `<a href="../Users-panel/Sport/sport.html"> Sport <i class="fas fa-solid fa-chevron-right"></i></a>`;
      title3.classList = "section_title";
      product_general_box.appendChild(title3);
      section3.classList = "main_section";
      product_general_box.appendChild(section3);
      let reversedSport = sport.slice().reverse().slice(0, 4);
      reversedSport.forEach((element) => {
        let box = document.createElement("div");
        box.classList = "box";
        section3.appendChild(box);
        let persent = document.createElement("div");
        persent.classList = "discountDiv";
        persent.innerText = `${element.discount}%`;
        if (element.discount <= 0) {
        } else {
          box.appendChild(persent);
        }
        let img = document.createElement("img");
        img.src = `${element.img}`;
        box.appendChild(img);
        let name = document.createElement("h3");
        name.innerText = `${element.name}`;
        box.appendChild(name);
        let about = document.createElement("p");
        about.innerText = `${element.about}`;
        box.appendChild(about);
        let price = document.createElement("h5");
        price.innerText = `${element.price} $`;
        box.appendChild(price);
        let discount = document.createElement("h4");
        let res = (element.price * element.discount) / 100;
        let resultPrice = Math.round(element.price - res);
        discount.innerText = `${resultPrice} $`;
        discount.innerText = `${resultPrice} $`;
        if (element.discount <= 0) {
          price.style.background = "yellow";
        } else {
          box.appendChild(discount);
          price.style.textDecoration = "line-through";
          price.style.verticalAlign = "middle";
        }
      });
      let section4 = document.createElement("section");
      let title4 = document.createElement("h1");
      title4.innerHTML = `<a href="../Users-panel/Accessories/accessories.html"> Accessories <i class="fas fa-solid fa-chevron-right"></i></a>`;
      title4.classList = "section_title";
      product_general_box.appendChild(title4);
      section4.classList = "main_section";
      product_general_box.appendChild(section4);
      let reversedAccesuar = aksessuars.slice().reverse().slice(0, 4);

      reversedAccesuar.forEach((element) => {
        let box = document.createElement("div");
        box.classList = "box";
        section4.appendChild(box);
        let persent = document.createElement("div");
        persent.classList = "discountDiv";
        persent.innerText = `${element.discount}%`;
        if (element.discount <= 0) {
        } else {
          box.appendChild(persent);
        }
        let img = document.createElement("img");
        img.src = `${element.img}`;
        box.appendChild(img);
        let name = document.createElement("h3");
        name.innerText = `${element.name}`;
        box.appendChild(name);
        let about = document.createElement("p");
        about.innerText = `${element.about}`;
        box.appendChild(about);
        let price = document.createElement("h5");
        price.innerText = `${element.price} $`;
        box.appendChild(price);
        let discount = document.createElement("h4");
        let res = (element.price * element.discount) / 100;
        let resultPrice = Math.round(element.price - res);
        discount.innerText = `${resultPrice} $`;
        discount.innerText = `${resultPrice} $`;
        if (element.discount <= 0) {
          price.style.background = "yellow";
        } else {
          box.appendChild(discount);
          price.style.textDecoration = "line-through";
          price.style.verticalAlign = "middle";
        }
      });
    }
  }
  homeGeneralProduct();
} catch (e) {
  console.log(e.message);
}

// Js for modalLogin Start


const loginBtn = document.querySelector("[data-login-btn]");
const modalLoginGeneral = document.querySelector("[data-modal-login-general]");
const modalLoginCloseBtn = document.querySelector("[data-modal-login-close-btn]");

loginBtn.addEventListener("click", () => {
    modalLoginGeneral.style.display = "block";
    modalLoginGeneral.style.display = "grid";
    modalLoginGeneral.style.placeItems = "center";
});

modalLoginCloseBtn.addEventListener("click", () => {
    modalLoginGeneral.style.display = "none";
});


const form = document.getElementById("userForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (e == "") {
        alert("Your input empty 😔");
    } else {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        fetch("https://66b7a2257f7b1c6d8f1c6378.mockapi.io/user/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));

        e.target.reset();

        modalLoginGeneral.style.display = "none";

        alert("You succes sent your information 🎉");

    }
});


async function userData() {
    await fetch("https://66b7a2257f7b1c6d8f1c6378.mockapi.io/user/user", {
    })
        .then((response) => response.json())
        .then((data) => {
            ifFunc(data);
        });
}



const ifFunc = (user) => {

    if (user) {
        loginBtn.innerText = `${user.name}`
    }
    else {
        loginBtn.innerText = `Log in`
    }
}



// Js for modalLogin End