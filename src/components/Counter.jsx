import { connect } from "react-redux"
import { increment, decrement } from "../redux/reducers/counter.reducer"
import Section from './Section'

function Counter({ count, increment, decrement }) {
  return (
    <Section title='Counter' subtitle='Estado simple'>
      <h2 className="text-4xl font-bold text-center border bg-white p-2 self-center">{count}</h2>
      <div className="text-center mt-4">
        <button className="bg-red-500 rounded-l w-12 h-7 text-lg" onClick={decrement}>-</button>
        <button className="bg-green-500 rounded-r w-12 h-7 text-lg" onClick={increment}>+</button>
      </div>
    </Section>
  )
}

const mapStateToProps = ({ counter }) => {
  return {
    count: counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)