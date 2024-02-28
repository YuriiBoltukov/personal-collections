import './App.css'
import { useState, useEffect } from 'react';

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
    <div>
      <h4>{message}</h4>
    </div>
  )
}

export default App
