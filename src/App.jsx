import { useEffect, useState } from 'react'
import { getAllCountries } from './services/getAllCountries'
import CountryCard from './components/CountryCard/CountryCard';
import Footer from './components/Footer/Footer';
import './App.css'

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
    <section className='containe_app'>
      <h1>Countries Searcher</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="countryMatchId">Search by name: </label>
          <input type="text" name="country_match" id='countryMatchId'></input>
        </div>
        <button className='btn_submit' type='submit'>
          <i className="fa-solid fa-magnifying-glass"></i>
          </button>
      </form>

      <p className='p_result'>{filteredCountries.length} Results</p>

      <section className='countries_container'>
        {filteredCountries.map(country => 
                          <CountryCard key={country.name.official} 
                            country={country}/>
                           )}
      </section>
      <Footer/> 
    </section>
  )
}
export default App
