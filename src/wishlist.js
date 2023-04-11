import { Car } from "./car.js";
export class Wishlist {
    list = []
    nextId = 0

    add(make, model, year) {
        const newCar = new Car(++this.nextId, make, model, year);
        this.list.push(newCar);
    }

    remove(carId) {
        this.list = this.list.filter((car) => {
            return car.id != carId;
        });
        console.log(this.list);
        
    }

}


