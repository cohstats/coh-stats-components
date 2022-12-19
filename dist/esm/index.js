import React from 'react';
import { useMantineTheme, Tooltip, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

function TestComponent({ color, children }) {
    const theme = useMantineTheme();
    return (React.createElement("div", { style: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.white : theme.black,
            color: theme.colors[color][6],
        } }, children));
}

const IconButton = ({ label, children, className, onClick, sx, }) => (React.createElement(React.Fragment, null,
    React.createElement(Tooltip, { label: label },
        React.createElement(ActionIcon, { onClick: onClick, size: "lg", variant: "default", radius: "md", className: className, sx: sx }, children))));

function ColorSchemeToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    return (React.createElement(IconButton, { label: colorScheme === "dark" ? "Light mode" : "Dark mode", onClick: () => toggleColorScheme(), sx: (theme) => ({
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[6],
        }) }, colorScheme === "dark" ? (React.createElement(IconSun, { size: 20, stroke: 1.5 })) : (React.createElement(IconMoonStars, { size: 20, stroke: 1.5 }))));
}

export { ColorSchemeToggle, IconButton, TestComponent };
