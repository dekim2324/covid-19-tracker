import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed) return 'Loading...';

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected (감염)</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2} separator=',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID19</Typography>
                    </CardContent>
                    
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered (회복)</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2} separator=',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID19</Typography>
                    </CardContent>
                    
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths (사망)</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2} separator=',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID19</Typography>
                    </CardContent>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;