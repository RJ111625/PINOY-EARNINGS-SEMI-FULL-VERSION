/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: MAIN MENU BUTTON

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: menu, main, menu, /menu, 🔙go back↩️
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*You're Ban❌*")
Bot.runCommand("❌")
}else{
var use = User.getProperty("status")
if (use=="left")
Bot.runCommand("start2")
var use = User.getProperty("status");
if (use=="creator"){
var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
if(request.data){
Api.deleteMessage({
message_id : request.message.message_id
})
}
Bot.sendKeyboard("💰 Balance,📊 Statistics,\n👥 Referral,🧑🏻‍💻Admin,","*🗄️🄰🄽🄶 🄸🅈🄾🄽🄶 ＡＤＭＩＮ 🄼🄴🄽🅄🗄️*")
}else{

if ( use=="member" | use=="administrator")
Bot.sendKeyboard("💰 Balance,📊 Statistics,\n👥 Referral,🎰 Bonuses,\n💼 Set Wallet,📞 Support", "*🗄️🄰🄽🄶 🄸🅈🄾🄽🄶 🄼🄴🄽🅄🗄️*")
}
{
if (use=="retail")
Bot.sendKeyboard("💰 Balance,📊 Statistics,\n👥 Referral,🎰 Bonuses,📞Contact Admin", "*🌟ƦЄƬƛƖԼԼЄƦ MЄƝƲ*🌟")
}
}
