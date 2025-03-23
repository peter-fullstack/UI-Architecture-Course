export default class FizzBuzz {

    data = [];

    remove = (word, start, end) => {

        this.data = this.generate(start, end);
        let result = []
        
        this.data.forEach(d => {
            
            if(d !== word) {
                result.push(d);
            }
            
        });

        return result;
    }
    
    generate = (start, end) => {
        let result = []
        for(let i = start; i <= end; i++) {

            if((i % 3 === 0) && (i % 5 === 0)) {
                result.push("FizzBuzz")    
            } 
            else if(i % 3 === 0) {
                result.push("Fizz")    
            } 
            else if(i % 5 === 0) {
                result.push("Buzz")    
            }
            else {
                result.push(i)
            }
        }

        return result
    }
}