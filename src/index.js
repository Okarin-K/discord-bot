const { Client, GatewayIntentBits, IntentsBitField } = require('discord.js');
const fetch = require('node-fetch');
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
        message.channel.send("アクセス成功");
    }

    if (message.content.match(/いまだ/)) {
        message.channel.send("こんにちは！おさかなです！");
    }

    if(message.content === 'にゃーん') {
        const url = await getCatImageUrl();

        message.channel.send(url);
    }
});

async function getCatImageUrl() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const json = await response.json();

    console.log(json);

    return json[0].url;
}

client.login(TOKEN);
