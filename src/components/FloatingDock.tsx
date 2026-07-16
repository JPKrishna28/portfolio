import ThemeToggle from './ThemeToggle';

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Awards' },
    { id: 'contact', label: 'Contact' },
];

const FloatingDock = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur border-b border-border">
            <div className="container mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
                <button
                    onClick={() => scrollToSection('home')}
                    className="text-sm font-semibold tracking-tight"
                >
                    Jaswanth Krishna
                </button>
                <div className="flex items-center gap-1 overflow-x-auto">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-secondary transition-colors whitespace-nowrap"
                        >
                            {item.label}
                        </button>
                    ))}
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default FloatingDock;
