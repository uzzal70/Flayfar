import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const ListOfCard = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Button>Dhaka <ArrowForwardIcon /> Dubai</Button>
                    <p>
                    10:30 . 31 May 2022 . Dhaka(DCA) Terminal-1 <br/>
                    Travel Time: <span style={{ color: 'red' }}>2h 25m</span>
                    <span><br/>
                    10:30 . 31 May 2022 . New Delhi (DEL) Terminal-3
                        </span> <br/>
                        <span><DoubleArrowIcon/></span>
                </p>
                </Grid>
                
                
                {/* <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography> */}
                <Grid item xs={4}>
                    <p>
                    <Typography variant="caption" display="block" gutterBottom>
                    <DoubleArrowIcon/> 74 cm seat pitch
                     </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                    <DoubleArrowIcon/>74 cm seat pitch
                     </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                    <DoubleArrowIcon/>74 cm seat pitch
                     </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                    <DoubleArrowIcon/>74 cm seat pitch
                     </Typography>
                    </p>
                </Grid>
            </Grid>
        </div>
    );
};

export default ListOfCard;