import clsx from 'clsx';
import { memo } from 'react';
import style from './index.module.scss';

const Header = memo(() => {
  return (
    <div className={clsx(style.container)}>
      Header
    </div>
  );
});

export default Header;