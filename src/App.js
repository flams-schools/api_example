import React, { useState } from 'react' 
import './App.css';
import Button from './components/Button';
import UnOrderedList from './components/UnOrderedList';
import InputError from './components/InputError';
import {connect} from 'react-redux';
import {getAllTodos} from "./store/actions/todoAction";

const App = ({todos, getAllTodos}) => {
  const [data, setData] = useState(null)
  const [search, setSearch] = useState("")
  const [error, setError] = useState("")

  React.useEffect(() => {
    getAllTodos()
    // eslint-disable-next-line-
  },[])

  

  const searchResult = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${search}`)
      .then(data => data.json()).then(data => console.log(data))
      .catch(err => console.log(err.message));
  }

  const onChangeData = (e) => {
    const {value} = e.target
    setSearch(value)
    if (search || search.length < 1) {
      setError("")
      return;
    }
    setError("Please Enter a Number From 1 - 200!")
  }

  console.log(search)

  // console.log(data);

  // {data ? "Yes" : "No"}
  // {data && "Yes"}

  return (
    <div className="container">
      {/* <button onClick={fetchData}>Get Data</button><br /> */}
      <div style={{ display: 'flex' }}>
        {/* <Button title="Get Data" getData={fetchData} /> */}
        <InputError type="text" name='search' value={search} placeholder="Search..." onChange={onChangeData} error={error} labelname="Search" />
        {/* <input type="text" name='search' value={search} placeholder="Search..." onChange={onChangeData}  /> */}
        <Button title="Search" getData={searchResult} />
      </div>

      {data && 
        <UnOrderedList styling="section main_body"> 
          {data.map(item => {
            return <li>{item.title}</li>
          })}
        </UnOrderedList>
      }
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos.todos
})

export default connect(mapStateToProps, {getAllTodos}) (App);