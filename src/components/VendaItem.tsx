import { IVenda } from '../context/DataContext'

function VendaItem({ venda }: { venda: IVenda }) {
    return (
        <div className='venda box'>
            <a style={{ fontFamily: 'monospace' }} href=''>{venda.id}</a>
            <div>{venda.nome}</div>
            <div>{venda.preco.toLocaleString('pt-BR', { style: "currency", currency: 'BRL' })}</div>
        </div>
    )
}

export default VendaItem