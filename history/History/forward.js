module.exports = function () {
    var self = this,
        diff,
        apply,
        fore;

    if (self.changesetsFore.length === 0) {return false;}

    diff = require("changeset");
    apply = diff.apply;

    fore = apply(
        self.changesetsFore.pop(),
        self.last
    );

    self.changesetsBack.push(
        diff(
            fore,
            self.last
        )
    );

    self.last = fore;

    return self.position();

};
