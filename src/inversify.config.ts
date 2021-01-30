import { Container } from 'inversify';
import 'reflect-metadata';
const rootContainer = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export { rootContainer };
