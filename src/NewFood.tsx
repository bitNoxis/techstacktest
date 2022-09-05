import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PickerAblaufdatum from "./PickerAblaufdatum";
import {Container} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useState} from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";

export default function NewFood() {
    const paperStyle = {padding:'50px 20px',width:600, margin: "20px auto"}
    const [produktname, setProduktName]= useState(String);
    const [selectedDate, setSelectedDate] = useState('2022-09-05');
    const handleClick=(e: { preventDefault: () => void; })=>{
        e.preventDefault()
        const newFood={produktname, selectedDate}
        console.log(newFood)
    }

    const handleDateChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        console.log(event.target.value);
        setSelectedDate(event.target.value);
    };
    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1>Produkt Hinzufügen</h1>
                <TextField id="produktname" label="Produktname" variant="outlined"
                           value={produktname}
                           onChange={e => setProduktName(e.target.value)}/>
                <TextField
                    id="date"
                    label="Ablaufdatum"
                    type="date"
                    defaultValue="2017-05-24"
                    value={selectedDate}
                    onChange={handleDateChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="contained" endIcon={<AddCircleIcon/>} onClick={handleClick}>
                    Hinzufügen
                </Button>
            </Paper>
        </Container>
    );
}
