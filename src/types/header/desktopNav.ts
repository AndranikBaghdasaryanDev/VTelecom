import type { LanguageProps } from "../dashboard/language";

export interface DesktopNavProps {
    languages: LanguageProps[];
    selectedLang: any;
    setSelectedLang: (lang: any) => void;
    isLangOpen: boolean;
    setIsLangOpen: (v: boolean) => void;
    onSettingsClick: () => void;
}