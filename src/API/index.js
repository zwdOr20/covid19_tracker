import axios from "axios";

const url = "https://covid19.mathdro.id/api";
export const fetchData = async (country) =>{
 let modifiedurl =  url;
 if(country)
 {
     modifiedurl = url+'/countries/'+country;
 }
 try{
   const {data : {confirmed,recovered,deaths,lastUpdate} } = await axios.get(modifiedurl);
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
export const fetchCountries = async ()=>{
 try{
  const urlmod =  url+'/countries';
  const {data : {countries}} = await axios.get(urlmod);
  const modifiedData = countries.map(country=>country.name)
  return modifiedData;
 }catch(error){
  console.log(error);
 }
 }
