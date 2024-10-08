import {Telegraf, Markup} from 'telegraf'
import { message } from 'telegraf/filters'
const token = '7260900968:AAFDdMRgVmWHZdVmllYqBZBO2Fd0R7u_fIw'
const webAppUrl = 'https://gamma-doro-tg-app.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {

    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
        Markup.keyboard([Markup.button.webApp('Отправить сообщение', webAppUrl)])
    )
} )

bot.on(message('web_app_data'), async (ctx) => {
    console.log('hey in bot');
    const data = JSON.parse(ctx.webAppData.data);  // Парсим полученные данные
    ctx.reply(`Отладка: ${data?.feedback}` ?? 'Данные пусты');
});


bot.launch()

