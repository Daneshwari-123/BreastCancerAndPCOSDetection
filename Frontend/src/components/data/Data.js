import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
export const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "tests",
    path: "/tests",
  },
  {
    text: "blog",
    path: "/blog",
  },
  {
    text: "Team",
    path: "/team",
  },
]

export const list = [
  {
    id: 1,
    cover: "../images/list/eye.jpg",
    name: "Eye health",
    location: <i class="fa-solid fa-eye"></i>,
    category: "For Rent",
    price: "$3,700",
    type: "Apartment",
  },
  {
    id: 2,
    cover: "../images/list/lungs.jpg",
    name: "How lungs play vital role",
    location: <i class="fa-solid fa-lungs"></i>,
    category: "For Sale",
    price: "$9,750",
    type: "Condos",
  },
  {
    id: 3,
    cover: "../images/list/covid.jpg",
    name: "Effects of Covid-19",
    location: <i class="fa-solid fa-viruses"></i>,
    category: "For Rent",
    price: "$5,860",
    type: "Offices",
  },
  {
    id: 4,
    cover: "../images/list/teeth.jpg",
    name: "Don't let the cavity stay",
    location: <i class="fa-solid fa-tooth"></i>,
    category: "For Sale",
    price: "$7,540",
    type: "Homes & Villas",
    link:"/blog/tooth"
  },
  {
    id: 5,
    cover: "../images/list/heart1.jpg",
    name: "I'm working 24x7",
    location: <i class="fa-solid fa-heart-pulse"></i>,
    category: "For Rent",
    price: "$4,850",
    type: "Commercial",
  },
  {
    id: 6,
    cover: "../images/list/weight.jpg",
    name: "Reasons for sudden weight gain",
    location: <i class="fa-solid fa-weight-scale"></i>,
    category: "For Sale",
    price: "$2,742",
    type: "Apartment",
  },
]
export const awards = [
  {
    icon: <i class='fa-solid fa-trophy'></i>,
    num: "32 M	",
    name: "Blue Burmin Award",
  },
  {
    icon: <i class='fa-solid fa-briefcase'></i>,
    num: "43 M",
    name: "Mimo X11 Award",
  },
  {
    icon: <i class='fa-solid fa-lightbulb'></i>,
    num: "51 M",
    name: "Australian UGC Award",
  },
  {
    icon: <i class='fa-solid fa-heart'></i>,
    num: "42 M",
    name: "IITCA Green Award",
  },
]
export const team = [
  {
    list: "50",
    cover: "../images/customer/sahana.jpg",
    address: "Belgaum, Karnataka",
    name: "Sahana Joshi",
    icon: [ <a href="https://www.linkedin.com/in/sahana-joshii/"
    className="facebook social">
    <FontAwesomeIcon icon={faLinkedin} size="xs" />
  </a>,  <a href="https://twitter.com/Sahana_joshi1?t=oJ1-8E6qDv6zmhrLCcXibA&s=09" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="xs" />
      </a>,<a href="https://github.com/Sahanaj1" className="twitter social">
        <FontAwesomeIcon icon={faGithub} size="xs" />
      </a>, ],
  },
  {
    list: "70",
    cover: "../images/customer/daneshwari.jpeg",
    address: "Belgaum, Karnataka",
    name: "Daneshwari Desai",
    icon: [
      <a href="https://www.linkedin.com/in" className="facebook social">
        <FontAwesomeIcon icon={faLinkedin} size="xs" />
      </a>,
      <a href="https://twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="xs" />
      </a>,
      <a href="https://github.com/" className="twitter social">
        <FontAwesomeIcon icon={faGithub} size="xs" />
      </a>,
    ],
  },
  {
    list: "80",
    cover: "../images/customer/seema.jpeg",
    address: "Belgaum, Karnataka",
    name: "Seema Puranikmath",
    icon: [
      <a href="https://www.linkedin.com/in" className="facebook social">
        <FontAwesomeIcon icon={faLinkedin} size="xs" />
      </a>,
      <a href="https://twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="xs" />
      </a>,
      <a href="https://github.com/" className="twitter social">
        <FontAwesomeIcon icon={faGithub} size="xs" />
      </a>,
    ],
  },
  {
    list: "51",
    cover: "../images/customer/akanksha.jpeg",
    address: "Belgaum, Karnataka",
    name: "Akanksha Redekar",
    icon: [
      <a href="https://www.linkedin.com/in" className="facebook social">
        <FontAwesomeIcon icon={faLinkedin} size="xs" />
      </a>,
      <a href="https://twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="xs" />
      </a>,
      <a href="https://github.com/" className="twitter social">
        <FontAwesomeIcon icon={faGithub} size="xs" />
      </a>,
    ],
  },
  
]

export const footer = [
  // {
  //   title: "LAYOUTS",
  //   text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
  // },
  {
    title: "ALL SECTIONS",
    text: [{ list: "Headers" }, { list: "Features" }, { list: "Attractive" }, { list: "Testimonials" }, { list: "Videos" }, { list: "Footers" }],
  },
  {
    title: "COMPANY",
    text: [{ list: "About" }, { list: "Blog" }, { list: "Pricing" }, { list: "Affiliate" }, { list: "Login" }, { list: "Changelog" }],
  },
]
export const blogList = [
  {
    id: 1,
    title: 'Eye health',
    category: <i class="fa-solid fa-eye"></i>,
    subCategory: ['frontend', 'ui/ux', 'design'],
    description:
      "Taking care of your eyes is essential to maintaining good eye health throughout your life. There are several simple habits that you can incorporate into your daily routine to help protect your eyes. One of the most important things you can do is to wear sunglasses with UV protection when you're outside. The sun's harmful rays can cause damage to your eyes over time, so it's essential to protect them with high-quality sunglasses. Another way to promote eye health is to take regular breaks from screens. If you spend long periods of time looking at a computer, tablet, or smartphone screen, you may experience eye strain, headaches, and other issues. To prevent this, try the 20-20-20 rule: every 20 minutes, take a break for at least 20 seconds and look at something 20 feet away. This can help reduce eye strain and keep your eyes feeling fresh.Maintaining a healthy diet is also crucial for good eye health. Eating foods that are rich in nutrients such as vitamin A, C, and E can help protect your eyes from damage and maintain good vision. Leafy greens, citrus fruits, carrots, and nuts are all excellent sources of these essential nutrients.Finally, scheduling regular eye exams with an eye doctor is vital for maintaining good eye health. During an eye exam, your doctor can detect and prevent potential eye problems before they become more serious. This can help ensure that your vision stays clear and healthy for years to come.In conclusion, taking proactive steps to care for your eyes is essential for maintaining good eye health. By wearing sunglasses, taking regular breaks from screens, eating a healthy diet, and scheduling regular eye exams, you can help protect your eyes and maintain good vision throughout your life.",
    authorName: 'John Doe',
    authorAvatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    createdAt: 'June 03, 2021',
    cover: "../images/list/eye.jpg",
  },
  {
    id: 2,
    title: 'How lungs play vital role',
    category: <i class="fa-solid fa-lungs"></i>,
    subCategory: ['vacation', 'holidays', 'sight seeing'],
    description:
      "The lungs are one of the most vital organs in the body, playing a crucial role in the respiratory system. They are responsible for taking in oxygen and expelling carbon dioxide, which is necessary for the body to function properly. The lungs work together with the circulatory system to deliver oxygen-rich blood to all parts of the body and remove waste gases. Without the lungs, the body would be unable to carry out this essential process, leading to oxygen deprivation and potentially life-threatening complications. Additionally, the lungs help protect the body from harmful pollutants and infections by filtering out harmful particles and producing mucus to trap and remove bacteria and viruses. Overall, the lungs play an indispensable role in maintaining the health and function of the body, and it is essential to take care of them through practices such as avoiding smoking, exercising regularly, and maintaining a healthy diet to ensure optimal lung function.",
    authorName: 'John Doe',
    authorAvatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    createdAt: 'June 03, 2021',
    cover: "../images/list/lungs.jpg",
  },
  {
    id: 3,
    title: 'Effects of Covid-19',
    category: <i class="fa-solid fa-viruses"></i>,
    subCategory: ['e-commerce store', 'clothing', 'shopping store'],
    description:
      "The COVID-19 pandemic has had far-reaching effects on people's health, the economy, and society as a whole. The virus, which is highly contagious, has spread rapidly across the globe, infecting millions and causing widespread illness and death. The physical symptoms of COVID-19 can range from mild to severe, and in some cases, it can be fatal. Beyond the physical effects, the pandemic has had a significant impact on mental health, with many people experiencing stress, anxiety, and depression due to the uncertainty and social isolation caused by the pandemic. The pandemic has also led to widespread job loss, economic hardship, and disruptions in education, as many schools and businesses were forced to close to slow the spread of the virus. The long-term effects of the pandemic are still unclear, but it is clear that it will continue to have significant social, economic, and health impacts for years to come.",
    authorName: 'John Doe',
    authorAvatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    createdAt: 'June 03, 2021',
    cover: "../images/list/covid.jpg",
  },
  {
    id: 4,
    title: "Physical Fitness is good for Teeth and Gums Too!",
    category: <i class="fa-solid fa-tooth"></i>,
    subCategory: ['adrenaline', 'stay-fit', 'lifestyle'],
    description:
      "A study by the Journal of Dentistry concluded that an increase in physical activity most definitely adds to better oral health conditions and a lower risk of periodontal disease.It showed that “never-smokers” who worked out regularly were 54% less likely to develop gum disease. Former smokers who increased physical activity reduced their risk by 74%.Obesity also factors into the equation, as found in a paper published by the Journal of Periodontology, showing that people who had lower BMI (body mass index) were more likely to have a lower risk of periodontal disease.",
    authorName: 'John Doe',
    authorAvatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    createdAt: 'June 03, 2021',
    cover: "../images/list/teeth.jpg",
  },
  {
    id: 5,
    title: 'The many ways exercise helps your heart',
    category: <i class="fa-solid fa-heart-pulse"></i>,
    subCategory: ['bbq', 'food', 'lifestyle'],
    description:
      'If you take a brisk walk, you’ll notice certain changes in your body right away. Your heart beats a little faster, your breathing rate increases, and you may feel your leg muscles working. But you might not appreciate the myriad other physiological changes happening inside your body when you exercise — some of which offer benefits similar to those from common medications.Together, exercise-induced changes can prevent or improve all the major risk factors that contribute to heart disease, including high blood pressure, diabetes, obesity, and unhealthy cholesterol levels. "Exercise can also improve mental health problems like depression and stress, which are common but often ignored contributors to cardiovascular problems," says cardiologist Dr. Aaron Baggish, a professor at the University of Lausanne in Switzerland and founder of the Cardiovascular Performance Program at Harvard-affiliated Massachusetts General Hospital.',
    authorName: 'John Doe',
    authorAvatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    createdAt: 'April 24,2023',
    cover: "../images/list/heart1.jpg",
  },
  {
    id: 6,
    title: 'Reasons for sudden weight gain',
    category: <i class="fa-solid fa-weight-scale"></i>,
    subCategory: ['beaches', 'sea', 'holidays'],
    description:
      "Sudden weight gain can be a cause for concern, especially if it occurs without any apparent reason. There are several possible factors that can contribute to sudden weight gain. One of the most common reasons is a change in diet, such as an increase in calorie intake or a shift towards more high-fat, high-sugar foods. Hormonal changes can also play a role, such as those that occur during pregnancy or menopause. Certain medications, such as antidepressants and steroids, can cause weight gain as a side effect. Other possible factors include stress, lack of sleep, and a sedentary lifestyle. It's important to identify the underlying cause of sudden weight gain to determine the best course of action. In some cases, simple lifestyle changes such as increasing physical activity or making dietary modifications can be effective in reversing weight gain. In other cases, medical intervention may be necessary, such as adjusting medication or treating an underlying health condition.",
    authorName: 'John Doe',
    authorAvatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    createdAt: 'June 03, 2021',
    cover: "../images/list/weight.jpg",
  },

];
