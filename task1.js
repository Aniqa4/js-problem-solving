//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const reverseString=(str)=>{
    if (typeof str ==='string') {
        const makeArray = str.split("");
        const length = makeArray.length;
        let reversedArray = []
        for (let i = (length - 1); i >= 0; i--) {
            const element = makeArray[i];
            reversedArray.push(element)

        }
        const reversedString = reversedArray.join('')
        return reversedString;
    }
    else return 'The input is not a string'
}


console.log(reverseString('Hello world'));