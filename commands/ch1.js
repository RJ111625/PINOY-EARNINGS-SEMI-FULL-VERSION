/*CMD
  command: ch1
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
  let channel = "@pinoy_earning_channel"
  let id = user.telegramid
  Api.getChatMember({
    chat_id: channel,
    user_id: id,
    on_result: "CH1"
  })
}

