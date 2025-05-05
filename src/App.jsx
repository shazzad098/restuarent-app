import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto py-8 px-4">
          {/* Your main content goes here */}
          <h1 className="text-3xl font-bold text-center">
            MyFeedback for business
          </h1>
        </main>
      </div>
    </>
  );
}

export default App;
