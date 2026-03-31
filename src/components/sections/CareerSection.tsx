
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import Timeline, { TimelineItem } from "@/components/Timeline";
import { Briefcase, Code, GraduationCap, Layout } from "lucide-react";

const CareerSection = () => {
  return (
    <section id="career" className="py-20">
      <div className="container">
        <ScrollReveal>
          <SectionHeading 
            title="Career Journey"
            subtitle="My educational path and aspirations in the tech world. 🚀"
          />
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <Timeline>
            <TimelineItem 
              year="2025 - Present"
              title="Chief Executive Officer (CEO) @ GXT Software Solutions"
              description="As the Chief Executive Officer at GXT Software Solutions, I lead a remote software solutions company specializing in modern, scalable web applications for international clients, primarily in the United States. My contributions include designing responsive web applications utilizing React, JavaScript, and modern CSS frameworks, collaborating with clients to deliver tailored solutions, and optimizing website performance for seamless user experiences.
              Currently pursuing a Bachelor of Science in Software Engineering at KCA University, I am dedicated to enhancing my expertise in software development and web technologies. My focus remains on delivering innovative full-stack solutions with a strong emphasis on engineering, software development, and web development, while fostering collaboration to meet client needs effectively.  "icon={<Code size={18} />}
            />
            <TimelineItem 
              year="2025 - Present"
              title="Software Engineering Student"
              description="Currently pursuing a Bachelor's degree in Software Engineering at KCA University. As a second-year student, I'm building a strong foundation in algorithms, data structures, software engineering, and computer networks."
              icon={<GraduationCap size={18} />}
            />
            
            <TimelineItem 
              year="2024"
              title="UI/UX Design Enthusiast"
              description="Self-taught UI/UX design principles and practices. Created mockups and prototypes for personal projects and collaborative work. Learning design tools like Figma and Adobe XD."
              icon={<Layout size={18} />}
            />
            
            <TimelineItem 
              year="2020 - 2023"
              title="High School"
              description="Completed high school education with a focus on sciences and mathematics. Developed an interest in technology and programming through extracurricular activities."
              icon={<GraduationCap size={18} />}
            />
          </Timeline>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CareerSection;
