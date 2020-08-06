import React,{Component} from "react"
import {Cards,Chart,CountryPicker} from "./components";
import styles from "./App.module.css"
import {fetchData} from "./API";
import coronaImage from './images/image.png';
import {Typography} from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';
class App extends Component{
  
state={
      data:{},
      country:''
    }
countryPickerHandler = async (country) =>{
        
        const  fetchedData = await fetchData(country);
        this.setState({data:fetchedData, country:country});
    } 
 async componentDidMount(){
   const fetchedData = await fetchData();
   this.setState({
     data : fetchedData
   });
 }

render(){
  return (
   <div className={styles.container}>
     <img
     className={styles.image}
     src={coronaImage}
     alt='Covid-19'
     />
      <Cards data={this.state.data}/>
      <CountryPicker  handleCountryChange={this.countryPickerHandler}/>
      <Chart data={this.state.data} country={this.state.country}/>
      <span className={styles.span}>
        <CopyrightIcon/>
        <Typography color="textSecondary" > Created by Zwd20 All right reserved</Typography>
      </span>

   </div>
  );
 }
}
export default App;