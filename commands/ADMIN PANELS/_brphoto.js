/*CMD
  command: /brphoto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ADMIN PANELS
  answer: *🌌 Send Your Photo And Caption For Broadcast.*

  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status");
if (user =="administrator" | user=="creator"){
Bot.runAll({ 
command: "Photo",
for_chats: "private-chats",
options: {photo: request.photo[0].file_id, caption: request.caption}
})
Bot.sendMessage("*🌌 Photo Sended To All Users.*")
}else{
Bot.sendMessage("*⛔️ You're Not An Admin.*")
}
