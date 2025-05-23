'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { works } from '@/data/works';

const fadeInUp = (isMobile: boolean) => ({
  hidden: { opacity: 0, y: isMobile ? 20 : 40 },
  visible: { opacity: 1, y: 0 },
});

const fadeSide = (direction: 'left' | 'right', isMobile: boolean) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? (isMobile ? -20 : -60) : (isMobile ? 20 : 60),
  },
  visible: { opacity: 1, x: 0 },
});

const RecentWork = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const reduceMotion = useReducedMotion();
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;

  useEffect(() => {
    if (!sectionRef.current) return;
    const q = gsap.utils.selector(sectionRef);

    const imgTl = gsap.timeline({ repeat: -1 });
    imgTl
      .to(q('.image-animation'), {
        y: '-=30',
        x: '+=20',
        rotation: '-=2',
        duration: 3,
        ease: 'power1.inOut',
      })
      .to(q('.image-animation'), {
        y: '+=30',
        x: '-=20',
        rotation: '-=2',
        duration: 2,
        ease: 'power1.inOut',
      })
      .to(q('.image-animation'), {
        y: '-=20',
        rotation: '+=2',
        duration: 3,
        ease: 'power1.inOut',
      })
      .to(q('.image-animation'), {
        y: '+=20',
        rotation: '+=2',
        duration: 3,
        ease: 'power1.inOut',
      });

    const laptopTl = gsap.timeline({ repeat: -1 });
    laptopTl
      .to(q('.laptop'), {
        y: '-=10',
        x: '+=10',
        rotation: '-=1',
        duration: 3,
        ease: 'power1.inOut',
      })
      .to(q('.laptop'), {
        y: '+=10',
        x: '-=10',
        rotation: '-=1',
        duration: 2,
        ease: 'power1.inOut',
      })
      .to(q('.laptop'), {
        y: '-=10',
        rotation: '+=1',
        duration: 3,
        ease: 'power1.inOut',
      })
      .to(q('.laptop'), {
        y: '+=10',
        rotation: '+=1',
        duration: 3,
        ease: 'power1.inOut',
      });

    return () => {
      imgTl.kill();
      laptopTl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: 'var(--background-1)', color: 'var(--foreground)' }}
    >
      {!isMobile && !reduceMotion && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden>
          <motion.div
            className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-orange-200 blur-[100px]"
            initial={{ y: 0, opacity: 0.7 }}
            animate={{ y: '10%', opacity: 0.5 }}
            transition={{ duration: 3, ease: 'linear', repeat: Infinity, repeatType: 'mirror' }}
          />
          <motion.div
            className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-indigo-200 blur-[100px]"
            initial={{ y: 0, opacity: 0.7 }}
            animate={{ y: '-10%', opacity: 0.5 }}
            transition={{ duration: 3, ease: 'linear', repeat: Infinity, repeatType: 'mirror' }}
          />
        </div>
      )}
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
        <motion.div
          className="mb-14 md:mb-20 section-title flex justify-center"
          style={{ fontFamily: 'Eczar, sans-serif' }}
          variants={fadeInUp(isMobile)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: isMobile ? 0.5 : 0.8 }}
        >
          <span className="inline-block text-3xl md:text-5xl font-bold text-center">
            🔍 What I’m passionate about
          </span>
        </motion.div>

        <div className="grid gap-12 md:gap-16">
          {works.map((work, index) => {
            const from = index % 2 === 0 ? 'left' : 'right';

            return (
              <motion.div
                key={index}
                className="project-item rounded-xl md:rounded-2xl overflow-hidden group"
                style={{ backgroundColor: 'var(--card-bg)' }}
                variants={fadeSide(from, isMobile)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: isMobile ? 0.6 : 1, ease: 'easeOut' }}
              >
                <div className="md:flex flex-col md:flex-row h-full p-4 sm:p-6 md:p-10">
                  <div className={`p-4 sm:p-6 md:p-8 lg:p-10 md:w-1/2 flex flex-col ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                      {work.title}
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base mb-4 md:mb-8 leading-relaxed" style={{ fontFamily: 'Work Sans, sans-serif', color: 'var(--text-card)' }}>
                      {Array.isArray(work.description) ? work.description.map((line, i) => {
                        const [boldText, ...rest] = line.split(/:|–/);
                        if (rest.length === 0) return <p key={i}>{line}</p>;
                        return (
                          <p key={i}>
                            <strong>{boldText.trim()}:</strong> {rest.join('–').trim()}
                          </p>
                        );
                      }) : <p>{work.description}</p>}
                    </div>
                    <div className="mt-auto">
                      <Link
                        href={`/blog/${work.slug}`}
                        className="text-sm md:text-base font-medium transition-transform duration-300 ease-out group-hover:translate-x-1 inline-block"
                        style={{ color: 'var(--accent)' }}
                      >
                        Xem chi tiết →
                      </Link>
                    </div>
                  </div>

                  <div className={`relative md:w-1/2 h-48 sm:h-64 md:h-auto ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} rounded-lg md:rounded-xl overflow-hidden`}>
                    {work.slug === 'internship-interests' ? (
                      <div className="image-animation z-10 select-none mt-0 xs:mt-6 sm:mt-14 lg:mt-0 px-0 mx-auto lg:p-0 lg:basis-1/3">
                        <div className="relative w-72 md:w-80 h-80 flex items-center mx-auto">
                          <div className="absolute pointer-events-none scale-90 xs:scale-95 mx-auto">
                            <Image src="/images/Anna.png" width={1177} height={1374} priority alt="Character Illustration" />
                          </div>
                          <div className="laptop absolute top-14 sm:top-16 left-0 scale-[.41] xs:scale-[.45] pointer-events-none">
                            <Image src="/images/laptop.png" width={559} height={386} alt="Laptop illustration" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 rounded-lg md:rounded-xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        priority={index === 0}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
