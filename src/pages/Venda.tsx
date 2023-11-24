import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading';
import { IVenda } from '../context/DataContext';
import useFetch from '../hooks/useFetch';

type IVendaNoDate = Omit<IVenda, 'data'>

function Venda() {
    const { id } = useParams();
    const { data, loading } = useFetch<IVendaNoDate>(`https://data.origamid.dev/vendas/${id}`);

    if (loading) return <Loading />
    if (!data) return null;
    return (
        <div>
            <div className='box mb'>ID: {data.id}</div>
            <div className='box mb'>Nome: {data.nome}</div>
            <div className='box mb'>Preço: {data.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
            <div className='box mb'>Status: {data.status}</div>
            <div className='box mb'>Pagamento: {data.pagamento}</div>
        </div>
    )
}

export default Venda