/*CMD
  command: divideS
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUNOS
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("withbal")
balance.add(+1)
var solve = User.getProperty("divide")
if(message == solve){
Bot.sendMessage("*✅Correct , you Received 1 PHP🎁 For Solving ➗Divide Bunos!*")
Bot.runCommand("bal2")
User.setProperty("divide", "0", "string")
User.setProperty("solve_limit", Date.now(), "integer");

}else{
Bot.sendMessage("*❌ Wrong Answer ! ☹️Try Again After 12 Hours ⏳.*")
Bot.runCommand("🎰 Bonuses")
User.setProperty("solve_limit", Date.now(), "integer");
User.setProperty("divide", "0", "string")
}
