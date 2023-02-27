import React from 'react';
import { DemoMantineComponent } from './DemoMantineComponent';

export default { title: 'DemoMantineComponent' };

export function WithClassNameRenaming() {
  return <DemoMantineComponent classNames={{ root: 'root-class' }} />;
}

export function WithSXUsage() {
  return <DemoMantineComponent sx={{ backgroundColor: 'orange' }} />;
}

export function WithStylesUsage() {
  return (
    <DemoMantineComponent
      styles={(theme) => ({
        root: { color: theme.colors.gray[5] },
      })}
    />
  );
}
