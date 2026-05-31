export default function Navbar() {
    return <>

        <nav className="w-full font-serif flex justify-center items-center gap-3 h-11">
            <p className="cursor-pointer" onClick={()=>window.location.href="https://www.instagram.com/im33an_/"}><i className="ri-instagram-line"></i></p>
            <p className="cursor-pointer" onClick={()=>window.location.href="mailto:imran3111ahamd@gmai.com"}><i className="ri-mail-line"></i></p>
        </nav>
    
    </>
}