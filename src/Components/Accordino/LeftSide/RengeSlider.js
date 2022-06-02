import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const RengeSlider = () => {
  const [value, setValue] = useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Typography sx={{ width: '100%', flexShrink: 0 }}>
          Outbound (DAC - JFK)
        </Typography>
        <Slider
          // getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
        />
      </Box>
    </div>
  );
};

export default RengeSlider;
