import FizzBuzz from "./FizzBuzz"

/*
FizzBuzz TDD
This is a challenge which is designed to demonstrate the power of TDD.

Sequential Specifications
Given the numbers 1,15 are supplied FizzBuzz will produce an array : 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
Given the numbers 1,100 are supplied FizzBuzz will produce an array : 1,2,3,4,5,6,7,8,9,10 (and on to 100)
Should change multiples of 3 to Fizz
Should change multiples of 5 to Buzz
Should change multiples of 3 and 5 to FizzBuzz
Things You Will Learn
Red, Green, Refactor
Triangulation
The Law Of Specificity
*/

it("generates an array from 1 to 15 when given parameters 1 and 15", () => {

    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.generate(1, 15)
    expect(result).toEqual([
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz"]);
})

it("generates an array from 1 to 100 when given parameters 1 and 100", () => {

    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.generate(1, 100)
    expect(result.length).toBe(100)
    expect(result[6]).toBe(7)
    expect(result[49]).toBe("Buzz")
    expect(result[98]).toBe("Fizz")
})

it("should changemultiples of 3 to Fizz", () => {

    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.generate(1, 3)
    expect(result.length).toBe(3)
    expect(result[0]).toBe(1)
    expect(result[1]).toBe(2)
    expect(result[2]).toBe("Fizz")

})

it("should changemultiples of 5 to Buzz", () => {

    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.generate(1, 5)
    expect(result.length).toBe(5)
    expect(result[0]).toBe(1)
    expect(result[1]).toBe(2)
    expect(result[4]).toBe("Buzz")

})

it("should changemultiples of 5 to Buzz", () => {

    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.generate(1, 30)
    expect(result.length).toBe(30)
    expect(result[0]).toBe(1)
    expect(result[1]).toBe(2)
    expect(result[4]).toBe("Buzz")
    expect(result[8]).toBe("Fizz")
    expect(result[14]).toBe("FizzBuzz")
    expect(result[29]).toBe("FizzBuzz")

})


it("should not remove word from result if not present", () => {

    let fizzBuzz = new FizzBuzz();
    
    let result = fizzBuzz.remove("Buzz", 1, 3);

    expect(result.length).toBe(3)
    expect(result[0]).toBe(1)
    expect(result[1]).toBe(2)

    result = fizzBuzz.remove("Bob", 1, 6);

    expect(result.length).toBe(6)
    expect(result[0]).toBe(1)
    expect(result[1]).toBe(2)
    expect(result[2]).toBe("Fizz")
    expect(result[3]).toBe(4)
    expect(result[4]).toBe("Buzz")
    expect(result[5]).toBe("Fizz")

})

it("should remove word from result if it is present", () => {

    let fizzBuzz = new FizzBuzz();
    
    let result = fizzBuzz.remove("Buzz", 1, 6);

    expect(result.length).toBe(5)
    expect(result[0]).toBe(1)
    expect(result[1]).toBe(2)
    expect(result[2]).toBe("Fizz")
    expect(result[3]).toBe(4)
    expect(result[4]).toBe("Fizz")

    result = fizzBuzz.remove("Fizz", 1, 6);

    expect(result.length).toBe(4)
    expect(result[0]).toBe(1)
    expect(result[1]).toBe(2)
    expect(result[2]).toBe(4)
    expect(result[3]).toBe("Buzz")
})