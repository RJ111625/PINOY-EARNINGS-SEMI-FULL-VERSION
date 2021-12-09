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
let buray = parseFloat(add)
var balance = Libs.ResourcesLib.userRes("withbal")
balance.add(parseFloat(buray))
Bot.sendMessage("*🎁 Congrats , you Received "+parseFloat(buray)+"PHP*")
Bot.runCommand("bal2")
User.setProperty("bunos_limit", Date.now(), "integer");
User.setProperty("daily", "-10", "value", "toFixed")
