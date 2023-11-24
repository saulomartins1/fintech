import React from 'react'
import { useLocation } from 'react-router-dom';
import DateRange from './DateRange'
import Months from './Months'

function Header() {
    const [title, setTitle] = React.useState('Resumo');
    const local = useLocation();

    React.useEffect(() => {
        if (local.pathname === '/') {
            setTitle("Resumo")
            document.title = "Fintech | Resumo"
        } else if (local.pathname === '/vendas') {
            setTitle("Vendas")
            document.title = "Fintech | Vendas"
        }
    }, [local])

    return (
        <header className='mb'>
            <div className='daterange mb'>
                <DateRange />
                <h1 className='box bg-3'>{title}</h1>
            </div>
            <Months />
        </header>
    )
}

export default Header