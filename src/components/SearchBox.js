import React from 'react';
import { Button, Grid } from '@material-ui/core';

const SearchBox = ({ onSearchChange, onSearchClick, min600 }) => {
  return min600 ? (
    <div className='pa2 ml3'>
      <input
        style={{ width: '80%' }}
        className='pa3 ba'
        type='search'
        placeholder='Player name'
        onChange={onSearchChange}
        onKeyPress={(e) => (e.key === 'Enter' ? onSearchClick() : null)}
      />
      &nbsp;&nbsp;
      <Button
        style={{ marginTop: '.5rem' }}
        variant='contained'
        justify='space-between'
        onClick={onSearchClick}
      >
        search
      </Button>
    </div>
  ) : (
    <div className='pa2 ml3'>
      <Grid container>
        <Grid item xs={8}>
          <input
            style={{ width: '80%' }}
            className='pa3 ba'
            type='search'
            placeholder='Player'
            onChange={onSearchChange}
            onKeyPress={(e) => (e.key === 'Enter' ? onSearchClick() : null)}
          />
          &nbsp;&nbsp;
        </Grid>
        <Grid item xs={4}>
          <Button
            style={{ width: '80%', marginTop: '.8rem' }}
            variant='contained'
            justify='space-between'
            onClick={onSearchClick}
          >
            search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchBox;
