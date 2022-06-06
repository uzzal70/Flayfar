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
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Paper } from '@mui/material';
// import FlightDetails from './FlightDetails';
import ViewFear from './ViewFear';
import Scrollbars from './Scrollbars';

const TravelCard = () => {
  const [flightDetails, setFlightDetails] = useState(false);
  const [viewFear, setViewFear] = useState(false);
  // const viewf = ' <ArrowDropUpIcon/>';
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
              <h4>Turkish Airlines</h4>
              <h5>TK713 | TK3</h5>
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
              <h4>DAC, Dhaka</h4>
              <h5>2017-05-24 10:30am </h5>
            </Typography>
          </Grid>
          <Grid className="tcard" item lg={2} md={4} sm={6} xs={6}>
            <Typography
              sx={{
                fontSize: '14px',
                ml: '20%',
                p: '0',
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '1rem',
                  // mb: '2',
                  ml: '9%',
                  position: 'absolute',
                  marginTop: '1px',
                },
              }}
            >
              <h5>34 h 45m</h5>
            </Typography>
            <Grid container sx={{ flexGrow: 1 }}>
              <FlightIcon
                style={{
                  transform: 'rotate(90deg)',
                }}
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.5rem',
                    marginTop: '15px',
                  },
                }}
              />
              <Box
                className="view-fareLine"
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    marginTop: '1.5rem',
                  },
                }}
              ></Box>
            </Grid>
            <Typography
              sx={{
                fontSize: '14px',
                ml: '15%',
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '1rem',
                  ml: '9%',
                  pb: '5px',
                  position: 'absolute',
                  marginTop: '-12px',
                },
              }}
            >
              <h5>2 Stop Via DEL</h5>
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
              <h4>JKF, New York</h4>
              <h5>2017-05-24 10:30am</h5>
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
              <strong>
                <del>BDT 22222</del>
              </strong>
              <br />
              <strong>BDT 11111</strong>
            </Box>
          </Grid>
          <Grid className="tcard " item lg={1} md={4} sm={6} xs={6}>
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
                  mt: '20px',
                  ml: '10px',
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
          style={{ marginTop: '2px' }}
          spacing={1}
        >
          <Grid
            lg={6}
            md={6}
            sm={5}
            xs={12}
            sx={{
              m: '0px',
              p: '0px',
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
            sm={7}
            xs={12}
            item
            sx={{
              display: 'flex',
              justifyContent: 'right',
              '@media (min-width: 300px) and (max-width: 480px)': {
                fontSize: '1.5rem',
                // mt: '0.5rem',
                display: 'flex',
                justifyContent: 'center',
              },
            }}
          >
            <Box>
              <MonetizationOnIcon
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.5rem',
                    mt: '0.5rem',
                  },
                }}
                className="top-margin"
                style={{ color: 'blue' }}
              />
            </Box>
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
            <Box>
              <Button
                onClick={() => setFlightDetails(!flightDetails)}
                sx={{
                  fontWeight: 'bold',
                  '@media (min-width: 320px) and (max-width: 480px)': {
                    fontSize: '1rem',
                  },
                }}
              >
                Flight Details <ExpandMoreIcon />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {viewFear && <ViewFear />}
      {flightDetails && <Scrollbars />}
      {/* <Scrollbars></Scrollbars> */}
    </Paper>
  );
};

export default TravelCard;
