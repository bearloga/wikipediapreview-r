# wikipediapreview

<!-- badges: start -->
<!-- badges: end -->

[Wikipedia Preview](https://www.mediawiki.org/wiki/Wikipedia_Preview) for R Markdown documents

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
