/*CMD
  command: 💰 Balance
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Balance Edit

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: balance, balance, /balance, 🔙back to balance
CMD*/

var use = User.getProperty("status")
if (use == "left") {
  Bot.sendMessage("*❌ Must Join All Channel*")
  Bot.runCommand("start2")
} else {
var wbal = Libs.ResourcesLib.userRes("withbal")
  var balance = Libs.ResourcesLib.userRes("balance")
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var stat = Bot.getProperty("" + user.telegramid + "")
  if (stat == "ban") {
    Bot.sendMessage("*You're Ban❌*")
    Bot.runCommand("❌")
  } else {
    if (use == "member") {
      Bot.sendKeyboard(
        "📤 Withdraw,💰 Balance,\n➕ CASH IN,BACK🔙,",
        "*Hello🤗 \n\n👥User =" +
          user.first_name +
          "\n\n💰 Balance = " +
          balance.value().toFixed(2) +
          " PHP\n\n💵 Withdrawable Bal = "+wbal.value().toFixed(2)+" PHP\n\n🔗Total Refferals = " +
          refList.length +
          "\n\n🌟 Status = *"+use+"*\n\n🆔 ID = _"+user.telegramid+"_\n\n⚜️Mag laro at mag refer para maka ipon !*"
      )
    } else {
      if (use == "retail" | use == "creator") {
        Bot.sendKeyboard(
          "💸Transfer,💰 Balance,\n➕ CASH IN,BACK🔙,",
          "*Hello🤗 \n\n👥User =" +
          user.first_name +
          "\n\n💰 Balance = " +
          balance.value().toFixed(2) +
          " PHP\n\n🔗Total Refferals = " +
          refList.length +
          "\n\n🌟 Status = "+use+"\n\n🆔 ID = _"+user.telegramid+"_\n\n⚜️Kung Nais Mong Mag Cash in I Click Lamang Ang _📞Contact Admin_ Para mag Request!*"
        )
      }
    }
  }
}

