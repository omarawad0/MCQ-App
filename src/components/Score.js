import { Alert, AlertTitle, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetScore } from "../redux/features/scoreSlice";
import { enrollStudent, nextStep } from "../redux/features/studentslice";

function Score() {
  const { score: {score}, questions: {questions} } = useSelector((state) => state);
  const dispatch = useDispatch();

  const scoreSeverity = () => {
    const half = Math.floor(questions.length / 2);
    if (score >= half) {
      return "success";
    } else {
      return "error";
    }
  };

  const resetQuiz = () => {
    dispatch(resetScore(questions.length));
    dispatch(enrollStudent(""));
    dispatch(nextStep("ENROLL"));
  };
  return (
    <Box>
      <Box mt={5}>
        <Typography variant="h4">Final Score</Typography>
        <Alert severity={scoreSeverity()}>
          <AlertTitle>Results</AlertTitle>
          You scored — <strong>{`${score}/${questions.length}`}</strong>
        </Alert>
      </Box>
      <Box mt={2}>
        <Button variant="contained" onClick={resetQuiz}>
          Reset
        </Button>
      </Box>
    </Box>
  );
}

export default Score;
