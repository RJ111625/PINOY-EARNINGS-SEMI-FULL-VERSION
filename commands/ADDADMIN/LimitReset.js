/*CMD
  command: LimitReset
  help: 
  need_reply: false
  auto_retry_time: 
  folder: ADDADMIN
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("bunos_limit", "0", "integer")
User.setProperty("solve_limit", "0", "integer");
Bot.sendMessage("*✔️All Limits Has Been Reset*")
