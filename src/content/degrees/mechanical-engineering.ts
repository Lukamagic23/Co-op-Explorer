import type { Degree } from '../schema';
import heroPhoto from '../../assets/photos/degrees/mechanical-engineering-hero.jpg';
import campusPhoto from '../../assets/photos/degrees/mechanical-engineering-campus.jpg';

/*
 * VERIFY BEFORE LAUNCH: program structure, course names, majors,
 * accreditation and placement rules below are written to be plausible and
 * generic. Check every item in `toVerify` against the official UNSW Handbook
 * and the Co-op Program team.
 */
const degree: Degree = {
  slug: 'mechanical-engineering',
  name: 'Mechanical Engineering',
  faculty: 'UNSW Engineering',
  duration: '4 years full time (honours), including industry placements',
  summary: 'Design, analyse and build machines and energy systems, from pumps and engines to medical devices and manufacturing lines.',
  suits: [
    'You like understanding how physical things work and taking them apart',
    'You enjoy physics and maths and want to apply them to designs you can hold',
    'You want a broad engineering degree that keeps many industries open',
  ],
  mightNotSuit: [
    'You want to work mainly with software or data; other degrees go deeper there',
    'You dislike drawing standards, tolerances and detailed checking',
  ],
  interests: ['building', 'numbers', 'science'],
  overview:
    'Mechanical Engineering is one of the broadest engineering disciplines. You study mechanics, materials, thermodynamics, fluids, heat transfer, dynamics and control, and learn to design with CAD and verify designs with analysis and testing. Workshop and lab work runs through the degree, and final year includes a major design project and thesis. Graduates work in manufacturing, energy, mining, defence, building services, transport, medical devices and consulting.',
  studyFocus: 'Mechanics, thermodynamics and design, applied to machines and energy systems',
  workload: {
    level: 'Very high',
    note: 'Technical courses with problem sets, labs and design assignments, and a large design project and thesis in final year.',
  },
  maths: { level: 'Heavy', note: 'Calculus, linear algebra and differential equations for mechanics, heat and vibration.' },
  majorsHeading: 'Specialisations',
  majors: [
    { id: 'design', name: 'Mechanical design', description: 'Designing parts and machines that work, last and can be made.' },
    { id: 'thermofluids', name: 'Thermofluids and energy', description: 'Engines, heat exchangers, HVAC and renewable energy systems.' },
    { id: 'manufacturing', name: 'Manufacturing and materials', description: 'How things are made and which materials to use.' },
    { id: 'dynamics', name: 'Dynamics and control', description: 'Vibration, motion and controlling machines.' },
  ],
  years: [
    {
      year: 1,
      courses: [
        { name: 'Mathematics 1A', description: 'Calculus and linear algebra.', majors: [] },
        { name: 'Mathematics 1B', description: 'Further calculus and differential equations.', majors: [] },
        { name: 'Physics 1A', description: 'Mechanics and energy.', majors: [] },
        { name: 'Engineering Mechanics', description: 'Forces, moments and motion of rigid bodies.', majors: ['dynamics'] },
        { name: 'Engineering Design and Innovation', description: 'A team project designing and prototyping a device.', majors: ['design'] },
      ],
    },
    {
      year: 2,
      courses: [
        { name: 'Mechanics of Solids', description: 'Stress, strain and how parts deform under load.', majors: ['design'] },
        { name: 'Engineering Design and Drawing', description: 'CAD modelling, drawing standards and tolerances.', majors: ['design', 'manufacturing'] },
        { name: 'Thermodynamics', description: 'Energy, efficiency and how engines and refrigerators work.', majors: ['thermofluids'] },
        { name: 'Fluid Mechanics', description: 'Flow in pipes, around objects and through pumps.', majors: ['thermofluids'] },
        { name: 'Engineering Computations', description: 'Programming and numerical methods for engineering problems.', majors: [] },
      ],
    },
    {
      year: 3,
      courses: [
        { name: 'Mechanical Design', description: 'Designing shafts, gears, bearings and joints to standards.', majors: ['design'] },
        { name: 'Heat Transfer', description: 'How heat moves by conduction, convection and radiation.', majors: ['thermofluids'] },
        { name: 'Dynamics of Machines', description: 'Motion and forces in mechanisms.', majors: ['dynamics'] },
        { name: 'Manufacturing Engineering', description: 'Machining, casting, additive manufacturing and production planning.', majors: ['manufacturing'] },
        { name: 'Engineering Materials', description: 'Choosing materials and understanding why parts fail.', majors: ['manufacturing'] },
      ],
    },
    {
      year: 4,
      courses: [
        { name: 'Mechanical Design Project', description: 'A team designs and analyses a complete machine.', majors: ['design'] },
        { name: 'Vibration and Control', description: 'Predicting and controlling vibration in machines.', majors: ['dynamics'] },
        { name: 'Energy Systems', description: 'Designing and assessing power and renewable energy systems.', majors: ['thermofluids'] },
        { name: 'Thesis Project', description: 'A year-long research or design project.', majors: [] },
      ],
    },
  ],
  skills: [
    { name: 'CAD modelling', inPractice: 'Redesigning a bracket so it fits around a new motor without changing the mounting holes.' },
    { name: 'Stress analysis', inPractice: 'Running a finite element model to check a part will survive its worst load case.' },
    { name: 'Design for manufacture', inPractice: 'Changing a design so the workshop can make it with one setup instead of three.' },
    { name: 'Testing and measurement', inPractice: 'Setting up a test to check whether a pump meets its rated flow.' },
    { name: 'Working with tradespeople', inPractice: 'Listening to a fitter explain why a part will not assemble as drawn.' },
  ],
  placementDay: {
    setting: 'Month two of a six-month placement in the design team of an industrial pump manufacturer',
    intro: 'You support design engineers updating a pump for a new customer. Your time is split between CAD, analysis and the workshop floor.',
    blocks: [
      {
        time: '08:00',
        title: 'Stand-up',
        whatYouDo: 'The engineering team runs through active projects and blockers.',
        withWhom: ['Design engineers', 'Engineering manager'],
        tools: ['Project board'],
        hardOrSurprising: 'Projects are driven by customer delivery dates.',
      },
      {
        time: '08:30',
        title: 'CAD redesign',
        whatYouDo: 'You redesign a mounting bracket to fit a larger motor while keeping the existing base.',
        withWhom: ['Design engineer'],
        tools: ['CAD software', 'Design standards'],
        hardOrSurprising: 'Every change can affect other parts. Checking the full assembly is essential.',
      },
      {
        time: '10:30',
        title: 'Stress check',
        whatYouDo: 'You set up a finite element model of the bracket and check stresses under operating and shock loads.',
        withWhom: ['Senior analysis engineer'],
        tools: ['FEA software'],
        hardOrSurprising: 'The software always gives an answer. Knowing whether to trust it is the skill.',
      },
      {
        time: '12:00',
        title: 'Lunch',
        whatYouDo: 'Lunch with the engineering team and workshop staff.',
        withWhom: ['Engineers', 'Fitters'],
        tools: ['None'],
        hardOrSurprising: 'Workshop staff often know which designs cause trouble later.',
      },
      {
        time: '13:00',
        title: 'Workshop floor',
        whatYouDo: 'A fitter shows you why a previous part could not be assembled. You note what to change.',
        withWhom: ['Fitter', 'Workshop supervisor'],
        tools: ['Drawings', 'Calipers', 'PPE'],
        hardOrSurprising: 'A design that looks perfect in CAD can be impossible to assemble with real tools.',
      },
      {
        time: '14:30',
        title: 'Design review',
        whatYouDo: 'You present the bracket design and analysis to the senior engineer for review.',
        withWhom: ['Senior engineer', 'Design engineer'],
        tools: ['CAD model', 'Analysis results'],
        hardOrSurprising: 'Reviews are detailed and direct. Questions are not criticism.',
      },
      {
        time: '16:00',
        title: 'Drawings and change note',
        whatYouDo: 'You update drawings and write an engineering change note explaining the modification.',
        withWhom: ['Working alone'],
        tools: ['CAD software', 'Document control system'],
        hardOrSurprising: 'Documentation is how manufacturing knows what to build. Sloppy notes cause real errors.',
      },
    ],
    decisions: [
      {
        id: 'mech-safety-factor',
        time: '14:30',
        scenario:
          'Your analysis shows the bracket meets the safety factor in normal operation, but falls slightly short under a rare shock load listed in the customer specification. The delivery date is close.',
        options: [
          { label: 'Present it as passing, since the shock load is rare', outcome: 'The design is approved. If the customer audits the calculation, the gap is found and trust is lost.' },
          { label: 'Present the shortfall and suggest a design change', outcome: 'The senior engineer agrees to a small increase in thickness. The change takes a day and meets the specification.' },
          { label: 'Change the mesh until it passes', outcome: 'The result looks better, but the change has no physical basis and could hide a real weakness.' },
        ],
        colleagueView:
          'An experienced engineer would show the result honestly, explain the load case and propose options. Small design changes early are cheap. Hiding a shortfall to meet a deadline is how failures and recalls happen.',
      },
    ],
  },
  campusDay: {
    setting: 'A Wednesday in week 6 of term, second year',
    intro: 'Campus days mix theory with labs and practical design work.',
    blocks: [
      {
        time: '09:00',
        title: 'Lecture: thermodynamics',
        whatYouDo: 'A lecture on refrigeration cycles and how to analyse their efficiency.',
        withWhom: ['About 300 students', 'Lecturer'],
        tools: ['Lecture slides', 'Notebook'],
        hardOrSurprising: 'Large classes mean you need to be proactive about asking questions.',
      },
      {
        time: '11:00',
        title: 'Materials testing lab',
        whatYouDo: 'You run tensile tests on metal samples and compare the results with theory.',
        withWhom: ['Lab group', 'Lab demonstrator'],
        tools: ['Tensile testing machine', 'Lab sheets'],
        hardOrSurprising: 'Real data is noisy. Explaining the differences is the point of the report.',
      },
      {
        time: '13:00',
        title: 'Lunch',
        whatYouDo: 'Lunch with your co-op cohort.',
        withWhom: ['Co-op cohort'],
        tools: ['None'],
        hardOrSurprising: 'Hearing about other placements helps you decide what to try next.',
      },
      {
        time: '14:00',
        title: 'Design project in the workshop',
        whatYouDo: 'Your team builds and tests a small mechanism for a design competition.',
        withWhom: ['Four classmates', 'Workshop technician'],
        tools: ['Hand tools', '3D printer', 'CAD software'],
        hardOrSurprising: 'Building takes longer than designing. Plan for things going wrong.',
      },
      {
        time: '16:30',
        title: 'Self-study',
        whatYouDo: 'Problem sets on fluid mechanics and writing up the lab.',
        withWhom: ['Working alone'],
        tools: ['Calculator', 'Laptop'],
        hardOrSurprising: 'Problem sets build the speed you need in exams.',
      },
      {
        time: '18:30',
        title: 'Student motorsport team',
        whatYouDo: 'You help design suspension parts for a student-built race car.',
        withWhom: ['Students from several degrees'],
        tools: ['CAD software', 'Workshop'],
        hardOrSurprising: 'Student teams demand a lot of time, but employers value the experience highly.',
      },
    ],
  },
  coop: {
    placementLength: 'Placements are typically several months each, adding up to roughly a year or more in industry',
    numberOfPlacements: 'Usually two to three placements, often across manufacturing, energy and consulting',
    employerTypes: ['Manufacturers', 'Mining and resources', 'Defence and aerospace', 'Building services consultancies', 'Energy companies'],
    exampleRoles: ['Mechanical design intern', 'Maintenance engineering intern', 'Building services intern', 'Manufacturing engineering intern'],
  },
  employers: [
    { type: 'Equipment manufacturer', whatYouMightDo: 'Update designs and drawings for a product.' },
    { type: 'Mining company', whatYouMightDo: 'Support maintenance and reliability of heavy equipment.' },
    { type: 'Defence contractor', whatYouMightDo: 'Help with design or testing of mechanical systems.' },
    { type: 'Building services consultancy', whatYouMightDo: 'Design heating, ventilation and cooling for buildings.' },
    { type: 'Energy company', whatYouMightDo: 'Support maintenance or upgrade projects at a power station.' },
    { type: 'Medical device company', whatYouMightDo: 'Test prototypes and document design changes.' },
    { type: 'Transport operator', whatYouMightDo: 'Support fleet maintenance and reliability analysis.' },
    { type: 'Aerospace maintenance company', whatYouMightDo: 'Assist with engineering for aircraft repairs.' },
  ],
  tradeOffs: [
    {
      title: 'Broad but not always deep',
      detail: 'The degree covers many areas. Some graduates find they need further study or on-the-job learning to specialise.',
    },
    {
      title: 'Australian manufacturing is smaller than in some countries',
      detail: 'Some design and manufacturing roles are limited locally, and competition for them can be strong.',
    },
    {
      title: 'Demanding final year',
      detail: 'A thesis, design project and technical courses together make the last year very busy, especially alongside placements.',
    },
  ],
  imageAlt: {
    hero: "An engineer working at a computer in a workshop",
    campus: "A student-built race car on display with its team standing behind it",
  },
  heroImage: {
    src: heroPhoto,
    width: 1000,
    height: 670,
    credit: {
      creator: "nicolas.boullosa",
      title: "software and cnc machines are available for a fraction of the cost years ago",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/90802476@N00/9824461293",
    },
  },
  campusImage: {
    src: campusPhoto,
    width: 1000,
    height: 750,
    credit: {
      creator: "AlisonChaiken",
      title: "FormulaSAEcar2015",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      sourceUrl: "https://www.flickr.com/photos/99725460@N00/17392032392",
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
