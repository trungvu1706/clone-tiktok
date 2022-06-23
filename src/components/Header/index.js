import { AnnotationIcon, PaperAirplaneIcon } from '@heroicons/react/outline';
import { PlusSmIcon } from '@heroicons/react/solid';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import { MENU_LIST } from '~/constants';
import Button from '../Button';
import Tooltip from '../Tooltip';
import MenuList from './components/MenuList';
import SearchBar from './components/SearchBar';
import UserSetting from './components/UserSetting';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = ({ currentUser = false }) => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        <img src={images.logo} alt="logo" />
        <div className={cx('search-bar')}>
          <SearchBar />
        </div>
        <div className={cx('btn-group')}>
          {currentUser ? (
            <>
              <Button variant="outlined" startIcon={<PlusSmIcon />}>
                Upload
              </Button>
              <Tooltip content="Message">
                <a className={cx('message-btn')} href="#1">
                  <span>
                    <PaperAirplaneIcon />
                  </span>
                </a>
              </Tooltip>
              <Tooltip content="Inbox">
                <button className={cx('inbox-btn')}>
                  <AnnotationIcon />
                </button>
              </Tooltip>
              <UserSetting />
            </>
          ) : (
            <>
              <Button variant="outlined" startIcon={<PlusSmIcon />}>
                Upload
              </Button>
              <Button color="primary">Login</Button>
              <MenuList data={MENU_LIST} />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
