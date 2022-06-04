import React from 'react';
import './Cart.css';
// import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CartButton from './CartButton';
import Token from '../Token/Token';
import { Box, Grid } from '@mui/material';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   ></Box>
// );
const Cart = () => {
  return (
    <>
      <Box>
        <Card sx={{ flexGrow: 1 }} className="cart">
          <Grid container spacing={1} sx={{ p: 2 }}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Typography
                variant="p"
                component="div"
                fontWeight="bold"
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '2.5rem',
                  },
                }}
              >
                OneWay flight for 1 Adult(s) in Economy
              </Typography>
              <Typography className="Font-size" color="text.secondary">
                From
              </Typography>
              <Typography
                variant="p"
                component="div"
                fontWeight="bold"
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '2.5rem',
                  },
                }}
              >
                Depart
              </Typography>
              <Typography
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '1.5rem',
                  },
                }}
                color="text.secondary"
              >
                Sat 28 May 2022
              </Typography>
            </Grid>

            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Typography
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '2rem',
                  },
                }}
                color="text.secondary"
              >
                To
              </Typography>
              <Typography
                variant="p"
                component="div"
                fontWeight="bold"
                sx={{
                  '@media (min-width: 300px) and (max-width: 480px)': {
                    fontSize: '2.5rem',
                  },
                }}
              >
                New York - John F Kennedy Intl (JFK)
              </Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <CartButton />
            </Grid>
          </Grid>
        </Card>
        <Token></Token>
      </Box>
    </>
  );
};

export default Cart;
