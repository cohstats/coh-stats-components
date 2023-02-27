import React from 'react';
import { PlayerWinRatio } from './PlayerWinRatio';

export default { title: 'PlayerStats/WinRatio' };

export function WithNoWinNoLoss() {
  return <PlayerWinRatio wins={0} losses={0} />;
}

export function Usage() {
  return <PlayerWinRatio wins={10} losses={5} />;
}

export function WithNegativeWins() {
  return <PlayerWinRatio wins={-1} losses={10} />;
}

export function WithNegativeLosses() {
  return <PlayerWinRatio wins={10} losses={-1} />;
}

export function WithUndefinedWins() {
  return <PlayerWinRatio wins={undefined} losses={10} />;
}

export function WithUndefinedLosses() {
  return <PlayerWinRatio wins={10} losses={undefined} />;
}

export function WithNullWins() {
  return <PlayerWinRatio wins={null} losses={10} />;
}

export function WithNullLosses() {
  return <PlayerWinRatio wins={10} losses={null} />;
}
