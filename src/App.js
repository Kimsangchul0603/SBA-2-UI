import React from 'react';
import { Provider } from 'react-redux'
// import TodoInput from './components/TodoInput'
// import TodoList from './components/TodoList'
import store from './store'
import Signup from './components/Signup'
import ChatBot from './components/ChatBot'

const App = () => {
  return <>
  <Provider store = {store}>
  <div style={{width: "300px",margin: "0 auto"}}>
      <Signup/>
    </div></Provider>
    </>
}

export default App;