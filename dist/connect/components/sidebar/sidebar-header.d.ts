/// <reference types="react" />
import { SidebarHeaderProps } from '@/powerhouse';
export interface ConnectSidebarHeaderProps extends SidebarHeaderProps {
    onToggle: () => void;
}
export declare const ConnectSidebarHeader: React.FC<ConnectSidebarHeaderProps>;
