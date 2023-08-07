import { FormControl, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shuffleQuestionsHelper from "../helpers/shuffleQuestionHelper";
import { enrollStudent, nextStep } from "../redux/features/studentslice";
import { shuffleQuestions } from "../redux/features/questionsSlice";

function Enroll() {
  const [studentName, setStudentName] = useState("");
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.questions);

  const nameChangeHandler = (e) => {
    const newName = e.target.value;
    setStudentName(newName);
  };

  const handleClick = () => {
    const name = studentName.trim();
    if (name) {
      dispatch(enrollStudent(name));
      const shuffledQuestions = shuffleQuestionsHelper(questions);
      dispatch(shuffleQuestions(shuffledQuestions));
      dispatch(nextStep("QUESTIONS"));
    }
  };

  return (
    <Box width="100%" mt={5}>
      <FormControl fullWidth mb={5}>
        <TextField
          variant="outlined"
          label="Your Name"
          type="text"
          size="large"
          value={studentName}
          onChange={nameChangeHandler}
        />
      </FormControl>
      <Box width="100%" mt={3}>
        <Button variant="contained" fullWidth onClick={handleClick}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default Enroll;
