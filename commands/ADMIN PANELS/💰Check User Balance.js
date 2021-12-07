/*CMD
  command: 💰Check User Balance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ADMIN PANELS
  answer: *📌Send User Telegram Id To Check User Balance*
  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status");
if ( user =="administrator" | user=="creator" | user =="retail"){
var id = message; 
var withbal = Libs.ResourcesLib.anotherUserRes("withbal" , id);
var user_bal = 
Libs.ResourcesLib.anotherUserRes("balance" , id);
Bot.sendMessage("*💰User Balance = "+user_bal.value().toFixed(2)+"PHP\n\n💵User Withdrawable Bal = "+withbal.value().toFixed(2)+"PHP*")
}else{
Bot.sendMessage("*❌ACCESS DENIED❌*")
}
