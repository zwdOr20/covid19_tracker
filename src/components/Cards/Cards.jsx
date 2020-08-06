import React from "react";
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards =  ({data: {confirmed,recovered,deaths,lastUpdate}})=>{
if(!confirmed)
{
 return "loading ...";
}
 return (
  <div className={styles.container}>
    <Grid container spacing ={3} justify="center">
      <Grid item Component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
        <CardContent >
          <Typography color="textSecondary" gutterBottom>Infected</Typography>
           <Typography variant="h5">
            <CountUp
            end={confirmed.value}
            start={0}
            duration={2.5}
            separator=","
            />
           </Typography>
           <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
           <Typography variant="body"> Number of active cases of Covid-19</Typography>
        </CardContent>
      </Grid>

      <Grid item Component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
        <CardContent >
          <Typography color="textSecondary" gutterBottom>Recovered</Typography>
           <Typography variant="h5">
            <CountUp
            end={recovered.value}
            start={0}
            duration={2.5}
            separator=","
            />
           </Typography>
           <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
           <Typography variant="body"> Number of recovered cases of Covid-19</Typography>
        </CardContent>
      </Grid>

      <Grid item Component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
        <CardContent >
          <Typography color="textSecondary" gutterBottom>Deaths</Typography>
           <Typography variant="h5">
            <CountUp
            end={deaths.value}
            start={0}
            duration={2}
            separator=","
            />
           </Typography>
           <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
           <Typography variant="body"> Number of deaths caused by Covid-19</Typography>
        </CardContent>
      </Grid>
    </Grid>
  </div>
 );
}

export default Cards;