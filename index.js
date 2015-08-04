module.exports = {
  /**
   * Detect the type of `value`. Returns 'integer', 'float', 'boolean' or 'string'; defaults to 'string'.
   *
   * @param {*} value
   *
   * @returns {String}
   */
  detect : function (value) {
    value += '';

    if (value.search(/^\-?\d+$/) > -1) {
      return 'integer';
    }

    if (value.search(/^\-?\d+\.\d+[\d.]*$/) > -1) {
      return 'float';
    }

    if ('false' === value || 'true' === value) {
      return 'boolean';
    }

    return 'string';
  },

  /**
   * Cast `value` to given `type`.
   *
   * @param {*}      value
   * @param {String} [type]
   *
   * @returns {*}
   */
  cast : function (value, type) {
    type = type || 'smart';

    switch (type) {
      case 'boolean':
      case 'bool':
        if (typeof value !== 'string') {
          value = !!value;
        } else {
          value = ['null', 'undefined', '0', 'false'].indexOf(value) === -1;
        }

        break;

      case 'string':
      case 'text':
        value = this.cast(value, 'boolean') ? value + '' : null
        break;

      case 'int':
      case 'integer':
      case 'number':
        value = ~~value;
        break;

      case 'float':
        value = parseFloat(value);
        break;

      case 'smart':
        value = this.cast(value, this.detect(value));
        break;

      default:
        throw new Error('Expected valid casting type.');
    }

    return value;
  }
};
