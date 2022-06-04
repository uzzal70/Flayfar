import React from 'react';
import './Cart.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CreateIcon from '@mui/icons-material/Create';
import PrintIcon from '@mui/icons-material/Print';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import { Box } from '@mui/material';

const CartButton = () => {
  return (
    <Box
      style={{ display: 'flex' }}
      sx={{
        '@media (min-width: 320px) and (max-width: 480px)': {
          display: 'flex',
          justifyContent: 'space-between',
        },
      }}
    >
      <Typography>
        <Button variant="outlined" className="text-color">
          <FilterVintageIcon />
          Add To Saved
        </Button>
      </Typography>
      <Typography>
        <Button spacing={2}>
          <PrintIcon />
        </Button>
      </Typography>
      <Typography>
        <Button variant="contained">
          <CreateIcon /> Change
        </Button>
      </Typography>
    </Box>
  );
};

export default CartButton;
