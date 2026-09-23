# -*- coding: utf-8 -*-
"""
統計検定2級向けの統計数値表を生成する。

出力:
    picture/normal_distribution_table.png
    picture/t_distribution_table.png
    picture/chi_square_table.png
    picture/f_distribution_table.png       (上側確率 0.05)
    picture/f_distribution_table_025.png   (上側確率 0.025)

実行:
    python scripts/generate_stats_tables.py
"""

from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import FancyBboxPatch, Rectangle
from scipy import stats

plt.rcParams["font.family"] = "Hiragino Sans"
plt.rcParams["axes.unicode_minus"] = False

OUT_DIR = Path(__file__).resolve().parent.parent / "picture"

HEADER_BG = "#3d5166"
GRID = "#1f2933"
CURVE = "#2b7de9"
SHADE = "#b7d9f5"
TEXT = "#1e293b"
TITLE_SIZE = 18


def fmt_plain(value, digits):
    return f"{value:.{digits}f}"


def fmt_normal(value):
    text = f"{value:.4f}"
    if text.startswith("0"):
        return text[1:]
    return text


def draw_table(ax, col_headers, row_headers, cells, font_size=8.2, corner=""):
    n_rows = len(row_headers)
    n_cols = len(col_headers)
    ax.set_xlim(0, n_cols + 1)
    ax.set_ylim(0, n_rows + 1)
    ax.invert_yaxis()
    ax.axis("off")

    def cell(x, y, w, h, facecolor, text, color="#fff", weight="bold", size=None):
        ax.add_patch(
            Rectangle(
                (x, y),
                w,
                h,
                facecolor=facecolor,
                edgecolor=GRID,
                linewidth=0.55,
                joinstyle="miter",
            )
        )
        if text:
            ax.text(
                x + w / 2,
                y + h / 2,
                text,
                ha="center",
                va="center",
                color=color,
                fontsize=size or font_size,
                fontweight=weight,
                clip_on=True,
            )

    cell(0, 0, 1, 1, HEADER_BG, corner, size=font_size - 0.6)
    for j, header in enumerate(col_headers):
        cell(j + 1, 0, 1, 1, HEADER_BG, str(header))
    for i, header in enumerate(row_headers):
        cell(0, i + 1, 1, 1, HEADER_BG, str(header))
        for j, value in enumerate(cells[i]):
            cell(j + 1, i + 1, 1, 1, "#ffffff", value, color=TEXT, weight="regular")


def style_curve_axis(ax):
    ax.set_yticks([])
    for spine in ax.spines.values():
        spine.set_visible(False)
    ax.tick_params(length=0, labelsize=9, colors=TEXT)
    ax.set_facecolor("none")


def shade_right(ax, x, y, cutoff):
    collection = ax.fill_between(x, y, where=x >= cutoff, interpolate=True)
    collection.set_facecolor(SHADE)
    collection.set_edgecolor("#6aaee6")
    collection.set_hatch("////")
    collection.set_linewidth(0.0)
    collection.set_alpha(0.95)


def visible_tail_cutoff(x, y, frac=0.22):
    peak = int(np.argmax(y))
    threshold = y.max() * frac
    after = np.where(y[peak:] <= threshold)[0]
    if len(after) == 0:
        return x[int(len(x) * 0.62)]
    return x[peak + after[0]]


def add_legend(ax, label, x=0.86, y=0.78):
    ax.add_patch(
        FancyBboxPatch(
            (x, y),
            0.045,
            0.09,
            boxstyle="square,pad=0",
            transform=ax.transAxes,
            facecolor=SHADE,
            edgecolor=CURVE,
            linewidth=0.7,
            hatch="////",
            alpha=0.95,
            clip_on=False,
        )
    )
    ax.text(x + 0.06, y + 0.045, label, transform=ax.transAxes, va="center", fontsize=10, color=TEXT)


def draw_normal_curve(ax):
    x = np.linspace(-3.6, 3.6, 500)
    y = stats.norm.pdf(x)
    z0 = 1.05
    ax.plot(x, y, color=CURVE, lw=1.8)
    shade_right(ax, x, y, z0)
    ax.axhline(0, color=TEXT, lw=0.9)
    ax.set_xlim(-3.7, 3.7)
    ax.set_ylim(-0.02, y.max() * 1.18)
    ax.set_xticks([-0.02, z0])
    ax.set_xticklabels(["0", "z"])
    style_curve_axis(ax)
    add_legend(ax, r"$P(Z \geq z)$")


def draw_t_curve(ax):
    x = np.linspace(-4.2, 4.2, 500)
    y = stats.t.pdf(x, 6)
    t0 = 1.55
    ax.plot(x, y, color=CURVE, lw=1.8)
    shade_right(ax, x, y, t0)
    ax.axhline(0, color=TEXT, lw=0.9)
    ax.set_xlim(-4.3, 4.3)
    ax.set_ylim(-0.02, y.max() * 1.18)
    ax.set_xticks([-0.02, t0])
    ax.set_xticklabels(["0", "t"])
    style_curve_axis(ax)
    add_legend(ax, r"$P(T \geq t)$")


def draw_chi_curve(ax):
    x = np.linspace(0, 16, 500)
    y = stats.chi2.pdf(x, 5)
    x0 = visible_tail_cutoff(x, y, 0.28)
    ax.plot(x, y, color=CURVE, lw=1.8)
    shade_right(ax, x, y, x0)
    ax.axhline(0, color=TEXT, lw=0.9)
    ax.set_xlim(-0.2, 16.2)
    ax.set_ylim(-0.01, y.max() * 1.18)
    ax.set_xticks([0, x0])
    ax.set_xticklabels(["0", "x"])
    style_curve_axis(ax)
    add_legend(ax, r"$P(\chi^{2} \geq x)$")


def draw_f_curve(ax, alpha):
    x = np.linspace(0, 6.8, 500)
    y = stats.f.pdf(x, 6, 12)
    f0 = visible_tail_cutoff(x, y, 0.28)
    ax.plot(x, y, color=CURVE, lw=1.8)
    shade_right(ax, x, y, f0)
    ax.axhline(0, color=TEXT, lw=0.9)
    ax.set_xlim(-0.12, 6.9)
    ax.set_ylim(-0.01, y.max() * 1.18)
    ax.set_xticks([0, f0])
    ax.set_xticklabels(["0", "f"])
    style_curve_axis(ax)
    add_legend(ax, rf"$P(F \geq f)={alpha:g}$")


def make_figure(title, curve_fn, col_headers, row_headers, cells, filename, figsize, font_size, corner="", subtitle=""):
    fig = plt.figure(figsize=figsize, facecolor="white")
    top = 0.91 if subtitle else 0.93
    gs = fig.add_gridspec(2, 1, height_ratios=[0.9, 4.6], hspace=0.08, top=top, bottom=0.03, left=0.03, right=0.97)
    ax_curve = fig.add_subplot(gs[0])
    ax_table = fig.add_subplot(gs[1])
    fig.suptitle(title, fontsize=TITLE_SIZE, color=TEXT, fontweight="medium", y=0.985)
    if subtitle:
        fig.text(0.5, 0.945, subtitle, ha="center", fontsize=10, color="#64748b")
    curve_fn(ax_curve)
    draw_table(ax_table, col_headers, row_headers, cells, font_size=font_size, corner=corner)
    OUT_DIR.mkdir(exist_ok=True)
    path = OUT_DIR / filename
    fig.savefig(path, dpi=220, facecolor="white")
    plt.close(fig)
    print(f"saved {path}")


def generate_normal():
    rows = [f"{i / 10:.1f}" for i in range(0, 31)]
    cols = [f"{j:02d}" for j in range(10)]
    cells = []
    for i in range(0, 31):
        row = []
        for j in range(10):
            z = i / 10 + j / 100
            row.append(fmt_normal(stats.norm.sf(z)))
        cells.append(row)
    make_figure(
        "標準正規分布表",
        draw_normal_curve,
        cols,
        rows,
        cells,
        "normal_distribution_table.png",
        figsize=(11.2, 14.4),
        font_size=8.0,
    )


def generate_t():
    dfs = list(range(1, 31)) + [40, 60, 120, np.inf]
    alphas = [0.10, 0.05, 0.025, 0.01, 0.005]
    cols = ["0.1", "0.05", "0.025", "0.01", "0.005"]
    rows = ["∞" if np.isinf(df) else str(df) for df in dfs]
    cells = []
    for df in dfs:
        row = []
        for alpha in alphas:
            if np.isinf(df):
                value = stats.norm.ppf(1 - alpha)
            else:
                value = stats.t.ppf(1 - alpha, df)
            row.append(fmt_plain(value, 3))
        cells.append(row)
    make_figure(
        "t分布表",
        draw_t_curve,
        cols,
        rows,
        cells,
        "t_distribution_table.png",
        figsize=(10.2, 14.8),
        font_size=8.4,
    )


def generate_chi():
    dfs = list(range(1, 31))
    alphas = [0.995, 0.99, 0.975, 0.95, 0.05, 0.025, 0.01, 0.005]
    cols = ["0.995", "0.99", "0.975", "0.95", "0.05", "0.025", "0.01", "0.005"]
    rows = [str(df) for df in dfs]
    cells = []
    for df in dfs:
        row = []
        for alpha in alphas:
            value = stats.chi2.ppf(1 - alpha, df)
            if value < 0.0005:
                row.append("0.000")
            else:
                row.append(fmt_plain(value, 3))
        cells.append(row)
    make_figure(
        "χ²分布表",
        draw_chi_curve,
        cols,
        rows,
        cells,
        "chi_square_table.png",
        figsize=(11.4, 14.6),
        font_size=8.0,
    )


def generate_f(alpha, filename, title):
    dfn_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 24, 30]
    dfd_list = list(range(1, 31)) + [40, 60, 120]
    cols = [str(v) for v in dfn_list]
    rows = [str(v) for v in dfd_list]
    cells = []
    for dfd in dfd_list:
        row = []
        for dfn in dfn_list:
            value = stats.f.ppf(1 - alpha, dfn, dfd)
            if value >= 100:
                row.append(fmt_plain(value, 2))
            elif value >= 10:
                row.append(fmt_plain(value, 2))
            else:
                row.append(fmt_plain(value, 2))
        cells.append(row)
    make_figure(
        title,
        lambda ax: draw_f_curve(ax, alpha),
        cols,
        rows,
        cells,
        filename,
        figsize=(13.6, 15.6),
        font_size=7.1,
        subtitle="列：分子の自由度 ν₁　　行：分母の自由度 ν₂",
    )


def main():
    generate_normal()
    generate_t()
    generate_chi()
    generate_f(0.05, "f_distribution_table.png", "F分布表（上側確率 0.05）")
    generate_f(0.025, "f_distribution_table_025.png", "F分布表（上側確率 0.025）")


if __name__ == "__main__":
    main()
