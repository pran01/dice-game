import one from "../assets/images/one.jpg";
import two from "../assets/images/two.jpg";
import three from "../assets/images/three.jpg";
import four from "../assets/images/four.jpg";
import five from "../assets/images/five.jpg";
import six from "../assets/images/six.jpg";
import loading from "../assets/images/loading.gif";

const Die = ({ number }) => {
  return (
    <div className="w-16 h-16 rounded-md flex justify-center items-center">
      {number === 1 && <img src={one} alt="die 1"></img>}
      {number === 2 && <img src={two} alt="die 2"></img>}
      {number === 3 && <img src={three} alt="die 3"></img>}
      {number === 4 && <img src={four} alt="die 4"></img>}
      {number === 5 && <img src={five} alt="die 5"></img>}
      {number === 6 && <img src={six} alt="die 6"></img>}
      {number === -1 && <img src={loading} alt="loading"></img>}
    </div>
  );
};

export default Die;
