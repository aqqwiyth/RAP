function trimStr(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}

function firstToUpperCase(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
}

function camelCase(input) {
    return input.replace(/_(.)/g, function (match, group1) {
        return group1.toUpperCase();
    });
}

function camelCaseWithFirstCharUpper(input) {
    if (!input) {
        return ""
    }
    input = camelCase(input);
    return input[0].toUpperCase() + input.substr(1);
}

function isDate(date) {
    if (typeof(val) != 'string' && typeof(val) != 'number') {
        return false;
    }
    if (date && ( date.match(/^\d{4}-\d{2}-\d{2}$/) || date.match(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/))) {
        return true;
    }
    return ((new Date(date) !== "Invalid Date" && !isNaN(new Date(date))) && isNaN((+date)));
}

function isInt(n) {
    return n % 1 === 0;
}


