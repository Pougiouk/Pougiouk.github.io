import { useState, useEffect } from 'react';
export default function SwitchTheme() {
  const [CurentTheme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (CurentTheme == 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', CurentTheme);
    document.body.className = CurentTheme;
  }, [CurentTheme]);
  return (
    <div className="ThemeToggleContainer" data-theme={CurentTheme}>
      <button onClick={toggleTheme}></button>
    </div>
  );
}