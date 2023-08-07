import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import checkAnswer from "../helpers/checkAnswer";
import { useSelector, useDispatch } from "react-redux";
import { decrementScore } from "../redux/features/scoreSlice";
import { nextStep } from "../redux/features/studentslice";


function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState(null);
  const { questions } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const { question, answers } = questions[currentQuestion];

  const onAnswerClick = (answerIndex) => {
    setAnswer(answerIndex);
  };

  const isLastQuestion = () => {
    return currentQuestion === questions.length - 1;
  };

  const handleNextQuestion = () => {
    if (answer != null) {
      const isCorrect = checkAnswer(answer);
      dispatch(decrementScore(!isCorrect));
      setAnswer(null);
      isLastQuestion()
        ? dispatch(nextStep("SCORE"))
        : setCurrentQuestion((prev) => prev + 1);
    }
  };

  return (
    <Box>
      <Typography variant="p" fontSize="20px">
        {question}
      </Typography>
      <List sx={{ width: "100%" }} aria-label="contacts" disablePadding>
        {answers.map((a, i) => (
          <ListItem key={a} onClick={() => onAnswerClick(i)}>
            <ListItemButton
              sx={{ textAlign: "center" }}
              selected={i === answer}
            >
              <ListItemText primary={a} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={handleNextQuestion}>
        {isLastQuestion() ? "Finsih" : "Next"}
      </Button>
    </Box>
  );
}

export default Questions;
