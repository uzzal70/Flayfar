import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { FormControlLabel } from "@mui/material";
import RengeSlider from "./RengeSlider";

const Leftside = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: "100%", flexShrink: 0 }}>
                        Popular Filter
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Grid item style={{ margin: "auto" }} xs={2}>
                            <FormControlLabel
                                style={{ color: "red" }}
                                control={<Checkbox defaultChecked />}
                            />
                            Refundable Fares
                        </Grid>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: "100%", flexShrink: 0 }}>
                        Duration (h)
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Grid item style={{ margin: "auto" }} xs={2}>
                            <RengeSlider />
                        </Grid>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
            >
                <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: "100%", flexShrink: 0 }}>
                        Duration (h)
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Grid item style={{ margin: "auto" }} xs={2}>
                            <RengeSlider />
                        </Grid>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
            >
                <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: "100%", flexShrink: 0 }}>
                        Duration (h)
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Grid item style={{ margin: "auto" }} xs={2}>
                            <RengeSlider />
                        </Grid>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Leftside;
