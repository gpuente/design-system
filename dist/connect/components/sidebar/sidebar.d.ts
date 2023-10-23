/// <reference types="react" />
import { SidebarProps } from '@/powerhouse';
import { ConnectSidebarFooterProps } from './sidebar-footer';
import { ConnectSidebarHeaderProps } from './sidebar-header';
export interface ConnectSidebarProps extends Omit<SidebarProps, 'maxWidth' | 'minWidth'>, ConnectSidebarHeaderProps, ConnectSidebarFooterProps {
    maxWidth?: string;
    minWidth?: string;
}
export declare const ConnectSidebar: React.FC<ConnectSidebarProps>;
