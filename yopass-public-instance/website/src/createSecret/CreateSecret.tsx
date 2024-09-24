import { useTranslation } from 'react-i18next';
import { Typography, Link } from '@mui/material';
import { env } from '../env';

const CreateSecret = () => {
  const { t } = useTranslation();
  const private_instance = env.REACT_APP_ENCRYPTION_URL || `${window.location.protocol}//${window.location.host}`;
  return (
    <>
      <Typography component="h1" variant="h4" align="center">
      {t('create.title')}
      <Link href ={private_instance} > {private_instance} </Link>
      </Typography>
    </>
  );
};

export default CreateSecret;
