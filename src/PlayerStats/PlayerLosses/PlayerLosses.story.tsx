import React from 'react';
import { PlayerLosses } from './PlayerLosses';

export default { title: 'PlayerStats/Losses' };

export function WithNoWin() {
  return <PlayerLosses losses={0} />;
}

export function WithAValidWinValue() {
  return <PlayerLosses losses={1} />;
}

export function WithNegative() {
  return <PlayerLosses losses={-1} />;
}

export function WithUndefined() {
  return <PlayerLosses losses={undefined} />;
}

export function WithNull() {
  return <PlayerLosses losses={null} />;
}
