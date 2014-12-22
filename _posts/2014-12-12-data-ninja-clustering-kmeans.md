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