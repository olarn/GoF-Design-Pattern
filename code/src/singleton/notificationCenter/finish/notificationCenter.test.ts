import { NotificationCenter } from './notificationCenter';
import { DiscordObserver } from './observers/discordObserver';
import { SlackObserver } from './observers/slackObserver';
import { TelegramObserver } from './observers/telegramObserver';

describe('[Singleton - finish] NotificationCenter', () => {
  it('should notify on Slack and Discord (only 2), not telegram.', () => {
    // given
    const notificationCenter = NotificationCenter.getInstance();
    notificationCenter.reset();

    const slack = new SlackObserver();
    const discord = new DiscordObserver();
    const telegram = new TelegramObserver();

    const spyOnSlack = jest.spyOn(slack, 'notify');
    const spyOnDiscord = jest.spyOn(discord, 'notify');
    const spyOnTelegram = jest.spyOn(telegram, 'notify');

    notificationCenter.addObserver(slack);
    notificationCenter.addObserver(discord);
    notificationCenter.addObserver(telegram);

    // when
    const notiMessage = 'Build failed!!!';
    notificationCenter.postNotification(notiMessage);

    // then
    expect(spyOnSlack).toBeCalled();
    expect(spyOnDiscord).toBeCalled();
    expect(spyOnTelegram).not.toBeCalled();
  });
});
