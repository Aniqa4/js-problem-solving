//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumOfPositiveNumbers = (arr) => {

    //checks if the input is an array or not
    if (Array.isArray(arr)) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            //checks if the elements of the array are numbers or not
            if (typeof element==='number') {
                if (element > 0) {
                    sum = sum + element;
                }
            }
            else return 'this is not an array with only numbers'
                
        }
        return sum;
    }
    else return 'this is not an array'
}


console.log(sumOfPositiveNumbers([1,2,3,4,5,6,7,-1]));