import React from "react";
import ReactDOM from "react-dom/client";
import { ArrowRight, Download, Mail, Phone, Sparkles, X } from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "CAD 自动报价系统",
    meta: "CAD / DXF / Quote Automation",
    demoHref: "/cad-showcase/index.html",
    summary:
      "面向室内设计报价场景搭建的一套自动化预算系统，把图纸识别、报价匹配、柜体计算和预算生成整合到同一工作流中。",
    details: {
      background:
        "室内设计报价经常卡在图纸统计和表格整理上。设计师需要反复查看 CAD、核对报价表、统计柜体和增项，流程碎片化，容易漏算，也很难沉淀成稳定标准。",
      action:
        "我把报价表、图纸识别、柜体计算和预算导出连接到同一个工具里，让系统先生成可复核的预算初稿，再由人工确认关键项目。",
      value:
        "这个项目把原本分散在 CAD、Excel 和人工经验里的流程变成可复用工作流，减少重复统计，也让报价过程更稳定、更容易交接。",
      capability:
        "体现能力：能从真实业务痛点出发，把设计场景拆成数据流、规则流和人工复核节点，并做出可用工具。",
    },
    points: [
      "打通 CAD 图纸、报价表和预算明细之间的数据链路",
      "自动识别柜体等关键报价对象，减少人工统计和重复计算",
      "支持人工确认与修正，保证自动化结果可控、可解释",
      "已形成公司内部可使用的完整报价工具",
    ],
  },
  {
    title: "设计师 PPT 自动化工作流",
    meta: "PowerPoint / Image / Template Pipeline",
    demoHref: "/ppt-showcase/",
    summary:
      "为设计师汇报场景搭建的 PPT 自动化生产流程，把素材整理、版式匹配、图片处理和成稿生成变成可复用的标准流程。",
    details: {
      background:
        "设计师做方案汇报时，真正消耗时间的常常不是设计判断，而是素材整理、图片处理、版式适配、重复排版和反复检查。",
      action:
        "我为 3 位设计师搭建了从素材到成稿的自动化流程，把现场图、意向图、平面图等资料按类型整理，并自动匹配 PPT 页面结构。",
      value:
        "这套流程减少了汇报前的机械整理工作，让设计师更快形成一版可编辑成稿，也让团队交付风格更统一。",
      capability:
        "体现能力：能把设计师的重复劳动抽象成标准流程，并用自动化方法提高团队出稿效率。",
    },
    points: [
      "为 3 位设计师定制从素材到成稿的自动化汇报流程",
      "自动处理现场图、意向图、平面图等多类设计资料",
      "根据素材类型匹配页面版式，减少重复排版",
      "显著降低方案汇报前的整理成本，提高团队出稿效率",
    ],
  },
  {
    title: "ComfyUI + 3ds Max 效果图工作流",
    meta: "Render Workflow",
    summary:
      "把 AI 图像生成放到空间表现流程里，用于快速验证氛围、材质和视觉方向。",
    details: {
      background:
        "传统效果图制作周期较长，而 AI 图像工具虽然出图很快，但如果脱离 3D 模型和真实空间结构，就容易停留在灵感图层面。",
      action:
        "我把 ComfyUI 接入 3ds Max 效果图流程，用 AI 快速探索风格和氛围，再回到 3D 模型中控制空间结构、材质关系和最终表达。",
      value:
        "这个流程缩短了前期视觉试错时间，同时保留了 3D 软件对空间准确性的控制，适合用于效果图前期提案。",
      capability:
        "体现能力：能判断 AI 图像生成的边界，并把它放在合适的生产环节里，而不是只追求单张图效果。",
    },
    points: [
      "使用 ComfyUI 辅助效果图生成",
      "结合 3ds Max 提高效果图效率",
      "减少传统渲染时间",
    ],
  },
  {
    title: "个人 AI 对话系统",
    meta: "Qwen / Local Knowledge Assistant",
    summary:
      "一个面向个人知识管理的本地 AI 助手实验，用来把多设备资料转化为可检索、可问答的信息入口。",
    details: {
      background:
        "我的学习和工作资料分散在多台电脑里，传统文件搜索只能找到信息，很难形成结构化回答，也不利于长期知识沉淀。",
      action:
        "我基于通义千问搭建本地 AI 知识助手，通过局域网连接多台设备，实现跨设备资料访问、信息检索和语义问答。",
      value:
        "这个系统把零散资料变成可对话的知识入口，让我能更快整理碎片知识、设计文化、语言学习和工作资料。",
      capability:
        "体现能力：能从个人高频需求出发，理解知识管理、语义检索和本地工作流之间的关系。",
    },
    points: [
      "基于通义千问大模型搭建本地 AI 知识助手",
      "通过局域网连接多台设备，实现跨设备资料访问",
      "支持信息检索和语义问答，用于个人知识管理与工作辅助",
    ],
  },
  {
    title: "AI Coding / Codex Workflow",
    meta: "Agent Thinking / Product Prototype",
    summary:
      "通过真实网页项目练习 AI Coding，把需求拆解、结果验证和持续迭代纳入人机协作流程。",
    details: {
      background:
        "AI Coding 的核心不只是让 AI 写代码，而是如何描述目标、拆解任务、提供上下文、检查结果，并在真实项目里持续迭代。",
      action:
        "我使用 Codex 辅助生成这个个人展示网页，从页面规划、文案调整、组件实现到本地构建，完整体验了一次人机协作开发流程。",
      value:
        "这个过程让我更理解 AI 产品中的提示设计、上下文管理、任务拆解、结果评估和人机协作边界。",
      capability:
        "体现能力：能把 AI 当作协作对象使用，快速完成原型验证，并通过人工判断持续修正方向。",
    },
    points: [
      "使用 AI 辅助生成网页",
      "研究 AI workflow 和 Agent 思维",
      "探索 AI 是否能真正参与生产流程",
    ],
  },
];

const workflowTags = ["CAD", "3ds Max", "ComfyUI", "PPT", "Qwen", "Codex", "Workflow"];

const capabilities = [
  {
    title: "设计经验",
    label: "Design Practice",
    summary:
      "做过室内设计、方案深化、CAD 制图和客户沟通，知道设计工作里哪些环节最耗时间，也知道方案最后要落到表达和交付上。",
    points: ["CAD 制图与方案深化", "效果表现与汇报表达", "理解客户沟通和项目落地"],
  },
  {
    title: "沟通推进",
    label: "Communication / Sales",
    summary:
      "大学做过学生会主席，也做过门店管理、校园营销和东京留学期间的联谊会组织。相比一个人埋头做事，我更习惯协调人、信息和现场节奏。",
    points: ["组织活动与现场执行", "客户需求理解与表达", "社交场景组织与沟通"],
  },
  {
    title: "AI 落地尝试",
    label: "AI Workflow",
    summary:
      "我不是只试 AI 生成内容，而是把它放进报价、PPT、效果图、资料检索和网页原型里，看看它能不能真的帮工作变快。",
    points: ["报价和 PPT 自动化", "AI 图像与效果图流程", "用 Codex 快速做网页原型"],
  },
];

function App() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation />
      <Hero />
      <About />
      <Capabilities />
      <Projects />
      <Thinking />
      <Contact />
    </main>
  );
}

function Navigation() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-black/5 bg-paper/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="text-sm font-medium tracking-wide">
          牛博文
        </a>
        <div className="hidden items-center gap-7 text-sm text-black/60 md:flex">
          <a className="nav-link" href="#about">
            关于我
          </a>
          <a className="nav-link" href="#capabilities">
            能力
          </a>
          <a className="nav-link" href="#projects">
            AI 实践
          </a>
          <a className="nav-link" href="#thinking">
            思考
          </a>
          <a className="nav-link" href="#contact">
            联系
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 subtle-grid" />
      <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />
      <div className="relative mx-auto grid min-h-[88vh] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-20">
        <div className="hero-copy animate-rise">
          <div className="mb-8 inline-flex items-center gap-2 border border-black/10 bg-white/70 px-3 py-2 text-xs text-black/60 shadow-sm backdrop-blur">
            <Sparkles size={14} className="text-deepTeal" />
            AI Product / Design Workflow
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] md:text-7xl">
            牛博文
          </h1>
          <p className="mt-5 text-lg text-black/62 md:text-xl">
            室内设计背景 / AI 工作流探索者
          </p>
          <p className="mt-8 max-w-2xl text-2xl leading-relaxed md:text-3xl">
            从设计现场出发，把 AI 接进真实工作流。
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-black/58">
            我已经搭建了一套 AI 设计工作流雏形：从 CAD 报价、PPT 汇报、ComfyUI 效果图辅助，到资料整理和网页原型。下一步需要更多使用数据和反馈来继续改进。
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="#projects">
              查看 AI 实践
              <ArrowRight size={18} />
            </a>
            <a className="btn-secondary" href="#contact">
              联系我
            </a>
          </div>
        </div>

        <div className="hero-visual animate-float" aria-label="AI 设计工作流抽象视觉">
          <img
            src="/hero/ai-design-workflow.png"
            alt="由 CAD 线稿、表格、文档和 AI 节点组成的抽象工作流视觉"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  const [showExperience, setShowExperience] = React.useState(false);

  return (
    <section id="about" className="section">
      <div className="section-label">About</div>
      <div className="grid gap-10 md:grid-cols-[0.72fr_1.28fr]">
        <h2 className="section-title">从设计现场，到 AI 工作流。</h2>
        <div className="space-y-6 text-lg leading-9 text-black/68">
          <p>
            我本科环境设计背景，做过室内设计、方案深化、CAD 制图、3D 效果表现和客户沟通。
          </p>
          <p>
            最近我一直在试 AI 工具、AI workflow 和 AI coding，重点是把它们接进设计师每天会用到的工作里。
          </p>
          <button className="btn-secondary" type="button" onClick={() => setShowExperience(true)}>
            查看我的经历
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      {showExperience && <ExperienceModal onClose={() => setShowExperience(false)} />}
    </section>
  );
}

function ExperienceModal({ onClose }) {
  const strengths = [
    {
      title: "组织与推进能力",
      label: "Team / Execution",
      text: "大学期间担任学生会主席，组织举办过多次学校大型项目；也曾担任中国电信娄底分公司门店经理，组织团队开展开学季校园营销，并配合公司进入高校场景执行推广。这些经历让我很早接触到目标拆解、人员协作、现场推进和结果反馈。",
    },
    {
      title: "设计行业经验",
      label: "Design Practice",
      text: "在上海波涛装饰集团担任设计师，负责方案深化、出图、客户沟通与需求分析；此前也做过设计师助理，参与量房、CAD 原始结构图绘制、3D 效果表现和方案展示。",
    },
    {
      title: "项目与客户意识",
      label: "Communication",
      text: "在校园设计工作室和设计公司实践中，我接触过真实项目、客户沟通和方案交付。相比单纯做图，我更关注需求如何被理解、方案如何被表达、流程如何更高效地推进。",
    },
    {
      title: "沟通与销售能力",
      label: "Sales / Persuasion",
      text: "在门店管理、校园营销、设计客户沟通和留学期间多次大型联谊会组织中，我持续训练了把复杂信息讲清楚、把不同人连接起来的能力。无论是介绍业务、理解需求，还是推动对方接受方案，我都更关注对方真正关心什么，并把表达转化为行动。",
    },
    {
      title: "学习能力与生活阅历",
      label: "Culture / Learning",
      text: "我曾赴日本进行设计调研与大学院备考，接触日本空间文化、居住理念和语言环境。跨文化经历让我更愿意观察不同生活方式，也形成了持续学习和自我更新的习惯。",
    },
  ];

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="我的经历">
      <div className="project-modal">
        <button className="modal-close" type="button" onClick={onClose} aria-label="关闭经历详情">
          <X size={20} />
        </button>
        <span className="text-xs uppercase text-deepTeal">Experience</span>
        <h3 className="mt-4 text-3xl font-medium leading-tight md:text-5xl">我的经历，不只是设计履历。</h3>
        <p className="mt-7 max-w-3xl text-lg leading-9 text-black/66">
          我有设计行业的现场经验，也有团队组织、客户沟通、项目推进和跨文化学习经历。这些经历让我在思考 AI 产品时，更关注真实场景、真实用户和真实流程。
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {strengths.map((item) => (
            <div key={item.title} className="experience-card">
              <div>
                <span>{item.label}</span>
                <h4>{item.title}</h4>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 border-l-2 border-teal pl-5 text-base leading-8 text-black/62">
          补充经历：本科环境设计背景，参与导师科研项目与实践设计；共同创办校园设计工作室；参与住宅与商业项目实践；大学任学生会主席；留学期间组织多次大型联谊会；中装杯全国大学生环境设计大赛全国三等奖。
        </div>
      </div>
    </div>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="border-y border-black/6 bg-white">
      <div className="section">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <div className="section-label">Capabilities</div>
            <h2 className="section-title">我目前有三类能力。</h2>
          </div>
          <p className="text-base leading-8 text-black/58">
            设计经验、沟通推进、AI 落地尝试。它们都来自我做过的事，不是为了包装出来的标签。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {capabilities.map((item, index) => (
            <article className="capability-card" key={item.title}>
              <div className="mb-8 flex items-start justify-between gap-5">
                <div>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                </div>
                <strong>0{index + 1}</strong>
              </div>
              <p>{item.summary}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [activeProject, setActiveProject] = React.useState(null);

  return (
    <section id="projects" className="border-y border-black/6 bg-white">
      <div className="section">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="section-label">AI Practice</div>
            <h2 className="section-title max-w-3xl">我做过的 AI 实践。</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-black/52">
            这些项目来自工作和个人实验，重点是让 AI 真的帮我省时间、少重复。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card"
            >
              <div className="mb-8 flex items-start justify-between gap-6">
                <div>
                  <span className="text-xs uppercase text-deepTeal">{project.meta}</span>
                  <h3 className="mt-3 text-2xl font-medium leading-snug">{project.title}</h3>
                </div>
                <span className="shrink-0 text-sm text-black/35">0{index + 1}</span>
              </div>
              {project.summary && (
                <p className="mb-6 text-sm leading-7 text-black/62">{project.summary}</p>
              )}
              <ul className="space-y-3 text-sm leading-7 text-black/62">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="project-actions">
                <button
                  className="project-action"
                  type="button"
                  onClick={() => setActiveProject({ ...project, index })}
                >
                  查看项目详情
                  <ArrowRight size={16} />
                </button>
                {project.demoHref && (
                  <a className="project-action project-action-secondary" href={project.demoHref}>
                    查看作品演示
                    <ArrowRight size={16} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`${project.title} 详情`}>
      <div className="project-modal">
        <button className="modal-close" type="button" onClick={onClose} aria-label="关闭项目详情">
          <X size={20} />
        </button>
        <span className="text-xs uppercase text-deepTeal">{project.meta}</span>
        <div className="mt-4 flex items-start justify-between gap-8">
          <h3 className="text-3xl font-medium leading-tight md:text-5xl">{project.title}</h3>
          <span className="hidden text-sm text-black/35 md:block">0{project.index + 1}</span>
        </div>
        <p className="mt-7 max-w-3xl text-lg leading-9 text-black/66">{project.summary}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <DetailBlock title="项目背景" text={project.details.background} />
          <DetailBlock title="我做了什么" text={project.details.action} />
          <DetailBlock title="项目价值" text={project.details.value} />
        </div>
        <div className="mt-8 border-l-2 border-teal pl-5 text-base leading-8 text-black/62">
          {project.details.capability}
        </div>
      </div>
    </div>
  );
}

function DetailBlock({ title, text }) {
  return (
    <div className="detail-block">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

function Thinking() {
  const ideas = [
    "AI 如何改变设计工作流",
    "AI 如何减少重复劳动",
    "AI 如何提高方案表达效率",
    "AI 如何辅助真实项目推进",
  ];

  return (
    <section id="thinking" className="section">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <div className="section-label">Why AI + Design</div>
          <h2 className="section-title">为什么是 AI + 设计。</h2>
        </div>
        <div>
          <p className="text-xl leading-9 text-black/68">
            我不太关心“AI 会不会替代设计师”这种大问题。我更关心它现在能不能帮设计师少做一点重复劳动。
          </p>
          <p className="mt-6 border-l-2 border-teal pl-5 text-base leading-8 text-black/58">
            报价统计、PPT 汇报、图片整理、资料检索，这些都是很小但很真实的入口。
          </p>
          <div className="mt-10 grid gap-3">
            {ideas.map((idea) => (
              <div key={idea} className="idea-row">
                <span>{idea}</span>
                <ArrowRight size={17} className="text-deepTeal" />
              </div>
            ))}
          </div>
          <p className="mt-10 text-lg leading-8 text-black/68">
            我希望自己以后能做的，是把设计现场的问题讲清楚，再用 AI 做出可用的解决方案。
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_0.9fr] md:items-end">
          <div>
            <div className="mb-5 text-xs uppercase tracking-[0.24em] text-teal">Contact</div>
            <h2 className="max-w-2xl text-4xl font-medium leading-tight md:text-6xl">
              期待把 AI 与真实工作流连接起来。
            </h2>
          </div>
          <div className="space-y-6">
            <a className="contact-line" href="mailto:boweniu1110@icloud.com">
              <Mail size={18} />
              boweniu1110@icloud.com
            </a>
            <a className="contact-line" href="tel:+8618473180925">
              <Phone size={18} />
              +86 18473180925
            </a>
            <div className="flex flex-col gap-3 pt-3 sm:flex-row">
              <a className="btn-light" href="/resume.pdf" download>
                <Download size={18} />
                下载简历
              </a>
              <a className="btn-dark-outline" href="#projects">
                查看作品集
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/42 md:flex-row">
          <span>牛博文 / AI Workflow Explorer</span>
          <span>Built with React + Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
