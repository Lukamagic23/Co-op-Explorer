import type { Degree } from '../schema';
import heroPhoto from '../../assets/photos/degrees/actuarial-studies-hero.jpg';
import campusPhoto from '../../assets/photos/degrees/actuarial-studies-campus.jpg';

/*
 * VERIFY BEFORE LAUNCH: program structure, course names, majors, accreditation
 * and placement rules below are written to be plausible and generic. Check
 * every item in `toVerify` against the official UNSW Handbook, the Actuaries
 * Institute and the Co-op Program team.
 */
const degree: Degree = {
  slug: 'actuarial-studies',
  name: 'Actuarial Studies',
  faculty: 'UNSW Business School',
  duration: '4 years full time, including industry placements',
  summary: 'Use statistics and financial maths to price insurance, set aside money for future claims and measure long-term risk.',
  suits: [
    'You enjoy maths and statistics and want to apply them to real decisions',
    'You are patient with detail and like checking that numbers make sense',
    'You want a clear professional pathway with recognised exams',
  ],
  mightNotSuit: [
    'You did not enjoy higher-level maths at school; the degree assumes it from the first term',
    'You want quick results. Professional qualification takes years beyond the degree',
  ],
  interests: ['numbers', 'data', 'risk'],
  overview:
    'Actuarial Studies trains you to measure and manage financial risk where the future is uncertain: how much to charge for insurance, how much an insurer needs to hold for claims not yet paid, and whether a super fund can meet its promises. You study probability, statistics, financial mathematics and economics, then apply them to insurance, superannuation and banking. Graduates work as actuarial analysts in insurers, consulting firms, super funds, banks and regulators, and increasingly in data science roles.',
  studyFocus: 'Probability, statistics and financial maths applied to insurance, super and long-term risk',
  workload: {
    level: 'Very high',
    note: 'Maths-heavy courses with weekly problem sets and demanding exams. High marks may be needed for professional exemptions.',
  },
  maths: { level: 'Very heavy', note: 'Probability, statistics and financial maths every term. Assumes strong results in the highest school maths.' },
  majorsHeading: 'Majors and co-majors',
  majors: [
    { id: 'actuarial', name: 'Actuarial core', description: 'The sequence of courses that maps to the early professional actuarial exams.' },
    { id: 'insurance', name: 'General insurance', description: 'Pricing and reserving for car, home and business insurance.' },
    { id: 'life', name: 'Life insurance and superannuation', description: 'Modelling lifetimes, retirement income and long-term promises.' },
    { id: 'analytics', name: 'Data science and analytics', description: 'Machine learning and programming applied to insurance and financial data.' },
  ],
  years: [
    {
      year: 1,
      courses: [
        { name: 'Mathematics for Actuarial Studies and Finance', description: 'Calculus and linear algebra used throughout the rest of the degree.', majors: ['actuarial'] },
        { name: 'Introduction to Probability', description: 'Random variables, distributions and expected values, with many worked problems.', majors: ['actuarial'] },
        { name: 'Business Finance', description: 'Interest, present value and how financial decisions are evaluated.', majors: [] },
        { name: 'Microeconomics', description: 'How people and firms make decisions under constraints.', majors: [] },
        { name: 'Introduction to Programming for Data', description: 'Writing R or Python to load, clean and summarise data.', majors: ['analytics'] },
      ],
    },
    {
      year: 2,
      courses: [
        { name: 'Financial Mathematics', description: 'Pricing annuities, loans and bonds, and building cash flow models.', majors: ['actuarial'] },
        { name: 'Statistical Inference', description: 'Estimating parameters from data and testing whether results are meaningful.', majors: ['actuarial', 'analytics'] },
        { name: 'Life Contingencies', description: 'Modelling how long people live and pricing life insurance and annuities.', majors: ['actuarial', 'life'] },
        { name: 'Regression and Data Analysis', description: 'Building and checking regression models on real data sets.', majors: ['analytics'] },
        { name: 'Macroeconomics', description: 'Interest rates, inflation and the wider economy that drives long-term assumptions.', majors: [] },
      ],
    },
    {
      year: 3,
      courses: [
        { name: 'Loss Models', description: 'Modelling how often claims happen and how large they are.', majors: ['actuarial', 'insurance'] },
        { name: 'Time Series Analysis', description: 'Forecasting values that change over time, such as claim numbers or inflation.', majors: ['actuarial', 'analytics'] },
        { name: 'Superannuation and Retirement Income', description: 'How super funds work and how to project retirement outcomes.', majors: ['life'] },
        { name: 'Machine Learning for Actuaries', description: 'Applying tree models and other methods to pricing and claims data.', majors: ['analytics', 'insurance'] },
      ],
    },
    {
      year: 4,
      courses: [
        { name: 'The Actuarial Control Cycle', description: 'Putting the technical pieces together: define the problem, build a solution, monitor results.', majors: ['actuarial'] },
        { name: 'General Insurance Pricing and Reserving', description: 'Setting premiums and estimating outstanding claims for an insurer.', majors: ['insurance'] },
        { name: 'Life Insurance Modelling', description: 'Projecting cash flows and setting reserves for life insurance products.', majors: ['life'] },
        { name: 'Actuarial Professional Practice', description: 'Communicating results, professional standards and ethical obligations.', majors: [] },
      ],
    },
  ],
  skills: [
    { name: 'Data cleaning', inPractice: 'Finding duplicate claim records that would have overstated the cost of a product.' },
    { name: 'Statistical modelling', inPractice: 'Fitting a model to claim frequency and checking whether it predicts last year well.' },
    { name: 'Programming in R or Python', inPractice: 'Automating a monthly report that used to take a colleague two days by hand.' },
    { name: 'Judgement about assumptions', inPractice: 'Deciding whether an unusual year of claims should change the long-term estimate.' },
    { name: 'Explaining technical results', inPractice: 'Telling a product manager why premiums need to rise, without using a single formula.' },
  ],
  placementDay: {
    setting: 'Month three of a six-month placement in the pricing team of a general insurer',
    intro: 'You help price car insurance. Most of the day is data and models, with a few short conversations that matter a lot.',
    blocks: [
      {
        time: '08:45',
        title: 'Check overnight data loads',
        whatYouDo: 'You check that last month\'s policy and claims data loaded correctly, comparing row counts and totals with the previous month.',
        withWhom: ['Working alone'],
        tools: ['SQL', 'Excel'],
        hardOrSurprising: 'Much of actuarial work is making sure the data is right before any modelling starts.',
      },
      {
        time: '09:30',
        title: 'Team stand-up',
        whatYouDo: 'A short meeting where the team shares progress on the quarterly pricing review.',
        withWhom: ['Pricing manager', 'Actuarial analysts', 'Data scientist'],
        tools: ['Task board'],
        hardOrSurprising: 'Even as a student, you are expected to own a piece of the review and report on it.',
      },
      {
        time: '10:00',
        title: 'Cleaning claims data',
        whatYouDo: 'You find and fix issues in the claims data: duplicate records, claims with no policy, and costs recorded in the wrong month.',
        withWhom: ['Data engineer, by message'],
        tools: ['R or Python', 'SQL'],
        hardOrSurprising: 'Every fix needs to be documented so someone else can repeat it next quarter.',
      },
      {
        time: '12:30',
        title: 'Lunch',
        whatYouDo: 'Lunch with the graduate actuarial analysts, who talk about their professional exams.',
        withWhom: ['Graduate analysts'],
        tools: ['None'],
        hardOrSurprising: 'You realise how much study continues after graduation, alongside full-time work.',
      },
      {
        time: '13:30',
        title: 'Running the pricing model',
        whatYouDo: 'You re-run the claim frequency model with the new data and compare results with last quarter.',
        withWhom: ['Senior actuarial analyst'],
        tools: ['R or Python', 'Pricing model'],
        hardOrSurprising: 'The model runs in minutes. Understanding why the results changed takes hours.',
      },
      {
        time: '15:00',
        title: 'Assumption review',
        whatYouDo: 'The team updates its assumption for repair cost inflation. You re-run the results and see expected costs rise noticeably for one age group.',
        withWhom: ['Pricing manager', 'Senior analyst'],
        tools: ['Excel', 'Assumptions log'],
        hardOrSurprising: 'Small changes in one assumption can move results more than months of new data.',
      },
      {
        time: '16:00',
        title: 'Writing up findings',
        whatYouDo: 'You draft a short note for the product manager explaining what changed in the expected cost and why.',
        withWhom: ['Senior analyst for review'],
        tools: ['Word', 'Charts from the model'],
        hardOrSurprising: 'Writing clearly for someone without a maths background is harder than the modelling.',
      },
      {
        time: '17:15',
        title: 'Peer review and log off',
        whatYouDo: 'A colleague checks your code and spreadsheet. You fix two small issues and save the final versions.',
        withWhom: ['Actuarial analyst'],
        tools: ['Version control', 'Review checklist'],
        hardOrSurprising: 'Everything is checked by someone else. It is a normal professional control, not a sign of distrust.',
      },
    ],
    decisions: [
      {
        id: 'actuarial-explain-change',
        time: '16:00',
        scenario:
          'After the assumption update, expected claim costs for drivers aged 21 to 25 rise by a large amount. The product manager, who has no actuarial background, needs to understand why before a pricing meeting tomorrow.',
        options: [
          { label: 'Send the full technical output with all model tables', outcome: 'The product manager cannot find the answer in the tables and asks for a meeting, which uses more of everyone\'s time.' },
          { label: 'Lead with the cause and the size of the change in plain words', outcome: 'The product manager understands the driver of the change and asks one follow-up question about timing.' },
          { label: 'Wait until the numbers are final before saying anything', outcome: 'The product manager hears about the change for the first time in the meeting and is caught off guard.' },
        ],
        colleagueView:
          'An experienced actuary would lead with the conclusion: costs for this group are expected to rise by about this much, mainly because repair costs are rising faster than assumed. Then one chart, then the caveats. The technical detail goes in an appendix for anyone who wants it. Giving an early heads-up, clearly labelled as preliminary, is usually better than a surprise.',
      },
    ],
  },
  campusDay: {
    setting: 'A Thursday in week 5 of term, second year',
    intro: 'Campus days are dominated by maths. Progress depends on regular practice more than attendance.',
    blocks: [
      {
        time: '09:00',
        title: 'Lecture: life contingencies',
        whatYouDo: 'A lecture deriving the formulas used to price a life annuity, with worked examples.',
        withWhom: ['About 150 students', 'Lecturer'],
        tools: ['Notebook', 'Lecture slides'],
        hardOrSurprising: 'Each lecture builds on the last. Falling behind for a week makes the next few hard to follow.',
      },
      {
        time: '11:00',
        title: 'Tutorial: statistical inference',
        whatYouDo: 'You work through problems in a small group, and the tutor goes through the ones most people got wrong.',
        withWhom: ['About 20 students', 'Tutor'],
        tools: ['Calculator', 'Problem set'],
        hardOrSurprising: 'Attempting the problems before the tutorial makes a big difference to how much you get from it.',
      },
      {
        time: '12:30',
        title: 'Lunch',
        whatYouDo: 'Lunch with your co-op cohort, comparing notes on which sponsors take students in which year.',
        withWhom: ['Co-op cohort'],
        tools: ['None'],
        hardOrSurprising: 'Older co-op students are a good source of advice on course choices and exams.',
      },
      {
        time: '13:30',
        title: 'Computer lab',
        whatYouDo: 'A lab session where you fit regression models in R and interpret the output.',
        withWhom: ['Lab demonstrator', 'Classmates'],
        tools: ['R', 'Lab computers or laptop'],
        hardOrSurprising: 'Debugging code takes longer than writing it at first.',
      },
      {
        time: '15:00',
        title: 'Group assignment meeting',
        whatYouDo: 'Your group reviews the data analysis for a pricing assignment and agrees on what goes in the report.',
        withWhom: ['Two classmates'],
        tools: ['Shared code', 'Shared document'],
        hardOrSurprising: 'Agreeing on the method early saves a lot of rework.',
      },
      {
        time: '16:30',
        title: 'Self-study',
        whatYouDo: 'Two hours on practice problems for next week\'s quiz.',
        withWhom: ['Working alone'],
        tools: ['Problem sets', 'Past papers'],
        hardOrSurprising: 'Most students need several hours of practice a week per course to keep up.',
      },
      {
        time: '18:30',
        title: 'Actuarial society event',
        whatYouDo: 'An evening panel where working actuaries talk about their first few years in the profession.',
        withWhom: ['Students', 'Working actuaries'],
        tools: ['None'],
        hardOrSurprising: 'Hearing about the variety of roles helps you choose placements.',
      },
    ],
  },
  coop: {
    placementLength: 'Placements are typically several months each, adding up to roughly a year or more in industry',
    numberOfPlacements: 'Usually two to three placements, often in different parts of the insurance and finance industry',
    employerTypes: ['General insurers', 'Life insurers', 'Actuarial consulting firms', 'Superannuation funds', 'Regulators'],
    exampleRoles: ['Actuarial analyst intern', 'Pricing intern', 'Reserving intern', 'Data science intern'],
  },
  employers: [
    { type: 'General insurer', whatYouMightDo: 'Clean claims data and re-run pricing models.' },
    { type: 'Life insurer', whatYouMightDo: 'Help project future cash flows for existing policies.' },
    { type: 'Actuarial consulting firm', whatYouMightDo: 'Support valuations for several clients at once.' },
    { type: 'Superannuation fund', whatYouMightDo: 'Model member outcomes under different investment options.' },
    { type: 'Prudential regulator', whatYouMightDo: 'Review data and results submitted by insurers.' },
    { type: 'Reinsurer', whatYouMightDo: 'Analyse large and unusual losses, such as natural disasters.' },
    { type: 'Bank risk team', whatYouMightDo: 'Help model expected credit losses on loans.' },
    { type: 'Health insurer', whatYouMightDo: 'Analyse claims trends for hospital and extras cover.' },
  ],
  tradeOffs: [
    {
      title: 'Very demanding maths',
      detail: 'The degree moves quickly through probability, statistics and financial maths. Students who did well at school maths can still find it hard, and a fail can delay progression through the sequence of courses.',
    },
    {
      title: 'A long path to full qualification',
      detail: 'The degree can give exemptions from early professional exams, but becoming a qualified actuary usually takes several more years of exams while working full time. Check the current accreditation details with the Actuaries Institute.',
    },
    {
      title: 'Placements are concentrated in a few industries',
      detail: 'Most placements are in insurance, super, consulting and banking. If you want variety across very different industries, other degrees offer more range.',
    },
  ],
  imageAlt: {
    hero: "A person looking at a line chart on a laptop screen",
    campus: "Students seated in rows listening to a presenter in a seminar room",
  },
  heroImage: {
    src: heroPhoto,
    width: 1000,
    height: 667,
    credit: {
      creator: "Unhindered by Talent",
      title: "Wrapping one's head around the data",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      sourceUrl: "https://www.flickr.com/photos/26406919@N00/2217375343",
    },
  },
  campusImage: {
    src: campusPhoto,
    width: 1000,
    height: 667,
    credit: {
      creator: "U.S. Embassy Dhaka",
      title: "EducationUSA Seminar: Student Visa Information",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
      sourceUrl: "https://www.flickr.com/photos/89616529@N03/8220432636",
    },
  },
  toVerify: [
    'Official program name, duration and whether honours is included',
    'Professional accreditation and exemption rules, including any minimum marks',
    'Major and co-major names, and which courses belong to each',
    'Course names for each year',
    'Number, length and timing of industry placements',
  ],
};

export default degree;
