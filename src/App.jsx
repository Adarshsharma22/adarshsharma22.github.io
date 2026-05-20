import { useState, useEffect } from 'react';
import { Home } from './Pages/Home';
import { FloatingDock } from './Pages/FlotingDock';

export default function App() {
  const [activeTheme, setActiveTheme] = useState('dark');

  // This applies the theme to the <html> tag - Best practice
  useEffect(() => {
    if (activeTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [activeTheme]);

  return (
    <div className="min-h-screen bg-background bg-blue-100 md:bg-black/20 dark:bg-zinc-950 text-foreground transition-colors duration-500">
      <Home />
      <FloatingDock 
        currentTheme={activeTheme}
        onThemeToggle={() => 
          setActiveTheme(activeTheme === 'light' ? 'dark' : 'light')
        }
      />
      {/* FireFlies */}
          {[...Array(30)].map((_, i) => (
            <span
              key={i}
              className={`
                absolute rounded-full bg-cyan-400 z-0
                shadow-[0_0_10px_#22d3ee,0_0_20px_#22d3ee,0_0_40px_#22d3ee]
                animate-firefly
              `}
              style={{
                width: `${Math.random() * 6 + 4}px`,
                height: `${Math.random() * 6 + 4}px`,
                top: `${Math.random() * 300}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 5}s`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
    </div>
  );
}