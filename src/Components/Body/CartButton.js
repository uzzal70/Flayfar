import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CreateIcon from '@mui/icons-material/Create';
import PrintIcon from '@mui/icons-material/Print';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';

const CartButton = () => {
    return (
        <div style={{ display: "flex", marginTop:"50px", marginLeft:"50px"}}>
            <Typography>
                <Button variant="outlined" className='text-color'> <FilterVintageIcon/>Add To Saved</Button>
            </Typography>
            <Typography>
            <Button  spacing={2} ><PrintIcon/></Button>
            </Typography>
            <Typography>
            <Button  variant="contained" ><CreateIcon/> Change</Button>
            </Typography>
        </div>
    );
};

export default CartButton;