/*CMD
  command: 📩Mag Send Ng Mensahe
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Support Edit
  answer: _💬 Ano Ba ang Iyong Mga Tanong ?_
  keyboard: 
  aliases: 
CMD*/

var use = User.getProperty("status")
let Ask = User.getProperty("Ask")
User.setProperty("Ask" ,message ,"string")
Bot.sendMessage("*📩 Message Sent To Admin As = "+message+"*")
Bot.sendMessageToChatWithId(2116898236, "*📩 New Support Message From User 📩\n\n🤴🏻 User =* ["+user.first_name+"]*\n\n🆔 User ID= *["+user.telegramid+"]*\n\n💌 Message = *_"+message+"_*\n\n☢️ Status = *"+use+"*\n\nWanna Reply? /SPM*")
Bot.runCommand("main_menu")
