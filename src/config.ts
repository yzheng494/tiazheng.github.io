export const siteConfig = {
  name: "Yuqian Zheng",
  title: "Graduate Student/Machine Learning Engineer",
  description: "",
  accentColor: "#1d4ed8",
  social: {
    email: "zheng27quanquan@gmail.com",
    linkedin: "https://www.linkedin.com/in/%E7%BE%BD%E8%8C%9C-%E9%83%91-664159288/",
    github: "https://github.com/yzheng494",
  },
  aboutMe:
    "I'm a master student at Georgia Institute of Technology, major in Computational Science and Engineer. Previously, I received my B.S. in Applied Mathematics from CUHKsz. My research interest lies in Deep Learning, Large Language Model, and Embodied AI.",
  skills: ["Python", "Machine Learning"],
  projects: [
    {
      name: "Logics-STEM: Empowering LLM Reasoning via Failure-Driven Post-Training and Document Knowledge Enhancement",
      description:
        "We introduce Logics-STEM, a state-of-the-art reasoning model fine-tuned on Logics-STEM-SFT-Dataset, a 10M-scale, high-quality open-source long chain-of-thought corpus for STEM reasoning. Logics-STEM achieves strong performance across STEM benchmarks, outperforming the next-best 8B model by 4.68% on average. These gains stem from a data–algorithm co-design framework that jointly optimizes data curation and post-training. The dataset is built via a five-stage pipeline—annotation, deduplication, decontamination, distillation, and stratified sampling—while the training framework adopts a failure-driven post-training strategy with targeted knowledge retrieval and data synthesis to refine SFT and RL. We release Logics-STEM models (8B, 32B) and datasets (10M, 2.2M) to support open-source research.",
      link: "https://huggingface.co/papers/2601.01562",
      skills: ["Large Language Model", "Reinforcement Learning", "Data Processing"],
    },
  ],
  experience: [
    {
      company: "Alibaba Group Holding Limited",
      title: "Machine Learning Intern",
      dateRange: "May 2025 - Nov 2025",
      // bullets: [
      //   "Led post-training of the Qwen3-8B model using RLVR techniques, surpassing multiple same-parameter-scale baselines on STEM and mathematical reasoning benchmarks through targeted optimization and data curation.",
      //   "Engineered a failure-driven, knowledge-augmented data generation pipeline for RLVR.",
      //   "Identified premature policy entropy collapse during post-training and evaluated multiple entropy-regularization strategies, including a novel approach integrating entropy penalties directly into the advantage function, improving exploration stability and training effectiveness.",
      // ],
    },
    {
      company: "Zhuhai Mojie Technology Co., LTD.",
      title: "Machine Learning Intern",
      dateRange: "Dec 20203 - Jan 2024",
      // bullets: [
      //   "Built and launched MVP product from scratch using React and Node.js",
      //   "Implemented CI/CD pipeline reducing deployment time by 60%",
      //   "Collaborated with product team to define technical requirements",
      // ],
    },
  ],
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "Master of Science in Computational Science and Engineering",
      dateRange: "2024 - 2026",
      // achievements: [
      //   "Graduated Magna Cum Laude with 3.8 GPA",
      //   "Dean's List all semesters",
      //   "President of Computer Science Club",
      // ],
    },
    {
      school: "The Chinese University of Hong Kong",
      degree: "Bachelor of Science in Applied Mathematics",
      dateRange: "2020 - 2024",
      achievements: [
        "Dean's List 2022-23",
      ],
    },
  ],
};
