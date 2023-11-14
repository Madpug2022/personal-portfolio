import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../style';

const TechLogo = ({ icon, name }) => {
    return (
        <motion.div
            variants={textVariant()}
            className='m-1 flex flex-col justify-center align-middle text-center text-white'>
            <img src={icon} alt='Tech Logo' />
            <p className={styles.heroSubText}>{name}</p>
        </motion.div>
    )
}

export default TechLogo
