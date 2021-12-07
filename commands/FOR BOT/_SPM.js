/*CMD
  command: /SPM
  help: 
  need_reply: true
  auto_retry_time: 
  folder: FOR BOT
  answer: ✅ Send User Telegram Id To Send Message:
  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status");
if ( user =="administrator" | user=="creator"){
Bot.run({ 
command: "/PM",
options: { tgid : message }
})
}
