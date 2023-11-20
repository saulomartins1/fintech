import React from 'react'

type IDateInput = React.ComponentProps<"input"> & {
    label: string;
}

function DateInput({ id, label, onChange, ...rest }: IDateInput) {
    return (
        <div><label htmlFor={id}>{label}</label>
            <input id={id} onChange={onChange} name={label} type="date" /></div>
    )
}

export default DateInput