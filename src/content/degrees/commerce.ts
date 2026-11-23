import type { Degree } from '../schema';
import heroPhoto from '../../assets/photos/degrees/commerce-hero.jpg';
import campusPhoto from '../../assets/photos/degrees/commerce-campus.jpg';

/*
 * VERIFY BEFORE LAUNCH: program structure, course names, majors and placement
 * rules below are written to be plausible and generic. Check every item in
 * `toVerify` against the official UNSW Handbook and the Co-op Program team.
 */
const degree: Degree = {
  slug: 'commerce',
  name: 'Commerce',
  faculty: 'UNSW Business School',
  duration: '4 years full time, including industry placements',
  summary: 'Build a broad business foundation, then specialise in areas such as accounting, finance, management or international business.',
  suits: [
    'You want a flexible business degree and are not yet sure which area you prefer',
    'You like understanding how organisations make money and decisions',
    'You are comfortable with numbers and also enjoy working with people',
  ],
  mightNotSuit: [
    'You already know you want a highly specialised technical career',
    'You want a strongly creative or hands-on building role',
  ],
  interests: ['markets', 'people', 'numbers'],
  overview:
    'Commerce gives you a broad grounding in how businesses work: accounting, finance, economics, management and statistics. You then choose one or more majors, such as accounting, finance, management or international business. The degree is flexible, which makes it popular with students who want options. Graduates work in accounting and audit, banking, consulting, corporate finance, management, government and many other areas of business.',
  studyFocus: 'Broad business foundations, then specialisation in accounting, finance, management or international business',
  workload: {
    level: 'Moderate',
    note: 'A mix of exams, group projects and case studies. Accounting and finance courses can be more intensive.',
  },
  maths: { level: 'Moderate', note: 'Business statistics and financial calculations. Finance majors involve more maths.' },
  majorsHeading: 'Majors',
  majors: [
    { id: 'accounting', name: 'Accounting', description: 'Recording, reporting and auditing financial information.' },
    { id: 'finance', name: 'Finance', description: 'Investment, valuation and corporate financial decisions.' },
    { id: 'management', name: 'Management', description: 'Leading people, organisations and change.' },
    { id: 'international', name: 'International business', description: 'Doing business across countries and cultures.' },
  ],
  years: [
    {
      year: 1,
      courses: [
        { name: 'Accounting and Financial Management', description: 'Reading and using financial statements.', majors: [] },
        { name: 'Business Finance', description: 'Time value of money and evaluating projects.', majors: [] },
        { name: 'Microeconomics', description: 'How markets and prices work.', majors: [] },
        { name: 'Quantitative Analysis for Business', description: 'Statistics for business decisions.', majors: [] },
        { name: 'Management and Organisations', description: 'How organisations are structured and led.', majors: ['management'] },
      ],
    },
    {
      year: 2,
      courses: [
        { name: 'Financial Accounting', description: 'Preparing financial statements under accounting standards.', majors: ['accounting'] },
        { name: 'Management Accounting', description: 'Using cost information to make decisions.', majors: ['accounting'] },
        { name: 'Corporate Finance', description: 'How companies choose investments and funding.', majors: ['finance'] },
        { name: 'Organisational Behaviour', description: 'Motivation, teams and leadership.', majors: ['management'] },
        { name: 'International Business', description: 'How firms expand and compete globally.', majors: ['international'] },
      ],
    },
    {
      year: 3,
      courses: [
        { name: 'Auditing and Assurance', description: 'Checking that financial reports are reliable.', majors: ['accounting'] },
        { name: 'Taxation Law', description: 'How tax applies to individuals and businesses.', majors: ['accounting'] },
        { name: 'Investments', description: 'Building portfolios and valuing securities.', majors: ['finance'] },
        { name: 'Strategic Management', description: 'How firms gain and keep an advantage.', majors: ['management', 'international'] },
        { name: 'Cross-Cultural Management', description: 'Leading teams across cultures.', majors: ['international', 'management'] },
      ],
    },
    {
      year: 4,
      courses: [
        { name: 'Corporate Reporting', description: 'Complex accounting issues and disclosures.', majors: ['accounting'] },
        { name: 'Leading Organisational Change', description: 'Managing people through change.', majors: ['management'] },
        { name: 'Global Strategy', description: 'Strategy for multinational firms.', majors: ['international'] },
        { name: 'Commerce Capstone', description: 'A team project solving a real business problem.', majors: [] },
      ],
    },
  ],
  skills: [
    { name: 'Financial analysis', inPractice: 'Explaining why a company\'s profit rose while its cash fell.' },
    { name: 'Audit testing', inPractice: 'Checking a sample of invoices against approvals and contracts.' },
    { name: 'Business writing', inPractice: 'Writing a short memo that a manager can approve quickly.' },
    { name: 'Teamwork', inPractice: 'Coordinating with colleagues across departments to meet a deadline.' },
    { name: 'Professional judgement', inPractice: 'Deciding when an issue needs to be escalated.' },
  ],
  placementDay: {
    setting: 'Month two of a six-month placement in the audit team of a professional services firm',
    intro: 'You work on the audit of a mid-sized company, spending most days at the client\'s office.',
    blocks: [
      {
        time: '08:30',
        title: 'Arrive at client site',
        whatYouDo: 'You set up in the client\'s meeting room with the audit team.',
        withWhom: ['Audit senior', 'Audit team'],
        tools: ['Laptop', 'Audit software'],
        hardOrSurprising: 'You are a visitor in someone else\'s workplace. Professional behaviour matters.',
      },
      {
        time: '09:00',
        title: 'Planning check-in',
        whatYouDo: 'The audit senior explains today\'s tasks and the risks to focus on.',
        withWhom: ['Audit senior'],
        tools: ['Audit plan'],
        hardOrSurprising: 'Understanding why a test matters helps you spot problems.',
      },
      {
        time: '09:30',
        title: 'Testing invoices',
        whatYouDo: 'You check a sample of expense invoices against approvals and payments.',
        withWhom: ['Working alone'],
        tools: ['Audit software', 'Excel'],
        hardOrSurprising: 'The work is detailed and repetitive, but errors matter.',
      },
      {
        time: '12:00',
        title: 'Lunch',
        whatYouDo: 'Lunch with the audit team.',
        withWhom: ['Audit team'],
        tools: ['None'],
        hardOrSurprising: 'Teams are close during busy season.',
      },
      {
        time: '13:00',
        title: 'Meeting the client team',
        whatYouDo: 'You ask the accounts payable team about missing documents.',
        withWhom: ['Client accounts payable staff'],
        tools: ['Request list'],
        hardOrSurprising: 'Clients are busy. Clear, polite requests get faster responses.',
      },
      {
        time: '14:30',
        title: 'Documenting work',
        whatYouDo: 'You document your testing so a reviewer can follow it.',
        withWhom: ['Working alone'],
        tools: ['Audit software'],
        hardOrSurprising: 'If it is not documented, it did not happen.',
      },
      {
        time: '16:00',
        title: 'Review notes',
        whatYouDo: 'The audit senior reviews your work and leaves comments to address.',
        withWhom: ['Audit senior'],
        tools: ['Audit software'],
        hardOrSurprising: 'Review comments are normal and help you improve quickly.',
      },
      {
        time: '17:30',
        title: 'Wrap up',
        whatYouDo: 'You clear review notes and update the task list for tomorrow.',
        withWhom: ['Working alone'],
        tools: ['Task list'],
        hardOrSurprising: 'Hours can be longer during busy season.',
      },
    ],
    decisions: [
      {
        id: 'commerce-unapproved-invoices',
        time: '13:00',
        scenario:
          'Two invoices in your sample have no written approval. The client\'s staff say the CFO approved them verbally and that it is fine.',
        options: [
          { label: 'Accept the explanation and move on', outcome: 'The issue goes unrecorded, and a control weakness is missed.' },
          { label: 'Record the exception and raise it with your senior', outcome: 'Your senior follows up with the CFO, and the issue is documented properly.' },
          { label: 'Accuse the client of breaking rules', outcome: 'The relationship becomes tense, and the facts are still unclear.' },
        ],
        colleagueView:
          'An experienced auditor would record the exception and raise it with the audit senior. It may be harmless, but auditors need evidence, not assurances. Raising it calmly and factually keeps the relationship professional.',
      },
    ],
  },
  campusDay: {
    setting: 'A Monday in week 6 of term, second year',
    intro: 'Campus days combine lectures, tutorials and group assignments, with flexibility to choose majors and electives.',
    blocks: [
      {
        time: '09:00',
        title: 'Lecture: financial accounting',
        whatYouDo: 'A lecture on how companies account for leases.',
        withWhom: ['About 400 students', 'Lecturer'],
        tools: ['Lecture slides', 'Laptop'],
        hardOrSurprising: 'Accounting rules can seem abstract until you see real company reports.',
      },
      {
        time: '11:00',
        title: 'Tutorial: management case',
        whatYouDo: 'You discuss how a company handled a major restructure.',
        withWhom: ['About 25 students', 'Tutor'],
        tools: ['Case study'],
        hardOrSurprising: 'There is rarely one right answer. Arguments must be supported.',
      },
      {
        time: '12:30',
        title: 'Lunch',
        whatYouDo: 'Lunch with your co-op cohort.',
        withWhom: ['Co-op cohort'],
        tools: ['None'],
        hardOrSurprising: 'Older scholars help you choose majors.',
      },
      {
        time: '13:30',
        title: 'Group assignment meeting',
        whatYouDo: 'Your team works on an investment analysis report.',
        withWhom: ['Three classmates'],
        tools: ['Excel', 'Shared document'],
        hardOrSurprising: 'Group work can be uneven. Clear roles help.',
      },
      {
        time: '15:30',
        title: 'Self-study',
        whatYouDo: 'Practice accounting questions and readings.',
        withWhom: ['Working alone'],
        tools: ['Textbook', 'Practice questions'],
        hardOrSurprising: 'Regular practice prevents last-minute cramming.',
      },
      {
        time: '18:00',
        title: 'Business society networking night',
        whatYouDo: 'An event with recruiters from accounting and consulting firms.',
        withWhom: ['Students', 'Recruiters'],
        tools: ['None'],
        hardOrSurprising: 'Networking is easier with practice and genuine curiosity.',
      },
    ],
  },
  coop: {
    placementLength: 'Placements are typically several months each, adding up to roughly a year or more in industry',
    numberOfPlacements: 'Usually two to three placements, often across different business functions',
    employerTypes: ['Professional services firms', 'Banks', 'Large corporates', 'Government agencies', 'Consulting firms'],
    exampleRoles: ['Audit intern', 'Finance intern', 'Business analyst intern', 'Management consulting intern'],
  },
  employers: [
    { type: 'Professional services firm', whatYouMightDo: 'Support audits or advisory projects.' },
    { type: 'Major bank', whatYouMightDo: 'Help with finance or business operations.' },
    { type: 'Large corporate', whatYouMightDo: 'Assist the finance or strategy team.' },
    { type: 'Government agency', whatYouMightDo: 'Support budget analysis or program evaluation.' },
    { type: 'Consulting firm', whatYouMightDo: 'Research and analyse business problems for clients.' },
    { type: 'Retailer', whatYouMightDo: 'Help with commercial analysis and reporting.' },
    { type: 'Energy company', whatYouMightDo: 'Support financial planning and reporting.' },
    { type: 'Not-for-profit organisation', whatYouMightDo: 'Help with finance and operations.' },
  ],
  tradeOffs: [
    {
      title: 'Broad rather than specialised',
      detail: 'Flexibility is a strength, but you need to choose majors and build specific skills to stand out.',
    },
    {
      title: 'Large, competitive cohort',
      detail: 'Commerce is popular, so many graduates compete for similar roles.',
    },
    {
      title: 'Some roles have long hours',
      detail: 'Audit and consulting can involve long hours during busy periods.',
    },
  ],
  imageAlt: {
    hero: "A large open-plan office with people working at desks",
    campus: "A presenter explaining notes on a whiteboard to a seated group",
  },
  heroImage: {
    src: heroPhoto,
    width: 1000,
    height: 750,
    credit: {
      creator: "Phillie Casablanca",
      title: "New office",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/19451080@N00/3344142642",
    },
  },
  campusImage: {
    src: campusPhoto,
    width: 1000,
    height: 667,
    credit: {
      creator: "Jirka Matousek",
      title: "ISC Language Teaching Workshop Spring 2012",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/28415633@N00/8481220337",
    },
  },
  toVerify: [
    'Official program name and whether Commerce is offered as a co-op program',
    'Duration and whether honours is included',
    'Major names, and which courses belong to each',
    'Course names for each year',
    'Number, length and timing of industry placements',
  ],
};

export default degree;
