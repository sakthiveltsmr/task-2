
import './App.css';

function App() {
  let sports=["playing cricket","playing carom","palying foodball"];

  return (
    <div className="App">
      {sports.map((item)=>{
        return(
          <ul>
            <li>{item}</li>
            <button>Delete</button>
          </ul>
        )
      })}
    </div>
  );
}

export default App;
