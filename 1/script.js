String
Number
Boolean
Symbol
BigInt
null
undefined

Object

// const, let, var

// const age = 50
// let age2 = age
// age2 = 80
// console.log(age)

// const user = {
//     name: 'James Bond',
//     age: 40
// }
// const user2 = user;
// user2.name = 'Agent 007'
// console.log(user.name)


const user = {
    name: 'James Bond',
    age: 40,
    address: {
        city: 'Tbilisi'
    }
}
// const user2 = {
//     ...user,
//     address: {
//         ...user.address
//     }
//     // name: user.name,
//     // age: user.age
// };
// user2.address.city = 'Batumi'
// console.log(user.address.city)

// console.log(5 === "5")
// function sum(a, b) {
//     if(a !== b) {
//         return a + b;
//     }
// }
// var sum2 = function(a, b) {
//     return a + b;
// }

// const sum3 = () => {
//     return sum2
// }
// console.log(sum3()(4, 5))

// const user = {
//     name: "James Bond",
//     sayHello: function() {
//         console.log(this)
//         return "Hello, " + this.name
//     }
// }

// console.log(user.sayHello())

const arr = ['Hello', 123, user, true, [user]]
// user.name = '007'
// console.log(arr)

// const name = user.name
// const age = user.age
// const {name: myName, age, address: {city: cityName}} = user
// const [, , {address: {city}} ] = arr;
// console.log(city)

// const printCity = ({address: {city}, name,  ...otherProps}) => {
//     console.log(otherProps)
//     return city
// }
// console.log(printCity(user))

// for ... of -> Array
// for ... in -> Object

for (const item of arr) {
    console.log(item)
}

for (const fieldName in user) {
    console.log(fieldName, user[fieldName])
}

const obj = {
    level1: {
        level2: {
            level3: [
                {level4: "Hello"}
            ]
        },
        level21: {
            hi: 'Mornign'
        }
    }
}
