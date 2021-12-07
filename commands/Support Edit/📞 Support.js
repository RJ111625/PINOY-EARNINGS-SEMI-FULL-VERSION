/*CMD
  command: 📞 Support
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Support Edit
  answer: 
  keyboard: 
  aliases: 
CMD*/

var Ask = User.getProperty("Ask")
var button = [[{ title : "❓Report" , command : "📞Contact Admin"} , { title : "➕Apply Retailler" , command : "c0de"}] , [{ title : "CANCEL❌" , command : "main_menu"}]]
Bot.sendInlineKeyboard(button ,"*📫 Last Question = "+Ask+"*")
Bot.sendMessage({text: "*🆔User Id = "+user.telegramid+"*",reply_markup: JSON.stringify({hide_keyboard: true})})

