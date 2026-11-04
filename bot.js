const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'cubelife.qzz.io',
    port: 25565,
    username: 'youssef_gaming',
    version: false
  });

  bot.on('spawn', () => {
    setTimeout(() => {
      bot.chat('/login youssef123$$$');
    }, 3000);
  });

  bot.on('end', () => {
    setTimeout(createBot, 5000);
  });

  bot.on('error', () => {
    setTimeout(createBot, 5000);
  });
}

createBot();
