import { NotificationCenter } from './notificationCenter';
import { DiscordObserver } from './observers/discordObserver';
import { SlackObserver } from './observers/slackObserver';
import { TelegramObserver } from './observers/telegramObserver';

describe('[Singleton - finish] NotificationCenter', () => {
  it('the notificationCenter should be a singleton', () => {
    const firstNotificationCenter = NotificationCenter.getInstance();
    firstNotificationCenter.reset();

    const slack = new SlackObserver();
    const discord = new DiscordObserver();
    const telegram = new TelegramObserver();

    const slackSpy = jest.spyOn(slack, 'notify');
    const discordSpy = jest.spyOn(discord, 'notify');
    const telegramSpy = jest.spyOn(telegram, 'notify');

    firstNotificationCenter.addObserver(slack);

    expect(firstNotificationCenter.totalObservers()).toBe(1);

    const secondNotificationCenter = NotificationCenter.getInstance();
    secondNotificationCenter.addObserver(discord);
    secondNotificationCenter.addObserver(telegram); 

    expect(secondNotificationCenter.totalObservers()).toBe(3);

    firstNotificationCenter.postNotification('Hello');

    expect(slackSpy).toHaveBeenCalledTimes(1);
    expect(discordSpy).toHaveBeenCalledTimes(1);
    expect(telegramSpy).toHaveBeenCalledTimes(1);
  });
});
