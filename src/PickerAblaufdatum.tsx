import * as React from 'react';
import dayjs, {Dayjs} from 'dayjs';
import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';


export default function PickerAblaufdatum() {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs());

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>


            <DatePicker
                disableFuture
                label="Datum"
                openTo="year"
                views={['year', 'month', 'day']}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />

        </LocalizationProvider>
    );
}
