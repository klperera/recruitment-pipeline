import type{ candidate } from "../components/CandidateCard";

export const candidates: candidate[] = [
  {
    id: '1',
    name: 'Marlon Reynolds',
    appliedDate: '29 Oct, 2023',
    stage: 'applying',
    score: 3.5,
    referred: true
  },
  {
    id: '2',
    name: 'Regina Hane',
    appliedDate: '29 Oct, 2023',
    stage: 'applying',
    score: 2
  },
  {
    id: '3',
    name: 'Curtis Baumbach',
    appliedDate: '29 Oct, 2023',
    stage: 'applying',
    score: 3,
    referred: true
  },
  {
    id: '4',
    name: 'Jaime Anderson',
    appliedDate: '29 Oct, 2023',
    stage: 'applying',
    score: 0,
    referred: true
  },
  {
    id: '5',
    name: 'Kristi Sipes',
    appliedDate: '20 Oct, 2023',
    stage: 'screening',
    score: 3.5
  },
  {
    id: '6',
    name: 'Randy Dibbert',
    appliedDate: '18 Oct, 2023',
    stage: 'screening',
    score: 3.5
  },
  {
    id: '7',
    name: 'Jane Anderson',
    appliedDate: '18 Oct, 2023',
    stage: 'screening',
    score: 0
  },
  {
    id: '8',
    name: 'Shelia Doyle',
    appliedDate: '13 Oct, 2023',
    stage: 'screening',
    score: 4.5,
    referred: true
  },
  {
    id: '9',
    name: 'Cassandra Hartmann',
    appliedDate: '10 Oct, 2023',
    stage: 'screening',
    score: 0
  },
  {
    id: '10',
    name: 'Cameron Dickens',
    appliedDate: '03 Sep, 2023',
    stage: 'interview',
    score: 4
  },
  {
    id: '11',
    name: 'Merle Vandervort',
    appliedDate: '09 Sep, 2023',
    stage: 'interview',
    score: 4
  },
  {
    id: '12',
    name: 'Jasmine Wiza',
    appliedDate: '10 Sep, 2023',
    stage: 'interview',
    score: 0
  },
  {
    id: '13',
    name: 'Lola Kirlin',
    appliedDate: '03 Sep, 2023',
    stage: 'test',
    score: 4.5,
    referred: true
  },
  {
    id: '14',
    name: 'Virgil Larkin',
    appliedDate: '03 Sep, 2023',
    stage: 'test',
    score: 0
  }
];

export const job = {
  title: 'Research and Development Officer',
  status: 'Open',
  position: 'Researcher',
  location: 'Onsite',
  createdBy: 'Bagus Fikri',
  totalCandidates: 8
};
