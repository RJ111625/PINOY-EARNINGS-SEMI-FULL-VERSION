/*CMD
  command: ➕ CASH IN
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Balance Edit
  answer: 
  keyboard: 
  aliases: 
CMD*/

var use = User.getProperty("status")
if(use == "retail"){Bot.sendKeyboard("📩Send Proof,🔙Back To Balance","*HELLO👋🏻 Retailler Kung Nais Mong Mag Cash In:*\n\n*Esend ang Iyong Payment sa:\n\nGcash:* _09665380950_\n\n*PayPal:* _ronnienimo2002@gmail.com_\n\n⚠️Mag Send Ng ScreenShot Samin Gamit Ang Pag Pindot Ng 📩Send Proof Button sa Ibaba⬇️")
}else{
Bot.sendMessage("[Pinoy🇵🇭 Earning💰BOT🤖 Group](https://t.me/pinoy_earning_group)")
Bot.sendMessage("*You Can Find A Retailler In Our Official Group‼️*")
}
