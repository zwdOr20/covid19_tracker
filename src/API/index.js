import axios from "axios";

const url = "https://covid19.mathdro.id/api";
export const fetchData = async () =>{
 try{
   const {data : {confirmed,recovered,deaths,lastUpdate} } = await axios.get(url);
   console.log(confirmed);
   return {confirmed,recovered,deaths,lastUpdate};
 }
 catch(error){
  console.log(error);
 }
}
export const fetchDailyData = async ()=>{
try{
 const urlmod =  url+'/daily';
 const {data} = await axios.get(urlmod);
 const modifiedData =  data.map(raw=> ({
  confirmed : raw.confirmed.total,
  deaths: raw.deaths.total,
  date :  raw.reportDate
 }))
 return modifiedData;

}catch(error){
 console.log(error);
}
}
