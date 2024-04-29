import { MODULE_NAME, PREMIUM_MODULE_NAME, SHORT_MODULE_NAME, NAMESPACE } from './constants.js';
import { bossLootSettings } from './settings.js';
import { database, createDatabase } from './sequencer-resources.js';

Hooks.once('init', async function () {
  await bossLootSettings();
});

Hooks.once('ready', async function () {
  // For GM
  if (!game.user.isGM) return;

  const moduleVersion = game.modules.get(MODULE_NAME).version;
  const storedVersion = game.settings.get(MODULE_NAME, 'moduleVersion');

  if (storedVersion !== moduleVersion) {
    await game.settings.set(MODULE_NAME, 'moduleVersion', moduleVersion);
  }

  console.log(`${SHORT_MODULE_NAME} | Module loaded!`);
});

Hooks.once('sequencerReady', async () => {
  const premiumActive = game.modules.get(PREMIUM_MODULE_NAME)?.active;

  if (!premiumActive) {
    const path = game.settings.get(MODULE_NAME, 'assetsPath');
    await createDatabase(path);
    Sequencer.Database.registerEntries(NAMESPACE, database);
    console.log(`${SHORT_MODULE_NAME} | Free module database initialized.`);
  } else {
    console.log(`${SHORT_MODULE_NAME} | Premium module active. Free module database initialization skipped.`);
  }
});
