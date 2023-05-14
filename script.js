// localStorage.clear()
// let a = [61, 16, 1]

// let b = [3, 4, 56, 103, 3, 4]
// localStorage.setItem('a', JSON.stringify(a))
// alert(localStorage.getItem('a'))
console.log(a[a.length - 1])
console.log(a.length)
a[1] = 'perfomenc'
console.log(a)
let c = a + b
console.log(c)
let four_zero_four = document.querySelector('#four_zero_four')
let prica = document.querySelector('#price')
let imge = document.querySelector('#imge')
let d 
let price 
let kartunochki 

if (
    localStorage.getItem('d') !== null
) {
     d = JSON.parse(localStorage.getItem('d'))
} else {
     d = []
}
if (
    localStorage.getItem('price') !== null
) {
     price = JSON.parse(localStorage.getItem('price'))
} else {
     price = []
}
if (
    localStorage.getItem('kartunochki') !== null
) {
     kartunochki = JSON.parse(localStorage.getItem('kartunochki'))
} else {
     kartunochki = []
}



let shop = document.querySelector('.shop')
let five_zero_five = document.querySelector('#five_zero_five')

for (i = 0; i < JSON.parse(localStorage.getItem('d')).length; i++) {
    shop.innerHTML += `<div class="towar"> 
    <img src="${JSON.parse(localStorage.getItem('kartunochki'))[i]}" alt="">
    <h3>${JSON.parse(localStorage.getItem('d'))[i]}</h3>
    <span>${JSON.parse(localStorage.getItem('price'))[i]}</span>
 </div>`
}


function add() {
    shop.innerHTML = ''
    if (four_zero_four.value != '') {
        d.push(four_zero_four.value)
        price.push(prica.value)
        kartunochki.push(imge.value)
        localStorage.setItem('d', JSON.stringify(d))
        localStorage.setItem('price', JSON.stringify(price))
        localStorage.setItem('kartunochki', JSON.stringify(kartunochki))
        console.log(d)
        for (i = 0; i < d.length; i++) {
            shop.innerHTML += `<div class="towar"> 
            <img src="${JSON.parse(localStorage.getItem('kartunochki'))[i]}" alt="">
            <h3>${JSON.parse(localStorage.getItem('d'))[i]}</h3>
            <span>${JSON.parse(localStorage.getItem('price'))[i]}</span>
         </div>`
        }


    }
   
}


function five_zero_fiva() {

    shop.innerHTML = ''
    if (five_zero_five.value != '') {
        // delete  d[five_zero_five.value]
        d.splice(d.indexOf(five_zero_five.value), 1)
        price.splice(d.indexOf(five_zero_five.value), 1)
        console.log(d)
        for (i = 0; i < d.length; i++) {
            shop.innerHTML += ` <div class="towar"> ${d[i]}</div>`
        }

    }
}
let admin = document.querySelector('#addmin')
let log = document.querySelector('#log')
let pass = document.querySelector('#pass')
let login = ''
let password = ''

function getadmin() {
    if (log.value == login) {
        admin.style.display = 'block'
    } else {
        alert("don't richt login")
    }
}

function close_admin() {
    admin.style.display = 'none'
}