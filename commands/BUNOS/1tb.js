/*CMD
  command: 1tb
  help: 
  need_reply: false
  auto_retry_time: 
  folder: BUNOS

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban❌*");
Bot.runCommand("❌")
}else{

var daily = Libs.Random.randomFloat(0.01, 0.5); 
User.setProperty("daily", daily, "value", "toFixed")

Bot.runCommand("test")
}
