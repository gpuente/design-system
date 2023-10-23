import { TreeViewItemProps, UseDraggableTargetProps } from '@/powerhouse';
import React from 'react';
export declare enum ItemType {
    Folder = "folder",
    File = "file",
    LocalDrive = "local-drive",
    NetworkDrive = "network-drive",
    PublicDrive = "public-drive"
}
export declare enum ItemStatus {
    Available = "available",
    AvailableOffline = "available-offline",
    Syncing = "syncing",
    Offline = "offline"
}
export interface TreeItem {
    id: string;
    label: string;
    type: ItemType;
    status?: ItemStatus;
    expanded?: boolean;
    children?: TreeItem[];
}
export interface ConnectTreeViewItemProps extends Pick<TreeViewItemProps, 'children' | 'onClick' | 'onOptionsClick' | 'buttonProps' | 'optionsButtonProps' | 'level'> {
    item: TreeItem;
    onDropEvent?: UseDraggableTargetProps<TreeItem>['onDropEvent'];
}
export declare const ConnectTreeViewItem: React.FC<ConnectTreeViewItemProps>;
