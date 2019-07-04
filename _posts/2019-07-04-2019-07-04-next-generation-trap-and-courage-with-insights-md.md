---
layout: post
published: false
title: 2019-07-04-next-generation-trap-and-courage-with-insights.md
---
# 隔代陷阱 与 胆识型文化

> TLDR; 警惕组织与技术变革中的隔代陷阱，勇敢稳重地拥抱变化。

或许你最近在朋友圈有看到Libra相关的报道，或许你已经阅读了瑞鹏的《Move: A Language for programming resources》、尚奇的《数字主权国家颁布了它的货币》、曲哲的《Libra——货币新纪元》、鄢倩的《技术人眼中的Facebook Libra》。Libra传来的危机信号，被以一种近乎狂轰滥炸的方式表达。区块链Core team基本上已经达成一个共识，如果“传统”金融产业无法在下面的六个月做出反应，可能无动于衷者的一波丧钟已经在远方敲响了。

而同样的情况，在其他的技术领域大概也已经经历过数轮，如果你注意观察，最近风云变幻的5G战场，还是车辆新能源化和出行行业的转型都会提到“弯道超车”四个字，而大多数情况下“中国市场”都被作为后发者迎头赶上的样本被指出。最初的时候，我们会单纯地认为这是“后发优势”导致的。但是近期的种种迹象表明，这不只是可以享受“先发者”带来的基础设施的“后发优势”可以形容的一种现象。所以我们给了它找一个新的名字——“**隔代陷阱**”。

传统的“[后发优势理论](https://wiki.mbalib.com/wiki/%E5%90%8E%E5%8F%91%E4%BC%98%E5%8A%BF%E7%90%86%E8%AE%BA)”认为：

- 发展过程中的“可替代性”广泛存在。
- 后起者可以引进先进的技术、设备和资金。
- 后发者可以学习和借鉴先发者的成功经验。
- 相对落后会造成紧张状态，加速变革。

而对于“**隔代陷阱**”现象的观察，则在这四个论断的基础上进行了补充，认为：

- 竞争关系下，严格意义上的“社会分工”和“可替代性”并不持久，微观上的“差异化”很容易被时间放大。
- 先发者会陷入**迭代陷阱**：由于基础设施研发与建设成本过高，很难通过短期的利润收回，也就不会考虑迭代更新基础设施。
- 后发者会陷入**抽象陷阱**：由于享用先发者建设好的基础设施，而跳过了研发细节，大量依赖抽象，容易在竞争中失去基础。
- 由于基础设施研究与建设成本的原因，先发者与后发者陷入抽象陷阱与迭代陷阱的情况会**交替发生**。
- 相对领先会造成松懈状态，阻塞变革。

因此，无论先发者还是后发者，除非有充足的准备，否则都会难以避免地陷入“隔代陷阱”。后发者并非始终具有优势，而走在前头也未必就始终会处于劣势。

> 例如，在“移动支付”与“互联网金融”上占尽后发优势的中国金融体系，也可能会因为缺乏足够的紧张感（就像温水煮青蛙），从而错失下一轮迭代机遇——“货币去地缘化”。

## 迭代陷阱中的选择困难

作为技术人员，也许很难想象，大型集团型客户常常因为竞争关系，选用并不领先的基础设施供应商。例如房地产商倾向于使用通信行业供应商提供的云设施服务，而放弃与电商领域成熟的平台设施。保险集团选择与相对落后的IT供应商合作，而减少与互联网龙头的合作。很多原因都是出于对竞争关系的畏惧，用通俗的话来讲，就是“众筹给潜在敌人买子弹”。这种决策很多时候，都会不同程度地影响到一线基层人员的效率，而缺乏对全局思考的基层技术人员，由于难以理解这种决策背后的全局原因，也会出现**难以统一拉齐**的问题。

另一方面，先发者早期建设，已经年久失修的基础设施，常常会成为制约迭代效率的一个隐患，这也是广大中层管理者口中所谓“**历史原因导致**”的问题，我的同事王瑞鹏在他的博客《历史原因 之 一》中也已经很形象地说明，丢失决策过程与最初价值导向的基础设施，在先发的大型企业中比比皆是，这种“不可忽视却又难以迭代”的遗产的存在，导致决策与执行的反馈环非常冗长，一次技术换代需要层层报备审批，甚至有时候会出现死锁的问题。

> 近期，在和一个客户的IT部门沟通中，我们提出了需要引入IaC（基础设施即代码）来改善“细节丢失导致的历史原因”问题，而IT部门由于运维团队普遍习惯使用上一代云下设施，难以接受使用新型工具，无法确保交付与运维的顺畅交割，并且由于团队对于DevOps技能以及云平台安全经验和能力的储备不足，很容易将这种正常的“技术迭代”视为“重大风险”而叫停技术换代。

这样的问题想必每个咨询师在客户现场都有接触过，尤其是数字化与云化进程中步履艰难的部门，往往又是十多年前全力推动技术变革与业务紧密合作的IT部门，不得不说是一种非常讽刺的境遇。

## 抽象陷阱中的空洞迷茫

在选择权开放的企业文化氛围中，一些团队很好地利用了各种基础设施带来的先进思路，尤其是云原生（Cloud Native）趋势下，我们也主张尽可能使用封装抽象后的基础设施、软件工具甚至工作模式，这有助于后发者享受和借鉴先发者留下的宝贵经验，然而过度地对“最佳实践”的依赖，有时也会将企业导入迷茫境地。

一个典型的例子是，中国企业常常被诟病的“研发投入占比过少问题”，中国制造和中国品牌长期处于行业下游，存在大量的理论基础缺失和产业链中空现象，因此每当业务部门迁移至新的领域，我们作为专业服务者总是会先被问及“**这个领域的最佳实践是什么？**”，而当你回答混沌领域内的解决方案应该是“敏捷、DDD、合作研发”等方法论时，客户常常难以接受一个“What”问题被以“How”的方式解答。

因此很多时候，专业服务公司是近乎被迫地，提出“平台战略”来弱化“方法论”带来的不可触摸感，但本质上依然是在用相似的方法论手段解决空洞迷茫期的问题。这是由于技术壁垒和实践经验难以通过直接复制或购买获得的客观因素导致的。

## 警惕陷阱，双管齐下，打通反馈环

前面提到的两类陷阱，是各类型的企业在不同阶段都会面临的问题，也通常是客户需要咨询师来解答的问题，为此，麦肯锡也曾提出“双速”（[Two-speed](https://www.mckinsey.com/business-functions/digital-mckinsey/our-insights/a-two-speed-it-architecture-for-the-digital-enterprise)）模型，其中指出：

> 与那些天生就是数字化的（互联网）企业不同，传统公司并不具备以干净利落的方式重新开始的“奢侈”条件，他们必须在传统的基础上构建为数字企业设计的架构。（也就是俗称的“高速公路换轮胎”，甚至还是“换不同尺寸的轮胎”。）

> 因此需要使用非常不同的平台来实现混合的架构。数字化的多个目标体系结构是异构的，事务平台管理的可伸缩性和弹性与其他针对客户体验优化的系统共存。只有从一开始就清楚地描述了网络安全等关键领域的高级目标架构和标准，才能实现转型。没有它们，传统和新硬件以及应用程序配置的复杂性可能会降低转换速度。

尽管提出了双管齐下的双速IT混合架构，但是该模型中忽略了异构组织在运转过程中的合作机制问题，于是我们常常看到双速IT架构下的企业领导者，每日头疼地周旋于多种价值主张多种KPI的部门墙之间，难以建立高效的跨部门沟通渠道。

而另人欣喜的是，ThoughtWorks也提供了一些新思路，在组织结构上将 BU（Business Unit 业务单元）与 MU（Market Unit 市场单元）融合的组织结构，并通过“**强调统一价值主张的前提下，分离KPI**”的方式，重新让混合架构中的多种“社会分工”回到了一个圆桌上，让MU专注于专业性服务以及加深客户合作，让BU专注于深度研发并扩大行业影响力，再通过鼓励绩效双算，加强合作减少竞争。并且，通过 Why Initiative ，也能让组织中的每个人都能清晰感知到自己在反馈环中的角色与价值，并在组织愿景上达成共识，是很有效的一项举措。

## 胆识型文化，做谦卑的挑战者

如果说“现在”属于曾经勇敢现在稳重的组织，那么“未来”一定属于果断勇敢而又稳扎稳打的挑战者。而始终保持[胆识型文化](http://insights.thoughtworkers.org/courageous-executive/)的组织，在整合优势、警惕孤立视角的道路上，或许可以绕开或爬出隔代陷阱。