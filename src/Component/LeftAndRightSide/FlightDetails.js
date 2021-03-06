import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import TabCard from './TabCard';

const FlightDetails = () => {
  const theme = useTheme();
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };
  return (
    <Box
      sx={{
        '@media (min-width: 320px) and (max-width: 480px)': {
          color: 'red',
          width: '320px',
        },
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab value="1" label="Flight Details" />
            <Tab value="2" label="Free Summery " />
            <Tab value="3" label="Free Summery " />
            {/* <Tab value="3" label="Discount & Gross" /> */}
            {/* <Tab value="3" label="Baggage" /> */}
            {/* <Tab value="5" label="Cancelation" />
            <Tab value="6" label="Date Change" /> */}
          </TabList>

          <TabPanel value="1">
            <TabCard />
          </TabPanel>
          <TabPanel value="2">
            <TabCard />
          </TabPanel>
          <TabPanel value="3">
            <TabCard />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};

export default FlightDetails;
