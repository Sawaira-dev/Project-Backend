import React, { useContext } from 'react'
import { FiHome } from 'react-icons/fi'
import { BiCategoryAlt } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import { GlobalContext } from '../../Context/context'
import Cookies from 'js-cookie';


export default function Sidebar() {

    const location = useLocation()
    const { state, dispatch } = useContext(GlobalContext)

    const NavItems = [
        {
            tab: "Home",
            url: "/",
            icon: <FiHome />
        },
        {
            tab: "Categories",
            url: "/category",
            icon: <BiCategoryAlt />
        },
        {
            tab: "Products",
            url: "/products",
            icon: <BiCategoryAlt />
        },


    ]
    return (
        <>

            <div className="bg-warning p-3 d-flex text-dark fw-bold justify-content-between align-items-center">
                <span>Admin Name</span>
                <button className="btn btn-dark"
                    // onClick={() => dispatch({ type: "USER_LOGOUT" })}
                    onClick={() => {
                        // Cookies.remove('token')
                        dispatch({ type: "USER_LOGOUT" })
                    }}
                >Logout</button>

            </div>


            <ul className="nav flex-column pt-3">
                {
                    NavItems.map((val, key) =>

                        <li key={key} className={`nav-item m-2  ${location.pathname == val.url ? 'bg-white rounded' : null}`}>
                            <Link className='nav-link d-flex align-items-center  text-warning gap-2' to={val.url}>
                                <span>{val.icon}</span>

                                <span>{val.tab}</span>
                            </Link>
                        </li>)
                }

            </ul>

        </>

    )
}
