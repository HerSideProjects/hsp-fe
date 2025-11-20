import TeamCard from '@/components/cards/TeamCard';
import React from 'react';

const TeamSection = () => {
  return (
    <section className="flex flex-col gap-10">
            <div>
              <p className="font-lostaMasta md:text-7xl text-4xl">Meet <span className="text-[#EF3187]">the Team</span></p>
              <p className="md:text-2xl">Behind every great idea is a passionate team ready to bring it to life!</p>
            </div>
            <div className="flex gap-[28px] overflow-x-auto pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-[#F5E6D3] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#EF3187] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-[#d42a75]">
              <TeamCard name="Shafira" imagePath="/assets/images/peoples/shafira.png" alt="Shafira" role="Founder & President" className="bg-[#1C1719]"/>
              <TeamCard name="Kayzaa" imagePath="/assets/images/peoples/kayza.png" alt="Kayzaa" role="Founder & Vice President" className="bg-[#1C1719]"/>
              <TeamCard name="Anisha" imagePath="/assets/images/peoples/nisha.png" alt="Anisha" role="Founder & Vice President" className="bg-[#1C1719]"/>
              <TeamCard name="Kaisa" imagePath="/assets/images/peoples/kaisa.png" alt="Kaisa" role="Lead of Project Team" className="bg-[#EF3187]"/>
              <TeamCard name="Salma" imagePath="/assets/images/peoples/salma.png" alt="Salma" role="Co-Lead of Project Team" className="bg-[#EF3187]"/>
              <TeamCard name="Nadhira" imagePath="/assets/images/peoples/nadhira.png" alt="Nadhira" role="Lead of IT Team" className="bg-[#E2F1AE] text-[#1C1719]"/>
              <TeamCard name="Sabrina" imagePath="/assets/images/peoples/sabrina.png" alt="Sabrina" role="Co-Lead of IT Team" className="bg-[#E2F1AE] text-[#1C1719]"/>
            </div>
    </section>
    );
};

export default TeamSection;
