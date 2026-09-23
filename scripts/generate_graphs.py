# -*- coding: utf-8 -*-
"""
統計検定2級 対策問題集 用のグラフ・図表生成スクリプト

問題文に埋め込むヒストグラムや度数分布表などの画像を matplotlib で生成し、
picture/ フォルダに PNG として保存する。

実行方法:
    python scripts/generate_graphs.py

新しい分野の図を追加する場合は、分野ごとのセクションに関数を追加し、
末尾の main() に登録すること。
"""

from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np

# 日本語フォント設定（macOS / Windows の順で探す）
plt.rcParams["font.family"] = [
    "Hiragino Sans",
    "Hiragino Kaku Gothic ProN",
    "Yu Gothic",
    "Meiryo",
    "MS Gothic",
    "sans-serif",
]
plt.rcParams["axes.unicode_minus"] = False

OUT_DIR = Path(__file__).resolve().parent.parent / "picture"


def save(fig, filename):
    OUT_DIR.mkdir(exist_ok=True)
    path = OUT_DIR / filename
    fig.savefig(path, dpi=200, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    print(f"saved: {path}")


def hist_from_freqs(left_edges, width, freqs, xlabel, ylabel="度数（人）", color="#60a5fa"):
    """階級の左端リストと度数リストからヒストグラム状の棒グラフを作る"""
    fig, ax = plt.subplots(figsize=(6.4, 3.8))
    centers = [l + width / 2 for l in left_edges]
    ax.bar(centers, freqs, width=width, color=color, edgecolor="#1e3a5f", linewidth=0.8)
    ticks = list(left_edges) + [left_edges[-1] + width]
    ax.set_xticks(ticks)
    ax.set_xlabel(xlabel)
    ax.set_ylabel(ylabel)
    ax.spines[["top", "right"]].set_visible(False)
    ax.set_axisbelow(True)
    ax.grid(axis="y", color="#e2e8f0")
    return fig, ax


def _value_hist(ax, freqs, color="#60a5fa", ylim=None):
    """横軸を「値」、縦軸を「度数」とするヒストグラムを既存の軸に描く"""
    width = 1
    n = len(freqs)
    centers = [i + width / 2 for i in range(n)]
    ax.bar(centers, freqs, width=0.95, color=color, edgecolor="#1e3a5f", linewidth=0.7)
    ax.set_xlim(0, n)
    ax.set_xticks(range(0, n + 1, 2))
    if ylim is not None:
        ax.set_ylim(ylim)
    ax.set_xlabel("値")
    ax.set_ylabel("度数")
    ax.spines[["top", "right"]].set_visible(False)
    ax.set_axisbelow(True)
    ax.grid(axis="y", color="#e2e8f0")


# =========================================================================
# 分野01: データの形状と度数分布表
# =========================================================================

def q01_2_freq_table():
    """問01-2: スマートフォン利用時間の度数分布表（空欄あり）"""
    columns = ["階級（時間）", "度数（人）", "相対度数", "累積相対度数"]
    rows = [
        ["0以上1未満", "20", "0.10", "0.10"],
        ["1以上2未満", "50", "[ ア ]", "0.35"],
        ["2以上3未満", "[ イ ]", "0.40", "[ ウ ]"],
        ["3以上4未満", "30", "0.15", "0.90"],
        ["4以上5未満", "20", "0.10", "1.00"],
        ["計", "200", "1.00", "―"],
    ]
    blanks = {(2, 2), (3, 1), (3, 3)}  # (行, 列) ※ヘッダーが行0

    fig, ax = plt.subplots(figsize=(6.4, 2.9))
    ax.axis("off")
    table = ax.table(cellText=rows, colLabels=columns, cellLoc="center", loc="center")
    table.auto_set_font_size(False)
    table.set_fontsize(11)
    table.scale(1.1, 1.7)

    for (r, c), cell in table.get_celld().items():
        cell.set_edgecolor("#94a3b8")
        if r == 0:
            cell.set_facecolor("#dbeafe")
            cell.set_text_props(weight="bold")
        elif (r, c) in blanks:
            cell.set_facecolor("#fef9c3")
            cell.set_text_props(weight="bold")
        elif r == len(rows):
            cell.set_facecolor("#f1f5f9")
    save(fig, "q01_2_table.png")


def q01_3_skewed_hist():
    """問01-3: 右に裾が長い通勤時間のヒストグラム（300人）"""
    left_edges = [10, 20, 30, 40, 50, 60]
    freqs = [90, 70, 55, 40, 25, 20]  # 計300
    fig, ax = hist_from_freqs(left_edges, 10, freqs, xlabel="通勤時間（分）")
    save(fig, "q01_3_hist.png")


def q01_4_bimodal_hist():
    """問01-4: 40点付近と80点付近に山がある二峰性の得点分布（200人）"""
    left_edges = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
    freqs = [3, 7, 16, 34, 30, 12, 17, 33, 34, 14]  # 計200
    fig, ax = hist_from_freqs(left_edges, 10, freqs, xlabel="得点（点）", color="#34d399")
    save(fig, "q01_4_hist.png")


# =========================================================================
# 分野02: 代表値（平均・中央値・最頻値の比較・性質）
# =========================================================================

def q02_3_income_hist():
    """問02-3: 右に裾が長い世帯年収のヒストグラム（1,000世帯）"""
    left_edges = list(range(2, 16))
    freqs = [260, 200, 150, 110, 80, 60, 45, 32, 24, 16, 10, 6, 4, 3]  # 計1,000
    fig, ax = hist_from_freqs(
        left_edges,
        1,
        freqs,
        xlabel="世帯年収（百万円）",
        ylabel="度数（世帯）",
        color="#f59e0b",
    )
    save(fig, "q02_3_hist.png")


# =========================================================================
# 分野04: 箱ひげ図と四分位数
# =========================================================================

def q04_3_department_boxplots():
    """問04-3: 部署A・Bの月間残業時間の箱ひげ図（部署Aを上に描く）"""
    stats = [
        {"label": "部署B", "whislo": 14, "q1": 20, "med": 32, "q3": 35, "whishi": 40, "fliers": [52]},
        {"label": "部署A", "whislo": 10, "q1": 18, "med": 25, "q3": 28, "whishi": 40, "fliers": []},
    ]
    fig, ax = plt.subplots(figsize=(7.0, 3.1))
    artists = ax.bxp(stats, vert=False, patch_artist=True, widths=0.5)
    for box, color in zip(artists["boxes"], ["#34d399", "#60a5fa"]):
        box.set_facecolor(color)
        box.set_alpha(0.75)
    for median in artists["medians"]:
        median.set_color("#b91c1c")
        median.set_linewidth(2)
    ax.set_xlim(5, 58)
    ax.set_xticks([10, 20, 30, 40, 50])
    ax.set_xlabel("月間残業時間（時間）")
    ax.spines[["top", "right"]].set_visible(False)
    ax.set_axisbelow(True)
    ax.grid(axis="x", color="#e2e8f0")
    save(fig, "q04_3_boxplot.png")


def q04_4_hist_and_boxplots():
    """問04-4: 同一データから作る右裾の長いヒストグラムと箱ひげ図"""
    # 200人分の滞在時間。大部分は10〜60秒台にあり、95秒・115秒・135秒が外れ値。
    values_and_counts = [
        (12, 40),
        (17, 30),
        (22, 25),
        (27, 20),
        (32, 20),
        (37, 20),
        (42, 15),
        (47, 10),
        (52, 8),
        (57, 5),
        (65, 4),
        (95, 1),
        (115, 1),
        (135, 1),
    ]
    data = np.concatenate([np.full(count, value) for value, count in values_and_counts])

    q1, median, q3 = np.percentile(data, [25, 50, 75])
    iqr = q3 - q1
    lower_fence = q1 - 1.5 * iqr
    upper_fence = q3 + 1.5 * iqr
    regular = data[(data >= lower_fence) & (data <= upper_fence)]
    outliers = data[(data < lower_fence) | (data > upper_fence)]

    fig = plt.figure(figsize=(7.2, 6.2))
    grid = fig.add_gridspec(2, 1, height_ratios=[1.15, 1], hspace=0.38)

    # 上段: 上記200件のデータからヒストグラムを作成
    ax_hist = fig.add_subplot(grid[0])
    bins = np.arange(10, 141, 10)
    ax_hist.hist(
        data,
        bins=bins,
        color="#a78bfa",
        edgecolor="#312e81",
        linewidth=0.8,
    )
    ax_hist.set_xticks(bins)
    ax_hist.set_xlabel("滞在時間（秒）")
    ax_hist.set_ylabel("度数（人）")
    ax_hist.set_title("ユーザー200人の滞在時間の分布", fontsize=12)
    ax_hist.spines[["top", "right"]].set_visible(False)
    ax_hist.set_axisbelow(True)
    ax_hist.grid(axis="y", color="#e2e8f0")

    # 下段: ウだけは上段と同じデータから求めた五数要約・外れ値を使用
    ax_box = fig.add_subplot(grid[1])
    matching_boxplot = {
        "label": "ウ",
        "whislo": float(regular.min()),
        "q1": float(q1),
        "med": float(median),
        "q3": float(q3),
        "whishi": float(regular.max()),
        "fliers": outliers.tolist(),
    }
    candidates = [
        {"label": "ア", "whislo": 10, "q1": 35, "med": 55, "q3": 75, "whishi": 100, "fliers": [115, 135]},
        {"label": "イ", "whislo": 35, "q1": 50, "med": 65, "q3": 75, "whishi": 90, "fliers": [12, 22, 100, 115, 135]},
        matching_boxplot,
        {"label": "エ", "whislo": 10, "q1": 25, "med": 55, "q3": 85, "whishi": 120, "fliers": [135]},
    ]
    artists = ax_box.bxp(candidates, vert=False, patch_artist=True, widths=0.48)
    for box in artists["boxes"]:
        box.set_facecolor("#fef3c7")
    for median in artists["medians"]:
        median.set_color("#b91c1c")
        median.set_linewidth(2)
    ax_box.invert_yaxis()
    ax_box.set_xlim(0, 140)
    ax_box.set_xticks(bins)
    ax_box.set_xlabel("滞在時間（秒）")
    ax_box.set_title("候補となる箱ひげ図（○は外れ値）", fontsize=12)
    ax_box.spines[["top", "right"]].set_visible(False)
    ax_box.set_axisbelow(True)
    ax_box.grid(axis="x", color="#e2e8f0")
    save(fig, "q04_4_hist_boxplots.png")


# =========================================================================
# 分野05: ローレンツ曲線・ジニ係数と指数化
# =========================================================================

def q05_2_lorenz_curve():
    """問05-2: 3点近似のローレンツ曲線と完全平等線"""
    fig, ax = plt.subplots(figsize=(6.0, 6.0))
    ax.plot(
        [0, 1],
        [0, 1],
        linestyle="--",
        color="#94a3b8",
        linewidth=1.6,
        label="完全平等線",
    )
    ax.plot(
        [0, 0.5, 1],
        [0, 0.2, 1],
        color="#2563eb",
        linewidth=2.2,
        marker="o",
        markersize=7,
        label="ローレンツ曲線",
    )
    ax.plot([0.5, 0.5], [0, 0.2], linestyle=":", color="#64748b", linewidth=1.2)
    ax.plot([0, 0.5], [0.2, 0.2], linestyle=":", color="#64748b", linewidth=1.2)
    ax.annotate(
        "(0.5, 0.2)",
        xy=(0.5, 0.2),
        xytext=(0.58, 0.10),
        fontsize=11,
        color="#1e3a5f",
        arrowprops=dict(arrowstyle="-", color="#64748b", lw=0.8),
    )
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.set_aspect("equal")
    ax.set_xticks([0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0])
    ax.set_yticks([0, 0.2, 0.4, 0.6, 0.8, 1.0])
    ax.set_xlabel("人口の累積相対比率")
    ax.set_ylabel("所得の累積相対比率")
    ax.legend(loc="upper left", frameon=True)
    ax.spines[["top", "right"]].set_visible(False)
    ax.set_axisbelow(True)
    ax.grid(color="#e2e8f0")
    save(fig, "q05_2_lorenz.png")


def q05_3_index_lines():
    """問05-3: A社・B社の売上高指数の折れ線グラフ"""
    years = [2019, 2020, 2021, 2022, 2023]
    company_a = [100, 110, 120, 115, 130]
    company_b = [100, 95, 100, 110, 120]
    fig, ax = plt.subplots(figsize=(6.8, 4.2))
    ax.plot(
        years,
        company_a,
        color="#2563eb",
        marker="o",
        linewidth=2.2,
        markersize=7,
        label="A社",
    )
    ax.plot(
        years,
        company_b,
        color="#f59e0b",
        marker="s",
        linewidth=2.2,
        markersize=7,
        label="B社",
    )
    ax.set_xticks(years)
    ax.set_yticks([90, 95, 100, 105, 110, 115, 120, 125, 130])
    ax.set_ylim(90, 135)
    ax.set_xlabel("年")
    ax.set_ylabel("売上高指数（2019年＝100）")
    ax.legend(loc="upper left")
    ax.spines[["top", "right"]].set_visible(False)
    ax.set_axisbelow(True)
    ax.grid(color="#e2e8f0")
    save(fig, "q05_3_index.png")


# =========================================================================
# 分野06: 歪度・尖度と分布の形
# =========================================================================

# 左右対称・標準的な裾
Q06_SYM = [0, 2, 6, 14, 24, 34, 40, 44, 40, 34, 24, 14, 6, 2, 0]
# 右裾が長い単峰（問06-1）
Q06_RIGHT_1 = [3, 8, 20, 42, 50, 36, 24, 16, 11, 7, 5, 3, 2, 1, 0]
# 右裾がより長い単峰（問06-2）
Q06_RIGHT_2 = [2, 5, 12, 28, 55, 40, 26, 18, 12, 8, 6, 4, 3, 2, 1]
# 左右対称で尖度が大きい（中央集中 + 重い裾）
Q06_LEPTO = [5, 6, 6, 7, 8, 18, 42, 72, 42, 18, 8, 7, 6, 6, 5]
# 右裾型（問06-4のB）
Q06_RIGHT_4 = [2, 6, 14, 32, 48, 40, 28, 18, 12, 8, 5, 3, 2, 1, 0]


def q06_1_right_skew():
    """問06-1: 右に裾が長い単峰のヒストグラム"""
    fig, ax = plt.subplots(figsize=(6.4, 3.8))
    _value_hist(ax, Q06_RIGHT_1, color="#60a5fa")
    save(fig, "q06_1_right_skew.png")


def q06_2_right_skew():
    """問06-2: 右に裾が長い単峰のヒストグラム（代表値の関係用）"""
    fig, ax = plt.subplots(figsize=(6.4, 3.8))
    _value_hist(ax, Q06_RIGHT_2, color="#34d399")
    save(fig, "q06_2_right_skew.png")


def q06_3_kurtosis_compare():
    """問06-3: 左右対称なA（裾が軽い）とB（尖度が大きい）"""
    ylim = (0, 80)
    fig, axes = plt.subplots(1, 2, figsize=(9.6, 3.8), sharey=True)
    _value_hist(axes[0], Q06_SYM, color="#60a5fa", ylim=ylim)
    axes[0].set_title("A", fontsize=13)
    _value_hist(axes[1], Q06_LEPTO, color="#a78bfa", ylim=ylim)
    axes[1].set_title("B", fontsize=13)
    fig.tight_layout()
    save(fig, "q06_3_kurtosis.png")


def q06_4_four_hists():
    """問06-4: 対称・右裾・左裾・高尖度の4ヒストグラム"""
    left = list(reversed(Q06_RIGHT_4))
    panels = [
        ("A", Q06_SYM, "#60a5fa"),
        ("B", Q06_RIGHT_4, "#34d399"),
        ("C", left, "#f59e0b"),
        ("D", Q06_LEPTO, "#a78bfa"),
    ]
    ylim = (0, 80)
    fig, axes = plt.subplots(2, 2, figsize=(9.6, 7.0), sharex=True, sharey=True)
    for ax, (title, freqs, color) in zip(axes.ravel(), panels):
        _value_hist(ax, freqs, color=color, ylim=ylim)
        ax.set_title(title, fontsize=13)
    fig.tight_layout()
    save(fig, "q06_4_compare.png")


# =========================================================================
# 分野10: 時系列データの処理
# =========================================================================

def q10_3_moving_average():
    """問10-3: 月別販売数と3か月中心移動平均"""
    months = [1, 2, 3, 4, 5, 6, 7]
    labels = ["1月", "2月", "3月", "4月", "5月", "6月", "7月"]
    sales = [100, 130, 80, 140, 90, 150, 110]
    ma_months = [2, 3, 4, 5, 6]
    ma_values = [
        (100 + 130 + 80) / 3,
        (130 + 80 + 140) / 3,
        (80 + 140 + 90) / 3,
        (140 + 90 + 150) / 3,
        (90 + 150 + 110) / 3,
    ]
    fig, ax = plt.subplots(figsize=(7.2, 4.2))
    ax.plot(
        months,
        sales,
        color="#2563eb",
        marker="o",
        linewidth=2.0,
        markersize=7,
        label="販売数",
    )
    ax.plot(
        ma_months,
        ma_values,
        color="#f59e0b",
        marker="s",
        linewidth=2.2,
        markersize=7,
        linestyle="--",
        label="3か月移動平均",
    )
    ax.set_xticks(months)
    ax.set_xticklabels(labels)
    ax.set_ylim(60, 170)
    ax.set_xlabel("月")
    ax.set_ylabel("販売数")
    ax.legend(loc="upper left")
    ax.spines[["top", "right"]].set_visible(False)
    ax.set_axisbelow(True)
    ax.grid(color="#e2e8f0")
    save(fig, "q10_3_moving_average.png")


def q10_4_correlogram():
    """問10-4: ラグ1〜6のコレログラム"""
    lags = [1, 2, 3, 4, 5, 6]
    acf = [0.80, 0.62, 0.43, 0.24, 0.08, -0.03]
    fig, ax = plt.subplots(figsize=(6.8, 4.2))
    ax.axhline(0, color="#64748b", linewidth=1.2)
    ax.bar(lags, acf, width=0.55, color="#60a5fa", edgecolor="#1e3a5f", linewidth=0.8)
    ax.set_xticks(lags)
    ax.set_xlim(0.4, 6.6)
    ax.set_ylim(-1.05, 1.05)
    ax.set_yticks([-1.0, -0.5, 0, 0.5, 1.0])
    ax.set_xlabel("ラグ")
    ax.set_ylabel("自己相関係数")
    ax.spines[["top", "right"]].set_visible(False)
    ax.set_axisbelow(True)
    ax.grid(axis="y", color="#e2e8f0")
    save(fig, "q10_4_correlogram.png")


# =========================================================================
# 分野26: χ²分布・t分布・F分布
# =========================================================================

def q26_4_relations():
    """正規・χ²・t・F の構成関係図（問26-4）"""
    from matplotlib.patches import FancyBboxPatch

    plt.rcParams["mathtext.fontset"] = "stix"

    fig, ax = plt.subplots(figsize=(9.2, 11.0), dpi=180)
    ax.set_xlim(0, 100)
    ax.set_ylim(0, 100)
    ax.axis("off")
    fig.patch.set_facecolor("white")
    ax.set_facecolor("white")

    slate = "#334155"
    ink = "#0f172a"
    formula = "#9a3412"
    accent = "#1d4ed8"
    box_fc, box_ec = "#f8fafc", "#64748b"
    acc_fc, acc_ec = "#dbeafe", "#2563eb"
    form_fc, form_ec = "#fef3c7", "#d97706"
    arrow_c = "#475569"

    def rbox(x, y, w, h, fc, ec, lw=1.7, rs=1.05):
        ax.add_patch(
            FancyBboxPatch(
                (x, y),
                w,
                h,
                boxstyle=f"round,pad=0.32,rounding_size={rs}",
                facecolor=fc,
                edgecolor=ec,
                linewidth=lw,
                zorder=2,
            )
        )

    def arrow(x1, y1, x2, y2, rad=0.0):
        ax.annotate(
            "",
            xy=(x2, y2),
            xytext=(x1, y1),
            arrowprops=dict(
                arrowstyle="-|>",
                color=arrow_c,
                lw=1.85,
                mutation_scale=15,
                connectionstyle=f"arc3,rad={rad}",
            ),
            zorder=1,
        )

    # --- 頂点: 独立な標準正規 ---
    rbox(12.5, 78.0, 75, 19.2, box_fc, box_ec, lw=1.6)
    ax.text(
        50,
        94.8,
        "互いに独立",
        ha="center",
        va="center",
        fontsize=12.5,
        color=slate,
        fontweight="bold",
    )
    ax.text(
        50,
        90.7,
        r"$Z_1,\,Z_2,\,\ldots,\,Z_k \;\sim\; N(0,1)$",
        ha="center",
        va="center",
        fontsize=16.5,
        color=ink,
    )
    rbox(18.5, 79.2, 63, 8.0, form_fc, form_ec, lw=2.0)
    ax.text(
        50,
        83.2,
        r"$Z_1^{2}+Z_2^{2}+\cdots+Z_k^{2}$",
        ha="center",
        va="center",
        fontsize=18,
        color=formula,
    )

    arrow(50, 78.2, 50, 72.8)

    # --- 【A】 ---
    rbox(31.5, 64.0, 37, 8.6, acc_fc, acc_ec, lw=2.3)
    ax.text(
        50,
        68.3,
        "【 A 】",
        ha="center",
        va="center",
        fontsize=20,
        color=accent,
        fontweight="bold",
    )

    arrow(38.5, 64.0, 25, 58.0, rad=0.12)
    arrow(61.5, 64.0, 75, 58.0, rad=-0.12)

    # --- 左: t の構成（名称は出さない） ---
    rbox(3.5, 26.4, 43, 31.4, box_fc, box_ec, lw=1.6)
    ax.text(
        25,
        54.8,
        r"$Z \;\sim\; N(0,1)$",
        ha="center",
        va="center",
        fontsize=14.5,
        color=ink,
    )
    ax.text(
        25,
        50.4,
        "U は自由度 ν の【 A 】に従う",
        ha="center",
        va="center",
        fontsize=11.5,
        color=slate,
    )
    ax.text(
        25,
        46.2,
        "Z と U は互いに独立",
        ha="center",
        va="center",
        fontsize=12,
        color=slate,
    )
    rbox(7.2, 28.6, 35.6, 14.2, form_fc, form_ec, lw=1.9)
    ax.text(
        25,
        35.7,
        r"$\frac{Z}{\sqrt{U/\nu}}$",
        ha="center",
        va="center",
        fontsize=22,
        color=formula,
    )

    # --- 右: F の構成（名称は出さない） ---
    rbox(53.5, 26.4, 43, 31.4, box_fc, box_ec, lw=1.6)
    ax.text(
        75,
        54.8,
        "U₁ は自由度 ν₁ の【 A 】に従う",
        ha="center",
        va="center",
        fontsize=11.2,
        color=slate,
    )
    ax.text(
        75,
        50.4,
        "U₂ は自由度 ν₂ の【 A 】に従う",
        ha="center",
        va="center",
        fontsize=11.2,
        color=slate,
    )
    ax.text(
        75,
        46.2,
        "U₁ と U₂ は互いに独立",
        ha="center",
        va="center",
        fontsize=12,
        color=slate,
    )
    rbox(57.2, 28.6, 35.6, 14.2, form_fc, form_ec, lw=1.9)
    ax.text(
        75,
        35.7,
        r"$\frac{U_1/\nu_1}{U_2/\nu_2}$",
        ha="center",
        va="center",
        fontsize=19,
        color=formula,
    )

    arrow(25, 26.4, 25, 21.6)
    arrow(75, 26.4, 75, 21.6)

    rbox(9.5, 11.6, 31, 9.6, acc_fc, acc_ec, lw=2.3)
    ax.text(
        25,
        16.4,
        "【 B 】",
        ha="center",
        va="center",
        fontsize=20,
        color=accent,
        fontweight="bold",
    )

    rbox(59.5, 11.6, 31, 9.6, acc_fc, acc_ec, lw=2.3)
    ax.text(
        75,
        16.4,
        "【 C 】",
        ha="center",
        va="center",
        fontsize=20,
        color=accent,
        fontweight="bold",
    )

    ax.text(
        50,
        5.2,
        "正規分布・χ²分布・t分布・F分布の関係",
        ha="center",
        va="center",
        fontsize=11,
        color="#64748b",
    )

    save(fig, "q26_4_relations.png")


def main():

    # 分野01
    q01_2_freq_table()
    q01_3_skewed_hist()
    q01_4_bimodal_hist()

    # 分野02
    q02_3_income_hist()

    # 分野04
    q04_3_department_boxplots()
    q04_4_hist_and_boxplots()

    # 分野05
    q05_2_lorenz_curve()
    q05_3_index_lines()

    # 分野06
    q06_1_right_skew()
    q06_2_right_skew()
    q06_3_kurtosis_compare()
    q06_4_four_hists()

    # 分野10
    q10_3_moving_average()
    q10_4_correlogram()

    # 分野26
    q26_4_relations()


if __name__ == "__main__":
    main()
