import { AiFillHome } from 'react-icons/ai'
import { BsXDiamondFill } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa';
import { FaBox } from 'react-icons/fa';

export const SidebarData = [
    {
        title : 'Home',
        path: '/main',
        icon: <AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title : 'Section',
        path: '/main/section',
        icon: <BsXDiamondFill/>,
        cName: 'nav-text'
    },
    {
        title : 'Employee',
        path: '/main/employee',
        icon: <FaUserTie/>,
        cName: 'nav-text'
    },
    {
        title : 'Product',
        path: '/main/product',
        icon: <FaBox/>,
        cName: 'nav-text'
    }
]