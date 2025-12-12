import { useState } from 'react';
import { register } from '../mock/services/users';
import { toast } from 'react-toastify';
import Toast from '../components/Toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast('As senhas não se coincidem');
    }

    try {
      await register(fullname, email, password);
      toast.success('Conta criada com sucesso!');
      navigate('/login');
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e);
        toast.error(e.message);
      }
    }
  };

  return (
    <form onSubmit={submit} className="flex flex-row justify-center p-2">
      <Toast />
      <div>
        <label>Nome Completo</label>
        <input value={fullname} onChange={e => setFullname(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Senha</label>
        <input value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <div>
        <label>Confirmar Senha</label>
        <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
      </div>
      <button type="submit" className="w-full">
        Enviar
      </button>
    </form>
  );
};

export default Register;
