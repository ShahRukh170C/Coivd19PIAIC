import React,{createContext,useEffect, useState} from 'react'


import {getCountryData} from '../API/FetchData'
export const CountryData = createContext([{}])


export const CountryDataProvider = ({children})=>{
    const [countryName,setCountryName] = useState('')
    const [fetchedData, setFetchedData] = useState([{}])

    const getCountryName = (countryName) =>{
        setCountryName(countryName)
    }
    
    useEffect(()=>{
        const methodName = async()=>{
            // console.log(countryName)
            const APIFetchedData =  await getCountryData(countryName)
            setFetchedData(APIFetchedData)
            // Set Data of Country
            // pass state.Country
        }
        methodName()
    },[countryName])

    return( 
        <CountryData.Provider value={{APICountryData:fetchedData , getCountryName}}>
            {children}
        </CountryData.Provider>
    )
}