import React from 'react';
import TeamCard from '../cards/TeamCard';

const TeamSection = () => {
  return (
    <section className="flex flex-col gap-10">
            <div>
              <p className="font-lostaMasta text-7xl">Meet <span className="text-[#EF3187]">the Team</span></p>
              <p className="text-2xl">Meet the minds behind the mission!</p>
            </div>
            <div className="flex gap-[28px] overflow-scroll scroll-hidden">
              <TeamCard name="Shafira" imagePath="/assets/images/shafira.png" alt="Shafira" role="Founder & President" className="bg-[#1C1719]"/>
              <TeamCard name="Kayzaa" imagePath="/assets/images/kayza.png" alt="Kayzaa" role="Founder & Vice President" className="bg-[#1C1719]"/>
              <TeamCard name="Anisha" imagePath="/assets/images/nisha.png" alt="Anisha" role="Founder & Vice President" className="bg-[#1C1719]"/>
              <TeamCard name="Kaisa" imagePath="/assets/images/kaisa.png" alt="Kaisa" role="Lead of Project Team" className="bg-[#EF3187]"/>
              <TeamCard name="Salma" imagePath="/assets/images/salma.png" alt="Salma" role="Co-Lead of Project Team" className="bg-[#EF3187]"/>
              <TeamCard name="Nadhira" imagePath="/assets/images/nadhira.png" alt="Nadhira" role="Lead of IT Team" className="bg-[#E2F1AE] text-[#1C1719]"/>
              <TeamCard name="Sabrina" imagePath="/assets/images/sabrina.png" alt="Sabrina" role="Co-Lead of IT Team" className="bg-[#E2F1AE] text-[#1C1719]"/>
            </div>
    </section>
    );
};

export default TeamSection;
