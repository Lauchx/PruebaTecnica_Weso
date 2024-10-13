
import { SetStateAction, useEffect, useState } from 'react'
import './App.css'
type Currencies = {
  [key: string]: string
};
type Latest = {
  [key: string]: number
}
type Historical = {
  [key: string]: number
}

function App() {
  const [currencies, setCurrencies] = useState<Currencies>({})
  const [latest, setLatest] = useState<Latest>({})
  const [historical, setHistorical] = useState<Historical>({})
  const [historical2, setHistorical2] = useState<Historical>({})
  const [selectedKey, setSelectedKey] = useState('');
  useEffect(() => {
    // USAR INPUT DAY PARA EL HISTORICO
    const url = 'https://backend-weso-1.onrender.com/currencies'
    fetch(url).then(res => res.json())
      .then(data => setCurrencies(data))
      .catch(error => {
        throw new Error("Ocurrio un error" + error)
      })
    const url2 = 'https://backend-weso-1.onrender.com/latest'
    fetch(url2).then(res => res.json())
      .then(data => setLatest(data))
      .catch(error => {
        throw new Error("Ocurrio un error" + error)
      })
  }, []) // se ejecuta solo la primera vez.

  const CurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedKey(event.target.value)
  }
  const changeDate = (event: { target: { value: SetStateAction<string>; }; }) => {
    console.log(event.target.value)
    const url3 = `https://backend-weso-1.onrender.com/historical/${event.target.value}`
    fetch(url3)
      .then(res => res.json())
      .then(data => setHistorical2(data)) // Actualizar 'latest' con datos históricos
      .catch(error => {
        throw new Error("Ocurrió un error al obtener datos históricos: " + error)
      })
  }
  const changeDateOneCurrency = (event: { target: { value: SetStateAction<string>; }; }) => {
    console.log(event.target.value)
    const url3 = `https://backend-weso-1.onrender.com/historical/${event.target.value}`
    fetch(url3)
      .then(res => res.json())
      .then(data => setHistorical(data)) // Actualizar 'latest' con datos históricos
      .catch(error => {
        throw new Error("Ocurrió un error al obtener datos históricos: " + error)
      })
  }


  return (
    <>
      <aside className='aside-app'>
        <h3>All currencies</h3>
        {Object.entries(currencies || {}).map(([key, value]) => (
          <option key={key} value={key} > {key}: {value} </option> // Mostrar clave y valor
        ))}
      </aside>

      <article className='article-app'>
        <h3>All currencies are based on 1 dollar</h3>
        <form className='form-currency'>
          <fieldset className='form-currency-fs' >
            <label>
              <legend>Select Currency:</legend>
              <select onChange={CurrencyChange}>
                {Object.entries(currencies || {}).map(([key, value]) => (
                  <option key={key} value={key} > {key}: {value} </option> // Mostrar clave y valor
                ))}</select>
            </label>
          </fieldset>
        </form>

        <div className='div-currency'>

          <h3>Historical data of the selected currency </h3>
          {latest == null ? (
            <p className='error'>The selected currency was not found.</p>
          ) : (
            Object.entries(latest || {}).filter(([key]) => key === selectedKey).map(([key, value]) => (
              <p className='p-currency-historical' key={key}> 1 USD = {key}: {value} </p>
            ))
          )}
        </div>

        <div className='div-currency'>
          <input type="date" onChange={changeDateOneCurrency} />
          <ul>
            {historical == null ? (
              <p className='error'>The selected currency was not found.</p>
            ) : (
              Object.entries(historical || {}).filter(([key]) => key === selectedKey).map(([key, value]) => (
                <div key={key}>
                  <h3>Historical data of {key}</h3>
                  <p className='p-currency-historical'> {key}: {value} </p>
                </div>
              ))
            )}
          </ul>
        </div>
        <div className='articule-div-historical2'>
        <h3>Historical data</h3>
          <input type="date" onChange={changeDate} />
          <ul>
            {Object.entries(historical2 || {}).map(([key, value]) => (
              <li key={key}> {key}: {value} </li> // Mostrar clave y valor
            ))}
          </ul>
        </div>
      </article>

    </>
  )
}

export default App
