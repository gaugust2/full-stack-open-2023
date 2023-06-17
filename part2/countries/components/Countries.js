import CountryData from "./CountryData"

const Country = ({country}) => <div>{country.name.common}</div>

const Countries = ({countriesToShow}) => {
    if(countriesToShow.length === 1){
        return(
            <div><CountryData country={countriesToShow[0]}/></div>
        )
    }

    if(countriesToShow.length <= 10){
        return(
            <div>
                {countriesToShow.map(country => {
                    return (
                        <Country country={country}/>
                    )
                })}
            </div>
        )
    }

    

    return(
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
