import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { Button, FormControlLabel, Stack } from '@mui/material';
// import RengeSlider from './RengeSlider';
import Paper from '@mui/material/Paper';

const LeftSide = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [value, setValue] = useState([20, 37]);
  const slideChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Popular Filter
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Grid item style={{ margin: 'auto' }} xs={12}>
              <FormControlLabel
                style={{ color: 'red' }}
                control={<Checkbox defaultChecked />}
              />
              Refundable Fares
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Duration (h)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Grid item style={{ margin: 'auto' }} xs={12}>
              <Box sx={{ width: '100%' }}>
                <Typography sx={{ width: '100%', flexShrink: 0 }}>
                  Outbound (DAC - JFK)
                </Typography>
                <Slider
                  value={value}
                  onChange={slideChange}
                  valueLabelDisplay="auto"
                />
              </Box>
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Duration (h)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Grid item style={{ margin: 'auto' }} xs={12}>
              <Box sx={{ width: '100%' }}>
                <Typography sx={{ width: '100%', flexShrink: 0 }}>
                  Outbound (DAC - JFK)
                </Typography>
                <Slider
                  value={value}
                  onChange={slideChange}
                  valueLabelDisplay="auto"
                />
              </Box>
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Duration (h)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Grid item style={{ margin: 'auto' }} xs={12}>
              <Box sx={{ width: '100%' }}>
                <Typography sx={{ width: '100%', flexShrink: 0 }}>
                  Outbound (DAC - JFK)
                </Typography>
                <Slider
                  value={value}
                  onChange={slideChange}
                  valueLabelDisplay="auto"
                />
              </Box>
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Grid justifyContent="center" alignItems="center">
        <Button variant="contained">Filter Now</Button>
      </Grid>
    </Paper>
  );
};

export default LeftSide;
