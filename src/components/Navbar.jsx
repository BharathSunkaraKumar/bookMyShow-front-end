import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    const auth = useSelector((state) => state.auth)
    console.log(auth)
  return (
    <nav className='w-full sticky bg-white drop-shadow-md top-0 z-10'>
        <div className='flex justify-between items-center h-[55px] container mx-auto px-10 mt-1'>
        <Link to='/'>
            <div>
            {/* <h1>Logo</h1> */}
            <img className="w-[95px] md:w-[115px]" src={logo} alt='logo'/>
        </div>
        </Link>
        <div className='border-2  border-gray-300 rounded-md ml-1 p-1sm:w-[100px] md:w-[290px]  '>
            <SearchIcon className='text-gray-300 mr-1'/>
            <input className='outline-none'  type='text' placeholder='Search for movies'/>
        </div>
        <div>
            <ul className='flex gap-4 items-center'>
                <li>
                    <select>
                        <option>
                            Tirupati
                        </option>
                        <option>
                            Chittoor
                        </option>
                    </select>
                </li>
                <li>
                    {
                        auth.user ? (
                            <div className='flex items-center gap-2'>
                                <p className='font-semibold'>{auth?.user.user.username}</p>
                                <AccountCircleIcon/>
                            </div>
                        ) : (
                            <Link to='/register'>
                        <button className='bg-red-500 text-white px-3 shadow-md hover:bg-red-600 pb-0.5 rounded-md'>Sign In</button>
                    </Link>
                        )
                    }
                    
                </li>
                <li className='flex basis-0 text-gray-600'>
                    <MenuIcon/>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar