import { AppTopbarRef } from '@/types';
import Link from 'next/link';
import React from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppTopbar = React.forwardRef<AppTopbarRef>((props, ref) => {
  // REFS
  const { onMenuToggle } = React.useContext(LayoutContext);
  const menubuttonRef = React.useRef(null);
  const topbarmenuRef = React.useRef(null);
  const topbarmenubuttonRef = React.useRef(null);

  React.useImperativeHandle(ref, () => ({
    menubutton: menubuttonRef.current,
    topbarmenu: topbarmenuRef.current,
    topbarmenubutton: topbarmenubuttonRef.current,
  }));

  return (
    <div className="layout-topbar">
      <Link href="/" className="layout-topbar-logo">
        <span>VC Components</span>
      </Link>
      <button
        ref={menubuttonRef}
        type="button"
        className="p-link layout-menu-button layout-topbar-button"
        onClick={onMenuToggle}
      >
        <i className="pi pi-bars" />
      </button>
    </div>
  );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
