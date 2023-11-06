import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function myFunction(id) {
  const element = document.getElementById(id);
  element.scrollIntoView();
}
function Sidebar() {
  return (
    <Menu style={{ width: '282px' }} mode="inline" defaultOpenKeys={['/']} defaultSelectedKeys={['/personal-info']}>
      <Menu.SubMenu key="/" title="Hồ sơ khách hàng">
        <Menu.Item onClick={() => myFunction('personal-info')} key="/personal-info">
          Thông tin chung
        </Menu.Item>
        <Menu.Item onClick={() => myFunction('invoice')} key="/invoice">
          Pháp nhân xuất hóa đơn
        </Menu.Item>
        <Menu.Item onClick={() => myFunction('address')} key="/address">
          Địa chỉ
        </Menu.Item>
        <Menu.Item onClick={() => myFunction('contact')} key="/contact">
          Người liên hệ
        </Menu.Item>
        <Menu.Item onClick={() => myFunction('history')} key="/history">
          Lịch sử chỉnh sửa
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="/Store">
        <Link to="/Store">Cửa hàng trực thuộc</Link>
      </Menu.Item>
      <Menu.Item key="/policy">
        <Link to="/policy">Chính sách bán hàng</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Sidebar;
