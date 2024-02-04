/* eslint-disable react/no-unescaped-entities */
import ReadMoreButton from "./home/readmore/readmore";
import "./Home.css";
function Home() {
  const longText =
    "Ducati is an Italian motorcycle manufacturer known for producing high-performance motorcycles, motorcycle components, and accessories. The company was founded in 1926 in Bologna, Italy, by Antonio Cavalieri Ducati, Adriano Cavalieri Ducati, and Bruno Cavalieri Ducati. Initially, Ducati focused on the production of radio components and electrical devices. Ducati entered the motorcycle market in the late 1940s, and over the years, it has become synonymous with stylish, powerful, and technologically advanced motorcycles. "; // Your long text goes here

  return (
    <>
      <div className="bodydescription" style={{ display: "flex" }}>
        <div className="content">
          <div>
            <h1>Welcome Ducatian's</h1>
            <ReadMoreButton text={longText} maxLength={100} />
          </div>
        </div>
        <img src="/ducati.jpg" className="img" alt="jhgftyd" />
      </div>
      <video
        width="60%"
        controls
        autoPlay
        style={{
          border: "2px solid #333",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <source src="/panigale.mp4" type="video/mp4" />
        Your does not support the video tag.
      </video>
    </>
  );
}

export default Home;
