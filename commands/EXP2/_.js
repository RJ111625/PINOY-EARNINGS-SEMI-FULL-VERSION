/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: EXP2
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*You're Ban❌*")
Bot.runCommand("❌")
}else{
Bot.sendMessage("*Join Bot Official Group & Channel*\n\n *@pinoy_earning_group*\n                *At*\n [PINOY🇵🇭EARNINGS💰CHANNEL📢](https://t.me/pinoy_earning_channel) ")
Bot.runCommand("menu")

}

