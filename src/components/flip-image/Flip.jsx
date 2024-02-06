import "./Flip.css";
function Flip() {
  return (
    <div>
      <div>
        <h1>Image Flip with Text</h1>
        <h3>Hover over the image below:</h3>

        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img
                src="ducati.jpg"
                alt="Paris"
                style="width:300px;height:200px"
              />
            </div>
            <div className="flip-box-back">
              <h2>Paris</h2>
              <p>What an amazing city</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flip;
