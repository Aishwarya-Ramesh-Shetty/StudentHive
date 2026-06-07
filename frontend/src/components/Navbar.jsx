import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <nav className="p-4 text-yellow-500 shadow">
            <div className="flex gap-4">
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        </nav>
    )
}

export default Navbar;