import Wed from "../practise/wed-card/wed-card";
import "../practise/wed-card/Wed-card.css";

function Testride() {
  const title = "श्री गणेशाए नमह:";
  const wedimage1 = "./ganesh.png";
  const wedimage2 = "ramsita.jpg";
  const nimantrana = "हार्दिक निमन्त्रणा ";
  const description = {
    behula: "राम",
    sanga: "संग",
    behuli: "सीता",
    miti: "  चैत्र १६ २०८१ | सोमबार",
    desc1: "बैबाहिक कार्यक्रम ",
    jantijane: "जन्ती जाने ",
    samaye: "समय: बिहान ९ बजे ",
    sthan: "स्थान: अयोध्या",
    pritibhoj: "प्रितिभोज",
    bhojsamaye: "समय: बिहान ११ बजे ",
    bhojmiti: "मिति: चैत्र १७  २०८१ ",
    ayodhyapariwar: "अयोध्या परिवार ",
  };
  return (
    <div>
      <Wed
        title={title}
        wedimage1={wedimage1}
        wedimage2={wedimage2}
        nimantrana={nimantrana}
        description={description}
      >
        <h3> {nimantrana}</h3>
      </Wed>
    </div>
  );
}

export default Testride;
