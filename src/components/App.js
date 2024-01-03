
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [fruits, setFruits] = useState(["apple", "banana", "cherry", "date", "elderberry", "fig"])
  const [data, setData] = useState('')
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search item</h1>
        <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
        {
          <ul>
            {
              data === ""? (fruits.map((item,index) => <li key={index}>{item}</li>)) : 
              (fruits
                .filter(item => item.includes(data))
                .map((item,index) => <li key={index}>{item}</li>)
              )
            }
          </ul>
        }
                
    </div>
  )
}

export default App
