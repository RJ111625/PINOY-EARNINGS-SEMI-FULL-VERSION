/*CMD
  command: Pota
  help: 
  need_reply: 
  auto_retry_time: 
  folder: EXP2
  answer: 
  keyboard: 
  aliases: 
CMD*/

let Ask = User.getProperty("Ask")
var button = [[{ title : "✏️Write Me" , command : "Ask" } , { title : "➕Apply Retailler" , command : "c0de"}] , [{ title : "CANCEL❌" , command : "main_menu"}]]
Bot.sendInlineKeyboard(button , {text: '*📫 Last Question = "+Ask+"*' , reply_markup: JSON.stringify({hide_keyboard: true})})

