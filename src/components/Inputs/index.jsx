// import { useEffect, useState } from "react";
// import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
// import styles from "../../../styles/Inputs.module.css";
// import { useRouter } from "next/router";

// function Inputs() {
//   const router = useRouter();

//   const [answers, setAnswers] = useState({});

//   const [openIndex, setOpenIndex] = useState(-1);

//   const theQuestions = [
//     "The name of the project and a short description",
//     "Extensive detail on the use of the tools and options in the application",
//     "Technologies Used",
//     "Future Improvements",
//     "",
//     "",
//     "Acknowledgments",
//   ];

//   useEffect(() => {
//     router.query && setAnswers(router.query);
//   }, []);

//   const handleAnswerChange = (event, question) => {
//     setAnswers({ ...answers, [question]: event.target.value });
//   };

//   const handleOpen = (index) => {
//     setOpenIndex(openIndex === index ? -1 : index);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     router.push({
//       pathname: "/gptAnswer",
//       query: answers,
//     });
//   };

//   return (
//     <div className={styles.outerFrame}>
//       <form onSubmit={(e) => handleSubmit(e)} className={styles.mainInputs}>
//         {theQuestions.map((question, index) => {
//           return (
//             <div key={question} className={styles.containerInput}>
//               {index !== openIndex ? (
//                 <div
//                   className={styles.inputTitle}
//                   onClick={() => handleOpen(index)}
//                 >
//                   <MdKeyboardArrowRight className={styles.icon} />
//                   {question}
//                 </div>
//               ) : (
//                 <div
//                   className={styles.inputTitle}
//                   onClick={() => setOpenIndex(-1)}
//                 >
//                   <MdKeyboardArrowDown className={styles.icon} />
//                   {question}
//                 </div>
//               )}
//               {index === openIndex && (
//                 <textarea
//                   name={question}
//                   className={styles.input}
//                   value={answers[question] || ""}
//                   placeholder="bdfx"
//                   onChange={(event) => handleAnswerChange(event, question)}
//                 >
//                   {question}
//                 </textarea>
//               )}
//             </div>
//           );
//         })}
//         <div className={styles.containerInputSubmit}>
//           <input type="submit" className={styles.inputSubmit} />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Inputs;

import { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import styles from "../../../styles/Inputs.module.css";
import { useRouter } from "next/router";

function Inputs() {
  const router = useRouter();

  const [answers, setAnswers] = useState({});

  const [openIndex, setOpenIndex] = useState(null);

  const theQuestions = [
    {
      title: "Project Title",
      inDetail: "The name of the project and a short description.",
    },
    {
      title: "Usage",
      inDetail:
        "Extensive detail on the use of the tools and options in the application.",
    },
    {
      title: "Contributing",
      inDetail:
        "Guidelines for contributing to the project, including how to report bugs, request features, or submit pull requests.",
    },
    {
      title: "License",
      inDetail:
        "Information about the project's license, including any restrictions or requirements for its use.",
    },
    {
      title: "Future Improvements",
      inDetail: "If you have improvements you plan to make to the project.",
    },
    {
      title: "Acknowledgments",
      inDetail:
        "Optional section for acknowledging any contributors, libraries, or other resources used in the project.",
    },
    {
      title: "Tags",
      inDetail:
        "List of tags that describe your project, this will help people find it when searching on GitHub.",
    },
  ];

  useEffect(() => {
    router.query && setAnswers(router.query);
  }, []);

  const handleAnswerChange = (event, question) => {
    setAnswers({ ...answers, [question]: event.target.value });
  };

  const handleOpen = (index) => {
    setOpenIndex(index);
  };

  const checkEmptyKeysInObject = (obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (value === "") {
        delete obj[key];
      }
    });
  };

  const handleSubmit = (e) => {
    console.log(answers);
    e.preventDefault();
    checkEmptyKeysInObject(answers);
    router.push({
      pathname: "/gptAnswer",
      query: answers,
    });
  };

  return (
    <div className={styles.outerFrame}>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.mainInputs}>
        {theQuestions.map((question, index) => {
          return (
            <div key={question.title} className={styles.containerInput}>
              {index !== openIndex ? (
                <div
                  className={styles.inputTitle}
                  onClick={() => handleOpen(index)}
                >
                  <MdKeyboardArrowRight className={styles.icon} />
                  {question.title}
                </div>
              ) : (
                <div
                  className={styles.inputTitle}
                  onClick={() => setOpenIndex(-1)}
                >
                  <MdKeyboardArrowDown className={styles.icon} />
                  {question.inDetail}
                </div>
              )}
              {index === openIndex && (
                <textarea
                  name={question}
                  className={styles.input}
                  value={answers[question.title] || ""}
                  placeholder={question.inDetail}
                  onChange={(event) =>
                    handleAnswerChange(event, question.title)
                  }
                >
                  {question}
                </textarea>
              )}
            </div>
          );
        })}
        <div className={styles.tipBox}>
          <div className={styles.tip}>
            {`
            Feel free to customize the README file to suit your project's
            specific needs. Remember to keep it clear, concise, and informative
            to make it easy for others to understand and contribute to your
            project, you can edit the results after the answer comes back`}
          </div>
        </div>

        <div className={styles.containerInputSubmit}>
          <input type="submit" className={styles.inputSubmit} />
        </div>
      </form>
    </div>
  );
}

export default Inputs;
