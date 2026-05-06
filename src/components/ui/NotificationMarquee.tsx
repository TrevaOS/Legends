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

  return (
    <div className={`notification-marquee ${bgColor === '#a98f63' ? 'bg-[#a98f63]' : ''}`} style={{ backgroundColor: bgColor }}>
      <div className={`marquee-track ${speedClass}`}>
        {[0, 1].map((copyIndex) => (
          <div
            key={copyIndex}
            className="marquee-group"
            aria-hidden={copyIndex === 1}
          >
            {notifications.map((notification, idx) => (
              <span
                key={`${copyIndex}-${idx}-${notification}`}
                className="marquee-item"
                style={{ color: textColor }}
              >
                {notification}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
