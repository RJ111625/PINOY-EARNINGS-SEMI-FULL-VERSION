/*CMD
  command: 👥 Referral
  help: 
  need_reply: 
  auto_retry_time: 
  folder: MAIN MENU BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban❌*");
Bot.runCommand("❌")
}else{

let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","pinoy");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*⏯️ Total Invites = "+refList.length+" Users\n\n⛔ Per Referral 0.50 PHP\n\n🔗Ito ang iyong Referral Link ⬇️\n"+reflink+"*");

}
