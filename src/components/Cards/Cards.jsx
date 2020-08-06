import React from "react";
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards =  ({data: {confirmed,recovred,death,lastUpdate}})=>{
if(!confirmed)
{
 return "loading ...";
}
 return (
  <div className={styles.container}>
    <Grid container spacing ={3} justify="center">
      <Grid item Component={Card} xs={12} md={12} className={cx(styles.card,styles.infected)}>
        <CardContent >
          <Typography color="textSecondary" gutterBottom>Infected</Typography>
           <Typography variant="h5">
            <CountUp
            end={confirmed.value}
            start={0}
            duration={2.5}
            seperator=","
            />
           </Typography>
           <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
           <Typography variant="body"> Number of active cases of Covid-19</Typography>
        </CardContent>
      </Grid>
    </Grid>
  </div>
 );
}

export default Cards;