import React from 'react';
import { ConnectTreeViewItemProps, TreeItem } from '../tree-view-item';
export interface ConnectTreeViewProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onClick'> {
    items: TreeItem;
    onDropEvent?: ConnectTreeViewItemProps['onDropEvent'];
    onItemClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, item: TreeItem) => void;
    onItemOptionsClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, item: TreeItem) => void;
}
export declare const ConnectTreeView: React.FC<ConnectTreeViewProps>;
