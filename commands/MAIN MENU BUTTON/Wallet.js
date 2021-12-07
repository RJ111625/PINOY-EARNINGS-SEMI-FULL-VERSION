/*CMD
  command: Wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: MAIN MENU BUTTON
  answer: *📌I-Send Ang Iyong Gcash/Paypal Account Kung Saan Mo Gustong Ma Received Na Galing Dito Sa Bot!*
  keyboard: 
  aliases: 
CMD*/

var wallet = User.getProperty("wallet")
var wallet = User.setProperty("wallet", message, "string")
Bot.sendMessage("*🔍And Inyong Claiming Account Ay "+message+"*")
Bot.runCommand("Cancel❌")
