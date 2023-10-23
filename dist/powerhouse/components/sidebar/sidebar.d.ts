/// <reference types="react" />
export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    collapsed: boolean;
    maxWidth: string;
    minWidth: string;
}
export interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare function SidebarHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare function SidebarFooter({ className, ...props }: SidebarFooterProps): import("react/jsx-runtime").JSX.Element;
export declare const Sidebar: React.FC<SidebarProps>;
