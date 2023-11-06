import Header from './Header';
import Sidebar from './Sidebar';
import Title from './Title';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <Title />
      <div className="sidebar-fixed">
        <Sidebar />
      </div>
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
