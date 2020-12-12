import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const TeamSelect = ({ teamsData, onTeamChange, min900 }) => {
  let teams = [];

  Object.values(
    teamsData
      .map((e0) => Object.values(e0).map((e1) => e1))
      .map((e2) => e2[0].map((e3) => e3))
      .map((e) => {
        teams = teams.concat(e);
      })
  );

  const [teamColor, setTeamColor] = useState('#fff');

  return (
    <FormControl
      variant='filled'
      // className={classes.formControl}
    >
      {/* <h1>{teams}</h1> */}
      <InputLabel htmlFor='filled-age-native-simple'>Team</InputLabel>
      <Select
        native
        // value='hou'
        style={{ backgroundColor: teamColor, color: '#fff' }}
        onChange={(e) => {
          onTeamChange(
            e.target.value.split(',')[0],
            e.target.value.split(',')[1]
          );
          setTeamColor(e.target.value.split(',')[2]);
        }}
        inputProps={{
          name: 'team',
          id: 'filled-age-native-simple',
        }}
      >
        <option aria-label='None' value='' />
        {teams.map((t) => (
          <option value={t} key={t[0]} style={{ color: t[2] }}>
            {t[min900 ? 1 : 0]}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default TeamSelect;
