import React from 'react';
import images from '~/assets/images';
import Image from '~/components/Image';

export const ACCOUNT_SETTING_LIST = [
  {
    icon: <Image src={images.profile} />,
    title: 'View Profile',
    pathName: '/profile',
  },
  {
    icon: <Image src={images.coins} />,
    title: 'Get Coin',
  },
  {
    icon: <Image src={images.setting} />,
    title: 'Settings',
  },
  {
    icon: <Image src={images.languages} />,
    title: 'English',
  },
  {
    icon: <Image src={images.feedback} />,
    title: 'Feedback and help',
  },
  {
    icon: <Image src={images.keyboard} />,
    title: 'Keyboard shortcuts',
  },
  {
    icon: <Image src={images.logout} />,
    title: 'Log out',
  },
];
