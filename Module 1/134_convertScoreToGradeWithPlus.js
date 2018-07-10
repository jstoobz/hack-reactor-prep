function convertScoreToGradeWithPlusAndMinus(score) {
  switch(true) {
    case score > 100 || score < 0: return 'INVALID SCORE';
    case score >= 98: return 'A+';
    case score >= 92: return 'A';
    case score >= 90: return 'A-';
    case score >= 88: return 'B+';
    case score >= 82: return 'B';
    case score >= 80: return 'B-';
    case score >= 78: return 'C+';
    case score >= 72: return 'C';
    case score >= 70: return 'C-';
    case score >= 68: return 'D+';
    case score >= 62: return 'D';
    case score >= 60: return 'D-';
    default: return 'F';
  }
}

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output);