import { Box, Grid } from '@mui/material';
import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const LeftAndRightSide = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <LeftSide></LeftSide>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9}>
          <RightSide></RightSide>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LeftAndRightSide;
