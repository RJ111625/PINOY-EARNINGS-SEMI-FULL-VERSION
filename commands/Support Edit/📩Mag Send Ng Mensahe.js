/*CMD
  command: ð©Mag Send Ng Mensahe
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Support Edit
  answer: _ð¬ Ano Ba ang Iyong Mga Tanong ?_
  keyboard: 
  aliases: 
CMD*/

var use = User.getProperty("status")
let Ask = User.getProperty("Ask")
User.setProperty("Ask" ,message ,"string")
Bot.sendMessage("*ð© Message Sent To Admin As = "+message+"*")
Bot.sendMessageToChatWithId(2116898236, "*ð© New Support Message From User ð©\n\nð¤´ð» User =* ["+user.first_name+"]*\n\nð User ID= *["+user.telegramid+"]*\n\nð Message = *_"+message+"_*\n\nâ¢ï¸ Status = *"+use+"*\n\nWanna Reply? /SPM*")
Bot.runCommand("main_menu")
