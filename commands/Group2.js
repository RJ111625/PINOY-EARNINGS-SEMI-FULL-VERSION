/*CMD
  command: Group2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban From Using The Bot ❌*")
  Bot.runCommand("❌")
} else {
  var button = [{ title: "✅Joined", command: "group2" }]
  Bot.sendInlineKeyboard(
    button,
    "*Join Our Official Pinoy Earning Group To Use This Bot And Earn From It\n\n➤ @pinoy_earning_group\n\n☑️ Done Joining! Click ✅Joined.*"
  )
}

