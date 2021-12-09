/*CMD
  command: limit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw Edit
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun(){
var last_run_at = User.getProperty("lasttime_withdraw");
if(!last_run_at){ return true }
var minutes = (Date.now() - last_run_at) /1000/60;
var minutes_in_day = 60 * 72
var next = minutes_in_day - minutes
var wait_hours = Math.floor(next / 60)
next -= wait_hours * 60
var wait_minutes = Math.floor(next)
var seconds = Math.floor((next - wait_minutes) * 60)
if(minutes < minutes_in_day) {
Bot.sendMessage("*📛 You Can Only Withdraw 1 Time In 3 Days.\n\n⚠️ Come Back After "+wait_hours+" Hours "+wait_minutes+" Minutes "+seconds+" Seconds To Withdraw Again.*")
Bot.runCommand("menu")
   return
 }
  return true;
 }
if(!canRun()){ return }
Bot.runCommand("onetime")
