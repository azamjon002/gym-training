import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { ThemeProvider } from './components/providers/theme-provider'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider defaultTheme='dark'>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
)
