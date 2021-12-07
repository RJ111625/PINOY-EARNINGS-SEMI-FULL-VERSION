/*CMD
  command: 7old
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw Edit
  answer: 
  keyboard: 
  aliases: 
CMD*/

let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
if (refList.length < 3) {
  Bot.sendMessage(
    "*🔐 You Can't Withdraw Right Now. You Must Have Atleast 3 Referrals.\n\n💵 You have only *_"+refList.length+"_* Referral.*"
  )
} else {
  var use = User.getProperty("status")
  if (use == "retail") {
    Bot.sendMessage("*Sorry But Retailler Cannot Withdraw*")
    Bot.runCommand("main_menu")
  } else {
    let stat = Bot.getProperty("" + user.telegramid + "")
    if (stat == "ban") {
      Bot.sendMessage("*You're Ban❌*")
      Bot.runCommand("❌")
    } else {
      let stat = Bot.getProperty("" + user.telegramid + "")
      if (stat == "fake") {
        Bot.sendMessage("*You're Ban❌*")
        Bot.runCommand("❌")
      } else {
        Bot.runCommand("limit")
      }
    }
  }
}

