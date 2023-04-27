let a = [61, 16, 1]
let b = [3, 4, 56, 103, 3, 4]
console.log(a[a.length - 1])
console.log(a.length)
a[1] = 'perfomenc'
console.log(a)
let c = a + b
console.log(c)
let four_zero_four = document.querySelector('#four_zero_four')
let prica = document.querySelector ('#price')
let imge = document.querySelector ('#imge')
let d = []
let price =[]
let kartunochki =[]
function add() {
    shop.innerHTML = ''
    if (four_zero_four.value != '') {
        d.push(four_zero_four.value)
        price.push(prica.value)
        kartunochki.push(imge.value)
        console.log(d)
        for (i = 0; i < d.length; i++) {
            shop.innerHTML +=`<div class="towar"> 
            <img src="${kartunochki[i]}" alt="">
            <h3>${d[i]}</h3>
            <span>${price[i]}</span>
         </div>`
        }

    }

}
let shop = document.querySelector('.shop')
let five_zero_five = documnt.querySelector('#five_zero_five')

function five_zero_fiva() {

    shop.innerHTML = ''
    if (five_zero_five.value != '') {
    // delete  d[five_zero_five.value]
d.splice(d.indexOf(five_zero_five.value)  ,1)
price.splice(d.indexOf(five_zero_five.value)  ,1)
        console.log(d)
        for (i = 0; i < d.length; i++) {
            shop.innerHTML +=` <div clas="towar"> ${d[i]}</div>`
        }

    }
}
let log= document.querySelector('#log')
let pass= document.querySelector('#pass')