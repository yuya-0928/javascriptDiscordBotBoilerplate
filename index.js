require('dotenv').config();
const env = process.env;

const { Client, Intents } = require('discord.js'); //discord.js からClientとIntentsを読み込む

const client = new Client({ intents: [Intents.FLAGS.GUILDS] }); //clientインスタンスを作成する

client.once('ready', () => { //ここにボットが起動した際のコードを書く(一度のみ実行)
  console.log('起動完了'); //黒い画面(コンソール)に「起動完了」と表示させる
});

client.login(env.TOKEN); //ログインする