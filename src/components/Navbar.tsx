import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 top-0 left-0 bg-white/10 backdrop-blur-md border-b border-white/10 px-6 py-4 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    Aanspire<span className="text-[#20B2AA]">.</span>
                </Link>
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
                    <Link href="#about" className="hover:text-white transition-colors">About</Link>
                    <Link href="#products" className="hover:text-white transition-colors">Products</Link>
                    <Link href="#vision" className="hover:text-white transition-colors">Vision</Link>
                    <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
                </div>
                <a href="mailto:contact@aanspire.com" className="bg-[#20B2AA] hover:bg-[#1a908a] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-[#20B2AA]/20 inline-block">
                    Let's Talk
                </a>
            </div>
        </nav>
    );
}
