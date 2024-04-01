import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DueDatePicker() {

    const [selectedDate,setSelectedDate] = useState(null);

    return (
        <DatePicker 
            className="w-full"
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            placeholderText="Select due date ..."
            showYearDrodown
            scrollableYearDropdown
        />
    )
}