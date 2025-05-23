'use client'

import { Linkedin, Dribbble, Instagram } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
    const iconVariants = {
        initial: {
            backgroundColor: 'transparent',
            color: 'var(--btn-text)',
            scale: 1,
        },
        hover: {
            backgroundColor: 'var(--btn-hover-bg)',
            color: 'var(--btn-hover-text)',
            scale: 1.1,
            transition: { duration: 0.3, ease: 'easeOut' },
        },
    }

    const socialLinks = [
        { Icon: Dribbble, href: 'https://dribbble.com/' },
        { Icon: Instagram, href: 'https://instagram.com/' },
        { Icon: Linkedin, href: 'https://linkedin.com/' },
    ]

    return (
        <footer
            id="contact"
            className="px-6 md:px-12 lg:px-20 py-20 flex items-center justify-center"
            style={{ backgroundColor: 'var(--background-2)' }}
        >
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between gap-12 text-center md:text-left">
                {/* Left: Text */}
                <div className="flex flex-col items-center md:items-start">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-6 max-w-xl leading-snug"
                        style={{ fontFamily: 'Eczar, serif' }}
                    >
                        Let's work together and make things professional and useful.
                    </h2>
                    
                </div>

                {/* Right: Social Icons */}
                <div className="flex space-x-5 justify-center mt-auto">
                    {socialLinks.map(({ Icon, href }, index) => (
                        <motion.a
                            key={index}
                            href={href}
                            aria-label={`Link to ${Icon.name}`}
                            className="p-2 rounded-full border flex items-center justify-center transition-all"
                            style={{
                                borderColor: 'var(--btn-border)',
                                transformOrigin: 'center',
                            }}
                            initial="initial"
                            whileHover="hover"
                            animate="initial"
                            variants={iconVariants}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon className="w-5 h-5" style={{ color: 'inherit' }} />
                        </motion.a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
