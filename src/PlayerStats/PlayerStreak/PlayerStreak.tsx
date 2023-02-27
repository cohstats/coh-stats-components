import { MantineColor, Text } from '@mantine/core';
import React from 'react';

export interface PlayerStreakProps {
  streak: unknown;
}

export const PlayerStreak: React.FC<PlayerStreakProps> = ({ streak }) => {
  let content = '-';
  let color: MantineColor | undefined;
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
  return (
    <>
      <Text color={color}>{content}</Text>
    </>
  );
};
