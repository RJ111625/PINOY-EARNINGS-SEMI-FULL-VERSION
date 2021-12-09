/*CMD
  command: tcheck
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUNOS
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message == User.getProperty("captcha")){
Bot.sendMessage("*✅ You Are Verfied As A Human.*")
Bot.runCommand("TRY")
}else{
Bot.sendMessage("*⚠️ Wrong Captcha! You have enter the wrong captcha value. Try again!*")
Bot.runCommand("test")
}
