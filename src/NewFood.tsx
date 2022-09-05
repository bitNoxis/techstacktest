import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PickerAblaufdatum from "./PickerAblaufdatum";
import NewFoodButton from "./FoodButton";
import {Container} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useState} from "react";

export default function NewFood() {
    const paperStyle = {padding:'50px 20px',width:600, margin: "20px auto"}
    const [produktname, setProduktName]= useState(String);
    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1>Produkt Hinzufügen</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '20ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="produktname" label="Produktname" variant="outlined"
                           onChange={e => setProduktName(e.target.value)}/>


                <PickerAblaufdatum/>
                <NewFoodButton/>
            </Box>
            </Paper>
        </Container>
    );
}
