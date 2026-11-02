const mineflayer = require('mineflayer');

const serverConfig = {
    host: 'crack.restcraft.net',
    port: 25565,
    username: 'youssef_gaming',
    version: '1.21.11'
};

function createBot() {
    console.log(`جاري محاولة الاتصال بالسيرفر ${serverConfig.host}...`);
    const bot = mineflayer.createBot(serverConfig);

    bot.on('spawn', () => {
        console.log('تم دخول البوت إلى السيرفر بنجاح!');
        
        setTimeout(() => {
            bot.chat('/login youssef123$$$');
            console.log('تم إرسال أمر تسجيل الدخول');
        }, 3000);
    });

    bot.on('kicked', (reason) => {
        console.log(`تم طرد البوت من السيرفر بسبب: ${reason}`);
        reconnect();
    });

    bot.on('error', (err) => {
        console.log(`حدث خطأ في الاتصال: ${err}`);
        reconnect();
    });

    bot.on('end', () => {
        console.log('انقطع الاتصال بالسيرفر، جاري إعادة المحاولة...');
        reconnect();
    });
}

function reconnect() {
    console.log('إعادة المحاولة خلال 5 ثوانٍ...');
    setTimeout(() => {
        createBot();
    }, 5000);
}

createBot();
