/*CMD
  command: 📊 Statistics
  help: 
  need_reply: 
  auto_retry_time: 
  folder: MAIN MENU BUTTON

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var use = Libs.ResourcesLib.anotherChatRes("user", "global")
var withdraw = Libs.ResourcesLib.anotherChatRes("withdraw", "global")
Bot.sendMessage("*📊 Bot Live Statistics\n\n👥 Users = "+use.value()+" Users\n\n📤Total Withdrawn = "+withdraw.value().toFixed(2)+" PHP\n\n⚜ Share And Support Us ⚜*")
