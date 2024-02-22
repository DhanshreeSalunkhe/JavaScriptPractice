const obj = {
    name : 'Dhanu',
    age: 24,
    address:{
        city: 'Pune',
        pincode: 411038,
        locality: {
            landmark : "post office",
        },
    },
};

const {name, address:{pincode}} = obj;

console.log(name);



let arr = [1,2,2,3,5,8];

arr.forEach(function(element,index)
{
    console.log(element,index);
})

let allnames = arr.map(function(element)
{
    return element.name;
    
})