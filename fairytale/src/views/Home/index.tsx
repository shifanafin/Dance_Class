import { SelectedPage } from '../../shared/types'
import useMediaQuery from '../../hooks/useMediaQuery'
import NavButton from '../../shared/NavButton'
import HomePageText from "../../assets/HomePageText.png"
import HomePageGraphic from "../../assets/HomePageGraphic.png"
import SponsorRedBull from "../../assets/SponsorRedBull.png"
import SponsorFortune from "../../assets/SponsorFortune.png"
import SponsorForbes from "../../assets/SponsorForbes.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {motion} from "framer-motion"

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pd-0 '> 
    {/* image and main header */}
        <motion.div className=" md:flex mx-auto w-5/6  items-center justify-center md:h-5/6 "
        onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}>
            {/* Main Header */}
            <div className='z-10 mt-32'>
                {/* heading */}
                <motion.div className='md:-mt-20'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-100},
                    visible:{opacity:1,x:0}}}
                    >
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1]  md:before:content-evolvetext '>
                            <img src={HomePageText} alt='Home-text-heading '/>
                        </div>
                    </div>
                    <p className='mt-8 text-sm '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio est enim sint nostrum et autem eum in necessitatibus repudiandae.</p>
                </motion.div>

                   {/* Actions */}
                   <motion.div className='mt-8  flex items-center gap-8 md:justify-start'
                   initial="hidden"
                   whileInView="visible"
                   viewport={{once:true,amount:0.5}}
                   transition={{delay:0.2,duration:0.5}}
                   variants={{
                       hidden:{opacity:0, x:-100},
                       visible:{opacity:1,x:0}}}>
                   <NavButton setSelectedPage={setSelectedPage}>
                               Join Now
                   </NavButton>
                   <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500' 
                   onClick={()=>setSelectedPage(SelectedPage.Contact)}
                   href={`#${SelectedPage.Contact}`}>
                    <p>Learn More</p>
                   </AnchorLink>
                   </motion.div>

            </div>
              {/* image */}
              <motion.div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'
              initial="hidden"
              whileInView="visible"
              viewport={{once:true,amount:0.5}}
              transition={{duration:0.5}}
              variants={{
                  hidden:{opacity:0, x:-100},
                  visible:{opacity:1,x:0}}}>
                <img src={HomePageGraphic} alt='home-image'/>
                </motion.div>
        </motion.div>
        {/* Sponsors */}
        {
            isAboveMediumScreen && (
                <div className='h-[150px] w-full bg-primary-100 py-10'>
                    <div className='mx-auto w-5/6'> 
                        <div className='flex w-3/5 items-center justify-between gap-8'>
                            <img src={SponsorRedBull} alt="RedBull"/>
                            <img src={SponsorFortune} alt="Fortune"/>
                            <img src={SponsorForbes} alt="Forbes"/>
                        </div>
                    </div>

                </div>
            )
        }
    </section>
  )
}

export default Home