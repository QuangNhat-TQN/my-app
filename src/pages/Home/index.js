import {
  CalendarOutlined,
  CaretDownOutlined,
  CheckOutlined,
  MailOutlined,
  PhoneOutlined,
  PlusOutlined,
  RightOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Space, Typography, Card, Divider, Avatar, Button, Row, Col } from 'antd';
import { useState } from 'react';

function Home() {
  const [isActive, setIsActive] = useState(false);

  const toggleState = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Typography.Text
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#141414',
              marginRight: 14,
            }}
          >
            Trạng thái hồ sơ
          </Typography.Text>
          <Button onClick={toggleState} style={isActive ? { color: '#FF2D54' } : { color: '#34C759' }}>
            {isActive ? 'TẠM NGƯNG' : 'ĐANG SỬ DỤNG'} <CaretDownOutlined style={{ color: '#1F2831' }} />
          </Button>
        </Col>
        <Col span={12}>
          <Card
            title={<span style={{ fontSize: 16, color: '#141414', fontWeight: 600 }}>NV phụ trách</span>}
            style={{ width: '360px', height: '100%' }}
          >
            <Space align="start" style={{ height: 80 }}>
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                size={60}
              ></Avatar>
              <Typography.Text
                style={{
                  fontSize: '16px',
                  color: '#141414',
                }}
              >
                Lorem ipsum dolor sit amet consetetur sadipsci<br></br>
                <Typography.Text
                  style={{
                    fontSize: '12px',
                    color: '#878787',
                  }}
                >
                  #NV3423423423423
                </Typography.Text>
              </Typography.Text>
            </Space>
            <div style={{ marginTop: 30 }}>
              <Button>Chỉnh sửa</Button>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title={<span style={{ fontSize: 16, color: '#34C759', fontWeight: 600 }}>Đã đồng bộ</span>}
            style={{ width: '360px', height: '100%' }}
            extra={
              <SyncOutlined
                style={{
                  color: '#FFFFFF',
                  background: '#34C759',
                  width: '30px',
                  height: '30px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                }}
              />
            }
          >
            <Space align="start" style={{ height: 80 }}>
              <Typography.Text
                style={{
                  fontSize: '16px',
                  color: '#141414',
                }}
              >
                Khách hàng #KH2030032103<br></br>
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  size={19}
                ></Avatar>
                <Typography.Text
                  style={{
                    fontSize: '12px',
                    color: '#707070',
                    lineHeight: 2,
                    marginLeft: 5,
                  }}
                >
                  16:32, 16/08/2022
                </Typography.Text>
              </Typography.Text>
            </Space>

            <div style={{ marginTop: 30 }}>
              <Button>Kiểm tra</Button>
            </div>
          </Card>
        </Col>
        <Col span={24}>
          <Divider />
        </Col>
      </Row>
      <Row gutter={[16, 16]} id="personal-info">
        <Col span={12}>
          <Typography.Text
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#141414',
              lineHeight: 2,
            }}
          >
            Thông tin chung
          </Typography.Text>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Typography.Link underline="true" style={{ fontSize: 14, color: '#141414' }}>
            Sửa
          </Typography.Link>
        </Col>
        <Col span={24}>
          <Space direction="vertical">
            <Typography.Text
              style={{
                fontSize: '16px',
                color: '#141414',
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed<br></br>
              <Typography.Text
                style={{
                  fontSize: '14px',
                  color: '#4C4C4C',
                  lineHeight: 2,
                }}
              >
                3423423423423
              </Typography.Text>
            </Typography.Text>
            <Space>
              <Typography.Text
                style={{
                  fontSize: '14px',
                  color: '#707070',
                  lineHeight: 2,
                }}
              >
                Group name
              </Typography.Text>
              •
              <Typography.Text
                style={{
                  fontSize: '14px',
                  color: '#707070',
                  lineHeight: 2,
                  listStyleType: 'disc',
                }}
              >
                Group name
              </Typography.Text>
            </Space>
            <Space direction="vertical">
              <Typography.Text
                style={{
                  fontSize: '14px',
                  color: '#141414',
                  fontWeight: 400,
                }}
              >
                <CheckOutlined /> Nhà phân phối, sản xuất <br></br>
                <CheckOutlined /> Khách mua hàng
              </Typography.Text>
            </Space>
          </Space>
          <Divider />
        </Col>
      </Row>
      <Row gutter={[16, 16]} id="invoice">
        <Col span={12}>
          <Typography.Text
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#141414',
              lineHeight: 2,
            }}
          >
            Pháp nhân xuất hóa đơn
          </Typography.Text>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Typography.Link underline="true" style={{ fontSize: 14, color: '#141414' }}>
            Sửa
          </Typography.Link>
        </Col>
        <Col span={24}>
          <Typography.Text
            style={{
              fontSize: '14px',
              color: '#141414',
              fontWeight: 400,
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed<br></br>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed<br></br>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </Typography.Text>
          <Divider />
        </Col>
      </Row>
      <Row gutter={[16, 16]} id="address">
        <Col span={12}>
          <Typography.Text
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#141414',
              lineHeight: 2,
            }}
          >
            Địa chỉ
          </Typography.Text>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <PlusOutlined />
          <Typography.Link underline="true" style={{ fontSize: 14, color: '#141414' }}>
            Thêm địa chỉ
          </Typography.Link>
        </Col>
        <Col span={14}>
          <Typography.Text
            style={{
              fontSize: '14px',
              color: '#141414',
              fontWeight: 400,
            }}
          >
            Số nhà, tên đường, ấp, khu phố Lorem ipsum dolor sit amet<br></br>Phường xã, Quận huyện, Tỉnh thành
          </Typography.Text>
        </Col>
        <Col span={10} style={{ textAlign: 'right' }}>
          <Typography.Link underline="true" style={{ fontSize: 14, color: '#141414' }}>
            Sửa
          </Typography.Link>
        </Col>
        <Col span={24}>
          <Typography.Text
            style={{
              fontSize: '12px',
              color: '#707070',
              fontWeight: 400,
            }}
          >
            *Địa chỉ giao hàng mặc định
          </Typography.Text>
          <Divider />
        </Col>
      </Row>
      <Row gutter={[16, 16]} id="contact">
        <Col span={12}>
          <Typography.Text
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#141414',
              lineHeight: 2,
            }}
          >
            Người liên hệ
          </Typography.Text>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <PlusOutlined />
          <Typography.Link underline="true" style={{ fontSize: 14, color: '#141414' }}>
            Thêm người liên hệ
          </Typography.Link>
        </Col>
        <Col span={14}>
          <Typography.Text
            style={{
              fontSize: '14px',
              color: '#141414',
              fontWeight: 400,
            }}
          >
            Tên liên hệ Lorem ipsum dolor sit amet, consetetur<br></br>
            <Typography.Text
              style={{
                fontSize: '14px',
                color: '#707070',
                fontWeight: 400,
              }}
            >
              ID #45934578540
            </Typography.Text>
          </Typography.Text>
        </Col>
        <Col span={10} style={{ textAlign: 'right' }}>
          <Typography.Link underline="true" style={{ fontSize: 14, color: '#141414' }}>
            Sửa
          </Typography.Link>
        </Col>
        <Col span={24}>
          <PhoneOutlined rotate={90} />
          <Typography.Text
            style={{
              fontSize: '14px',
              color: '#141414',
              fontWeight: 400,
              marginLeft: 10,
            }}
          >
            0123456789
          </Typography.Text>
          <br></br>
          <MailOutlined />
          <Typography.Text
            style={{
              fontSize: '14px',
              color: '#141414',
              fontWeight: 400,
              marginLeft: 10,
            }}
          >
            loremipsum@gmail.com
          </Typography.Text>
          <br></br>
          <CalendarOutlined />
          <Typography.Text
            style={{
              fontSize: '14px',
              color: '#4C4C4C',
              fontWeight: 400,
              marginLeft: 10,
            }}
          >
            Sinh nhật:
          </Typography.Text>
          <Typography.Text
            style={{
              fontSize: '14px',
              color: '#141414',
              fontWeight: 400,
              marginLeft: 10,
            }}
          >
            25/07
          </Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Text
            style={{
              fontSize: '12px',
              color: '#707070',
              fontWeight: 400,
            }}
          >
            *Người liên hệ mặc định
          </Typography.Text>
          <Divider />
        </Col>
      </Row>
      <Row gutter={[16, 16]} id="history">
        <Col span={12}>
          <Typography.Text
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#141414',
            }}
          >
            Lịch sử chỉnh sửa
          </Typography.Text>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Typography.Link underline="true" style={{ fontSize: 14, color: '#141414' }}>
            Xem tất cả
          </Typography.Link>
          <RightOutlined />
        </Col>
        <Col span={24}>
          <Typography.Text
            style={{
              fontSize: '14px',
              fontWeight: 400,
              color: '#141414',
            }}
          >
            Chỉnh sửa lần cuối lúc 16:23, 22/06/2022 bởi{' '}
          </Typography.Text>

          <Typography.Text
            style={{
              fontSize: '14px',
              fontWeight: 400,
              color: '#707070',
            }}
          >
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              size={19}
            ></Avatar>{' '}
            Lorem ipsum dolor
          </Typography.Text>
          <Divider />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
