var express = require('express');
var router = express.Router();
router.use(express.json());

var ADRESSE;
var CHANGE = "0";

var vlvz = { "module": [
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Jörg",
                "surname": "Kreiker"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Vorlesung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Jörg",
                "surname": "Kreiker"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Alexander",
                "surname": "Stoldt"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Judit",
                "surname": "Verestóy"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Richardt"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Yvonne",
                "surname": "Jung"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Übung",
            "parallelGroupValue": "5",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus Johannes",
                "surname": "Herche"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Übung",
            "parallelGroupValue": "7",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Markus Johannes",
                "surname": "Herche"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Übung",
            "parallelGroupValue": "8",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Richardt"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Übung",
            "parallelGroupValue": "9",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Markus Johannes",
                "surname": "Herche"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Übung",
            "parallelGroupValue": "10",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Martin Erik",
                "surname": "Motschmann"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Übung",
            "parallelGroupValue": "11",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Alexander",
                "surname": "Stoldt"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Übung",
            "parallelGroupValue": "12",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Thorsten",
                "surname": "Krebs"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Übung",
            "parallelGroupValue": "13",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus Johannes",
                "surname": "Herche"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Übung",
            "parallelGroupValue": "14",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Martin Erik",
                "surname": "Motschmann"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Übung",
            "parallelGroupValue": "15",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Thorsten",
                "surname": "Krebs"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Übung",
            "parallelGroupValue": "16",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Yvonne",
                "surname": "Jung"
            }
        },
        {
            "courseTitle": "Programmierung 1",
            "courseType": "Übung",
            "parallelGroupValue": "17",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Anna-Lena",
                "surname": "Roth"
            }
        },
        {
            "courseTitle": "ProgrammierÜbung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude30",
            "lecturer": {
                "degree": "",
                "firstname": "Jörg",
                "surname": "Kreiker"
            }
        },
        {
            "courseTitle": "ProgrammierÜbung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "15:30:00",
            "endtime": "17:00:00",
            "dates": ["22.11.2019"],
            "room": "51.209 Softwarelabor 3 & 51.203 WI Labor & 51.111 Softwarelabor 2 & 51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Jörg",
                "surname": "Kreiker"
            }
        },
        {
            "courseTitle": "ProgrammierÜbung",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Benjamin",
                "surname": "Hildebrandt"
            }
        },
        {
            "courseTitle": "ProgrammierÜbung",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Benjamin",
                "surname": "Hildebrandt"
            }
        },
        {
            "courseTitle": "ProgrammierÜbung",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Benjamin",
                "surname": "Hildebrandt"
            }
        },
        {
            "courseTitle": "ProgrammierÜbung",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Benjamin",
                "surname": "Hildebrandt"
            }
        },
        {
            "courseTitle": "Digitaltechnik und Rechnersysteme",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Martin",
                "surname": "Kumm"
            }
        },
        {
            "courseTitle": "Digitaltechnik und Rechnersysteme",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude34",
            "lecturer": {
                "degree": "",
                "firstname": "Martin",
                "surname": "Kumm"
            }
        },
        {
            "courseTitle": "Digitaltechnik und Rechnersysteme",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Martin",
                "surname": "Kumm"
            }
        },
        {
            "courseTitle": "Digitaltechnik und Rechnersysteme",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude34",
            "lecturer": {
                "degree": "",
                "firstname": "Martin",
                "surname": "Kumm"
            }
        },
        {
            "courseTitle": "Technische Grundlagen der Informatik",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Karim",
                "surname": "Khakzar"
            }
        },
        {
            "courseTitle": "Technische Grundlagen der Informatik",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Solveig",
                "surname": "Schüßler"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "5",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "6",
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
            "building": "gebäude34",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "7",
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
            "building": "gebäude34",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "8",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Betriebswirtschaftslehre 1",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Göltenboth"
            }
        },
        {
            "courseTitle": "Betriebswirtschaftslehre 1",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Göltenboth"
            }
        },
        {
            "courseTitle": "Betriebswirtschaftslehre 1",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Göltenboth"
            }
        },
        {
            "courseTitle": "Betriebswirtschaftslehre 1",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Göltenboth"
            }
        },
        {
            "courseTitle": "Betriebswirtschaftslehre 1",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Göltenboth"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Angewandte Informatik)",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Yvonne",
                "surname": "Jung"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Angewandte Informatik)",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Yvonne",
                "surname": "Jung"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Angewandte Informatik)",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Yvonne",
                "surname": "Jung"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Angewandte Informatik)",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Yvonne",
                "surname": "Jung"
            }
        },
        {
            "courseTitle": "Betriebssysteme",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude20",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Betriebssysteme",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude20",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Betriebssysteme",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseNumber": "AI1013P",
            "courseTitle": "Betriebssysteme",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Betriebssysteme",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Betriebssysteme",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Betriebssysteme",
            "courseType": "Übung",
            "parallelGroupValue": "5",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Betriebssysteme",
            "courseType": "Übung",
            "parallelGroupValue": "6",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Datenbanksysteme",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Scheich"
            }
        },
        {
            "courseTitle": "Datenbanksysteme",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Scheich"
            }
        },
        {
            "courseTitle": "Datenbanksysteme",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Scheich"
            }
        },
        {
            "courseTitle": "Datenbanksysteme",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Scheich"
            }
        },
        {
            "courseTitle": "Datenbanksysteme",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Scheich"
            }
        },
        {
            "courseTitle": "Verteilte Systeme",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Verteilte Systeme",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Friedmann"
            }
        },
        {
            "courseTitle": "Verteilte Systeme",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Friedmann"
            }
        },
        {
            "courseTitle": "Verteilte Systeme",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Friedmann"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Battenberg"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Battenberg"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "18:00:00",
            "dates": ["02.11.2019"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:45:00",
            "endtime": "13:10:00",
            "dates": ["18.11.2019"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:45:00",
            "endtime": "13:10:00",
            "dates": ["25.11.2019"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:45:00",
            "endtime": "13:10:00",
            "dates": ["02.12.2019"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:45:00",
            "endtime": "13:10:00",
            "dates": ["13.01.2020"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:45:00",
            "endtime": "13:10:00",
            "dates": ["20.01.2020"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:45:00",
            "endtime": "13:10:00",
            "dates": ["27.01.2020"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "15:00:00",
            "dates": ["09.11.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Marie",
                "surname": "Lorsbach"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "10:00:00",
            "endtime": "17:00:00",
            "dates": ["23.11.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Marie",
                "surname": "Lorsbach"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "10:00:00",
            "endtime": "17:00:00",
            "dates": ["07.12.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Marie",
                "surname": "Lorsbach"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "10:00:00",
            "endtime": "17:00:00",
            "dates": ["14.12.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Marie",
                "surname": "Lorsbach"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "10:00:00",
            "endtime": "17:00:00",
            "dates": ["11.01.2020"],
            "room": "46.112 Unterrichtsraum",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Marie",
                "surname": "Lorsbach"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "10:00:00",
            "endtime": "17:00:00",
            "dates": ["25.01.2020"],
            "room": "46.112 Unterrichtsraum",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Marie",
                "surname": "Lorsbach"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "10:00:00",
            "endtime": "17:00:00",
            "dates": ["15.02.2020"],
            "room": "46.112 Unterrichtsraum",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Marie",
                "surname": "Lorsbach"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "5",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Carola",
                "surname": "Ossenkopp-Wetzig"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "5",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Carola",
                "surname": "Ossenkopp-Wetzig"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "6",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "18:00:00",
            "dates": ["09.11.2019"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "6",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "18:00:00",
            "dates": ["18.11.2019"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "6",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "18:00:00",
            "dates": ["25.11.2019"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "6",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "18:00:00",
            "dates": ["02.12.2019"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "6",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "18:00:00",
            "dates": ["13.01.2020"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "6",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "18:00:00",
            "dates": ["20.01.2020"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Präsentation und Kommunikation",
            "courseType": "Vorlesung",
            "parallelGroupValue": "6",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "13:45:00",
            "endtime": "18:00:00",
            "dates": ["27.01.2020"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Marianne",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "IT-Sicherheit (Angewandte Informatik)",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit (Angewandte Informatik)",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit (Angewandte Informatik)",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": ["11.11.2019"],
            "room": "46.009 Hörsaal",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit (Angewandte Informatik)",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": ["25.11.2019"],
            "room": "46.009 Hörsaal",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit (Wirtschaftsinformatik)",
            "courseType": "Vorlesung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit (Wirtschaftsinformatik)",
            "courseType": "Vorlesung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit (Wirtschaftsinformatik)",
            "courseType": "Vorlesung",
            "parallelGroupValue": "2",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": ["11.11.2019"],
            "room": "46.009 Hörsaal",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit (Wirtschaftsinformatik)",
            "courseType": "Vorlesung",
            "parallelGroupValue": "2",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "09:30:00",
            "dates": ["25.11.2019"],
            "room": "46.009 Hörsaal",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Übung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "12:15:00",
            "dates": ["23.11.2019"],
            "room": "46.133 NetLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Sven",
                "surname": "Reissmann"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Übung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "12:15:00",
            "dates": ["07.12.2019"],
            "room": "46.133 NetLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Sven",
                "surname": "Reissmann"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Übung",
            "parallelGroupValue": "2",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "12:45:00",
            "endtime": "16:00:00",
            "dates": ["23.11.2019"],
            "room": "46.133 NetLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Sven",
                "surname": "Reissmann"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Übung",
            "parallelGroupValue": "2",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "12:45:00",
            "endtime": "16:00:00",
            "dates": ["07.12.2019"],
            "room": "46.133 NetLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Sven",
                "surname": "Reissmann"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Übung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "11:15:00",
            "dates": ["30.11.2019"],
            "room": "46.133 NetLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Wolfgang",
                "surname": "Kemmler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Übung",
            "parallelGroupValue": "2",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "11:15:00",
            "dates": ["14.12.2019"],
            "room": "46.133 NetLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Wolfgang",
                "surname": "Kemmler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Übung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "11:45:00",
            "endtime": "15:00:00",
            "dates": ["30.11.2019"],
            "room": "46.133 NetLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Wolfgang",
                "surname": "Kemmler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Übung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "11:45:00",
            "endtime": "15:00:00",
            "dates": ["14.12.2019"],
            "room": "46.133 NetLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Wolfgang",
                "surname": "Kemmler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Übung",
            "parallelGroupValue": "5",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "11:15:00",
            "dates": ["18.01.2020"],
            "room": "46.133 NetLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Wolfgang",
                "surname": "Kemmler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Übung",
            "parallelGroupValue": "5",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "11:15:00",
            "dates": ["25.01.2020"],
            "room": "46.133 NetLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Wolfgang",
                "surname": "Kemmler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Übung",
            "parallelGroupValue": "6",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "11:45:00",
            "endtime": "15:00:00",
            "dates": ["18.01.2020"],
            "room": "46.133 NetLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Wolfgang",
                "surname": "Kemmler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Übung",
            "parallelGroupValue": "6",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "11:45:00",
            "endtime": "15:00:00",
            "dates": ["25.01.2020"],
            "room": "46.133 NetLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Wolfgang",
                "surname": "Kemmler"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Übung",
            "parallelGroupValue": "7",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "12:15:00",
            "dates": ["11.01.2020"],
            "room": "46.133 NetLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Sven",
                "surname": "Reissmann"
            }
        },
        {
            "courseTitle": "IT-Sicherheit",
            "courseType": "Übung",
            "parallelGroupValue": "7",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "12:45:00",
            "endtime": "16:00:00",
            "dates": ["11.01.2020"],
            "room": "46.133 NetLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Sven",
                "surname": "Reissmann"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Angewandte Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Michael",
                "surname": "Jahn"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Angewandte Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Reiner Robert",
                "surname": "Keller"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Angewandte Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Bernhard",
                "surname": "Schmelz"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Angewandte Informatik",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Bernhard",
                "surname": "Schmelz"
            }
        },
        {
            "courseTitle": "Höhere Konzepte der Programmierung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Höhere Konzepte der Programmierung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Jörg",
                "surname": "Kreiker"
            }
        },
        {
            "courseTitle": "Höhere Konzepte der Programmierung",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Jörg",
                "surname": "Kreiker"
            }
        },
        {
            "courseTitle": "Höhere Konzepte der Programmierung",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Höhere Konzepte der Programmierung",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Höhere Konzepte der Programmierung",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Jörg",
                "surname": "Kreiker"
            }
        },
        {
            "courseTitle": "Praxisprojekt-VorVorlesung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "11:00:00",
            "endtime": "13:00:00",
            "dates": ["16.10.2019"],
            "room": "46.009 Hörsaal",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Praxisprojekt-VorVorlesung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "16:00:00",
            "dates": ["30.10.2019"],
            "room": "46.009 Hörsaal",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Praxisprojekt-VorVorlesung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "09:00:00",
            "endtime": "16:00:00",
            "dates": ["29.11.2019"],
            "room": "43.103 Unterrichtsraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Hermann",
                "surname": "Fien"
            }
        },
        {
            "courseTitle": "Praxisprojekt-VorVorlesung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "2",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "11:00:00",
            "endtime": "13:00:00",
            "dates": ["16.10.2019"],
            "room": "46.009 Hörsaal",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Praxisprojekt-VorVorlesung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "2",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "16:00:00",
            "dates": ["30.10.2019"],
            "room": "46.009 Hörsaal",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Praxisprojekt-VorVorlesung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "2",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "16:00:00",
            "dates": ["30.11.2019"],
            "room": "43.103 Unterrichtsraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Hermann",
                "surname": "Fien"
            }
        },
        {
            "courseTitle": "Praxisprojekt-VorVorlesung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "11:00:00",
            "endtime": "13:00:00",
            "dates": ["16.10.2019"],
            "room": "46.009 Hörsaal",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Praxisprojekt-VorVorlesung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "16:00:00",
            "dates": ["30.10.2019"],
            "room": "46.009 Hörsaal",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Praxisprojekt-VorVorlesung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "09:00:00",
            "endtime": "16:00:00",
            "dates": ["06.12.2019"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Hermann",
                "surname": "Fien"
            }
        },
        {
            "courseTitle": "Praxisprojekt-VorVorlesung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "11:00:00",
            "endtime": "13:00:00",
            "dates": ["16.10.2019"],
            "room": "46.009 Hörsaal",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Praxisprojekt-VorVorlesung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "16:00:00",
            "dates": ["30.10.2019"],
            "room": "46.009 Hörsaal",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Praxisprojekt-VorVorlesung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "16:00:00",
            "dates": ["07.12.2019"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Hermann",
                "surname": "Fien"
            }
        },
        {
            "courseTitle": "Grundlagen der Wirtschaftsinformatik",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Norbert",
                "surname": "Ketterer"
            }
        },
        {
            "courseTitle": "Grundlagen der Wirtschaftsinformatik",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Norbert",
                "surname": "Ketterer"
            }
        },
        {
            "courseTitle": "Grundlagen der Wirtschaftsinformatik",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Norbert",
                "surname": "Ketterer"
            }
        },
        {
            "courseTitle": "Grundlagen der Wirtschaftsinformatik",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Norbert",
                "surname": "Ketterer"
            }
        },
        {
            "courseTitle": "Optimierung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude52",
            "lecturer": {
                "degree": "",
                "firstname": "Alexander",
                "surname": "Gepperth"
            }
        },
        {
            "courseTitle": "Optimierung",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Alexander",
                "surname": "Gepperth"
            }
        },
        {
            "courseTitle": "Optimierung",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Alexander",
                "surname": "Gepperth"
            }
        },
        {
            "courseTitle": "Data Mining",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Frank",
                "surname": "Klingert"
            }
        },
        {
            "courseTitle": "Data Mining",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Dienstag",
            "starttime": "17:15:00",
            "endtime": "18:45:00",
            "dates": ["22.10.2019"],
            "room": "43.103 Unterrichtsraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Frank",
                "surname": "Klingert"
            }
        },
        {
            "courseTitle": "Data Mining",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Frank",
                "surname": "Klingert"
            }
        },
        {
            "courseTitle": "Data Mining",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Frank",
                "surname": "Klingert"
            }
        },
        {
            "courseTitle": "Data Mining",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Frank",
                "surname": "Klingert"
            }
        },
        {
            "courseTitle": "Mensch-Computer-Interaktion",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Hans Martin",
                "surname": "Pohl"
            }
        },
        {
            "courseTitle": "Mensch-Computer-Interaktion",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Blum"
            }
        },
        {
            "courseTitle": "Mensch-Computer-Interaktion",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Blum"
            }
        },
        {
            "courseTitle": "Logistik",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Logistik",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Grundlagen der Wirtschaftspolitik",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Göltenboth"
            }
        },
        {
            "courseTitle": "Grundlagen der Wirtschaftspolitik",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Markus",
                "surname": "Göltenboth"
            }
        },
        {
            "courseTitle": "Unternehmensgründung 1 und 2",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Claudia",
                "surname": "Steinhauer"
            }
        },
        {
            "courseTitle": "Big Data Grundlagen",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:30:00",
            "endtime": "18:00:00",
            "dates": ["30.09.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Heiner",
                "surname": "Benner"
            }
        },
        {
            "courseTitle": "Big Data Grundlagen",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Dienstag",
            "starttime": "08:30:00",
            "endtime": "12:30:00",
            "dates": ["01.10.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Heiner",
                "surname": "Benner"
            }
        },
        {
            "courseTitle": "Big Data Grundlagen",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "12:30:00",
            "endtime": "14:30:00",
            "dates": ["02.10.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Heiner",
                "surname": "Benner"
            }
        },
        {
            "courseTitle": "Big Data Grundlagen",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Dienstag",
            "starttime": "08:30:00",
            "endtime": "18:00:00",
            "dates": ["08.10.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Heiner",
                "surname": "Benner"
            }
        },
        {
            "courseTitle": "Big Data Grundlagen",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Donnerstag",
            "starttime": "08:30:00",
            "endtime": "17:30:00",
            "dates": ["10.10.2019"],
            "room": "46.112 Unterrichtsraum",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Heiner",
                "surname": "Benner"
            }
        },
        {
            "courseTitle": "Big Data Grundlagen",
            "courseType": "Übung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Dienstag",
            "starttime": "13:30:00",
            "endtime": "18:00:00",
            "dates": ["01.10.2019"],
            "room": "51.203 WI Labor",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Heiner",
                "surname": "Benner"
            }
        },
        {
            "courseTitle": "Big Data Grundlagen",
            "courseType": "Übung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "08:00:00",
            "endtime": "12:00:00",
            "dates": ["02.10.2019"],
            "room": "51.203 WI Labor",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Heiner",
                "surname": "Benner"
            }
        },
        {
            "courseTitle": "Big Data Grundlagen",
            "courseType": "Übung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "08:30:00",
            "endtime": "18:00:00",
            "dates": ["09.10.2019"],
            "room": "51.203 WI Labor",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Heiner",
                "surname": "Benner"
            }
        },
        {
            "courseTitle": "Medienproduktion",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Medienproduktion",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Paul",
                "surname": "Grimm"
            }
        },
        {
            "courseTitle": "Medienproduktion",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "13:10:00",
            "endtime": "14:00:00",
            "dates": ["18.12.2019"],
            "room": "46.009 Hörsaal",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Medienproduktion - 3D-Modellierung",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Paul",
                "surname": "Grimm"
            }
        },
        {
            "courseTitle": "Medienproduktion - 3D-Modellierung",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Paul",
                "surname": "Grimm"
            }
        },
        {
            "courseTitle": "Medienproduktion - 3D-Modellierung",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Paul",
                "surname": "Grimm"
            }
        },
        {
            "courseTitle": "Medienproduktion - 3D-Modellierung",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Paul",
                "surname": "Grimm"
            }
        },
        {
            "courseTitle": "Medienproduktion - 3D-Modellierung",
            "courseType": "Übung",
            "parallelGroupValue": "5",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Paul",
                "surname": "Grimm"
            }
        },
        {
            "courseTitle": "Medienproduktion - 3D-Modellierung",
            "courseType": "Übung",
            "parallelGroupValue": "6",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Paul",
                "surname": "Grimm"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Böhm"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Böhm"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Böhm"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Böhm"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Böhm"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Böhm"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Übung",
            "parallelGroupValue": "5",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Übung",
            "parallelGroupValue": "5",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Übung",
            "parallelGroupValue": "6",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Fuchs"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Übung",
            "parallelGroupValue": "6",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Fuchs"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Übung",
            "parallelGroupValue": "7",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Übung",
            "parallelGroupValue": "7",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Übung",
            "parallelGroupValue": "8",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Fuchs"
            }
        },
        {
            "courseTitle": "Medienproduktion - AV-Produktion",
            "courseType": "Übung",
            "parallelGroupValue": "8",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Fuchs"
            }
        },
        {
            "courseTitle": "Animationsprogrammierung mit Processing",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Animationsprogrammierung mit Processing",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Kommunikationsdesign",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Kommunikationsdesign",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Kommunikationsdesign",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "15:15:00",
            "dates": ["17.01.2020"],
            "room": "46.105 Seminarraum",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Kommunikationsdesign",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "17:00:00",
            "dates": ["07.02.2020"],
            "room": "46.105 Seminarraum",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Konzepte der Android-Programmierung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Konzepte der Android-Programmierung",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Embedded Networking",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Oleg",
                "surname": "Menger"
            }
        },
        {
            "courseTitle": "Embedded Networking",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Oleg",
                "surname": "Menger"
            }
        },
        {
            "courseTitle": "TCP/IP-Programmierung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Peter",
                "surname": "Klingebiel"
            }
        },
        {
            "courseTitle": "TCP/IP-Programmierung",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Peter",
                "surname": "Klingebiel"
            }
        },
        {
            "courseTitle": "Mikrocontrollerprogrammierung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Martin",
                "surname": "Kumm"
            }
        },
        {
            "courseTitle": "Mikrocontrollerprogrammierung",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Martin",
                "surname": "Kumm"
            }
        },
        {
            "courseTitle": "Netz- und Systemmanagement",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Anatol",
                "surname": "Badach"
            }
        },
        {
            "courseTitle": "Netz- und Systemmanagement",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Anatol",
                "surname": "Badach"
            }
        },
        {
            "courseTitle": "Continous Integration in der Praxis",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Thomas",
                "surname": "Papendieck"
            }
        },
        {
            "courseTitle": "Continous Integration in der Praxis",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Thomas",
                "surname": "Papendieck"
            }
        },
        {
            "courseTitle": "Continous Integration in der Praxis",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Thomas",
                "surname": "Papendieck"
            }
        },
        {
            "courseTitle": "Continous Integration in der Praxis",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Thomas",
                "surname": "Papendieck"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik (Wirtschaftsinformatik)",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik (Wirtschaftsinformatik)",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik (Wirtschaftsinformatik)",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik (Wirtschaftsinformatik)",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik (Wirtschaftsinformatik)",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematische Grundlagen der Informatik (Wirtschaftsinformatik)",
            "courseType": "Übung",
            "parallelGroupValue": "5",
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
            "building": "gebäude34",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Vorlesung",
            "parallelGroupValue": "2",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Vorlesung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Vorlesung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Vorlesung",
            "parallelGroupValue": "4",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Übung",
            "parallelGroupValue": "5",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Übung",
            "parallelGroupValue": "6",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Übung",
            "parallelGroupValue": "7",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Kommunikationsnetze und -protokolle",
            "courseType": "Übung",
            "parallelGroupValue": "8",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Werner",
                "surname": "Winzerling"
            }
        },
        {
            "courseTitle": "Rechnerarchitektur und verteilte Systeme",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Peter",
                "surname": "Klingebiel"
            }
        },
        {
            "courseTitle": "Rechnerarchitektur und verteilte Systeme",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Seifert"
            }
        },
        {
            "courseTitle": "Rechnerarchitektur und verteilte Systeme",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Peter",
                "surname": "Klingebiel"
            }
        },
        {
            "courseTitle": "Rechnerarchitektur und verteilte Systeme",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Seifert"
            }
        },
        {
            "courseTitle": "Rechnerarchitektur und verteilte Systeme",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Peter",
                "surname": "Klingebiel"
            }
        },
        {
            "courseTitle": "Rechnerarchitektur und verteilte Systeme",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Seifert"
            }
        },
        {
            "courseTitle": "Rechnerarchitektur und verteilte Systeme",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Peter",
                "surname": "Klingebiel"
            }
        },
        {
            "courseTitle": "Rechnerarchitektur und verteilte Systeme",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Seifert"
            }
        },
        {
            "courseTitle": "Methoden des Software Engineering",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Judit",
                "surname": "Verestóy"
            }
        },
        {
            "courseTitle": "Methoden des Software Engineering",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Judit",
                "surname": "Verestóy"
            }
        },
        {
            "courseTitle": "Methoden des Software Engineering",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Judit",
                "surname": "Verestóy"
            }
        },
        {
            "courseTitle": "Methoden des Software Engineering",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Judit",
                "surname": "Verestóy"
            }
        },
        {
            "courseTitle": "Projektmanagement",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Philipp",
                "surname": "Reinhardt"
            }
        },
        {
            "courseTitle": "Projektmanagement",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Philipp",
                "surname": "Reinhardt"
            }
        },
        {
            "courseTitle": "Projektmanagement",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Philipp",
                "surname": "Reinhardt"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Wirtschaftsinformatik",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Oliver",
                "surname": "Müller"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Wirtschaftsinformatik",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Uwe",
                "surname": "Hanstein"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Wirtschaftsinformatik",
            "courseType": "Übung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "17:00:00",
            "dates": ["18.10.2019"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Altheimer"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Wirtschaftsinformatik",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Altheimer"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Wirtschaftsinformatik",
            "courseType": "Übung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "17:00:00",
            "dates": ["01.11.2019"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Altheimer"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Wirtschaftsinformatik",
            "courseType": "Übung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "17:00:00",
            "dates": ["29.11.2019"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Altheimer"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Wirtschaftsinformatik",
            "courseType": "Übung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "08:00:00",
            "endtime": "17:00:00",
            "dates": ["17.01.2020"],
            "room": "43.106 Seminarraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Stefan",
                "surname": "Altheimer"
            }
        },
        {
            "courseTitle": "Controlling und IT Controlling",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Controlling und IT Controlling",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Audioprogrammierung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Kostenrechnung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Kostenrechnung",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Volker",
                "surname": "Warschburger"
            }
        },
        {
            "courseTitle": "Mediendesign",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Mediendesign",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Fuchs"
            }
        },
        {
            "courseTitle": "Mediendesign",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Judit",
                "surname": "Verestóy"
            }
        },
        {
            "courseTitle": "Mediendesign",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Fuchs"
            }
        },
        {
            "courseTitle": "Mediendesign",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Ludwig",
                "surname": "Loth"
            }
        },
        {
            "courseTitle": "Mediendesign",
            "courseType": "Übung",
            "parallelGroupValue": "5",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Judit",
                "surname": "Verestóy"
            }
        },
        {
            "courseTitle": "Mediendesign",
            "courseType": "Übung",
            "parallelGroupValue": "6",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Ludwig",
                "surname": "Loth"
            }
        },
        {
            "courseTitle": "Mathematik",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematik",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude34",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematik",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Torsten",
                "surname": "Schreiber"
            }
        },
        {
            "courseTitle": "Mathematik",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Torsten",
                "surname": "Schreiber"
            }
        },
        {
            "courseTitle": "Mathematik",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude34",
            "lecturer": {
                "degree": "",
                "firstname": "Torsten",
                "surname": "Schreiber"
            }
        },
        {
            "courseTitle": "Mathematik",
            "courseType": "Übung",
            "parallelGroupValue": "5",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas",
                "surname": "Hofmann"
            }
        },
        {
            "courseTitle": "Mathematik",
            "courseType": "Übung",
            "parallelGroupValue": "6",
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
            "building": "gebäude34",
            "lecturer": {
                "degree": "",
                "firstname": "Torsten",
                "surname": "Schreiber"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude52",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "5",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "6",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "18:00:00",
            "dates": ["21.10.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Merete",
                "surname": "Hirth"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "15:00:00",
            "dates": ["04.11.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "17:00:00",
            "dates": ["11.11.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["23.11.2019"],
            "room": "46.332-338 MediaLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Dennis",
                "surname": "Bieza"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "16:30:00",
            "dates": ["09.12.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan",
                "surname": "Lingelbach"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["18.01.2020"],
            "room": "46.121 Softwarelabor 4",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "2",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "18:00:00",
            "dates": ["26.10.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Merete",
                "surname": "Hirth"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "2",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["09.11.2019"],
            "room": "46.332-338 MediaLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Dennis",
                "surname": "Bieza"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "2",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "15:00:00",
            "dates": ["16.11.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "2",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "17:00:00",
            "dates": ["07.12.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "2",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "16:30:00",
            "dates": "16.12.2019",
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan",
                "surname": "Lingelbach"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "2",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["13.01.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "18:00:00",
            "dates": ["28.10.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Merete",
                "surname": "Hirth"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["02.11.2019"],
            "room": "46.332-338 MediaLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Dennis",
                "surname": "Bieza"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "17:00:00",
            "dates": ["18.11.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "15:00:00",
            "dates": ["25.11.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "16:30:00",
            "dates": ["13.01.2020"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan",
                "surname": "Lingelbach"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["20.01.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "15:00:00",
            "dates": ["28.10.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "18:00:00",
            "dates": ["09.11.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Merete",
                "surname": "Hirth"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["16.11.2019"],
            "room": "46.332-338 MediaLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Dennis",
                "surname": "Bieza"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "17:00:00",
            "dates": ["25.11.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "16:30:00",
            "dates": ["18.01.2020"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan",
                "surname": "Lingelbach"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["27.01.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "5",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "17:00:00",
            "dates": ["04.11.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "5",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "18:00:00",
            "dates": ["18.11.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Merete",
                "surname": "Hirth"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "5",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "15:00:00",
            "dates": ["02.12.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "5",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["07.12.2019"],
            "room": "46.332-338 MediaLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Dennis",
                "surname": "Bieza"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "5",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["16.12.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "5",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "16:30:00",
            "dates": ["20.01.2020"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan",
                "surname": "Lingelbach"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "6",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "17:00:00",
            "dates": ["21.10.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Anna Theresa",
                "surname": "Niebling"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "6",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "09:00:00",
            "endtime": "15:00:00",
            "dates": ["11.11.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Fischer"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "6",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:00:00",
            "endtime": "18:00:00",
            "dates": ["23.11.2019"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Merete",
                "surname": "Hirth"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "6",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["30.11.2019"],
            "room": "46.332-338 MediaLab",
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Dennis",
                "surname": "Bieza"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "6",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "15:30:00",
            "dates": ["09.12.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Nicolas Julian",
                "surname": "Weyel"
            }
        },
        {
            "courseTitle": "Gestaltungsgrundlagen und Medienwerkzeuge",
            "courseType": "Übung",
            "parallelGroupValue": "6",
            "rhythm": "Einzeltermin",
            "day": "Montag",
            "starttime": "08:00:00",
            "endtime": "16:30:00",
            "dates": ["27.01.2020"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan",
                "surname": "Lingelbach"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Donnerstag",
            "starttime": "11:40:00",
            "endtime": "13:10:00",
            "dates": ["14.11.2019"],
            "room": "51.203 WI Labor",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["22.01.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["05.02.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "2",
            "rhythm": "Einzeltermin",
            "day": "Donnerstag",
            "starttime": "09:50:00",
            "endtime": "11:20:00",
            "dates": ["14.11.2019"],
            "room": "51.203 WI Labor",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "2",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["22.01.2020"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "2",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["05.02.2020"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["22.01.2020"],
            "room": "51.203 WI Labor",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "3",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["05.02.2020"],
            "room": "51.203 WI Labor",
            "building": "gebäude51",
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
            "parallelGroupValue": "4",
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
            "building": "gebäude51",
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
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["29.01.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
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
            "parallelGroupValue": "4",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["12.02.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Schmitt"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "5",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Schmitt"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "5",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["29.01.2020"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Schmitt"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "5",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["12.02.2020"],
            "room": "51.111 Softwarelabor 2",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Schmitt"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "6",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Schmitt"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "6",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["22.01.2020"],
            "room": "51.209 Softwarelabor 3",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Schmitt"
            }
        },
        {
            "courseTitle": "Algorithmen und Datenstrukturen (Digitale Medien)",
            "courseType": "Übung",
            "parallelGroupValue": "6",
            "rhythm": "Einzeltermin",
            "day": "Mittwoch",
            "starttime": "14:00:00",
            "endtime": "18:30:00",
            "dates": ["05.02.2020"],
            "room": "51.209 Softwarelabor 3",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuel",
                "surname": "Schmitt"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Birgit",
                "surname": "Bomsdorf"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Isabella",
                "surname": "Cadoni"
            }
        },
        {
            "courseTitle": "Usability Engineering (Wiederholer)",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering (Wiederholer)",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Übung",
            "parallelGroupValue": "5",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Isabella",
                "surname": "Cadoni"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Übung",
            "parallelGroupValue": "5",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Isabella",
                "surname": "Cadoni"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Übung",
            "parallelGroupValue": "6",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Übung",
            "parallelGroupValue": "7",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Übung",
            "parallelGroupValue": "7",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Dominik",
                "surname": "Rupprecht"
            }
        },
        {
            "courseTitle": "Usability Engineering",
            "courseType": "Übung",
            "parallelGroupValue": "8",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Christian",
                "surname": "Stickel"
            }
        },
        {
            "courseTitle": "Recht",
            "courseType": "Vorlesung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Erd"
            }
        },
        {
            "courseTitle": "Recht",
            "courseType": "Vorlesung",
            "parallelGroupValue": "2",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Erd"
            }
        },
        {
            "courseTitle": "Recht",
            "courseType": "Vorlesung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Erd"
            }
        },
        {
            "courseTitle": "Recht",
            "courseType": "Vorlesung",
            "parallelGroupValue": "3",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Erd"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Vorlesung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Vorlesung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Helena",
                "surname": "Röhrig"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Helena",
                "surname": "Röhrig"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Übung",
            "parallelGroupValue": "5",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Annika",
                "surname": "Wagner"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Übung",
            "parallelGroupValue": "6",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Helena",
                "surname": "Röhrig"
            }
        },
        {
            "courseTitle": "Mediendidaktik und E-Learning",
            "courseType": "Übung",
            "parallelGroupValue": "7",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Helena",
                "surname": "Röhrig"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Digitale Medien",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Axel",
                "surname": "Schäfer"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Digitale Medien",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Axel",
                "surname": "Schäfer"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Digitale Medien",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Digitale Medien",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Jan-Torsten",
                "surname": "Milde"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Digitale Medien",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Peter",
                "surname": "Klingebiel"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Digitale Medien",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Peter",
                "surname": "Klingebiel"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Digitale Medien",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Steffen",
                "surname": "Menz"
            }
        },
        {
            "courseTitle": "Bachelor-Projekt Digitale Medien",
            "courseType": "Übung",
            "parallelGroupValue": "4",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Steffen",
                "surname": "Menz"
            }
        },
        {
            "courseTitle": "Gestaltung in der Praxis",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:50:00",
            "endtime": "18:00:00",
            "dates": ["16.11.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuela",
                "surname": "Greipel"
            }
        },
        {
            "courseTitle": "Gestaltung in der Praxis",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "08:00:00",
            "endtime": "18:00:00",
            "dates": ["23.11.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuela",
                "surname": "Greipel"
            }
        },
        {
            "courseTitle": "Gestaltung in der Praxis",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:50:00",
            "endtime": "18:00:00",
            "dates": ["30.11.2019"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuela",
                "surname": "Greipel"
            }
        },
        {
            "courseTitle": "Gestaltung in der Praxis",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:50:00",
            "endtime": "18:00:00",
            "dates": ["11.01.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuela",
                "surname": "Greipel"
            }
        },
        {
            "courseTitle": "Gestaltung in der Praxis",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:50:00",
            "endtime": "18:45:00",
            "dates": ["18.01.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuela",
                "surname": "Greipel"
            }
        },
        {
            "courseTitle": "Gestaltung in der Praxis",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:50:00",
            "endtime": "18:00:00",
            "dates": ["25.01.2020"],
            "room": "51.103 Softwarelabor 1",
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Manuela",
                "surname": "Greipel"
            }
        },
        {
            "courseTitle": "Handlungsfelder der Gesundheitstechnik (Projektarbeit)",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude30",
            "lecturer": {
                "degree": "",
                "firstname": "Jens",
                "surname": "Graf"
            }
        },
        {
            "courseTitle": "Handlungsfelder der Gesundheitstechnik (Projektarbeit)",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude30",
            "lecturer": {
                "degree": "",
                "firstname": "Solveig",
                "surname": "Schüßler"
            }
        },
        {
            "courseTitle": "Vitalfunktionen verstehen und erhalten",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude31",
            "lecturer": {
                "degree": "",
                "firstname": "Johanna",
                "surname": "Nickl"
            }
        },
        {
            "courseTitle": "Vitalfunktionen verstehen und erhalten",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude31",
            "lecturer": {
                "degree": "",
                "firstname": "Johanna",
                "surname": "Nickl"
            }
        },
        {
            "courseTitle": "Vitalfunktionen verstehen und erhalten",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude31",
            "lecturer": {
                "degree": "",
                "firstname": "Henny Annette",
                "surname": "Grewe"
            }
        },
        {
            "courseTitle": "Methoden der empirischen Sozialforschung und Epidemiologie",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude31",
            "lecturer": {
                "degree": "",
                "firstname": "Katharina",
                "surname": "Rathmann"
            }
        },
        {
            "courseTitle": "Methoden der empirischen Sozialforschung und Epidemiologie",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude31",
            "lecturer": {
                "degree": "",
                "firstname": "Julia",
                "surname": "Depa"
            }
        },
        {
            "courseTitle": "Methoden der empirischen Sozialforschung und Epidemiologie",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude25",
            "lecturer": {
                "degree": "",
                "firstname": "Lita",
                "surname": "Herzig"
            }
        },
        {
            "courseTitle": "Methoden der empirischen Sozialforschung und Epidemiologie",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude31",
            "lecturer": {
                "degree": "",
                "firstname": "Andreas Walter",
                "surname": "Gold"
            }
        },
        {
            "courseTitle": "Eingebettete Systeme",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude30",
            "lecturer": {
                "degree": "",
                "firstname": "Viviane",
                "surname": "Wolff"
            }
        },
        {
            "courseTitle": "Eingebettete Systeme",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude30",
            "lecturer": {
                "degree": "",
                "firstname": "Viviane",
                "surname": "Wolff"
            }
        },
        {
            "courseTitle": "Regelungstechnik",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude30",
            "lecturer": {
                "degree": "",
                "firstname": "Jens",
                "surname": "Graf"
            }
        },
        {
            "courseTitle": "Regelungstechnik",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude30",
            "lecturer": {
                "degree": "",
                "firstname": "Jens",
                "surname": "Graf"
            }
        },
        {
            "courseTitle": "Arbeits- und Führungstechniken",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "17:00:00",
            "dates": ["15.11.2019"],
            "room": "43.103 Unterrichtsraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Bernhard",
                "surname": "Rettler"
            }
        },
        {
            "courseTitle": "Arbeits- und Führungstechniken",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:50:00",
            "endtime": "17:00:00",
            "dates": ["16.11.2019"],
            "room": "43.103 Unterrichtsraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Bernhard",
                "surname": "Rettler"
            }
        },
        {
            "courseTitle": "Arbeits- und Führungstechniken",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "17:00:00",
            "dates": ["06.12.2019"],
            "room": "43.103 Unterrichtsraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Bernhard",
                "surname": "Rettler"
            }
        },
        {
            "courseTitle": "Arbeits- und Führungstechniken",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:50:00",
            "endtime": "17:00:00",
            "dates": ["07.12.2019"],
            "room": "43.103 Unterrichtsraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Bernhard",
                "surname": "Rettler"
            }
        },
        {
            "courseTitle": "Arbeits- und Führungstechniken",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Freitag",
            "starttime": "09:50:00",
            "endtime": "17:00:00",
            "dates": ["17.01.2020"],
            "room": "43.103 Unterrichtsraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Bernhard",
                "surname": "Rettler"
            }
        },
        {
            "courseTitle": "Arbeits- und Führungstechniken",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
            "rhythm": "Einzeltermin",
            "day": "Samstag",
            "starttime": "09:50:00",
            "endtime": "17:00:00",
            "dates": ["18.01.2020"],
            "room": "43.103 Unterrichtsraum",
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Bernhard",
                "surname": "Rettler"
            }
        },
        {
            "courseTitle": "Teamprojekt",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Teamprojekt",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Teamprojekt",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Advanced Computer Networks",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Hardegen"
            }
        },
        {
            "courseTitle": "Advanced Computer Networks",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Hardegen"
            }
        },
        {
            "courseTitle": "Diskrete Mathematik",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "Diskrete Mathematik",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Ulrich",
                "surname": "Bühler"
            }
        },
        {
            "courseTitle": "Verteilte Anwendungen",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Verteilte Anwendungen",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Verteilte Datenbanken",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Scheich"
            }
        },
        {
            "courseTitle": "Verteilte Datenbanken",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Scheich"
            }
        },
        {
            "courseTitle": "Computer Graphics",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Karsten",
                "surname": "Schwenk"
            }
        },
        {
            "courseTitle": "Computer Graphics",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Karsten",
                "surname": "Schwenk"
            }
        },
        {
            "courseTitle": "Special Topic of Global Software Development",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude43",
            "lecturer": {
                "degree": "",
                "firstname": "Christoph",
                "surname": "Scheich"
            }
        },
        {
            "courseTitle": "Machine Learning",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Alexander",
                "surname": "Gepperth"
            }
        },
        {
            "courseTitle": "Machine Learning",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Alexander",
                "surname": "Gepperth"
            }
        },
        {
            "courseTitle": "Machine Learning",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Monika",
                "surname": "Schak"
            }
        },
        {
            "courseTitle": "Machine Learning",
            "courseType": "Übung",
            "parallelGroupValue": "3",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Alexander",
                "surname": "Gepperth"
            }
        },
        {
            "courseTitle": "Building Web and Mobile Apps",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Muneeb",
                "surname": "Noor"
            }
        },
        {
            "courseTitle": "Building Web and Mobile Apps",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Muneeb",
                "surname": "Noor"
            }
        },
        {
            "courseTitle": "Building Web and Mobile Apps",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Muneeb",
                "surname": "Noor"
            }
        },
        {
            "courseTitle": "Middleware",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Middleware",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Parallel Programming",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Parallel Programming",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Tim",
                "surname": "Süß"
            }
        },
        {
            "courseTitle": "Test Oriented Development",
            "courseType": "Vorlesung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Test Oriented Development",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Test Oriented Development",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Martine",
                "surname": "Herpers"
            }
        },
        {
            "courseTitle": "Global Distributed Software Development",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude51",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Global Distributed Software Development",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Global Distributed Software Development",
            "courseType": "Übung",
            "parallelGroupValue": "2",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Rainer",
                "surname": "Todtenhöfer"
            }
        },
        {
            "courseTitle": "Intercultural Communication",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
            "lecturer": {
                "degree": "",
                "firstname": "Agata Puspitasari",
                "surname": "Ranjabar"
            }
        },
        {
            "courseTitle": "Intercultural Communication",
            "courseType": "Übung",
            "parallelGroupValue": "1",
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
            "building": "gebäude46",
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
            "building": "gebäude46",
        },
        {
            "name": "Birgit Bomsdorf",
            "degree": "Prof. Dr.",
			"job": "Medieninformatik, Mensch-Computer-Interaktion",
            "time": "In der vorlesungsfreien Zeit nach Vereinbarung oder per Aushang in moodle (eLearning). ",
            "phone": "+49 661 9640-327",
            "mail": "birgit.bomsdorf(at)informatik.hs-fulda.de",
            "room": "46.328",
            "building": "gebäude46",
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
  
  
  //Fehlervermeidung bei leeren Objekten
  try {
    //Worum geht es
    switch(req.body.obj.typ){
      //Modul
      case '1':
        //Vorlesungsseite
	var adress = "http://ai-info.informatik.hs-fulda.de:443/htdocs/vorlesung.html";	    
	for (var i = 0; i < vlvz.module.length; i++) {
	try{
	  if(req.body.obj.gruppe == 0){
	    if (vlvz.module[i].courseTitle == req.body.obj.modul && vlvz.module[i].courseType == req.body.obj.art) { 
		try{
	    var image = (vlvz.module[i].lecturer.surname).toLowerCase();
	    adress += "?modname=" + vlvz.module[i].courseTitle + "&modroom=" + vlvz.module[i].room + "&modrythm=" + vlvz.module[i].rythm + "&modprof=" + vlvz.module[i].lecturer.firstname + " " + vlvz.module[i].lecturer.surname + "&modprofimg=" + image + ".jpg";
		} catcher(err){
		console.log("adresse erstellen");
		}
	    break;
	    }
	  }
	  else{
	    if (vlvz.module[i].courseTitle == req.body.obj.modul && vlvz.module[i].courseType == req.body.obj.art && vlvz.module[i].parallelGroupValue == req.body.obj.gruppe) {
	    var image = (vlvz.module[i].lecturer.surname).toLowerCase();
	    adress += "?modname=" + vlvz.module[i].courseTitle + "&modroom=" + vlvz.module[i].room + "&modrythm=" + vlvz.module[i].rythm + "&modprof=" + vlvz.module[i].lecturer.firstname + " " + vlvz.module[i].lecturer.surname + "&modprofimg=" + image + ".jpg";
            break;
	    }
	  }
	} catch(err){
    		console.log("gruppe versagt");
 		 }
	}
        break;
      default: console.log("Case typ doesn't work");
    }
    
  } catch(err) {
    console.log("no info");
  }
	
  CHANGE = "1";
  ADRESSE = adress;
  
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
