'use client';

import './notification-marquee.css';

interface NotificationMarqueeProps {
  notifications?: string[];
  bgColor?: string;
  textColor?: string;
  speed?: 'slow' | 'normal' | 'fast';
}

const defaultNotifications = [
  '⚠️ Entry not allowed with slippers',
  '⚠️ No outside food allowed',
];

export const NotificationMarquee = ({
  notifications = defaultNotifications,
  bgColor = '#a98f63',
  textColor = '#110f0f',
  speed = 'normal',
}: NotificationMarqueeProps) => {
  const speedClass = {
    slow: 'marquee-slow',
    normal: 'marquee-normal',
    fast: 'marquee-fast',
  }[speed];

  // Quadruple the notifications for seamless infinite loop
  const loopedNotifications = [...notifications, ...notifications, ...notifications, ...notifications];

  return (
    <div className={`notification-marquee ${bgColor === '#a98f63' ? 'bg-[#a98f63]' : ''}`} style={{ backgroundColor: bgColor }}>
      <div className={`marquee-container ${speedClass}`}>
        {loopedNotifications.map((notification, idx) => (
          <span
            key={idx}
            className="marquee-item"
            style={{ color: textColor }}
          >
            {notification}
          </span>
        ))}
      </div>
    </div>
  );
};
