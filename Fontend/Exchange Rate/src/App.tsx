
import { useEffect, useState } from 'react'
import './App.css'
type Currencies = {
  [key: string]: string
};
type Latest = {
  [key: string]: number
}

function App() {
  const [currencies, setCurrencies] = useState<Currencies>({})
  const [latest, setLatest] = useState<Latest>({})
  useEffect(() => {
    let url = 'http://localhost:3000/currencies'
    fetch(url).then(res => res.json())
      .then(data => setCurrencies(data))
      .catch(error => {
        throw new Error("Ocurrio un error" + error)
      })
    url = 'http://localhost:3000/latest'
    fetch(url).then(res => res.json())
      .then(data => setLatest(data))
      .catch(error => {
        throw new Error("Ocurrio un error" + error)
      })
  }, []) // se ejecuta solo la primera vez.
  return (
    <>
      <aside className='aside-Exchange'>
        <h1><strong>Currencies</strong></h1>
        <ul>
          {Object.entries(currencies || {}).map(([key, value]) => (
            <li key={key}>{key}: {value}</li> // Mostrar clave y valor
          ))}
        </ul>
      </aside>
      <article className='articule-Exchange'>
        <ul>
          {Object.entries(latest || {}).map(([key, value]) => (
            <li key={key}>{key}: {value}</li> // Mostrar clave y valor
          ))}
        </ul>
      </article>
    </>
  )
}

export default App
