import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { Button, InputBox } from './components';

function App() {
  return (
    <main
      className="h-screen m-0 grid items-center justify-center w-full bg-cover"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
      }}
    >
      <form style={{ width: '500px' }} className="grid grid-cols-1">
        <InputBox firstLabel="From" secondLabel="Currency" />

        <Button className="-mt-2.5 -mb-2.5 flex border-2 border-white place-self-center z-10 py-2 px-1.5">
          <FaLongArrowAltUp className="-mr-1" />
          <FaLongArrowAltDown />
        </Button>

        <InputBox firstLabel="From" secondLabel="Currency" />
      </form>
    </main>
  );
}

export default App;
