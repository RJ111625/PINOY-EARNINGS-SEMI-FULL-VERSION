/*CMD
  command: Ask
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Support Edit
  answer: _š¬ How Can I Help You ?_
  keyboard: 
  aliases: 
CMD*/

var use = User.getProperty("status")
let Ask = User.getProperty("Ask")
User.setProperty("Ask" ,message ,"string")
Bot.sendMessage("*š© Message Sent To Admin As = "+message+"*")
Bot.sendMessageToChatWithId(2116898236, "*š© New Support Message From User š©\n\nš¤“š» User =* ["+user.first_name+"]*\n\nš User ID= *["+user.telegramid+"]*\n\nš Message = *_"+message+"_*\n\nā¢ļø Status = *"+use+"*\n\nWanna Reply? /SPM*")
Bot.runCommand("main_menu")
