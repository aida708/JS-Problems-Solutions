//write code to get array of names from given array of users.4
//get back only active users 
//sort users by age descending


const users = [
    {
        id:111,
        name: 'FATOS',
        IsActive:true,
    },
    {
        id:1,
        name: 'eldaS',
        IsActive:false,
    },
    {
        id:11,
        name: 'aida',
        IsActive:true,
    }

]



// Step 1: Extracting an Array of Names
const namesArray = users.map(user => user.name);

// Step 2: Filtering Active Users
const activeUsers = users.filter(user => user.IsActive);

// Step 3: Sorting Users by Age in Descending Order
activeUsers.sort((a, b) => b.age - a.age);

console.log(activeUsers);



/*
const names  = users.map(user => user.name);   //mapping through every single item
const activeStatus = users.map(user => user.IsActive)
console.log(names);
console.log(activeStatus);

users.sort((user1, user2) => (user1.age < user2.age ?  1: -1));

/*
method 2
const names = []; create an array
for(let i =0 ; i< users.length; i++) {
    if(users[i].isActive{
        names.push(users[i].isActive
            )
    })
    names.push(users[i].name);    //push into the empty array

    console.log(names);
}
*/

/* 
method 3 
const names = []
users.forEach((user => {
    names.push(user.name);
})
*/


