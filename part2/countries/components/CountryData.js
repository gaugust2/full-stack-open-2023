const CountryData = ({country}) => {
    const languageKeys = Object.keys(country.languages)
    const mappedLanguages = languageKeys.map(key => country.languages[key])

    return(
        <div>
            <h1>{country.name.common}</h1>
            <div>{country.capital}</div>
            <div>{country.area}</div>

            <h2>languages spoken:</h2>
            <ul>
                {mappedLanguages.map((language) => {
                    return(
                        <li>{language}</li>
                    )
                })}
            </ul>
            <img src={country.flags.png} alt={country.name.common} width="23%" height="23%"/>
        </div>
    )
}

export default CountryData
