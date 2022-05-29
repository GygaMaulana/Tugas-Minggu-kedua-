 // Task No.4 Bagian A
let data = {
    id : 1, 
    name : 'Leanne Graham',
    username : 'Bret ',
    email : 'Sincere@april.biz',
    address : {
            street : 'Kulas Light ',
            suite : 'Apt. 556',
            city : 'Gwenborough ',
            zipcode : '92998-3874',
        },
    phone : ' 1-770-736-8030 x56442',
    website : 'hildegard.org',
}


let rubahData = {
    ...data,
    name: 'Gyga Maulana',
    email: 'gygamaulana@gmail.com',
    hobi: 'Music',
}

console.log(rubahData)

// Task No.4 Bagian B 

 const { address : {street , city}} = data
 const editdata = {
     street : street,
     city : city,
 }

 console.log (editdata)

