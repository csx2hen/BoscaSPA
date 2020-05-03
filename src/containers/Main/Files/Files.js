import React, {useEffect} from 'react';
import FileService from '../../../services/FileService';
import UploadArea from '../../../components/UploadArea/UploadArea';

const Files = (props) => {

  // check user auth
  // const [userToken, setUserToken] = useState(null);
  // useEffect(() => {
  //   const checkAuth = async () => {
  //     setUserToken(await getUserToken(props.history));
  //   };
  //   checkAuth();
  // }, []);

  useEffect(() => {
    FileService.list('');
  }, []);

  return (
    <div>
      <UploadArea/>
    </div>
  );
};

export default Files;