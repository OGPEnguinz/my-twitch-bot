require('dotenv').config();

const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
  
	identity: {
		username: process.env.TWITCH_BOT_USERMANE,
		password: process.env.TWITCH_BOT_OAUTH_TOKEN
	},
	channels: [ 'alliecat072' ]
});
client.connect().catch(console.error);

  client.on('message', (channel, tags, message, self) => {
    const isNotBot = tags.username.toLowerCase() !== process.env.TWITCH_BOT_USERMANE

    client.on('message', (channel, tags, message, self) => {
      if(self || !message.startsWith('!')) return;
    
      const args = message.slice(1).split(' ');
      const command = args.shift().toLowerCase();
    
      if(command === 'echo') {
        client.say(channel, `@${tags.username}, you said: "${args.join(' ')}"`);
      }
 
 


    },);})