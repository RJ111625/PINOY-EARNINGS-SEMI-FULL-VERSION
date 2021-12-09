/*CMD
  command: ldice
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Games
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("withbal");
var bal = Libs.ResourcesLib.userRes("balance");
var bet = User.getProperty("bethl");
var me = options.result.dice.value
if(bal <1){Bot.sendMessage("*✋Stop! You have Only "+bal+" PHP.\ You must have atleast 1 PHP to Continue*")
}else{
bal.add(-bet)
if(me < 3){balance.add(1.5*bet)
Bot.sendMessage("*Congrats🥳, You've Won "+bet*1.5+"*")
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+"PHP\n🏧Your current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*")
}else{
if(me == 3){Bot.sendMessage("*Its a Draw*")
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+"\n🏧Your current Withdrawable Bal: "+balance.value()+"*")
bal.add(+bet)
}else{
if(me > 3){
Bot.sendMessage("_Sorry! You Lose "+bet+"😞_")
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\n🏧Your current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*")
}}}}
