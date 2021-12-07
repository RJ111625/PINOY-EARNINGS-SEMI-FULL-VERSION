/*CMD
  command: 💼 Set Wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: MAIN MENU BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/


let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban❌*")
Bot.runCommand("❌")
}else{
Api.sendMessage({text: '*SET⚙️ OR CANCEL❌*',reply_markup: JSON.stringify({hide_keyboard: true})})
var button = [[{ title : "💼 Set Wallet" , command : "Wallet" }],[{ title : "CANCEL❌" , command : "main_menu" }]]
var wallet = User.getProperty("wallet")
Bot.sendInlineKeyboard(button, "*🕹 Account Settings ⚙\n\n🤴🏻 User = "+user.first_name+"\n🆔 User ID = "+user.telegramid+"\n💼 Wallet =* "+wallet+"\n\n*🚀If Your Account Wallet Is Undefined Set It By Click In Below Button🔻*")

}
