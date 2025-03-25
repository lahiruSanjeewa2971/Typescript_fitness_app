import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "@/shared/types";
import Home from "./scenes/home";
import Benifits from "./scenes/benifits";

function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isToOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isToOfPage={isToOfPage} />

      <Home setSelectedPage={setSelectedPage}/>
      <Benifits setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;
