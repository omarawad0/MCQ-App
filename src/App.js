import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Enroll from "./components/Enroll";
import Questions from "./components/Questions";
import Score from "./components/Score";
import { useSelector } from "react-redux";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
i18n
  .use(ChainedBackend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next",
        },
      },
    },
    backend: {
      backends: [LocalStorageBackend, HttpBackend],
      backendOptions: [
        {
          expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
        },
        {
          loadPath: "public/locales/{{lng}}/{{ns}}.json",
        },
      ],
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

function App() {
  const { currentStep } = useSelector((state) => state.student);
  const { t } = useTranslation();
  const steps = {
    ENROLL: <Enroll />,
    QUESTIONS: <Questions />,
    SCORE: <Score />,
  };
  console.log(t("Welcome to React"));
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
