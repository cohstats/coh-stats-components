import React from 'react';
import { PlayerRank } from './PlayerRank';

export default { title: 'PlayerStats/Rank' };

export function WithAValidRank() {
  return <PlayerRank rank={1} />;
}

export function WithNegativeOne() {
  return <PlayerRank rank={-1} />;
}

export function WithUndefined() {
  return <PlayerRank rank={undefined} />;
}

export function WithNull() {
  return <PlayerRank rank={null} />;
}
