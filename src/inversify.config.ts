import { Container } from "inversify";
import { Katana, Ninja, Shuriken, ThrowableWeapon, TYPES, Warrior, Weapon } from './di-test';
const myContainer = new Container();
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { myContainer };