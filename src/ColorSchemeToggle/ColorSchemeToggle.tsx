import React from 'react';
import { useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { IconButton } from '../IconButton/IconButton';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <IconButton
      label={colorScheme === 'dark' ? 'Light mode' : 'Dark mode'}
      onClick={() => toggleColorScheme()}
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
      })}
    >
      {colorScheme === 'dark' ? (
        <IconSun size={20} stroke={1.5} />
      ) : (
        <IconMoonStars size={20} stroke={1.5} />
      )}
    </IconButton>
  );
}
