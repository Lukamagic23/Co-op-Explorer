import type { Degree } from '../schema';
import campusPhoto from '../../assets/photos/degrees/business-information-systems-campus.jpg';
import ampLogo from '../../assets/logos/amp.png';
import boqLogo from '../../assets/logos/boq.png';
import elJannahLogo from '../../assets/logos/el-jannah.png';
import eyLogo from '../../assets/logos/ey.png';
import pwcLogo from '../../assets/logos/pwc.png';
import rbaLogo from '../../assets/logos/rba.png';
import westpacLogo from '../../assets/logos/westpac.png';
import heroPhoto from '../../assets/photos/bis-hero.jpg';

/*
 * VERIFY BEFORE LAUNCH: program structure, course names, majors and placement
 * rules below are written to be plausible and generic. Check every item in
 * `toVerify` against the official UNSW Handbook and the Co-op Program team.
 */
const degree: Degree = {
  slug: 'business-information-systems',
  name: 'Business Information Systems',
  faculty: 'UNSW Business School',
  duration: '4 years full time, including industry placements',
  summary: 'Learn how organisations run on data and software, and how to change those systems without breaking the business.',
  suits: [
    'You like working out why a process is slow or messy and how to fix it',
    'You are comfortable talking to people and turning vague requests into clear requirements',
    'You want technical skills (SQL, data modelling) without spending most of your time writing code',
  ],
  mightNotSuit: [
    'You want to build software full time; a software engineering or computer science degree goes deeper',
    'You dislike meetings, documentation or explaining things to non-technical people',
  ],
  interests: ['people', 'data', 'building'],
  overview:
    'Business Information Systems sits between business and technology. You learn how organisations capture, store and use information, how to analyse a business process, and how to design and deliver systems that improve it. Coursework mixes databases, systems analysis, project delivery and business fundamentals such as accounting and management. Graduates commonly work as business analysts, technology consultants, data analysts, product owners and project managers, in consulting firms, banks, government and technology companies.',
  studyFocus: 'How businesses run on information systems, and how to analyse, design and deliver changes to them',
  workload: {
    level: 'High',
    note: 'Steady load with many group projects. Peaks come from project deadlines rather than exams.',
  },
  maths: { level: 'Moderate', note: 'Business statistics and the logic of databases and programming. No advanced calculus.' },
  majorsHeading: 'Majors and streams',
  majors: [
    { id: 'analysis', name: 'Business analysis', description: 'Eliciting requirements, modelling processes and specifying what a system needs to do.' },
    { id: 'data', name: 'Data and analytics', description: 'Designing databases, querying data and building reports that people actually use to make decisions.' },
    { id: 'delivery', name: 'Technology delivery', description: 'Running projects, managing scope and change, and getting systems into production safely.' },
    { id: 'security', name: 'Information security', description: 'Protecting systems and data, managing access and responding to risks and incidents.' },
  ],
  years: [
    {
      year: 1,
      courses: [
        { name: 'Introduction to Information Systems', description: 'What information systems are, how businesses use them and why many projects fail.', majors: [] },
        { name: 'Business Programming', description: 'Writing small programs in Python to automate tasks and work with data files.', majors: ['data'] },
        { name: 'Accounting and Financial Management', description: 'Reading financial statements and understanding how money moves through a business.', majors: [] },
        { name: 'Quantitative Analysis for Business', description: 'Statistics for business decisions: sampling, regression and interpreting results.', majors: ['data'] },
        { name: 'Management and Organisations', description: 'How organisations are structured, how decisions get made and why change is hard.', majors: ['delivery'] },
      ],
    },
    {
      year: 2,
      courses: [
        { name: 'Database Design and Management', description: 'Modelling data, designing relational databases and writing SQL queries.', majors: ['data'] },
        { name: 'Business Process Modelling', description: 'Mapping how work flows through an organisation and finding where it breaks.', majors: ['analysis'] },
        { name: 'Systems Analysis and Design', description: 'Gathering requirements, writing user stories and designing a system end to end.', majors: ['analysis'] },
        { name: 'Information Systems Security', description: 'Common threats, access control and how organisations manage security risk.', majors: ['security'] },
        { name: 'Business Analytics and Reporting', description: 'Building dashboards and reports, and choosing measures that answer real questions.', majors: ['data'] },
      ],
    },
    {
      year: 3,
      courses: [
        { name: 'IT Project Management', description: 'Planning, estimating, tracking and recovering technology projects.', majors: ['delivery'] },
        { name: 'Enterprise Systems', description: 'How large integrated systems such as ERP and CRM platforms are configured and rolled out.', majors: ['delivery', 'analysis'] },
        { name: 'Data Management and Governance', description: 'Data quality, ownership, privacy obligations and keeping data trustworthy.', majors: ['data', 'security'] },
        { name: 'Cyber Security Risk Management', description: 'Assessing security risks and deciding which controls are worth the cost.', majors: ['security'] },
      ],
    },
    {
      year: 4,
      courses: [
        { name: 'Information Systems Capstone Project', description: 'A semester-long team project delivering a working solution for a real client.', majors: [] },
        { name: 'Digital Transformation Strategy', description: 'How organisations decide which technology changes to fund and how to measure success.', majors: ['delivery'] },
        { name: 'Advanced Business Analysis', description: 'Handling conflicting stakeholders, complex requirements and large-scale change.', majors: ['analysis'] },
        { name: 'Applied Data Analytics', description: 'Using predictive models on business data and explaining their limits.', majors: ['data'] },
      ],
    },
  ],
  skills: [
    { name: 'Requirements gathering', inPractice: 'Running a workshop with a finance team and turning their complaints into ten testable user stories.' },
    { name: 'Process mapping', inPractice: 'Drawing the current approval process so everyone can see the three handoffs that cause delays.' },
    { name: 'SQL', inPractice: 'Pulling a month of transaction data to check whether a reported problem is real and how big it is.' },
    { name: 'Writing for different readers', inPractice: 'Summarising a technical change in five lines for a manager who will approve the budget.' },
    { name: 'Managing scope', inPractice: 'Saying what will and will not be in the next release, and why, without damaging the relationship.' },
  ],
  placementDay: {
    setting: 'Month four of a six-month placement in the technology team of a large bank',
    intro: 'You are a junior business analyst on a team replacing an old loan-approval workflow. Most of the day is talking to people and writing things down precisely.',
    blocks: [
      {
        time: '09:00',
        title: 'Team stand-up',
        whatYouDo: 'Fifteen minutes with the delivery team. You say what you finished yesterday, what you are doing today and that you are waiting on an answer from the credit team.',
        withWhom: ['Product owner', 'Developers', 'Tester', 'Scrum master'],
        tools: ['Jira board'],
        hardOrSurprising: 'Keeping your update short and specific. Saying "still working on requirements" is not useful to anyone.',
      },
      {
        time: '09:30',
        title: 'Requirements workshop',
        whatYouDo: 'You run part of a workshop with three loan assessors, asking how they handle applications that do not fit the standard rules. You take notes and check your understanding back with them.',
        withWhom: ['Loan assessors', 'Senior business analyst'],
        tools: ['Whiteboard', 'Shared notes document'],
        hardOrSurprising: 'People describe what they think they do, which is often different from what actually happens. The useful detail comes from asking for a specific recent example.',
      },
      {
        time: '11:00',
        title: 'Process mapping',
        whatYouDo: 'You turn the workshop notes into a current-state process diagram showing each step, who does it, and where applications wait.',
        withWhom: ['Working alone, then a quick review with your senior BA'],
        tools: ['Process diagramming tool'],
        hardOrSurprising: 'Deciding how much detail to include. Too little hides the problem; too much and nobody reads it.',
      },
      {
        time: '12:30',
        title: 'Lunch',
        whatYouDo: 'Lunch with two other co-op students on placement in different teams at the same bank.',
        withWhom: ['Other placement students'],
        tools: ['None'],
        hardOrSurprising: 'Comparing notes is useful: you often learn more about how the organisation works from other teams than from your own.',
      },
      {
        time: '13:30',
        title: 'Writing user stories',
        whatYouDo: 'You write four user stories with acceptance criteria for the exception-handling step, then add them to the backlog for the product owner to prioritise.',
        withWhom: ['Product owner', 'Developer for a sense check'],
        tools: ['Jira', 'Wireframing tool'],
        hardOrSurprising: 'A developer points out that one story depends on data the old system does not store. You need to rewrite it or find the data.',
      },
      {
        time: '15:00',
        title: 'Data query',
        whatYouDo: 'You write a SQL query to count how many applications went to manual review last quarter, so the team can size the problem before committing to a fix.',
        withWhom: ['Data analyst who granted access and checked your query'],
        tools: ['SQL client', 'Spreadsheet'],
        hardOrSurprising: 'The first number looks wrong because the table includes test records. Knowing the data is as important as knowing SQL.',
      },
      {
        time: '16:15',
        title: 'Scope check with the product owner',
        whatYouDo: 'You walk the product owner through the new stories and the data. The credit team has asked for an extra feature.',
        withWhom: ['Product owner', 'Credit team lead (by message)'],
        tools: ['Jira', 'Slide with the numbers'],
        hardOrSurprising: 'You are expected to have a view, not only to pass the request along.',
      },
      {
        time: '17:00',
        title: 'Handover note',
        whatYouDo: 'You write a short note on what changed today and what is blocked, so the team in the morning and your manager can pick it up.',
        withWhom: ['Working alone'],
        tools: ['Team wiki'],
        hardOrSurprising: 'Clear written updates are a large part of how you are judged on placement.',
      },
    ],
    decisions: [
      {
        id: 'bis-scope-change',
        time: '16:15',
        scenario:
          'The credit team lead messages asking to add a new approval rule to the current release. The release is two weeks away and the developers are already at capacity. The product owner asks what you think.',
        options: [
          { label: 'Push back and keep it out of this release', outcome: 'The release stays on track, but the credit team feels unheard unless you explain when their request will be handled.' },
          { label: 'Absorb it and ask the developers to fit it in', outcome: 'The team agrees under pressure, testing gets squeezed and the release slips by a week.' },
          { label: 'Re-plan: size it first, then offer a trade', outcome: 'You get a rough estimate, and the product owner offers to swap it for a lower-value story. The credit team chooses.' },
        ],
        colleagueView:
          'An experienced analyst would rarely say yes or no on the spot. They would find out why the rule matters now, get a rough size from a developer, and give the product owner a clear trade: include this, drop that. The decision belongs to the product owner; your job is to make the cost visible.',
      },
    ],
  },
  campusDay: {
    setting: 'A Tuesday in week 6 of term, second year',
    intro: 'Campus days are less structured. Nobody checks on you between classes, so the self-study blocks are where marks are won or lost.',
    blocks: [
      {
        time: '09:00',
        title: 'Lecture: database design',
        whatYouDo: 'A two-hour lecture on normalising data. You follow along by sketching the example tables.',
        withWhom: ['About 300 students', 'Lecturer'],
        tools: ['Laptop', 'Lecture slides'],
        hardOrSurprising: 'It looks simple in the lecture. It only becomes hard when you try the tutorial questions alone.',
      },
      {
        time: '11:00',
        title: 'Tutorial: SQL practice',
        whatYouDo: 'A small class where you write queries against a sample database and the tutor goes through common mistakes.',
        withWhom: ['About 20 students', 'Tutor'],
        tools: ['SQL client'],
        hardOrSurprising: 'Participation can count towards your mark, so turning up unprepared is visible.',
      },
      {
        time: '12:30',
        title: 'Lunch and co-op cohort catch-up',
        whatYouDo: 'Lunch with other co-op scholars from your year, some in different degrees.',
        withWhom: ['Co-op cohort'],
        tools: ['None'],
        hardOrSurprising: 'The cohort is small, so you see the same people across years. That helps when you need advice about placements.',
      },
      {
        time: '13:30',
        title: 'Group assignment meeting',
        whatYouDo: 'Your team of four meets to split up a systems analysis report. You agree who writes which section and set an internal deadline.',
        withWhom: ['Three classmates'],
        tools: ['Shared document', 'Group chat'],
        hardOrSurprising: 'Unlike placement, nobody is in charge. Someone has to step up and coordinate, and it often falls to whoever cares most about the mark.',
      },
      {
        time: '15:00',
        title: 'Self-study',
        whatYouDo: 'Two hours in the library working through this week\'s readings and starting your section of the report.',
        withWhom: ['Working alone'],
        tools: ['Laptop', 'Library databases'],
        hardOrSurprising: 'There is no manager asking for an update. Planning your own week is a skill in itself.',
      },
      {
        time: '17:30',
        title: 'Society event',
        whatYouDo: 'A case competition workshop run by a student business society, practising how to structure a recommendation.',
        withWhom: ['Students from several degrees', 'A graduate from a consulting firm'],
        tools: ['Pen and paper'],
        hardOrSurprising: 'These events are optional, but they are where many students build the confidence to speak up on placement.',
      },
    ],
  },
  coop: {
    placementLength: 'Placements are typically several months each, adding up to roughly a year or more in industry',
    numberOfPlacements: 'Usually two to three placements, often with different sponsors',
    employerTypes: ['Banks and insurers', 'Consulting firms', 'Government agencies', 'Technology companies'],
    exampleRoles: ['Business analyst intern', 'Technology consulting intern', 'Data analyst intern', 'Project support analyst'],
  },
  employers: [
    { name: 'Westpac', logo: westpacLogo, type: 'Major bank', whatYouMightDo: 'Write requirements for changes to lending or payments systems.' },
    { name: 'Bank of Queensland', logo: boqLogo, type: 'Regional bank', whatYouMightDo: 'Help map and improve the processes behind lending and everyday banking.' },
    { name: 'AMP', logo: ampLogo, type: 'Wealth and superannuation', whatYouMightDo: 'Map processes in wealth and super operations and find where they slow down.' },
    { name: 'Reserve Bank of Australia', logo: rbaLogo, type: 'Central bank', whatYouMightDo: 'Support data and technology projects behind the bank\'s systems.' },
    { name: 'PwC', logo: pwcLogo, type: 'Professional services', whatYouMightDo: 'Help consulting teams map client processes and draft recommendations.' },
    { name: 'EY', logo: eyLogo, type: 'Professional services', whatYouMightDo: 'Support technology consulting or technology risk work for clients.' },
    { name: 'El Jannah', logo: elJannahLogo, type: 'Restaurant chain', whatYouMightDo: 'Improve the ordering, point-of-sale and store data systems behind a growing chain.' },
  ],
  tradeOffs: [
    {
      title: 'Less technical depth than engineering or computer science',
      detail: 'You learn enough to work closely with developers and data engineers, but if you later want to be a software engineer you will likely need to build those skills separately.',
    },
    {
      title: 'Lots of group work and communication',
      detail: 'Much of the assessment is in teams and much of the job is meetings and writing. If you prefer working alone on hard problems, this can be draining.',
    },
    {
      title: 'Placements make the calendar busier',
      detail: 'Fitting placements into a four-year degree means fewer long breaks, and less flexibility to take electives or go on exchange.',
    },
  ],
  imageAlt: {
    hero: 'A lecturer at a chalkboard calling on students with their hands raised',
    campus: "Two students working together at a laptop",
  },
  heroImage: { src: heroPhoto, width: 828, height: 784 },
  campusImage: {
    src: campusPhoto,
    width: 1000,
    height: 667,
    credit: {
      creator: "COD Newsroom",
      title: "Campus Fall 2013 57",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/41431665@N07/9661919079",
    },
  },
  toVerify: [
    'Official program name, duration and whether honours is included',
    'Major and stream names, and which courses belong to each',
    'Course names for each year',
    'Number, length and timing of industry placements',
    'Employers in the grid are potential sponsors: confirm sponsorship and permission to display their logos',
  ],
};

export default degree;
