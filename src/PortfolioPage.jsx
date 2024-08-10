import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const projects = [
  { title: 'AI Chat Bot', description: 'Developed a conversational AI using natural language processing.' },
  { title: 'Machine Learning Pipeline', description: 'Built an end-to-end ML pipeline for data processing and model training.' },
  { title: 'Hackathon Project: EcoTrack', description: 'Won first place with an app that tracks and reduces carbon footprint.' },
];

const blogPosts = [
  { title: 'The Future of AI in Software Development', date: '2024-07-15' },
  { title: 'My Experience at Tech Innovators Hackathon 2024', date: '2024-06-22' },
  { title: 'Building Scalable ML Models: Lessons Learned', date: '2024-05-30' },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-gray-800 text-white p-6">
        <h1 className="text-3xl font-bold">Shweta Kale</h1>
        <p className="text-xl">Software Developer | Curious Person</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-lg">
            I'm a passionate software developer with a keen interest in AI and emerging technologies. 
            Currently working on cutting-edge AI projects and always excited about participating in hackathons.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.date}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['Python', 'JavaScript', 'React', 'Machine Learning', 'AI', 'Data Analysis'].map((skill, index) => (
              <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-6">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/yourusername" className="hover:text-blue-300">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-300">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com/yourusername" className="hover:text-blue-300">
            <Twitter size={24} />
          </a>
        </div>
        <p className="text-center mt-4">© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;