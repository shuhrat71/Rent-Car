const axios = require("axios");

const botToken = "8198171947:AAE5LeyTu0v9KYGFlJaG6drUV0RpyeGCfsI";  // Sizning bot tokeningiz
const chatId = "6287309235";      // Foydalanuvchining chat ID si

const sendMessage = async (message) => {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  try {
    await axios.post(url, {
      chat_id: chatId,
      text: message,
    });
    console.log("Xabar yuborildi!");
  } catch (error) {
    console.error("Xatolik:", error);
  }
};

// Xabar yuborish
sendMessage("Sizning ijarangiz tasdiqlanishi kutilmoqda.");
