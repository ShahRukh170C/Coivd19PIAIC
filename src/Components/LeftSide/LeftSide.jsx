import React,{useContext} from 'react'

import {SimplePaper} from '../Paper/Paper'

import {CountryData} from '../../StatesAndReducer/CountryData'
const LeftSide = () =>{
    const {APICountryData} = useContext(CountryData)
    // console.log("REahed")
    if(!APICountryData.countryStatus){
        return ''
    }
    console.log(APICountryData)
    return (
        <div>
             <SimplePaper name="Conformed Cases" number={APICountryData.countryStatus.Confirmed} colors="red"></SimplePaper> 
             <SimplePaper name="Total Deaths" number={APICountryData.countryStatus.Deaths} colors="red"></SimplePaper> 
             <SimplePaper name="Total Recovered" number={APICountryData.countryStatus.Recovered} colors="green"></SimplePaper>

        </div>
    )
}

export default LeftSide