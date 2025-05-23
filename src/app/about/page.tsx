'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Server, MonitorSmartphone, Wrench } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs"

type Tech = {
    name: string;
    icon: string;
};

export default function AboutPage() {
    return (
        <div className="mx-auto container max-w-7xl px-4 md:px-8 lg:px-12 py-12 md:py-20">
            {/* Introduction */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto mb-16 text-center"
                style={{ fontFamily: 'Eczar, sans-serif', color: 'var(--text-card)' }}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    About Me
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    3rd-year Software Engineering Student – VKU University
                </p>
            </motion.section>

            {/* Personal Info */}
            <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0">
                        <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg" />
                        <Image
                            src="/images/7658.jpg"
                            alt="To An"
                            width={400}
                            height={400}
                            className="rounded-lg relative z-10 object-cover w-full h-full"
                            priority
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Eczar, sans-serif', color: 'var(--text-card)' }}>
                        Who am I?
                    </h2>
                    <div className="space-y-4 mb-8 text-muted-foreground">
                        <p>
                            I'm currently a 3rd-year Software Engineering student at VKU. With a strong desire to learn and grow, I'm preparing myself for internships and future professional environments.
                        </p>
                        <p>
                            I enjoy building web and application projects. I focus on clean UI, good user experience, and optimizing performance.
                        </p>
                        <p>
                            Besides academics, I'm actively preparing for the TOEIC exam to improve my English communication skills. I used to serve as class monitor, and now I'm the secretary of class 22SE2, actively involved in student activities and leadership.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-card p-4 rounded-lg border">
                            <h4 className="font-bold mb-2 text-sm uppercase tracking-wider text-muted-foreground">Location</h4>
                            <p className="font-medium">Da Nang, Vietnam</p>
                        </div>
                        <div className="bg-card p-4 rounded-lg border">
                            <h4 className="font-bold mb-2 text-sm uppercase tracking-wider text-muted-foreground">Education</h4>
                            <p className="font-medium">VKU University</p>
                            <p className="text-sm text-muted-foreground">2022 - 2026</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Education */}
            <section className="mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="max-w-2xl mx-auto text-center mb-12" style={{ fontFamily: 'Eczar, sans-serif', color: 'var(--text-card)' }}>
                        <h2 className="text-3xl font-bold mb-4">Education</h2>
                        <div className="w-20 h-1 bg-primary mx-auto" />
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative pl-8 border-l border-primary/30 pb-8"
                        >
                            <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                <h3 className="font-bold text-lg">Bachelor of Software Engineering</h3>
                                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">2022 - 2026</span>
                            </div>
                            <p className="font-medium text-muted-foreground mb-3">
                                Vietnam–Korea University of Information and Communication Technology (VKU)
                            </p>
                            <p className="text-muted-foreground">
                                Gaining hands-on experience and knowledge in software development, systems design, web and mobile applications, and AI fundamentals. Also engaged in group projects and technology clubs.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Tech Stack */}
            <section className="mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className="max-w-2xl mx-auto text-center mb-12" style={{ fontFamily: 'Eczar, sans-serif', color: 'var(--text-card)' }}>
                        <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
                        <div className="w-20 h-1 bg-primary mx-auto" />
                    </div>

                    <Tabs defaultValue="backend" className="max-w-4xl mx-auto">
                        <TabsList className="grid w-full grid-cols-3 mb-8">
                            <TabsTrigger value="backend" className="text-lg flex items-center gap-2">
                                <Server className="h-5 w-5" /> Backend
                            </TabsTrigger>
                            <TabsTrigger value="frontend" className="text-lg flex items-center gap-2">
                                <MonitorSmartphone className="h-5 w-5" /> Frontend
                            </TabsTrigger>
                            <TabsTrigger value="tools" className="text-lg flex items-center gap-2">
                                <Wrench className="h-5 w-5" /> Tools
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="backend" className="mt-6">
                            <TechGrid list={[
                                { name: "Java", icon: "/images/java3.webp" },
                                { name: "Spring Boot", icon: "https://cdn.simpleicons.org/spring" },
                                { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
                                { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
                                { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
                                { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
                                { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
                            ]} />
                        </TabsContent>

                        <TabsContent value="frontend" className="mt-6">
                            <TechGrid list={[
                                { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
                                { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
                                { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
                                { name: "React", icon: "https://cdn.simpleicons.org/react" },
                                { name: "HTML/CSS", icon: "https://cdn.simpleicons.org/html5" },
                            ]} />
                        </TabsContent>

                        <TabsContent value="tools" className="mt-6">
                            <TechGrid list={[
                                { name: "Git", icon: "https://cdn.simpleicons.org/git" },
                                { name: "VS Code", icon: "/icons/vscode.png" },
                                { name: "Jira", icon: "https://cdn.simpleicons.org/jira" },
                                { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
                            ]} />
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </section>

            {/* Achievements */}
            <section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <div className="max-w-2xl mx-auto text-center mb-12" style={{ fontFamily: 'Eczar, sans-serif', color: 'var(--text-card)' }}>
                        <h2 className="text-3xl font-bold mb-4">Achievements</h2>
                        <div className="w-20 h-1 bg-primary mx-auto" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                                        <Award className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                                        <p className="text-muted-foreground mb-3">{achievement.description}</p>
                                        <p className="text-sm text-primary font-medium">{achievement.date}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

function TechGrid({ list }: { list: Tech[] }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {list.map((tech, index) => (
                <motion.div
                    key={tech.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center justify-center text-center p-4 border rounded-lg bg-card hover:bg-primary/10 transition-all"
                >
                    <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={50}
                        height={50}
                        className="mb-3"
                    />
                    <p className="font-medium">{tech.name}</p>
                </motion.div>
            ))}
        </div>
    )
}

const achievements = [
    {
        title: "Secretary of Class 22SE2",
        description: "Organized class activities and helped promote student engagement and participation.",
        date: "Since 2023"
    },
    {
        title: "Class Monitor in First Year",
        description: "Supported classroom management and coordination between lecturers and students.",
        date: "2022 - 2023"
    },
    {
        title: "Achieved Excellent Academic Performance",
        description: "Recognized as an excellent student for the latest academic semester.",
        date: "Semester I, Academic Year 2024"
    },
    {
        title: "Preparing for TOEIC",
        description: "Self-studying to improve English communication and prepare for internship and job opportunities.",
        date: "Ongoing"
    }
]
