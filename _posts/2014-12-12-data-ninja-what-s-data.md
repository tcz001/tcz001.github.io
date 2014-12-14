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
它包含三个阶段：

### Initialization

![K_Means_Example_Step_1](/http://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/K_Means_Example_Step_1.svg/124px-K_Means_Example_Step_1.svg.png)

### Assignment step

![K_Means_Example_Step_2](/http://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/K_Means_Example_Step_2.svg/139px-K_Means_Example_Step_2.svg.png)

### Update step

![K_Means_Example_Step_3](/http://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/K_Means_Example_Step_3.svg/139px-K_Means_Example_Step_3.svg.png)

### Repeat steps 2 and 3

![K_Means_Example_Step_4](/http://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/K_Means_Example_Step_4.svg/139px-K_Means_Example_Step_4.svg.png)