import { CSSProperties } from 'react';
type ColorTheme = 'light' | 'dark';
declare const colorScheme: {
    light: {
        color: string;
        bgColor: string;
        border: string;
        shadow: string;
        inputColor: string;
        inputBg: string;
    };
    dark: {
        color: string;
        bgColor: string;
        border: string;
        shadow: string;
        inputColor: string;
        inputBg: string;
    };
};
type TypographySize = 'huge' | 'larger' | 'large' | 'medium' | 'small' | 'smaller' | 'tiny';
type TypographyScheme = {
    [K in TypographySize]: CSSProperties;
};
declare const typographySizes: TypographyScheme;
declare const inputStyle: (mode?: keyof typeof colorScheme, focus?: boolean) => {
    width: string;
    border: string;
    boxSizing: "border-box";
    backgroundColor: string;
    outline: string;
    color: string;
    resize: "none";
    fontFamily: "Roboto, sans-serif";
    overflow: "hidden";
    lineHeight: string;
};
export { colorScheme, inputStyle, typographySizes };
export type { ColorTheme, TypographyScheme, TypographySize };
