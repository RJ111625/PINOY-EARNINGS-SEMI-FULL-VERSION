/*CMD
  command: /PM
  help: 
  need_reply: true
  auto_retry_time: 
  folder: FOR BOT
  answer: š Enter Your Message For User:
  keyboard: 
  aliases: 
CMD*/

var tgid = options.tgid
Api.sendMessage({
chat_id: tgid,
text: "*š¬ Message From Admin\nāāāāāāāāāāāā\nā”ļø Admin Messsage = "+message+"*",
parse_mode: "markdown" })
Bot.sendMessage("*š Message Sended To User = "+tgid+"*")

