import React from 'react'
import FintechSVG from '../assets/FintechSVG'
import resumo from '../assets/icons/resumo.svg'
import vendas from '../assets/icons/vendas.svg'
import webhooks from '../assets/icons/webhooks.svg'
import configs from '../assets/icons/configuracoes.svg'
import contato from '../assets/icons/contato.svg'
import sair from '../assets/icons/sair.svg'


function SideNav() {
    return (
        <aside className='sidenav box bg-3'>
            <FintechSVG title="Fintech Logo" />
            <ul>
                <li>
                    <span><img src={resumo} alt="" /></span>
                    <a href="#">Resumo</a>
                </li>
            </ul>
            <ul>
                <li>
                    <span><img src={vendas} alt="" /></span>
                    <a href="#">Vendas</a>
                </li>
            </ul>
            <ul>
                <li>
                    <span><img src={webhooks} alt="" /></span>
                    <a>Webhooks</a>
                </li>
            </ul>
            <ul>
                <li>
                    <span><img src={configs} alt="" /></span>
                    <a>Configuracoes</a>
                </li>
            </ul>
            <ul>
                <li>
                    <span><img src={contato} alt="" /></span>
                    <a>Contato</a>
                </li>
            </ul>
            <ul>
                <li>
                    <span><img src={sair} alt="" /></span>
                    <a>Sair</a>
                </li>
            </ul>
        </aside>
    )
}

export default SideNav