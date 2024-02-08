const CalculateDiscount = ({price, discountPercentage}) => {
    const cost = price
    const percentage = discountPercentage
    const pay = price * discountPercentage
    
    const descuento = price - pay 

    return (
        <div>
            <h2 className="text-2xl font-bold">Price discount calculator</h2>
            <p>Original price: ${price}</p>
            <p>Discount Percentage: {discountPercentage*100}%</p>
            <p>Discount Price: ${descuento}</p>
        </div>
    )
    
}
export default CalculateDiscount