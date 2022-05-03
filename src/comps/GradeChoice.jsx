import MockImage from "./MockImage";
import BackIcon from "../svg/BackIcon";

const GradeChoice = () => {
  return (
      <article className="grade-choice">
          <BackIcon />
          <h1 className="heading">Klasy</h1>
          <img src='' alt=''/>

          <h2 className="tertiary-heading">Ostatnie lekcje</h2>

          <article className="last-lessons">
            <MockImage size='325/300'/>
          </article>

          <article className="last-lessons">
            <MockImage size='325/300'/>
          </article>
      </article>
  );
}

export default GradeChoice;