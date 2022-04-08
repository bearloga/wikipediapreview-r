#' @title Update Wikipedia Preview JS library
#' @description Installs the latest version of the JavaScript library from unpkg
#' @export
wp_update <- function() {
    if (!requireNamespace("curl", quietly = TRUE)) {
        stop("Downloading requires the 'curl' package to be installed")
    }
    curl::curl_download(
        url = "https://unpkg.com/wikipedia-preview@latest/dist/wikipedia-preview.production.js",
        destfile = script_js(),
    )
}
