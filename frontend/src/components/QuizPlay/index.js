import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "../UI/BlurCard/Card";
import { ButtonOrange, ButtonOutline } from "../UI/Button/Button";
import classes from "./QuizPlay.module.css";
import Ads from "../UI/Ads/Ads";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { quizActions } from "../../store/quizSlice";
import axios from "axios";

const QuizPlay = () => {
  const { quizId } = useParams();
  const dispatch = useDispatch();
  const quiz = useLoaderData()
 


  const QuizOpenHandler = () => {
    dispatch(quizActions.playQuize(quiz))
  }

  return (
    <>

      <Card className={classes.quizPlay}>
        <div className={classes.imgIcon}>
          <img src="../assets/cardicon.svg" alt="Card Image" />
        </div>
        <div className={classes.quizPlay}>
          <h6>quizId : {quizId}</h6>
          <h6>{quiz.name}</h6>
          <h3>
            {quiz.title} <img src="../assets/coin.png" alt="coin" />
          </h3>
          <h5>
            You've got 60 seconds to answer all questions. Answer many
            questions as you can.
          </h5>
          <h5>Join and save the coins you win! Its free & safe!</h5>
          <Link to={`/quiz/${quizId}/start`} onClick={QuizOpenHandler}>
            <ButtonOrange>Play Now</ButtonOrange>
          </Link>
          <Link to={`/quiz/${quizId}/start`} onClick={QuizOpenHandler}>
            <ButtonOutline>Play as Guest</ButtonOutline>
          </Link>
        </div>
      </Card>
      <Ads />
      {/* <></> */}
    </>
  );
};
export default QuizPlay;


// export const Loader = async () => {
//   const { quizId } = useParams();
//   console.log(quizId)
//   let data = await axios.get("http://localhost:8080/quizes/" + quizId);
//   let quizes = await data.data.response;

//   return quizes;
// }