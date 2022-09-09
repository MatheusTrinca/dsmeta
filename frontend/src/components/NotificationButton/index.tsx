import icon from '../../assets/img/notification-icon.svg';
import './styles.css';

import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import { toast } from 'react-toastify';

type props = {
  saleId: number;
};

const NotificationButton = ({ saleId }: props) => {
  const handleClick = () => {
    axios
      .get(`${BASE_URL}/sales/${saleId}/notification`)
      .then(() => toast('SMS Enviado'));
  };

  return (
    <div className="dsmeta-red-btn" onClick={handleClick}>
      <img src={icon} alt="Notificar" />
    </div>
  );
};

export default NotificationButton;
