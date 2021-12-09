/*CMD
  command: 💸Transfer
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Transfer

  <<ANSWER
*🆔Enter Recipient *_Telegram Id_* For Sending Balance.*

*⚠️Wrong ID may Cause Lose of Balance⚠️*
_Admins Are Not Responsible For it_
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let value = message;
var number = parseInt(value)
if (!number | value.length < 10 | value.length > 10) {
Bot.sendMessage("_❌You Have Entered An Invalid ID_")
Bot.runCommand("💸Transfer")
}else{
var use = User.getProperty("status")
if (use== "retail" | use== "admin" | use== "creator"){Bot.run({
command: "/Transfer",
options: { tgid : message }
})
}else{
Bot.sendMessage("*❌ACCESS DENIED❌*\n\nOnly Retailler Can Transfer Funds")
Bot.runCommand("main_menu")}}
