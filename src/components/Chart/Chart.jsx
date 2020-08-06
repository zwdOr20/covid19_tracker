import React,{useState,useEffect} from "react"
import {fetchDailyData} from '../../API';
import styles from './Chart.module.css';
import {Line, Bar} from 'react-chartjs-2';
const  Chart = (props) => {
   const {data:{confirmed,deaths,recovered},country}= props;
   const [dailyGlobalData,setGlobalDailyDta] = useState([]);
   
 useEffect(()=>{
   const setFetchedData = async ()=> setGlobalDailyDta(await fetchDailyData());
   setFetchedData()
 },[]);
  
const lineChart = (
     dailyGlobalData.length>0 ?
        <Line
        data ={{
         labels: dailyGlobalData.map(({date})=> date ),
         datasets : [{
            data : dailyGlobalData.map(({confirmed})=>confirmed),
             label :'infected',
             borderColor : '#3333ff',
             fill: true
            }, {
            data : dailyGlobalData.map(({deaths})=>deaths),
            label :'deaths',
            borderColor : 'red',
            backgroundColor : 'rgba(255,0,0,0.5)',
            fill: true
            }]
           }}
        />
        : null
       );

const barChar = (
      country?
      (
         <Bar
         data = {{  
            labels : ['Infected','Recovered','Deaths'],
            datasets:[{
               label : 'people',
               backgroundColor : ['rgb(0,0,255, 0.5)','rgb(0,255,0, 0.5)','rgba(255, 0, 0, 0.5)'],
               data : [confirmed.value,recovered.value,deaths.value],
            }]
         }}
         options={{
            legend:{display:false},
            title:{display:true,text :'current state in '+country},
         }}
         />
      )
      :null
   );

return (<div className={styles.container}>
            {country? barChar:lineChart}
      </div>);
}
export default Chart;