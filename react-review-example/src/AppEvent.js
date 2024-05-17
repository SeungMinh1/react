

function Button({ onMtSave, children }) {
  return (
    <button onClick={()=>{onMtSave('자식에게 전달')} }>
      {children}
    </button>
  );
}

function PlayButton({ movieName, onClick1 }) {
  function handlePlayClick(msg) {
    onClick1();
  }

  return (
    <Button onMtSave={handlePlayClick}>
      Play "{movieName}"
    </Button>
  );
}

function UploadButton({onClick2}) {
  return (
    <Button onMtSave={() => onClick2()}>
      Upload Image
    </Button>
  );
}
function Toolbar({onClick1, onClick2}) {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" onClick1={onClick1} />
      <UploadButton onClick2={onClick2}/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Toolbar onClick1={()=>alert("click1")} onClick2={()=>alert("click2")}></Toolbar>
    </div>
  );
}

export default App;
