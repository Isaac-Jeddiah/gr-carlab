import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {

    const stats = [
        { label: 'Years of Experience', value: '15' },
        { label: 'Customer Satisfaction', value: '1563' },
        { label: 'Projects Completed', value: '2987' },
        { label: 'Team Members', value: '67' },
      ];

    useEffect(() => {
        // Title animation
        const titleChars = gsap.utils.toArray('.gsap-target .char');
        gsap.set(titleChars, { opacity: 0, y: 20 });

        // Stats animation
        const statNumbers = gsap.utils.toArray('.stat-number');

        ScrollTrigger.create({
            trigger: "#about",
            start: "top 80%",
            onEnter: () => {
                // Animate title
                gsap.to(titleChars, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.02,
                    ease: "power2.out"
                });

                // Animate stats
                statNumbers.forEach((stat, idx) => {
                    const value = parseInt(stat.dataset.value);
                    gsap.fromTo(stat, {
                        textContent: 0
                    }, {
                        textContent: value,
                        duration: 2,
                        delay: idx * 0.2,
                        ease: "power2.out",
                        snap: { textContent: 1 },
                        onUpdate: function() {
                            stat.textContent = Math.floor(this.targets()[0].textContent) + (stats[idx].label === 'Customer Satisfaction' ? '%' : '+');
                        }
                    });
                });
            },
            once: true
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
<section id="about" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="about-label text-sm text-[#D4D414] tracking-wider uppercase flex items-center gap-3 mb-6 hover-scale">
                <span className="w-10 h-px bg-[#D4D414]"></span>
                <span>ABOUT US</span>
              </div>
              <h2 className="about-title text-4xl md:text-5xl font-bold mb-6 leading-tight break-words overflow-wrap-normal">
                Discover the passion and expertise behind GR CAR LAB, your premier destination for professional car detailing
              </h2>
              <p className="about-description text-[#AAADB0] mb-8 leading-relaxed">
                We combine expertise with cutting-edge technology to deliver exceptional results. Our skilled team uses premium products to ensure your vehicle receives world-class treatment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center hover-scale">
                  <div className="text-4xl md:text-5xl font-bold text-[#D4D414] mb-2 stat-number" data-value={stat.value}>
                    0{stat.value === "99" ? "%" : "+"}
                  </div>
                  <div className="text-[#AAADB0] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    );
}
