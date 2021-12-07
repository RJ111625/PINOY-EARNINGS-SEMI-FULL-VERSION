/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw Edit
  answer: 
  keyboard: 
  aliases: 
CMD*/

var use = User.getProperty("status");
if (use =="retail" | use =="member")

if(user.telegramid != use)var mode = Bot.getProperty("mode")
if(mode == "On"){
Bot.sendMessage("❌")
Bot.sendMessage("*🤖Bot Is Currently Under Maintainance🚫*")

return
}
var use = User.getProperty("status")
if (use =="retail"){
var she = Libs.ResourcesLib.userRes("withbal")
var go = Libs.ResourcesLib.userRes("balance")
if (she.value() > 0){
go.add(+she.value())
she.add(-she.value())}
}

