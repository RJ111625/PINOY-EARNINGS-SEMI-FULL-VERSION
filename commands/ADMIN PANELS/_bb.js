/*CMD
  command: /bb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ADMIN PANELS
  answer: *📌How Much Amount You To Add In User Balance*
  keyboard: 
  aliases: 
CMD*/

var use = User.getProperty("status");
if (use =="administrator" | use=="creator"){
let amount = parseFloat(message);
let tgid = User.getProperty("id");
var user_bal = Libs.ResourcesLib.anotherUserRes("balance" , tgid);
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.add(parseFloat(amount));
Bot.sendMessage("*Succesfully Added Balance* \n*👤 User = "+tgid+"\n💰 Amount= "+amount+" PHP*");
Bot.sendMessageToChatWithId(tgid, "*📩 YOU HAVE RECEIVED A PHP FROM ADMIN📩\n\n💌 RECEIVED = "+amount+" PHP\n\nYou Have Now A Total Balance Of =\n💰"+user_bal.value().toFixed(2)+" PHP*")
}else{
return
}
