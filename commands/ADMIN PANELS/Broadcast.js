/*CMD
  command: Broadcast
  help: 
  need_reply: false
  auto_retry_time: 
  folder: ADMIN PANELS
  answer: 
  keyboard: 
  aliases: 
CMD*/

var msg = options.msg

Bot.sendMessage("*📢 Admin Message ~ #msg\n➖➖➖➖➖➖➖➖➖➖➖➖\n\n"+msg+"*")
