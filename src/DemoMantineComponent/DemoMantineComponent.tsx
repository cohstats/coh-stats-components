import React from 'react';
import {
  createStyles,
  DefaultProps,
  MantineNumberSize,
  Selectors,
  Box,
  useComponentDefaultProps,
} from '@mantine/core';

// Style params are optional
export interface DemoMantineComponentStylesParams {
  radius?: MantineNumberSize;
}

const useStyles = createStyles((theme, { radius }: DemoMantineComponentStylesParams) => ({
  // add all styles as usual here
  root: {
    borderRadius: theme.fn.radius(radius),
  },
}));

// This type will contain a union with all selectors defined in useStyles,
type DemoMantineComponentStylesNames = Selectors<typeof useStyles>;

export interface DemoMantineComponentProps
  extends DefaultProps<DemoMantineComponentStylesNames, DemoMantineComponentStylesParams> {
  radius?: MantineNumberSize;
}

const defaultProps: Partial<DemoMantineComponentProps> = {
  radius: 6,
};

export const DemoMantineComponent: React.FC<DemoMantineComponentProps> = (props) => {
  const { classNames, styles, unstyled, radius, className, ...others } = useComponentDefaultProps(
    'DemoMantineComponent',
    defaultProps,
    props
  );
  const { classes } = useStyles(
    // First argument of useStyles is styles params
    { radius },
    // Second argument is responsible for styles api integration
    { name: 'DemoMantineComponent', classNames, styles, unstyled }
  );

  // ...others prop on root component from mantine like Box will add sx, padding (pt, pb, px, etc.) and margin (my, m, mt, etc.) props support
  return (
    <Box className={classes.root} {...others}>
      Awesome component
    </Box>
  );
};

// for more information read here: https://mantine.dev/guides/custom-components/
