import type { Degree } from '../schema';
import heroPhoto from '../../assets/photos/degrees/chemical-engineering-hero.jpg';
import campusPhoto from '../../assets/photos/degrees/chemical-engineering-campus.jpg';

/*
 * VERIFY BEFORE LAUNCH: program structure, course names, streams,
 * accreditation and placement rules below are written to be plausible and
 * generic. Check every item in `toVerify` against the official UNSW Handbook
 * and the Co-op Program team.
 */
const degree: Degree = {
  slug: 'chemical-engineering',
  name: 'Chemical Engineering',
  faculty: 'UNSW Engineering',
  duration: '4 years full time (honours), including industry placements',
  summary: 'Design and run the processes that turn raw materials into fuels, water, food, medicines and chemicals, safely and at scale.',
  suits: [
    'You enjoyed chemistry and maths and want to apply them to large, real systems',
    'You like understanding how a whole system behaves, not just one part of it',
    'You are comfortable working on industrial sites as well as in an office',
  ],
  mightNotSuit: [
    'You want to work at the lab bench on new molecules; a chemistry degree fits that better',
    'You would rather not work in heavy industry or on sites with strict safety rules',
  ],
  interests: ['science', 'building', 'sustainability'],
  overview:
    'Chemical Engineering is about scaling up. A reaction that works in a test tube has to be made to work continuously, in tonnes per hour, without hurting anyone and without losing money. You study mass and energy balances, thermodynamics, fluid flow, heat and mass transfer, reaction engineering and process control, and finish by designing a complete plant in a team. Graduates work as process engineers in water treatment, mining and minerals processing, oil and gas, food and beverage, pharmaceuticals, energy and environmental consulting.',
  studyFocus: 'Designing, analysing and controlling large processes that transform materials and energy',
  workload: {
    level: 'Very high',
    note: 'Dense technical courses, weekly problem sets and lab reports, and a large final-year design project.',
  },
  maths: { level: 'Heavy', note: 'Calculus, differential equations and numerical methods applied to heat, flow and reactions.' },
  majorsHeading: 'Streams and elective areas',
  majors: [
    { id: 'design', name: 'Process design', description: 'Sizing equipment and laying out a process so it works, is safe and is affordable.' },
    { id: 'control', name: 'Process control and safety', description: 'Keeping a plant stable, and designing out the ways it could fail dangerously.' },
    { id: 'energy', name: 'Energy and sustainability', description: 'Lower-emission processes, hydrogen, carbon capture and energy efficiency.' },
    { id: 'bio', name: 'Biochemical processing', description: 'Processes that use living cells or enzymes, from brewing to vaccines.' },
  ],
  years: [
    {
      year: 1,
      courses: [
        { name: 'Mathematics 1A', description: 'Calculus and linear algebra used in every later engineering course.', majors: [] },
        { name: 'Chemistry for Engineers', description: 'Reactions, equilibrium and the chemistry behind industrial processes.', majors: [] },
        { name: 'Physics 1A', description: 'Mechanics, energy and heat as the foundation for engineering analysis.', majors: [] },
        { name: 'Introduction to Chemical Engineering', description: 'What chemical engineers do, and your first mass balances on simple processes.', majors: [] },
        { name: 'Engineering Design and Innovation', description: 'A team project designing a solution to an open-ended problem.', majors: ['design'] },
      ],
    },
    {
      year: 2,
      courses: [
        { name: 'Mass and Energy Balances', description: 'Tracking every kilogram and kilojoule through a process. The core skill of the degree.', majors: [] },
        { name: 'Chemical Engineering Thermodynamics', description: 'Phase equilibrium and energy limits that decide whether a process is possible.', majors: ['energy'] },
        { name: 'Fluid Mechanics', description: 'How liquids and gases flow through pipes, pumps and vessels.', majors: ['design'] },
        { name: 'Differential Equations for Engineers', description: 'Modelling how temperatures, pressures and concentrations change over time.', majors: ['control'] },
        { name: 'Organic and Physical Chemistry', description: 'Reaction rates and mechanisms relevant to industrial chemistry.', majors: ['bio'] },
      ],
    },
    {
      year: 3,
      courses: [
        { name: 'Heat and Mass Transfer', description: 'Designing heat exchangers and understanding how components move between phases.', majors: ['design', 'energy'] },
        { name: 'Reaction Engineering', description: 'Choosing and sizing reactors to get the product you want and not the one you do not.', majors: ['design', 'bio'] },
        { name: 'Separation Processes', description: 'Distillation, absorption and membranes: getting a pure product out of a mixture.', majors: ['design'] },
        { name: 'Process Dynamics and Control', description: 'How plants respond to change, and how control loops keep them stable.', majors: ['control'] },
        { name: 'Bioprocess Engineering', description: 'Fermentation and cell culture at industrial scale.', majors: ['bio'] },
      ],
    },
    {
      year: 4,
      courses: [
        { name: 'Process Plant Design Project', description: 'A team designs a complete plant, from flowsheet to cost estimate and safety review.', majors: ['design'] },
        { name: 'Process Safety and Risk', description: 'Hazard studies, layers of protection and what major industrial accidents teach.', majors: ['control'] },
        { name: 'Energy and Decarbonisation in Process Industries', description: 'Cutting energy use and emissions in existing and new plants.', majors: ['energy'] },
        { name: 'Thesis Project', description: 'A year-long research or design project with an academic supervisor.', majors: [] },
      ],
    },
  ],
  skills: [
    { name: 'Mass and energy balances', inPractice: 'Working out why a plant uses 8% more steam than the design said it should.' },
    { name: 'Reading process diagrams', inPractice: 'Tracing a line on a piping and instrumentation diagram to find which valve isolates a pump.' },
    { name: 'Hazard identification', inPractice: 'Asking "what if this valve fails closed?" in a hazard study and recording the answer properly.' },
    { name: 'Process data analysis', inPractice: 'Pulling a month of temperature data to show a heat exchanger is fouling.' },
    { name: 'Working with operators', inPractice: 'Learning from a shift operator why the plant is actually run differently from the manual.' },
  ],
  placementDay: {
    setting: 'Month three of a six-month placement as a process engineering intern at a water treatment plant',
    intro: 'You support the plant process engineer. The day starts early, involves PPE and permits, and mixes time on the plant with time on data.',
    blocks: [
      {
        time: '07:00',
        title: 'Toolbox talk',
        whatYouDo: 'A short safety meeting with operators and maintenance. Today covers a chemical delivery and a confined space job.',
        withWhom: ['Plant operators', 'Maintenance crew', 'Shift supervisor'],
        tools: ['Permit board', 'PPE'],
        hardOrSurprising: 'Safety is not a formality here. Everyone is expected to speak up, including the intern.',
      },
      {
        time: '07:30',
        title: 'Plant walk-down',
        whatYouDo: 'You walk the filtration area with an operator, checking gauges against expected values and noting anything unusual.',
        withWhom: ['Plant operator'],
        tools: ['Walk-down checklist', 'Gas detector'],
        hardOrSurprising: 'Operators know the plant far better than the drawings do. Listening carefully is most of the job.',
      },
      {
        time: '09:00',
        title: 'Process data review',
        whatYouDo: 'You pull a month of flow and pressure data to check whether a filter is clogging faster than expected.',
        withWhom: ['Working alone'],
        tools: ['Process historian', 'Excel'],
        hardOrSurprising: 'Sensors drift and fail. Deciding which readings to trust takes as long as the analysis.',
      },
      {
        time: '11:00',
        title: 'Marking up a drawing',
        whatYouDo: 'You mark up a piping and instrumentation diagram for a small change: adding a sample point to a dosing line.',
        withWhom: ['Process engineer', 'Drafter'],
        tools: ['P&ID drawings', 'Design standards'],
        hardOrSurprising: 'Even a small change needs to be documented, reviewed and approved before anyone touches the plant.',
      },
      {
        time: '12:30',
        title: 'Lunch',
        whatYouDo: 'Lunch in the crib room with the operators.',
        withWhom: ['Operators'],
        tools: ['None'],
        hardOrSurprising: 'You learn more about the plant history over lunch than from any report.',
      },
      {
        time: '13:30',
        title: 'Hazard study',
        whatYouDo: 'You act as scribe in a hazard study for the dosing line change, recording each scenario, cause and safeguard.',
        withWhom: ['Process engineer', 'Operations lead', 'Instrument technician', 'Facilitator'],
        tools: ['Hazard study worksheet', 'P&ID drawings'],
        hardOrSurprising: 'Recording discussions accurately and fast is hard, and the record matters legally.',
      },
      {
        time: '15:00',
        title: 'Mass balance for a trial',
        whatYouDo: 'You calculate chemical dosing rates for a trial next week and check them with your supervisor.',
        withWhom: ['Process engineer'],
        tools: ['Excel', 'Chemical data sheets'],
        hardOrSurprising: 'A units mistake here could mean overdosing water that people drink. Checks are mandatory.',
      },
      {
        time: '16:00',
        title: 'Handover notes',
        whatYouDo: 'You write up what you found on the walk-down and the filter data, and log the minor defects you spotted.',
        withWhom: ['Working alone'],
        tools: ['Maintenance system', 'Email'],
        hardOrSurprising: 'Clear written notes are how small problems get fixed before they become big ones.',
      },
    ],
    decisions: [
      {
        id: 'chem-walkdown-leak',
        time: '07:30',
        scenario:
          'On the walk-down you notice a small drip from a flange on a chemical dosing line and a pressure reading a little above normal. The operator shrugs and says it has been like that for weeks.',
        options: [
          { label: 'Let it go, since the operator is not worried', outcome: 'Nothing happens that day. A month later the gasket fails during a delivery and the area has to be evacuated.' },
          { label: 'Report it to your supervisor and log a defect', outcome: 'Your supervisor checks it, a work order is raised, and the gasket is replaced the following week.' },
          { label: 'Tighten the flange yourself to stop the drip', outcome: 'You are stopped by the operator: working on a live chemical line without a permit breaks site rules and could have sprayed you.' },
        ],
        colleagueView:
          'An experienced engineer would report it and log it, every time. Leaks and abnormal readings that "have always been like that" are a classic warning sign before an incident. Never touch equipment without the right permit and isolation, even to make a small fix.',
      },
    ],
  },
  campusDay: {
    setting: 'A Tuesday in week 6 of term, third year',
    intro: 'Campus days are technical and structured around labs and design work, with long self-study blocks.',
    blocks: [
      {
        time: '09:00',
        title: 'Lecture: heat and mass transfer',
        whatYouDo: 'A lecture deriving the equations used to size a heat exchanger, with a worked example.',
        withWhom: ['About 150 students', 'Lecturer'],
        tools: ['Notebook', 'Lecture slides'],
        hardOrSurprising: 'Each week builds on the last. Missing one lecture makes the next one hard to follow.',
      },
      {
        time: '11:00',
        title: 'Tutorial: reactor design problems',
        whatYouDo: 'You work through reactor sizing problems with a tutor and compare methods with classmates.',
        withWhom: ['About 25 students', 'Tutor'],
        tools: ['Calculator', 'Problem set'],
        hardOrSurprising: 'Getting a number is easy. Knowing whether it is a sensible number is the real skill.',
      },
      {
        time: '12:30',
        title: 'Lunch',
        whatYouDo: 'Lunch with co-op scholars from other engineering streams.',
        withWhom: ['Co-op cohort'],
        tools: ['None'],
        hardOrSurprising: 'Comparing placements across disciplines shows how differently each industry works.',
      },
      {
        time: '14:00',
        title: 'Pilot plant lab',
        whatYouDo: 'Your group runs a small distillation column, records temperatures and compositions, and starts the lab report.',
        withWhom: ['Three lab partners', 'Lab demonstrator'],
        tools: ['Pilot distillation column', 'Lab notebook'],
        hardOrSurprising: 'Real equipment never matches the textbook. Explaining why is what the report is marked on.',
      },
      {
        time: '17:00',
        title: 'Self-study',
        whatYouDo: 'Two hours on the problem set and tidying up lab data.',
        withWhom: ['Working alone'],
        tools: ['Laptop', 'Excel'],
        hardOrSurprising: 'Lab reports take longer than expected. Starting the same day helps.',
      },
      {
        time: '19:00',
        title: 'Student society event',
        whatYouDo: 'A chemical engineering society industry night with short talks from recent graduates.',
        withWhom: ['Students', 'Graduate engineers'],
        tools: ['None'],
        hardOrSurprising: 'Hearing about different industries helps you choose where to apply for your next placement.',
      },
    ],
  },
  coop: {
    placementLength: 'Placements are typically several months each, adding up to roughly a year or more in industry',
    numberOfPlacements: 'Usually two to three placements, often in different process industries',
    employerTypes: ['Water utilities', 'Minerals processing', 'Energy companies', 'Food and beverage manufacturers', 'Engineering consultancies'],
    exampleRoles: ['Process engineering intern', 'Operations engineering intern', 'Environmental engineering intern', 'Project engineering intern'],
  },
  employers: [
    { type: 'Water utility', whatYouMightDo: 'Analyse treatment plant data and support process changes.' },
    { type: 'Minerals processing company', whatYouMightDo: 'Help improve recovery on a flotation or leaching circuit.' },
    { type: 'Energy company', whatYouMightDo: 'Support studies on gas processing or hydrogen projects.' },
    { type: 'Food and beverage manufacturer', whatYouMightDo: 'Improve a production line to cut waste or energy use.' },
    { type: 'Engineering consultancy', whatYouMightDo: 'Help prepare process designs for a client project.' },
    { type: 'Pharmaceutical manufacturer', whatYouMightDo: 'Support validation of a production process.' },
    { type: 'Chemical manufacturer', whatYouMightDo: 'Take part in hazard studies and plant improvement projects.' },
    { type: 'Environmental regulator', whatYouMightDo: 'Review emissions data from industrial sites.' },
  ],
  tradeOffs: [
    {
      title: 'Many jobs are on regional or industrial sites',
      detail: 'Some of the best process engineering roles are at plants outside major cities. That can mean relocating, early starts or fly-in fly-out rosters.',
    },
    {
      title: 'A heavy, sequential course load',
      detail: 'Later courses depend directly on earlier ones. Struggling in a core second-year course can affect the rest of the degree.',
    },
    {
      title: 'Industry exposure to fossil fuels',
      detail: 'Some employers are in oil, gas and heavy industry. If you want to work only on clean technology, your choice of placements may be narrower.',
    },
  ],
  imageAlt: {
    hero: "The inside of a water pumping station with rows of large pumps",
    campus: "A group gathered around laboratory equipment during a demonstration",
  },
  heroImage: {
    src: heroPhoto,
    width: 1000,
    height: 666,
    credit: {
      creator: "The City of Toronto",
      title: "Toronto: R. C. Harris Water Treatment Plant interior",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/34608255@N08/9841296276",
    },
  },
  campusImage: {
    src: campusPhoto,
    width: 1000,
    height: 737,
    credit: {
      creator: "NASA Goddard Photo and Video",
      title: "Truman University Students Visit NASA Goddard Space Flight Center",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/24662369@N07/4500255129",
    },
  },
  toVerify: [
    'Official program name, duration and honours structure',
    'Engineers Australia accreditation and required practical experience rules',
    'Stream and elective names, and which courses belong to each',
    'Course names for each year',
    'Number, length and timing of industry placements',
  ],
};

export default degree;
