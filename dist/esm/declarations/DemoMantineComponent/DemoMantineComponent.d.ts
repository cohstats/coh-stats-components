import React from 'react';
import { DefaultProps, MantineNumberSize, Selectors } from '@mantine/core';
export interface DemoMantineComponentStylesParams {
    radius?: MantineNumberSize;
}
declare const useStyles: (params: DemoMantineComponentStylesParams, options?: import("@mantine/core").UseStylesOptions<string>) => {
    classes: {
        root: string;
    };
    cx: (...args: any) => string;
    theme: import("@mantine/core").MantineTheme;
};
declare type DemoMantineComponentStylesNames = Selectors<typeof useStyles>;
export interface DemoMantineComponentProps extends DefaultProps<DemoMantineComponentStylesNames, DemoMantineComponentStylesParams> {
    radius?: MantineNumberSize;
}
export declare const DemoMantineComponent: React.FC<DemoMantineComponentProps>;
export {};
//# sourceMappingURL=DemoMantineComponent.d.ts.map