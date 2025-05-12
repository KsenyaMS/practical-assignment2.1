import { useState } from 'react';
import { Rating } from '@mui/material';

export const MyRating = ({ defaultValue }) => {
    const [value, setValue] = useState(0);

    return (
        <Rating
            name="simple-rating"
            value={value}
            onChange={(_event, newValue) => {
                setValue(newValue)
            }}
            defaultValue={defaultValue}
        />
    );
}