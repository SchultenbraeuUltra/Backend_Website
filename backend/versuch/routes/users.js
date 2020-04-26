var express = require('express');
var router = express.Router();
router.use(express.json());

var ADRESSE;
var CHANGE = "0";

var vlvz = {
    "module": [
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Jörg",
                "surname": "Kreiker"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Jörg",
                "surname": "Kreiker"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Alexander",
                "surname": "Stoldt"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Judit",
                "surname": "Verestóy"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "17:15:00",
            "endtime": "18:45:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.121 Softwarelabor 4",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Richardt"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Yvonne",
                "surname": "Jung"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus Johannes",
                "surname": "Herche"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Praktikum",
            "parallelGroupValue": "7. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "51.209 Softwarelabor 3",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Markus Johannes",
                "surname": "Herche"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Praktikum",
            "parallelGroupValue": "8. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.121 Softwarelabor 4",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Richardt"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Praktikum",
            "parallelGroupValue": "9. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "51.209 Softwarelabor 3",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Markus Johannes",
                "surname": "Herche"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Praktikum",
            "parallelGroupValue": "10. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "51.209 Softwarelabor 3",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Martin Erik",
                "surname": "Motschmann"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Praktikum",
            "parallelGroupValue": "11. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Alexander",
                "surname": "Stoldt"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Praktikum",
            "parallelGroupValue": "12. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "51.209 Softwarelabor 3",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Thorsten",
                "surname": "Krebs"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Praktikum",
            "parallelGroupValue": "13. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus Johannes",
                "surname": "Herche"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Praktikum",
            "parallelGroupValue": "14. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "51.209 Softwarelabor 3",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Martin Erik",
                "surname": "Motschmann"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Praktikum",
            "parallelGroupValue": "15. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "51.209 Softwarelabor 3",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Thorsten",
                "surname": "Krebs"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Praktikum",
            "parallelGroupValue": "16. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.121 Softwarelabor 4",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Yvonne",
                "surname": "Jung"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Praktikum",
            "parallelGroupValue": "17. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Anna-Lena",
                "surname": "Roth"
            }
        },
        {
            "courseTitle": "Programmierpraktikum",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "30.016 Hörsaal",
            "building": "Gebäude 30",
            "lecturer": {
                "degree": "",
                "firstname": "Jörg",
                "surname": "Kreiker"
            }
        },
        {
            "courseTitle": "Programmierpraktikum",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": ["22.11.2019"],
            "room": "51.209 Softwarelabor 3 & 51.203 WI Labor & 51.111 Softwarelabor 2 & 51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Jörg",
                "surname": "Kreiker"
            }
        },
        {
            "courseTitle": "Programmierpraktikum",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "17:15:00",
            "endtime": "18:45:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Benjamin",
                "surname": "Hildebrandt"
            }
        },
        {
            "courseTitle": "Programmierpraktikum",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Benjamin",
                "surname": "Hildebrandt"
            }
        },
        {
            "courseTitle": "Programmierpraktikum",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Benjamin",
                "surname": "Hildebrandt"
            }
        },
        {
            "courseTitle": "Programmierpraktikum",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Benjamin",
                "surname": "Hildebrandt"
            }
        },
        {
            "courseTitle": "Digitaltechnik und Rechnersysteme",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Martin",
                "surname": "Kumm"
            }
        },
        {
            "courseTitle": "Digitaltechnik und Rechnersysteme",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "34.-108 Seminarraum",
            "building": "Gebäude 34",
            "lecturer": {
                "degree": "",
                "firstname": "Martin",
                "surname": "Kumm"
            }
        },
        {
            "courseTitle": "Digitaltechnik und Rechnersysteme",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "43.006 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Martin",
                "surname": "Kumm"
            }
        },
        {
            "courseTitle": "Digitaltechnik und Rechnersysteme",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "34.-108 Seminarraum",
            "building": "Gebäude 34",
            "lecturer": {
                "degree": "",
                "firstname": "Martin",
                "surname": "Kumm"
            }
        },
        {
            "courseTitle": "Technische Grundlagen der Informatik",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Karim",
                "surname": "Khakzar"
            }
        },
        {
            "courseTitle": "Technische Grundlagen der Informatik",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Solveig",
                "surname": "Schüßler"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "15:30:00",
            "endtime": "18:45:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "43.006 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "43.006 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "34.-108 Seminarraum",
            "building": "Gebäude 34",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "7. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "34.-108 Seminarraum",
            "building": "Gebäude 34",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "8. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Betriebswirtschaftslehre 1",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Göltenboth"
            }
        },
        {
            "courseTitle": "Betriebswirtschaftslehre 1",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Göltenboth"
            }
        },
        {
            "courseTitle": "Betriebswirtschaftslehre 1",
            "courseType": "Übung",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Göltenboth"
            }
        },
        {
            "courseTitle": "Betriebswirtschaftslehre 1",
            "courseType": "Übung",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Göltenboth"
            }
        },
        {
            "courseTitle": "Betriebswirtschaftslehre 1",
            "courseType": "Übung",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Göltenboth"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Angewandte Informatik)",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Yvonne",
                "surname": "Jung"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Angewandte Informatik)",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "17:15:00",
            "endtime": "18:45:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "51.209 Softwarelabor 3",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Yvonne",
                "surname": "Jung"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Angewandte Informatik)",
            "courseType": "Übung",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Yvonne",
                "surname": "Jung"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Angewandte Informatik)",
            "courseType": "Übung",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.121 Softwarelabor 4",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Yvonne",
                "surname": "Jung"
            }
        },
        {
            "courseTitle": "Betriebssysteme",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "20.010 Großunterrichtsraum",
            "building": "Gebäude 20",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Betriebssysteme",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "20.010 Großunterrichtsraum",
            "building": "Gebäude 20",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Betriebssysteme",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Donnerstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "17.10.2019",
                "31.10.2019",
                "14.11.2019",
                "28.11.2019",
                "12.12.2019",
                "23.01.2020",
                "06.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseNumber": "AI1013P",
            "courseTitle": "Betriebssysteme",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Donnerstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "24.10.2019",
                "07.11.2019",
                "21.11.2019",
                "05.12.2019",
                "19.12.2019",
                "16.01.2020",
                "30.01.2020",
                "13.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Betriebssysteme",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Mittwoch",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "23.10.2019",
                "06.11.2019",
                "20.11.2019",
                "04.12.2019",
                "18.12.2019",
                "15.01.2020",
                "29.01.2020",
                "12.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Betriebssysteme",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Mittwoch",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "30.10.2019",
                "13.11.2019",
                "27.11.2019",
                "11.12.2019",
                "22.01.2020",
                "05.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Betriebssysteme",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "17.10.2019",
                "31.10.2019",
                "28.11.2019",
                "12.12.2019",
                "23.01.2020",
                "06.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Betriebssysteme",
            "courseType": "Praktikum",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "24.10.2019",
                "07.11.2019",
                "21.11.2019",
                "05.12.2019",
                "19.12.2019",
                "16.01.2020",
                "30.01.2020",
                "13.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Datenbanksysteme",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Scheich"
            }
        },
        {
            "courseTitle": "Datenbanksysteme",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Scheich"
            }
        },
        {
            "courseTitle": "Datenbanksysteme",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Scheich"
            }
        },
        {
            "courseTitle": "Datenbanksysteme",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Scheich"
            }
        },
        {
            "courseTitle": "Datenbanksysteme",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Scheich"
            }
        },
        {
            "courseTitle": "Verteilte Systeme",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Verteilte Systeme",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Friedmann"
            }
        },
        {
            "courseTitle": "Verteilte Systeme",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Friedmann"
            }
        },
        {
            "courseTitle": "Verteilte Systeme",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Friedmann"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "15:30:00",
            "endtime": "18:45:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Battenberg"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "15:30:00",
            "endtime": "18:45:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Battenberg"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "18:00:00",
            "dates": ["02.11.2019"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:45:00",
            "endtime": "13:10:00",
            "dates": ["18.11.2019"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:45:00",
            "endtime": "13:10:00",
            "dates": ["25.11.2019"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:45:00",
            "endtime": "13:10:00",
            "dates": ["02.12.2019"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:45:00",
            "endtime": "13:10:00",
            "dates": ["13.01.2020"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:45:00",
            "endtime": "13:10:00",
            "dates": ["20.01.2020"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:45:00",
            "endtime": "13:10:00",
            "dates": ["27.01.2020"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "15:00:00",
            "dates": ["09.11.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Marie",
                "surname": "Lorsbach"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "10:00:00",
            "endtime": "17:00:00",
            "dates": ["23.11.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Marie",
                "surname": "Lorsbach"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "10:00:00",
            "endtime": "17:00:00",
            "dates": ["07.12.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Marie",
                "surname": "Lorsbach"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "10:00:00",
            "endtime": "17:00:00",
            "dates": ["14.12.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Marie",
                "surname": "Lorsbach"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "10:00:00",
            "endtime": "17:00:00",
            "dates": ["11.01.2020"],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Marie",
                "surname": "Lorsbach"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "10:00:00",
            "endtime": "17:00:00",
            "dates": ["25.01.2020"],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Marie",
                "surname": "Lorsbach"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "10:00:00",
            "endtime": "17:00:00",
            "dates": ["15.02.2020"],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Marie",
                "surname": "Lorsbach"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Carola",
                "surname": "Ossenkopp-Wetzig"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Carola",
                "surname": "Ossenkopp-Wetzig"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "18:00:00",
            "dates": ["09.11.2019"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "18:00:00",
            "dates": ["18.11.2019"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "18:00:00",
            "dates": ["25.11.2019"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "18:00:00",
            "dates": ["02.12.2019"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "18:00:00",
            "dates": ["13.01.2020"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "18:00:00",
            "dates": ["20.01.2020"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Seminar",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "18:00:00",
            "dates": ["27.01.2020"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "IT-Sicherheit (Angewandte Informatik)",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit (Angewandte Informatik)",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Dienstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "22.10.2019",
                "05.11.2019",
                "19.11.2019",
                "03.12.2019",
                "17.12.2019",
                "14.01.2020",
                "28.01.2020",
                "11.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit (Angewandte Informatik)",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": ["11.11.2019"],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit (Angewandte Informatik)",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": ["25.11.2019"],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit (Wirtschaftsinformatik)",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit (Wirtschaftsinformatik)",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Dienstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "29.10.2019",
                "12.11.2019",
                "26.11.2019",
                "10.12.2019",
                "21.01.2020",
                "04.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit (Wirtschaftsinformatik)",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": ["11.11.2019"],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit (Wirtschaftsinformatik)",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": ["25.11.2019"],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "12:15:00",
            "dates": ["23.11.2019"],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Sven",
                "surname": "Reissmann"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "12:15:00",
            "dates": ["07.12.2019"],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Sven",
                "surname": "Reissmann"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "12:45:00",
            "endtime": "16:00:00",
            "dates": ["23.11.2019"],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Sven",
                "surname": "Reissmann"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "12:45:00",
            "endtime": "16:00:00",
            "dates": ["07.12.2019"],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Sven",
                "surname": "Reissmann"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "11:15:00",
            "dates": ["30.11.2019"],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Wolfgang",
                "surname": "Kemmler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "11:15:00",
            "dates": ["14.12.2019"],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Wolfgang",
                "surname": "Kemmler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "11:45:00",
            "endtime": "15:00:00",
            "dates": ["30.11.2019"],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Wolfgang",
                "surname": "Kemmler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "11:45:00",
            "endtime": "15:00:00",
            "dates": ["14.12.2019"],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Wolfgang",
                "surname": "Kemmler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "11:15:00",
            "dates": ["18.01.2020"],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Wolfgang",
                "surname": "Kemmler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "11:15:00",
            "dates": ["25.01.2020"],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Wolfgang",
                "surname": "Kemmler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Praktikum",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "11:45:00",
            "endtime": "15:00:00",
            "dates": ["18.01.2020"],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Wolfgang",
                "surname": "Kemmler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Praktikum",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "11:45:00",
            "endtime": "15:00:00",
            "dates": ["25.01.2020"],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Wolfgang",
                "surname": "Kemmler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Praktikum",
            "parallelGroupValue": "7. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "12:15:00",
            "dates": ["11.01.2020"],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Sven",
                "surname": "Reissmann"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Praktikum",
            "parallelGroupValue": "7. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "12:45:00",
            "endtime": "16:00:00",
            "dates": ["11.01.2020"],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Sven",
                "surname": "Reissmann"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Angewandte Informatik",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "15:30:00",
            "endtime": "18:45:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Michael",
                "surname": "Jahn"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Angewandte Informatik",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "13:45:00",
            "endtime": "17:00:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.131 ESLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Reiner Robert",
                "surname": "Keller"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Angewandte Informatik",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "17:15:00",
            "endtime": "18:45:00",
            "dates": [
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Bernhard",
                "surname": "Schmelz"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Angewandte Informatik",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "19:00:00",
            "endtime": "20:30:00",
            "dates": [
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Bernhard",
                "surname": "Schmelz"
            }
        },
        {
            "courseTitle": "Höhere Konzepte der Programmierung",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019"
            ],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Höhere Konzepte der Programmierung",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Jörg",
                "surname": "Kreiker"
            }
        },
        {
            "courseTitle": "Höhere Konzepte der Programmierung",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.121 Softwarelabor 4",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Jörg",
                "surname": "Kreiker"
            }
        },
        {
            "courseTitle": "Höhere Konzepte der Programmierung",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019"
            ],
            "room": "46.121 Softwarelabor 4",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Höhere Konzepte der Programmierung",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019"
            ],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Höhere Konzepte der Programmierung",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Jörg",
                "surname": "Kreiker"
            }
        },
        {
            "courseTitle": "Praxisprojekt-Vorseminar",
            "courseType": "Vorlesung/Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "11:00:00",
            "endtime": "13:00:00",
            "dates": ["16.10.2019"],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Praxisprojekt-Vorseminar",
            "courseType": "Vorlesung/Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "16:00:00",
            "dates": ["30.10.2019"],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Praxisprojekt-Vorseminar",
            "courseType": "Vorlesung/Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "09:00:00",
            "endtime": "16:00:00",
            "dates": ["29.11.2019"],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Hermann",
                "surname": "Fien"
            }
        },
        {
            "courseTitle": "Praxisprojekt-Vorseminar",
            "courseType": "Vorlesung/Übung",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "11:00:00",
            "endtime": "13:00:00",
            "dates": ["16.10.2019"],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Praxisprojekt-Vorseminar",
            "courseType": "Vorlesung/Übung",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "16:00:00",
            "dates": ["30.10.2019"],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Praxisprojekt-Vorseminar",
            "courseType": "Vorlesung/Übung",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "16:00:00",
            "dates": ["30.11.2019"],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Hermann",
                "surname": "Fien"
            }
        },
        {
            "courseTitle": "Praxisprojekt-Vorseminar",
            "courseType": "Vorlesung/Übung",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "11:00:00",
            "endtime": "13:00:00",
            "dates": ["16.10.2019"],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Praxisprojekt-Vorseminar",
            "courseType": "Vorlesung/Übung",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "16:00:00",
            "dates": ["30.10.2019"],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Praxisprojekt-Vorseminar",
            "courseType": "Vorlesung/Übung",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "09:00:00",
            "endtime": "16:00:00",
            "dates": ["06.12.2019"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Hermann",
                "surname": "Fien"
            }
        },
        {
            "courseTitle": "Praxisprojekt-Vorseminar",
            "courseType": "Vorlesung/Übung",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "11:00:00",
            "endtime": "13:00:00",
            "dates": ["16.10.2019"],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Praxisprojekt-Vorseminar",
            "courseType": "Vorlesung/Übung",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "16:00:00",
            "dates": ["30.10.2019"],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Praxisprojekt-Vorseminar",
            "courseType": "Vorlesung/Übung",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "16:00:00",
            "dates": ["07.12.2019"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Hermann",
                "surname": "Fien"
            }
        },
        {
            "courseTitle": "Grundlagen der Wirtschaftsinformatik",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Norbert",
                "surname": "Ketterer"
            }
        },
        {
            "courseTitle": "Grundlagen der Wirtschaftsinformatik",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Norbert",
                "surname": "Ketterer"
            }
        },
        {
            "courseTitle": "Grundlagen der Wirtschaftsinformatik",
            "courseType": "Übung",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Norbert",
                "surname": "Ketterer"
            }
        },
        {
            "courseTitle": "Grundlagen der Wirtschaftsinformatik",
            "courseType": "Übung",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "43.006 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Norbert",
                "surname": "Ketterer"
            }
        },
        {
            "courseTitle": "Optimierung",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "52.009 Mehrzweckraum (ohne Bühne)",
            "building": "Gebäude 52",
            "lecturer": {
                "degree": "",
                "firstname": "Alexander",
                "surname": "Gepperth"
            }
        },
        {
            "courseTitle": "Optimierung",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Alexander",
                "surname": "Gepperth"
            }
        },
        {
            "courseTitle": "Optimierung",
            "courseType": "Übung",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Alexander",
                "surname": "Gepperth"
            }
        },
        {
            "courseTitle": "Data Mining",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Frank",
                "surname": "Klingert"
            }
        },
        {
            "courseTitle": "Data Mining",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Dienstag",
            "starttime": "17:15:00",
            "endtime": "18:45:00",
            "dates": ["22.10.2019"],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Frank",
                "surname": "Klingert"
            }
        },
        {
            "courseTitle": "Data Mining",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Frank",
                "surname": "Klingert"
            }
        },
        {
            "courseTitle": "Data Mining",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Frank",
                "surname": "Klingert"
            }
        },
        {
            "courseTitle": "Data Mining",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Frank",
                "surname": "Klingert"
            }
        },
        {
            "courseTitle": "Mensch-Computer-Interaktion",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "21.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Hans Martin",
                "surname": "Pohl"
            }
        },
        {
            "courseTitle": "Mensch-Computer-Interaktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Blum"
            }
        },
        {
            "courseTitle": "Mensch-Computer-Interaktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Blum"
            }
        },
        {
            "courseTitle": "Logistik",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Logistik",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Grundlagen der Wirtschaftspolitik",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Göltenboth"
            }
        },
        {
            "courseTitle": "Grundlagen der Wirtschaftspolitik",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Göltenboth"
            }
        },
        {
            "courseTitle": "Unternehmensgründung 1 und 2",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "15:20:00",
            "endtime": "18:40:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Claudia",
                "surname": "Steinhauer"
            }
        },
        {
            "courseTitle": "Big Data Grundlagen",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:30:00",
            "endtime": "18:00:00",
            "dates": ["30.09.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Heiner",
                "surname": "Benner"
            }
        },
        {
            "courseTitle": "Big Data Grundlagen",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Dienstag",
            "starttime": "08:30:00",
            "endtime": "12:30:00",
            "dates": ["01.10.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Heiner",
                "surname": "Benner"
            }
        },
        {
            "courseTitle": "Big Data Grundlagen",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "12:30:00",
            "endtime": "14:30:00",
            "dates": ["02.10.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Heiner",
                "surname": "Benner"
            }
        },
        {
            "courseTitle": "Big Data Grundlagen",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Dienstag",
            "starttime": "08:30:00",
            "endtime": "18:00:00",
            "dates": ["08.10.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Heiner",
                "surname": "Benner"
            }
        },
        {
            "courseTitle": "Big Data Grundlagen",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Donnerstag",
            "starttime": "08:30:00",
            "endtime": "17:30:00",
            "dates": ["10.10.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Heiner",
                "surname": "Benner"
            }
        },
        {
            "courseTitle": "Big Data Grundlagen",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Dienstag",
            "starttime": "13:30:00",
            "endtime": "18:00:00",
            "dates": ["01.10.2019"],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Heiner",
                "surname": "Benner"
            }
        },
        {
            "courseTitle": "Big Data Grundlagen",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "08:00:00",
            "endtime": "12:00:00",
            "dates": ["02.10.2019"],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Heiner",
                "surname": "Benner"
            }
        },
        {
            "courseTitle": "Big Data Grundlagen",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "08:30:00",
            "endtime": "18:00:00",
            "dates": ["09.10.2019"],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Heiner",
                "surname": "Benner"
            }
        },
        {
            "courseTitle": "Medienproduktion",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Medienproduktion",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Paul",
                "surname": "Grimm"
            }
        },
        {
            "courseTitle": "Medienproduktion",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "13:10:00",
            "endtime": "14:00:00",
            "dates": ["18.12.2019"],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Medienproduktion - 3D-Modellierung",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "19:00:00",
            "endtime": "20:30:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Paul",
                "surname": "Grimm"
            }
        },
        {
            "courseTitle": "Medienproduktion - 3D-Modellierung",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Paul",
                "surname": "Grimm"
            }
        },
        {
            "courseTitle": "Medienproduktion - 3D-Modellierung",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Paul",
                "surname": "Grimm"
            }
        },
        {
            "courseTitle": "Medienproduktion - 3D-Modellierung",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Paul",
                "surname": "Grimm"
            }
        },
        {
            "courseTitle": "Medienproduktion - 3D-Modellierung",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "17:15:00",
            "endtime": "18:45:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Paul",
                "surname": "Grimm"
            }
        },
        {
            "courseTitle": "Medienproduktion - 3D-Modellierung",
            "courseType": "Praktikum",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "17:15:00",
            "endtime": "18:45:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Paul",
                "surname": "Grimm"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "21.10.2019",
                "04.11.2019",
                "18.11.2019",
                "02.12.2019",
                "16.12.2019",
                "13.01.2020",
                "27.01.2020",
                "10.02.2020"
            ],
            "room": "46.012/335-338 MediaLab Studio und AV-Lab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Böhm"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Montag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "21.10.2019",
                "04.11.2019",
                "18.11.2019",
                "02.12.2019",
                "16.12.2019",
                "13.01.2020",
                "27.01.2020",
                "10.02.2020"
            ],
            "room": "46.012/335-338 MediaLab Studio und AV-Lab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Böhm"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Mittwoch",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "23.10.2019",
                "06.11.2019",
                "20.11.2019",
                "04.12.2019",
                "18.12.2019",
                "15.01.2020",
                "29.01.2020",
                "12.02.2020"
            ],
            "room": "46.012/335-338 MediaLab Studio und AV-Lab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Böhm"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Mittwoch",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "23.10.2019",
                "06.11.2019",
                "20.11.2019",
                "04.12.2019",
                "18.12.2019",
                "15.01.2020",
                "29.01.2020",
                "12.02.2020"
            ],
            "room": "46.012/335-338 MediaLab Studio und AV-Lab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Böhm"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Mittwoch",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "30.10.2019",
                "13.11.2019",
                "27.11.2019",
                "11.12.2019",
                "22.01.2020",
                "05.02.2020"
            ],
            "room": "46.012/335-338 MediaLab Studio und AV-Lab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Böhm"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Mittwoch",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "30.10.2019",
                "13.11.2019",
                "27.11.2019",
                "11.12.2019",
                "22.01.2020",
                "05.02.2020"
            ],
            "room": "46.012/335-338 MediaLab Studio und AV-Lab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Böhm"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Donnerstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "17.10.2019",
                "31.10.2019",
                "14.11.2019",
                "28.11.2019",
                "12.12.2019",
                "23.01.2020",
                "06.02.2020"
            ],
            "room": "46.012/335-338 MediaLab Studio und AV-Lab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Donnerstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "17.10.2019",
                "31.10.2019",
                "14.11.2019",
                "28.11.2019",
                "12.12.2019",
                "23.01.2020",
                "06.02.2020"
            ],
            "room": "46.012/335-338 MediaLab Studio und AV-Lab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "17.10.2019",
                "31.10.2019",
                "14.11.2019",
                "28.11.2019",
                "12.12.2019",
                "23.01.2020",
                "06.02.2020"
            ],
            "room": "46.012/335-338 MediaLab Studio und AV-Lab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "17.10.2019",
                "31.10.2019",
                "14.11.2019",
                "28.11.2019",
                "12.12.2019",
                "23.01.2020",
                "06.02.2020"
            ],
            "room": "46.012/335-338 MediaLab Studio und AV-Lab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "28.10.2019",
                "11.11.2019",
                "25.11.2019",
                "09.12.2019",
                "20.01.2020",
                "03.02.2020"
            ],
            "room": "46.012/335-338 MediaLab Studio und AV-Lab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Fuchs"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Montag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "28.10.2019",
                "11.11.2019",
                "25.11.2019",
                "09.12.2019",
                "20.01.2020",
                "03.02.2020"
            ],
            "room": "46.012/335-338 MediaLab Studio und AV-Lab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Fuchs"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "7. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Donnerstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "24.10.2019",
                "07.11.2019",
                "21.11.2019",
                "05.12.2019",
                "19.12.2019",
                "16.01.2020",
                "30.01.2020",
                "13.02.2020"
            ],
            "room": "46.012/335-338 MediaLab Studio und AV-Lab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "7. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Donnerstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "24.10.2019",
                "07.11.2019",
                "21.11.2019",
                "05.12.2019",
                "19.12.2019",
                "16.01.2020",
                "30.01.2020",
                "13.02.2020"
            ],
            "room": "46.012/335-338 MediaLab Studio und AV-Lab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "8. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "24.10.2019",
                "07.11.2019",
                "21.11.2019",
                "05.12.2019",
                "19.12.2019",
                "16.01.2020",
                "30.01.2020",
                "13.02.2020"
            ],
            "room": "46.012/335-338 MediaLab Studio und AV-Lab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Fuchs"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Praktikum",
            "parallelGroupValue": "8. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "24.10.2019",
                "07.11.2019",
                "21.11.2019",
                "05.12.2019",
                "19.12.2019",
                "16.01.2020",
                "30.01.2020",
                "13.02.2020"
            ],
            "room": "46.012/335-338 MediaLab Studio und AV-Lab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Fuchs"
            }
        },
        {
            "courseTitle": "Animationsprogrammierung mit Processing",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.012 Medienlabor",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Animationsprogrammierung mit Processing",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.012 Medienlabor",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Kommunikationsdesign",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Kommunikationsdesign",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Kommunikationsdesign",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "15:15:00",
            "dates": ["17.01.2020"],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Kommunikationsdesign",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "17:00:00",
            "dates": ["07.02.2020"],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Konzepte der Android-Programmierung",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "51.209 Softwarelabor 3",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Konzepte der Android-Programmierung",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "51.209 Softwarelabor 3",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Embedded Networking",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Oleg",
                "surname": "Menger"
            }
        },
        {
            "courseTitle": "Embedded Networking",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "17:15:00",
            "endtime": "18:45:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Oleg",
                "surname": "Menger"
            }
        },
        {
            "courseTitle": "TCP/IP-Programmierung",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "17:15:00",
            "endtime": "18:45:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Peter",
                "surname": "Klingebiel"
            }
        },
        {
            "courseTitle": "TCP/IP-Programmierung",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Peter",
                "surname": "Klingebiel"
            }
        },
        {
            "courseTitle": "Mikrocontrollerprogrammierung",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.131 ESLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Martin",
                "surname": "Kumm"
            }
        },
        {
            "courseTitle": "Mikrocontrollerprogrammierung",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.131 ESLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Martin",
                "surname": "Kumm"
            }
        },
        {
            "courseTitle": "Netz- und Systemmanagement",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Anatol",
                "surname": "Badach"
            }
        },
        {
            "courseTitle": "Netz- und Systemmanagement",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Anatol",
                "surname": "Badach"
            }
        },
        {
            "courseTitle": "Continous Integration in der Praxis",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Thomas",
                "surname": "Papendieck"
            }
        },
        {
            "courseTitle": "Continous Integration in der Praxis",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Thomas",
                "surname": "Papendieck"
            }
        },
        {
            "courseTitle": "Continous Integration in der Praxis",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Thomas",
                "surname": "Papendieck"
            }
        },
        {
            "courseTitle": "Continous Integration in der Praxis",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Thomas",
                "surname": "Papendieck"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik (Wirtschaftsinformatik)",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Montag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "21.10.2019",
                "04.11.2019",
                "18.11.2019",
                "02.12.2019",
                "16.12.2019",
                "13.01.2020",
                "27.01.2020",
                "10.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik (Wirtschaftsinformatik)",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik (Wirtschaftsinformatik)",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik (Wirtschaftsinformatik)",
            "courseType": "Übung",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019"
            ],
            "room": "43.006 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik (Wirtschaftsinformatik)",
            "courseType": "Übung",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "43.006 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik (Wirtschaftsinformatik)",
            "courseType": "Übung",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "34.-108 Seminarraum",
            "building": "Gebäude 34",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "15:30:00",
            "endtime": "18:45:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "13:45:00",
            "endtime": "17:00:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "15:30:00",
            "endtime": "18:45:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Dienstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "19.11.2019",
                "03.12.2019",
                "17.12.2019",
                "14.01.2020",
                "28.01.2020",
                "11.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Dienstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "26.11.2019",
                "10.12.2019",
                "21.01.2020",
                "04.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Donnerstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "28.11.2019",
                "12.12.2019",
                "23.01.2020",
                "06.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Donnerstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "21.11.2019",
                "05.12.2019",
                "19.12.2019",
                "16.01.2020",
                "30.01.2020",
                "13.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Montag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "18.11.2019",
                "02.12.2019",
                "16.12.2019",
                "13.01.2020",
                "27.01.2020",
                "10.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Praktikum",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Dienstag",
            "starttime": "17:15:00",
            "endtime": "18:45:00",
            "dates": [
                "26.11.2019",
                "10.12.2019",
                "21.01.2020",
                "04.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Praktikum",
            "parallelGroupValue": "7. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Montag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "25.11.2019",
                "09.12.2019",
                "20.01.2020",
                "03.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Praktikum",
            "parallelGroupValue": "8. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Dienstag",
            "starttime": "17:15:00",
            "endtime": "18:45:00",
            "dates": [
                "19.11.2019",
                "03.12.2019",
                "17.12.2019",
                "14.01.2020",
                "28.01.2020",
                "11.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Rechnerarchitektur und verteilte Systeme",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Peter",
                "surname": "Klingebiel"
            }
        },
        {
            "courseTitle": "Rechnerarchitektur und verteilte Systeme",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Seifert"
            }
        },
        {
            "courseTitle": "Rechnerarchitektur und verteilte Systeme",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019"
            ],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Peter",
                "surname": "Klingebiel"
            }
        },
        {
            "courseTitle": "Rechnerarchitektur und verteilte Systeme",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Seifert"
            }
        },
        {
            "courseTitle": "Rechnerarchitektur und verteilte Systeme",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019"
            ],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Peter",
                "surname": "Klingebiel"
            }
        },
        {
            "courseTitle": "Rechnerarchitektur und verteilte Systeme",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Seifert"
            }
        },
        {
            "courseTitle": "Rechnerarchitektur und verteilte Systeme",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019"
            ],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Peter",
                "surname": "Klingebiel"
            }
        },
        {
            "courseTitle": "Rechnerarchitektur und verteilte Systeme",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Seifert"
            }
        },
        {
            "courseTitle": "Methoden des Software Engineering",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Judit",
                "surname": "Verestóy"
            }
        },
        {
            "courseTitle": "Methoden des Software Engineering",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.121 Softwarelabor 4",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Judit",
                "surname": "Verestóy"
            }
        },
        {
            "courseTitle": "Methoden des Software Engineering",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Judit",
                "surname": "Verestóy"
            }
        },
        {
            "courseTitle": "Methoden des Software Engineering",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Judit",
                "surname": "Verestóy"
            }
        },
        {
            "courseTitle": "Projektmanagement",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Philipp",
                "surname": "Reinhardt"
            }
        },
        {
            "courseTitle": "Projektmanagement",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Philipp",
                "surname": "Reinhardt"
            }
        },
        {
            "courseTitle": "Projektmanagement",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Philipp",
                "surname": "Reinhardt"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Wirtschaftsinformatik",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "15:30:00",
            "endtime": "18:45:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "51.209 Softwarelabor 3",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Oliver",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Wirtschaftsinformatik",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "13:45:00",
            "endtime": "17:00:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.121 Softwarelabor 4",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Uwe",
                "surname": "Hanstein"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Wirtschaftsinformatik",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "17:00:00",
            "dates": ["18.10.2019"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Altheimer"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Wirtschaftsinformatik",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020"
            ],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Altheimer"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Wirtschaftsinformatik",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "17:00:00",
            "dates": ["01.11.2019"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Altheimer"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Wirtschaftsinformatik",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "17:00:00",
            "dates": ["29.11.2019"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Altheimer"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Wirtschaftsinformatik",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "17:00:00",
            "dates": ["17.01.2020"],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Altheimer"
            }
        },
        {
            "courseTitle": "Controlling und IT Controlling",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Controlling und IT Controlling",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Audioprogrammierung",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "17:00:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.012 Medienlabor",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Kostenrechnung",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Kostenrechnung",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Mediendesign",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Mediendesign",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "51.209 Softwarelabor 3",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Fuchs"
            }
        },
        {
            "courseTitle": "Mediendesign",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Judit",
                "surname": "Verestóy"
            }
        },
        {
            "courseTitle": "Mediendesign",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "51.209 Softwarelabor 3",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Fuchs"
            }
        },
        {
            "courseTitle": "Mediendesign",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "51.209 Softwarelabor 3",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Ludwig",
                "surname": "Loth"
            }
        },
        {
            "courseTitle": "Mediendesign",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Judit",
                "surname": "Verestóy"
            }
        },
        {
            "courseTitle": "Mediendesign",
            "courseType": "Praktikum",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "51.209 Softwarelabor 3",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Ludwig",
                "surname": "Loth"
            }
        },
        {
            "courseTitle": "Mathematik",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematik",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "34.-108 Seminarraum",
            "building": "Gebäude 34",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematik",
            "courseType": "Übung",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "43.006 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Torsten",
                "surname": "Schreiber"
            }
        },
        {
            "courseTitle": "Mathematik",
            "courseType": "Übung",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "43.006 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Torsten",
                "surname": "Schreiber"
            }
        },
        {
            "courseTitle": "Mathematik",
            "courseType": "Übung",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "34.-108 Seminarraum",
            "building": "Gebäude 34",
            "lecturer": {
                "degree": "",
                "firstname": "Torsten",
                "surname": "Schreiber"
            }
        },
        {
            "courseTitle": "Mathematik",
            "courseType": "Übung",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "43.006 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematik",
            "courseType": "Übung",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "34.-108 Seminarraum",
            "building": "Gebäude 34",
            "lecturer": {
                "degree": "",
                "firstname": "Torsten",
                "surname": "Schreiber"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "52.009 Mehrzweckraum (ohne Bühne)",
            "building": "Gebäude 52",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.121 Softwarelabor 4",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "17:15:00",
            "endtime": "18:45:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "18:00:00",
            "dates": ["21.10.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Merete",
                "surname": "Hirth"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "15:00:00",
            "dates": ["04.11.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "17:00:00",
            "dates": ["11.11.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["23.11.2019"],
            "room": "46.332-338 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Dennis",
                "surname": "Bieza"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "16:30:00",
            "dates": ["09.12.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan",
                "surname": "Lingelbach"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["18.01.2020"],
            "room": "46.121 Softwarelabor 4",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "18:00:00",
            "dates": ["26.10.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Merete",
                "surname": "Hirth"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["09.11.2019"],
            "room": "46.332-338 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Dennis",
                "surname": "Bieza"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "15:00:00",
            "dates": ["16.11.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "17:00:00",
            "dates": ["07.12.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "16:30:00",
            "dates": "16.12.2019",
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan",
                "surname": "Lingelbach"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["13.01.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "18:00:00",
            "dates": ["28.10.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Merete",
                "surname": "Hirth"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["02.11.2019"],
            "room": "46.332-338 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Dennis",
                "surname": "Bieza"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "17:00:00",
            "dates": ["18.11.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "15:00:00",
            "dates": ["25.11.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "16:30:00",
            "dates": ["13.01.2020"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan",
                "surname": "Lingelbach"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["20.01.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "15:00:00",
            "dates": ["28.10.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "18:00:00",
            "dates": ["09.11.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Merete",
                "surname": "Hirth"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["16.11.2019"],
            "room": "46.332-338 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Dennis",
                "surname": "Bieza"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "17:00:00",
            "dates": ["25.11.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "16:30:00",
            "dates": ["18.01.2020"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan",
                "surname": "Lingelbach"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["27.01.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "17:00:00",
            "dates": ["04.11.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "18:00:00",
            "dates": ["18.11.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Merete",
                "surname": "Hirth"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "15:00:00",
            "dates": ["02.12.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["07.12.2019"],
            "room": "46.332-338 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Dennis",
                "surname": "Bieza"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["16.12.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "16:30:00",
            "dates": ["20.01.2020"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan",
                "surname": "Lingelbach"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "17:00:00",
            "dates": ["21.10.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "15:00:00",
            "dates": ["11.11.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "18:00:00",
            "dates": ["23.11.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Merete",
                "surname": "Hirth"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["30.11.2019"],
            "room": "46.332-338 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Dennis",
                "surname": "Bieza"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["09.12.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Praktikum",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "16:30:00",
            "dates": ["27.01.2020"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan",
                "surname": "Lingelbach"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "ungerade Wochen",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "24.10.2019",
                "21.11.2019",
                "05.12.2019",
                "19.12.2019",
                "16.01.2020",
                "30.01.2020",
                "13.02.2020"
            ],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": ["14.11.2019"],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["22.01.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["05.02.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "ungerade Wochen",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "24.10.2019",
                "21.11.2019",
                "05.12.2019",
                "19.12.2019",
                "16.01.2020",
                "30.01.2020",
                "13.02.2020"
            ],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": ["14.11.2019"],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["22.01.2020"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["05.02.2020"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "ungerade Wochen",
            "day": "Donnerstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "24.10.2019",
                "07.11.2019",
                "21.11.2019",
                "05.12.2019",
                "19.12.2019",
                "16.01.2020",
                "30.01.2020",
                "13.02.2020"
            ],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["22.01.2020"],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["05.02.2020"],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseNumber": "AI1012Ü2",
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "ungerade Wochen",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "25.10.2019",
                "08.11.2019",
                "22.11.2019",
                "06.12.2019",
                "17.01.2020",
                "31.01.2020",
                "14.02.2020"
            ],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Schmitt"
            }
        },
        {
            "courseNumber": "AI1012Ü2",
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["29.01.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Schmitt"
            }
        },
        {
            "courseNumber": "AI1012Ü2",
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["12.02.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Schmitt"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "ungerade Wochen",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "25.10.2019",
                "08.11.2019",
                "22.11.2019",
                "06.12.2019",
                "17.01.2020",
                "31.01.2020",
                "14.02.2020"
            ],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Schmitt"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["29.01.2020"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Schmitt"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["12.02.2020"],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Schmitt"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "ungerade Wochen",
            "day": "Donnerstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "24.10.2019",
                "07.11.2019",
                "21.11.2019",
                "05.12.2019",
                "19.12.2019",
                "16.01.2020",
                "30.01.2020",
                "13.02.2020"
            ],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Schmitt"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["22.01.2020"],
            "room": "51.209 Softwarelabor 3",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Schmitt"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["05.02.2020"],
            "room": "51.209 Softwarelabor 3",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Schmitt"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "17:00:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Birgit",
                "surname": "Bomsdorf"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "13:45:00",
            "endtime": "17:00:00",
            "dates": [
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Isabella",
                "surname": "Cadoni"
            }
        },
        {
            "courseTitle": "Usability Engineering (Wiederholer)",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering (Wiederholer)",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Isabella",
                "surname": "Cadoni"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Isabella",
                "surname": "Cadoni"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Praktikum",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "13:45:00",
            "endtime": "17:00:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Praktikum",
            "parallelGroupValue": "7. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Praktikum",
            "parallelGroupValue": "7. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Praktikum",
            "parallelGroupValue": "8. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "15:30:00",
            "endtime": "18:45:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.332-334 MediaLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Stickel"
            }
        },
        {
            "courseTitle": "Recht",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Erd"
            }
        },
        {
            "courseTitle": "Recht",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Erd"
            }
        },
        {
            "courseTitle": "Recht",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.009 Hörsaal",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Erd"
            }
        },
        {
            "courseTitle": "Recht",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Erd"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Helena",
                "surname": "Röhrig"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Helena",
                "surname": "Röhrig"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Praktikum",
            "parallelGroupValue": "5. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.121 Softwarelabor 4",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Praktikum",
            "parallelGroupValue": "6. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Helena",
                "surname": "Röhrig"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Praktikum",
            "parallelGroupValue": "7. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "51.209 Softwarelabor 3",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Helena",
                "surname": "Röhrig"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Digitale Medien",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Axel",
                "surname": "Schäfer"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Digitale Medien",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Axel",
                "surname": "Schäfer"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Digitale Medien",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Digitale Medien",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "51.203 WI Labor",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Digitale Medien",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.131 ESLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Peter",
                "surname": "Klingebiel"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Digitale Medien",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.131 ESLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Peter",
                "surname": "Klingebiel"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Digitale Medien",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Steffen",
                "surname": "Menz"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Digitale Medien",
            "courseType": "Praktikum",
            "parallelGroupValue": "4. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Steffen",
                "surname": "Menz"
            }
        },
        {
            "courseTitle": "Gestaltung in der Praxis",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:50:00",
            "endtime": "18:00:00",
            "dates": ["16.11.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuela",
                "surname": "Greipel"
            }
        },
        {
            "courseTitle": "Gestaltung in der Praxis",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "18:00:00",
            "dates": ["23.11.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuela",
                "surname": "Greipel"
            }
        },
        {
            "courseTitle": "Gestaltung in der Praxis",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:50:00",
            "endtime": "18:00:00",
            "dates": ["30.11.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuela",
                "surname": "Greipel"
            }
        },
        {
            "courseTitle": "Gestaltung in der Praxis",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:50:00",
            "endtime": "18:00:00",
            "dates": ["11.01.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuela",
                "surname": "Greipel"
            }
        },
        {
            "courseTitle": "Gestaltung in der Praxis",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:50:00",
            "endtime": "18:45:00",
            "dates": ["18.01.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuela",
                "surname": "Greipel"
            }
        },
        {
            "courseTitle": "Gestaltung in der Praxis",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:50:00",
            "endtime": "18:00:00",
            "dates": ["25.01.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuela",
                "surname": "Greipel"
            }
        },
        {
            "courseTitle": "Handlungsfelder der Gesundheitstechnik (Projektarbeit)",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "30.002 Seminarraum",
            "building": "Gebäude 30",
            "lecturer": {
                "degree": "",
                "firstname": "Jens",
                "surname": "Graf"
            }
        },
        {
            "courseTitle": "Handlungsfelder der Gesundheitstechnik (Projektarbeit)",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "13:10:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "30.218 Seminarraum",
            "building": "Gebäude 30",
            "lecturer": {
                "degree": "",
                "firstname": "Solveig",
                "surname": "Schüßler"
            }
        },
        {
            "courseTitle": "Vitalfunktionen verstehen und erhalten",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "13:30:00",
            "endtime": "17:00:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "31.302 Seminarraum",
            "building": "Gebäude 31",
            "lecturer": {
                "degree": "",
                "firstname": "Johanna",
                "surname": "Nickl"
            }
        },
        {
            "courseTitle": "Vitalfunktionen verstehen und erhalten",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "10:00:00",
            "endtime": "13:15:00",
            "dates": [
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "31.005 Seminarraum",
            "building": "Gebäude 31",
            "lecturer": {
                "degree": "",
                "firstname": "Johanna",
                "surname": "Nickl"
            }
        },
        {
            "courseTitle": "Vitalfunktionen verstehen und erhalten",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Dienstag",
            "starttime": "13:30:00",
            "endtime": "17:00:00",
            "dates": [
                "22.10.2019",
                "05.11.2019",
                "19.11.2019",
                "03.12.2019",
                "14.01.2020",
                "28.01.2020",
                "11.02.2020"
            ],
            "room": "31.119 Unterrichtsgrossraum",
            "building": "Gebäude 31",
            "lecturer": {
                "degree": "",
                "firstname": "Henny Annette",
                "surname": "Grewe"
            }
        },
        {
            "courseTitle": "Methoden der empirischen Sozialforschung und Epidemiologie",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "31.004 Evidenzlabor",
            "building": "Gebäude 31",
            "lecturer": {
                "degree": "",
                "firstname": "Katharina",
                "surname": "Rathmann"
            }
        },
        {
            "courseTitle": "Methoden der empirischen Sozialforschung und Epidemiologie",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "09:45:00",
            "endtime": "11:15:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "31.004 Evidenzlabor",
            "building": "Gebäude 31",
            "lecturer": {
                "degree": "",
                "firstname": "Julia",
                "surname": "Depa"
            }
        },
        {
            "courseTitle": "Methoden der empirischen Sozialforschung und Epidemiologie",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "11:30:00",
            "endtime": "13:00:00",
            "dates": [
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "25.205 Seminarraum",
            "building": "Gebäude 25",
            "lecturer": {
                "degree": "",
                "firstname": "Lita",
                "surname": "Herzig"
            }
        },
        {
            "courseTitle": "Methoden der empirischen Sozialforschung und Epidemiologie",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "14-täglich",
            "day": "Donnerstag",
            "starttime": "13:30:00",
            "endtime": "17:00:00",
            "dates": [
                "24.10.2019",
                "07.11.2019",
                "21.11.2019",
                "05.12.2019",
                "19.12.2019",
                "16.01.2020",
                "30.01.2020"

            ],
            "room": "31.004 Evidenzlabor",
            "building": "Gebäude 31",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas Walter",
                "surname": "Gold"
            }
        },
        {
            "courseTitle": "Eingebettete Systeme",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "30.016 Hörsaal",
            "building": "Gebäude 30",
            "lecturer": {
                "degree": "",
                "firstname": "Viviane",
                "surname": "Wolff"
            }
        },
        {
            "courseTitle": "Eingebettete Systeme",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "30.016 Hörsaal",
            "building": "Gebäude 30",
            "lecturer": {
                "degree": "",
                "firstname": "Viviane",
                "surname": "Wolff"
            }
        },
        {
            "courseTitle": "Regelungstechnik",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "30.218 Seminarraum",
            "building": "Gebäude 30",
            "lecturer": {
                "degree": "",
                "firstname": "Jens",
                "surname": "Graf"
            }
        },
        {
            "courseTitle": "Regelungstechnik",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "13:30:00",
            "endtime": "15:00:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "30.218 Seminarraum",
            "building": "Gebäude 30",
            "lecturer": {
                "degree": "",
                "firstname": "Jens",
                "surname": "Graf"
            }
        },
        {
            "courseTitle": "Arbeits- und Führungstechniken",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "17:00:00",
            "dates": ["15.11.2019"],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Bernhard",
                "surname": "Rettler"
            }
        },
        {
            "courseTitle": "Arbeits- und Führungstechniken",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:50:00",
            "endtime": "17:00:00",
            "dates": ["16.11.2019"],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Bernhard",
                "surname": "Rettler"
            }
        },
        {
            "courseTitle": "Arbeits- und Führungstechniken",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "17:00:00",
            "dates": ["06.12.2019"],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Bernhard",
                "surname": "Rettler"
            }
        },
        {
            "courseTitle": "Arbeits- und Führungstechniken",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:50:00",
            "endtime": "17:00:00",
            "dates": ["07.12.2019"],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Bernhard",
                "surname": "Rettler"
            }
        },
        {
            "courseTitle": "Arbeits- und Führungstechniken",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "17:00:00",
            "dates": ["17.01.2020"],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Bernhard",
                "surname": "Rettler"
            }
        },
        {
            "courseTitle": "Arbeits- und Führungstechniken",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:50:00",
            "endtime": "17:00:00",
            "dates": ["18.01.2020"],
            "room": "43.103 Unterrichtsraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Bernhard",
                "surname": "Rettler"
            }
        },
        {
            "courseTitle": "Teamprojekt",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "17:15:00",
            "endtime": "18:45:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Teamprojekt",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Teamprojekt",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "19:00:00",
            "endtime": "20:30:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Advanced Computer Networks",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "17:15:00",
            "endtime": "18:45:00",
            "dates": [
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Hardegen"
            }
        },
        {
            "courseTitle": "Advanced Computer Networks",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "19:00:00",
            "endtime": "20:30:00",
            "dates": [
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.133 NetLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Hardegen"
            }
        },
        {
            "courseTitle": "Diskrete Mathematik",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "Diskrete Mathematik",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "Verteilte Anwendungen",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Verteilte Anwendungen",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Verteilte Datenbanken",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.121 Softwarelabor 4",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Scheich"
            }
        },
        {
            "courseTitle": "Verteilte Datenbanken",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.121 Softwarelabor 4",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Scheich"
            }
        },
        {
            "courseTitle": "Computer Graphics",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "17:15:00",
            "endtime": "18:45:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Karsten",
                "surname": "Schwenk"
            }
        },
        {
            "courseTitle": "Computer Graphics",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Karsten",
                "surname": "Schwenk"
            }
        },
        {
            "courseTitle": "Special Topic of Global Software Development",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "13:45:00",
            "endtime": "17:00:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "43.106 Seminarraum",
            "building": "Gebäude 43",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Scheich"
            }
        },
        {
            "courseTitle": "Machine Learning",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Alexander",
                "surname": "Gepperth"
            }
        },
        {
            "courseTitle": "Machine Learning",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.121 Softwarelabor 4",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Alexander",
                "surname": "Gepperth"
            }
        },
        {
            "courseTitle": "Machine Learning",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Monika",
                "surname": "Schak"
            }
        },
        {
            "courseTitle": "Machine Learning",
            "courseType": "Praktikum",
            "parallelGroupValue": "3. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "14.10.2019",
                "21.10.2019",
                "28.10.2019",
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.139 MacLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Alexander",
                "surname": "Gepperth"
            }
        },
        {
            "courseTitle": "Building Web and Mobile Apps",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.107 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Muneeb",
                "surname": "Noor"
            }
        },
        {
            "courseTitle": "Building Web and Mobile Apps",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "17:15:00",
            "endtime": "18:45:00",
            "dates": [
                "29.10.2019",
                "05.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.121 Softwarelabor 4",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Muneeb",
                "surname": "Noor"
            }
        },
        {
            "courseTitle": "Building Web and Mobile Apps",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "19:00:00",
            "endtime": "20:30:00",
            "dates": [
                "29.10.2019",
                "05.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.121 Softwarelabor 4",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Muneeb",
                "surname": "Noor"
            }
        },
        {
            "courseTitle": "Middleware",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Middleware",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Parallel Programming",
            "courseType": "Seminaristischer Unterricht",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Parallel Programming",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Freitag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "18.10.2019",
                "25.10.2019",
                "01.11.2019",
                "08.11.2019",
                "15.11.2019",
                "22.11.2019",
                "29.11.2019",
                "06.12.2019",
                "13.12.2019",
                "17.01.2020",
                "24.01.2020",
                "31.01.2020",
                "07.02.2020",
                "14.02.2020"
            ],
            "room": "46.129 LinuxLab",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Test Oriented Development",
            "courseType": "Seminar",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "08:00:00",
            "endtime": "09:50:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.112 Unterrichtsraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Test Oriented Development",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Test Oriented Development",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Montag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": [
                "04.11.2019",
                "11.11.2019",
                "18.11.2019",
                "25.11.2019",
                "02.12.2019",
                "09.12.2019",
                "16.12.2019",
                "13.01.2020",
                "20.01.2020",
                "27.01.2020",
                "03.02.2020",
                "10.02.2020"
            ],
            "room": "46.121 Softwarelabor 4",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Global Distributed Software Development",
            "courseType": "Praktikum",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Donnerstag",
            "starttime": "17:15:00",
            "endtime": "20:30:00",
            "dates": [
                "17.10.2019",
                "24.10.2019",
                "31.10.2019",
                "07.11.2019",
                "14.11.2019",
                "21.11.2019",
                "28.11.2019",
                "05.12.2019",
                "12.12.2019",
                "19.12.2019",
                "16.01.2020",
                "23.01.2020",
                "30.01.2020",
                "06.02.2020",
                "13.02.2020"
            ],
            "room": "51.111 Softwarelabor 2",
            "building": "Gebäude 51",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Global Distributed Software Development",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "19:00:00",
            "endtime": "20:30:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Global Distributed Software Development",
            "courseType": "Praktikum",
            "parallelGroupValue": "2. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Mittwoch",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "23.10.2019",
                "30.10.2019",
                "06.11.2019",
                "13.11.2019",
                "20.11.2019",
                "27.11.2019",
                "04.12.2019",
                "11.12.2019",
                "18.12.2019",
                "15.01.2020",
                "22.01.2020",
                "29.01.2020",
                "05.02.2020",
                "12.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Intercultural Communication",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Agata Puspitasari",
                "surname": "Ranjabar"
            }
        },
        {
            "courseTitle": "Intercultural Communication",
            "courseType": "Übung",
            "parallelGroupValue": "1. Parallelgruppe",
            "rhythm": "wöchentlich",
            "day": "Dienstag",
            "starttime": "13:45:00",
            "endtime": "15:15:00",
            "dates": [
                "22.10.2019",
                "29.10.2019",
                "05.11.2019",
                "12.11.2019",
                "19.11.2019",
                "26.11.2019",
                "03.12.2019",
                "10.12.2019",
                "17.12.2019",
                "14.01.2020",
                "21.01.2020",
                "28.01.2020",
                "04.02.2020",
                "11.02.2020"
            ],
            "room": "46.105 Seminarraum",
            "building": "Gebäude 46",
            "lecturer": {
                "degree": "",
                "firstname": "Agata Puspitasari",
                "surname": "Ranjabar"
            }
        }
    ],
    "sprechzeiten": [
        {
            "name": "Jan-Torsten Milde",
            "degree": "Prof. Dr.",
			"job": "Medieninformatik und Webtechnologien",
            "time": "In der vorlesungsfreien Zeit nach Vereinbarung oder per Aushang in moodle (eLearning). ",
            "phone": "+49 661 9640-332",
            "mail": "jan-torsten.milde(at)informatik.hs-fulda.de",
            "room": "46.012 AV-Lab",
            "building": "Gebäude 46",
        },
        {
            "name": "Birgit Bomsdorf",
            "degree": "Prof. Dr.",
			"job": "Medieninformatik, Mensch-Computer-Interaktion",
            "time": "In der vorlesungsfreien Zeit nach Vereinbarung oder per Aushang in moodle (eLearning). ",
            "phone": "+49 661 9640-327",
            "mail": "birgit.bomsdorf(at)informatik.hs-fulda.de",
            "room": "46.328",
            "building": "Gebäude 46",
        },
    ]
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/hallo', function(req, res, next) {
  res.send("selber hallo");
});

/* GET users listing. */
router.get('/unsichtbar', function(req, res, next) {
  CHANGE = "1";
  ADRESSE = "http://ai-info.informatik.hs-fulda.de:443/htdocs/unsichtbar.html";
  res.send("ok: unsichtbar");
});

/* GET users listing. */
router.all('/dekan', function(req, res, next) {
  CHANGE = "1";
  ADRESSE = "http://ai-info.informatik.hs-fulda.de:443/htdocs/person.html";
  res.send("ok: dekan");
});

/* GET users listing. */
router.all('/ssc', function(req, res, next) {
  CHANGE = "1";
  ADRESSE = "http://ai-info.informatik.hs-fulda.de:443/htdocs/index.html";
  res.send("ok: ssc");
});

//Aufruf der Datenbank Route, hier finden Datenbankaufrufe statt
router.all('/datenbank', function(req, res, next) { 
  console.log(req.body);
  
  //CHANGE = "1";
  //ADRESSE = req.body.obj.modul;
  
  //Fehlervermeidung bei leeren Objekten
  try {
    //Worum geht es
    switch(req.body.obj.typ){
      //Modul
      case '1':
        //Was will man wissen
        switch(req.body.obj.subtyp){
          //Wer hält Modul
          case '1': 
            var name = "Keine Übereinstimmung";
            for (var i = 0; i < vlvz.module.length; i++) {
              if (vlvz.module[i].courseTitle == req.body.obj.modul) {
                name = vlvz.module[i].lecturer.firstname + " " + vlvz.module[i].lecturer.surname;
                console.log(name);
                break;
              }
            }
            break;
          default: console.log("Case subtyp doesn't work");
        }
        break;
      default: console.log("Case typ doesn't work");
    }
    
  } catch(err) {
    console.log("no info");
  }
  
  res.send("ok: datenbank");
});

/* GET users listing. */
router.get('/zeitenBib', function(req, res, next) {
  CHANGE = "1";
  ADRESSE = "http://ai-info.informatik.hs-fulda.de:443/htdocs/oeffnungszeiten.html";
  res.send("ok: zeitenBib");
});

/* GET users listing. */
router.get('/vorlesung', function(req, res, next) {
  CHANGE = "1";
  ADRESSE = "http://ai-info.informatik.hs-fulda.de:443/htdocs/vorlesung.html";
  res.send("ok: vorlesung");
});


/* GET users listing. */
router.get('/adresse', function(req, res, next) {
  CHANGE = "0";
  console.log(CHANGE);
  console.log(ADRESSE);
  res.send(ADRESSE);
});

/* GET users listing. */
router.get('/change', function(req, res, next) {
  console.log(CHANGE);
  res.send(CHANGE);
});

/* GET users listing. */
router.get('/prof', function(req, res, next) {
  CHANGE = "1";
  ADRESSE = "prof.html";
  res.send(ADRESSE);
});



module.exports = router;
