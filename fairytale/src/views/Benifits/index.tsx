import { SelectedPage } from "../../shared/types"
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon} from "@heroicons/react/24/solid"
import {motion} from "framer-motion"
import Htext from "../../shared/Htext";
import { BenifitsType } from "../../shared/types";
import Benifit from "./Benifit";
import NavButton from "../../shared/NavButton";
import BenifitsPageGraphics from "../../assets/BenefitsPageGraphic.png"

type Props = {
    setSelectedPage:(value:SelectedPage)=>void,

}
const benifits:Array<BenifitsType> = [
    {
    title:"Home",
    icon: <HomeModernIcon className="h-6 w-6" />,
   description:"loremdskfjbkjdwf ijbjhbhjvcut  the thint i wanr is tho bw u in the d9ondition akked akka ehere w i here that when is=a in the com foyio ca;e",
},
    {
    title:"Benitits",
    icon: <UserGroupIcon className="h-6 w-6" />,
   description:"loremdskfjbkjdwf ijbjhbhjvcut  the thint i wanr is tho bw u in the d9ondition akked akka ehere w i here that when is=a in the com foyio ca;e",
},
    {
    title:"Contact",
    icon: <AcademicCapIcon className="h-6 w-6" />,
   description:"loremdskfjbkjdwf ijbjhbhjvcut  the thint i wanr is tho bw u in the d9ondition akked akka ehere w i here that when is=a in the com foyio ca;e",
},
]
const container = {
    hidden:{},
    visible:{
        transition: {staggerChildren:0.2  }
    }
}



const Benifits = ({setSelectedPage}: Props) => {
    


  return (
    
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.Benifits)}>
            <motion.div className="md:my-5 md:w-3/5"
             initial="hidden"
             whileInView="visible"
             viewport={{once:true,amount:0.5}}
             transition={{delay:0.2,duration:0.5}}
             variants={{
                 hidden:{opacity:0, x:-100},
                 visible:{opacity:1,x:0}}}>   
                <Htext>More Than Just Gym.</Htext>
                <p className="my-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates praesentium mollitia eos facere iusto quas voluptatem excepturi molestias optio maxime!</p>
            </motion.div>
            {/* Box of Benifits */}
            <motion.div
             className="md:flex items-center justify-between gap-8 mt-5" 
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.2}}
            variants={container}>
             {benifits.map((benifit:BenifitsType)=>(
             
                 <Benifit key={benifit.title}
                 icon={benifit.icon}
                 description={benifit.description}
                 title={benifit.title}
                 setSelectedPage={setSelectedPage}

                 />
              
             ))}
                
            </motion.div>
            {/* graphics  and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* graphics */}
            <img  className="mx-auto "
            alt="benifits-page-image"
            src={BenifitsPageGraphics}/>

            {/* description */}
            <div>

                {/* title */}
                <div className="relative">
                    <div className="before:absolute before:-top before:-left-20 before:z-[-1]  before:content-abstractwaves  ">
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{once:true,amount:0.5}}
                          transition={{delay:0.2,duration:0.5}}
                          variants={{
                              hidden:{opacity:0, x:100},
                              visible:{opacity:1,x:0}}}>
                            <Htext>Millions of happy customers getting{" "} 
                            <span className="text-primary-500">FIt</span>.</Htext>
                        </motion.div>

                    </div>

                </div>

                {/* description */}
                <motion.div 
                          initial="hidden"
                          whileInView="visible"
                          viewport={{once:true,amount:0.5}}
                          transition={{delay:0.2,duration:0.5}}
                          variants={{
                              hidden:{opacity:0, x:-50},
                              visible:{opacity:1,x:0}}}>
                    <p className="mt-5 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi sit impedit magnam animi quia odio expedita! Vitae rem earum ratione.</p>
                    <p className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero voluptatibus quasi harum temporibus molestiae saepe sed a dolorem in animi?.</p>
                </motion.div>

                {/* button */}
                <div className="relative mt-16 ">
                    <div className="before:absolute before:bottom-20 before:right-40  before:z-[-1]  before:content-sparkles">
                         
                         <NavButton 
                         setSelectedPage={setSelectedPage}>
                            Join Now

                         </NavButton>
                    </div>

                </div>


            </div>
        </div>

        </motion.div>
    </section>
  )
}

export default Benifits