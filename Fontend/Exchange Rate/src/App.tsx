
import { SetStateAction, useEffect, useState } from 'react'
import './App.css'
type Currencies = {
  id: string
  name: string
};
type Latest = {
  id: string
  value: string
}
type Historical = {
  [key: string]: number
}

function App() {
  const [currencies, setCurrencies] = useState<Currencies[]>([])
  const [latest, setLatest] = useState<Latest[]>([])
  const [historical, setHistorical] = useState<Historical>({})
  const [historical2, setHistorical2] = useState<Historical>({})
  const [selectedKey, setSelectedKey] = useState('');
  useEffect(() => {
    // USAR INPUT DAY PARA EL HISTORICO
    const url = 'http://localhost:3000/currencies'
    fetch(url).then(res => res.json())
      .then(data => setCurrencies(data))
      .catch(error => {
        throw new Error("Ocurrio un error" + error)
      })
    const url2 = 'http://localhost:3000/latest'
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
    const url3 = `http://localhost:3000/historical/${event.target.value}`
    fetch(url3)
      .then(res => res.json())
      .then(data => setHistorical2(data)) // Actualizar 'latest' con datos históricos
      .catch(error => {
        throw new Error("Ocurrió un error al obtener datos históricos: " + error)
      })
  }
  const changeDateOneCurrency = (event: { target: { value: SetStateAction<string>; }; }) => {
    console.log(event.target.value)
    const url3 = `http://localhost:3000/historical/${event.target.value}`
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
        <h3>All currencies are based on 1 dollar</h3>
        <form className='form-currency'>
          <fieldset className='form-currency-fs' >
            <label>
              <legend>Select Currency:</legend>
              <select onChange={CurrencyChange}>
                {currencies?.map(currency => (
                  <option key={currency.id} value={currency.id} > {currency.id}: {currency.name} </option> // Mostrar clave y valor
                ))}</select>
            </label>
          </fieldset>
        </form>


        <div className='div-currency'>
        <h3>Historical data of the selected currency </h3>
          {latest == null ? (
            <p className='error'>The selected currency was not found.</p>
          ) : (
            latest.filter(currency => currency.id === selectedKey).map(curency => (
              <p className='p-currency-historical' key={curency.id}> 1 USD = {curency.id}: {curency.value} </p>
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
      </aside>

      <article className='article-app'>
        <div className='articule-div-historical2'>
          <input type="date" onChange={changeDate} />
          <ul>
            <h3>Historical data</h3>
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
