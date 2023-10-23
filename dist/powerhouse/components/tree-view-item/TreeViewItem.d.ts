import React from 'react';
export interface TreeViewItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
    label: string;
    children?: React.ReactNode;
    initialOpen?: boolean;
    expandedIcon?: string;
    icon?: string;
    level?: number;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onOptionsClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    secondaryIcon?: string;
    buttonProps?: React.HTMLAttributes<HTMLDivElement>;
    optionsButtonProps?: React.HTMLAttributes<HTMLDivElement>;
}
export declare const TreeViewItem: React.FC<TreeViewItemProps>;
