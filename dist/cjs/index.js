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
    return (React__default["default"].createElement(IconButton, { label: colorScheme === "dark" ? "Light mode" : "Dark mode", onClick: () => toggleColorScheme(), sx: (theme) => ({
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[6],
        }) }, colorScheme === "dark" ? (React__default["default"].createElement(icons.IconSun, { size: 20, stroke: 1.5 })) : (React__default["default"].createElement(icons.IconMoonStars, { size: 20, stroke: 1.5 }))));
}

exports.ColorSchemeToggle = ColorSchemeToggle;
exports.IconButton = IconButton;
exports.TestComponent = TestComponent;
