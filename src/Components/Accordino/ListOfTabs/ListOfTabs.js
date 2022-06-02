import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import ListOfCard from '../RightSide/ListOfCard';
const ListOfTabs = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1>List of Tabs</h1>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab value="1" label="Flight Details" />
              <Tab value="2" label="Free Summery" />
              <Tab value="3" label="Discount & Gross" />
              <Tab value="4" label="Baggage" />
              <Tab value="5" label="Cancelation" />
              <Tab value="6" label="Date Change" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ListOfCard />
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item One</TabPanel>
          <TabPanel value="5">Item Two</TabPanel>
          <TabPanel value="6">Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default ListOfTabs;
