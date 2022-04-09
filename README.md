# wikipediapreview

<!-- badges: start -->
<!-- badges: end -->

[Wikipedia Preview](https://www.mediawiki.org/wiki/Wikipedia_Preview) for [R Markdown](https://rmarkdown.rstudio.com/) documents.

| Format/Generator | Compatibility |
|:-----------------|:-------------:|
| HTML Vignette/Document | ✅ Confirmed |
| [pkgdown](https://pkgdown.r-lib.org/) article | ✅ Confirmed |
| [distill](https://rstudio.github.io/distill/) article | ✅ Confirmed |
| [distill](https://rstudio.github.io/distill/) blog/website | Unknown |
| [blogdown](https://pkgs.rstudio.com/blogdown/) blog/website | Unknown |
| [bookdown](https://pkgs.rstudio.com/bookdown/) website | Unknown |

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

Links to Wikipedia articles in your R Markdown document will automatically have
popup cards showing your readers a preview of the linked article:

![Demonstration of Wikipedia Preview on a rendered R Markdown vignette](man/figures/demo.gif)
