import React from 'react';
import { TYPES, Warrior } from '../../di-test';
import { myContainer } from '../../inversify.config';

export default function Home() {
  const ninja = myContainer.get<Warrior>(TYPES.Warrior);
  return (
    <div className="home-root">
      fight: {ninja.fight()}
      sneak: {ninja.sneak()}
    </div>
  );
}
