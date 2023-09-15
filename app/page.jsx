import Faq from "./componets/Faq"
import Footer from "./componets/Footer"
import Landingpage from "./componets/Landingpage"
import Secondpage from "./componets/Secondpage"

export default function Home() {
  return (
    <div>
      <Landingpage />
      <Secondpage />
      <Faq />
      <Footer />
    </div>
  )
}
