import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <nav className='nav'>

            <Link to='/'> 
                <div>HOME</div>
            </Link>

            <Link to='/stocks'> 
                <div>Stocks</div>
            </Link>

            <Link to='/about'> 
                <div>ABOUT</div>
            </Link>
        </nav>
    )
}

export default Navbar;