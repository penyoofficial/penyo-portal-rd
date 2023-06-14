export default { HTMLToText, zipHTML }

/**
 * 将 HTML 代码转换为 textContent。
*/
function HTMLToText(h) {
    return new String(h).
        replace(/<\/p>/g, "\n\n").
        replace(/<br>/g, "\n\n").
        replace(/<.+?>/g, "");
}

/**
 * 压缩 HTML 代码。
*/
function zipHTML(rh) {
    return new String(rh).
        replace(/\n/g, "");
}