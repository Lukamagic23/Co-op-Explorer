import type { Degree } from '../schema';
import heroPhoto from '../../assets/photos/degrees/photovoltaics-and-renewable-energy-hero.jpg';
import campusPhoto from '../../assets/photos/degrees/photovoltaics-and-renewable-energy-campus.jpg';

/*
 * VERIFY BEFORE LAUNCH: program structure, course names, streams,
 * accreditation and placement rules below are written to be plausible and
 * generic. Check every item in `toVerify` against the official UNSW Handbook
 * and the Co-op Program team.
 */
const degree: Degree = {
  slug: 'photovoltaics-and-renewable-energy',
  name: 'Photovoltaics and Renewable Energy',
  faculty: 'UNSW Engineering',
  duration: '4 years full time (honours), including industry placements',
  summary: 'Design solar cells, solar farms and the systems that connect renewable energy and storage to the grid.',
  suits: [
    'You want to work directly on the energy transition',
    'You enjoy physics and electronics and want to apply them to real energy systems',
    'You like a mix of lab science, design and project work',
  ],
  mightNotSuit: [
    'You want a broad engineering degree that keeps every industry open',
    'You prefer policy or advocacy roles over technical engineering',
  ],
  interests: ['sustainability', 'science', 'building'],
  overview:
    'Photovoltaics and Renewable Energy focuses on solar energy and the systems around it. You study semiconductor physics and how solar cells work, how modules and arrays are designed and installed, how power electronics and batteries are used, and how large amounts of renewable energy can be integrated into the electricity grid. You also learn energy economics and policy. Graduates work as solar and renewable energy engineers with developers, installers, network businesses, manufacturers, consultants and research organisations.',
  studyFocus: 'Solar cell physics, PV system design and integrating renewables and storage into the grid',
  workload: {
    level: 'High',
    note: 'Engineering core plus specialist labs and design projects, with a large final-year project and thesis.',
  },
  maths: { level: 'Heavy', note: 'Calculus, differential equations and semiconductor physics, plus statistics for energy yield.' },
  majorsHeading: 'Elective areas',
  majors: [
    { id: 'devices', name: 'Solar cell technology', description: 'How solar cells are designed, made and improved.' },
    { id: 'systems', name: 'PV system design', description: 'Designing rooftop and utility-scale solar installations.' },
    { id: 'grid', name: 'Grid integration and storage', description: 'Batteries, inverters and keeping the grid stable with more renewables.' },
    { id: 'policy', name: 'Energy economics and policy', description: 'How energy markets, prices and policy shape projects.' },
  ],
  years: [
    {
      year: 1,
      courses: [
        { name: 'Mathematics 1A', description: 'Calculus and linear algebra.', majors: [] },
        { name: 'Mathematics 1B', description: 'Further calculus and differential equations.', majors: [] },
        { name: 'Physics 1A', description: 'Mechanics, energy and an introduction to electricity.', majors: [] },
        { name: 'Chemistry for Engineers', description: 'Chemistry behind materials used in solar cells and batteries.', majors: ['devices'] },
        { name: 'Introduction to Renewable Energy Engineering', description: 'Solar, wind, storage and the challenges of a renewable grid.', majors: [] },
      ],
    },
    {
      year: 2,
      courses: [
        { name: 'Circuits and Signals', description: 'Analysing electrical circuits and their behaviour.', majors: ['systems'] },
        { name: 'Semiconductor Fundamentals', description: 'How semiconductors conduct and how p-n junctions work.', majors: ['devices'] },
        { name: 'Renewable Energy Technologies', description: 'How solar, wind, hydro and bioenergy systems work and compare.', majors: ['systems', 'policy'] },
        { name: 'Thermodynamics', description: 'Energy conversion and efficiency limits.', majors: ['grid'] },
        { name: 'Engineering Computations', description: 'Programming and numerical methods for energy data.', majors: [] },
      ],
    },
    {
      year: 3,
      courses: [
        { name: 'Photovoltaic Devices', description: 'Designing solar cells and understanding where efficiency is lost.', majors: ['devices'] },
        { name: 'PV System Design', description: 'Sizing and designing rooftop and utility-scale solar systems.', majors: ['systems'] },
        { name: 'Energy Storage', description: 'Batteries and other storage, and how to size them.', majors: ['grid'] },
        { name: 'Power Electronics for Renewables', description: 'Inverters and converters that connect solar and batteries.', majors: ['grid', 'systems'] },
        { name: 'Energy Policy and Economics', description: 'Energy markets, pricing and policy.', majors: ['policy'] },
      ],
    },
    {
      year: 4,
      courses: [
        { name: 'Grid Integration of Renewables', description: 'Keeping the grid stable and reliable with high renewable shares.', majors: ['grid'] },
        { name: 'Solar Cell Manufacturing', description: 'How cells and modules are produced at scale and kept reliable.', majors: ['devices'] },
        { name: 'Renewable Energy Design Project', description: 'A team designs a renewable energy project from site to financial model.', majors: [] },
        { name: 'Thesis Project', description: 'A year-long research or design project.', majors: [] },
      ],
    },
  ],
  skills: [
    { name: 'Energy yield modelling', inPractice: 'Estimating how much electricity a solar farm will produce each year and how certain that is.' },
    { name: 'PV system design', inPractice: 'Laying out strings and inverters so a rooftop system meets standards.' },
    { name: 'Performance analysis', inPractice: 'Finding underperforming strings in an operating solar farm from monitoring data.' },
    { name: 'Lab characterisation', inPractice: 'Measuring a solar cell\'s current-voltage curve and explaining its losses.' },
    { name: 'Explaining uncertainty', inPractice: 'Telling a commercial team why the yield estimate is a range, not a single number.' },
  ],
  placementDay: {
    setting: 'Month three of a six-month placement with a utility-scale solar developer',
    intro: 'You support the engineering team assessing a proposed solar farm and monitoring operating ones.',
    blocks: [
      {
        time: '08:30',
        title: 'Team check-in',
        whatYouDo: 'The team reviews project milestones and grid connection progress.',
        withWhom: ['Engineering team', 'Project manager'],
        tools: ['Project tracker'],
        hardOrSurprising: 'Projects depend on many outside parties, from landowners to network operators.',
      },
      {
        time: '09:00',
        title: 'Energy yield modelling',
        whatYouDo: 'You model expected annual output for a proposed farm using weather data and equipment specifications.',
        withWhom: ['Senior energy engineer'],
        tools: ['PV simulation software', 'Weather data', 'Excel'],
        hardOrSurprising: 'Small changes in assumptions about soiling or degradation change the result noticeably.',
      },
      {
        time: '11:00',
        title: 'Module and inverter review',
        whatYouDo: 'You compare datasheets and warranty terms for candidate modules and inverters.',
        withWhom: ['Procurement specialist'],
        tools: ['Datasheets', 'Comparison spreadsheet'],
        hardOrSurprising: 'Datasheets are partly marketing. Independent test data matters.',
      },
      {
        time: '12:30',
        title: 'Lunch',
        whatYouDo: 'Lunch with the team.',
        withWhom: ['Engineering team'],
        tools: ['None'],
        hardOrSurprising: 'Colleagues come from many backgrounds, including electrical, civil and finance.',
      },
      {
        time: '13:30',
        title: 'Grid connection call',
        whatYouDo: 'You join a call with the network business about technical requirements for connecting the farm.',
        withWhom: ['Grid connection engineer', 'Network business engineers'],
        tools: ['Video call', 'Connection requirements'],
        hardOrSurprising: 'Grid connection is often the slowest and most uncertain part of a project.',
      },
      {
        time: '15:00',
        title: 'Operating farm analysis',
        whatYouDo: 'You review monitoring data and drone imagery from an operating farm to find underperforming strings.',
        withWhom: ['Asset performance engineer'],
        tools: ['Monitoring platform', 'Thermal drone images'],
        hardOrSurprising: 'A few faulty connectors can cost thousands of dollars a year in lost output.',
      },
      {
        time: '16:30',
        title: 'Notes and next steps',
        whatYouDo: 'You summarise findings and assumptions so the senior engineer can review them.',
        withWhom: ['Working alone'],
        tools: ['Report template'],
        hardOrSurprising: 'Writing down assumptions makes the work reusable and checkable.',
      },
    ],
    decisions: [
      {
        id: 'pv-yield-number',
        time: '09:00',
        scenario:
          'Your yield model gives an output 4% higher than the independent consultant\'s estimate. The commercial team wants to use your higher number in the investor pack.',
        options: [
          { label: 'Hand over the higher number', outcome: 'The project looks better on paper. If it underperforms, investors lose trust in the company.' },
          { label: 'Investigate the difference before anyone uses it', outcome: 'You find your soiling loss assumption was optimistic. The team uses a reconciled figure with a clear range.' },
          { label: 'Use the consultant\'s number and ignore yours', outcome: 'It is safe, but you lose the chance to learn why the models differ, which matters for future projects.' },
        ],
        colleagueView:
          'An experienced engineer would reconcile the two estimates before anyone relies on either. Investors expect a defensible number and an honest range. Explaining clearly why models differ builds credibility, while an optimistic number that fails later damages it.',
      },
    ],
  },
  campusDay: {
    setting: 'A Monday in week 5 of term, third year',
    intro: 'Campus days combine physics-heavy lectures with hands-on solar labs.',
    blocks: [
      {
        time: '09:00',
        title: 'Lecture: photovoltaic devices',
        whatYouDo: 'A lecture on where energy is lost in a solar cell and how designs reduce those losses.',
        withWhom: ['About 80 students', 'Lecturer'],
        tools: ['Lecture slides', 'Notebook'],
        hardOrSurprising: 'Lecturers are often active researchers in the field.',
      },
      {
        time: '11:00',
        title: 'Solar cell lab',
        whatYouDo: 'You measure current-voltage curves of solar cells under different light levels and temperatures.',
        withWhom: ['Lab partner', 'Lab demonstrator'],
        tools: ['Solar simulator', 'Source meter'],
        hardOrSurprising: 'Temperature affects output more than most people expect.',
      },
      {
        time: '13:00',
        title: 'Lunch',
        whatYouDo: 'Lunch with your co-op cohort.',
        withWhom: ['Co-op cohort'],
        tools: ['None'],
        hardOrSurprising: 'Many friends in other degrees are curious about renewable energy careers.',
      },
      {
        time: '14:00',
        title: 'Design project meeting',
        whatYouDo: 'Your team designs a rooftop solar and battery system for a school and models its savings.',
        withWhom: ['Three classmates'],
        tools: ['PV simulation software', 'Excel'],
        hardOrSurprising: 'Financial assumptions matter as much as technical ones.',
      },
      {
        time: '16:00',
        title: 'Self-study',
        whatYouDo: 'Semiconductor problem sets and writing up the lab.',
        withWhom: ['Working alone'],
        tools: ['Problem set', 'Laptop'],
        hardOrSurprising: 'Semiconductor physics takes repeated practice to feel natural.',
      },
      {
        time: '18:00',
        title: 'Student solar car team',
        whatYouDo: 'You help test the battery system for a student-built solar car.',
        withWhom: ['Students from several degrees'],
        tools: ['Battery test equipment', 'Workshop'],
        hardOrSurprising: 'Student teams give real experience of designing under tight limits.',
      },
    ],
  },
  coop: {
    placementLength: 'Placements are typically several months each, adding up to roughly a year or more in industry',
    numberOfPlacements: 'Usually two to three placements, often across developers, networks and manufacturers',
    employerTypes: ['Renewable energy developers', 'Electricity networks', 'Solar installers', 'Energy consultancies', 'Research organisations'],
    exampleRoles: ['Solar engineering intern', 'Grid connection intern', 'Asset performance intern', 'Energy analyst intern'],
  },
  employers: [
    { type: 'Utility-scale solar developer', whatYouMightDo: 'Model energy yield and support project design.' },
    { type: 'Electricity network business', whatYouMightDo: 'Assess the impact of new renewable connections.' },
    { type: 'Rooftop solar installer', whatYouMightDo: 'Design residential and commercial systems.' },
    { type: 'Battery storage company', whatYouMightDo: 'Analyse battery performance and sizing.' },
    { type: 'Energy consultancy', whatYouMightDo: 'Contribute to technical reviews for investors.' },
    { type: 'Solar manufacturer', whatYouMightDo: 'Support testing and quality control of modules.' },
    { type: 'Energy retailer', whatYouMightDo: 'Analyse customer solar and battery data.' },
    { type: 'Research institute', whatYouMightDo: 'Assist with solar cell experiments and data analysis.' },
  ],
  tradeOffs: [
    {
      title: 'A specialised degree',
      detail: 'The focus on renewable energy is a strength, but some general engineering employers may know it less well than mechanical or electrical engineering.',
    },
    {
      title: 'Industry depends on policy and markets',
      detail: 'Renewable energy is growing, but projects can be delayed by grid connection queues, policy changes and market prices.',
    },
    {
      title: 'Manufacturing is mostly overseas',
      detail: 'Most solar module manufacturing happens outside Australia, so local device and manufacturing roles are limited.',
    },
  ],
  imageAlt: {
    hero: "Rows of solar panels in a field under a blue sky",
    campus: "A group touring a solar array on a sunny day",
  },
  heroImage: {
    src: heroPhoto,
    width: 1000,
    height: 667,
    credit: {
      creator: "solartradeassociation",
      title: "Haslingfield Solar Farm panels sky (C) BELECTRIC UK",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      sourceUrl: "https://www.flickr.com/photos/126337375@N05/15986041648",
    },
  },
  campusImage: {
    src: campusPhoto,
    width: 1000,
    height: 750,
    credit: {
      creator: "Black Rock Solar",
      title: "Black Rock Solar educational field trip at Pyramid Lake Museum and Visitor Center",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/39145569@N07/8553361852",
    },
  },
  toVerify: [
    'Official program name, and whether it is offered as a co-op program',
    'Duration, honours structure and Engineers Australia accreditation',
    'Elective area names, and which courses belong to each',
    'Course names for each year',
    'Number, length and timing of industry placements',
  ],
};

export default degree;
