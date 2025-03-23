import Car from "./car"

it("accelarate changes car status to moving", () => {

    let car = new Car();

    car.accelerate(0);
    expect(car.status).toBe("moving");
})

it("accelarate sets speed of car", () => {

    let car = new Car();

    car.accelerate(30);
    expect(car.speed).toBe(30);
    
    car.accelerate(45);
    expect(car.speed).toBe(45);
})