const menuData = [
    {
        id: "chapter-1",
        title: "第1章 1変量・2変量の記述統計",
        description: "度数分布、代表値、散らばり、相関など（分野01〜07）",
        hasSubMenu: true,
        subItems: [
            { name: "01. データの形状と度数分布表", genre: "q01_frequency", priorities: [3, 3, 2, 1] },
            { name: "02. 代表値（平均・中央値・最頻値）", genre: "q02_central", priorities: [3, 3, 2, 1] },
            { name: "03. 散らばりの指標と偏差値", genre: "q03_dispersion", priorities: [3, 3, 2, 1] },
            { name: "04. 箱ひげ図と四分位数", genre: "q04_boxplot", priorities: [3, 2, 3, 2] },
            { name: "05. ローレンツ曲線・ジニ係数と指数化", genre: "q05_gini", priorities: [2, 2, 3, 2] },
            { name: "06. 歪度・尖度と分布の形", genre: "q06_moments", priorities: [3, 2, 2, 2] },
            { name: "07. 共分散・相関・偏相関", genre: "q07_correlation", priorities: [3, 3, 2, 2] },
        ]
    },
    {
        id: "chapter-2",
        title: "第2章 データ分析の実践と収集",
        description: "分割表、時系列、研究デザイン、標本調査（分野08〜11）",
        hasSubMenu: true,
        subItems: [
            { name: "08. カテゴリカルデータ・2元クロス表", genre: "q08_crosstab", priorities: [2, 2, 2, 1] },
            { name: "09. 時系列データの処理", genre: "q09_time_series", priorities: [2, 1, 2, 2] },
            { name: "10. 観察研究・実験研究と実験計画", genre: "q10_study_design", priorities: [1, 1, 2, 1] },
            { name: "11. 標本調査", genre: "q11_sampling", priorities: [2, 1, 3, 1] },
        ]
    },
    {
        id: "chapter-3",
        title: "第3章 確率と確率分布",
        description: "確率の法則、確率変数、各種分布（分野12〜21）",
        hasSubMenu: true,
        subItems: [
            { name: "12. 確率の基礎", genre: "q12_prob_basic", priorities: [3, 3, 2, 2] },
            { name: "13. 条件付き確率・ベイズの定理", genre: "q13_bayes", priorities: [3, 3, 3, 1] },
            { name: "14. 確率変数（質量・密度・分布関数）", genre: "q14_random_variable", priorities: [3, 3, 3, 3] },
            { name: "15. 期待値・分散とモーメント", genre: "q15_expectation", priorities: [3, 3, 3, 3] },
            { name: "16. 同時分布・共分散", genre: "q16_joint_dist", priorities: [3, 3, 3, 3] },
            { name: "17. ベルヌーイ分布と二項分布", genre: "q17_binomial", priorities: [2, 3, 2, 1] },
            { name: "18. ポアソン分布・幾何分布", genre: "q18_poisson", priorities: [2, 1, 2, 1] },
            { name: "19. 超幾何分布・負の二項分布", genre: "q19_hypergeometric", priorities: [3, 1, 2, 2] },
            { name: "20. 正規分布・2変量正規分布", genre: "q20_normal", priorities: [3, 3, 3, 2] },
            { name: "21. 一様分布・指数分布", genre: "q21_continuous_dist", priorities: [3, 2, 1, 1] },
        ]
    },
    {
        id: "chapter-4",
        title: "第4章 統計的推定",
        description: "標本分布、点推定、区間推定（分野22〜28）",
        hasSubMenu: true,
        subItems: [
            { name: "22. 標本分布・大数の法則・中心極限定理", genre: "q22_clt", priorities: [3, 3, 2, 2] },
            { name: "23. 点推定①：推定量・不偏性", genre: "q23_point_estimation", priorities: [2, 3, 3, 2] },
            { name: "24. 点推定②：一致性・推定量の比較", genre: "q24_point_estimation", priorities: [2, 2, 2, 2] },
            { name: "25. χ²分布・t分布・F分布", genre: "q25_sampling_dist", priorities: [3, 3, 2, 3] },
            { name: "26. 統計量が従う分布", genre: "q26_statistic_dist", priorities: [3, 3, 2, 2] },
            { name: "27. 区間推定①：母平均の信頼区間", genre: "q27_ci_mean", priorities: [3, 3, 3, 2] },
            { name: "28. 区間推定②：母平均の差・母比率・母分散", genre: "q28_ci_variance", priorities: [3, 3, 2, 2] },
        ]
    },
    {
        id: "chapter-5",
        title: "第5章 仮説検定",
        description: "検定の考え方と各種検定（分野29〜32）",
        hasSubMenu: true,
        subItems: [
            { name: "29. 仮説検定の基礎", genre: "q29_testing_concept", priorities: [3, 3, 3, 3] },
            { name: "30. 1標本の検定：母平均・母比率", genre: "q30_one_sample_test", priorities: [3, 3, 3, 3] },
            { name: "31. 2標本の母平均の検定", genre: "q31_two_sample_test", priorities: [3, 3, 3, 3] },
            { name: "32. その他の検定", genre: "q32_variance_test", priorities: [2, 2, 3, 3] },
        ]
    },
    {
        id: "chapter-6",
        title: "第6章 回帰分析と分散分析",
        description: "単回帰・重回帰・分散分析（分野33〜35）",
        hasSubMenu: true,
        subItems: [
            { name: "33. 線形回帰：回帰直線・決定係数・重回帰の基礎", genre: "q33_linear_regression", priorities: [3, 3, 3, 3] },
            { name: "34. 線形回帰：結果表の読み取り", genre: "q34_regression_output", priorities: [3, 3, 3, 3] },
            { name: "35. 一元配置分散分析", genre: "q35_anova", priorities: [3, 3, 3, 3] },
        ]
    }
];
