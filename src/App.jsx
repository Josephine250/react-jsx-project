
import BadgeCard from "./components/BadgeCard"
import ContactCard from "./components/contactcard"
import Greetings from "./components/Greetings"
import Notice from "./components/Notice"
import RegistrationForm from "./components/RegistrationForm"
import Result from "./components/Result"
import TechList from "./components/Techlist"
import Weclame from "./components/Welcome"


export default function App(){
  return(
    <div >
      <Weclame />
      <ContactCard/>
      <RegistrationForm />
      <Greetings/>
      <Result/>
      <Notice />
      <BadgeCard />
      <TechList />
      
    </div>
    
    
    

    )

  
  




}