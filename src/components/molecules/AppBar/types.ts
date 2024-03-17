import {ReactNode} from "react";

export interface DrawerInterface {
    children: ReactNode;
    anchor: 'left' | 'top' | 'right' | 'bottom';
    open: boolean;
    onClose: () => void;
    width?: string;
}