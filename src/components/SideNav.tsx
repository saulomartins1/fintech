import React from 'react'
import FintechSVG from '../assets/FintechSVG'
import resumo from '../assets/icons/resumo.svg'
import vendas from '../assets/icons/vendas.svg'
import webhooks from '../assets/icons/webhooks.svg'
import configs from '../assets/icons/configuracoes.svg'
import contato from '../assets/icons/contato.svg'
import sair from '../assets/icons/sair.svg'
import { NavLink } from 'react-router-dom'


function SideNav() {
    return (
        <aside className='sidenav box bg-3'>
            <FintechSVG title="Fintech Logo" />
            <ul>
                <li>
                    <span><img src={resumo} alt="" /></span>
                    <NavLink to="/">Resumo</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <span><img src={vendas} alt="" /></span>
                    <NavLink to="/vendas">Vendas</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <span><img src={webhooks} alt="" /></span>
                    <NavLink to="/">Webhooks</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <span><img src={configs} alt="" /></span>
                    <NavLink to="/">Configurações</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <span><img src={contato} alt="" /></span>
                    <NavLink to="/">Contato</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <span><img src={sair} alt="" /></span>
                    <NavLink to="/">Sair</NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default SideNav