/*CMD
  command: โ Unban User
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ADMIN PANELS
  answer: *๐Send Telegram User Id To Unban User*
  keyboard: 
  aliases: 
CMD*/

var use = User.getProperty("status");
if ( use =="administrator" | use=="creator"){
Bot.setProperty(""+message+"" , "unban" , "string");
Bot.sendMessage("*โ User " +message+ " Has Been Unbanned Successfully*");
}else{
return
}
