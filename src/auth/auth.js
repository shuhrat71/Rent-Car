<<<<<<< HEAD
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
=======
import axios from 'axios';

const botToken = "8198171947:AAE5LeyTu0v9KYGFlJaG6drUV0RpyeGCfsI";
const chatId = "6287309235";  // Foydalanuvchining chat ID si

const sendMessageWithButton = async () => {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const inlineKeyboard = {
    inline_keyboard: [
      [
        {
          text: "Tasdiqlash", 
          callback_data: "confirm_rent",
        },
      ],
    ],
  };

  try {
    await axios.post(url, {
      chat_id: chatId,
      text: "Ijarangizni tasdiqlaysizmi?", 
      reply_markup: inlineKeyboard, 
    });
    console.log("Xabar yuborildi va tugma qo'shildi!");
>>>>>>> 1fc61da89f0dbccf3af2e8c0cd0cf42eb2e3f156
  } catch (error) {
    console.error("Xatolik:", error);
  }
};

<<<<<<< HEAD
// Xabar yuborish
sendMessage("Sizning ijarangiz tasdiqlanishi kutilmoqda.");
=======

sendMessageWithButton();
>>>>>>> 1fc61da89f0dbccf3af2e8c0cd0cf42eb2e3f156
