import { useState } from "react"
import CountryData from "./CountryData"

const Country = ({ country }) => {
    const [showSingular, setShowSingular] = useState(false)

    const handleClick = () => {
        setShowSingular(!showSingular)
    }

    return(
        <div>
            {country.name.common}<button onClick={handleClick}>show</button>
            {showSingular ? (<CountryData country={country} />) : (null)}
        </div>
    )

}

const Countries = ({ countriesToShow }) => {
    if (countriesToShow.length === 1) {
        return (
            <div><CountryData country={countriesToShow[0]} /></div>
        )
    }

    if (countriesToShow.length <= 10) {
        return (
            <div>
                {countriesToShow.map(country => {
                    return (
                        <Country country={country} />
                    )
                })}
            </div>
        )
    }



    return (
        <div>Too many matches, specify another filter</div>
    )
}

export default Countries

/*
      {countriesToShow.map(country => {
        return(
          <div>{country.name.common}</div>
        )
      })}

*/
