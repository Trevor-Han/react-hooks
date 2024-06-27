import { SetStateAction } from 'react'

type Placement = 'top' | 'bottom' | 'left' | 'right';
type Style = 'link' | 'text' | 'default' | 'primary' | 'dashed' | undefined
interface HeaderState {
    name?: string;
    subName?: string;
    placement?: Placement;
    onPress?: () => void;
    handleSidenavColor?: (color: SetStateAction<string>) => void;
    handleSidenavType?: (type: SetStateAction<string>) => void;
    handleFixedNavbar?: (type: boolean | ((prevState: boolean) => boolean)) => void;
}

export type { HeaderState, Style }
