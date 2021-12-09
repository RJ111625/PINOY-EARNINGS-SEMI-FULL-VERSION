/*CMD
  command: 📤 Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw Edit
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun(){
var lol = User.getProperty("7old");
if(!lol){ return true }
var minutes = (Date.now() - lol) /1000/60;
var minutes_in_day = 60 * 72
var next = minutes_in_day - minutes
var wait_hours = Math.floor(next / 60)
next -= wait_hours * 60
var wait_minutes = Math.floor(next)
var seconds = Math.floor((next - wait_minutes) * 60)
if(minutes < minutes_in_day) {
Bot.sendMessage("*⏰Sorry But You Have To Be 7 Days Old to Be Able To Withdraw.*\n\n_🦉Come Back After "+wait_hours+" Hours "+wait_minutes+" Minutes "+seconds+" Seconds To Be Able to withdraw_")
Bot.runCommand("menu")
   return
 }
  return true;
 }
if(!canRun()){ return }
Bot.runCommand("3old")
