import { MODULE_NAME, SHORT_MODULE_NAME, NAMESPACE } from './constants.js';

export async function bossLootSettings() {
  game.settings.register(MODULE_NAME, 'moduleVersion', {
    name: 'Module Version',
    hint: 'Used to track the version of the module for update purposes.',
    scope: 'world',
    config: false,
    type: String,
    default: '',
  });
  game.settings.register(MODULE_NAME, 'assetsPath', {
    name: 'Boss Loot Assets Path',
    hint: "Change if your blfx module assets are hosted externally (e.g., on an S3 bucket). Enter the exact path without a trailing slash (e.g., 'https://examplebucket.s3.amazonaws.com/bossloot'). The default is 'modules', which refers to the local directory. Do not leave this field blank. This requires reloading the game to take effect.",
    scope: 'world',
    config: true,
    type: String,
    default: 'modules',
    restricted: true,
    requiresReload: true,
  });
}
