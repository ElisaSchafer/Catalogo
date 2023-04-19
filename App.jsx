import { Todo } from './components/Todo'
import { TodoChat } from './components/TodoChat'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

export function App() {
  return (
    <>
      <fragment className="listas">
        <main>
          <Todo />
          <TodoChat />
          <TodoForm />
          <TodoList />
        </main>
      </fragment>
    </>
  )
}