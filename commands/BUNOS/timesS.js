/*CMD
  command: timesS
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
var times = User.getProperty("times")
if(message == times){
Bot.sendMessage("*✅Correct , you Received 1 PHP🎁 For Solving ✖️Times Bunos!*")
Bot.runCommand("bal2")
User.setProperty("times", "0", "string")
User.setProperty("solve_limit", Date.now(), "integer");

}else{
Bot.sendMessage("*❌ Wrong Answer ! ☹️Try Again After 12 Hours ⏳.*")
Bot.runCommand("🎰 Bonuses")
User.setProperty("solve_limit", Date.now(), "integer");
User.setProperty("times", "0", "string")
}
