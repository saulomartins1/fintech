import React from 'react'

type IDateInput = React.ComponentProps<"input"> & {
    label: string;
}

const generalStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: "var(--color-2)",
    padding: "var(--gap-s) .75rem",
    backgroundColor: "var(--color-4)",
    borderRadius: "var(--gap)",
}

const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: 'var(--gap-s)',
    fontWeight: '600',
    ...generalStyle,
}
const inputStyle: React.CSSProperties = {
    fontFamily: 'monospace',
    border: 'none',
    ...generalStyle,
}


function DateInput({ id, label, onChange, ...rest }: IDateInput) {
    return (
        <div>
            <label style={labelStyle} htmlFor={id}>{label}</label>
            <input style={inputStyle} id={id} onChange={onChange} name={label} type="date" {...rest} />
        </div>
    )
}

export default DateInput