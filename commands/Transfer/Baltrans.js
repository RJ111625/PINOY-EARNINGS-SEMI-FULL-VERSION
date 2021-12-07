/*CMD
  command: Baltrans
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Transfer

  <<ANSWER
*EnterRecipient Telegram Id For Sending Balance.*

*⚠️Wrong ID may Cause Lose of Balance⚠️*
_Admins Are Not Responsible For it_
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var use = User.getProperty("status")
if (use== "retail" | use== "admin" | use== "creator"){

Bot.run({
command: "/BalTransfer",
options: { tgid : message }
})
}else{
Bot.sendMessage("*❌ACCESS DENIED❌*\n\nOnly Retailler Can Transfer Funds")
Bot.runCommand("main_menu")}
