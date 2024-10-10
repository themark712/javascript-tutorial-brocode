// Javascript switch Statement

let day = "pizza";

switch (day) {
    case 1:
        alert("Today is Monday");
        break;
    case 2:
        alert("Today is Tuesday");
        break;
    case 3:
        alert("Today is Wednesday");
        break;
    case 4:
        alert("Today is Thursday");
        break;
    case 5:
        alert("Today is Friday");
        break;
    case 6:
        alert("Today is Saturday");
        break;
    case 7:
        alert("Today is Sunday");
        break;
    default:
        alert(day + " is not a day");
        break
}

let textScore = 63;
let letterGrade;

switch (true) {
    case textScore >= 90:
        letterGrade = "A";
        break;
    case textScore >= 80:
        letterGrade = "B";
        break;
    case textScore >= 70:
        letterGrade = "C";
        break;
    case textScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
        break;
}

alert(letterGrade);