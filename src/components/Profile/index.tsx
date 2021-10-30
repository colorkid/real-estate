import React from 'react';
import { useHistory } from 'react-router-dom';
import Auth from '../../store/auth';
import { Button, Col, Row, Statistic } from 'antd';
import dayjs from 'dayjs';
import { observer } from 'mobx-react-lite';
import Loader from '../Loader';

const Profile = observer(() => {
  const history = useHistory();

  if (!Auth.isAuthed) {
    history.push('/login');
  }

  const { email, metadata } = Auth.user;

  const creationTime = dayjs(metadata?.creationTime).format('DD/MM/YY');

  const logOutHandler = () => {
    Auth.logOut();
  };

  return (
    <>
      {Auth.isFetching ? (
        <Loader />
      ) : (
        <Row>
          <Col>
            <Statistic title="Email" value={email} />
            <Statistic title="Creation date" value={creationTime} style={{ marginTop: '24px' }} />
            <Button onClick={logOutHandler} style={{ marginTop: '24px' }}>
              Log out
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
});

export default Profile;

{
  /* <div>
          <div>
            <div>
              <Statistic title="Email" value={email} />
            </div>
            <div>
              <Statistic title="Creation date" value={creationTime} />
            </div>
          </div>
          <Button onClick={logOutHandler}>Log out</Button>
        </div> */
}
