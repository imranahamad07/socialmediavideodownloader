import { NavLink } from "react-router-dom"

export default function Navbar() {
    return <>
        <nav className="w-full font-serif flex justify-between items-center gap-3 h-11">

            <div>

            </div>

            <div className="flex justify-center items-center gap-3 transition-all text-blue-700">
                <NavLink to="/" className={({isActive}) => `${isActive ? 'text-blue-800' : 'text-black  border-transparent'} transition-all border-b-2`}>Home</NavLink>

                <NavLink to="/contact" className={({isActive}) => 
                `${isActive ? 'text-blue-800  border-blue-500' : 'text-black border-transparent'} transition-all border-b-2
                `}>
                    Contact
                </NavLink>

                <NavLink to="/about" className={({isActive}) => `${isActive ? 'text-blue-800' : 'text-black border-transparent'} transition-all border-b-2`}>About</NavLink>
            </div>

            <div className="flex justify-center items-center gap-3 p-2">
                <p>Follow me on </p>
                <p className="cursor-pointer" onClick={() => window.location.href = "https://www.instagram.com/im33an_/"}><i className="ri-instagram-line"></i></p>
                <p className="cursor-pointer" onClick={() => window.location.href = "mailto:imran3111ahamd@gmai.com"}><i className="ri-mail-line"></i></p>
            </div>

        </nav>
    </>
}