import React from 'react'
import useFetch from '../hooks/useFetch';

type IDataContext = {
    data: IVenda[] | null;
    loading: boolean;
    error: string | null;
    inicio: string;
    final: string;
    setInicio: React.Dispatch<React.SetStateAction<string>>;
    setFinal: React.Dispatch<React.SetStateAction<string>>;
}

type IVenda = {
    id: string;
    nome: string;
    preco: number;
    status: 'pago' | 'processando' | 'falha';
    pagamento: 'boleto' | 'cartão' | 'pix';
    data: string;
    parcelas: number | null;
}

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
    const context = React.useContext(DataContext);
    if (!context) throw new Error("useData não foi encontrado no Provider");
    return context;
}

function getNDaysAgo(n: number) {
    const date = new Date();
    date.setDate(date.getDate() - n);

    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
}


export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
    const [inicio, setInicio] = React.useState(getNDaysAgo(30));
    const [final, setFinal] = React.useState(getNDaysAgo(0));
    const { data, loading, error } =
        useFetch<IVenda[]>(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`);


    return <DataContext.Provider value={{ data, loading, error, inicio, setInicio, final, setFinal }}>{children}</ DataContext.Provider>
}