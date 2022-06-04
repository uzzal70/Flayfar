import React, { useState } from 'react';
import Box from '@mui/material/Box';
import './RightSide.css';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import CellWifiIcon from '@mui/icons-material/CellWifi';
import MonitorIcon from '@mui/icons-material/Monitor';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import Tooltip from '@mui/material/Tooltip';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import FlightIcon from '@mui/icons-material/Flight';
import ListOfTabs from '../ListOfTabs/ListOfTabs';
import ViewFear from './ViewFear';
import { Card } from '@mui/material';
// import { display } from "@mui/system";
const RightSideCard = () => {
  const [flightDetails, setFlightDetails] = useState(false);
  const [viewFear, setViewFear] = useState(false);
  return (
    <Card>
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
        }}
      >
        <Grid container spacing={1}>
          <Grid
            style={{ display: 'flex', flexDirection: 'row' }}
            lg={2.5}
            md={4}
            sm={6}
            xs={6}
            sx={{
              '@media (min-width: 300px) and (max-width: 480px)': {
                fontSize: '2.5rem',
                // borderBottom: '2px solid black',
              },
            }}
          >
            {/* <FormGroup style={{ display: 'flex', flexDirection: 'row' }}> */}
            <FormControlLabel control={<Checkbox defaultChecked />} />
            <BrightnessHighIcon style={{ marginTop: '10px', color: 'red' }} />
            <div style={{ marginTop: '10px' }}>
              <h6>Turkish Airlines</h6>
              <h6>TK713 | TK3</h6>
            </div>
            {/* </FormGroup> */}
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={6}>
            <Typography
              sx={{
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '2.5rem',
                  // borderBottom: '2px solid black',
                },
              }}
            >
              <h6>DAC, Dhaka</h6>
              <h6>2017-05-24 10:30am </h6>
            </Typography>
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={6}>
            <Typography
              sx={{
                fontSize: '10px',
                ml: '30%',
                p: '0',
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '1.5rem',
                  mb: '2',
                },
              }}
            >
              34 h 45m
            </Typography>
            <Grid container sx={{ flexGrow: 1 }}>
              <FlightIcon
                style={{
                  transform: 'rotate(90deg)',
                }}
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '2rem',
                  },
                }}
              />
              <div className="view-fareLine"></div>
            </Grid>
            <Typography
              sx={{
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '1.5rem',
                },
                fontSize: '10px',
                ml: '20%',
                p: '0',
              }}
            >
              2 Stop Via DEL
            </Typography>
          </Grid>
          <Grid
            item
            lg={2}
            md={4}
            sm={6}
            xs={6}
            sx={{
              '@media (min-width: 300px) and (max-width: 480px)': {
                fontSize: '2.5rem',
                // borderBottom: '2px solid black',
              },
            }}
          >
            <div>
              <h6>JKF, New York</h6>
              <h6>2017-05-24 10:30am</h6>
            </div>
          </Grid>
          <Grid
            item
            lg={2}
            md={4}
            sm={6}
            xs={6}
            sx={{
              '@media (min-width: 300px) and (max-width: 480px)': {
                fontSize: '2rem',
              },
            }}
          >
            <div>
              <del>BDT 22222</del>
              <br />
              <strong>BDT 11111</strong>
            </div>
          </Grid>
          <Grid item lg={1} md={4} sm={6} xs={6}>
            <Button
              onClick={() => setViewFear(!viewFear)}
              variant="outlined"
              // sx={{ width: '100px', padding: '0px' }}
              sx={{
                width: '100px',
                padding: ' 0px 1px',
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '2rem',
                  width: '80%',
                },
              }}
            >
              {!viewFear ? 'View Fear' : 'view Less'}
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          className="button-grid"
          style={{ marginTop: '20px' }}
          spacing={1}
        >
          <Grid
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{
              '@media (min-width: 300px) and (max-width: 480px)': {
                fontSize: '2rem',
                ml: '20%',
              },
            }}
            item
            className="tooltipIconsSize"
          >
            <Button
              sx={{
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '2rem',
                },
              }}
            >
              Publish
            </Button>
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
          <Grid
            lg={6}
            md={6}
            sm={12}
            xs={12}
            item
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div>
              <MonetizationOnIcon
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '3rem',
                  },
                }}
                className="top-margin"
                style={{ color: 'blue' }}
              />
            </div>
            <Typography
              sx={{
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '2rem',
                },
              }}
              style={{ paddingTop: '6px' }}
            >
              Refundable
            </Typography>
            <div>
              <Button
                onClick={() => setFlightDetails(!flightDetails)}
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.5rem',
                  },
                }}
              >
                Flight Details
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
      {viewFear && <ViewFear />}
      {flightDetails && <ListOfTabs />}
    </Card>
  );
};
// Accordino Function
export default RightSideCard;
