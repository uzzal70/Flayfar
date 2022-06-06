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
import './ShortBy.css';

const ShortBy = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box>
      <div style={{ marginTop: '20px' }}>
        <Alert variant="outlined" severity="warning">
          Important: This destination may have COVID 19 travel restrictions in
          place, including specific restrictions for lodging. Check any
          national, local, and health advisories for this destination before you
          book
        </Alert>
        <Box style={{ margin: '30px 0px' }} sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={4}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.3rem',
                  },
                }}
              >
                44 flight results, 6 Unique Airlines
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              lg={2}
              sx={{
                '@media (min-width: 300px) and (max-width: 1025px)': {
                  display: 'none',
                },
              }}
            ></Grid>
            <Grid item xs={12} sm={12} md={9} lg={6}>
              <Grid container justifyContent="space-between">
                <Typography
                  color="text.secondary"
                  sx={{
                    '@media (min-width: 320px) and (max-width: 480px)': {
                      fontWeight: 'bold',
                      // width: '50%',
                    },
                  }}
                >
                  Short by
                </Typography>
                <div>
                  <Button variant="contained" className="ShortbyButton">
                    <PaidIcon /> Invoice Amount
                  </Button>
                </div>
                <div>
                  <Button className="ShortbyButton" variant="contained">
                    <AirplanemodeActiveIcon /> Select
                  </Button>
                </div>
                <div>
                  <Button
                    className="ShortbyButton"
                    variant="contained"
                    sx={{
                      '@media (min-width: 300px) and (max-width: 480px)': {
                        ml: '5.3rem',
                        mt: '2px',
                        width: '17.8rem',
                      },
                    }}
                  >
                    <StorageIcon /> Cheapest first
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Box>
  );
};

export default ShortBy;
