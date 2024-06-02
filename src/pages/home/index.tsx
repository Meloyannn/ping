import Header from "../../components/header";
import UserInfoContainer from '../../containers/user-info';
import { type FC } from 'react'

const HomePage: FC = () => {
  return (
    <div>
      <Header />
      <UserInfoContainer />
    </div>
  );
}

export default HomePage;