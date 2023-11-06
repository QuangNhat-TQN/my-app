import { RightOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';

function Header() {
  return (
    <div className="Header">
      <Space>
        <Typography.Text
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#303030',
          }}
        >
          Khách hàng
        </Typography.Text>
        <RightOutlined />
        <Typography.Text
          style={{
            fontSize: '16px',
            color: '#707070',
          }}
        >
          [Form type][ID]
        </Typography.Text>
      </Space>
    </div>
  );
}

export default Header;
