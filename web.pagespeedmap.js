var city;

function getLocation() {
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(getPosition);

    } else { // if not, kill it
        //alert("??");
        console.log("No Dice.");
        return;
    }
}

var countrycodeid = {
    "AF": "3",
    "AX": "15",
    "AL": "6",
    "DZ": "62",
    "AS": "11",
    "AD": "1",
    "AO": "8",
    "AI": "5",
    "AQ": "9",
    "AG": "4",
    "AR": "10",
    "AM": "7",
    "AW": "14",
    "AU": "13",
    "AT": "12",
    "AZ": "16",
    "BS": "32",
    "BH": "23",
    "BD": "19",
    "BB": "18",
    "BY": "36",
    "BE": "20",
    "BZ": "37",
    "BJ": "25",
    "BM": "27",
    "BT": "33",
    "BO": "29",
    "BQ": "30",
    "BA": "17",
    "BW": "35",
    "BV": "34",
    "BR": "31",
    "IO": "105",
    "BN": "28",
    "BG": "22",
    "BF": "21",
    "BI": "24",
    "KH": "116",
    "CM": "47",
    "CA": "38",
    "CV": "52",
    "KY": "123",
    "CF": "40",
    "TD": "214",
    "CL": "46",
    "CN": "48",
    "CX": "54",
    "CC": "39",
    "CO": "49",
    "KM": "118",
    "CG": "42",
    "CK": "45",
    "CR": "50",
    "CI": "44",
    "HR": "97",
    "CU": "51",
    "CW": "53",
    "CY": "55",
    "CZ": "56",
    "CD": "41",
    "DK": "59",
    "DJ": "58",
    "DM": "60",
    "DO": "61",
    "EC": "63",
    "EG": "65",
    "SV": "209",
    "GQ": "87",
    "ER": "67",
    "EE": "64",
    "ET": "69",
    "FK": "72",
    "FO": "74",
    "FJ": "71",
    "FI": "70",
    "FR": "75",
    "GF": "79",
    "PF": "174",
    "TF": "215",
    "GA": "76",
    "GM": "84",
    "GE": "78",
    "DE": "57",
    "GH": "80",
    "GI": "81",
    "GR": "88",
    "GL": "83",
    "GD": "77",
    "GP": "86",
    "GU": "91",
    "GT": "90",
    "GG": "82",
    "GN": "85",
    "GW": "92",
    "GY": "93",
    "HT": "98",
    "HM": "95",
    "VA": "236",
    "HN": "96",
    "HK": "94",
    "HU": "99",
    "IS": "108",
    "IN": "104",
    "ID": "100",
    "IR": "107",
    "IQ": "106",
    "IE": "101",
    "IM": "103",
    "IL": "102",
    "IT": "109",
    "JM": "111",
    "JP": "113",
    "JE": "110",
    "JO": "112",
    "KZ": "124",
    "KE": "114",
    "KI": "117",
    "KW": "122",
    "KG": "115",
    "LA": "125",
    "LV": "134",
    "LB": "126",
    "LS": "131",
    "LR": "130",
    "LY": "135",
    "LI": "128",
    "LT": "132",
    "LU": "133",
    "MO": "147",
    "MK": "143",
    "MG": "141",
    "MW": "155",
    "MY": "157",
    "MV": "154",
    "ML": "144",
    "MT": "152",
    "MH": "142",
    "MQ": "149",
    "MR": "150",
    "MU": "153",
    "YT": "246",
    "MX": "156",
    "FM": "73",
    "MD": "138",
    "MC": "137",
    "MN": "146",
    "ME": "139",
    "MS": "151",
    "MA": "136",
    "MZ": "158",
    "MM": "145",
    "NA": "159",
    "NR": "168",
    "NP": "167",
    "NL": "165",
    "NC": "160",
    "NZ": "170",
    "NI": "164",
    "NE": "161",
    "NG": "163",
    "NU": "169",
    "NF": "162",
    "MP": "148",
    "KP": "120",
    "NO": "166",
    "OM": "171",
    "PK": "177",
    "PW": "184",
    "PA": "172",
    "PG": "175",
    "PY": "185",
    "PE": "173",
    "PH": "176",
    "PN": "180",
    "PL": "178",
    "PT": "183",
    "PR": "181",
    "QA": "186",
    "RE": "187",
    "RO": "188",
    "RU": "190",
    "RW": "191",
    "BL": "26",
    "SH": "198",
    "KN": "119",
    "LC": "127",
    "MF": "140",
    "PM": "179",
    "VC": "237",
    "WS": "244",
    "SM": "203",
    "ST": "208",
    "SA": "192",
    "SN": "204",
    "RS": "189",
    "SC": "194",
    "SL": "202",
    "SG": "197",
    "SX": "210",
    "SK": "201",
    "SI": "199",
    "SB": "193",
    "SO": "205",
    "ZA": "247",
    "GS": "89",
    "KR": "121",
    "SS": "207",
    "ES": "68",
    "LK": "129",
    "PS": "182",
    "SD": "195",
    "SR": "206",
    "SJ": "200",
    "SZ": "212",
    "SE": "196",
    "CH": "43",
    "SY": "211",
    "TW": "227",
    "TJ": "218",
    "TZ": "228",
    "TH": "217",
    "TL": "223",
    "TG": "216",
    "TK": "219",
    "TO": "222",
    "TT": "225",
    "TN": "221",
    "TR": "224",
    "TM": "220",
    "TC": "213",
    "TV": "226",
    "UG": "230",
    "UA": "229",
    "AE": "2",
    "GB": "231",
    "US": "233",
    "UY": "234",
    "UM": "232",
    "UZ": "235",
    "VU": "242",
    "VE": "238",
    "VN": "241",
    "VG": "239",
    "VI": "240",
    "WF": "243",
    "EH": "66",
    "YE": "245",
    "ZM": "248",
    "ZW": "249"
};







var countrycodecall = {
    "AF": "+93",
    "AX": "+0",
    "AL": "+355",
    "DZ": "+213",
    "AS": "+0",
    "AD": "+376",
    "AO": "+244",
    "AI": "+0",
    "AQ": "+0",
    "AG": "+0",
    "AR": "+54",
    "AM": "+374",
    "AW": "+297",
    "AU": "+61",
    "AT": "+43",
    "AZ": "+994",
    "BS": "+0",
    "BH": "+973",
    "BD": "+880",
    "BB": "+0",
    "BY": "+375",
    "BE": "+32",
    "BZ": "+501",
    "BJ": "+229",
    "BM": "+0",
    "BT": "+975",
    "BO": "+591",
    "BQ": "+0",
    "BA": "+387",
    "BW": "+267",
    "BV": "+0",
    "BR": "+55",
    "IO": "+0",
    "BN": "+673",
    "BG": "+359",
    "BF": "+226",
    "BI": "+257",
    "KH": "+855",
    "CM": "+237",
    "CA": "+1",
    "CV": "+238",
    "KY": "+0",
    "CF": "+236",
    "TD": "+235",
    "CL": "+56",
    "CN": "+86",
    "CX": "+0",
    "CC": "+0",
    "CO": "+57",
    "KM": "+269",
    "CG": "+243",
    "CK": "+682",
    "CR": "+506",
    "CI": "+225",
    "HR": "+385",
    "CU": "+53",
    "CW": "+0",
    "CY": "+357",
    "CZ": "+420",
    "CD": "+242",
    "DK": "+45",
    "DJ": "+253",
    "DM": "+0",
    "DO": "+1",
    "EC": "+593",
    "EG": "+20",
    "SV": "+503",
    "GQ": "+240",
    "ER": "+291",
    "EE": "+372",
    "ET": "+251",
    "FK": "+0",
    "FO": "+298",
    "FJ": "+679",
    "FI": "+358",
    "FR": "+33",
    "GF": "+594",
    "PF": "+689",
    "TF": "+0",
    "GA": "+241",
    "GM": "+220",
    "GE": "+995",
    "DE": "+49",
    "GH": "+233",
    "GI": "+350",
    "GR": "+30",
    "GL": "+299",
    "GD": "+0",
    "GP": "+590",
    "GU": "+0",
    "GT": "+502",
    "GG": "+0",
    "GN": "+224",
    "GW": "+245",
    "GY": "+592",
    "HT": "+509",
    "HM": "+0",
    "VA": "+379",
    "HN": "+504",
    "HK": "+852",
    "HU": "+36",
    "IS": "+354",
    "IN": "+91",
    "ID": "+62",
    "IR": "+98",
    "IQ": "+964",
    "IE": "+353",
    "IM": "+0",
    "IL": "+972",
    "IT": "+39",
    "JM": "+0",
    "JP": "+81",
    "JE": "+0",
    "JO": "+962",
    "KZ": "+7",
    "KE": "+254",
    "KI": "+686",
    "KW": "+965",
    "KG": "+996",
    "LA": "+856",
    "LV": "+371",
    "LB": "+961",
    "LS": "+266",
    "LR": "+231",
    "LY": "+218",
    "LI": "+423",
    "LT": "+370",
    "LU": "+352",
    "MO": "+853",
    "MK": "+389",
    "MG": "+261",
    "MW": "+265",
    "MY": "+60",
    "MV": "+960",
    "ML": "+223",
    "MT": "+356",
    "MH": "+692",
    "MQ": "+596",
    "MR": "+222",
    "MU": "+230",
    "YT": "+262",
    "MX": "+52",
    "FM": "+691",
    "MD": "+373",
    "MC": "+377",
    "MN": "+976",
    "ME": "+382",
    "MS": "+0",
    "MA": "+212",
    "MZ": "+258",
    "MM": "+95",
    "NA": "+264",
    "NR": "+674",
    "NP": "+977",
    "NL": "+31",
    "NC": "+687",
    "NZ": "+64",
    "NI": "+505",
    "NE": "+227",
    "NG": "+234",
    "NU": "+683",
    "NF": "+0",
    "MP": "+0",
    "KP": "+850",
    "NO": "+47",
    "OM": "+968",
    "PK": "+92",
    "PW": "+680",
    "PA": "+507",
    "PG": "+675",
    "PY": "+595",
    "PE": "+51",
    "PH": "+63",
    "PN": "+0",
    "PL": "+48",
    "PT": "+351",
    "PR": "+0",
    "QA": "+974",
    "RE": "+262",
    "RO": "+40",
    "RU": "+7",
    "RW": "+250",
    "BL": "+0",
    "SH": "+0",
    "KN": "+0",
    "LC": "+0",
    "MF": "+0",
    "PM": "+508",
    "VC": "+0",
    "WS": "+685",
    "SM": "+378",
    "ST": "+239",
    "SA": "+966",
    "SN": "+221",
    "RS": "+381",
    "SC": "+248",
    "SL": "+232",
    "SG": "+65",
    "SX": "+0",
    "SK": "+421",
    "SI": "+386",
    "SB": "+677",
    "SO": "+252",
    "ZA": "+27",
    "GS": "+0",
    "KR": "+82",
    "SS": "+0",
    "ES": "+34",
    "LK": "+94",
    "PS": "+0",
    "SD": "+249",
    "SR": "+597",
    "SJ": "+0",
    "SZ": "+268",
    "SE": "+46",
    "CH": "+41",
    "SY": "+963",
    "TW": "+886",
    "TJ": "+992",
    "TZ": "+255",
    "TH": "+66",
    "TL": "+670",
    "TG": "+228",
    "TK": "+690",
    "TO": "+676",
    "TT": "+0",
    "TN": "+216",
    "TR": "+90",
    "TM": "+993",
    "TC": "+0",
    "TV": "+688",
    "UG": "+256",
    "UA": "+380",
    "AE": "+971",
    "GB": "+0",
    "US": "+1",
    "UY": "+598",
    "UM": "+0",
    "UZ": "+998",
    "VU": "+678",
    "VE": "+58",
    "VN": "+84",
    "VG": "+0",
    "VI": "+0",
    "WF": "+681",
    "EH": "+0",
    "YE": "+967",
    "ZM": "+260",
    "ZW": "+263"
};

function getPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude
    console.log("Position: ", lat, ", ", long);


    var req = new XMLHttpRequest();

    var url = "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + lat + "&lon=" + long + "&zoom=18";

    console.log(url);

    req.onload = function(e) {

        // returns an string response
        var theResponse = req.response;
        console.log(theResponse);

        // format the payload into an object...
        var formatted = JSON.parse(theResponse);
        console.log(formatted);
        // get the data you need
        var country = formatted.address.country;

        var countrycode = formatted.address.country_code;
        console.log(countrycode);






        var province = formatted.address.state;
        var zip = formatted.address.postcode;

        if (formatted.address.state_district) {
            var city = formatted.address.state_district;

        } else {
            if (formatted.address.state) {
                var city = formatted.address.state;
            } else {
                var city = formatted.address.city;
            }

        }


        $("input[name='city']").val(city);
        $("input[name='zip']").val(zip);
        var test1 = formatted.display_name;
        var test2 = "";
        //$("input[name='street']").val(test1);

        var valueaddr = test1.split(",");
        countnum = valueaddr.length;
        //country=valueaddr[count-1];
        var removecount = 0;
        if (formatted.address.state) {

            removecount++;
        }
        if (formatted.address.postcode) {

            removecount++;
        }

        if (formatted.address.state_district) {

            removecount++;
        }

        if (formatted.address.country != "中国") {


            for (var i = 0; i < countnum - removecount - 2; i++) {
                test2 = test2 + valueaddr[i] + ",";
            }


            test2 = test2 + valueaddr[countnum - removecount - 2];

        } else {

            for (var i = 0; i < countnum - removecount - 2; i++) {
                test2 = test2 + valueaddr[countnum - removecount - 2 - i];
            }


            test2 = test2 + valueaddr[0];


        }

        $("input[name='street']").val(test2);


        var countrycode_id = countrycodeid[countrycode.toUpperCase()];


        if (countrycode_id != $("#country_id").val()) {
            $("#state_id").empty();
            $("#country_id").val(countrycode_id);
            if ($("input[name='phone']").val() == '') {
                $("input[name='phone']").val(countrycodecall[countrycode.toUpperCase()]);


            }
        } else {
            if ($("input[name='phone']").val() == '') {
                $("input[name='phone']").val(countrycodecall[countrycode.toUpperCase()]);


            }



        }


    }

    // open connection, then send query	
    req.open("GET", url);
    req.send();
}


$(document).ready(function() {

    setTimeout(function() {
        getLocation();
    }, 88);



});