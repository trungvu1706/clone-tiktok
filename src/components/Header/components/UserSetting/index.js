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
      interactive
      delay={[0, 700]}
      content={renderContents}
      placement="bottom-end"
      className={cx('user-setting-wrapper')}
    >
      <Image className={cx('user-header-avatar')} alt="avatar" />
    </Popup>
  );
};

export default UserSetting;
