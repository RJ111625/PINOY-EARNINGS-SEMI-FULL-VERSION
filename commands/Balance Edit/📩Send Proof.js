/*CMD
  command: 📩Send Proof
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Balance Edit
  answer: *🖼️Mag Send Ng Photo Proof Of Payment Na May Kasamang Caption Nag Iyong User Id.*
  keyboard: 
  aliases: 
CMD*/

var use = User.getProperty("status")
Api.sendPhoto({
chat_id: 2116898236, //edit admin tgid
photo: request.photo[0].file_id,
caption: "*‼️ New PAYMENTPROOF From User With Photo.\n\n👤 User =* ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n🆔 User ID = "+user.telegramid+"\n\n*🌁 Photo Caption = "+request.caption+"\n\n☢️ Status = *"+use+"*\n\nWanna Reply? /SPM*",
parse_mode: "Markdown" })
Bot.sendMessage("*🌁 Image Succesfully Sended To Admin.*")
Bot.runCommand("main_menu")
