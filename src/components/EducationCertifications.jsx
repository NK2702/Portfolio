import certificationImages from "../assets/certification.jpg"
import educationImage from "../assets/education.jpg"
import { motion } from "framer-motion"
const EducationCertifications = () => {
  return (
    <div className="container mx-auto px-4 bg-neutral-950">
      <div className="bg-neutral-950 p-6 rounded-md shadow-md">
      <div className="mb-4 lg:mg:8">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Education and 
        <span className="text-neutral-500"> Certifications</span>
        </h2>
        </div>
         

        <div className="mb-4 lg:mb-8">
        <div className="flex flex-col lg:flex-row">
          {/* Education Section */}
          
          <motion.div 
          whileInView={{opacity: 1,x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:0.5}}
          className="lg:w-1/2 lg:pr-4"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white"> Masters in Computer Applications</h3>
              <p className="text-white">Bharathidasan University, 2021 - 2023</p>
            </div>
          </motion.div>

         
          {/* Image Box for Education (visible on large screens) */}
          
          <motion.div 
           whileInView={{opacity: 1,x:0}}
           initial={{opacity:0, x:100}}
           transition={{duration:0.5}}
          className="hidden lg:block lg:w-1/2 lg:pl-4"
          >
          <img src={educationImage} alt="Education" className="w-full h-auto rounded-lg" />
          </motion.div>
        </div>
        </div>


        <div className="mb-4 lg:mb-8">
        <div className="flex flex-col lg:flex-row">
          {/* Certifications Section */}
          
           <motion.div 
           whileInView={{opacity: 1,x:0}}
           initial={{opacity:0, x:-100}}
           transition={{duration:0.5}}
          className="lg:w-1/2 lg:pr-4">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white">FullStack Web Development Certification</h3>
              <p className="text-gray-200">Online Course, 2024</p>
            </div>
          </motion.div>

          {/* Image Box for Certifications (visible on large screens) */}
          
           <motion.div 
           whileInView={{opacity: 1,x:0}}
           initial={{opacity:0, x:100}}
           transition={{duration:0.5}}
          className="hidden lg:block lg:w-1/2 lg:pl-4"
          >
          <img src={certificationImages} alt="Certificate image" />
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EducationCertifications;
