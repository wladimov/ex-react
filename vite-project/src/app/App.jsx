import CalculateDiscount from "../components/CalculateDiscount"
import ProductInfo from "../components/ProductInfo"
import ProductsList from "../components/ProductsList"
import Books from "../components/Books"

import './App.css'

function App() {

  return (
    <>
      <main>
        <section className="w-full h-96 bg-sky-200 p-5">
          <h1>Exercise 1</h1>
          <CalculateDiscount price={100} discountPercentage={0.2}/>
        </section>


      <div>
        <h1>Product Information</h1>
        <ProductInfo name={'Banana'} price={1000} available={true} />
      </div>
      <div>
        <h1>Product Information</h1>
        <ProductInfo name={'Manzana'} price={2000} available={false} />
      </div>

      <ProductsList />
      
        <section className="mt-8 w-full h-96 bg-blue-200 p-5" >
          <h1>Books</h1>
        </section>
      </main>
    </>
  )
}

export default App