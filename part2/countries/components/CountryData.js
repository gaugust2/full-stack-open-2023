import Weather from "./Weather.js"

const CountryData = ({country}) => {
    const languageKeys = Object.keys(country.languages)
    const mappedLanguages = languageKeys.map(key => country.languages[key])

    return(
        <div>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>

            <h2>languages spoken:</h2>
            <ul>
                {mappedLanguages.map((language) => {
                    return(
                        <li>{language}</li>
                    )
                })}
            </ul>
            <img src={country.flags.png} alt={country.name.common} width="23%" height="23%"/>
            <Weather city={country.capital}/>
        </div>
    )
}

export default CountryData
