/*CMD
  command: BACK🔙
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: cancel❌
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban From Using The Bot ❌*");
Bot.runCommand("❌")
}else{

Bot.runCommand("main_menu")
}
