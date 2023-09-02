import React from 'react'
import Header from '../components/Header.jsx'

const Form = () => {
  return (
    <>
      <Header />

      <div className="nftbg">
        <div className="newnft">
          <p className="p1">CREATE</p>
          <p className="p2"> &nbsp;NEW NFT</p>
        </div>

        <form>
          <section>
            <label htmlFor="url">Import file</label>
            <input type="url" name="url" id="url" />
            <div className="photo_container">
              <img src="" alt="pofile picture preview" />
            </div>
          </section>

          <section>
            <label htmlFor="url">NFT title</label>
            <input type="url" name="url" id="url" />
          </section>
        </form>

        <div className="bar">
          <p>Additional NFT’s details</p>
          <div className="arrow"> </div>
        </div>

        <div className="btn_NFT">
          <p className="btn_text_NFT">✨ Create Now ✨</p>
        </div>
      </div>
    </>
  )
}

export default Form
