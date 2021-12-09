/*CMD
  command: /off
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
Bot.setProperty("mode","Off","string")
Bot.sendMessage("*♻️ Maintainance Mode Set To Off*")
Bot.runCommand("🤖Maintainance🚫")
}else{
Bot.sendMessage("*⛔️ You Are Not An Admin*")
}
