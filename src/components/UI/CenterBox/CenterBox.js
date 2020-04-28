import React from 'react';
import {Card, Col, Row} from 'antd';

const CenterBox = (props) => {

  return (
    <Row justify="center" align="middle" style={{height: '100vh'}}>
      <Col span={props.height ? props.height : 6}>
        <Card title={props.title}>
          {props.children}
        </Card>
      </Col>
    </Row>
  );
};

export default CenterBox;