import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "auto",
};

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [])
  return (
    <>
      {loading ?
        <ClipLoader
          color={'black'}
          loading={loading}
          cssOverride={override}
          size={150}
        />
        :
        <>
          <BrowserRouter>
            <div className='relative z-0 bg-primary'>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          </BrowserRouter>
        </>}
    </>
  );
}

export default App;
