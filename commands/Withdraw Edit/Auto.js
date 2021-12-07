/*CMD
  command: Auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdraw Edit
  answer: 
  keyboard: 
  aliases: 
CMD*/

var withdrawn = Bot.getProperty("totalWithdrawn");
withdrawn = parseFloat(withdrawn); 
var wallet = User.getProperty("wallet");
var balance = Libs.ResourcesLib.userRes("withbal")
let value = message;
if(message < 100 ){
Bot.sendMessage("_❌ Minimum Withdraw 100 PHP_")
Bot.runCommand("📤 Withdraw");
}else{
var number = parseInt(value)
if (!number) {
Bot.sendMessage("⚠️INVALID AMOUNT⚠️")
Bot.runCommand("📤 Withdraw")
}else{
if(message > balance.value()){
Bot.sendMessage("_❌ Maximum Withdraw "+balance.value().toFixed(2)+" PHP_")
Bot.runCommand("📤 Withdraw");
}else{
User.setProperty("lasttime_withdraw", Date.now(), "integer");
Bot.sendMessage("*📤 Withdrawal Sent 📤\n\n💳 Transaction Details = Generating....\n 💰Amount = "+message+" PHP\n💼 Wallet = "+wallet+"\n\n⛔ MayBe It Will Take Upto 24 Hours To Complete Your Payment⏰\n\n Check Your Status Here👉🏻 @pinoy_earning_channel*")
balance.add(-message)
let amount = parseFloat(message);
let tgid = User.getProperty("id");
let res = Libs.ResourcesLib.anotherUserRes("balance", 2116898236);
res.add(parseFloat(amount));
Bot.sendMessage("*Succesfully SENDED Back To* \n*👤 User = *ADMIN*\n💰 Amount= "+amount+"*");
Api.sendMessage({ 
chat_id: "@pinoy_earning_channel", 
text: "*🔋 New Payout Request 🔋\n\n▪️ Status = Processing\n▪️ User Id = "+user.telegramid+"\n▪️ Amount = "+message+" PHP*\n\n*📱GCASH/PAYPAL ACCOUNT=* "+wallet+"\n\n*👮🏻‍♂ Bot = @"+bot.name+"*" , 
parse_mode: "Markdown"})
Api.sendMessage({ 
chat_id: "2116898236", 
text: "*🔋 Someone Has Payout Request 🔋\n\n▪️ Pay Now\n▪️ User Id = "+user.telegramid+"\n▪️ Amount = "+message+" PHP*\n\n*📱GCASH/PAYPAL ACCOUNT =* "+wallet+"\n\n*👮🏻‍♂ Bot = @"+bot.name+"*" , 
parse_mode: "Markdown"})
Bot.runCommand("bal2")
var withdraw = Libs.ResourcesLib.anotherChatRes("withdraw", "global")
withdraw.add(+message)
}}}

