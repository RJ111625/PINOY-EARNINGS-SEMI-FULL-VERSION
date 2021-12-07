/*CMD
  command: bal2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Balance Edit
  answer: 
  keyboard: 
  aliases: 
CMD*/

var use = User.getProperty("status");
var withbal = Libs.ResourcesLib.userRes("withbal")
var use = User.getProperty("status")
var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
var use = User.getProperty("status");
if (use == "retail") {
        Bot.sendKeyboard(
          "💸Transfer,💰 Balance,\n➕ DEPOSIT,BACK🔙,",
          "*Hello🤗 \n\n👥User =" +
          user.first_name +
          "\n\n💰 Balance = " +
          balance.value().toFixed(2) +
          " PHP\n\n🔗Total Refferals = " +
          refList.length +
          "\n\n🌟 Status = *_"+use+"_*\n\n🆔 ID = _"+user.telegramid+"_\n\n⚜️Mag laro at mag refer para maka ipon !*");
Bot.runCommand("main_menu")

}else{


Bot.sendKeyboard("📤 Withdraw,💰 Balance,\n➕ DEPOSIT,BACK🔙,","*Hello🤗 \n\n👥User =" +
          user.first_name +
          "\n\n💰 Balance = " +
          balance.value().toFixed(2) +
          " PHP\n\n💵 Withdrawable Bal = "+withbal.value().toFixed(2)+" PHP\n\n🔗Total Refferals = " +
          refList.length +
          "\n\n🌟 Status = *"+use+"*\n\n🆔 ID = _"+user.telegramid+"_\n\n⚜️Mag laro at mag refer para maka ipon !*")
Bot.runCommand("main_menu")
}
