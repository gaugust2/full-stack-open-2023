import axios from "axios";
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])

  useEffect(() => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response => {
      console.log("success")
      setCountries(response.data)
      console.log(response.data)
    })
  }, [])

  const handleFilter = (event) => {
    setFilter(event.target.value)
    setCountriesToShow(countries.filter((country) => country.name.common.toLowerCase().includes(event.target.value)))
  }

  return (
    <div>
      <Filter filter={filter} handleFilter={handleFilter}/>

      <Countries countriesToShow={countriesToShow}/>
    </div>
  )

}

export default App;
