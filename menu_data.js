const menuData = [
    {
        id: "chapter-1",
        title: "第1章 1変量・2変量の記述統計",
        description: "度数分布、代表値、散らばり、相関など（分野01〜08）",
        hasSubMenu: true,
        subItems: [
            { name: "01. データの形状と度数分布表", genre: "q01_frequency" },
            { name: "02. 代表値（平均・中央値・最頻値）", genre: "q02_central" },
            { name: "03. 散らばりの指標と偏差値", genre: "q03_dispersion" },
            { name: "04. 箱ひげ図と四分位範囲", genre: "q04_boxplot" },
            { name: "05. ジニ係数とローレンツ曲線", genre: "q05_gini" },
            { name: "06. 歪度・尖度・高次モーメント", genre: "q06_moments" },
            { name: "07. 物価指数と成長率", genre: "q07_index" },
            { name: "08. 共分散・相関・偏相関", genre: "q08_correlation" },
        ]
    },
    {
        id: "chapter-2",
        title: "第2章 データ分析の実践と収集",
        description: "分割表、時系列、研究デザイン、標本調査（分野09〜12）",
        hasSubMenu: true,
        subItems: [
            { name: "09. 分割表とクロス集計", genre: "q09_crosstab" },
            { name: "10. 時系列データの基礎", genre: "q10_time_series" },
            { name: "11. 観察研究・実験研究とパラドックス", genre: "q11_study_design" },
            { name: "12. 標本調査と標本抽出法", genre: "q12_sampling" },
        ]
    },
    {
        id: "chapter-3",
        title: "第3章 確率と確率分布",
        description: "確率の法則、確率変数、各種分布（分野13〜22）",
        hasSubMenu: true,
        subItems: [
            { name: "13. 確率の基本法則", genre: "q13_prob_basic" },
            { name: "14. 条件付き確率とベイズの定理", genre: "q14_bayes" },
            { name: "15. 確率変数（質量・密度・分布関数）", genre: "q15_random_variable" },
            { name: "16. 期待値・分散とモーメント", genre: "q16_expectation" },
            { name: "17. 和・線形結合・再生性", genre: "q17_linear_combination" },
            { name: "18. ベルヌーイ分布と二項分布", genre: "q18_binomial" },
            { name: "19. ポアソン分布", genre: "q19_poisson" },
            { name: "20. 幾何分布と負の二項分布", genre: "q20_geometric" },
            { name: "21. 正規分布と二変量正規分布", genre: "q21_normal" },
            { name: "22. その他の連続型分布", genre: "q22_continuous_dist" },
        ]
    },
    {
        id: "chapter-4",
        title: "第4章 推測統計の基礎",
        description: "標本分布、極限定理、点推定（分野23〜25）",
        hasSubMenu: true,
        subItems: [
            { name: "23. 標本分布と大数の法則・中心極限定理", genre: "q23_clt" },
            { name: "24. χ²分布・t分布・F分布の性質", genre: "q24_sampling_dist" },
            { name: "25. 点推定の性質（一致性と不偏性）", genre: "q25_point_estimation" },
        ]
    },
    {
        id: "chapter-5",
        title: "第5章 統計的推測",
        description: "区間推定と仮説検定（分野26〜32）",
        hasSubMenu: true,
        subItems: [
            { name: "26. 母平均・母割合の区間推定", genre: "q26_ci_mean" },
            { name: "27. 母分散・母分散比の区間推定", genre: "q27_ci_variance" },
            { name: "28. 仮説検定の概念", genre: "q28_testing_concept" },
            { name: "29. 1母集団の検定", genre: "q29_one_sample_test" },
            { name: "30. 2母集団の比較", genre: "q30_two_sample_test" },
            { name: "31. χ²検定（適合度・独立性）", genre: "q31_chi_square_test" },
            { name: "32. 等分散の検定（F検定）", genre: "q32_f_test" },
        ]
    },
    {
        id: "chapter-6",
        title: "第6章 回帰分析と分散分析",
        description: "単回帰・重回帰・分散分析（分野33〜35）",
        hasSubMenu: true,
        subItems: [
            { name: "33. 単回帰分析", genre: "q33_simple_regression" },
            { name: "34. 重回帰分析", genre: "q34_multiple_regression" },
            { name: "35. 分散分析と実験計画法", genre: "q35_anova" },
        ]
    }
];
