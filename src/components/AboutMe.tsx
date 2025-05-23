'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useReducedMotion } from 'framer-motion'

export default function AboutMeComponent() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.3 })
    const reduceMotion = useReducedMotion()

    const fadeInFromBottom = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    }

    const transition = {
        duration: 0.7,
        ease: 'easeOut',
    }

    return (
        <div
            id="about"
            ref={containerRef}
            className="flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 md:p-8 lg:p-1 gap-6 md:gap-8 lg:gap-12"
            style={{ backgroundColor: 'var(--background-1)' }}
        >
            {/* Text content */}
            <motion.div
                className="w-full lg:max-w-180 p-2 rounded-lg order-2 lg:order-1"
                style={{ willChange: 'opacity, transform' }}
                variants={fadeInFromBottom}
                initial="hidden"
                animate={reduceMotion ? 'visible' : isInView ? 'visible' : 'hidden'}
                transition={transition}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-[Eczar]">
                    A Bit About Me
                </h2>
                <div className="font-[Work_Sans] text-base sm:text-lg md:text-xl space-y-4">
                    <p>
                        I’m Tố An, a third-year Software Engineering student at the Vietnam–Korea University of Information and Communication Technology (VKU).
                    </p>
                    <p>
                        I'm passionate about web development, especially user interface (UI) design and enhancing user experience (UX). Despite still being a student, I’ve worked on several personal projects and continuously improve my skills through specialized courses.
                    </p>
                    <p>
                        Currently, I’m also studying to obtain the TOEIC certification to strengthen my English communication skills for future career opportunities.
                    </p>
                    <p>
                        Outside of academics, I enjoy writing, reading, and exploring new creative ideas to grow both personally and professionally.
                    </p>
                </div>

                <Link href="/contact" aria-label="Liên hệ với tôi">
                    <motion.button
                        role="button"
                        className="mt-6 px-6 py-3 border-2 rounded-xl text-sm sm:text-base transition-all"
                        style={{
                            color: 'var(--btn-text)',
                            borderColor: 'var(--btn-border)',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            transformOrigin: 'center',
                        }}
                        whileHover={
                            reduceMotion
                                ? {}
                                : {
                                    backgroundColor: 'var(--btn-hover-bg)',
                                    color: 'var(--btn-hover-text)',
                                    scale: 1.05,
                                    transition: { duration: 0.3, ease: 'easeOut' },
                                }
                        }
                        whileTap={
                            reduceMotion
                                ? {}
                                : { scale: 0.95, transition: { duration: 0.1 } }
                        }
                    >
                        Connect with me
                    </motion.button>
                </Link>
            </motion.div>

            {/* Image content */}
            <motion.div
                className="relative w-full xs:w-4/5 sm:w-2/3 md:w-1/2 lg:w-[400px] xl:w-[400px] h-[400px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] order-1 lg:order-2"
                style={{ willChange: 'opacity, transform' }}
                variants={fadeInFromBottom}
                initial="hidden"
                animate={reduceMotion ? 'visible' : isInView ? 'visible' : 'hidden'}
                transition={{ ...transition, delay: 0.2 }}
            >
                <Image
                    src="/images/anbum_02.png"
                    alt="Ảnh đại diện Tố An"
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 500px"
                    className="rounded-lg object-contain"
                    priority
                />
            </motion.div>
        </div>
    )
}
