/**
 * 
 * @param {string} tagName 
 * @param {object} attrubutes 
 * @return {HTMLElement}
 */

export function createElement(tagName, attrubutes) {
    const element = document.createElement(tagName)
    for (const [attrubute, value] of Object.entries(attrubutes)) {
        element.setAttribute(attrubute, value)
    }
    return element
}