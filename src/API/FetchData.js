
const url ='https://api.covid19api.com/summary'


export const fetchGlobalData =async () =>{
    const fetchObject = await fetch(url)
    const fetchData = await fetchObject.json()
    const {Global,Countries} = fetchData;

    return {
        Global,
        Countries
    }
}
export const getCountryData=async (countryName) =>{
    if(countryName===''){
        countryName="Pakistan"
    }
    const CountryURL =`https://api.covid19api.com/country/${countryName}`
    // console.log(countryName)
    const fetchObject = await fetch(CountryURL)
    const fetchData = await fetchObject.json()
    // console.log(fetchData)
    return  {
        countryStatus : {
            Recovered: fetchData[fetchData.length-1].Recovered,
            Deaths:fetchData[fetchData.length-1].Deaths,
            Confirmed:fetchData[fetchData.length-1].Confirmed
        }
        ,
        CompleteData : fetchData
    }
  

}