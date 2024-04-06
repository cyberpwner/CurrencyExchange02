import InputBox from './components/InputBox';

function App() {
  return (
    <main
      className="h-screen m-0 grid items-center justify-center w-full bg-cover"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
      }}
    >
      <form style={{ width: '500px' }}>
        <InputBox firstLabel="From" secondLabel="Currency" />
      </form>
    </main>
  );
}

export default App;
