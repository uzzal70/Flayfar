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
        <Alert variant="outlined" severity="warning">
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
            <Grid item xs>
              <h5>44 flight results, 6 Unique Airlines</h5>
            </Grid>
            <Grid item xs={8}>
              <div>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Short by &nbsp;
                  <Button variant="contained">
                    <PaidIcon /> Invoice Amount
                  </Button>
                  &nbsp;
                  <Button variant="contained">
                    <AirplanemodeActiveIcon /> Select
                  </Button>
                  &nbsp;
                  <Button variant="contained">
                    <StorageIcon /> Cheapest first
                  </Button>
                </Typography>
              </div>
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
              <Button size="small">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: '100%', flexShrink: 0 }}>
                    view Fear
                  </Typography>
                  <Typography sx={{ width: '100%', flexShrink: 0 }}>
                    view Fear
                  </Typography>
                </AccordionSummary>
              </Button>
              <AccordionDetails>
                <Typography>
                  <ViewFear />
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
      {/* ------------------ */}

      {/* <Grid>
        <RightSideCard />
      </Grid> */}

      {/* --------------------- */}
      {/* 
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Personal data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails> */}
      {/* </Accordion> */}
    </div>
  );
};

export default RightSide;
