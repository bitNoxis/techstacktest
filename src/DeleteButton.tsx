import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import * as React from "react";
import IconButton from "@mui/material/IconButton";

export default function DeleteFoodButton() {
    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{mr: 2}}
        >
            <DeleteForeverIcon/>
        </IconButton>
    )
}