import React from 'react';
import { useMantineTheme, Tooltip, ActionIcon, useMantineColorScheme, Text } from '@mantine/core';
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
    return (React.createElement(IconButton, { label: colorScheme === 'dark' ? 'Light mode' : 'Dark mode', onClick: () => toggleColorScheme(), sx: (theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        }) }, colorScheme === 'dark' ? (React.createElement(IconSun, { size: 20, stroke: 1.5 })) : (React.createElement(IconMoonStars, { size: 20, stroke: 1.5 }))));
}

const PlayerLosses = ({ losses }) => {
    let content = '-';
    let color;
    if (losses !== undefined && losses !== null) {
        const lossesNumber = Number(losses);
        if (!isNaN(lossesNumber) && lossesNumber >= 0) {
            content = lossesNumber + 'L';
            color = 'red';
        }
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { color: color }, content)));
};

const PlayerWins = ({ wins }) => {
    let content = '-';
    let color;
    if (wins !== undefined && wins !== null) {
        const winsNumber = Number(wins);
        if (!isNaN(winsNumber) && winsNumber >= 0) {
            content = winsNumber + 'W';
            color = 'green';
        }
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { color: color }, content)));
};

const PlayerWinRatio = ({ wins, losses }) => {
    let content = '-';
    if (wins !== undefined && wins !== null && losses !== undefined && losses !== null) {
        const winsNumber = Number(wins);
        const lossesNumber = Number(losses);
        if (!isNaN(winsNumber) &&
            winsNumber >= 0 &&
            !isNaN(lossesNumber) &&
            lossesNumber >= 0 &&
            lossesNumber + winsNumber > 0) {
            content = ((winsNumber / (winsNumber + lossesNumber)) * 100).toFixed(0) + '%';
        }
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, null, content)));
};

const PlayerRank = ({ rank }) => {
    let content = '-';
    if (rank !== undefined && rank !== null) {
        const rankNumber = Number(rank);
        if (!isNaN(rankNumber) && rankNumber > -1) {
            content = '#' + rankNumber;
        }
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, null, content)));
};

const PlayerStreak = ({ streak }) => {
    let content = '-';
    let color;
    if (streak !== undefined && streak !== null) {
        const streakNumber = Number(streak);
        if (!isNaN(streakNumber)) {
            content = '' + streakNumber;
            if (streakNumber > 0) {
                color = 'green';
                content = '+' + streakNumber;
            }
            if (streakNumber < 0) {
                color = 'red';
            }
        }
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { color: color }, content)));
};

export { ColorSchemeToggle, IconButton, PlayerLosses, PlayerRank, PlayerStreak, PlayerWinRatio, PlayerWins, TestComponent };
