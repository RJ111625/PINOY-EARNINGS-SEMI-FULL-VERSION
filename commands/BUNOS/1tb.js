/*CMD
  command: 1tb
  help: 
  need_reply: false
  auto_retry_time: 
  folder: BUNOS
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban❌*");
Bot.runCommand("❌")
}else{

var daily = Libs.Random.randomFloat(0.01, 0.5); 
let haha = daily.toFixed(2)
User.setProperty("daily", haha, "value", "toFixed")

Bot.runCommand("test")
}
