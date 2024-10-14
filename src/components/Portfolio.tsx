"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaAngular, FaNodeJs, FaJava, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiTailwindcss, SiRedux } from 'react-icons/si'

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState('home')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'experience', 'skills', 'projects', 'education', 'achievements', 'contact']
            const currentSection = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (currentSection) {
                setActiveSection(currentSection)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <nav className="fixed top-0 left-0 right-0 bg-gray-800 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <a href="#" className="text-white font-bold text-lg">KV</a>
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex space-x-4">
                                {['Home', 'Experience', 'Skills', 'Projects', 'Education', 'Achievements', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            className={`hover:text-blue-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-white'
                                                }`}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-white hover:text-blue-400 focus:outline-none"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <motion.div
                        className="md:hidden absolute top-16 left-0 right-0 bg-gray-800"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {['Home', 'Experience', 'Skills', 'Projects', 'Education', 'Achievements', 'Contact'].map((item) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className={`block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-white'
                                            }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </nav>

            <section id="home" className="h-screen flex items-center justify-center">
                <div className="text-center">
                    <motion.h1
                        className="text-6xl font-bold mb-4"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
                    >
                        Kishan Vaghamashi
                    </motion.h1>
                    {/* <motion.img
            src="/placeholder.svg?height=200&width=200"
            alt="Kishan Vaghamashi"
            className="rounded-full mx-auto mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          /> */}
                    <motion.p
                        className="text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Product Engineer | Web Developer
                    </motion.p>
                </div>
            </section>

            <section id="experience" className="py-16 px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
                <div className="max-w-3xl mx-auto">
                    <Timeline>
                        <TimelineItem
                            title="Product Engineer Intern"
                            company="Deadlock infotech Pvt. Ltd."
                            date="May 2024 – July 2024"
                            description="Developed user-friendly web applications using Angular, React, MySQL, and Tailwind CSS, prioritizing seamless customization and optimal user experience."
                            index="1"
                        />
                        <TimelineItem
                            title="Software Engineer"
                            company="Responscity Systems Pvt. Ltd."
                            date="July 2022 – March 2023"
                            description="Led a team of developers in a comprehensive website update project for Silvassa Municipal Corporation, migrating the website from Angular 7 to Angular 14. Developed admin-side modules: e-Auction, Street Vendor Licence, Construction."
                            index="2"
                        />
                    </Timeline>
                </div>
            </section>

            <section id="skills" className="py-16 px-4 bg-gray-800">
                <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <SkillIcon Icon={FaReact} name="React" />
                    <SkillIcon Icon={FaAngular} name="Angular" />
                    <SkillIcon Icon={FaNodeJs} name="Node.js" />
                    <SkillIcon Icon={SiExpress} name="Express" />
                    <SkillIcon Icon={SiMongodb} name="MongoDB" />
                    <SkillIcon Icon={SiTailwindcss} name="Tailwind CSS" />
                    <SkillIcon Icon={SiRedux} name="Redux" />
                    <SkillIcon Icon={FaJava} name="Java" />
                </div>
            </section>

            <section id="projects" className="py-16 px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
                    <ProjectCard
                        title="ProjecTeam"
                        description="Developed a web-based project management system that enables users to create, explore, and collaborate on projects. Implemented Kanban board functionality for task management and progress tracking."
                        technologies={[FaReact, FaNodeJs, SiExpress, SiMongodb, SiTailwindcss]}
                    />
                    <ProjectCard
                        title="OOPs-Driven Banking Console App"
                        description="Developed a Java-based banking console application utilizing core object-oriented programming principles including inheritance, interfaces, and abstraction. Created a user-friendly system with key features, demonstrating a solid grasp of object-oriented programming and software design."
                        technologies={[FaJava]}
                    />
                </div>
            </section>

            <section id="education" className="py-16 px-4 bg-gray-800">
                <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
                <div className="max-w-3xl mx-auto">
                    <Timeline>
                        <TimelineItem
                            title="Master of Science in Information Technology"
                            company="DA-IICT"
                            date="July 2023 – Present"
                            description="CPI - 8.8"
                            index="3"
                        />
                        <TimelineItem
                            title="Bachelor of Science in Information Technology"
                            company="VNSGU"
                            date="2019 – 2022"
                            description="CPI - 7.92"
                            index="4"
                        />
                    </Timeline>
                </div>
            </section>

            <section id="achievements" className="py-16 px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
                <ul className="max-w-2xl mx-auto list-disc pl-6 space-y-4">
                    <li>Solved 700+ Questions on leetcode.</li>
                    <li>Leetcode: Knight, Max Rating - 1869</li>
                    <li>Codechef: 3-star, Max Rating - 1627</li>
                </ul>
            </section>

            <section id="contact" className="py-16 px-4 bg-gray-800">
                <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
                <div className="max-w-md mx-auto">
                    <p className="mb-4 text-center">Feel free to reach out to me:</p>
                    <ul className="space-y-2">
                        <li className="flex items-center justify-center">
                            <span className="mr-2">📧</span>
                            <a href="mailto:kishanvaghamashi.work@gmail.com" className="hover:text-blue-400 transition-colors">
                                kishanvaghamashi.work@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center justify-center">
                            <span className="mr-2">📱</span>
                            <a href="tel:+919662770761" className="hover:text-blue-400 transition-colors">
                                (+91) 96627 70761
                            </a>
                        </li>
                    </ul>
                    <div className="flex justify-center space-x-4 mt-6">
                        <a href="https://linkedin.com/in/kishan-vaghamashi" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/vaghamashikishan" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 transition-colors">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 py-4 text-center">
                <p>Made with ❤️ by Kishan Vaghamashi</p>
            </footer>
        </div>
    )
}

const Timeline = ({ children }) => (
    <div className="relative">
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-blue-400"></div>
        <div className="space-y-12">
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, { index })
            )}
        </div>
    </div>
)

const TimelineItem = ({ title, company, date, description, index }) => (
    <motion.div
        className={`relative ${index % 2 === 0 ? 'md:text-right' : ''}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    >
        <div className={`bg-gray-700 p-6 rounded-lg shadow-lg ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-blue-400">{company}</p>
            <p className="text-sm text-gray-400 mb-2">{date}</p>
            <p>{description}</p>
        </div>
        <div className={`absolute top-6 left-0 md:left-1/2 transform ${index % 2 === 0 ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'} w-4 h-4 bg-blue-400 rounded-full`}></div>
    </motion.div>
)

const SkillIcon = ({ Icon, name }) => (
    <motion.div
        className="text-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        <Icon className="text-5xl mx-auto mb-2" />
        <p>{name}</p>
    </motion.div>
)

const ProjectCard = ({ title, description, technologies }) => (
    <motion.div
        className="bg-gray-700 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <div className="flex space-x-2">
            {technologies.map((Tech, index) => (
                <Tech key={index} className="text-2xl" />
            ))}
        </div>
    </motion.div>
)