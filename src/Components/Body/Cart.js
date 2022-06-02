import React from "react";
import "./Cart.css";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CartButton from "./CartButton";
import Token from "../Token/Token";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   ></Box>
// );
const Cart = () => {
    return (
        <div className="cartt">
            <Card className="cart">
                <CardContent>
                    <Typography variant="p" component="div">
                        OneWay flight for 1 Adult(s) in Economy
                    </Typography>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        From
                    </Typography>
                    <Typography variant="p" component="div">
                        Depart
                    </Typography>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        Sat 28 May 2022
                    </Typography>
                </CardContent>
                <CardContent style={{ marginTop: "25px" }}>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        To
                    </Typography>
                    <Typography variant="p" component="div">
                        New York - John F Kennedy Intl (JFK)
                    </Typography>
                </CardContent>
                <CartButton  />
            </Card>
            <Token></Token>
        </div>
    );
};

export default Cart;
