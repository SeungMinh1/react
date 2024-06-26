
function Todo({data}) {
  const todoList = []
  data.forEach(element => {
    //console.log(element);
    todoList.push(  <div key={element.name}><div className="c-cb">
                            <input id="todo-0" type="checkbox" defaultChecked={true} />
                            <label className="todo-label" htmlFor="todo-0">
                              {element.name}
                            </label>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn">
                              Edit <span className="visually-hidden">{element.name}</span>
                            </button>
                            <button type="button" className="btn btn__danger">
                              Delete <span className="visually-hidden">{element.name}</span>
                            </button>
                        </div></div>)
  });
  return (<li className="todo stack-small">
            {todoList}
          </li>
  )
}

function Form(){
  return (<form>
            <h2 className="label-wrapper">
              <label htmlFor="new-todo-input" className="label__lg">
                What needs to be done?
              </label>
            </h2>
            <input
              type="text"
              id="new-todo-input"
              className="input input__lg"
              name="text"
              autoComplete="off"
            />
            <button type="submit" className="btn btn__primary btn__lg">
              Add
            </button>
          </form>)

}

function FilterButton(){
  return (  <div className="filters btn-group stack-exception">
              <button type="button" className="btn toggle-btn" aria-pressed="true">
                <span className="visually-hidden">Show </span>
                <span>all</span>
                <span className="visually-hidden"> tasks</span>
              </button>
              <button type="button" className="btn toggle-btn" aria-pressed="false">
                <span className="visually-hidden">Show </span>
                <span>Active</span>
                <span className="visually-hidden"> tasks</span>
              </button>
              <button type="button" className="btn toggle-btn" aria-pressed="false">
                <span className="visually-hidden">Show </span>
                <span>Completed</span>
                <span className="visually-hidden"> tasks</span>
              </button>
            </div>)
}

function App(props) {
  const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false },
  ];

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form/>
      <div className="filters btn-group stack-exception">
        <FilterButton />

      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <Todo data={DATA}/>
   
      </ul>
    </div>
  );
}

export default App;