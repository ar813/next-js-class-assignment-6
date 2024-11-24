import Social from "./component/Social/Social"
import Header from "./component/Header/Header"
import Hero from "./component/Hero/Hero"
import Companies from "./component/Companies/Companies"
import CoursesList from "./component/CoursesList/CoursesList"
import Achivements from "./component/Achivements/Achivements"
import Courses from "./component/Courses/Courses"
import Team from "./component/Team/Team"
import Testimonials from "./component/Testimonials/Testimonials"
import Footer from "./component/Footer/Footer"

export default function Home() {
  return (
    <div>
      <Social />
      <Header />
      <Hero />
      <Companies />
      <CoursesList />
      <Achivements />
      <Courses />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
}
