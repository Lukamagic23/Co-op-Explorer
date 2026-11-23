import type { Degree } from '../schema';
import heroPhoto from '../../assets/photos/degrees/advanced-mathematics-hero.jpg';
import campusPhoto from '../../assets/photos/degrees/advanced-mathematics-campus.jpg';

/*
 * VERIFY BEFORE LAUNCH: program structure, course names, majors and placement
 * rules below are written to be plausible and generic. Check every item in
 * `toVerify` against the official UNSW Handbook and the Co-op Program team.
 */
const degree: Degree = {
  slug: 'advanced-mathematics',
  name: 'Advanced Mathematics',
  faculty: 'UNSW Science',
  duration: '4 years full time (honours), including industry placements',
  summary: 'Study mathematics in depth, from proofs to modelling and statistics, and apply it in finance, technology, defence and research.',
  suits: [
    'You did very well in the highest school maths and want more of it',
    'You enjoy proofs and abstract problems, not just calculations',
    'You want a degree that keeps quantitative careers in many industries open',
  ],
  mightNotSuit: [
    'You want a clear job title from day one; maths graduates often have to explain their skills to employers',
    'You prefer practical, applied work to long periods of abstract thinking',
  ],
  interests: ['numbers', 'science', 'data'],
  overview:
    'Advanced Mathematics is a rigorous honours degree for students who want to study mathematics at depth. You take higher-level versions of core courses and move through analysis, algebra, differential equations, probability, statistics and numerical methods, then choose areas such as pure mathematics, applied mathematics, statistics or quantitative finance. The honours year includes a research thesis. Graduates work as quantitative analysts, data scientists, software engineers, actuaries, defence and government analysts, and researchers.',
  studyFocus: 'Rigorous pure and applied mathematics, statistics and modelling, with an honours research year',
  workload: {
    level: 'Very high',
    note: 'Problem sheets every week, challenging exams and a demanding honours year with a thesis.',
  },
  maths: { level: 'Very heavy', note: 'The whole degree is mathematics, including abstract proofs, analysis and advanced statistics.' },
  majorsHeading: 'Majors',
  majors: [
    { id: 'pure', name: 'Pure mathematics', description: 'Algebra, analysis, geometry and number theory, studied for their structure.' },
    { id: 'applied', name: 'Applied mathematics', description: 'Modelling physical, biological and engineering systems with equations.' },
    { id: 'stats', name: 'Statistics', description: 'Probability, inference and learning from data.' },
    { id: 'finance', name: 'Quantitative finance', description: 'Mathematics behind pricing, risk and trading.' },
  ],
  years: [
    {
      year: 1,
      courses: [
        { name: 'Higher Mathematics 1A', description: 'Calculus and linear algebra at a faster pace and with more proof.', majors: [] },
        { name: 'Higher Mathematics 1B', description: 'Further calculus, series and linear algebra.', majors: [] },
        { name: 'Discrete Mathematics', description: 'Logic, proofs, sets and counting.', majors: ['pure'] },
        { name: 'Programming Fundamentals', description: 'Writing programs to solve problems and test ideas.', majors: ['applied'] },
      ],
    },
    {
      year: 2,
      courses: [
        { name: 'Higher Several Variable Calculus', description: 'Calculus in several dimensions, used throughout applied maths and physics.', majors: ['applied'] },
        { name: 'Higher Linear Algebra', description: 'Vector spaces and linear maps, the language of much of modern maths.', majors: ['pure', 'stats'] },
        { name: 'Probability and Stochastic Processes', description: 'Random variables and processes that evolve over time.', majors: ['stats', 'finance'] },
        { name: 'Differential Equations', description: 'Solving and analysing equations that describe change.', majors: ['applied'] },
        { name: 'Real Analysis', description: 'Rigorous foundations of calculus: limits, continuity and convergence.', majors: ['pure'] },
      ],
    },
    {
      year: 3,
      courses: [
        { name: 'Abstract Algebra', description: 'Groups, rings and fields: structures behind symmetry and cryptography.', majors: ['pure'] },
        { name: 'Numerical Methods', description: 'Solving problems on a computer accurately and efficiently.', majors: ['applied', 'finance'] },
        { name: 'Statistical Inference', description: 'Estimation, testing and modelling with data.', majors: ['stats'] },
        { name: 'Mathematical Modelling', description: 'Turning a real-world problem into equations and checking the results.', majors: ['applied'] },
        { name: 'Financial Mathematics', description: 'Pricing options and other financial instruments.', majors: ['finance'] },
      ],
    },
    {
      year: 4,
      courses: [
        { name: 'Honours Seminar', description: 'Advanced topics presented and discussed in small groups.', majors: [] },
        { name: 'Honours Thesis', description: 'An original research project with an academic supervisor.', majors: [] },
        { name: 'Advanced Statistical Modelling', description: 'Modern methods for complex data.', majors: ['stats'] },
        { name: 'Stochastic Calculus for Finance', description: 'Continuous-time models used in derivatives pricing.', majors: ['finance'] },
      ],
    },
  ],
  skills: [
    { name: 'Proof and rigour', inPractice: 'Spotting that a model\'s assumption breaks down in an edge case before it causes losses.' },
    { name: 'Mathematical modelling', inPractice: 'Turning a business question into a model with clear assumptions.' },
    { name: 'Programming', inPractice: 'Implementing a numerical method in Python and testing it against known results.' },
    { name: 'Statistical thinking', inPractice: 'Recognising when a strong result is likely due to chance or bias.' },
    { name: 'Explaining complex ideas', inPractice: 'Summarising a model for a manager in a few clear sentences.' },
  ],
  placementDay: {
    setting: 'Month four of a six-month placement in the quantitative research team of an investment manager',
    intro: 'You help research and test trading signals. Much of the day is coding and checking results carefully.',
    blocks: [
      {
        time: '08:30',
        title: 'Market overview',
        whatYouDo: 'The team briefly reviews market moves and any issues with overnight model runs.',
        withWhom: ['Quantitative researchers', 'Portfolio manager'],
        tools: ['Market data dashboard'],
        hardOrSurprising: 'You need to understand the markets, not just the maths.',
      },
      {
        time: '09:00',
        title: 'Implementing a model',
        whatYouDo: 'You implement a research idea in Python, following the team\'s coding standards.',
        withWhom: ['Working alone', 'Senior researcher for questions'],
        tools: ['Python', 'Version control', 'Research database'],
        hardOrSurprising: 'Production-quality code takes more care than university code.',
      },
      {
        time: '11:00',
        title: 'Backtesting',
        whatYouDo: 'You test how the signal would have performed on historical data.',
        withWhom: ['Senior researcher'],
        tools: ['Backtesting framework', 'Python'],
        hardOrSurprising: 'Results that look too good usually are.',
      },
      {
        time: '12:30',
        title: 'Lunch',
        whatYouDo: 'Lunch with the research team.',
        withWhom: ['Research team'],
        tools: ['None'],
        hardOrSurprising: 'Many colleagues have PhDs in maths, physics or computer science.',
      },
      {
        time: '13:30',
        title: 'Research reading group',
        whatYouDo: 'The team discusses an academic paper on portfolio optimisation, and you present one section.',
        withWhom: ['Research team'],
        tools: ['Academic paper', 'Whiteboard'],
        hardOrSurprising: 'Your degree prepares you well for reading papers, but applying them takes judgement.',
      },
      {
        time: '15:00',
        title: 'Debugging a numerical issue',
        whatYouDo: 'You track down why an optimiser gives unstable results for some inputs.',
        withWhom: ['Working alone'],
        tools: ['Python', 'Debugger'],
        hardOrSurprising: 'Numerical methods courses suddenly become very practical.',
      },
      {
        time: '16:30',
        title: 'Write-up for the portfolio manager',
        whatYouDo: 'You write a short summary of the research results, risks and next steps.',
        withWhom: ['Senior researcher for review'],
        tools: ['Research notebook', 'Charts'],
        hardOrSurprising: 'Results must be explained clearly to people who do not want to read equations.',
      },
    ],
    decisions: [
      {
        id: 'maths-lookahead',
        time: '11:00',
        scenario:
          'Your backtest shows excellent returns. Then you notice the data might include information that would not have been available at the time, which could inflate the result.',
        options: [
          { label: 'Report the strong results now', outcome: 'The team is excited until a senior researcher finds the problem, and your credibility suffers.' },
          { label: 'Check the data timing and rerun before reporting', outcome: 'The corrected result is much weaker but still useful. The team trusts your work.' },
          { label: 'Drop the idea quietly', outcome: 'You avoid embarrassment, but the team loses a potentially useful signal and a lesson.' },
        ],
        colleagueView:
          'An experienced researcher would treat a result that looks too good as a warning. They would check for look-ahead bias and other errors, rerun the test, and then report honestly, including what went wrong and what remains.',
      },
    ],
  },
  campusDay: {
    setting: 'A Tuesday in week 6 of term, second year',
    intro: 'Campus days have fewer contact hours, but problem sheets fill much of the remaining time.',
    blocks: [
      {
        time: '10:00',
        title: 'Lecture: real analysis',
        whatYouDo: 'A lecture proving key results about limits and continuity.',
        withWhom: ['About 80 students', 'Lecturer'],
        tools: ['Notebook'],
        hardOrSurprising: 'Proofs require a different way of thinking from school maths.',
      },
      {
        time: '12:00',
        title: 'Tutorial: proofs',
        whatYouDo: 'You present a proof to a small group and discuss alternative approaches.',
        withWhom: ['About 20 students', 'Tutor'],
        tools: ['Whiteboard'],
        hardOrSurprising: 'Explaining your reasoning clearly is as important as getting the answer.',
      },
      {
        time: '13:00',
        title: 'Lunch',
        whatYouDo: 'Lunch with your co-op cohort.',
        withWhom: ['Co-op cohort'],
        tools: ['None'],
        hardOrSurprising: 'Friends in applied degrees often ask you for help with maths.',
      },
      {
        time: '14:00',
        title: 'Lecturer consultation',
        whatYouDo: 'You ask the lecturer about a problem from the last assignment.',
        withWhom: ['Lecturer'],
        tools: ['Notebook'],
        hardOrSurprising: 'Lecturers are usually happy to help. Few students use consultation hours.',
      },
      {
        time: '15:00',
        title: 'Problem sheets',
        whatYouDo: 'Three hours working on problem sheets in the library.',
        withWhom: ['Working alone', 'Study group'],
        tools: ['Problem sheets', 'Textbooks'],
        hardOrSurprising: 'Some problems take hours. Persistence matters.',
      },
      {
        time: '18:30',
        title: 'Maths society puzzle night',
        whatYouDo: 'A social evening solving puzzles and talking with older students.',
        withWhom: ['Maths society'],
        tools: ['Pen and paper'],
        hardOrSurprising: 'The maths community is small and welcoming.',
      },
    ],
  },
  coop: {
    placementLength: 'Placements are typically several months each, adding up to roughly a year or more in industry',
    numberOfPlacements: 'Usually two to three placements, often across finance, technology and government',
    employerTypes: ['Investment managers and trading firms', 'Technology companies', 'Defence and government agencies', 'Insurers and banks'],
    exampleRoles: ['Quantitative research intern', 'Data science intern', 'Operations research intern', 'Software engineering intern'],
  },
  employers: [
    { type: 'Investment manager', whatYouMightDo: 'Research and backtest quantitative strategies.' },
    { type: 'Trading firm', whatYouMightDo: 'Analyse market data and support pricing models.' },
    { type: 'Defence science agency', whatYouMightDo: 'Model systems and analyse operational data.' },
    { type: 'Technology company', whatYouMightDo: 'Work on algorithms or data science problems.' },
    { type: 'Bank risk team', whatYouMightDo: 'Validate pricing or risk models.' },
    { type: 'Insurer', whatYouMightDo: 'Help with statistical modelling of claims.' },
    { type: 'Government statistics agency', whatYouMightDo: 'Support survey design and analysis.' },
    { type: 'Research institute', whatYouMightDo: 'Assist with mathematical modelling projects.' },
  ],
  tradeOffs: [
    {
      title: 'Very demanding and abstract',
      detail: 'Courses are harder and faster than standard maths, with many proofs. Strong school results do not guarantee you will enjoy it.',
    },
    {
      title: 'Less obvious career path',
      detail: 'Unlike engineering or actuarial studies, there is no single profession. You need to explain your skills and often add programming or domain knowledge.',
    },
    {
      title: 'Competitive quantitative roles',
      detail: 'Top quantitative finance and research roles are highly competitive and often favour postgraduate degrees.',
    },
  ],
  imageAlt: {
    hero: "Equations written on a blackboard",
    campus: "A person writing on a chalkboard while students watch",
  },
  heroImage: {
    src: heroPhoto,
    width: 1000,
    height: 661,
    credit: {
      creator: "thepatrick",
      title: "Einstein's theory of relative blackboard longevity",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/93529274@N00/1508924823",
    },
  },
  campusImage: {
    src: campusPhoto,
    width: 1000,
    height: 667,
    credit: {
      creator: "hackNY",
      title: "Fall 2010 hackNY Student Hackathon",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      sourceUrl: "https://www.flickr.com/photos/61623410@N08/5685034971",
    },
  },
  toVerify: [
    'Official program name, and whether it is offered as a co-op program',
    'Duration and honours structure',
    'Major names, and which courses belong to each',
    'Course names for each year',
    'Number, length and timing of industry placements',
  ],
};

export default degree;
