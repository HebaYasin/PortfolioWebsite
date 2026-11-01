window.PORTFOLIO_CONTENT = ({ CONFIG, FIRST, HOME, page }) => [
  {
    section: "welcome",
    left: page(
      "left",
      "",
      ` <div class="cover-art"><div class="sticker"><div class="grad-card-2"><div class="img-wrapper"><img src="assets/images/personal-images/grad.webp" alt="Gradient background image" class="grad-img"></div><div class="text"> done it!</div>2025<div class="deco"><span class="dotted-hearts">💛💛💛</span><span class="crown">👑</span><span class="heart_1">💗</span><span class="heart_2">💙</span><span class="heart_22">💙</span><span class="balloon_1">🎈</span><span class="balloon_2">🎈</span><span class="balloon_3">🎈</span><span class="ribbon">🎀</span><span class="heart_3">🖤</span><span class="heart_33">🖤</span><span class="heart_333">🖤</span><span class="star_1">⭐</span><span class="star_11">⭐</span><span class="teddy">🧸</span><span class="sparkles">✨</span><span class="cake">🍰</span><span class="flowers">🌷</span><span class="heart_3">🖤</span><span class="cat">🐱</span></div></div></div></div>`,
    ),
    right: page(
      "right",
      "1",
      `<header class="ph center"><h2>About me</h2></header>
      <div class="pg-body">
      <section class="entry"><p>Hi! I&rsquo;m ${FIRST}, and I&rsquo;m glad you&rsquo;re taking a look at my website! </p><br/><p>I&rsquo;m a Data Science and AI graduate at the beginning of my career, exploring opportunities to learn, build, and grow.</p></section>
      <section class="note"><b>My interests</b><p>I enjoy using data and AI to build smart solutions and solve problems. I&rsquo;m also very interested in  AI research, particularly Natural Language Processing (NLP) and Agentic AI.  <br/><br/>Outside of AI, I enjoy front-end development as a hobby, where I explore web design and bring ideas to life through code.</p></section>
      </div>
      `,
    ),
  },
  {
    section: "education",
    left: page(
      "left",
      2,
      `<header class="ph">${HOME}<h1>Education</h1></header>
      <div class="pg-body" style="gap:1rem;">
      <section class="entry"><div style="display:flex;flex-direction:column;"><h2 class="subheading"><span class="mark">Bachelor of Data Science and AI</span></h2><p class="meta">Princess Sumaya University For Technology</p></div> <div style="width:100%;display:flex; justify-content: space-between;"><p class="meta">2021 &ndash; 2025</p> <p class="meta">GPA: <span class="mark">80.8</span></p></div></section>
      <section class="note"><b>Graduation project</b><div><p>Together with my teammates <a href="https://www.linkedin.com/in/adam-abuyousef-ab5ab9253/" target="_blank" title="Adam's LinkedIn">Adam</a> and <a href="https://www.linkedin.com/in/abdelrahman-s-145a3b1ab/" target="_blank" title="Abdelrahman's LinkedIn">Abdelrahman</a> we chose to explore how AI can be used to predict local weather in Jordan, under the supervision of <a href="https://www.linkedin.com/in/mohammad-j-abdel-rahman-5b5a032a/" target="_blank" title="Dr. Mohammad's LinkedIn">Dr. Mohammad Abdel-Rahman</a>.<br/>We built a four-stage deep learning pipeline using a fine-tuned IBM Tiny Time Mixer, LSTM/ConvLSTM models, historical weather station data, and NASA satellite imagery.<br/> Despite challenges with data quality and pipeline design, the project gave us hands-on experience in AI-based weather forecasting.</p></div> 
      <div class="shot edu"><img src="assets/images/project-images/grad_project.webp" alt="Graduation Project Image"><small>Jawwak</small></div><a class="stk" href="https://github.com/abood-shehade/Weather-prediction" target="_blank" rel="noopener noreferrer">View project</a></section>
      </div>`,
    ),
    right: page(
      "right",
      3,
      `<header class="ph center"><h2>Training & Certificates</h2></header>
      <div class="pg-body">
      <div class="course"><div style="display:flex;flex-direction:row;align-items:flex-start; gap:1rem;"><span class="yr">2026</span><div><b>Levant Samsung Innovation Campus AI Course</b><p class="meta">Samsung Levant<br/>Currently enrolled</p></div></div><img src="assets/images/course-images/sic_course.webp" alt="Samsung Course Image" class="course-img"></div>
      <div class="course"><div style="display:flex;flex-direction:row;align-items:flex-start; gap:1rem;"><span class="yr">2026</span><div><b>Microsoft Azure AI Fundamentals<br/> <span style="font-weight: 100;font-size: 0.9em;color: #c30b0b;">AI-900</span></b><p class="meta">Microsoft <br/> Preparing for the Exam</p></div></div><img src="assets/images/course-images/azure_course.webp" alt="Microsoft Course Image" class="course-img"></div>
      <div class="course"><div style="display:flex;flex-direction:row;align-items:flex-start; gap:1rem;"><span class="yr">2026</span><div><b>AWS AI Practitioner <br/><span style="font-weight: 100;font-size: 0.9em;color: #c30b0b;">AIF-C01</span></b><p class="meta">Amazon Web Services <br/>Preparing for the Exam</p></div></div><img src="assets/images/course-images/aws_ai_course.webp" alt="AWS AI Course Image" class="course-img"></div>
      <div class="course"><div style="display:flex;flex-direction:row;align-items:flex-start; gap:1rem;"><span class="yr">2025</span><div><b>AWS Cloud Practitioner <br/><span style="font-weight: 100;font-size: 0.9em;color: #c30b0b;">CLF-C02</span></b><p class="meta">Amazon Web Services<br/> <a href="https://www.credly.com/badges/66c09cae-6b19-46ac-85ba-635d8c7f7513/" target="_blank" rel="noopener noreferrer">View the Badge</a></p></div></div><img src="assets/images/course-images/aws_course.webp" alt="AWS Cloud Course Image" class="course-img"></div>
    </div>`,
    ),
  },
  {
    section: "experience",
    left: page(
      "left",
      4,
      `<header class="ph">${HOME}<h1>Experience</h1></header>
      <div class="pg-body">
      <section class="entry">
      <h2 class="subheading"><span class="mark">Junior Data Scientist</span></h2><p class="meta exp"><a href="https://www.gwclogistics.com/" target="_blank" title="GWC Logistics Website">GWC Logistics</a> &middot; 3 months</p><p>During this temporary contract role, I worked on 4 projects<br/><span class="mark" style="background: linear-gradient(transparent 38%, rgb(121 255 254 / 66%) 58%);font-size: .75rem;">click on the cards to view them</span></p></section>
      <div class="cardstack">
          <div class="tcard"><span class="title">1. Agentic Multimodal RAG Chatbot</span> Built an assistant that answers questions over a freight-forwarding project PDFs and meeting transcripts, with Docling-based extraction of tables and images and hierarchical parent/child retrieval over a Chroma vector store.<br/>Delivered a Streamlit chat interface (LangChain + Ollama) that surfaces the referenced tables and images alongside answers.<div class="shot" ><div class="img"><img src="assets/images/project-images/gwc_task1.webp" alt=""></div><small>Project Architecture</small></div></div>
          <div class="tcard"><span class="title">2. AI Document Parsing</span>Built a prototype OCR and HCR engine that extracts printed and handwritten text from scans and PDFs with per-word confidence scores, exporting structured data for downstream pipelines, which helped in solving a six-month bottleneck and reduced reliance on third-party tools.<br/>Evaluated a modular deep-learning pipeline against a single-step vision-language model (Qwen 2.5) and chose the modular approach.<div class="shots"><div class="shot" ><div class="img"><img src="assets/images/project-images/gwc_task2.webp" alt=""></div><small>Project Architecture</small></div><div class="shot" ><div class="img"><img src="assets/images/project-images/gwc_task2_2.webp" alt=""></div><small>Project Prototype</small></div></div></div>
          <div class="tcard"><span class="title">3. Freight Email Processor</span>Designed an email-to-lead automation pipeline using 12 custom Claude Skills orchestrated across 5 stages to parse emails, extract shipment data, validate information, store records, and automate responses, achieving 98.6% recall against human-logged records. <div class="shot"><div class="img"><img src="assets/images/project-images/gwc_task3_.webp" alt=""></div><small>System Design</small></div></div>
          <div class="tcard"><span class="title">4. Lead Maturity Automation Through Email Tracking & Analytics</span>Designed a workflow to track HubSpot email follow-ups with agents and managers, with activity reporting through a centralized dashboard. I designed 2 versions of this workflow, one for the marketing team and the other for the CEO.<div class="shot"><div class="img"><img src="assets/images/project-images/gwc_task4_.webp" alt=""></div><small>System Design</small></div></div>
      </div>
      </div>`,
    ),
    right: page(
      "right",
      5,
      `<div class="pg-body">
      <section class="entry">
      <h2 class="subheading"><span class="mark">AI Intern</span></h2><p class="meta exp"><a href="https://www.adstratech.com/" target="_blank" title="ADSTRA Website">ADSTRA – AI Fintech Solutions</a> &middot; 3 months</p><p>I had a great internship experience at ADSTRA where I got to work on some really cool projects.<br/><span class="mark" style="background: linear-gradient(transparent 38%, rgb(121 255 254 / 66%) 58%);font-size: .75rem;">click on the cards to view them</span></p></section>
      <div class="cardstack">
          <div class="tcard"><span class="title">1. AI-powered Anti-Money Laundry</span>Enhanced an AML name similarity model accuracy by 20% by identifying and resolving critical data quality issues.<div class="shots"><div class="shot" ><div class="img"><img src="assets/images/project-images/adstra_task1.webp" alt=""></div><small>Names Clustering</small></div><div class="shot" ><div class="img"><img src="assets/images/project-images/adstra_task1_2.webp" alt=""></div><small>Training Results</small></div><div class="shot" ><div class="img"><img src="assets/images/project-images/adstra_task1_4.webp" alt=""></div><small>Testing</small></div><div class="shot" ><div class="img"><img src="assets/images/project-images/adstra_task1_3.webp" alt=""></div><small>Evaluation</small></div></div></div>
          <div class="tcard"><span class="title">2. Rule-based Fraud Detection</span>Developed a fraud detection system prototype that preprocesses transaction records stored in a MySQL database and identifies potentially fraudulent activity using predefined rule-based checks, Utilizing SQLAlchemy ORM for maintainability and scalability. <br/>This approach was chosen due to data availability constraints, without relying on a sufficiently large labeled dataset to train a machine learning model.<div class="shots"><div class="shot" ><div class="img"><img src="assets/images/project-images/adstra_task2.webp" alt=""></div><small>Results Plot</small></div>    <div class="shot" ><div class="img"><img src="assets/images/project-images/adstra_task2_2.webp" alt=""></div><small>Results</small></div>  </div></div>
          <div class="tcard"><span class="title">3. Text2SQL query generator</span>Built a text-to-SQL query generator by fine-tuning the Llama-2-7B using QLoRA on 2,000+ domain-specific query pairs. Prepared and cleaned training and validation datasets, explored database schemas, and implemented SQL validation workflows to improve the quality and consistency of fine-tuning examples. Generated synthetic NL2SQL training examples to expand the available dataset.<div class="shot" ><div class="img"><img src="assets/images/project-images/adstra_task3.webp" alt=""></div><small>Model Output vs. Human Baseline</small></div> </div>
          <div class="tcard"><span class="title">4. Agentic Database Chatbot</span>Designed an agentic database chatbot prototype that enables clients to query databases through conversations. After user questions are translated into SQL queries, the LangChain agent execute them against a SQLite database, and return conversational responses with tabular results. Also implemented user-to-database mapping and integrated it with a Django web application.<div class="shot" ><div class="img"><img src="assets/images/project-images/adstra_task4.webp" alt=""></div><small>Chat Interface</small></div></div>
      </div>
      </div>`,
    ),
  },
  {
    section: "experience",
    left: page(
      "left",
      6,
      `<div class="pg-body">
      <section class="entry">
      <h2 class="subheading"><span class="mark">Data Science Intern</span></h2><p class="meta exp"><a href="https://www.jo.zain.com/english/" target="_blank" title="Zain Jordan Website">Zain Jordan</a> &middot; 3 months</p><p>I worked on 2 projects.<br/><span class="mark" style="background: linear-gradient(transparent 38%, rgb(121 255 254 / 66%) 58%);font-size: .75rem;">click on the cards to view them</span></p></section>
      <div class="cardstack">
          <div class="tcard"><span class="title">1. Building a classification model for HR data</span> Trained multiple ML models for a job status classification problem. Standardized 12,000+ job titles into clusters, and engineered features after analysis.<div class="shots"><div class="shot"><div class="img"><img src="assets/images/project-images/zain_task1_1.webp" alt=""></div><small>EDA</small></div><div class="shot"><div class="img"><img src="assets/images/project-images/zain_task1_2.webp" alt=""></div><small>processing</small></div><div class="shot"><div class="img"><img src="assets/images/project-images/zain_task1_3.webp" alt=""></div><small>feature engineering</small></div><div class="shot"><div class="img"><img src="assets/images/project-images/zain_task1_4.webp" alt=""></div><small>ML evaluation</small></div></div></div>
          <div class="tcard"><span class="title">2. Agentic Database Chatbot</span>Performed EDA and feature engineering across three datasets, addressing missing values and detecting outliers to improve data quality. Developed a Streamlit-based conversational chatbot using LangChain’s pre-built SQL agent and GPT-4o-mini, enabling users to query SQLite databases using natural language. Integrated conversational memory and an interactive data visualization dashboard to provide better insight.<div class="shots"><div class="shot"><div class="img"><img src="assets/images/project-images/zain_task2_1.webp" alt=""></div><small>EDA</small></div><div class="shot"><div class="img"><img src="assets/images/project-images/zain_task2_2.webp" alt=""></div><small>Chatbot</small></div></div></div>
      </div>
      </div>`,
    ),
    right: page(
      "right",
      7,
      `<div class="pg-body">
      <section class="entry">
      <h2 class="subheading"><span class="mark">Software Engineering Intern</span></h2><p class="meta exp"><a href="https://optimumpartners.com/" target="_blank" title="Optimum Partners Global's Website">Optimum Partners Global</a> &middot; 2 months</p><p>I trained on front-end projects here.<br/><span class="mark" style="background: linear-gradient(transparent 38%, rgb(121 255 254 / 66%) 58%);font-size: .75rem;">click on the cards to view them</span></p></section>
      <div class="cardstack">
        <div class="tcard"><span class="title">1. Web Page Cloning with HTML, CSS, and JavaScript</span> Recreated multiple web pages to strengthen front-end development skills, focusing on clean HTML structure, consistent naming conventions, organized file architecture, and maintainable code.<div class="shots"><div class="shot"><div class="img"><img src="assets/images/project-images/op_task1.webp" alt=""></div><small>Clone One</small></div><div class="shot"><div class="img"><img src="assets/images/project-images/op_task2.webp" alt=""></div><small>Clone Two</small></div><div class="shot"><div class="img"><img src="assets/images/project-images/op_task3.webp" alt=""></div><small>Clone Three</small></div></div></div>
        <div class="tcard"><span class="title">2. React Component Cloning</span>Recreated web components using React, applying best practices for component organization, naming conventions, and file structure. Practiced component-based development, state management, and the use of props and hooks to build reusable, interactive interfaces.<div class="shots"><div class="shot"><div class="img"><img src="assets/images/project-images/op_task4.webp" alt=""></div><small>Clone four</small></div><div class="shot"><div class="img"><img src="assets/images/project-images/op_task5.webp" alt=""></div><small>Clone five</small></div><div class="shot"><div class="img"><img src="assets/images/project-images/op_task6.webp" alt=""></div><small>Clone six</small></div></div></div>
      </div>
      </div>`,
    ),
  },
  {
    section: "projects",
    left: page(
      "left",
      8,
      `<header class="ph">${HOME}<h1>Projects</h1></header>
      <div class="pg-body">
      <section class="entry proj">
      <h2 class="subheading"><span class="mark">Data Analysis Projects</span></h2>
      <ul>
      <li><div>One Piece Analysis<p class="meta">Web Scraping + NLP + Data Visualizing + ML</p></div><a class="stk"  href="https://github.com/HebaYasin/OnePieceDataAnalysis" target="_blank">View project</a></li>
      <li><div>Enhancing Students well-being in jordanian schools form data analysis<p class="meta">Data Analysis + Data Visualization</p></div><a class="stk"  href="https://github.com/HebaYasin/EnhancingStudentsWellness" target="_blank">View project</a></li>
      <li><div>Telecom Customer Churn Analysis<p class="meta">Data Visualization</p></div><a class="stk" href="https://github.com/HebaYasin/DataAnalysisofTelecomData" target="_blank">View project</a></li>  
      </ul>
      </section>
      <section class="entry proj">
      <h2 class="subheading"><span class="mark">ML/DL Projects</span></h2>
      <ul> 
      <li><div>AI-Driven SOC Dashboard for Anomaly Detection<p class="meta">Unsupervised ML+ Data Visualization</p></div><a class="stk"  href="https://github.com/llaxna/AI-driven-SOC-Dashboard" target="_blank">View project</a></li>
      <li><div>ML-Guided Optimization for Capital Budgeting Problems<p class="meta">ML + IBM CPLEX </p></div><a class="stk"  href="https://github.com/HebaYasin/ML-GuidedOptimization" target="_blank">View project</a></li>
      <li><div>Gold Price Prediction with LSTM<p class="meta">Time Series Analysis + DL </p></div><a class="stk" href="https://github.com/HebaYasin/GoldPricePredictionLSTM" target="_blank">View project</a></li>
      </ul>
      </section>
      </div>`,
    ),
    right: page(
      "right",
      9,
      `<div class="pg-body">
      <section class="entry proj">
      <ul>
      <li><div>Analysis of Classification Algorithms for Movies Data<p class="meta">EDA + ML</p></div><a class="stk" href="https://colab.research.google.com/drive/1LPuWyxpdnWAeRymv-151IYrneTh4z9DK?usp=sharing" target="_blank">View project</a></li>
      <li><div>Employee Status Prediction<<p class="meta">EDA + Feature Engineering + NLP + ML</p></div><a class="stk"  href="https://colab.research.google.com/drive/1X_Vgkl_Kct1tc0cmVBsjWdBRBIHFmQiN?usp=sharing" target="_blank">View project</a></li>
      </ul>
      </section>
      <section class="entry proj">
      <h2 class="subheading"><span class="mark">LLMs and Agents Projects</span></h2>
      <ul> 
      <li><div>Multimodal RAG Chatbot<p class="meta">Document AI  + Langchain + Ollama</p></div><a class="stk"  href="https://github.com/HebaYasin/Multimodal-RAG-Chatbot" target="_blank">View project</a></li> 
      </ul>
      </section>
      <section class="entry proj">
      <h2 class="subheading"><span class="mark">Computer Vision Projects</span></h2>
      <ul> 
      <li><div>Smart Document Parser<p class="meta">DocTr  + Image Preprocessing </p></div><a class="stk"  href="https://github.com/HebaYasin/Multimodal-RAG-Chatbot" target="_blank">View project</a></li> 
      </ul>
      </section>
      <section class="entry proj">
      <h2 class="subheading"><span class="mark">Other Projects</span></h2>
      <ul>
      <li><div>Clones of Web Components<p class="meta">HTML + CSS + JavaScript + React.js</p></div><a class="stk"  href="https://github.com/HebaYasin/" target="_blank">View projects</a></li>
      <li><div>Winkly search engine<p class="meta">NLP + Data Retrieval + wiki API</p></div><a class="stk"  href="https://github.com/HebaYasin/InformationRetreivalProject" target="_blank">View project</a></li>
      </ul>
      </section>
      <section class="note" style="gap:0rem; flex-direction:row; font-size:.75rem;"><b>Currently Building:</b><ul><li>BashratiAI Prototype</li><li>An AI harness for Pre-ML Data Pipelines that makes local LLMs perform like frontier models while minimizing token consumption.</li></ul></section>
      </div>`,
    ),
  },
  {
    section: "skills",
    left: page(
      "left",
      10,
      `<header class="ph">${HOME}<h2>Technical Skills</h2></header>
      <div class="pg-body" style="gap:0rem">
      <div class="group">
      <h3><span class="mark">Tools I'm very good with:</span></h3>
      <div class="skillrow">GenAI and Agents:<div class="tools-container"><img src="assets/icons/skills-genai-and-agents-1.svg" alt="LangChain Library" title="LangChain Library"><img src="assets/icons/skills-genai-and-agents-2.svg" alt="Claude" title="Claude"><img src="assets/icons/skills-genai-and-agents-3.svg" alt="Ollama" title="Ollama"><img src="assets/icons/skills-genai-and-agents-4.svg" alt="Hugging Face" title="Hugging Face"></div></div>
      <div class="skillrow">Programming Languages<img src="assets/icons/skills-programming-languages-1.svg" alt="Python Language" title="Python Language"></div>
      <div class="skillrow">Data Analysis:<div class="tools-container"><img src="assets/icons/skills-data-analysis-1.svg" alt="Pandas Library" title="Pandas Library"><img src="assets/icons/skills-data-analysis-2.svg" alt="NumPy Library" title="NumPy Library"></div></div>
      <div class="skillrow">Data Visualization:<div class="tools-container"><img src="assets/icons/skills-data-visualization-1.svg" alt="Plotly Library" title="Plotly Library"><img src="assets/icons/skills-data-visualization-2.svg" alt="MatPlotLib Library" title="MatPlotLib Library"><img src="assets/icons/skills-data-visualization-3.svg" alt="Seaborn Library" title="Seaborn Library"></div></div>
      <div class="skillrow">ML and DL:<div class="tools-container"><img src="assets/icons/skills-ml-and-dl-1.svg" alt="Scikit-Learn Library" title="Scikit-Learn Library"><img src="assets/icons/skills-ml-and-dl-2.svg" alt="TensorFlow Library" title="TensorFlow Library"></div></div>
      <div class="skillrow">Documentation:<div class="tools-container"><img src="assets/icons/skills-documentation-1.svg" alt="Latex" title="Latex"><img src="assets/icons/skills-documentation-2.svg" alt="Diagram.net" title="Diagram.net"><img src="assets/icons/skills-documentation-3.svg" alt="Microsoft Office" title="Microsoft Office"></div></div>
      <div class="skillrow">Operating Systems:<div class="tools-container"><img src="assets/icons/skills-operating-systems-1.svg" alt="Linux" title="Linux"><img src="assets/icons/skills-operating-systems-2.svg" alt="Windows" title="Windows"></div></div>
      <div class="skillrow">Coding IDE:<div class="tools-container"><img src="assets/icons/skills-coding-ide-1.svg" alt="Google Colab" title="Google Colab"><img src="assets/icons/skills-coding-ide-2.svg" alt="Jupyter" title="Jupyter"><img src="assets/icons/skills-coding-ide-3.svg" alt="VS Code" title="VS Code"><img src="assets/icons/skills-coding-ide-4.svg" alt="Claude Code" title="Claude Code"></div></div>
      <div class="skillrow">Web Development:<div class="tools-container"><img src="assets/icons/skills-web-development-1.svg" alt="CSS" title="CSS"><img src="assets/icons/skills-web-development-2.svg" alt="HTML" title="HTML"><img src="assets/icons/skills-web-development-3.svg" alt="JavaScript" title="JavaScript"><img src="assets/icons/skills-web-development-4.svg" alt="React.js" title="React.js"><img src="assets/icons/skills-web-development-5.svg" alt="Streamlit Framework" title="Streamlit Framework"></div></div>
      <div class="skillrow">Cloud and DevOps:<div class="tools-container"><img src="assets/icons/skills-cloud-and-devops-3.svg" alt="GitHub" title="GitHub"><img src="assets/icons/skills-cloud-and-devops-4.svg" alt="GitLab" title="GitLab"><img src="assets/icons/skills-cloud-and-devops-5.svg" alt="Microsoft Azure Foundry" title="Microsoft Azure Foundry"></div></div>
      </div>
     </div>`,
    ),
    right: page(
      "right",
      11,
      `<div class="pg-body">
      <div class="group">
      <h3><span class="mark">Tools I'm familiar with:</span></h3>
      <div class="skillrow">GenAI and Agents:<div class="tools-container"><img src="assets/icons/skills-genai-and-agents-5.svg" alt="Hermes" title="Hermes"><img src="assets/icons/skills-genai-and-agents-6.svg" alt="Obsidian" title="Obsidian"></div></div>
      <div class="skillrow">Programming Languages:<div class="tools-container"><img src="assets/icons/skills-programming-languages-3.svg" alt="R Language" title="R Language"><img src="assets/icons/skills-programming-languages-2.svg" alt="C++ Language" title="C++ Language"></div></div>
      <div class="skillrow">Document AI:<div class="tools-container"><img src="assets/icons/skills-document-ai-1.svg" alt="DocLing Library" title="DocLing Library"><img style="width:3.75rem; height:auto;" src="assets/icons/skills-document-ai-2.png" alt="docTR Library" title="docTR Library"/> </div></div>
      <div class="skillrow">Databases:<div class="tools-container"><img src="assets/icons/skills-databases-1.svg" alt="SQLAlchemy Framework" title="SQLAlchemy Framework"><img src="assets/icons/skills-databases-2.svg" alt="SQLite DBMS" title="SQLite DBMS"><img src="assets/icons/skills-databases-3.svg" alt="PostgreSQL DBMS" title="PostgreSQL DBMS"></div></div>
      <div class="skillrow">Data Visualization:<div class="tools-container"><img src="assets/icons/skills-data-visualization-4.svg" alt="Tidyverse ggplot Library" title="Tidyverse ggplot Library"><img src="assets/icons/skills-data-visualization-5.svg" alt="Tablue" title="Tablue"><img src="assets/icons/skills-data-visualization-6.svg" alt="Microsoft Power BI" title="Microsoft Power BI"></div></div>
      <div class="skillrow">Cloud and DevOps:<div class="tools-container"><img src="assets/icons/skills-cloud-and-devops-7.svg" alt="Docker" title="Docker"><img src="assets/icons/skills-cloud-and-devops-1.svg" alt="Amazon Web Services" title="Amazon Web Services"><img src="assets/icons/skills-cloud-and-devops-2.svg" alt="Microsoft Azure" title="Microsoft Azure"></div></div>
      <div class="skillrow">Web Development:<div class="tools-container"><img src="assets/icons/skills-web-development-6.svg" alt="Postman" title="Postman"><img src="assets/icons/skills-web-development-7.svg" alt="WordPress" title="WordPress">    <img src="assets/icons/skills-web-development-8.svg" alt="Figma" title="Figma"><img src="assets/icons/skills-web-development-9.svg" alt="FastAPI Library" title="FastAPI Library"><img src="assets/icons/skills-web-development-11.svg" alt="Django Framework" title="Django Framework"></div></div>
      </div>

      <div class="group">
      <h3><span class="mark">In general, I enjoy:</span></h3>
      <ul>
      <li>Research, reading papers and knowing every new about AI.</li>
      <li>Finding and designing solutions that cost the minimum.</li>
      <li>Architecting AI Harnesses that enable models do cool things!</li>
      </ul>
      </div>         
      </div>`,
    ),
  },
  {
    section: "contact",
    left: page(
      "left",
      12,
      `<header class="ph">${HOME}<h1>Contact</h1></header>
      <div class="envzone" id="envzone">
        <div class="thanks"><h2>Thank you!</h2><p>Your letter is on its way.</p><p class="demo" id="demo"></p><button class="another" type="button" data-action="another"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l1-4L14 3l3 3L7 16z"/></svg>Write another message</button></div>
        <div class="env" id="env"><div class="env-back"></div><div class="env-flap" id="flap"></div><div class="clip-fun">
          <form class="letter" id="contact-form" novalidate>
            <p>${FIRST},</p>
            <p>This is <input required class="inp" id="f-name" name="name" type="text" autocomplete="name" placeholder="your name" aria-label="Your name">, and I&rsquo;d like to chat.</p>
            <p>You can reach me at<input required class="inp wide" id="f-email" name="email" type="email" autocomplete="email" placeholder="your email" aria-label="Your email"></p>
            <p>Here&rsquo;s what I&rsquo;m thinking:<textarea required class="inp msg" id="f-msg" name="message" placeholder="your message" aria-label="Your message"></textarea></p>
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
      <div class="bio"><div><i class="tape"></i><img src="assets/images/personal-images/heba-emoji-2.webp" alt="Personal Emoji" class="grad-img"></div><p class="blurb">I am always open to aspiring disscussions and opportunities. So, don't hesitate to contact me!</p></div>
      <div class="social"><h2 class="find">Find me here</h2><div class="links"><a class="stk" data-link="linkedinUrl" href="#">LinkedIn</a><a class="stk" data-link="githubUrl" href="#">GitHub</a></div></div>`,
    ),
  },
];
