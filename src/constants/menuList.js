import { KeyIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';
import images from '~/assets/images';
import Image from '~/components/Image';

export const MENU_LIST = [
  {
    title: 'Language',
    icon: <Image src={images.languages} />,
    subMenu: {
      subTitle: 'Language',
      data: [
        {
          code: 'en',
          language: 'English',
        },
        {
          code: 'vn',
          language: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    title: 'Feedback and help',
    icon: <QuestionMarkCircleIcon />,
    pathName: '/feedback',
  },
  {
    title: 'Keyboard shortcuts',
    icon: <KeyIcon />,
  },
];
