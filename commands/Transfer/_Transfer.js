/*CMD
  command: /Transfer
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Transfer

  <<ANSWER
*🛑 Enter An *_Amount_* For Sending To Recipient Account.

⚠️ Note = It Will Be Deducted From Your Account Balance.*
  ANSWER
  keyboard: 
  aliases: 
CMD*/

if(message < 10) {
Bot.sendMessage("_🚧Minimum Amount For Transfer Is 10 PHP🚧_")
Bot.runCommand("💸Transfer")
}else{
var value = message;
var number = parseInt(value)
if (!number) {
Bot.sendMessage("_❌You Have Entered An Invalid Amount_")
Bot.runCommand("💸Transfer")
}else{
var use = User.getProperty("status")
if (use== "retail" | use== "admin" | use== "creator"){var balance = Libs.ResourcesLib.userRes("balance")
var tgid = options.tgid
if(message > balance.value()) {
Bot.sendMessage("*⚠️ Insufficient Balance For This Transaction.\n\n📛 You Have Only "+balance.value()+" PHP.*")
Bot.runCommand("💸Transfer")

}else{
var user_bal = Libs.ResourcesLib.anotherUserRes("balance" , tgid);
var friend = Libs.ResourcesLib.anotherUserRes("balance",tgid)
friend.add(+message) 
balance.add(-message) 
Bot.sendMessage("*✅ Amount "+message+" PHP Has Been Transfer To "+tgid+".\n\n💵 Your Current Balance : "+balance.value()+" PHP.*")
Bot.sendMessageToChatWithId(tgid, "*📩 YOU HAVE RECEIVED A PHP FROM @"+user.username+"📩\n\n💌 RECEIVED = "+message+" PHP\n\nYou Have Now A Total Balance Of =\n💰"+user_bal.value().toFixed(2)+" PHP*")
Bot.runCommand("main_menu")}
}else{
Bot.sendMessage("*❌ACCESS DENIED❌*\n\nOnly Retailler Can Transfer Funds")
Bot.runCommand("main_menu")}}}
