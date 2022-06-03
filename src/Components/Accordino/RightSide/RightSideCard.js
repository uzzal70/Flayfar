import React, { useState } from "react";
import Box from "@mui/material/Box";
import "./RightSide.css";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import CellWifiIcon from "@mui/icons-material/CellWifi";
import MonitorIcon from "@mui/icons-material/Monitor";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import Tooltip from "@mui/material/Tooltip";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CurrencyExchangeSharpIcon from "@mui/icons-material/CurrencyExchangeSharp";
import FlightIcon from "@mui/icons-material/Flight";
import ListOfTabs from "../ListOfTabs/ListOfTabs";
import { FaRocket } from "react-icons/fa";
import Expands from "../Expands/Expands";
import ViewFear from "./ViewFear";
// import { display } from "@mui/system";
const RightSideCard = () => {
    const [flightDetails, setFlightDetails] = useState(false);
    const [viewFear, setViewFear] = useState(false);
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item lg={2.5} xm={12}>
                        <FormGroup
                            style={{ display: "flex", flexDirection: "row" }}
                        >
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                            />
                            <BrightnessHighIcon
                                style={{ marginTop: "10px", color: "red" }}
                            />
                            <div>
                                <h3>Turkish Airlines</h3>
                                <p>TK713 | TK3</p>
                            </div>
                        </FormGroup>
                    </Grid>
                    <Grid item lg={2} sm={6}>
                        <div>
                            <h3>DAC, Dhaka</h3>
                            <p>2017-05-24 10:30am</p>
                        </div>
                    </Grid>
                    <Grid item lg={2} sm={3}>
                        <div sx={{ display: "flex" }}>
                            <FlightIcon
                                style={{
                                    transform: "rotate(90deg)",
                                }}
                                className="view-fareLine"
                            />
                            <FaRocket />
                            {/* <div className="view-fareLine"></div> */}
                        </div>
                    </Grid>
                    <Grid item lg={2} sm={6}>
                        <div>
                            <h3>JKF, New York</h3>
                            <p>2017-05-24 10:30am</p>
                        </div>
                    </Grid>
                    <Grid item lg={2} sm={3}>
                        <div>
                            <del>BDT 22222</del>
                            <br />
                            <strong>BDT 11111</strong>
                        </div>
                    </Grid>
                    <Grid item lg={1} sm={3}>
                        <Button
                            onClick={() => setViewFear(!viewFear)}
                            variant="outlined"
                            sx={{ width: "100px", padding: "0px" }}
                        >
                            View Fear
                        </Button>
                    </Grid>
                </Grid>
                <Grid
                    container
                    className="button-grid"
                    style={{ marginTop: "20px" }}
                    spacing={1}
                >
                    <Grid item className="tooltipIconsSize">
                        <Button>Publish</Button>
                        <Tooltip title="Mobile Wifi" arrow>
                            <CellWifiIcon />
                        </Tooltip>
                        &nbsp;
                        <Tooltip title="Monitor" arrow>
                            <MonitorIcon />
                        </Tooltip>
                        &nbsp;
                        <Tooltip title="Settings" arrow>
                            <BrightnessHighIcon />
                        </Tooltip>
                        &nbsp;
                        <Tooltip title="Settings" arrow>
                            <CurrencyExchangeSharpIcon />
                        </Tooltip>
                    </Grid>
                    <Grid
                        item
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <div>
                            <MonetizationOnIcon
                                className="top-margin"
                                style={{ color: "blue" }}
                            />
                        </div>
                        <p style={{ paddingTop: "6px" }}>Refundable &nbsp;</p>
                        <div>
                            <Button
                                onClick={() => setFlightDetails(!flightDetails)}
                            >
                                Flight Details
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            {viewFear && <ViewFear />}
            {flightDetails && <ListOfTabs />}
        </div>
    );
};
// Accordino Function
export default RightSideCard;
