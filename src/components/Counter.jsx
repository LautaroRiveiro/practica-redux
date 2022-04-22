import { connect } from "react-redux"
import { increment, decrement } from "../redux/reducers/counter.reducer"

function Counter({ count, increment, decrement }) {
  return (
    <div className="m-auto my-2 border max-w-3xl text-center">
      <h1>Counter [Estado simple]</h1>
      <h2 className="text-2xl font-bold">{count}</h2>
      <div>
        <button className="bg-green-500 px-2 rounded w-10 m-1" onClick={increment}>+</button>
        <button className="bg-red-500 px-2 rounded w-10 m-1" onClick={decrement}>-</button>
      </div>
    </div>
  )
}

const mapStateToProps = ({counter}) => {
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