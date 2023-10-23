/// <reference types="react" />
import { DropEvent } from 'react-aria';
export interface DropTargetRenderProps {
    isDropTarget: boolean;
}
export interface DropTargetProps<Target = unknown, Item = unknown> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    target: Target;
    children?: (props: DropTargetRenderProps) => React.ReactNode;
    onDropEvent: (item: Item, target: Target, event: DropEvent) => void;
    dataType?: string;
}
export declare function DropTarget<Target = unknown, Item = unknown>(props: DropTargetProps<Target, Item>): import("react/jsx-runtime").JSX.Element | null;
