/*CMD
  command: /on
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
Bot.setProperty("mode","On","string")
Bot.sendMessage("*♻️ Maintainance Mode Set To On*")
Bot.runCommand("🤖Maintainance🚫")
}else{
Bot.sendMessage("*⛔️ You Are Not An Admin*")
}
