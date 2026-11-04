const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'cubelife.qzz.io', // أو آي بي سيرفرك الأساسي
    port: 25565,
    username: 'youssef_gaming', // اسم البوت الواحد
    version: '1.20.4', // إصدار مستقر وخفيف
    physicsEnabled: false // قفلنا فيزياء الحركة عشان نوفر استهلاك المعالج وما يحصلش كراش
  });

  bot.on('spawn', () => {
    console.log('[+] تم دخول البوت السيرفر وثبت مكانه بسلام.');
    
    // نستنى 4 ثواني لحد ما السيرفر يستقر وبعدها نبعت أمر تسجيل الدخول
    setTimeout(() => {
      bot.chat('/login youssef123$$$');
      console.log('[<] تم إرسال كلمة المرور بنجاح.');
    }, 4000);
  });

  bot.on('end', (reason) => {
    console.log(`[-] انقطع اتصال البوت (${reason}). إعادة محاولة خلال 30 ثانية...`);
    setTimeout(createBot, 30000); // 30 ثانية راحة للاستضافة عشان ماتضربش كراش
  });

  bot.on('error', (err) => {
    // تم كتم الأخطاء العابرة للحفاظ على نظافة الكونسول
  });
}

console.log('🚀 جاري إطلاق بوت الـ AFK الواحد بنظام الأمان والمحافظة على المعالج...');
createBot();
