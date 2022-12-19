import React from 'react';
import { useMantineTheme } from '@mantine/core';

function TestComponent({ color, children }) {
    const theme = useMantineTheme();
    return (React.createElement("div", { style: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.white : theme.black,
            color: theme.colors[color][6],
        } }, children));
}

export { TestComponent };
