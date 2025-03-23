export default class Car {
    status = "";
    speed = 0;
    accelerate = (newSpeed) => {
        this.status = "moving";
        this.speed = newSpeed;
    };
}