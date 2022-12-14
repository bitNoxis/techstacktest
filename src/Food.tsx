import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PickerAblaufdatum from "./PickerAblaufdatum";
import {Container} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useEffect, useState} from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import {Refresh} from "@mui/icons-material";

export default function NewFood() {
    const paperStyle =  () => (<div className="paperstyle"></div>);
    const defaultDatumsFormat = new Date().toLocaleDateString('en-DE');
    const refreshPage = ()=>{
        window.location.reload();
    }

    const [productname, setProductName]= useState(String);
    const [expirationdate, setExpirationDate] = useState(defaultDatumsFormat);
    const food={productname, expirationdate}
    const [foods, setFoods] = useState([food]);

    const handleClick=(e: { preventDefault: () => void; })=>{
        e.preventDefault()
        window.location.reload();

        console.log(food)
        fetch("http://localhost:8080/food/add", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(food)
        }).then(()=> {
            console.log("New Food added")
        })
    }

    const handleDateChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        console.log(event.target.value);
        setExpirationDate(event.target.value);
    };

    useEffect(()=> {
        fetch("http://localhost:8080/food/getAll")
            .then(res => res.json())
            .then((result) => {
                setFoods(result);
            })
    },[])


    return (
        <Container>
            <Paper elevation={3}>
                <form>
                <h1>Produkt hinzufügen</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {m: 1, width: '20ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                <TextField id="productname" label="Produktname" variant="outlined"
                           value={productname}
                           onChange={e => setProductName(e.target.value)}/>
                <TextField
                    id="date"
                    label="Ablaufdatum"
                    type="date"
                    value={expirationdate}
                    onChange={handleDateChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                </Box>
                <Button variant="contained" endIcon={<AddCircleIcon/>} onClick={handleClick}>
                    Hinzufügen
                </Button>
                </form>
                <h1>Übersicht</h1>
                <Button variant="contained" endIcon={<Refresh/>} onClick={refreshPage}>Aktualisieren</Button>
            </Paper>
        </Container>
    );

    function ausgabe(food:any)
    {
        if (datumsErzeugerAusString(food.expirationdate)< addDaysToDate(new Date(),-2)){
            return(
                <Paper elevation={6} style={{margin:"10px",padding: "15px", textAlign:"left", backgroundColor:"#ff0000"}} key={food['productid']}>
                    Produkt: {food['productname']}<br/>
                    Ablaufdatum: {food['expirationdate']}
                </Paper>)
        }

        return (<Paper elevation={6} style={{margin:"10px",padding: "15px", textAlign:"left",}} key={food['productid']}>
            Produkt: {food['productname']}<br/>
            Ablaufdatum: {food['expirationdate']}
        </Paper>)

    }

    function datumsErzeugerAusString(stringDatum){
        const neuesDatum = new Date(stringDatum)
        return neuesDatum;
    }

    function addDaysToDate(datetodate, daystodate){
        var res = new Date(datetodate);
        res.setDate(res.getDate() + daystodate);
        return res;
    }
}
