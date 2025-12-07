import React from 'react';

export default function About() {

    const stats = [
        { label: 'Years of Experience', value: '15' },
        { label: 'Customer Satisfaction', value: '1563' },        
        { label: 'Projects Completed', value: '2987' },
        { label: 'Team Members', value: '67' },
      ];
    return (
<section id="about" className="about-section py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="about-grid grid md:grid-cols-2 gap-16 items-center">
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

            <div className="stats-grid grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center hover-scale">
                  <div className="stat-number text-4xl md:text-5xl font-bold text-[#D4D414] mb-2" data-value={stat.value}>
                    0{stat.value === "99" ? "%" : "+"}
                  </div>
                  <div className="stat-label text-[#AAADB0] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    );
}