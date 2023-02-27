import React from 'react';
import { PlayerStreak } from './PlayerStreak';

export default { title: 'PlayerStats/Streak' };

export function WithNoStreak() {
  return <PlayerStreak streak={0} />;
}

export function WithPositiveStreak() {
  return <PlayerStreak streak={1} />;
}

export function WithNegativeStreak() {
  return <PlayerStreak streak={-1} />;
}

export function WithUndefined() {
  return <PlayerStreak streak={undefined} />;
}

export function WithNull() {
  return <PlayerStreak streak={null} />;
}
