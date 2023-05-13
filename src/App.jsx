
import { useEffect, useState } from 'react'
import './App.css'
import { getAllCountries } from './services/getAllCountries'
import CountryCard from './components/CountryCard/CountryCard';

function App() {
  const [countries, setCountries] = useState([]);
  const [keyWord, setKeyWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setKeyWord(e.target.country_match.value);
     
  }

  const filteredCountries = countries.filter(country=>
                            country.name.common.toLowerCase().includes(keyWord.toLowerCase())
  );

  useEffect(() => {
    const loadCountries = async () => {
      const dataCountries = await getAllCountries();
      
      setCountries(dataCountries); 
     
    } 
    loadCountries();
  }, [])


  return (
    <>
      <h1>Countries Searcher</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="countryMatchId">Search by name: </label>
          <input type="text" name="country_match" id='countryMatchId'></input>
        </div>
        <button type='submit'>Search</button>
      </form>

      <p>{filteredCountries.length} Results</p>

      <section className='countries_container'>
        {filteredCountries.map(country => 
                          <CountryCard key={country.name.official} 
                            country={country}/>
                           )}
      </section>
    </>
  )
}
export default App
