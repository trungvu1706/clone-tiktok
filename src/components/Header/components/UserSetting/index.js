import classNames from 'classnames/bind';

import Button from '~/components/Button';
import Image from '~/components/Image';
import Popup from '~/components/Popup';
import { ACCOUNT_SETTING_LIST } from '~/constants';
import styles from './UserSetting.module.scss';

let cx = classNames.bind(styles);

const UserSetting = () => {
  const renderContents = ACCOUNT_SETTING_LIST.map((item, index) => {
    return (
      <div key={index} className={cx('data-wrapper')}>
        <Button
          variant="text"
          startIcon={item.icon}
          className={cx('custom-btn')}
          to={item.pathName}
        >
          {item.title}
        </Button>
      </div>
    );
  });

  return (
    <Popup
      visible
      content={renderContents}
      placement="bottom-end"
      className={cx('user-setting-wrapper')}
    >
      <Image
        className={cx('user-header-avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5f622e8b62b2de4531e82fa217619193.jpeg?x-expires=1655823600&amp;x-signature=A0m78DG8f%2BMH%2FXSTTrlteHXD5oY%3D"
        alt="avatar"
      />
    </Popup>
  );
};

export default UserSetting;
