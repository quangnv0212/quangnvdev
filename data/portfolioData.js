import { Image } from "antd";
import Home from "./reactnative/home.png";
import Call from "./reactnative/call.png";
import Caption from "./reactnative/caption.png";
import Chat from "./reactnative/chat.png";
import Comment from "./reactnative/comment.png";
import Components from "./reactnative/components.png";
import CreatePost from "./reactnative/creatpost.png";
import DarkChat from "./reactnative/darkchat.png";
import DarkHome from "./reactnative/darkhome.png";
import DarkProfile from "./reactnative/darkprofile.png";
import EditProfile from "./reactnative/editprofile.png";
import Like from "./reactnative/like.png";
import Message from "./reactnative/message.png";
import Notification from "./reactnative/notification.png";
import Otp from "./reactnative/otp.png";
import PostShare from "./reactnative/postshare.png";
import Profile from "./reactnative/profile.png";
import Reels from "./reactnative/reels.png";
import Register from "./reactnative/register.png";
import Search from "./reactnative/search.png";
import VideoCall from "./reactnative/videocall.png";
const images = [
  Home,
  Call,
  Caption,
  Chat,
  Comment,
  Components,
  CreatePost,
  DarkChat,
  DarkHome,
  DarkProfile,
  EditProfile,
  Like,
  Message,
  Notification,
  Otp,
  PostShare,
  Profile,
  Reels,
  Register,
  Search,
  VideoCall,
];
export const portfolioData = [
  {
    id: 20,
    class: "isotop-item logo",
    bgClass: "bg-prink",
    imgSrc: "/assets/img/home.png",
    subtitle:
      "Ecommerce, Frontend, ReactJS, React Hook Form, Vitest, Storybook",
    title: "Social Network App",
    target: "#portfolio-1",
    category: ["HTML/CSS", "Frontend", "Backend"],
    project: "Social Network App",
    languages: "https://github.com/quangnv0212/Social-network-mobile-app",
    client: "1",
    previewLink: "#",
    previewName: "#",
    imageList: (
      <>
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {images.map((image, index) => (
            <Image key={index} src={image.src} alt={`Image ${index}`} />
          ))}
        </Image.PreviewGroup>
      </>
    ),
    desc: [
      `**Features:**`,
      `Source Code:`,
      `**Description:** This is an online social network platform that offers users a wide range of features to connect, share, and engage with one another.`,
      `- Authentication: The platform includes registration, login, and password recovery functionalities. `,
      `- Users can post statuses, comment on posts, and like posts.`,
      `- Real-time chat functionality is integrated using Socket.io.`,
      `- Users have the ability to customize their avatar and cover photo displayed on their prole page. `,
      `- Users can follow and be friend other users, fostering connections within the community.`,
      `- The platform also oers dierent display options, including Dark mode and Light mode, to cater to individual preferences.`,
      `Implementing Code Spliting for optimized performance.`,
      `**Technologies:**`,
      `**Frontend:** React Native CLI, React Query, React Hook Form`,
      `**Backend:** NodeJS, ExpressJS, Mongoose.`,
    ],
  },
  {
    id: 1,
    class: "isotop-item logo",
    bgClass: "bg-prink",
    imgSrc:
      "https://themes.vantheweb.com/wp-content/uploads/2020/10/shopee.png",
    subtitle:
      "Ecommerce, Frontend, ReactJS, React Hook Form, Vitest, Storybook",
    title: "Shopee Clone",
    target: "#portfolio-1",
    category: ["HTML/CSS", "Frontend"],
    project: "Shopee Clone",
    languages: "https://github.com/quangnv0212/Ecommerce",
    client: "1",
    previewLink: "#",
    previewName: "https://ecommerce-one-pied.vercel.app/",
    desc: [
      `**Description:** This platform serves as an online marketplace connecting buyers and sellers, enabling smooth transactions for buying and selling various goods. With its user-friendly interface, the website offers a seamless experience for users to browse through products, place orders, and make secure online payments.`,
      `**Features:**`,

      `- Synchronizing pagination, filtering, and searching of products with the URL for seamless result sharing across devices.`,
      `- Handling client errors using Error Boundary.`,
      `- Validating forms using Yup and React Hook Form.`,
      `- Segregating routes into private and public routes.`,
      `- Authentication: Implementing user registration and login functionality with automatic refresh token.`,
      `- Managing asynchronous state with React Query and synchronous state with React Context.`,
      `Implementing Code Spliting for optimized performance.`,
      `- Optimizing file sizes to enhance performance. Implementing SEO practices with React Helmet.`,
      `- Conducting Unit Testing to ensure accurate functionality as per the logic.`,
      `Managing components effectively with Storybook for streamlined maintenance and future development.`,

      `**Technologies:**`,
      `**Frontend:** ReactJS, Axios, REST API, Typescript, React Hook Form, Yup, React Query, Vite, Vitest, Storybook.`,
    ],
  },
  {
    id: 2,
    class: "isotop-item design mockup",
    bgClass: "bg-catkrill",
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.16054.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.07640ca7-c177-4ef3-8d87-b4b06865f65b",
    subtitle: "ReactJS, ExpressJS, Social Media",
    title: "Facebook",
    target: "#portfolio-1",
    category: ["HTML/CSS", "Frontend", "Backend"],
    project: "Facebook Clone",
    languages: "https://github.com/quangnv0212/facebook-clone-project",

    client: "1",
    previewLink: "#",
    previewName: "#",
    desc: [
      `**Description:** This is an online social network platform that offers users a wide range of features to connect, share, and engage with one another.`,
      `**Note:** First time rendering may have some errors, I'm trying to fix it`,

      `**Features:**`,
      `- Authentication: The platform includes registration, login, and password recovery functionalities. Users can post statuses, comment on posts, and express their emotions with options like Like, Love, Angry, Haha, and Wow.`,
      ` - Provides a dating feature for users to explore.`,
      ` - Users have the ability to customize their avatar and cover photo displayed on their prole page. Real-time chat functionality is integrated using Socket.io.`,
      ` - Users can follow and be friend other users, fostering connections within the community.`,
      ` - The platform also oers dierent display options, including Dark mode and Light mode, to cater to individual preferences.`,

      ` **Techonologies:**`,

      ` - Frontend: ReactJS, Axios, Redux, Formik`,
      ` - Backend: NodeJS, ExpressJS, Mongoose.`,
      ` - Database: MongoDB.`,
    ],
  },
  {
    id: 10,
    class: "isotop-item logo",
    bgClass: "bg-prink",
    imgSrc: "/assets/img/projectport.png",
    subtitle: "Frontend, ReactJS, React Hook Form",
    title: "Portfolio",
    target: "#portfolio-1",
    category: ["HTML/CSS", "Frontend"],
    project: "Portfolio",
    languages: "#",
    client: "1",
    previewLink: "#",
    previewName: "https://portfolio-one-livid-22.vercel.app/",
    desc: ["Another my Portfolio"],
  },
  {
    id: 5,
    class: "isotop-item design logo",
    bgClass: "bg-prink",
    imgSrc:
      "https://portfolio-one-livid-22.vercel.app/static/media/project2.199ccfa641a519fdf61c.png",
    subtitle:
      "Ecommerce, Education, Frontend, ReactJS, React Hook Form, Ant Design",
    title: "Nodemy Class",
    target: "#portfolio-1",
    category: ["HTML/CSS", "Frontend", "Backend"],
    project: "Nodemy Class",
    client: "5",
    previewLink: "#",
    previewName: "www.envato.com",
    desc: [
      `**Welcome to Nodemy - Learn, Teach, and Explore:**`,

      `Nodemy is a vibrant online learning platform that empowers both learners and instructors to connect, learn, and grow. Our platform is designed to offer a wide range of courses taught by experts from around the world, making learning accessible to anyone, anywhere. Here are some of the key functionalities that Nodemy provides:`,

      `1. **Diverse Course Catalog:**`,
      `Explore thousands of courses across various subjects, from programming and business to arts and personal development. Our diverse catalog ensures there's something for everyone, whether you're a beginner or an advanced learner.`,
      `2. **Expert Instructors:**`,
      `Our courses are taught by industry experts, professionals, and educators who are passionate about sharing their knowledge. You'll learn from individuals with real-world experience, gaining practical insights that go beyond theory.`,
      `3. **Lifetime Access:**`,
      `When you enroll in a course, you gain lifetime access to the course materials, videos, quizzes, and assignments. This allows you to learn at your own pace and revisit the content whenever you need it.`,
      `4. **Interactive Learning:**`,
      `Engage with course content through video lectures, quizzes, assignments, and discussions. Our platform fosters interactive learning, enabling you to apply what you've learned and receive feedback from instructors and peers.`,
      `5. **Skill Assessment:**`,
      `Many courses offer skill assessments and certificates upon completion. These certificates can be a valuable addition to your resume, showcasing your newly acquired skills to potential employers.`,
      `6. **Flexible Learning:**`,
      `Learn on your own schedule. Nodemy courses are available 24/7, allowing you to fit learning into your busy life. Whether you're a full-time student, a professional, or a parent, you can choose when and where to learn.`,
      `7. **Teaching Opportunities:**`,
      `Are you an expert in your field? Nodemy offers a platform for instructors to create and share their courses with a global audience. Teach what you know and earn while doing it.`,
      `8. **Student Community:**`,
      `Connect with fellow learners through course discussions, forums, and Q&A sections. Collaborate, share insights, and learn from others' experiences.`,
      `9. **Search and Recommendations:**`,
      `Easily find courses that match your interests with our search and recommendation features. Browse top-rated courses, bestsellers, and new releases.`,

      `At Nodemy, we believe in the power of learning to transform lives. Whether you're looking to upgrade your skills, explore a new hobby, or start a new career, our platform provides the tools and resources you need to succeed. Join our community of learners and instructors today to embark on your learning journey!`,
    ],
  },

  {
    id: 3,
    class: "isotop-item logo mockup",
    bgClass: "bg-prink",
    imgSrc:
      "https://portfolio-one-livid-22.vercel.app/static/media/project7.3195395ceea23cd40082.png",
    subtitle: "Landing Page, HTML5, CSS3",
    title: "Bake Store",
    target: "#portfolio-1",
    category: ["HTML/CSS"],
    project: "Bake Store",
    languages: "https://github.com/quangnv0212/Bake",

    client: "1",
    previewLink: "#",
    previewName: "https://bake-lyart.vercel.app",
    desc: [`Landing Page for Bake Store`],
  },
  {
    id: 4,
    class: "isotop-item mockup",
    bgClass: "bg-catkrill",
    imgSrc:
      "https://portfolio-one-livid-22.vercel.app/static/media/project8.64bc514e26b595179ef0.png",
    subtitle: "Frontend, ReactJS, UX/UI",
    title: "Movie Project",
    target: "#portfolio-1",
    category: ["HTML/CSS", "Frontend"],

    project: "Movie Project",
    languages: "https://github.com/quangnv0212/Movie-Project",

    client: "Envato",
    previewLink: "#",
    previewName: "https://movie-project-blush-zeta.vercel.app/",
    desc: [
      `Welcome to our website - where you can explore a vast collection of movies and talented actors. Our website is designed to provide you with an easy browsing and discovery experience, featuring a diverse list of favorite films and detailed information about actors.`,

      `**Movie List:**`,
      `Our website offers a wide range of movies across various genres - from action, comedy, drama, to science fiction and horror. Each movie is accompanied by an enticing cover image and a captivating title for an overview. You can click on each movie to view detailed information such as a brief summary, duration, release year, and the list of participating actors.`,

      `**Actor List:**`,
      `We proudly introduce to you a list of outstanding actors who have contributed to the movies featured on the website. Each actor comes with a representative photo and their stage name, along with a list of films they have been part of. You can click on the actor's name to view personal information, career highlights, and related cinematic projects.`,

      `**Pagination:**`,
      `With the ever-growing movie and actor lists, our website is equipped with pagination functionality. This allows you to easily navigate through pages to discover more movies and actors. Simply select the page you want to view or use the "Previous" and "Next" buttons to move through different pages`,

      `**Search:**`,
      `If you're looking for a specific movie or want to know who participated in a particular project, our search function will help you achieve your goal effortlessly. Just enter relevant keywords into the search box, and we'll present you with relevant results.`,

      `In summary, our website is an ideal stop for film enthusiasts. From a diverse movie list to information about renowned actors, we hope you'll enjoy exploring and searching on our website.`,
    ],
  },
];

export const filterButtons = [
  {
    id: 1,

    text: "All",
  },
  {
    id: 2,

    text: "HTML/CSS",
  },
  {
    id: 3,
    text: "Frontend",
  },
  {
    id: 4,
    text: "Backend",
  },
];
