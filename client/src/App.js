import FileSaver from "file-saver";
import "./App.css";
import { AiFillFileExcel } from "react-icons/ai";
function App() {
  const ExportHandler = async () => {
    await fetch("/api/export")
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        return FileSaver.saveAs(blob, "users.xlsx");
      });
  };
  return (
    <div className="App">
      <div className="flex w-full items-center">
        <button
          onClick={ExportHandler}
          className="flex mx-auto mt-[50px] items-center justify-center cursor-pointer border border-black px-3 py-1 rounded-lg hover:bg-indigo-500 hover:text-white"
        >
          {" "}
          <AiFillFileExcel /> Export Users
        </button>
      </div>
    </div>
  );
}

export default App;
