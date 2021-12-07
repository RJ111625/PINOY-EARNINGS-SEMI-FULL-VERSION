/*CMD
  command: Photo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ADMIN PANELS
  answer: 
  keyboard: 
  aliases: 
CMD*/

var pto = options.photo
var cap = options.caption
Api.sendPhoto({
photo: pto,
caption: "*🌌 Admin Photo Broadcast. #photo\n➖➖➖➖➖➖➖➖➖➖➖➖\n"+cap+"*",
parse_mode: "markdown" })
