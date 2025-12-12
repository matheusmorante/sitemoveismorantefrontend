import Overlay from '../../Overlay';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ChangeName = ({ isOpen, onClose }: Props) => {
  return (
    <Overlay isOpen={isOpen} onClose={onClose}>
      <form>
        <h3>Alterar nome de usuário</h3>
         <div>
            <label></label>
            <input />
         </div>
         <h3>Alterar nome de usuário</h3>
      </form>
    </Overlay>
  );
};

export default ChangeName;
