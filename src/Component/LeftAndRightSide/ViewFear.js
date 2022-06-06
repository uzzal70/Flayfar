import CardTravelIcon from '@mui/icons-material/CardTravel';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Box, Card, FormControlLabel, Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import React from 'react';
import './ViewFear.css';

const ViewFear = () => {
  return (
    <div className="viewfear ">
      <Grid container spacing={1}>
        <Grid
          item
          style={{
            margin: 'auto',
          }}
          lg={2}
          md={2}
          sm={12}
          xs={12}
          sx={{
            m: '0px',
            p: '0px',
            '@media (min-width: 300px) and (max-width: 480px)': {
              fontSize: '1.5rem',
              m: '0px',
              p: '0px',
            },
          }}
        >
          <Grid>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    '@media (min-width: 300px) and (max-width: 480px)': {
                      fontSize: '1rem',
                    },
                  }}
                  defaultChecked
                />
              }
            />
            Echo Value
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            margin: 'auto',
          }}
          lg={3}
          md={3}
          sm={12}
          xs={12}
          sx={{
            '@media (min-width: 300px) and (max-width: 480px)': {
              fontSize: '1.1rem',
            },
          }}
        >
          <Grid>
            <p
              style={{
                display: 'flex',
                justifyItems: 'center',
              }}
            >
              <CardTravelIcon
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.5rem',
                  },
                }}
                style={{
                  marginRight: '10px',
                }}
              />
              <p
                style={{
                  marginTop: 'auto',
                }}
              >
                Cancelation fee starting BDT 4899
              </p>
            </p>
            <p
              style={{
                display: 'flex',
                justifyItems: 'center',
              }}
            >
              <MonetizationOnIcon
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.5rem',
                  },
                }}
                style={{
                  marginRight: '10px',
                }}
              />
              <p
                style={{
                  marginTop: 'auto',
                }}
              >
                Priority Check in
              </p>
            </p>
            <p
              style={{
                display: 'flex',
                justifyItems: 'center',
              }}
            >
              <CardTravelIcon
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.5rem',
                  },
                }}
                style={{
                  marginRight: '10px',
                }}
              />
              <p
                style={{
                  marginTop: 'auto',
                }}
              >
                Priority Check in
              </p>
            </p>
            <p
              style={{
                display: 'flex',
                justifyItems: 'center',
              }}
            >
              <MonetizationOnIcon
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.5rem',
                  },
                }}
                style={{
                  marginRight: '10px',
                }}
              />
              <p
                style={{
                  marginTop: 'auto',
                }}
              >
                Priority Check in
              </p>
            </p>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            margin: 'auto',
          }}
          lg={3}
          md={3}
          sm={12}
          xs={12}
          sx={{
            '@media (min-width: 300px) and (max-width: 480px)': {
              fontSize: '1.1rem',
            },
          }}
        >
          <div>
            <p
              style={{
                display: 'flex',
                justifyItems: 'center',
              }}
            >
              <CardTravelIcon
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.5rem',
                  },
                }}
                style={{
                  marginRight: '10px',
                }}
              />
              <p
                style={{
                  marginTop: 'auto',
                }}
              >
                Cancelation fee starting BDT 4899
              </p>
            </p>
            <p
              style={{
                display: 'flex',
                justifyItems: 'center',
              }}
            >
              <MonetizationOnIcon
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.5rem',
                  },
                }}
                style={{
                  marginRight: '10px',
                }}
              />
              <p
                style={{
                  marginTop: 'auto',
                }}
              >
                Priority Check in
              </p>
            </p>
            <p
              style={{
                display: 'flex',
                justifyItems: 'center',
              }}
            >
              <CardTravelIcon
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.5rem',
                  },
                }}
                style={{
                  marginRight: '10px',
                }}
              />
              <p
                style={{
                  marginTop: 'auto',
                }}
              >
                Priority Check in
              </p>
            </p>
            <p
              style={{
                display: 'flex',
                justifyItems: 'center',
              }}
            >
              <MonetizationOnIcon
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.5rem',
                  },
                }}
                style={{
                  marginRight: '10px',
                }}
              />
              <p
                style={{
                  marginTop: 'auto',
                }}
              >
                Priority Check in
              </p>
            </p>
          </div>
        </Grid>
        <Grid
          item
          style={{
            margin: 'auto',
          }}
          lg={2}
          md={3}
          sm={12}
          xs={12}
          sx={{
            '@media (min-width: 300px) and (max-width: 480px)': {
              fontSize: '1.1rem',
            },
          }}
        >
          <p
            style={{
              display: 'flex',
              justifyItems: 'center',
            }}
          >
            <EventSeatIcon
              sx={{
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '1.5rem',
                },
              }}
              style={{
                marginRight: '10px',
              }}
            />
            <Typography>W, V, 1</Typography>
          </p>
        </Grid>
        <Grid
          item
          style={{
            margin: 'auto',
          }}
          lg={2}
          md={3}
          sm={12}
          xs={12}
          sx={{
            '@media (min-width: 300px) and (max-width: 480px)': {
              fontSize: '2rem',
            },
          }}
        >
          <Box
            sx={{
              '@media (min-width: 300px) and (max-width: 480px)': {
                fontSize: '1.5rem',
              },
            }}
          >
            <del> BDT 20000 </del> <h3> BDT 20000 </h3>
          </Box>
          <Button
            variant="contained"
            sx={{
              '@media (min-width: 300px) and (max-width: 480px)': {
                fontSize: '1rem',
                width: '100%',
              },
            }}
          >
            Book Now
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewFear;
