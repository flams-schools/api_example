


export const getAllTodos =  () => async dispatch => {
  try {
    const result = fetch('https://jsonplaceholder.typicode.com/todos')
        .then(data => data.json()).then(data => setData(data))
        .catch(err => console.log(err.message));

    console.log(result)

  } catch (error) {
    
  }
}