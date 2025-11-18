import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
    { id: 'about', icon: '👨‍💻', label: 'About' },
    { id: 'skills', icon: '⚡', label: 'Skills' },
    { id: 'projects', icon: '🚀', label: 'Projects' },
    { id: 'achievements', icon: '🏆', label: 'Awards' },
    { id: 'contact', icon: '📬', label: 'Contact' },
];

const FloatingDock = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                className="flex items-end gap-2 px-4 py-3 rounded-2xl glass border border-white/10 bg-black/20 shadow-2xl backdrop-blur-xl"
                onMouseLeave={() => setHoveredIndex(null)}
            >
                {navItems.map((item, index) => (
                    <DockItem
                        key={item.id}
                        item={item}
                        index={index}
                        hoveredIndex={hoveredIndex}
                        setHoveredIndex={setHoveredIndex}
                        onClick={() => scrollToSection(item.id)}
                    />
                ))}
            </motion.div>
        </div>
    );
};

const DockItem = ({ item, index, hoveredIndex, setHoveredIndex, onClick }: any) => {
    let scale = 1;

    if (hoveredIndex !== null) {
        const distance = Math.abs(hoveredIndex - index);
        if (distance === 0) scale = 1.5;
        else if (distance === 1) scale = 1.2;
        else if (distance === 2) scale = 1.1;
    }

    return (
        <motion.button
            onClick={onClick}
            onMouseEnter={() => setHoveredIndex(index)}
            animate={{ scale }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative group flex flex-col items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
        >
            <span className="text-xl">{item.icon}</span>

            {/* Tooltip */}
            <span className="absolute -top-10 px-2 py-1 text-xs font-medium text-white bg-black/80 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                {item.label}
            </span>
        </motion.button>
    );
};

export default FloatingDock;
