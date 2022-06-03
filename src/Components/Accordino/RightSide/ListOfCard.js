import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
// import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import FlightIcon from "@mui/icons-material/Flight";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import LuggageIcon from "@mui/icons-material/Luggage";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AirlineSeatLegroomNormalIcon from "@mui/icons-material/AirlineSeatLegroomNormal";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
import UsbRoundedIcon from "@mui/icons-material/UsbRounded";
import AddIcon from "@mui/icons-material/Add";
import "./ListOfCard.css";
// import { padding } from '@mui/system';
import { Stack } from "@mui/material";
// import ListOfTabs from '../ListOfTabs/ListOfTabs';

const ListOfCard = () => {
    return (
        <div>
            <Grid container sx={{ marginTop: 2 }} spacing={2}>
                <Grid item xs={1} style={{ margin: "auto" }}>
                    <FlightIcon
                        style={{
                            transform: "rotate(180deg)",
                        }}
                    />
                    <div className="dashedLine"></div>
                </Grid>
                <Grid item xs={7}>
                    <Button>
                        Dhaka <ArrowForwardIcon /> Dubai
                    </Button>
                    <div>
                        <Typography>
                            10:30 . 31 May 2022 . Dhaka(DCA)
                            <span style={{ color: "gray" }}>Terminal-1</span>
                        </Typography>
                        <Typography
                            sx={{ fontSize: 12 }}
                            color="text.secondary"
                            gutterBottom
                        >
                            Travel Time:{" "}
                            <span style={{ color: "orange" }}>2h 25m</span>
                        </Typography>

                        <Typography>
                            10:30 . 31 May 2022 . New Delhi (DEL)
                            <span style={{ color: "gray" }}>Terminal-2</span>
                        </Typography>
                        <Typography
                            sx={{ fontSize: 12 }}
                            color="text.secondary"
                        >
                            Travel Time:{" "}
                            <span style={{ color: "orange" }}>2h 25m</span>
                        </Typography>
                        <br />
                        {/* Travel Details */}
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img
                                src="https://dcassetcdn.com/design_img/1559024/551167/551167_7840631_1559024_911ff84c_image.png"
                                alt=""
                                width="20px"
                                height="20px"
                            />
                            <Typography
                                className="travel-data"
                                sx={{ fontSize: 12, paddingLeft: 2 }}
                                color="text.secondary"
                            >
                                Vistara - UK182 - Economy - 320 -{" "}
                                <EventSeatIcon /> v (1) Adult
                                <br /> <FactCheckIcon /> Checked In 30 K{" "}
                                <LuggageIcon /> Cabin:SB
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        <AirlineSeatLegroomNormalIcon />
                        <span style={{ paddingLeft: "20px" }}>
                            74 cm seat pitch
                        </span>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        <FlightRoundedIcon />
                        <span style={{ paddingLeft: "20px" }}>
                            A320 (narrowbody)
                        </span>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        <GridViewRoundedIcon />
                        <span style={{ paddingLeft: "20px" }}>
                            3-3 seat layout
                        </span>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        <NetworkCheckIcon />
                        <span style={{ paddingLeft: "20px" }}>No Wi-Fi</span>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        <UsbRoundedIcon />
                        <span style={{ paddingLeft: "20px" }}>USB outlet</span>
                    </Typography>
                    <Stack direction="row">
                        <Button color="primary" startIcon={<AddIcon />}>
                            <span style={{ marginTop: "35px" }}></span>Show More
                        </Button>
                    </Stack>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "spaceBetween",
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
                    </div>
                </Grid>
            </Grid>
            {/* <ListOfTabs></ListOfTabs> */}
        </div>
    );
};

export default ListOfCard;
