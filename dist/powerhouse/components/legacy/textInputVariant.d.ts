import { TypographySize } from './stylesVariant';
interface TextInputProps {
    theme: 'light' | 'dark';
    size?: TypographySize;
    horizontalLine?: boolean;
    id?: string;
    value?: string;
    placeholder?: string;
    autoFocus?: boolean;
    clearOnSubmit?: boolean;
    onSubmit?: {
        (value: string): void;
    };
    onEmpty?: {
        (id: string): void;
    };
    labelStyle?: boolean;
}
export declare function TextInputVariant(props: TextInputProps): import("react/jsx-runtime").JSX.Element;
export {};
