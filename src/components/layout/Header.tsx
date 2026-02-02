import { useState, useEffect } from 'react';
import { Search, Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true); // Default to dark as per design

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: '산업 트렌드', href: '/category/industry-trends' },
        { name: '기술 트렌드', href: '/category/tech-trends' },
        { name: '제품 리서치', href: '/category/product-research' },
        { name: '거버넌스', href: '/category/governance' },
        { name: '커뮤니티', href: '/community' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
                ? 'bg-navy-900/90 backdrop-blur-md border-slate-800 py-3'
                : 'bg-transparent border-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    {/* Placeholder for T Scientific Logo - Text for now */}
                    <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
                        <span className="text-primary-blue">T</span>ech<span className="text-primary-blue">Sientific</span> <span className="text-sm font-normal text-slate-400 ml-1">Tech Blog</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-sm font-medium text-slate-300 hover:text-primary-blue transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="relative">
                        <Search className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                    </div>
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="p-2 rounded-full hover:bg-slate-800 transition-colors"
                    >
                        {isDark ? <Moon className="w-5 h-5 text-purple-accent" /> : <Sun className="w-5 h-5 text-yellow-500" />}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-navy-900 border-t border-slate-800 overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-slate-300 hover:text-primary-blue py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
