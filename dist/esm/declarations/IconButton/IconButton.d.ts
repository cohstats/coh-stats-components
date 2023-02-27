import { Sx } from '@mantine/core';
import React, { MouseEventHandler } from 'react';
export interface IconButtonProps {
    label: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    sx?: Sx | (Sx | undefined)[];
}
export declare const IconButton: React.FC<IconButtonProps>;
//# sourceMappingURL=IconButton.d.ts.map