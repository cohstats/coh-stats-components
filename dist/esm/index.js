import * as e from 'react';
import e__default from 'react';
import { useMantineTheme, Tooltip, ActionIcon, useMantineColorScheme } from '@mantine/core';

function TestComponent({ color, children }) {
    const theme = useMantineTheme();
    return (e__default.createElement("div", { style: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.white : theme.black,
            color: theme.colors[color][6],
        } }, children));
}

const IconButton = ({ label, children, className, onClick, sx, }) => (e__default.createElement(e__default.Fragment, null,
    e__default.createElement(Tooltip, { label: label },
        e__default.createElement(ActionIcon, { onClick: onClick, size: "lg", variant: "default", radius: "md", className: className, sx: sx }, children))));

function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);}return e},t.apply(this,arguments)}function o(e,t){if(null==e)return {};var o,r,n=function(e,t){if(null==e)return {};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o]);}return n}var Tve=["size","color","stroke"];function Uve(r){var n=r.size,l=void 0===n?24:n,a=r.color,i=void 0===a?"currentColor":a,c=r.stroke,s=void 0===c?2:c,h=o(r,Tve);return e.createElement("svg",t({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-moon-stars",width:l,height:l,viewBox:"0 0 24 24",strokeWidth:s,stroke:i,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},h),e.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.createElement("path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"}),e.createElement("path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"}),e.createElement("path",{d:"M19 11h2m-1 -1v2"}))}var nIe=["size","color","stroke"];function lIe(r){var n=r.size,l=void 0===n?24:n,a=r.color,i=void 0===a?"currentColor":a,c=r.stroke,s=void 0===c?2:c,h=o(r,nIe);return e.createElement("svg",t({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-sun",width:l,height:l,viewBox:"0 0 24 24",strokeWidth:s,stroke:i,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},h),e.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.createElement("circle",{cx:12,cy:12,r:4}),e.createElement("path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"}))}

function ColorSchemeToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    return (e__default.createElement(IconButton, { label: colorScheme === "dark" ? "Light mode" : "Dark mode", onClick: () => toggleColorScheme(), sx: (theme) => ({
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[6],
        }) }, colorScheme === "dark" ? (e__default.createElement(lIe, { size: 20, stroke: 1.5 })) : (e__default.createElement(Uve, { size: 20, stroke: 1.5 }))));
}

export { ColorSchemeToggle, IconButton, TestComponent };
