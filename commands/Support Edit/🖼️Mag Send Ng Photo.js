/*CMD
  command: ð¼ï¸Mag Send Ng Photo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Support Edit
  answer: *ð Mag Send Ng Photo Na May Kasamang Caption Na Esesend Sa Amin.*
  keyboard: 
  aliases: 
CMD*/

var use = User.getProperty("status")
Api.sendPhoto({
chat_id: 2116898236, //edit admin tgid
photo: request.photo[0].file_id,
caption: "*âï¸ New Question From User With Photo.\n\nð¤ User =* ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\nð User ID = "+user.telegramid+"\n\n*ð Photo Caption = "+request.caption+"\n\nâ¢ï¸ Status = *"+use+"*\n\nWanna Reply? /SPM*",
parse_mode: "Markdown" })
Bot.sendMessage("*ð Image Succesfully Sended To Admin.*")
Bot.runCommand("main_menu")

