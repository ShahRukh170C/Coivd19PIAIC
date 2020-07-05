import React,{useContext} from 'react';
import {Line} from 'react-chartjs-2';
import style from './LineChar.module.css'

import {monthlyStats} from '../../RefactorData/FormateData'
import {returnString, returnNumber} from '../../RefactorData/Filter'
import {CountryData} from '../../StatesAndReducer/CountryData'


export const LineChart =() => {

    // const [FData,setFData] =useState([])

    const {APICountryData} = useContext(CountryData)
    if(!APICountryData.countryStatus){
        return ''
    }
    const ReturnDAta = monthlyStats(APICountryData.CompleteData)

    const Label = ReturnDAta.months.filter((item) =>(returnString(item)))
    const conformed = ReturnDAta.conformed_persons.filter((item) =>(returnNumber(item)))
    const deaths = ReturnDAta.decised_persons.filter((item) =>(returnNumber(item)))
    const recovered = ReturnDAta.recoverd_persons.filter((item) =>(returnNumber(item)))
    

    const FilterData = {
        mo:ReturnDAta.months.filter((item) =>(returnString(item))),
        C:ReturnDAta.conformed_persons.filter((item) =>(returnNumber(item))),
        D:ReturnDAta.decised_persons.filter((item) =>(returnNumber(item))),
        R:ReturnDAta.recoverd_persons.filter((item) =>(returnNumber(item)))
    }
   
    
    console.log("Calleded")
    console.log(Label,conformed,deaths,recovered)
    const state = {
        labels: FilterData.mo,
        datasets: [
         
          {
            label: 'Conformed',
            fill: false,
            borderWidth: 2,
            lineTension: 0.5,
            backgroundColor: '#ffc045',
            borderColor: '#ffc045',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.5,
            borderJoinStyle: 'miter',
            pointBorderColor: '#ffc045',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#ffc045',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 5,
            pointRadius: 1,
            pointHitRadius: 10,
              data: FilterData.C
            },
            {
                label: 'Deaths',
                fill: false,
                borderWidth: 2,
                lineTension: 0.5,
                backgroundColor: '#f30a49',
                borderColor: '#f30a49',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.5,
                borderJoinStyle: 'miter',
                pointBorderColor: '#f30a49',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#f30a49',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 5,
                pointRadius: 1,
                pointHitRadius: 10,
                  data: FilterData.D
                },
                {
                    label: 'Recovered',
                    fill: false,
                    borderWidth: 2,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.5,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 5,
                    pointRadius: 1,
                    pointHitRadius: 10,
                      data: FilterData.R
                    }
        ]
    }
      
   
    console.log(APICountryData.CompleteData)
    return (
      <div className={style.containor}>
        <Line
          pointBackgroundColorr='#777'
          data={state}
          height={180}
          options={{
            title:{
              display:true,
              text:'COVID-19',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  
}