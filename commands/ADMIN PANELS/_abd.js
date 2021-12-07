/*CMD
  command: /abd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ADMIN PANELS
  answer: *📌Send User Telegram Id To Change His/Her Balance*
  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status");
if ( user =="administrator" | user=="creator"){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/bb");
}else{
Bot.sendMessage("*❌Wrong Command😅\n\nPress /menu to start*")
}
