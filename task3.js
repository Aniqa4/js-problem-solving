//Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

const findFrequentElement = (array) => {
    const arrayOfObjects = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if (element === array[j]) {
                count++;
            }
            else continue;

        }
        const doc = { value: element, count: count }
        arrayOfObjects.push(doc)
        count = 0;

    }

    let max=0;
    for (let i = 0; i < arrayOfObjects.length; i++) {
        const element = arrayOfObjects[i].count;
        
        if (element>max) {
            max=element;
        }

        
    }
   const theNumber=arrayOfObjects.find(x=>x.count===max)
   return theNumber.value
}


console.log(findFrequentElement([-1,2,2,3,3,3,3,4,4,5,5]));
