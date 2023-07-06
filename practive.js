// const inverseNumber = (num) => num === 0 ? 0 : num *= -1

// const inverseArray = (nums) => {
//     const result = []
//     for (let i = 0; i < nums.length; i++) {

//         result.push(inverseNumber(nums[i]))
//     }
//     return result
// }
// console.log(inverseArray([1, -3, 76, 991, -7000, 4])) 

const names = [`Rob`, 'Brittney']

const newNames = names.map((name) => {
    return (`awesome ${name}`)
})

console.log(newNames)