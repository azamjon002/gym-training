import { navLinks } from '@/constants'
import { Button } from '../ui/button'
import { ModeToggle } from './mode-toggle'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='w-full h-[10vh] border-b fixed inset-0 z-50 bg-background'>
			<div className='container max-w-6xl mx-auto h-full flex justify-between items-center'>
				<Link to={'/'}>
					<h1 className='text-2xl font-bold uppercase'>workout</h1>
				</Link>
				<div className='flex items-center gap-3'>
					{navLinks.map(nav => (
						<a
							href={nav.path}
							key={nav.path}
							className='font-medium hover:underline'
						>
							{nav.label}
						</a>
					))}
					<ModeToggle />
					<Link to={'/auth'}>
						<Button variant={'secondary'}>Join Free</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
