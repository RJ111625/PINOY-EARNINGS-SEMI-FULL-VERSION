/*CMD
  command: Dice High or Low🎲
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Games

  <<ANSWER
*Welcome To Dice High or Low🎲 Game🎮*

_You Can Win Upto 2× Of Your Bet By Just Tossing A Dice_

                *❕Winning System❕*
              _If You Guess The Dice Roll: _
          *Lower than 3 =  ×2 of your bet*
                *Equal to 3 = ×1(draw)*
          *Higher than 3 = ×1.8 of your bet*

_Pick From The Option Or Input Your Bet Amount_
  ANSWER
  keyboard: 1,1.5,2,2.5,3,3.5\nCancel✖️
  aliases: 🎰edit bet🔙
CMD*/

function canRun(){
var widbalbethl = User.getProperty ("widbalbethl")
if(widbalbethl == "true"){
var value = message;
var number = parseInt(value)
if(message <1 | !number ){Bot.sendMessage("*⚠️INVALID AMOUNT⚠️*")
Bot.sendMessage("_Maximum Bet Amount Is 1 PHP._")
Bot.runCommand("Dice High or Low🎲")
}else{
var wbal = Libs.ResourcesLib.userRes("withbal");
if(message > wbal.value() ){
Bot.sendMessage("_❌Maximum Bet Amount Is 1 PHP._\n\ *You Have Only "+wbal.value().toFixed(2)+" PHP.*")
Bot.runCommand("Dice High or Low🎲")
}else{
User.setProperty("bethl", message, "value");
Bot.sendKeyboard("High⬆️, Low⬇️\n🎰EDIT BET🔙","*HIGH⬆️ OR LOW⬇️*")
return
}
return
}
return
}
return true;
}
 if(!canRun()){ return }
//ORIGINAL

var value = message;
var number = parseInt(value)
if(message <1 | !number ){Bot.sendMessage("*⚠️INVALID AMOUNT⚠️*")
Bot.sendMessage("_Maximum Bet Amount Is 1 PHP._")
Bot.runCommand("Dice High or Low🎲")

}else{
var bal2 = Libs.ResourcesLib.userRes("withbal");
var bal = Libs.ResourcesLib.userRes("balance");
if(bal.value() < 1 ){
var button = [[{ title : "🤔 Continue?" , command : "balbet"}] , [{ title : "CANCEL❌" , command : "main_menu"}]]
Bot.sendInlineKeyboard(button ,"*✋Stop! You have Only "+bal.value()+" PHP.\n But You have "+bal2.value().toFixed(2)+" PHP in WITHDRAWABLE BAL. Do You want to continue?*")
}else{
var bal = Libs.ResourcesLib.userRes("balance");
if(message > bal.value() ){
Bot.sendMessage("_❌Maximum Bet Amount Is 1 PHP._\n\ *You Have Only "+bal.value().toFixed(2)+" PHP.*")
Bot.runCommand("Dice High or Low🎲")
}else{


User.setProperty("bethl", message, "value");
Bot.sendKeyboard("High⬆️, Low⬇️\n🎰EDIT BET🔙","*HIGH⬆️ OR LOW⬇️*")
}}}
