import LogoBlog from './LogoBlog';
import Search from '../shared/Search';
import HeaderNav from './HeaderNav';

export default function Header() {
  return (
    <>
      <header id="header">
        <div className="tcl-container">
          <div className="tcl-row tcl-no-gutters header">
            <div className="tcl-col-2">
              {/* Logo */}
              <LogoBlog></LogoBlog>
            </div>
            <div className="tcl-col-4">
              {/* Search */}
              <Search></Search>
            </div>
            <div className="tcl-col-6">
              <HeaderNav></HeaderNav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}