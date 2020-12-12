import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     flexGrow: 1,
  //   },
  button: {
    // '&:hover': { color: 'red' },
    '&:focus': {
      color: '#000 !important',
      backgroundColor: '#bebebe !important',
      border: '.5px ridge 8c8989',
    },
    color: '#fff',
  },
}));

const TeamButtons = ({ t1, t2, t3, onTeamChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={1} />
          {t1.map((e) => (
            <Grid item xs={2} key={e[0]}>
              <Button
                className={classes.button}
                variant='contained'
                style={{ backgroundColor: e[2] }}
                onClick={() => onTeamChange(e[0], e[1])}
              >
                <b>{e[0]}</b>
              </Button>
            </Grid>
          ))}
          <Grid item xs={1} />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={1} />

          {t2.map((e) => (
            <Grid item xs={2} key={e[0]}>
              <Button
                className={classes.button}
                variant='contained'
                style={{ backgroundColor: e[2] }}
                onClick={() => onTeamChange(e[0], e[1])}
              >
                <b>{e[0]}</b>
              </Button>
            </Grid>
          ))}
          <Grid item xs={1} />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={1} />
          {t3.map((e) => (
            <Grid item xs={2} key={e[0]}>
              <Button
                className={classes.button}
                variant='contained'
                style={{ backgroundColor: e[2] }}
                onClick={() => onTeamChange(e[0], e[1])}
              >
                <b>{e[0]}</b>
              </Button>
            </Grid>
          ))}
          <Grid item xs={1} />
        </Grid>
      </Grid>
    </div>
  );
};

export default TeamButtons;
