export interface HeaderProps {
    theme: 'light' | 'dark';
    onThemeChange: (mode: 'light' | 'dark') => void;
}