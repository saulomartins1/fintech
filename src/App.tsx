import React from 'react'
import Header from './components/Header'
import SideNav from './components/SideNav'
import Resumo from './pages/Resumo'
import "./App.css"

function App() {

	return (
		<div>
			<SideNav />
			<main>
				<Header />
				<Resumo />
			</main>
		</div>
	)
}

export default App