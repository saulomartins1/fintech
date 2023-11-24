import { NavLink } from 'react-router-dom'
import { IVenda } from '../context/DataContext'

function VendaItem({ venda }: { venda: IVenda }) {
    return (
        <div className='venda box'>
            <NavLink style={{ fontFamily: 'monospace' }} to={`/vendas/${venda.id}`}>{venda.id}</NavLink>
            <div>{venda.nome}</div>
            <div>{venda.preco.toLocaleString('pt-BR', { style: "currency", currency: 'BRL' })}</div>
        </div >
    )
}

export default VendaItem