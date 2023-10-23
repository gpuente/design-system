/// <reference types="react" />
import { DraggableRenderProps } from './draggable';
import { DropTargetProps, DropTargetRenderProps } from './drop-target';
export type DraggableTargetRenderProps = DraggableRenderProps & DropTargetRenderProps;
export interface DraggableTargetProps<Item = unknown> {
    item: Item;
    onDropEvent: DropTargetProps<Item, Item>['onDropEvent'];
    children: (props: DraggableTargetRenderProps) => React.ReactNode;
    dragNodeProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
    targetNodeProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
    dataType?: string;
}
export declare function DraggableTarget<Item = unknown>(props: DraggableTargetProps<Item>): import("react/jsx-runtime").JSX.Element;
