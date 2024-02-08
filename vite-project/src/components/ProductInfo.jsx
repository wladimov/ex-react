const ProductInfo = ({name, price, available}) => {
    if (available) {
        return (
            <div>
                <p>Nombre: {name}</p>
                <p>Precio: ${price}</p>
            </div>
        )
        } else {
           return (
               <div>
                <p>Nombre: {name}</p>
                <p>Out of stock</p>
               </div>
           )
        }
    
}
export default ProductInfo

