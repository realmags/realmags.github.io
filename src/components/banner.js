import React, {useRef, useEffect} from 'react';

import * as css from '../styles/banner.module.css'
import { motion, useViewportScroll, transform, useMotionValue } from 'framer-motion';

export default function Banner() {
    // const headingRef = useRef()
    // const {scrollYProgress} = useElementScroll(headingRef)
    const {scrollYProgress} = useViewportScroll()

    // const wght = useTransform(scrollYProgress, yRange, wghtRange)
    const wght = useMotionValue(400)

    useEffect(() => {
        function updateWght() {
            const yRange = [0, 0.2]
            const wghtRange = [400, 600]
            const newWght = transform(scrollYProgress.get(), yRange, wghtRange)
            wght.set(newWght)
            console.log(wght.get())
        }
        
        const unsubscribeY = scrollYProgress.onChange(updateWght)
        // console.log(wght);

        return () => unsubscribeY()
        // return wght.onChange(v => console.log(`"wght" ${Math.ceil(v)}`))
    }, [scrollYProgress, wght]);
    

    return (
        <div className={css.container}>
            <motion.div 
            // animate={{
            //     scale: wght/400,
            // }}
            className={css.heading}>
                <motion.h1
                style={{
                    // scale: wght.get()
                    fontWeight: wght
                    // fontWeight: Math.ceil(wght),
                    // fontVariationSettings: `"wght" ${Math.ceil(wght)}`,
                    
                }}
                // style={{
                //     fontVariationSettings: `"wght" ${Math.ceil(wght)}`,
                // }}
                className={css.headingText}>
                    K<em>e</em>nt Bry<em>a</em>n
                    <br/>C. Magli<em>n</em>ao
                </motion.h1>
                <p className={css.subtitle}>You can call me "Mags," all my friends do.
                I like to design sickening websites and turn them to reality.</p>
            </motion.div>
            <div className={css.subheading}>
                <p className={css.subheadingText}>
                    <span className={css.article}>A</span>
                    <span className={css.content}>
                        <span className={css.role}>
                            <span className={css.first}>front-end</span>
                            <span className={css.second}>developer</span>
                        </span>
                        <span className={css.divider}>
                            <span>/</span>
                            {/* <BackSlash /> */}
                            {/* <FrontSlash /> */}
                        </span>
                        <span className={css.role}>
                            <span className={css.first}>computer</span>
                            <span className={css.second}>engineer</span>
                        </span>
                    </span>
                </p>
            </div>
        </div>
    );
}
