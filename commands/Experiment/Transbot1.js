/*CMD
  command: Transbot1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Experiment
  answer: *📌Send User Telegram Id To Change His/Her Balance*
  keyboard: 
  aliases: 
CMD*/

var use = User.getProperty("status");
if ( use =="administrator" | use=="creator"){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("transbot");
}else{
Bot.sendMessage("*❌Wrong Command😅\n\nPress /menu to start*")
}
