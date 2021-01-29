import { Container } from 'inversify';
import {
  Katana,
  Ninja,
  Shuriken,
  ThrowableWeapon,
  TYPES,
  Warrior,
  Weapon,
} from './di-test';
const rootContainer = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});
// myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
rootContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
rootContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { rootContainer };
