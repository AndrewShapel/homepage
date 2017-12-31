export default {
  /**
   * @param {Object} parent
   * @param {Object} child
   * @returns {Boolean}
   */
  isDescendant(parent, child) {
    const node = child.parentNode;

    if (node !== null && node === parent) {
      return true;
    } else if (node !== null && node !== parent) {
      return this.isDescendant(parent, node);
    }

    return false;
  }
}
