import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Image from '~/components/Image';
import styles from './SearchBarPopup.module.scss';

const cx = classNames.bind(styles);

const SearchBarPopup = ({ dataList = [], setIsShowResult }) => {
  const navigate = useNavigate();

  const handleGoDetailPage = (data) => {
    navigate(`/@${data.nickname}`);
    setIsShowResult(false);
  };
  return (
    <div className={cx('SB-pop-up-wrapper')}>
      <div className={cx('SB-pop-up-title')}>Accounts</div>
      {dataList.map((data) => (
        <div
          onClick={() => handleGoDetailPage(data)}
          className={cx('SB-pop-up-content')}
          key={data.id}
        >
          <span className={cx('SB-pop-up-avatar')}>
            <Image src={data.avatar} alt="avatar" />
          </span>

          <div className={cx('SB-pop-up-details')}>
            <h4 className={cx('SB-pop-up-description__title')}>
              {data.full_name}
            </h4>
            <p className={cx('SB-pop-up-details__description')}>
              {data.nickname}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

SearchBarPopup.propTypes = {
  dataList: PropTypes.array.isRequired,
  setIsShowResult: PropTypes.func,
};

export default SearchBarPopup;
