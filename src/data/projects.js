export const projects = [
  {
    id: "ubs-2026",
    title: "瑞银（UBS）金融精英挑战赛",
    subtitle: "AI 硬件产业链投资策略研究 (Hong Kong Track · Technology)",
    dateRange: "2026.03 - 2026.05",
    role: "团队成员",
    overview: `团队针对 AI 产业链上下游进行深度基本面分析，最终产出全英文商业报告，提出"做多中际旭创 / 做空浪潮信息"的配对交易策略，并通过 LLM 模型与财务估值（PEG/PS）验证投资假设。`,
    contributions: [
      `行业基本面拆解：负责核心案头调研与商业逻辑梳理，深度剖析AI算力价值链，论证光模块作为"高毛利技术瓶颈"与服务器代工作为"低毛利三明治结构"的根本性分化，为团队做多/做空策略提供底层商业逻辑支撑`,
      "核心数据搜集：追踪收集 Lightcounting 行业数据、云厂商(CSP)资本开支及出海布局(China+1)，为团队搭建财务模型及设定 LLM 情绪因子提供核心业务参数支撑"
    ],
    file: "Hong Kong track，Technology，Yin Zhedong、Wang Haosheng、Ye Xin.pdf"
  },
  {
    id: "meituan-2026",
    title: `美团"快乐猴"社区超市选址及销售规模预估`,
    subtitle: "商业分析赛",
    dateRange: "2026.04.01 - 04.19",
    role: "核心分析员",
    overview: `运用结构化思维拆解社区零售商业模式，通过案头调研锁定"地理位置、人群画像、竞争密度"为核心业务变量。`,
    contributions: [
      "数据量化建模：利用 Python 调用随机森林（Random Forest）算法进行特征工程，发现 0-250m 近场人口相关性高达 0.73，据此建立初阶的销售额预测模型",
      `商业策略输出：将数据分析结果转化为商业语言，产出深度分析报告并提出"分圈层渗透策略"，为候选门店选址提供量化决策支持`
    ],
    file: "0330-数据驱动的门店选址决策框架构建与实证分析-业务选题7_20260419202243.pdf"
  },
  {
    id: "zhuiyi-2026",
    title: "追一科技 · 企业级 AI 软件产业分析",
    subtitle: "Conversational AI Enterprise Software Case Study",
    dateRange: "2026.03",
    role: "团队成员 (Group 10)",
    overview: "对中国企业级 AI 软件市场进行深度行业研究，聚焦追一科技（Zhuiyi）的竞争定位与发展战略，分析其面对百度、科大讯飞等行业巨头时的差异化路径。",
    contributions: [
      "竞争格局分析：识别出竞争者（百度、科大讯飞）的先发优势、行业数据集积累壁垒，以及跨行业合规成本",
      "战略路径推演：从研发投入、产品多元化、市场拓展三个维度推演追一科技的战略选项，评估各路径的投入产出与风险",
      "外部环境评估：梳理各行业政策合规标准与数据安全要求对 AI 企业跨行业扩张的约束"
    ],
    file: "Group10 Zhuiyi case study（Final version）.pdf"
  },
  {
    id: "natura-2026",
    title: "Natura & Co 企业战略案例分析",
    subtitle: "Corporate Strategy Case Study · Ansoff Matrix & Integration",
    dateRange: "2026.03",
    role: "团队成员 (Group 10)",
    overview: "对巴西化妆品巨头 Natura & Co 的企业战略进行深度剖析，运用 Ansoff 矩阵、垂直整合、多元化战略等框架分析其从区域品牌发展为全球美妆集团的路径。",
    contributions: [
      "战略框架应用：运用 Ansoff 矩阵解析 Natura 的产品/市场扩张逻辑，识别其多元化战略集中于化妆品赛道内的品牌组合构建（Natura / Aesop / The Body Shop / Avon）",
      "垂直整合分析：评估 Natura 在上下游的深度整合——从原料采购到直销渠道的全链路控制，分析其对利润率和品牌定位的影响",
      "发展模式对比：对比内部发展（Aesop）与外部并购（The Body Shop、Avon）两种路径的战略逻辑与协同效果"
    ],
    file: "Group10 Natura&Co Case Study.pptx"
  },
  {
    id: "rose-2026",
    title: "玫瑰产业全球价值链分析 (Petal & Grace)",
    subtitle: "Macro Value Chain · Porter's Five Forces · VRIO",
    dateRange: "2026.04",
    role: "团队成员 (Group 10)",
    overview: "对全球玫瑰产业从育种、种植到零售的全价值链进行解构，以高端花店 Petal & Grace 为核心案例，运用五力模型、SWOT、VRIO 框架进行竞争分析。",
    contributions: [
      "价值链绘制：拆解玫瑰产业宏观价值链（育种→种植→拍卖→零售），识别各环节的利润分配与权力结构",
      "五力模型分析：分别评估上游育种商、下游客户、新进入者、替代品（非洲低成本玫瑰/超市花束）、行业内竞争五个维度的力量对比",
      "VRIO与SWOT整合：评估 Petal & Grace 的核心资源是否满足 VRIO 标准（价值性、稀缺性、不可模仿性、组织性），并结合 SWOT 提出短期防御+长期扩张战略"
    ],
    file: "Group10 Rose Case Study(2).pptx"
  },
  {
    id: "bank-valuation-2026",
    title: "银行估值与绩效驱动因素计量分析",
    subtitle: "Econometrics Report · Bank Valuations after the Financial Crisis",
    dateRange: "2026.05",
    role: "团队成员 (Group 10)",
    overview: "基于 2008 年金融危机后银行数据（随机抽样 500 条观测），运用计量经济学方法分析存款保险制度与银行绩效（ROE）及风险指标之间的关系。",
    contributions: [
      "数据分析：对 ROE、收入多样性、资本充足率、脆弱性指数等变量进行描述性统计与交叉相关分析，发现 ROE 标准差高达 36.67 反映后危机时代银行回报极不稳定",
      "计量建模：协助构建计量回归模型，探讨存款保险制度对银行盈利能力与风险承担行为的影响",
      "学术写作：参与全英文学术报告撰写（SAFTI Fintech 计量经济学课程），字数约 1,346 词"
    ],
    file: "Bank Valuations after the Financial Crisis(3)(1).docx"
  }
];
