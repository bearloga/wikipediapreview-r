# wikipediapreview

<!-- badges: start -->
<!-- badges: end -->

[Wikipedia Preview](https://www.mediawiki.org/wiki/Wikipedia_Preview) for [R Markdown](https://rmarkdown.rstudio.com/) documents.

| Format/Generator | Compatibility |
|:-----------------|:--------------|
| [blogdown](https://pkgs.rstudio.com/blogdown/) blog/website | ✅ Confirmed |
| [bookdown](https://pkgs.rstudio.com/bookdown/) website | ❔ Unknown |
| [distill](https://rstudio.github.io/distill/) article | ✅ Confirmed |
| [distill](https://rstudio.github.io/distill/) blog/website | ❔ Unknown (but probably works) |
| HTML Vignette/Document | ✅ Confirmed |
| [pkgdown](https://pkgdown.r-lib.org/) article | ✅ Confirmed |
| [Quarto](https://quarto.org/) HTML documents | ✅ Confirmed |
| [Quarto](https://quarto.org/) blog/website | ✅ Confirmed |
| [Quarto presentation](https://quarto.org/docs/presentations/revealjs/) | ✔️ Confirmed _BUT_ using alternative styling is not recommended |
| [Reveal.js](https://github.com/rstudio/revealjs) presentation | ✔️ Confirmed _BUT_ using alternative styling is not recommended |
| [xaringan](https://github.com/yihui/xaringan) presentation | ✔️ Confirmed _BUT_ `{.wiki}` styling does not work |

**NOTE**: Wikipedia Preview [standalone JS component](https://github.com/wikimedia/wikipedia-preview) can be used on any website. There is also an [official WordPress plug-in](https://wordpress.org/plugins/wikipedia-preview/).

## Installation

You can install the development version of wikipediapreview like so:

``` r
# install.packages("remotes")
remotes::install_github("bearloga/wikipediapreview-r")
```

## Example

To initialize include the following anywhere in your R Markdown document:

```
`r wikipediapreview::wp_init()`
```

If you prefer, you can initialize using a designated chunk instead:

````{verbatim}
```{r wp-init, results='asis', echo=FALSE}
library(wikipediapreview)
wp_init()
```
````

Links to Wikipedia articles in your R Markdown document will automatically have popup cards showing your readers a preview of the linked article:

![Demonstration of Wikipedia Preview on a rendered R Markdown vignette](man/figures/demo.gif)

## 1.8.0

This package uses version 1.8.0 of Wikipedia Preview while the latest version (as of 2024-06-23) is 1.11.0 and includes awesome improvements like multiple color schemes (night/dark mode).

However, starting with 1.9.0, the maintainers of the library have been distributing a CommonJS version (`.cjs`). [Unpkg has an unresolved issue](https://github.com/mjackson/unpkg/issues/355) where it does not correctly set the content type of `.cjs` files -- it serves them as "text/plain" instead of "application/javascript" -- which sets off an "blocked due to MIME type mismatch (X-Content-Type-Options: nosniff)" error when the browser tries to load it from unpkg's servers.

Until that issue is resolved, this package cannot use the latest version of Wikipedia Preview library.
