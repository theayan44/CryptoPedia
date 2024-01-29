import Button from '../Common/Button';
import "./style.css";
import phone from "../../assets/phone.png";
import Rectangle2 from "../../assets/Rectangle2.png";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const LandingPageContent = () => {
  return (
    <div className="landing-page-content">
      <div className="information-div">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="track-crypto"
        >
          Track Crypto
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Real Time.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.75 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to do so!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 1 }}
          className="btn-div">
          <NavLink to="/dashboard"><Button text={"Dashboard"} /></NavLink>
          <Button text={"Share"} outlineButton={true} />


        </motion.div>

      </div>

      <div className="mobile-div">
        <motion.img
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            duration: 2,
            type: "smooth",
            repeatType: "mirror",
            repeat: Infinity,
          }}
          className="phone" src={phone} alt="phone" />
        <img className="gradient" src={Rectangle2} alt="gradient" />
      </div>
    </div>
  )
}

export default LandingPageContent;