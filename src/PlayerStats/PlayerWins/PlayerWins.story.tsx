import React from 'react';
import { PlayerWins } from './PlayerWins';

export default { title: 'PlayerStats/Wins' };

export function WithNoWin() {
  return <PlayerWins wins={0} />;
}

export function WithAValidWinValue() {
  return <PlayerWins wins={1} />;
}

export function WithNegative() {
  return <PlayerWins wins={-1} />;
}

export function WithUndefined() {
  return <PlayerWins wins={undefined} />;
}

export function WithNull() {
  return <PlayerWins wins={null} />;
}
