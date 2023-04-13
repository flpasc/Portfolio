import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/components/App/App'
import './assets/styles/index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter basename='/'>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
