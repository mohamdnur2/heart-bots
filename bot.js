const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
    +client.user.setGame(`Heartinvite=>-invite`,'https://www.twitch.tv/MeeRcY')

});












client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });



client.on('message', message => {
    if (message.content.startsWith("-invite")) {
    message.guild.fetchInvites()
    .then(invites => message.channel.send(`لقد دعوت  ${invites.find(invite => invite.inviter.id === message.author.id).uses} عضو لهاذا السيرفر`))
     
    }
});

client.login('NTEwNzEzMjcwNTg0MjEzNTA0.DsgWfQ.B7R7hPHtoYzhUroaqeccxdviLTw');
