import React from 'react'
import { useData } from '../context/DataContext';
import DateInput from './DateInput'

function DateRange() {
    const { inicio, setInicio, final, setFinal } = useData();

    return (
        <form className='box flex' onSubmit={(e) => e.preventDefault()}>
            <DateInput id={'inicio'} label={"Início"} value={inicio}
                onChange={({ target }) => setInicio(target.value)}
            />
            <DateInput id={'final'} label={"Final"} value={final}
                onChange={({ target }) => setFinal(target.value)}
            />
        </form>
    )
}

export default DateRange