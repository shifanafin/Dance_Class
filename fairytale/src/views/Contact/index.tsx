import { motion } from "framer-motion"
import { SelectedPage } from "../../shared/types"
import {Form, useForm} from "react-hook-form";
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png"
import Htext from "../../shared/Htext";

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const Contact = ({setSelectedPage}: Props) => {

  const  inputStyle="w-full rounded-lg bg-primary-300 py-3 placeholder-white mt-5";
  const{register,
  trigger,   //is used to validate the page
formState :{errors}
} = useForm()

  const onSubmit= async(e:any)=>{
    const isValid = await trigger();  //it is asynchronous function
    if(!isValid){
      e.preventDefault();
    
    }

   
  
  }

  return (
    <section id="contact" className="mx-auto w-5/6 pt-24 pb-32 ">
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.Contact)} >
        {/* Header */}
        <motion.div 
        className="w-3/"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount:0.5}}
          transition={{delay:0.2,duration:0.5}}
          variants={{
              hidden:{opacity:0, x:100},
              visible:{opacity:1,x:0}}}>
                <Htext>
                  <span className="text-primary-500">
                    Join Now
                   </span>
                </Htext>
                <p className="my-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque repellendus fuga dolores sint ad voluptatum nulla exercitationem magni ea fugit explicabo in blanditiis, laborum nam!
                </p>
                </motion.div>
                <div className=" md:flex  md:mt-10  justify-between gap-20 ">
                  <motion.div
                  className="mt-10  md:mt-0"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true,amount:0.5}}
                  transition={{delay:0.2,duration:0.5}}
                  variants={{
                      hidden:{opacity:0, y:100},
                      visible:{opacity:1,y:0}}}>
                        <form 
                        target="_blank"
                        onSubmit={onSubmit}
                        method="POST"
                        action="https://formsubmit.co/4a44820d3f0768e315b1676c77d97f77">
                          <input  
                          className={inputStyle}
                          type="text"
                          placeholder="Name"
                          {...register("name",{
                            required:true,
                            minLength:3,
                            maxLength:20
                          })}/>
                          {errors.name && (
                            <p className="mt-1 text-primary-500 ">
                              {errors.name.type === "required" && "This Field Is Required."}
                              {errors.name.type === "maxLength" && "Above limited number of words."}

                            </p>
                          )}
                          <input  
                          className={inputStyle}
                          type="text"
                          placeholder="Email"
                          {...register("email",{
                            required:true,
                            pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          })}/>
                          {errors.email && (
                            <p className="mt-1 text-primary-500 ">
                              {errors.email.type === "required" && 
                              "This Field Is Required."}
                              {errors.email.type === "pattern" && "Invalid Eamil ."}

                            </p>
                          )}
                             <textarea  
                          className={inputStyle}
                          rows={4}
                          cols={50}
                          placeholder="Massage"
                          {...register("massage",{
                            required:true,
                            minLength:3,
                            maxLength:2000
                          })}/>
                          {errors.message && (
                            <p className="mt-1 text-primary-500 ">
                              {errors.message.type === "required" && 
                              "This Field Is Required."}
                              {errors.message.type === "maxLength" && 
                              "Above limited number of words."}

                            </p>
                          )}
                          <button 
                          type="submit"
                          className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
                            SUBMIT
                          </button>
                          

                        </form>
                            
                  </motion.div>
                  <motion.div
                  className="relative mt-16   md:mt-0"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true,amount:0.5}}
                  transition={{delay:0.2,duration:0.5}}
                  variants={{
                      hidden:{opacity:0, y:100},
                      visible:{opacity:1,y:0}}}>
                        <div className="md:before:content-evolvetext w-full.  before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                          <img
                          className="w-full" alt="Contact-Us"
                          src={ContactUsPageGraphic}/>

                        </div>

                  </motion.div>
            

                </div>
              

     
        

             
        </motion.div>
        </section>
  )
}

export default Contact