import React, { useState } from 'react';
import { Grid, Container, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SearchBox from '../components/SearchBox';
// import TeamButtons from './Teambuttons';
import TeamButtons from './TeamButtons';
import TeamSelect from './TeamSelect';

import teamsData from '../_data/teamsDivAbbr.json';

const useStyle = makeStyles({
  container: {
    margin: '2rem 0 0 0',
  },
});

const Bar = ({ onSearchChange, onSearchClick, onTeamChange, team }) => {
  const classes = useStyle();

  const min1800 = useMediaQuery('(min-width:1800px)');
  const min1200 = useMediaQuery('(min-width:1200px)');
  const min900 = useMediaQuery('(min-width:900px)');
  const min600 = useMediaQuery('(min-width:600px)');

  return min1200 ? (
    <Grid container className={classes.container}>
      <Grid item xs={4}>
        <Container>
          <TeamButtons
            onTeamChange={onTeamChange}
            t1={Object.values(teamsData[3])[0]}
            t2={Object.values(teamsData[4])[0]}
            t3={Object.values(teamsData[5])[0]}
            min1800={min1800}
          />
        </Container>
      </Grid>

      <Grid item xs={4}>
        <Container>
          <h1 className='f1 ma3'>{team}</h1>
          <SearchBox
            onSearchChange={onSearchChange}
            onSearchClick={onSearchClick}
          />
        </Container>
      </Grid>

      <Grid item xs={4}>
        <Container>
          <TeamButtons
            onTeamChange={onTeamChange}
            t1={Object.values(teamsData[0])[0]}
            t2={Object.values(teamsData[1])[0]}
            t3={Object.values(teamsData[2])[0]}
            min1800={min1800}
          />
        </Container>
      </Grid>
    </Grid>
  ) : min600 ? (
    <Grid container className={classes.container}>
      <Grid item xs={3}>
        <Container>
          <TeamSelect
            onTeamChange={onTeamChange}
            teamsData={teamsData}
            min900={min900}
          />
        </Container>
      </Grid>

      <Grid item xs={9}>
        <Container>
          <h1 className='f1 ma3'>{team}</h1>
          <SearchBox
            onSearchChange={onSearchChange}
            onSearchClick={onSearchClick}
            min600={min600}
          />
        </Container>
      </Grid>
    </Grid>
  ) : (
    <Grid container className={classes.container}>
      <Grid item xs={4}>
        <Container>
          <TeamSelect onTeamChange={onTeamChange} teamsData={teamsData} />
        </Container>
      </Grid>

      <Grid item xs={8}>
        <Container>
          <h1 className='f1 ma3'>{team}</h1>
          <SearchBox
            onSearchChange={onSearchChange}
            onSearchClick={onSearchClick}
          />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Bar;
