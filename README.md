Arry of names challenge
# Extract Array of Names from Users

## Explanation

This code snippet demonstrates how to extract an array of names from an array of user objects in JavaScript.

1. **Defining the Array of Users (`users`)**:
   - We define an array called `users` that contains three objects. Each object represents a user and contains three properties: `id`, `name`, and `IsActive`.

2. **Using `map()` to Extract Names**:
   - We use the `map()` function to iterate over each user object in the `users` array and create a new array containing only the names of the users.

3. **Outputting the Result**:
   - Finally, we log the `names` array to the console, which contains the extracted names of the users.

## Code

```javascript
const users = [
    {
        id: 111,
        name: 'FATOS',
        IsActive: true,
    },
    {
        id: 1,
        name: 'eldaS',
        IsActive: false,
    },
    {
        id: 11,
        name: 'aida',
        IsActive: true,
    }
];

const names = users.map(user => user.name);

console.log(names); // Output: ["FATOS", "eldaS", "aida"]
const names  = users.map(user => user.name);   //mapping through every single item
console.log(names);

method 2: 
const names = []; create an array
for(let i =0 ; i< users.length; i++) {
    names.push(users[i].name);    //push into the empty array

    console.log(names);
}
*/


method 3 
const names = []
users.forEach((user => {
    names.push(user.name);
})

('''SORT''')
The sort() method in JavaScript is used to sort the elements of an array in place and returns the sorted array. This method sorts the elements of an array in ascending order by default and can optionally accept a comparison function to define the sort order.

Here's the syntax for the sort() method:

javascript

array.sort([compareFunction])
array: The array to be sorted.
compareFunction (Optional): A function that defines the sort order. If omitted, the array elements are sorted as strings by default.
Using a Comparison Function
The comparison function is a callback function that takes two parameters (usually denoted as a and b) representing the elements being compared. It returns:

A negative value if a should come before b.
Zero if a and b are considered equal (no sorting is needed).
A positive value if a should come after b.
Here's an example of a simple comparison function:

javascript
Copy code
function compare(a, b) {
    if (a < b) {
        return -1; // a comes before b
    }
    if (a > b) {
        return 1; // a comes after b
    }
    return 0; // a and b are equal
}
Sorting Arrays of Objects
When sorting arrays of objects, you can provide a comparison function that specifies which property of the objects to compare.

For example, to sort an array of objects by their age property in ascending order:

javascript
Copy code
array.sort((a, b) => a.age - b.age);
And to sort in descending order:

javascript
Copy code
array.sort((a, b) => b.age - a.age);
Examples
Here's a simple example of using sort() without a comparison function:

javascript

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
numbers.sort();
console.log(numbers); // Output: [1, 1, 2, 3, 4, 5, 5, 6, 9]
And here's an example using a comparison function to sort in descending order:

javascript
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [9, 6, 5, 5, 4, 3, 2, 1, 1]
Remember, the sort() method modifies the original array in place. If you don't want to modify the original array, you should create a copy of it before sorting.


// Step 1: Extracting an Array of Names
const namesArray = users.map(user => user.name);

// Step 2: Filtering Active Users
const activeUsers = users.filter(user => user.IsActive);

// Step 3: Sorting Users by Age in Descending Order
activeUsers.sort((a, b) => b.age - a.age);

console.log(activeUsers);
