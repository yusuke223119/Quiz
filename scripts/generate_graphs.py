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

# 日本語フォント設定（Windows 標準フォントを優先的に使用）
plt.rcParams["font.family"] = ["Meiryo", "Yu Gothic", "MS Gothic", "sans-serif"]
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
    """問04-3: 部署A・Bの月間残業時間の箱ひげ図"""
    stats = [
        {"label": "部署A", "whislo": 10, "q1": 18, "med": 25, "q3": 28, "whishi": 40, "fliers": []},
        {"label": "部署B", "whislo": 14, "q1": 20, "med": 32, "q3": 35, "whishi": 40, "fliers": [52]},
    ]
    fig, ax = plt.subplots(figsize=(7.0, 3.1))
    artists = ax.bxp(stats, vert=False, patch_artist=True, widths=0.5)
    for box, color in zip(artists["boxes"], ["#60a5fa", "#34d399"]):
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


if __name__ == "__main__":
    main()
