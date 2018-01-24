var i = 'fds';
var baby = {
    name: 'chengwei',
    age: 5
};
function log(b) {
    return b.name;
}
function getNameOrAge(sth) {
    if (sth.length)
        return sth.length;
    else
        return sth;
}
var Days;
(function (Days) {
    Days[Days["Sum"] = 0] = "Sum";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
})(Days || (Days = {}));
