import "./App.css";

function App() {
  return (
    <>
      <div className="bg-foundationimage h-screen bg-center">
        <h1 className="text-white-0 text-4xl text-center">Morse Code</h1>
        <textarea className=" text-4xl w-screen h-1/4 relative opacity-20 border-8 border-black"></textarea>
        <div className="w-screen flex justify-between mt-36">
          <h4 className="text-yellow text-4xl">Decrypt</h4>
          <h4 className="text-white-0 text-4xl">Encrypt</h4>
        </div>
        <textarea className=" text-4xl border-8 border-black w-screen h-1/4 absolute opacity-20 bottom-0"></textarea>
      </div>
    </>
  );
}

export default App;
