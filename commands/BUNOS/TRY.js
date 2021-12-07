/*CMD
  command: TRY
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUNOS
  answer: 
  keyboard: 
  aliases: 
CMD*/

var add = User.getProperty("daily")
let balance = Libs.ResourcesLib.userRes("withbal")
balance.add(add)
Bot.sendMessage("*🎁 Congrats , you Received "+add.toFixed(2)+"PHP*")
Bot.runCommand("bal2")
User.setProperty("bunos_limit", Date.now(), "integer");
User.setProperty("daily", "0", "value", "toFixed")

