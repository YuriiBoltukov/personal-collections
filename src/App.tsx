import './App.css'
import { useState, useEffect }          from 'react';
import { Button } from 'react-bootstrap';
// import { Routes, Route,  NavLink } from 'react-router-dom'
function App() {
  const [message, setMessage]: [string, (value: string) => void] = useState('');

  async function getMsg() {
    try{
      const response = await fetch('http://localhost:5000');
      const msg: string = await response.json();
      setMessage(msg);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getMsg()
  }, []);

  return (
    <>
      <div>
        <h4>{message}</h4>
        {/*<NavLink to={}>home</NavLink>*/}
        {/*<NavLink to={}>home</NavLink>*/}
        {/*<NavLink to={}>home</NavLink>*/}
        {/*<NavLink to={}>home</NavLink>*/}
      </div>
      {/*<Routes>*/}
      {/*  <Route path='/' element={< comp/>} />*/}
      {/*  <Route path='/' element={< comp/>} />*/}
      {/*  <Route path='/' element={< comp/>} />*/}
      {/*  <Route path='/' element={< comp/>} />*/}
      {/*</Routes>*/}
    </>

  )
}

export default App
