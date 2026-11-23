import type { Degree } from '../schema';
import heroPhoto from '../../assets/photos/degrees/materials-science-and-engineering-hero.jpg';
import campusPhoto from '../../assets/photos/degrees/materials-science-and-engineering-campus.jpg';

/*
 * VERIFY BEFORE LAUNCH: program structure, faculty, course names, majors,
 * accreditation and placement rules below are written to be plausible and
 * generic. Check every item in `toVerify` against the official UNSW Handbook
 * and the Co-op Program team.
 */
const degree: Degree = {
  slug: 'materials-science-and-engineering',
  name: 'Materials Science and Engineering',
  faculty: 'UNSW Science',
  duration: '4 years full time (honours), including industry placements',
  summary: 'Understand and design the materials everything is made from, such as steel, ceramics, polymers and battery materials, and why they fail.',
  suits: [
    'You enjoy chemistry and physics and want to know why materials behave as they do',
    'You like lab work, microscopes and testing',
    'You are interested in sustainability, recycling and new energy materials',
  ],
  mightNotSuit: [
    'You want to design whole machines or structures rather than the materials in them',
    'You find lab work and careful sample preparation tedious',
  ],
  interests: ['science', 'building', 'sustainability'],
  overview:
    'Materials Science and Engineering connects the structure of materials, down to atoms and crystals, with how they perform in use. You study metals, ceramics, polymers and composites, learn how processing changes their properties, and use microscopes and testing machines to investigate them. Later you study corrosion, failure analysis and materials for energy and electronics. Graduates work in steel and metals manufacturing, mining and minerals processing, defence, aerospace, battery and energy companies, testing laboratories and research.',
  studyFocus: 'How the structure of materials controls their properties, and how to process, test and select them',
  workload: {
    level: 'High',
    note: 'Regular lab work and reports, problem sets and a final-year design project and thesis.',
  },
  maths: { level: 'Moderate', note: 'Calculus and some differential equations, applied to diffusion, stress and thermodynamics.' },
  majorsHeading: 'Specialisations',
  majors: [
    { id: 'metals', name: 'Metals and alloys', description: 'Steel, aluminium and titanium: processing, properties and failure.' },
    { id: 'ceramics', name: 'Ceramics and glass', description: 'Hard, heat-resistant materials used in industry and electronics.' },
    { id: 'polymers', name: 'Polymers and composites', description: 'Plastics and fibre composites, including recycling.' },
    { id: 'functional', name: 'Energy and electronic materials', description: 'Materials for batteries, solar cells and devices.' },
  ],
  years: [
    {
      year: 1,
      courses: [
        { name: 'Mathematics 1A', description: 'Calculus and linear algebra.', majors: [] },
        { name: 'Mathematics 1B', description: 'Further calculus and differential equations.', majors: [] },
        { name: 'Physics 1A', description: 'Mechanics and energy.', majors: [] },
        { name: 'Chemistry for Engineers', description: 'Bonding, reactions and the chemistry of solids.', majors: [] },
        { name: 'Introduction to Materials', description: 'The main classes of materials and how structure affects properties.', majors: [] },
      ],
    },
    {
      year: 2,
      courses: [
        { name: 'Thermodynamics of Materials', description: 'Phase diagrams and what structures are stable.', majors: ['metals', 'ceramics'] },
        { name: 'Crystallography and Microstructure', description: 'How atoms arrange themselves and how to observe it.', majors: [] },
        { name: 'Mechanical Behaviour of Materials', description: 'Strength, toughness and how materials deform.', majors: ['metals'] },
        { name: 'Polymer Science', description: 'How plastics are made and why they behave as they do.', majors: ['polymers'] },
        { name: 'Phase Transformations', description: 'How heat treatment changes microstructure and properties.', majors: ['metals'] },
      ],
    },
    {
      year: 3,
      courses: [
        { name: 'Ceramic Materials', description: 'Processing and properties of ceramics and glass.', majors: ['ceramics'] },
        { name: 'Corrosion and Degradation', description: 'Why materials degrade and how to prevent it.', majors: ['metals'] },
        { name: 'Composite Materials', description: 'Designing materials that combine fibres and matrices.', majors: ['polymers'] },
        { name: 'Materials Characterisation', description: 'Using electron microscopes and diffraction to study materials.', majors: [] },
        { name: 'Electronic and Energy Materials', description: 'Materials used in batteries, solar cells and electronics.', majors: ['functional'] },
      ],
    },
    {
      year: 4,
      courses: [
        { name: 'Materials Design Project', description: 'A team selects and designs materials for a real application.', majors: [] },
        { name: 'Failure Analysis', description: 'Investigating why parts break and preventing it happening again.', majors: ['metals'] },
        { name: 'Sustainable Materials and Recycling', description: 'Lowering the environmental cost of materials across their life.', majors: ['polymers', 'functional'] },
        { name: 'Thesis Project', description: 'A year-long research project.', majors: [] },
      ],
    },
  ],
  skills: [
    { name: 'Sample preparation', inPractice: 'Cutting and polishing a cross-section of a failed bolt so its microstructure can be seen.' },
    { name: 'Microscopy', inPractice: 'Using an electron microscope to identify fatigue marks on a fracture surface.' },
    { name: 'Mechanical testing', inPractice: 'Running tensile and hardness tests to check a batch meets specification.' },
    { name: 'Failure analysis', inPractice: 'Working out whether a part broke because of the material, the design or how it was used.' },
    { name: 'Technical reporting', inPractice: 'Writing a clear report that a customer can act on.' },
  ],
  placementDay: {
    setting: 'Month three of a six-month placement in the testing laboratory of a steel manufacturer',
    intro: 'You support metallurgists testing products and investigating customer complaints.',
    blocks: [
      {
        time: '07:30',
        title: 'Site safety and lab check',
        whatYouDo: 'You complete safety checks and confirm today\'s test schedule.',
        withWhom: ['Laboratory supervisor'],
        tools: ['PPE', 'Test schedule'],
        hardOrSurprising: 'Steelworks have strict safety rules, even inside the lab.',
      },
      {
        time: '08:00',
        title: 'Sample preparation',
        whatYouDo: 'You cut, mount and polish samples from a cracked component returned by a customer.',
        withWhom: ['Lab technician'],
        tools: ['Cutting saw', 'Polishing machine'],
        hardOrSurprising: 'Good preparation takes patience. A poor polish hides details.',
      },
      {
        time: '10:00',
        title: 'Microscopy',
        whatYouDo: 'You examine samples using optical and electron microscopes and record what you see.',
        withWhom: ['Metallurgist'],
        tools: ['Optical microscope', 'Scanning electron microscope'],
        hardOrSurprising: 'Interpreting images takes experience. Your supervisor explains what to look for.',
      },
      {
        time: '12:00',
        title: 'Lunch',
        whatYouDo: 'Lunch with the lab team.',
        withWhom: ['Lab team'],
        tools: ['None'],
        hardOrSurprising: 'Technicians often know the equipment better than anyone.',
      },
      {
        time: '13:00',
        title: 'Mechanical testing',
        whatYouDo: 'You run tensile and hardness tests on samples from a production batch.',
        withWhom: ['Lab technician'],
        tools: ['Tensile testing machine', 'Hardness tester'],
        hardOrSurprising: 'Results must be recorded carefully because they certify products for customers.',
      },
      {
        time: '14:30',
        title: 'Failure investigation meeting',
        whatYouDo: 'You present your findings on the cracked component to the metallurgist and sales manager.',
        withWhom: ['Metallurgist', 'Sales manager'],
        tools: ['Microscope images', 'Test results'],
        hardOrSurprising: 'Technical findings can have commercial consequences.',
      },
      {
        time: '16:00',
        title: 'Report writing',
        whatYouDo: 'You draft the failure investigation report.',
        withWhom: ['Working alone'],
        tools: ['Report template', 'Images'],
        hardOrSurprising: 'Reports must separate evidence from opinion clearly.',
      },
    ],
    decisions: [
      {
        id: 'materials-failure-report',
        time: '14:30',
        scenario:
          'Your evidence suggests the customer\'s heat treatment caused the cracking, not your company\'s steel. The sales manager asks you to make the report gentle so the customer is not upset.',
        options: [
          { label: 'Soften the conclusion until it is vague', outcome: 'The customer is not upset, but they cannot fix the real problem and parts keep failing.' },
          { label: 'Write a clear, factual report and let the sales team handle the conversation', outcome: 'The customer accepts the findings, changes their process and the relationship improves.' },
          { label: 'Blame the customer bluntly', outcome: 'The facts are right, but the tone damages the relationship unnecessarily.' },
        ],
        colleagueView:
          'An experienced metallurgist would write a clear, evidence-based report with a neutral tone. The conclusion should be stated plainly, with the evidence shown. Diplomacy belongs in how the conversation is handled, not in changing the findings.',
      },
    ],
  },
  campusDay: {
    setting: 'A Thursday in week 6 of term, second year',
    intro: 'Campus days combine chemistry, physics and practical lab work.',
    blocks: [
      {
        time: '09:00',
        title: 'Lecture: phase transformations',
        whatYouDo: 'A lecture on how cooling rate changes the structure and strength of steel.',
        withWhom: ['About 60 students', 'Lecturer'],
        tools: ['Lecture slides', 'Notebook'],
        hardOrSurprising: 'Small classes mean lecturers know you by name.',
      },
      {
        time: '11:00',
        title: 'Metallography lab',
        whatYouDo: 'You prepare and examine steel samples that were heat-treated differently.',
        withWhom: ['Lab partner', 'Lab demonstrator'],
        tools: ['Optical microscope', 'Polishing equipment'],
        hardOrSurprising: 'Seeing microstructures makes the theory click.',
      },
      {
        time: '13:00',
        title: 'Lunch',
        whatYouDo: 'Lunch with your co-op cohort.',
        withWhom: ['Co-op cohort'],
        tools: ['None'],
        hardOrSurprising: 'Few friends know what materials scientists do. You get good at explaining it.',
      },
      {
        time: '14:00',
        title: 'Design project meeting',
        whatYouDo: 'Your team chooses materials for a lightweight bicycle frame and compares cost and performance.',
        withWhom: ['Three classmates'],
        tools: ['Materials selection software', 'Shared document'],
        hardOrSurprising: 'There is rarely one best material. Trade-offs are the point.',
      },
      {
        time: '16:00',
        title: 'Self-study',
        whatYouDo: 'Problem sets and lab report writing.',
        withWhom: ['Working alone'],
        tools: ['Laptop', 'Textbook'],
        hardOrSurprising: 'Lab reports take longer than expected.',
      },
      {
        time: '18:00',
        title: 'Society event',
        whatYouDo: 'A materials society talk by an engineer from a battery company.',
        withWhom: ['Students', 'Industry speaker'],
        tools: ['None'],
        hardOrSurprising: 'New energy industries are creating many materials roles.',
      },
    ],
  },
  coop: {
    placementLength: 'Placements are typically several months each, adding up to roughly a year or more in industry',
    numberOfPlacements: 'Usually two to three placements, often across manufacturing, resources and research',
    employerTypes: ['Metals manufacturers', 'Mining and minerals processing', 'Defence and aerospace', 'Testing laboratories', 'Energy and battery companies'],
    exampleRoles: ['Metallurgy intern', 'Materials engineering intern', 'Quality engineering intern', 'Research intern'],
  },
  employers: [
    { type: 'Steel manufacturer', whatYouMightDo: 'Test products and support quality investigations.' },
    { type: 'Minerals processing company', whatYouMightDo: 'Analyse materials and corrosion in processing plants.' },
    { type: 'Defence contractor', whatYouMightDo: 'Help assess materials for vehicles or equipment.' },
    { type: 'Aerospace maintenance company', whatYouMightDo: 'Support inspection and failure analysis of components.' },
    { type: 'Battery materials company', whatYouMightDo: 'Test materials used in battery production.' },
    { type: 'Testing laboratory', whatYouMightDo: 'Run mechanical and chemical tests for clients.' },
    { type: 'Building products manufacturer', whatYouMightDo: 'Improve durability of products.' },
    { type: 'Research organisation', whatYouMightDo: 'Assist with experiments on new materials.' },
  ],
  tradeOffs: [
    {
      title: 'A less familiar discipline',
      detail: 'Many people do not know what materials engineers do, so you may need to explain your degree to employers and family.',
    },
    {
      title: 'Roles linked to heavy industry',
      detail: 'Many jobs are in metals, mining and manufacturing, sometimes in regional locations.',
    },
    {
      title: 'Smaller cohort and job market',
      detail: 'The field is smaller than mechanical or civil engineering. There are fewer roles, but also fewer graduates competing for them.',
    },
  ],
  imageAlt: {
    hero: "An electron microscope workstation",
    campus: "A researcher working with a microscope and tools at a lab bench",
  },
  heroImage: {
    src: heroPhoto,
    width: 1000,
    height: 664,
    credit: {
      creator: "Ryan Somma",
      title: "JEOL Scanning Electron Microscope",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      sourceUrl: "https://www.flickr.com/photos/14405058@N08/2617889835",
    },
  },
  campusImage: {
    src: campusPhoto,
    width: 1000,
    height: 783,
    credit: {
      creator: "AstroSamantha",
      title: "Soldering in the avionics shops",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/65541944@N07/14738090102",
    },
  },
  toVerify: [
    'Official program name, faculty, and whether it is offered as a co-op program',
    'Duration, honours structure and Engineers Australia accreditation',
    'Specialisation names, and which courses belong to each',
    'Course names for each year',
    'Number, length and timing of industry placements',
  ],
};

export default degree;
