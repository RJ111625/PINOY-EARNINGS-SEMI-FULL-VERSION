/*CMD
  command: ➕Plus🎁
  help: 
  need_reply: false
  auto_retry_time: 
  folder: BUNOS
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun(){
var last_run_at = User.getProperty("solve_limit");
if(!last_run_at){ return true }
var minutes = (Date.now() - last_run_at) /1000/60;
var minutes_in_day = 12 * 60
var next = minutes_in_day - minutes
var wait_hours = Math.floor(next / 60)
next -= wait_hours * 60
var wait_minutes = Math.floor(next)
var seconds = Math.floor((next - wait_minutes) * 60)
if(minutes < minutes_in_day) {
Bot.sendMessage("*📛 Natapos Mo Na Ang Iyong Daily 🧮Solve Bonus🎁\n\n▶️ Bumalik Pagkatapos ng ⏳ "+wait_hours+" h "+wait_minutes+" m "+ seconds+" s*")
Bot.runCommand("🎰 Bonuses")
   return
    }
      return true;
       }
       if(!canRun()){ return }

var qq = Libs.Random.randomInt(1000,2000)
var question = Libs.Random.randomInt(2000,3000)
var solve = question + qq
User.setProperty("solve", solve, "string")
Bot.sendMessage("*➡️ Solve This Captcha Before Using This Bot.\n\n✅ Solve It : "+question+" + "+qq+" = ?*")
Bot.runCommand("plusS")
