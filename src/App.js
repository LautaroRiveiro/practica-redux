import store from './redux/store'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import Form from './components/Form'
import Products from './components/Products'
import Blog from './components/Blog'
import Todos from './components/Todos'

function App() {
  return (
    <Provider store={store}>
      <header className='h-10 bg-slate-900 text-white flex items-center'>
        <p className='ml-5'>Práctica <span className='font-bold'>Redux</span></p>
      </header>
      <div className="m-auto my-2">
        <Counter />
        <Form />
        <Products />
        <Todos />
        <Blog />
      </div>
    </Provider>
  );
}

export default App;
