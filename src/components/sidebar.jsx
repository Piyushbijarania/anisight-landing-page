export function Sidebar () {
    return (
        <div className="fixed top-0 left-0 h-screen w-64 bg-black/10 backdrop-blur-sm text-white z-50 p-6 ">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-amber-400">AniSight AI</h2>
                <p className="text-gray-300 text-sm mt-2">Navigation Menu</p>
            </div>
            
            <nav className="space-y-6">
                <a href="#home" className="block text-white hover:text-amber-400 transition-colors duration-300 text-lg">
                    <i className="ri-home-line mr-3"></i>Home
                </a>
                <a href="#about" className="block text-white hover:text-amber-400 transition-colors duration-300 text-lg">
                    <i className="ri-information-line mr-3"></i>About
                </a>
                <a href="#services" className="block text-white hover:text-amber-400 transition-colors duration-300 text-lg">
                    <i className="ri-service-line mr-3"></i>Services
                </a>
                <a href="#portfolio" className="block text-white hover:text-amber-400 transition-colors duration-300 text-lg">
                    <i className="ri-folder-line mr-3"></i>Portfolio
                </a>
                <a href="#contact" className="block text-white hover:text-amber-400 transition-colors duration-300 text-lg">
                    <i className="ri-mail-line mr-3"></i>Contact
                </a>
            </nav>
            
            <div className="absolute bottom-6 left-6 right-6">
                <div className="border-t border-amber-400/20 pt-4">
                    <p className="text-gray-400 text-xs">© 2025 AniSight AI</p>
                </div>
            </div>
        </div>
    );
}