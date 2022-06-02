import CardTravelIcon from '@mui/icons-material/CardTravel';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { FormControlLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import React from 'react';
import './ViewFear.css';

const ViewFear = () => {
  return (
    <div>
      <Grid className="viewfear" container spacing={1}>
        <Grid
          item
          style={{
            margin: 'auto',
          }}
          xs={2}
        >
          {/* <div style={{ color: "red" }}><CircleIcon />Echo value</div> */}
          <div>
            <FormControlLabel
              style={{
                color: 'red',
              }}
              control={<Checkbox defaultChecked />}
            />
            Echo Value
          </div>
        </Grid>
        <Grid
          item
          style={{
            margin: 'auto',
            padding: '20px',
          }}
          xs={3}
        >
          <div>
            <p
              style={{
                display: 'flex',
                justifyItems: 'center',
              }}
            >
              <CardTravelIcon
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
          xs={3}
        >
          <div>
            <p
              style={{
                display: 'flex',
                justifyItems: 'center',
              }}
            >
              <CardTravelIcon
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
          xs={2}
        >
          <p
            style={{
              display: 'flex',
              justifyItems: 'center',
            }}
          >
            <EventSeatIcon
              style={{
                marginRight: '10px',
              }}
            />
            <p
              style={{
                marginTop: 'auto',
              }}
            >
              W, V, 1
            </p>
          </p>
        </Grid>
        <Grid
          item
          style={{
            margin: 'auto',
          }}
          xs={2}
        >
          <del> BDT 20000 </del> <h3> BDT 20000 </h3>
          <Button variant="contained"> Book Now </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewFear;
