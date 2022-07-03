import { SearchIcon } from '@heroicons/react/outline';
import { XCircleIcon } from '@heroicons/react/solid';
import classNames from 'classnames/bind';

import { useEffect, useRef, useState } from 'react';
import { userApi } from '~/apis/userApi';
import images from '~/assets/images';
import Image from '~/components/Image';
import Popup from '~/components/Popup';
import { useDebounce } from '~/hooks';
import SearchBarPopup from '../SearchBarPopup';
import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isShowResult, setIsShowResult] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const debounce = useDebounce(value, 500);

  useEffect(() => {
    if (debounce === '') return;

    const fetchData = async () => {
      const params = {
        q: debounce,
        type: 'less',
      };
      try {
        setIsLoading(true);

        const res = await userApi.searchUserList(params);
        setSearchResult(res.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [debounce]);

  const inputRef = useRef();

  const onChange = (e) => {
    const { value } = e.target;

    if (value.startsWith(' ')) return;
    setValue(value);
  };

  const handleClearText = () => {
    setValue('');
    inputRef.current.focus();
  };

  const handleOnKeydown = (e) => {
    if (e.keyCode === 32 && value.length === 0) {
      e.preventDefault();
    }
  };

  const onClickOutside = () => {
    setIsShowResult(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.blur();
  };

  return (
    <Popup
      interactive
      visible={value.length > 0 && isShowResult}
      content={<SearchBarPopup dataList={searchResult} />}
      className={cx('pop-up-min-width')}
      onClickOutside={onClickOutside}
    >
      <div className={cx('input-wrapper')}>
        <input
          ref={inputRef}
          value={value}
          onChange={onChange}
          className={cx('input-inner')}
          placeholder="Search accounts and videos"
          onFocus={() => setIsShowResult(true)}
          onKeyDown={handleOnKeydown}
        />
        <div className={cx('icon-wrapper')}>
          {value.length > 0 && !isLoading && (
            <button onClick={handleClearText}>
              <XCircleIcon />
            </button>
          )}
          {isLoading && (
            <Image src={images.spinner} className={cx('loading')} />
          )}
        </div>
        <span className={cx('search-border')}></span>
        <button
          className={cx('search-btn')}
          onClick={handleSubmit}
          onMouseDown={(e) => e.preventDefault()}
        >
          <SearchIcon width={24} height={24} />
        </button>
      </div>
    </Popup>
  );
};

export default SearchBar;
