import * as React from 'react';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';



export default function FoodButton() {
    return (
        <Button variant="contained" endIcon={<AddCircleIcon/>}>
            Send
        </Button>
    );
}

