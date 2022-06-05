import React, { useState } from 'react';
import Box from '@mui/material/Box';
import './TravelCard.css';
import Grid from '@mui/material/Grid';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ViewFear from './ViewFear';
import { Card, Paper } from '@mui/material';
import FlightDetails from './FlightDetails';
import ViewFear from './ViewFear';

const TravelCard = () => {
  const [flightDetails, setFlightDetails] = useState(false);
  const [viewFear, setViewFear] = useState(false);
  return (
    <Paper elevation={10}>
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
        }}
      >
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          sx={{
            '@media (min-width: 481px) ': {
              display: 'none',
            },
          }}
        />
        <Grid container spacing={1}>
          <Grid
            className="tcard"
            style={{ display: 'flex', flexDirection: 'row' }}
            lg={2.5}
            md={4}
            sm={6}
            xs={6}
            sx={{
              '@media (min-width: 300px) and (max-width: 480px)': {
                fontSize: '1.5rem',
                pl: '.5rem',
                // borderBottom: '2px solid black',
              },
            }}
          >
            {/* <FormGroup style={{ display: 'flex', flexDirection: 'row' }}> */}
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              sx={{
                '@media (min-width: 300px) and (max-width: 480px)': {
                  display: 'none',
                },
              }}
            />
            {/* <BrightnessHighIcon style={{ marginTop: '10px', color: 'red' }} /> */}
            <div style={{ marginTop: '10px' }}>
              <h6>Turkish Airlines</h6>
              <h6>TK713 | TK3</h6>
            </div>
            {/* </FormGroup> */}
          </Grid>
          <Grid className="tcard" item lg={2} md={4} sm={6} xs={6}>
            <Typography
              sx={{
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '1.5rem',
                  // borderBottom: '2px solid black',
                },
              }}
            >
              <h6>DAC, Dhaka</h6>
              <h6>2017-05-24 10:30am </h6>
            </Typography>
          </Grid>
          <Grid className="tcard" item lg={2} md={4} sm={6} xs={6}>
            <Typography
              sx={{
                fontSize: '10px',
                ml: '30%',
                p: '0',
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '1rem',
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
                  fontSize: '1rem',
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
            className="tcard"
            item
            lg={2}
            md={4}
            sm={6}
            xs={6}
            sx={{
              '@media (min-width: 300px) and (max-width: 480px)': {
                fontSize: '1.5rem',
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
            className="tcard"
            item
            lg={2}
            md={4}
            sm={6}
            xs={6}
            sx={{
              '@media (min-width: 300px) and (max-width: 480px)': {
                fontSize: '1.5rem',
              },
            }}
          >
            <Box>
              <del>BDT 22222</del>
              <br />
              <strong>BDT 11111</strong>
            </Box>
          </Grid>
          <Grid className="tcard" item lg={1} md={4} sm={6} xs={6}>
            <Button
              onClick={() => setViewFear(!viewFear)}
              variant="outlined"
              // sx={{ width: '100px', padding: '0px' }}
              sx={{
                width: '100px',
                padding: ' 0px 1px',
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '1rem',
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
                  fontSize: '1rem',
                },
              }}
            >
              Publish
            </Button>
            <Tooltip title="Mobile Wifi" arrow>
              <CellWifiIcon className="iconbar" />
            </Tooltip>
            &nbsp;
            <Tooltip title="Monitor" arrow>
              <MonitorIcon className="iconbar" />
            </Tooltip>
            &nbsp;
            <Tooltip title="Settings" arrow>
              <BrightnessHighIcon className="iconbar" />
            </Tooltip>
            &nbsp;
            <Tooltip title="Settings" arrow>
              <CurrencyExchangeSharpIcon className="iconbar" />
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
                    fontSize: '1.5rem',
                    mt: '.8rem',
                  },
                }}
                className="top-margin"
                style={{ color: 'blue' }}
              />
            </div>
            <Typography
              sx={{
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '1.2rem',
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
                  fontWeight: 'bold',
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1rem',
                  },
                }}
              >
                Flight Details <ExpandMoreIcon />
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
      {viewFear && <ViewFear />}
      {flightDetails && <FlightDetails />}
    </Paper>
  );
};

export default TravelCard;
