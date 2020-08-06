import React,{useEffect,useState} from "react"
import {NativeSelect,FormControl} from '@material-ui/core';
import {fetchCountries} from './../../API';
import styles from "./CountryPicker.module.css";
const CountryPicker=({handleCountryChange})=>{
 const [countries,setCountries] = useState([]);
useEffect(()=>{
 const fetchData = async ()=>{
  const data = await fetchCountries();
  setCountries(data);
 }
 fetchData();
},[setCountries])
 return (
  <FormControl className={styles.formControl}>
   <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
    <option value="">
      Global
    </option>
    {
     countries.map((country)=><option key={country} value={country}>{country} </option>)
    }
   </NativeSelect>
   </FormControl>

 );
}

export default CountryPicker;