export interface SettingsSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    theme: 'light' | 'dark';
    onThemeChange: (mode: 'light' | 'dark') => void;
}