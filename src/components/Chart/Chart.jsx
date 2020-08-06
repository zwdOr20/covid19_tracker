import React,{Component} from "react"
import {fetchDailyData} from '../../API';
import styles from './Chart.module.css';
import {Line, Bar} from 'react-chartjs-2';
class Chart extends Component{
 state = {
  dailyData:[]
 }
 async componentDidMount(){
  const data = await fetchDailyData();
  this.setState({
   dailyData : data
  });
  console.log(this.state);
 }
 render(){
  console.log(this.state.dailyData.length);
  const lineChart = (
     this.state.dailyData.length ?
        <div>
         hello
        <Line
        data ={{
         labels: this.state.dailyData.map(({date})=> date ),
         datasets : [{
             data : this.state.dailyData.map(({confirmed})=>confirmed),
             label :'infected',
             borderColor : '#3333ff',
             fill: true
            }, {
            data : this.state.dailyData.map(({deaths})=>deaths),
            label :'infected',
            borderColor : 'red',
            backgroundColor : 'rgba(255,0,0,0.5)',
            fill: true
            }]
           }}
        />
        </div>
        : null
       );
  return (
   <div className={styles.container}>
     {lineChart} 
   </div>
  );
 }
}
// const Chart = () => {
//   const [dailyData,setDailyData] = useState({});
//   useEffect(()=>{
//    const fetchApi = async ( )=> { 
//       setDailyData(await fetchDailyData());
//     }
//   fetchApi();
//  });
//  const lineChart = (
//   !dailyData ?
//   <line
//   data ={{
//    labels: "",
//    datasets : [{},{}]
//   }}
//   />
//   : null
//  );
//   return (
//    <div>
//     <h1>Chart</h1>
//    </div>
//   );
 
// }
export default Chart;