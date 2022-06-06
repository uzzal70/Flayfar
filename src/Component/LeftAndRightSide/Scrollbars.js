import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import TabCard from './TabCard';
const Scrollbars = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        '@media (min-width: 320px) and (max-width: 480px)': {
          width: '100%',
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
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
            {/* <Tab label="Item Four" value="4" />
            <Tab label="Item Five" value="5" /> */}
            {/* <Tab label="Item Three" value="4" />
            <Tab label="Item Three" value="5" /> */}
            {/* <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" /> */}
          </TabList>

          {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}

          <TabPanel value="1">
            <TabCard />
          </TabPanel>
          <TabPanel value="2">
            <TabCard />
          </TabPanel>
          <TabPanel value="3">
            <TabCard />
          </TabPanel>
          <TabPanel value="4">
            <TabCard />
          </TabPanel>
          <TabPanel value="5">
            <TabCard />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};

export default Scrollbars;
