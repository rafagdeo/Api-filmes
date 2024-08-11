import { LiaAdSolid } from "react-icons/lia";

export default function Header() {
    return (
        <header className="flex justify-between itens-center py-6 px-10 bg-[#0f0f0f]">
            <div className="logo-page">
                <a className="header-logo text-lg font-bold" href="/">Rafael.dev
                </a>
            </div>
            <nav className="content-center">
                <ul className="flex space-x-5 items-center">
                    <li><a href="/" className="hover:text-zinc-300" >Home</a></li>
                    <li><a href="/" className="hover:text-zinc-300" >TV show</a></li>
                    <li><a href="/" className="hover:text-zinc-300" >Filmes</a></li>
                </ul>
            </nav>
        </header>
    )
}