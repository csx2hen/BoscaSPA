import React from 'react';
import {Card, Col, Row} from 'antd';
import {compactLayout, normalLayout} from './CenterBoxLayoutConfig';

const CenterBox = (props) => {

  let layout = normalLayout;
  if (props.compact) {
    layout = compactLayout;
  }

  return (
    <Row justify="center" align="middle" style={{height: '100vh'}}>
      <Col {...layout}>
        <Card title={props.title}>
          {props.children}
        </Card>
      </Col>
    </Row>
  );
};

export default CenterBox;