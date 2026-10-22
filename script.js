//TODO: font sizes are not responsive, they are fixed, and they should be responsive to the screen size
//TODO: convert all pixle values to rem or em
//TODO: add projects url, and tech used
//TODO: fix form to have required feilds
//TODO: change home button to  something meaningful
//TODO: find a way to make my website not copied by genAI
//TODO: make next, prev buttons have more height
//TODO: fix sizes in phone mode
//TODO: remove download cv button on phone view
//TODO: chande images paths
//TODO: there is a problem after user clicks send and new envelop appears, when i go to prev or next page the contact page still appears
//TODO: add a welcome message that tells user to treat this website as if it is a real book, click on cover, pages, cards, papers, flipping cards, and how to close it when inside a section


(() => {
'use strict';
const CONFIG = {
  name: 'Heba Yasin',
  role: 'AI Engineer',
  email: 'heba.yasin.hdaib@gmail.com',
  tagline: 'Welcome to my Portfolio Website',
  cvUrl: 'assets/documents/Resume__HebaYasin.pdf',           
  linkedinUrl: 'https://www.linkedin.com/in/hebah-yasin/',
  githubUrl: 'https://github.com/HebaYasin',
  contactEndpoint: 'https://formspree.io/f/xwlpgynl' 
};

const $ = (s, r = document) => r.querySelector(s);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;

function setPageMarkup(element, markup) {
  const template = document.createElement('template');
  template.innerHTML = markup;
  template.content.querySelectorAll('img[src]').forEach(img => {
    img.dataset.src = img.getAttribute('src');
    img.removeAttribute('src');
    img.loading = 'lazy';
    img.decoding = 'async';
  });
  element.append(template.content);
}

const loadImagesIn = element => element.querySelectorAll('img[data-src]').forEach(img => {
  if (!img.hasAttribute('src')) img.setAttribute('src', img.dataset.src);
});
const releaseImagesIn = element => element.querySelectorAll('img[src][data-src]').forEach(img => img.removeAttribute('src'));

const svgUrl = s => 'url("data:image/svg+xml,' + encodeURIComponent(s) + '")';
root.style.setProperty('--wood-grain', svgUrl("<svg xmlns='http://www.w3.org/2000/svg' width='900' height='500'><filter id='w' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.004 0.09' numOctaves='5' seed='7' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.20  0 0 0 0 0.09  0 0 0 0 0.03  1.8 0 0 0 -0.7'/></filter><rect width='100%' height='100%' filter='url(#w)'/></svg>"));
root.style.setProperty('--noise', svgUrl("<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  .35 0 0 0 -.08'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>"));

/* ===== Content ===== */
const FIRST = CONFIG.name.split(' ')[0];
const HOME = `<button class="home" type="button" data-action="home" aria-label="Close the notebook and go back to the cover"><svg viewBox="0 0 66 42" fill="none" stroke="#2b2018" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22L33 4l27 18"/><path d="M14 19v19h38V19"/><path d="M29 38V27h8v11"/></svg></button>`;
const page = (side, no, inner) => `<div class="pg ${side}">${inner}<span class="pgno">${no}</span>` +
  (side === 'right'
    ? '<button class="turn next" type="button" data-action="next" aria-label="Turn to the next page"></button>'
    : '<button class="turn prev" type="button" data-action="prev" aria-label="Turn back a page"></button>') + '</div>';

const SPREADS = [
  {
    section: "welcome",
    left: page(
      "left",
      "",
      ` <div class="cover-art"><div class="sticker">
      <div class="grad-card-2">
      <div class="img-wrapper"><img src="assets/images/personal-images/grad.jpeg" alt="Gradient background image" class="grad-img"></div>
      <div class="text"> done it!</div>
      2025
      <div class="deco">
        <span class="dotted-hearts">💛💛💛</span>
        <span class="crown">👑</span>
        <span class="heart_1">💗</span>
        <span class="heart_2">💙</span>
        <span class="heart_22">💙</span>
        <span class="balloon_1">🎈</span>
        <span class="balloon_2">🎈</span>
        <span class="balloon_3">🎈</span>
        <span class="ribbon">🎀</span>
        <span class="heart_3">🖤</span>
        <span class="heart_33">🖤</span>
        <span class="heart_333">🖤</span>
        <span class="star_1">⭐</span>
        <span class="star_11">⭐</span>
        <span class="teddy">🧸</span>
        <span class="sparkles">✨</span>
        <span class="cake">🍰</span>
        <span class="flowers">🌷</span>
        <span class="heart_3">🖤</span>
        <span class="cat">🐱</span>
      </div>
    </div>
    </div></div>`,
    ),
    right: page(
      "right",
      "1",
      `<header class="ph center"><h2>About me</h2></header>
      <main>
      <section class="entry"><p>Hi! I&rsquo;m ${FIRST}, and I&rsquo;m glad you&rsquo;re taking a look at my website! </p><br/><p>I&rsquo;m a Data Science and AI graduate at the beginning of my career, exploring opportunities to learn, build, and grow.</p></section>
      <section class="note"><b>My interests</b><p>I enjoy using data and AI to build smart solutions and solve problems. I&rsquo;m also very interested in  AI research, particularly Natural Language Processing (NLP).  <br/><br/>Outside of AI, I enjoy front-end development as a hobby, where I explore web design and bring ideas to life through code.</p></section>
      </main>
      `,
    ),
  },
  {
    section: "education",
    left: page(
      "left",
      2,
      `<header class="ph">${HOME}<h1>Education</h1></header>
      <main style="gap:16px;">
      <section class="entry"><div style="display:flex;flex-direction:column;"><h3><span class="mark">Bachelor of Data Science and AI</span></h3><p class="meta">Princess Sumaya University For Technology</p></div> <div style="width:100%;display:flex; justify-content: space-between;"><p class="meta">2021 &ndash; 2025</p> <p class="meta">GPA: <span class="mark">80.8</span></p></div></section>
      <section class="note"><b>Graduation project</b><div><p>Together with my teammates <a href="https://www.linkedin.com/in/adam-abuyousef-ab5ab9253/" target="_blank" title="Adam's LinkedIn">Adam</a> and <a href="https://www.linkedin.com/in/abdelrahman-s-145a3b1ab/" target="_blank" title="Abdelrahman's LinkedIn">Abdelrahman</a> we chose to explore how AI can be used to predict local weather in Jordan, under the supervision of <a href="https://www.linkedin.com/in/mohammad-j-abdel-rahman-5b5a032a/" target="_blank" title="Dr. Mohammad's LinkedIn">Dr. Mohammad Abdel-Rahman</a>.<br/>We built a four-stage deep learning pipeline using a fine-tuned IBM Tiny Time Mixer, LSTM/ConvLSTM models, historical weather station data, and NASA satellite imagery.<br/> Despite challenges with data quality and pipeline design, the project gave us hands-on experience in AI-based weather forecasting.</p></div> 
      <div class="shot" style="width:45%;position:absolute ;bottom:-90px;left:50px;"><img src="assets/images/project-images/grad_project.png" alt="Graduation Project Image"><small>Jawwak</small></div><a class="stk" href="https://github.com/abood-shehade/Weather-prediction" target="_blank" rel="noopener noreferrer">View project</a></section>
      </main>`,
    ),
    right: page(
      "right",
      3,
      `<header class="ph center"><h2>Training & Certificates</h2></header>
      <main>
      <div class="course"><div style="display:flex;flex-direction:row;align-items:flex-start; gap:16px;"><span class="yr">2026</span><div><b>Levant Samsung Innovation Campus AI Course</b><p class="meta">Samsung Levant<br/>Currently enrolled</p></div></div><img src="assets/images/course-images/sic_course.png" alt="Samsung Course Image" class="course-img"></div>  
      <div class="course"><div style="display:flex;flex-direction:row;align-items:flex-start; gap:16px;"><span class="yr">2026</span><div><b>Microsoft Azure AI Fundamentals<br/> <span style="font-weight: 100;font-size: 0.9em;color: #c30b0b;">AI-900</span></b><p class="meta">Microsoft <br/> Preparing for the Exam</p></div></div><img src="assets/images/course-images/azure_course.png" alt="Microsoft Course Image" class="course-img"></div>     
      <div class="course"><div style="display:flex;flex-direction:row;align-items:flex-start; gap:16px;"><span class="yr">2026</span><div><b>AWS AI Practitioner <br/><span style="font-weight: 100;font-size: 0.9em;color: #c30b0b;">AIF-C01</span></b><p class="meta">Amazon Web Services <br/>Preparing for the Exam</p></div></div><img src="assets/images/course-images/aws_ai_course.png" alt="AWS AI Course Image" class="course-img"></div>
      <div class="course"><div style="display:flex;flex-direction:row;align-items:flex-start; gap:16px;"><span class="yr">2025</span><div><b>AWS Cloud Practitioner <br/><span style="font-weight: 100;font-size: 0.9em;color: #c30b0b;">CLF-C02</span></b><p class="meta">Amazon Web Services<br/> <a href="https://www.credly.com/badges/66c09cae-6b19-46ac-85ba-635d8c7f7513/" target="_blank" rel="noopener noreferrer">View the Badge</a></p></div></div><img src="assets/images/course-images/aws_course.webp" alt="AWS Cloud Course Image" class="course-img"></div>
    </main>`,
    ),
  },
  {
    section: "experience",
    left: page(
      "left",
      4,
      `<header class="ph">${HOME}<h1>Experience</h1></header>
      <main>
      <section class="entry">
      <h3><span class="mark">Junior Data Scientist</span></h3><p class="meta"><a href="https://www.gwclogistics.com/" target="_blank" title="GWC Logistics Website">GWC Logistics</a> &middot; 3 months</p>
      <p>During this temporary contract role, I worked on 4 projects<br/><span class="mark" style="background: linear-gradient(transparent 38%, rgb(121 255 254 / 66%) 58%);font-size: 12px;}">click on the cards to view them</span></p>
      </section>
      <div class="cardstack">
          <div class="tcard"><span class="title">1. Agentic Multimodal RAG Chatbot</span> Built an assistant that answers questions over a freight-forwarding project PDFs and meeting transcripts, with Docling-based extraction of tables and images and hierarchical parent/child retrieval over a Chroma vector store.<br/>Delivered a Streamlit chat interface (LangChain + Ollama) that surfaces the referenced tables and images alongside answers.<div class="shot" ><div class="img"><img src="assets/images/project-images/gwc_task1.jpg" alt=""></div><small>Project Architecture</small></div></div>
          <div class="tcard"><span class="title">2. AI Document Parsing</span>Built a prototype OCR and HCR engine that extracts printed and handwritten text from scans and PDFs with per-word confidence scores, exporting structured data for downstream pipelines, which helped in solving a six-month bottleneck and reduced reliance on third-party tools.<br/>Evaluated a modular deep-learning pipeline against a single-step vision-language model (Qwen 2.5) and chose the modular approach.<div class="shots"><div class="shot" ><div class="img"><img src="assets/images/project-images/gwc_task2.png" alt=""></div><small>Project Architecture</small></div><div class="shot" ><div class="img"><img src="assets/images/project-images/gwc_task2_2.png" alt=""></div><small>Project Prototype</small></div></div></div>
          <div class="tcard"><span class="title">3. Freight Email Processor</span>Designed an email-to-lead automation pipeline using 12 custom Claude Skills orchestrated across 5 stages to parse emails, extract shipment data, validate information, store records, and automate responses, achieving 98.6% recall against human-logged records. <div class="shot"><div class="img"><img src="assets/images/project-images/gwc_task3_.png" alt=""></div><small>System Design</small></div></div>
          <div class="tcard"><span class="title">4. Lead Maturity Automation Through Email Tracking & Analytics</span>Designed a workflow to track HubSpot email follow-ups with agents and managers, with activity reporting through a centralized dashboard. I designed 2 versions of this workflow, one for the marketing team and the other for the CEO.<div class="shot"><div class="img"><img src="assets/images/project-images/gwc_task4_.png" alt=""></div><small>System Design</small></div></div>
      </div>
      </main>
`,
    ),
    right: page(
      "right",
      5,
      `
      <main>
      <section class="entry">
      <h3><span class="mark">AI Intern</span></h3>
      <p class="meta"><a href="https://www.adstratech.com/" target="_blank" title="ADSTRA Website">ADSTRA – AI Fintech Solutions</a> &middot; 3 months</p><p>I had a great internship experience at ADSTRA where I got to work on some really cool projects.<br/><span class="mark" style="background: linear-gradient(transparent 38%, rgb(121 255 254 / 66%) 58%);font-size: 12px;}">click on the cards to view them</span></p>
      </section>
      <div class="cardstack">
          <div class="tcard"><span class="title">1. AI-powered Anti-Money Laundry</span>Enhanced an AML name similarity model accuracy by 20% by identifying and resolving critical data quality issues.<div class="shots"><div class="shot" ><div class="img"><img src="assets/images/project-images/adstra_task1.png" alt=""></div><small>Names Clustering</small></div><div class="shot" ><div class="img"><img src="assets/images/project-images/adstra_task1_2.png" alt=""></div><small>Training Results</small></div><div class="shot" ><div class="img"><img src="assets/images/project-images/adstra_task1_4.png" alt=""></div><small>Testing</small></div><div class="shot" ><div class="img"><img src="assets/images/project-images/adstra_task1_3.png" alt=""></div><small>Evaluation</small></div></div></div>
          <div class="tcard"><span class="title">2. Rule-based Fraud Detection</span>Developed a fraud detection system prototype that preprocesses transaction records stored in a MySQL database and identifies potentially fraudulent activity using predefined rule-based checks, Utilizing SQLAlchemy ORM for maintainability and scalability. <br/>This approach was chosen due to data availability constraints, without relying on a sufficiently large labeled dataset to train a machine learning model.<div class="shots"><div class="shot" ><div class="img"><img src="assets/images/project-images/adstra_task2.png" alt=""></div><small>Results Plot</small></div>    <div class="shot" ><div class="img"><img src="assets/images/project-images/adstra_task2_2.png" alt=""></div><small>Results</small></div>  </div></div>
          <div class="tcard"><span class="title">3. Text2SQL query generator</span>Built a text-to-SQL query generator by fine-tuning the Llama-2-7B using QLoRA on 2,000+ domain-specific query pairs. Prepared and cleaned training and validation datasets, explored database schemas, and implemented SQL validation workflows to improve the quality and consistency of fine-tuning examples. Generated synthetic NL2SQL training examples to expand the available dataset.<div class="shot" ><div class="img"><img src="assets/images/project-images/adstra_task3.png" alt=""></div><small>Model Output vs. Human Baseline</small></div> </div>
          <div class="tcard"><span class="title">4. Agentic Database Chatbot</span>Designed an agentic database chatbot prototype that enables clients to query databases through conversations. After user questions are translated into SQL queries, the LangChain agent execute them against a SQLite database, and return conversational responses with tabular results. Also implemented user-to-database mapping and integrated it with a Django web application.<div class="shot" ><div class="img"><img src="assets/images/project-images/adstra_task4.png" alt=""></div><small>Chat Interface</small></div></div>
          </div>
      
      </main>
`,
    ),
  },
  {
    section: "experience",
    left: page(
      "left",
      6,
      `
      <main>
      <section class="entry">
      <h3><span class="mark">Data Science Intern</span></h3>
      <p class="meta"><a href="https://www.jo.zain.com/english/" target="_blank" title="Zain Jordan Website">Zain Jordan</a> &middot; 3 months</p><p>I worked on 2 projects.<br/><span class="mark" style="background: linear-gradient(transparent 38%, rgb(121 255 254 / 66%) 58%);font-size: 12px;}">click on the cards to view them</span></p>
      </section>
      <div class="cardstack">
          <div class="tcard"><span class="title">1. Building a classification model for HR data</span> Trained multiple ML models for a job status classification problem. Standardized 12,000+ job titles into clusters, and engineered features after analysis.<div class="shots"><div class="shot"><div class="img"><img src="assets/images/project-images/zain_task1_1.png" alt=""></div><small>EDA</small></div><div class="shot"><div class="img"><img src="assets/images/project-images/zain_task1_2.png" alt=""></div><small>processing</small></div><div class="shot"><div class="img"><img src="assets/images/project-images/zain_task1_3.png" alt=""></div><small>feature engineering</small></div><div class="shot"><div class="img"><img src="assets/images/project-images/zain_task1_4.png" alt=""></div><small>ML evaluation</small></div></div></div>
          <div class="tcard"><span class="title">2. Agentic Database Chatbot</span>Performed EDA and feature engineering across three datasets, addressing missing values and detecting outliers to improve data quality. Developed a Streamlit-based conversational chatbot using LangChain’s pre-built SQL agent and GPT-4o-mini, enabling users to query SQLite databases using natural language. Integrated conversational memory and an interactive data visualization dashboard to provide better insight.<div class="shots"><div class="shot"><div class="img"><img src="assets/images/project-images/zain_task2_1.png" alt=""></div><small>EDA</small></div><div class="shot"><div class="img"><img src="assets/images/project-images/zain_task2_2.png" alt=""></div><small>Chatbot</small></div></div></div>
      </div>
      </main>`,
    ),
    right: page(
      "right",
      7,
      `
      <main>
      <section class="entry">
      <h3><span class="mark">Software Engineering Intern</span></h3>
      <p class="meta"><a href="https://optimumpartners.com/" target="_blank" title="Optimum Partners Global's Website">Optimum Partners Global</a> &middot; 2 months</p><p>I trained on front-end projects here.<br/><span class="mark" style="background: linear-gradient(transparent 38%, rgb(121 255 254 / 66%) 58%);font-size: 12px;}">click on the cards to view them</span></p>
      </section>
      <div class="cardstack">
        <div class="tcard"><span class="title">1. Web Page Cloning with HTML, CSS, and JavaScript</span> Recreated multiple web pages to strengthen front-end development skills, focusing on clean HTML structure, consistent naming conventions, organized file architecture, and maintainable code.<div class="shots"><div class="shot"><div class="img"><img src="assets/images/project-images/op_task1.png" alt=""></div><small>Clone One</small></div><div class="shot"><div class="img"><img src="assets/images/project-images/op_task2.png" alt=""></div><small>Clone Two</small></div><div class="shot"><div class="img"><img src="assets/images/project-images/op_task3.png" alt=""></div><small>Clone Three</small></div></div></div>
        <div class="tcard"><span class="title">2. React Component Cloning</span>Recreated web components using React, applying best practices for component organization, naming conventions, and file structure. Practiced component-based development, state management, and the use of props and hooks to build reusable, interactive interfaces.<div class="shots"><div class="shot"><div class="img"><img src="assets/images/project-images/op_task4.png" alt=""></div><small>Clone four</small></div><div class="shot"><div class="img"><img src="assets/images/project-images/op_task5.png" alt=""></div><small>Clone five</small></div><div class="shot"><div class="img"><img src="assets/images/project-images/op_task6.png" alt=""></div><small>Clone six</small></div></div></div>
      </div>
      </main>
`,
    ),
  },
  {
    section: "projects",
    left: page(
      "left",
      8,
      `<header class="ph">${HOME}<h1>Projects</h1></header>
      <main>
      <section class="entry proj">
      <h3><span class="mark">Coursework Projects</span></h3>
      <ul>
      <li><div>Stock Price Prediction with LSTM<p class="meta">Tech or tools used include</p></div><a class="stk" data-link="githubUrl" href="#">View project</a></li>
      <li><div>Telecom Customer Churn Analysis<p class="meta">Tech or tools used</p></div><a class="stk" data-link="githubUrl" href="#">View project</a></li>
      <li><div>ML-Guided Optimization for Capital Budgeting Problems<p class="meta">Tech or tools used</p></div><a class="stk" data-link="githubUrl" href="#">View project</a></li>
      <li><div>Frozen dessert market-share optimization<p class="meta">Tech or tools used</p></div><a class="stk" data-link="githubUrl" href="#">View project</a></li>
      <li><div>a Graphical solver that solves 2D and 3D LP problems<p class="meta">Tech or tools used</p></div><a class="stk" data-link="githubUrl" href="#">View project</a></li>
      <li><div>Students well-being in jordanian schools form data analysis<p class="meta">Tech or tools used</p></div><a class="stk" data-link="githubUrl" href="#">View project</a></li>
      
      </ul>
      </section>
      </main>`,
    ),
    right: page(
      "right",
      9,
      `
      <main>
      <section class="entry proj">
      <ul> 
      <li><div>AI-Driven SOC Dashboard for Anomaly Detection<p class="meta">Tech or tools used</p></div><a class="stk" data-link="githubUrl" href="#">View project</a></li>
      <li><div>Winkly search engine<p class="meta">Tech or tools used</p></div><a class="stk" data-link="githubUrl" href="#">View project</a></li>
      </ul>
      </section>

      <section class="entry proj">
      <h3><span class="mark">Kaggle Projects</span></h3>
      <ul>
      <li><div>Predicting diamond prices<p class="meta">Tech or tools used</p></div><a class="stk" data-link="githubUrl" href="#">View project</a></li>
      <li><div>Metastatic Cancer Prediction<p class="meta">Tech or tools used</p></div><a class="stk" data-link="githubUrl" href="#">View project</a></li>
      <li><div>Analysis of Classification Algorithms for Movies Data<p class="meta">Tech or tools used</p></div><a class="stk" data-link="githubUrl" href="#">View project</a></li>
      </ul>
      </section>
      
      <section class="entry proj">
      <h3><span class="mark">Personal Projects</span></h3>
      <ul>
      <li><div>One Piece Analysis<p class="meta">Tech or tools used</p></div><a class="stk" data-link="githubUrl" href="#">View project</a></li>
      <li><div>Awn: Computer-Vision<p class="meta">Tech or tools used</p></div><a class="stk" data-link="githubUrl" href="#">View project</a></li>
      </ul>
      </section>


      <section class="note" style="gap:0px; flex-direction:row; font-size:12px;"><b>Currently Building:</b><ul><li>Bashrati: computer vision</li><li>a team of agents to perform data cleaning and EDA</li><li>University RAG</li></ul></section>
      </main>`,
    ),
  },
  {
    section: "skills",
    left: page(
      "left",
      10,
      `<header class="ph">${HOME}<h2>Technical Skills</h2></header>
      <main style="gap:0px">
      <div class="group">
      <h3><span class="mark">Tools I'm very good with:</span></h3>
      <div class="skillrow">Programming Languages
      <img src="assets/icons/skills-programming-languages-1.svg" alt="Python Language" title="Python Language">
      
      </div>
      <div class="skillrow">Data Analysis:
      <div>
<img src="assets/icons/skills-data-analysis-1.svg" alt="Pandas Library" title="Pandas Library">
<img src="assets/icons/skills-data-analysis-2.svg" alt="NumPy Library" title="NumPy Library">
</div></div>
      <div class="skillrow">Data Visualization:
      <div>
      <img src="assets/icons/skills-data-visualization-1.svg" alt="Plotly Library" title="Plotly Library">
<img src="assets/icons/skills-data-visualization-2.svg" alt="MatPlotLib Library" title="MatPlotLib Library">
<img src="assets/icons/skills-data-visualization-3.svg" alt="Seaborn Library" title="Seaborn Library">
</div></div>
      <div class="skillrow">ML and DL:<div>
<img src="assets/icons/skills-ml-and-dl-1.svg" alt="Scikit-Learn Library" title="Scikit-Learn Library">
<img src="assets/icons/skills-ml-and-dl-2.svg" alt="TensorFlow Library" title="TensorFlow Library">
      <img src="assets/icons/skills-ml-and-dl-3.svg" alt="Yolo Library" title="Yolo Library">

</div></div>

      
      <div class="skillrow">GenAI and Agents:<div>
      <img src="assets/icons/skills-genai-and-agents-1.svg" alt="LangChain Library" title="LangChain Library">
<img src="assets/icons/skills-genai-and-agents-2.svg" alt="Claude" title="Claude">
<img src="assets/icons/skills-genai-and-agents-3.svg" alt="Ollama" title="Ollama">
      <img src="assets/icons/skills-genai-and-agents-4.svg" alt="Hugging Face" title="Hugging Face">

      </div></div>
      
      <div class="skillrow">Documentation:<div>
      <img src="assets/icons/skills-documentation-1.svg" alt="Latex" title="Latex">
<img src="assets/icons/skills-documentation-2.svg" alt="Diagram.net" title="Diagram.net">
<img src="assets/icons/skills-documentation-3.svg" alt="Microsoft Office" title="Microsoft Office">
      </div></div>
      <div class="skillrow">Operating Systems:<div>
      <img src="assets/icons/skills-operating-systems-1.svg" alt="Ubonto" title="Ubonto">
      <img src="assets/icons/skills-operating-systems-2.svg" alt="Windows" title="Windows">
      </div></div>
      <div class="skillrow">Coding IDE:   <div>  
<img src="assets/icons/skills-coding-ide-1.svg" alt="Google Colab" title="Google Colab">
<img src="assets/icons/skills-coding-ide-2.svg" alt="Jupyter" title="Jupyter">
<img src="assets/icons/skills-coding-ide-3.svg" alt="VS Code" title="VS Code">
<img src="assets/icons/skills-coding-ide-4.svg" alt="Claude Code" title="Claude Code">
      
</div></div>
      
      <div class="skillrow">Web Development:<div>
      <img src="assets/icons/skills-web-development-1.svg" alt="CSS" title="CSS">
<img src="assets/icons/skills-web-development-2.svg" alt="HTML" title="HTML">
<img src="assets/icons/skills-web-development-3.svg" alt="JavaScript" title="JavaScript">
<img src="assets/icons/skills-web-development-4.svg" alt="React.js" title="React.js">
<img src="assets/icons/skills-web-development-5.svg" alt="Streamlit Framework" title="Streamlit Framework">

</div></div>
      <div class="skillrow">Cloud and DevOps:<div>
<img src="assets/icons/skills-cloud-and-devops-1.svg" alt="Amazon Web Services" title="Amazon Web Services">
<img src="assets/icons/skills-cloud-and-devops-2.svg" alt="Microsoft Azure" title="Microsoft Azure">
<img src="assets/icons/skills-cloud-and-devops-3.svg" alt="GitHub" title="GitHub">
<img src="assets/icons/skills-cloud-and-devops-4.svg" alt="GitLab" title="GitLab">
<img src="assets/icons/skills-cloud-and-devops-5.svg" alt="Microsoft Azure Foundry" title="Microsoft Azure Foundry">
</div></div>
      </div>
     </main>
      `,
    ),
    right: page(
      "right",
      11,
      `<main>
      
            <div class="group">
      <h3><span class="mark">Tools I'm familiar with:</span></h3>
      <div class="skillrow">Programming Languages:<div>
      <img src="assets/icons/skills-programming-languages-3.svg" alt="R Language" title="R Language">
<img src="assets/icons/skills-programming-languages-2.svg" alt="C++ Language" title="C++ Language">
      </div></div>
      <div class="skillrow">Document AI:<div>
<img src="assets/icons/skills-document-ai-1.svg" alt="DocLing Library" title="DocLing Library">
<img style="background:#082747; display:inline-block;" src="https://mindee.github.io/doctr/_static/Logo-docTR-white.png" alt="docTR Library" title="docTR Library"/> 

</div></div>
      <div class="skillrow">Databases:<div>
      
<img src="assets/icons/skills-databases-1.svg" alt="SQLAlchemy Framework" title="SQLAlchemy Framework">
<img src="assets/icons/skills-databases-2.svg" alt="SQLite DBMS" title="SQLite DBMS">
<img src="assets/icons/skills-databases-3.svg" alt="PostgreSQL DBMS" title="PostgreSQL DBMS">
</div></div>

<div class="skillrow">Data Visualization:<div>
      <img src="assets/icons/skills-data-visualization-4.svg" alt="Tidyverse ggplot Library" title="Tidyverse ggplot Library">
      <img src="assets/icons/skills-data-visualization-5.svg" alt="Tablue" title="Tablue">
<img src="assets/icons/skills-data-visualization-6.svg" alt="Microsoft Power BI" title="Microsoft Power BI">

      </div></div>

      <div class="skillrow">Cloud and DevOps:<div>
      <img src="assets/icons/skills-cloud-and-devops-7.svg" alt="Docker" title="Docker">

      </div></div>
      <div class="skillrow">Web Development:<div>
      <img src="assets/icons/skills-web-development-6.svg" alt="Postman" title="Postman">
      <img src="assets/icons/skills-web-development-7.svg" alt="WordPress" title="WordPress">    
      <img src="assets/icons/skills-web-development-8.svg" alt="Figma" title="Figma">
<img src="assets/icons/skills-web-development-9.svg" alt="FastAPI Library" title="FastAPI Library">
<img src="assets/icons/skills-web-development-11.svg" alt="Django Framework" title="Django Framework">
            </div>
</div>
      </div>

      
      <div class="group">
      <h3><span class="mark">In general, I enjoy:</span></h3>
      <ul>
      <li>Research, reading papers and knowing every new about AI</li>
      <li>Visualizing data</li>
      <li>Finding and designing solutions that cost 0$</li>
      <li>Building agents that will replace me!</li>
      </ul>
      </div>
 
            
            
</main>


      

      `,
    ),
  },
  {
    section: "contact",
    left: page(
      "left",
      12,
      `<header class="ph">${HOME}<h1>Contact</h1></header>
      <div class="envzone" id="envzone">
        <div class="thanks"><h2>Thank you!</h2><p>Your letter is on its way.</p><p class="demo" id="demo"></p>
          <button class="another" type="button" data-action="another"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l1-4L14 3l3 3L7 16z"/></svg>Write another message</button></div>
        
          <div class="env" id="env">
          <div class="env-back"></div><div class="env-flap" id="flap"></div>
          
          <div class="clip-fun">
          <form class="letter" id="contact-form" novalidate>
            <p>${FIRST},</p>
            <p>This is <input class="inp" id="f-name" name="name" type="text" autocomplete="name" placeholder="your name" aria-label="Your name">, and I&rsquo;d like to chat.</p>
            <p>You can reach me at<input class="inp wide" id="f-email" name="email" type="email" autocomplete="email" placeholder="your email" aria-label="Your email"></p>
            <p>Here&rsquo;s what I&rsquo;m thinking:<textarea class="inp msg" id="f-msg" name="message" placeholder="your message" aria-label="Your message"></textarea></p>
            <button class="send" type="submit">Send</button>
          </form>
          </div>
          
<div class="env-pocket"><div class="env-bottom"><i class="fl"></i><i class="fr"></i><i class="fb"></i></div></div>
          
        </div>
      </div>`,
    ),
    right: page(
      "right",
      13,
      `<div class="card"><div class="card-name">${CONFIG.name}</div><div class="card-role">${CONFIG.role}</div><div class="card-rule"></div><div class="card-mail" id="card-mail">${CONFIG.email}</div></div>
      <div class="bio"><div class="polaroid"><i class="tape"></i><img src="assets/images/personal-images/grad2.jpeg" alt="Profile Image" class="grad-img"><small>that&rsquo;s me</small></div>
        <p class="blurb">i am always open to aspiring disscussions and opportunities. so dont hesitate to contact me!</p></div>
      <h2 class="find">Find me here</h2>
      <div class="links"><a class="stk" data-link="linkedinUrl" href="#">LinkedIn</a><a class="stk" data-link="githubUrl" href="#">GitHub</a></div>`,
    ),
  },
];
const SECTIONS = {
  welcome: { label: 'Welcome', ready: true },
  education: { label: 'Education', ready: true },
  experience: { label: 'Experience', ready: true },
  projects: { label: 'Projects', ready: true },
  skills: { label: 'Skills', ready: true },
  contact: { label: 'Contact', ready: true }
};
const rangeOf = id => { const idx = SPREADS.map((s, i) => s.section === id ? i : -1).filter(i => i >= 0); return [idx[0], idx[idx.length - 1]]; };

/* ===== Build the leaves ===== */
const book = $('#book'), stage = $('#stage'), scaler = $('#scaler'), band = $('#band');
const N = SPREADS.length + 1;
const coverFront = `<div class="sticker"><h1 aria-label="${CONFIG.name} Portfolio"><span class="nm">${CONFIG.name.split(' ')[0]}</span><span class="nm">${CONFIG.name.split(' ').slice(1).join(' ')}</span><span class="pf">Portfolio</span></h1>
  <svg viewBox="0 0 170 20" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"><path d="M4 12c14-12 26 10 40 0s26 10 40 0 26 10 40 0 26 8 40 0"/></svg></div>
  <p class="tagline">${CONFIG.tagline}</p>`;



const TABS = [
  { id: 'education', leaf: rangeOf('education')[0], top: -380, cls: '' },
  { id: 'experience', leaf: rangeOf('experience')[0], top: -180, cls: 'd1' },
  { id: 'projects', leaf: rangeOf('projects')[0], top: 20, cls: 'd2' },
  { id: 'skills', leaf: rangeOf('skills')[0], top: 220, cls: 'd3' }
];




const leaves = [];
for (let j = 0; j < N; j++) {
  const el = document.createElement('div');
  el.className = 'leaf' + (j === 0 ? ' cover' : '');
  const front = j === 0 ? coverFront : SPREADS[j - 1].right;
  const back = j < SPREADS.length ? SPREADS[j].left : '';
  setPageMarkup(el, `<div class="face front">${front}<div class="shade"></div></div><div class="face back">${back}<div class="shade"></div></div>`);
  if (j === 0) {
    const insideCover = el.querySelector('.face.back');
    insideCover.dataset.action = 'home';
    insideCover.setAttribute('aria-label', 'Click to close the notebook');
    const coverOpen = document.createElement('button');
    coverOpen.className = 'cover-open-trigger';
    coverOpen.type = 'button';
    coverOpen.dataset.action = 'section:welcome';
    coverOpen.setAttribute('aria-label', 'Open the notebook');
    coverOpen.title = 'Open to About';
    el.querySelector('.face.front').appendChild(coverOpen);
  }
  TABS.filter(t => t.leaf === j).forEach(t => {
  const wrap = document.createElement('div');
  wrap.className = 'tabwrap';
  wrap.style.cssText = `left:${j === 0 ? 488 : 476}px;top:${t.top - (j === 0 ? -404 : -396)}px;width:${j === 0 ? 52 : 62}px`;
  wrap.innerHTML = ['front', 'back'].map(f => `<button class="tab ${f} ${t.cls}" type="button" data-action="section:${t.id}">${SECTIONS[t.id].label}</button>`).join('');
  el.appendChild(wrap);
});
  
  el.style.zIndex = N + 2 - j;
  book.appendChild(el);
  leaves.push({ j, el });
}
const isFlipped = (j, s) => j <= s;



/* ===== Phone notebook: top-bound, pages flip vertically ===== */
const dscaler = document.createElement('div'); dscaler.id = 'dscaler';
const deckEl = document.createElement('div'); deckEl.id = 'deck';
dscaler.appendChild(deckEl); document.body.appendChild(dscaler);
const DPAGES = SPREADS.flatMap(sp => sp.section === 'contact'
  ? [sp.right, sp.left]
  : [sp.left, sp.right]);                                                // phone reading order
const dsheets = [0, ...DPAGES].map((_, i) => {
  const el = document.createElement('div');
  el.className = 'psheet' + (i === 0 ? ' pcover' : '');
  el.innerHTML = `<div class="face front">${i === 0 ? coverFront : ''}<div class="shade"></div></div><div class="face back"></div>`;
  deckEl.appendChild(el);
  return el;
});
const bind = document.createElement('div'); bind.className = 'pbind'; deckEl.appendChild(bind);

const ppad = document.createElement('a');
ppad.className = 'ppad'; ppad.dataset.link = 'cvUrl'; ppad.href = '#';
ppad.setAttribute('aria-label', 'Open my CV (PDF) in a new tab'); ppad.innerHTML = '<span>CV</span>';
dscaler.insertBefore(ppad, deckEl);







const contactCardPage = DPAGES.indexOf(SPREADS.find(sp => sp.section === 'contact').right);
const pcard = document.createElement('button');
pcard.className = 'pcard'; pcard.type = 'button'; pcard.dataset.action = 'section:contact'; pcard.setAttribute('aria-label', 'Contact');
pcard.innerHTML = '<span class="ct-label"><svg viewBox="0 0 34 26" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="30" height="20" rx="2"/><path d="M3 5l14 11L31 5"/></svg>Contact</span><span class="ct-info"><span class="card-name"></span><span class="card-role"></span><span class="card-rule"></span><span class="card-mail"></span></span>';
pcard.querySelector('.card-name').textContent = CONFIG.name;
pcard.querySelector('.card-role').textContent = CONFIG.role;
pcard.querySelector('.card-mail').textContent = CONFIG.email;
dsheets[contactCardPage + 1].querySelector('.face.front').appendChild(pcard);
const orig = [];
SPREADS.forEach((sp, i) => {
  const lf = leaves[i].el.querySelector('.face.back'), rf = leaves[i + 1].el.querySelector('.face.front');
  const left = { node: lf.querySelector('.pg'), face: lf };
  const right = { node: rf.querySelector('.pg'), face: rf };
  orig.push(...(sp.section === 'contact' ? [right, left] : [left, right]));
});

// contact spread: the header + page number sit on the form page on desktop, on the first (bio) page on phone
const ci = SPREADS.findIndex(sp => sp.section === 'contact');
const cLeft = orig[2 * ci + 1].node, cRight = orig[2 * ci].node;       // orig holds [right, left] for contact
const cHead = cLeft.querySelector('header.ph');
const cNoL = cLeft.querySelector('.pgno'), cNoR = cRight.querySelector('.pgno');
const noL = cNoL.textContent, noR = cNoR.textContent;
const placeContactHeader = phone => {
  (phone ? cRight : cLeft).prepend(cHead);
  cNoL.textContent = phone ? noR : noL;
  cNoR.textContent = phone ? noL : noR;
};






let dk = 0, pagesIn = 'desk';                                            // dk = sheet on top (0 = cover)
const deckSection = () => dk === 0 ? null : SPREADS[Math.floor((dk - 1) / 2)].section;

const seatCard = () => deckEl.classList.toggle('seated', dk > contactCardPage);

const WINDOW = 1;
const inWindow = i => i === 0 || Math.abs(i - dk) <= WINDOW || i === contactCardPage + 1;
let cullT;
function updateSheetWindow(instant = false, settleDelay = 1700) {
  dsheets.forEach((el, i) => {
    if (inWindow(i)) {
      el.style.visibility = '';
      loadImagesIn(el);
    }
  });
  clearTimeout(cullT);
  cullT = setTimeout(() => dsheets.forEach((el, i) => {
    if (!inWindow(i)) {
      el.style.visibility = 'hidden';
      releaseImagesIn(el);
    }
  }), instant ? 0 : settleDelay);
}





function deckApply(t, opts = {}) {
  const from = dk;
  if (t === from) return;
  dk = t;
  const instant = !!opts.instant || reduced, total = dsheets.length;
  const changing = dsheets.map((_, i) => i).filter(i => (i < t) !== (i < from)).sort((a, b) => t > from ? a - b : b - a);
  const closingBook = t === 0 && from > 0;
  const keep = new Set(closingBook || changing.length <= 5
    ? changing
    : [...changing.slice(0, 4), changing[changing.length - 1]]);
  const duration = closingBook ? 500 : opts.unit ? 1000 : 800;
  const gap = instant || opts.unit ? 0 : closingBook ? 65 : Math.min(90, 700 / Math.max(1, keep.size));
  let k = 0;

  dsheets.forEach((el, i) => { el.style.zIndex = i < t ? i + 2 : total + 2 - i; });
  seatCard();
  changing.forEach(i => {
    const anim = keep.has(i);
    const d = anim ? k++ * gap : 0, dur = instant ? 0 : duration;
    dsheets[i].style.transition = anim
      ? `transform ${dur}ms var(--ease) ${d}ms, z-index 0s linear ${d + dur / 2}ms`
      : 'none';
    dsheets[i].classList.toggle('flipped', i < t);
  });

  keep.forEach(i => { dsheets[i].style.visibility = ''; });

  const settleDelay = changing.length ? (keep.size - 1) * gap + (instant ? 0 : duration) + 100 : 1700;
  updateSheetWindow(instant, Math.max(1700, settleDelay));
  if (!opts.fromHash) syncHash();
  updateUI();
}
function rehome() {
  if (mode === 'phone') {
    dk = state.s < 0 ? 0 : 2 * state.s + 1 + (state.side === 'R' ? 1 : 0);
    orig.forEach((o, p) => { const f = dsheets[p + 1].querySelector('.face.front'); f.insertBefore(o.node, f.querySelector('.shade')); });
    dsheets.forEach((el, i) => { el.style.transition = 'none'; el.classList.toggle('flipped', i < dk); el.style.zIndex = i < dk ? i + 2 : dsheets.length + 2 - i; });
    placeContactHeader(true);          // <- add, before seatCard();
    seatCard();
    updateSheetWindow(true);

    seatCard();
    updateSheetWindow(true);
  } else {
    placeContactHeader(false);
    orig.forEach(o => o.face.insertBefore(o.node, o.face.querySelector('.shade')));
    setState({ s: dk === 0 ? -1 : Math.floor((dk - 1) / 2), side: 'L' }, { instant: true, fromHash: true });
  }
  pagesIn = mode;
}
deckEl.addEventListener('click', e => {
  if (e.target.closest('a,button,input,textarea,label,.cardstack,[data-action]')) return;
  if (dk > 0 && e.clientY / innerHeight < .18) prev(); else next();
});
function updatePhoneUI() {
  const sec = deckSection();
  document.querySelectorAll('#tabbar [data-sec]').forEach(b => b.setAttribute('aria-current', b.dataset.sec === sec ? 'true' : 'false'));
  $('#controls').dataset.state = dk === 0 ? 'closed' : 'open';
  $('#hint').textContent = 'Tap the cover to open';
  if (dk === 0) return;
}













/* ===== State ===== */
const FLIP = reduced ? 1 : 950, STAG = reduced ? 0 : 120, BAND = reduced ? 0 : 480;
const state = { s: -1, side: 'L' };
let mode = 'desk';
const sectionOf = s => s < 0 ? null : SPREADS[s].section;
let desktopImageCull;

function updateDesktopImages(spread, delay = 0) {
  const faces = spread < 0
    ? [leaves[0].el.querySelector('.face.front')]
    : [leaves[spread].el.querySelector('.face.back'), leaves[spread + 1].el.querySelector('.face.front')];
  faces.forEach(loadImagesIn);
  clearTimeout(desktopImageCull);
  desktopImageCull = setTimeout(() => {
    book.querySelectorAll('img[src][data-src]').forEach(img => {
      if (!faces.some(face => face.contains(img))) img.removeAttribute('src');
    });
  }, delay);
}

function layout() {
  const vw = innerWidth, vh = innerHeight;
  mode = vw <= 760 ? 'phone' : 'desk';
  root.dataset.mode = mode;

  if (mode !== pagesIn) rehome();


  let S, cy;
  if (mode === 'desk') {
    const availH = vh - 70;
    S = Math.min(vw / 1120, availH / 960, 1.25);
    // S = Math.min(vw / 1200, availH / 960, 1.25);
    cy = availH / 2 + 26 * S;
  } else {
    const availH = vh - 128;
    // S = Math.min((vw - 24) / 500, availH / 830);
    // cy = availH / 2 + 8;
    S = Math.min((vw - 56) / 500, (availH - 60) / 830);
    cy = availH / 2 + 30;
  }
  scaler.style.transform = dscaler.style.transform = `translate(0px,${cy}px) scale(${S})`;
}
const shiftFor = (s, side) => s < 0 ? -244 : mode === 'phone' ? (side === 'L' ? 238 : -238) : 0;

function setState(t, opts = {}) {
  const from = { s: state.s, side: state.side };
  if (t.s === from.s && t.side === from.side) return;
  state.s = t.s; state.side = t.side;
  const coverOpen = $('.cover-open-trigger');
  if (coverOpen) coverOpen.style.pointerEvents = t.s < 0 ? 'auto' : 'none';
  const instant = !!opts.instant;
  const forward = t.s > from.s;
  const opening = from.s < 0 && t.s >= 0, closing = from.s >= 0 && t.s < 0;
  const changing = leaves.filter(l => isFlipped(l.j, t.s) !== isFlipped(l.j, from.s)).sort((a, b) => forward ? a.j - b.j : b.j - a.j);
  const lead = instant ? 0 : opening ? BAND : 0;
  const dur = instant ? 0 : opts.unit ? 1000 : FLIP;
  let lastDelay = lead, coverDelay = 0;
  leaves.forEach(l => { const f = isFlipped(l.j, t.s); l.el.style.zIndex = f ? l.j + 2 : N + 2 - l.j; });
  changing.forEach((l, i) => {
    const d = instant ? 0 : lead + (opts.unit ? 0 : i * STAG);
    lastDelay = Math.max(lastDelay, d);
    if (l.j === 0) coverDelay = d;
    l.el.style.transition = `transform ${dur}ms var(--ease) ${d}ms, z-index 0s linear ${d + dur / 2}ms`;
    l.el.classList.toggle('flipped', isFlipped(l.j, t.s));
    if (!instant && !reduced) l.el.querySelectorAll('.shade').forEach(sh =>
      sh.animate([{ opacity: 0 }, { opacity: .3, offset: .5 }, { opacity: 0 }], { duration: dur, delay: d, easing: 'linear' }));
  });
  const sd = (opening || closing) ? coverDelay : 0;
  stage.style.transition = `transform ${dur}ms var(--ease) ${sd}ms`;
  stage.style.transform = `translateX(${shiftFor(t.s, t.side)}px)`;
  book.style.setProperty('--cdelay', sd + 'ms');
  const bd = instant ? 0 : closing ? Math.max(0, lastDelay + FLIP - 250) : 0;
  const bt = instant ? 0 : 560;
  band.style.transition = `transform ${bt}ms var(--ease) ${bd}ms, z-index 0s linear ${opening ? bd + bt : bd}ms`;
  book.classList.toggle('open', t.s >= 0);
  const imageDelay = instant ? 0 : lead + Math.max(0, changing.length - 1) * (opts.unit ? 0 : STAG) + dur;
  updateDesktopImages(t.s, imageDelay);
  updateUI();
  if (!opts.fromHash) syncHash();
}

function updateUI() {
  if (mode === 'phone') return updatePhoneUI();
  const sec = sectionOf(state.s);
  book.classList.toggle('at-contact', sec === 'contact');
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('current', t.dataset.action === 'section:' + sec));

  document.querySelectorAll('#tabbar [data-sec]').forEach(b => b.setAttribute('aria-current', b.dataset.sec === sec ? 'true' : 'false'));
  const ctl = $('#controls');
  ctl.dataset.state = state.s < 0 ? 'closed' : 'open';
  $('#hint').textContent = mode === 'phone' ? 'Tap the cover to open my portfolio' : 'Click the cover to open my portfolio or just click directly on the bookmarks to navigate sections, cv papers to download my cv or the contact card to navigate to contact page';
  document.querySelectorAll('.turn').forEach(button => { button.style.pointerEvents = 'none'; });
  if (state.s < 0) { book.classList.remove('can-next', 'can-prev'); return; }
  const phone = mode === 'phone';
  const lastSpread = SPREADS.length - 1;
  const cp = phone ? (state.side === 'R' || state.s > 0) : state.s > 0;
  const cn = phone ? (state.side === 'L' || state.s < lastSpread) : true;
  book.classList.toggle('can-next', cn); book.classList.toggle('can-prev', cp);
  if (!phone) {
    const previousCorner = leaves[state.s]?.el.querySelector('.face.back .turn.prev');
    const nextCorner = leaves[state.s + 1]?.el.querySelector('.face.front .turn.next');
    if (cp && previousCorner) previousCorner.style.pointerEvents = 'auto';
    if (cn && nextCorner) nextCorner.style.pointerEvents = 'auto';
  }
}

/* ===== Navigation ===== */
let lastHash = null;
function syncHash() {
  const id = (mode === 'phone' ? deckSection() : sectionOf(state.s)) || 'cover';
  lastHash = id;
  try { if (location.hash.slice(1) !== id) location.hash = id; } catch (e) {}
}
function goSection(id, opts) {
  const sec = SECTIONS[id];
  if (!sec) return;
  if (!sec.ready) { toast(sec.label + ' is coming in the next milestone.'); return; }

  if (mode === 'phone') { deckApply(2 * rangeOf(id)[0] + 1, opts); return; }

  setState({ s: rangeOf(id)[0], side: 'L' }, opts);
}
const goHome = opts => mode === 'phone' ? deckApply(0, opts) : setState({ s: -1, side: 'L' }, opts);

function next() {
  if (mode === 'phone') {
    if (dk >= dsheets.length - 1) { goHome(); return; }          // last page: close the book
    deckApply(dk + 1); return;
  }
  if (state.s < 0) return;
  if (state.s < SPREADS.length - 1) setState({ s: state.s + 1, side: 'L' });
  else goHome();
}



function prev() {
  if (mode === 'phone') { deckApply(Math.max(dk - 1, 0)); return; }

  if (state.s < 0) return;
  if (mode === 'phone' && state.side === 'R') setState({ s: state.s, side: 'L' });
  else if (state.s > 0) setState({ s: state.s - 1, side: mode === 'phone' ? 'R' : 'L' });
}
function fromHash(instant) {
  let h = ''; try { h = location.hash.slice(1); } catch (e) {}
  if (h === lastHash) return;
  lastHash = h;
  if (SECTIONS[h] && SECTIONS[h].ready) goSection(h, { instant, fromHash: true });
  else if (  (mode === 'phone' ? dk > 0 : state.s >= 0) && (h === '' || h === 'cover')) goHome({ instant, fromHash: true });

}

/* ===== Toast, links, copy ===== */
let toastT;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2800);
}
document.querySelectorAll('[data-link]').forEach(a => {
  const url = CONFIG[a.dataset.link];
  if (!url) return;
  a.href = url;
  if (a.dataset.link === 'cvUrl') {
    a.download = url.split('/').pop();
    a.removeAttribute('target');
    return;
  }
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
});
document.addEventListener('click', e => {
  const lk = e.target.closest('[data-link]');
  if (lk && !CONFIG[lk.dataset.link]) { e.preventDefault(); toast('Add this link in CONFIG at the top of the script.'); return; }
  const a = e.target.closest('[data-action]');
  if (!a) return;
  const act = a.dataset.action;
  if (act === 'home') goHome();
  else if (act === 'next') next();
  else if (act === 'prev') prev();
  else if (act === 'another') resetEnvelope();
  else if (act === 'copy-email') copyEmail();
  else if (act.startsWith('section:')) goSection(act.slice(8));
});
function copyEmail() {
  const sel = () => { const r = document.createRange(); r.selectNodeContents($('#card-mail')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
  try {
    navigator.clipboard.writeText(CONFIG.email).then(() => toast('Email copied'), () => { sel(); toast('Press Ctrl/Cmd+C to copy the email'); });
  } catch (e) { sel(); toast('Press Ctrl/Cmd+C to copy the email'); }
}
document.addEventListener('keydown', e => {
  if (e.target.closest('input,textarea')) return;
  if (e.key === 'ArrowRight') next();
  else if (e.key === 'ArrowLeft') prev();
  else if (e.key === 'Escape' && state.s >= 0) goHome();
});
let sx = 0, sy = 0;
document.addEventListener('pointerdown', e => { sx = e.clientX; sy = e.clientY; });
document.addEventListener('pointerup', e => {
  if (mode !== 'phone' || e.target.closest('input,textarea,#tabbar,#controls')) return;
  const dx = e.clientX - sx, dy = e.clientY - sy;
  if (Math.abs(dx) > 50 && Math.abs(dy) < Math.abs(dx) * .7) dx < 0 ? next() : prev();
});

/* ===== Envelope ===== */
const form = $('#contact-form'), zone = $('#envzone'), env = $('#env'), flap = $('#flap');
let sending = false, anims = [];
const D = n => reduced ? 1 : n;
const run = (el, kf, o) => { const a = el.animate(kf, { fill: 'forwards', ...o }); anims.push(a); return a.finished.catch(() => {}); };
form.addEventListener('submit', async e => {
  e.preventDefault();
  if (sending) return;
  if (!form.checkValidity()) { form.reportValidity(); return; }
  sending = true;
  if (CONFIG.contactEndpoint) fetch(CONFIG.contactEndpoint, { method: 'POST', body: new FormData(form), mode: 'no-cors' }).catch(() => {});
  $('#demo').textContent = CONFIG.contactEndpoint ? '' : 'Demo mode: no form endpoint is set, so nothing was actually sent.';
  await run(form, [{ transform: 'translateY(0)', opacity: 1 }, { transform: 'translateY(350px)', opacity: 1, offset: .85 }, { transform: 'translateY(380px)', opacity: 1 }], { duration: D(1200), easing: 'cubic-bezier(.6,0,.3,1)' });
  setTimeout(() => { flap.style.zIndex = 5; }, D(400));
  await run(flap, [{ transform: 'rotateX(0)' }, { transform: 'rotateX(180deg)' }], { duration: D(800), easing: 'ease-in-out' });
  env.classList.add('fly');
await new Promise(r => setTimeout(r, D(500)));
zone.classList.add('sent');          // hides the envelope
env.classList.remove('fly');         // releases the lifted page so it can go back to its normal layer



});
function resetEnvelope() {
  env.classList.remove('fly');
  anims.forEach(a => a.cancel()); anims = [];



  flap.style.zIndex = ''; form.reset(); zone.classList.remove('sent'); sending = false;
  zone.classList.add('returning');
env.animate([{ transform: 'translateY(760px)' }, { transform: 'translateY(0)' }], { duration: D(900), easing: 'cubic-bezier(.2,.8,.3,1)' });
setTimeout(() => zone.classList.remove('returning'), D(900));



}


/* ===== Task cards (click the top card to send it to the back) ===== */
const ROT = ['rotate(2deg)', 'rotate(-1deg)', 'rotate(1.5deg)', 'rotate(3deg)', 'rotate(-2deg)'];
document.querySelectorAll('.cardstack').forEach(st => {
  st.append(...[...st.children].reverse());               // first card written = top card
  [...st.children].forEach((c, i) => c.style.setProperty('--rotation', ROT[i % ROT.length]));
});
document.addEventListener('click', e => {
  const st = e.target.closest('.cardstack');
  if (!st || st.dataset.busy || st.children.length < 2) return;
  const top = st.lastElementChild;
  if (reduced) { st.prepend(top); return; }
  st.dataset.busy = '1';
  top.classList.add('flip');
  top.addEventListener('animationend', () => { top.classList.remove('flip'); st.prepend(top); delete st.dataset.busy; }, { once: true });
});


/* ===== Boot ===== */
$('#ct-name').textContent = CONFIG.name; $('#ct-role').textContent = CONFIG.role; $('#ct-mail').textContent = CONFIG.email;

layout();
stage.style.transform = `translateX(${shiftFor(-1, 'L')}px)`;
updateUI();
addEventListener('resize', () => {
  layout();
  scaler.classList.add('no-anim');
  stage.style.transform = `translateX(${shiftFor(state.s, state.side)}px)`;
  updateUI();
  requestAnimationFrame(() => scaler.classList.remove('no-anim'));
});
addEventListener('hashchange', () => fromHash(false));
scaler.classList.add('no-anim');
fromHash(true);
requestAnimationFrame(() => requestAnimationFrame(() => scaler.classList.remove('no-anim')));
})();







            //  <button class="stk" type="button" data-action="copy-email">Copy email</button>