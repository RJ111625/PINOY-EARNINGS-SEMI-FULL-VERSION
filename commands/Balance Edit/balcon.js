/*CMD
  command: balcon
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Balance Edit
  answer: 
  keyboard: 
  aliases: 
CMD*/

var h = User.getProperty("status")
var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
Bot.sendMessage("MemberBal "+user.first_name+"")
