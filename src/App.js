import store from './redux/store'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import Form from './components/Form'
import Products from './components/Products'
import Blog from './components/Blog'

function App() {
  return (
    <Provider store={store}>
      <div className="m-auto my-2">
        <Counter />
        <Form />
        <Products />
        <Blog />
      </div>
    </Provider>
  );
}

export default App;
