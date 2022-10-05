// we control when the buton submit is clicked by an eventListener and we show the value through console.log()
let submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name-input").value;
  let email = document.querySelector("#email-input").value;
  let phone = document.querySelector("#phone-input").value;
  let msg = document.querySelector("#message-input").value;

  console.log(
    `Nombre: ${name}, Email: ${email}, Phone: ${phone}, Message: ${msg}`
  );
});

/* burguer menu for mobile */
let mobileMenu = document.querySelector(".fa-bars");
let navMobile = document.querySelector(".nav-mobile");
mobileMenu.addEventListener("click", (e) => {
  if (navMobile.style.top == "-300px") {
    navMobile.style.top = "0px";
    mobileMenu.classList.add("fa-rotate-90");
  } else {
    navMobile.style.top = "-300px";
    mobileMenu.classList.remove("fa-rotate-90");
  }
});
