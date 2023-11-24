import VendaItem from '../components/VendaItem';
import { useData } from '../context/DataContext'

function Vendas() {
    const { data } = useData();
    if (!data) return null;
    return (
        <ul>
            {data.map((v) =>
                <li key={v.id}><VendaItem venda={v} /></li>
            )}
        </ul>
    )
}

export default Vendas