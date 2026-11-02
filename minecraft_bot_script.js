const mineflayer = require('mineflayer');

// إعدادات البوت والسيرفر
const serverConfig = {
    host: 'YOUR_SERVER_IP',      // اكتب هنا الآيبي الخاص بالسيرفر
    port: 25565,                 // بورت السيرفر (الافتراضي 25565)
    username: 'SohaBot',         // اسم البوت داخل اللعبة
    version: '1.21.1'            // إصدار اللعبة
};

function createBot() {
    console.log(`جاري محاولة الاتصال بالسيرفر ${serverConfig.host}...`);
    const bot = mineflayer.createBot(serverConfig);

    // عند دخول البوت بنجاح للسيرفر
    bot.on('spawn', () => {
        console.log('تم دخول البوت إلى السيرفر بنجاح!');
        
        // الانتظار لمدة 3 ثوانٍ ثم إرسال أمر التسجيل في الشات
        setTimeout(() => {
            bot.chat('/login soha123$$$');
            console.log('تم إرسال أمر تسجيل الدخول: /login soha123$$$');
        }, 3000);
    });

    // عند طرد البوت من السيرفر (Kick)
    bot.on('kicked', (reason) => {
        console.log(`تم طرد البوت من السيرفر بسبب: ${reason}`);
    });

    // عند حدوث خطأ في الاتصال
    bot.on('error', (err) => {
        console.log('حدث خطأ في الاتصال:', err);
    });

    // عند انقطاع الاتصال أو إغلاق السيرفر
    bot.on('end', () => {
        console.log('انقطع الاتصال بالسيرفر. جاري إعادة المحاولة خلال 10 ثوانٍ...');
        setTimeout(createBot, 10000); // محاولة إعادة الدخول بلا حدود كل 10 ثوانٍ
    });
}

// تشغيل البوت لأول مرة
createBot();