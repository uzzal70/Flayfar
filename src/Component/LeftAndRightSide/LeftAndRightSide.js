import { Box, Grid } from '@mui/material';
import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const LeftAndRightSide = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <LeftSide></LeftSide>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <RightSide></RightSide>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LeftAndRightSide;
