console.log("Hello World");

// TODO

import { Wishlist } from "./wishlist.js";

const carForm = document.getElementById("submitForm");
const carMake = document.getElementById("makeInput");
const carModel = document.getElementById("modelInput");
const carYear = document.getElementById("yearInput");
const carMakeP = document.getElementById("car-make");
const carModelP = document.getElementById("car-model");
const carYearP = document.getElementById("car-year");


const wishlistUL = document.getElementById("wishlist-ul");

const wishlist = new Wishlist();

const removeBtn = document.getElementById("remove");
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (event) => {
    addCar(event);
});
remove.addEventListener("click", (event) => {
    removeCar();
});


function showCarDetails(car) {
    carMakeP.textContent = car.make;
    carModelP.textContent = car.model;
    carYearP.textContent = car.year;
    console.log(removeBtn);
    removeBtn.disabled = false;
    removeBtn.setAttribute("data-carId", car.id);

}

function updateDOMList () {

    wishlistUL.innerHTML = ""
    wishlist.list.forEach((car) => {
        const li = document.createElement("li");
        li.textContent = `${car.make}, ${car.model}`;
        li.addEventListener("click", () => {
            showCarDetails(car)
        });

        wishlistUL.appendChild(li);
        carForm.appendChild(wishlistUL);
    });
}

function addCar (event) {
    event.preventDefault();
    wishlist.add(carMake.value, carModel.value, carYear.value);
    updateDOMList();

} 

function removeCar () {
    const carId = Number(removeBtn.getAttribute("data-carId"));
    wishlist.remove(carId);

    updateDOMList();

    carMakeP.innerHTML = "";
    carModelP.innerHTML = "";
    carYearP.innerHTML = "";
    
    removeBtn.disabled = true;
}
