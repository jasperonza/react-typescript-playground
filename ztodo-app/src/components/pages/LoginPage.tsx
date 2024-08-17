import LoginForm from '../forms/LoginForm';
import AppHeader from '../layout/AppHeader';
import AppNav from '../layout/AppNav';

export default function LoginPage() {

  return (
    <>
      <AppHeader>
        <AppNav></AppNav>
      </AppHeader>
      <LoginForm />
    </>
  )
}