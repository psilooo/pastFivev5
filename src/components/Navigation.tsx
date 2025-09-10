import React from 'react';

interface NavigationProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, setCurrentSection }) => {
  const navItems = ['home', 'work', 'about', 'contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-10100 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="relative">
            {/* Animated Asterisk */}
            <div className="asterisk-container">
              <span className="asterisk-main text-3xl md:text-4xl font-bold">✦</span>
              <span className="asterisk-orbit asterisk-orbit-1 text-xs">•</span>
              <span className="asterisk-orbit asterisk-orbit-2 text-xs">•</span>
              <span className="asterisk-orbit asterisk-orbit-3 text-xs">•</span>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setCurrentSection(item)}
                className={`font-courier text-sm uppercase transition-all duration-300 ${
                  currentSection === item
                    ? 'text-white'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                <span className="relative">
                  {item}
                  {currentSection === item && (
                    <span className="absolute -bottom-2 left-0 w-full h-px bg-white animate-pulse" />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
