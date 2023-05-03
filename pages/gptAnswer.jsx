import styles from "../styles/GptAnswerPage.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Configuration, OpenAIApi } from "openai";

export default function GptAnswer() {
  const router = useRouter();

  const [lorem, setLorem] =
    useState(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui. Lorem
  ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
  doloribus quaerat sed, ratione error aliquam qui magni possimus nemo
  debitis quisquam soluta nihil reiciendis reprehenderit illo
  provident officiis? Vero, qui. Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Dolorum doloribus quaerat sed, ratione
  error aliquam qui magni possimus nemo debitis quisquam soluta nihil
  reiciendis reprehenderit illo provident officiis? Vero, qui.`);

  const [answer, setAnswer] = useState(null);
  const [question, setQuestion] = useState("");

  async function sendRequestToGpt(question) {
    const openai = new OpenAIApi(
      new Configuration({
        organization: "org-U5mita9c7Q0c6AujhiMqBShq",
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      })
    );

    openai
      .createChatCompletion({
        max_tokens: 2000,
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
      })
      .then((response) => {
        console.log(response.data.choices[0].message);
        setAnswer(response.data.choices[0].message);
      });
  }

  const editTheQuestion = () => {
    `
    hey 
    `;
  };

  useEffect(() => {
    if (Object.keys(router.query).length !== 0) {
      editTheQuestion();
      //sendRequestToGpt(question);
    } else {
      console.log("else");
    }
  }, []);

  const handleBack = () => {
    router.push({
      pathname: "/",
      query: router.query,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={handleBack}>
        back
      </div>
      <div className={styles.gptAnswerMain}>
        <div className={styles.innerGptAnswerMain}>
          <textarea className={styles.gptAnswerBox}>{answer}</textarea>
        </div>
      </div>
    </div>
  );
}
