import { useState } from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../redux/reducers/products.reducer'

function Products({ products, addProduct }) {
  console.log(products)

  const [text, setText] = useState('')
  const handleAdd = () => {
    addProduct(text)
    setText('')
  }

  return (
    <div className="m-auto my-2 border max-w-3xl">
      <h1 className='text-center'>Products [Estado array]</h1>
      <ul>
        {
          products.map(desc => (
            <li key={desc}>
              {desc}
            </li>
          ))
        }
      </ul>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} className='border' />
      <button onClick={handleAdd}>Agregar</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (name) => dispatch(addProduct(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)