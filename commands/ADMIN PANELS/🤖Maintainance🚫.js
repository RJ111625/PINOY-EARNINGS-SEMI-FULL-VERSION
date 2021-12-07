/*CMD
  command: 🤖Maintainance🚫
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ADMIN PANELS
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status");
if (user =="administrator" | user=="creator"){
var button = [[{ title : "⏸ On " , command : "/on" },{ title : "▶️ Off" , command : "/off" }]]
var cur = Bot.getProperty("mode")
Bot.sendInlineKeyboard(button, "*♻️ Select Your Choice To On/Off The Maintainace Mode.\n\n💠 Current Mode = "+cur+"*")
}else{
Bot.sendMessage("*⛔️ You Are Not An Admin*")
}
