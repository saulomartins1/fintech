import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { IVenda } from '../context/DataContext'

const dadosChart = [
    {
        data: '2023-11-03',
        pago: 600,
        processando: 300,
        falha: 100,
    },
    {
        data: '2023-11-04',
        pago: 6001,
        processando: 3001,
        falha: 1001,
    },
    {
        data: '2023-11-05',
        pago: 3000,
        processando: 1000,
        falha: 200,
    },
]

function ChartVenda({ data }: { data: IVenda[] }) {
    return (
        <ResponsiveContainer width={"99%"} height={400}>
            <LineChart data={dadosChart}>
                <XAxis dataKey="data" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="pago" stroke="#3363FF" strokeWidth={3} />
                <Line type="monotone" dataKey="processando" stroke="#FBCB21" strokeWidth={3} />
                <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default ChartVenda