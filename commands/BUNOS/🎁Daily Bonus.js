/*CMD
  command: 🎁Daily Bonus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUNOS
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun(){
var last_run_at = User.getProperty("bunos_limit");
if(!last_run_at){ return true }
var minutes = (Date.now() - last_run_at) /1000/60;
var minutes_in_day = 24 * 60
var next = minutes_in_day - minutes
var wait_hours = Math.floor(next / 60)
next -= wait_hours * 60
var wait_minutes = Math.floor(next)
var seconds = Math.floor((next - wait_minutes) * 60)
if(minutes < minutes_in_day) {
Bot.sendMessage("*📛 Iyo ng na Received ang iyong Daily Bonus\n\n▶️ Bumalik Pagkatapos ng ⏳ "+wait_hours+" h "+wait_minutes+" m "+ seconds+" s*")
Bot.runCommand("main_menu")
   return
    }
      return true;
       }
       if(!canRun()){ return }
      Bot.runCommand("1tb")
       
