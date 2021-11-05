import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Enroll from "./components/Enroll";
import Questions from "./components/Questions";
import Score from "./components/Score";
import { useSelector } from "react-redux";
function App() {
  const { currentStep } = useSelector((state) => state);

  const steps = {
    ENROLL: <Enroll />,
    QUESTIONS: <Questions />,
    SCORE: <Score />,
  };

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={10}>
        <Typography variant="h2" fontWeight="bold">
          MCQ App
        </Typography>
        {steps[currentStep]}
      </Box>
    </Container>
  );
}

export default App;
