import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
// import CartButton from './CartButton';
// import Token from '../Token/Token';
import CreateIcon from '@mui/icons-material/Create';
import PrintIcon from '@mui/icons-material/Print';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';

import { Box, Button, Grid, Paper } from '@mui/material';

const AddToSave = () => {
  return (
    <Paper>
      <Card sx={{ flexGrow: 1 }} className="cart">
        <Grid container spacing={1} sx={{ p: 2 }}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Typography
              variant="p"
              component="div"
              fontWeight="bold"
              sx={{
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '1rem',
                },
              }}
            >
              OneWay flight for 1 Adult(s) in Economy
            </Typography>
            <Typography color="text.secondary">From</Typography>
            <Typography
              variant="p"
              component="div"
              fontWeight="bold"
              sx={{
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '1rem',
                },
              }}
            >
              Depart
            </Typography>
            <Typography color="text.secondary">Sat 28 May 2022</Typography>
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Typography color="text.secondary">To</Typography>
            <Typography
              variant="p"
              component="div"
              fontWeight="bold"
              sx={{
                '@media (min-width: 300px) and (max-width: 480px)': {
                  fontSize: '1rem',
                },
              }}
            >
              New York - John F Kennedy Intl (JFK)
            </Typography>
          </Grid>
          {/* ---------------- Button Start */}
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box
              style={{ display: 'flex' }}
              sx={{
                '@media (min-width: 320px) and (max-width: 480px)': {
                  display: 'flex',
                  justifyContent: 'space-between',
                },
              }}
            >
              {/* <Button
                variant="outlined"
                sx={{ color: 'red', width: '10px', height: '2px' }}
              >
                <FilterVintageIcon />
                Add To Saved
              </Button> */}
              <Button
                variant="outlined"
                startIcon={<FilterVintageIcon />}
                sx={{ color: 'red', border: '1px solid red' }}
              >
                Add&nbsp;To&nbsp;Saved
              </Button>

              <Typography>
                <Button spacing={0}>
                  <PrintIcon />
                </Button>
              </Typography>
              <Typography>
                <Button variant="contained">
                  <CreateIcon />
                  Change
                </Button>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
      {/* <Token></Token> */}
    </Paper>
  );
};

export default AddToSave;
