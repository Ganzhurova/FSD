const helpers = {
  isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
  },

  merge(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (this.isObject(target) && this.isObject(source)) {
      Object.keys(source).forEach((key) => {
        const executeMerger = (value) => {
          Object.assign(target, { [key]: value });
        };

        const prop = source[key];
        const targetProp = target[key];

        if (this.isObject(prop)) {
          if (!targetProp) executeMerger({});
          this.merge(targetProp, prop);
        } else if (Array.isArray(prop) && Array.isArray(targetProp)) {
          const newArray = [...new Set([...targetProp, ...prop])];
          executeMerger(newArray);
        } else {
          executeMerger(prop);
        }
      });
    }

    return this.merge(target, ...sources);
  },
};

module.exports = helpers;
