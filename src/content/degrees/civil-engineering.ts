import type { Degree } from '../schema';
import heroPhoto from '../../assets/photos/degrees/civil-engineering-hero.jpg';
import campusPhoto from '../../assets/photos/degrees/civil-engineering-campus.jpg';

/*
 * VERIFY BEFORE LAUNCH: program structure, course names, majors,
 * accreditation and placement rules below are written to be plausible and
 * generic. Check every item in `toVerify` against the official UNSW Handbook
 * and the Co-op Program team.
 */
const degree: Degree = {
  slug: 'civil-engineering',
  name: 'Civil Engineering',
  faculty: 'UNSW Engineering',
  duration: '4 years full time (honours), including industry placements',
  summary: 'Plan, design and build the bridges, roads, buildings, tunnels and water systems that cities depend on.',
  suits: [
    'You want to see your work become something physical that people use for decades',
    'You are comfortable with maths and physics and like applying them to real structures',
    'You are happy working outdoors on construction sites as well as at a desk',
  ],
  mightNotSuit: [
    'You want quick results; large projects take years from design to completion',
    'You would find early starts on site and strict safety rules frustrating',
  ],
  interests: ['building', 'numbers', 'people'],
  overview:
    'Civil Engineering covers the design and construction of infrastructure. You learn how structures carry loads, how soil and rock behave, how water moves through pipes and catchments, and how transport networks are planned. Later you design steel and concrete structures and manage construction projects. Graduates work as structural, geotechnical, transport, water and construction engineers for consultancies, contractors and government agencies.',
  studyFocus: 'How structures, soil, water and transport systems behave, and how to design and build them safely',
  workload: {
    level: 'High',
    note: 'Steady problem sets and design assignments, field work and a major design project in final year.',
  },
  maths: { level: 'Heavy', note: 'Calculus, linear algebra and mechanics, applied to forces, stresses and flows.' },
  majorsHeading: 'Specialisations',
  majors: [
    { id: 'structures', name: 'Structural engineering', description: 'Designing buildings and bridges that carry loads safely.' },
    { id: 'geotech', name: 'Geotechnical engineering', description: 'Foundations, retaining walls, tunnels and how the ground behaves.' },
    { id: 'transport', name: 'Transport engineering', description: 'Planning and designing roads, rail and traffic systems.' },
    { id: 'water', name: 'Water engineering', description: 'Drainage, flooding, water supply and coastal works.' },
  ],
  years: [
    {
      year: 1,
      courses: [
        { name: 'Mathematics 1A', description: 'Calculus and linear algebra for engineering.', majors: [] },
        { name: 'Mathematics 1B', description: 'Further calculus, series and differential equations.', majors: [] },
        { name: 'Physics 1A', description: 'Mechanics and energy, the basis of structural analysis.', majors: [] },
        { name: 'Engineering Mechanics', description: 'Forces, moments and equilibrium in simple structures.', majors: ['structures'] },
        { name: 'Engineering Design and Innovation', description: 'A team project responding to a real design brief.', majors: [] },
      ],
    },
    {
      year: 2,
      courses: [
        { name: 'Mechanics of Solids', description: 'How beams and columns bend, stretch and buckle under load.', majors: ['structures'] },
        { name: 'Engineering Materials', description: 'How concrete, steel and timber behave and why they fail.', majors: ['structures'] },
        { name: 'Surveying and Geospatial Engineering', description: 'Measuring and mapping sites, in the field and with software.', majors: ['transport'] },
        { name: 'Fluid Mechanics for Civil Engineers', description: 'How water flows in pipes and open channels.', majors: ['water'] },
        { name: 'Engineering Computations', description: 'Using programming and numerical methods to solve engineering problems.', majors: [] },
      ],
    },
    {
      year: 3,
      courses: [
        { name: 'Structural Analysis', description: 'Working out forces and deflections in frames and trusses.', majors: ['structures'] },
        { name: 'Soil Mechanics', description: 'How soil carries load, settles and lets water through.', majors: ['geotech'] },
        { name: 'Transport Engineering', description: 'Traffic flow, road design and planning transport networks.', majors: ['transport'] },
        { name: 'Hydraulics and Hydrology', description: 'Estimating floods and designing drainage systems.', majors: ['water'] },
        { name: 'Construction Management', description: 'Planning, scheduling, cost control and safety on construction projects.', majors: [] },
      ],
    },
    {
      year: 4,
      courses: [
        { name: 'Design of Steel and Concrete Structures', description: 'Designing real structural members to Australian Standards.', majors: ['structures'] },
        { name: 'Foundation Engineering', description: 'Designing footings, piles and retaining walls.', majors: ['geotech'] },
        { name: 'Civil Engineering Design Project', description: 'A team designs a complete infrastructure project from site investigation to cost.', majors: [] },
        { name: 'Thesis Project', description: 'A year-long research or design project.', majors: [] },
      ],
    },
  ],
  skills: [
    { name: 'Structural calculations', inPractice: 'Checking that a temporary platform can safely carry a crane before it is used.' },
    { name: 'Reading drawings and specifications', inPractice: 'Spotting that reinforcement on site does not match the latest drawing revision.' },
    { name: 'Construction planning', inPractice: 'Updating a three-week look-ahead programme after rain delays a concrete pour.' },
    { name: 'Site communication', inPractice: 'Explaining a design change to a subcontractor foreman clearly and respectfully.' },
    { name: 'Record keeping', inPractice: 'Writing a site diary entry that would stand up if a dispute arose a year later.' },
  ],
  placementDay: {
    setting: 'Month two of a six-month placement as a site engineer intern on a road bridge project',
    intro: 'You work for the construction contractor. Days start early, much of the time is on site, and decisions have real cost and safety consequences.',
    blocks: [
      {
        time: '06:30',
        title: 'Pre-start meeting',
        whatYouDo: 'The site team runs through today\'s work, hazards, crane lifts and the concrete pour booked for mid-morning.',
        withWhom: ['Site supervisor', 'Foremen', 'Subcontractor crews'],
        tools: ['Pre-start form', 'PPE'],
        hardOrSurprising: 'Sites start early. Turning up late to pre-start is noticed.',
      },
      {
        time: '07:30',
        title: 'Inspection before a concrete pour',
        whatYouDo: 'You check formwork and reinforcement for a bridge pier against the drawings before the pour is approved.',
        withWhom: ['Site engineer', 'Steel fixing foreman'],
        tools: ['Construction drawings', 'Tape measure', 'Inspection checklist'],
        hardOrSurprising: 'Once concrete is poured, mistakes are very expensive to fix. This is a hold point for a reason.',
      },
      {
        time: '09:30',
        title: 'Requests for information',
        whatYouDo: 'You draft a request to the design consultant about a clash between a drainage pipe and a footing.',
        withWhom: ['Project engineer', 'Design consultant by email'],
        tools: ['Document control system', 'Drawings'],
        hardOrSurprising: 'Writing a precise question saves days of back and forth.',
      },
      {
        time: '11:00',
        title: 'Quantities and progress',
        whatYouDo: 'You measure completed work to support this month\'s progress claim to the client.',
        withWhom: ['Contract administrator'],
        tools: ['Excel', 'Survey data'],
        hardOrSurprising: 'Engineering on a construction project is closely tied to money and contracts.',
      },
      {
        time: '12:00',
        title: 'Lunch',
        whatYouDo: 'Lunch in the site office with the engineering team.',
        withWhom: ['Site engineers'],
        tools: ['None'],
        hardOrSurprising: 'Lunch is short. Sites run to a tight timetable.',
      },
      {
        time: '13:00',
        title: 'Subcontractor coordination',
        whatYouDo: 'You walk the site with the earthworks foreman to agree the order of work for the next week.',
        withWhom: ['Earthworks foreman', 'Site supervisor'],
        tools: ['Site plan', 'Programme'],
        hardOrSurprising: 'Experienced foremen know far more about building than you do. Respect earns cooperation.',
      },
      {
        time: '14:30',
        title: 'Quality records',
        whatYouDo: 'You file inspection records, concrete test results and photos against the quality plan.',
        withWhom: ['Quality manager'],
        tools: ['Quality management system', 'Site camera'],
        hardOrSurprising: 'Paperwork is how the client knows the bridge was built correctly. It is not optional.',
      },
      {
        time: '16:00',
        title: 'Look-ahead programme',
        whatYouDo: 'You update the three-week programme for delays and next week\'s deliveries.',
        withWhom: ['Project engineer'],
        tools: ['Scheduling software'],
        hardOrSurprising: 'Weather and deliveries change plans constantly. Programmes are always being redone.',
      },
    ],
    decisions: [
      {
        id: 'civil-rebar-pour',
        time: '07:30',
        scenario:
          'During the pre-pour inspection you find reinforcement spacing in one area that does not match the latest drawing. The concrete trucks are booked for 10:00 and the crew is keen to keep going.',
        options: [
          { label: 'Let the pour go ahead, since the difference is small', outcome: 'The pour proceeds. The client\'s inspector later finds the defect and the section has to be investigated and possibly broken out.' },
          { label: 'Raise it with your supervising engineer straight away', outcome: 'The engineer checks, the steel fixers correct the spacing in an hour and the pour is pushed back slightly.' },
          { label: 'Ask the crew to fix it quietly without telling anyone', outcome: 'The fix is made, but it is not recorded. When the records are audited, nobody can show the work was inspected after the change.' },
        ],
        colleagueView:
          'An experienced engineer would raise it immediately and hold the pour if needed. Rescheduling a concrete truck costs a little; demolishing a defective pier costs a lot and damages trust. Any fix must be inspected and recorded so there is a clear history.',
      },
    ],
  },
  campusDay: {
    setting: 'A Monday in week 5 of term, third year',
    intro: 'Campus days alternate between calculation-heavy classes and practical work, with far more flexibility than site.',
    blocks: [
      {
        time: '09:00',
        title: 'Lecture: structural analysis',
        whatYouDo: 'A lecture on analysing frames with several load cases.',
        withWhom: ['About 200 students', 'Lecturer'],
        tools: ['Lecture slides', 'Notebook'],
        hardOrSurprising: 'The methods are systematic, but one sign error ruins the whole answer.',
      },
      {
        time: '11:00',
        title: 'Soils lab',
        whatYouDo: 'You test soil samples to measure strength and how much they compress.',
        withWhom: ['Lab group', 'Lab technician'],
        tools: ['Shear box', 'Lab sheets'],
        hardOrSurprising: 'Real soil samples are messy and inconsistent, unlike textbook examples.',
      },
      {
        time: '13:00',
        title: 'Lunch',
        whatYouDo: 'Lunch with co-op friends who are on placement next term.',
        withWhom: ['Co-op cohort'],
        tools: ['None'],
        hardOrSurprising: 'Hearing about site life before your first placement helps you prepare.',
      },
      {
        time: '14:00',
        title: 'Design project meeting',
        whatYouDo: 'Your team divides up the design of a pedestrian bridge: loads, member sizes, drawings and cost.',
        withWhom: ['Four classmates'],
        tools: ['Structural analysis software', 'Shared drive'],
        hardOrSurprising: 'Each part depends on another. One late member holds everyone up.',
      },
      {
        time: '16:00',
        title: 'Self-study',
        whatYouDo: 'Working through hydraulics problems and starting the lab report.',
        withWhom: ['Working alone'],
        tools: ['Calculator', 'Problem set'],
        hardOrSurprising: 'Regular practice matters more than long sessions before exams.',
      },
      {
        time: '18:00',
        title: 'Society event',
        whatYouDo: 'A civil engineering society site tour of a building under construction.',
        withWhom: ['Students', 'Site engineers'],
        tools: ['PPE'],
        hardOrSurprising: 'Seeing a real site makes lectures make more sense.',
      },
    ],
  },
  coop: {
    placementLength: 'Placements are typically several months each, adding up to roughly a year or more in industry',
    numberOfPlacements: 'Usually two to three placements, often mixing design office and construction site experience',
    employerTypes: ['Construction contractors', 'Engineering consultancies', 'Government transport agencies', 'Water utilities'],
    exampleRoles: ['Site engineer intern', 'Structural engineering intern', 'Transport planning intern', 'Project engineering intern'],
  },
  employers: [
    { type: 'Construction contractor', whatYouMightDo: 'Inspect work, manage records and coordinate subcontractors on site.' },
    { type: 'Structural consultancy', whatYouMightDo: 'Run calculations and check drawings for building designs.' },
    { type: 'State transport agency', whatYouMightDo: 'Support planning or delivery of road and rail projects.' },
    { type: 'Water utility', whatYouMightDo: 'Help design pipe upgrades or assess flood risk.' },
    { type: 'Geotechnical consultancy', whatYouMightDo: 'Log boreholes and help design foundations.' },
    { type: 'Local council', whatYouMightDo: 'Review development applications and drainage designs.' },
    { type: 'Tunnelling contractor', whatYouMightDo: 'Monitor ground movement during excavation.' },
    { type: 'Property developer', whatYouMightDo: 'Track design and construction progress for a building.' },
  ],
  tradeOffs: [
    {
      title: 'Early starts and site conditions',
      detail: 'Construction placements often start before 7am, and work happens in heat, rain and noise. Not everyone enjoys this.',
    },
    {
      title: 'Starting salaries can trail some other fields',
      detail: 'Graduate pay in civil engineering is solid but can be lower than in finance or technology. Progression to senior roles takes time and chartership.',
    },
    {
      title: 'Exposure to economic cycles',
      detail: 'Infrastructure spending depends on government budgets and the property market. Hiring can slow when projects are cut.',
    },
  ],
  imageAlt: {
    hero: "Cranes working on a bridge construction site",
    campus: "A group surveying a grassy field with a GPS survey pole",
  },
  heroImage: {
    src: heroPhoto,
    width: 1000,
    height: 598,
    credit: {
      creator: "NCDOTcommunications",
      title: "Yadkin River Bridge Construction Site",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/39320593@N03/5471075867",
    },
  },
  campusImage: {
    src: campusPhoto,
    width: 1000,
    height: 668,
    credit: {
      creator: "OregonDOT",
      title: "Ready in the field",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/28364885@N02/47062300224",
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
