import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { IVenda } from '../context/DataContext'


type IVendaDia = {
    data: string,
    pago: number,
    processando: number,
    falha: number,

}

function transformData(data: IVenda[]): IVendaDia[] {

    const dias = data.reduce((acc: { [key: string]: IVendaDia }, item) => {
        const dia = item.data.split(' ')[0];
        if (!acc[dia]) {
            acc[dia] = {
                data: dia.substring(5),
                pago: 0,
                falha: 0,
                processando: 0,
            };
        }
        acc[dia][item.status] = + item.preco;
        return acc;
    }, {})


    return Object.values(dias);
}

function ChartVenda({ data }: { data: IVenda[] }) {
    const transformedData = transformData(data);

    return (
        <ResponsiveContainer width={"99%"} height={400}>
            <LineChart data={transformedData}>
                <XAxis dataKey="data" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="pago" stroke="#3363FF" strokeWidth={2} />
                <Line type="monotone" dataKey="processando" stroke="#FBCB21" strokeWidth={2} />
                <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default ChartVenda