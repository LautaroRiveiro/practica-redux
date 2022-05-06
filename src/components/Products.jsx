import { useState } from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../redux/reducers/products.reducer'
import Section from './Section'

function Products({ products, addProduct }) {
  console.log(products)

  const [text, setText] = useState('')
  const handleAdd = () => {
    addProduct(text)
    setText('')
  }

  return (
    <Section title='Products' subtitle='Estado array'>
      <ul>
        {
          products.map(desc => (
            <li key={desc} className='m-1'>
              {desc}
            </li>
          ))
        }
      </ul>

      <div className='flex'>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className='border' />
        <button className='btn' onClick={handleAdd}>Agregar</button>
      </div>
    </Section>
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