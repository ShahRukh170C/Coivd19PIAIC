import React ,{useState, createContext , useEffect} from 'react'

import {fetchGlobalData} from '../API/FetchData'
export const initialGolbalData = createContext([{}])


export const GlobalData =({children}) =>{
    const [Data,setData] = useState([{}])

    useEffect(()=>{
        const fetchData = async () =>{
            const fetchData = await fetchGlobalData();
            // console.log(fetchData)
            setData(fetchData)
        }
        fetchData()
    },[])
    return(
        <initialGolbalData.Provider value ={{VirusGlobalData : Data }}>
            {children}
        </initialGolbalData.Provider>
    )
}
