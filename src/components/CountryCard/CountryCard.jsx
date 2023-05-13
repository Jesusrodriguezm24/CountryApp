import './CountryCard.css'

const CountryCard = ({country}) => {
  return (
    <article className='country_card'>
    <h2 >{country.name.common}</h2>
    <div className='country_card_img'>
      <img src={country.flags.svg} alt={country.flags.alt} />
    </div>
    <ul>
      <li><b>Population: </b>{country.population}</li>
      <li><b>Region: </b>{country.region}</li>
      <li><b>Capital: </b>{country.capital?.[0] ?? "Sin capital"}</li>
      <li><b>Lenguages: </b>{country.languages 
                            ? Object.values(country.languages).map(language => language + ", ") 
                            : "Sin idioma"}</li>
    </ul>
  </article>
  )
}
export default CountryCard