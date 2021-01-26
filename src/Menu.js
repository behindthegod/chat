import React from 'react';
import listSvg from "./assets/img/list.svg";


const Menu = () => {
    return <ul className="todo_list">
        <li className='active'>
            <i>
                <img src={listSvg} alt='list icon'/>
            </i>
            <span>Все задачи</span>
        </li>
    </ul>
};

export default Menu;