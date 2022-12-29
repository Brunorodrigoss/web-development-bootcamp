function isLeap(year) {
    var flag = false;
    
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                flag = true;
            } else {
                flag = false;
            }
        } else {
            flag = true;
        }
    } else {
        flag = false;
    }

    if (flag) {
        return 'Leap year.';
    } else {
        return 'Not leap year.';
    }
}
