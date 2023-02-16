class Article {
    static HTMLToText(h) {
        return new String(h).
            replace(/<\/p>/g, "\n\n").
            replace(/<br>/g, "\n\n").
            replace(/<.+?>/g, "");
    }

    static rawHTMLtoHTML(rh) {
        return new String(rh).
            replace(/\n/g, "");
    }
}