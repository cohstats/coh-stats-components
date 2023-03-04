'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var icons = require('@tabler/icons');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function TestComponent({ color, children }) {
    const theme = core.useMantineTheme();
    return (React__default["default"].createElement("div", { style: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.white : theme.black,
            color: theme.colors[color][6],
        } }, children));
}

const IconButton = ({ label, children, className, onClick, sx, }) => (React__default["default"].createElement(React__default["default"].Fragment, null,
    React__default["default"].createElement(core.Tooltip, { label: label },
        React__default["default"].createElement(core.ActionIcon, { onClick: onClick, size: "lg", variant: "default", radius: "md", className: className, sx: sx }, children))));

function ColorSchemeToggle() {
    const { colorScheme, toggleColorScheme } = core.useMantineColorScheme();
    return (React__default["default"].createElement(IconButton, { label: colorScheme === 'dark' ? 'Light mode' : 'Dark mode', onClick: () => toggleColorScheme(), sx: (theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        }) }, colorScheme === 'dark' ? (React__default["default"].createElement(icons.IconSun, { size: 20, stroke: 1.5 })) : (React__default["default"].createElement(icons.IconMoonStars, { size: 20, stroke: 1.5 }))));
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
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(core.Text, { color: color }, content)));
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
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(core.Text, { color: color }, content)));
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
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(core.Text, null, content)));
};

const PlayerRank = ({ rank }) => {
    let content = '-';
    if (rank !== undefined && rank !== null) {
        const rankNumber = Number(rank);
        if (!isNaN(rankNumber) && rankNumber > -1) {
            content = '#' + rankNumber;
        }
    }
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(core.Text, null, content)));
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
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(core.Text, { color: color }, content)));
};

exports.ColorSchemeToggle = ColorSchemeToggle;
exports.IconButton = IconButton;
exports.PlayerLosses = PlayerLosses;
exports.PlayerRank = PlayerRank;
exports.PlayerStreak = PlayerStreak;
exports.PlayerWinRatio = PlayerWinRatio;
exports.PlayerWins = PlayerWins;
exports.TestComponent = TestComponent;
