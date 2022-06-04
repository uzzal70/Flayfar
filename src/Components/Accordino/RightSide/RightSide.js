import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import StorageIcon from '@mui/icons-material/Storage';
import PaidIcon from '@mui/icons-material/Paid';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RightSideCard from './RightSideCard';
import ViewFear from './ViewFear';
const RightSide = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <div style={{ marginTop: '20px' }}>
        <Alert
          variant="outlined"
          severity="warning"
          sx={{
            '@media (min-width: 300px) and (max-width: 480px)': {
              fontSize: '1.5rem',
            },
          }}
        >
          Important: This destination may have COVID 19 travel restrictions in
          place, including specific restrictions for lodging. Check any
          national, local, and health advisories for this destination before you
          book
        </Alert>
        <Box
          style={{ margin: '30px 0px' }}
          className="box-margin"
          sx={{ flexGrow: 1 }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4}>
              <Typography
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '2rem',
                  },
                }}
              >
                44 flight results, 6 Unique Airlines
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Grid>
                <Typography sx={{ fontSize: 16 }} color="text.secondary">
                  Short by &nbsp;
                  <Button variant="contained" sx={{ fontSize: 18 }}>
                    <PaidIcon /> Invoice Amount
                  </Button>
                  &nbsp;
                  <Button variant="contained" sx={{ fontSize: 18 }}>
                    <AirplanemodeActiveIcon /> Select
                  </Button>
                  &nbsp;
                  <Button variant="contained" sx={{ fontSize: 18 }}>
                    <StorageIcon /> Cheapest first
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
      {/* ------------------ */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid spacing={2}>
          <Grid item xs={8}>
            <RightSideCard />
          </Grid>
          <Grid item>
            <Accordion
              className="view-fear"
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <AccordionDetails></AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RightSide;
