import type { Degree } from '../schema';
import heroPhoto from '../../assets/photos/degrees/environmental-engineering-hero.jpg';
import campusPhoto from '../../assets/photos/degrees/environmental-engineering-campus.jpg';

/*
 * VERIFY BEFORE LAUNCH: program structure, course names, majors,
 * accreditation and placement rules below are written to be plausible and
 * generic. Check every item in `toVerify` against the official UNSW Handbook
 * and the Co-op Program team.
 */
const degree: Degree = {
  slug: 'environmental-engineering',
  name: 'Environmental Engineering',
  faculty: 'UNSW Engineering',
  duration: '4 years full time (honours), including industry placements',
  summary: 'Protect water, soil and air by designing treatment systems, cleaning up contaminated land and assessing the impact of projects.',
  suits: [
    'You care about the environment and want technical skills to do something about it',
    'You like a mix of fieldwork, lab results and design',
    'You are comfortable with chemistry, biology and maths together',
  ],
  mightNotSuit: [
    'You want to work on environmental policy or advocacy rather than technical design',
    'You would dislike muddy fieldwork, early starts and long drives to sites',
  ],
  interests: ['sustainability', 'science', 'building'],
  overview:
    'Environmental Engineering applies engineering to the natural environment. It shares a foundation with civil engineering, then adds chemistry, ecology and hydrology. You learn to design water and wastewater treatment, assess and clean up contaminated sites, manage waste and catchments, and evaluate the environmental impact of new projects. Graduates work in environmental consultancies, water utilities, government regulators, construction and mining companies.',
  studyFocus: 'Treating water and waste, cleaning up contamination and assessing environmental impact',
  workload: {
    level: 'High',
    note: 'Problem sets, lab reports and field trips, plus a substantial final-year design project.',
  },
  maths: { level: 'Heavy', note: 'Calculus and differential equations for flow and transport, plus statistics for environmental data.' },
  majorsHeading: 'Specialisations',
  majors: [
    { id: 'water', name: 'Water and wastewater', description: 'Designing systems that make water safe to drink and to return to rivers.' },
    { id: 'contamination', name: 'Contaminated land and waste', description: 'Investigating pollution and designing ways to clean it up or contain it.' },
    { id: 'assessment', name: 'Environmental assessment', description: 'Predicting and reducing the impact of new projects.' },
    { id: 'resources', name: 'Water resources and climate', description: 'Floods, droughts, catchments and coasts in a changing climate.' },
  ],
  years: [
    {
      year: 1,
      courses: [
        { name: 'Mathematics 1A', description: 'Calculus and linear algebra.', majors: [] },
        { name: 'Mathematics 1B', description: 'Further calculus and differential equations.', majors: [] },
        { name: 'Chemistry for Engineers', description: 'Reactions and equilibrium relevant to water and soil chemistry.', majors: [] },
        { name: 'Physics 1A', description: 'Mechanics and energy.', majors: [] },
        { name: 'Engineering Design and Innovation', description: 'A team project on an environmental design problem.', majors: [] },
      ],
    },
    {
      year: 2,
      courses: [
        { name: 'Fluid Mechanics', description: 'How water flows in pipes, channels and through soil.', majors: ['water', 'resources'] },
        { name: 'Environmental Chemistry', description: 'How pollutants behave and change in water, soil and air.', majors: ['contamination'] },
        { name: 'Ecology for Engineers', description: 'How ecosystems work and how engineering affects them.', majors: ['assessment'] },
        { name: 'Soil Mechanics', description: 'How soil behaves, including how water and contaminants move through it.', majors: ['contamination'] },
        { name: 'Engineering Computations', description: 'Programming and numerical methods for engineering data.', majors: [] },
      ],
    },
    {
      year: 3,
      courses: [
        { name: 'Water and Wastewater Treatment', description: 'Designing treatment processes from screening to disinfection.', majors: ['water'] },
        { name: 'Hydrology and Water Resources', description: 'Estimating rainfall, runoff, floods and water supply.', majors: ['resources'] },
        { name: 'Contaminated Site Assessment and Remediation', description: 'Investigating and cleaning up polluted land and groundwater.', majors: ['contamination'] },
        { name: 'Environmental Impact Assessment', description: 'How major projects are assessed and approved.', majors: ['assessment'] },
      ],
    },
    {
      year: 4,
      courses: [
        { name: 'Waste Management and Circular Economy', description: 'Reducing, reusing and safely managing solid waste.', majors: ['contamination'] },
        { name: 'Catchment and Coastal Management', description: 'Managing rivers, estuaries and coastlines.', majors: ['resources', 'assessment'] },
        { name: 'Environmental Engineering Design Project', description: 'A team designs a treatment or remediation system for a real site.', majors: [] },
        { name: 'Thesis Project', description: 'A year-long research or design project.', majors: [] },
      ],
    },
  ],
  skills: [
    { name: 'Field sampling', inPractice: 'Collecting groundwater samples without contaminating them, and keeping a chain of custody.' },
    { name: 'Interpreting lab data', inPractice: 'Comparing results with guideline values and spotting a result that looks like a sampling error.' },
    { name: 'Treatment design', inPractice: 'Sizing a settling tank so it handles peak flows after heavy rain.' },
    { name: 'Report writing', inPractice: 'Writing a site assessment section that a regulator can review.' },
    { name: 'Regulatory knowledge', inPractice: 'Knowing which guidelines apply to a site and why.' },
  ],
  placementDay: {
    setting: 'Month four of a six-month placement with an environmental consultancy',
    intro: 'You split your time between field sampling on a former industrial site and writing up results in the office.',
    blocks: [
      {
        time: '06:30',
        title: 'Drive to site and safety briefing',
        whatYouDo: 'You drive to the site with a senior scientist and complete the site induction and safety plan.',
        withWhom: ['Senior environmental scientist', 'Site manager'],
        tools: ['Safety plan', 'PPE'],
        hardOrSurprising: 'Many days begin with a long drive. Fieldwork is tiring.',
      },
      {
        time: '07:30',
        title: 'Groundwater sampling',
        whatYouDo: 'You measure water levels and collect samples from monitoring wells following a strict procedure.',
        withWhom: ['Senior environmental scientist'],
        tools: ['Water level meter', 'Pump', 'Field meter', 'Sample bottles'],
        hardOrSurprising: 'Cross-contamination between wells can ruin results. Cleaning equipment properly takes time.',
      },
      {
        time: '10:30',
        title: 'Field notes and dispatch',
        whatYouDo: 'You complete field sheets and chain of custody forms, and pack samples on ice for the lab courier.',
        withWhom: ['Working alone'],
        tools: ['Field sheets', 'Chain of custody form', 'Esky'],
        hardOrSurprising: 'If paperwork is wrong, results may not be accepted by the regulator.',
      },
      {
        time: '12:00',
        title: 'Lunch',
        whatYouDo: 'Lunch in the car on the drive back to the office.',
        withWhom: ['Senior environmental scientist'],
        tools: ['None'],
        hardOrSurprising: 'Long drives are a good chance to ask questions about the industry.',
      },
      {
        time: '13:30',
        title: 'Results into the database',
        whatYouDo: 'You enter last month\'s lab results into the project database and compare them with guideline values.',
        withWhom: ['Data manager'],
        tools: ['Environmental database', 'Excel'],
        hardOrSurprising: 'One unexpected result can change the direction of a whole project.',
      },
      {
        time: '15:00',
        title: 'Drafting a report section',
        whatYouDo: 'You draft the results discussion for a site assessment report.',
        withWhom: ['Project manager'],
        tools: ['Report template', 'GIS maps'],
        hardOrSurprising: 'Reports must be careful and precise, because they may be used in legal decisions.',
      },
      {
        time: '16:30',
        title: 'Check-in with the project manager',
        whatYouDo: 'You go through the results and your draft with the project manager.',
        withWhom: ['Project manager'],
        tools: ['Draft report'],
        hardOrSurprising: 'Expect heavy feedback on your writing. It improves quickly.',
      },
    ],
    decisions: [
      {
        id: 'env-exceedance',
        time: '13:30',
        scenario:
          'One well shows a contaminant above the guideline for the first time. It could be a real change or a sampling error. The client is hoping for a clean report so they can sell the site.',
        options: [
          { label: 'Leave it out as a likely error', outcome: 'The report looks clean, but if the contamination is real, the company and the client face serious legal risk.' },
          { label: 'Check quality control data, report it with context and recommend resampling', outcome: 'The project manager agrees. The client is unhappy at first but accepts a resample to confirm.' },
          { label: 'Report it as definite contamination', outcome: 'The client is alarmed, and if it was a sampling error, the report overstated the problem.' },
        ],
        colleagueView:
          'An experienced consultant would check duplicates, blanks and field notes first, then report the result honestly with that context and recommend confirmation sampling. Results are never omitted because they are inconvenient. Clear, balanced reporting protects everyone, including the client.',
      },
    ],
  },
  campusDay: {
    setting: 'A Tuesday in week 8 of term, third year',
    intro: 'Campus days combine theory, labs and the occasional field trip.',
    blocks: [
      {
        time: '09:00',
        title: 'Lecture: wastewater treatment',
        whatYouDo: 'A lecture on how biological treatment removes nutrients from wastewater.',
        withWhom: ['About 100 students', 'Lecturer'],
        tools: ['Lecture slides', 'Notebook'],
        hardOrSurprising: 'The chemistry and biology are more involved than many students expect.',
      },
      {
        time: '11:00',
        title: 'Water quality lab',
        whatYouDo: 'You test river water samples for nutrients and bacteria.',
        withWhom: ['Lab group', 'Lab technician'],
        tools: ['Spectrophotometer', 'Lab sheets'],
        hardOrSurprising: 'Careful technique matters. Contaminated glassware gives misleading results.',
      },
      {
        time: '13:00',
        title: 'Lunch',
        whatYouDo: 'Lunch with your co-op cohort.',
        withWhom: ['Co-op cohort'],
        tools: ['None'],
        hardOrSurprising: 'The cohort includes students from very different disciplines.',
      },
      {
        time: '14:00',
        title: 'Design project meeting',
        whatYouDo: 'Your team plans a stormwater treatment wetland for a new housing development.',
        withWhom: ['Four classmates'],
        tools: ['GIS software', 'Shared document'],
        hardOrSurprising: 'Balancing cost, space and performance forces real trade-offs.',
      },
      {
        time: '16:00',
        title: 'Self-study',
        whatYouDo: 'Hydrology problem sets and writing up the lab.',
        withWhom: ['Working alone'],
        tools: ['Laptop', 'Problem set'],
        hardOrSurprising: 'Statistics shows up more than expected in environmental data.',
      },
      {
        time: '18:00',
        title: 'Volunteer society meeting',
        whatYouDo: 'A student engineering volunteer group plans a water project for a community partner.',
        withWhom: ['Students from several degrees'],
        tools: ['None'],
        hardOrSurprising: 'Community projects teach you to listen to users before designing.',
      },
    ],
  },
  coop: {
    placementLength: 'Placements are typically several months each, adding up to roughly a year or more in industry',
    numberOfPlacements: 'Usually two to three placements, often mixing consultancy, utility and government work',
    employerTypes: ['Environmental consultancies', 'Water utilities', 'Environmental regulators', 'Construction and mining companies'],
    exampleRoles: ['Environmental engineering intern', 'Water engineering intern', 'Graduate environmental scientist', 'Sustainability intern'],
  },
  employers: [
    { type: 'Environmental consultancy', whatYouMightDo: 'Sample sites and draft parts of assessment reports.' },
    { type: 'Water utility', whatYouMightDo: 'Analyse treatment plant performance and support upgrades.' },
    { type: 'Environmental regulator', whatYouMightDo: 'Review licence data and incident reports.' },
    { type: 'Construction contractor', whatYouMightDo: 'Manage erosion, sediment and waste on a project.' },
    { type: 'Mining company', whatYouMightDo: 'Monitor water and help plan rehabilitation.' },
    { type: 'Local council', whatYouMightDo: 'Support stormwater and catchment programs.' },
    { type: 'Waste management company', whatYouMightDo: 'Improve recycling or landfill operations.' },
    { type: 'Infrastructure agency', whatYouMightDo: 'Support environmental approvals for a major project.' },
  ],
  tradeOffs: [
    {
      title: 'Much of the work is compliance, not invention',
      detail: 'A lot of environmental engineering is monitoring, reporting and meeting regulations. It matters, but it can feel routine.',
    },
    {
      title: 'Fieldwork can be physically demanding',
      detail: 'Sampling involves heat, rain, mud, early starts and long drives. Some students love this; others find it draining.',
    },
    {
      title: 'Sometimes working for the projects you might oppose',
      detail: 'Consultants often work for developers and mining companies. You may help approve projects you have mixed feelings about.',
    },
  ],
  imageAlt: {
    hero: "A person collecting a water sample from a river near a bridge",
    campus: "A person testing a water sample with a handheld meter",
  },
  heroImage: {
    src: heroPhoto,
    width: 1000,
    height: 750,
    credit: {
      creator: "USFWS/Southeast",
      title: "Student checking rock for insects",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/41464593@N02/13936190980",
    },
  },
  campusImage: {
    src: campusPhoto,
    width: 1000,
    height: 667,
    credit: {
      creator: "ShenandoahNPS",
      title: "Water Quality Testing Activity",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
      sourceUrl: "https://www.flickr.com/photos/67015038@N06/36451945741",
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
