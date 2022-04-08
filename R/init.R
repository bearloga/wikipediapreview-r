.onAttach <- function(libname, pkgname) {
    packageStartupMessage("To initialize Wikipedia Preview include the following
    inline code anywhere in your document:
    `r wikipediapreview::wp_init()`

    Alternatively, if you prefer to have a designated chunk:
    ```{r wp-init, results='asis', echo=FALSE}
    library(wikipediapreview)
    wp_init()
    ```")
}

script_js <- function() {
    system.file("js", "wikipedia-preview.production.js", package = "wikipediapreview")
}

styles_css <- function(alt = FALSE) {
    if (alt)
        return(system.file("css", "alternative.css", package = "wikipediapreview"))

    system.file("css", "wikipedia-preview.css", package = "wikipediapreview")
}

#' @title Initialize Wikipedia Preview
#' @description Initializes Wikipedia Preview for use in the document
#' @param lang Language code
#' @param use_unpkg Whether to link to the JS file on [unpkg](https://unpkg.com/)
#'   rather than embedding the JS code in the document
#' @param with_styles Initialize with package-provided CSS styles
#' @param use_alt_style Use an alternative built-in style
#' @export
wp_init <- function(lang = "en", use_unpkg = FALSE, with_styles = TRUE, use_alt_style = FALSE) {
    init_code <- paste0("
    window.onload = function() {
      wikipediaPreview.init({
        lang: '", lang,"',
        selector: '.wiki',
        detectLinks: true
      });
    };")
    temporary_file <- tempfile("script", fileext = ".js")
    cat(init_code, file = temporary_file)

    if (use_unpkg) {
        script_html <- htmltools::tags$script(
            src = "https://unpkg.com/browse/wikipedia-preview@latest/dist/wikipedia-preview.production.js",
            type = "text/javascript"
        )
    } else {
        script_html <- htmltools::includeScript(script_js(), type = "text/javascript")
    }

    if (with_styles) {
        htmltools::tagList(
            htmltools::includeCSS(styles_css(use_alt_style)),
            script_html,
            htmltools::includeScript(temporary_file, type = "text/javascript")
        )
    } else {
        htmltools::tagList(
            script_html,
            htmltools::includeScript(temporary_file, type = "text/javascript")
        )
    }
}
