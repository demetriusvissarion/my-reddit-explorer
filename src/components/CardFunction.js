import Comment from "../img/Comment.svg";
import Hide from "../img/Hide.svg";

export const CardFunction = () => {
  return (
    <div className="CardFunction">
      <img src={Comment} id="commentIcon" alt="Comment Icon" />
      <p className="Comment">1.2k comments</p>
      <img src={Hide} id="hideIcon" alt="Hide Icon" />
    </div>
  );
};
