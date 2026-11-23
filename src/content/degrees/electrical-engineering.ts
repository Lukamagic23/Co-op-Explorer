import type { Degree } from '../schema';
import heroPhoto from '../../assets/photos/degrees/electrical-engineering-hero.jpg';
import campusPhoto from '../../assets/photos/degrees/electrical-engineering-campus.jpg';

/*
 * VERIFY BEFORE LAUNCH: program structure, course names, majors,
 * accreditation and placement rules below are written to be plausible and
 * generic. Check every item in `toVerify` against the official UNSW Handbook
 * and the Co-op Program team.
 */
const degree: Degree = {
  slug: 'electrical-engineering',
  name: 'Electrical Engineering and Telecommunications',
  faculty: 'UNSW Engineering',
  duration: '4 years full time (honours), including industry placements',
  summary: 'Design the systems that generate, move and use electricity and information, from power grids to mobile networks and chips.',
  suits: [
    'You enjoyed physics, especially electricity and waves, and want to go much deeper',
    'You like both theory and hands-on building with circuits and code',
    'You are interested in the energy transition or communications technology',
  ],
  mightNotSuit: [
    'You find abstract maths frustrating; signals and electromagnetics rely heavily on it',
    'You want to work mostly on software; software engineering may suit you better',
  ],
  interests: ['building', 'science', 'numbers'],
  overview:
    'Electrical Engineering and Telecommunications covers how electrical energy and information are generated, transmitted, controlled and used. You start with circuits, electronics and programming, then move into signals and systems, control, power systems and communications. Lab work runs throughout, from building circuits to programming embedded systems. Graduates work in electricity networks and renewable energy, telecommunications, defence, transport, mining automation, consulting and electronics design.',
  studyFocus: 'Circuits, signals, power systems and communications, and how to design with them',
  workload: {
    level: 'Very high',
    note: 'Theory-heavy courses with weekly labs, and a demanding final year with a design project and thesis.',
  },
  maths: { level: 'Very heavy', note: 'Calculus, complex numbers, differential equations, transforms and probability. Among the most maths-heavy engineering streams.' },
  majorsHeading: 'Specialisations',
  majors: [
    { id: 'power', name: 'Power and energy systems', description: 'Grids, renewable connection, protection and power electronics.' },
    { id: 'telecom', name: 'Telecommunications', description: 'Wireless, optical and network systems that carry data.' },
    { id: 'control', name: 'Control and automation', description: 'Making machines and systems behave as intended, from drones to factories.' },
    { id: 'electronics', name: 'Electronics and embedded systems', description: 'Designing circuits and the small computers inside devices.' },
  ],
  years: [
    {
      year: 1,
      courses: [
        { name: 'Mathematics 1A', description: 'Calculus and linear algebra.', majors: [] },
        { name: 'Mathematics 1B', description: 'Further calculus, series and differential equations.', majors: [] },
        { name: 'Physics 1A', description: 'Mechanics and an introduction to electricity.', majors: [] },
        { name: 'Programming Fundamentals', description: 'Writing and debugging programs in C.', majors: ['electronics'] },
        { name: 'Engineering Design and Innovation', description: 'A team project designing and building a small device.', majors: [] },
      ],
    },
    {
      year: 2,
      courses: [
        { name: 'Circuits and Signals', description: 'Analysing circuits and how they respond to changing signals.', majors: [] },
        { name: 'Digital Circuits and Systems', description: 'Logic, digital design and how processors work at the lowest level.', majors: ['electronics'] },
        { name: 'Electronics', description: 'Transistors, amplifiers and designing practical analogue circuits.', majors: ['electronics'] },
        { name: 'Mathematics for Electrical Engineering', description: 'Complex analysis, transforms and differential equations for signals and systems.', majors: [] },
        { name: 'Electromagnetics', description: 'Fields and waves, the physics behind antennas and transformers.', majors: ['telecom', 'power'] },
      ],
    },
    {
      year: 3,
      courses: [
        { name: 'Signals and Systems', description: 'Representing and processing signals in time and frequency.', majors: ['telecom', 'control'] },
        { name: 'Control Systems', description: 'Feedback, stability and designing controllers.', majors: ['control'] },
        { name: 'Power Systems Equipment', description: 'Transformers, machines and the equipment that makes up a grid.', majors: ['power'] },
        { name: 'Communication Systems', description: 'Modulation, noise and how data is sent reliably.', majors: ['telecom'] },
        { name: 'Embedded Systems Design', description: 'Programming microcontrollers to sense and control the physical world.', majors: ['electronics', 'control'] },
      ],
    },
    {
      year: 4,
      courses: [
        { name: 'Power System Analysis', description: 'Load flow, faults and stability in large networks.', majors: ['power'] },
        { name: 'Wireless and Mobile Networks', description: 'How mobile networks are designed and managed.', majors: ['telecom'] },
        { name: 'Power Electronics', description: 'Converters used in solar inverters, batteries and electric vehicles.', majors: ['power', 'electronics'] },
        { name: 'Design Proficiency Project', description: 'A team builds and demonstrates a working electrical system.', majors: [] },
        { name: 'Thesis Project', description: 'A year-long research or design project.', majors: [] },
      ],
    },
  ],
  skills: [
    { name: 'Circuit analysis', inPractice: 'Working out why a protection relay tripped by reconstructing the fault currents.' },
    { name: 'Power system modelling', inPractice: 'Running a study to check whether a new solar farm will push local voltages too high.' },
    { name: 'Lab and test skills', inPractice: 'Using an oscilloscope to find noise on a signal that software alone could not explain.' },
    { name: 'Embedded programming', inPractice: 'Writing firmware that reads a sensor and reports it reliably over a radio link.' },
    { name: 'Technical documentation', inPractice: 'Writing a study report that a network planner can approve without calling you.' },
  ],
  placementDay: {
    setting: 'Month three of a six-month placement in the network planning team of an electricity distributor',
    intro: 'You help assess requests to connect new solar farms and batteries to the grid. The day mixes software studies, drawings and a substation visit.',
    blocks: [
      {
        time: '08:00',
        title: 'Team meeting',
        whatYouDo: 'The planning team goes through active connection applications and deadlines.',
        withWhom: ['Planning engineers', 'Team lead'],
        tools: ['Applications tracker'],
        hardOrSurprising: 'Connection requests have regulated deadlines, so timing matters.',
      },
      {
        time: '08:30',
        title: 'Protection settings review',
        whatYouDo: 'You compare relay settings in a database with the latest design to check they match.',
        withWhom: ['Protection engineer'],
        tools: ['Settings database', 'Single line diagrams'],
        hardOrSurprising: 'A wrong setting may never matter, or may cause a blackout. Care is essential.',
      },
      {
        time: '10:00',
        title: 'Zone substation visit',
        whatYouDo: 'You visit a substation with a field crew to see the equipment you have been modelling.',
        withWhom: ['Field technicians', 'Senior engineer'],
        tools: ['PPE', 'Site access permit'],
        hardOrSurprising: 'High-voltage sites have strict rules about where you can stand and what you can touch.',
      },
      {
        time: '12:00',
        title: 'Lunch',
        whatYouDo: 'Lunch back at the office with other graduates and interns.',
        withWhom: ['Graduates and interns'],
        tools: ['None'],
        hardOrSurprising: 'Many graduates rotate through teams. They are a good source of advice on where to go next.',
      },
      {
        time: '13:00',
        title: 'Connection study',
        whatYouDo: 'You run load flow studies for a proposed solar farm at different times of day and seasons.',
        withWhom: ['Planning engineer'],
        tools: ['Power system simulation software', 'Excel'],
        hardOrSurprising: 'The model is only as good as its assumptions about load and generation.',
      },
      {
        time: '15:00',
        title: 'Design drawing review',
        whatYouDo: 'You review a contractor\'s drawings for a new feeder and note inconsistencies.',
        withWhom: ['Design engineer'],
        tools: ['Drawings', 'Design standards'],
        hardOrSurprising: 'Small labelling errors on drawings can lead to serious mistakes in the field.',
      },
      {
        time: '16:30',
        title: 'Study write-up',
        whatYouDo: 'You write a short summary of the connection study results for the planning engineer.',
        withWhom: ['Working alone'],
        tools: ['Report template'],
        hardOrSurprising: 'You need to state the limits of your analysis, not just the result.',
      },
    ],
    decisions: [
      {
        id: 'elec-voltage-rise',
        time: '13:00',
        scenario:
          'Your study shows that at midday in spring, the solar farm could push local voltage slightly above the allowed limit. The customer wants a quick approval, and the result only appears in one scenario.',
        options: [
          { label: 'Approve it, since it only happens in one case', outcome: 'The connection goes ahead. On sunny spring days, customers nearby see voltage problems and complaints arrive.' },
          { label: 'Flag it and propose a fix such as an export limit', outcome: 'Your engineer agrees. The customer is offered connection with an export limit or a reactive power setting.' },
          { label: 'Rerun with more conservative assumptions until it passes', outcome: 'The numbers pass on paper, but the result is not honest about the real risk.' },
        ],
        colleagueView:
          'An experienced planning engineer would flag the issue, explain the conditions where it happens, and suggest technical options to solve it. The goal is to connect the farm safely, not to block it, and not to hide a real problem by changing assumptions.',
      },
    ],
  },
  campusDay: {
    setting: 'A Thursday in week 7 of term, second year',
    intro: 'Campus days are full of theory and labs. The lab reports and problem sets take up the evenings.',
    blocks: [
      {
        time: '09:00',
        title: 'Lecture: circuits and signals',
        whatYouDo: 'A lecture on how circuits respond to sudden changes, with derivations on the board.',
        withWhom: ['About 250 students', 'Lecturer'],
        tools: ['Notebook', 'Lecture slides'],
        hardOrSurprising: 'The maths becomes much more abstract than in school physics.',
      },
      {
        time: '11:00',
        title: 'Electronics lab',
        whatYouDo: 'You build an amplifier circuit, measure its response and compare it with your calculations.',
        withWhom: ['Lab partner', 'Lab demonstrator'],
        tools: ['Oscilloscope', 'Signal generator', 'Breadboard'],
        hardOrSurprising: 'A loose wire can waste an hour. Methodical testing saves time.',
      },
      {
        time: '13:00',
        title: 'Lunch',
        whatYouDo: 'Lunch with co-op friends from other engineering streams.',
        withWhom: ['Co-op cohort'],
        tools: ['None'],
        hardOrSurprising: 'Friends in other streams often have very different placement experiences.',
      },
      {
        time: '14:00',
        title: 'Tutorial: transforms',
        whatYouDo: 'You work through transform problems with a tutor and classmates.',
        withWhom: ['About 25 students', 'Tutor'],
        tools: ['Problem set'],
        hardOrSurprising: 'Many students find this the hardest maths in the degree.',
      },
      {
        time: '16:00',
        title: 'Self-study',
        whatYouDo: 'Writing up the lab and attempting next week\'s problem set.',
        withWhom: ['Working alone'],
        tools: ['Laptop', 'Circuit simulator'],
        hardOrSurprising: 'Simulating a circuit before building it saves time in the next lab.',
      },
      {
        time: '18:00',
        title: 'Robotics club',
        whatYouDo: 'You help wire the motor controller for a student robotics competition entry.',
        withWhom: ['Students from several degrees'],
        tools: ['Soldering iron', 'Microcontroller'],
        hardOrSurprising: 'Building something real outside class is where many students find what they enjoy.',
      },
    ],
  },
  coop: {
    placementLength: 'Placements are typically several months each, adding up to roughly a year or more in industry',
    numberOfPlacements: 'Usually two to three placements, often across power, communications and electronics employers',
    employerTypes: ['Electricity networks', 'Telecommunications providers', 'Defence and aerospace', 'Engineering consultancies', 'Rail and transport'],
    exampleRoles: ['Network planning intern', 'Protection engineering intern', 'Telecommunications engineering intern', 'Electronics design intern'],
  },
  employers: [
    { type: 'Electricity distributor', whatYouMightDo: 'Run grid studies for new solar, battery or load connections.' },
    { type: 'Telecommunications provider', whatYouMightDo: 'Plan or test mobile network upgrades.' },
    { type: 'Defence contractor', whatYouMightDo: 'Test radar or communications electronics.' },
    { type: 'Renewable energy developer', whatYouMightDo: 'Help design the electrical layout of a solar or wind farm.' },
    { type: 'Rail operator', whatYouMightDo: 'Support signalling or traction power projects.' },
    { type: 'Engineering consultancy', whatYouMightDo: 'Design electrical systems for buildings or infrastructure.' },
    { type: 'Mining company', whatYouMightDo: 'Support automation and electrical maintenance projects.' },
    { type: 'Electronics manufacturer', whatYouMightDo: 'Design and test circuit boards for a product.' },
  ],
  tradeOffs: [
    {
      title: 'Very abstract maths',
      detail: 'Signals, electromagnetics and control rely on maths that many students find difficult. It is a real barrier for some, even if they enjoyed school physics.',
    },
    {
      title: 'Theory can feel far from practice',
      detail: 'Some courses are mostly derivations, and it can take a placement before you see why they matter.',
    },
    {
      title: 'Some roles are in large, regulated organisations',
      detail: 'Networks and defence work involve strict processes, approvals and security clearances. Change can be slow.',
    },
  ],
  imageAlt: {
    hero: "An engineer in a hard hat checking equipment at an electrical substation",
    campus: "An oscilloscope showing a waveform on a lab bench",
  },
  heroImage: {
    src: heroPhoto,
    width: 1000,
    height: 667,
    credit: {
      creator: "Idaho National Laboratory",
      title: "Electric Substation",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/30369883@N03/3639487285",
    },
  },
  campusImage: {
    src: campusPhoto,
    width: 1000,
    height: 750,
    credit: {
      creator: "jepoirrier",
      title: "Oscilloscope with noise",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      sourceUrl: "https://www.flickr.com/photos/57519914@N00/3605063544",
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
