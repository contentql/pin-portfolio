import * as migration_20241220_080020_init from './20241220_080020_init';

export const migrations = [
  {
    up: migration_20241220_080020_init.up,
    down: migration_20241220_080020_init.down,
    name: '20241220_080020_init'
  },
];
