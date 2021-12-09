/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var newuse = User.getProperty ("newuse")
if(!newuse){ 
var button = [{ title : "✅ Check" , command : "✅ Check" }]
Bot.sendInlineKeyboard(button , "*Subscribe Our Channels To Use This Bot And Earn From It\n\n➤ @pinoy_earning_channel\n\n☑️ Done Subscribed! Click Continue.*")
var use = Libs.ResourcesLib.anotherChatRes("user", "global")
use.add(1)
User.setProperty("7old", Date.now(), "integer");
}
function hello(message) {
  var greetings = ""
  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("withbal", refUser.telegramid)
 balance.add(0.50)
Bot.sendMessageToChatWithId(refUser.telegramid, "*🏧 New Referral = +0.50 PHP*\n\n🆔 User Id = *"+user.telegramid+"*");
Bot.sendMessage("*🥰You are Reffered By @"+refUser.username+"*")
Bot.sendMessage("_As A Welcome Bunos By Clicking Others Referral Link We Added 1 PHP As A Gift🎁 To You_")
var go = Libs.ResourcesLib.userRes("balance")
go.add(1)
}

function doAlreadyAttracted(){
  Bot.sendMessage("*Whoops‼️ I Think You Have Already Started The Bot❕*");
Bot.runCommand("main_menu");
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}
Libs.ReferralLib.currentUser.track(trackOptions);


var newuse = User.getProperty ("newuse")
if(!newuse){ Bot.sendMessageToChatWithId(2116898236, "🚦New User🚦\n\n⚜ User = "+user.first_name+"\n🔰 Username = @"+user.username+"\n🆔 User ID = "+user.telegramid+"\n📛 User Link = ["+user.first_name+"](tg://user?id="+user.telegramid+")")
User.setProperty ("newuse",true,"boolean")
}
