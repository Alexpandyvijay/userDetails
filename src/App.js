import React,{useEffect,useState} from 'react';
import './App.css';

function App() {
  const [docs, setDocs]=useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      await fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((data)=>(data.json()))
      .then((data)=>{setDocs(data)})
      .catch((err)=>(console.log(err)));
    }
    fetchData();
  },[])
  return (
    <div className="App">
      <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
          </tr>
        </thead>
        <tbody>
          {docs.map((value,key)=>{
            return (<tr key={key}>
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{value.body}</td>
            </tr>);
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
