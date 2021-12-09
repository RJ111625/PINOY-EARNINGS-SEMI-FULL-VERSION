/*CMD
  command: /BalTransfer
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Transfer

  <<ANSWER
*🛑 Enter An Amount For Sending To Recipient Account.

⚠️ Note = It Will Deducated From Your Account Balance.*
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var use = User.getProperty("status")
if (use== "retail" | use== "admin" | use== "creator"){

var balance = Libs.ResourcesLib.userRes("withbal")
var tgid = options.tgid
if(message > balance.value()) {
Bot.sendMessage("*⚠️ Insufficient Balance For This Transaction.\n\n📛 You Have Only "+balance.value()+" PHP.*")
}else{
var user_bal = Libs.ResourcesLib.anotherUserRes("withbal" , tgid);
var friend = Libs.ResourcesLib.anotherUserRes("withbal",tgid)
friend.add(+message) 
balance.add(-message) 
Bot.sendMessage("*✅ Amount "+message+" PHP Has Been Transfer To "+tgid+".\n\n💵 Your Current Balance : "+balance.value()+" PHP.*")
Bot.sendMessageToChatWithId(tgid, "*📩 YOU HAVE RECEIVED A PHP FROM @"+user.username+"📩\n\n💌 RECEIVED = "+message+" PHP\n\nYou Have Now A Total Balance Of =\n💰"+user_bal.value().toFixed(2)+" PHP*")
Bot.runCommand("main_menu")}
}else{
Bot.sendMessage("*❌ACCESS DENIED❌*\n\nOnly Retailler Can Transfer Funds")
Bot.runCommand("main_menu")}
