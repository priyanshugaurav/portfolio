import React from 'react';

const About = () => {
  return (
    <div
      className="min-h-70 min-w-screen border-b-2"
      style={{ borderColor: 'var(--border-color)' }}
    >
      <div
        className="
          max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[60.8%]
          ml-[5%] sm:ml-[10%] md:ml-[15%] lg:ml-[19.4%]
          border-l border-r font-mono text-[15px] leading-relaxed
          py-4 sm:py-6
        "
        style={{
          borderColor: 'var(--border-color)',
          color: 'var(--text-color)',
        }}
      >
        <h1
          className="text-3xl px-8 font-bold mb-4  border-b"
          style={{ borderColor: 'var(--border-color)' }}
        >
          About
        </h1>

        <div
          className="p-8 font-thin leading-6"
          style={{ color: 'var(--text-color)', opacity: 0.85 }}
        >
          <p className="mb-4">
            Hey, I’m Priyanshu , I just love building things. It started back in college when I built software that’s still being used today. Since then, I’ve freelanced on real-world projects like ERPs for Bajaj Auto dealers, and spent countless nights working on side projects just for fun.
          </p>

          <p className="mb-4">
            I’m the kind of person who enjoys both ends of tech , from designing smooth UIs to going deep and literally creating an <span className="font-semibold">8-bit PC from scratch</span>. Recently, I’ve been diving into <span className="font-semibold">AI/ML</span>, exploring what’s possible .
          </p>

          <p className="mb-4">
            For me, building isn’t just work . I like experimenting, learning, and turning ideas into things people can actually use. <br /> Always curious. Always creating.
          </p>

          <p className="mb-4">
            <br />Peace Out ✌️
          </p>

        </div>
      </div>

      <div
        className="min-w-screen min-h-10 border-b-2 border-t-2"
        style={{
          borderColor: 'var(--border-color)',
          backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
        }}
      ></div>
    </div>
  );
};

export default About;
