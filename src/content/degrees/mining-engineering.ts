import type { Degree } from '../schema';
import heroPhoto from '../../assets/photos/degrees/mining-engineering-hero.jpg';
import campusPhoto from '../../assets/photos/degrees/mining-engineering-campus.jpg';

/*
 * VERIFY BEFORE LAUNCH: program structure, course names, majors,
 * accreditation and placement rules below are written to be plausible and
 * generic. Check every item in `toVerify` against the official UNSW Handbook
 * and the Co-op Program team.
 */
const degree: Degree = {
  slug: 'mining-engineering',
  name: 'Mining Engineering',
  faculty: 'UNSW Engineering',
  duration: '4 years full time (honours), including industry placements',
  summary: 'Plan, design and run mines safely and efficiently, from the first drill hole to closing and rehabilitating the site.',
  suits: [
    'You want large-scale, hands-on engineering in real operating environments',
    'You are comfortable with responsibility for safety and big budgets early on',
    'You are open to working in regional areas or on rosters',
  ],
  mightNotSuit: [
    'You want to live and work only in a capital city',
    'You are uncomfortable working in an industry with significant environmental and social scrutiny',
  ],
  interests: ['building', 'risk', 'science'],
  overview:
    'Mining Engineering covers how minerals and coal are found, extracted and processed, and how mines are closed responsibly. You study geology, rock mechanics, mine planning and design, ventilation, drilling and blasting, mineral processing and mine economics, with a strong focus on safety and risk. Graduates work as mine planning, drill and blast, geotechnical and production engineers on mine sites, and later in corporate, consulting, technology and finance roles connected to resources.',
  studyFocus: 'Planning, designing and safely operating mines, and closing them responsibly',
  workload: {
    level: 'High',
    note: 'Engineering core plus mining-specific courses, field trips and a final-year mine design project.',
  },
  maths: { level: 'Heavy', note: 'Engineering calculus and mechanics, plus statistics for ore grades and geotechnical risk.' },
  majorsHeading: 'Specialisations',
  majors: [
    { id: 'planning', name: 'Mine planning', description: 'Deciding what to mine, in what order, to maximise value safely.' },
    { id: 'geotech', name: 'Geotechnical engineering', description: 'Keeping pit walls and underground openings stable.' },
    { id: 'operations', name: 'Mine operations', description: 'Drilling, blasting, haulage, ventilation and day-to-day production.' },
    { id: 'sustainability', name: 'Mine closure and sustainability', description: 'Rehabilitating land and reducing the environmental footprint of mining.' },
  ],
  years: [
    {
      year: 1,
      courses: [
        { name: 'Mathematics 1A', description: 'Calculus and linear algebra.', majors: [] },
        { name: 'Mathematics 1B', description: 'Further calculus and differential equations.', majors: [] },
        { name: 'Physics 1A', description: 'Mechanics and energy.', majors: [] },
        { name: 'Introduction to Mining and Minerals', description: 'How the mining industry works and the main methods of extraction.', majors: ['operations'] },
        { name: 'Engineering Design and Innovation', description: 'A team project responding to a real design brief.', majors: [] },
      ],
    },
    {
      year: 2,
      courses: [
        { name: 'Geology for Engineers', description: 'Rocks, structures and how ore bodies form.', majors: ['geotech', 'planning'] },
        { name: 'Mechanics of Solids', description: 'Stress and strain in materials and structures.', majors: ['geotech'] },
        { name: 'Mine Surveying', description: 'Measuring and mapping mines, and tracking volumes moved.', majors: ['planning'] },
        { name: 'Mining Systems', description: 'Open-cut and underground methods, and the equipment used.', majors: ['operations'] },
        { name: 'Engineering Computations', description: 'Programming and numerical methods for engineering problems.', majors: [] },
      ],
    },
    {
      year: 3,
      courses: [
        { name: 'Rock Mechanics', description: 'How rock behaves under stress and why walls and roofs fail.', majors: ['geotech'] },
        { name: 'Mine Planning and Design', description: 'Designing pits and underground layouts, and scheduling production.', majors: ['planning'] },
        { name: 'Mine Ventilation', description: 'Keeping underground air safe to breathe and work in.', majors: ['operations'] },
        { name: 'Mineral Processing', description: 'Crushing, grinding and separating valuable minerals from waste.', majors: ['operations'] },
        { name: 'Mine Economics', description: 'Valuing mining projects under price and grade uncertainty.', majors: ['planning'] },
      ],
    },
    {
      year: 4,
      courses: [
        { name: 'Mine Design Project', description: 'A team designs a mine from resource model to schedule and cost.', majors: [] },
        { name: 'Mine Closure and Rehabilitation', description: 'Planning closure from the start and restoring land afterwards.', majors: ['sustainability'] },
        { name: 'Mining Risk Management', description: 'Identifying and controlling major hazards in mining.', majors: ['operations', 'geotech'] },
        { name: 'Thesis Project', description: 'A year-long research or design project.', majors: [] },
      ],
    },
  ],
  skills: [
    { name: 'Mine planning software', inPractice: 'Updating a short-term pit design and checking it against the production target.' },
    { name: 'Risk assessment', inPractice: 'Working through the controls for a high-risk task before it starts.' },
    { name: 'Geotechnical awareness', inPractice: 'Recognising cracking near a pit wall and knowing who to call.' },
    { name: 'Reconciliation', inPractice: 'Comparing tonnes planned, mined and processed to find where material went.' },
    { name: 'Leadership on site', inPractice: 'Running a safety conversation with an experienced operator respectfully.' },
  ],
  placementDay: {
    setting: 'Month four of a six-month placement at an open-cut mine in regional New South Wales',
    intro: 'You live in mine accommodation on a roster. Days start before sunrise and combine time in the pit with planning work in the office.',
    blocks: [
      {
        time: '05:45',
        title: 'Bus to site and pre-start',
        whatYouDo: 'You travel to site and attend the shift pre-start, covering hazards, equipment status and today\'s plan.',
        withWhom: ['Shift supervisor', 'Operators', 'Engineers'],
        tools: ['PPE', 'Pre-start notes'],
        hardOrSurprising: 'Long days and early starts take getting used to.',
      },
      {
        time: '06:30',
        title: 'Pit inspection with geotech',
        whatYouDo: 'You inspect pit walls and haul roads with the geotechnical engineer, checking monitoring data and cracks.',
        withWhom: ['Geotechnical engineer'],
        tools: ['Light vehicle', 'Radio', 'Slope monitoring data'],
        hardOrSurprising: 'You need to follow strict rules for driving and moving around heavy equipment.',
      },
      {
        time: '08:30',
        title: 'Short-term mine plan update',
        whatYouDo: 'You update the weekly pit design and check that it delivers the required tonnes and grade.',
        withWhom: ['Mine planning engineer'],
        tools: ['Mine planning software', 'Block model'],
        hardOrSurprising: 'Plans change daily as equipment breaks down and conditions change.',
      },
      {
        time: '11:00',
        title: 'Drill and blast review',
        whatYouDo: 'You review a blast design: hole pattern, explosive loads and exclusion zones.',
        withWhom: ['Drill and blast engineer'],
        tools: ['Blast design software'],
        hardOrSurprising: 'Every blast has strict safety and environmental limits, including noise and vibration.',
      },
      {
        time: '12:00',
        title: 'Lunch',
        whatYouDo: 'Lunch in the crib room with engineers and operators.',
        withWhom: ['Site team'],
        tools: ['None'],
        hardOrSurprising: 'The community on site is close. Relationships with operators matter.',
      },
      {
        time: '13:00',
        title: 'Production reconciliation',
        whatYouDo: 'You compare surveyed volumes with truck counts and plant data for the month.',
        withWhom: ['Mine surveyor', 'Planning engineer'],
        tools: ['Survey data', 'Excel'],
        hardOrSurprising: 'Numbers rarely match exactly. Finding out why is detective work.',
      },
      {
        time: '15:00',
        title: 'Safety interaction',
        whatYouDo: 'You and a supervisor observe a task and talk with the crew about how it is being done safely.',
        withWhom: ['Supervisor', 'Equipment operators'],
        tools: ['Safety interaction form'],
        hardOrSurprising: 'Asking experienced operators about safety takes confidence and respect.',
      },
      {
        time: '17:00',
        title: 'Bus back to accommodation',
        whatYouDo: 'You finish notes and travel back to camp.',
        withWhom: ['Site team'],
        tools: ['Notebook'],
        hardOrSurprising: 'Rosters mean long blocks away from home, followed by days off.',
      },
    ],
    decisions: [
      {
        id: 'mining-crack',
        time: '06:30',
        scenario:
          'During the inspection you notice new cracking near the crest of a bench beside a haul road. The production supervisor radios that trucks are behind schedule and need to keep using that road.',
        options: [
          { label: 'Keep quiet, since you are only an intern', outcome: 'The trucks keep running. If the bench moves, the consequences could be fatal.' },
          { label: 'Tell the geotechnical engineer immediately', outcome: 'The engineer inspects, sets an exclusion zone and redirects traffic. Production loses an hour.' },
          { label: 'Tell the truck drivers yourself to stop using the road', outcome: 'You act with good intentions, but outside the site\'s process, causing confusion about who has authority.' },
        ],
        colleagueView:
          'An experienced engineer would report it straight away to the geotechnical engineer, who has the authority to decide. On a mine site, everyone has a duty to raise hazards, and stopping for a check costs far less than a slope failure. Using the proper channel makes sure the response is coordinated.',
      },
    ],
  },
  campusDay: {
    setting: 'A Thursday in week 7 of term, third year',
    intro: 'Campus days are city-based and flexible compared with site rosters, with occasional field trips.',
    blocks: [
      {
        time: '09:00',
        title: 'Lecture: rock mechanics',
        whatYouDo: 'A lecture on how stress builds up around underground openings.',
        withWhom: ['About 60 students', 'Lecturer'],
        tools: ['Lecture slides', 'Notebook'],
        hardOrSurprising: 'Small classes mean you get to know lecturers and classmates well.',
      },
      {
        time: '11:00',
        title: 'Rock testing lab',
        whatYouDo: 'You test the strength of rock cores and compare results between rock types.',
        withWhom: ['Lab group', 'Lab technician'],
        tools: ['Rock testing machine', 'Lab sheets'],
        hardOrSurprising: 'Rock is far more variable than most engineering materials.',
      },
      {
        time: '13:00',
        title: 'Lunch',
        whatYouDo: 'Lunch with your co-op cohort.',
        withWhom: ['Co-op cohort'],
        tools: ['None'],
        hardOrSurprising: 'Friends from other degrees are often curious about life on a mine site.',
      },
      {
        time: '14:00',
        title: 'Mine design project',
        whatYouDo: 'Your team works on a pit design and production schedule in planning software.',
        withWhom: ['Three classmates'],
        tools: ['Mine planning software'],
        hardOrSurprising: 'Software learned on placement gives you a real advantage here.',
      },
      {
        time: '16:30',
        title: 'Self-study',
        whatYouDo: 'Mine economics problem sets and lab write-up.',
        withWhom: ['Working alone'],
        tools: ['Excel', 'Problem set'],
        hardOrSurprising: 'Economics matters as much as engineering in deciding whether a mine goes ahead.',
      },
      {
        time: '18:00',
        title: 'Mining society event',
        whatYouDo: 'An industry night with graduates and site managers.',
        withWhom: ['Students', 'Industry representatives'],
        tools: ['None'],
        hardOrSurprising: 'The industry is small and connected. People remember you.',
      },
    ],
  },
  coop: {
    placementLength: 'Placements are typically several months each, adding up to roughly a year or more in industry',
    numberOfPlacements: 'Usually two to three placements, often at different mine sites or commodities',
    employerTypes: ['Mining companies', 'Mining contractors', 'Mining consultancies', 'Mining equipment and technology companies'],
    exampleRoles: ['Mine planning intern', 'Drill and blast intern', 'Geotechnical intern', 'Production engineering intern'],
  },
  employers: [
    { type: 'Open-cut coal mine', whatYouMightDo: 'Help with short-term planning and reconciliation.' },
    { type: 'Underground metal mine', whatYouMightDo: 'Support ventilation or development design.' },
    { type: 'Mining contractor', whatYouMightDo: 'Track production and help manage equipment fleets.' },
    { type: 'Mining consultancy', whatYouMightDo: 'Contribute to mine plans and studies for clients.' },
    { type: 'Mining technology company', whatYouMightDo: 'Test automation or monitoring systems.' },
    { type: 'Quarry operator', whatYouMightDo: 'Support blast design and production planning.' },
    { type: 'Mine rehabilitation business', whatYouMightDo: 'Help plan landform and revegetation work.' },
    { type: 'Mining regulator', whatYouMightDo: 'Review safety and closure plans submitted by mines.' },
  ],
  tradeOffs: [
    {
      title: 'Remote work and rosters',
      detail: 'Most early-career roles are on site, often in regional areas or on fly-in fly-out rosters. This affects relationships, hobbies and where you live.',
    },
    {
      title: 'A cyclical industry',
      detail: 'Hiring depends on commodity prices. Graduate intakes can shrink quickly in downturns.',
    },
    {
      title: 'Social and environmental scrutiny',
      detail: 'Mining is essential for the energy transition but also has real impacts. You may face hard questions from friends, family and communities.',
    },
  ],
  imageAlt: {
    hero: "The terraced benches of a large open-cut mine",
    campus: "Long rows of stored rock core boxes in a core library",
  },
  heroImage: {
    src: heroPhoto,
    width: 1000,
    height: 667,
    credit: {
      creator: "craigdietrich",
      title: "Borax Boron Open Pit Mine, Boron, California",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/57385426@N02/7547458654",
    },
  },
  campusImage: {
    src: campusPhoto,
    width: 1000,
    height: 662,
    credit: {
      creator: "U.S. Geological Survey",
      title: "Rock Core Lab Shelves",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://www.flickr.com/photos/27784370@N05/8527973459",
    },
  },
  toVerify: [
    'Official program name, duration and honours structure',
    'Engineers Australia accreditation and required practical experience rules',
    'Specialisation names, and which courses belong to each',
    'Course names for each year',
    'Number, length and timing of industry placements',
  ],
};

export default degree;
