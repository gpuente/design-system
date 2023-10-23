import { ButtonProps as AriaButtonProps } from 'react-aria-components';
export interface ButtonProps extends AriaButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
