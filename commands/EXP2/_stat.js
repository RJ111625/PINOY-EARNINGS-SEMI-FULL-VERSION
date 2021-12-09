/*CMD
  command: /stat
  help: 
  need_reply: 
  auto_retry_time: 
  folder: EXP2
  answer: 
  keyboard: 
  aliases: 
CMD*/

var use = User.getProperty("status");
Bot.sendMessage("*Your A* : _"+use+"_")



  

let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage(
    "*🔐 You Can't Withdraw Right Now. You Must Have Atleast 3 Referrals.\n\n💵 You have only *_"+refList+"_* Referral.*")
