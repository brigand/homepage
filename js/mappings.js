function feeling_lucky(site, subq) {
    subq = typeof subq === "undefined" ? "" : subq;
    site = typeof site === "undefined" ? "" : site;

    var base = "//www.google.com/search?ie=UTF-8&oe=UTF-8&btnI=1&q=";
    if (site) {
        site = "&sitesearch=" + site;
    }

    // Sub queryies prepended to input
    if (subq) {
        subq = "%20"
    }
    subq = "&q=" + subq;

    return base + site + subq;

}

mapping_array = [
    ['Duck', '//duckduckgo.com/?q='],
    ['Google Web', '//google.com/search?q='],
    ['Google Lucky', feeling_lucky()],
    ['Google Image', '//google.com/search?tbm=isch&q='],
    ['jQuery API', '//jqapi.com/#p='],
    ['MDN', '//developer.mozilla.org/en-US/search?q='],
    ['Python', feeling_lucky("docs.python.org")],
    ['GMail', 'https://mail.google.com/mail/u/0/?shva=1#apps/'],
    ['AZ Lyrics', 'http://search.azlyrics.com/search.php?q='],
    ['AZ Lucky', feeling_lucky('azlyrics.com')],
    ['YouTube', feeling_lucky('youtube.com')]
];
