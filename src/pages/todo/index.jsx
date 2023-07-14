import { useState, createContext } from 'react'
import Todos from './Todos'
import TodoForm from './TodoForm'
import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom'
// import stylesExt from '../../style/Todo.module.css'

export const TodoContext = createContext()

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }

  // Definisikan toggleCompleted di sini
  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  return (

    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
      <Helmet>
				<title>{"To-do App"}</title>
			</Helmet>
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos} />
      </div>
      {/* <Link to='/' className={`${stylesExt.btn} ${stylesExt.btnSecondary} ${stylesExt.btnBack}`}>Back to Home Page</Link> */}
    </TodoContext.Provider>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}

export default App
