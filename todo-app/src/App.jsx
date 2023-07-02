import './App.css'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { DaysContainer } from './components/DaysContainer'
import  {CreateTodoButton} from './components/CreateTodoButton'
import { TodoText } from './components/TodoText'
import React from 'react'

const TodoInfo = [
  {text:"Gritar con mi amigo ",completed: false},
  {text:"Comer en la casa ",completed: false},
  {text:"Festejar Cumpleanos",completed: false},
  {text:"Crecer Profesionnte",completed: false},
  {text:"Crecer Profalmente",completed: false},
  {text:"Crecer Psionalmente",completed: false},
  {text:"Crecer Pronalmente",completed: false},

]

function App() {
  const [task, setTask] = React.useState(TodoInfo)
  const completedTask = task.filter(task => task.completed).length;
  const totalTask = task.length;
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios han hecho ' + searchValue)

  const searchedTask = task.filter((task)=>{
    return task.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
  }
  );

  const completeTask =(text)=>{
    const newTasks = [...task];
    const taskIndex = newTasks.findIndex(
      (task) => task.text === text 
    )
     const StateTask = newTasks[taskIndex].completed;
     newTasks[taskIndex].completed= !StateTask
    setTask(newTasks)
  }
  
  const deleteTask =(text)=>{
    const newTasks = [...task];
    const taskIndex = newTasks.findIndex(
      (task) => task.text === text 
    )
    newTasks.splice(taskIndex, 1);
    setTask(newTasks)
  }

  
  return (
    <>
    <div className='principal-container'>
      <div className='secondary-container'>
      <TodoCounter/>
      <DaysContainer/>
      <TodoText
        completed={completedTask}
        pending={totalTask}
      />
      </div>
      <TodoList>
      <TodoSearch
       searchValue={searchValue}
       setSearchValue={setSearchValue}
      />
        {searchedTask.map(todo=>(
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={ ()=> completeTask(todo.text)}
            onDelete={ ()=> deleteTask(todo.text)}
            />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </div>
    </>
  )
}

export default App
