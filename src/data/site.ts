// Everything you'll want to edit lives in this file.
// Fill in project results as you measure them; keep the resume and these details in sync.

export const site = {
  name: 'Hariny Ganapathy',
  title: 'Hariny Ganapathy | Software engineer',
  description:
    'Software engineer in Dallas who designs and owns serverless AWS backends and builds the service patterns behind LLM-powered applications and AI agent workflows. M.S. in Computer Science, University at Buffalo.',
  role: 'Software engineer building backends on AWS and LLM-powered systems.',
  links: {
    github: 'https://github.com/Hariny1',
    linkedin: 'https://www.linkedin.com/in/hariny-8b5496157/',
    email: 'harinyg98@gmail.com',
    resume: '/resume.pdf', // replace public/resume.pdf whenever you update your resume
  },
  about: [
    'I am a software engineer based in Dallas, Texas, with a Master of Science degree in Computer Science from the University at Buffalo. I build the behind-the-scenes systems that make websites and apps work: the parts that store information, handle requests, and connect different programs. Since 2022 at DXC Technology, a large technology consulting company, I have moved from writing code for insurance software to designing and running cloud systems on Amazon Web Services (AWS), a platform many companies use to run their software over the internet. I also write the plans for how these systems should be built, including diagrams and design documents that other teams rely on.',
    'Lately I have focused on systems that use artificial intelligence (AI), such as tools that let AI assistants work through multi-step tasks, and tools that look up facts in documents before answering. The AI behind these tools is a large language model (LLM), the same kind of technology as ChatGPT or Claude. Outside of work, I build projects like these and measure how well they perform.',
    'Earlier, I co-authored a research paper at MediaEval 2019, an international research challenge, about using AI to estimate the severity of floods from satellite images and news articles, and I trained AI models that understand human language. I am looking for roles in software engineering, AI engineering, and forward deployed engineering, where engineers work directly with customers to fit a product to their needs, and where building something from start to finish and working closely with the people who use it matters.',
  ],
  skillGroups: [
    { heading: 'Languages', items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'C++', 'SQL'] },
    {
      heading: 'Cloud and backend',
      items: [
        'AWS Lambda',
        'API Gateway',
        'DynamoDB',
        'S3',
        'Step Functions',
        'SQS and SNS',
        'Terraform',
        'Docker',
        'Node.js',
        'Spring Boot',
        'Flask',
      ],
    },
    {
      heading: 'AI and machine learning',
      items: ['Agentic AI', 'RAG', 'LangChain', 'CrewAI', 'n8n', 'TensorFlow', 'scikit-learn'],
    },
  ],
  experience: [
    {
      title: 'Sr Analyst II, Software Engineering',
      company: 'DXC Technology',
      place: 'Dallas, TX',
      dates: 'Dec 2023 to present',
      points: [
        'Designed architecture diagrams and wrote high-level and low-level design documents (HLDs and LLDs), API specifications, and sequence diagrams for new services, and walked product, architecture, and engineering teams through them in technical design reviews.',
        'Designed and owned a production serverless AWS architecture on Lambda, API Gateway, DynamoDB, S3, and Step Functions, with SQS/SNS event-driven workflows, automated CI/CD, and Terraform.',
        'Drove backend architecture decisions, including serverless versus containerized (EC2/Docker) trade-offs and API contracts, and wrote HLD/LLD documents and API specifications.',
        'Designed extensible service patterns to support LLM-powered applications and AI agent workflows.',
        'Wrote and maintained Terraform to provision the AWS infrastructure behind these services (Lambda, API Gateway, DynamoDB, S3, Step Functions), deployed through automated CI/CD pipelines.',
        'Built and maintained AWS Glue jobs that handle data processing alongside the serverless services.',
        'Helped automate the cherry-picking of approved code changes into the client QAT environment, making releases to testing more repeatable.',
      ],
    },
    {
      title: 'Application Developer',
      company: 'DXC Technology',
      place: 'Dallas, TX',
      dates: 'Feb 2023 to Dec 2023',
      points: [
        'Worked as a developer on a Scrum team in an Agile SDLC, covering system design, coding, and testing of event-driven insurance web applications.',
        'Improved security through REST API design and development and AWS microservices, and cut build time by 5% by automating deployments with CodePipeline.',
        'Improved the existing Java, JavaScript, and Terraform architecture for automated AWS S3 deployment, reducing costs and web response time by 4%.',
        'Built backend services in Java and Spring Boot for event-driven insurance web applications, changed REST endpoints, debugged defects from application logs, and wrote unit tests.',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'DXC Technology',
      place: 'New Orleans, LA',
      dates: 'Jun 2022 to Dec 2022',
      points: [
        'Worked as a developer on a Scrum team within an Agile Release Train (ART).',
        'Built NLP functions on AWS Lambda that parse sentences from an AWS Lex bot and extract keywords and their associated values.',
        'Automated SQL queries with Lambda functions, cutting web response time by 5%.',
        'Set up API Gateway to enforce authentication and authorization.',
        'Collaborated with 8 other interns and kept a git repository documenting the team\'s progress in the ART.',
        'Supported NLP pipelines with NLTK and SpaCy for an AWS Lex chatbot, and helped train TensorFlow text classifiers on AWS SageMaker that reached 92% validation accuracy.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Synopsys Inc',
      points: [
        'Reviewed and analyzed 30+ monthly coverage runs to automate coverage report generation.',
        'Resolved coverage posting issues, improving efficiency projections by 53% and cutting manual effort by 2 days, using Perforce, Jenkins, GCOV, and Jira.',
        'Enabled weekly LCOV run configuration using Node.js and PHP web applications.',
      ],
    },
  ],
  credentials: [
    {
      kind: 'Education',
      text: 'M.S. Computer Science, University at Buffalo (2021 to 2023)',
      href: '',
      points: [
        'GPA: 3.78 / 4.0',
        'AI and data: Machine Learning, Deep Learning, Computer Vision and Image Processing, Information Retrieval',
        'Systems and theory: Distributed Systems, Modern Networking Concepts, Data Models and Query Language, Algorithms Analysis and Design',
      ],
    },
    { kind: 'Education', text: 'B.E. Computer Science, SSN College, Anna University (2016 to 2020)', href: '' },
    {
      kind: 'Certification',
      text: 'AWS Certified Developer \u2013 Associate',
      linkLabel: 'View credential',
      blurb: 'Covers developing, deploying, and debugging applications on AWS. It matches the serverless work I do every day with Lambda, API Gateway, DynamoDB, and Step Functions.',
      href: 'https://www.credly.com/badges/edf17df5-2b4b-45ee-9991-bba65a1dc4f0/linked_in_profile',
    },
    {
      kind: 'Certification',
      text: 'Claude Certified Developer – Foundations',
      linkLabel: 'View credential',
      blurb: 'A foundations-level certification for building with Claude. It pairs with my work on LLM-powered applications and AI agent workflows.',
      href: 'https://www.credly.com/badges/ba7defbf-74e9-4b33-a9cd-187ec0a023ee',
    },
    {
      kind: 'Publication',
      text: 'Deep learning models for estimating flood severity from satellite and news article images (MediaEval 2019)',
      linkLabel: 'Read the paper',
      blurb: 'A co-authored paper from the MediaEval 2019 benchmark. The project write-up above covers the models and results.',
      href: 'https://ceur-ws.org/Vol-2670/MediaEval_19_paper_49.pdf',
    },
  ],
};

export type ResultsTable = { caption: string; columns: string[]; rows: string[][] };

export type Project = {
  slug: string;
  title: string;
  pitch: string;
  status: 'In progress' | 'Ongoing' | 'Shipped';
  dates?: string; // shown on the card and write-up; omit to hide
  stack: string[];
  repo: string; // '' hides the link
  demo: string; // '' hides the link
  paper?: string; // link to a published paper; omit to hide
  problem: string;
  architecture: string[];
  decisions?: { title: string; body: string }[]; // omit to hide the section
  results?: ResultsTable; // omit to hide the section
  improvements?: string[]; // omit to hide the section
};

export const projects: Project[] = [
  {
    slug: 'cortex-catalyst',
    dates: 'Oct 2024 to present',
    title: 'Cortex Catalyst: multi-agent GenAI workflows',
    pitch:
      'Agent-based GenAI workflows that use CrewAI and n8n to orchestrate multi-agent systems, with retrieval-augmented generation over a vector database and prompt templates designed to reduce hallucinations.',
    status: 'Ongoing',
    stack: ['CrewAI', 'n8n', 'LangChain', 'RAG', 'Vector database', 'Prompt engineering'],
    repo: '',
    demo: '',
    problem:
      'A single LLM call struggles with tasks that need several steps of reasoning and facts the model was never trained on. This project splits the work across cooperating agents, grounds their answers in retrieved documents, and uses structured prompts to keep outputs consistent and reduce hallucinations.',
    architecture: [
      'Orchestrate: CrewAI and n8n coordinate multiple agents and the steps of each task, for structured reasoning and task automation.',
      'Retrieve: a LangChain retrieval-augmented generation pipeline pulls relevant context from a vector database so queries are resolved with source material.',
      'Prompt: structured templates using few-shot examples and chain-of-thought prompting improve reasoning quality and make outputs more deterministic.',
      'Guard: grounding answers in retrieved context and constraining the prompts reduces hallucinations.',
    ],
  },
  {
    slug: 'rag-chatbot',
    title: 'RAG chatbot with evals',
    pitch:
      'Answers questions over a document set with citations, and measures retrieval and answer quality so every pipeline change can be tested.',
    status: 'In progress',
    stack: ['Python', 'FastAPI', 'Chroma', 'Anthropic API', 'pytest'],
    repo: '',
    demo: '',
    problem:
      'Document Q&A is easy to demo and hard to trust. This project answers questions from a fixed document set, cites the passages it used, and says it does not know when the documents do not cover the question. An eval suite scores each change, so improvements are measured instead of guessed.',
    architecture: [
      'Ingest: load documents, split into chunks with overlap, and attach source metadata.',
      'Embed and store: write chunk embeddings to a vector database.',
      'Retrieve: top-k similarity search for each question.',
      'Generate: answer only from the retrieved chunks, cite chunk IDs, and refuse when the context is missing.',
      'Return: the answer, its citations, and the source snippets.',
    ],
    decisions: [
      {
        title: 'Chunk size and overlap',
        body: 'Compared several settings against the eval set. The chosen setting and the reason go here.',
      },
      {
        title: 'Retrieval strategy',
        body: 'Plain vector search against hybrid search or a reranker, with the measured difference.',
      },
      {
        title: 'Refusal behavior',
        body: 'How the system decides it cannot answer, and how often it gets that right on unanswerable questions.',
      },
    ],
    results: {
      caption: 'Eval results by configuration (filled in after each run)',
      columns: ['Configuration', 'Hit rate @5', 'Faithfulness', 'Refusal accuracy'],
      rows: [
        ['Chunk 300, k=3', 'Not yet measured', 'Not yet measured', 'Not yet measured'],
        ['Chunk 500, k=5', 'Not yet measured', 'Not yet measured', 'Not yet measured'],
        ['Plus reranker', 'Not yet measured', 'Not yet measured', 'Not yet measured'],
        ['Plus hybrid search', 'Not yet measured', 'Not yet measured', 'Not yet measured'],
      ],
    },
    improvements: ['Written after the first full eval run.'],
  },
  {
    slug: 'url-shortener',
    title: 'URL shortener with analytics',
    pitch:
      'A URL shortening service with Redis caching, rate limiting, and click analytics, documented with a design doc and load-test results.',
    status: 'In progress',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    repo: '',
    demo: '',
    problem:
      'Redirects vastly outnumber link creation, so the service has to be fast on reads, safe against abuse, and able to record clicks without slowing the redirect down.',
    architecture: [
      'Create: validate the URL, generate a short code, and store the mapping in PostgreSQL.',
      'Redirect: look up the code in Redis first and fall back to the database on a miss.',
      'Track: record each click in the background so the redirect stays fast.',
      'Protect: rate limit per IP and reject invalid or self-referencing URLs.',
    ],
    decisions: [
      {
        title: 'Short code generation',
        body: 'Base62 of an ID, random codes, or hashing, and what each costs in collisions and predictability.',
      },
      {
        title: '301 or 302 redirects',
        body: 'Permanent redirects get cached by browsers and hide clicks from analytics. The choice and the reason go here.',
      },
      {
        title: 'Asynchronous click tracking',
        body: 'How clicks are recorded without adding latency, and what happens if the tracker falls behind.',
      },
    ],
    results: {
      caption: 'Redirect latency under load (filled in after load testing)',
      columns: ['Setup', 'Requests per second', 'p95 latency'],
      rows: [
        ['Database only', 'Not yet measured', 'Not yet measured'],
        ['With Redis cache', 'Not yet measured', 'Not yet measured'],
      ],
    },
    improvements: ['Written after load testing.'],
  },
  {
    slug: 'siamese-face-recognition',
    dates: 'Jan 2022 to Sep 2022',
    title: 'One-shot face recognition with Siamese networks',
    pitch:
      'A Siamese neural network that recognizes faces from very few examples per person, built in TensorFlow as a graduate project at the University at Buffalo.',
    status: 'Shipped',
    stack: ['Python', 'TensorFlow', 'Siamese networks'],
    repo: '',
    demo: '',
    problem:
      'A standard face classifier needs many labeled images of every person it should recognize. One-shot learning flips the question: instead of classifying a face, the model learns whether two faces belong to the same person, so a new person can be recognized from a single reference image. This project builds that image similarity model, with far smaller dataset requirements than a conventional classifier.',
    architecture: [
      'Twin network: two identical branches with shared weights each turn an input image into an embedding vector.',
      'Embedding space: training pulls embeddings of the same person close together and pushes different people apart.',
      'Compare: a pair of images is scored by how close their embeddings are.',
      'Recognize: a new face is matched against one reference image per person, with no retraining for new people.',
    ],
  },
  {
    slug: 'flood-detection-mediaeval',
    dates: 'Nov 2019 to Apr 2020',
    title: 'Flood detection from tweets and satellite images',
    pitch:
      'Deep learning models that classify tweets and related satellite images as flooded or not flooded, published at MediaEval 2019 and built to reduce false flood detections.',
    status: 'Shipped',
    stack: ['TensorFlow', 'Deep neural networks', 'Bidirectional LSTM', 'NLP'],
    repo: '',
    demo: '',
    paper: 'https://ceur-ws.org/Vol-2670/MediaEval_19_paper_49.pdf',
    problem:
      'During a flood, social media posts and satellite imagery both carry signal, but each alone produces false detections: a tweet can mention flooding without one happening, and an image can look flooded when it is not. This project, built for the MediaEval 2019 benchmark and published as a paper, classifies tweets and related satellite images as flooded or non-flooded, and combines models to cut false flood detections.',
    architecture: [
      'Text processing: tweets are cleaned and prepared with NLP tools before they reach the models.',
      'Models: 5 deep neural networks and 3 bidirectional LSTM models classify the tweets and related satellite images as flooded or non-flooded.',
      'Analysis: results from each model are compared using TensorFlow graphs.',
      'Combine: the best-performing models are combined to get the highest accuracy.',
    ],
    results: {
      caption: 'Reported improvements from the two main changes',
      columns: ['Change', 'Effect'],
      rows: [
        ['Better text processing for tweets (NLP tools)', '22% higher prediction accuracy'],
        ['Combining the best models', '8% better network prediction, fewer false flood detections'],
      ],
    },
  },
];
