module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝑭𝑨𝑹𝑨𝑩𝑰 𝑭𝑨𝑹𝑼𝑲 𝑹𝑶𝑯𝑨𝑵
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝑭𝒂𝒓𝒂𝒃𝒊 𝑭𝒂𝒓𝒖𝒌 𝑹𝒐𝒉𝒂𝒏
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝑵𝒂𝒚𝒂𝒏𝒑𝒖𝒓,𝑪𝒐𝒎𝒊𝒍𝒍𝒂
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬:𝐌𝐢𝐫𝐩𝐮𝐫-12,𝐃𝐡𝐚𝐤𝐚-1216
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 𝟏𝟖+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐈𝐓'𝐒 𝐂𝐎𝐌𝐏𝐋𝐈𝐂𝐀𝐓𝐄𝐃
𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧     :𝑰𝑵𝑻𝑬𝑹 1𝑺𝑻 𝒀𝑬𝑨𝑹
𝑪𝒐𝒍𝒍𝒆𝒈𝒆        :𝑴𝒊𝒍𝒆𝒔𝒕𝒐𝒏𝒆 𝑪𝒐𝒍𝒍𝒆𝒈𝒆,𝑫𝒊𝒚𝒂𝒃𝒂𝒓𝒊 𝑪𝒂𝒎𝒑𝒖𝒔
𝐖𝐨𝐫𝐤        : 𝐂𝐎𝐋𝐋𝐄𝐆𝐄 𝐒𝐓𝐔𝐃𝐄𝐍𝐓
𝐆𝐦𝐚𝐢𝐥       : farabifarukrohan01@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+8801902404796
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/FFR01
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/profile.php?id=61561555781007&mibextid=ZbWKwL`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/61561555781007/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
