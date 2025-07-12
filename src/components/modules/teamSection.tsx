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
              <TeamCard name="Shafira" imagePath="/assets/images/team-dummy.png" alt="Nadhira Hafez" role="Founder & President"/>
              <TeamCard name="Shafira" imagePath="/assets/images/team-dummy.png" alt="Nadhira Hafez" role="Founder & President"/>
              <TeamCard name="Shafira" imagePath="/assets/images/team-dummy.png" alt="Nadhira Hafez" role="Founder & President"/>
              <TeamCard name="Shafira" imagePath="/assets/images/team-dummy.png" alt="Nadhira Hafez" role="Founder & President"/>
              <TeamCard name="Shafira" imagePath="/assets/images/team-dummy.png" alt="Nadhira Hafez" role="Founder & President"/>
              <TeamCard name="Shafira" imagePath="/assets/images/team-dummy.png" alt="Nadhira Hafez" role="Founder & President"/>
              <TeamCard name="Shafira" imagePath="/assets/images/team-dummy.png" alt="Nadhira Hafez" role="Founder & President"/>
              <TeamCard name="Shafira" imagePath="/assets/images/team-dummy.png" alt="Nadhira Hafez" role="Founder & President"/>
            </div>
    </section>
    );
};

export default TeamSection;
