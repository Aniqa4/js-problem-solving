// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. 
//The function should return the second smallest number.

const findSecondSmallestNumber=(array)=>{
    
    //removes the smallest number from the input array
    let smallestNumber=array[0];
    let index=0;
    for (let i = 0; i < array.length; i++) {
        const n1 = array[i];
        if (n1<smallestNumber) {
            smallestNumber=n1;
            index=i;
        }
    }

    //finds out the smallest number of the new array, which is the second smallest number of the main array
    array.splice(index,1)

    let secondSmallestNumber=array[0];
    for (let i = 0; i < array.length; i++) {
        const n1 = array[i];
        if (n1<secondSmallestNumber) {
            secondSmallestNumber=n1;
        }
    }
    
    
    return secondSmallestNumber;
}


console.log(findSecondSmallestNumber([50,1,2,3,-10,-1,-2,-11,-50]));