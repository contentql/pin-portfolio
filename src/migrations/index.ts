import * as migration_20241223_161056 from './20241223_161056';
import * as migration_20250109_114015 from './20250109_114015';

export const migrations = [
  {
    up: migration_20241223_161056.up,
    down: migration_20241223_161056.down,
    name: '20241223_161056',
  },
  {
    up: migration_20250109_114015.up,
    down: migration_20250109_114015.down,
    name: '20250109_114015'
  },
];
