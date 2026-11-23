import type { Degree } from '../schema';
import heroPhoto from '../../assets/photos/degrees/chemical-product-engineering-hero.jpg';
import campusPhoto from '../../assets/photos/degrees/chemical-product-engineering-campus.jpg';

/*
 * VERIFY BEFORE LAUNCH: program structure, course names, streams,
 * accreditation and placement rules below are written to be plausible and
 * generic. Check every item in `toVerify` against the official UNSW Handbook
 * and the Co-op Program team.
 */
const degree: Degree = {
  slug: 'chemical-product-engineering',
  name: 'Chemical Product Engineering',
  faculty: 'UNSW Engineering',
  duration: '4 years full time (honours), including industry placements',
  summary: 'Design the products themselves, such as creams, foods, medicines and coatings, so they work, stay stable and can be made at scale.',
  suits: [
    'You like chemistry and want to see it end up in something people use every day',
    'You enjoy experimenting, measuring and refining until something works',
    'You are interested in how science, customers and manufacturing meet',
  ],
  mightNotSuit: [
    'You want to design large plants and pipe networks; chemical engineering is closer to that',
    'You dislike repetitive lab testing, which is a big part of product development',
  ],
  interests: ['science', 'creativity', 'building'],
  overview:
    'Chemical Product Engineering shares its foundations with chemical engineering, but focuses on the product rather than the plant. You learn why a lotion separates on the shelf, why a tablet dissolves at the right rate, why ice cream feels smooth, and how to make the same product reliably in a factory. You study thermodynamics, transport phenomena, colloids and surfaces, particle technology and rheology, then apply them to formulation, scale-up and sustainable design. Graduates work in research and development, formulation, quality and process roles in personal care, food, pharmaceuticals, agrichemicals and specialty chemicals.',
  studyFocus: 'Formulating and scaling up everyday products such as foods, medicines, cosmetics and coatings',
  workload: {
    level: 'Very high',
    note: 'Engineering core courses plus regular lab work and reports, with a product development project in final year.',
  },
  maths: { level: 'Heavy', note: 'The same calculus and differential equations as chemical engineering, applied to flow, mixing and stability.' },
  majorsHeading: 'Streams and elective areas',
  majors: [
    { id: 'formulation', name: 'Formulation science', description: 'Designing mixtures such as emulsions, gels and suspensions that stay stable.' },
    { id: 'food', name: 'Food products', description: 'Texture, shelf life and safety in food and beverage products.' },
    { id: 'pharma', name: 'Pharmaceutical products', description: 'Tablets, powders and liquids that deliver the right dose reliably.' },
    { id: 'sustainability', name: 'Sustainable products', description: 'Lower-impact ingredients, packaging and life cycle thinking.' },
  ],
  years: [
    {
      year: 1,
      courses: [
        { name: 'Mathematics 1A', description: 'Calculus and linear algebra for engineering.', majors: [] },
        { name: 'Chemistry for Engineers', description: 'Bonding, reactions and equilibrium as a basis for product chemistry.', majors: [] },
        { name: 'Physics 1A', description: 'Mechanics, energy and heat.', majors: [] },
        { name: 'Introduction to Chemical and Product Engineering', description: 'How products are designed and made, with simple mass balances.', majors: [] },
        { name: 'Engineering Design and Innovation', description: 'A team project designing a product or process from a brief.', majors: ['formulation'] },
      ],
    },
    {
      year: 2,
      courses: [
        { name: 'Mass and Energy Balances', description: 'Accounting for materials and energy through a production process.', majors: [] },
        { name: 'Chemical Engineering Thermodynamics', description: 'Phase behaviour and why some mixtures separate and others do not.', majors: ['formulation'] },
        { name: 'Colloid and Surface Chemistry', description: 'How droplets and particles interact, the key to stable creams and paints.', majors: ['formulation', 'food'] },
        { name: 'Fluid Mechanics', description: 'How liquids flow and mix in tanks and pipes.', majors: [] },
        { name: 'Biochemistry for Engineers', description: 'Proteins, enzymes and biological ingredients used in products.', majors: ['food', 'pharma'] },
      ],
    },
    {
      year: 3,
      courses: [
        { name: 'Product Design and Formulation', description: 'Turning a customer need into a recipe, then testing and refining it.', majors: ['formulation'] },
        { name: 'Particle Technology', description: 'Powders, granules and tablets: how they flow, mix and compress.', majors: ['pharma', 'food'] },
        { name: 'Rheology of Complex Fluids', description: 'Why toothpaste stays on the brush and sauce pours: measuring and designing flow behaviour.', majors: ['formulation', 'food'] },
        { name: 'Reaction Engineering', description: 'Designing and sizing reactors for product manufacture.', majors: [] },
        { name: 'Sustainable Product Design', description: 'Choosing ingredients and packaging with lower environmental impact.', majors: ['sustainability'] },
      ],
    },
    {
      year: 4,
      courses: [
        { name: 'Product Development Project', description: 'A team takes a product from brief to prototype, stability data and manufacturing plan.', majors: [] },
        { name: 'Pharmaceutical Process Engineering', description: 'Manufacturing medicines under strict quality rules.', majors: ['pharma'] },
        { name: 'Food Process Engineering', description: 'Heating, drying and preserving food safely at scale.', majors: ['food'] },
        { name: 'Life Cycle Assessment', description: 'Measuring the environmental impact of a product from raw material to disposal.', majors: ['sustainability'] },
        { name: 'Thesis Project', description: 'A year-long research or development project.', majors: [] },
      ],
    },
  ],
  skills: [
    { name: 'Formulation', inPractice: 'Adjusting a recipe so a moisturiser stays smooth after three months in a hot warehouse.' },
    { name: 'Experimental design', inPractice: 'Planning twelve test batches that separate the effect of two ingredients instead of guessing.' },
    { name: 'Stability testing', inPractice: 'Measuring viscosity and pH over time and spotting the batch that is starting to fail.' },
    { name: 'Scale-up thinking', inPractice: 'Explaining why a mixing step that takes five minutes in the lab takes an hour in a 5,000 litre tank.' },
    { name: 'Communicating with non-engineers', inPractice: 'Telling the marketing team what claims the test data does and does not support.' },
  ],
  placementDay: {
    setting: 'Month four of a six-month placement in the research and development lab of a personal care manufacturer',
    intro: 'You work on a new version of a shampoo. Most of the day is in the lab, with meetings that connect your data to marketing and the factory.',
    blocks: [
      {
        time: '08:30',
        title: 'Lab check and plan',
        whatYouDo: 'You check equipment calibration, review yesterday\'s results and plan today\'s batches with your supervisor.',
        withWhom: ['Senior formulation chemist'],
        tools: ['Lab notebook', 'Calibration log'],
        hardOrSurprising: 'Every step is recorded so another person could repeat it exactly. Missing details make results worthless.',
      },
      {
        time: '09:00',
        title: 'Making test batches',
        whatYouDo: 'You make three small batches with different thickener levels, following a written procedure.',
        withWhom: ['Lab technician'],
        tools: ['Overhead mixer', 'Balance', 'Water bath'],
        hardOrSurprising: 'Small changes in temperature or mixing order give very different results.',
      },
      {
        time: '10:30',
        title: 'Stability measurements',
        whatYouDo: 'You measure viscosity, pH and appearance on samples stored at different temperatures for four weeks.',
        withWhom: ['Working alone'],
        tools: ['Viscometer', 'pH meter', 'Stability cabinet'],
        hardOrSurprising: 'Most of the work is careful, repetitive measurement. The interesting part is noticing the one sample that is changing.',
      },
      {
        time: '12:30',
        title: 'Lunch',
        whatYouDo: 'Lunch with the R&D team.',
        withWhom: ['R&D team'],
        tools: ['None'],
        hardOrSurprising: 'Colleagues often share stories of products that failed in market, which teach a lot.',
      },
      {
        time: '13:30',
        title: 'Meeting with marketing',
        whatYouDo: 'You join a meeting where the brand team explains the claims they want on the label and asks what the data supports.',
        withWhom: ['Brand manager', 'Senior formulation chemist', 'Regulatory specialist'],
        tools: ['Stability data summary'],
        hardOrSurprising: 'Scientists and marketers use the same words to mean different things. Precision matters.',
      },
      {
        time: '15:00',
        title: 'Scale-up discussion',
        whatYouDo: 'You talk with a production engineer about how the lab recipe will be made in a large tank and what could change.',
        withWhom: ['Production engineer'],
        tools: ['Batch records', 'Process flow diagram'],
        hardOrSurprising: 'A recipe that works in a beaker may not work in a tank. Mixing and heating behave differently at scale.',
      },
      {
        time: '16:30',
        title: 'Data and notebook write-up',
        whatYouDo: 'You enter results into the shared database and summarise what changed in today\'s batches.',
        withWhom: ['Working alone'],
        tools: ['Lab information system', 'Excel'],
        hardOrSurprising: 'Clear records protect the company if a product problem is investigated later.',
      },
    ],
    decisions: [
      {
        id: 'cpe-label-claim',
        time: '13:30',
        scenario:
          'The brand team wants the label to say the product is stable for 24 months. You only have three months of real-time data and some accelerated test results.',
        options: [
          { label: 'Agree, since the accelerated tests look good', outcome: 'The claim goes ahead. If later batches fail before 24 months, the company faces recalls and complaints.' },
          { label: 'Explain what the data supports and what is still needed', outcome: 'The team agrees to launch with a cautious claim and update it as real-time data comes in.' },
          { label: 'Say nothing and let the regulatory specialist decide', outcome: 'The specialist asks for your view anyway, and your silence makes the meeting go in circles.' },
        ],
        colleagueView:
          'An experienced formulator would be clear and specific: accelerated tests suggest the product should last, but real-time data only covers three months. They would propose what claim is defensible now and when more data will be available. Being helpful to marketing means giving them an answer they can stand behind.',
      },
    ],
  },
  campusDay: {
    setting: 'A Wednesday in week 7 of term, third year',
    intro: 'Campus days mix lectures with hands-on labs, and design projects run alongside them.',
    blocks: [
      {
        time: '09:00',
        title: 'Lecture: rheology',
        whatYouDo: 'A lecture on why some fluids thin when stirred, with examples from sauces and paints.',
        withWhom: ['About 80 students', 'Lecturer'],
        tools: ['Lecture slides', 'Notebook'],
        hardOrSurprising: 'Smaller classes than first year mean lecturers notice who is engaged.',
      },
      {
        time: '11:00',
        title: 'Formulation lab',
        whatYouDo: 'You make emulsions with different emulsifiers and measure droplet size under a microscope.',
        withWhom: ['Two lab partners', 'Demonstrator'],
        tools: ['Microscope', 'Homogeniser'],
        hardOrSurprising: 'Results vary a lot between groups, and explaining why is the point of the lab.',
      },
      {
        time: '13:00',
        title: 'Lunch',
        whatYouDo: 'Lunch with friends from the co-op cohort.',
        withWhom: ['Co-op cohort'],
        tools: ['None'],
        hardOrSurprising: 'Older scholars give useful advice on which sponsors suit which interests.',
      },
      {
        time: '14:00',
        title: 'Product design project meeting',
        whatYouDo: 'Your team reviews customer interviews for a plant-based yoghurt concept and decides what to test first.',
        withWhom: ['Four classmates'],
        tools: ['Shared document', 'Whiteboard'],
        hardOrSurprising: 'Teams often want to test everything. Choosing what not to test is harder.',
      },
      {
        time: '16:00',
        title: 'Self-study',
        whatYouDo: 'Problem sets on particle technology and writing up the lab.',
        withWhom: ['Working alone'],
        tools: ['Laptop', 'Problem set'],
        hardOrSurprising: 'Lab reports and problem sets compete for the same evenings.',
      },
      {
        time: '18:30',
        title: 'Society workshop',
        whatYouDo: 'An engineering society workshop on preparing for placement interviews.',
        withWhom: ['Students from several degrees'],
        tools: ['None'],
        hardOrSurprising: 'Practising interview answers out loud helps more than reading about them.',
      },
    ],
  },
  coop: {
    placementLength: 'Placements are typically several months each, adding up to roughly a year or more in industry',
    numberOfPlacements: 'Usually two to three placements, often across different product industries',
    employerTypes: ['Personal care manufacturers', 'Food and beverage companies', 'Pharmaceutical manufacturers', 'Specialty chemical companies'],
    exampleRoles: ['Formulation intern', 'Product development intern', 'Quality engineering intern', 'Process engineering intern'],
  },
  employers: [
    { type: 'Personal care manufacturer', whatYouMightDo: 'Make and test new formulations in an R&D lab.' },
    { type: 'Food manufacturer', whatYouMightDo: 'Improve the texture or shelf life of a product.' },
    { type: 'Pharmaceutical manufacturer', whatYouMightDo: 'Support tablet or liquid process validation.' },
    { type: 'Paint and coatings company', whatYouMightDo: 'Test how a new coating performs over time.' },
    { type: 'Agrichemical company', whatYouMightDo: 'Help develop a more stable crop protection formulation.' },
    { type: 'Beverage company', whatYouMightDo: 'Run trials on a new drink at pilot scale.' },
    { type: 'Packaging supplier', whatYouMightDo: 'Test whether packaging affects product stability.' },
    { type: 'Specialty chemical company', whatYouMightDo: 'Support customer technical requests on ingredients.' },
  ],
  tradeOffs: [
    {
      title: 'A smaller, specialised field',
      detail: 'There are fewer roles labelled "product engineer" than "process engineer". Many graduates apply for both, so be ready to explain how your degree fits.',
    },
    {
      title: 'Lots of repetitive lab work',
      detail: 'Product development involves many test batches and measurements. If you prefer analysis or big-picture design, this can feel slow.',
    },
    {
      title: 'Commercial pressure on technical decisions',
      detail: 'Launch dates and marketing goals can push against what the data supports. Holding your ground politely is part of the job.',
    },
  ],
  imageAlt: {
    hero: "A gloved hand using a pipette over a rack of sample tubes",
    campus: "Two people in lab coats and safety glasses working with samples at a lab bench",
  },
  heroImage: {
    src: heroPhoto,
    width: 667,
    height: 1000,
    credit: {
      creator: "Centers for Disease Control and Prevention",
      title: "A scientist preparing samples for mass spectrometry",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://www.rawpixel.com/image/2288538/free-photo-image-pipette-pipettes-laboratory-bacterial",
    },
  },
  campusImage: {
    src: campusPhoto,
    width: 1000,
    height: 816,
    credit: {
      creator: "U.S. Army Combat Capabilities Development Command",
      title: "Army scientists bring math into focus for teachers",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/34402227@N03/6925521698",
    },
  },
  toVerify: [
    'Official program name, and whether it is offered as a co-op program',
    'Duration, honours structure and Engineers Australia accreditation',
    'Stream and elective names, and which courses belong to each',
    'Course names for each year',
    'Number, length and timing of industry placements',
  ],
};

export default degree;
