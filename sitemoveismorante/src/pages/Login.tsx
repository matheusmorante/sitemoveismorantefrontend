import { useState } from 'react';
import { toast } from 'react-toastify';
import Toast from '../components/Toast';
import { login } from '../mock/services/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await login(email, password);
      toast.success('Login efetuado com sucesso!');
      navigate('/');
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e);
        toast.error(e.message);
      }
    }
  };

  return (
    <form onSubmit={submit}>
      <Toast />
      <div>
        <label>Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Senha</label>
        <input value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button type="submit" className="w-full">
        Enviar
      </button>
    </form>
  );
};

export default Login;
