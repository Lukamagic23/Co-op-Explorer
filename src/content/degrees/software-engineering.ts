import type { Degree } from '../schema';
import heroPhoto from '../../assets/photos/degrees/software-engineering-hero.jpg';
import campusPhoto from '../../assets/photos/degrees/software-engineering-campus.jpg';

/*
 * VERIFY BEFORE LAUNCH: program structure, course names, elective streams,
 * accreditation and placement rules below are written to be plausible and
 * generic. Check every item in `toVerify` against the official UNSW Handbook
 * and the Co-op Program team.
 */
const degree: Degree = {
  slug: 'software-engineering',
  name: 'Software Engineering',
  faculty: 'UNSW Engineering',
  duration: '4 years full time (honours), including industry placements',
  summary: 'Learn to design, build, test and maintain software that other people depend on, usually as part of a team.',
  suits: [
    'You like building things and are happy spending long stretches solving one problem',
    'You want to understand how large systems are designed, not just how to write code',
    'You are comfortable with maths, logic and being wrong until the tests pass',
  ],
  mightNotSuit: [
    'You want to work mainly with business stakeholders rather than code; business information systems may fit better',
    'You find debugging frustrating rather than satisfying; it is a big part of the job',
  ],
  interests: ['building', 'data', 'numbers'],
  overview:
    'Software Engineering focuses on building reliable software in teams. You learn programming, data structures, algorithms and computer systems, then move on to software design, testing, databases, security and large team projects. Compared with computer science, there is more emphasis on process, requirements and working on large codebases over time. Graduates work as software engineers, platform and infrastructure engineers, data engineers and technical consultants, in technology companies, banks, government and start-ups.',
  studyFocus: 'Programming, algorithms and systems, then designing and testing large software in teams',
  workload: {
    level: 'Very high',
    note: 'Programming assignments are time-consuming and hard to estimate. Team projects run across whole terms.',
  },
  maths: { level: 'Heavy', note: 'Calculus, linear algebra and discrete maths early on, then proofs in algorithms courses.' },
  majorsHeading: 'Elective streams',
  majors: [
    { id: 'ai', name: 'Artificial intelligence', description: 'Machine learning, search and how to build systems that learn from data.' },
    { id: 'security', name: 'Security engineering', description: 'Finding and fixing vulnerabilities, and designing systems that are hard to attack.' },
    { id: 'data', name: 'Databases and data systems', description: 'Storing, querying and processing large amounts of data reliably.' },
    { id: 'platforms', name: 'Platforms and infrastructure', description: 'Operating systems, networks, distributed systems and cloud deployment.' },
  ],
  years: [
    {
      year: 1,
      courses: [
        { name: 'Programming Fundamentals', description: 'Writing, testing and debugging programs in C, from the basics up.', majors: [] },
        { name: 'Data Structures and Algorithms', description: 'Lists, trees, graphs and how to choose the right one for a problem.', majors: [] },
        { name: 'Mathematics 1A', description: 'Calculus and linear algebra used in later engineering and computing courses.', majors: [] },
        { name: 'Discrete Mathematics', description: 'Logic, proofs, sets and counting, the maths behind algorithms.', majors: [] },
        { name: 'Software Engineering Fundamentals', description: 'Working in a team on a shared codebase with version control, testing and code review.', majors: [] },
      ],
    },
    {
      year: 2,
      courses: [
        { name: 'Computer Systems Fundamentals', description: 'How code runs on hardware: memory, processors and low-level programming.', majors: ['platforms'] },
        { name: 'Object-Oriented Design and Programming', description: 'Structuring larger programs so they are easier to change and test.', majors: [] },
        { name: 'Database Systems', description: 'Designing schemas, writing SQL and understanding how databases store data.', majors: ['data'] },
        { name: 'Algorithm Design and Analysis', description: 'Proving algorithms correct and reasoning about how fast they run.', majors: ['ai'] },
        { name: 'Computer Networks', description: 'How data moves across the internet and what can go wrong on the way.', majors: ['platforms', 'security'] },
      ],
    },
    {
      year: 3,
      courses: [
        { name: 'Software Design and Architecture', description: 'Designing large systems: components, interfaces and trade-offs between approaches.', majors: [] },
        { name: 'Operating Systems', description: 'Processes, memory management, concurrency and file systems.', majors: ['platforms'] },
        { name: 'Machine Learning', description: 'Training and evaluating models, and recognising when they fail.', majors: ['ai', 'data'] },
        { name: 'Security Engineering', description: 'Common vulnerabilities, secure design and how attacks work in practice.', majors: ['security'] },
        { name: 'Software Engineering Workshop', description: 'A term-long team project building a product for a client, with real requirements changes.', majors: [] },
      ],
    },
    {
      year: 4,
      courses: [
        { name: 'Distributed Systems', description: 'Building systems that run across many machines and keep working when some fail.', majors: ['platforms', 'data'] },
        { name: 'Software Testing and Verification', description: 'Designing test strategies and using tools to find bugs before users do.', majors: [] },
        { name: 'Professional Practice and Ethics', description: 'Engineering responsibility, privacy, safety and working within professional standards.', majors: [] },
        { name: 'Thesis Project', description: 'A year-long individual research or development project with an academic supervisor.', majors: [] },
      ],
    },
  ],
  skills: [
    { name: 'Debugging', inPractice: 'Tracing a failing test back through three services to a date stored in the wrong timezone.' },
    { name: 'Reading other people\'s code', inPractice: 'Making a small change in a large codebase you did not write without breaking anything else.' },
    { name: 'Code review', inPractice: 'Giving a teammate specific, useful feedback on their change, and taking feedback on yours.' },
    { name: 'Testing', inPractice: 'Writing tests that catch the edge case a customer reported, so it cannot come back.' },
    { name: 'Estimating work', inPractice: 'Saying a ticket will take three days, then telling the team early when it will take five.' },
  ],
  placementDay: {
    setting: 'Month five of a six-month placement in a product engineering team at a software company',
    intro: 'You work on a team that maintains a web application used by thousands of customers. Your changes go to production, so care matters.',
    blocks: [
      {
        time: '09:15',
        title: 'Stand-up',
        whatYouDo: 'A short team meeting. You say you finished the review fixes yesterday and are picking up a new ticket today.',
        withWhom: ['Engineering team', 'Engineering manager'],
        tools: ['Issue tracker'],
        hardOrSurprising: 'Saying you are stuck is encouraged. Staying quiet for a day costs the team more.',
      },
      {
        time: '09:30',
        title: 'Code review',
        whatYouDo: 'You review a teammate\'s change, run it locally and leave comments on a missing test and an unclear function name.',
        withWhom: ['Teammate'],
        tools: ['Git', 'Code review tool', 'IDE'],
        hardOrSurprising: 'Your review is taken seriously, even as a student. Approving without reading properly is noticed.',
      },
      {
        time: '10:30',
        title: 'Picking up a ticket',
        whatYouDo: 'You start a ticket to add an export button to a report page. You read the existing code and write a short plan before changing anything.',
        withWhom: ['Working alone', 'Product designer for a quick question'],
        tools: ['IDE', 'Issue tracker', 'Design files'],
        hardOrSurprising: 'Understanding the existing code takes longer than writing the new code.',
      },
      {
        time: '12:30',
        title: 'Lunch',
        whatYouDo: 'Team lunch in the office kitchen.',
        withWhom: ['Engineering team'],
        tools: ['None'],
        hardOrSurprising: 'Casual conversations often turn into useful explanations of why the system is built the way it is.',
      },
      {
        time: '13:30',
        title: 'Pairing session',
        whatYouDo: 'A senior engineer pairs with you on the tricky part: generating the export without slowing the page down.',
        withWhom: ['Senior engineer'],
        tools: ['IDE', 'Screen sharing'],
        hardOrSurprising: 'Watching how an experienced engineer searches the codebase and reads errors teaches you as much as the solution.',
      },
      {
        time: '15:00',
        title: 'Testing',
        whatYouDo: 'You write unit tests and run the full test suite. One unrelated test fails, and you check whether your change caused it.',
        withWhom: ['Working alone'],
        tools: ['Test framework', 'CI pipeline'],
        hardOrSurprising: 'Sometimes tests fail for reasons unrelated to your change. Working out which is which is a skill.',
      },
      {
        time: '16:00',
        title: 'Deploying a small change',
        whatYouDo: 'Yesterday\'s approved bug fix is ready. You merge it, watch the pipeline deploy it and check the monitoring dashboard.',
        withWhom: ['On-call engineer'],
        tools: ['Git', 'CI pipeline', 'Monitoring dashboard'],
        hardOrSurprising: 'Seeing your code reach real users is satisfying, and also a reason to be careful.',
      },
      {
        time: '17:00',
        title: 'Documentation and wrap up',
        whatYouDo: 'You update the team wiki on how the export works and push your work in progress to a branch.',
        withWhom: ['Working alone'],
        tools: ['Team wiki', 'Git'],
        hardOrSurprising: 'Good documentation saves the next person hours. It is easy to skip and expensive to skip.',
      },
    ],
    decisions: [
      {
        id: 'swe-late-bug',
        time: '15:00',
        scenario:
          'Two days before the sprint ends, you find a bug: the export sometimes drops the last row of data. The feature has been promised to a customer for the end of the sprint.',
        options: [
          { label: 'Fix it now, even if it delays the release', outcome: 'The fix takes longer than expected and the feature misses the sprint. The customer is told it is a few days late.' },
          { label: 'Ship with a documented known issue', outcome: 'The feature ships on time, but a customer relying on complete exports could make decisions on missing data.' },
          { label: 'Raise it with the team and decide together', outcome: 'The team weighs the risk, decides a missing row is not acceptable for an export, and the product manager resets the date with the customer.' },
        ],
        colleagueView:
          'An experienced engineer would raise it with the team straight away rather than decide alone. The question is how bad the bug is for users. For an export, silently missing data is serious, so most teams would delay and tell the customer. For a small visual glitch, shipping with a known issue and a follow-up ticket is often fine.',
      },
      {
        id: 'swe-flaky-test',
        time: '16:00',
        scenario:
          'Your fix is ready to deploy, but a test unrelated to your change has failed in the pipeline twice today. Re-running it usually makes it pass.',
        options: [
          { label: 'Re-run until it passes and deploy', outcome: 'It passes on the third try and your change ships, but nobody looks at why the test is unreliable.' },
          { label: 'Deploy, then raise a ticket about the flaky test', outcome: 'Your change ships and the flaky test is now visible to the team for someone to fix.' },
          { label: 'Stop and investigate the flaky test yourself first', outcome: 'You spend the afternoon on someone else\'s test, and your fix waits a day.' },
        ],
        colleagueView:
          'Most experienced engineers would check that the failure is genuinely unrelated, deploy, and raise a ticket so the flaky test gets fixed. Unreliable tests train everyone to ignore failures, which is how real bugs get through. Investigating alone is useful only if you have the time and your own work is not urgent.',
      },
    ],
  },
  campusDay: {
    setting: 'A Monday in week 8 of term, second year',
    intro: 'Campus days are flexible on paper, but programming assignments fill any spare time you have.',
    blocks: [
      {
        time: '10:00',
        title: 'Lecture: computer systems',
        whatYouDo: 'A lecture on how memory is laid out and why some programs crash.',
        withWhom: ['About 400 students', 'Lecturer'],
        tools: ['Laptop', 'Lecture slides'],
        hardOrSurprising: 'Large first and second-year classes mean you need to ask questions on the course forum rather than in the room.',
      },
      {
        time: '12:00',
        title: 'Lab: debugging exercise',
        whatYouDo: 'A tutorial and lab where you find and fix memory bugs in small C programs. A tutor checks your work.',
        withWhom: ['About 20 students', 'Tutor'],
        tools: ['Terminal', 'Debugger'],
        hardOrSurprising: 'Labs often count towards your mark, so finishing them each week matters.',
      },
      {
        time: '14:00',
        title: 'Lunch',
        whatYouDo: 'A late lunch with co-op students from other engineering streams.',
        withWhom: ['Co-op cohort'],
        tools: ['None'],
        hardOrSurprising: 'Talking with students in other streams gives you a sense of how software fits into the wider engineering world.',
      },
      {
        time: '15:00',
        title: 'Group project meeting',
        whatYouDo: 'Your team of five plans the next milestone of a term project, splits tasks and agrees how to review each other\'s code.',
        withWhom: ['Four classmates'],
        tools: ['Git', 'Issue tracker', 'Group chat'],
        hardOrSurprising: 'Team members work at different speeds and nobody can be told what to do. Clear task splits help.',
      },
      {
        time: '16:00',
        title: 'Assignment work',
        whatYouDo: 'Three hours on a programming assignment due Friday. Most of it is debugging edge cases.',
        withWhom: ['Working alone'],
        tools: ['IDE', 'Course forum'],
        hardOrSurprising: 'Assignments often take far longer than expected. Starting early is the most common advice from older students.',
      },
      {
        time: '19:00',
        title: 'Society workshop',
        whatYouDo: 'A computing society workshop on preparing for technical interviews.',
        withWhom: ['Students from several degrees'],
        tools: ['Laptop'],
        hardOrSurprising: 'These sessions help with placement interviews, which often include a coding exercise.',
      },
    ],
  },
  coop: {
    placementLength: 'Placements are typically several months each, adding up to roughly a year or more in industry',
    numberOfPlacements: 'Usually two to three placements, often across different types of engineering employers',
    employerTypes: ['Technology companies', 'Banks', 'Government agencies', 'Consulting firms', 'Start-ups'],
    exampleRoles: ['Software engineering intern', 'Platform engineering intern', 'Data engineering intern', 'Quality engineering intern'],
  },
  employers: [
    { type: 'Software company', whatYouMightDo: 'Build and ship small features on a product team.' },
    { type: 'Major bank', whatYouMightDo: 'Work on internal tools or customer-facing banking apps.' },
    { type: 'Government agency', whatYouMightDo: 'Help modernise an older system that many people rely on.' },
    { type: 'Consulting firm', whatYouMightDo: 'Join a client project building or integrating systems.' },
    { type: 'Start-up', whatYouMightDo: 'Take on a wide range of tasks across the whole product.' },
    { type: 'Telecommunications provider', whatYouMightDo: 'Work on systems that monitor or manage a network.' },
    { type: 'Engineering firm', whatYouMightDo: 'Build software that supports design or infrastructure projects.' },
    { type: 'Retailer', whatYouMightDo: 'Improve the online store, search or stock systems.' },
  ],
  tradeOffs: [
    {
      title: 'Heavy and unpredictable workload',
      detail: 'Programming assignments can take far longer than planned. Combined with team projects and labs, there are weeks with little spare time.',
    },
    {
      title: 'Placements can be less visible than expected',
      detail: 'On placement you usually work on a small part of a large system. It is real work, but you may not see the whole product or its users.',
    },
    {
      title: 'A fast-changing field',
      detail: 'Tools and languages change quickly. The degree teaches fundamentals, but you will keep learning new tools on your own throughout your career.',
    },
  ],
  imageAlt: {
    hero: "A developer wearing headphones writing code at a desk",
    campus: "A student working at a computer in a busy computer lab",
  },
  heroImage: {
    src: heroPhoto,
    width: 1000,
    height: 750,
    credit: {
      creator: "illustir",
      title: "The Exemplary Programmer",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/12505664@N00/9311087323",
    },
  },
  campusImage: {
    src: campusPhoto,
    width: 1000,
    height: 667,
    credit: {
      creator: "vancouverfilmschool",
      title: "Digital Character Animation Campus at VFS",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/38174668@N05/5843671482",
    },
  },
  toVerify: [
    'Official program name, duration and honours structure',
    'Engineers Australia accreditation and any required practical experience rules',
    'Elective stream names, and which courses belong to each',
    'Course names for each year',
    'Number, length and timing of industry placements',
  ],
};

export default degree;
