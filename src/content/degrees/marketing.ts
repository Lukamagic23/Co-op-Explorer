import type { Degree } from '../schema';
import heroPhoto from '../../assets/photos/degrees/marketing-hero.jpg';
import campusPhoto from '../../assets/photos/degrees/marketing-campus.jpg';

/*
 * VERIFY BEFORE LAUNCH: program structure, course names, majors and placement
 * rules below are written to be plausible and generic. Check every item in
 * `toVerify` against the official UNSW Handbook and the Co-op Program team.
 */
const degree: Degree = {
  slug: 'marketing',
  name: 'Marketing',
  faculty: 'UNSW Business School',
  duration: '4 years full time, including industry placements',
  summary: 'Understand why people choose what they buy, and use research, data and creative work to build brands and grow products.',
  suits: [
    'You are curious about people, culture and why some brands work and others do not',
    'You like both creative ideas and checking whether they worked',
    'You are comfortable presenting and persuading',
  ],
  mightNotSuit: [
    'You want mostly technical or quantitative work with little people contact',
    'You would find frequent feedback and changing priorities frustrating',
  ],
  interests: ['people', 'creativity', 'data'],
  overview:
    'Marketing is the study of customers and how organisations create, communicate and deliver value to them. You learn consumer behaviour, market research, branding, digital marketing and analytics, alongside business foundations such as accounting and economics. Modern marketing is increasingly data-driven, so you will spend time on dashboards and experiments as well as campaigns and creative briefs. Graduates work in brand management, digital marketing, insights and research, product marketing, media and agencies.',
  studyFocus: 'Consumer behaviour, research, branding and digital marketing analytics',
  workload: {
    level: 'Moderate',
    note: 'Regular group projects, case studies and presentations, with fewer exams than quantitative degrees.',
  },
  maths: { level: 'Light', note: 'Business statistics and spreadsheet analysis. No advanced calculus.' },
  majorsHeading: 'Majors and focus areas',
  majors: [
    { id: 'consumer', name: 'Consumer insights', description: 'Researching what customers think, feel and do.' },
    { id: 'digital', name: 'Digital marketing and analytics', description: 'Online channels, data and measuring what works.' },
    { id: 'brand', name: 'Brand management', description: 'Building and protecting brands over time.' },
    { id: 'strategy', name: 'Marketing strategy', description: 'Choosing markets, products and positioning.' },
  ],
  years: [
    {
      year: 1,
      courses: [
        { name: 'Marketing Fundamentals', description: 'The core ideas of marketing and how they fit into a business.', majors: [] },
        { name: 'Accounting and Financial Management', description: 'Reading financial statements and understanding profitability.', majors: [] },
        { name: 'Microeconomics', description: 'How consumers and firms make decisions.', majors: [] },
        { name: 'Quantitative Analysis for Business', description: 'Statistics for business decisions.', majors: ['digital'] },
        { name: 'Management and Organisations', description: 'How organisations work and make decisions.', majors: [] },
      ],
    },
    {
      year: 2,
      courses: [
        { name: 'Consumer Behaviour', description: 'The psychology behind what people buy and why.', majors: ['consumer'] },
        { name: 'Marketing Research', description: 'Designing surveys and interviews and analysing results.', majors: ['consumer', 'digital'] },
        { name: 'Brand Management', description: 'How brands are built, measured and managed.', majors: ['brand'] },
        { name: 'Digital Marketing', description: 'Search, social and email marketing, and how to measure them.', majors: ['digital'] },
        { name: 'Marketing Communications', description: 'Planning campaigns across media.', majors: ['brand'] },
      ],
    },
    {
      year: 3,
      courses: [
        { name: 'Marketing Analytics', description: 'Using data to evaluate campaigns and customer value.', majors: ['digital'] },
        { name: 'Services Marketing', description: 'Marketing experiences rather than products.', majors: ['consumer'] },
        { name: 'Product Innovation', description: 'Developing and launching new products.', majors: ['strategy'] },
        { name: 'Retail and Channel Management', description: 'How products reach customers through stores and online.', majors: ['strategy'] },
      ],
    },
    {
      year: 4,
      courses: [
        { name: 'Marketing Strategy', description: 'Bringing everything together into strategic decisions.', majors: ['strategy'] },
        { name: 'Global Marketing', description: 'Adapting brands and campaigns for different markets.', majors: ['strategy', 'brand'] },
        { name: 'Social Media and Content Marketing', description: 'Creating and measuring content across platforms.', majors: ['digital', 'brand'] },
        { name: 'Marketing Capstone', description: 'A team project for a real client.', majors: [] },
      ],
    },
  ],
  skills: [
    { name: 'Consumer research', inPractice: 'Running interviews that uncover why customers are switching to a competitor.' },
    { name: 'Campaign analysis', inPractice: 'Showing which channel actually drove sales, not just clicks.' },
    { name: 'Writing a brief', inPractice: 'Writing a creative brief that gives an agency a clear problem to solve.' },
    { name: 'Presenting', inPractice: 'Presenting campaign results to senior managers in five minutes.' },
    { name: 'Working with data', inPractice: 'Building a dashboard that tracks brand health over time.' },
  ],
  placementDay: {
    setting: 'Month three of a six-month placement in the brand team of a consumer goods company',
    intro: 'You support a brand manager running a campaign for a snack product. The day moves between data, agencies and internal teams.',
    blocks: [
      {
        time: '09:00',
        title: 'Team work-in-progress meeting',
        whatYouDo: 'The brand team reviews campaigns, product launches and deadlines.',
        withWhom: ['Brand manager', 'Assistant brand managers'],
        tools: ['Project tracker'],
        hardOrSurprising: 'Marketing teams juggle many projects at once.',
      },
      {
        time: '09:30',
        title: 'Campaign performance review',
        whatYouDo: 'You review digital campaign results and compare them with sales data.',
        withWhom: ['Working alone', 'Insights analyst'],
        tools: ['Campaign dashboard', 'Excel'],
        hardOrSurprising: 'High engagement does not always mean higher sales.',
      },
      {
        time: '11:00',
        title: 'Agency briefing',
        whatYouDo: 'You join a briefing with the creative agency about the next campaign.',
        withWhom: ['Brand manager', 'Agency team'],
        tools: ['Creative brief', 'Slides'],
        hardOrSurprising: 'A clear brief makes or breaks the creative work.',
      },
      {
        time: '12:30',
        title: 'Lunch',
        whatYouDo: 'Lunch with other interns.',
        withWhom: ['Interns'],
        tools: ['None'],
        hardOrSurprising: 'Interns from finance and sales give you a fuller picture of the company.',
      },
      {
        time: '13:30',
        title: 'Consumer research',
        whatYouDo: 'You observe customer interviews and note recurring themes.',
        withWhom: ['Insights manager', 'Research agency'],
        tools: ['Interview guide', 'Notes'],
        hardOrSurprising: 'Customers often explain their choices differently from what they actually do.',
      },
      {
        time: '15:00',
        title: 'Feedback on creative',
        whatYouDo: 'You review draft ads and prepare comments for the agency.',
        withWhom: ['Brand manager'],
        tools: ['Creative drafts', 'Brand guidelines'],
        hardOrSurprising: 'Feedback must be specific and linked to the brief, not personal taste.',
      },
      {
        time: '16:30',
        title: 'Sales data check-in',
        whatYouDo: 'You meet the category manager to discuss how the product is selling in stores.',
        withWhom: ['Category manager'],
        tools: ['Sales report'],
        hardOrSurprising: 'Marketing decisions depend on retail relationships and shelf space.',
      },
    ],
    decisions: [
      {
        id: 'marketing-vanity-metrics',
        time: '09:30',
        scenario:
          'The campaign has record clicks and video views, but sales have not moved. Your manager wants to present it to leadership as a success.',
        options: [
          { label: 'Present the engagement numbers only', outcome: 'Leadership is pleased at first, but questions arise later when sales stay flat.' },
          { label: 'Show engagement and sales together, with possible reasons', outcome: 'The discussion becomes useful, and the team agrees on tests to improve conversion.' },
          { label: 'Call the campaign a failure', outcome: 'This ignores real gains in awareness and may lead the team to abandon a promising approach.' },
        ],
        colleagueView:
          'An experienced marketer would present the full picture: engagement was strong, sales have not moved yet, and here is what we will test next. Leaders value honesty and a plan more than impressive but incomplete numbers.',
      },
      {
        id: 'marketing-claim',
        time: '15:00',
        scenario:
          'A draft ad says the snack is "healthy". It is lower in sugar than competitors but still high in salt. The agency says the line tests well.',
        options: [
          { label: 'Approve it because it tests well', outcome: 'The ad runs. It attracts complaints and possible regulatory attention for a misleading claim.' },
          { label: 'Flag the claim and ask for a more accurate line', outcome: 'The agency rewrites it to "lower in sugar", which is accurate and still appealing.' },
          { label: 'Reject the whole ad', outcome: 'You lose good creative work over one line that could have been fixed.' },
        ],
        colleagueView:
          'An experienced brand manager would flag the claim and check it with legal or regulatory colleagues. Claims must be accurate and supportable. Usually the fix is a more precise line, not a whole new campaign.',
      },
    ],
  },
  campusDay: {
    setting: 'A Tuesday in week 5 of term, second year',
    intro: 'Campus days revolve around case discussions, group work and presentations.',
    blocks: [
      {
        time: '10:00',
        title: 'Lecture: consumer behaviour',
        whatYouDo: 'A lecture on how habits and social influence affect buying decisions.',
        withWhom: ['About 300 students', 'Lecturer'],
        tools: ['Lecture slides', 'Laptop'],
        hardOrSurprising: 'Many ideas feel familiar, but applying them precisely is harder.',
      },
      {
        time: '12:00',
        title: 'Tutorial: case study',
        whatYouDo: 'You discuss a real brand relaunch and argue whether it worked.',
        withWhom: ['About 25 students', 'Tutor'],
        tools: ['Case study'],
        hardOrSurprising: 'Participation marks reward clear, evidence-based arguments.',
      },
      {
        time: '13:00',
        title: 'Lunch',
        whatYouDo: 'Lunch with your co-op cohort.',
        withWhom: ['Co-op cohort'],
        tools: ['None'],
        hardOrSurprising: 'Friends in finance and engineering often challenge your ideas usefully.',
      },
      {
        time: '14:00',
        title: 'Group campaign project',
        whatYouDo: 'Your team plans research and a campaign pitch for a local business.',
        withWhom: ['Four classmates'],
        tools: ['Shared slides', 'Survey tool'],
        hardOrSurprising: 'Coordinating five people with different schedules is a project in itself.',
      },
      {
        time: '16:00',
        title: 'Self-study',
        whatYouDo: 'Readings and analysing survey results for an assignment.',
        withWhom: ['Working alone'],
        tools: ['Excel', 'Readings'],
        hardOrSurprising: 'Statistics shows up more than many marketing students expect.',
      },
      {
        time: '18:00',
        title: 'Marketing society case competition',
        whatYouDo: 'A practice case competition with feedback from industry judges.',
        withWhom: ['Students', 'Industry judges'],
        tools: ['Slides'],
        hardOrSurprising: 'Presenting under time pressure builds confidence quickly.',
      },
    ],
  },
  coop: {
    placementLength: 'Placements are typically several months each, adding up to roughly a year or more in industry',
    numberOfPlacements: 'Usually two to three placements, often mixing brand, agency and digital roles',
    employerTypes: ['Consumer goods companies', 'Retailers', 'Agencies', 'Technology companies', 'Banks and insurers'],
    exampleRoles: ['Brand marketing intern', 'Digital marketing intern', 'Insights intern', 'Product marketing intern'],
  },
  employers: [
    { type: 'Consumer goods company', whatYouMightDo: 'Support brand campaigns and analyse sales.' },
    { type: 'Retailer', whatYouMightDo: 'Help plan promotions and analyse customer data.' },
    { type: 'Creative agency', whatYouMightDo: 'Assist with campaign planning and client briefs.' },
    { type: 'Technology company', whatYouMightDo: 'Support product launches and user research.' },
    { type: 'Bank', whatYouMightDo: 'Help market financial products to customers.' },
    { type: 'Media company', whatYouMightDo: 'Analyse audiences and advertising performance.' },
    { type: 'Market research firm', whatYouMightDo: 'Help design surveys and analyse results.' },
    { type: 'Not-for-profit organisation', whatYouMightDo: 'Support fundraising and awareness campaigns.' },
  ],
  tradeOffs: [
    {
      title: 'Results are hard to prove',
      detail: 'It is often difficult to show exactly what a campaign achieved, which can make your work feel less measurable than in finance or engineering.',
    },
    {
      title: 'Competitive entry-level roles',
      detail: 'Brand and agency roles attract many applicants. Placements help, but competition remains strong.',
    },
    {
      title: 'Fast pace and changing priorities',
      detail: 'Campaigns and plans change quickly, sometimes at the last minute. Some people find this exciting, others stressful.',
    },
  ],
  imageAlt: {
    hero: "A team around a table with laptops and printed charts, seen from above",
    campus: "A group working around a table in a room covered with whiteboard notes",
  },
  heroImage: {
    src: heroPhoto,
    width: 1000,
    height: 667,
    credit: {
      creator: "Rawpixel Ltd",
      title: "Group of diverse people having a business meeting",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/147875007@N03/45739291052",
    },
  },
  campusImage: {
    src: campusPhoto,
    width: 1000,
    height: 750,
    credit: {
      creator: "kevin dooley",
      title: "Brainstorming",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/12836528@N00/7007372665",
    },
  },
  toVerify: [
    'Official program name: confirm whether Marketing is a standalone co-op degree or a major within a broader co-op program',
    'Duration and whether honours is included',
    'Major and focus area names, and which courses belong to each',
    'Course names for each year',
    'Number, length and timing of industry placements',
  ],
};

export default degree;
