import React from 'react';

type Talent = {
  name: string;
  status: string;
  experience: string;
  level: string;
  position: string[];
  skill: string[];
};

export interface ITalentDataProps {
  talentData: Talent;
}
