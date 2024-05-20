import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex justify-center items-center w-full h-16 bg-white shadow-lg">
            <div className="flex justify-between items-center w-4/5 h-full">
                <p className="text-violet-600 font-bold text-2xl">Micro-Saas</p>
                <nav className="flex justify-center items-center gap-5">
                    <Link className="text-pink-600 font-medium" to="/Instagram">Instagram</Link>
                    <Link className="text-red-600 font-medium">YouTube</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;