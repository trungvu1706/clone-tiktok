import { DotsVerticalIcon } from '@heroicons/react/solid';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Button from '~/components/Button';
import Popup from '~/components/Popup';
import styles from './MenuList.module.scss';

let cx = classNames.bind(styles);

const MenuList = ({ data = [] }) => {
  const [history, setHistory] = useState([{ data }]);
  const currentData = history[history.length - 1];

  const renderData = currentData.data.map((item, index) => {
    const renderSubMenu = () => {
      if (item.subMenu) {
        setHistory((prev) => [...prev, item.subMenu]);
      }

      if (item.code) {
        console.log('click', item.code);
      }
    };

    return (
      <div key={index} className={cx('data-wrapper')}>
        <Button
          variant="text"
          startIcon={item.icon}
          className={cx('custom-btn')}
          onClick={renderSubMenu}
          to={item.pathName}
        >
          {item.title || item.language}
        </Button>
      </div>
    );
  });

  const onBack = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  const onHide = () => {
    setHistory([{ data }]);
  };

  return (
    <Popup
      className={cx('pop-up-wrapper')}
      content={renderData}
      delay={[0, 700]}
      placement="bottom-end"
      interactive
      hasHeaderWithBtnBack={history.length > 1}
      headerWithBtnBackTitle={currentData.subTitle}
      onBack={onBack}
      onHide={onHide}
    >
      <button className={cx('btn-menu')}>
        <DotsVerticalIcon />
      </button>
    </Popup>
  );
};

MenuList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MenuList;
