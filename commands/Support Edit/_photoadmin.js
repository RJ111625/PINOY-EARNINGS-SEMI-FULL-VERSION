/*CMD
  command: /photoadmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Support Edit
  answer: *🏞 Mag Send Ng Photo Na May Kasamang Caption Na Esesend Sa Amin.*
  keyboard: 
  aliases: 
CMD*/

var use = User.getProperty("status")
Api.sendPhoto({
chat_id: 2116898236, //edit admin tgid
photo: request.photo[0].file_id,
caption: "*⁉️ New Question From User With Photo.\n\n👤 User =* ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n*🌁 Photo Caption = "+request.caption+"",
parse_mode: "Markdown" })
Bot.sendMessage("*🌁 Image Succesfully Sended To Admin.*")
Bot.runCommand("main_menu")
