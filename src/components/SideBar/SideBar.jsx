import BookMark from "../BookMark/BookMark";
import "./SideBar.css";

const SideBar = ({ readTime, bookMarks }) => {
  let totalTime = 0;
  for (const time of readTime) {
    totalTime = totalTime + time.read_time;
  }
  return (
    <>
      <div className="side-container my-8 ">
        <div className="time-container ">
          <p className="">Spent time on read: {totalTime} min</p>
        </div>

        <div className="bookmark">
          <h2 className="text-2xl font-bold mt-1.5 p-1">
            Bookmarked Blogs : {bookMarks.length}
          </h2>
          {bookMarks.map((bookMark) => (
            <BookMark bookMark={bookMark} key={bookMark.id}></BookMark>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
