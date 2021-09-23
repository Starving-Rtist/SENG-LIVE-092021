// ❗ Use console.log() To Check Answers

// ✅ Creating / Accessing Arrays

    // what are arrays?

        // let array = [];
        // let array = new Array();
        // array[0] = "John";
        // ...
        
        // let array = ["John", "Sally", "Jacob", "Alice"];

        // console.log(array);

    // define an array with several values
    // what is the technical term for these individual items?

        // let array = ["John", "Sally", "Jacob", "Alice"];

    // count items in an array

        // console.log(array.length);

    // access elements in an array

        // console.log(array[0]);

// ✅ Modifying Arrays

    // adding elements to an array

        // add element to end of array

            // let array = ["John", "Sally", "Jacob", "Alice"];
            
            // console.log(array);

            // array.push("Louis");

            // original array is mutated
            // console.log(array);

        // add element to beginning of array

            // let array = ["John", "Sally", "Jacob", "Alice"];

            // console.log(array);

            // array.unshift("Louis");

            // original array is mutated
            // console.log(array);

    // removing elements from an array

        // remove last element and return that element
        
            // console.log(array)
            
            // array.pop();

            // original array is mutated
            // console.log(array)

        // remove first element and return that element

            // console.log(array)

            // console.log(array.shift());

            // original array is mutated
            // console.log(array);
    
        // return the element at the index provided in a new array
    
            // console.log(array);

            // let newArray = array.slice(1);

            // console.log(newArray);

        // return all elements where index >= 0 and index < 2

            // console.log(array);

            // let newArray = array.slice(0, 2);

            // console.log(newArray);
    
        // starting at index 1, return 2 elements

            // console.log(array);

            // let newArray = array.slice(1, 3);

            // console.log(newArray);

        // add elements where others are removed

            // let array = ["John", "Sally", "Jacob", "Alice"];

            // console.log(array);

            // let newArray = array.splice(1, 3, "Teddy", "Megan");

            // console.log(newArray);

// ✅ Iterating Through Arrays

    // let array = ["John", "Sally", "Jacob", "Alice"];

    // looping over arrays
        
        // for loop

            // function loopOverElements(array) {
            //     for (let i = 0; i < array.length; i++) {
            //         if (array[i] === "Alice") {
            //             console.log(array[i]);
            //         }
            //     }
            // }

            // console.log(loopOverElements(array));

        // do while loop
        
            // function loopOverElements(array) {
            //     let i = 0;
            
            //     do { 
            //         console.log(array[i]);
            //         i++;
            //     } while (i < array.length);
            // }

            // console.log(loopOverElements(array));

        // for...of loop

            // function loopOverElements(array) {
            //     for (const element of elements) {
            //         console.log(element);
            //     }
            // }

            // console.log(loopOverElements(array));
        
        // while loop

            // function loopOverElements(array) {
            //     while (i < 10) {
            //         console.log(`First Element: ${i}`);
            //         i++;
            //     }
                
            //     console.log("You have reached the end of the list!");
            // }

            // console.log(loopOverElements(array));

// ✅ Array Iteration Methods

        // let array = ["John", "Sally", "Jacob", "Alice"];

        // .forEach()

            // function iterateOverElements(array) {
                
            //     // define a newArray container
            //     let newArray = [];
                
            //     // iterate over each item in the array container
            //     array.forEach(element => {
            //         if (element === "John") {

            //             // if the above condition resolves to true / truthy,
            //             // push the item in question to newArray
            //             newArray.push(element);
            //         }
            //     });

            //     return newArray;
            // }

            // console.log(iterateOverElements(array));
        
        // .map()

            // function iterateOverElements(array) {
                
            //     // map() creates a new array, which we can return directly
            //     return array.map((element) => {
            //         return console.log(element);
            //     });
            // }

            // console.log(iterateOverElements(array));

        // .filter()

            // function iterateOverElements(array, letter) {
                
            //     // filter() creates a new array, which we can return directly
            //     return array.filter((element) => {

            //         // take each element, lowercase all letters, and add each
            //         // element that starts with the given letter to the return
            //         // of filter() (i.e., a new array)  
            //         return element.toLowerCase().startsWith(letter);
            //     });
            // }

            // console.log(iterateOverElements(array, "a"));
        
        // .find()

            // function findElement(query) {

            //     // find() creates a new array, which we can return directly
            //     return array.find((element) => {
                    
            //         // add each element that matches the query to the return
            //         // of find() (i.e., a new array)
            //         return element === query;
            //     });
            // }

            // console.log(iterateOverElements(array, "a"));

// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activites ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Creating / Accessing / Modifying Arrays

    // ✨ BONUS: Try using different ways to define your functions (i.e., const, arrow syntax, etc.) 

    // 🚨 Comment out any conflicting code above before proceeding.

    let arrayOfNumbers = [3, 4, 5, 6];

    // 1️⃣ Create a function that accepts an array of numbers and returns the first element

        // Example: getFirstElement([10, 9, 8]) => 10
        // Example: getFirstElement([1, 2, 3]) => 1
        // Example: getFirstElement([-10, 0, 10]) => -10

        const getFirstElement = (array) => {
            return `Array's first element: ${array[0]}`;
        }

        // alternate solutions
        // const getFirstElement = array => `Array's first element: ${array[0]}`;
        // const getFirstElement = array => `Array's first element: ${array.shift()}`;

        // ✅ Check Answer: 
        console.log(getFirstElement(arrayOfNumbers));

    // 2️⃣ Create a function that returns an array of unique strings sorted by length in ascending order.

        let arrayOfStrings = ["i'm", "louis", "hi"];

        // console.log(arrayOfStrings.length);

        // Example: sortWords(["i'm", "louis", "hi"]) => ["hi", "i'm", "louis"]
        // Example: sortWords(["yellow", "red", "blue"]) => ["red", "blue", "yellow"]
        
        // ❗ If the provided array is empty, return an empty array

        // Example: sortWords([]) => []

        function sortWords(array) {
            
            if (array !== []) {
                // sort() returns a new array, which we store in newArray
                let newArray = array.sort((a, b) =>
                
                    a.length - b.length
                    // if ^ returns a value > than 0, sort b before a.
                    // if ^ returns a value < than 0, sort a before b.
                    // if ^ returns 0, a and b are considered equal.

                    // first iteration => "i'm".length - "louis".length
                    // 3 - 5 => -2
                    // therefore, sort "i'm" before "louis"
                );

                return newArray;
            
            // if the provided array is empty (e.g, []), return [] 
            } else {
                return [];
            }
        }

        // ✅ Check Answer: 
        console.log(sortWords(arrayOfStrings));

// 🚧 Break Out Activity 2: Iterating Through Arrays

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function that sorts and removes all duplicate elements from an array of numbers
    // before returning the new array.

        // Example: removeDuplicates([1, 1, 2, 2, 3, 3]) => [1, 2, 3]
        // Example: removeDuplicates([1, 1, 1, 1]) => [1]
        // Example: removeDuplicates([3, 3, 3, 2, 1]) => [1, 2, 3]

        // ❗ Aim to use loops, ".map()" or other Array methods that we have covered

        let originalArray = [1, 1, 1, 2, 2, 2, 3, 3, 3, 3];

        function removeDuplicates(array) {
            
            // set up an empty container to hold the new array
            let newArray = [];

            for (let i = 0; i < array.length; i++) {
                
                // indexOf => returns -1 if provided item is not
                // found in newArray
                if (newArray.indexOf(array[i]) < 0) {
                    newArray.push(array[i]);
                }
            }

            return newArray;
        }

        // alternate solutions
        // let dataSet = [1, 1, 2, 2, 3, 3, 1, 9, 23, 4];
        // let noDuplicates = dataSet.filter((item, i, ar) => ar.indexOf(item) === i);
        // console.log(noDuplicates)
        
        // ✅ Check Answer: 
        console.log(removeDuplicates(originalArray));

// 🚧 Break Out Activity 3: Advanced Array Challenge

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function that returns the total sum of cubes for a given array of numbers.

        // Example: sumCubes([1, 2, 3]) => 36
            // 1^3 + 2^3 + 3^3 = 1 + 8 + 27 => 36
        // Example: sumCubes([1]) => 1
        // Example: sumCubes([3]) => 27

        // ❗ If the provided array is empty, return 0
        
        // Example: sumCubes([]) => 0

        let numbersToCube = [1, 2, 3];

        function sumCubes(numbers) {
            
            // create a totalSum variable to add cubes to
            let totalSum = 0;

            // if the provided array is not empty...
            if (numbers !== []) {
                for (let i=0; i < numbers.length; i++) {
                    
                    // ...manually compute the cube of each item and add to totalSum
                    totalSum += numbers[i] * numbers[i] * numbers[i];
                }
            }

            return totalSum;
        }

        // ✅ Check Answer: 
        console.log(sumCubes(numbersToCube));