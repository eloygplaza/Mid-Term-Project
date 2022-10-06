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

// dark mode toggle
let btnDark = document.querySelector(".footer-darkmode");
btnDark.addEventListener("click", (e) => {
  // we check if dark mode is active
  let checkDark = document.getElementsByClassName("fa-moon").length;
  if (checkDark > 0) {
    btnDark.innerHTML =
      '<i class="fa-regular fa-lightbulb fa-2xl" style="color: #FFC600"></i><i class="fa-solid fa-toggle-on fa-2xl" style="color: #FFC600"></i>';
    document.querySelector("body").style.backgroundColor = "#10121a";
    document.querySelector("html").style.backgroundColor = "#10121a";
    document.querySelector(".heading-contact").style.color = "#f2f4fc";
  } else {
    btnDark.innerHTML =
      '<i class="fa-solid fa-moon fa-2xl"></i><i class="fa-solid fa-toggle-off fa-2xl"></i>';
    document.querySelector("body").style.backgroundColor = "#F2F4FC";
    document.querySelector("html").style.backgroundColor = "#F2F4FC";
    document.querySelector(".heading-contact").style.color = "#292E47";
  }
});
