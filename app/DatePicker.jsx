import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

export const MyDatePicker = () => {
    const [value, setValue] = useState(null);

    return <DatePicker
        value={value}
        autoCorrect={true}
        onChange={setValue}
    />;
}