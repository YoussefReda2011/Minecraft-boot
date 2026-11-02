const mineflayer = require('mineflayer');

const serverConfig = {
    host: 'اكتب_الايبى_هنا',
    port: 25565,
    username: 'اكتب_اسم_البوت_هنا',
    version: '1.21.1'
};

function createBot() {
    console.log(`جاري محاولة الاتصال بالسيرفر ${serverConfig.host}...`);
    const bot = mineflayer.createBot(serverConfig);

    bot.on('spawn', () => {
        console.log('تم دخول البوت إلى السيرفر بنجاح!');
        
        setTimeout(() => {
            bot.chat('/login soha123$$$');
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
