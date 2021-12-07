/*CMD
  command: 🛑 Ban User
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ADMIN PANELS
  answer: *📌Send Telegram User Id To Ban User*
  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status");
if ( user =="administrator" | user=="creator"){
Bot.setProperty(""+message+"" , "ban" , "string");
Bot.sendMessage("*🛑 User " +message+ " Has Been Banned Successfully*");
}else{
return
}
