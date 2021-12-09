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

function canRun(){
var widbalbethl = User.getProperty ("widbalbethl")
if(widbalbethl == "true"){
var balance = Libs.ResourcesLib.userRes("withbal");
var bal = Libs.ResourcesLib.userRes("balance");
var bet = User.getProperty("bethl");
var me = options.result.dice.value
if(me < 3){balance.add(2*bet)
Bot.sendMessage("*Congrats🥳, You've Won "+bet*2+"*\n\nYour Bet Amount: "+bet+"")
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+"PHP\n🏧Your current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*")
}else{
if(me == 3){balance.add(+bet)
Bot.sendMessage("*Its a Draw*")
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+"\n🏧Your current Withdrawable Bal: "+balance.value().toFixed(2)+"*\n\nYour Bet Amount: "+bet+"")
}else{
if(me > 3){
Bot.sendMessage("_Sorry! You Lose "+bet+"😞_")


Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\n🏧Your current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")}

return
}

return
}
return
}
return true;
}
 if(!canRun()){ return }


var balance = Libs.ResourcesLib.userRes("withbal");
var bal = Libs.ResourcesLib.userRes("balance");
var bet = User.getProperty("bethl");
var me = options.result.dice.value


if(me < 3){balance.add(2*bet)
Bot.sendMessage("*Congrats🥳, You've Won "+bet*2+"*")
var use = User.getProperty("status");
if (use=="retail"){
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\n🎖️Winnings: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")
}if (use=="creator" | use== "member"){Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\nYour current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")}
}else{
if(me == 3){bal.add(+bet)
Bot.sendMessage("*Its a Draw*")
var use = User.getProperty("status");
if (use=="retail"){
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\n🎖️Winnings: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")
}if (use=="creator" | use== "member"){Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\nYour current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")}

}else{
if(me > 3){

Bot.sendMessage("_Sorry! You Lose "+bet+"😞_")

var use = User.getProperty("status");
if (use=="retail"){
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\n🎖️Winnings: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")
}if (use=="creator" | use== "member"){Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\nYour current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")}
}}}
