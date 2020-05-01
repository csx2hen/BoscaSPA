import React from 'react';
import {Col, Row} from 'antd';
import logo from '../../assets/images/logo.png';
import './Logo.css';

const Logo = (props) => {

  return (
    <div id="logo-banner">
      <Row className="logo" align="bottom">
        <Col>
          <img src={logo} alt=""/>
        </Col>
        <Col offset={1}>
          <span>Bosca</span>
        </Col>
      </Row>
    </div>
  );
};

export default Logo;