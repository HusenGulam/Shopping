const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e == "") {
    alert("Your input empty 😔");
  } else {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    fetch("https://66b47c1f9f9169621ea321ce.mockapi.io/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

      alert("You succes sent your information 🎉");
      e.target.reset();
  }
}); 