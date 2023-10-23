import { TypographySize } from './styles';
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
}
export declare function TextInput(props: TextInputProps): import("react/jsx-runtime").JSX.Element;
export {};
