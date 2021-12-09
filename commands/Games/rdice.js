/*CMD
  command: rdice
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
if(me == 1){balance.add(2*bet)
Bot.sendMessage("*Congrats🥳, You've Won "+bet*2+"*\n\nYour Bet Amount: "+bet+"")
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+"PHP\n🏧Your current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*")
}else{
if(me == 2){balance.add(0.5*bet)
Bot.sendMessage("*Congrats🥳, You've Won "+bet*0.5+"*\n\nYour Bet Amount: "+bet+"")
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+"PHP\n🏧Your current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*")
}else{
if(me == 3){balance.add(1*bet)
Bot.sendMessage("*Congrats🥳, You've Won "+bet*1+"*\n\nYour Bet Amount: "+bet+"")
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+"PHP\n🏧Your current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*")
}else{
if(me == 4){balance.add(0.3*bet)
Bot.sendMessage("*Congrats🥳, You've Won "+bet*0.3+"*\n\nYour Bet Amount: "+bet+"")
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+"PHP\n🏧Your current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*")
}else{
if(me == 5){balance.add(0.8*bet)
Bot.sendMessage("*Congrats🥳, You've Won "+bet*0.8+"*\n\nYour Bet Amount: "+bet+"")
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+"PHP\n🏧Your current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*")
}else{
if(me == 6){balance.add(1.5*bet)
Bot.sendMessage("*Congrats🥳, You've Won "+bet*1.5+"*\n\nYour Bet Amount: "+bet+"")
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+"PHP\n🏧Your current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*")
}
return
}
return
}
return
}
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
var use = User.getProperty("status");

if(me == 1){balance.add(2*bet)
Bot.sendMessage("*Congrats🥳, You've Won "+bet*2+"*\n\nYour Bet Amount: "+bet+"")
if (use=="retail"){
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\n🎖️Winnings: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")
}if (use=="creator" | use== "member"){Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\nYour current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")}
}else{
if(me == 2){balance.add(0.5*bet)
Bot.sendMessage("*Congrats🥳, You've Won "+bet*0.5+"*\n\nYour Bet Amount: "+bet+"")
if (use=="retail"){
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\n🎖️Winnings: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")
}if (use=="creator" | use== "member"){Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\nYour current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")}
}else{
if(me == 3){balance.add(1*bet)
Bot.sendMessage("*Congrats🥳, You've Won "+bet*1+"*\n\nYour Bet Amount: "+bet+"")
if (use=="retail"){
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\n🎖️Winnings: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")
}if (use=="creator" | use== "member"){Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\nYour current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")}
}else{
if(me == 4){balance.add(0.3*bet)
Bot.sendMessage("*Congrats🥳, You've Won "+bet*0.3+"*\n\nYour Bet Amount: "+bet+"")
if (use=="retail"){
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\n🎖️Winnings: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")
}if (use=="creator" | use== "member"){Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\nYour current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")}
}else{
if(me == 5){balance.add(0.8*bet)
Bot.sendMessage("*Congrats🥳, You've Won "+bet*0.8+"*\n\nYour Bet Amount: "+bet+"")
if (use=="retail"){
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\n🎖️Winnings: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")
}if (use=="creator" | use== "member"){Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\nYour current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")}
}else{
if(me == 6){balance.add(1.5*bet)
Bot.sendMessage("*Congrats🥳, You've Won "+bet*1.5+"*\n\nYour Bet Amount: "+bet+"")
if (use=="retail"){
Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\n🎖️Winnings: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")
}if (use=="creator" | use== "member"){Bot.sendMessage("*💰Your current Balance: "+bal.value().toFixed(2)+" PHP\nYour current Withdrawable Bal: "+balance.value().toFixed(2)+" PHP*\n\nYour Bet Amount: "+bet+"")}
}}}}}}
