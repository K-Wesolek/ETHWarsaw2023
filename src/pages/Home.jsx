import React from "react";
import Header from "../components/Header"

const Home = () => {
  return (
<>
      <div className="overlay">
        <Header/>
          <div className="under_header">

          <div className="main_box">

              <div className="under_text"><p className="p1">
                  CREATE UNIQUE
              </p>

              <p className="p2">&nbsp;NFTS</p>

              </div>

              <div className="img_box">
              <img
                  src="styles/images/circle.png"
                  alt="Circle"
                  className="Circle"
              />
              <img
                  src="styles/images/cards.png"
                  alt="Cards"
                  className="Cards"
              />

              </div>


              <div className="btn_und">
                  <p className="btn_text_und">✨ Create Now ✨</p>
              </div>


          </div>



      </div>
      </div>
    </>
  );
};

export default Home;



