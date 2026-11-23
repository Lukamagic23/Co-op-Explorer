import type { Degree } from '../schema';
import heroPhoto from '../../assets/photos/degrees/finance-and-banking-hero.jpg';
import campusPhoto from '../../assets/photos/degrees/finance-and-banking-campus.jpg';

/*
 * VERIFY BEFORE LAUNCH: program structure, course names, majors and placement
 * rules below are written to be plausible and generic. Check every item in
 * `toVerify` against the official UNSW Handbook and the Co-op Program team.
 */
const degree: Degree = {
  slug: 'finance-and-banking',
  name: 'Finance and Banking',
  faculty: 'UNSW Business School',
  duration: '4 years full time, including industry placements',
  summary: 'Learn how companies, banks and investors value assets, raise money and manage financial risk.',
  suits: [
    'You follow markets or business news and want to understand what drives prices',
    'You are careful with numbers and like building spreadsheets that hold up to scrutiny',
    'You are comfortable presenting a view and defending it to senior people',
  ],
  mightNotSuit: [
    'You want mostly people-facing work with little time in spreadsheets',
    'Long hours during busy periods, such as deal deadlines or reporting season, would wear you down',
  ],
  interests: ['numbers', 'markets', 'risk'],
  overview:
    'Finance and Banking covers how money is raised, invested and managed. You study corporate finance, valuation, financial markets, banking and risk, with a grounding in accounting and economics. Much of the practical work is building and checking financial models and explaining what they mean. Graduates commonly work in investment banking, corporate banking, funds management, corporate finance teams, regulators and advisory firms.',
  studyFocus: 'How assets are valued, how capital is raised and how financial institutions manage risk',
  workload: {
    level: 'High',
    note: 'Exam-heavy terms with problem sets each week. Placements in banking can include long days near deadlines.',
  },
  maths: { level: 'Heavy', note: 'Statistics and financial maths throughout, with some calculus in derivatives and fixed income courses.' },
  majorsHeading: 'Majors and specialisations',
  majors: [
    { id: 'corporate', name: 'Corporate finance', description: 'How companies decide what to invest in, how to fund it and how to value a business.' },
    { id: 'markets', name: 'Investments and markets', description: 'How securities are priced, how portfolios are built and how funds are managed.' },
    { id: 'banking', name: 'Banking and lending', description: 'How banks lend, price credit and manage their balance sheets.' },
    { id: 'risk', name: 'Financial risk', description: 'Measuring and managing market, credit and liquidity risk, and what regulators expect.' },
  ],
  years: [
    {
      year: 1,
      courses: [
        { name: 'Business Finance', description: 'Time value of money, interest rates and the basics of valuing a project.', majors: [] },
        { name: 'Accounting and Financial Management', description: 'Reading income statements, balance sheets and cash flow statements.', majors: [] },
        { name: 'Microeconomics', description: 'How firms and consumers make decisions and how markets set prices.', majors: [] },
        { name: 'Macroeconomics', description: 'Interest rates, inflation, central banks and the business cycle.', majors: ['markets', 'banking'] },
        { name: 'Quantitative Analysis for Business', description: 'Statistics for finance: distributions, regression and testing a claim with data.', majors: [] },
      ],
    },
    {
      year: 2,
      courses: [
        { name: 'Corporate Finance', description: 'Capital budgeting, cost of capital and how firms choose between debt and equity.', majors: ['corporate'] },
        { name: 'Investments and Portfolio Management', description: 'Risk and return, diversification and how fund managers build portfolios.', majors: ['markets'] },
        { name: 'Financial Institutions and Markets', description: 'How banks, super funds and exchanges fit together and how they are regulated.', majors: ['banking'] },
        { name: 'Financial Modelling', description: 'Building structured, checkable spreadsheet models for valuation and forecasting.', majors: ['corporate', 'markets'] },
        { name: 'Financial Accounting', description: 'How companies report their results and where judgement affects the numbers.', majors: ['corporate'] },
      ],
    },
    {
      year: 3,
      courses: [
        { name: 'Business Valuation', description: 'Valuing companies with discounted cash flow and comparable company methods.', majors: ['corporate'] },
        { name: 'Derivatives and Risk Management', description: 'Options, futures and swaps, and how firms use them to hedge.', majors: ['markets', 'risk'] },
        { name: 'Bank Lending and Credit Analysis', description: 'Assessing whether a borrower can repay and how to structure a loan.', majors: ['banking', 'risk'] },
        { name: 'Fixed Income Securities', description: 'How bonds are priced and how interest rate changes affect their value.', majors: ['markets'] },
      ],
    },
    {
      year: 4,
      courses: [
        { name: 'Mergers and Acquisitions', description: 'Why companies buy each other, how deals are structured and why many fail.', majors: ['corporate'] },
        { name: 'Bank Risk Management and Regulation', description: 'Capital and liquidity rules, stress testing and how banks report to regulators.', majors: ['banking', 'risk'] },
        { name: 'Applied Portfolio Management', description: 'Managing a simulated portfolio and explaining your decisions in writing.', majors: ['markets'] },
        { name: 'Finance Capstone', description: 'A team project analysing a real financial decision and presenting a recommendation.', majors: [] },
      ],
    },
  ],
  skills: [
    { name: 'Financial modelling', inPractice: 'Updating a three-statement model after a company reports results, and checking it still balances.' },
    { name: 'Reading financial statements', inPractice: 'Spotting that a jump in profit came from a one-off asset sale, not better trading.' },
    { name: 'Valuation', inPractice: 'Building a range of values for a business and explaining which assumptions move it most.' },
    { name: 'Concise writing', inPractice: 'Summarising a borrower\'s position on one page for a credit committee.' },
    { name: 'Attention to detail', inPractice: 'Finding the single hard-coded number that makes a model wrong before it reaches a client.' },
  ],
  placementDay: {
    setting: 'Month two of a six-month placement in the corporate banking team of a major bank',
    intro: 'You support relationship managers who lend to mid-sized companies. The day is shaped by deadlines set by senior people and by the market.',
    blocks: [
      {
        time: '08:00',
        title: 'Market and news review',
        whatYouDo: 'You read the overnight market wrap and news on the team\'s clients, and flag anything relevant to the analysts.',
        withWhom: ['Graduate analyst', 'Working mostly alone'],
        tools: ['Market data terminal', 'Financial news sites'],
        hardOrSurprising: 'You are expected to know which news actually matters to a client, not to summarise everything.',
      },
      {
        time: '09:00',
        title: 'Team check-in',
        whatYouDo: 'A quick meeting where the director runs through live deals and who is doing what this week.',
        withWhom: ['Director', 'Relationship managers', 'Analysts'],
        tools: ['Deal pipeline list'],
        hardOrSurprising: 'Priorities change quickly. A task that was urgent yesterday might be dropped today.',
      },
      {
        time: '09:30',
        title: 'Updating a financial model',
        whatYouDo: 'A client has released half-year results. You update the model with the new figures and check whether they still meet the conditions of their loan.',
        withWhom: ['Analyst who built the model'],
        tools: ['Excel', 'Company financial statements'],
        hardOrSurprising: 'Real company reports do not match textbook formats. Finding the right number takes longer than putting it in the model.',
      },
      {
        time: '12:00',
        title: 'Lunch',
        whatYouDo: 'A quick lunch at your desk, then a short coffee with a graduate who started on the same co-op program.',
        withWhom: ['Graduate analyst'],
        tools: ['None'],
        hardOrSurprising: 'Informal conversations are often where you hear about roles and teams you did not know existed.',
      },
      {
        time: '13:00',
        title: 'Drafting a credit summary',
        whatYouDo: 'You draft a section of a credit paper: the borrower\'s recent performance, key risks and how the loan would be repaid.',
        withWhom: ['Relationship manager', 'Credit analyst'],
        tools: ['Word template', 'Excel'],
        hardOrSurprising: 'Your writing gets heavily edited. That is normal, and the edits teach you what credit committees care about.',
      },
      {
        time: '15:00',
        title: 'Pitch materials',
        whatYouDo: 'You build two slides comparing a prospective client to its competitors on margins, debt levels and growth.',
        withWhom: ['Associate'],
        tools: ['PowerPoint', 'Market data terminal'],
        hardOrSurprising: 'Formatting standards are strict. Small inconsistencies in fonts or numbers get sent back.',
      },
      {
        time: '16:30',
        title: 'Number check with a senior',
        whatYouDo: 'You walk the associate through the model update and the slides before anything goes to the director.',
        withWhom: ['Associate'],
        tools: ['Excel', 'PowerPoint'],
        hardOrSurprising: 'You need to be able to explain where every number came from, quickly.',
      },
      {
        time: '18:00',
        title: 'Wrap up',
        whatYouDo: 'You make the agreed fixes, save versions clearly and send a short email listing what is done and what is still open.',
        withWhom: ['Working alone'],
        tools: ['Email', 'Shared drive'],
        hardOrSurprising: 'Finish times vary. Some days end at five, others run late when a deal is close.',
      },
    ],
    decisions: [
      {
        id: 'finance-too-good',
        time: '16:30',
        scenario:
          'After updating the model, the client\'s debt coverage looks much stronger than last year. It would make the credit paper easier to write, but the improvement seems too large.',
        options: [
          { label: 'Check the inputs yourself before saying anything', outcome: 'You find that one figure was annualised twice. It takes 20 minutes and you fix it before anyone relies on it.' },
          { label: 'Flag it straight away to the associate', outcome: 'The associate appreciates the flag but asks whether you checked the inputs first, then sends you back to do it.' },
          { label: 'Accept it, since the formulas did not change', outcome: 'The number goes into the draft. The credit analyst spots it the next day, and the paper has to be reissued.' },
        ],
        colleagueView:
          'An experienced analyst would spend a few minutes checking the obvious inputs first, then flag it whatever they find: "Coverage looks much stronger, I checked X and Y, I think the cause is Z." Results that look too good deserve more scrutiny, not less, and arriving with a likely cause saves a senior\'s time.',
      },
    ],
  },
  campusDay: {
    setting: 'A Wednesday in week 7 of term, third year',
    intro: 'Campus is more self-directed and the pace is set by assessments rather than clients.',
    blocks: [
      {
        time: '09:00',
        title: 'Lecture: business valuation',
        whatYouDo: 'A lecture working through a discounted cash flow valuation of a listed company.',
        withWhom: ['About 250 students', 'Lecturer'],
        tools: ['Laptop', 'Lecture slides'],
        hardOrSurprising: 'Lecturers move fast through the maths. Reviewing the recording is often necessary.',
      },
      {
        time: '11:00',
        title: 'Tutorial: derivatives problem set',
        whatYouDo: 'You work through option pricing problems with a tutor, and present one answer to the class.',
        withWhom: ['About 25 students', 'Tutor'],
        tools: ['Calculator', 'Problem set'],
        hardOrSurprising: 'Getting the right answer is not enough. You need to explain why the method works.',
      },
      {
        time: '12:30',
        title: 'Lunch',
        whatYouDo: 'Lunch with friends from your co-op cohort, comparing placement interviews.',
        withWhom: ['Co-op cohort'],
        tools: ['None'],
        hardOrSurprising: 'Hearing how others prepared for interviews is one of the most useful parts of the cohort.',
      },
      {
        time: '13:30',
        title: 'Group assignment meeting',
        whatYouDo: 'Your team reviews a company valuation draft. You disagree about the growth assumption and agree to test both.',
        withWhom: ['Three classmates'],
        tools: ['Excel', 'Shared document'],
        hardOrSurprising: 'There is no senior to settle disagreements. The group has to decide on its own.',
      },
      {
        time: '15:00',
        title: 'Self-study',
        whatYouDo: 'Two hours of practice exam questions on bond pricing.',
        withWhom: ['Working alone'],
        tools: ['Past papers', 'Calculator'],
        hardOrSurprising: 'Final exams often carry a large share of the mark, so consistent practice matters more than cramming.',
      },
      {
        time: '17:30',
        title: 'Student investment society',
        whatYouDo: 'A weekly meeting where students pitch stocks and the group votes on a simulated portfolio.',
        withWhom: ['Students from several degrees'],
        tools: ['Slides', 'Market data'],
        hardOrSurprising: 'Pitching to peers is good practice for being questioned by seniors on placement.',
      },
    ],
  },
  coop: {
    placementLength: 'Placements are typically several months each, adding up to roughly a year or more in industry',
    numberOfPlacements: 'Usually two to three placements, often across different types of financial firms',
    employerTypes: ['Banks', 'Investment banks', 'Fund managers', 'Regulators', 'Corporate finance teams'],
    exampleRoles: ['Corporate banking intern', 'Investment analyst intern', 'Treasury intern', 'Credit risk intern'],
  },
  employers: [
    { type: 'Major bank', whatYouMightDo: 'Update client models and draft parts of credit papers.' },
    { type: 'Investment bank', whatYouMightDo: 'Build comparison tables and slides for client pitches.' },
    { type: 'Fund manager', whatYouMightDo: 'Research listed companies and update investment notes.' },
    { type: 'Financial regulator', whatYouMightDo: 'Analyse data submitted by banks and insurers.' },
    { type: 'Superannuation fund', whatYouMightDo: 'Support portfolio reporting and performance analysis.' },
    { type: 'Listed company treasury', whatYouMightDo: 'Help forecast cash and manage currency exposure.' },
    { type: 'Advisory firm', whatYouMightDo: 'Support valuations for deals and restructures.' },
    { type: 'Insurer investment team', whatYouMightDo: 'Monitor bond holdings and interest rate risk.' },
  ],
  tradeOffs: [
    {
      title: 'Competitive recruitment',
      detail: 'Placements and graduate roles in banking and funds management attract many strong applicants. A co-op placement helps, but it does not guarantee a graduate offer.',
    },
    {
      title: 'Long hours in some roles',
      detail: 'Teams working on deals or market-facing roles can have long or unpredictable days, which can be hard to balance with study and other commitments.',
    },
    {
      title: 'Narrow if your interests change',
      detail: 'The degree is focused on finance. If you discover you prefer something else, switching can mean extra time to pick up the new core courses.',
    },
  ],
  imageAlt: {
    hero: "Inside a stock exchange, with share prices running across a curved ticker board",
    campus: "Students taking notes in a large lecture theatre",
  },
  heroImage: {
    src: heroPhoto,
    width: 1000,
    height: 750,
    credit: {
      creator: "ehnmark",
      title: "Placeholder",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/48600108001@N01/3970640849",
    },
  },
  campusImage: {
    src: campusPhoto,
    width: 1000,
    height: 680,
    credit: {
      creator: "liverpoolhls",
      title: "LT4",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/107733654@N04/10740083396",
    },
  },
  toVerify: [
    'Official program name: confirm whether Finance and Banking is a standalone co-op degree or a major within a broader co-op program',
    'Duration and whether honours is included',
    'Major and specialisation names, and which courses belong to each',
    'Course names for each year',
    'Number, length and timing of industry placements',
  ],
};

export default degree;
