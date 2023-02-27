const focusBtns = document.querySelectorAll(".service__nav__filter__btn");
const cards = document.querySelectorAll(".service__card");
const itemAccord = document.querySelectorAll(".prices__cost__item");
const itemAccordDescript = document.querySelectorAll(".prices__cost__item__description");
const selectCity = document.getElementById('contacts__cities');
const selectCityOptions = document.getElementById('contacts__cities__options');
const cityOptions = document.querySelectorAll(".contacts__option");
const cityInfo = document.getElementById("selected_city_info")

const CITY_INFO = {
   canandaigua: {
      city: "Canandaigua, NY",
      phone: "+1 585 393 0001",
      address: "151 Charlotte Street"
   },
   york: {
      city: "New York City",
      phone: "+1 212 456 0002",
      address: "9 East 91st Street"
   },
   yonkers: {
      city: "Yonkers, NY",
      phone: "+1 914 678 0003",
      address: "511 Warburton Ave"
   },
   sherrill: {
      city: "Sherrill, NY",
      phone: "+1 315 908 0004",
      address: "14 WEST Noyes BLVD"
   }

}

function addFocus(e) {
   let btn = e.target;
   let count = 1;

   if (btn.className == "service__nav__filter__btn btn") {
      focusBtns.forEach(elem => {
         if (elem.classList.contains("btn-active")) count++;
      });
      if (count != 3) {
         btn.classList.add("btn-active");
         blurCards();
      }
   }
   else if (btn.className == "service__nav__filter__btn btn btn-active") {
      btn.classList.remove("btn-active");
      count--;
      blurCards();
   }
}

function blurCards() {
   cards.forEach(card => {
      card.classList.add("blur");
      card.classList.remove("removeBlur");
   });
   focusBtns.forEach(elem => {
      if (elem.classList.contains("btn-active") && elem.value == 'gardens') {
         cards[0].classList.remove("blur");
         cards[0].classList.add("removeBlur");
         cards[4].classList.remove("blur");
         cards[4].classList.add("removeBlur");
      }
      if (elem.classList.contains("btn-active") && elem.value == 'lawn') {
         cards[2].classList.remove("blur");
         cards[2].classList.add("removeBlur");
      }
      if (elem.classList.contains("btn-active") && elem.value == 'planting') {
         cards[1].classList.remove("blur");
         cards[1].classList.add("removeBlur");
         cards[3].classList.remove("blur");
         cards[3].classList.add("removeBlur");
         cards[5].classList.remove("blur");
         cards[5].classList.add("removeBlur");
      }
   });
}

function remAccord() {
   itemAccordDescript.forEach(item => {
      item.style.display = 'none';
   });
}
function toggleAcordion() {
   itemAccord.forEach(item => {
      item.style.background = '#EDF2EC';
   });
   if (this.children[0].children[0].textContent == 'Basics') {
      if (itemAccordDescript[0].style.display == 'none') {
         remAccord();
         itemAccordDescript[0].style.display = 'block';
         itemAccord[0].style.background = '#D6E7D2';
      } else {
         remAccord();
         itemAccord[0].style.background = '#EDF2EC';
      }
   }
   if (this.children[0].children[0].textContent == 'Standard') {
      if (itemAccordDescript[1].style.display == 'none') {
         remAccord();
         itemAccordDescript[1].style.display = 'block';
         itemAccord[1].style.background = '#D6E7D2';
      } else {
         remAccord();
         itemAccord[1].style.background = '#EDF2EC';
      }
   }
   if (this.children[0].children[0].textContent == 'Pro care') {
      if (itemAccordDescript[2].style.display == 'none') {
         remAccord();
         itemAccordDescript[2].style.display = 'block';
         itemAccord[2].style.background = '#D6E7D2';
      } else {
         remAccord();
         itemAccord[2].style.background = '#EDF2EC';
      }
   }
}


function cityActivation(selectCity, selectCityOptions) {
   if (selectCity.classList.contains("contacts__cities-active")) {
      selectCity.classList.remove("contacts__cities-active")
      selectCityOptions.classList.remove("options-active")
   } else {
      selectCity.className += " contacts__cities-active";
      selectCityOptions.className += " options-active";
   }
}

function changeSelectedCity(cityOption, selectCity, selectCityOptions, cityInfo) {
   selectCity.innerHTML = `
<p>${cityOption.innerHTML}</p>
<button class="accordion_btn"></button>
`
   cityActivation(selectCity, selectCityOptions)
   if (!cityInfo.classList.contains('city-info_active')) {
      cityInfo.className += ' city-info_active';
   }

   cityInfo.innerHTML = `
   <div class="grid">
           <div>City:</div>
           <div>${CITY_INFO[cityOption.id].city}</div>
           <div>Phone:</div>
           <div>${CITY_INFO[cityOption.id].phone}</div>
           <div>Office address:</div>
           <div>${CITY_INFO[cityOption.id].address}</div>
         </div>
         <a href="tel:${CITY_INFO[cityOption.id].phone}"><button class="button call-us">Call us</button></a>
   `
}


selectCity.addEventListener('click', (e) => cityActivation(e.target, selectCityOptions))
cityOptions.forEach(option =>
   option.addEventListener("click", (e) => changeSelectedCity(e.target, selectCity, selectCityOptions, cityInfo)));
focusBtns.forEach((item) => {
   item.addEventListener("click", addFocus);
});

itemAccord.forEach((item) => {
   item.addEventListener("click", toggleAcordion);
});
