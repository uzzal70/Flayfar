import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import FlightIcon from '@mui/icons-material/Flight';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import LuggageIcon from '@mui/icons-material/Luggage';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AirlineSeatLegroomNormalIcon from '@mui/icons-material/AirlineSeatLegroomNormal';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import FlightRoundedIcon from '@mui/icons-material/FlightRounded';
import UsbRoundedIcon from '@mui/icons-material/UsbRounded';
import AddIcon from '@mui/icons-material/Add';
import './TabCard.css';
import { Box, Paper, Stack } from '@mui/material';

const TabCard = () => {
  return (
    <Box>
      <Grid container sx={{ margin: 0, padding: 0 }} spacing={2}>
        <Grid
          item
          lg={1}
          md={1}
          sx={{
            '@media (min-width: 300px) and (max-width: 480px)': {
              display: 'none',
            },
            '@media (min-width: 481px) and (max-width: 768px)': {
              display: 'none',
            },
          }}
          style={{ margin: 'auto' }}
        >
          <FlightIcon
            style={{
              transform: 'rotate(180deg)',
            }}
          />
          <div className="dashedLine"></div>
        </Grid>
        <Grid item lg={7} md={6} sm={12} xs={12}>
          <Typography
            sx={{
              fontWeight: 'bold',
              '@media (min-width: 300px) and (max-width: 480px)': {
                fontSize: '2rem',
              },
            }}
          >
            Dhaka <ArrowForwardIcon /> Dubai
          </Typography>
          <div>
            <Typography
              sx={{
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '1rem',
                },
              }}
            >
              10:30 . 31 May 2022 . Dhaka(DCA)
              <span style={{ color: 'gray' }}>Terminal-1</span>
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '1rem',
                },
              }}
              color="text.secondary"
              gutterBottom
            >
              Travel Time: <span style={{ color: 'orange' }}>2h 25m</span>
            </Typography>

            <Typography
              sx={{
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '1rem',
                },
              }}
            >
              10:30 . 31 May 2022 . New Delhi (DEL)
              <span style={{ color: 'gray' }}>Terminal-2</span>
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '1rem',
                },
              }}
              color="text.secondary"
            >
              Travel Time: <span style={{ color: 'orange' }}>2h 25m</span>
            </Typography>
            <br />
            {/* Travel Details */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                '@media (min-width: 300px) and (max-width: 480px)': {
                  display: 'none',
                },
              }}
            >
              <img
                src="https://as1.ftcdn.net/v2/jpg/03/65/42/00/1000_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B.jpg"
                alt=""
                width="50px"
                height="40px"
              />
              <Typography
                className="travel-data"
                color="text.secondary"
                sx={{
                  fontSize: 12,
                  paddingLeft: 2,
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1rem',
                    paddingLeft: 1,
                  },
                }}
              >
                Vistara - UK182 - Economy - 320 - <EventSeatIcon /> v (1) Adult
                <br /> <FactCheckIcon /> Checked In 30 K <LuggageIcon />{' '}
                Cabin:SB
              </Typography>
            </Box>
          </div>
        </Grid>
        <Grid
          item
          lg={4}
          md={5}
          sm={12}
          xs={12}
          sx={{
            '@media (min-width: 300px) and (max-width: 480px)': {
              fontSize: '1rem',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              '@media (min-width: 300px) and (max-width: 480px)': {
                fontSize: '1.2rem',
              },
            }}
            color="text.secondary"
          >
            <AirlineSeatLegroomNormalIcon />
            <span style={{ paddingLeft: '20px' }}>74 cm seat pitch</span>
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              '@media (min-width: 300px) and (max-width: 480px)': {
                fontSize: '1.2rem',
              },
            }}
            color="text.secondary"
          >
            <FlightRoundedIcon />
            <span style={{ paddingLeft: '20px' }}>A320 (narrowbody)</span>
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              '@media (min-width: 300px) and (max-width: 480px)': {
                fontSize: '1.2rem',
              },
            }}
            color="text.secondary"
          >
            <GridViewRoundedIcon />
            <span style={{ paddingLeft: '20px' }}>3-3 seat layout</span>
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              '@media (min-width: 300px) and (max-width: 480px)': {
                fontSize: '1.2rem',
              },
            }}
            color="text.secondary"
          >
            <NetworkCheckIcon />
            <span style={{ paddingLeft: '20px' }}>No Wi-Fi</span>
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              '@media (min-width: 300px) and (max-width: 480px)': {
                fontSize: '1.2rem',
              },
            }}
            color="text.secondary"
          >
            <UsbRoundedIcon />
            <span style={{ paddingLeft: '20px' }}>USB outlet</span>
          </Typography>
          <Stack direction="row">
            <Button color="primary" startIcon={<AddIcon />}>
              <span style={{ marginTop: '35px' }}></span>Show More
            </Button>
          </Stack>
          <Box
            // style={{
            //   display: 'flex',
            //   justifyContent: 'spaceBetween',
            // }}
            sx={{
              display: 'flex',
              justifyContent: 'spaceBetween',
              '@media (min-width: 320px) and (max-width: 480px)': {
                display: 'none',
              },
            }}
            className="image-space"
          >
            <img
              src="https://as1.ftcdn.net/v2/jpg/03/65/42/00/1000_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B.jpg"
              alt=""
              width="100%"
              height="40px"
            />
            <img
              src="https://as1.ftcdn.net/v2/jpg/03/65/42/00/1000_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B.jpg"
              alt=""
              width="100%"
              height="40px"
            />
            <img
              src="https://as1.ftcdn.net/v2/jpg/03/65/42/00/1000_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B.jpg"
              alt=""
              width="100%"
              height="40px"
            />
          </Box>
        </Grid>
      </Grid>
      {/* <ListOfTabs></ListOfTabs> */}
    </Box>
  );
};

export default TabCard;
