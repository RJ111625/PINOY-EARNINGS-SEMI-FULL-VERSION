/*CMD
  command: start2
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
  var button = [{ title: "✅ Check", command: "ch1" }]
  Bot.sendInlineKeyboard(
    button,
    "*Subscribe Our Channels To Use This Bot And Earn From It\n\n➤ @pinoy_earning_channel\n\n☑️ Done Subscribed! Click Continue.*"
  )
}

