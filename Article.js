export default { HTMLToText, zipHTML }

/**
 * 将 HTML 代码转换为 textContent。
 * @param {String} h HTML 代码
 * @return {String} 纯文本
*/
function HTMLToText(h) {
    return new String(h).
        replace(/<\/p>/g, "\n\n").
        replace(/<br>/g, "\n\n").
        replace(/<.+?>/g, "");
}

/**
 * 压缩 HTML 代码。
 * @param {String} rh 原始 HTML 代码
 * @return {String} 压缩后的 HTML 代码
*/
function zipHTML(rh) {
    return new String(rh).
        replace(/\n/g, "");
}