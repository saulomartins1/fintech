import React from 'react'
import ChartVenda from '../components/ChartVenda';
import { useData } from '../context/DataContext';

function Resumo() {
    const { data } = useData();

    if (!data) return null;
    return (
        <section>
            <div className='resumo flex mb'>
                <div className='box'>
                    <h2>Vendas Total</h2>
                    <span>
                        {data.filter((v) => v.status !== 'falha')
                            .reduce((acc, preco) => {
                                return acc + preco.preco;
                            }, 0).toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })}
                    </span>
                </div>
                <div className='box'>
                    <h2>Recebido</h2>
                    <span>
                        {data.filter((v) => v.status === 'pago')
                            .reduce((acc, preco) => {
                                return acc + preco.preco;
                            }, 0).toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })}
                    </span>
                </div>
                <div className='box'>
                    <h2>Vendas</h2>
                    <span>
                        {data.filter((v) => v.status === 'processando')
                            .reduce((acc, preco) => {
                                return acc + preco.preco;
                            }, 0).toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })}
                    </span>
                </div>
            </div>
            <div className="box mb">
                <ChartVenda data={data} />
            </div>
        </section>
    )
}

export default Resumo