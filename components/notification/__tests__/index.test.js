import { Notification } from '../../index';

describe('Notification', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  afterEach(() => {
    Notification.destroy();
  });

  it('should be able to hide manually', () => {
    Notification.open({
      message: 'Notification Title',
      duration: 0,
      key: '1',
    });
    Notification.open({
      message: 'Notification Title',
      duration: 0,
      key: '2',
    });
    expect(document.querySelectorAll('.jc-notification-notice').length).toBe(2);
    Notification.close('1');
    jest.runAllTimers();
    expect(document.querySelectorAll('.jc-notification-notice').length).toBe(1);
    Notification.close('2');
    jest.runAllTimers();
    expect(document.querySelectorAll('.jc-notification-notice').length).toBe(0);
  });

  it('should be able to destroy globally', () => {
    Notification.open({
      message: 'Notification Title',
      duration: 0,
    });
    Notification.open({
      message: 'Notification Title',
      duration: 0,
    });
    expect(document.querySelectorAll('.jc-notification').length).toBe(1);
    expect(document.querySelectorAll('.jc-notification-notice').length).toBe(2);
    Notification.destroy();
    expect(document.querySelectorAll('.jc-notification').length).toBe(0);
    expect(document.querySelectorAll('.jc-notification-notice').length).toBe(0);
  });

  it('should be able to destroy after config', () => {
    Notification.config({
      bottom: 100,
    });
    Notification.destroy();
  });

  it('should be able to open with icon', () => {
    const openNotificationWithIcon = (type) => {
      const iconPrefix = '.jc-notification-notice-icon';
      Notification[type]({
        message: 'Notification Title',
        duration: 0,
        description: 'This is the content of the notification.',
      });
      expect(document.querySelectorAll(`${iconPrefix}-${type}`).length).toBe(1);
    };
    ['success', 'info', 'warning', 'error'].forEach((type) => {
      openNotificationWithIcon(type);
    });
  });
});
