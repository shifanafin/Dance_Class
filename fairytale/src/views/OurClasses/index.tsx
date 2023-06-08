import { SelectedPage } from '../../shared/types'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import image5 from "../../assets/image5.png"
import image6 from "../../assets/image6.png"
import {motion}from "framer-motion"
import Htext from '../../shared/Htext'
import { ClassType } from '../../shared/types'
import Class from './Class'

const classes :  Array<ClassType>=[
  {
  name:"weight Trainig Classes",
  description:"wfkjijdfni asjdnfkjasdnclkw aflkasdnlkawnmflkaw nflkjwnfkj3ni3j4nf kj34nfjfije",
  image:image1
},
  {
  name:"weight Trainig Classes",
  description:"wfkjijdf niasjdnfkjasdnclkw aflkasdnlkawn mflkawnflkjwnfkj3n i3j4nfkj34nfjfije",
  image:image2
},
  {
  name:"weight Trainig Classes",
  description:"wfkjijdfnias jdnfkjasdncl kwaflkasdnlkawn mflkawnflkjwnfkj3ni3j 4nfkj34nfjfije",
  image:image3
},
  {
  name:"weight Trainig Classes",
  description:"wfkjijdfn iasjdnfkjas dnclkwaflkasdnl kawnmflkawnflkjw nfkj3ni3j4nfkj34nfjfije",
  image:image4
},
  {
  name:"weight Trainig Classes",
  description:"wfkjijdfnia sjdnfkjasdnclkw aflka sdnlkawnmf lkawnflkjwnfkj 3ni3j4nfkj3 4nfjfije",
  image:image5
},
  {
  name:"weight Trainig Classes",
  description:"wfkjijdfnias jdnfkjasdn clkwaflkasdn lkawnmflkawnfl  kjwnfkj3ni3j4nfkj 34nfjfije",
  image:image6
}
]

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
      <motion.div
      onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>

        <motion.div className='mx-auto w-5/6'
         initial="hidden"
         whileInView="visible"
         viewport={{once:true,amount:0.5}}
         transition={{delay:0.2,duration:0.5}}
         variants={{
             hidden:{opacity:0, x:100},
             visible:{opacity:1,x:0}}}>
              <div className='md:w-3/5'>
                <Htext>Our Classes</Htext>
                <p className='py-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum beatae ipsum enim reprehenderit illo repellendus vero, voluptatibus velit rem sint.</p>
              </div>
              

        </motion.div>
        {/* side scrolling */}
        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
          <ul className='w-[2800px] whitespace-nowrap'>
            {classes.map((item:ClassType,index)=>(
              <Class
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description} 
              image={item.image}/>

            ))

            }

          </ul>


        </div>

      </motion.div>
    </section>
  )
}

export default OurClasses