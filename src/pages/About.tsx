import React from 'react';
import { AboutHeader } from '../components/about/AboutHeader';
import { ExperienceTimeline } from '../components/about/ExperienceTimeline';
import { TechStack } from '../components/about/TechStack';
import { profile, experiences, technologies } from '../data/about';

export const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <AboutHeader profile={profile} />
      <ExperienceTimeline experiences={experiences} />
      <TechStack technologies={technologies} />
    </div>
  );
};