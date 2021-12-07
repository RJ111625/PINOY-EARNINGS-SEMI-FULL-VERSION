/*CMD
  command: mystatus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ADDADMIN
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status");
Bot.sendMessage(user)
