import type { Degree } from '../schema';
import heroPhoto from '../../assets/photos/degrees/data-science-and-decisions-hero.jpg';
import campusPhoto from '../../assets/photos/degrees/data-science-and-decisions-campus.jpg';

/*
 * VERIFY BEFORE LAUNCH: program structure, course names, majors and placement
 * rules below are written to be plausible and generic. Check every item in
 * `toVerify` against the official UNSW Handbook and the Co-op Program team.
 */
const degree: Degree = {
  slug: 'data-science-and-decisions',
  name: 'Data Science and Decisions',
  faculty: 'UNSW Science',
  duration: '4 years full time, including industry placements',
  summary: 'Combine statistics, computing and economics to turn data into decisions that people and organisations can act on.',
  suits: [
    'You like maths and coding and want to apply them to real questions about people and businesses',
    'You are curious about why people make the choices they do',
    'You want to explain results, not just compute them',
  ],
  mightNotSuit: [
    'You want to build large software systems; computer science or software engineering goes deeper',
    'You dislike statistics; it is the core of the degree',
  ],
  interests: ['data', 'numbers', 'risk'],
  overview:
    'Data Science and Decisions brings together three areas: statistics, computer science and decision-making from economics and behavioural science. You learn to collect, clean and analyse data, build predictive models, design experiments and understand how people and organisations actually make decisions. The aim is not just accurate models, but good decisions. Graduates work as data scientists, analysts, consultants and product analysts in technology, banking, retail, government and consulting.',
  studyFocus: 'Statistics, programming and decision science, used to turn data into better decisions',
  workload: {
    level: 'High',
    note: 'Regular coding assignments and problem sets, group projects with real data and a capstone in final year.',
  },
  maths: { level: 'Heavy', note: 'Calculus, linear algebra, probability and statistics throughout.' },
  majorsHeading: 'Streams',
  majors: [
    { id: 'stats', name: 'Statistics', description: 'Inference, modelling and learning from data.' },
    { id: 'computing', name: 'Computing', description: 'Programming, databases and machine learning systems.' },
    { id: 'econ', name: 'Decision economics', description: 'How incentives, markets and costs shape decisions.' },
    { id: 'behaviour', name: 'Behavioural decision science', description: 'How real people make choices, and how to test that.' },
  ],
  years: [
    {
      year: 1,
      courses: [
        { name: 'Mathematics 1A', description: 'Calculus and linear algebra.', majors: [] },
        { name: 'Mathematics 1B', description: 'Further calculus and linear algebra.', majors: [] },
        { name: 'Programming Fundamentals', description: 'Writing programs and thinking algorithmically.', majors: ['computing'] },
        { name: 'Microeconomics', description: 'How people and firms make decisions with limited resources.', majors: ['econ'] },
        { name: 'Introduction to Data Science', description: 'The full data science process from question to communication.', majors: [] },
      ],
    },
    {
      year: 2,
      courses: [
        { name: 'Probability and Statistics', description: 'Distributions, estimation and hypothesis testing.', majors: ['stats'] },
        { name: 'Data Structures and Algorithms', description: 'Organising and processing data efficiently.', majors: ['computing'] },
        { name: 'Linear Models', description: 'Regression and how to check whether a model is reasonable.', majors: ['stats'] },
        { name: 'Behavioural Economics', description: 'Why people do not always act as simple models predict.', majors: ['behaviour', 'econ'] },
        { name: 'Database Systems', description: 'Designing and querying databases.', majors: ['computing'] },
      ],
    },
    {
      year: 3,
      courses: [
        { name: 'Machine Learning', description: 'Building and evaluating predictive models.', majors: ['computing', 'stats'] },
        { name: 'Statistical Learning and Inference', description: 'Modern statistical methods and their limitations.', majors: ['stats'] },
        { name: 'Decision Analysis', description: 'Structuring decisions under uncertainty.', majors: ['econ', 'behaviour'] },
        { name: 'Experimental Design and A/B Testing', description: 'Designing experiments and analysing results fairly.', majors: ['behaviour', 'stats'] },
      ],
    },
    {
      year: 4,
      courses: [
        { name: 'Data Science Capstone', description: 'A team project with real data and a real client.', majors: [] },
        { name: 'Causal Inference', description: 'Estimating cause and effect when experiments are not possible.', majors: ['stats', 'econ'] },
        { name: 'Optimisation for Decisions', description: 'Finding the best choice under constraints.', majors: ['econ', 'computing'] },
        { name: 'Ethics and Privacy in Data', description: 'Using data responsibly and lawfully.', majors: [] },
      ],
    },
  ],
  skills: [
    { name: 'Data cleaning', inPractice: 'Finding that duplicate customer records were inflating churn rates.' },
    { name: 'Predictive modelling', inPractice: 'Building a model that ranks customers by likelihood of leaving.' },
    { name: 'Experiment design', inPractice: 'Setting up an A/B test so the result can be trusted.' },
    { name: 'SQL and Python', inPractice: 'Pulling and joining data from several systems for an analysis.' },
    { name: 'Communicating uncertainty', inPractice: 'Explaining that a result is promising but not yet conclusive.' },
  ],
  placementDay: {
    setting: 'Month four of a six-month placement in the analytics team of a telecommunications company',
    intro: 'You work on a model to predict which customers are likely to leave, and support a marketing experiment.',
    blocks: [
      {
        time: '09:00',
        title: 'Stand-up',
        whatYouDo: 'The analytics team shares progress and blockers.',
        withWhom: ['Data scientists', 'Analytics manager'],
        tools: ['Task board'],
        hardOrSurprising: 'Projects often change based on what the business needs this week.',
      },
      {
        time: '09:30',
        title: 'Data extraction and cleaning',
        whatYouDo: 'You pull customer and usage data and fix inconsistencies before modelling.',
        withWhom: ['Data engineer'],
        tools: ['SQL', 'Python'],
        hardOrSurprising: 'Most of the time goes into understanding and cleaning data.',
      },
      {
        time: '11:00',
        title: 'Feature engineering',
        whatYouDo: 'You create new variables, such as recent changes in usage, and test whether they help predictions.',
        withWhom: ['Working alone'],
        tools: ['Python', 'Notebook environment'],
        hardOrSurprising: 'Good features come from understanding the business, not just trying everything.',
      },
      {
        time: '12:30',
        title: 'Lunch',
        whatYouDo: 'Lunch with other interns and graduates.',
        withWhom: ['Interns and graduates'],
        tools: ['None'],
        hardOrSurprising: 'Hearing how other teams use data broadens your view.',
      },
      {
        time: '13:30',
        title: 'A/B test results meeting',
        whatYouDo: 'You present results from an email campaign experiment to the marketing team.',
        withWhom: ['Marketing manager', 'Senior data scientist'],
        tools: ['Slides', 'Statistical analysis'],
        hardOrSurprising: 'Stakeholders want a clear answer. Statistics often gives a more nuanced one.',
      },
      {
        time: '15:00',
        title: 'Model evaluation',
        whatYouDo: 'You compare model performance and check whether it works fairly across customer groups.',
        withWhom: ['Senior data scientist'],
        tools: ['Python', 'Evaluation metrics'],
        hardOrSurprising: 'A model can be accurate overall but unreliable for some groups.',
      },
      {
        time: '16:30',
        title: 'Dashboard update and notes',
        whatYouDo: 'You update a dashboard and document your work so others can reproduce it.',
        withWhom: ['Working alone'],
        tools: ['Dashboard tool', 'Version control'],
        hardOrSurprising: 'Reproducible work is valued as highly as clever modelling.',
      },
    ],
    decisions: [
      {
        id: 'dsd-ab-test',
        time: '13:30',
        scenario:
          'The A/B test shows the new email increased sign-ups, but the result is not statistically significant yet. The marketing manager wants to declare it a win and roll it out.',
        options: [
          { label: 'Agree it worked so the team can move on', outcome: 'The rollout happens. Later data shows no real effect, and trust in analytics drops.' },
          { label: 'Explain the uncertainty and suggest running the test longer', outcome: 'The manager agrees to two more weeks and gets a clearer answer.' },
          { label: 'Say the test failed', outcome: 'This overstates the evidence in the other direction, and a possibly useful idea is dropped.' },
        ],
        colleagueView:
          'An experienced data scientist would explain what the data shows and what it does not: the effect looks positive but could be chance. They would suggest options, such as running longer or rolling out with monitoring, and help the manager choose based on the cost of being wrong.',
      },
    ],
  },
  campusDay: {
    setting: 'A Wednesday in week 7 of term, second year',
    intro: 'Campus days mix statistics, coding and economics, with plenty of time spent at a laptop.',
    blocks: [
      {
        time: '09:00',
        title: 'Lecture: linear models',
        whatYouDo: 'A lecture on checking regression assumptions with real examples.',
        withWhom: ['About 150 students', 'Lecturer'],
        tools: ['Lecture slides', 'Laptop'],
        hardOrSurprising: 'Statistics is more about judgement than many students expect.',
      },
      {
        time: '11:00',
        title: 'Computer lab',
        whatYouDo: 'You analyse a real dataset in Python and interpret the output.',
        withWhom: ['About 30 students', 'Lab tutor'],
        tools: ['Python', 'Notebook environment'],
        hardOrSurprising: 'Debugging code can take longer than the analysis.',
      },
      {
        time: '13:00',
        title: 'Lunch',
        whatYouDo: 'Lunch with your co-op cohort.',
        withWhom: ['Co-op cohort'],
        tools: ['None'],
        hardOrSurprising: 'Many friends are in business degrees and ask about data projects.',
      },
      {
        time: '14:00',
        title: 'Behavioural economics tutorial',
        whatYouDo: 'You discuss experiments showing how small changes in choices affect behaviour.',
        withWhom: ['About 25 students', 'Tutor'],
        tools: ['Readings'],
        hardOrSurprising: 'This area connects data to how people really behave.',
      },
      {
        time: '15:30',
        title: 'Group project meeting',
        whatYouDo: 'Your team decides how to model public transport usage for a group assignment.',
        withWhom: ['Three classmates'],
        tools: ['Shared notebook', 'Group chat'],
        hardOrSurprising: 'Agreeing on the question is harder than choosing the model.',
      },
      {
        time: '18:00',
        title: 'Datathon',
        whatYouDo: 'A student society datathon where teams analyse a dataset under time pressure.',
        withWhom: ['Students from several degrees'],
        tools: ['Laptop', 'Python'],
        hardOrSurprising: 'Fast, practical analysis is a different skill from careful coursework.',
      },
    ],
  },
  coop: {
    placementLength: 'Placements are typically several months each, adding up to roughly a year or more in industry',
    numberOfPlacements: 'Usually two to three placements, often across different industries',
    employerTypes: ['Technology companies', 'Banks and insurers', 'Retailers', 'Government agencies', 'Consulting firms'],
    exampleRoles: ['Data science intern', 'Data analyst intern', 'Decision science intern', 'Product analytics intern'],
  },
  employers: [
    { type: 'Telecommunications company', whatYouMightDo: 'Build models to predict customer behaviour.' },
    { type: 'Major bank', whatYouMightDo: 'Analyse transactions to support risk or product decisions.' },
    { type: 'Retailer', whatYouMightDo: 'Forecast demand and analyse promotions.' },
    { type: 'Government agency', whatYouMightDo: 'Evaluate programs and policies using data.' },
    { type: 'Technology company', whatYouMightDo: 'Run experiments and analyse product usage.' },
    { type: 'Consulting firm', whatYouMightDo: 'Help clients use data to improve decisions.' },
    { type: 'Insurer', whatYouMightDo: 'Model claims and customer retention.' },
    { type: 'Health organisation', whatYouMightDo: 'Analyse service usage and outcomes.' },
  ],
  tradeOffs: [
    {
      title: 'A crowded job market',
      detail: 'Many graduates from different degrees apply for data roles. You need to show practical projects and communication skills.',
    },
    {
      title: 'Breadth over depth',
      detail: 'Covering statistics, computing and economics means less depth in each than a specialist degree.',
    },
    {
      title: 'Fast-changing tools',
      detail: 'Data tools and methods change quickly. You will keep learning new ones throughout your career.',
    },
  ],
  imageAlt: {
    hero: "A large live dashboard showing website usage figures",
    campus: "A student writing code on a laptop at a hackathon",
  },
  heroImage: {
    src: heroPhoto,
    width: 1000,
    height: 750,
    credit: {
      creator: "psd",
      title: "19,565",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/45581782@N00/8756580339",
    },
  },
  campusImage: {
    src: campusPhoto,
    width: 1000,
    height: 667,
    credit: {
      creator: "hackNY",
      title: "Fall 2011 Student Hackathon Coding",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      sourceUrl: "https://www.flickr.com/photos/61623410@N08/6203285138",
    },
  },
  toVerify: [
    'Official program name, and whether it is offered as a co-op program',
    'Duration and whether honours is included',
    'Stream names, and which courses belong to each',
    'Course names for each year',
    'Number, length and timing of industry placements',
  ],
};

export default degree;
