
let products = []

if (localStorage.getItem('basket')) {

    products = JSON.parse(localStorage.getItem('basket'))
}


if (products.length) {

} else {
    products = []
    localStorage.setItem('basket', products)

}

export function AddtoBasket(id) {

    let r = products.filter(product => { return product.id === id })


    let newproduct;

    if (r.length) {

        products.filter(product => { return product.id === id })[0].count += 1


        localStorage.setItem('basket', JSON.stringify(products))
    } else {
        console.log('else');
        newproduct = { id: id, count: 1 }

        products.push(newproduct)


        localStorage.setItem('basket', JSON.stringify(products))
    }

}

export function deletee() {

    products = []


}
export { products }