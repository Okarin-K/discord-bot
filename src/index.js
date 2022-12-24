const { Client, GatewayIntentBits, IntentsBitField } = require('discord.js');
const getCatImageUrl = require('./getCatImageUrl');
const client = new Client({ intents: [GatewayIntentBits.Guilds, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.MessageContent] });
const { TOKEN } = require('../config/config.json');

client.on('ready', () => {
	console.log(`${client.user.tag}でログインしました。`);
});

client.on('messageCreate', async (message) => {
    console.log(`メッセージを受信しました: ${message.content}`);

    // Botには反応しないようにする
    if (message.author.bot) {
        return
    };


    if (message.content === "ping") {
        messagJe.channel.send("アクセス成功");
    }

    if (message.content === 'いまだ') {
        message.channel.send("こんにちは！おさかなです！");
    }

    if(message.content === 'にゃーん') {
        const url = await getCatImageUrl();

        message.channel.send(url);
    }
});

client.login(TOKEN);
