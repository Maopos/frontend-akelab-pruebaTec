import star5 from "../../assets/Star5.png";
import star3 from "../../assets/Star3.png";

const Stars = ({ stars }) => {
  const style = "w-2 h-2 mt-1 mr-1";

  if (stars === 10) {
    return (
      <div className="flex flex-row">
        <img src={star3} alt="star" className={style} />
        <img src={star3} alt="star" className={style} />
        <img src={star3} alt="star" className={style} />
        <img src={star3} alt="star" className={style} />
        <img src={star3} alt="star" className={style} />
      </div>
    );
  } else if (stars < 10 && stars >= 8) {
    return (
      <div className="flex flex-row">
        <img src={star3} alt="star" className={style} />
        <img src={star3} alt="star" className={style} />
        <img src={star3} alt="star" className={style} />
        <img src={star3} alt="star" className={style} />
        <img src={star5} alt="star" className={style} />
      </div>
    );
  } else if (stars < 8 && stars >= 6) {
    return (
      <div className="flex flex-row">
        <img src={star3} alt="star" className={style} />
        <img src={star3} alt="star" className={style} />
        <img src={star3} alt="star" className={style} />
        <img src={star5} alt="star" className={style} />
        <img src={star5} alt="star" className={style} />
      </div>
    );
  } else if (stars < 4 && stars >= 2) {
    return (
      <div className="flex flex-row">
        <img src={star3} alt="star" className={style} />
        <img src={star3} alt="star" className={style} />
        <img src={star5} alt="star" className={style} />
        <img src={star5} alt="star" className={style} />
        <img src={star5} alt="star" className={style} />
      </div>
    );
  } else if (stars < 2) {
    return (
      <div className="flex flex-row">
        <img src={star3} alt="star" className={style} />
        <img src={star5} alt="star" className={style} />
        <img src={star5} alt="star" className={style} />
        <img src={star5} alt="star" className={style} />
        <img src={star5} alt="star" className={style} />
      </div>
    );
  }
};

export default Stars;
