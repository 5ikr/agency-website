import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import Servicecard from './Servicecard'
import { motion } from 'motion/react'

const Services = () => {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We turn your ideas into powerful digital experiences that drive results.',
            icon: assets.ads_icon
        },
        {
            title: 'Content Creation',
            description: 'We help you create compelling content that resonates with your target audience.',
            icon: assets.content_icon
        },
        {
            title: 'Marketing Strategy',
            description: 'Our marketing strategies are designed to help you reach your target audience and achieve your business goals.',
            icon: assets.marketing_icon
        },
        {
            title: 'Social Media Management',
            description: 'We manage your social media presence to help you build a strong online community and engage with your audience.',
            icon: assets.social_icon
        }
    ]

    return (
        <motion.div initial="hidden" whileInView="visible" transition={{staggerChildren: 0.2}} viewport={{once:true}} id="services" className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <img src={assets.bgImage2} alt='' className="absolute -top-110 -left-70 -z-1 dark:hidden" />

            <Title title='Our Services' description='We offer a wide range of services to help you grow your business and reach your target audience.' />

            <div className='flex flex-col md:grid grid-cols-2'>
                {servicesData.map((service, index) => (
                    <Servicecard key={index} service={service} index={index} />
                ))}
            </div>
        
        </motion.div>
    )
}

export default Services
