import { NotificationCenter } from "./notificationCenter";
import { DiscordObserver } from "./observers/discordObserver";
import { SlackObserver } from "./observers/slackObserver";
import { TelegramObserver } from "./observers/telegramObserver";

describe('NotificationCenter', () => {
    it('should notify all observers', () => {
        // given
        const notificationCenter = NotificationCenter.getInstance();
        notificationCenter.reset();
        
        const slack = new SlackObserver();
        const discord = new DiscordObserver();

        notificationCenter.addObserver(slack);
        notificationCenter.addObserver(discord);
        
        // when
        const notiMessage = 'Build failed!!!';
        notificationCenter.postNotification(notiMessage);

        // then
        expect(slack.message).toBe('Slacker, ' + notiMessage);
        expect(discord.message).toBe('Discordian, ' + notiMessage);
    });

    it('should not notify more than 2 observers', () => {
        // given
        const notificationCenter = NotificationCenter.getInstance();
        notificationCenter.reset();

        const slack = new SlackObserver();
        const discord = new DiscordObserver();
        const telegram = new TelegramObserver();

        notificationCenter.addObserver(slack);
        notificationCenter.addObserver(discord);
        notificationCenter.addObserver(telegram);
        
        // when
        const notiMessage = 'Build failed!!!';
        notificationCenter.postNotification(notiMessage);

        // then
        expect(slack.message).toBe('Slacker, ' + notiMessage);
        expect(discord.message).toBe('Discordian, ' + notiMessage);
        expect(telegram.message).toBe('');
    });
});