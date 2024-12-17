import { AppTopbarRef } from '@/types';
import Link from 'next/link';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
  // REFS
  const menubuttonRef = useRef(null);
  const topbarmenuRef = useRef(null);
  const topbarmenubuttonRef = useRef(null);

  useImperativeHandle(ref, () => ({
    menubutton: menubuttonRef.current,
    topbarmenu: topbarmenuRef.current,
    topbarmenubutton: topbarmenubuttonRef.current,
  }));

  return (
    <div className="layout-topbar">
      <Link href="/" className="layout-topbar-logo">
        <span>VC Components</span>
      </Link>
    </div>
  );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
