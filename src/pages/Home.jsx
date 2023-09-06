import React from "react";

function Home() {
  return (
    <div className="Home__page">
      <div className="Home__container container">
        <img
          src="data:image/png;base64,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"
          alt="home logo"
          className="Home__image"
        />
        <div className="Home__content">
          <h2 className="title">What is React Router DOM ?</h2>
          <p className="text">
            React Router Dom is used to build single-page applications i.e.
            applications that have many pages or components but the page is
            never refreshed instead the content is dynamically fetched based on
            the URL. This process is called Routing and it is made possible with
            the help of React Router Dom.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
