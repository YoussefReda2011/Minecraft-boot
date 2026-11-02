const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'crack.restcraft.net',
    port: 25565,
    username: 'Soha_Bot',
    version: false
  });

  bot.on('spawn', () => {
    setTimeout(() => {
      bot.chat('/login soha123$$$');
    }, 2000);
  });

  bot.on('end', () => {
    setTimeout(createBot, 5000);
  });

  bot.on('error', () => {
    setTimeout(createBot, 5000);
  });
}

createBot();
