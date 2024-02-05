/* eslint-disable react/prop-types */
import "./Wed-card.css";
function Wed(props) {
  const { title, children, wedimage1, wedimage2, description } = props;
  console.log(description);
  return (
    <div className="wed-card">
      <div className="title-card">
        <h4>{title}</h4>
      </div>
      <div className="wed-images">
        <div> {<img className="wed-image1" src={wedimage1} />}</div>
        <div> {<img className="wed-image2" src={wedimage2} />}</div>
      </div>
      {children && <div className="children">{children}</div>}
      <div className="behulasangabehuli">
        <h1>{description.behula}</h1>
        <h3 style={{ paddingTop: "10px" }}>{description.sanga}</h3>
        <h1>{description.behuli}</h1>
      </div>
      <div className="miti_bar">
        <h4>{description.miti}</h4>
        <h4>{description.desc1}</h4>
      </div>
      <div className="baibahik_karyekram">
        <div>
          <h5>{description.jantijane}</h5>
          <h6>{description.sthan}</h6>
          <h6>{description.samaye}</h6>
        </div>
        <div>
          <h5>{description.pritibhoj}</h5>
          <h6>{description.bhojsamaye}</h6>
          <h6>{description.bhojmiti}</h6>
        </div>
      </div>
      <div className="ayodhyapariwar">
        <h2>{description.ayodhyapariwar}</h2>
      </div>
    </div>
  );
}

export default Wed;
