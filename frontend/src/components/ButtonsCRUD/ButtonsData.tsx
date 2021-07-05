import { BsPlusSquareFill } from 'react-icons/bs'
import { MdCreate } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';

export const ButtonsData = [
    {
        title : 'Create',
        path: '/main',
        icon: <BsPlusSquareFill/>,
        cName: 'nav-text'
    },
    {
        title : 'Alter',
        path: '/main/section',
        icon: <MdCreate/>,
        cName: 'nav-text'
    },
    {
        title : 'Delete',
        path: '/main/employee',
        icon: <MdDeleteForever/>,
        cName: 'nav-text'
    }
]