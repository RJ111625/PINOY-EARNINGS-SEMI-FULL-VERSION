/*CMD
  command: msgbroadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ADMIN PANELS
  answer: *Send Your Message For Broadcast🗨️*
  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status");
if (user =="administrator" | user=="creator"){
Bot.runAll({ 
command: "Broadcast",
for_chats: "private-chats",
options: {msg: message}
})
Bot.sendMessage("*🚀 Message Sended To All Users*")
}else{
Bot.sendMessage("*🔰 You're Not An Admin*")
}
