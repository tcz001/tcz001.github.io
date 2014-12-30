---
published: true
title: "Data-ninja-clustering-kmeans"
layout: post
---

## What is clustering

聚类的用途：为模式识别提供更精确的分类函数
聚类的目标：通过无监督的方式训练分类函数

聚类可以简单理解为，在扑克中如何训练出更精确更快速的“分花色”手段，它不能做到的（或者说它不应该关心的），是不能提供一个简单的方法识别出“更多”的模式。

## What is K-means
K-means如其名，为样本空间提供k个means，通过反复迭代，训练出能够区分出k个类别的线性函数。
它包含几个阶段：

### 1. Initialization

![K_Means_Example_Step_1](http://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/K_Means_Example_Step_1.svg/124px-K_Means_Example_Step_1.svg.png)

提供一个数量为n的样本空间，指定k个标本作为聚类的初始元素

### 2. Assignment step

![K_Means_Example_Step_2](http://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/K_Means_Example_Step_2.svg/139px-K_Means_Example_Step_2.svg.png)

按照标本和方差计算出划分的线性函数

### 3. Update step

![K_Means_Example_Step_3](http://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/K_Means_Example_Step_3.svg/139px-K_Means_Example_Step_3.svg.png)

在方差容许范围内转移标本，细化线性函数的各项权重

### 4. Repeat steps 2 and 3

![K_Means_Example_Step_4](http://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/K_Means_Example_Step_4.svg/139px-K_Means_Example_Step_4.svg.png)

重复2、3步，直到深度满足

简言之，k-means是一个依赖线性函数来分离数据的方法。它通过反复迭代的方式，深度挖掘数据之间的关联密度。

由于其必须优先确定种类的缘故，尽管训练过程中是非监督的，k-means针对“新类别发现”这种动态环境适配性还不是很强，由此而衍生出的算法很多。
有依据正态分布来自动发现新类别的，也有引入监督学习来实现新分类的，也有增加维度来从抽象层面改变聚类算法设计的。这些都可以在各大推荐系统、模式识别等论文中找到。

## How is K-means

###K-means算法的优点

算法框架清晰，简单，容易理解。
本算法确定的k个划分到达平方误差最小。当聚类是密集的，且类与类之间区别明显时，效果较好。
对于处理大数据集，这个算法是相对可伸缩和高效的，计算的复杂度为O(NKt)，其中N是数据对象的数目，t是迭代的次数。一般来说，K<<N，t<<N

###K-means算法的缺点

K-means算法中k是事先给定的，这个k值的选定是非常难以估计的。很多时候，事先并不知道给定的数据集应该分成多少个类别才最合适。这也是K-means算法的一个不足。有的算法是通过类的自动合并和分裂，得到较为合理的类型数目k，例如ISODATA算法。关于K-means算法中聚类数目k值的确定，有些文献中，是根据方差分析理论，应用混合F统计量来确定最佳分类数，并应用了模糊划分熵来验证最佳分类数的正确性，它使用了一种结合全协方差矩阵的RPCL算法，并逐步删除那些只包含少量训练数据的类，这是一种称为次胜者受罚的竞争学习规则，来自动决定类的适当数目。它的思想是：对每个输入而言，不仅竞争获胜单元的权值被修正以适应输入值，而且对次胜单元采用惩罚的方法使之远离输入值。
在K-means算法中，首先需要根据初始聚类中心来确定一个初始划分，然后对初始划分进行优化。这个初始聚类中心的选择对聚类结果有较大的影响，一旦初始值选择的不好，可能无法得到有效的聚类结果，这也成为K-means算法的一个主要问题。对于该问题的解决，许多算法采用遗传算法（GA），以内部聚类准则作为评价指标。
从K-means算法框架可以看出，该算法需要不断地进行样本分类调整，不断地计算调整后的新的聚类中心，因此当数据量非常大时，算法的时间开销是非常大的。所以需要对算法的时间复杂度进行分析、改进，提高算法应用范围，例如，可以从该算法的时间复杂度进行分析考虑，通过一定的相似性准则来去掉聚类中心的侯选集。在有些文献中，使用的K-means算法是对样本数据进行聚类，无论是初始点的选择还是一次迭代完成时对数据的调整，都是建立在随机选取的样本数据的基础之上，这样可以提高算法的收敛速度。
K-means算法对异常数据很敏感。在计算质心的过程中，如果某个数据很异常，在计算均值的时候，会对结果影响非常大
