import React from 'react'
import Header from './components/Header'
import SideNav from './components/SideNav'
import Resumo from './pages/Resumo'
import "./App.css"
import { DataContextProvider } from './context/DataContext'

function App() {

	return (
		<DataContextProvider>
			<div className='container'>
				<SideNav />
				<main>
					<Header />
					<Resumo />
				</main>
			</div>
		</DataContextProvider>
	)
}

export default App