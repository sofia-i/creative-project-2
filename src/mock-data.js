let mock = [{
    id: 1,
    name: "One",
    factors: [1],
    prime: true
  },
  {
    id: 2,
    name: "Two",
    factors: [1,2],
    prime: true
  },
  {
    id: 3,
    name: "Three",
    factors: [1,3],
    prime: true
  },
  {
    id: 4,
    name: "Four",
    factors: [1,2,4],
    prime: false
  },
  {
    id: 5,
    name: "Five",
    factors: [1,5],
    prime: true

  },
  {
    id: 6,
    name: "Six",
    factors: [1,2,3,6],
    prime: false
  },
  {
    id: 7,
    name: "Seven",
    factors: [1,7],
    prime: true
  },
  {
    id: 8,
    name: "Eight",
    factors: [1,2,4,8],
    prime: false
  },
  {
    id: 9,
    name: "Nine",
    factors: [1,3,9],
    prime: false
  },
  {
    id: 10,
    name: "Ten",
    factors: [1,2,5,10],
    prime: false
  },
  {
    id: 11,
    name: "Eleven",
    factors: [1,11],
    prime: false
  },
  {
    id: 12,
    name: "Twelve",
    factors: [1,2,3,4,6,12],
    prime: false
  },
  {
    id: 13,
    name: "Thirteen",
    factors: [1,13],
    prime: true
  },
  {
    id: 14,
    name: "Fourteen",
    factors: [1,2,7,14],
    prime: false
  },
  {
    id: 15,
    name: "Fifteen",
    factors: [1,3,5,15],
    prime: false
  },
  {
    id: 16,
    name: "Sixteen",
    factors: [1,2,4,8,16],
    prime: false
  },
  {
    id: 17,
    name: "Seventeen",
    factors: [1,17],
    prime: true
  },
  {
    id: 18,
    name: "Eighteen",
    factors: [1,2,3,6,9,18],
    prime: false
  },
  {
    id: 19,
    name: "Nineteen",
    factors: [1,19],
    prime: true
  },
  {
    id: 20,
    name: "Twenty",
    factors: [1,2,4,5,10,20],
    prime: false
  },
  {
    id: 21,
    name: "Twenty-one",
    factors: [1,3,7,21],
    prime: false
  },
  {
    id: 22,
    name: "Twenty-two",
    factors: [1,2,11,22],
    prime: false
  },
  {
    id: 23,
    name: "Twenty-three",
    factors: [1,23],
    prime: true
  },
  {
    id: 24,
    name: "Twenty-four",
    factors: [1,2,3,4,6,8,12,24],
    prime: false
  },
  {
    id: 25,
    name: "Twenty-five",
    factors: [1,5,25],
    prime: false
  },
  {
    id: 26,
    name: "Twenty-six",
    factors: [1,2,13,26],
    prime: false
  },
  {
    id: 27,
    name: "Twenty-seven",
    factors: [1,3,9,27],
    prime: false
  },
  {
    id: 28,
    name: "Twenty-eight",
    factors: [1,2,4,7,14,28],
    prime: false
  },
  {
    id: 29,
    name: "Twenty-nine",
    factors: [1,29],
    prime: true
  },
  {
    id: 30,
    name: "Thirty",
    factors: [1,2,3,5,6,10,15,30],
    prime: false
  },
  {
    id: 31,
    name: "Thirty-one",
    factors: [1,31],
    prime: true
  },
  {
    id: 32,
    name: "Thirty-two",
    factors: [1,2,4,8,16,32],
    prime: false
  },
  {
    id: 33,
    name: "Thirty-three",
    factors: [1,3,11,33],
    prime: false
  },
  {
    id: 34,
    name: "Thirty-four",
    factors: [1,2,17,34],
    prime: false
  },
  {
    id: 35,
    name: "Thirty-five",
    factors: [1,5,7,35],
    prime: false
  },
  {
    id: 36,
    name: "Thirty-six",
    factors: [1,2,3,4,6,9,12,18,36],
    prime: false
  },
  {
    id: 37,
    name: "Thirty-seven",
    factors: [1,37],
    prime: true
  },
  {
    id: 38,
    name: "Thirty-eight",
    factors: [1,2,19,38],
    prime: false
  },
  {
    id: 39,
    name: "Thirty-nine",
    factors: [1,3,13,39],
    prime: false
  },
  {
    id: 40,
    name: "Forty",
    factors: [1,2,4,5,8,10,20,40],
    prime: false
  },
  {
    id: 41,
    name: "Forty-one",
    factors: [1,41],
    prime: true
  },
  {
    id: 42,
    name: "Forty-two",
    factors: [1,2,3,6,7,14,21,42],
    prime: false
  },
  {
    id: 43,
    name: "Forty-three",
    factors: [1,43],
    prime: true
  },
  {
    id: 44,
    name: "Forty-four",
    factors: [1,2,4,11,22,44],
    prime: false
  },
  {
    id: 45,
    name: "Forty-five",
    factors: [1,3,5,9,15,45],
    prime: false
  },
  {
    id: 46,
    name: "Forty-six",
    factors: [1,2,23,46],
    prime: false
  },
  {
    id: 47,
    name: "Forty-seven",
    factors: [1,47],
    prime: true
  },
  {
    id: 48,
    name: "Forty-eight",
    factors: [1,2,3,4,6,8,12,16,24,48],
    prime: false
  },
  {
    id: 49,
    name: "Forty-nine",
    factors: [1,7,49],
    prime: false
  },
  {
    id: 50,
    name: "Fifty",
    factors: [1,2,5,10,25,50],
    prime: false
  },
  {
    id: 51,
    name: "Fifty-one",
    factors: [1,3,17,51],
    prime: false
  },
  {
    id: 52,
    name: "Fifty-two",
    factors: [1,2,4,13,26,52],
    prime: false
  },
  {
    id: 53,
    name: "Fifty-three",
    factors: [1,53],
    prime: true
  },
  {
    id: 54,
    name: "Fifty-four",
    factors: [1,2,3,6,9,18,27,54],
    prime: false
  },
  {
    id: 55,
    name: "Fifty-five",
    factors: [1,5,11,55],
    prime: false
  },
  {
    id: 56,
    name: "Fifty-six",
    factors: [1,2,4,7,8,14,28,56],
    prime: false
  },
  {
    id: 57,
    name: "Fifty-seven",
    factors: [1,3,19,57],
    prime: false
  },
  {
    id: 58,
    name: "Fifty-eight",
    factors: [1,2,29,58],
    prime: false
  },
  {
    id: 59,
    name: "Fifty-nine",
    factors: [1,59],
    prime: true
  },
  {
    id: 60,
    name: "Sixty",
    factors: [1,2,3,4,5,6,10,12,15,20,30,60],
    prime: false
  },
  {
    id: 61,
    name: "Sixty-one",
    factors: [1,61],
    prime: true
  },
  {
    id: 62,
    name: "Sixty-two",
    factors: [1,2,31,62],
    prime: false
  },
  {
    id: 63,
    name: "Sixty-three",
    factors: [1,3,7,9,21,63],
    prime: false
  },
  {
    id: 64,
    name: "Sixty-four",
    factors: [1,2,4,8,16,32,64],
    prime: false
  },
  {
    id: 65,
    name: "Sixty-five",
    factors: [1,5,13,65],
    prime: false
  },
  {
    id: 66,
    name: "Sixty-six",
    factors: [1,2,3,6,11,22,33,66],
    prime: false
  },
  {
    id: 67,
    name: "Sixty-seven",
    factors: [1,67],
    prime: true
  },
  {
    id: 68,
    name: "Sixty-eight",
    factors: [1,2,4, 17, 34, 68],
    prime: false
  },
  {
    id: 69,
    name: "Sixty-nine",
    factors: [1,3, 23, 69],
    prime: false
  },
  {
    id: 70,
    name: "Seventy",
    factors: [1,2,2, 5, 7, 10, 14, 35, 70],
    prime: false
  },
  {
    id: 71,
    name: "Seventy-one",
    factors: [1,71],
    prime: true
  },
  {
    id: 72,
    name: "Seventy-two",
    factors: [1,2,3,4,6,8,9,12,18,24,36,72],
    prime: false
  },
  {
    id: 73,
    name: "Seventy-three",
    factors: [1,73],
    prime: true
  },
  {
    id: 74,
    name: "Seventy-four",
    factors: [1,2,37,74],
    prime: false
  },
  {
    id: 75,
    name: "Seventy-five",
    factors: [1,3,5,15,25,75],
    prime: false
  },
  {
    id: 76,
    name: "Seventy-six",
    factors: [1,2,4,19,38,76],
    prime: false
  },
  {
    id: 77,
    name: "Seventy-seven",
    factors: [1,7,11,77],
    prime: false
  },
  {
    id: 78,
    name: "Seventy-eight",
    factors: [1,2,3,6,13,26,39,78],
    prime: false
  },
  {
    id: 79,
    name: "Seventy-nine",
    factors: [1,79],
    prime: true
  },
  {
    id: 80,
    name: "Eigthy",
    factors: [1,2,4,5,8,10,16,20,40,80],
    prime: false
  },
  {
    id: 81,
    name: "Eighty-one",
    factors: [1,3,9,27,81],
    prime: false
  },
  {
    id: 82,
    name: "Eighty-two",
    factors: [1,2,41,82],
    prime: false
  },
  {
    id: 83,
    name: "Eighty-three",
    factors: [1,83],
    prime: true
  },
  {
    id: 84,
    name: "Eighty-four",
    factors: [1,2,3,4,6,7,12,14,21,28,42,84],
    prime: false
  },
  {
    id: 85,
    name: "Eighty-five",
    factors: [1,3,17,85],
    prime: false
  },
  {
    id: 86,
    name: "Eighty-six",
    factors: [1,2,42,86],
    prime: false
  },
  {
    id: 87,
    name: "Eighty-seven",
    factors: [1,3,29,87],
    prime: false
  },
  {
    id: 88,
    name: "Eighty-eight",
    factors: [1,2,4,8,11,22,44,88],
    prime: false
  },
  {
    id: 89,
    name: "Eighty-nine",
    factors: [1,89],
    prime: false
  },
  {
    id: 90,
    name: "Ninety",
    factors: [1,2,3,5,6,9,10,15,18,30,45,90],
    prime: false
  },
  {
    id: 91,
    name: "Ninety-one",
    factors: [1,7,13,91],
    prime: false
  },
  {
    id: 92,
    name: "Ninety-two",
    factors: [1,2,4,23,46,92],
    prime: false
  },
  {
    id: 93,
    name: "Ninety-three",
    factors: [1,3,31,93],
    prime: false
  },
  {
    id: 94,
    name: "Ninety-four",
    factors: [1,2,47,94],
    prime: false
  },
  {
    id: 95,
    name: "Ninety-five",
    factors: [1,5,19,95],
    prime: false
  },
  {
    id: 96,
    name: "Ninety-six",
    factors: [1,2,3,4,6,8,12,16,24,32,48,96],
    prime: false
  },
  {
    id: 97,
    name: "Ninety-seven",
    factors: [1,97],
    prime: true
  },
  {
    id: 98,
    name: "Ninety-eight",
    factors: [1,2,7,14,49,98],
    prime: false
  },
  {
    id: 99,
    name: "Ninety-nine",
    factors: [1,3,9,11,33,99],
    prime: false
  },
  {
    id: 100,
    name: "One hundred",
    factors: [1,2,4,5,10,20,25,50,100],
    prime: false
  }
]

export default mock;
