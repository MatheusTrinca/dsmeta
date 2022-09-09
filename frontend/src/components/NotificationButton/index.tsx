import icon from '../../assets/img/notification-icon.svg';
import './styles.css';
import { Sale } from '../../models/sale';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';

type props = {
  saleId: number;
};

const NotificationButton = ({ saleId }: props) => {
  const handleClick = () => {
    axios
      .get(`${BASE_URL}/sales/${saleId}/notification`)
      .then(response => console.log(response));
  };

  return (
    <div className="dsmeta-red-btn" onClick={handleClick}>
      <img src={icon} alt="Notificar" />
    </div>
  );
};

export default NotificationButton;
