import * as migration_20241220_092420_init from './20241220_092420_init';

export const migrations = [
  {
    up: migration_20241220_092420_init.up,
    down: migration_20241220_092420_init.down,
    name: '20241220_092420_init'
  },
];
