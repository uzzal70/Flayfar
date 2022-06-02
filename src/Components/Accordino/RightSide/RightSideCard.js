import React from 'react';
import Box from '@mui/material/Box';
import './RightSide.css';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
// import { TextField } from '@mui/material';
import CellWifiIcon from '@mui/icons-material/CellWifi';
import MonitorIcon from '@mui/icons-material/Monitor';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import Tooltip from '@mui/material/Tooltip';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import FlightIcon from '@mui/icons-material/Flight';
import { display } from '@mui/system';
const RightSideCard = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item lg={2.5} xm={12}>
            <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
              <FormControlLabel control={<Checkbox defaultChecked />} />
              <BrightnessHighIcon style={{ marginTop: '10px', color: 'red' }} />
              <div>
                <h3>Turkish Airlines</h3>
                <p>TK713 | TK3</p>
              </div>
            </FormGroup>
          </Grid>
          <Grid item lg={2} sm={6}>
            <div>
              <h3>DAC, Dhaka</h3>
              <p>2017-05-24 10:30am</p>
            </div>
          </Grid>
          <Grid item lg={2} sm={3}>
            <div sx={{ display: 'flex' }}>
              <FlightIcon
                style={{
                  transform: 'rotate(90deg)',
                }}
              />
              <p className="view-fareLine"></p>
              {/* <div className="view-fareLine"></div> */}
            </div>
          </Grid>
          <Grid item lg={2} sm={6}>
            <div>
              <h3>JKF, New York</h3>
              <p>2017-05-24 10:30am</p>
            </div>
          </Grid>
          <Grid item lg={2} sm={3}>
            <div>
              <del>BDT 22222</del>
              <br />
              <strong>BDT 11111</strong>
            </div>
          </Grid>
          <Grid item lg={1} sm={3}>
            <Button variant="outlined" sx={{ width: '100px', padding: '0px' }}>
              View Fear
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          className="button-grid"
          style={{ marginTop: '20px' }}
          spacing={1}
        >
          <Grid item>
            <Button>Publish</Button>
            <Tooltip title="Mobile Wifi" arrow>
              <CellWifiIcon />
            </Tooltip>
            &nbsp;
            <Tooltip title="Monitor" arrow>
              <MonitorIcon />
            </Tooltip>
            &nbsp;
            <Tooltip title="Settings" arrow>
              <BrightnessHighIcon />
            </Tooltip>
            &nbsp;
            <Tooltip title="Settings" arrow>
              <CurrencyExchangeSharpIcon />
            </Tooltip>
          </Grid>
          <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <MonetizationOnIcon
                className="top-margin"
                style={{ color: 'blue' }}
              />
            </div>
            <p style={{ paddingTop: '6px' }}>Refundable &nbsp;</p>
            <Button>Flight Details</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
// Accordino Function
export default RightSideCard;
