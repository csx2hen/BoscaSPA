import React from 'react';
import {Col, Row} from 'antd';
import UserState from './UserState/UserState';

const Header = (props) => {

  return (
    <Row justify="end">
      {
        props.name &&
        <Col pull={1}>
          <UserState name={props.name.charAt(0).toUpperCase()}
                     history={props.history}/>
        </Col>
      }
    </Row>
  );
};

export default Header;