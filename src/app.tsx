import { Route, Routes } from 'react-router-dom'
import Navbar from './components/shared/navbar'
import Home from './pages/home'
import Auth from './pages/auth'
import Dashboard from './pages/dashboard'
import { Toaster } from "@/components/ui/sonner"

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path={'/'} element={<Home /> } />
				<Route path={'/auth'} element={<Auth /> } />
				<Route path={'/dashboard'} element={<Dashboard /> } />
			</Routes>

			<Toaster position='top-center'/>
		</>
	)
}

export default App
