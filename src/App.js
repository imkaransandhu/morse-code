import "./App.css";

function App() {
  return (
    <>
      <div className="bg-foundationimage h-screen bg-center">
        <h1 className="text-white text-4xl text-center">Morse Code</h1>
        <textarea className=" w-1/2 h-60 relative left-1/4 opacity-20 "></textarea>
        <div className="w-screen flex justify-between mt-14">
          <h4 className="text-white text-4xl">Decrypt</h4>
          <h4 className="text-white text-4xl">Encrypt</h4>
        </div>
        <textarea className=" w-1/2 h-60 absolute left-1/4 opacity-20 bottom-0"></textarea>
      </div>
    </>
  );
}

export default App;
