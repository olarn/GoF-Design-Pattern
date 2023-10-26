import { NotificationCenter } from './notificationCenter';
import { DiscordObserver } from './observers/discordObserver';
import { SlackObserver } from './observers/slackObserver';
import { TelegramObserver } from './observers/telegramObserver';

describe('NotificationCenter', () => {
  it('should notify on Slack and Discord (only 2), not telegram.', () => {
    // // given notification 1
    // const notificationCenter1 = new NotificationCenter();
    // notificationCenter1.reset();
    // const slack = new SlackObserver();
    // const discord = new DiscordObserver();
    // const spyOnSlack = jest.spyOn(slack, 'notify');
    // const spyOnDiscord = jest.spyOn(discord, 'notify');
    // notificationCenter1.addObserver(slack);
    // notificationCenter1.addObserver(discord);
    // // given notification 2
    // const notificationCenter2 = new NotificationCenter();
    // const telegram = new TelegramObserver();
    // const spyOnTelegram = jest.spyOn(telegram, 'notify');
    // notificationCenter2.addObserver(telegram);
    // // when
    // const notiMessage = 'Build failed!!!';
    // notificationCenter2.postNotification(notiMessage);
    // // then
    // expect(spyOnSlack).toBeCalled();
    // expect(spyOnDiscord).toBeCalled();
    // expect(spyOnTelegram).not.toBeCalled();
  });
});
