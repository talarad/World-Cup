const ids = {
    Qatar: 1,
    Ecuador: 2,
    England: 3,
    Iran: 4,
    Senegal: 5,
    Netherlands: 6,
    'United States': 7,
    Wales: 8,
    Argentina: 9,
    'Saudi Arabia': 10,
    Denmark: 11,
    Tunisia: 12,
    Mexico: 13,
    Poland: 14,
    France: 15,
    Australia: 16,
    Morocco: 17,
    Croatia: 18,
    Germany: 19,
    Japan: 20,
    Spain: 21,
    'Costa Rica': 22,
    Belgium: 23,
    Canada: 24,
    Switzerland: 25,
    Cameroon: 26,
    Uruguai: 27,
    'Korea Republic': 28,
    Portugal: 29,
    Ghana: 30,
    Brazil: 31,
    Serbia: 32
}

const data = [
    {
        "id": "1",
        "date": "2022-11-20",
        "time": "18:00:00",
        "home_name": "Qatar",
        "away_name": "Ecuador",
        "league_id": "793",
        "home_id": "1",
        "away_id": "2"
    },
    {
        "id": "2",
        "date": "2022-11-21",
        "time": "15:00:00",
        "home_name": "England",
        "away_name": "Iran",
        "league_id": "793",
        "home_id": "3",
        "away_id": "4"
    },
    {
        "id": "3",
        "date": "2022-11-21",
        "time": "18:00:00",
        "home_name": "Senegal",
        "away_name": "Netherlands",
        "league_id": "793",
        "home_id": "5",
        "away_id": "6"
    },
    {
        "id": "4",
        "date": "2022-11-21",
        "time": "21:00:00",
        "home_name": "United States",
        "away_name": "Wales",
        "league_id": "793",
        "home_id": "7",
        "away_id": "8"
    },
    {
        "id": "5",
        "date": "2022-11-22",
        "time": "12:00:00",
        "home_name": "Argentina",
        "away_name": "Saudi Arabia",
        "league_id": "793",
        "home_id": "9",
        "away_id": "10"
    },
    {
        "id": "6",
        "date": "2022-11-22",
        "time": "15:00:00",
        "home_name": "Denmark",
        "away_name": "Tunisia",
        "league_id": "793",
        "home_id": "11",
        "away_id": "12"
    },
    {
        "id": "7",
        "date": "2022-11-22",
        "time": "18:00:00",
        "home_name": "Mexico",
        "away_name": "Poland",
        "league_id": "793",
        "home_id": "13",
        "away_id": "14"
    },
    {
        "id": "8",
        "date": "2022-11-22",
        "time": "21:00:00",
        "home_name": "France",
        "away_name": "Australia",
        "league_id": "793",
        "home_id": "15",
        "away_id": "16"
    },


    {
        "id": "9",
        "date": "2022-11-23",
        "time": "12:00:00",
        "home_name": "Morocco",
        "away_name": "Croatia",
        "league_id": "793",
        "home_id": "17",
        "away_id": "18"
    },
    {
        "id": "10",
        "date": "2022-11-23",
        "time": "15:00:00",
        "home_name": "Germany",
        "away_name": "Japan",
        "league_id": "793",
        "home_id": "19",
        "away_id": "20"
    },
    {
        "id": "11",
        "date": "2022-11-23",
        "time": "18:00:00",
        "home_name": "Spain",
        "away_name": "Costa Rica",
        "league_id": "793",
        "home_id": "21",
        "away_id": "22"
    },
    {
        "id": "12",
        "date": "2022-11-23",
        "time": "21:00:00",
        "home_name": "Belgium",
        "away_name": "Canada",
        "league_id": "793",
        "home_id": "23",
        "away_id": "24"
    },
    {
        "id": "13",
        "date": "2022-11-24",
        "time": "12:00:00",
        "home_name": "Switzerland",
        "away_name": "Cameroon",
        "league_id": "793",
        "home_id": "25",
        "away_id": "26"
    },
    {
        "id": "14",
        "date": "2022-11-24",
        "time": "15:00:00",
        "home_name": "Uruguay",
        "away_name": "Korea Republic",
        "league_id": "793",
        "home_id": "27",
        "away_id": "28"
    },
    {
        "id": "15",
        "date": "2022-11-24",
        "time": "18:00:00",
        "home_name": "Portugal",
        "away_name": "Ghana",
        "league_id": "793",
        "home_id": "29",
        "away_id": "30"
    },
    {
        "id": "16",
        "date": "2022-11-24",
        "time": "21:00:00",
        "home_name": "Brazil",
        "away_name": "Serbia",
        "league_id": "793",
        "home_id": "31",
        "away_id": "32"
    },
    {
        "id": "17",
        "date": "2022-11-25",
        "time": "12:00:00",
        "home_name": "Iran",
        "away_name": "Wales",
        "league_id": "793",
        "home_id": "4",
        "away_id": "8"
    },
    {
        "id": "18",
        "date": "2022-11-25",
        "time": "15:00:00",
        "home_name": "Senegal",
        "away_name": "Qatar",
        "league_id": "793",
        "home_id": "5",
        "away_id": "1"
    },
    {
        "id": "19",
        "date": "2022-11-25",
        "time": "18:00:00",
        "home_name": "Netherlands",
        "away_name": "Ecuador",
        "league_id": "793",
        "home_id": "6",
        "away_id": "2"
    },
    {
        "id": "20",
        "date": "2022-11-25",
        "time": "21:00:00",
        "home_name": "England",
        "away_name": "United States",
        "league_id": "793",
        "home_id": "3",
        "away_id": "7"
    },
    {
        "id": "21",
        "date": "2022-11-26",
        "time": "12:00:00",
        "home_name": "Australia",
        "away_name": "Tunisia",
        "league_id": "793",
        "home_id": "16",
        "away_id": "12"
    },
    {
        "id": "22",
        "date": "2022-11-26",
        "time": "15:00:00",
        "home_name": "Saudi Arabia",
        "away_name": "Poland",
        "league_id": "793",
        "home_id": "10",
        "away_id": "14"
    },
    {
        "id": "23",
        "date": "2022-11-26",
        "time": "18:00:00",
        "home_name": "France",
        "away_name": "Denmark",
        "league_id": "793",
        "home_id": "15",
        "away_id": "11"
    },
    {
        "id": "24",
        "date": "2022-11-26",
        "time": "21:00:00",
        "home_name": "Mexico",
        "away_name": "Argentina",
        "league_id": "793",
        "home_id": "13",
        "away_id": "9"
    },
    {
        "id": "25",
        "date": "2022-11-27",
        "time": "12:00:00",
        "home_name": "Japan",
        "away_name": "Costa Rica",
        "league_id": "793",
        "home_id": "20",
        "away_id": "22"
    },
    {
        "id": "26",
        "date": "2022-11-27",
        "time": "15:00:00",
        "home_name": "Belgium",
        "away_name": "Morocco",
        "league_id": "793",
        "home_id": "23",
        "away_id": "17"
    },
    {
        "id": "27",
        "date": "2022-11-27",
        "time": "18:00:00",
        "home_name": "Croatia",
        "away_name": "Canada",
        "league_id": "793",
        "home_id": "18",
        "away_id": "24"
    },
    {
        "id": "28",
        "date": "2022-11-27",
        "time": "21:00:00",
        "home_name": "Spain",
        "away_name": "Germany",
        "league_id": "793",
        "home_id": "21",
        "away_id": "19"
    },
    {
        "id": "29",
        "date": "2022-11-28",
        "time": "12:00:00",
        "home_name": "Serbia",
        "away_name": "Cameroon",
        "league_id": "793",
        "home_id": "32",
        "away_id": "26"
    },
    {
        "id": "30",
        "date": "2022-11-28",
        "time": "15:00:00",
        "home_name": "Ghana",
        "away_name": "Korea Republic",
        "league_id": "793",
        "home_id": "30",
        "away_id": "28"
    },
    {
        "id": "31",
        "date": "2022-11-28",
        "time": "18:00:00",
        "home_name": "Brazil",
        "away_name": "Switzerland",
        "league_id": "793",
        "home_id": "31",
        "away_id": "25"
    },
    {
        "id": "32",
        "date": "2022-11-28",
        "time": "21:00:00",
        "home_name": "Portugal",
        "away_name": "Uruguay",
        "league_id": "793",
        "home_id": "29",
        "away_id": "27"
    },
    {
        "id": "33",
        "date": "2022-11-29",
        "time": "17:00:00",
        "home_name": "Netherlands",
        "away_name": "Qatar",
        "league_id": "793",
        "home_id": "6",
        "away_id": "1"
    },
    {
        "id": "34",
        "date": "2022-11-29",
        "time": "17:00:00",
        "home_name": "Senegal",
        "away_name": "Ecuador",
        "league_id": "793",
        "home_id": "5",
        "away_id": "2"
    },
    {
        "id": "35",
        "date": "2022-11-29",
        "time": "21:00:00",
        "home_name": "Iran",
        "away_name": "United States",
        "league_id": "793",
        "home_id": "4",
        "away_id": "7"
    },
    {
        "id": "36",
        "date": "2022-11-29",
        "time": "21:00:00",
        "home_name": "England",
        "away_name": "Wales",
        "league_id": "793",
        "home_id": "3",
        "away_id": "8"
    },
    {
        "id": "37",
        "date": "2022-11-30",
        "time": "17:00:00",
        "home_name": "Australia",
        "away_name": "Denmark",
        "league_id": "793",
        "home_id": "16",
        "away_id": "11"
    },
    {
        "id": "38",
        "date": "2022-11-30",
        "time": "17:00:00",
        "home_name": "Tunisia",
        "away_name": "France",
        "league_id": "793",
        "home_id": "12",
        "away_id": "15"
    },
    {
        "id": "39",
        "date": "2022-11-30",
        "time": "21:00:00",
        "home_name": "Poland",
        "away_name": "Argentina",
        "league_id": "793",
        "home_id": "14",
        "away_id": "9"
    },
    {
        "id": "40",
        "date": "2022-11-30",
        "time": "21:00:00",
        "home_name": "Mexico",
        "away_name": "Saudi Arabia",
        "league_id": "793",
        "home_id": "13",
        "away_id": "10"
    },


    {
        "id": "41",
        "date": "2022-12-01",
        "time": "17:00:00",
        "home_name": "Belgium",
        "away_name": "Croatia",
        "league_id": "793",
        "home_id": "23",
        "away_id": "18"
    },
    {
        "id": "42",
        "date": "2022-12-01",
        "time": "17:00:00",
        "home_name": "Morocco",
        "away_name": "Canada",
        "league_id": "793",
        "home_id": "17",
        "away_id": "24"
    },
    {
        "id": "43",
        "date": "2022-12-01",
        "time": "21:00:00",
        "home_name": "Japan",
        "away_name": "Spain",
        "league_id": "793",
        "home_id": "20",
        "away_id": "21"
    },
    {
        "id": "44",
        "date": "2022-12-01",
        "time": "21:00:00",
        "home_name": "Germany",
        "away_name": "Costa Rica",
        "league_id": "793",
        "home_id": "19",
        "away_id": "22"
    },
    {
        "id": "45",
        "date": "2022-12-02",
        "time": "17:00:00",
        "home_name": "Uruguay",
        "away_name": "Ghana",
    },
    {
        "id": "46",
        "date": "2022-12-02",
        "time": "17:00:00",
        "home_name": "Portugal",
        "away_name": "Korea Republic",
    },
    {
        "id": "47",
        "date": "2022-12-02",
        "time": "21:00:00",
        "home_name": "Serbia",
        "away_name": "Switzerland",
    },
    {
        "id": "48",
        "date": "2022-12-02",
        "time": "21:00:00",
        "home_name": "Brazil",
        "away_name": "Cameroon",
    },

    {
        "id": "49",
        "date": "2022-12-03",
        "time": "17:00:00",
        "home_name": "Netherlands",
        "away_name": "United States",
    },
    {
        "id": "50",
        "date": "2022-12-03",
        "time": "21:00:00",
        "home_name": "Argentina",
        "away_name": "Australia",
    },

    {
        "id": "51",
        "date": "2022-12-04",
        "time": "17:00:00",
        "home_name": "France",
        "away_name": "Poland",
    },
    {
        "id": "52",
        "date": "2022-12-04",
        "time": "21:00:00",
        "home_name": "England",
        "away_name": "Senegal",
    },


    {
        "id": "53",
        "date": "2022-12-05",
        "time": "17:00:00",
        "home_name": "Japan",
        "away_name": "Croatia",
    },
    {
        "id": "54",
        "date": "2022-12-05",
        "time": "21:00:00",
        "home_name": "Brazil",
        "away_name": "Korea Republic",
    },


    {
        "id": "55",
        "date": "2022-12-06",
        "time": "17:00:00",
        "home_name": "Morocco",
        "away_name": "Spain",
    },
    {
        "id": "56",
        "date": "2022-12-06",
        "time": "21:00:00",
        "home_name": "Portugal",
        "away_name": "Switzerland",
    },

    {
        "id": "57",
        "date": "2022-12-09",
        "time": "17:00:00",
        "home_name": "Brazil",
        "away_name": "Croatia",
    },

    {
        "id": "58",
        "date": "2022-12-09",
        "time": "21:00:00",
        "home_name": "Netherlands",
        "away_name": "Argentina",
    },
    {
        "id": "59",
        "date": "2022-12-10",
        "time": "17:00:00",
        "home_name": "Morocco",
        "away_name": "Portugal",
    },

    {
        "id": "60",
        "date": "2022-12-10",
        "time": "21:00:00",
        "home_name": "England",
        "away_name": "France",
    },
    // {
    //     "id": "61",
    //     "date": "2022-12-13",
    //     "time": "21:00:00",
    //     "home_name": "",
    //     "away_name": "",
    // },
    //
    // {
    //     "id": "62",
    //     "date": "2022-12-14",
    //     "time": "21:00:00",
    //     "home_name": "",
    //     "away_name": "",
    // },

    // {
    //     "id": "63",
    //     "date": "2022-12-18",
    //     "time": "17:00:00",
    //     "home_name": "",
    //     "away_name": "",
    // },
]

module.exports = data;



