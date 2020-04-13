let cart = [];
let detail = [];

export function setDetail(x){
    detail.push(x)
    return detail
}
export default function viewDetail(){
    console.log(detail)
    return [detail.name,detail.description]
}

export function addToCart(id) {
    if(cart == ""){
        cart.push(id)
        console.log(cart)
        return cart 
    }
    else{
        cart.map(spell => {
            if (spell.id === id) {
                alert('Vous avez déjà ce produit dans le panier')
            }
            else{
                cart.push(id)
                console.log(cart)
                return cart 
            }
        })
    }
}

export function viewCart() {
    return cart
}

export function delById(id) {
    cart.map((spell,iterate) => {
        if (spell.id === id) {
            cart.splice(iterate,1)
        }
        return console.log("Removed")
    })
}

export function removeCart() {
    cart = []
}