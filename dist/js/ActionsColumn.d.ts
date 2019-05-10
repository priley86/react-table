import * as React from 'react';
import { ItemProps } from '@patternfly/react-core';
export declare enum DropdownPosition {
    right = "right",
    left = "left"
}
export declare enum DropdownDirection {
    up = "up",
    down = "down"
}
export interface ActionsItem extends ItemProps {
    isSeparator: boolean;
    itemKey: string;
}
export interface ActionsColumnProps {
    children?: React.ReactNode;
    items: ActionsItem[];
    isDisabled?: boolean;
    dropdownPosition?: DropdownPosition;
    dropdownDirection?: DropdownDirection;
    rowData?: object | undefined;
    extraData?: {
        rowIndex: number;
        columnIndex: number;
        column: object;
        property: string;
    };
}
export interface ActionsColumnState {
    isOpen: boolean;
}
declare class ActionsColumn extends React.Component<ActionsColumnProps, ActionsColumnState> {
    static defaultProps: {
        children: null;
        items: never[];
        dropdownPosition: DropdownPosition;
        dropdownDirection: DropdownDirection;
        rowData: {};
        extraData: {};
    };
    constructor(props: ActionsColumnProps);
    onToggle: (isOpen: boolean) => void;
    onSelect: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, onClick: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, rowIndex: number | undefined, rowData: object | undefined, extraData: object | undefined) => void) | undefined) => void;
    render(): JSX.Element;
}
export default ActionsColumn;
