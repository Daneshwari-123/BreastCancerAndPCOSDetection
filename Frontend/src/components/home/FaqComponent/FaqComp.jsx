import React,{useState} from "react"
import Heading from "../../common/Heading"
import "./price.css"
import FAQ from "../faq/Faq";
const FaqComp = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is the current accuracy you're acheiving?",
      answer:
        "By using the ml algorithms like logistic regression and random forest, we are able to acheive approx 85%-90% accuracy",
      open: true
    },
    {
      question: "Why test here?",
      answer: "The disease detection system is developed for the early detection of deadly diseases based on the user inputs",
      open: false
    },
    {
      question:
        "Who can use this system?",
      answer: "Medical professionals as well as normal users who have been observing the symptoms",
      open: false
    },
    {
      question:
        "Which diseases can be detected?",
      answer: "We are currently providing Breast Cancer detection and PCOS/PCOD detection.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='FAQS' subtitle='We are answering all your questions' />
          <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
        </div>
      </section>
    </>
  )
}

export default FaqComp;
