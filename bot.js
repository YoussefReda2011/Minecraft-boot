const mineflayer = require('mineflayer');

// إعدادات البوت والسيرفر
const serverConfig = {
    host:          ,          // اكتب الأي بي هنا بين العلامتين
    port: 25565,                   // بورت السيرفر
    username:          ,   // اكتب اسم البوت هنا
    version: '1.21.11'              // إصدار اللعبة
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
            console.log('تم إرسال أمر تسجيل الدخول');
        }, 3000);
    });

    // عند طرد البوت من السيرفر
    bot.on('kicked', (reason) => {
        console.log(`تم طرد البوت من السيرفر بسبب: ${reason}`);
        reconnect();
    });

    // عند حدوث خطأ في الاتصال
    bot.on('error', (err) => {
        console.log(`حدث خطأ في الاتصال: ${err}`);
        reconnect();
    });

    // عند انقطاع الاتصال أو إغلاق السيرفر
    bot.on('end', () => {
        console.log('انقطع الاتصال بالسيرفر، جاري إعادة المحاولة...');
        reconnect();
    });
}

// دالة إعادة الاتصال تلقائياً بعد 5 ثوانٍ لو حصلت أي مشكلة
function reconnect() {
    console.log('إعادة المحاولة خلال 5 ثوانٍ...');
    setTimeout(() => {
        createBot();
    }, 5000);
}

createBot();
