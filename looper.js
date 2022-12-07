function parse_gps( input ) {

    if( input.indexOf( 'N' ) == -1 && input.indexOf( 'S' ) == -1 &&
        input.indexOf( 'W' ) == -1 && input.indexOf( 'E' ) == -1 ) {
        return input.split(',');
    }
    
    var parts = input.split(/[°'"]+/).join(' ').split(/[^\w\S]+/);
    
    var directions = [];
    var coords = [];
    var dd = 0;
    var pow = 0;
    
    for( i in parts ) {
    
        // we end on a direction
        if( isNaN( parts[i] ) ) {
    
            var _float = parseFloat( parts[i] );
    
            var direction = parts[i];
    
            if( !isNaN(_float ) ) {
                dd += ( _float / Math.pow( 60, pow++ ) );
                direction = parts[i].replace( _float, '' );
            }
    
            direction = direction[0];
    
            if( direction == 'S' || direction == 'W' )
                dd *= -1;
    
            directions[ directions.length ] = direction;
    
            coords[ coords.length ] = dd;
            dd = pow = 0;
    
        } else {
    
            dd += ( parseFloat(parts[i]) / Math.pow( 60, pow++ ) );
    
        }
    
    }
    
    if( directions[0] == 'W' || directions[0] == 'E' ) {
        var tmp = coords[0];
        coords[0] = coords[1];
        coords[1] = tmp;
    }
    
    //console.log('Tranformed Coordinate lat lng is : ' + coords);
    return coords;
    
}


var agency_points = [
    {
      "ID": 1,
      "AGENT BUSINESS NAME": "HAYS BELIEVE ENTERPRISE",
      "AGENT USERNAME": "HBESUB20301",
      "ADDRESS": "BOX KF 520",
      "Location": "",
      "GPS COORDINATES": "6.1151,-0.2621",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2,
      "AGENT BUSINESS NAME": "KENANIAH CONSULT SERVICES",
      "AGENT USERNAME": "KCSSUB90101",
      "ADDRESS": "UNNUMBERED CONTAINER OPPOSITE CBG MAIN BOLGA",
      "Location": "",
      "GPS COORDINATES": "10°47'10.5'N 0°51'09.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3,
      "AGENT BUSINESS NAME": "KENANIAH CONSULT SERVICES",
      "AGENT USERNAME": "KCSSUB90102",
      "ADDRESS": "UNNUMBERED CONTAINER OPPOSITE CBG MAIN BOLGA",
      "Location": "",
      "GPS COORDINATES": "10°47'10.5'N 0°51'09.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 4,
      "AGENT BUSINESS NAME": "KENANIAH CONSULT SERVICES",
      "AGENT USERNAME": "KCSSUB90103",
      "ADDRESS": "UNNUMBERED CONTAINER OPPOSITE CBG MAIN",
      "Location": "",
      "GPS COORDINATES": "10°47'10.5'N 0°51'09.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 5,
      "AGENT BUSINESS NAME": "ANTWI F-VENTURES",
      "AGENT USERNAME": "AFVSUB20101",
      "ADDRESS": "BOX 2570-KOFORIDUA",
      "Location": "",
      "GPS COORDINATES": "6.090989,-0.261085",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 6,
      "AGENT BUSINESS NAME": "HALAAL BOLGA INVESTMENT",
      "AGENT USERNAME": "HBI90101",
      "ADDRESS": "PLOT 16 BLK 4 DAPORETINDONGO BOLGATANGA",
      "Location": "",
      "GPS COORDINATES": "10°47'12.5'N 0°50'52.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 7,
      "AGENT BUSINESS NAME": "BAWA SONS ENTERPRISE",
      "AGENT USERNAME": "BAS90101",
      "ADDRESS": "UNNUMBERED CONTAINER OPPOSITE VRA BOLGA",
      "Location": "",
      "GPS COORDINATES": "10°48'09.0'N 0°51'50.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 8,
      "AGENT BUSINESS NAME": "CCMI ENTERPRISE",
      "AGENT USERNAME": "CIM90101",
      "ADDRESS": "UNNUMBERED CONTAINER OPPOSITE URA RADIO BOLGATANGA",
      "Location": "",
      "GPS COORDINATES": "10°48'08.8'N 0°51'51.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 9,
      "AGENT BUSINESS NAME": "TO GOD ULTIMATE ENTERPRISE ",
      "AGENT USERNAME": "TGUSUB80102",
      "ADDRESS": "WAPAANI WA",
      "Location": "",
      "GPS COORDINATES": "10°04'09.0'N2°30'11.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 10,
      "AGENT BUSINESS NAME": "REZO CASH ENTERPRISE ",
      "AGENT USERNAME": "RCESUB40601",
      "ADDRESS": "EFFIAKUMA NO. 9",
      "Location": "",
      "GPS COORDINATES": "4.929022, -1.764038",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 11,
      "AGENT BUSINESS NAME": "YEB-THOM VENTURES",
      "AGENT USERNAME": "YTV20101",
      "ADDRESS": "AM/26 NKAWKAW AMANFROM",
      "Location": "",
      "GPS COORDINATES": "6°34'07.7 N 0°47'52.3''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 12,
      "AGENT BUSINESS NAME": "ASAN-TEERIC VENTURES",
      "AGENT USERNAME": "ATV20101",
      "ADDRESS": "AF 36 Amanfrom Nkawkaw",
      "Location": "",
      "GPS COORDINATES": "6°34'03.2''N 0°47'48.6''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 13,
      "AGENT BUSINESS NAME": "Paul Opoku 1537 Ventures",
      "AGENT USERNAME": "PAV61201",
      "ADDRESS": "Unnumbered Shop Maakro",
      "Location": "",
      "GPS COORDINATES": "6°43'43.5'N 1°37'55.6W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 14,
      "AGENT BUSINESS NAME": "FRANKIE MOBILE PHONES",
      "AGENT USERNAME": "FMP60301",
      "ADDRESS": "Maakro opposite shell filling station ",
      "Location": "",
      "GPS COORDINATES": "6°43'47.8N 1°37'59.9W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 15,
      "AGENT BUSINESS NAME": "SAAB-DEE VENTURES ",
      "AGENT USERNAME": "SDV30201",
      "ADDRESS": "ADISADEL ",
      "Location": "",
      "GPS COORDINATES": "5'06'56.2'N1'15' 48.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 16,
      "AGENT BUSINESS NAME": "P TEKUNI VENTURES ",
      "AGENT USERNAME": "PTV60401",
      "ADDRESS": "Atonsu, unnumbered container",
      "Location": "",
      "GPS COORDINATES": "6.39'21.5'N1°35'30.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 17,
      "AGENT BUSINESS NAME": "Osikani Kaakyire Ventures",
      "AGENT USERNAME": "OKV60801",
      "ADDRESS": "Santasi",
      "Location": "",
      "GPS COORDINATES": "6°39'28•5''N1°38'32•7W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 18,
      "AGENT BUSINESS NAME": "PEN 61202.00",
      "AGENT USERNAME": "Pershigal Enterprise ",
      "ADDRESS": "Maakro Opposite Goil filling station",
      "Location": "",
      "GPS COORDINATES": "6°43'49.0'N 1°37'59.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 19,
      "AGENT BUSINESS NAME": "WME60801",
      "AGENT USERNAME": "Weezymissy Enterprise",
      "ADDRESS": "Santasi",
      "Location": "",
      "GPS COORDINATES": "6°39'31•1''N1°38'32•''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 20,
      "AGENT BUSINESS NAME": "FFRED OWUSU BEMPAH ENTERPRISE ",
      "AGENT USERNAME": "FBE61201",
      "ADDRESS": "Maakro Opposite  Techiman Station",
      "Location": "",
      "GPS COORDINATES": "6°43'51.5'N 1°38'03.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 21,
      "AGENT BUSINESS NAME": "OWUSCO F VENTURES",
      "AGENT USERNAME": "OFS20301",
      "ADDRESS": "DOBORO, OLD BARRIER, NSAWAM",
      "Location": "",
      "GPS COORDINATES": "5.7816374, -0.333555",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 22,
      "AGENT BUSINESS NAME": "Azay Azay Ventures",
      "AGENT USERNAME": "AAV60801",
      "ADDRESS": "Santasi",
      "Location": "",
      "GPS COORDINATES": "6°39'25.4''N1°38'33.2''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 23,
      "AGENT BUSINESS NAME": "ENOCH AGU VENTURES",
      "AGENT USERNAME": "EAG61001",
      "ADDRESS": "Maakro Techiman Station",
      "Location": "",
      "GPS COORDINATES": "6°43'55.1'N 1°38'03.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 24,
      "AGENT BUSINESS NAME": "TRANSCARD VENTURES ",
      "AGENT USERNAME": "TVE01401",
      "ADDRESS": "ACCRA RING ROAD, NEAR GRA",
      "Location": "",
      "GPS COORDINATES": "GA-072-0107",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 25,
      "AGENT BUSINESS NAME": "AB BASH COMPANY LIMITED ",
      "AGENT USERNAME": "ABC61201",
      "ADDRESS": "Unnumbered Shop Close to Abusuakruwa Junction ",
      "Location": "",
      "GPS COORDINATES": "6°44'00.1'N   1°38'10.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 26,
      "AGENT BUSINESS NAME": "INNOVATIVE SOLUTION",
      "AGENT USERNAME": "ISO61101",
      "ADDRESS": "ASAFO",
      "Location": "",
      "GPS COORDINATES": "6°41'19.6'N 1°36'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 27,
      "AGENT BUSINESS NAME": "Mummy Dot.Com",
      "AGENT USERNAME": "MDC 60801.00",
      "ADDRESS": "Santasi",
      "Location": "",
      "GPS COORDINATES": "6°39'24.8'' N 1°38'31.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 28,
      "AGENT BUSINESS NAME": "Harimarfo Ventures",
      "AGENT USERNAME": "HAR60501",
      "ADDRESS": "Santasi",
      "Location": "",
      "GPS COORDINATES": "6°39'22.1''N°38'27.4''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 29,
      "AGENT BUSINESS NAME": "YAKEED 407 ENTERPRISE",
      "AGENT USERNAME": "YAE61201",
      "ADDRESS": "Abusuakruwa Junction",
      "Location": "",
      "GPS COORDINATES": "6°44'02.6'N 1°38'12.2'",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 30,
      "AGENT BUSINESS NAME": "CHARLES A AFFUL ENTERPRISE ",
      "AGENT USERNAME": "CAA60101",
      "ADDRESS": "Stadium sobolo",
      "Location": "",
      "GPS COORDINATES": "6°40'55.4'N 1°36'01.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 31,
      "AGENT BUSINESS NAME": "04 EMB enterprise",
      "AGENT USERNAME": "OEE60401",
      "ADDRESS": "UNNUMBERED CONTAINER,  ATONSU MONACO ",
      "Location": "",
      "GPS COORDINATES": "6°39'18.4'N1°35'24.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 32,
      "AGENT BUSINESS NAME": "CARLOS B. BONNIE ENTERPRISE ",
      "AGENT USERNAME": "CBB61201",
      "ADDRESS": "Breman opposite S.D.A School",
      "Location": "",
      "GPS COORDINATES": "6°44'07.7'N   1°38'12.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 33,
      "AGENT BUSINESS NAME": "JAFIS PLUS VENTURES ",
      "AGENT USERNAME": "JPV60401",
      "ADDRESS": "ATONSU MONACCO JUNCTION, OPPOSITE MTN",
      "Location": "",
      "GPS COORDINATES": "6°39'08.5°N1°35'25.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 34,
      "AGENT BUSINESS NAME": "AS MENLAH VENTURES ",
      "AGENT USERNAME": "ASV60401",
      "ADDRESS": "AGOGO MARKET INSIDE",
      "Location": "",
      "GPS COORDINATES": "6°39'01.3'N1°35'17.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 35,
      "AGENT BUSINESS NAME": "ASOKWAH 06 VENTURES",
      "AGENT USERNAME": "AVE60402",
      "ADDRESS": "INSIDE THE MARKET",
      "Location": "",
      "GPS COORDINATES": "6°39'04.4'N1°35'14.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 36,
      "AGENT BUSINESS NAME": "PSALM 141 ENTERPRISE",
      "AGENT USERNAME": "PEN 60101.00",
      "ADDRESS": "ASOKWA",
      "Location": "",
      "GPS COORDINATES": "6°40'42.5'N 1°35'55.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 37,
      "AGENT BUSINESS NAME": "IBRAHIM ALBERT ENTERPRISE",
      "AGENT USERNAME": "IAESUB60501",
      "ADDRESS": "AHODWO",
      "Location": "",
      "GPS COORDINATES": "6'39''18.7 N 1'37''08.5W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 38,
      "AGENT BUSINESS NAME": "Obaatanpa Barbering shop",
      "AGENT USERNAME": "OBP60101",
      "ADDRESS": "OFORIKROM",
      "Location": "",
      "GPS COORDINATES": "6°40'55.6'N 1°35'30.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 39,
      "AGENT BUSINESS NAME": "EDDEI STARPOINT VENTURES",
      "AGENT USERNAME": "ESVSUB20301",
      "ADDRESS": "DOBRO, NSAWAM",
      "Location": "OOPPOSITE BLUE SKIES, ",
      "GPS COORDINATES": "5.7990167, -0.35272004",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 40,
      "AGENT BUSINESS NAME": "RICH N BUSINESS ENTERPRISE",
      "AGENT USERNAME": "RNB61001",
      "ADDRESS": "BUOKROM",
      "Location": "BUOKROM MAGAZINE",
      "GPS COORDINATES": "6°43'05.5'N1°35'45.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 41,
      "AGENT BUSINESS NAME": "AISSAMAS ENTERPRISE",
      "AGENT USERNAME": "AIS00501",
      "ADDRESS": "ABOSSEY OKAI",
      "Location": "NEAR GREAT LAMPTEY MILLS SCHOOL",
      "GPS COORDINATES": "5.5566875, -0.2367344",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 42,
      "AGENT BUSINESS NAME": "OBATANPA LASISI ENTERPRISE",
      "AGENT USERNAME": "OLE19101",
      "ADDRESS": "GCB STREET DAMBAI",
      "Location": "OPPOSITE GCB BANK",
      "GPS COORDINATES": "8.0699830, 0.1777430",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 43,
      "AGENT BUSINESS NAME": "SHOT MARKETING ENT ",
      "AGENT USERNAME": "SMASUB12301",
      "ADDRESS": "LATERBIOKORSHIE",
      "Location": "NEAR GHANA WATER COMPANY MAMPROBI DISTRICT OFFICE ",
      "GPS COORDINATES": "5.5557125, -0.2404219",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 44,
      "AGENT BUSINESS NAME": "AMADOR TRADING AND LOGISTICS ",
      "AGENT USERNAME": "ATL40601",
      "ADDRESS": "DABOASE- NEW STATION ",
      "Location": "NEAR THE LOWER PRA RURAL BANK ",
      "GPS COORDINATES": "5.136087,-1.657208",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 45,
      "AGENT BUSINESS NAME": "RICHARD NYAMEWOTUM 03 VENTURES",
      "AGENT USERNAME": "RNV40601",
      "ADDRESS": "EFFIA",
      "Location": "NEAR SAMMAR LODGE ",
      "GPS COORDINATES": "4.931339,-1.762911",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 46,
      "AGENT BUSINESS NAME": "FOXX TRADING AND SUPPLIES ",
      "AGENT USERNAME": "FTS40601",
      "ADDRESS": "MARKET CIRCLE ",
      "Location": "NEAR THE MELCOM SHOP ",
      "GPS COORDINATES": "4.896595,-1.761004",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 47,
      "AGENT BUSINESS NAME": "AMAKWAM ENTERPRISE ",
      "AGENT USERNAME": "AEN40602",
      "ADDRESS": "KANSAWORODO ",
      "Location": "NEAR THE OLD STATION ",
      "GPS COORDINATES": "4.952819,-1.763094",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 48,
      "AGENT BUSINESS NAME": "DEBORAH NKRUMAH VENTURES ",
      "AGENT USERNAME": "DNV40601",
      "ADDRESS": "EFFIAKUMA NO. 9",
      "Location": "NEAR SIR CHARLES CHURCH ",
      "GPS COORDINATES": "4.927746, -1.763646",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 49,
      "AGENT BUSINESS NAME": "Jenni k ventures ",
      "AGENT USERNAME": "JKV05001",
      "ADDRESS": "Unnumbered house at Tema comm 25",
      "Location": "Next to first Atlantic bank comm 25",
      "GPS COORDINATES": "5°44'14.7'N 0°01'59.8'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 50,
      "AGENT BUSINESS NAME": "DE-NESTER VENTURES ",
      "AGENT USERNAME": "DEN12301",
      "ADDRESS": "MAMPROBI   SEMPE STERET ",
      "Location": "BESIDE NOVICK PHARMACY ",
      "GPS COORDINATES": "5.5349625, -0.2377344",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 51,
      "AGENT BUSINESS NAME": "ELIZA SHADES VENTURES",
      "AGENT USERNAME": "ESV61201",
      "ADDRESS": "Suame Magazine ",
      "Location": "Behind Multi Credit Savings and Loans",
      "GPS COORDINATES": "6°43'09.1'N  1°3748.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 52,
      "AGENT BUSINESS NAME": "AASHA WEST ENTERPRISE ",
      "AGENT USERNAME": "AWE40601",
      "ADDRESS": "APOWA",
      "Location": "NEAR THE ST MARY'S BOYS SHS ",
      "GPS COORDINATES": "4.895296,-1.814290",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 53,
      "AGENT BUSINESS NAME": "AASTHA WEST ENTERPRISE ",
      "AGENT USERNAME": "AWESUB40602",
      "ADDRESS": "APOWA",
      "Location": "NEAR GHACEM FACTORY ",
      "GPS COORDINATES": "4.891977,-1.822618",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 54,
      "AGENT BUSINESS NAME": "RUZAY BEE ENTERPRISE ",
      "AGENT USERNAME": "RBE61201",
      "ADDRESS": "Suame Magazine",
      "Location": "Close to B. Adams Shop",
      "GPS COORDINATES": "6°43'25.6'N 1°37'51.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 55,
      "AGENT BUSINESS NAME": "EXLOLA JNR. VENTURES",
      "AGENT USERNAME": "EJV19101",
      "ADDRESS": "LAKESIDE DAMBAI",
      "Location": "NEAR LORRY STATION",
      "GPS COORDINATES": "8.0750480, 0.1765180",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 56,
      "AGENT BUSINESS NAME": "PSALM 23",
      "AGENT USERNAME": "PBVSUB03801",
      "ADDRESS": "Unnumbered shop at abeka lapaz",
      "Location": "Near Fidelity bank ",
      "GPS COORDINATES": "5.606173,-0.246763",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 57,
      "AGENT BUSINESS NAME": "OBAA CONNYS ENTERPRISE",
      "AGENT USERNAME": "OCE61201",
      "ADDRESS": "Suame Magazine",
      "Location": "Near Tarkwa junction ",
      "GPS COORDINATES": "6°43'25.6'N 1°37'51.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 58,
      "AGENT BUSINESS NAME": "CHRIS B. VENTURES",
      "AGENT USERNAME": "CBV61201",
      "ADDRESS": "Tarkwa Maakro",
      "Location": "Close to Former Akad Micro Finance",
      "GPS COORDINATES": "6°43'44.5'N 1°37'51.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 59,
      "AGENT BUSINESS NAME": "Rockwell pharmacy limited ",
      "AGENT USERNAME": "RWP05001",
      "ADDRESS": "Unnumbered house at Tema comm 25",
      "Location": "Near fidelity bank comm 25 branch",
      "GPS COORDINATES": "5°43'51.3'N 0°01'40.0'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 60,
      "AGENT BUSINESS NAME": "ANB GEORGE VENTURES ",
      "AGENT USERNAME": "AGVSUB20101",
      "ADDRESS": "C 123 NKAWKAW",
      "Location": "OPPOSITE FIDELITY BANK NKAWKAW",
      "GPS COORDINATES": "6°33'07.2' N 0°45'53.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 61,
      "AGENT BUSINESS NAME": "FIRST GRADE PHONES AND BUSINESS SERVICES ",
      "AGENT USERNAME": "FGP20101",
      "ADDRESS": "NJ 38 NKAWKAW CENTRAL",
      "Location": "NEAR ABSA BANK",
      "GPS COORDINATES": "6°33'04.7' N 0°45'54.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 62,
      "AGENT BUSINESS NAME": "BAGYEI ENT",
      "AGENT USERNAME": "BAE20101",
      "ADDRESS": "NI 1 NKAWKAW CENTRAL",
      "Location": "ADJACENT KWAHU PRASO RURAL ",
      "GPS COORDINATES": "6°33'10.1' N 0°45'51.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 63,
      "AGENT BUSINESS NAME": "NICS IT AND BUSINESS SOLUTIONS LIMITED",
      "AGENT USERNAME": "NIB61002",
      "ADDRESS": "DICHEMSO",
      "Location": "OPPOSITE GOIL FILLING STATION",
      "GPS COORDINATES": "6°42'32.6'N1°36'03.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 64,
      "AGENT BUSINESS NAME": "BIG OSBRIO VENTURES",
      "AGENT USERNAME": "BOV 60701.00",
      "ADDRESS": "DICHEMSO",
      "Location": "ADJACENT CHURCH OF GOD HEALTH SERVICES",
      "GPS COORDINATES": "6°42'38.5''N1°36'08.1W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 65,
      "AGENT BUSINESS NAME": "NYAME NANIM ENT",
      "AGENT USERNAME": "NNESUB20101",
      "ADDRESS": "NI 975 NKAWKAW CENTRAL",
      "Location": "HARBOUR BASE NKAWKAW",
      "GPS COORDINATES": "6°33'03.2' N 0°45'53.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 66,
      "AGENT BUSINESS NAME": "Regina-D Enterprise",
      "AGENT USERNAME": "RDE60701",
      "ADDRESS": "Dichemso",
      "Location": "Adjacent A2 Company Limited",
      "GPS COORDINATES": "6°42'38.5''N1°36'08.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 67,
      "AGENT BUSINESS NAME": "SHIEFFAMAA ENT",
      "AGENT USERNAME": "SHESUB20101",
      "ADDRESS": "NJ 109 NKAWKAW CENTRAL",
      "Location": "OPP. OLD TAXI STATION ,NKAWKAW CENTRAL",
      "GPS COORDINATES": "6°33'04.2' N 0°45'55.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 68,
      "AGENT BUSINESS NAME": "Mohajara Ventures",
      "AGENT USERNAME": "MOV20301",
      "ADDRESS": "Store no 34 Takoradi station",
      "Location": "Takoradi station",
      "GPS COORDINATES": "6*05'12.8'' N 0.15'17.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 69,
      "AGENT BUSINESS NAME": "WISE RUT VENTURES",
      "AGENT USERNAME": "WRV19102",
      "ADDRESS": "ZONGO, DAMBAI",
      "Location": "NEAR GCB BANK",
      "GPS COORDINATES": "8.0698100, 0.1783380",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 70,
      "AGENT BUSINESS NAME": "Harimarfo Ventures",
      "AGENT USERNAME": "HAR60501",
      "ADDRESS": "SANTASI ",
      "Location": "NEAR THE COMMUNITY CENTRE ",
      "GPS COORDINATES": "6°39'22.1'N1°38'27.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 71,
      "AGENT BUSINESS NAME": "AA-MIMSHACK",
      "AGENT USERNAME": "AAM60802",
      "ADDRESS": "SANTASI ",
      "Location": "Opposite Beauty Queen Hotel ",
      "GPS COORDINATES": "6°39'04.5'N1°38'34.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 72,
      "AGENT BUSINESS NAME": "Eddie Starpoint ventures",
      "AGENT USERNAME": "ESVSUB20302",
      "ADDRESS": ", Doboro, Nsawam",
      "Location": "Near Old station",
      "GPS COORDINATES": "5.777266, -0.352240",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 73,
      "AGENT BUSINESS NAME": "Angel Opoku Ventures ",
      "AGENT USERNAME": "ANO61101",
      "ADDRESS": "Santasi Anyinam ",
      "Location": "Opposite  AP Filling Station ",
      "GPS COORDINATES": "6°38'10.3'N1°38'44.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 74,
      "AGENT BUSINESS NAME": "JB Business Solutions ",
      "AGENT USERNAME": "JBSSUB60502",
      "ADDRESS": "Santasi Anyinam",
      "Location": "Close AP Filling Station ",
      "GPS COORDINATES": "6°38'08.0'N1°38'24.4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 75,
      "AGENT BUSINESS NAME": "Opheliasarp Enterprise ",
      "AGENT USERNAME": "OEN60801",
      "ADDRESS": "Santasi Anyinam",
      "Location": "Close to Nagies Angel School",
      "GPS COORDINATES": "6°38'29.7'N1°38'N1°38'15.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 76,
      "AGENT BUSINESS NAME": "MAC MULLAS PREMIUM",
      "AGENT USERNAME": "MMP20301",
      "ADDRESS": "DOBORO, BUS STOP, NSAWAM",
      "Location": "Near Doboro Taxi rank",
      "GPS COORDINATES": "5.783350, -0.3350820",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 77,
      "AGENT BUSINESS NAME": "B.M 50 Enterprise",
      "AGENT USERNAME": "BME61002",
      "ADDRESS": "KROFROM",
      "Location": "OPPOSITE KROFROM MARKET",
      "GPS COORDINATES": "6°42'38.5'N1°36'08.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 78,
      "AGENT BUSINESS NAME": "ACC00301",
      "AGENT USERNAME": "ABK CASH COW INVESTMENT ",
      "ADDRESS": "ACCRA CMB, ",
      "Location": "NEAR NIB",
      "GPS COORDINATES": "GA -141-8344",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 79,
      "AGENT BUSINESS NAME": "ACC00301",
      "AGENT USERNAME": "CHRISTOPHER ANAWEY ENTEERPRISE ",
      "ADDRESS": "ADABRAKA ",
      "Location": "NEAR FIDELITY BANK ",
      "GPS COORDINATES": "GA-075-0100",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 80,
      "AGENT BUSINESS NAME": "Lewi Fosu Enterprise",
      "AGENT USERNAME": "LFE61001",
      "ADDRESS": "Suame",
      "Location": "Near Mosque",
      "GPS COORDINATES": "6°43'55.1'N1°38'03.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 81,
      "AGENT BUSINESS NAME": "SABAOTHWYSE VENTURES ",
      "AGENT USERNAME": "SAB01401",
      "ADDRESS": "RING ROAD",
      "Location": "CLOSE TO MTN OFFICE ",
      "GPS COORDINATES": "GA-072-2002",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 82,
      "AGENT BUSINESS NAME": "Sharifa Abdul Rahman Enterprise",
      "AGENT USERNAME": "SAR 61001.00",
      "ADDRESS": "Old Suame",
      "Location": "Near Old Suame Mosque",
      "GPS COORDINATES": "6°42'59.2'N1°37'51.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 83,
      "AGENT BUSINESS NAME": "EASY ACCESS SUSU SERVICES ",
      "AGENT USERNAME": "EAS02401",
      "ADDRESS": "ADABRAKA ",
      "Location": "OPPOSITE TRANS AFRICAN COLLEGE ",
      "GPS COORDINATES": "GA-073-6922",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 84,
      "AGENT BUSINESS NAME": "B.A IBRAHIM ENTERPRISE",
      "AGENT USERNAME": "BIE61001",
      "ADDRESS": "OLD SUAME",
      "Location": "NEAR 2ND MELCOM",
      "GPS COORDINATES": "6°42'59.2'N1°37'51'.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 85,
      "AGENT BUSINESS NAME": "KVE02401",
      "AGENT USERNAME": "KB VISION ENTERPRISE ",
      "ADDRESS": "ADABRAKA ",
      "Location": "NEAR FIDELITY BANK ",
      "GPS COORDINATES": "GA-075-7741",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 86,
      "AGENT BUSINESS NAME": "BSB01401",
      "AGENT USERNAME": "BABS-TECH SOLUTIONS BUSINESSES ",
      "ADDRESS": "CIRCLE ",
      "Location": "BEHIND CALL BANK",
      "GPS COORDINATES": "GA-101-3212",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 87,
      "AGENT BUSINESS NAME": "F-NET ENTERPRISE",
      "AGENT USERNAME": "FEN60701",
      "ADDRESS": "AIRPORT ROUNDABOUT",
      "Location": "OPPOSITE JOFEL RESTAURANT AND CATERING SERVICES",
      "GPS COORDINATES": "6°42'38.5'N1°36'08.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 88,
      "AGENT BUSINESS NAME": "YAKWAKOF VENTURES",
      "AGENT USERNAME": "YAK61001",
      "ADDRESS": "SUAME ",
      "Location": "IN FRONT OF SUAME POLICE STATION",
      "GPS COORDINATES": "6°42'59.2'N1°37'51.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 89,
      "AGENT BUSINESS NAME": "S-Ololo Ventures",
      "AGENT USERNAME": "SOV61001",
      "ADDRESS": "DICHEMSO",
      "Location": "OPPOSITE PARADISE GAS FILLING STATION",
      "GPS COORDINATES": "6°42'53.3'N1°36'57.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 90,
      "AGENT BUSINESS NAME": "Sikalolo Ventures",
      "AGENT USERNAME": "SLV20301",
      "ADDRESS": "Medie",
      "Location": "Near Medie bus stop.",
      "GPS COORDINATES": "5.7619740, -0.3259800",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 91,
      "AGENT BUSINESS NAME": "Appiah Mends Ventures",
      "AGENT USERNAME": "AMV20301",
      "ADDRESS": "Fire Service, Nsawam",
      "Location": "Near Passion Tv",
      "GPS COORDINATES": "5.8046610, -0.3441290",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 92,
      "AGENT BUSINESS NAME": "BAAH -TEZ VENTURES",
      "AGENT USERNAME": "BTV20301",
      "ADDRESS": "N/A",
      "Location": "OPPOSITE THE CHIEF PALACE TUTU",
      "GPS COORDINATES": "5.886492-0.128309",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 93,
      "AGENT BUSINESS NAME": "OFFMART ENTERPRISE",
      "AGENT USERNAME": "OHM20301",
      "ADDRESS": "P.O BOX 123 TINKONG",
      "Location": "NEAR TINKONG TAXI RANK ",
      "GPS COORDINATES": "6.0936-0.2582",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 94,
      "AGENT BUSINESS NAME": "ANKRAHFAM VENTURES",
      "AGENT USERNAME": "ANK20301",
      "ADDRESS": "P.O BOX 234 MAMPONG",
      "Location": "OPPOSITE MEDIFAM",
      "GPS COORDINATES": "6.0936-0.2582",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 95,
      "AGENT BUSINESS NAME": "Gracearc Ventures",
      "AGENT USERNAME": "GRA20301",
      "ADDRESS": "Nsawam SDA junction",
      "Location": "Near Hospital  junction",
      "GPS COORDINATES": "5.8082450, -0.3471840",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 96,
      "AGENT BUSINESS NAME": "MINAL HAQQ ENTERPRISE",
      "AGENT USERNAME": "MHE20301",
      "ADDRESS": "NA",
      "Location": "OPPOSITE ECG OFFICE MAMPONG",
      "GPS COORDINATES": "5.872324-0.128499",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 97,
      "AGENT BUSINESS NAME": "SETH QUAINOO ENTERPRISE",
      "AGENT USERNAME": "SMQ20301",
      "ADDRESS": "NA",
      "Location": "OPPOSITE PRESBY CHURCH",
      "GPS COORDINATES": "5.945153-02914492",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 98,
      "AGENT BUSINESS NAME": "IGNEST VENTURES ",
      "AGENT USERNAME": "IVE01001",
      "ADDRESS": "OFF ADA JUNCTION-TESHIE TSUIBLEOO ",
      "Location": "BEHIND SAM JOLLY HOTEL",
      "GPS COORDINATES": "5'35'56.3'N 0'06'37.7W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 99,
      "AGENT BUSINESS NAME": "G-UNIT ENTERPRISE",
      "AGENT USERNAME": "GUNSUB20301",
      "ADDRESS": "P.O BOX 33 SOMANYA",
      "Location": "NEAR TOTAL ENERGY STATION",
      "GPS COORDINATES": "6.106253-0.012380",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 100,
      "AGENT BUSINESS NAME": "EXPERIENCEGOC VENTURES",
      "AGENT USERNAME": "EVE03801",
      "ADDRESS": "Wofapaye streer, Nsawam",
      "Location": "Near 3G Ventures",
      "GPS COORDINATES": "5.8112210, -0.3484760",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 101,
      "AGENT BUSINESS NAME": "PRINCOLLEN ENTERPRISE ",
      "AGENT USERNAME": "PENSUB04401",
      "ADDRESS": "Kasoa New market road",
      "Location": "Near Benab Oil",
      "GPS COORDINATES": "5.54932°N,0.435210°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 102,
      "AGENT BUSINESS NAME": "MAGBLET CLASSIC VENTURES",
      "AGENT USERNAME": "MCV20301",
      "ADDRESS": "NA",
      "Location": "OPPOSITE TINKONG MARKET",
      "GPS COORDINATES": "5.949421-0212869",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 103,
      "AGENT BUSINESS NAME": "KHAL DE EST VENTURES ",
      "AGENT USERNAME": "KDESUB05101",
      "ADDRESS": "UNNUMBERED HSE AT MALLAM, OPPOSITE THE MOSQUE",
      "Location": "OPPOSITE THE MOSQUE",
      "GPS COORDINATES": "5.5730148,-0.2869089",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 104,
      "AGENT BUSINESS NAME": "HAYS BELIEVE ENTERPRISE",
      "AGENT USERNAME": "HDESUB20302",
      "ADDRESS": "NA",
      "Location": "OPPOSITE ASOKORE COMMUNITY CENTER",
      "GPS COORDINATES": "6.115288-0.263394",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 105,
      "AGENT BUSINESS NAME": "PROMIDAG BUSINESS ENTERPRISE ",
      "AGENT USERNAME": "PBE05101",
      "ADDRESS": "UNNUMBERED HOUSE AT MALLAM, NEAR PHARMATRUST PHARMACY ",
      "Location": "NEAR PHARMATRUST PHARMACY ",
      "GPS COORDINATES": "5.5715359,-0.2860600",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 106,
      "AGENT BUSINESS NAME": "AMOFMAY VENTURES ",
      "AGENT USERNAME": "AMVSUB04401",
      "ADDRESS": "Kasoa New market road",
      "Location": "Near First Atlantic Bank",
      "GPS COORDINATES": "5.553249,-0.434698",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 107,
      "AGENT BUSINESS NAME": "NSD ASEMPA VENTURES",
      "AGENT USERNAME": "NSD20301",
      "ADDRESS": "Wofapaye street, Nsawam",
      "Location": "Near Pakro Taxi station",
      "GPS COORDINATES": "5.8123290, -0.3497680",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 108,
      "AGENT BUSINESS NAME": "Malvine Avornyo ventures ",
      "AGENT USERNAME": "MAV03801",
      "ADDRESS": "Sowutuom Last stop",
      "Location": "NEAR PUMA FILLING STATION ",
      "GPS COORDINATES": "5.624548,-0.284187",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 109,
      "AGENT BUSINESS NAME": "HEAVEN FIELD ENTERPRISE ",
      "AGENT USERNAME": "HFESUB50101",
      "ADDRESS": "BARRACK NEWTOWN ",
      "Location": "ON CARE INTERNATIONAL SCHOOL JUNCTION",
      "GPS COORDINATES": "6.616475,0.492731",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 110,
      "AGENT BUSINESS NAME": "NYAMEKYE YOLO ENTERPRISE ",
      "AGENT USERNAME": "NYE05101",
      "ADDRESS": "UNNUMBERED SHOP NEAR THEWEIJA/GBAWE MUNICIPAL HOSPITAL ",
      "Location": "NEARVTHE WEIJA/GBAWE MUNICIPAL HOSPITAL ",
      "GPS COORDINATES": "5.5657508,-0.2887464",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 111,
      "AGENT BUSINESS NAME": "HEAVEN FIELD ENTERPRISE ",
      "AGENT USERNAME": "HFESUB50102",
      "ADDRESS": "BENTOTA",
      "Location": "NEAR LIZ BEE SHOPPING MALL ",
      "GPS COORDINATES": "6.621508,0.494988",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 112,
      "AGENT BUSINESS NAME": "FABIQUE  ENTERPRISE",
      "AGENT USERNAME": "FEN20301",
      "ADDRESS": "Shop No 2 Accra station",
      "Location": "Accra Station",
      "GPS COORDINATES": "6.092706,-0.256701",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 113,
      "AGENT BUSINESS NAME": "JONAFUL VENTURES ",
      "AGENT USERNAME": "JVE05101",
      "ADDRESS": "UNNUMBERED HOUSE NEAR REGENT UNIVERSITY ",
      "Location": "NEAR REGENT UNIVERSITY ",
      "GPS COORDINATES": "5.558512,-0.2972424",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 114,
      "AGENT BUSINESS NAME": "EMMANUEL ASANTE ELECTRICALS VENTURES",
      "AGENT USERNAME": "EAESUB20301",
      "ADDRESS": "Shop number A1086 Betom Koforidua",
      "Location": "OLD JACKIE JOE SPOT",
      "GPS COORDINATES": "6.087770,-0.258537",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 115,
      "AGENT BUSINESS NAME": "GK AMANKWAAH ENTERPRISE LIMITED",
      "AGENT USERNAME": "GKA60101",
      "ADDRESS": "Amakom",
      "Location": "",
      "GPS COORDINATES": "6°41'22.4'N 1°36'24.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 116,
      "AGENT BUSINESS NAME": "Sosaway Enterprise",
      "AGENT USERNAME": "SOS 20301",
      "ADDRESS": "GCB, Nsawam",
      "Location": "Near GCB ",
      "GPS COORDINATES": "5.8117590, -0.3500420",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 117,
      "AGENT BUSINESS NAME": "MUSTAPHA MUSAH ENTERPRISE ",
      "AGENT USERNAME": "MME61201",
      "ADDRESS": "TK-A-175 Tarkwa Maakro",
      "Location": "Opposite Tanzania House",
      "GPS COORDINATES": "6°43'39.1'N 1°38'04.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 118,
      "AGENT BUSINESS NAME": "KENZER ENTERPRISE ",
      "AGENT USERNAME": "KEE40501",
      "ADDRESS": "Unnumbered shop at Tarkwa,",
      "Location": "Inside WestLink Pharmacy ",
      "GPS COORDINATES": "WT-0005-8010",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 119,
      "AGENT BUSINESS NAME": "Buatilda Ventures",
      "AGENT USERNAME": "BTV20301",
      "ADDRESS": "GCB, Nsawam",
      "Location": "Opposite The Seed Funds Microfinance",
      "GPS COORDINATES": "5.8121180, -0.3508740",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 120,
      "AGENT BUSINESS NAME": "Lizz -o 2020 enterprise",
      "AGENT USERNAME": "L2E60401",
      "ADDRESS": "Atonsu lorry station ",
      "Location": "Opposite atonsu fidelity bank",
      "GPS COORDINATES": "6°39'23.8'N1°35'31.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 121,
      "AGENT BUSINESS NAME": "Money more enterprise ",
      "AGENT USERNAME": "MME60401",
      "ADDRESS": "S line junction, atonsu",
      "Location": "Near Prudential bank",
      "GPS COORDINATES": "6°39'22.9'N1°35'38.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 122,
      "AGENT BUSINESS NAME": "Abu Danso Ventures",
      "AGENT USERNAME": "ADVSUB20301",
      "ADDRESS": "Vodafone Down, Nsawam. ",
      "Location": "Near Premier bet",
      "GPS COORDINATES": "5.8124270, -0.3513840",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 123,
      "AGENT BUSINESS NAME": "Francis K.Ofori Enterprise ",
      "AGENT USERNAME": "FRK60401",
      "ADDRESS": "Unnumbered Container,  high school junction ",
      "Location": "NEAR atonsu market",
      "GPS COORDINATES": "6°39'29.4'N1°35'39.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 124,
      "AGENT BUSINESS NAME": "A.KIGMARP ENTERPRISE ",
      "AGENT USERNAME": "AKE30201",
      "ADDRESS": "SIWUDU ESTATE ",
      "Location": "WHISPERS PUB",
      "GPS COORDINATES": "5°06'40.1'N1°15'21.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 125,
      "AGENT BUSINESS NAME": "ABRABO YE DE VENTURES",
      "AGENT USERNAME": "AYD70301",
      "ADDRESS": "HSE/NO. SB 370, SABUZONGO -TECHIMAN",
      "Location": "OPPOSITE ADB,TECHIMAN BRANCH",
      "GPS COORDINATES": "7.593410,-1.9364020/7'35'36.3'N1'56'11.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 126,
      "AGENT BUSINESS NAME": "Heir of salvation enterprise ",
      "AGENT USERNAME": "HSE60401",
      "ADDRESS": "Atonsu market",
      "Location": "Inside Atonsu market",
      "GPS COORDINATES": "6°39'30.5'N1°35'.39.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 127,
      "AGENT BUSINESS NAME": "Holy Dabti ventures ",
      "AGENT USERNAME": "HDV60401",
      "ADDRESS": "Unnumbered container,  Bantama ",
      "Location": "Infront of Bantama goil station",
      "GPS COORDINATES": "6°42'15.3'N1'°38'04.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 128,
      "AGENT BUSINESS NAME": "AP Plus ventures ",
      "AGENT USERNAME": "APV60401",
      "ADDRESS": "Unnumbered container,  Bantama ",
      "Location": "Opposite cultural centre south gate",
      "GPS COORDINATES": "6°41'11.3'N1°37'56.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 129,
      "AGENT BUSINESS NAME": "WIIZI APAR ENTERPRISE",
      "AGENT USERNAME": "WAE60501",
      "ADDRESS": "PLOT 34 BLOCK A , DABAN",
      "Location": "NEAR AGUDEE FOOD PHARMACY",
      "GPS COORDINATES": "6°38'15.7'N 1°37'28.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 130,
      "AGENT BUSINESS NAME": "M.K. SOLO VENTURES ",
      "AGENT USERNAME": "MSV00101",
      "ADDRESS": "Unnumbered shop at teshie bush road",
      "Location": "Near block factory ",
      "GPS COORDINATES": "(5.5814499, -0.1308633)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 131,
      "AGENT BUSINESS NAME": "Albertha nyame ayebi enterprise ",
      "AGENT USERNAME": "ANA60401",
      "ADDRESS": "Unnumbered container, bantama",
      "Location": "Infront of cultural centre main gate.",
      "GPS COORDINATES": "6°42'00.7'N1°37'42.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 132,
      "AGENT BUSINESS NAME": "NAGIS ROYAL BUSINESS CENTER",
      "AGENT USERNAME": "NRB70301",
      "ADDRESS": "TAMALE STATION, TECHIMAN",
      "Location": "NEAR FIDELITY BANK TECHIMAN BRANCH",
      "GPS COORDINATES": "7.593093,-1.937040",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 133,
      "AGENT BUSINESS NAME": "KEE40201",
      "AGENT USERNAME": "KENZER ENTERPRISE ",
      "ADDRESS": "Tarkwa Main station",
      "Location": "Near WestLink pharmacy ",
      "GPS COORDINATES": "5.18’16.5'N  1.59’38.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 134,
      "AGENT BUSINESS NAME": "NYAME AKWAN SUSU",
      "AGENT USERNAME": "NAS40501",
      "ADDRESS": "Unnumbered shop at Aboso",
      "Location": "Near the Main Station",
      "GPS COORDINATES": "5.36’24.7'N  1.94’63.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 135,
      "AGENT BUSINESS NAME": "A1 EL-SAMANHYIA",
      "AGENT USERNAME": "AESSUB30201",
      "ADDRESS": "GOMOA ESHIEM ",
      "Location": "POST OFFICE ",
      "GPS COORDINATES": "5°29'54.2'N0°50'51.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 136,
      "AGENT BUSINESS NAME": "A1 EL-SAMANHYIA",
      "AGENT USERNAME": "AESSUB30202",
      "ADDRESS": "GOMOA DABISO",
      "Location": "OLD  MOSQUE ",
      "GPS COORDINATES": "5°27'43.8'N0°51'52.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 137,
      "AGENT BUSINESS NAME": "Mafa Multi Ventures",
      "AGENT USERNAME": "MMVSUB20301",
      "ADDRESS": "Nsawam Station, Nsawam",
      "Location": "Behind Nsawam station",
      "GPS COORDINATES": "5.8123400, -0.3529610",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 138,
      "AGENT BUSINESS NAME": "ABEIKU FRANCISCO VENTURES ",
      "AGENT USERNAME": "AFV30201",
      "ADDRESS": "EKUMFI - ESSUEHYIA ",
      "Location": "ESSUEHYIA STATION ",
      "GPS COORDINATES": "5°18'29.6'N0°53'32.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 139,
      "AGENT BUSINESS NAME": "GOD'S GIFT ADAM",
      "AGENT USERNAME": "GGASUB60101",
      "ADDRESS": "Oforikrom",
      "Location": "",
      "GPS COORDINATES": "6°41'19.3'N 1°35'36.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 140,
      "AGENT BUSINESS NAME": "EMEFUST ENTERPRISE ",
      "AGENT USERNAME": "EEN40501",
      "ADDRESS": "Unnumbered shop at Tarkwa ",
      "Location": "Near the MTN office ",
      "GPS COORDINATES": "5.18’17.3'N  1.59’37.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 141,
      "AGENT BUSINESS NAME": "EMMANUEL 95 ENTERPRISE",
      "AGENT USERNAME": "E9E70101",
      "ADDRESS": "A  12 Area sunyani",
      "Location": "ADJACENT CONSOLIDATED BANK SUNYANI ",
      "GPS COORDINATES": "BS 0006 -3423",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 142,
      "AGENT BUSINESS NAME": "ADAR COMMUNICATION AND BUSINESS CENTRE ",
      "AGENT USERNAME": "ACASUB30201",
      "ADDRESS": "WINNEBA ROUNDABOUT STATION ",
      "Location": "NEAR RISCOB PHARMACY ",
      "GPS COORDINATES": "5°22'54.6'N0°38'43.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 143,
      "AGENT BUSINESS NAME": "SAVE SAVE VENTURES ",
      "AGENT USERNAME": "SSVSUB70401",
      "ADDRESS": "AS 90/ S SUNYANI AREA3",
      "Location": "OPPOSITE WEDNESDAY MARKET",
      "GPS COORDINATES": "720084  N 219041 W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 144,
      "AGENT BUSINESS NAME": "ALAHAJI K.DAUDA ENTERPRISE ",
      "AGENT USERNAME": "AKDSUB30201",
      "ADDRESS": "TWIFO HEMANG ",
      "Location": "HEMANG MARKET ",
      "GPS COORDINATES": "5°28'51.6'N1°31'58.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 145,
      "AGENT BUSINESS NAME": "SENYACO GALAXY",
      "AGENT USERNAME": "SGA60401",
      "ADDRESS": "DABAN",
      "Location": "OPPOSITE DABAN TAXI RANK.",
      "GPS COORDINATES": "6°38'18.1'N 1°37'16.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 146,
      "AGENT BUSINESS NAME": "ALAHAJI K.DAUDA ENTERPRISE ",
      "AGENT USERNAME": "AKDSUB30202",
      "ADDRESS": "TWIFO HEMANG ",
      "Location": "St. Anthony Catholic Church ",
      "GPS COORDINATES": "5°28'57.6'N1°31'57.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 147,
      "AGENT BUSINESS NAME": "Executive Merchant ",
      "AGENT USERNAME": "EMC01001",
      "ADDRESS": "SANTA MARIA ",
      "Location": "DONEWELL METHODIST CHURCH ",
      "GPS COORDINATES": "5.606208,-0.276310",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 148,
      "AGENT BUSINESS NAME": "ALAHAJI K.DAUDA ",
      "AGENT USERNAME": "AKDSUB30203",
      "ADDRESS": "TWIFO HEMANG ",
      "Location": "NEAR CENTRAL CHURCH OF CHRIST ",
      "GPS COORDINATES": "5°29'05.5'N1°31'56.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 149,
      "AGENT BUSINESS NAME": "GODS PLANET SOLUTION ",
      "AGENT USERNAME": "GPS50101",
      "ADDRESS": "FIAVE",
      "Location": "NEAR GLOBAL EVANGELICAL CHURCH",
      "GPS COORDINATES": "6.632613,0.485792",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 150,
      "AGENT BUSINESS NAME": "DAK70101",
      "AGENT USERNAME": "DIANA ADUBEA KYEREMEH VENTURES ",
      "ADDRESS": "Shop 54 Baakoniaba",
      "Location": "NEAR MIRACLE JHS SUNYANI-BAAKONIABA?7",
      "GPS COORDINATES": "7'19'39.4'' N 2 '20'51.0'' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 151,
      "AGENT BUSINESS NAME": "NELMANDELA ENTERPRISW ",
      "AGENT USERNAME": "NENSUB03604",
      "ADDRESS": "DANSOMAN LAST STOP ",
      "Location": "NEAR LAST STOP STATION ",
      "GPS COORDINATES": "5.5290875, -0.2648906",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 152,
      "AGENT BUSINESS NAME": "ASKME SOLUTION VENTURES",
      "AGENT USERNAME": "ASVSUB20301",
      "ADDRESS": "Adoagyiri Shell, Nsawam",
      "Location": "Near Shell fuel station",
      "GPS COORDINATES": "5.8223240, -0.3541070",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 153,
      "AGENT BUSINESS NAME": "SENSUB70201",
      "AGENT USERNAME": "SIKAWAAA ENTERPRISE ",
      "ADDRESS": "SHOP 12/ B BEREKUM",
      "Location": "ADJACENT HEALTH INSURANCE OFFICE",
      "GPS COORDINATES": "7. 26'45.7''N 2.34.49. 2''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 154,
      "AGENT BUSINESS NAME": "Tetans Business Enterprise",
      "AGENT USERNAME": "TBE20301",
      "ADDRESS": "Adoagyiri, Nsawam",
      "Location": "Near Adoagyiri roundabout",
      "GPS COORDINATES": "5.8097360, -0.3429210",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 155,
      "AGENT BUSINESS NAME": "SALASADIK VENTURES",
      "AGENT USERNAME": "SAV50101",
      "ADDRESS": "FIAVE  ATSIGUDA",
      "Location": "AT ATSIGUDA JUNCTION ",
      "GPS COORDINATES": "6.630826,0.482938",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 156,
      "AGENT BUSINESS NAME": "PRUDENCE DE CARE",
      "AGENT USERNAME": "PDCSUB01402",
      "ADDRESS": "KWASHIESMAN",
      "Location": "APOSTOLIC CHURCH ",
      "GPS COORDINATES": "5.595889,-0.270394",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 157,
      "AGENT BUSINESS NAME": "TAHIRU MIL ENTERPRISE ",
      "AGENT USERNAME": "TME50101",
      "ADDRESS": "MORLEME",
      "Location": "AT MORLEME JUNCTION ",
      "GPS COORDINATES": "6.631611,0.478958",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 158,
      "AGENT BUSINESS NAME": "DKE70201",
      "AGENT USERNAME": "DANIEL KYERE ENTERPRISE ",
      "ADDRESS": "K 900/ B",
      "Location": "OPPOSITE SCAB PHARMACY KATO",
      "GPS COORDINATES": "7. 26'02.3 'N 2. 33'55.3'w",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 159,
      "AGENT BUSINESS NAME": "AJENSKO VENTURES",
      "AGENT USERNAME": "AVE70301",
      "ADDRESS": "TECHIMAN KUMASI STATION, NEAR TOTAL FILLING STATION",
      "Location": "NEAR TOTAL FILLING STATION",
      "GPS COORDINATES": "7.585680,-1.9373980",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 160,
      "AGENT BUSINESS NAME": "S-DUAH ENTERPRISE",
      "AGENT USERNAME": "SDESUB61001",
      "ADDRESS": "SUAME",
      "Location": "ON TOP OF STANBIC",
      "GPS COORDINATES": "6°42'50.9'N1°37'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 161,
      "AGENT BUSINESS NAME": "MIKESH VENTURES ",
      "AGENT USERNAME": "MVESUB03801",
      "ADDRESS": "KWASHIEMAN",
      "Location": "APOSTOLIC CHURCH ",
      "GPS COORDINATES": "5.594689,-0.269977",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 162,
      "AGENT BUSINESS NAME": "NA GOD OO VENTURES",
      "AGENT USERNAME": "NGO70301",
      "ADDRESS": "TECHIMAN INSIDE KUMASI STATION",
      "Location": "NEAR TECHIMAN GPRTU OFFICE",
      "GPS COORDINATES": "7.584411,-1.937420",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 163,
      "AGENT BUSINESS NAME": "KEYLIFE ASSURANCE MARKETERS",
      "AGENT USERNAME": "KAM40501",
      "ADDRESS": "Unnumbered shop at Tarkwa ",
      "Location": "Opposite Total Filling station ",
      "GPS COORDINATES": "5.18’28.5'N  1.59’39.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 164,
      "AGENT BUSINESS NAME": "WAHKOM VENTURES",
      "AGENT USERNAME": "WVE61001",
      "ADDRESS": "SUAME AVOCADO MARKET",
      "Location": "WITHIN THE AVOCADO MARKET",
      "GPS COORDINATES": "6°42'50.9'N1°37'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 165,
      "AGENT BUSINESS NAME": "FELOHE ENTERPRISE ",
      "AGENT USERNAME": "FEL61001",
      "ADDRESS": "AF-0173-9428 Akom off the Habitat Road.",
      "Location": "Adjacent Akom taxi Station",
      "GPS COORDINATES": "6°50'53.8'N 1°38'55.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 166,
      "AGENT BUSINESS NAME": "FRESH ERA  VENTURES",
      "AGENT USERNAME": "FEV61001",
      "ADDRESS": "SUAME",
      "Location": "NESR ROSESA ROSE HOTEL",
      "GPS COORDINATES": "6°42.50.9'N1°37'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 167,
      "AGENT BUSINESS NAME": "GME61001",
      "AGENT USERNAME": "G.MAHAMA ENTERPRISE",
      "ADDRESS": "OLD SUAME",
      "Location": "ADJACENT NDC OFFICE",
      "GPS COORDINATES": "6°42'50.6'N1°37'59.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 168,
      "AGENT BUSINESS NAME": "ACTIVEHANS ENTERPRISE ",
      "AGENT USERNAME": "ACT40101",
      "ADDRESS": "UNNUMBERED SHOP AT KWESIMINTSIM, TAKORADI",
      "Location": " INSIDE MAIN KWESIMINTSIM LORRY STATION",
      "GPS COORDINATES": "4°54'44.9'N 1°47'11.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 169,
      "AGENT BUSINESS NAME": "MICKY SPECIAL ",
      "AGENT USERNAME": "MSE02001",
      "ADDRESS": "Unnumbered shop at Tradefair la",
      "Location": "Near fidelity bank ",
      "GPS COORDINATES": "(5.5634736, -0.1433847)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 170,
      "AGENT BUSINESS NAME": "TRANSACTIONS ZONE",
      "AGENT USERNAME": "TRZ02601",
      "ADDRESS": "SOWUTUOM ",
      "Location": "POLO JUNCTION ",
      "GPS COORDINATES": "5.610816,-0.274999",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 171,
      "AGENT BUSINESS NAME": "ROYAL STAR TELECOM",
      "AGENT USERNAME": "RST40101",
      "ADDRESS": "UNNUMBERED SHOP AT KWESIMINTSIM SARBO ZONGO,TAKORADI",
      "Location": "NEAR NANA AMA SPOT",
      "GPS COORDINATES": "4°54'37 .8'N 1° 47'01 .9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 172,
      "AGENT BUSINESS NAME": "REGLEGA ENTERPRISE ",
      "AGENT USERNAME": "REN12301",
      "ADDRESS": "DANSOMAN LAST STOP BEACH ROAD  ",
      "Location": "NEAR MODA COMPLEX SCHOOL",
      "GPS COORDINATES": "5.5274125, -0.2629531",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 173,
      "AGENT BUSINESS NAME": "THOMAS AYINE ENTERPRISE",
      "AGENT USERNAME": "TAE61001",
      "ADDRESS": "SUAME ABATTOIR",
      "Location": "OPPOSITE SUAME ABATTOIR",
      "GPS COORDINATES": "6°42'42.6'N1°38'02.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 174,
      "AGENT BUSINESS NAME": "GENERAL KK ENTERPRISE ",
      "AGENT USERNAME": "GKE09001",
      "ADDRESS": "NAYIRI WA",
      "Location": "INSIDE METRO MASS TRANSIT STATION",
      "GPS COORDINATES": "10°03'47.6'N2°29'55.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 175,
      "AGENT BUSINESS NAME": "SADAT YUSSIF ENTERPRISE ",
      "AGENT USERNAME": "SYE09001",
      "ADDRESS": "NAYIRI WA",
      "Location": "CLOSE TO THE METRO MASS TRANSIT STATION ",
      "GPS COORDINATES": "10°03'51.2'N2°29'56.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 176,
      "AGENT BUSINESS NAME": "1st PAGE PRINTING",
      "AGENT USERNAME": "PPR61202",
      "ADDRESS": "Kodie ",
      "Location": "Kodie Adjacent the Kodie Police Station",
      "GPS COORDINATES": "6°49'10.1'N 1°38'50.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 177,
      "AGENT BUSINESS NAME": "SAVE SAVE ULTIMATE ENTERPRISE",
      "AGENT USERNAME": "SSVULTSUB70401",
      "ADDRESS": "D 24 SUNYANI",
      "Location": "OPPOSITE FIDELITY BANK SUNAYNI MAIN",
      "GPS COORDINATES": "7.19.58.2. N .19.015.55 W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 178,
      "AGENT BUSINESS NAME": "Nuhu Yusif Enterprise",
      "AGENT USERNAME": "NYE61001",
      "ADDRESS": "SUAME MARKET",
      "Location": "NEAR THE INFORMATION CENTRE",
      "GPS COORDINATES": "6°43'10.6'N1°38'11.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 179,
      "AGENT BUSINESS NAME": "ELVISTOGAS VENTURES",
      "AGENT USERNAME": "ELV70301",
      "ADDRESS": "HSE NO. AA1235, AKUMSA DOMASE-NKORANZA",
      "Location": "OPPOSITE BACCSOD AKUMSA DOMASE",
      "GPS COORDINATES": "7.544565,-1.737531",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 180,
      "AGENT BUSINESS NAME": "NUHU YUSIF ENTERPRISE",
      "AGENT USERNAME": "NYE61001",
      "ADDRESS": "SUAME MARKET",
      "Location": "NEAR THE INFORMATION CENTRE",
      "GPS COORDINATES": "6°43'10.6'N1°38'11.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 181,
      "AGENT BUSINESS NAME": "ROBVEE VENTURES",
      "AGENT USERNAME": "RVVSUB70501",
      "ADDRESS": "20 SAMPA",
      "Location": "OPPOSITE MARKET SAMPA ",
      "GPS COORDINATES": "7.56'58;7 N .2.41;31.1 W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 182,
      "AGENT BUSINESS NAME": "PRINCEANGEL 07 ENTERPRISE",
      "AGENT USERNAME": "PEN 61201.00",
      "ADDRESS": "Unnumbered Shop Kodie",
      "Location": "Opposite Kwabre Rural Bank PLC",
      "GPS COORDINATES": "6°48'57.2'N 1°38'53.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 183,
      "AGENT BUSINESS NAME": "KEZDICK ENTERPRISE",
      "AGENT USERNAME": "KDE60701",
      "ADDRESS": "MMROM",
      "Location": "OPPOSITE OSON'S CHEMIST",
      "GPS COORDINATES": "6°42'50.9'N1°37'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 184,
      "AGENT BUSINESS NAME": "Quickeagle Services ",
      "AGENT USERNAME": "QSESUB04401",
      "ADDRESS": "Kasoa new market ",
      "Location": "Near soccerbet",
      "GPS COORDINATES": "5.555529,-0.444133",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 185,
      "AGENT BUSINESS NAME": "QUICKEAGLE SERVICES ",
      "AGENT USERNAME": "QSESUB04402",
      "ADDRESS": "old market ",
      "Location": "Near Kasoa old market",
      "GPS COORDINATES": "5.534230,-0.424419",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 186,
      "AGENT BUSINESS NAME": "Kwadjeipoku Enterprise",
      "AGENT USERNAME": "KWE60701",
      "ADDRESS": "MMBROM",
      "Location": "ADJACENT DANNIPHARMA",
      "GPS COORDINATES": "6°42'50.9'N1°37'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 187,
      "AGENT BUSINESS NAME": "Cherillaz Enterprise ",
      "AGENT USERNAME": "CENSUB05101",
      "ADDRESS": "KASOA AKWELE ",
      "Location": "Near columba junction ",
      "GPS COORDINATES": "5.556416,-0.434825",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 188,
      "AGENT BUSINESS NAME": "FAST TRACK PREMIUM VENTURES",
      "AGENT USERNAME": "FTP02801",
      "ADDRESS": "ASHAIMAN, ZENU",
      "Location": "NEAR SCHOOL JUNCTION",
      "GPS COORDINATES": "5.709224,-0.047193",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 189,
      "AGENT BUSINESS NAME": "SEFTPAD SUSU ENTERPRISE",
      "AGENT USERNAME": "SSE60201",
      "ADDRESS": "MMBROM ROUNDABOUT",
      "Location": "NEAR MMROM ROUND ABOUT",
      "GPS COORDINATES": "6°42'50.9'N1°37'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 190,
      "AGENT BUSINESS NAME": "ALVICK BLESSED ASSURANCE LTD",
      "AGENT USERNAME": "ABLSUB03602",
      "ADDRESS": "BEACH ROAD LAST STOP ",
      "Location": "SOCCER BET  BEFORE ",
      "GPS COORDINATES": "5.5229625, -0.2622969",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 191,
      "AGENT BUSINESS NAME": "BABA SULE PHONES AND ACCESSORIES  ",
      "AGENT USERNAME": "BSVSUB70404",
      "ADDRESS": "SHOP NUMBER 16 GOASO",
      "Location": "GOASO ROUND ABOUT ",
      "GPS COORDINATES": "6.48'12.3''N2.31'01.3''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 192,
      "AGENT BUSINESS NAME": "OFA TWUM 07 ELECTRICAL",
      "AGENT USERNAME": "OTE60501",
      "ADDRESS": "PLOT 50 BLOCK D .AMPAYOO",
      "Location": "NEAR ROCKY AREA( AMPAYOO M/A SCHOOL)",
      "GPS COORDINATES": "6°37'13.0'N 1°37'33.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 193,
      "AGENT BUSINESS NAME": "OBIRI MAC VENTURES ",
      "AGENT USERNAME": "OME03601",
      "ADDRESS": "DANSOMAN BEACH ROAD LAST STOP ",
      "Location": "NEAR SOCCER BET ",
      "GPS COORDINATES": "5.5223375, -0.2620781",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 194,
      "AGENT BUSINESS NAME": "LEXIES SUPERMARKET ",
      "AGENT USERNAME": "LSU61201",
      "ADDRESS": "Kodie - Kumasi,Ashanti",
      "Location": "Opposite Gladys Maternity ",
      "GPS COORDINATES": "6°48'53.1'N 1°38'54.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 195,
      "AGENT BUSINESS NAME": "ALVICK BLESSED ASSURANCE LTD ",
      "AGENT USERNAME": "ABLSUB03601",
      "ADDRESS": "DANSOMAN BEACH ROAD",
      "Location": "BEACH ROAD NEAR SOCCER BET",
      "GPS COORDINATES": "5.5221125, -0.2614531",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 196,
      "AGENT BUSINESS NAME": "KOFHAY MOBILE MONEY SERVICES ",
      "AGENT USERNAME": "KMMSUB70201",
      "ADDRESS": "Shop 45 BEREKUM 7.",
      "Location": "OPPOSITE NPP OFFICE BEREKUM ",
      "GPS COORDINATES": "7. 26'52'2'N 2.34' 55.9 W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 197,
      "AGENT BUSINESS NAME": "OME03601",
      "AGENT USERNAME": "OBIRI MAC ENTERPRISE",
      "ADDRESS": "DANSOMAN BEACH ROAD ",
      "Location": "NEAR SOCCER BET ",
      "GPS COORDINATES": "5.5223375, -0.2620781",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 198,
      "AGENT BUSINESS NAME": "GORDONMENS VENTURES ",
      "AGENT USERNAME": "GVE40101",
      "ADDRESS": "UNNUMBERED SHOP AT ORIRI JUNCTION ,ASSAKAE TAKORADI",
      "Location": "CLOSE TO OBIRI LOTTERY ",
      "GPS COORDINATES": "4°55'06.8'N 1°47'24.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 199,
      "AGENT BUSINESS NAME": "TIME NO WAIT FOR MAN VENTURES",
      "AGENT USERNAME": "TNW19101",
      "ADDRESS": "OLD TOWN JUNCTION DAMBAI",
      "Location": "NEAR NHIS OFFICE",
      "GPS COORDINATES": "8.066566, 0.179207",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 200,
      "AGENT BUSINESS NAME": "SAMTWUM 04 ENTERPRISE",
      "AGENT USERNAME": "SEN70101",
      "ADDRESS": "AKUMSA DOMASE-NKORANZA",
      "Location": "NEAR BACCSOD AKUMSA DOMASE BRANCH",
      "GPS COORDINATES": "7.5445500,-1.7376830",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 201,
      "AGENT BUSINESS NAME": "GOd's  Signature Ventures",
      "AGENT USERNAME": "GSV60801",
      "ADDRESS": "KOTWI",
      "Location": "Near Gary Marvin Hospital ",
      "GPS COORDINATES": "6°36'16.1'N°39'32.1W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 202,
      "AGENT BUSINESS NAME": "Francis Aikins Quarm Ventures",
      "AGENT USERNAME": "FAQ608019",
      "ADDRESS": "Kotwi ",
      "Location": "Near the tax rank",
      "GPS COORDINATES": "6°36'08.5'N1°39'33'.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 203,
      "AGENT BUSINESS NAME": "Jesus Not Forgotten Ventures ",
      "AGENT USERNAME": "JNF60801",
      "ADDRESS": "Ahenema Kokoben",
      "Location": "Near the Bus Stop",
      "GPS COORDINATES": "6°37'19.8'N1°39'15.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 204,
      "AGENT BUSINESS NAME": "XCLUSIVE CASH POINT",
      "AGENT USERNAME": "XCP40101",
      "ADDRESS": "UNNUMBERED SHOP AT ASSAKAE ROAD,TAKORADI",
      "Location": "NEAR DIASCAN",
      "GPS COORDINATES": "4°55'13.1'N 1°47'29.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 205,
      "AGENT BUSINESS NAME": "WITH GOD 2015 ENTERPRISE",
      "AGENT USERNAME": "WGE61201",
      "ADDRESS": "Kodie Station",
      "Location": "Afigya Kwabre Distric Assembly Junction",
      "GPS COORDINATES": "6°48'09.8'N 1°37'13.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 206,
      "AGENT BUSINESS NAME": "FRANKMEY ENTERPRISE ",
      "AGENT USERNAME": "FVE12301",
      "ADDRESS": "DANSOMAN ",
      "Location": "NEAR KARIKARI BUS STOP ",
      "GPS COORDINATES": "5.5312625, -0.2604844",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 207,
      "AGENT BUSINESS NAME": "BOGYEBO VENTURES",
      "AGENT USERNAME": "BVESUB70301",
      "ADDRESS": "P.O.BOX 164, NKORANZA",
      "Location": "OPPOSITE NDC OFFICE NKORANZA",
      "GPS COORDINATES": "7.5676180,-1.7066000",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 208,
      "AGENT BUSINESS NAME": "L.A.True Love Ventures ",
      "AGENT USERNAME": "LAT60801",
      "ADDRESS": "Broyedru",
      "Location": "Near the Police Station ",
      "GPS COORDINATES": "6°36'48•1'N1°39'33•8W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 209,
      "AGENT BUSINESS NAME": "ELIZABETH AKUTEYE VENTURES ",
      "AGENT USERNAME": "EAV40301",
      "ADDRESS": "SEKONDI ",
      "Location": "NEAR THE METHODIST PARK ",
      "GPS COORDINATES": "4.936643,-1.711596",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 210,
      "AGENT BUSINESS NAME": "BOGYEBO VENTURES",
      "AGENT USERNAME": "BVESUB70302",
      "ADDRESS": "HSE NO. ND 0051, NKORANZA",
      "Location": "NEAR OLD MARKET STOREY BUILDING",
      "GPS COORDINATES": "7.567980,-1.707889",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 211,
      "AGENT BUSINESS NAME": "NICHOLAS AGYEI ENT ",
      "AGENT USERNAME": "NAE60101",
      "ADDRESS": "Asafo",
      "Location": "",
      "GPS COORDINATES": "6°41'23.2'N 1°36'38.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 212,
      "AGENT BUSINESS NAME": "AB TRIUMPH ENTERPRISE",
      "AGENT USERNAME": "ABT19102",
      "ADDRESS": "JUNCTION GREEN GARDENS DAMBAI",
      "Location": "OPPODITE NPP REGIONAL OFFICE",
      "GPS COORDINATES": "8.061492, 0.181941",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 213,
      "AGENT BUSINESS NAME": "Jesus Not Forgotten  Ventures ",
      "AGENT USERNAME": "JNF60801",
      "ADDRESS": "Brofoyedru",
      "Location": "Near the Bus Stop",
      "GPS COORDINATES": "6°37'19.8'N1°39'15.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 214,
      "AGENT BUSINESS NAME": "UNLIMITED HEIGHTS",
      "AGENT USERNAME": "UHSUB02801",
      "ADDRESS": "TEMA GOLF CITY",
      "Location": "NEAR GOLD CITY POLICE STATION",
      "GPS COORDINATES": "5.7166400,-0.0149660",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 215,
      "AGENT BUSINESS NAME": "UNLIMITED HEIGHTS",
      "AGENT USERNAME": "UHSUB02802",
      "ADDRESS": "UNNUMBERED SHOP AT GOLF CITY",
      "Location": "NEAR YELLOW SIGNBOARD",
      "GPS COORDINATES": "5.743310,-0.0145341",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 216,
      "AGENT BUSINESS NAME": "AMOANIMAA MAVIS ENTERPRISE ",
      "AGENT USERNAME": "AME61201",
      "ADDRESS": "Kronum Cement ",
      "Location": "Opposite the Catapilar Shop",
      "GPS COORDINATES": "6°45'27.4'N 1°38'43.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 217,
      "AGENT BUSINESS NAME": "JOSHUE ASAMOAH VENTURES",
      "AGENT USERNAME": "JAVSUB02801",
      "ADDRESS": "UNNSHOP AT HAVANA, TEMA",
      "Location": "NEAR HAVANA BUS STOP",
      "GPS COORDINATES": "5.7115190,-0.0150300",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 218,
      "AGENT BUSINESS NAME": "Fear And Obey God Ventures ",
      "AGENT USERNAME": "FOG60801",
      "ADDRESS": "Broyedru",
      "Location": "Near the Station",
      "GPS COORDINATES": "6°36'47.'N1°39'32•0W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 219,
      "AGENT BUSINESS NAME": "Askme Solutions Ventyres",
      "AGENT USERNAME": "ASVSUB20302",
      "ADDRESS": "Adowagyiri zongo",
      "Location": "Near Adowagyiri Mosque",
      "GPS COORDINATES": "5.8178400, -0.3553890",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 220,
      "AGENT BUSINESS NAME": "Gary Marvin Memorial Hospital ",
      "AGENT USERNAME": "GMM60801",
      "ADDRESS": "Kotwi",
      "Location": "Near the Obuasi Road",
      "GPS COORDINATES": "6°36'17.2'N1°39'37.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 221,
      "AGENT BUSINESS NAME": "CHARLOTTE BOAMAH VENTURES ",
      "AGENT USERNAME": "CBV61201",
      "ADDRESS": "Kronum  Adonko Junction",
      "Location": "Adjacent  the Taxi station",
      "GPS COORDINATES": "6°45'21.0'N 1°38'45.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 222,
      "AGENT BUSINESS NAME": "CLICK BILLIONAIRE TRAVEL AND TOUR CONSULT",
      "AGENT USERNAME": "CBT70301",
      "ADDRESS": "B-0000-8542 ,NKORANZA ESTATE, BONO EAST",
      "Location": "NEAR SCABS PHARMACY, NKORANZA ESTATE",
      "GPS COORDINATES": "7.563411,-1.704365",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 223,
      "AGENT BUSINESS NAME": "WestEST DANIELS ENTERPRISE",
      "AGENT USERNAME": "WDE60701",
      "ADDRESS": "KO METHODIST",
      "Location": "OPPOSITE FREDIMENS PHARMACY",
      "GPS COORDINATES": "6°42'50.9'N1°37'18.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 224,
      "AGENT BUSINESS NAME": "Kubi Royal Ventures ",
      "AGENT USERNAME": "KRV60801",
      "ADDRESS": "Ahenema Kokoben",
      "Location": "Near the Obuasi Road",
      "GPS COORDINATES": "6°37'29•2'N1°39'05•4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 225,
      "AGENT BUSINESS NAME": "JOSHUA ASAMOAH VENTURES",
      "AGENT USERNAME": "JAVSUB02802",
      "ADDRESS": "UNNUMBERED SHOP AT COMMUNITY 22",
      "Location": "NEAR COMMUNITY 22 JUNCTION",
      "GPS COORDINATES": "5.7147100,-0.0150820",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 226,
      "AGENT BUSINESS NAME": "Blessed Kubi Ventures",
      "AGENT USERNAME": "BKV60801",
      "ADDRESS": "Ahenema kokoben ",
      "Location": "NEAR Primary School",
      "GPS COORDINATES": "6'37'28.9'N1°39'062'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 227,
      "AGENT BUSINESS NAME": "A. AZIZ ENTERPRISE",
      "AGENT USERNAME": "AAE70301",
      "ADDRESS": "NKORANZA NEW TOWN,BONO EAST",
      "Location": "ADJACENT FABEA FM STATION NKORANZA",
      "GPS COORDINATES": "7.558462,-1.709163",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 228,
      "AGENT BUSINESS NAME": "F. KENNEDY ENTERPRISE ",
      "AGENT USERNAME": "FKESUB61201",
      "ADDRESS": "Kruonum Abuohia AB-A-316, Kumasi -Ashanti",
      "Location": "Opposite MCUC Church ",
      "GPS COORDINATES": "6°45'19.8'N 1°38'37.5W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 229,
      "AGENT BUSINESS NAME": "BOAKYE KINGTHESS ENTERPRISE ",
      "AGENT USERNAME": "BKESUB00701",
      "ADDRESS": "ACCRA ARENA",
      "Location": "OPPOSITE ARENA LORRY STATION",
      "GPS COORDINATES": "5.546752,-0.215432",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 230,
      "AGENT BUSINESS NAME": "St.Osika Ventures ",
      "AGENT USERNAME": "STV60801",
      "ADDRESS": "Ahenema kokoben",
      "Location": "Near Heman Road",
      "GPS COORDINATES": "6°37'43.4'N1°39'05.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 231,
      "AGENT BUSINESS NAME": "TIMO EXPRESS VENTURES",
      "AGENT USERNAME": "TEV19101",
      "ADDRESS": "ABB STORES, DAMBAI",
      "Location": "NEAR HEALTH CENTER JUNCTION",
      "GPS COORDINATES": "8.062490, 0.182918",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 232,
      "AGENT BUSINESS NAME": "JOSHUA ASAMOAH VENTURES",
      "AGENT USERNAME": "JAVSUB02803",
      "ADDRESS": "UNN SHOP AT TEMA AFARIWA",
      "Location": "NEAR AFARIWA TAXI STATION",
      "GPS COORDINATES": "5.7082790,-0.0151470",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 233,
      "AGENT BUSINESS NAME": "Ivyroll Ventures",
      "AGENT USERNAME": "IVE61001",
      "ADDRESS": "Ahenema Kokoben ",
      "Location": "opposite  the Health Centre ",
      "GPS COORDINATES": "6°37'34.9'N°38'59.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 234,
      "AGENT BUSINESS NAME": "MAWU DJI TSE ENTERPRISE",
      "AGENT USERNAME": "MDT02801",
      "ADDRESS": "UNNUMBERED SHOP AT BETHLEHEM, TEMA",
      "Location": "NEAR THE PRESBY CHURCH",
      "GPS COORDINATES": "5.7093450,-0.0093880",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 235,
      "AGENT BUSINESS NAME": "Osikani Kaakyire Ventures ",
      "AGENT USERNAME": "OKV60801",
      "ADDRESS": "Santasi",
      "Location": "Near the lorryStation",
      "GPS COORDINATES": "6°39'28.5'N1°38'32.7W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 236,
      "AGENT BUSINESS NAME": "TRUINE CORD ENTERPRISE",
      "AGENT USERNAME": "TCE02801",
      "ADDRESS": "ASHAIMAN LEBANON ZONE 4",
      "Location": "NEAR BETHEL FAMILY CHAPEL",
      "GPS COORDINATES": "5.71370830,-0.0381670",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 237,
      "AGENT BUSINESS NAME": "BROWNFRED VENTURES",
      "AGENT USERNAME": "BVE60801",
      "ADDRESS": "SOKOBAN DRUG STORE",
      "Location": "CLOSE TO GILAT CHEMIST",
      "GPS COORDINATES": "6°36'51.3'N 1°37'29.9W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 238,
      "AGENT BUSINESS NAME": "Wizzymiss  Enterprise ",
      "AGENT USERNAME": "WME60801",
      "ADDRESS": "Santasi",
      "Location": "Near Mybet",
      "GPS COORDINATES": "6°39'31.1 'N1°38'32.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 239,
      "AGENT BUSINESS NAME": "KENTECH PLUS LIMITED ",
      "AGENT USERNAME": "KPLSUB00301",
      "ADDRESS": "ARENA LORRY STATION ",
      "Location": "INSIDE ARENA LORRY STATION",
      "GPS COORDINATES": "5.545362,-0.215889",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 240,
      "AGENT BUSINESS NAME": "Away Azay Ventures",
      "AGENT USERNAME": "AAV60801",
      "ADDRESS": "Santasi",
      "Location": "Near the lorry Station",
      "GPS COORDINATES": "6°39'25.4'N1°38'33.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 241,
      "AGENT BUSINESS NAME": "KUNTINI ENTERPRISE ",
      "AGENT USERNAME": "KEN09002",
      "ADDRESS": "JENGBEYIRI WA",
      "Location": "CLOSE TO WA CENTRAL MARKET",
      "GPS COORDINATES": "10°03'49.3'N2°30'13.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 242,
      "AGENT BUSINESS NAME": "Mummy Dot.Com",
      "AGENT USERNAME": "MDC 60801.00",
      "ADDRESS": "santasi",
      "Location": "Near the Market ",
      "GPS COORDINATES": "6°39'24.8'N1°38'31.7W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 243,
      "AGENT BUSINESS NAME": "DODOSON VENTURES ",
      "AGENT USERNAME": "DOVSUB09001",
      "ADDRESS": "JENGBEYIRI WA",
      "Location": "NEAR GCB BANK",
      "GPS COORDINATES": "10°03'43.9'N2°30'08.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 244,
      "AGENT BUSINESS NAME": "CITIZEN LAMPTEY ENTERPRISE ",
      "AGENT USERNAME": "CLA00301",
      "ADDRESS": "TIMBER MARKET ",
      "Location": "NERA MTN TOWER",
      "GPS COORDINATES": "5.543289,-0.216849",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 245,
      "AGENT BUSINESS NAME": "SACKEYDOR VENTURES ",
      "AGENT USERNAME": "SAV02201",
      "ADDRESS": "Unnumbered shop at dzorwulu ",
      "Location": "Near fidelity bank ",
      "GPS COORDINATES": "5.6112324, -0.2042324",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 246,
      "AGENT BUSINESS NAME": "YOU WANT ALPHA ONE ENTERPRISE ",
      "AGENT USERNAME": "YWA09001",
      "ADDRESS": "SOMBO WA",
      "Location": "CLOSE TO TIME BAPTIST CHURCH/SCHOOL ",
      "GPS COORDINATES": "10°03'12.3'N2°32'12.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 247,
      "AGENT BUSINESS NAME": "AMCHARY VENTURES",
      "AGENT USERNAME": "AVE61201",
      "ADDRESS": "Kronum Iron Gate",
      "Location": "Adjacent  Reliance Filling station",
      "GPS COORDINATES": "6°45'16.8'N 1°38'36.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 248,
      "AGENT BUSINESS NAME": "EVANS DONG ENTERPRISE ",
      "AGENT USERNAME": "EDE09001",
      "ADDRESS": "KPAGURI WA",
      "Location": "IN FRONT OF THE CATHOLIC DIOCESE OF WA (MARIA YIRI)",
      "GPS COORDINATES": "10°02'35.5'N2°31'18.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 249,
      "AGENT BUSINESS NAME": "EL-MORE ENTERPRISE ",
      "AGENT USERNAME": "EENSUB30201",
      "ADDRESS": "CAPECOAST KOTOKRABA MARKET ",
      "Location": "KOTOKRABA MARKET ",
      "GPS COORDINATES": "5°06'52.5'N1°14'43.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 250,
      "AGENT BUSINESS NAME": "CHEAP TIME ENTERPRISE ",
      "AGENT USERNAME": "CTE00301",
      "ADDRESS": "TIMBER MARKET ",
      "Location": "NEAR VOLTIC WATER WEAR HOUSE",
      "GPS COORDINATES": "5.543087,-0.217826",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 251,
      "AGENT BUSINESS NAME": "AYE TIGHT NETWORKING ",
      "AGENT USERNAME": "ATN70401",
      "ADDRESS": "Shop 3 sunyani-PENKWASE",
      "Location": "ADJACENT TATAL GUEST HOUSE ",
      "GPS COORDINATES": "7'20'35. N 2'19'09'2 W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 252,
      "AGENT BUSINESS NAME": "GREAT E-AMOH  VENTURES ",
      "AGENT USERNAME": "GEA60701",
      "ADDRESS": "Kronum Station",
      "Location": "Kronum Station opposite Sekyere Rural Bank",
      "GPS COORDINATES": "6°45'11.1'N 1°38'37.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 253,
      "AGENT BUSINESS NAME": "JOHNNUWORS VENTURES ",
      "AGENT USERNAME": "JVE05101",
      "ADDRESS": "UNNUMBERED SHOP AT BROADCASTING, NEAR FINNEY HOSPITAL ",
      "Location": "NEAR FINNEY HOSPITAL ",
      "GPS COORDINATES": "5.5505870,0.3556484",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 254,
      "AGENT BUSINESS NAME": "DENNIMEY VENTURES",
      "AGENT USERNAME": "DVE61201",
      "ADDRESS": "Kronum Station ",
      "Location": "Adjacent Sekyere Rural Bank",
      "GPS COORDINATES": "6°45'11.1'N 1°38'37.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 255,
      "AGENT BUSINESS NAME": "BEST ALHAJI FATAWO ENTERPRISE",
      "AGENT USERNAME": "BAF19101",
      "ADDRESS": "AH/226 TORKORNI HOHOE",
      "Location": "OPPOSITE MALAZIA",
      "GPS COORDINATES": "7.153693, 0.474279",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 256,
      "AGENT BUSINESS NAME": "J.E.R Consultancy Services ",
      "AGENT USERNAME": "JCS60801",
      "ADDRESS": "Ahenema Kokoben ",
      "Location": "opposite the Crown Filling Station ",
      "GPS COORDINATES": "6°37'48.8'N1°38'37.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 257,
      "AGENT BUSINESS NAME": "AMENAKE ENTERPRISE ",
      "AGENT USERNAME": "AEN40601",
      "ADDRESS": "ANAJI ",
      "Location": "NEAR THE SNNIT FLAT ",
      "GPS COORDINATES": "4.930580,-1.768764",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 258,
      "AGENT BUSINESS NAME": "TIGGER PHONES ",
      "AGENT USERNAME": "TPHSUB40603",
      "ADDRESS": "EFFIAKUMA ",
      "Location": "NEAR 21ST CENTURY CLINIC",
      "GPS COORDINATES": "4.9281530,-1.7644980",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 259,
      "AGENT BUSINESS NAME": "CHELCHRIS VENTURES",
      "AGENT USERNAME": "CVE 61201.00",
      "ADDRESS": "Kronum market",
      "Location": "Inside the Kronum market",
      "GPS COORDINATES": "6°45'07.8'N 1°38'35.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 260,
      "AGENT BUSINESS NAME": "HOLLYWOOD MONEY HOUSE",
      "AGENT USERNAME": "HMH19101",
      "ADDRESS": "BL/19 ZONGO",
      "Location": "BEHIND THE CENTRAL MOSQUE",
      "GPS COORDINATES": "7.152685, 0.478699",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 261,
      "AGENT BUSINESS NAME": "ADOJOBA VENTURES ",
      "AGENT USERNAME": "AVE40601",
      "ADDRESS": "EFFIAKUMA ",
      "Location": "NEAR ANAJI TAXI STATION ",
      "GPS COORDINATES": "4.9277060, 1.7648680",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 262,
      "AGENT BUSINESS NAME": "BESTMAN CAPITAL ENTERPRISE ",
      "AGENT USERNAME": "BCE05101",
      "ADDRESS": "UNNUMBERED SHOP AT NEW BORTIANOR BUS STOP",
      "Location": "NEAR NEW BORTIANOR BUS STOP",
      "GPS COORDINATES": "5.5478531,-0.3479187",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 263,
      "AGENT BUSINESS NAME": "MAJORITY VENTURES",
      "AGENT USERNAME": "MAJ19101",
      "ADDRESS": "HH/23G AHADO HOHOE",
      "Location": "NEAR CALITO",
      "GPS COORDINATES": "7.154188, 0.477304",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 264,
      "AGENT BUSINESS NAME": "TIGGER PHONES ",
      "AGENT USERNAME": "TPHSUB40601",
      "ADDRESS": "EFFIAKUMA ",
      "Location": "NEAR THE FIDELITY BANK EFFIAKUMA BRANCH ",
      "GPS COORDINATES": "4.9284880,-1.7639870",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 265,
      "AGENT BUSINESS NAME": "EXCLUSIVE MONEY TRENDZ",
      "AGENT USERNAME": "EMT61201",
      "ADDRESS": "Kronum Station",
      "Location": "Opposite Offinso Rural Bank",
      "GPS COORDINATES": "6°45'06.9'N 1°38'33.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 266,
      "AGENT BUSINESS NAME": "VAN MANASE VENTURES",
      "AGENT USERNAME": "VMVSUB19101",
      "ADDRESS": "JK/23 HOHOE",
      "Location": "OPPOSITE HOHOE MIDFIFERY SCHOOL",
      "GPS COORDINATES": "7.154188, 0.477583",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 267,
      "AGENT BUSINESS NAME": "VAN MANASE VENTURES ",
      "AGENT USERNAME": "VMVSUB19102",
      "ADDRESS": "AB/33B ABANSE",
      "Location": "NEAR HOLY ROSARY CHURCH",
      "GPS COORDINATES": "7.154188, 0.477583",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 268,
      "AGENT BUSINESS NAME": "LINKAGE VENTURES ",
      "AGENT USERNAME": "LKV70201",
      "ADDRESS": "SHOP 87 SAMPA",
      "Location": "OPPOSITE SAMPA POST OFFICE",
      "GPS COORDINATES": "7.56'59'.0 N 2'41'44. W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 269,
      "AGENT BUSINESS NAME": "SAMILOT BUSINESS CENTRE ",
      "AGENT USERNAME": "SABSUB20101",
      "ADDRESS": "UNNUMBERED CONTAINNER AT NKAWKAW CENTRAL",
      "Location": "TOMATO MARKET CENTRAL MARKET",
      "GPS COORDINATES": "6°33'10.1' N 0°45'54.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 270,
      "AGENT BUSINESS NAME": "PISHIN STAR VENTURES",
      "AGENT USERNAME": "PSV19101",
      "ADDRESS": "JK/33 LOWCOST",
      "Location": "OPPOSITE E.P SCHOOL",
      "GPS COORDINATES": "7.154188, 0.474279",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 271,
      "AGENT BUSINESS NAME": "SHAGAG VENTURES",
      "AGENT USERNAME": "SHA19101",
      "ADDRESS": "AHN/23, HOHOE",
      "Location": "NEAR ASSEMBLY",
      "GPS COORDINATES": "7.154188, 0.477583",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 272,
      "AGENT BUSINESS NAME": "Serwaa Papabi Enterprise",
      "AGENT USERNAME": "SPE60701",
      "ADDRESS": "KO METHODIST",
      "Location": "OPPOSITE FIDELITY BANK",
      "GPS COORDINATES": "6°42'50.9'N1°37'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 273,
      "AGENT BUSINESS NAME": "OAKSAM KROBEA VENTURES",
      "AGENT USERNAME": "OKV70301",
      "ADDRESS": "NKORANZA NEW  MARKET,BONO EAST",
      "Location": "OPPOSITE NKORANZA NEW MARKET",
      "GPS COORDINATES": "7.556491,-1.709170",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 274,
      "AGENT BUSINESS NAME": "SANDRA DETAILS VENTURES",
      "AGENT USERNAME": "SDV19101",
      "ADDRESS": "AJ/34C ABANSE",
      "Location": "NEAR THE STATION ",
      "GPS COORDINATES": "7.151078, 0.470524",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 275,
      "AGENT BUSINESS NAME": "FHODJ SUSU SERVICES",
      "AGENT USERNAME": "FSS19101",
      "ADDRESS": "6J SANKIS ST. NEAR GPRTU STATION, HOHOE",
      "Location": "NEAR THE MARKET",
      "GPS COORDINATES": "7.148530, 0.472670",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 276,
      "AGENT BUSINESS NAME": "MOKAPLUX VENTURES",
      "AGENT USERNAME": "MVE19101",
      "ADDRESS": "NH/13M HOHOE",
      "Location": "OPPOSITE GCB",
      "GPS COORDINATES": "7.149191, 0.473013",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 277,
      "AGENT BUSINESS NAME": "EORGASA VENTURES ",
      "AGENT USERNAME": "EVE20101",
      "ADDRESS": "CENTRAL MARKET STORE NUMBER 1966 NKAWKAW",
      "Location": "NEAR KWAHU RURAL BANK MKT BRANCH",
      "GPS COORDINATES": "6°33'09.2' N 0°45'55.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 278,
      "AGENT BUSINESS NAME": "SALIS MULTI NETWORK BUSINESS SERVICE",
      "AGENT USERNAME": "SMBSUB80101",
      "ADDRESS": "WALEWALE",
      "Location": "OPPOSITE GOIL FILLING STATION ",
      "GPS COORDINATES": "10.351766,-0.797601",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 279,
      "AGENT BUSINESS NAME": "ISHGYEI VENTURES ",
      "AGENT USERNAME": "ISV20101",
      "ADDRESS": "CENTRAL MKT STORE NUMBER 175 NKAWKAW",
      "Location": "NEAR OLD TAXI STATION ",
      "GPS COORDINATES": "6°33'06.2' N 0°45'55.4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 280,
      "AGENT BUSINESS NAME": "CEDAR EDGE ENTERPRISE",
      "AGENT USERNAME": "CEE61001",
      "ADDRESS": "KROMFROM",
      "Location": "CLOSER TO THE TRAFFIC LIGHT",
      "GPS COORDINATES": "6°42'59.9'N1°37'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 281,
      "AGENT BUSINESS NAME": "SAMAWUAH BUSINESS UNIT ",
      "AGENT USERNAME": "SBUSUB20101",
      "ADDRESS": "UNITY GARDENS RD, STORE NUM 16 NKAWKAW",
      "Location": "VOLTA HOUSE NKAWKAW ",
      "GPS COORDINATES": "6°33'03.7' N 0°45'59.5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 282,
      "AGENT BUSINESS NAME": "SHIEFAMAA  ENT",
      "AGENT USERNAME": "SHESUB20102",
      "ADDRESS": "CENTRAL MKT NKAWKAW STORE NUM.28",
      "Location": "AHENFIA RD, OPPOSITE FIRST GATE CENTRAL MKT",
      "GPS COORDINATES": "6°33'10.1' N 0°45'56.1' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 283,
      "AGENT BUSINESS NAME": "ANTWI-DEBRAH VENTURES",
      "AGENT USERNAME": "ADV60101",
      "ADDRESS": "OFORIKROM",
      "Location": "",
      "GPS COORDINATES": "6°41'16.1'N 1°36'06.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 284,
      "AGENT BUSINESS NAME": "VMV04901",
      "AGENT USERNAME": "VINCE-MENS VENTURES ",
      "ADDRESS": "OFF ALOWAY STREET TESHIE TSUIBLEOO ",
      "Location": "CLOSE TO STAR INTERNATIONAL SCHOOL ",
      "GPS COORDINATES": "5'36'32.9'N 0'.07'30.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 285,
      "AGENT BUSINESS NAME": "VL104901",
      "AGENT USERNAME": "VAN LINKS",
      "ADDRESS": "TSUIBLEOO LAST STOP-",
      "Location": "NEAR OFORI MART ",
      "GPS COORDINATES": "5'36'23,9'N 0.0'6'51.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 286,
      "AGENT BUSINESS NAME": "SELGEOLINA ENTERPRISE",
      "AGENT USERNAME": "SEN60102",
      "ADDRESS": "SOBOLO",
      "Location": "",
      "GPS COORDINATES": "6°40'55.3'N 1°35'48.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 287,
      "AGENT BUSINESS NAME": "CCS60301",
      "AGENT USERNAME": "CCSL ENTERPRISE",
      "ADDRESS": "BUOKROM",
      "Location": "WITHIN BUOKROM ESTATE TAXI RANK",
      "GPS COORDINATES": "6°42'50.9'N1°37'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 288,
      "AGENT BUSINESS NAME": "SB NYAME YE NYAME VENTURES",
      "AGENT USERNAME": "SNY61001",
      "ADDRESS": "AIRPORT ROUNDABOUT",
      "Location": "INFRONT OF SHELL FILLING STATION",
      "GPS COORDINATES": "6°42'50.9'N1°37'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 289,
      "AGENT BUSINESS NAME": "Proskuthess ventures ",
      "AGENT USERNAME": "PRV60401",
      "ADDRESS": "FEYIASE",
      "Location": "NEAR THE MARKET ",
      "GPS COORDINATES": "6°36'50.4'N1°33'38.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 290,
      "AGENT BUSINESS NAME": "Yaw Danso Nimoh Enterprise ",
      "AGENT USERNAME": "YDN60401",
      "ADDRESS": "APUTUOGYA ",
      "Location": "NEAR THE EDUCATION OFFICE ",
      "GPS COORDINATES": "6°36'07.3'N1°33'31.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 291,
      "AGENT BUSINESS NAME": "GEODOR VENTURES ",
      "AGENT USERNAME": "GEVSUB60101",
      "ADDRESS": "APUTUOGYA ",
      "Location": "Near the market ",
      "GPS COORDINATES": "6°36'04.5'N1°33'30.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 292,
      "AGENT BUSINESS NAME": "HUMBLE AMOATENG ENTERPRISE ",
      "AGENT USERNAME": "HAV60401",
      "ADDRESS": "KUNTENASE ",
      "Location": "NEAR THE LORRY STATION",
      "GPS COORDINATES": "6°32'28.1'N1°28'36.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 293,
      "AGENT BUSINESS NAME": "Augustine 2103 enterprise",
      "AGENT USERNAME": "A2E60401",
      "ADDRESS": "KUNTENASE ",
      "Location": "NEAR THE MARKET",
      "GPS COORDINATES": "6°32'27.9'N1°28'38.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 294,
      "AGENT BUSINESS NAME": "Charles yeb ventures ",
      "AGENT USERNAME": "CVE 60401.00",
      "ADDRESS": "JACHIE",
      "Location": "OPPOSITE THE MARKET",
      "GPS COORDINATES": "6°34'01.6'N1°31'15.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 295,
      "AGENT BUSINESS NAME": "Philmat ventures ",
      "AGENT USERNAME": "PVE60401",
      "ADDRESS": "Abidjan nkwanta ",
      "Location": "Opposite the station",
      "GPS COORDINATES": "6°34'44.0'N1°32'32.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 296,
      "AGENT BUSINESS NAME": "AF DIAMOND VENTURES",
      "AGENT USERNAME": "AFDSUB20301",
      "ADDRESS": "NA",
      "Location": "NEAR REO CINEMA",
      "GPS COORDINATES": "6.093377,-0258844",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 297,
      "AGENT BUSINESS NAME": "EDMUND OKO JOSIAH",
      "AGENT USERNAME": "EOJ20301",
      "ADDRESS": "NA",
      "Location": "OPPOSITE REO CINEMA",
      "GPS COORDINATES": "6.093190,-0.258953",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 298,
      "AGENT BUSINESS NAME": "GENTLE ENTERPRISE",
      "AGENT USERNAME": "GEN20301",
      "ADDRESS": "NA",
      "Location": "NEAR GRA OFFICE AKROPONG",
      "GPS COORDINATES": "5.970207-0.089777",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 299,
      "AGENT BUSINESS NAME": "AARONVIC ENTERPRISE",
      "AGENT USERNAME": "AEN20101",
      "ADDRESS": "NA",
      "Location": "NEAR VODAFONE REGIONAL OFFICE",
      "GPS COORDINATES": "6.104737,-0.255921",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 300,
      "AGENT BUSINESS NAME": "VICTORIA SERWAA",
      "AGENT USERNAME": "VIS20301",
      "ADDRESS": "NA",
      "Location": "BEHIND CBG BANK",
      "GPS COORDINATES": "6.093674-0.258119",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 301,
      "AGENT BUSINESS NAME": "FABIQ ENTERPRISE",
      "AGENT USERNAME": "FEN20301",
      "ADDRESS": "NA",
      "Location": "OPPOSITE PROTOA STATION",
      "GPS COORDINATES": "6.094097-0.256929",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 302,
      "AGENT BUSINESS NAME": "GRADON PLACE",
      "AGENT USERNAME": "GPL20301",
      "ADDRESS": "NA",
      "Location": "BEHIND HO STATION",
      "GPS COORDINATES": "6.094047-0.256957",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 303,
      "AGENT BUSINESS NAME": "MOHAJARA VENURES",
      "AGENT USERNAME": "MOV20301",
      "ADDRESS": "NA",
      "Location": "INSIDE TAKORADI STATION",
      "GPS COORDINATES": "6.093694-0256450",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 304,
      "AGENT BUSINESS NAME": "U LIE VENTURES",
      "AGENT USERNAME": "ULV20101",
      "ADDRESS": "NA",
      "Location": "OPPOSITE KUMASI STATION",
      "GPS COORDINATES": "6.094083-0.256983",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 305,
      "AGENT BUSINESS NAME": "OTI BOATENG ENTEPRISE",
      "AGENT USERNAME": "OBESUB20301",
      "ADDRESS": "NA",
      "Location": "NEAR KOFORIDUA UNIVERSITY",
      "GPS COORDINATES": "6.062447-0.266391",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 306,
      "AGENT BUSINESS NAME": "ZAYA EMPIRE",
      "AGENT USERNAME": "ZEMSUB20301",
      "ADDRESS": "NA",
      "Location": "OPPOSITE ASESEWA LORRY STATION",
      "GPS COORDINATES": "6.395786,-0.142916",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 307,
      "AGENT BUSINESS NAME": "ZAYA EMPIRE",
      "AGENT USERNAME": "ZEMSUB20302",
      "ADDRESS": "NA",
      "Location": "NEAR ASESEWA FIRE STATION",
      "GPS COORDINATES": "6.397609-0.141764",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 308,
      "AGENT BUSINESS NAME": "ZAYA EMPIRE",
      "AGENT USERNAME": "ZEM20303",
      "ADDRESS": "NA",
      "Location": "NEAR ASESEWA MARKET",
      "GPS COORDINATES": "6.398712-0.142718",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 309,
      "AGENT BUSINESS NAME": "GRACE MAMANYE",
      "AGENT USERNAME": "GMV20301",
      "ADDRESS": "NA",
      "Location": "NEAR CULTURAL CENTRE",
      "GPS COORDINATES": "6.078806,0.250130",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 310,
      "AGENT BUSINESS NAME": "MAGBLET CLASSIC VENTURES",
      "AGENT USERNAME": "MCV20301",
      "ADDRESS": "NA",
      "Location": "NEAR ADAWSO MARKET",
      "GPS COORDINATES": "5.949421-0.212869",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 311,
      "AGENT BUSINESS NAME": "ASAANA NETWORKS",
      "AGENT USERNAME": "ANV70301",
      "ADDRESS": "KENTEN -TECHIMAN,BONO EAST",
      "Location": "OPPOSITE EXCELL FILLING STATION,KENTEN",
      "GPS COORDINATES": "7.597012,-1.946252",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 312,
      "AGENT BUSINESS NAME": "MAX ANIMAX VENTURES",
      "AGENT USERNAME": "MAV19101",
      "ADDRESS": "BANKA JUNCTION DAMBAI",
      "Location": "NEAR T,T FUEL STATION",
      "GPS COORDINATES": "8.0550330, 0.1833550",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 313,
      "AGENT BUSINESS NAME": "BABA YEDUGUME",
      "AGENT USERNAME": "BYESUB05102",
      "ADDRESS": "KASOA OLD MARKET",
      "Location": "NEAR GIS OFFICE",
      "GPS COORDINATES": "5.535331,-0.423969",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 314,
      "AGENT BUSINESS NAME": "IKE BUSINESS EXCHANGE ",
      "AGENT USERNAME": "IBESUB04401",
      "ADDRESS": "KASOA AUNTY MERCY",
      "Location": "NEAR CITYDIA",
      "GPS COORDINATES": "5.530118,-0.422998",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 315,
      "AGENT BUSINESS NAME": "SMILE STAR VENTURES",
      "AGENT USERNAME": "SSV19101",
      "ADDRESS": "BANKA, DAMBAI",
      "Location": "NEAR TT FUEL STATION",
      "GPS COORDINATES": "8.0562760, 0.1844820",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 316,
      "AGENT BUSINESS NAME": "sephora golden beauty studio",
      "AGENT USERNAME": "SGBSUB04401",
      "ADDRESS": "KASOA AKWELE",
      "Location": "AKWELE TRANSFORMER",
      "GPS COORDINATES": "5.561503,-0.442055",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 317,
      "AGENT BUSINESS NAME": "WITS AND SCRIPS",
      "AGENT USERNAME": "WAS04401",
      "ADDRESS": "KASOA CHAPEL SQUARE",
      "Location": "NEAR ASSEMBLIES OF GOD CHURCH",
      "GPS COORDINATES": "5.5583536,-4269013",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 318,
      "AGENT BUSINESS NAME": "EVELYN SARFOA ANNOBIL VENTURES ",
      "AGENT USERNAME": "ESA 2701.00",
      "ADDRESS": "TESHIE  ADA JUNCTION ROAD TSUIBLEOO ",
      "Location": "OPPOSITE GOD'SWAY VILLA",
      "GPS COORDINATES": "5'35'57.9'N 0'.06'48.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 319,
      "AGENT BUSINESS NAME": "HENOLD 1 ENTERPRISE",
      "AGENT USERNAME": "HEN03801",
      "ADDRESS": "ABEKA ",
      "Location": "LAS PALMAS",
      "GPS COORDINATES": "5.602496,-0.241523",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 320,
      "AGENT BUSINESS NAME": "JUBEL HAVILAH ENT",
      "AGENT USERNAME": "JHESUB04403",
      "ADDRESS": "ADADE JUNCTION KASOA",
      "Location": "NEAR GIG MICRIO CREDIT",
      "GPS COORDINATES": "5.506144,-0.418772",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 321,
      "AGENT BUSINESS NAME": "VICTO PLUS VICTORY ENTERPRISE ",
      "AGENT USERNAME": "VPVSUB03801",
      "ADDRESS": "FADAMA",
      "Location": "IBM FILLING STATION ",
      "GPS COORDINATES": "5.599204,-244797",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 322,
      "AGENT BUSINESS NAME": "DRAMANI MUSAH VENTURES",
      "AGENT USERNAME": "DMV61201",
      "ADDRESS": "Kronum Station ",
      "Location": "Off the Angel Educational Complex road",
      "GPS COORDINATES": "6°45'04.7'N 1°38'33.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 323,
      "AGENT BUSINESS NAME": "KLESSY ROYAL ENTERPRISE ",
      "AGENT USERNAME": "KRE61201",
      "ADDRESS": "Suame Magazine ",
      "Location": "Close to Garages  Office",
      "GPS COORDINATES": "6°43'18.0'N 1°37.32.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 324,
      "AGENT BUSINESS NAME": "CWM ROYALS ENTERPRISE ",
      "AGENT USERNAME": "CRE03801",
      "ADDRESS": "NORTH KANESHIES LAST STOP ",
      "Location": "LYDWORD PHARMACY ",
      "GPS COORDINATES": "5.595345,-0242376",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 325,
      "AGENT BUSINESS NAME": "DAVE SAGE VENTURES",
      "AGENT USERNAME": "DSV61201",
      "ADDRESS": "Abusuakruwa ",
      "Location": "Close to Abusuakruwa Junction",
      "GPS COORDINATES": "6°44'00.2'N 1°38'30.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 326,
      "AGENT BUSINESS NAME": "Perfect Home Enterprise",
      "AGENT USERNAME": "PHE61001",
      "ADDRESS": "MAGAZINE",
      "Location": "NEAR AGYA OWUSU COMPANY",
      "GPS COORDINATES": "6°42'50.9'N1°37'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 327,
      "AGENT BUSINESS NAME": "FRANKO PRESTIGE VENTURES",
      "AGENT USERNAME": "FPV60501",
      "ADDRESS": "ADIEBEBA",
      "Location": "BEHIND MELCOM",
      "GPS COORDINATES": "6°39'48.0''N 1°37'01.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 328,
      "AGENT BUSINESS NAME": "S-Duah Enterprise",
      "AGENT USERNAME": "SDESUB61002",
      "ADDRESS": "MAGAZINE",
      "Location": "BEHIND NUROM HOTEL",
      "GPS COORDINATES": "6°42'50.9'N1°37'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 329,
      "AGENT BUSINESS NAME": "LARRY TELECOM",
      "AGENT USERNAME": "LTE03801",
      "ADDRESS": "ABEKA",
      "Location": "ABEKA MARKET",
      "GPS COORDINATES": "5.600358,-0.239480",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 330,
      "AGENT BUSINESS NAME": "S-DUAH ENTERPRISE",
      "AGENT USERNAME": "SDESUB61003",
      "ADDRESS": "MAGAZINE",
      "Location": "NEAR BB BTRAD JUNCTION",
      "GPS COORDINATES": "6°42'50.9'N1°37'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 331,
      "AGENT BUSINESS NAME": "A.KIGMARP ENTERPRISE ",
      "AGENT USERNAME": "AKE30201",
      "ADDRESS": " Capecoast ",
      "Location": "Whispers Pub ",
      "GPS COORDINATES": "5°06'39.9'N1°15'21.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 332,
      "AGENT BUSINESS NAME": "Eme-Abo Ventures",
      "AGENT USERNAME": "EAV61003",
      "ADDRESS": "TAFO CLUB 600",
      "Location": "NEAR MMOFRATRURO GIRLS",
      "GPS COORDINATES": "6°42'50.9'N1°37'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 333,
      "AGENT BUSINESS NAME": "Maxi Klu Enterprise ",
      "AGENT USERNAME": "MKE02001",
      "ADDRESS": "Unnumbered shop at tse addo",
      "Location": "Near Queens court event center",
      "GPS COORDINATES": "5.5574528, -0.196608",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 334,
      "AGENT BUSINESS NAME": "BB MICHAEL VENTURES ",
      "AGENT USERNAME": "BMV61301",
      "ADDRESS": "EFFIDUASE",
      "Location": "",
      "GPS COORDINATES": "6°51'02.7'N 1°23'43.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 335,
      "AGENT BUSINESS NAME": "EX-DOEVY VENTURES ",
      "AGENT USERNAME": "EDV50101",
      "ADDRESS": "ANLO KODZI",
      "Location": "BEHIND STC STATION",
      "GPS COORDINATES": "6.615339, 0.469986",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 336,
      "AGENT BUSINESS NAME": "Asamus 73 Enterprise",
      "AGENT USERNAME": "ASE61001",
      "ADDRESS": "Tafo",
      "Location": "Near Ebenezer Mortuary Junction",
      "GPS COORDINATES": "6°42'50.9'N1°37'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 337,
      "AGENT BUSINESS NAME": "ESBEE LAUDER VENTURES",
      "AGENT USERNAME": "ELV60101",
      "ADDRESS": "AHODWO",
      "Location": "NEAR AHODWO CENTRAL MOSQUE",
      "GPS COORDINATES": "6°39'35.5'N 1°37'10.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 338,
      "AGENT BUSINESS NAME": "BORRAC CONSULT ",
      "AGENT USERNAME": "BOCSUB04901",
      "ADDRESS": "NUNGUA C5 OPPOSITE GHANA WATER COMPANY LTD",
      "Location": "OPPOSITE GHANA WATER COMPANY LIMITED ",
      "GPS COORDINATES": "5'35'55.5'N 0'.04'53.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 339,
      "AGENT BUSINESS NAME": "STEVAG GOODWILL ENTERPRISE ",
      "AGENT USERNAME": "SGE03201",
      "ADDRESS": "NORTH KANESHIE",
      "Location": "PENTECOST CHURCH ",
      "GPS COORDINATES": "5.579828,-0.229242",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 340,
      "AGENT BUSINESS NAME": "BORRAC CONSULT ",
      "AGENT USERNAME": "BOCSUB04902",
      "ADDRESS": "NUNGUA LEISURE ROAD",
      "Location": "FEW DRIVE AWAY FROM C5 BUS STOP",
      "GPS COORDINATES": "5'35'55.4'N 0'0.4'53.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 341,
      "AGENT BUSINESS NAME": "BB ANFIELD VENTURES",
      "AGENT USERNAME": "BAV60501",
      "ADDRESS": "AHODWO",
      "Location": "NEAR ATINGA JUNCTION",
      "GPS COORDINATES": "6°39'33.1' N 1°37'08.7 W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 342,
      "AGENT BUSINESS NAME": "SHE- QUARKS  ENT ",
      "AGENT USERNAME": "SQK12301",
      "ADDRESS": "KORLE BU TAXI STATION ",
      "Location": "PREMISES OF KORLE BU TAXI STATION ",
      "GPS COORDINATES": "5.4669907, -0.2211924",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 343,
      "AGENT BUSINESS NAME": "SOTEY COMMUNICATIONS",
      "AGENT USERNAME": "SOC19101",
      "ADDRESS": "Lake side Dambai",
      "Location": "OPPOSITE MAIN LORRY STATION",
      "GPS COORDINATES": "8.074039, 0.176561",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 344,
      "AGENT BUSINESS NAME": "ABUNDO SOLUTIONS",
      "AGENT USERNAME": "ASO61001",
      "ADDRESS": "MAGAZINE",
      "Location": "NEAR FUSEINI ABU DRUG STORE",
      "GPS COORDINATES": "6°43'09.1'N1'37'31.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 345,
      "AGENT BUSINESS NAME": "J-KO ENTERPRISE ",
      "AGENT USERNAME": "JKO40601",
      "ADDRESS": "EFFIAKUMA ",
      "Location": "NEAR THE POLICE QUARTERS ",
      "GPS COORDINATES": "4.925638,-1.762391",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 346,
      "AGENT BUSINESS NAME": "REZO CASH ENTERPRISE ",
      "AGENT USERNAME": "RCESUB40603",
      "ADDRESS": "EFFIAKUMA MARKET ",
      "Location": "NEAR SIR CHARLES CHURCH ",
      "GPS COORDINATES": "4.970940,-1.7639320",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 347,
      "AGENT BUSINESS NAME": "REZO CASH ENTERPRISE ",
      "AGENT USERNAME": "RCESUB40602",
      "ADDRESS": "TTU B.U CAMPUS ",
      "Location": "B.U CAMPUS ",
      "GPS COORDINATES": "4.9474850,-1.7428780",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 348,
      "AGENT BUSINESS NAME": "NURU 93 ENTERPRISE",
      "AGENT USERNAME": "N9E61302",
      "ADDRESS": "ASOKORE EFFIDUASE",
      "Location": "",
      "GPS COORDINATES": "6°51'02.2'N 1°23'16.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 349,
      "AGENT BUSINESS NAME": "21ST BUSINESS SOLUTIONS AND TRADING",
      "AGENT USERNAME": "21BS60501",
      "ADDRESS": "AHODWO",
      "Location": "NEAR SAY CHEERS WINE",
      "GPS COORDINATES": "6°39'29.5'N 1°37'09.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 350,
      "AGENT BUSINESS NAME": "DJ LOFTY ENTERPRISE",
      "AGENT USERNAME": "DJL60501",
      "ADDRESS": "AHODWO",
      "Location": "NEAR ADEHYE3 FM",
      "GPS COORDINATES": "6°39'26.0'N 1°37'08.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 351,
      "AGENT BUSINESS NAME": "RUBY FAST LINK VENTURES",
      "AGENT USERNAME": "RFV12301",
      "ADDRESS": "KORLE BU ",
      "Location": "NEAR KORLE BU STATION ",
      "GPS COORDINATES": "5.5353375, -0.2310781",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 352,
      "AGENT BUSINESS NAME": "M INUSAH VENTURES",
      "AGENT USERNAME": "MIN60501",
      "ADDRESS": "AHODWO",
      "Location": "NEAR ADEHYEE FM, ATINGA JUNCTION",
      "GPS COORDINATES": "6°39'25.1'N 1°37'08.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 353,
      "AGENT BUSINESS NAME": "Hajiaaisha Ventures",
      "AGENT USERNAME": "HAJ61001",
      "ADDRESS": "MAGAZINE",
      "Location": "NEAR THE PUBLIC TOILET",
      "GPS COORDINATES": "6°43'11.2'N1°37'31.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 354,
      "AGENT BUSINESS NAME": "FAHDMUS ENTERPRISE ",
      "AGENT USERNAME": "FAE40501",
      "ADDRESS": "Unnumbered shop at Tarkwa TNA",
      "Location": "Near the TNA park",
      "GPS COORDINATES": "5.18’05.7'N  1.59’42.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 355,
      "AGENT BUSINESS NAME": "Corporate leadership Consult",
      "AGENT USERNAME": "CLC40501",
      "ADDRESS": "Unnumbered shop at Bogrekrom, Tarkwa",
      "Location": "Opposite Ransbet Warehouse ",
      "GPS COORDINATES": "5.17,52.7'N  1.58’55.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 356,
      "AGENT BUSINESS NAME": "SABAAZY ENTERPRISE ",
      "AGENT USERNAME": "SABSUB40101",
      "ADDRESS": "UNNUMBERED SHOP AT MARKET CIRCLE,TAKORADI",
      "Location": "CLOSE TO FIDELITY BANK ,NEAR METHODIST BOOK DEPOT",
      "GPS COORDINATES": "4°53'53.7'N 1° 45'30.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 357,
      "AGENT BUSINESS NAME": "SABLESS K VENTURES ",
      "AGENT USERNAME": "SAB40501",
      "ADDRESS": "Unnumbered shop at Nzema  Lane",
      "Location": "Infront of Bayport ",
      "GPS COORDINATES": "5.18’11.9'N  1.59’17.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 358,
      "AGENT BUSINESS NAME": "SULEMANA SAKANDE VENTURES",
      "AGENT USERNAME": "SSV70301",
      "ADDRESS": "MAMPRUSI LINE, TECHIMAN-BONO EAST",
      "Location": "NEAR MAMPRUSI LINE",
      "GPS COORDINATES": "7.5904140,-1.9420230/7'35'25.5'N'1'56'31.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 359,
      "AGENT BUSINESS NAME": "O.K.OKRAH VENTURES",
      "AGENT USERNAME": "OOV70301",
      "ADDRESS": "TAMALE STATION, TECHIMAN-BONO EAST",
      "Location": "NEAR HOLY FAMILY HOSPITAL",
      "GPS COORDINATES": "BT-0033-6931",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 360,
      "AGENT BUSINESS NAME": "RAZAK ABUBAKAR ENTERPRISE",
      "AGENT USERNAME": "RAB61001",
      "ADDRESS": "MAGAZINE",
      "Location": "NEAR IMAX COMPANY ",
      "GPS COORDINATES": "6°43'05.3'1°37'37.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 361,
      "AGENT BUSINESS NAME": "KRISTO NTI WONTUMI NTAAKI ENTERPRISE",
      "AGENT USERNAME": "KNW50101",
      "ADDRESS": "CIVIC CENTER, HO",
      "Location": "AFTER ACCESS BANK",
      "GPS COORDINATES": "6.615518, 0.468190",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 362,
      "AGENT BUSINESS NAME": "ABIGIPHARMA LIMITED ",
      "AGENT USERNAME": "ALISUB40602",
      "ADDRESS": "ANAJI ",
      "Location": "NEAR CHANNECK PHARMACY ",
      "GPS COORDINATES": "4.9252060,-1.7740380",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 363,
      "AGENT BUSINESS NAME": "OVERDO VENTURES",
      "AGENT USERNAME": "OVE50101",
      "ADDRESS": "PRISONS, BANKOE",
      "Location": "NEAR VODAFONE OFFICE",
      "GPS COORDINATES": "6.611130, 0.469827",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 364,
      "AGENT BUSINESS NAME": "JANET AMOAKO 86 ENTERPRISE",
      "AGENT USERNAME": "JAE61001",
      "ADDRESS": "Breman SDA Church ",
      "Location": "Near SDA Church",
      "GPS COORDINATES": "6°44'16.3'N 1°38'12.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 365,
      "AGENT BUSINESS NAME": "HAJIA EXPRESS ENTERPRISE",
      "AGENT USERNAME": "HEESUB12303",
      "ADDRESS": "MAMPROBI PLAZA ",
      "Location": "PLAZA BUS STOP ",
      "GPS COORDINATES": "5.5342125, -0.2349844",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 366,
      "AGENT BUSINESS NAME": "PROSCOM ENTERPRISE",
      "AGENT USERNAME": "PEN 50101.00",
      "ADDRESS": "MINISTRIES, HO",
      "Location": "NEAR EDUCATION OFFICER",
      "GPS COORDINATES": "6.609837, 0.467037",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 367,
      "AGENT BUSINESS NAME": "DEGYIR PRIME ENTERPRISE ",
      "AGENT USERNAME": "DPE05101",
      "ADDRESS": "UNNUMBERED SHOP AT WEIJA JUNCTION, NEAR SANTOL FUEL STATION ",
      "Location": "NEAR SANTOL FUEL STATION ",
      "GPS COORDINATES": "5.5563568,-0.3031322",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 368,
      "AGENT BUSINESS NAME": "PASGO BUSINESS CENTER",
      "AGENT USERNAME": "PBS70301",
      "ADDRESS": "MAMPRUSI LINE, TECHIMAN-BONO EAST ",
      "Location": "NEAR  MUMPRISI ISLAMIC PRIMARY SCHOOL",
      "GPS COORDINATES": "7.592030,-1.943951",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 369,
      "AGENT BUSINESS NAME": "WINS P BUSINESS SOLUTION ",
      "AGENT USERNAME": "WPB12301",
      "ADDRESS": "MAMPROBI",
      "Location": "MAMPROBI TUESDAY MARKET",
      "GPS COORDINATES": "5.5334625, -0.2357969",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 370,
      "AGENT BUSINESS NAME": "ERIC OWUSU ANSAH ENTERPRISES ",
      "AGENT USERNAME": "EOA61201",
      "ADDRESS": "Breman,Kumasi - Ashanti",
      "Location": "Near the Breman Palace",
      "GPS COORDINATES": "6°44'16.3'N 1°38'12.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 371,
      "AGENT BUSINESS NAME": "EL'EMET VENTURES ",
      "AGENT USERNAME": "EVE02601",
      "ADDRESS": "UNNUMBERED SHOP AT TETEGU, NEAR THE TAXI RANK",
      "Location": "NEAR THE TAXI RANK",
      "GPS COORDINATES": "5.5536549,-0.3094156",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 372,
      "AGENT BUSINESS NAME": "BABS I C T CENTER",
      "AGENT USERNAME": "BIC70301",
      "ADDRESS": "MAMPRUSI LINE, TECHIMAN.BONO EAST ",
      "Location": "OPPOSITE ISLAMIC BASIS SCHOOL",
      "GPS COORDINATES": "7.5924570,-1.9440420",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 373,
      "AGENT BUSINESS NAME": "BOGA-RED JATOE ENTERPRISE ",
      "AGENT USERNAME": "BRJ09001",
      "ADDRESS": "SOMBO WA",
      "Location": "CLOSE TO THE GHANA NATIONAL FIRE SERVICE REGIONAL OFFICE ",
      "GPS COORDINATES": "10°03'12.8'N2°32'09.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 374,
      "AGENT BUSINESS NAME": "VICTORIA ZINNY ENTERPRISE ",
      "AGENT USERNAME": "VZE03601",
      "ADDRESS": "UNNUMBERED SHOP AT MALLAM",
      "Location": "MALLAM MARKET",
      "GPS COORDINATES": "5.5721300,-0.2803686",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 375,
      "AGENT BUSINESS NAME": "ESAAL ENTERPRISE ",
      "AGENT USERNAME": "ESESUB02602",
      "ADDRESS": "UNNUMBERED SHOP AT MALLAM ",
      "Location": "MALLAM MARKET",
      "GPS COORDINATES": "5.5723542,-0.2806482",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 376,
      "AGENT BUSINESS NAME": "SENIOR I P ENTERPRISE ",
      "AGENT USERNAME": "SEE09001",
      "ADDRESS": "KAMBALI WA",
      "Location": "CLOSE TO SECOND KITCHEN",
      "GPS COORDINATES": "10°03'26.3'N2°31'00.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 377,
      "AGENT BUSINESS NAME": "ISTEK VENTURES ",
      "AGENT USERNAME": "IVE05101",
      "ADDRESS": "UNNUMBERED SHOP AT MALLAM, DR. BUSIA HIGHWAY ",
      "Location": "NEAR THE SHELL FUEL STATION, ",
      "GPS COORDINATES": "5.5754225,-0.2763792",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 378,
      "AGENT BUSINESS NAME": "DICKSON ADOMAKO 82 ENTERPRISE",
      "AGENT USERNAME": "ADE61201",
      "ADDRESS": "Breman,Kumasi - Ashanti",
      "Location": "Opposite the Palace",
      "GPS COORDINATES": "6°44'22.3'N 1°38'08.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 379,
      "AGENT BUSINESS NAME": "Dedon-Sina Ventures",
      "AGENT USERNAME": "DSV61001",
      "ADDRESS": "MAGAZINE",
      "Location": "BEHIND FRANKGINA COMPANY",
      "GPS COORDINATES": "6°43'18.4'N1°37'57.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 380,
      "AGENT BUSINESS NAME": "JES+BUSINESS SOLUTIONS",
      "AGENT USERNAME": "JESSUB30103",
      "ADDRESS": "UNNUMBERED LOCATION AT AGONA SWEDRU",
      "Location": "NEAR TARZACO FILLING STATION",
      "GPS COORDINATES": "CO-OOOO-0280",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 381,
      "AGENT BUSINESS NAME": "GLOFUL KAY ENTERPRISE",
      "AGENT USERNAME": "GKE60501",
      "ADDRESS": "KAASE",
      "Location": "NEAR THE KAASE MOSQUE",
      "GPS COORDINATES": "6°39'15.9'N 1°36'40.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 382,
      "AGENT BUSINESS NAME": "FAUSTINA ANSAH MENSAH ENTERPRISE ",
      "AGENT USERNAME": "FAM30301",
      "ADDRESS": "Capecoast - Master Sam",
      "Location": "Holy Queen Coral Paint",
      "GPS COORDINATES": "5°06'46.8'N1°15'11.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 383,
      "AGENT BUSINESS NAME": "ZOE FO VENTURES",
      "AGENT USERNAME": "ZFV30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR THEIR MAIN STATION",
      "GPS COORDINATES": "CR-0008-8059",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 384,
      "AGENT BUSINESS NAME": "EMGOL COMPUTER SYSTEM ",
      "AGENT USERNAME": "ECSSUB30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR GHANA REVENUE AUTHORITY",
      "GPS COORDINATES": "CR-0008-5317",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 385,
      "AGENT BUSINESS NAME": "SAMUEL ASUBONTENG VENTURES",
      "AGENT USERNAME": "SAV60501",
      "ADDRESS": "KAASE",
      "Location": "NEAR SUMGUNG ",
      "GPS COORDINATES": "6°39'23.0' N 1°36'37.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 386,
      "AGENT BUSINESS NAME": "DELSELA ENT.",
      "AGENT USERNAME": "DEL04901",
      "ADDRESS": "ADJORMAN ROUNDABOUT  TESHIE GRADER ESTATE ",
      "Location": "CLOSE TO ADJORMAN ROUNDABOUT ",
      "GPS COORDINATES": "5'36'33.0'N 0'06'27.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 387,
      "AGENT BUSINESS NAME": "SUPER MICRO ENTERPRISE ",
      "AGENT USERNAME": "SUPSUB00702",
      "ADDRESS": "ACCRA CHILDREN'S HOSPITAL ",
      "Location": "OPPOSITE CHILDREN'S HOSPITAL ",
      "GPS COORDINATES": "5.544550,-0.212705",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 388,
      "AGENT BUSINESS NAME": "SPN MICRO CREDIT",
      "AGENT USERNAME": "SMC30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU",
      "Location": "NEAR THEIR MAIN MARKET",
      "GPS COORDINATES": "CR-0008-7653",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 389,
      "AGENT BUSINESS NAME": "RAYANN DE H.  ENTERPRISE ",
      "AGENT USERNAME": "RDK61201",
      "ADDRESS": "Breaman,Kumasi - Ashanti",
      "Location": "Breman Tanker Driver",
      "GPS COORDINATES": "6°44'17.4'N 1°38'00.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 390,
      "AGENT BUSINESS NAME": "HAZARD 10 VENTURES",
      "AGENT USERNAME": "HVESUB40104",
      "ADDRESS": "UNNUMBERED SHOP AT TAKORADI BEACH ROAD",
      "Location": "CLOSE TO GRAND FAVOUR HOTEL",
      "GPS COORDINATES": "4°53'10.4'N 1°45'32.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 391,
      "AGENT BUSINESS NAME": "ABROKWA BECCA ENTERPRISE",
      "AGENT USERNAME": "ABE30101",
      "ADDRESS": "UNNUMBERED LOCATION ASSIN FOSU",
      "Location": "NEAR AUDIT SERVICE",
      "GPS COORDINATES": "CR-0000-3147",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 392,
      "AGENT BUSINESS NAME": "HGR00301",
      "AGENT USERNAME": "HELM GRAPHICS ",
      "ADDRESS": "ACCRA ZONGO LANE ",
      "Location": "IN FRONT OF TALENT MICROFINANCE",
      "GPS COORDINATES": "5.545491,-0.210792",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 393,
      "AGENT BUSINESS NAME": "JB JUSTO VENTURES",
      "AGENT USERNAME": "JBJSUB40301",
      "ADDRESS": "HOUSE NO.AA/22 AYINASE",
      "Location": "OPPOSITE POST OFFICE",
      "GPS COORDINATES": "5°02'32.1'N 2° 27'50.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 394,
      "AGENT BUSINESS NAME": "1 NANA KUSI ULTIMATE ENTERPRISE",
      "AGENT USERNAME": "NKUSUB30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR ADB BANK",
      "GPS COORDINATES": "CN-0008-8061",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 395,
      "AGENT BUSINESS NAME": "DAN VISION ENTERPRISE ",
      "AGENT USERNAME": "DVE40602",
      "ADDRESS": "ANAJI-I.ADU ",
      "Location": "NEAR TADISCO ",
      "GPS COORDINATES": "WS-495-7267",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 396,
      "AGENT BUSINESS NAME": "GOLDEN PHONES ENTERPRISE",
      "AGENT USERNAME": "GPHSUB30102",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "INSIDE THE MAIN STATION",
      "GPS COORDINATES": "CN-0008-7686",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 397,
      "AGENT BUSINESS NAME": "GREEN MIDLAND VENTURES ",
      "AGENT USERNAME": "GMVSUB00401",
      "ADDRESS": "TEMA STATION ",
      "Location": "NEAR THE SECOND HAND CLOTHING SELLERS",
      "GPS COORDINATES": "5.549221,-0.201875",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 398,
      "AGENT BUSINESS NAME": "JB JUSTO VENTURES ",
      "AGENT USERNAME": "JBJSUB40302",
      "ADDRESS": "UNNUMBERED SHOP AT EIKWE",
      "Location": "NEAR ST. MARTIN DE PORRES HOSPITAL",
      "GPS COORDINATES": "4°57'53.2'28'10.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 399,
      "AGENT BUSINESS NAME": "1ST GENE ENTERPRISE",
      "AGENT USERNAME": "GEN20301",
      "ADDRESS": "Hse No L29 Near Main Station Sakyikrom Nsawam",
      "Location": "Opposite Sakyikrom durba grounds",
      "GPS COORDINATES": "5.8104770, -0.3609210",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 400,
      "AGENT BUSINESS NAME": "BABYASK BUSINESS CENTER",
      "AGENT USERNAME": "BBC30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "OPPOSITE THE POLICE STATION",
      "GPS COORDINATES": "CR-0008-7502",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 401,
      "AGENT BUSINESS NAME": "JUST AUTHENTIC ENTERPRISE ",
      "AGENT USERNAME": "JAE40101",
      "ADDRESS": "A SHOP AT TAKORADI NEW SITE",
      "Location": "NEAR PENTECOST PREPATORY SCHOOL",
      "GPS COORDINATES": "4°54'55.1'1°45'30.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 402,
      "AGENT BUSINESS NAME": "ASABEE JAH BLESS",
      "AGENT USERNAME": "AJB30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU",
      "Location": "OPPOSITE COMMERCIAL BANK",
      "GPS COORDINATES": "CR-0008-1297",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 403,
      "AGENT BUSINESS NAME": "JJE00701",
      "AGENT USERNAME": "JES J ENTERPRISE ",
      "ADDRESS": "OLD TEMA STATION ",
      "Location": "OPPOSITE REGISTRAR GENERAL OFFICE ",
      "GPS COORDINATES": "5.549660,-0.200118",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 404,
      "AGENT BUSINESS NAME": "Great Osor venue",
      "AGENT USERNAME": "GOVSUB20301",
      "ADDRESS": "Main Station, Suhum.",
      "Location": "Adjacent Okroase taxi station",
      "GPS COORDINATES": "6.0399930, -0.4487440",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 405,
      "AGENT BUSINESS NAME": "AME00301",
      "AGENT USERNAME": "AMOAK EXPRESS ",
      "ADDRESS": "OLD TEMA STATION ",
      "Location": "OPPOSITE RURAL URBAN DEPARTMENT ",
      "GPS COORDINATES": "5.549552,-0.199657",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 406,
      "AGENT BUSINESS NAME": "SAM PASSION VENTURES",
      "AGENT USERNAME": "SPV40301",
      "ADDRESS": "HOUSE NO. LVA 200,AXIM",
      "Location": "NEAR THE MARKET",
      "GPS COORDINATES": "4°51'46.8'N 2°14'29.4 'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 407,
      "AGENT BUSINESS NAME": "BLESSMAN DE HERO STAR VENTURES",
      "AGENT USERNAME": "BDH30101",
      "ADDRESS": "UNNUMBERED HOUSE AT ASSIN FOSU",
      "Location": "NEAR COMMUNITY PARK",
      "GPS COORDINATES": "CS-3235-1225",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 408,
      "AGENT BUSINESS NAME": "NANA BONSU ASENSO ENTERPRISE ",
      "AGENT USERNAME": "NAE61201",
      "ADDRESS": "Breman Pentecost,Kumasi - Ashanti",
      "Location": "Opposite  Breman market",
      "GPS COORDINATES": "6°44'23.3'N 1°38'08.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 409,
      "AGENT BUSINESS NAME": "IKEBEN JNR ENTERPRISE",
      "AGENT USERNAME": "1JE30101",
      "ADDRESS": "UNNUMBERED HOUSE AT ASSIN FOSU",
      "Location": "NEAR THE MARKET",
      "GPS COORDINATES": "CG-0699-5951",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 410,
      "AGENT BUSINESS NAME": "BRIGHT B. 20 ENTERPRISE",
      "AGENT USERNAME": "BRB 61201.00",
      "ADDRESS": "Breman A-108",
      "Location": "Opposite Breman market ",
      "GPS COORDINATES": "6°44'30.8'N 1°38'07.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 411,
      "AGENT BUSINESS NAME": "AIH01701",
      "AGENT USERNAME": "ABIDE IN HIS PRESENCE ENTERPRISE ",
      "ADDRESS": "TEMA STATION ",
      "Location": "INSIDE TEMA STATION ",
      "GPS COORDINATES": "5.547196,-0.201096",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 412,
      "AGENT BUSINESS NAME": "CABES BUSINESS AND TRAINING ENTERPRISE",
      "AGENT USERNAME": "CBASUB30102",
      "ADDRESS": "HOUSE NUMBER SA 124 ASSIN AKROPONG",
      "Location": "NEAR PRESBYTARIAN CHURCH ",
      "GPS COORDINATES": "CR-0633-7191",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 413,
      "AGENT BUSINESS NAME": "PROF K ENTERPRISE ",
      "AGENT USERNAME": "PKV02701",
      "ADDRESS": "MALIK ROUNDABOUT ",
      "Location": "NEAR MARKET HIGHSTREET",
      "GPS COORDINATES": "5'36'59.5'N 0'.06'50.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 414,
      "AGENT BUSINESS NAME": "EMMANUEL TELECOM",
      "AGENT USERNAME": "EMT40101",
      "ADDRESS": "UNNUMBERED PLOT AT TAKORADI  QUARTERS",
      "Location": "NEAR THE NEW MARKET",
      "GPS COORDINATES": "4°53'53.1 'N 1°45'24.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 415,
      "AGENT BUSINESS NAME": "EMPRESS MOBILE MONEY AND TRADING ",
      "AGENT USERNAME": "EMV61201",
      "ADDRESS": "Breman, Kumasi - Ashanti",
      "Location": "Near the Glo Mast ",
      "GPS COORDINATES": "6°44'29.6'N 1°38'13.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 416,
      "AGENT BUSINESS NAME": "NATLEE VENTURES ",
      "AGENT USERNAME": "NVESUB00301",
      "ADDRESS": "TEMA STATION ",
      "Location": "OPPOSITE ACCRA HOCKEY PITCH ",
      "GPS COORDINATES": "5.548198,-0.202422",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 417,
      "AGENT BUSINESS NAME": "BLESSING ENTERPRISE",
      "AGENT USERNAME": "BEN50102",
      "ADDRESS": "INDEPENDENT AVENUE",
      "Location": "CLOSE TO GCB BANK",
      "GPS COORDINATES": "6.611199, 0.470616",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 418,
      "AGENT BUSINESS NAME": "BB SMART ENTERPRISE (PSALM 91)",
      "AGENT USERNAME": "BSE50101",
      "ADDRESS": "INDEPENDENT AVENUE, TARSO HOTEL",
      "Location": "BESIDE ADB ",
      "GPS COORDINATES": "6.609812, 0.471312",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 419,
      "AGENT BUSINESS NAME": "Next Is Now Investment ",
      "AGENT USERNAME": "NIN60801",
      "ADDRESS": "Santasi Roundabout ",
      "Location": "Opposite  the Goil Filling Station ",
      "GPS COORDINATES": "6°40'24.0'N1°38'25.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 420,
      "AGENT BUSINESS NAME": "HARD AGYA ELECTRICALS",
      "AGENT USERNAME": "HAE30101",
      "ADDRESS": "UNNUMBERED HOUSE AT ASSIN FOSU",
      "Location": "NEAR MCE RESIDENCE",
      "GPS COORDINATES": "CR-0008-2507",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 421,
      "AGENT BUSINESS NAME": "ITEQ MOBILE MONEY AND TRADING VENTURES ",
      "AGENT USERNAME": "IMMSUB01701",
      "ADDRESS": "AKOTO LANTE",
      "Location": "NEAR FAITH EVANGELICAL CHURCH ",
      "GPS COORDINATES": "5.540175,-0.212183",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 422,
      "AGENT BUSINESS NAME": "Ahinfie Frimpong",
      "AGENT USERNAME": "AFE60801",
      "ADDRESS": "Santasi Roundabout ",
      "Location": "Near Melcom Ghana",
      "GPS COORDINATES": "6°40'15.6'N1,°38'13.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 423,
      "AGENT BUSINESS NAME": "NAAH EMMANUEL ENTERPRISE ",
      "AGENT USERNAME": "NEE61201",
      "ADDRESS": "Breman, Kumasi - Ashanti",
      "Location": "Near DVLA Road worthy centre ",
      "GPS COORDINATES": "6°44'31.7'N 1°37'53.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 424,
      "AGENT BUSINESS NAME": "Kinafranie Enterprise ",
      "AGENT USERNAME": "KIE60501",
      "ADDRESS": "Odeneho  Kwadaso",
      "Location": "Near Tasty Queen",
      "GPS COORDINATES": "6°40'09.0'N1°38'31.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 425,
      "AGENT BUSINESS NAME": "DREAMS MOBILE SERVICES ",
      "AGENT USERNAME": "DMS30201",
      "ADDRESS": "CAPECOAST - CCMA ",
      "Location": "CCMA  BUILDING ",
      "GPS COORDINATES": "5°06'40.9'N1°14'50.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 426,
      "AGENT BUSINESS NAME": "K T Mas Service",
      "AGENT USERNAME": "KTM60801",
      "ADDRESS": "Santasi Roundabout ",
      "Location": "Opposite  the timber market ",
      "GPS COORDINATES": "6°40'12.6'N 1°38'30.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 427,
      "AGENT BUSINESS NAME": "HALOBA SERVICES ",
      "AGENT USERNAME": "HAS00301",
      "ADDRESS": "AKOTO LANTE ",
      "Location": "NEAR AKOTO LANTE MARKET ",
      "GPS COORDINATES": "5.538738,-0.215226",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 428,
      "AGENT BUSINESS NAME": "Brake Lady Vive Enterprise ",
      "AGENT USERNAME": "BLV60801",
      "ADDRESS": "Santasi Roundabout ",
      "Location": "Near Fidelity Bank",
      "GPS COORDINATES": "6°40'17.6'N 1°38'20.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 429,
      "AGENT BUSINESS NAME": "RUNRUBY COMPANY LIMITED",
      "AGENT USERNAME": "RCL61201",
      "ADDRESS": "Breman, Kumasi - Ashanti",
      "Location": "Near Road Worthy Centre",
      "GPS COORDINATES": "6°44'12.6'N 1°37'57.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 430,
      "AGENT BUSINESS NAME": "RICHNOR-SEL ENTERPRISE ",
      "AGENT USERNAME": "RENSUB30303",
      "ADDRESS": "CAPECOAST - JUBILEE SCHOOL ",
      "Location": "GRA OFFICE",
      "GPS COORDINATES": "5°06'28.1'N1°14'50.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 431,
      "AGENT BUSINESS NAME": "HUD OF DREAMS ",
      "AGENT USERNAME": "HUD70401",
      "ADDRESS": "SHOP TR 12 TANOSO - SUNYANI",
      "Location": "OPPOSITE TANOSO NURSING TRAINING SCHOLL",
      "GPS COORDINATES": "7. 16'07. 9'N 2 .14'05.0' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 432,
      "AGENT BUSINESS NAME": "BABY CEE VENTURES ",
      "AGENT USERNAME": "BCV61201",
      "ADDRESS": "Breman UGC-A-031",
      "Location": "Close to Zion Kids International School ",
      "GPS COORDINATES": "6°44'42.8'N 1°37'40.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 433,
      "AGENT BUSINESS NAME": "GLOBAL EXCELLENT DISTRIBUTION ",
      "AGENT USERNAME": "GLDSUB70202",
      "ADDRESS": "BLOCK 12 D / A DORMAA AHENKRO",
      "Location": "OPPOSITE GCB DORMAA AHENKRO ",
      "GPS COORDINATES": "7. 16' 43. 0' N 2.52' 14. 7 ' w",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 434,
      "AGENT BUSINESS NAME": "CALVARY LOVE COOPERATIVE CREDIT UNION ",
      "AGENT USERNAME": "CLC61001",
      "ADDRESS": "Breman, Kumasi - Ashanti ",
      "Location": "Opposite Zion Kids International school ",
      "GPS COORDINATES": "6°44'42.0'N 1°37'38.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 435,
      "AGENT BUSINESS NAME": "RICHNOR-SEL ENTERPRISE ",
      "AGENT USERNAME": "RELSUB30204",
      "ADDRESS": "CAPECOAST ABOOM",
      "Location": "St. Monica's School ",
      "GPS COORDINATES": "5°06'40.0'N1°14'59.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 436,
      "AGENT BUSINESS NAME": "EDZUMAH VENTURES",
      "AGENT USERNAME": "EDZSUB30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN NYAKOMANASE",
      "Location": "OPPOSITE OYESS SCHOOL",
      "GPS COORDINATES": "CR-0004-6438",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 437,
      "AGENT BUSINESS NAME": "O JEE TRADING ENTERPRISE ",
      "AGENT USERNAME": "JTE30301",
      "ADDRESS": "CAPECOAST - ABOOM WELLS",
      "Location": "PASSPORT OFFICE ",
      "GPS COORDINATES": "5°06'34.0'N1°15'07.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 438,
      "AGENT BUSINESS NAME": "AGAMBAA GIVERS NEVER LACK ENTERPRISE",
      "AGENT USERNAME": "AGN90101",
      "ADDRESS": "UNNUMBERED CONTAINER YIKENE",
      "Location": "NEAR YIKENE PRIMARY SCHOOL",
      "GPS COORDINATES": "10°48'38.2'N 0°54'32.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 439,
      "AGENT BUSINESS NAME": "BIGE-GUBERE ENTERPRISE",
      "AGENT USERNAME": "BGE90101",
      "ADDRESS": "UNNUMBERED STORE SUMBRUNGU",
      "Location": "SUMBRUNGU MARKET",
      "GPS COORDINATES": "10°49'20.8'N 0°56'12.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 440,
      "AGENT BUSINESS NAME": "WILPHIN ENTERPRISE",
      "AGENT USERNAME": "WIE90101",
      "ADDRESS": "UB-0964-6468",
      "Location": "SUMBRUNGU WOMEN TRAINING CENTER",
      "GPS COORDINATES": "10°49'23.4'N 0°56'24.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 441,
      "AGENT BUSINESS NAME": "DONVANENT VENTURES ",
      "AGENT USERNAME": "DVC70101",
      "ADDRESS": "Shop F 12 sunyani Fiapre",
      "Location": "ADJACENT FRIMPS FILLING STATION ",
      "GPS COORDINATES": "7.21'19.4' N 2.20.46.6' w",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 442,
      "AGENT BUSINESS NAME": "BEPART ENTERPRISE",
      "AGENT USERNAME": "BEE90101",
      "ADDRESS": "UNNUMBERED CONTAINER TANZUI BOLGATANGA UE/R",
      "Location": "NEAR VRA SUBSTATION",
      "GPS COORDINATES": "10°47'36.4'N 0°52'09.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 443,
      "AGENT BUSINESS NAME": "ZIKO VISION ENTERPRISE",
      "AGENT USERNAME": "ZVE90101",
      "ADDRESS": "UNNUMBERED CONTAINER WAREBISI BOLGATANGA UE/R",
      "Location": "NURUL ISLAM PRIMARY SCHOOL",
      "GPS COORDINATES": "10°47'02.1'N 0°51'26.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 444,
      "AGENT BUSINESS NAME": "BOIMZALE ENTERPRISE",
      "AGENT USERNAME": "BOE90101",
      "ADDRESS": "UNNUMBERED STORE DAGMEO BOLGATANGA UE/R",
      "Location": "SPEEDLINK RESTAURANT",
      "GPS COORDINATES": "10°46'48.9'N 0°51'13.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 445,
      "AGENT BUSINESS NAME": "ZUMAHMANN VENTURES",
      "AGENT USERNAME": "ZUV70301",
      "ADDRESS": "MAMPRUSI LINE, TECHIMAN,BONO EAST",
      "Location": "INFRONT OF GINAMMED DENTAL CARE",
      "GPS COORDINATES": "7.591925,-1.942151",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 446,
      "AGENT BUSINESS NAME": "AYINGURA JOYFEST ENTERPRISE",
      "AGENT USERNAME": "AJE90101",
      "ADDRESS": "UNNUMBERED CONTAINER ZAARE BOLGATANGA UE/R",
      "Location": "OPPOSITE UPPER QUARRY OFFICE",
      "GPS COORDINATES": "10°48'33.9'N 0°51'17.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 447,
      "AGENT BUSINESS NAME": "Kopside Enterprise",
      "AGENT USERNAME": "KSE61002",
      "ADDRESS": "Magazine",
      "Location": "Near K.Fosu Company",
      "GPS COORDINATES": "6°43'10'.0'N1°37'53.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 448,
      "AGENT BUSINESS NAME": "J.K SWAPTEL ENTERPRISE",
      "AGENT USERNAME": "JKS90101",
      "ADDRESS": "LCH 1B GWCL QUARTERS POBAGA ESTATE BOLGATANGA UE/R",
      "Location": "NEAR THE POINT RESTAURANT",
      "GPS COORDINATES": "10°46'22.3'N 0°51'27.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 449,
      "AGENT BUSINESS NAME": "HAJIA EXPRESS ENTERPRISE",
      "AGENT USERNAME": "HEESUB12301",
      "ADDRESS": "SEMPE ",
      "Location": "NEAR SEMPE CLUSTER OF SCHOOLS",
      "GPS COORDINATES": "5.5371125, -0.2379844",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 450,
      "AGENT BUSINESS NAME": "BISYABS ENTERPRISE ",
      "AGENT USERNAME": "BENSUB70401",
      "ADDRESS": "Shop 12/ ODUMASE",
      "Location": "ADJACENT NDC OFFICE , ODUMASE ",
      "GPS COORDINATES": "7.21'14.8'N 2'19'20.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 451,
      "AGENT BUSINESS NAME": "JOEMANS PHONES AND ACCESSORIES ",
      "AGENT USERNAME": "JPASUB20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT NKAWKAW WHITE HOUSE STATION ",
      "Location": "NEAR MUNICIPAL ASSEMBLY ",
      "GPS COORDINATES": "6°33'04.8' N 0°46'01.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 452,
      "AGENT BUSINESS NAME": "OBAATANPA ESTHER VENTURES ",
      "AGENT USERNAME": "OEV20101",
      "ADDRESS": "STORE NUMBER B 22 NKAWKAW UNITY GARDENS",
      "Location": "NEAR CENTRAL MARKET NKAWKAW",
      "GPS COORDINATES": "6°33'04.7' N 0°45'58.6' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 453,
      "AGENT BUSINESS NAME": "CANDLE LIGHT HOTEL AND CONSTRUCTION LTD ",
      "AGENT USERNAME": "CLHSUB20101",
      "ADDRESS": "STORE NUMBER A 0069 NEW ABIREM",
      "Location": "NEAR NEW ABIREM RUN ABOUT",
      "GPS COORDINATES": "6°21'13.5' N 0°59'54.0' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 454,
      "AGENT BUSINESS NAME": "NAKDAS BUSINESS CENTRE ",
      "AGENT USERNAME": "NBC20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT AKIM AFOSU",
      "Location": "ADJACENT I N I CLINIC",
      "GPS COORDINATES": "6°22'23.7' N 0°59'45.1' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 455,
      "AGENT BUSINESS NAME": "ZEHENPONG VENTURES",
      "AGENT USERNAME": "ZEV61001",
      "ADDRESS": "MAGAZINE",
      "Location": "CLOSER TO MATHIAS JUNCTION",
      "GPS COORDINATES": "6°43'10.0'N1°37'53.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 456,
      "AGENT BUSINESS NAME": "ALHAJI ZULKI VENTURES ",
      "AGENT USERNAME": "AZV20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT AFOSU STATION ",
      "Location": "NEAR AFOSU LORRY STATION ",
      "GPS COORDINATES": "6°22'23.7' N 0°59'45.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 457,
      "AGENT BUSINESS NAME": "SOLAT ELECTRICALS ENTERPRISE ",
      "AGENT USERNAME": "SEE02801",
      "ADDRESS": "ASHAIMAN TRAFFIC",
      "Location": "OPPOSITE THE POLICE STATION",
      "GPS COORDINATES": "5.6877050,-0.0304060",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 458,
      "AGENT BUSINESS NAME": "TALK SOLUTION",
      "AGENT USERNAME": "TASSUB02801",
      "ADDRESS": "ASHAIMAN TULAKU",
      "Location": "OPPOSITE THE STABIC BANK",
      "GPS COORDINATES": "5.688565,-0.029097",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 459,
      "AGENT BUSINESS NAME": "OBOSHIE EXPRESS ENTERPRISE",
      "AGENT USERNAME": "OEESUB02801",
      "ADDRESS": "MATAHEKO BASIC SCHOOL",
      "Location": "NEAR MAY'S BEAUTY PARLOUR",
      "GPS COORDINATES": "5.758671,-0.007624",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 460,
      "AGENT BUSINESS NAME": "THERESAH OPOKU ENTERPRISE",
      "AGENT USERNAME": "TOE60501",
      "ADDRESS": "KAASE",
      "Location": "OPPOSITE GUINNESS GHANA LTD",
      "GPS COORDINATES": "6°39'05.2'N 1°36'23.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 461,
      "AGENT BUSINESS NAME": "Ferdyfaus Enterprise ",
      "AGENT USERNAME": "FDE40501",
      "ADDRESS": "Unnumbered house at Karekwanano, Tarkwa",
      "Location": "Opposite Golden Age School ",
      "GPS COORDINATES": "5.17’56.5'N  1.58’52.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 462,
      "AGENT BUSINESS NAME": "TEBESTY VENTURES",
      "AGENT USERNAME": "TVE03102",
      "ADDRESS": "ACCRA NEW TOWN",
      "Location": "INFRONT LAPAZ STATION NEW TOWN",
      "GPS COORDINATES": "5.584143, -0.208214",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 463,
      "AGENT BUSINESS NAME": "LEEWAA ENTERPRSIE",
      "AGENT USERNAME": "LENSUB03102",
      "ADDRESS": "ACCRA NEW TOWN",
      "Location": "NEAR 37 STATION",
      "GPS COORDINATES": "5.587007,-0.207406",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 464,
      "AGENT BUSINESS NAME": "St buabeng enterprise ",
      "AGENT USERNAME": "SBE60401",
      "ADDRESS": "Abrepo junction",
      "Location": "Opposite shell filling fuelling station",
      "GPS COORDINATES": "6°42'27.7'N1°38'15.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 465,
      "AGENT BUSINESS NAME": "OPHY DARA ENTERPRISE",
      "AGENT USERNAME": "ODA03101",
      "ADDRESS": "CIRCLE",
      "Location": "CIRCLE NEW TOWN TROTRO STATION",
      "GPS COORDINATES": "5.572931, -0.213833",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 466,
      "AGENT BUSINESS NAME": "ANNEX PLAZA HOTEL LIMITED",
      "AGENT USERNAME": "APH60501",
      "ADDRESS": "BEKWAI",
      "Location": "NEAR PRESBYTERIAN CHURCH",
      "GPS COORDINATES": "6°27'17.5'N 1°34' 55.6' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 467,
      "AGENT BUSINESS NAME": "EXPERT CORNER ",
      "AGENT USERNAME": "EXC60401",
      "ADDRESS": "Abrepo junction",
      "Location": "Near adoato station.",
      "GPS COORDINATES": "6°42'37.3'N1°38'18.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 468,
      "AGENT BUSINESS NAME": "TECHSTUFF",
      "AGENT USERNAME": "TECSUB04102",
      "ADDRESS": "LEGON CAMPUS COMMON WEALTH HALL",
      "Location": "INFRONT OF COMMON WEALTH HALL",
      "GPS COORDINATES": "5.650444, -0.190345",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 469,
      "AGENT BUSINESS NAME": "LENKA ENTERPRISE",
      "AGENT USERNAME": "LEN03102",
      "ADDRESS": "CIRCLE",
      "Location": "INSIDE CIRCLE MALL",
      "GPS COORDINATES": "5.571182,-0.215711",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 470,
      "AGENT BUSINESS NAME": "ETERNITY DAVIDO ONE ENTERPRISE",
      "AGENT USERNAME": "EDVSUB03101",
      "ADDRESS": "KOKMLEMLE",
      "Location": "OPPOSITE FIDELITY BANK",
      "GPS COORDINATES": "5.577401,-0.212118",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 471,
      "AGENT BUSINESS NAME": "LOGIN MULTIMEDIA AND INTERNET CAFE",
      "AGENT USERNAME": "LMI02801",
      "ADDRESS": "HSE NO R/J17 GOLF CITY",
      "Location": "NEAR LE-DOMINO HOTEL",
      "GPS COORDINATES": "5.7127790,-0.0093000",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 472,
      "AGENT BUSINESS NAME": "Brodsky innovative ventures ",
      "AGENT USERNAME": "BIV60401",
      "ADDRESS": "South suntreso",
      "Location": "Right side off the sofoline - bekwai r/a main road",
      "GPS COORDINATES": "6°41'39.7'N1°38'28.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 473,
      "AGENT BUSINESS NAME": "GORGORZEGOOR",
      "AGENT USERNAME": "GOV02101",
      "ADDRESS": "ABLEMKPE",
      "Location": "CLOSE TO THE BIG GUTTER",
      "GPS COORDINATES": "5.606618,-0.222400",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 474,
      "AGENT BUSINESS NAME": "KING PRINCE ENTERPRISE",
      "AGENT USERNAME": "KPE02801",
      "ADDRESS": "HAVANA-OFF MICHEL CAMP ROAD",
      "Location": "NEAR THE MARRIAGE REGISTRAR",
      "GPS COORDINATES": "5.7116371,-0.0150421",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 475,
      "AGENT BUSINESS NAME": "ANGELWALK VENTURES ",
      "AGENT USERNAME": "AVE60401",
      "ADDRESS": "Ahodwo roundabout",
      "Location": "Near ahodwo roundabout ",
      "GPS COORDINATES": "6°40'10.2'N1°37'03.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 476,
      "AGENT BUSINESS NAME": "TEE VALENTINE ENTERPRISE",
      "AGENT USERNAME": "TVE03101",
      "ADDRESS": "KOKOMLEMLE",
      "Location": "INFRONT OF FIDELITY BANK",
      "GPS COORDINATES": "5.577556,-0.211975",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 477,
      "AGENT BUSINESS NAME": "BASSLIZ KAKERY AND GENERAL MERCHANT",
      "AGENT USERNAME": "BBG02801",
      "ADDRESS": "BETHLEHEM, HAVANA ROAD",
      "Location": "NEAR JEHOVAH'S WITNESSES CHURCH",
      "GPS COORDINATES": "507116274,-0.0151231",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 478,
      "AGENT BUSINESS NAME": "ALLAH IS SUFFICIENT ENTERPRISE ",
      "AGENT USERNAME": "ASE40601",
      "ADDRESS": "KWESIMINTIM ",
      "Location": "NEAR THE KWESIMINTIM TRAFFIC LIGHT",
      "GPS COORDINATES": "WS-593-2147",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 479,
      "AGENT BUSINESS NAME": "KIYAT VENTURES",
      "AGENT USERNAME": "KVE02801",
      "ADDRESS": "ZENU AGAPE FILLING STATION",
      "Location": "NEAR ZENU CENTRAL MOSQUE",
      "GPS COORDINATES": "5.7207140,-0.0528600",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 480,
      "AGENT BUSINESS NAME": "SIKABACQUAH ENTERPRISE ",
      "AGENT USERNAME": "SIE40601",
      "ADDRESS": "DIABENE -KETAN",
      "Location": "NEAR THE DIABENE MARKET ",
      "GPS COORDINATES": "4.9625220,-1.7416940",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 481,
      "AGENT BUSINESS NAME": "TIMETELL PLUS",
      "AGENT USERNAME": "TPE 3201.00",
      "ADDRESS": "TESANO ",
      "Location": "OPPOSITE FIDELITY BANK",
      "GPS COORDINATES": "5.598308,-0.223631",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 482,
      "AGENT BUSINESS NAME": "OKLE INNOVATION ENTERPRISE",
      "AGENT USERNAME": "OIE02801",
      "ADDRESS": "ASHAIMAN ZENU ",
      "Location": "NEAR DEVINE HEALERS CHURCH",
      "GPS COORDINATES": "50719757,-0.053781",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 483,
      "AGENT BUSINESS NAME": "KOFIAS ASEDA KESIE ENTERPRISE",
      "AGENT USERNAME": "KAK02801",
      "ADDRESS": "ASHAIMAN ATADEKA JUNCTION",
      "Location": "NEAR AKOFA RESTAURANT",
      "GPS COORDINATES": "5.7286800,-0.0623010",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 484,
      "AGENT BUSINESS NAME": "PRIME TRIPPLE H ENTERPRISE",
      "AGENT USERNAME": "PTHSUB0280",
      "ADDRESS": "ASHAIMAN ZENU",
      "Location": "NEAR MOTHER OF GOD HOSPITAL",
      "GPS COORDINATES": "507421531,-0.0545120",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 485,
      "AGENT BUSINESS NAME": "JOHN SINO TRADING ENTERPRISE",
      "AGENT USERNAME": "JST02101",
      "ADDRESS": "TESANO",
      "Location": "BEHIND TESANO POLICE STATION",
      "GPS COORDINATES": "5.603493,-0.223110",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 486,
      "AGENT BUSINESS NAME": "KHAGROS ENTERPRISE",
      "AGENT USERNAME": "KEN40601",
      "ADDRESS": "EFFIAKUMA ",
      "Location": "NEAR THE WASHING BAY ",
      "GPS COORDINATES": "4.9301770,-1.7634930",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 487,
      "AGENT BUSINESS NAME": "Amaron Plus",
      "AGENT USERNAME": "AMPSUB20301",
      "ADDRESS": "Asamankese main station. Asamankese",
      "Location": "Adjacent to Be-Kind Retail Shop",
      "GPS COORDINATES": "5.8615500, -0.6677980",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 488,
      "AGENT BUSINESS NAME": "MILLENIUM  GENE ENTERPRISE",
      "AGENT USERNAME": "MGESUB02801",
      "ADDRESS": "UNN SHOP ASHAIMAN MARKET",
      "Location": "NEAR ASHAIMAN GOVERNMENT SCHOOL",
      "GPS COORDINATES": "5.6901320,-0.0319660",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 489,
      "AGENT BUSINESS NAME": "ELVIS ASAM VENTURES ",
      "AGENT USERNAME": "EAV70201",
      "ADDRESS": "BLOCK 12 BEREKUM",
      "Location": "OPPOSITE ABSA BANK",
      "GPS COORDINATES": "7. 27'00. 6' N 2.35'04. W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 490,
      "AGENT BUSINESS NAME": "MILLENIUM  GENE ENTERPRISE",
      "AGENT USERNAME": "MGESUB02802",
      "ADDRESS": "ASHAIMAN MARKET",
      "Location": "OPPOSITE THE HFC BANK",
      "GPS COORDINATES": "5.6910320,-0.0318670",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 491,
      "AGENT BUSINESS NAME": "Amaron plus",
      "AGENT USERNAME": "AMPSUB20302",
      "ADDRESS": "Kwasia Market, Asamankese",
      "Location": "Near Kwasia market",
      "GPS COORDINATES": "5.860930, -0.668451",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 492,
      "AGENT BUSINESS NAME": "HOLY BIBLE VENTURE",
      "AGENT USERNAME": "HBV19101",
      "ADDRESS": "BANKA STREET, DAMBAI",
      "Location": "NEAR CHIEF PALACE",
      "GPS COORDINATES": "8.0545860, 0.1819130",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 493,
      "AGENT BUSINESS NAME": "OHEMMAA MERCY GYAWU",
      "AGENT USERNAME": "OMGSUB03102",
      "ADDRESS": "CIRCLE",
      "Location": "NEAR NEW TOWN TROTRO STATION",
      "GPS COORDINATES": "5.577744,-0.211842",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 494,
      "AGENT BUSINESS NAME": "ACTION SOLOMON BILLAH VENTURES",
      "AGENT USERNAME": "ASB19101",
      "ADDRESS": "BANKA JUNCTION DAMBAI",
      "Location": "ADJACENT T,T ENERGY FUEL",
      "GPS COORDINATES": "8.0592480, 0.1956080",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 495,
      "AGENT BUSINESS NAME": "SAMUEL ABLE GOD ENTERPRISE ",
      "AGENT USERNAME": "SAG60401",
      "ADDRESS": "AHINSAN",
      "Location": "OPPOSITE GCB",
      "GPS COORDINATES": "6°39'50.2'N1°36'10.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 496,
      "AGENT BUSINESS NAME": "ELVISCO ELECTRICALS AND BOREHOLE DRILLING",
      "AGENT USERNAME": "ELESUB61102",
      "ADDRESS": "AHINSAN",
      "Location": "OPPOSITE ASHFOAM OFFICE",
      "GPS COORDINATES": "6°39'48.6'N1°36'13.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 497,
      "AGENT BUSINESS NAME": "Mupaason Enterprise ",
      "AGENT USERNAME": "MUPSUB40501",
      "ADDRESS": "Unnumbered location at Tarkwa",
      "Location": "Opposite Fidelity bank ",
      "GPS COORDINATES": "5.18’21.4'N  1.59’41.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 498,
      "AGENT BUSINESS NAME": "AMOS PHOTOS ",
      "AGENT USERNAME": "AMPSUB30201",
      "ADDRESS": "UCC CAPECOAST ",
      "Location": "SCIENCE MARKET ",
      "GPS COORDINATES": "5°06'53.7'N1°17'33.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 499,
      "AGENT BUSINESS NAME": "JESSY JONES 92 ENTERPRISE",
      "AGENT USERNAME": "JJV60101",
      "ADDRESS": "STADIUM",
      "Location": "NEAR BRIGINA RESTAURANT ",
      "GPS COORDINATES": "6°41'03.6'N 1°36'28.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 500,
      "AGENT BUSINESS NAME": "OWUTECH SOLUTION ",
      "AGENT USERNAME": "OSO60601",
      "ADDRESS": "BOMSO",
      "Location": "Near Bomso Clinic",
      "GPS COORDINATES": "6°40'59.6'N 1°34'41.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 501,
      "AGENT BUSINESS NAME": " GOWUS ROYAL VENTURES",
      "AGENT USERNAME": "GRV70301",
      "ADDRESS": "P.O.BOX 67, TECHIMAN, BONO EAST",
      "Location": "NEAR NANA ABENAA MARKET,OFF VRA ROAD",
      "GPS COORDINATES": "7.578890,-1.927482/7'34'44.0'N1'55'38.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 502,
      "AGENT BUSINESS NAME": "DEPENDABLE GOD AGRO CHEMICAL AND MOBILE MONEY  ",
      "AGENT USERNAME": "DGASUB70301",
      "ADDRESS": "BUSUNYA, NKORANZA SOUTH",
      "Location": "NEAR BUSUNYA MARKET, ",
      "GPS COORDINATES": "7.6886000,-1.6628300",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 503,
      "AGENT BUSINESS NAME": "DEPENDABLE GOD AGRO CHEMICAL AND MOBILE MONEY",
      "AGENT USERNAME": "DGASUB70302",
      "ADDRESS": "BUSUNYA -NKORANZA SOUTH, BONO EAST",
      "Location": "NEAR BUSUNYA MAIN MARKET",
      "GPS COORDINATES": "BN-0003-5642",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 504,
      "AGENT BUSINESS NAME": "M A JAZZ VENTURES",
      "AGENT USERNAME": "MAJ70301",
      "ADDRESS": "DAGOBA LINE, TECHIMAN-BONO EAST",
      "Location": "NEAR DAGOBA LINE /JUNCTION",
      "GPS COORDINATES": "7.590248,1.9351680/7'35'24.9'N1'56'06.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 505,
      "AGENT BUSINESS NAME": "Sarah G Plus Enterprise",
      "AGENT USERNAME": "SAA61001",
      "ADDRESS": "Suame ",
      "Location": "Closer to Suame roundabout",
      "GPS COORDINATES": "6°42'51.5'1°37'44.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 506,
      "AGENT BUSINESS NAME": "RHISWAN BUSINESS CENTRE ",
      "AGENT USERNAME": "RBC30201",
      "ADDRESS": "CAPECOAST PEDU",
      "Location": "Pedu Bus Station ",
      "GPS COORDINATES": "5°07'32.9'N1°16'16.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 507,
      "AGENT BUSINESS NAME": "Joyce 84 Ventures",
      "AGENT USERNAME": "J8V61001",
      "ADDRESS": "SUAME",
      "Location": "Opposite State boys JHS",
      "GPS COORDINATES": "6°42'41.1'N1°37'38.5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 508,
      "AGENT BUSINESS NAME": "PENTAGON SHIELD VENTURES ",
      "AGENT USERNAME": "PSV30201",
      "ADDRESS": "CAPECOAST PEDU ",
      "Location": "St. John Baptist Catholic church ",
      "GPS COORDINATES": "5°07'34.9'N1°16'18.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 509,
      "AGENT BUSINESS NAME": "HENPRIBOAT SERVICES ENTERPRISE ",
      "AGENT USERNAME": "HSESUB30202",
      "ADDRESS": "Capecoast Pedu ",
      "Location": "Baiden Ghartey Junction ",
      "GPS COORDINATES": "5°07'36.8'N1°16'20.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 510,
      "AGENT BUSINESS NAME": "KING SOO ENTERPRISE",
      "AGENT USERNAME": "KIS61001",
      "ADDRESS": "SUAME",
      "Location": "OPPOSITE STATE GIRLS JHS",
      "GPS COORDINATES": "6°42'32.6'N1°38'02.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 511,
      "AGENT BUSINESS NAME": "DOREDEM VENTURES ",
      "AGENT USERNAME": "DVESUB40101",
      "ADDRESS": "UNNUMBERED SHOP BEHIND SG BANK,MARKET CIRCLE TAKORADI",
      "Location": "CLOSE TO FIDELITY BANK BRANCH ,TMC",
      "GPS COORDINATES": "5°53'51 .3'N 1°45'29.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 512,
      "AGENT BUSINESS NAME": "GIGS TREND VENTURES ",
      "AGENT USERNAME": "GTV02401",
      "ADDRESS": "CIRCLE ODORNA",
      "Location": "CLOSE TO ODORNA LORRY STATION ",
      "GPS COORDINATES": "5.538738,-0.215226",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 513,
      "AGENT BUSINESS NAME": "KNATURES LINK",
      "AGENT USERNAME": "KNL40101",
      "ADDRESS": "UNNUMBERED SHOP AT TAKORADI,CLOSE TO ANGLICAN CHURCH",
      "Location": "CLOSE TO SEKONDI TAXI STATION",
      "GPS COORDINATES": "4°53'51.4'N 1°45'29.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 514,
      "AGENT BUSINESS NAME": "Omardaccra enterprise ",
      "AGENT USERNAME": "OENSUB02002",
      "ADDRESS": "Unnumbered shop at labadi",
      "Location": "Near la palm royal beach hotel",
      "GPS COORDINATES": "(5.5636957, -0.1446554)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 515,
      "AGENT BUSINESS NAME": "AD PEACE INTERNET AND BUSINESS SERVICES",
      "AGENT USERNAME": "API61201",
      "ADDRESS": "Kronum, Kumasi - Ashanti",
      "Location": "Opposite Kronum Kwapra Trotro Station",
      "GPS COORDINATES": "6°45'11.6'N 1°38'34.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 516,
      "AGENT BUSINESS NAME": "SAFETY TORENCE VENTURES",
      "AGENT USERNAME": "STV50101",
      "ADDRESS": "HO-AHOE",
      "Location": "OPPOSITE HO STADIUM",
      "GPS COORDINATES": "6.602634, 0.464845",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 517,
      "AGENT BUSINESS NAME": "HENPRIBOAT SERVICES ",
      "AGENT USERNAME": "HSESUB30201",
      "ADDRESS": "CAPECOAST PEDU ",
      "Location": "Interbeton hospital Junction ",
      "GPS COORDINATES": "5°07'39.9'N1°16'24.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 518,
      "AGENT BUSINESS NAME": "SOVEREIGN TRUST LIMITED",
      "AGENT USERNAME": "STL50101",
      "ADDRESS": "HO AHOE ",
      "Location": "BEFORE MELCOM",
      "GPS COORDINATES": "6.603365, 0.468346",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 519,
      "AGENT BUSINESS NAME": "AMENUVEVE FAFANYO ODG ENTERPRISE",
      "AGENT USERNAME": "AFE50101",
      "ADDRESS": "HO-WATER WORKS",
      "Location": "OPPOSITE GHANA WATER COMPANY, HO",
      "GPS COORDINATES": "6.610917, 0.459701",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 520,
      "AGENT BUSINESS NAME": "Kumi's Unique Ventures",
      "AGENT USERNAME": "KUV61001",
      "ADDRESS": "KROMFROM COLUMBIA",
      "Location": "NEAR JB DANKWAH SCHOOL",
      "GPS COORDINATES": "6°42'41.1'N1'37'38.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 521,
      "AGENT BUSINESS NAME": "MAN STEVO ENTERPRISE ",
      "AGENT USERNAME": "MSE61201",
      "ADDRESS": "Kronu, Kumasi - Ashanti ",
      "Location": "Close to God's  Glory Hospital Junction ",
      "GPS COORDINATES": "6°45'12.6'N 1°38'22.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 522,
      "AGENT BUSINESS NAME": "DOUGYS PHONES",
      "AGENT USERNAME": "DPH20301",
      "ADDRESS": "NA",
      "Location": "NEAR METHODIST PARK",
      "GPS COORDINATES": "5.938161-0.069609",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 523,
      "AGENT BUSINESS NAME": "ANSAH PIUS S VENTURES",
      "AGENT USERNAME": "APS20301",
      "ADDRESS": "NA",
      "Location": "NEAR CAPITAL VIEW HOTEL",
      "GPS COORDINATES": "6.067470-0.268573",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 524,
      "AGENT BUSINESS NAME": "Synchronize link ventures ",
      "AGENT USERNAME": "SLV00401",
      "ADDRESS": "Unnumbered shop at osu",
      "Location": "Near koala",
      "GPS COORDINATES": "(5.5664218, -0.1803950)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 525,
      "AGENT BUSINESS NAME": "EMMANUEL ASANTE ELECTRICAL VENTURES",
      "AGENT USERNAME": "EAESUB20301",
      "ADDRESS": "NA",
      "Location": "NEAR BETOM PRIMARY SCHOOL",
      "GPS COORDINATES": "6.085278-0.254256",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 526,
      "AGENT BUSINESS NAME": "EMMANUEL ASANTE ELECTRICAL VENTURES",
      "AGENT USERNAME": "EAESUB20302",
      "ADDRESS": "NA",
      "Location": "NEAR JACKSON PARK",
      "GPS COORDINATES": "6.058278-0.245256",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 527,
      "AGENT BUSINESS NAME": "DE-CASH MOHAS VENTURES",
      "AGENT USERNAME": "DCM20301",
      "ADDRESS": "NA",
      "Location": "OPPOSITE MILE 50 JUNCTION",
      "GPS COORDINATES": "6.054696-0.261287",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 528,
      "AGENT BUSINESS NAME": "DONT QUIT VENTURES",
      "AGENT USERNAME": "DQV20301",
      "ADDRESS": "NA",
      "Location": "NEAR ZONGO MOSQUE",
      "GPS COORDINATES": "6.109494-0.258291",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 529,
      "AGENT BUSINESS NAME": "Gloricom Ventures ",
      "AGENT USERNAME": "GVESUB01501",
      "ADDRESS": "Unnumbered Shop Haatso Ecomog Road",
      "Location": "Opposite Total filling Station",
      "GPS COORDINATES": "5.6679058 - 0.2058539",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 530,
      "AGENT BUSINESS NAME": "SAFOKAMI VENTURES",
      "AGENT USERNAME": "SAV20301",
      "ADDRESS": "NA",
      "Location": "OPPOSITE MAGAZINE",
      "GPS COORDINATES": "6.112800-0.243542",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 531,
      "AGENT BUSINESS NAME": "DONOR FUNDS FOUNDATION",
      "AGENT USERNAME": "DFFSUB20302",
      "ADDRESS": "NA",
      "Location": "NEAR CENTRAL MARKET",
      "GPS COORDINATES": "6.112747-0.243668",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 532,
      "AGENT BUSINESS NAME": "TOP BOAT ENTERPRISE ",
      "AGENT USERNAME": "TBE61201",
      "ADDRESS": "Kronum Kwapra, Kumasi - Ashanti",
      "Location": "Adjacent MTN mast",
      "GPS COORDINATES": "6°45'21.1'N 1°38'12.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 533,
      "AGENT BUSINESS NAME": "SOLTEH STAR ENTERPRISE",
      "AGENT USERNAME": "SSE20301",
      "ADDRESS": "NA",
      "Location": "NEAR OBOSS SEN HIGH",
      "GPS COORDINATES": "6.107999-0.247750",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 534,
      "AGENT BUSINESS NAME": "S.A AWUKU VENTURES",
      "AGENT USERNAME": "SAA20301",
      "ADDRESS": "NA",
      "Location": "NEAR VANGUARD SHOP",
      "GPS COORDINATES": "6.112747-0.243668",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 535,
      "AGENT BUSINESS NAME": "VICKJONAH ENTERPRISE",
      "AGENT USERNAME": "VSU20301",
      "ADDRESS": "NA",
      "Location": "NEAR WATER WORKS",
      "GPS COORDINATES": "6.100637-0.255229",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 536,
      "AGENT BUSINESS NAME": "JENNYAN 92 ENTERPRISE",
      "AGENT USERNAME": "JEN61001",
      "ADDRESS": "KROFROM",
      "Location": "Closer to Christ Apostolic church",
      "GPS COORDINATES": "6°42'41.1'N1'37'38.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 537,
      "AGENT BUSINESS NAME": "Gloricom Ventures ",
      "AGENT USERNAME": "GVESUB01502",
      "ADDRESS": "Unnumbered Shop Haatso Station",
      "Location": "Near Frank Trading Ent",
      "GPS COORDINATES": "5.667751 - 0.204571",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 538,
      "AGENT BUSINESS NAME": "BARNASUWA ENTERPRISE",
      "AGENT USERNAME": "BEN20301",
      "ADDRESS": "NA",
      "Location": "NEAR MASALACHI",
      "GPS COORDINATES": "6.101283-0.252447",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 539,
      "AGENT BUSINESS NAME": "RICHRAY ENT",
      "AGENT USERNAME": "RPE20301",
      "ADDRESS": "NA",
      "Location": "NEAR KENKEY HOUSE",
      "GPS COORDINATES": "6.100046-0.255797",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 540,
      "AGENT BUSINESS NAME": "DONOR FUNDS FOUNDATION",
      "AGENT USERNAME": "DFFSUB20301",
      "ADDRESS": "NA",
      "Location": "NEAR ZONGO MARKET",
      "GPS COORDINATES": "6.109515-0.256954",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 541,
      "AGENT BUSINESS NAME": "Anifa Royal Enterprise",
      "AGENT USERNAME": "ARE61001",
      "ADDRESS": "KROFROM",
      "Location": "BESIDES GRACE EBENEZER SCHOOL",
      "GPS COORDINATES": "1°42'41.1'N1°37'38.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 542,
      "AGENT BUSINESS NAME": "Owenaban Ventures ",
      "AGENT USERNAME": "ONV01501",
      "ADDRESS": "Unnumbered Shop Haatso",
      "Location": "Opposite Fidelity Bank",
      "GPS COORDINATES": "5.6674388 - 0.2002358",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 543,
      "AGENT BUSINESS NAME": "Commtech Solutions Investment",
      "AGENT USERNAME": "CSISUB01501",
      "ADDRESS": "Unnumbered Shop Haatso ",
      "Location": " Near MTN office",
      "GPS COORDINATES": "5.6664139 - 0.2047085",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 544,
      "AGENT BUSINESS NAME": "IKB HOME OF ELECTRICAL ",
      "AGENT USERNAME": "IKB02401",
      "ADDRESS": "ADABRAKA",
      "Location": "ADJACENT CITY FM",
      "GPS COORDINATES": "5.562631,-0.214300",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 545,
      "AGENT BUSINESS NAME": "Virginalis relocation services ",
      "AGENT USERNAME": "VRS04801",
      "ADDRESS": "Unnumbered shop at osu",
      "Location": "Near police hospital ",
      "GPS COORDINATES": "5.566990, -0.180675",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 546,
      "AGENT BUSINESS NAME": "KB VISION ENTERPRISE ",
      "AGENT USERNAME": "KVE02401",
      "ADDRESS": "ADABRAKA ",
      "Location": "NEAR FIDELITY BANK ",
      "GPS COORDINATES": "5.559144,-0.211985",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 547,
      "AGENT BUSINESS NAME": "CHRISTOPHER ANAWEY ENTEERPRISE ",
      "AGENT USERNAME": "CHA02401",
      "ADDRESS": "ADABRAKA ",
      "Location": "NEAR FIDELITY BANK ",
      "GPS COORDINATES": "5.557435,-0.211029",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 548,
      "AGENT BUSINESS NAME": "NUMBER ONE SALUTE VENTURES ",
      "AGENT USERNAME": "NUVSUB30201",
      "ADDRESS": "CAPECOAST - ABURA ",
      "Location": "GRA OFFICE ",
      "GPS COORDINATES": "5°07'53.2'N1°16'31.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 549,
      "AGENT BUSINESS NAME": "BN Brempong Ent",
      "AGENT USERNAME": "BBE01501",
      "ADDRESS": "Unnumbered Shop West Land ",
      "Location": "Opposite Pamas Court ",
      "GPS COORDINATES": "5.649410- 0210162",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 550,
      "AGENT BUSINESS NAME": "ABK CASH COW INVESTMENT ",
      "AGENT USERNAME": "ACC00301",
      "ADDRESS": "ACCRA CMB",
      "Location": "NEAR NIB",
      "GPS COORDINATES": "5.550230,-0.211909",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 551,
      "AGENT BUSINESS NAME": "TORONTO-BAGIO ENTERPRISE ",
      "AGENT USERNAME": "TBE61001",
      "ADDRESS": "KROFROM",
      "Location": "INFRONT OF WASHING BAY",
      "GPS COORDINATES": "6°42'57.0'N1°36'53.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 552,
      "AGENT BUSINESS NAME": "EBENKWAR ENTERPRISE ",
      "AGENT USERNAME": "EBESUB00702",
      "ADDRESS": "KANTAMANTO ",
      "Location": "ADJACENT KANTAMANTO RAILWAY STATION ",
      "GPS COORDINATES": "5.548729,-0.212596",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 553,
      "AGENT BUSINESS NAME": "SKA WESTLAND ENTERPRISE ",
      "AGENT USERNAME": "SKA61201",
      "ADDRESS": "Kronum",
      "Location": "Kwadwo Abrah Junction ",
      "GPS COORDINATES": "6°45'48.7'N 1°38'40.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 554,
      "AGENT BUSINESS NAME": "ROKWAB ENTERPRISE ",
      "AGENT USERNAME": "REN00701",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR GCB",
      "GPS COORDINATES": "5.548439,-0.212889",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 555,
      "AGENT BUSINESS NAME": "RICHNOR-SEL ENTERPRISE ",
      "AGENT USERNAME": "RENSUB30302",
      "ADDRESS": "CAPECOAST ABURA ",
      "Location": "Abura Mosque ",
      "GPS COORDINATES": "5°07'54.1'N1°16'32.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 556,
      "AGENT BUSINESS NAME": "PSALM 2:8 ENTERPRISE",
      "AGENT USERNAME": "PENSUB00702",
      "ADDRESS": "KANTAMANTO ",
      "Location": "OPPOSITE HOTE DE HORSES ",
      "GPS COORDINATES": "5.548410,-0.212742",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 557,
      "AGENT BUSINESS NAME": "Yesandrack Enterprise ",
      "AGENT USERNAME": "YEE60801",
      "ADDRESS": "AGRIC WOMASI",
      "Location": "Near the station ",
      "GPS COORDINATES": "6°39'50.2'N 1°39'46.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 558,
      "AGENT BUSINESS NAME": "Alicosity Ent",
      "AGENT USERNAME": "AENSUB01901",
      "ADDRESS": "Unnumbered Shop University of Ghana Legon, Pentagon",
      "Location": "In front of Addis Ababa Court, Pentagon",
      "GPS COORDINATES": "5.6568866 - 0.1822403",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 559,
      "AGENT BUSINESS NAME": "Nezer Enterprise ",
      "AGENT USERNAME": "NEN61001",
      "ADDRESS": "Akyeremade",
      "Location": "Close to the government school",
      "GPS COORDINATES": "6°39'13.5'N 1°41'33.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 560,
      "AGENT BUSINESS NAME": "DANNY BLO ONE ENTERPRISE ",
      "AGENT USERNAME": "DBE61201",
      "ADDRESS": "Afrancho, Kumasi - Ashanti",
      "Location": "Near Afrancho shell",
      "GPS COORDINATES": "6°45'55.6'N 1°38'40.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 561,
      "AGENT BUSINESS NAME": "Suleman Muntari enterprise",
      "AGENT USERNAME": "SUM60401",
      "ADDRESS": "Atonsu",
      "Location": "Near Atonsu branch",
      "GPS COORDINATES": "6°39'18.4''N1°35'33.''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 562,
      "AGENT BUSINESS NAME": "CHARIS N PISTIS ENTERPRISE ",
      "AGENT USERNAME": "CNP40601",
      "ADDRESS": "EFFIAKUMA",
      "Location": "NEAR VIP JUNCTION ",
      "GPS COORDINATES": "4.9240890,-1.7653140",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 563,
      "AGENT BUSINESS NAME": "Sagging Solomon Enterprise ",
      "AGENT USERNAME": "SSE60801",
      "ADDRESS": "KROMUASE",
      "Location": "Near the Market",
      "GPS COORDINATES": "6°39'40.2'N 1°40'42.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 564,
      "AGENT BUSINESS NAME": "King Roger enterprise",
      "AGENT USERNAME": "KRE60601",
      "ADDRESS": "Atonsun s line",
      "Location": "Near Prudential bank",
      "GPS COORDINATES": "6°39'19.0'N1°35'41.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 565,
      "AGENT BUSINESS NAME": "NUMBER ONE SALUTE VENTURES ",
      "AGENT USERNAME": "NUVSUB30203",
      "ADDRESS": "ESUEKYIR - KAKUMDO ",
      "Location": "ESUEKYIR JHS & BSIC SCHOOL ",
      "GPS COORDINATES": "5°09'00.2'N1°17'17.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 566,
      "AGENT BUSINESS NAME": "Ras Akkito enterprise",
      "AGENT USERNAME": "RAKSUB60401",
      "ADDRESS": "Atonsu s line",
      "Location": "Near Prudential Bank",
      "GPS COORDINATES": "6°39'21.7'N1°35'38.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 567,
      "AGENT BUSINESS NAME": "Antwi James Ventures",
      "AGENT USERNAME": "ANJSUB60402",
      "ADDRESS": "Atonsu",
      "Location": "Inside China Mall",
      "GPS COORDINATES": "6°39'35.3'N1°01.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 568,
      "AGENT BUSINESS NAME": "Benji Sebe Ventures",
      "AGENT USERNAME": "BSV60801",
      "ADDRESS": "Kromuase",
      "Location": "Near Pentecost Church",
      "GPS COORDINATES": "6°40'04.3'N 1°40'49.'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 569,
      "AGENT BUSINESS NAME": "MABEL ADOMAKO ENTERPRISE ",
      "AGENT USERNAME": "MAE61201",
      "ADDRESS": "Afrancho, Kumasi - Ashanti",
      "Location": "Kwadwo Aborah",
      "GPS COORDINATES": "6°45'50.7'N 1.38'33.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 570,
      "AGENT BUSINESS NAME": "Michael Opoku Junior Enterprise",
      "AGENT USERNAME": "MOJ60401",
      "ADDRESS": "atonsu",
      "Location": "opposite ashfoam company",
      "GPS COORDINATES": "6°39'29.3'N1°36'12.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 571,
      "AGENT BUSINESS NAME": "Abraham Opoku Enterprise",
      "AGENT USERNAME": "AOE60801",
      "ADDRESS": "Kromuase",
      "Location": "Near the Station ",
      "GPS COORDINATES": "6°39'49.7'N 1°40'33.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 572,
      "AGENT BUSINESS NAME": "F-INK ENTERPRISE ",
      "AGENT USERNAME": "FENSUB30201",
      "ADDRESS": "KAKUMDO ",
      "Location": "KAKUMDO AKOTOKYIR JUNCTION ",
      "GPS COORDINATES": "5°08'40.6'N1°17'06.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 573,
      "AGENT BUSINESS NAME": "Samagyei 85 Ventures",
      "AGENT USERNAME": "S8V61001",
      "ADDRESS": "KROFROM",
      "Location": "Near Traffic Light",
      "GPS COORDINATES": "6°42'57.0'N1°36'53.7'N",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 574,
      "AGENT BUSINESS NAME": "MODERN ACTION VENTURES ",
      "AGENT USERNAME": "MAV40601",
      "ADDRESS": "EFFIAKUMA",
      "Location": "OPPOSITE LOWER PRA RURAL BANK ",
      "GPS COORDINATES": "4.9206125,-1.7663906",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 575,
      "AGENT BUSINESS NAME": "FATIMA YAKUBU 02 ENT",
      "AGENT USERNAME": "FYE60101",
      "ADDRESS": "ADUKROM",
      "Location": "NEAR OPEN HEAVENS SCHOOL",
      "GPS COORDINATES": "6°41'57.0'N  1°35'21.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 576,
      "AGENT BUSINESS NAME": "AK Abdul Karim Enterprise",
      "AGENT USERNAME": "AKA60401",
      "ADDRESS": "Ahinsan",
      "Location": "Inside the abattoir",
      "GPS COORDINATES": "6°39'37.1'N1°36'15.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 577,
      "AGENT BUSINESS NAME": "JOKATE VENTURES ",
      "AGENT USERNAME": "JVE40601",
      "ADDRESS": "EFFIAKUMA",
      "Location": "NEAR THE TOTAL FUEL STATION ",
      "GPS COORDINATES": "4.920362,-1.766701",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 578,
      "AGENT BUSINESS NAME": "ISAAC OWUSU O7 ENTERPRISE",
      "AGENT USERNAME": "IOV70301",
      "ADDRESS": "AMEYAW PARK, TECHIMAN-BONO EAST",
      "Location": "NEAR AMEYAW PARK TRAFFIC LIGHT",
      "GPS COORDINATES": "7.5836480,-1.9308020/7'35'01.1'N1'55'50.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 579,
      "AGENT BUSINESS NAME": "GIDCOM ENTERPRISE ",
      "AGENT USERNAME": "GIDSUB40601",
      "ADDRESS": "PIPEANO ",
      "Location": "NEAR THE CONNECT FM ",
      "GPS COORDINATES": "4.9139080,-1.7693600",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 580,
      "AGENT BUSINESS NAME": "The Mastermind Consulting International  Limited",
      "AGENT USERNAME": "TMM 60801",
      "ADDRESS": "Kromuase",
      "Location": "Near the Station ",
      "GPS COORDINATES": "6°39'46.8'N 1°40'31.9'",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 581,
      "AGENT BUSINESS NAME": "TUTTY-PLUS ",
      "AGENT USERNAME": "TUP40601",
      "ADDRESS": "TAKORADI-JUBILEE PARK ",
      "Location": "NEAR THE TAKORADI MALL ",
      "GPS COORDINATES": "4.9044375,-1.7702969",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 582,
      "AGENT BUSINESS NAME": "BAW-WAW VENTURES",
      "AGENT USERNAME": "BWV70301",
      "ADDRESS": "GYARKO TCHIMAN, BONO EAST",
      "Location": "NEAR NEW MELCOM, GYARKO BRANCH",
      "GPS COORDINATES": "7.5855460,-1.9433770/7'35'08.0'N1'56'36.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 583,
      "AGENT BUSINESS NAME": "LISTA LOGISTICS ",
      "AGENT USERNAME": "LLO40601",
      "ADDRESS": "PIPEANO ",
      "Location": "NEAR THE TAXI STATION ",
      "GPS COORDINATES": "4.9133190,-1.7701110",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 584,
      "AGENT BUSINESS NAME": "NUMBER ONE SALUTE VENTURES ",
      "AGENT USERNAME": "NUVSUB30207",
      "ADDRESS": "PEDU - DIS CLINIC",
      "Location": "EMY J  PUB",
      "GPS COORDINATES": "5°07'42'N1°16'30.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 585,
      "AGENT BUSINESS NAME": "GODFRED OWUSU GOD'S PLAN ",
      "AGENT USERNAME": "GOG12301",
      "ADDRESS": "DANSOMAN ",
      "Location": "NEAR AGEGE BUS STOP",
      "GPS COORDINATES": "5.5297875, -0.2539844",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 586,
      "AGENT BUSINESS NAME": "KCEHCS REHOBOTH ENTERPRISE ",
      "AGENT USERNAME": "KCR40101",
      "ADDRESS": "HOUSE NUMBER 25/8, MARKET CIRCLE TAKORADI",
      "Location": "NEAR WOODIN OFFICE",
      "GPS COORDINATES": "4°53'53.9'N 1°45'32.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 587,
      "AGENT BUSINESS NAME": "NUMBER ONE SALUTE VENTURES ",
      "AGENT USERNAME": "NUVSUB30205",
      "ADDRESS": "PEDU ",
      "Location": "PEDU GOIL",
      "GPS COORDINATES": "5°07'19.2'N1°16'17.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 588,
      "AGENT BUSINESS NAME": "PEROUSIA VENTURES",
      "AGENT USERNAME": "PVE61201",
      "ADDRESS": "Afrancho New Market ",
      "Location": "Near the Police Station",
      "GPS COORDINATES": "6°46'14.7'N 1°38'45.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 589,
      "AGENT BUSINESS NAME": "STONE OF HELP ENTERPRISE",
      "AGENT USERNAME": "SOH40101",
      "ADDRESS": "UNNUMBERED SHOP AT TAKORADI, INSIDE NEWSITE TAXI RANK",
      "Location": "WITHIN THE TAKORADI NEW SITE TAXI RANK",
      "GPS COORDINATES": "4°53'54.9'N 1° 45'28.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 590,
      "AGENT BUSINESS NAME": "B YAW BEE ",
      "AGENT USERNAME": "BYB 60101.00",
      "ADDRESS": "Anloga ",
      "Location": "INSIDE CHURCH OF CHRIST",
      "GPS COORDINATES": "6°41'21.9'N 1°35'47.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 591,
      "AGENT BUSINESS NAME": "Dosphen Ent",
      "AGENT USERNAME": "DEN03401",
      "ADDRESS": "Unnumbered Hse Madina",
      "Location": "Near Prudential Bank",
      "GPS COORDINATES": "5.677689 - 0.168165",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 592,
      "AGENT BUSINESS NAME": "SIRMAY BUSINESS AND TRAINING CENTER",
      "AGENT USERNAME": "SBT03801",
      "ADDRESS": "HIGH TENSION",
      "Location": "APOSTOLIC CHURCH",
      "GPS COORDINATES": "5.618004,-0.245870",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 593,
      "AGENT BUSINESS NAME": "GOD'S GIFT VERO VENTURES",
      "AGENT USERNAME": "GGV03801",
      "ADDRESS": "NYAMEKYE",
      "Location": "MAMBO SPOT",
      "GPS COORDINATES": "5.600220,-0.255369",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 594,
      "AGENT BUSINESS NAME": "ROYAL BELLANN ENTERPRISE",
      "AGENT USERNAME": "RBE03801",
      "ADDRESS": "CHANTAN KOKROKO",
      "Location": "ALIGATA GUEST HOUSE",
      "GPS COORDINATES": "5.615101,-0.258579",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 595,
      "AGENT BUSINESS NAME": "M.H HEAVY VENTURES ",
      "AGENT USERNAME": "MHHSUB20101",
      "ADDRESS": "HNO. PKA 46 PANKESE",
      "Location": "NEAR PANKESE MARKET",
      "GPS COORDINATES": "6°30'41.9' N 0°50'43.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 596,
      "AGENT BUSINESS NAME": "PRECIOUS LINK ENT",
      "AGENT USERNAME": "PLESUB20101",
      "ADDRESS": "HNO. NI 527 NKAWKAW ATTA NE ATTA",
      "Location": "OPP. MTTD OFFICE NKAWKAW ATTA NE ATTA",
      "GPS COORDINATES": "6°33'15.2' N 0°45'35.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 597,
      "AGENT BUSINESS NAME": "ASAN-TEERIC VENTURES",
      "AGENT USERNAME": "ATV20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT NKAWKAW AMANFROM",
      "Location": "NEAR SCHOOL JUNCTION ",
      "GPS COORDINATES": "6°34'03.2' N 0°47'48.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 598,
      "AGENT BUSINESS NAME": "ALLOS DE ONE VENTURES ",
      "AGENT USERNAME": "ADESUB30201",
      "ADDRESS": "APAM-MUMFORD ",
      "Location": "METHODIST CHURCH - MUMFORD ",
      "GPS COORDINATES": "5°15'46.9'N0°45'30.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 599,
      "AGENT BUSINESS NAME": "TONY 1 ENTERPRISE",
      "AGENT USERNAME": "TOESUB03602",
      "ADDRESS": "SAKAMAN",
      "Location": "NEAR COALIATION OF CONCERNED TEACHERS",
      "GPS COORDINATES": "5.5720125, -0.2721406",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 600,
      "AGENT BUSINESS NAME": "ALLO DE ONE VENTURES ",
      "AGENT USERNAME": "ADESUB30201",
      "ADDRESS": "APAM-MUMFORD ",
      "Location": "CATHOLIC CHURCH - MUMFORD ",
      "GPS COORDINATES": "5°15'37.3'N0°45'30.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 601,
      "AGENT BUSINESS NAME": "AF DIAMOND ",
      "AGENT USERNAME": "AFDSUB20301",
      "ADDRESS": "BOX 1718 KF",
      "Location": "RIO CINEMA",
      "GPS COORDINATES": "6.092469-0.259165",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 602,
      "AGENT BUSINESS NAME": "AMOS PHOTOS ",
      "AGENT USERNAME": "AMPSUB30202",
      "ADDRESS": "UCC OLD SITE",
      "Location": "OGUAA  HALL",
      "GPS COORDINATES": "5°06'13.1'N1°17'10.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 603,
      "AGENT BUSINESS NAME": "PATRICIA APPIAH 81 ENTERPRISE",
      "AGENT USERNAME": "PAP61001",
      "ADDRESS": "KROFROM ",
      "Location": "BEHIND KROFROM MARKET",
      "GPS COORDINATES": "6°42'57.0'N1°36'53.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 604,
      "AGENT BUSINESS NAME": "TONY 1 ENTERPRISE",
      "AGENT USERNAME": "TOESUB03601",
      "ADDRESS": "SAKAMAN BLUE LAGOON",
      "Location": "NEAR COALIATION  OF CONCERNED TEACHERS",
      "GPS COORDINATES": "5.5720125, -0.2721406",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 605,
      "AGENT BUSINESS NAME": "NASEFF VENTURES",
      "AGENT USERNAME": "NASSUB20301",
      "ADDRESS": "Akamani junction, Akim Oda",
      "Location": "Near, Lindas restaurant",
      "GPS COORDINATES": "5.9263010, -0.9871670",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 606,
      "AGENT BUSINESS NAME": "M.ADANSE ENTERPRISE ",
      "AGENT USERNAME": "MAE61003",
      "ADDRESS": "KROFROM IS ",
      "Location": "OPPOSITE SANTOS HOTEL",
      "GPS COORDINATES": "6°42'57.0'1°3_'55.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 607,
      "AGENT BUSINESS NAME": "Smile34 Ventures",
      "AGENT USERNAME": "SVE03401",
      "ADDRESS": "Unnumbered Shop Madina Zongo Junction ",
      "Location": "Near GT Bank",
      "GPS COORDINATES": "5.681404 - 0.1725737",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 608,
      "AGENT BUSINESS NAME": "ANCIENT TRIBE AFRIQUE VENTURES ",
      "AGENT USERNAME": "ATA30301",
      "ADDRESS": "ELMINA ",
      "Location": "POLICE STATION ",
      "GPS COORDINATES": "5°05'29.5'N1°20'44.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 609,
      "AGENT BUSINESS NAME": "ADUHENE  BOAKYE VENTURES",
      "AGENT USERNAME": "ADB61001",
      "ADDRESS": "KROFROM",
      "Location": "WITHIN SANDAMA STATION ",
      "GPS COORDINATES": "6°42'57.0'N1°36'53.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 610,
      "AGENT BUSINESS NAME": "Tu-Philoshie Ent",
      "AGENT USERNAME": "TPESUB04702",
      "ADDRESS": "Unnumbered Shop Madina ",
      "Location": "Near Vodafone /ADB/Oman FM",
      "GPS COORDINATES": "5.6802259 - 0.1721022",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 611,
      "AGENT BUSINESS NAME": "OSTEEN SASU ENT",
      "AGENT USERNAME": "OSE20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT AKOASE",
      "Location": "NEAR METHODIST CHURCH",
      "GPS COORDINATES": "6°27'56.3' N 0°52'32.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 612,
      "AGENT BUSINESS NAME": "Ghana Post Office Madina",
      "AGENT USERNAME": "Gpostsubo4701",
      "ADDRESS": "Unnumbered Shop Madina",
      "Location": "Inside the Madina Post office ",
      "GPS COORDINATES": "5.6774552 - 0.166583",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 613,
      "AGENT BUSINESS NAME": "Anasheley Enterprise ",
      "AGENT USERNAME": "AEN60301",
      "ADDRESS": "KROFROM",
      "Location": "NEAR BAPTIST CHURCH ",
      "GPS COORDINATES": "1°42'35.3'N1°36'58.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 614,
      "AGENT BUSINESS NAME": "GREAT OSADA COMPANY LIMITED ",
      "AGENT USERNAME": "GOC61001",
      "ADDRESS": "KROFROM ",
      "Location": "BEHIND KROFROM POLICE STATION ",
      "GPS COORDINATES": "6°42'35.3'N1°36'58.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 615,
      "AGENT BUSINESS NAME": "WUSJAS 88 ENT",
      "AGENT USERNAME": "WUE20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT NKAWKAW AMANFROM ",
      "Location": "ADJACENT STARBOAT RESTAURANT ",
      "GPS COORDINATES": "6°34.02.2' N 0°47'46.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 616,
      "AGENT BUSINESS NAME": "ASANKUMAH ROYAL ENTERPRISE ",
      "AGENT USERNAME": "ARE30201",
      "ADDRESS": "CAPECOAST - ABURA",
      "Location": "ABURA MARKET",
      "GPS COORDINATES": "5°07'55.4'N1°16'32.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 617,
      "AGENT BUSINESS NAME": "Felizozi Ventures",
      "AGENT USERNAME": "FVE60801",
      "ADDRESS": "Kromuase",
      "Location": "Near the Lorry  Station ",
      "GPS COORDINATES": "6°39'50.4'N 1°40'28.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 618,
      "AGENT BUSINESS NAME": "CWVSUB12301",
      "AGENT USERNAME": "CLIVE WARDEN",
      "ADDRESS": "DANSOMAN IBE JUNCTION ",
      "Location": "NEAR BUKOM LION",
      "GPS COORDINATES": "5.5356125, -0.2478906",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 619,
      "AGENT BUSINESS NAME": "Sir Maxadepa Enterprise ",
      "AGENT USERNAME": "SIM60801",
      "ADDRESS": "Agric  Nzema",
      "Location": "Opposite Roman Catholic Church",
      "GPS COORDINATES": "6°40'01.7'N 1°40'14.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 620,
      "AGENT BUSINESS NAME": "TU Philoshie Ent",
      "AGENT USERNAME": "TPESUB04703",
      "ADDRESS": "Unnumbered Shop Madina Zongo Junction ",
      "Location": "Near Nikki's Guest House ",
      "GPS COORDINATES": "5.6802259 - 0.1721022",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 621,
      "AGENT BUSINESS NAME": "AUGUSTINE NYARKO BUSINESS CENTRE ",
      "AGENT USERNAME": "ANBSUB30301",
      "ADDRESS": "YAMORANSA JUNCTION ",
      "Location": "YAMORANSA STATION ",
      "GPS COORDINATES": "5°09'30.7'N1°12'06.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 622,
      "AGENT BUSINESS NAME": "Dominic 15 Enterprise",
      "AGENT USERNAME": "DIS60801",
      "ADDRESS": "Agric Nzema",
      "Location": "Close the Presbyterian  Church",
      "GPS COORDINATES": "6°40'21.6'N 1°39'40.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 623,
      "AGENT BUSINESS NAME": "AUGUSTINE NYARKO BUSINESS ",
      "AGENT USERNAME": "ANBSUB30302",
      "ADDRESS": "YAMORANSA ROUNDABOUT ",
      "Location": "TOTAL SERVICE STATION ",
      "GPS COORDINATES": "5°10'03.1'N1°11'53.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 624,
      "AGENT BUSINESS NAME": "Betajoy Enterprise ",
      "AGENT USERNAME": "BET60801",
      "ADDRESS": "Agric Nzema",
      "Location": " Near New Mission International  School ",
      "GPS COORDINATES": "6°40'22.4'N 1°39'30.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 625,
      "AGENT BUSINESS NAME": "Linjei Ventures",
      "AGENT USERNAME": "LVE60801",
      "ADDRESS": "Agric Nzema",
      "Location": "Opposite  New Mission International School ",
      "GPS COORDINATES": "6°40'22.5'N 1°39'31.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 626,
      "AGENT BUSINESS NAME": "NYAME WO HO VENTURES",
      "AGENT USERNAME": "NWH60801",
      "ADDRESS": "PAKYI No 2",
      "Location": "NEAR PAKYI No 2 JUNCTION",
      "GPS COORDINATES": "6°33'27.3'N 1°40'03.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 627,
      "AGENT BUSINESS NAME": "JAYNEFORI ENT ",
      "AGENT USERNAME": "JEN04902",
      "ADDRESS": "NUNGUA COCO BEACH ",
      "Location": "CLOSE TO COCO BEACH RESORT ",
      "GPS COORDINATES": "5'35'30.0'N 0'05'21.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 628,
      "AGENT BUSINESS NAME": "GEKHUTCH VENTURES",
      "AGENT USERNAME": "GVE60501",
      "ADDRESS": "PAKYI No 1",
      "Location": "NEAR PACIFIC FUEL STATION",
      "GPS COORDINATES": "6°32'49.4'N 1°40'09.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 629,
      "AGENT BUSINESS NAME": "EBIGYAH EBEN ENT ",
      "AGENT USERNAME": "EEE04901",
      "ADDRESS": "BRIGADE NUNGUA ",
      "Location": "OPPOSITE BRIGADE POLICE STATION ",
      "GPS COORDINATES": "5'35'37.4'N 0'05'15.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 630,
      "AGENT BUSINESS NAME": "YOU  ARE WHAT YOU ARE ",
      "AGENT USERNAME": "YWA 04901",
      "ADDRESS": "BRIGADE ",
      "Location": "NEAR FORMER JOYCE ABABIO FASHION SCHOOL ",
      "GPS COORDINATES": "5'35'40.6'N 0'05'17.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 631,
      "AGENT BUSINESS NAME": "3-STAR MESSIAH ENTERPRISE",
      "AGENT USERNAME": "3ME60801",
      "ADDRESS": "TREDE",
      "Location": "SAME BUILDING WITH BOSOMTWE RURAL BANK",
      "GPS COORDINATES": "6°34'32.9'N 1°40'14.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 632,
      "AGENT BUSINESS NAME": "ICL05001",
      "AGENT USERNAME": "Inshamen company limited ",
      "ADDRESS": "Unnumbered house at Tema comm 8",
      "Location": "Near Starbite Tema comm 8",
      "GPS COORDINATES": "5°40'11.9'N 0°00'50.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 633,
      "AGENT BUSINESS NAME": "Eco premium ",
      "AGENT USERNAME": "Ecp05001",
      "ADDRESS": "Unnumbered house at tema comm 8",
      "Location": "Near vienna city Tema comm 8",
      "GPS COORDINATES": "5°40'12.0'N 0°00'48.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 634,
      "AGENT BUSINESS NAME": "ATI03301",
      "AGENT USERNAME": "Abacus trade and investment ",
      "ADDRESS": "Tema comm 7 near vertinary",
      "Location": "Near vertinary ",
      "GPS COORDINATES": "5°39'42.6'N 0°00'39.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 635,
      "AGENT BUSINESS NAME": "Forster ventures ",
      "AGENT USERNAME": "FVESUB05001",
      "ADDRESS": "Unn building tema fishing harbor ",
      "Location": "Near pioneer factory ",
      "GPS COORDINATES": "5°38'34.8'N 0°00'40.1'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 636,
      "AGENT BUSINESS NAME": "KWESTIL COMPANY LIMITED",
      "AGENT USERNAME": "KCL61001",
      "ADDRESS": "Afrancho, Kumasi - Ashanti ",
      "Location": "Near the Afrancho clinic",
      "GPS COORDINATES": "6°46'42.6'N 1°38'36.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 637,
      "AGENT BUSINESS NAME": "AMADU GUMBE VENTURES ",
      "AGENT USERNAME": "AGV61201",
      "ADDRESS": "Afrancho, Kumasi - Ashanti ",
      "Location": "Opposite Afrancho Clinic",
      "GPS COORDINATES": "6°46'38.8'N 1°38'36.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 638,
      "AGENT BUSINESS NAME": "BRIGHT BOADU ENTERPRISE ",
      "AGENT USERNAME": "BBE61201",
      "ADDRESS": "Afrancho ",
      "Location": "Near the Goil Filling Station ",
      "GPS COORDINATES": "6°46'33.0'N 1°38'37.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 639,
      "AGENT BUSINESS NAME": "LEEREX ENTERPRISE ",
      "AGENT USERNAME": "LEESUB80101",
      "ADDRESS": "TAMALE",
      "Location": "NEAR OPPORTUNITY BANK",
      "GPS COORDINATES": "9.395615,-0.825720",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 640,
      "AGENT BUSINESS NAME": "DENTAGI VENTURES ",
      "AGENT USERNAME": "DVE80103",
      "ADDRESS": "Tamale ",
      "Location": "Opposite Anbariya S H S",
      "GPS COORDINATES": "9.380522,-0.789453",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 641,
      "AGENT BUSINESS NAME": "Sandra Appiah Enterprise",
      "AGENT USERNAME": "SAE60802",
      "ADDRESS": "Trede",
      "Location": "Opposite Trede Taxi Rank",
      "GPS COORDINATES": "6°34'20.6'N 1°39'49.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 642,
      "AGENT BUSINESS NAME": "FAKO-ONE VENTURES ",
      "AGENT USERNAME": "FAVSUB30201",
      "ADDRESS": "CAPECOAST UCC",
      "Location": "UCC SCIENCE ",
      "GPS COORDINATES": "5°06'51.4'N1°17'36.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 643,
      "AGENT BUSINESS NAME": "ILLUME INVESTMENT ",
      "AGENT USERNAME": "ILLSUB30201",
      "ADDRESS": "CAPECOAST UCC",
      "Location": "UCC SCIENCE TAXI RANK",
      "GPS COORDINATES": "5°06'51.6'N1°17'35.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 644,
      "AGENT BUSINESS NAME": "ERIC 520 VENTURES",
      "AGENT USERNAME": "E5V60501",
      "ADDRESS": "KWAWUMA",
      "Location": "NEAR KWAWUMA BUS STOP",
      "GPS COORDINATES": "6°34'38.0'N1°37'55.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 645,
      "AGENT BUSINESS NAME": "ONYAME AKOA SOLOMON ENTERPRISE",
      "AGENT USERNAME": "OAS60501",
      "ADDRESS": "KWAWUMA",
      "Location": "OPPOSITE CHIEF PALACE",
      "GPS COORDINATES": "6°34'41.5'N 1°37'54.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 646,
      "AGENT BUSINESS NAME": "FAKO-ONE VENTURES ",
      "AGENT USERNAME": "FAVSUB30202",
      "ADDRESS": "CAPECOAST UCC",
      "Location": "UCC SCIENCE ROUNDABOUT ",
      "GPS COORDINATES": "5°06'51.2'N1°17'36.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 647,
      "AGENT BUSINESS NAME": "FAKO-ONE VENTURES ",
      "AGENT USERNAME": "FAVSUB30203",
      "ADDRESS": "CAPE COAST UCC",
      "Location": " ICGC CHURCH ",
      "GPS COORDINATES": "5°06'49.9'N1°17'36.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 648,
      "AGENT BUSINESS NAME": "BELL COMMODITIES VENTURES",
      "AGENT USERNAME": "BCV02801",
      "ADDRESS": "Ashaiman Lebanon",
      "Location": "Near Agape School",
      "GPS COORDINATES": "5.708366,-0.046475",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 649,
      "AGENT BUSINESS NAME": "PERFECT TRUSTED BUSINESS SOLUTION",
      "AGENT USERNAME": "PTB02801",
      "ADDRESS": "Ashaiman Lebanan",
      "Location": "Near School Junction",
      "GPS COORDINATES": "5.7121830,-0.0490510",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 650,
      "AGENT BUSINESS NAME": "SUCCESS SUPREME ENTERPRISE",
      "AGENT USERNAME": "SSE60501",
      "ADDRESS": "KWAWUMA",
      "Location": "NEAR KWAWUMA FITTAM",
      "GPS COORDINATES": "6°34'47.4'N 1°37'51.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 651,
      "AGENT BUSINESS NAME": "FAKO-ONE VENTURES ",
      "AGENT USERNAME": "FAVSUB30204",
      "ADDRESS": "UCC AYENSU ",
      "Location": "BETHEL HOSTEL",
      "GPS COORDINATES": "5°06'54.0'N1°17'48.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 652,
      "AGENT BUSINESS NAME": "OKLE INNOVATION ENTERPRISE",
      "AGENT USERNAME": "OIE02801",
      "ADDRESS": "ASHAIMAN ZENU",
      "Location": "NEAR DIVINE HEALERS CHURCH",
      "GPS COORDINATES": "5.719633,-0.053694",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 653,
      "AGENT BUSINESS NAME": "WEKAD SUSU ENTERPRISE",
      "AGENT USERNAME": "WSE04201",
      "ADDRESS": "ASHAIMAN ZENU AGYENKWA JUNCTION",
      "Location": "OPPOSITE BEN PHOTOES",
      "GPS COORDINATES": "5.727549,-0.061259",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 654,
      "AGENT BUSINESS NAME": "KOFIAS ASEDA KESIE ENTERPRISE",
      "AGENT USERNAME": "KAK02801",
      "ADDRESS": "ASHAIMAN ZENU LAST STOP",
      "Location": "OPPOSITE AKOFA RESTAURANT",
      "GPS COORDINATES": "5.728652,-0.062278",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 655,
      "AGENT BUSINESS NAME": "BECZONE VENTURES",
      "AGENT USERNAME": "BVESUB02801",
      "ADDRESS": "APPOLINIA DOWN TOWN ",
      "Location": "NEAR THE GOVERNMENT SCHOOL",
      "GPS COORDINATES": "5.789565,-0.0729100",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 656,
      "AGENT BUSINESS NAME": "BECZONE VENTURES",
      "AGENT USERNAME": "BVESUB02802",
      "ADDRESS": "UN SHOP AT APPOLONIA",
      "Location": "NEAR TOP OIL FILLING STATION",
      "GPS COORDINATES": "507841730,-0.0743260",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 657,
      "AGENT BUSINESS NAME": "FREMOC VENTURES",
      "AGENT USERNAME": "FVESUB02801",
      "ADDRESS": "UNNSHOP AT KATAMANSO",
      "Location": "NEAR THE LAST STOP",
      "GPS COORDINATES": "5.759610,-0.078030",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 658,
      "AGENT BUSINESS NAME": "GABRIEL ACHEAMPONG ENTERPRISE ",
      "AGENT USERNAME": "GAE61201",
      "ADDRESS": "Afrancho Trotro Bus Stop",
      "Location": "Close to the Police station off the Krobo Road",
      "GPS COORDINATES": "6°46'22.6'N 1°38'47.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 659,
      "AGENT BUSINESS NAME": "DOUGLAS 16 ENTERPRISE",
      "AGENT USERNAME": "DEN61201",
      "ADDRESS": "Buoho",
      "Location": "Near Buoho - Atimatim Taxi Station",
      "GPS COORDINATES": "6°47'50.4'N 1°38'40.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 660,
      "AGENT BUSINESS NAME": "KVNG SCHALKA ",
      "AGENT USERNAME": "KSV12301",
      "ADDRESS": "KANESHIE NORTH ",
      "Location": "NEAR ICC ",
      "GPS COORDINATES": "5.5988125, -0.2527344",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 661,
      "AGENT BUSINESS NAME": "JANADD ENTERPRISE",
      "AGENT USERNAME": "JAN00501",
      "ADDRESS": "ABOSSEY OKAI",
      "Location": "NEAR MASALACHI ",
      "GPS COORDINATES": "5.5608125, -0.2352031",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 662,
      "AGENT BUSINESS NAME": "ISAAC DANKYI ENTERPRISE ",
      "AGENT USERNAME": "IDESUB12301",
      "ADDRESS": "ABOSSEY OKAI",
      "Location": "NEAR ZONGO JUNCTION ",
      "GPS COORDINATES": "5.5595125, -0.2374844",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 663,
      "AGENT BUSINESS NAME": "ISAAC DANKYI ENTERPRISE",
      "AGENT USERNAME": "IDESUB12302",
      "ADDRESS": "ABOSSEY OKAI ",
      "Location": "NEAR ZONGO JUNCTION ",
      "GPS COORDINATES": "5.5592375, -0.2377969",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 664,
      "AGENT BUSINESS NAME": "BRONZETTI 1 VENTURES",
      "AGENT USERNAME": "BRV61001",
      "ADDRESS": "Buoho Grotto",
      "Location": "Close to Buoho Grotto Gate",
      "GPS COORDINATES": "6°47'45.1'N 1°38'36.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 665,
      "AGENT BUSINESS NAME": "JANADD ENTERPRISE",
      "AGENT USERNAME": "JAN00501",
      "ADDRESS": "ABOSSEY OKAI ",
      "Location": "NEAR MASALACHI ",
      "GPS COORDINATES": "5.5608125, -0.2352031",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 666,
      "AGENT BUSINESS NAME": "MOHAMMED A. BANDA ENTERPRISE ",
      "AGENT USERNAME": "MAB61201",
      "ADDRESS": "Buoho ",
      "Location": "Infront of the Fitting shop",
      "GPS COORDINATES": "6°47'23.8'N 1°38'41.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 667,
      "AGENT BUSINESS NAME": "KANDOR VENTURES ",
      "AGENT USERNAME": "KAV61201",
      "ADDRESS": "Buoho",
      "Location": "Close to God is able JHS",
      "GPS COORDINATES": "6°47'12.7'N 1°38'32.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 668,
      "AGENT BUSINESS NAME": "JOHN ADDAI MUNUKUM ENTERPRISE ",
      "AGENT USERNAME": "JMM60401",
      "ADDRESS": "ASUOFUA ",
      "Location": "NEAR CEDER CREST HOSPITAL JUNCTION",
      "GPS COORDINATES": "6°46'11.7N1°41'02.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 669,
      "AGENT BUSINESS NAME": "MELORIE ENT ",
      "AGENT USERNAME": "MEL12301",
      "ADDRESS": "DANSOMAN LAST STOP EBENEZER ROAD ",
      "Location": "NEAR PAGE 2K PUB",
      "GPS COORDINATES": "5.5323125, -0.2688281",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 670,
      "AGENT BUSINESS NAME": "CTW60401",
      "AGENT USERNAME": "CHRIST THE WORD VENTURES ",
      "ADDRESS": "ASUOFUA ",
      "Location": "OPPOSITE THE LORRY STATION",
      "GPS COORDINATES": "6°46'01.1'N1°41'00.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 671,
      "AGENT BUSINESS NAME": "DANNY QUAINOO VENTURES ",
      "AGENT USERNAME": "DQV61201",
      "ADDRESS": "Buoho",
      "Location": "Near Buoho - Atimatim Taxi Station",
      "GPS COORDINATES": "6°47'37.0'N 1°38'37.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 672,
      "AGENT BUSINESS NAME": "SILVERJOY ENTERPRISE ",
      "AGENT USERNAME": "SJE60401",
      "ADDRESS": "AMANFROM",
      "Location": "OPPOSITE GARDEN CITY UNIVERSITY ",
      "GPS COORDINATES": "6°45'44.2'N1°40'53.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 673,
      "AGENT BUSINESS NAME": "ROYAL SAMRAF ENTERPRISE ",
      "AGENT USERNAME": "RSE60801",
      "ADDRESS": "OWHIM",
      "Location": "OPPOSITE THE TAXI RANK",
      "GPS COORDINATES": "6°45'04.8N1°40'34.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 674,
      "AGENT BUSINESS NAME": "PVE60402",
      "AGENT USERNAME": "PHANAMACIOUS VENTURES ",
      "ADDRESS": "OHWIM ",
      "Location": "NEAR BENAP OIL",
      "GPS COORDINATES": "6°44'54.1'N1°40'24.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 675,
      "AGENT BUSINESS NAME": "BUSY NEST ENTERPRISE ",
      "AGENT USERNAME": "BNE60401",
      "ADDRESS": "OHWIM",
      "Location": "OPPOSITE PETROSOL FILLING STATION",
      "GPS COORDINATES": "6°44'34.2'N1°40'10.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 676,
      "AGENT BUSINESS NAME": "CAMNET GHANA LIMITED",
      "AGENT USERNAME": "CGL60401",
      "ADDRESS": "Atafoa",
      "Location": "Near atafoa bus stop",
      "GPS COORDINATES": "6°44'13.4'N1°39'30.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 677,
      "AGENT BUSINESS NAME": "AOE60401",
      "AGENT USERNAME": "A OHEMENG ENTERPRISE ",
      "ADDRESS": "ASUBONTENG ",
      "Location": "NEAR ACTION CHAPEL INTERNATIONAL ",
      "GPS COORDINATES": "6°43'34.4'N1°39'33.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 678,
      "AGENT BUSINESS NAME": "MISTYBILS ENTERPRISE ",
      "AGENT USERNAME": "MIE60401",
      "ADDRESS": "ABREPO ",
      "Location": "AT HIGHWAYS JUNCTION",
      "GPS COORDINATES": "6°43'24.8'N1°39'16.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 679,
      "AGENT BUSINESS NAME": "OSEI KWABENA PHONES AND ACCESSORIES ",
      "AGENT USERNAME": "OKP60801",
      "ADDRESS": "BOHYEN",
      "Location": "BOHYEN LORRY STATION",
      "GPS COORDINATES": "6°43'10.8'N1°38'53.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 680,
      "AGENT BUSINESS NAME": "DREAMERS CHOICE",
      "AGENT USERNAME": "DCE61201",
      "ADDRESS": "Abusuakruwa ",
      "Location": "Opposite Supreme  Montessori",
      "GPS COORDINATES": "6°43'57.2' 1°38'27.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 681,
      "AGENT BUSINESS NAME": "Ebenezer Asiedu enterprise ",
      "AGENT USERNAME": "EAE60401",
      "ADDRESS": "AMPABAME ",
      "Location": "OPPOSITE MULTI CREDIT",
      "GPS COORDINATES": "6°42'56.3'N1°38'43.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 682,
      "AGENT BUSINESS NAME": "Nyansaboakwa Nyame tkandy enterprise ",
      "AGENT USERNAME": "NNE60401",
      "ADDRESS": "AMPABAME",
      "Location": "OPPOSITE ISLAMIC SHS",
      "GPS COORDINATES": "6°42'45.0'N1°38'29.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 683,
      "AGENT BUSINESS NAME": "TBE20301",
      "AGENT USERNAME": "True Light Business Enterprise",
      "ADDRESS": "Djankrom, Nsawam.",
      "Location": "Near Global Evangelical church",
      "GPS COORDINATES": "5.819283, -0.346014",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 684,
      "AGENT BUSINESS NAME": "JOSEPH SARFO BOATENG ENTERPRISE ",
      "AGENT USERNAME": "JSB61201",
      "ADDRESS": "Maakro",
      "Location": "200 Meter away from Abusuakruwa Junction",
      "GPS COORDINATES": "6°43'56.3'N 1°38'11.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 685,
      "AGENT BUSINESS NAME": "KRISTO NTI WONTUMI NTAAKI ENTERPRISE ",
      "AGENT USERNAME": "KNW50101",
      "ADDRESS": "CIVIC CENTER HO",
      "Location": "AFTER ACCESS BANK",
      "GPS COORDINATES": "6.615518, 0.468190",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 686,
      "AGENT BUSINESS NAME": "ALL 4 JAH VENTURES",
      "AGENT USERNAME": "AJV61201",
      "ADDRESS": "Maakro ",
      "Location": "Close the Methodist church",
      "GPS COORDINATES": "6°43'45.2'N 1°38'12.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 687,
      "AGENT BUSINESS NAME": "GIOSHAW VENTURES ",
      "AGENT USERNAME": "GVE50101",
      "ADDRESS": "AHOE, HO",
      "Location": "NEAR ASSEMBLIES OF GOD CHURCH",
      "GPS COORDINATES": "6.603795, 0.471397",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 688,
      "AGENT BUSINESS NAME": "GODWIN'S KOKOSNUS BAR",
      "AGENT USERNAME": "GKB03601",
      "ADDRESS": "DANSOMAN SAHARA ",
      "Location": "BESIDE ECOBANK ",
      "GPS COORDINATES": "5.5508020, -0.2645390",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 689,
      "AGENT BUSINESS NAME": "SKELLY PHOTOS ",
      "AGENT USERNAME": "SPH50101",
      "ADDRESS": "TRAFLAGAR ",
      "Location": "OPPOSITE HO TEACHING HOSPITAL ",
      "GPS COORDINATES": "6.603538, 0.484556",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 690,
      "AGENT BUSINESS NAME": "SERICK ENTERPRISE ",
      "AGENT USERNAME": "SEN50101",
      "ADDRESS": "TRAFLAGAR",
      "Location": "OPPOSITE TRAFLAGAR TEACHING HOSPITAL ",
      "GPS COORDINATES": "6.603293, 0.484820",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 691,
      "AGENT BUSINESS NAME": "James home",
      "AGENT USERNAME": "jam80101",
      "ADDRESS": "Unnumbered structure ",
      "Location": "Close to formal NTV office ",
      "GPS COORDINATES": "9.407939-0.839743",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 692,
      "AGENT BUSINESS NAME": "C-MONEY ENTERPRISE ",
      "AGENT USERNAME": "CMESUB40601",
      "ADDRESS": "FIJAI ROAD ",
      "Location": "NEAR GREATER HEIGHT SCHOOL ",
      "GPS COORDINATES": "4.9437240,-1.7572800",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 693,
      "AGENT BUSINESS NAME": "FRANK-MAI TRADING CENTER",
      "AGENT USERNAME": "FMT40101",
      "ADDRESS": "KOJOKROM ",
      "Location": "NEAR KOJOKROM PHARMACY ",
      "GPS COORDINATES": "4.966774,-1.727573",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 694,
      "AGENT BUSINESS NAME": "DEKOMA ENTERPISE ",
      "AGENT USERNAME": "DEN40601",
      "ADDRESS": "NKROFUL-DIABENE ",
      "Location": "NEAR THE NKROFUL MARKET ",
      "GPS COORDINATES": "4.968257,-1.774526",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 695,
      "AGENT BUSINESS NAME": "EYRAM DEDIXA ENTERPRISE ",
      "AGENT USERNAME": "EDESUB50101",
      "ADDRESS": "TRAFLAGAR DOWN",
      "Location": "AFTER TRAFLAGAR HOSPITAL ",
      "GPS COORDINATES": "6.603313, 0.485860",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 696,
      "AGENT BUSINESS NAME": "Karimah’s Art",
      "AGENT USERNAME": "KAE02201",
      "ADDRESS": "Unnumbered shop at Dzorwulu ",
      "Location": "Near Valley view clinic ",
      "GPS COORDINATES": "5.563296, -0.145112",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 697,
      "AGENT BUSINESS NAME": "SUCCESS TRAVEL AND TOURS",
      "AGENT USERNAME": "STT03801",
      "ADDRESS": "UNNUMBERED HOUSE NEAR THE ODORKOR TRAFFIC LIGHT",
      "Location": "NEAR THE ODORKOR TRAFFIC LIGHT ",
      "GPS COORDINATES": "5.581201,-0.264176",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 698,
      "AGENT BUSINESS NAME": "ONE TO MANY ENTERPRISE ",
      "AGENT USERNAME": "OTM05101",
      "ADDRESS": "UNNUMBERED SHOP AT ODORKOR, NEAR THE TRAFFIC LIGHT",
      "Location": "NEAR THE TRAFFIC LIGHT",
      "GPS COORDINATES": "5.5805099,-0.2641641",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 699,
      "AGENT BUSINESS NAME": "TRUTH AND LIGHT",
      "AGENT USERNAME": "TAL00501",
      "ADDRESS": "UNNUMBERED SHOP AT ODORKOR, NEAR ODORKOR MARKET",
      "Location": "NEAR ODORKOR MARKET",
      "GPS COORDINATES": "5.5812653,-0.2634305",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 700,
      "AGENT BUSINESS NAME": "SIMENS VENTURES ",
      "AGENT USERNAME": "SIV05101",
      "ADDRESS": "UNNUMBERED SHOP AT ODORKOR, NEAR THE WASHING BAY",
      "Location": "NEAR THE WASHING BAY",
      "GPS COORDINATES": "5.5878987,-0.2651890",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 701,
      "AGENT BUSINESS NAME": "HEAVEN FIELD ENTERPRISE ",
      "AGENT USERNAME": "HFESUB50103",
      "ADDRESS": "TRAFLAGAR DOWN",
      "Location": "OPPOSITE ASEYE PHARMACY OR ASSEMBLIES OF GOD JUNCTION",
      "GPS COORDINATES": "6.602892,0.488677",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 702,
      "AGENT BUSINESS NAME": "BSystems Ltd",
      "AGENT USERNAME": "BSTSUB00101",
      "ADDRESS": "Unnumbered shop at Airport ",
      "Location": "Inside terminal 3 Airport",
      "GPS COORDINATES": "(5.6021010, -0.1736340)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 703,
      "AGENT BUSINESS NAME": "MARKANETTE VENTURES ",
      "AGENT USERNAME": "MVE05101",
      "ADDRESS": "UNNUMBERED SHOP AT ODORKOR, NEAR BEST POINT SAVINGS & LOANS",
      "Location": "NEAR BEST POINT SAVINGS AND LOANS",
      "GPS COORDINATES": "5.5827740,-0.2637845",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 704,
      "AGENT BUSINESS NAME": "DANIEL 2CEDIS VENTURES",
      "AGENT USERNAME": "DCV05101",
      "ADDRESS": "UNNUMBERED SHOP AT KWASHIEMAN, NEAR CAL BANK",
      "Location": "NEAR CAL BANK",
      "GPS COORDINATES": "5.584929,-0.264641",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 705,
      "AGENT BUSINESS NAME": "REDEEMER SUSU",
      "AGENT USERNAME": "RTS03101",
      "ADDRESS": "KWABENYA",
      "Location": "NEAR GA MUNICIPAL COUNCIL",
      "GPS COORDINATES": "5.689772,-0.247173",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 706,
      "AGENT BUSINESS NAME": "MIKE 1 VENTURES",
      "AGENT USERNAME": "MIK00501",
      "ADDRESS": "UNNUMBERED HOUSE AT ODORKOR NEAR THE METHODIST CHURCH ",
      "Location": "NEAR THE METHODIST CHURCH ",
      "GPS COORDINATES": "5.5887740,-0.2621993",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 707,
      "AGENT BUSINESS NAME": "20TH CENTURY PLUS",
      "AGENT USERNAME": "CEP03601",
      "ADDRESS": "Dansoman ",
      "Location": "OPPOSITE JOLLOF RESTAURANT ",
      "GPS COORDINATES": "5.5527125, -0.2649531",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 708,
      "AGENT BUSINESS NAME": "Asher Elyon enterprise ",
      "AGENT USERNAME": "AAESUB00401",
      "ADDRESS": "Unnumbered shop at Osu",
      "Location": "Behind papaye restaurant ",
      "GPS COORDINATES": "(5.5575890, -0.1797940)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 709,
      "AGENT BUSINESS NAME": "RNA WORLD ",
      "AGENT USERNAME": "RWO03801",
      "ADDRESS": "UNNUMBERED HOUSE AT ODORKOR, NEAR OFFICIAL TOWN MARKET ",
      "Location": "NEAR OFFICIAL TOWN MARKET",
      "GPS COORDINATES": "5.588950,-0.260931",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 710,
      "AGENT BUSINESS NAME": "DIVINE SA ENTERPRISE",
      "AGENT USERNAME": "DISSUB04501",
      "ADDRESS": "KWABENYA",
      "Location": "OPPOSITE GA RURAL BANK",
      "GPS COORDINATES": "5.689534,-0.247331",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 711,
      "AGENT BUSINESS NAME": "Dynsil Network And Marketing Limited",
      "AGENT USERNAME": "DNM20301",
      "ADDRESS": "Market Court, Nsawam.",
      "Location": "Near Citizen Rural Bank",
      "GPS COORDINATES": "5.808205, -0.350470",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 712,
      "AGENT BUSINESS NAME": "JN SOLUITE INVESTMENT",
      "AGENT USERNAME": "JNM01501",
      "ADDRESS": "KWABENYA",
      "Location": "CLOSE TO SKY FILLING STATION",
      "GPS COORDINATES": "5.668412,-0.239580",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 713,
      "AGENT BUSINESS NAME": "PEDAS B ENTERPRISE ",
      "AGENT USERNAME": "PBESUB50101",
      "ADDRESS": "DAVE ",
      "Location": "ON THE DAVE JUNCTION ",
      "GPS COORDINATES": "6.600107, 0.503114",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 714,
      "AGENT BUSINESS NAME": "COMMTECH SOLUTION INVESTMENT",
      "AGENT USERNAME": "CSISUB01502",
      "ADDRESS": "KWABENYA ROUNDABOUT",
      "Location": "CLOSE TO THE ROUNDABOUT",
      "GPS COORDINATES": "5.668051,-0.239446",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 715,
      "AGENT BUSINESS NAME": "OHEMMA MERCY GYAWU",
      "AGENT USERNAME": "OMGSUB03102",
      "ADDRESS": "CIRCLE",
      "Location": "CLOSE TO QUATERS",
      "GPS COORDINATES": "5.574994,-0.213769",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 716,
      "AGENT BUSINESS NAME": "CHAJKEM ENT ",
      "AGENT USERNAME": "CTE03602",
      "ADDRESS": "DANSOMAN SAHARA",
      "Location": "BEHIND FIDELITY BANK ",
      "GPS COORDINATES": "5.5504875, -0.2657969",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 717,
      "AGENT BUSINESS NAME": "EKO ONE DAY ENTERPRISE",
      "AGENT USERNAME": "EDE03101",
      "ADDRESS": "CIRCLE",
      "Location": "NEAR LATTER DAYS SAINT",
      "GPS COORDINATES": "5.574799,-0.216752",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 718,
      "AGENT BUSINESS NAME": "JOOLINDA ENTERPRISE",
      "AGENT USERNAME": "JOE02401",
      "ADDRESS": "CIRCLE",
      "Location": "NEAR BRITAINIA HOTEL",
      "GPS COORDINATES": "5.574741,-0.216386",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 719,
      "AGENT BUSINESS NAME": "ABRAM PAP'S INTERNET CAFE",
      "AGENT USERNAME": "API05101",
      "ADDRESS": "UNNUMBERED SHOP AT ODORKOR MANGOASE, NEAR PENTECOST JUNCTION ",
      "Location": "NEAR PENTECOST JUNCTION ",
      "GPS COORDINATES": "5.582698,-0.263871",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 720,
      "AGENT BUSINESS NAME": "Gains Company ltd",
      "AGENT USERNAME": "GAC02601",
      "ADDRESS": "NYAMEKYE",
      "Location": "FAIRVIEW HOTEL",
      "GPS COORDINATES": "5.606251,-0.260984",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 721,
      "AGENT BUSINESS NAME": "DANPRIX ENTERPRISE",
      "AGENT USERNAME": "DPR03101",
      "ADDRESS": "KISSEMAN CHRISTAIN VILLAGE",
      "Location": "NEAR KOFORIDUA HOUSE",
      "GPS COORDINATES": "5.643683,-0.224081",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 722,
      "AGENT BUSINESS NAME": "BE-BRYTE VENTURES ",
      "AGENT USERNAME": "BEBSUB02601",
      "ADDRESS": "NYAMEKYE ",
      "Location": "GHANA COMMERCIAL BANK",
      "GPS COORDINATES": "5.603709,0.256609",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 723,
      "AGENT BUSINESS NAME": "BE-BRYTE VENTURES ",
      "AGENT USERNAME": "BEBSUB02602",
      "ADDRESS": "NYAMEKYE ",
      "Location": "KATA HOSTEL",
      "GPS COORDINATES": "5.603413,-0.258282",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 724,
      "AGENT BUSINESS NAME": "PRUDENCE DE CARE ",
      "AGENT USERNAME": "PDCSUB01401",
      "ADDRESS": "NYAMEKYE LAPAZ ",
      "Location": "GHANA COMMERCIAL BANK ",
      "GPS COORDINATES": "5.604131,-0.256660",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 725,
      "AGENT BUSINESS NAME": "KUPHEN VENTURES",
      "AGENT USERNAME": "KVE04501",
      "ADDRESS": "KISSEMAN -CHRISTAIN VILLAGE",
      "Location": "NEAR PARAKU ESTATES",
      "GPS COORDINATES": "5.642719,-0.223715",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 726,
      "AGENT BUSINESS NAME": "FERGIES TRADING VENTURES ",
      "AGENT USERNAME": "FTV03801",
      "ADDRESS": "NYAMEKYE LAPAZ",
      "Location": "QUICK CREDIT ",
      "GPS COORDINATES": "5.603601,-0.2578159",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 727,
      "AGENT BUSINESS NAME": "GOD'S GIFTVERO VENTURES ",
      "AGENT USERNAME": "GGV03801",
      "ADDRESS": "NYAMEKYE ",
      "Location": "MAMBO SPOT",
      "GPS COORDINATES": "5.600220,-0.255369",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 728,
      "AGENT BUSINESS NAME": "33 Electrical Squadron",
      "AGENT USERNAME": "ESQ04801",
      "ADDRESS": "Unnumbered shop at osu",
      "Location": "Behind police headquarters ",
      "GPS COORDINATES": "(5.5732870, -0.1880030)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 729,
      "AGENT BUSINESS NAME": "Gail- Stella ventures ",
      "AGENT USERNAME": "GSV03101",
      "ADDRESS": "Unnumbered shop at Cantonments ",
      "Location": "Near lands commission ",
      "GPS COORDINATES": "(5.5853650, -0.1754850)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 730,
      "AGENT BUSINESS NAME": "NABOAT NETWORKS",
      "AGENT USERNAME": "NNESUB70301",
      "ADDRESS": "WENCHI, BONO EAST",
      "Location": "NEAR BADUMAN RURAL BANK",
      "GPS COORDINATES": "7'44'21.4'N2'06'27.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 731,
      "AGENT BUSINESS NAME": "FATBANOE VENTURES ",
      "AGENT USERNAME": "FAT70101",
      "ADDRESS": "UNNUMBERED SHOP AT BECHEM ",
      "Location": "DIRECTLY  OPPOSITE  GHANA FIRE SERVICE ",
      "GPS COORDINATES": "7.0980600,,-2.0159160",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 732,
      "AGENT BUSINESS NAME": "NABOAT NETWORKS",
      "AGENT USERNAME": "NNESUB70302",
      "ADDRESS": "WENCH,BONO EAST ",
      "Location": "NEAR KRAMO STORE. WENCHI",
      "GPS COORDINATES": "7.7392670,-2.1077020",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 733,
      "AGENT BUSINESS NAME": "MANDELA VENTURES ",
      "AGENT USERNAME": "XTE70101",
      "ADDRESS": "UNNUMBERED SHOP AT BECHEM ",
      "Location": "ADJACCENT THE TRADITIONAL COUNCIL ",
      "GPS COORDINATES": "7.05'18.0''N2.01'36.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 734,
      "AGENT BUSINESS NAME": "BECHEM BRC OPERATING  ACCOUNT BECHEMOP ",
      "AGENT USERNAME": "BBR00101",
      "ADDRESS": "BECHEM BUSINESS ADVISORY CENTER ",
      "Location": "WITHIN BRC BUILDING ",
      "GPS COORDINATES": "7.01'81.0'N2.02'45.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 735,
      "AGENT BUSINESS NAME": "Nakbee 43 enterprise",
      "AGENT USERNAME": "N4E60401",
      "ADDRESS": "ABREPO JUNCTION ",
      "Location": "OPPOSITE GOIL FILLING STATION ",
      "GPS COORDINATES": "6°42'28.3'N1°38'13.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 736,
      "AGENT BUSINESS NAME": "Higher Everday Joa Enterprise",
      "AGENT USERNAME": "HEJ60801",
      "ADDRESS": "Fankyenebra",
      "Location": "Opposite  Opoku Ware Senior  Higy School",
      "GPS COORDINATES": "6°40'36.6'N 1°38'36.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 737,
      "AGENT BUSINESS NAME": "DERRICHANT VENTURES ",
      "AGENT USERNAME": "DVE60401",
      "ADDRESS": "ABREPO JUNCTION ",
      "Location": "OPPOSITE SHELL FILLING STATION ",
      "GPS COORDINATES": "6°42'26.8'N1°38'16.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 738,
      "AGENT BUSINESS NAME": "Kwabel Prestige Ventures",
      "AGENT USERNAME": "KPV60801",
      "ADDRESS": "Santasi",
      "Location": "Close to Santasi Lorry Station ",
      "GPS COORDINATES": "6°40'35.6'N 1°38'40.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 739,
      "AGENT BUSINESS NAME": "Good Point Ventures",
      "AGENT USERNAME": "GPV60501",
      "ADDRESS": "Patasi",
      "Location": "Near the Market",
      "GPS COORDINATES": "6°40'36.6'N 1°38'36.4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 740,
      "AGENT BUSINESS NAME": "Cosmic So.ution",
      "AGENT USERNAME": "CSO60801",
      "ADDRESS": "Patasi",
      "Location": "Inside the Market",
      "GPS COORDINATES": "6°40'35.6'N 1°38'40.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 741,
      "AGENT BUSINESS NAME": "Higher Everyday Joa Enterprise ",
      "AGENT USERNAME": "HEJ60801",
      "ADDRESS": "Fankyenebra",
      "Location": "Opposite Opoku Ware School",
      "GPS COORDINATES": "6°40'02.9'1°38'34.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 742,
      "AGENT BUSINESS NAME": "Kwabel Prestige Vent",
      "AGENT USERNAME": "KPV60801",
      "ADDRESS": "Santasi",
      "Location": "Close to the lorry Station",
      "GPS COORDINATES": "6°39'33.6'N 1°38'33.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 743,
      "AGENT BUSINESS NAME": "Azurite King Ventures",
      "AGENT USERNAME": "AKV60801",
      "ADDRESS": "Heman",
      "Location": "Near the lorry Station",
      "GPS COORDINATES": "6°38'41.3'N 1°40'15.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 744,
      "AGENT BUSINESS NAME": "Addai Godfred Enterprise",
      "AGENT USERNAME": "AGE60801",
      "ADDRESS": "Heman",
      "Location": "Near the Lorry Station",
      "GPS COORDINATES": "6°38'42.0'N 1°40'15.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 745,
      "AGENT BUSINESS NAME": "Hannah Fresh Fire Ventures",
      "AGENT USERNAME": "HFF60501",
      "ADDRESS": "Fankyenebra",
      "Location": "Close to the government School",
      "GPS COORDINATES": "6°39'39.6'N 1°38'24.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 746,
      "AGENT BUSINESS NAME": "Victoria Adu 2020 Enterprise",
      "AGENT USERNAME": "VAE60401",
      "ADDRESS": "Asuofua Asamang",
      "Location": "Asamang Lorry station 6",
      "GPS COORDINATES": "6°46'02.6'N1°41'34.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 747,
      "AGENT BUSINESS NAME": "Abu Danso Ventures",
      "AGENT USERNAME": "ADVSUB20302",
      "ADDRESS": "Nsawam Market, Nsawam",
      "Location": "Near GN Bank",
      "GPS COORDINATES": "5.810401, -0.352322",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 748,
      "AGENT BUSINESS NAME": "Ark Mintah ",
      "AGENT USERNAME": "AMI20301",
      "ADDRESS": "Church street, Nsawam",
      "Location": "Near Presbyterian church of Ghana Emmanuel congregation and near NPP office.",
      "GPS COORDINATES": "5.810401, -0.351084",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 749,
      "AGENT BUSINESS NAME": "SPEED CHOSEN ENTERPRISE",
      "AGENT USERNAME": "SCE03801",
      "ADDRESS": "Nsawam Post Office, Nsawam",
      "Location": "Near Home farm and opposite Od Hospital",
      "GPS COORDINATES": "5.8067453, -0.3517053",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 750,
      "AGENT BUSINESS NAME": "DON VIZIER BUSINESS VENTURES ",
      "AGENT USERNAME": "DVBSUB20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT MPRAESO KWAHU",
      "Location": "NEAR POST OFFICE, MPRAESO KWAHU",
      "GPS COORDINATES": "6°35'33.7' N 0°44'06.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 751,
      "AGENT BUSINESS NAME": "DADKOF ENT",
      "AGENT USERNAME": "DAE20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT NKAWKAW BYPASS",
      "Location": "NAER BYPASS JUNCTION, NKAWKAW",
      "GPS COORDINATES": "6°31'47.8' N 0°44'27.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 752,
      "AGENT BUSINESS NAME": "BIGGIE YAD ENTERPRISE ",
      "AGENT USERNAME": "BYE60801",
      "ADDRESS": "ADIEMBRA",
      "Location": "NEAR FOUNTAIN GATE CHAPLE",
      "GPS COORDINATES": "6°39'40.2'N1°37'51.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 753,
      "AGENT BUSINESS NAME": "NAB 2 VENTURES",
      "AGENT USERNAME": "N2V60801",
      "ADDRESS": "DAKOJOM",
      "Location": "NEAR DAKOJOM TAXI RANK",
      "GPS COORDINATES": "6°40'10.7'N 1°37'46.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 754,
      "AGENT BUSINESS NAME": "LAPALOMA MARIA BEAUTY PLOUR",
      "AGENT USERNAME": "LMB2010",
      "ADDRESS": "HN.AS/J WHITE HOUSE NKAWKAW",
      "Location": "NEAR WHITE HOUSE STATION",
      "GPS COORDINATES": "6°32'41.6' N 0°46'12.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 755,
      "AGENT BUSINESS NAME": "SAM JOE 92 VENTURES",
      "AGENT USERNAME": "SJV60801",
      "ADDRESS": "DARKOJOM",
      "Location": "UNITY OIL FILLING STATION ",
      "GPS COORDINATES": "6°40'10.5'N1°37'53.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 756,
      "AGENT BUSINESS NAME": "NANCY OAB ENTERPRISE",
      "AGENT USERNAME": "NOE60801",
      "ADDRESS": "AMPAABAME ",
      "Location": "AMPAABAME STATION OPPOSITE  FILLING STATION ",
      "GPS COORDINATES": "6°36'30.3'1°37'33.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 757,
      "AGENT BUSINESS NAME": "XCLUSIVE CAFE ",
      "AGENT USERNAME": "XCASUB20101",
      "ADDRESS": "BPA 106 BEGORO",
      "Location": "ADJACENT KIT KAT RESTAURANT ",
      "GPS COORDINATES": "6°23'02.9' N 0°22'38.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 758,
      "AGENT BUSINESS NAME": "HASART INVESTMENT ",
      "AGENT USERNAME": "HAISUB20101",
      "ADDRESS": "HN.NI 187 C NKAWKAW ZONGO",
      "Location": "NEAR THE MOSQUE",
      "GPS COORDINATES": "6°32'53.2' N 0°45'42.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 759,
      "AGENT BUSINESS NAME": "Nash 98 Enterprise",
      "AGENT USERNAME": "NEN60701",
      "ADDRESS": "Manhyia",
      "Location": "Near Melcom",
      "GPS COORDINATES": "6°42'00.6'N1°37'13.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 760,
      "AGENT BUSINESS NAME": "MENSTUTU ENTERPRISE ",
      "AGENT USERNAME": "MEN60703",
      "ADDRESS": "ASHANTI NEW TOWN",
      "Location": "NEAR ABIS PARK",
      "GPS COORDINATES": "6°|2'00.6'N1°37'13.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 761,
      "AGENT BUSINESS NAME": "W.T.SADIA ENTERPRISE ",
      "AGENT USERNAME": "WTS60701",
      "ADDRESS": "ALLABAR",
      "Location": "WITHIN ALLABAR MARKET",
      "GPS COORDINATES": "6°42'00.6'N1°37'13.8W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 762,
      "AGENT BUSINESS NAME": "SAM K. BOAKYE ENTERPRISE ",
      "AGENT USERNAME": "SKE60701",
      "ADDRESS": "ASHANTI NEW TOWN",
      "Location": "OPPOSITE ECOBANK ",
      "GPS COORDINATES": "6°42'00.6'N1°37'13.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 763,
      "AGENT BUSINESS NAME": "JUSTY-TWUM ENTERPRISE ",
      "AGENT USERNAME": "JTE61001",
      "ADDRESS": "ASHANTI NEW TOWN ",
      "Location": "ADJACENT ATWIMA KWAWOMA RURAL BANK",
      "GPS COORDINATES": "6°42'00.6'N1°37'13.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 764,
      "AGENT BUSINESS NAME": "SIX PHOTOS STUDIO ENTERPRISE ",
      "AGENT USERNAME": "SPS60701",
      "ADDRESS": "ASHANTI NEW TOWN ",
      "Location": "OPPOSITE  UMB",
      "GPS COORDINATES": "6°42'00.5''N1°37'14.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 765,
      "AGENT BUSINESS NAME": "Adusei feel free Enterprise ",
      "AGENT USERNAME": "AFF60701",
      "ADDRESS": "Ashanti New Town",
      "Location": "Near Agyaba Company q",
      "GPS COORDINATES": "6°42'00.y'N1°37'13.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 766,
      "AGENT BUSINESS NAME": "strenuous Efforts Enterprise ",
      "AGENT USERNAME": "SEE60701",
      "ADDRESS": "DR MENSAH",
      "Location": "WITHIN DR.MENSAH BUS TERMINAL ",
      "GPS COORDINATES": "6°45'00.4'N1°37'19.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 767,
      "AGENT BUSINESS NAME": "ZOLI ENTERPRISE ",
      "AGENT USERNAME": "ZOE80102",
      "ADDRESS": "UNNUMBERED CONTAINER, ZOLI ENTERPRISE ",
      "Location": "OPPOSITE GONI YILI",
      "GPS COORDINATES": "9.4129800,-0.8365380",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 768,
      "AGENT BUSINESS NAME": "S., K BREFO ENTERPRISE ",
      "AGENT USERNAME": "KBE60601",
      "ADDRESS": "DR. MENSAH",
      "Location": "WITHIN TOTAL FILLING STATION ",
      "GPS COORDINATES": "6°41'54.3'N1°37'01.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 769,
      "AGENT BUSINESS NAME": "AB VIDASH VENTURES",
      "AGENT USERNAME": "AVV60701",
      "ADDRESS": "DR. MENSAH",
      "Location": "WITHIN THE MARKET",
      "GPS COORDINATES": "6°41'48.0'N1°37'18.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 770,
      "AGENT BUSINESS NAME": "ABU AABIDAH VENTURES",
      "AGENT USERNAME": "ABASUB80103",
      "ADDRESS": "UNNUMBERED CONTAINER SAKASAKA QUARTERS ",
      "Location": "NEAR SAKASAKA SCHOOL ",
      "GPS COORDINATES": "9.4188125,-0.8389531",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 771,
      "AGENT BUSINESS NAME": "BAWSS GHLOBAL ENTERPRISE ",
      "AGENT USERNAME": "BGESUB80101",
      "ADDRESS": "UNNUMBERED CONTAINER SAKASAKA ",
      "Location": "NEAR MEET ME THERE ",
      "GPS COORDINATES": "9.4220375,-0.8416406",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 772,
      "AGENT BUSINESS NAME": "ABASUB80101",
      "AGENT USERNAME": "ABU AABIDAH VENTURES ",
      "ADDRESS": "UNNUMBERED CONTAINER GUMBIHINI",
      "Location": "NEAR SAVAANA CONSTRUCTION ",
      "GPS COORDINATES": "9.4254125,-0.8448594",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 773,
      "AGENT BUSINESS NAME": "RESEARCH QORLD CONSULT",
      "AGENT USERNAME": "RWC61301",
      "ADDRESS": "KOTEI",
      "Location": "NEAR KOTEI POLICE STATION",
      "GPS COORDINATES": "6°39'56.8'N 1°33'31.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 774,
      "AGENT BUSINESS NAME": "SASS BUSINESS AND CONSULT SERVICE",
      "AGENT USERNAME": "SAC80101",
      "ADDRESS": "UNNUMBERED CONTAINER GUMBIHINI ",
      "Location": "NEAR VRA GUMBIHINI ",
      "GPS COORDINATES": "9.4168875,-0.8476406",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 775,
      "AGENT BUSINESS NAME": "OUT STRETCH ARM",
      "AGENT USERNAME": "OSA61301",
      "ADDRESS": "AYEDUASE",
      "Location": "NEAR AYEDUASE GATE",
      "GPS COORDINATES": "6°40'32.6'N 1°33'46.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 776,
      "AGENT BUSINESS NAME": "NHYIRABA AMPONSAH VENTURES ",
      "AGENT USERNAME": "NAV60101",
      "ADDRESS": "OFORIKROM ",
      "Location": "NEAR MAGNETIC HOTEL",
      "GPS COORDINATES": "6°40'59.4'N 1°35'38.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 777,
      "AGENT BUSINESS NAME": "DANJIMA VENTURES ",
      "AGENT USERNAME": "DAV80101",
      "ADDRESS": "WARIZEHI",
      "Location": "NEAR NURUSLAM ISLAMIC SCHOOL",
      "GPS COORDINATES": "9.4154125,-0.8450781",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 778,
      "AGENT BUSINESS NAME": "RX BRODEX ENTERPRISE ",
      "AGENT USERNAME": "RBE61301",
      "ADDRESS": "EJISU",
      "Location": "NEAR EJISU MUNICIPAL ",
      "GPS COORDINATES": "6°43'20.4'N 1°28'16.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 779,
      "AGENT BUSINESS NAME": "GLORIA 92 ENTERPRISE",
      "AGENT USERNAME": "G9E60101",
      "ADDRESS": "EJISU",
      "Location": "NEAR EJISU FIRE SERVICE",
      "GPS COORDINATES": "6°43'16.6'N 1°28'08.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 780,
      "AGENT BUSINESS NAME": "CHRISTAL MINING CONSULT",
      "AGENT USERNAME": "CMC60501",
      "ADDRESS": "EJISU",
      "Location": "NEAR EJISU POLICE STATION",
      "GPS COORDINATES": "6°43'26.5'N 1°27'58.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 781,
      "AGENT BUSINESS NAME": "GLAD AND REJOICE ENTERPRISE ",
      "AGENT USERNAME": "GARSUB40502",
      "ADDRESS": "Unnumbered shop at Agona Nkwanta",
      "Location": "Opposite Baidoo Bonsu SHS",
      "GPS COORDINATES": "4.52’32.8'N  1.55’43.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 782,
      "AGENT BUSINESS NAME": "GLAD AND REJOICE ENTERPRISE ",
      "AGENT USERNAME": "GARSUB40501",
      "ADDRESS": "Unnumbered shop along the Apimanim road ",
      "Location": "Near Ghana Rubber Estate Limited factory ",
      "GPS COORDINATES": "4.53’06.6'N  1.55’54.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 783,
      "AGENT BUSINESS NAME": "AB VIDASH VENTURES",
      "AGENT USERNAME": "AVV60701",
      "ADDRESS": "DR MENSAH",
      "Location": "WITHIN THE MARKET",
      "GPS COORDINATES": "6°41'48'.0'N1°37'18.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 784,
      "AGENT BUSINESS NAME": "Sunglo Vel 2017 Ventures",
      "AGENT USERNAME": "SUV61201",
      "ADDRESS": "DUASE",
      "Location": "NEAR THE STATION ",
      "GPS COORDINATES": "6°43'44.4'N1°34'04.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 785,
      "AGENT BUSINESS NAME": "Dan-liz 247 Enterprise",
      "AGENT USERNAME": "DLE60701",
      "ADDRESS": "KENYASI",
      "Location": "ADJACENT THE PALACE ",
      "GPS COORDINATES": "6°44'33.6'N1°33'49.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 786,
      "AGENT BUSINESS NAME": "J.A RALPH VENTURES ",
      "AGENT USERNAME": "JAR61001",
      "ADDRESS": "Sawaaba",
      "Location": "Near the MP Residence ",
      "GPS COORDINATES": "6°42'00.4N11°37'00.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 787,
      "AGENT BUSINESS NAME": "J-SONS CASHLESS SERVICES ",
      "AGENT USERNAME": "JCS40501",
      "ADDRESS": "Unnumbered shop at Nsuaem",
      "Location": "Near the Transformer ",
      "GPS COORDINATES": "4.54’06.5'N  1.58’20.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 788,
      "AGENT BUSINESS NAME": "Asare Bee Ventures ",
      "AGENT USERNAME": "ABVSUB61002",
      "ADDRESS": "KENYASI",
      "Location": "INFRONT OF KENYASI JHS",
      "GPS COORDINATES": "6°44'33.6'N1°33'49.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 789,
      "AGENT BUSINESS NAME": "Yaw Yaw 92 Enterprise",
      "AGENT USERNAME": "YYV61001",
      "ADDRESS": "Adwumakase ",
      "Location": "Near the Palace ",
      "GPS COORDINATES": "6°42'51.5'N1°37'41.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 790,
      "AGENT BUSINESS NAME": "GLORIOUS APPIAH ENTERPRISE ",
      "AGENT USERNAME": "GAE40501",
      "ADDRESS": "Unnumbered shop at Wassa Agona ",
      "Location": "Near the Pentecost Church ",
      "GPS COORDINATES": "5.16’14.1'N  2.01’10.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 791,
      "AGENT BUSINESS NAME": "COMFORT ANCHEBAH ENTERPRISE",
      "AGENT USERNAME": "CAE 60501",
      "ADDRESS": "KAASE",
      "Location": "OPPOSITE OLAM COCOA",
      "GPS COORDINATES": "6°38'48.3'N 1°36'32.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 792,
      "AGENT BUSINESS NAME": "ALEXEV COMPANY LIMITED ",
      "AGENT USERNAME": "ACL40501",
      "ADDRESS": "Unnumbered shop at Tarkwa Akyempim",
      "Location": "Near the Akyempim bus stop ",
      "GPS COORDINATES": "5.16’25.3'N  2.00’42.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 793,
      "AGENT BUSINESS NAME": "RICHMENS ENTERPRISE ",
      "AGENT USERNAME": "R2E61201",
      "ADDRESS": "Offinso ",
      "Location": "Opposit The Methodist Church Freeman society Manse",
      "GPS COORDINATES": "6°56'00.0'N 1°41'06.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 794,
      "AGENT BUSINESS NAME": "KAKALAAZI VENTURES",
      "AGENT USERNAME": "KVE61202",
      "ADDRESS": "Offinso Zongo",
      "Location": "Close to Seams Oil Filling Station ",
      "GPS COORDINATES": "6°56'12.9'N 1°41'00.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 795,
      "AGENT BUSINESS NAME": "SIBAABI SENA VENTURES",
      "AGENT USERNAME": "SSV61201",
      "ADDRESS": "Offinso Dome",
      "Location": "Opposite the Public Toilet ",
      "GPS COORDINATES": "6°56'16.7'W 1°41'03.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 796,
      "AGENT BUSINESS NAME": "JUSTICE BOAKYE ENTERPRISE ",
      "AGENT USERNAME": "JBE61201",
      "ADDRESS": "Offinso Ampabame",
      "Location": "Near Offinso Collage of Education",
      "GPS COORDINATES": "6°56'35.9'N 1°40'56.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 797,
      "AGENT BUSINESS NAME": "Jodezh Enterprise ",
      "AGENT USERNAME": "JEN02001",
      "ADDRESS": "Unnumbered shop at Tradefair palmwine",
      "Location": "Near Zenith bank",
      "GPS COORDINATES": "(5.5756350, -0.1533980)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 798,
      "AGENT BUSINESS NAME": "MANFREDO LINKS",
      "AGENT USERNAME": "MFLSUB40502",
      "ADDRESS": "Unnumbered shop at Tamso school junction ",
      "Location": "Near the market",
      "GPS COORDINATES": "5.17’07.1'N  2.00’13.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 799,
      "AGENT BUSINESS NAME": "Kyemek ENTERPRISE ",
      "AGENT USERNAME": "KEN70103",
      "ADDRESS": "Shop 12 sunyani",
      "Location": "ADJACENT FIDELITY BANK SUNYANI BRANCH ",
      "GPS COORDINATES": "7.20'01.1'N 2. 19' 47' . 9'",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 800,
      "AGENT BUSINESS NAME": "MANFREDO LINKS",
      "AGENT USERNAME": "MFLSUB40501",
      "ADDRESS": "Unnecessary shop at Tamso",
      "Location": "Near the Pentecost church",
      "GPS COORDINATES": "5.28’53.3'N  2.00’16.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 801,
      "AGENT BUSINESS NAME": "BRONIAFOAKO ENTERPRISE ",
      "AGENT USERNAME": "BEN70101",
      "ADDRESS": "Shop 04 sunyani",
      "Location": "OPPOSITE FIDELITY BANK SUNYANI POSTBANK ",
      "GPS COORDINATES": "7. 20'02.2' N 2' 19' 46. 6 ' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 802,
      "AGENT BUSINESS NAME": "YEHOYHOYEN ENTERPRISE ",
      "AGENT USERNAME": "YEN70101",
      "ADDRESS": "Shop 8 Area 3",
      "Location": "OPPOSITE SSNIT SUNYANI ",
      "GPS COORDINATES": "7. 20' 05. 6' 2. 19' 45' 4 W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 803,
      "AGENT BUSINESS NAME": "KAZIBCO ENTERPRISE ",
      "AGENT USERNAME": "KEN70101",
      "ADDRESS": "SHOP 32 SUNYANI",
      "Location": "OPPOSITE VODAFONE OFFICE",
      "GPS COORDINATES": "7. 20'06. 6' N 2. 19' 45.2' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 804,
      "AGENT BUSINESS NAME": "WOLIDAN  FAIR VALUE VENTURES ",
      "AGENT USERNAME": "WFV70101",
      "ADDRESS": "SHOP 12 SUNYANI",
      "Location": "OPPOSITE GREENLIGHT",
      "GPS COORDINATES": "7. 20' 10.0' N 2. 19' 45. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 805,
      "AGENT BUSINESS NAME": "Eskel enterprise ",
      "AGENT USERNAME": "ENTSUB04801",
      "ADDRESS": "Unnumbered shop at teshie first junction ",
      "Location": "Near shell filling station ",
      "GPS COORDINATES": "(5.5890030, -0.0962490)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 806,
      "AGENT BUSINESS NAME": "DAWNAKAY VENTURES ",
      "AGENT USERNAME": "DVE00201",
      "ADDRESS": "SPINTEX ",
      "Location": "ADJACENT KPOGAS FURNITURE ",
      "GPS COORDINATES": "5'38'12.4'N 0.0'6'12.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 807,
      "AGENT BUSINESS NAME": "AMOGOBO ENTERPRISE ",
      "AGENT USERNAME": "AEN61201",
      "ADDRESS": "Offinso Amoawi ",
      "Location": "Close to Amoawi Station ",
      "GPS COORDINATES": "6°57'17.4'N 1°41'19.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 808,
      "AGENT BUSINESS NAME": "ADOM NYAME TUMI SO",
      "AGENT USERNAME": "ANT61201",
      "ADDRESS": "Offinso off Mpehi road",
      "Location": "Near St. Joseph School",
      "GPS COORDINATES": "6°55'50.6'N 1°41'04.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 809,
      "AGENT BUSINESS NAME": "PINK TRY ENTERPRISE ",
      "AGENT USERNAME": "PTE 61201.00",
      "ADDRESS": "Offinso",
      "Location": "Close to St. Joseph School",
      "GPS COORDINATES": "6°55'49.9'N 1°41'04.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 810,
      "AGENT BUSINESS NAME": "MARY NEW ENTERPRISE ",
      "AGENT USERNAME": "MNE03801",
      "ADDRESS": "KWASHIEBU",
      "Location": "RECT ACADEMY ",
      "GPS COORDINATES": "5.605841,-0.269986",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 811,
      "AGENT BUSINESS NAME": "Tilapia.com",
      "AGENT USERNAME": "TIC00401",
      "ADDRESS": "Unnumbered shop at osu",
      "Location": "Near Access bank ",
      "GPS COORDINATES": "(5.5526910, -0.1809040)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 812,
      "AGENT BUSINESS NAME": "VAN FAETONY ENTERPRISE ",
      "AGENT USERNAME": "VFESUB00301",
      "ADDRESS": "JAMES TOWN ",
      "Location": "NEAR ACCRA SEMPE BASIC SCHOOL ",
      "GPS COORDINATES": "5.536762,-0.223626",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 813,
      "AGENT BUSINESS NAME": "KWADWO SARFO  86 VENTURES",
      "AGENT USERNAME": "KWS51201",
      "ADDRESS": "Offinso Mephi",
      "Location": "Close to Barekese junction ",
      "GPS COORDINATES": "6°55'47.3'N 1°41'03.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 814,
      "AGENT BUSINESS NAME": "1NANA KUSI ULTIMATE ENTERPRISE",
      "AGENT USERNAME": "NKUSUB30102",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU",
      "Location": "NEAR THE MARKET",
      "GPS COORDINATES": "CN-0008-7651",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 815,
      "AGENT BUSINESS NAME": "RICHLON ENTERPRISE ",
      "AGENT USERNAME": "RICSUB00301",
      "ADDRESS": "JAMES TOWN ",
      "Location": "NEAR JAMES TOWN POLICE STATION ",
      "GPS COORDINATES": "5.535380,-0.213193",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 816,
      "AGENT BUSINESS NAME": "J- KAPS VENTURES",
      "AGENT USERNAME": "JKVSUB70301",
      "ADDRESS": "TAKO-TECHIMAN,ONO EAST",
      "Location": "OPPOSITE SHELL FILLING STATION, TAKO",
      "GPS COORDINATES": "7.595764,-1.935932",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 817,
      "AGENT BUSINESS NAME": "1NANA KUSI ULTIMATE ENTERPRISE",
      "AGENT USERNAME": "NKUSUB30103",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR ASSIN FOSU MAIN STATION ",
      "GPS COORDINATES": "CR-0008-6645",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 818,
      "AGENT BUSINESS NAME": "SOLID LIGHTHOUSE ENTERPRISE ",
      "AGENT USERNAME": "SLE00701",
      "ADDRESS": "JAMES TOWN ",
      "Location": "CLOSE TO ANUMANSA DIVISIONAL PALACE",
      "GPS COORDINATES": "5.534117,-0.213385",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 819,
      "AGENT BUSINESS NAME": "4KD TRADING ENTERPRISE",
      "AGENT USERNAME": "KDTSUB30104",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR THE MARKET",
      "GPS COORDINATES": "CN-0008-8077",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 820,
      "AGENT BUSINESS NAME": "SEED BOX SUSU ENTERPRISE ",
      "AGENT USERNAME": "SBS01701",
      "ADDRESS": "USHER TOWN ",
      "Location": "NEAR SALAGA MARKET ",
      "GPS COORDINATES": "5.538579,-0.208795",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 821,
      "AGENT BUSINESS NAME": "4KD TRADING ENTERPRISE",
      "AGENT USERNAME": "KDTSUB30105",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU STATION",
      "Location": "NEAR THE WOMEN MARKET",
      "GPS COORDINATES": "CN-0022-5327",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 822,
      "AGENT BUSINESS NAME": "4KD TRADING ENTERPRISE",
      "AGENT USERNAME": "KDTSUB30107",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU",
      "Location": "NEAR FOSCO TRAINING SCHOOL",
      "GPS COORDINATES": "CN-0074-2128",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 823,
      "AGENT BUSINESS NAME": "VAN FAETONY ENTERPRISE ",
      "AGENT USERNAME": "VFESUB00302",
      "ADDRESS": "ACCRA PALADIUM ",
      "Location": "NEAR KC COMPANY LIMITED ",
      "GPS COORDINATES": "5.542327,-0.213069",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 824,
      "AGENT BUSINESS NAME": "WAPPAHS JEWELLERY ",
      "AGENT USERNAME": "WJE00301",
      "ADDRESS": "AVANA",
      "Location": "NEAR CHILDREN'S HOSPITAL ",
      "GPS COORDINATES": "5.543661,-0.213189",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 825,
      "AGENT BUSINESS NAME": "4KD TRADING ENTERPRISE",
      "AGENT USERNAME": "KDTSUB30101",
      "ADDRESS": "UNNUMBERED LOCATION AT TWIFO PRASO",
      "Location": "NEAR THE MARKET",
      "GPS COORDINATES": "CT-0000-3207",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 826,
      "AGENT BUSINESS NAME": "MCT SUSU SERVICES",
      "AGENT USERNAME": "MSSSUB61202",
      "ADDRESS": "Offinso Kokote",
      "Location": "Opposite Star Oil ",
      "GPS COORDINATES": "6°56'01.4'N 1°40'59.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 827,
      "AGENT BUSINESS NAME": "ADISCO PRESTIGE VENTURES",
      "AGENT USERNAME": "APV70301",
      "ADDRESS": "P.OBOX 7976, TECHIMAN",
      "Location": "NEAR PASSION EDUCATIONAL COMPLEX",
      "GPS COORDINATES": "7.599678,-1.933203",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 828,
      "AGENT BUSINESS NAME": "ADISCO PRESTIGE VENTURES",
      "AGENT USERNAME": "APV70301",
      "ADDRESS": "P.OBOX 7976, TECHIMAN",
      "Location": "NEAR PASSION EDUCATIONAL COMPLEX",
      "GPS COORDINATES": "7.599678,-1.933203",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 829,
      "AGENT BUSINESS NAME": "4KD TRADING ENTERPRISE",
      "AGENT USERNAME": "KDTSUB30102",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "INSIDE ASSIN FOSU MARKET",
      "GPS COORDINATES": "CN-0008-8682",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 830,
      "AGENT BUSINESS NAME": "MCT SUSU SERVICES ",
      "AGENT USERNAME": "MSSSUP61201",
      "ADDRESS": "Offinso Kokote",
      "Location": "Opposite  Star Oil",
      "GPS COORDINATES": "6°56'01.4'N 1°40'59.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 831,
      "AGENT BUSINESS NAME": "4KD TRADING ENTERPRISE",
      "AGENT USERNAME": "KDTSUB30103",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR ASSIN FOSU TOWN",
      "GPS COORDINATES": "CN-0008-9173",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 832,
      "AGENT BUSINESS NAME": "AMPOFO GIFTY TRINITY VENTURES",
      "AGENT USERNAME": "AGT30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN AKROFOUM",
      "Location": "NEAR THE ASSIN AKROFOUM GOVERNMENT SCHOOL",
      "GPS COORDINATES": "CS-2111-4737",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 833,
      "AGENT BUSINESS NAME": "HARRACHE 22 VENTURES",
      "AGENT USERNAME": "H2V70101",
      "ADDRESS": "C 23 SUNYANI",
      "Location": "OPPOSITE UENR MAIN GATE",
      "GPS COORDINATES": "7. 20'57. 5' N 2.20' 34. 9 ' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 834,
      "AGENT BUSINESS NAME": "GREENWINGS VENTURES ",
      "AGENT USERNAME": "GRV40501",
      "ADDRESS": "Store number 11, Bogoso junction - Tarkwa",
      "Location": "Opposite the Bogoso junction ",
      "GPS COORDINATES": "5.19’56.1'N  1. 58’41.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 835,
      "AGENT BUSINESS NAME": "OSCARPAK ENTERPRISE ",
      "AGENT USERNAME": "OSC00701",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR FIDELITY BANK ",
      "GPS COORDINATES": "5.547809,-0.214362",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 836,
      "AGENT BUSINESS NAME": "DANTET SANTEX CORRECT ",
      "AGENT USERNAME": "DSC00701",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR GRAND VIEW HOTEL",
      "GPS COORDINATES": "5.547833,-0.213170",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 837,
      "AGENT BUSINESS NAME": "PROVERBS 10:2 VENTURES",
      "AGENT USERNAME": "PRVSUB00702",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR GRAND VIEW HOTEL ",
      "GPS COORDINATES": "5.547064,-0.213258",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 838,
      "AGENT BUSINESS NAME": "RECTOR VENTURES ",
      "AGENT USERNAME": "REV50101",
      "ADDRESS": "HO, OLA TOP",
      "Location": "OPPOSITE OLA SENIOR HIGH SCHOOL",
      "GPS COORDINATES": "6.618134, 0.465649",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 839,
      "AGENT BUSINESS NAME": "ROSEELINK VENTURES ",
      "AGENT USERNAME": "RLV70101",
      "ADDRESS": "D 23 sunyani",
      "Location": "OPPOSITE FRANKO TRADING ENTERPRISE ",
      "GPS COORDINATES": "7. 19' 59.6' N 2. 19' 40.6' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 840,
      "AGENT BUSINESS NAME": "CCC. ADU BOAHEN ENTERPRISE ",
      "AGENT USERNAME": "CAB70401",
      "ADDRESS": "Shop 4 sunyani",
      "Location": "OPPOSITE MTN SUNYANI ",
      "GPS COORDINATES": "7. 19' 55. 3 N 2. 19' 29.9 ' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 841,
      "AGENT BUSINESS NAME": "FRENET PLUS ENTERPRISE ",
      "AGENT USERNAME": "FPE70101",
      "ADDRESS": "Shop 100 / D",
      "Location": "ADJACENT GCM SUNYANI ",
      "GPS COORDINATES": "7. 19' 59. 9' N 2. 19' 19. 0 ' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 842,
      "AGENT BUSINESS NAME": "PAULGEE ENTERPRISE ",
      "AGENT USERNAME": "PGE70401",
      "ADDRESS": "Shop 7 sunyani",
      "Location": "WEDNESDAY MARKET ",
      "GPS COORDINATES": "7. 19' 58.6' N 2. 19.13.5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 843,
      "AGENT BUSINESS NAME": "EMISAT VENTURES ",
      "AGENT USERNAME": "EVE12301",
      "ADDRESS": "SHUKURA",
      "Location": "NEAR SHUKURA TAXI  STATION ",
      "GPS COORDINATES": "5.5527625, -0.2498906",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 844,
      "AGENT BUSINESS NAME": "KOFI BOAKYE ENTERPRISE ",
      "AGENT USERNAME": "KBE61201",
      "ADDRESS": "Offinso",
      "Location": "Beside GCB",
      "GPS COORDINATES": "6°56'18.9'N 1°40'22.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 845,
      "AGENT BUSINESS NAME": "NANA YAW KONATEY ENTERPRISE",
      "AGENT USERNAME": "NYK02801",
      "ADDRESS": "UNN SHOP AT APPOLONIA",
      "Location": "NEAR APPOLONIA JUNCTION",
      "GPS COORDINATES": "5.7921310,-0.0018740",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 846,
      "AGENT BUSINESS NAME": "SIRJOHN ENTERPRISE ",
      "AGENT USERNAME": "SJE50101",
      "ADDRESS": "HO, OLA SENIOR HIGH SCHOOL ",
      "Location": "BESIDE OLA SHS",
      "GPS COORDINATES": "6.617149,0.467806",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 847,
      "AGENT BUSINESS NAME": "NKWAKWA VENTURES",
      "AGENT USERNAME": "NVE60301",
      "ADDRESS": "Offinso ",
      "Location": "Opposite Isaac Bookshop  house",
      "GPS COORDINATES": "6°56'17.1'W 1°40'24.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 848,
      "AGENT BUSINESS NAME": "SHEEDAS ULTIMATE ENTERPRISE",
      "AGENT USERNAME": "SUE02801",
      "ADDRESS": "UNN SHOP AT AFIENYA ",
      "Location": "NEAR SENENTH DAY ADVENTIST CHURCH",
      "GPS COORDINATES": "5.7979280,-0.0061050",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 849,
      "AGENT BUSINESS NAME": "DOELYNE ENTERPRISE ",
      "AGENT USERNAME": "DENSUB50101",
      "ADDRESS": "6.619618,0.470907",
      "Location": "INSIDE HO MARKET",
      "GPS COORDINATES": "6.619618, 0.470907",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 850,
      "AGENT BUSINESS NAME": "CASHMAN NICH VENTURES ",
      "AGENT USERNAME": "CNV50101",
      "ADDRESS": "HO",
      "Location": "INSIDE HO MARKET",
      "GPS COORDINATES": "6.619613,0.471259",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 851,
      "AGENT BUSINESS NAME": "BUBUNE SHINE ENTERPRISE",
      "AGENT USERNAME": "BSE02801",
      "ADDRESS": "ASHAIMAN UNDER BRIDGE STATION",
      "Location": "NEAR TOP OIL FILLING STATION",
      "GPS COORDINATES": "5.675940,-0.044057",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 852,
      "AGENT BUSINESS NAME": "ISAAC ONYAMEVENTURES",
      "AGENT USERNAME": "IOV61201",
      "ADDRESS": "Offinso",
      "Location": "Opposite The Market",
      "GPS COORDINATES": "6°56'19.7'N 1°40'24.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 853,
      "AGENT BUSINESS NAME": "AVALON TECHNOLOGIES ",
      "AGENT USERNAME": "ATE50101",
      "ADDRESS": "HO ",
      "Location": "HO MARKET BEFORE GOIL FILLING STATION ",
      "GPS COORDINATES": "6.620798,0.472273",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 854,
      "AGENT BUSINESS NAME": "RULERS POWER BUSINESS AND CONSTRUCTION",
      "AGENT USERNAME": "RPB02801",
      "ADDRESS": "UNN SHOP AT ASHAIMAN LEBANON",
      "Location": "BEHIND 4:30 PUB",
      "GPS COORDINATES": "5.7083660,-0.0464750",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 855,
      "AGENT BUSINESS NAME": "NANA POKUAA 10 ENTERPRISE",
      "AGENT USERNAME": "NPE61201",
      "ADDRESS": "Offinso ",
      "Location": "Inside Offinso Nursing Training  School",
      "GPS COORDINATES": "6°55'51.4'N 1°40'51.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 856,
      "AGENT BUSINESS NAME": "3A BLESSED HOPE ENTERPRISE",
      "AGENT USERNAME": "ABH02801",
      "ADDRESS": "MICHEL CAMP BARRACKS, HQ",
      "Location": "NEAR TELEPHONE KIOSK",
      "GPS COORDINATES": "5.7265220,-0.0205880",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 857,
      "AGENT BUSINESS NAME": "JEFFREY JAMES ENTER",
      "AGENT USERNAME": "JJE61201",
      "ADDRESS": "Offinso",
      "Location": "Near St. Patrick's Hospital Junction ",
      "GPS COORDINATES": "6°56'00.2'N 1°40'54.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 858,
      "AGENT BUSINESS NAME": "SMART ACCESS MICRO CREDIT SERVICE",
      "AGENT USERNAME": "SAMSUB02801",
      "ADDRESS": "ASHAIMAN NIGHT MARKET",
      "Location": "NEAR ST. MARY'S INT. SCHOOL",
      "GPS COORDINATES": "5.6896700,-0.0348120",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 859,
      "AGENT BUSINESS NAME": "WRITESHUNE ENTERPRISE ",
      "AGENT USERNAME": "WRE61201",
      "ADDRESS": "Offinso",
      "Location": "Close to St. Patrick's Junction",
      "GPS COORDINATES": "656'02.6'N 1°40'55.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 860,
      "AGENT BUSINESS NAME": "PRODUCT OF MERCY AND GRACE ENTERPRISE ",
      "AGENT USERNAME": "PMG61201",
      "ADDRESS": "Offinso ",
      "Location": "Ooposite the Law Court",
      "GPS COORDINATES": "6°56'22.4'N 1°40'18.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 861,
      "AGENT BUSINESS NAME": "MULTI LABIO VENTURES ",
      "AGENT USERNAME": "MLV04902",
      "ADDRESS": "REGIMANUEL GREY ESTATES- SPINTEX ",
      "Location": "FIRST FLOOR OF ESTER'S SUPERMARKET ",
      "GPS COORDINATES": "5'38'12.4'N 0'.06'12.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 862,
      "AGENT BUSINESS NAME": "RANDY QUAYNOR ENTERPRISE ",
      "AGENT USERNAME": "RQE61201",
      "ADDRESS": "Offinso ",
      "Location": "Offinso Close to the Police station",
      "GPS COORDINATES": "6°56'08.8'N 1°40'01.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 863,
      "AGENT BUSINESS NAME": "ROYAL SHEILD VENTURES ",
      "AGENT USERNAME": "RSV61201",
      "ADDRESS": "Unnumbered Shop Offinso ",
      "Location": "Opposite the shell Filling Station ",
      "GPS COORDINATES": "6°56'18.9'N 1°40'22.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 864,
      "AGENT BUSINESS NAME": "ASAS HERITAGE  VENTURES ",
      "AGENT USERNAME": "AHV60801",
      "ADDRESS": "ABUAKWA",
      "Location": "NEAR THE STATION ",
      "GPS COORDINATES": "6°42'02.8'N 1°43'04.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 865,
      "AGENT BUSINESS NAME": "ROYAL BELLANN ENTERPRISE ",
      "AGENT USERNAME": "RBE03801",
      "ADDRESS": "CHANTAN KOKROKO",
      "Location": "ALIGATOR HOTEL",
      "GPS COORDINATES": "5.65217,-0.258306",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 866,
      "AGENT BUSINESS NAME": "LEKLAMP VENTURES ",
      "AGENT USERNAME": "LEV04401",
      "ADDRESS": "KWASHIEBU",
      "Location": "KATA HOSTEL",
      "GPS COORDINATES": "5.603436,-0.262524",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 867,
      "AGENT BUSINESS NAME": "AGYA M VENTURES ",
      "AGENT USERNAME": "AMV60801",
      "ADDRESS": "ATWIMA AGOGO",
      "Location": "NEAR THE GUEST HOUSE ",
      "GPS COORDINATES": "6°41'14.9'N 1°43'54.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 868,
      "AGENT BUSINESS NAME": "KERLANCE VENTURES ",
      "AGENT USERNAME": "KVE03801",
      "ADDRESS": "TABORA",
      "Location": "SHELL FILLING STATION ",
      "GPS COORDINATES": "5.621087,-0.262608",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 869,
      "AGENT BUSINESS NAME": "STARFUND SUSU SERVICES",
      "AGENT USERNAME": "SFS60801",
      "ADDRESS": "ATWIMA AGOGO",
      "Location": "OPPOSITE ECG",
      "GPS COORDINATES": "6°41'34.0' N 1°43'57.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 870,
      "AGENT BUSINESS NAME": "VEROPP 86 ENTERPRISE",
      "AGENT USERNAME": "VEN60801",
      "ADDRESS": "ABUAKWA OFFICE",
      "Location": "NEAR THE TAXI RANK",
      "GPS COORDINATES": "6°42'00.2'N 1°42'36.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 871,
      "AGENT BUSINESS NAME": "REGIKUBI VENTURES ",
      "AGENT USERNAME": "RVE60801",
      "ADDRESS": "ABUAKWA OFFICE ",
      "Location": "NEAR THE TAXI RANK",
      "GPS COORDINATES": "6°42'01.9'N 1°42'35.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 872,
      "AGENT BUSINESS NAME": "HANYEBS VENTURES ",
      "AGENT USERNAME": "HVESUB70401",
      "ADDRESS": "Unnumbered SHOP SUNYANI ",
      "Location": "BEHIND TWENE AMANFO SHS",
      "GPS COORDINATES": "7. 20' 12. 8' N 2. 19' 22.7' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 873,
      "AGENT BUSINESS NAME": "TRUST AND COMPETENCE ENTERPRISE ",
      "AGENT USERNAME": "TCESUB40101",
      "ADDRESS": "UNNUMBERED CONTAINER AT NURSING AND MIDWIFERY SCHOOL, EFFIA NKWANTA REGIONAL HOSPITAL, SEKONDI",
      "Location": "NEAR EFFIA NKWANTA REGIONAL HOSPITAL ",
      "GPS COORDINATES": "4°55'35.2'N 1°44'40.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 874,
      "AGENT BUSINESS NAME": "ABLEMAN VENTURES",
      "AGENT USERNAME": "ABV61101",
      "ADDRESS": "ABUAKWA MAAKRO",
      "Location": "NEAR THE BUS STOP",
      "GPS COORDINATES": "6°42'03.1'N 1°43'38.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 875,
      "AGENT BUSINESS NAME": "MCCRICH 85 ENTERPRISE",
      "AGENT USERNAME": "M8E60801",
      "ADDRESS": "TANOSO",
      "Location": "OPPOSITE  KASAPREKO",
      "GPS COORDINATES": "6°41'52.5'N 1°42'13.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 876,
      "AGENT BUSINESS NAME": "SANDRA DWOMOH 19 ENTERPRISE",
      "AGENT USERNAME": "SDE60801",
      "ADDRESS": "TANOSO",
      "Location": "NEAR KASAPREKO",
      "GPS COORDINATES": "6°41'53.1'N 1°42'10.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 877,
      "AGENT BUSINESS NAME": "CHRISTY LOYALTY VENTURES ",
      "AGENT USERNAME": "CLV",
      "ADDRESS": "SHUKURA",
      "Location": "NEAR CHOKOR",
      "GPS COORDINATES": "5.5281875, -0.2422031",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 878,
      "AGENT BUSINESS NAME": "GCO03301",
      "AGENT USERNAME": "Gabiano conglomerate ",
      "ADDRESS": "Unnumbered house at Tema new town bankuman ",
      "Location": "Near the chief’s palace ",
      "GPS COORDINATES": "5°39'06.6'N 0°01'06.1'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 879,
      "AGENT BUSINESS NAME": "Godsbrain UB40",
      "AGENT USERNAME": "GUESUB05001",
      "ADDRESS": "Unnumbered house at Tema comm 11",
      "Location": "Near Tema comm 11 station",
      "GPS COORDINATES": "5°39'53.3'N 0°01'36.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 880,
      "AGENT BUSINESS NAME": "Seyram son enterprise ",
      "AGENT USERNAME": "SSESUB00601",
      "ADDRESS": "5°38'41.1'N 0°00'57.5'E",
      "Location": "Infront of fish market ",
      "GPS COORDINATES": "5°38'41.1'N 0°00'57.5'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 881,
      "AGENT BUSINESS NAME": "EVIVO EXPRESS",
      "AGENT USERNAME": "EEX60501",
      "ADDRESS": "OBUASI",
      "Location": "OPPOSITE AGA HOSPITAL JUNCTION",
      "GPS COORDINATES": "6°39'39.2'N 1°37'06.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 882,
      "AGENT BUSINESS NAME": "Finbiz rudis enterprise ",
      "AGENT USERNAME": "FRE05001",
      "ADDRESS": "Unnumbered house at Tema comm 25",
      "Location": "Infront of devtracco courts ",
      "GPS COORDINATES": "5°44'01.6'N 0°02'19.5'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 883,
      "AGENT BUSINESS NAME": "MC zoe enterprise ",
      "AGENT USERNAME": "MZE 5001.00",
      "ADDRESS": "Unnumbered house at Tema community 25",
      "Location": "Behind Tema comm 25 mal",
      "GPS COORDINATES": "5°44'14.9'N 0°02'03.5'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 884,
      "AGENT BUSINESS NAME": "Pursuit faith Ventures ",
      "AGENT USERNAME": "PFV60501",
      "ADDRESS": "KAASE ",
      "Location": "NEAR THE PENTECOST CHURCH ",
      "GPS COORDINATES": "6°38'28.8'N1°36'29.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 885,
      "AGENT BUSINESS NAME": "FRANCIS DZREKE ENTERPRISE ",
      "AGENT USERNAME": "FDE60401",
      "ADDRESS": "SEWUA JUNCTION",
      "Location": "NEAR SEWUA JUNCTION",
      "GPS COORDINATES": "6°38'4.0'N1°34'12.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 886,
      "AGENT BUSINESS NAME": "J-KAPS VENTURES",
      "AGENT USERNAME": "JKVSUB70301",
      "ADDRESS": "TAKO TECHIMAN,BONO EAST REGION",
      "Location": "OPPOSITE FIRST ATLANTIC BANK, TAKO-TECHIMAN",
      "GPS COORDINATES": "7.595855-1.935772",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 887,
      "AGENT BUSINESS NAME": "Jesus only enterprise ",
      "AGENT USERNAME": "JOE61002",
      "ADDRESS": "AKOKOSPECS",
      "Location": "NEAR THE TAXI STATION",
      "GPS COORDINATES": "6°44'03.2'N1°39'23.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 888,
      "AGENT BUSINESS NAME": "Kirchofmens enterprise ",
      "AGENT USERNAME": "KEN61004",
      "ADDRESS": "OHWIM",
      "Location": "NEAR OHWIM BUS STOP",
      "GPS COORDINATES": "6°44'44.8'N1°40'17.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 889,
      "AGENT BUSINESS NAME": "SETH AMEYAW 21 ENTERPRISE",
      "AGENT USERNAME": "SAE70301",
      "ADDRESS": "TECHIMA MARKET, BONO EAST ",
      "Location": "NEAR LATEX FORM DEPOT, CENTRAL MARKETMARKET",
      "GPS COORDINATES": "7.584799,-1.939870",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 890,
      "AGENT BUSINESS NAME": "Joyce opoku afriyie ventures ",
      "AGENT USERNAME": "JOV60401",
      "ADDRESS": "Asuofua",
      "Location": "Opposite the hospital ",
      "GPS COORDINATES": "6°46'07.7'N1°41'03.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 891,
      "AGENT BUSINESS NAME": "Unifyfon enterprise ",
      "AGENT USERNAME": "UEN60401",
      "ADDRESS": "ASUOFUA ",
      "Location": "NEAR CEDAR CREST",
      "GPS COORDINATES": "6°46'37.1'N1°40'45.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 892,
      "AGENT BUSINESS NAME": "OBOTANTIM CO-OPERATIVE MUTAUL SUPPOT ",
      "AGENT USERNAME": "OCM79301",
      "ADDRESS": "TECHIMAN MARKET,BONO EAST ",
      "Location": "NEAR TOMATAOES MARKET ,BONO SA",
      "GPS COORDINATES": "7.583669,-1.941822",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 893,
      "AGENT BUSINESS NAME": "ANKO VINEYARD SUSU SERVICES",
      "AGENT USERNAME": "AVS70301",
      "ADDRESS": "TECHIMAN MARKET, INSIDE THE CENTRAL MARKET",
      "Location": "NEAR TECHIMAN NEAR THE MAYANKA ",
      "GPS COORDINATES": "7.583686,-1.9442077",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 894,
      "AGENT BUSINESS NAME": "OMAMA YEBOAH ENTERPRISE",
      "AGENT USERNAME": "OYE79391",
      "ADDRESS": "TECHIMAN MARKET BONO EAST",
      "Location": "BEHIND THE MAYANKA ",
      "GPS COORDINATES": "7.583603,-1.942125",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 895,
      "AGENT BUSINESS NAME": "ANITA AMPONSAH VENTURES",
      "AGENT USERNAME": "AAV70301",
      "ADDRESS": "TECHIMAN MARKET, BONO EAST REGION",
      "Location": "NEAR THE YAM MARKET",
      "GPS COORDINATES": "7.583056,-1.941361",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 896,
      "AGENT BUSINESS NAME": "Benk prak ENTERPRISE ",
      "AGENT USERNAME": "BPE7021",
      "ADDRESS": "K 12 kato",
      "Location": "OPPOSITE COP KATO ",
      "GPS COORDINATES": "7. 26' 1.7' N 2. 33' 43. 8 'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 897,
      "AGENT BUSINESS NAME": "KYERE PORTIA ENTERPRISE ",
      "AGENT USERNAME": "KPE7201",
      "ADDRESS": "SHOP K 5 KATO",
      "Location": "BEHIND COP KATO",
      "GPS COORDINATES": "7. 26' 01. 6' N 2.33' 44. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 898,
      "AGENT BUSINESS NAME": "DANIEL KYERE ENTERPRISE ",
      "AGENT USERNAME": "DKE70201",
      "ADDRESS": "Shop 12 Kato",
      "Location": "UNNUMBERED SHOP ",
      "GPS COORDINATES": "7. 26' 02.0 ' N 2. 33'45.6' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 899,
      "AGENT BUSINESS NAME": "BRAIN AND HITECH VENTURES",
      "AGENT USERNAME": "BHV50102",
      "ADDRESS": "HO, AFEDI STREET",
      "Location": "OPPOSITE CBG BANK",
      "GPS COORDINATES": "6.612577,0.463797",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 900,
      "AGENT BUSINESS NAME": "GODWIN ENTERPRISE",
      "AGENT USERNAME": "GEN50101",
      "ADDRESS": "HO, DOME JUNCTION",
      "Location": "CLOSE TO CITI PHARMACY",
      "GPS COORDINATES": "6.603367,0.468936",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 901,
      "AGENT BUSINESS NAME": "CARING SOULS ENTERPRISE ",
      "AGENT USERNAME": "CSE05101",
      "ADDRESS": "UNNUMBERED HOUSE AT AWOSHIE ONYINASE",
      "Location": "NEAR LANE 17 SPOT, ONYINASE, AWOSHIE",
      "GPS COORDINATES": "5.5829435,-0.2857099",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 902,
      "AGENT BUSINESS NAME": "AGUDEY ONE VENTURES ",
      "AGENT USERNAME": "AOVSUB30201",
      "ADDRESS": "CAPECOAST ABURA ",
      "Location": "Abura Market ",
      "GPS COORDINATES": "5°07'54.8'N1°16'32.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 903,
      "AGENT BUSINESS NAME": "Luxury matech",
      "AGENT USERNAME": "LUMSUB04801",
      "ADDRESS": "Unnumbered shop at labadi ",
      "Location": "Near Akrowa house",
      "GPS COORDINATES": "(5.5673889, -0.1496758)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 904,
      "AGENT BUSINESS NAME": "NUMBER ONE SALUTE VENTURES ",
      "AGENT USERNAME": "NUVSUB30202",
      "ADDRESS": "CAPECOAST STADIUM JUNCTION ",
      "Location": "STADIUM CAR WASH ",
      "GPS COORDINATES": "5°08'09.8'N1°16'41.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 905,
      "AGENT BUSINESS NAME": "NUMBER ONE SALUTE VENTURES ",
      "AGENT USERNAME": "NUVSUB30205",
      "ADDRESS": "CAPECOAST PEDU",
      "Location": "EMMY J   SPOT",
      "GPS COORDINATES": "5°07'42.4'N1°16'30.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 906,
      "AGENT BUSINESS NAME": "MASER PLUS VENTURES ",
      "AGENT USERNAME": "MPV02601",
      "ADDRESS": "UNNUMBERED HOUSE AT ABLEKUMA ABEASE",
      "Location": "NEAR ABEASE JUNCTION ",
      "GPS COORDINATES": "5.6299283,0.3123684",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 907,
      "AGENT BUSINESS NAME": "ZACK ONE VENTURES ",
      "AGENT USERNAME": "ZOV00501",
      "ADDRESS": "UNNUMBERED SHOP AT ABLEKUMA",
      "Location": "NEAR ABEASE TAXI RANK",
      "GPS COORDINATES": "5.6307984,-0.3129752",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 908,
      "AGENT BUSINESS NAME": "NANABA TRUST LINK",
      "AGENT USERNAME": "NTL02601",
      "ADDRESS": "UNNUMBERED SHOP AT ABLEKUMA TRAFFIC LIGHT ",
      "Location": "NEAR THE TRAFFIC LIGHTS ",
      "GPS COORDINATES": "5.6287271,0.3123821",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 909,
      "AGENT BUSINESS NAME": "EFUA SAM ENTERPRISE ",
      "AGENT USERNAME": "ESE30201",
      "ADDRESS": "APAM JUNCTION ",
      "Location": "APAM JUNCTION STATION ",
      "GPS COORDINATES": "5°20'16.1'N0°45'37.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 910,
      "AGENT BUSINESS NAME": "Ashton business services company ltd",
      "AGENT USERNAME": "ABS00401",
      "ADDRESS": "Unnumbered shop at parliament osu",
      "Location": "Inside Parliament House job 600",
      "GPS COORDINATES": "(5.5572150, -0.1895030)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 911,
      "AGENT BUSINESS NAME": "ASOPAH'S CAN DO ENTERPRISE ",
      "AGENT USERNAME": "ACD05101",
      "ADDRESS": "UNNUMBERED SHOP AT ABLEKUMA CURVE ",
      "Location": "NEAR BAYCARE PHARMACY",
      "GPS COORDINATES": "5.6273080,-0.3130711",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 912,
      "AGENT BUSINESS NAME": "CURVE ENGINEERING SERVICES ",
      "AGENT USERNAME": "CES02601",
      "ADDRESS": "UNNUMBERED SHOP AT ABLEKUMA ",
      "Location": "NEAR KFC ABLEKUMA ",
      "GPS COORDINATES": "5.6273290,-0.3133910",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 913,
      "AGENT BUSINESS NAME": "JASEK BUSINESS CONSULT ",
      "AGENT USERNAME": "JBC70201",
      "ADDRESS": "SHOP 12 BEREKUM",
      "Location": "OPPOSITE Fidelity bank ",
      "GPS COORDINATES": "7. 27' 00.1' N 2. 35' 02. 9' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 914,
      "AGENT BUSINESS NAME": "ELVIS ASAM VENTURES ",
      "AGENT USERNAME": "EAV70201",
      "ADDRESS": "Shop 12 BEREKUM",
      "Location": "OPPOSITE ABSA ",
      "GPS COORDINATES": "7.27' 01.2' 2. 35' 05. 9' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 915,
      "AGENT BUSINESS NAME": "REX WITH GOD VENTURES ",
      "AGENT USERNAME": "RWG70201",
      "ADDRESS": "D 23 BEREKUM",
      "Location": "OPPOSITE Baccsod ",
      "GPS COORDINATES": "7. 26'52. 0' N 2. 36' 23. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 916,
      "AGENT BUSINESS NAME": "COLLINS YEBOAH 45 VENTURES",
      "AGENT USERNAME": "YCV70201",
      "ADDRESS": "D 002 BEREKUM",
      "Location": "ADJACENT FIDELITY BEREKUM ",
      "GPS COORDINATES": "7. 27' 01. 2' N 2. 35' 03. 4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 917,
      "AGENT BUSINESS NAME": "CLEMAG FIRST CHOICE BUSINESS CENTRE ",
      "AGENT USERNAME": "CFC30201",
      "ADDRESS": "APAM JUNCTION ",
      "Location": "APAM  JUNCTION TAXI RANK",
      "GPS COORDINATES": "5°20'15.3'N0°45'38.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 918,
      "AGENT BUSINESS NAME": "AKESIWAA L'OR VENTURES ",
      "AGENT USERNAME": "ALV02601",
      "ADDRESS": "UNNUMBERED HOUSE AT ABLEKUMA MANHEAN ",
      "Location": "NEAR THE BLOCK FACTORY ",
      "GPS COORDINATES": "5.6344611,-0.3274191",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 919,
      "AGENT BUSINESS NAME": "LETICIA FREMAH ENTERPRISE ",
      "AGENT USERNAME": "LFE61201",
      "ADDRESS": "Magazine Zone 21",
      "Location": "Close to Garages Office",
      "GPS COORDINATES": "6°43'29.9'N 1°37'36.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 920,
      "AGENT BUSINESS NAME": "ROCKSON BOAT VENTURES ",
      "AGENT USERNAME": "RBV61001",
      "ADDRESS": "Tarkwa Magazine",
      "Location": "Close to Sandford Bridge",
      "GPS COORDINATES": "6°43'38.9'N 1°37'43.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 921,
      "AGENT BUSINESS NAME": "STARBOA DAKOSTA ENTERPRISE ",
      "AGENT USERNAME": "SDE70201",
      "ADDRESS": "Shop 4 BEREKUM",
      "Location": "OPPOSITE  SHALOM FM ",
      "GPS COORDINATES": "7.27'04. 3' N 2. 34' 52. 5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 922,
      "AGENT BUSINESS NAME": "MOVIC ENTERPRISE ",
      "AGENT USERNAME": "MCE02601",
      "ADDRESS": "UNNUMBERED HOUSE AT ABLEKUMA POINT 5",
      "Location": "NEAR POINT 5 JUNCTION",
      "GPS COORDINATES": "5.6337646,-0.3267071",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 923,
      "AGENT BUSINESS NAME": "IKE OWUNAA VENTURES ",
      "AGENT USERNAME": "IVE61201",
      "ADDRESS": "Tarkwa Magazine",
      "Location": "Close to Stanford Bridge",
      "GPS COORDINATES": "6°43'41.0'N 1°37'44.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 924,
      "AGENT BUSINESS NAME": "EUTHAN VENTURES ",
      "AGENT USERNAME": "EUV12301",
      "ADDRESS": "KORLE BU",
      "Location": "NEAR KORLE BU SURGICAL",
      "GPS COORDINATES": "5.5372625, -0.2280781",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 925,
      "AGENT BUSINESS NAME": "KL UNITY VENTURES ",
      "AGENT USERNAME": "KUV70201",
      "ADDRESS": "D 67 BEREKUM",
      "Location": "OPPOSITE MARKET ",
      "GPS COORDINATES": "7. 27' 06. 1' N 2. 34' 54.4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 926,
      "AGENT BUSINESS NAME": "EMMAJEF",
      "AGENT USERNAME": "EMMSUB70201",
      "ADDRESS": "D 45 BEREKUM",
      "Location": "Behind Fidelity bank ",
      "GPS COORDINATES": "7. 27' 00. 7' N 2. 35' 03. 4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 927,
      "AGENT BUSINESS NAME": "DENNIS KOBBIES VENTURES ",
      "AGENT USERNAME": "DKV70201",
      "ADDRESS": "40 BEREKUM",
      "Location": "Behind Nkoraman rural bank ",
      "GPS COORDINATES": "7. 27' 06. 0' N 2. 35.04. 0' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 928,
      "AGENT BUSINESS NAME": "ABAY ENTERPRISE ",
      "AGENT USERNAME": "ABE60501",
      "ADDRESS": "AHODWO",
      "Location": "NEAR MELCOM",
      "GPS COORDINATES": "6°39'41.1'N1°37'05.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 929,
      "AGENT BUSINESS NAME": "GYAMERAAH'S BUSINESS CENTRE ",
      "AGENT USERNAME": "GBC04901",
      "ADDRESS": "NUNGUA LEISURE",
      "Location": "NEAR ST. AUGUSTINE ANGLICAN CHURCH ",
      "GPS COORDINATES": "5'36'11.6'N 0'0.5'09.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 930,
      "AGENT BUSINESS NAME": "BENDARK 360 VENTURES",
      "AGENT USERNAME": "BDV70201",
      "ADDRESS": "D 66",
      "Location": "OPPOSITE MOSQUE ",
      "GPS COORDINATES": "7. 27' 08. 7' N 2. 34' 59. 9'",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 931,
      "AGENT BUSINESS NAME": "MOBISCO DESIGN ",
      "AGENT USERNAME": "MDESUB02701",
      "ADDRESS": "NUNGUA BOADE ROAD ",
      "Location": "OPPOSITE KANTAMANTO BUS STOP",
      "GPS COORDINATES": "5.608634,-0.078328",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 932,
      "AGENT BUSINESS NAME": "ROLAND N. PEREZ VENTURES ",
      "AGENT USERNAME": "RNR50101",
      "ADDRESS": "HO, CK ROAD",
      "Location": "NEAR LORDS HOTEL",
      "GPS COORDINATES": "6.619474,0.475412",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 933,
      "AGENT BUSINESS NAME": "BRIGHT GOD PRESTIGE ",
      "AGENT USERNAME": "BGPSUB70201",
      "ADDRESS": "Shop 34 BEREKUM",
      "Location": "OPPOSITE ZONGO CLINIC ",
      "GPS COORDINATES": "7. 27' 13. 6' N 2. 34' 55. 7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 934,
      "AGENT BUSINESS NAME": "OKYEADEA ENTERPRISE ",
      "AGENT USERNAME": "OKE70201",
      "ADDRESS": "4 BEREKUM",
      "Location": "OPPOSITE market",
      "GPS COORDINATES": "7. 27' 08. 4' N 2. 34' 57. 5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 935,
      "AGENT BUSINESS NAME": "SETH BAWA VENTURES",
      "AGENT USERNAME": "SBV61001",
      "ADDRESS": "Breman Nkwantwema ",
      "Location": "Near King Solomon International School",
      "GPS COORDINATES": "6°44'00.1'N 1°37'28.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 936,
      "AGENT BUSINESS NAME": "POGAS TRADING ENTERPRISE",
      "AGENT USERNAME": "PTE 61201.00",
      "ADDRESS": "Kwesi Oppong road",
      "Location": "Abawa Ruth Junction",
      "GPS COORDINATES": "6°43'51.9'N 1°37'35.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 937,
      "AGENT BUSINESS NAME": "BIG STEVOO ENTERPRISE ",
      "AGENT USERNAME": "BSE70201",
      "ADDRESS": "Shop 34 BEREKUM",
      "Location": "OPPOSITE GCB BEREKUM ",
      "GPS COORDINATES": "7. 27' 03. 5' N 2. 34' 59. 5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 938,
      "AGENT BUSINESS NAME": "PRINCEADARK VENTURES",
      "AGENT USERNAME": "PRA61201",
      "ADDRESS": "Close to New road Junction",
      "Location": "Near Fooso Junction",
      "GPS COORDINATES": "6°43'37.1'N 1°37'18.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 939,
      "AGENT BUSINESS NAME": "EFF-ESS COMPANY LIMITED ",
      "AGENT USERNAME": "EPL40601",
      "ADDRESS": "APOLLO",
      "Location": "OPPOSITE SEL FILLING STATION",
      "GPS COORDINATES": "4.909699,-1.794131",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 940,
      "AGENT BUSINESS NAME": "NEW TOP COMMUNICATION CENTER",
      "AGENT USERNAME": "NCA70301",
      "ADDRESS": "KINTAMPO, BONO EAST ",
      "Location": "NEAR NATIONAL INVESTMENT BANK",
      "GPS COORDINATES": "8'03'14.1'N.1'43'36.2'W/ 8.05390,-1.7267260",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 941,
      "AGENT BUSINESS NAME": "GIDCOM ENTERPRISE ",
      "AGENT USERNAME": "GIDSUB40602",
      "ADDRESS": "APREMDO ",
      "Location": "NEAR LOM NAVA CHOP BAR ",
      "GPS COORDINATES": "4.9230090,-1.7845390",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 942,
      "AGENT BUSINESS NAME": "Memos Awurade Nsem ENTERPRISE ",
      "AGENT USERNAME": "MAN70201",
      "ADDRESS": "D 78 BEREKUM",
      "Location": "OPPOSITE main round about",
      "GPS COORDINATES": "7. 27' 01.0' N 2. 35' 01. 5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 943,
      "AGENT BUSINESS NAME": "BABSON PRINTING PRESS ",
      "AGENT USERNAME": "BPP70201",
      "ADDRESS": "D 45 BEREKUM",
      "Location": "OPPOSITE HEy market",
      "GPS COORDINATES": "7. 27' 00. 5 ' N 2. 34' 60. 0' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 944,
      "AGENT BUSINESS NAME": "BIBLICAL 1 VENTURES",
      "AGENT USERNAME": "BIV60501",
      "ADDRESS": "ATASEMANSO",
      "Location": "OPPOSITE OHENEBA SPOT",
      "GPS COORDINATES": "6°39'01.6'N1°38'02.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 945,
      "AGENT BUSINESS NAME": "ENOP TRADING ENTERPRISE ",
      "AGENT USERNAME": "ETE61001",
      "ADDRESS": "EJURA",
      "Location": "INFRONT OF THE MARKET ",
      "GPS COORDINATES": "7°22'40.0'N1°21'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 946,
      "AGENT BUSINESS NAME": "AGGREY B-HONEY BUSINESS ENTERPRISE ",
      "AGENT USERNAME": "ABE70201",
      "ADDRESS": "7 BEREKUM",
      "Location": "BEREKUM OPPOSITE WORD MARK ",
      "GPS COORDINATES": "7. 26' 56. 7' N 2 . 34' 49. 4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 947,
      "AGENT BUSINESS NAME": "IRENCA ENTERPRISE ",
      "AGENT USERNAME": "IEA60801",
      "ADDRESS": "PATASI ",
      "Location": "CLOSE TO THE POLICE DEPOT",
      "GPS COORDINATES": "6°41'02.4'N 1°38'45.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 948,
      "AGENT BUSINESS NAME": "SELISELA",
      "AGENT USERNAME": "SEE60801",
      "ADDRESS": "KWADASO  ESTATE ",
      "Location": "CLOSE TO ESTATE JUNCTION ",
      "GPS COORDINATES": "6°41'23.7'N 1°38'48.7W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 949,
      "AGENT BUSINESS NAME": "TANORAAH COMPLEX LIMITED ",
      "AGENT USERNAME": "TCO60801",
      "ADDRESS": "PATASI",
      "Location": "NEAR  THE SHELL FILLING  STATION ",
      "GPS COORDINATES": "6°41'20.7'N 1°38'41.1W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 950,
      "AGENT BUSINESS NAME": "SENYAH POKU ENTERPRISE ",
      "AGENT USERNAME": "SPE60801",
      "ADDRESS": "PATASI",
      "Location": "OPPOSITE EFFIE FUFU",
      "GPS COORDINATES": "6°4100.0'N 1°38'38.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 951,
      "AGENT BUSINESS NAME": "LINDY BEST ENTERPRISE ",
      "AGENT USERNAME": "LBE60801",
      "ADDRESS": "PATASI",
      "Location": "BEHIND  KSTS",
      "GPS COORDINATES": "6°40'55.4'N 1 °38'34.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 952,
      "AGENT BUSINESS NAME": "SAMILLA POINT ENTERPRISE ",
      "AGENT USERNAME": "SPE70201",
      "ADDRESS": "UNNUMBERED SHOP AT DUAYAWNKWANTA ",
      "Location": "CLOSE TO ST. JOHN OF GOD HOSPITAL ",
      "GPS COORDINATES": "7.10'23.8''N2.06'02.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 953,
      "AGENT BUSINESS NAME": "NTE03601",
      "AGENT USERNAME": "NICKTEY ENTERPRISE",
      "ADDRESS": "DANSOMAN SAHARA ",
      "Location": "NEAR HIS MAJESTY SENIOR HIGH SCHOOL",
      "GPS COORDINATES": "5.5497125, -0.2657344",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 954,
      "AGENT BUSINESS NAME": "FRANSCODE ONE ENTERPRISE ",
      "AGENT USERNAME": "FRO60801",
      "ADDRESS": "PATASI",
      "Location": "OPPOSITE KSTS",
      "GPS COORDINATES": "6°40'50.5'N 1°38'38.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 955,
      "AGENT BUSINESS NAME": "GREAT JAMARI ENTERPRISE",
      "AGENT USERNAME": "GJE70301",
      "ADDRESS": "KINTAMPO, BONO EAST",
      "Location": "NEAR KINTAMPO MAIN TRAFIC LIGHT",
      "GPS COORDINATES": "8.054083,-1.726709",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 956,
      "AGENT BUSINESS NAME": "MATFENNEL VENTURES ",
      "AGENT USERNAME": "MAT04901",
      "ADDRESS": "KLAGON",
      "Location": "OPPOSITE KLAGON POLICE STATION ",
      "GPS COORDINATES": "5.660938, -0.051219",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 957,
      "AGENT BUSINESS NAME": "LENK-PENYA ENTERPRISE ",
      "AGENT USERNAME": "LPE00701",
      "ADDRESS": "TIMBER MARKET ",
      "Location": "NEAR TIMBER MARKET TOTAL FILLING STATION ",
      "GPS COORDINATES": "5.547025,-0.217417",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 958,
      "AGENT BUSINESS NAME": "AMINGOYAK ENTERPRISE ",
      "AGENT USERNAME": "AME03801",
      "ADDRESS": "NII BOI TOWN",
      "Location": "TRY GAS FILLING STATION ",
      "GPS COORDINATES": "5.618236,-0.250744",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 959,
      "AGENT BUSINESS NAME": "DAVIDSHIE ENTERPRISE ",
      "AGENT USERNAME": "DAESUB02601",
      "ADDRESS": "HIGH TENSION",
      "Location": "OBAA FOOD VILLAGE ",
      "GPS COORDINATES": "5.614965,-0.250116",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 960,
      "AGENT BUSINESS NAME": "FESUCO 11 ENTERPRISE",
      "AGENT USERNAME": "E1E00701",
      "ADDRESS": "TIMBER MARKET ",
      "Location": "NEAR TIMBER MARKET TOTAL FILLING STATION ",
      "GPS COORDINATES": "5.5472550, -0.2184340",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 961,
      "AGENT BUSINESS NAME": "EMMANUEL HAND OF GOD ENT.",
      "AGENT USERNAME": "EHG02601",
      "ADDRESS": "TABORA JUNCTION ",
      "Location": "PRIMA ACADEMY ",
      "GPS COORDINATES": "5.618813,-0.263207",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 962,
      "AGENT BUSINESS NAME": "Texmy Ghana limited ",
      "AGENT USERNAME": "TGL02901",
      "ADDRESS": "Unnumbered shop at airport ",
      "Location": "Inside ssnit emporium ",
      "GPS COORDINATES": "(5.6038429, -0.1775580)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 963,
      "AGENT BUSINESS NAME": "AMBITIOUS VENTURES ",
      "AGENT USERNAME": "AMV70101",
      "ADDRESS": "UNNUMBERED SHOP AT SANKORE",
      "Location": "CLOSE TO SANKORE MAIN STATION ",
      "GPS COORDINATES": "6.30'03.1'N 2.29'58.3W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 964,
      "AGENT BUSINESS NAME": "ESKEL ENTERPRISE ",
      "AGENT USERNAME": "ENTSUB04802",
      "ADDRESS": "Unnumbered shop at La",
      "Location": "Near Multivet Ghana ltd",
      "GPS COORDINATES": "(5.5556875, -0.1678125)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 965,
      "AGENT BUSINESS NAME": "PLUS DATE AND TIME VENTURES ",
      "AGENT USERNAME": "PDT40101",
      "ADDRESS": "HOUSE NUMBER 13/5 LIBERATION ROAD,TAKORADI",
      "Location": "OPPOSITE ZENITH BANK",
      "GPS COORDINATES": "4° 53' 54.8491'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 966,
      "AGENT BUSINESS NAME": "SHAQMAN BUSINESS HUB",
      "AGENT USERNAME": "SBH40101",
      "ADDRESS": "HOUSE NUMBER 5,LIBERATION ROAD,TAKORADI",
      "Location": "OPPOSITE CARLOS SUPERMARKET",
      "GPS COORDINATES": "4° 53' 54.8491 'N",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 967,
      "AGENT BUSINESS NAME": "GOOD OUTPUT ENTERPRISE ",
      "AGENT USERNAME": "GOE40101",
      "ADDRESS": "A SHOP AT ESIKAFOABENTEM NO.2,TAKORADI",
      "Location": "CLOSE TO GPRTU MARKET CIRCLE  MAIN OFFICE",
      "GPS COORDINATES": "4° 53' 54.8491 ' N, 1° 45' 28.5916' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 968,
      "AGENT BUSINESS NAME": "SETH SA 65 ENTERPRISE",
      "AGENT USERNAME": "SSE61201",
      "ADDRESS": "Nkwantwema",
      "Location": "Near Fooso Junction off the Kwesi Oppong road",
      "GPS COORDINATES": "6°44'00.1'N 1°37'28.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 969,
      "AGENT BUSINESS NAME": "ACHEETO VENTURES ",
      "AGENT USERNAME": "AVE40501",
      "ADDRESS": "Unnumbered shop at Prestea ",
      "Location": "Near the Prestea Chips compound ",
      "GPS COORDINATES": "5.26’35.9'N  2.08’17.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 970,
      "AGENT BUSINESS NAME": "MISS TABITHA'S ENTERPRISE ",
      "AGENT USERNAME": "MTE40101",
      "ADDRESS": "UNNUMBERED SHOP AT TAKORADI ",
      "Location": "CLOSE TO DAAVI AMA CHOP BAR",
      "GPS COORDINATES": "4° 53' 54.8491' N, 1° 45' 28.5916' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 971,
      "AGENT BUSINESS NAME": "ANTHAFF ORBIT TECHNOLOGY ",
      "AGENT USERNAME": "AOTSUB40101",
      "ADDRESS": "HOUSE NUMBER 54/5 TAKORADI 19 JUSTMOH AVE",
      "Location": "CLOSE TO DAAVI AMA SHOP BAR",
      "GPS COORDINATES": "4° 53' 54.8491' N, 1° 45' 28. 5916' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 972,
      "AGENT BUSINESS NAME": "NOBLE DAY VISION ENTERPRISE ",
      "AGENT USERNAME": "NDV80101",
      "ADDRESS": "NEAR FIRST BABTICE CHURCH",
      "Location": "NEAR FIRST BABTICE CHURCH",
      "GPS COORDINATES": "10.5275740, -0.3725170",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 973,
      "AGENT BUSINESS NAME": "Immanueland Enterprise ",
      "AGENT USERNAME": "IEN60702",
      "ADDRESS": "BUOKROM ",
      "Location": "NEAR THE CEMETERY ",
      "GPS COORDINATES": "6°43'15.8'N1°35'41.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 974,
      "AGENT BUSINESS NAME": "JAJOY ENTERPRISE ",
      "AGENT USERNAME": "JAJ40101",
      "ADDRESS": "HOUSE NUMBER TS5 ,MELCOM ROAD TAKORADI",
      "Location": "NEAR THE POST OFFICE",
      "GPS COORDINATES": "4° 53' 54.8491' N, 1° 45' 28.5916' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 975,
      "AGENT BUSINESS NAME": "PERFECT COMPUTER CENTRE ",
      "AGENT USERNAME": "PCC70201",
      "ADDRESS": "D Nyansa ye BEREKUM ",
      "Location": "ADJACENT GRA ",
      "GPS COORDINATES": "7. 27' 15.9' N 2. 35' 19.1' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 976,
      "AGENT BUSINESS NAME": "BENNOCH INVESTMENT",
      "AGENT USERNAME": "BINSUB40101",
      "ADDRESS": "ESSIKAFOAMBATEM NO. 1 MARKET CIRCLE, TAKORADI",
      "Location": "ADJACENT WOMENS WORLD BANK",
      "GPS COORDINATES": "4° 53' 54.8491' N, 1° 45'28' 28.5916' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 977,
      "AGENT BUSINESS NAME": "CED E-STORES ",
      "AGENT USERNAME": "CES03601",
      "ADDRESS": "SAHARA",
      "Location": "PREMISES OF TOTAL FILLING STATION ",
      "GPS COORDINATES": "5.5496375, -0.2649219",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 978,
      "AGENT BUSINESS NAME": "WASTAGAN ENTERPRISE",
      "AGENT USERNAME": "WEN02101",
      "ADDRESS": "ACCRA NEW TOWN",
      "Location": "55 JUNCTION",
      "GPS COORDINATES": "5.590187,0.207711",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 979,
      "AGENT BUSINESS NAME": "BENNOCH INVESTMENT ",
      "AGENT USERNAME": "BINSUB40101",
      "ADDRESS": "15/7 ESSIKAFOAMBATEM NO. 1 MARKET CIRCLE, TAKORADI",
      "Location": "ADJACENT FORMAL WOMENS WORLD BANK",
      "GPS COORDINATES": "4° 53' 54.8491 ' N, 1° 45' 28.5916' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 980,
      "AGENT BUSINESS NAME": "Guzzy brothers ",
      "AGENT USERNAME": "GBE80101",
      "ADDRESS": "H/NO H 125 SABONJIDA",
      "Location": "NEAR TO KALANDER SPORT STADIUM",
      "GPS COORDINATES": "9.398550-0.845297",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 981,
      "AGENT BUSINESS NAME": "AKU CLEAN ENTERPRISE ",
      "AGENT USERNAME": "ACE61201",
      "ADDRESS": "Breman",
      "Location": "Close to OKESS 2nd Gate",
      "GPS COORDINATES": "6°44'43.4'N 1°37'15.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 982,
      "AGENT BUSINESS NAME": "GOD BLESS BROTHER PATRICK",
      "AGENT USERNAME": "GBB61201",
      "ADDRESS": "Breman",
      "Location": "300 meters away from Brukutu junction",
      "GPS COORDINATES": "6°44'41.0'N 1°38'15.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 983,
      "AGENT BUSINESS NAME": "AHAD PRESTIGE ENTERPRISE ",
      "AGENT USERNAME": "AHE70201",
      "ADDRESS": "D 12 BEREKUM",
      "Location": "Near BEREKUM Presc",
      "GPS COORDINATES": "7. 27' 23. 2' N 2. 34' 56. 4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 984,
      "AGENT BUSINESS NAME": "AHAD PRESTIGE ENTERPRISE ",
      "AGENT USERNAME": "AHE70201",
      "ADDRESS": "D 12 BEREKUM",
      "Location": "NEAR BEREKUM PRESEC",
      "GPS COORDINATES": "7.27' 23. 2' N 2.34' 56'. 4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 985,
      "AGENT BUSINESS NAME": "Seidu fays enterprise ",
      "AGENT USERNAME": "SFASUB80101",
      "ADDRESS": "No block f nyohini",
      "Location": "Near diamond fm",
      "GPS COORDINATES": "9.401152-0.848834",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 986,
      "AGENT BUSINESS NAME": "KUBIMSI ENTERPRISE ",
      "AGENT USERNAME": "KUE90101",
      "ADDRESS": "A 16 GAMBAGA",
      "Location": "NEAR GAMBAGA MAIN STATION ",
      "GPS COORDINATES": "10.5330140, -0.4378030",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 987,
      "AGENT BUSINESS NAME": "Ayinisoma enterprise ",
      "AGENT USERNAME": "AYI02001",
      "ADDRESS": "Unnumbered shop at 37",
      "Location": "Inside 37 station",
      "GPS COORDINATES": "(5.5888690, -0.1794580)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 988,
      "AGENT BUSINESS NAME": "CHAFAL COMMUNICATION VENTURES",
      "AGENT USERNAME": "CCVSUB03103",
      "ADDRESS": "KOTOBABI",
      "Location": "OPPOSITE TOBINCO",
      "GPS COORDINATES": "5.594691,0.207441",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 989,
      "AGENT BUSINESS NAME": "NASCENT PHOTOS ",
      "AGENT USERNAME": "NPP03101",
      "ADDRESS": "PIG FARM",
      "Location": "OPPOSITE PIG FARM ",
      "GPS COORDINATES": "5.598124,0.98303",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 990,
      "AGENT BUSINESS NAME": "NELMANDELA ENTERPRISE ",
      "AGENT USERNAME": "NENSUB03603",
      "ADDRESS": "DANSOMAN",
      "Location": "PREMISES OF FIDELITY BANK DANSOMAN ",
      "GPS COORDINATES": "5.5499875, -0.2647031",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 991,
      "AGENT BUSINESS NAME": "JERAEL ENTERPRISE",
      "AGENT USERNAME": "JEASUB03101",
      "ADDRESS": "CIRCLE",
      "Location": "CLOSE TO BEN BIG",
      "GPS COORDINATES": "5.572893,0.215937",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 992,
      "AGENT BUSINESS NAME": "RIDIAN DIGITAL PRESS",
      "AGENT USERNAME": "RDP02601",
      "ADDRESS": "ABLEMKPE",
      "Location": "CLOSE MAWARKO RESTAURANT",
      "GPS COORDINATES": "5.611591,0.224879",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 993,
      "AGENT BUSINESS NAME": "KWAO ENNISON VENTURES ",
      "AGENT USERNAME": "KEVSUB02701",
      "ADDRESS": "MARITIME ACADEMY ROAD NUNGUA ",
      "Location": "OPPOSITE THE CHURCH OF JESUS CHRIST OF LATTER-DAY SAINTS",
      "GPS COORDINATES": "5'36'20.4'N 0'0.4'33.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 994,
      "AGENT BUSINESS NAME": "NELMANDELA ENT",
      "AGENT USERNAME": "NENSUB03603",
      "ADDRESS": "DANSOMAN SAHARA",
      "Location": "PREMISES OF FIDELITY BANK",
      "GPS COORDINATES": "5.5499875, -0.2647031",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 995,
      "AGENT BUSINESS NAME": "20TH CENTURY  PLUS",
      "AGENT USERNAME": "CEP03601",
      "ADDRESS": "DANSOMAN",
      "Location": "NEAR BEECHAM BUS STOP",
      "GPS COORDINATES": "5.5527625, -0.2647656",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 996,
      "AGENT BUSINESS NAME": "Blessed-Boat Enterprise ",
      "AGENT USERNAME": "BBE40501",
      "ADDRESS": "Unnumbered shop at Kokuase, Bogoso",
      "Location": "Near the Pentecost church",
      "GPS COORDINATES": "5.34’12.8N  2.00’05.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 997,
      "AGENT BUSINESS NAME": "KWAO ENNISON VENTURES ",
      "AGENT USERNAME": "KEVSUB02702",
      "ADDRESS": "NUNGUA ",
      "Location": "CLOSE TO MILANO PUB",
      "GPS COORDINATES": "5'36'14.5'N 0'04'30.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 998,
      "AGENT BUSINESS NAME": "Meisuedison Enterprise ",
      "AGENT USERNAME": "MEISUB40501",
      "ADDRESS": "Unnumbered shop at Bogoso",
      "Location": "Near Stenzy Mattress and More",
      "GPS COORDINATES": "5.32’18.3'N  2.01’29.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 999,
      "AGENT BUSINESS NAME": "KARIM CO. NETWORK ",
      "AGENT USERNAME": "KCO60301",
      "ADDRESS": "EJURA",
      "Location": "OPPOSITE STAR OIL",
      "GPS COORDINATES": "7°22'40.0'N1°21'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1000,
      "AGENT BUSINESS NAME": "THE BREAD COMMUNICATION ",
      "AGENT USERNAME": "DBC02401",
      "ADDRESS": "KANESHIE",
      "Location": "NEAR KANESHIE VIP STATION ",
      "GPS COORDINATES": "5.5645875, -0.2365156",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1001,
      "AGENT BUSINESS NAME": "THE BREAD COMMUNICATION",
      "AGENT USERNAME": "DBC02401",
      "ADDRESS": "KANESHIE",
      "Location": "NEAR KANESHIE VIP STATION ",
      "GPS COORDINATES": "5.5645875, -0.2365156",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1002,
      "AGENT BUSINESS NAME": "GRADAN TEK ENTERPRISE ",
      "AGENT USERNAME": "GTE60301",
      "ADDRESS": "JAMASI",
      "Location": "WITHIN JAMASI  STATION ",
      "GPS COORDINATES": "6°58'23.4'N1°28'30.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1003,
      "AGENT BUSINESS NAME": "Sandysam B Enterprise ",
      "AGENT USERNAME": "SBESUB61001",
      "ADDRESS": "AGONA",
      "Location": "OPPOSITE  NPP OFFICE",
      "GPS COORDINATES": "6°42'200.6'N1°37'13.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1004,
      "AGENT BUSINESS NAME": "SANDYSAM B ENTERPRISE ",
      "AGENT USERNAME": "SB3SUB61002",
      "ADDRESS": "JAMASI",
      "Location": "ADJCENT SEKYERE RURAL  BANK",
      "GPS COORDINATES": "6°58'33.5'N1°28'28.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1005,
      "AGENT BUSINESS NAME": "ALLAH OVER EVERYTHING ENTERPRISE ",
      "AGENT USERNAME": "ALE61001",
      "ADDRESS": "MAGAZINE ",
      "Location": "BEHIND OBAAMA HOUSE",
      "GPS COORDINATES": "6°43'06.5'N1°37'42.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1006,
      "AGENT BUSINESS NAME": "ADM DAMBALI VENTURES ",
      "AGENT USERNAME": "ADM61001",
      "ADDRESS": "Tafo Zongo",
      "Location": "Within Four Junction ",
      "GPS COORDINATES": "6°43'39.2'NQ°36'05.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1007,
      "AGENT BUSINESS NAME": "SKY-HYPE CONCEPTS",
      "AGENT USERNAME": "SKY61001",
      "ADDRESS": "TAFO",
      "Location": "ADJACENT TAFO MARKET",
      "GPS COORDINATES": "6°43'39.2'N1°36'05.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1008,
      "AGENT BUSINESS NAME": "BAAH RICHARD  ENTERPRISE ",
      "AGENT USERNAME": "BRE 61001.00",
      "ADDRESS": "PANKRONO",
      "Location": "Near Kodua Junction ",
      "GPS COORDINATES": "6°43'39.2'N1°36'05.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1009,
      "AGENT BUSINESS NAME": "Ada foah BRC",
      "AGENT USERNAME": "AFB00101",
      "ADDRESS": "Unnumbered house at big Ada ",
      "Location": "Near Ada foah hospital ",
      "GPS COORDINATES": "5°51'15.8'N 0°36'08.0'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1010,
      "AGENT BUSINESS NAME": "Sendmal ",
      "AGENT USERNAME": "SVE03301",
      "ADDRESS": "Unnumbered house at Tema comm 1",
      "Location": "Near Anglican school",
      "GPS COORDINATES": "5°38'29.7'N 0°00'07.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1011,
      "AGENT BUSINESS NAME": "Christian journey ",
      "AGENT USERNAME": "CJESUB05001",
      "ADDRESS": "Unnumbered house at afienya ",
      "Location": "Infront of afienya market ",
      "GPS COORDINATES": "5°48'01.8'N 0°00'20.7'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1012,
      "AGENT BUSINESS NAME": "HImichel enterprise ",
      "AGENT USERNAME": "HMV03301",
      "ADDRESS": "Unnumbered house at Kpone kokompe ",
      "Location": "Near kokompe mechanic ",
      "GPS COORDINATES": "5°41'56.4'N 0°02'03.9'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1013,
      "AGENT BUSINESS NAME": "Tedusa ",
      "AGENT USERNAME": "TEVSUB05001",
      "ADDRESS": "Unnumbered house at old ningo ",
      "Location": "Near chiefs palace ",
      "GPS COORDINATES": "5°44'08.0'N 0°09'31.8'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1014,
      "AGENT BUSINESS NAME": "Teye kojo enterprise ",
      "AGENT USERNAME": "TKE02901",
      "ADDRESS": "Unnumbered shop at 37",
      "Location": "Inside 37 station",
      "GPS COORDINATES": "(5.5889125, -0.1800156)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1015,
      "AGENT BUSINESS NAME": "Barimah rock of victory enterprise ",
      "AGENT USERNAME": "BRV02901",
      "ADDRESS": "Unnumbered shop at 37",
      "Location": "Inside 37 station",
      "GPS COORDINATES": "(5.5884375, -0.1803281)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1016,
      "AGENT BUSINESS NAME": "OAKS G VENTURES",
      "AGENT USERNAME": "OGV70301",
      "ADDRESS": "KINTAMPO,BONO EAST REGION",
      "Location": "NEAR OLD VIP BUS STATION,KINTAMPO",
      "GPS COORDINATES": "8.054393,-1.730691",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1017,
      "AGENT BUSINESS NAME": "OSS VENTURES",
      "AGENT USERNAME": "OVE70301",
      "ADDRESS": "KINTAMPO,BONO EAST REGION",
      "Location": "NEAR STC YARD/BUS STATION KINTAMPO",
      "GPS COORDINATES": "8.051850, -1.727360",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1018,
      "AGENT BUSINESS NAME": "Richnova ventures ",
      "AGENT USERNAME": "RICV00401",
      "ADDRESS": "Unnumbered shop at osu ",
      "Location": "Near allied filling station ",
      "GPS COORDINATES": "(5.5661125, -0.1821406)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1019,
      "AGENT BUSINESS NAME": "SAM B CONSTRUCTION ",
      "AGENT USERNAME": "SBC00401",
      "ADDRESS": "Unnumbered shop at osu ",
      "Location": "Near Salvation Army office ",
      "GPS COORDINATES": "(5.5661875, -0.1844531)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1020,
      "AGENT BUSINESS NAME": "JALEM ENTERPRISE ",
      "AGENT USERNAME": "JEN03801",
      "ADDRESS": "ABEKA FREE PIPE",
      "Location": "GHANA TELECOM UNIVERSITY ",
      "GPS COORDINATES": "5.600590,-0.236887",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1021,
      "AGENT BUSINESS NAME": "PALACE HIRE PURCHASE ",
      "AGENT USERNAME": "PHP03801",
      "ADDRESS": "ABEKA ",
      "Location": "ABEKA MARKET ",
      "GPS COORDINATES": "5.598974,-0.240610",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1022,
      "AGENT BUSINESS NAME": "DEW OF PENIEL ",
      "AGENT USERNAME": "DEP03801",
      "ADDRESS": "ABEKA",
      "Location": "GOIL FILLING STATION ",
      "GPS COORDINATES": "5.603808,-0.240491",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1023,
      "AGENT BUSINESS NAME": "Abotare 2018 enterprise",
      "AGENT USERNAME": "A2E60401",
      "ADDRESS": "ABREPO",
      "Location": "NEAR GOIL FILLING STATION",
      "GPS COORDINATES": "6°43'29.5'N1°39'22.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1024,
      "AGENT BUSINESS NAME": "Anofred ventures ",
      "AGENT USERNAME": "ANV60401",
      "ADDRESS": "BOHYEN",
      "Location": "NEAR THR BOHYEN STATION",
      "GPS COORDINATES": "6°43'09.7'N1°38'53.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1025,
      "AGENT BUSINESS NAME": "Sarpong boateng company limited ",
      "AGENT USERNAME": "SBC60401",
      "ADDRESS": "BANTAMA",
      "Location": "NEAR SHELL FILLING STATION ",
      "GPS COORDINATES": "6°42'25.9'N1°38'15.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1026,
      "AGENT BUSINESS NAME": "SOA90101",
      "AGENT USERNAME": "SOAVOKS ENTERPRISE",
      "ADDRESS": "UNNUMBERED STORE PELUNGU MARKET NANGODI UE/R",
      "Location": "PELUNGU MARKET",
      "GPS COORDINATES": "10°47'49.2'N 0°41'45.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1027,
      "AGENT BUSINESS NAME": "MARK 9:9 JESUS IS ALIVE EBELIN, ENTERPRISE",
      "AGENT USERNAME": "MJA90101",
      "ADDRESS": "UNNUMBERED CONTAINER PELUNGU NANGODI UE/R",
      "Location": "NEAR PELUNGU POLICE STATION",
      "GPS COORDINATES": "10°47'52.7'N 0°41'45.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1028,
      "AGENT BUSINESS NAME": "PELUNGU AMEN ENTERPRISE",
      "AGENT USERNAME": "PAE90101",
      "ADDRESS": "UN-0516-6701",
      "Location": "PELUNGU BOLGA STATION",
      "GPS COORDINATES": "10°47'51.0'N 0°41'51.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1029,
      "AGENT BUSINESS NAME": "HSONPHILL ENTERPRISE ",
      "AGENT USERNAME": "HENSUB30202",
      "ADDRESS": "MANKESSIM ",
      "Location": "MANKESSIM MELCOM ",
      "GPS COORDINATES": "5°15'55.0'N1°01'11.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1030,
      "AGENT BUSINESS NAME": "Agyaatwima enterprise ",
      "AGENT USERNAME": "AEN03201",
      "ADDRESS": "BANTAMA",
      "Location": "OPPOSITE BANTAMA NDC OFFICE",
      "GPS COORDINATES": "6°42'16.7'N1°38'12.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1031,
      "AGENT BUSINESS NAME": "DDD VENTURES",
      "AGENT USERNAME": "DVE90101",
      "ADDRESS": "UNNUMBERED STORE KONGO",
      "Location": "NEAR KONGO CHIEF PALACE",
      "GPS COORDINATES": "10°50'18.2'N 0°42'15.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1032,
      "AGENT BUSINESS NAME": "HSONPHILL ENTERPRISE ",
      "AGENT USERNAME": "HENSUB30203",
      "ADDRESS": "MANKESSIM ",
      "Location": "MANKESSIM - CAPECOAST  STATION ",
      "GPS COORDINATES": "5°15'55.9'N1°01'10.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1033,
      "AGENT BUSINESS NAME": "AGYAATWIMA ENTERPRISE ",
      "AGENT USERNAME": "AEN03201",
      "ADDRESS": "BANTAMA",
      "Location": "OPPOSITE BANTAMA NDC OFFICE ",
      "GPS COORDINATES": "6°42'16.7'N1°38'12.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1034,
      "AGENT BUSINESS NAME": "YENTEEB ENTERPRISE",
      "AGENT USERNAME": "YEN90102",
      "ADDRESS": "UNNUMBERED CONTAINER KONGO",
      "Location": "KONGO MARKET",
      "GPS COORDINATES": "10°50'24.7'N 0°42'23.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1035,
      "AGENT BUSINESS NAME": "FOH ENTERPRISE ",
      "AGENT USERNAME": "FOH60401",
      "ADDRESS": "BANTAMA ",
      "Location": "BANTAMA MARKET",
      "GPS COORDINATES": "6°42'12.8'N1°38'10.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1036,
      "AGENT BUSINESS NAME": "OB VENTURES ",
      "AGENT USERNAME": "OBV60401",
      "ADDRESS": "BANTAMA",
      "Location": "NEAR NHIS OFFICE",
      "GPS COORDINATES": "6°42'09.0'N°37'59.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1037,
      "AGENT BUSINESS NAME": "ANTWI @1995 ENTERPRISE",
      "AGENT USERNAME": "AEN60402",
      "ADDRESS": "BANTAMA",
      "Location": "NEAR NPP OFFICE",
      "GPS COORDINATES": "6°42'06.2'N1°37'58.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1038,
      "AGENT BUSINESS NAME": "FRANCIS DZREKE ENTERPRISE ",
      "AGENT USERNAME": "FDE60401",
      "ADDRESS": "SEWUA JUNCTION",
      "Location": "AT SEWUA JUJCTION",
      "GPS COORDINATES": "6°38'34.0'N1°34'12.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1039,
      "AGENT BUSINESS NAME": "B SQUARE ENTERPRISE",
      "AGENT USERNAME": "BSE90101",
      "ADDRESS": "UNNUMBERED CONTAINER KONGO",
      "Location": "KONGO MARKET",
      "GPS COORDINATES": "10°50'28.8'N 0°42'27.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1040,
      "AGENT BUSINESS NAME": "MBASAKYA ENTERPRISE",
      "AGENT USERNAME": "MBA90101",
      "ADDRESS": "STORE NO.1 NANGODI",
      "Location": "NANGODI MARKET",
      "GPS COORDINATES": "10°50'28.8'N 0°42'27.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1041,
      "AGENT BUSINESS NAME": "GOASO BRC OPERATING ACCOUNT ",
      "AGENT USERNAME": "GBO00101",
      "ADDRESS": "Goaso Business Resources  center office ",
      "Location": "Near GIPEC ",
      "GPS COORDINATES": "6.807108,-2.519362",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1042,
      "AGENT BUSINESS NAME": "RUS70101",
      "AGENT USERNAME": "RUSDAUDA ENTERPRISE ",
      "ADDRESS": "Unnumbered  shop at Goaso ",
      "Location": "Adjacent the Npp office ",
      "GPS COORDINATES": "6.48'08.5'N2.31'02.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1043,
      "AGENT BUSINESS NAME": "K. K C SMARTLITE ENTERPRISE ",
      "AGENT USERNAME": "KSE704017.",
      "ADDRESS": "D 67 SUNYANI",
      "Location": "ADJACENT VIP STATION ",
      "GPS COORDINATES": "7. 19' 54. 7' N 2. 19' 12. 2 2' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1044,
      "AGENT BUSINESS NAME": "ETUS COMMUNICATION ",
      "AGENT USERNAME": "ECOSUB30203",
      "ADDRESS": "MANKESSIM ",
      "Location": "OPPORTUNITY INTERNATIONAL SAVINGS AND LOAN",
      "GPS COORDINATES": "5°16'06.3'N1°01'04.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1045,
      "AGENT BUSINESS NAME": "RA ADOM RAKWA",
      "AGENT USERNAME": "RAR00501",
      "ADDRESS": "ABOSSEY OKAI",
      "Location": "OPPOSITE SOCCA BET ",
      "GPS COORDINATES": "5.5606625, -0.2328594",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1046,
      "AGENT BUSINESS NAME": "BENINK BUSINESS CENTRE ",
      "AGENT USERNAME": "BBC30201",
      "ADDRESS": "MANKESSIM ",
      "Location": "ROYAL PALACE ",
      "GPS COORDINATES": "5°16'26.1'N1°01'15.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1047,
      "AGENT BUSINESS NAME": "ZODASI ENTERPRISE",
      "AGENT USERNAME": "ZEN70301",
      "ADDRESS": "WENCHI, BONO EAST REGION",
      "Location": "OPPOSITE TWENE BROTHERS BUILDING",
      "GPS COORDINATES": "7.599869,-1.934272",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1048,
      "AGENT BUSINESS NAME": "ASARE 94 ENTERPRISE",
      "AGENT USERNAME": "A9E70401",
      "ADDRESS": "D 45 sunyani",
      "Location": "OPPOSITE VIP STATION",
      "GPS COORDINATES": "7. 20' 02. 7' N 2. 19' 13. 1' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1049,
      "AGENT BUSINESS NAME": "HIGH PROFILE VENTURES ",
      "AGENT USERNAME": "HPR00501",
      "ADDRESS": "ABOSSEY OKAI",
      "Location": "NEAR BETHEL MODERN SCHOOL",
      "GPS COORDINATES": "5.5617125, -0.2339219",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1050,
      "AGENT BUSINESS NAME": "GRAPRECOIUS VENTURES ",
      "AGENT USERNAME": "GPV70401",
      "ADDRESS": "D 45 Abesim",
      "Location": "OPPOSITE SIKO ",
      "GPS COORDINATES": "7. 17'52. 4'N 2.17' 44. 7' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1051,
      "AGENT BUSINESS NAME": "NASTAK  ENTERPRISE",
      "AGENT USERNAME": "NEN70301",
      "ADDRESS": "WENCHI, BONO EAST ",
      "Location": "OPPOSITE OPPORTUNITY BANK WENCHI BRANCH",
      "GPS COORDINATES": "7.732565,-2.108886",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1052,
      "AGENT BUSINESS NAME": "NERIDIA VEALLE VENTURES ",
      "AGENT USERNAME": "NVV00501",
      "ADDRESS": "ABOSSEY OKAI ",
      "Location": "NEAR MASALACHI ",
      "GPS COORDINATES": "5.5621625, -0.2338906",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1053,
      "AGENT BUSINESS NAME": "1st SAMUEL GRAPHICS",
      "AGENT USERNAME": "1SG30201",
      "ADDRESS": "MANKESSIM ",
      "Location": "MANKESSIM POST OFFICE ",
      "GPS COORDINATES": "5°16'26.2'N1°01'01.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1054,
      "AGENT BUSINESS NAME": "P.B.E GHANA  LIMITED ",
      "AGENT USERNAME": "PBESUP70101",
      "ADDRESS": "UNNUMBERED SHOP AT GOASO ",
      "Location": "CLOSE TO ADB ",
      "GPS COORDINATES": "6.8046,-2.51480",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1055,
      "AGENT BUSINESS NAME": "MARTHA YALLEY ENTERPRISE ",
      "AGENT USERNAME": "MYE40601",
      "ADDRESS": "KETAN ",
      "Location": "NEAR AHANTAMAN GIRLS SHS ",
      "GPS COORDINATES": "4.9529510, -1.7306170",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1056,
      "AGENT BUSINESS NAME": "JAYCOM 2 VENTURES",
      "AGENT USERNAME": "JVE40602",
      "ADDRESS": "KOJOKROM ",
      "Location": "NEAR THE MARKET ",
      "GPS COORDINATES": "4.9657790,-1.7270640",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1057,
      "AGENT BUSINESS NAME": "ERNESCO PHONES AND ACCESSORIES ",
      "AGENT USERNAME": "EPA40601",
      "ADDRESS": "KOJOKROM",
      "Location": "NEAR LOWER PRA RURAL BANK ",
      "GPS COORDINATES": "4.9649710, -1.7254230",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1058,
      "AGENT BUSINESS NAME": "GABOS PLUS ENTERPRISE ",
      "AGENT USERNAME": "GPE61201",
      "ADDRESS": "Breman Nkwantwema",
      "Location": "Near Zion Methodist Church ",
      "GPS COORDINATES": "6°43'52.1'N 1°37'57.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1059,
      "AGENT BUSINESS NAME": "ADD-STEPHEN ENTERPRISE ",
      "AGENT USERNAME": "ASE61201",
      "ADDRESS": "Breman Nkwantwema",
      "Location": "Opposite  GRA office Maakro",
      "GPS COORDINATES": "6°43'58.7'N 1°37'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1060,
      "AGENT BUSINESS NAME": "JAYTEE LINK ",
      "AGENT USERNAME": "JLI40301",
      "ADDRESS": "SHAMA JUNCTION ",
      "Location": "NEAR THE COCOA SHELL",
      "GPS COORDINATES": "5.0178000, -1.6647710",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1061,
      "AGENT BUSINESS NAME": "JOARHINCO ENTERPRISE ",
      "AGENT USERNAME": "JEN40601",
      "ADDRESS": "SHAMA JUNCTION ",
      "Location": "NEAR THE STATION ",
      "GPS COORDINATES": "5.0182440,-1.6652350",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1062,
      "AGENT BUSINESS NAME": "A.A ESTHER VENTURES",
      "AGENT USERNAME": "AEV61201",
      "ADDRESS": "Maakro Trafic Light",
      "Location": "Close to the Traffic light",
      "GPS COORDINATES": "6°43'50.0'N 1°38'00.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1063,
      "AGENT BUSINESS NAME": "WALCOM ENTERPRISE ",
      "AGENT USERNAME": "WAESUB40301",
      "ADDRESS": "SHAMA JUNCTION ",
      "Location": "OPPOSITE THE MAIN STATION ",
      "GPS COORDINATES": "5.0192580, -1.6653330",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1064,
      "AGENT BUSINESS NAME": "WALCOM ENTERPRISE ",
      "AGENT USERNAME": "WAESUB40302",
      "ADDRESS": "SHAMA JUNCTION ",
      "Location": "INSIDE THE MARKET ",
      "GPS COORDINATES": "5.0223310, -1.6651390",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1065,
      "AGENT BUSINESS NAME": "ISREAL NYAME ADOM ENTERPRISE  ",
      "AGENT USERNAME": "INA60201",
      "ADDRESS": "Maakro off the Kwesi Oppong street",
      "Location": "Close to GRA junction",
      "GPS COORDINATES": "6°43'58.5'N 1°37'45.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1066,
      "AGENT BUSINESS NAME": "JOHN EGYIR VENTURES ",
      "AGENT USERNAME": "JEV40301",
      "ADDRESS": "SHAMA ",
      "Location": "NEAR THE LOWER PRA RURAL BANK",
      "GPS COORDINATES": "5.0108820,-1.6311480",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1067,
      "AGENT BUSINESS NAME": "THE BLOOD OF JESUS",
      "AGENT USERNAME": "TBJSUB00301",
      "ADDRESS": "ABOSSEY OKAI",
      "Location": "NEAR KENKEY HOUSE",
      "GPS COORDINATES": "5.5628125, -0.2352344",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1068,
      "AGENT BUSINESS NAME": "JNR HOUSE CONSULT",
      "AGENT USERNAME": "JHC70101",
      "ADDRESS": "D 900 sunyani",
      "Location": "OPPOSITE  STU MAIN GATE",
      "GPS COORDINATES": "7. 19' 22. 9' N 18' 55. 9' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1069,
      "AGENT BUSINESS NAME": "DARKESTHETER ",
      "AGENT USERNAME": "DEE70401",
      "ADDRESS": "D 601 SUNYANI",
      "Location": "OPPOSITE GLORY FILLING GAS ",
      "GPS COORDINATES": "7. 19' 35. 3' N 2. 19' 00. 1' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1070,
      "AGENT BUSINESS NAME": "ANOM FARMS ENTERPRISE",
      "AGENT USERNAME": "AFE00501",
      "ADDRESS": "KANESHIE",
      "Location": "Near ADOM SAVINGS AND LOANS",
      "GPS COORDINATES": "5.5641875, -0.2360469",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1071,
      "AGENT BUSINESS NAME": "Harbrag utility enterprise ",
      "AGENT USERNAME": "HUE04801",
      "ADDRESS": "Unnumbered shop at labone",
      "Location": "Near GT bank",
      "GPS COORDINATES": "(5.5700966, -0.1758017)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1072,
      "AGENT BUSINESS NAME": "KING TUMA BUSINESS CENTRE ",
      "AGENT USERNAME": "KTBSUB30202",
      "ADDRESS": "MANKESSIM ",
      "Location": "MANKESSIM ",
      "GPS COORDINATES": "5°16'20.1'N1°00'59.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1073,
      "AGENT BUSINESS NAME": "Kujoe one enterprise ",
      "AGENT USERNAME": "K1E4801",
      "ADDRESS": "Unnumbered shop at labone",
      "Location": "Near medi point Pharmacy ",
      "GPS COORDINATES": "(5.5679581, -0.1740998)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1074,
      "AGENT BUSINESS NAME": "DZIBO'S VENTURES ",
      "AGENT USERNAME": "DVE00302",
      "ADDRESS": "ARENA STATION ",
      "Location": "IN FRONT OF ARENA LORRY STATION",
      "GPS COORDINATES": "5.545562,-0.215491",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1075,
      "AGENT BUSINESS NAME": "KING LUCIEN ENTERPRISE ",
      "AGENT USERNAME": "KLE00701",
      "ADDRESS": "AGBOGBLOSHIE ",
      "Location": "CLOSE TO AGBOGBLOSHIE CARGO STATION ",
      "GPS COORDINATES": "5.549334,-0.220043",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1076,
      "AGENT BUSINESS NAME": "EBENKWAR ENTERPRISE ",
      "AGENT USERNAME": "EBESUB00703",
      "ADDRESS": "MAKOLA NO. 2",
      "Location": "INSIDE MAKOLA NO. 2 MARKET",
      "GPS COORDINATES": "5.550767,-0.217536",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1077,
      "AGENT BUSINESS NAME": "J AND F BUSINESS COMPANY LTD",
      "AGENT USERNAME": "JFB70401",
      "ADDRESS": "D kotokrom",
      "Location": "OPPOSITE FUNERAL GROUND ",
      "GPS COORDINATES": "7. 20' 48. 4' N 2. 16' 14. 7' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1078,
      "AGENT BUSINESS NAME": "LEN20101",
      "AGENT USERNAME": "LUVIOPORSH ENT",
      "ADDRESS": "STOTR NUMBER 37 MPRAESO STATION",
      "Location": "MPRAESO STATION ",
      "GPS COORDINATES": "6°35'30.2' N 0°44'05.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1079,
      "AGENT BUSINESS NAME": "ANB GEORGE VENTURES ",
      "AGENT USERNAME": "AGVSUB20102",
      "ADDRESS": "CONTAINER NUMBER C 123 MPRAESO ANYWAY",
      "Location": "NEAR TRAFFIC LIGHT JUNCTION ",
      "GPS COORDINATES": "6°35'29.7' N 0°44'03.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1080,
      "AGENT BUSINESS NAME": "Placid Tarwer Ventures",
      "AGENT USERNAME": "PTV20301",
      "ADDRESS": "Unnumbered House Market Lane Nsawam",
      "Location": "Near Vodaphone office",
      "GPS COORDINATES": "5.811098, -0.351801",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1081,
      "AGENT BUSINESS NAME": "DE ELZ VENTURES ",
      "AGENT USERNAME": "DEV20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT MPRAESO ",
      "Location": "ADJACENT PREMIER CLUB",
      "GPS COORDINATES": "6°35'32.0' N 0°44'01.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1082,
      "AGENT BUSINESS NAME": "BERNARDAGYEK ENTERPRISE ",
      "AGENT USERNAME": "BEN61201",
      "ADDRESS": "Breman Nkontwema near the bridge",
      "Location": "Near Lesbon Junction",
      "GPS COORDINATES": "6°43'50.9'N 1°37'56.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1083,
      "AGENT BUSINESS NAME": "OHENEBA P.K GEE ENTERPRISE ",
      "AGENT USERNAME": "PENSUP61201",
      "ADDRESS": "Maakro",
      "Location": "Near the Traffic light",
      "GPS COORDINATES": "6°43'50.9'N 1°38'01.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1084,
      "AGENT BUSINESS NAME": "Bright Safo Ent",
      "AGENT USERNAME": "BSE20301",
      "ADDRESS": "Unnumbered Hse, In front of Pan-African savings and Loans",
      "Location": "Near Hairdoctorz",
      "GPS COORDINATES": "5.811394,-0.351801",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1085,
      "AGENT BUSINESS NAME": "A.A ESTHER VENTURES ",
      "AGENT USERNAME": "AEV61201",
      "ADDRESS": "Maakro",
      "Location": "Near the Traffic light",
      "GPS COORDINATES": "6°43'50.0'N 1°38'00.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1086,
      "AGENT BUSINESS NAME": "Selovent Ent",
      "AGENT USERNAME": "SEE20302",
      "ADDRESS": "Adowagyiri roundabout, Nsawam",
      "Location": "Near South Akim Rural Bank",
      "GPS COORDINATES": "5.819858, -0.354637",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1087,
      "AGENT BUSINESS NAME": "Real Boss ventures",
      "AGENT USERNAME": "RBV20301",
      "ADDRESS": "Sakyikrom Overhead, Nsawam",
      "Location": "Near Accra station",
      "GPS COORDINATES": "5.817414,-0.364534",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1088,
      "AGENT BUSINESS NAME": "IBRA WAN VENTURES ",
      "AGENT USERNAME": "IWV61201",
      "ADDRESS": "Breman Junction off the Kronum - Maakro road.",
      "Location": "Close to Breman junction",
      "GPS COORDINATES": "6°44'11.9'N 1°38'15.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1089,
      "AGENT BUSINESS NAME": "SMILE OF HOPE",
      "AGENT USERNAME": "SMH50101",
      "ADDRESS": "DEVEGO",
      "Location": "NEAR DEVEGO HEALTH CENTER",
      "GPS COORDINATES": "6.175892,0.915697",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1090,
      "AGENT BUSINESS NAME": "ODEHYIEBA EMMANUEL OPOKU ",
      "AGENT USERNAME": "OEO60501",
      "ADDRESS": "ANWIA NKWANTA",
      "Location": "NEAR LORRY STATION ",
      "GPS COORDINATES": "6°27'47.4'N1°38'13.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1091,
      "AGENT BUSINESS NAME": "IKE LINK VENTURES ",
      "AGENT USERNAME": "ILVSUB20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT MPRAESO ",
      "Location": "NEAR THE CHIEF'S PALACE",
      "GPS COORDINATES": "6°35'33.9' N 0°44'00.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1092,
      "AGENT BUSINESS NAME": "CHRIS B VENTURES",
      "AGENT USERNAME": "CBV61202",
      "ADDRESS": "Magazine",
      "Location": "Near Former Akad Microfinance",
      "GPS COORDINATES": "6°43'45.3'N 1°37'55.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1093,
      "AGENT BUSINESS NAME": "ELIGEE ENTERPRISE ",
      "AGENT USERNAME": "ELE60501",
      "ADDRESS": "ADANGRAGYA BEKWAI",
      "Location": "NEAR POLICE POST",
      "GPS COORDINATES": "6°27'22.9'N1°35'29.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1094,
      "AGENT BUSINESS NAME": "HAGAR KONTOH ENTERPRISE ",
      "AGENT USERNAME": "HKE40501",
      "ADDRESS": "Unnumbered shop at Tarkwa ",
      "Location": "Behind Joko stores ",
      "GPS COORDINATES": "5.18’16.5'N  1.59’39.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1095,
      "AGENT BUSINESS NAME": "MICKY FOSU-APPIAH ENT",
      "AGENT USERNAME": "MOA60801",
      "ADDRESS": "BEKWAI",
      "Location": "COCOA DEPOT",
      "GPS COORDINATES": "6°27'15.1'N1°34'44.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1096,
      "AGENT BUSINESS NAME": "CINFINITY ",
      "AGENT USERNAME": "CIN60501",
      "ADDRESS": "BEKWAI",
      "Location": "NEAR ADB",
      "GPS COORDINATES": "6°27'14.9'N1°34'36.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1097,
      "AGENT BUSINESS NAME": "LINFRIMAKOS ENTERPRISE ",
      "AGENT USERNAME": "LEN60802",
      "ADDRESS": "ASUOYEBOAH",
      "Location": "OPPOSITE SHELL FILLING STATION ",
      "GPS COORDINATES": "6°41'47.3'N 1°39'57.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1098,
      "AGENT BUSINESS NAME": "SOLOLO VENTURES ",
      "AGENT USERNAME": "SVE60501",
      "ADDRESS": "SOLOLO ",
      "Location": "NEAR ADB",
      "GPS COORDINATES": "6°27'15.8'N1°34'38.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1099,
      "AGENT BUSINESS NAME": "EFFIX PLUS ENTERPRISE ",
      "AGENT USERNAME": "EPE60501",
      "ADDRESS": "KWADASO",
      "Location": "NEAR SILOAM HOSPITAL ",
      "GPS COORDINATES": "6°42°02.2'N 1°39'37.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1100,
      "AGENT BUSINESS NAME": "SOLOMON PANIA ENTERPRISE ",
      "AGENT USERNAME": "SPE60501",
      "ADDRESS": "KWADASO",
      "Location": "CLOSE TO S.D.A HOSPITAL ",
      "GPS COORDINATES": "6°41'59.9'N 1°39'27.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1101,
      "AGENT BUSINESS NAME": "EDEM DAGADU ENT",
      "AGENT USERNAME": "EDE20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT NKAWKAW ",
      "Location": "AFRAM PLAINS STATION ",
      "GPS COORDINATES": "6°33'07.2' N 0°45'50.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1102,
      "AGENT BUSINESS NAME": "DENNYRODE ENTERPRISE ",
      "AGENT USERNAME": "DEN60802",
      "ADDRESS": "KWADASO",
      "Location": "OPPOSITE S.D.A HOSPITAL ",
      "GPS COORDINATES": "6°41'58.2'N 1°39'47.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1103,
      "AGENT BUSINESS NAME": "ADIMPOTEC VENTURES ",
      "AGENT USERNAME": "AVE60501",
      "ADDRESS": "BEKWAI BROSASE",
      "Location": "NEAR AMANSIE INTERNATIONAL  HOTEL ",
      "GPS COORDINATES": "6.27'08.9'N1°35'07.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1104,
      "AGENT BUSINESS NAME": "MANERNESTO ENTERPRISE",
      "AGENT USERNAME": "MEN12301",
      "ADDRESS": "LATERBIOKORSHIE",
      "Location": "NEAR TOWN COUNCIL PARK",
      "GPS COORDINATES": "5.5535625, -0.2423594",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1105,
      "AGENT BUSINESS NAME": "EAGLE EYE TRADING AND ENGINEERING VENTURES ",
      "AGENT USERNAME": "EVT60801",
      "ADDRESS": "KWADASO",
      "Location": "CLOSE TO THE ATWIMA RURAL BANK",
      "GPS COORDINATES": "6°41'52.7'N 1°39'28.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1106,
      "AGENT BUSINESS NAME": "PATIENCE SALLY ENTERPRISE",
      "AGENT USERNAME": "PSE12301",
      "ADDRESS": "LATERBIOKORSHIE",
      "Location": "BESIDE SHELL FILLING STATION ",
      "GPS COORDINATES": "5.5507125, -0.2401719",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1107,
      "AGENT BUSINESS NAME": "KERMAH CURTAINS AND CARPET",
      "AGENT USERNAME": "KCC60801",
      "ADDRESS": "KWADASO ",
      "Location": "CLOSE TO THE TIMBER MARKET",
      "GPS COORDINATES": "6°41'46.5'N 1°39'25.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1108,
      "AGENT BUSINESS NAME": "LIZMORT VENTURES",
      "AGENT USERNAME": "LVE04501",
      "ADDRESS": "DOME",
      "Location": "CLOSE TO DOME BRANCH",
      "GPS COORDINATES": "5.641656,-0.239641",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1109,
      "AGENT BUSINESS NAME": "FLOSARP ENTERPRISE",
      "AGENT USERNAME": "FLE04501",
      "ADDRESS": "DOME KWABENY RD",
      "Location": "CLOSE TO ECOBANK",
      "GPS COORDINATES": "5.665792,-0.238563",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1110,
      "AGENT BUSINESS NAME": "SOLOCOWUSS VENTURES ",
      "AGENT USERNAME": "SOV20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT BEPONG KWAHU",
      "Location": "NEAR BEPONG MARKET",
      "GPS COORDINATES": "6°37'29.4' N 1°12''33.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1111,
      "AGENT BUSINESS NAME": "MAVEG GROUP LIMITED",
      "AGENT USERNAME": "MGSUB03101",
      "ADDRESS": "TAIFA ",
      "Location": "NEAR NORWAY BUS STOP",
      "GPS COORDINATES": "5.652878,-0.251355",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1112,
      "AGENT BUSINESS NAME": "LEXY  X ENTERPRISE",
      "AGENT USERNAME": "LXE02501",
      "ADDRESS": "TANTRA ",
      "Location": "TANTRA BUS STOP",
      "GPS COORDINATES": "5.643419,-0.246004",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1113,
      "AGENT BUSINESS NAME": "RICHWASEK ENT",
      "AGENT USERNAME": "RIE20101",
      "ADDRESS": "STORE NUMBER 0737 NSUTA NKAWKAW",
      "Location": "NEAR STARTING POINT",
      "GPS COORDINATES": "6°34'31.6' N 0°46'48.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1114,
      "AGENT BUSINESS NAME": "EKOURBA PLUS VENTURES ",
      "AGENT USERNAME": "EKVSUB30301",
      "ADDRESS": "CAPECOAST UCC",
      "Location": "UCC  AMAMOMA ",
      "GPS COORDINATES": "5°06'46.8'N1°17'39.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1115,
      "AGENT BUSINESS NAME": "KWAO ENNISON VENTURES ",
      "AGENT USERNAME": "KEVSUB02702",
      "ADDRESS": "NUNGUA ",
      "Location": "CLOSE TO MILANO PUB",
      "GPS COORDINATES": "5'36'14.5'N 0'04'30.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1116,
      "AGENT BUSINESS NAME": "GOODNEWS TECHNOSAT ",
      "AGENT USERNAME": "GTE01001",
      "ADDRESS": "SPINTEX SHELL ",
      "Location": "OPPOSITE SHELL BUS STOP ",
      "GPS COORDINATES": "5'38'26.0'N 0'06'28.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1117,
      "AGENT BUSINESS NAME": "EBENEZER OBOSU VENTURE ",
      "AGENT USERNAME": "EOVSUB02702",
      "ADDRESS": "SPINTEX ",
      "Location": "NEAR COCA COLA ROUNDABOUT ",
      "GPS COORDINATES": "5'38'.380'N 0'06'40.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1118,
      "AGENT BUSINESS NAME": "HUMBLE ANSAH VENTURES ",
      "AGENT USERNAME": "HAV04901",
      "ADDRESS": "TESHIE ",
      "Location": "CLOSE TO TESHIE OLD LORRY STATION ",
      "GPS COORDINATES": "5'35'14.9'N 0'06'24.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1119,
      "AGENT BUSINESS NAME": "MACMILLAN WEALTH VENTURES ",
      "AGENT USERNAME": "WWV00201",
      "ADDRESS": "SPINTEX ",
      "Location": "NEAR FIDELITY BANK SPINTEX ROAD BRANCH ",
      "GPS COORDINATES": "5'38'20.2'N0'06'.22.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1120,
      "AGENT BUSINESS NAME": "ABDUL TYMER ENT ",
      "AGENT USERNAME": "ATE04901",
      "ADDRESS": "TESHIE ADOEMLI",
      "Location": "NEAR BEACH ROAD PHARMACY ",
      "GPS COORDINATES": "5.5814300,-0.1054850",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1121,
      "AGENT BUSINESS NAME": "DOOR TII VENTURES ",
      "AGENT USERNAME": "DTV04901",
      "ADDRESS": "NUNGUA LEISURE ",
      "Location": "OPPOSITE LEISURE HOTEL",
      "GPS COORDINATES": "5'36'09.1'N 0'05'07.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1122,
      "AGENT BUSINESS NAME": "CHAPTER SAM VENTURES ",
      "AGENT USERNAME": "CSVSUB02701",
      "ADDRESS": "NUNGUA BARRIER",
      "Location": "OPPOSITE REGIMANUEL GREY ESTATES-NUNGUA",
      "GPS COORDINATES": "5.616826,-0.072232",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1123,
      "AGENT BUSINESS NAME": "Ivlork business services ",
      "AGENT USERNAME": "IBS05001",
      "ADDRESS": "Unnumbered house at old ningo",
      "Location": "Near the taxi station ",
      "GPS COORDINATES": "5°44'57.8'N 0°11'23.9'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1124,
      "AGENT BUSINESS NAME": "Kek company limited ",
      "AGENT USERNAME": "KCLSUB05001",
      "ADDRESS": "Unnumbered house at battor ",
      "Location": "Near the catholic hospital ",
      "GPS COORDINATES": "6°04'12.9'N 0°24'13.1'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1125,
      "AGENT BUSINESS NAME": "Safe wallet solution ",
      "AGENT USERNAME": "SWSSUB04202",
      "ADDRESS": "Unnumbered house at Tema comm 1",
      "Location": "Behind Tema comm 1 branch",
      "GPS COORDINATES": "5°38'17.1'N 0°00'05.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1126,
      "AGENT BUSINESS NAME": "Inshamen company limited ",
      "AGENT USERNAME": "ICL05001",
      "ADDRESS": "Unnumbered house at Tema comm 8",
      "Location": "Near Starbite ",
      "GPS COORDINATES": "5°38'17.1'N 0°00'05.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1127,
      "AGENT BUSINESS NAME": "Eco premium ",
      "AGENT USERNAME": "ECP05001",
      "ADDRESS": "Unnumbered house at Tema comm 8",
      "Location": "Near vienna city ",
      "GPS COORDINATES": "5°40'12.0'N 0°00'48.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1128,
      "AGENT BUSINESS NAME": "Abacus trade and investment ",
      "AGENT USERNAME": "ATI03301",
      "ADDRESS": "Unnumbered house at Tema comm 7",
      "Location": "Near comm 7 vertinary",
      "GPS COORDINATES": "5°39'42.6'N 0°00'39.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1129,
      "AGENT BUSINESS NAME": "Action papa ",
      "AGENT USERNAME": "APV03301",
      "ADDRESS": "Unnumbered house at Tema new town ",
      "Location": "Near catholic preparatory school",
      "GPS COORDINATES": "5°39'47.6'N 0°02'22.8'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1130,
      "AGENT BUSINESS NAME": "Agormedah ventures ",
      "AGENT USERNAME": "AGV05001",
      "ADDRESS": "Unnumbered house at bankuman ",
      "Location": "Near bankuman preparatory ",
      "GPS COORDINATES": "5°39'47.8'N 0°02'22.5'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1131,
      "AGENT BUSINESS NAME": "Tish classic ",
      "AGENT USERNAME": "TCV03301",
      "ADDRESS": "Unnumbered house at bankuman ",
      "Location": "Near icgc bankuman ",
      "GPS COORDINATES": "5°39'47.8'N 0°02'22.5'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1132,
      "AGENT BUSINESS NAME": "ANOINTED PROMISE VENTURES",
      "AGENT USERNAME": "APV02201",
      "ADDRESS": "UNNUMBERED SHOP AT FESTUS AMANFROM",
      "Location": "NEAR LEAD INTERNATIONAL SCHOOL",
      "GPS COORDINATES": "5.6999633,-0.3045221",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1133,
      "AGENT BUSINESS NAME": "MOSJENNIBAE VENTURES",
      "AGENT USERNAME": "MJV03101",
      "ADDRESS": "UNNUMBERED SHOP AT MEDEA KOTOKU",
      "Location": "NEAR TWILLIUM INDUSTRIES ",
      "GPS COORDINATES": "5.7575074,-0.3339887",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1134,
      "AGENT BUSINESS NAME": "STREAM SITE CPOMPANY",
      "AGENT USERNAME": "SSC02501",
      "ADDRESS": "UNNUMBERED SHOP AT MILE 7",
      "Location": "NEAR THE MILE 7 WASHING BAY",
      "GPS COORDINATES": "5.6345747,-0.2434892",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1135,
      "AGENT BUSINESS NAME": "RITGIFT ENTERPRISE",
      "AGENT USERNAME": "REN02201",
      "ADDRESS": "UNNUMBERED SHOP AT SHIKPONTELE",
      "Location": "NEAR LECOUNTRY MINERAL WATER",
      "GPS COORDINATES": "5.7155711,-0.312681",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1136,
      "AGENT BUSINESS NAME": "PHILI-LINA ENTERPRISE",
      "AGENT USERNAME": "PLE02501",
      "ADDRESS": "UNNUMBERED SHOP AT DOME ",
      "Location": "NEAR MIGHTY JESUS SCHOOL",
      "GPS COORDINATES": "5.6963103,-0.2940912",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1137,
      "AGENT BUSINESS NAME": "RICH GRANDPA ENTERPRISE ",
      "AGENT USERNAME": "RGE02501",
      "ADDRESS": "UNNUMBERED SHOP AT SAPIEMAN ",
      "Location": "NEAR GREATER HOPE ACADEMY",
      "GPS COORDINATES": "5.725958,-0.3199588",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1138,
      "AGENT BUSINESS NAME": "LEXY-X ENTERPRISE ",
      "AGENT USERNAME": "LEN02501",
      "ADDRESS": "UNNUMBERED SHOP AT TANTRA HILL",
      "Location": "NEAR THE GCB BANK",
      "GPS COORDINATES": "5.6436987,-0.2484171",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1139,
      "AGENT BUSINESS NAME": "G.K POONIA VENTURES ",
      "AGENT USERNAME": "GPV02501",
      "ADDRESS": "UNNUMBERED SHOP AT SAPIEMAN ",
      "Location": "NEAR CALVERY PRESBY CHURCH",
      "GPS COORDINATES": "5.7257884,-0.3130633",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1140,
      "AGENT BUSINESS NAME": "TALK 2 ME TRADING ENTERPRISE",
      "AGENT USERNAME": "TMT 2501.00",
      "ADDRESS": "UNNUMBERED SHOP AT FISE ",
      "Location": "NEAR THE GCB BANK",
      "GPS COORDINATES": "5.6981564,-0.2945394",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1141,
      "AGENT BUSINESS NAME": "SETHOO SERIOUS VENTURES ",
      "AGENT USERNAME": "SSV03801",
      "ADDRESS": "UNNUMBERED HOUSE AT ABLEKUMA FANMILK JUNCTION ",
      "Location": "NEAR FANMILK JUNCTION ",
      "GPS COORDINATES": "5.6217135,-0.3000171",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1142,
      "AGENT BUSINESS NAME": "DAUGHTER OF PSB VENTURES ",
      "AGENT USERNAME": "DOP 70101.00",
      "ADDRESS": "D 12 SUNYANI",
      "Location": "ADJACENT COP SUNYANI ",
      "GPS COORDINATES": "7. 20' 01. 3' N 2. 19' 22. 6' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1143,
      "AGENT BUSINESS NAME": "GEOMEC PLUS ENTERPRISE ",
      "AGENT USERNAME": "GPE03201",
      "ADDRESS": "UNNUMBERED HOUSE AT AWOSHIE ABRANTIE ",
      "Location": "NEAR AWOSHIE ABRANTIE BUS STOP",
      "GPS COORDINATES": "5.5883338,-0.2823406",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1144,
      "AGENT BUSINESS NAME": "SANDRO DPM LTD",
      "AGENT USERNAME": "SDL03801",
      "ADDRESS": "UNNUMBERED HOUSE AT AWOSHIE STATION ",
      "Location": "NEAR AWOSHIE STATION ",
      "GPS COORDINATES": "5.5868872,-0.2793088",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1145,
      "AGENT BUSINESS NAME": "CHARLES LINKS",
      "AGENT USERNAME": "CLL05101",
      "ADDRESS": "UNNUMBERED SHOP AT ANYAA MARKET",
      "Location": "NEAR THE ANYAA MARKET ",
      "GPS COORDINATES": "5.5990398,-0.2907002",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1146,
      "AGENT BUSINESS NAME": "DEN TANOR VENTURES ",
      "AGENT USERNAME": "DTV02601",
      "ADDRESS": "UNNUMBERED SHOP AT ANYAA LAST STOP",
      "Location": "NEAR THE NAGHARA HOTEL",
      "GPS COORDINATES": "5.6080016,-0.2974880",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1147,
      "AGENT BUSINESS NAME": "KAYPHEY ENTERPRISE ",
      "AGENT USERNAME": "KAYSUB03802",
      "ADDRESS": "UNNUMBERED SHOP AT ABLEKUMA, ",
      "Location": "NEAR NIC BUS STOP ",
      "GPS COORDINATES": "5.6143600,-0.2961570",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1148,
      "AGENT BUSINESS NAME": "MCKay multimedia ",
      "AGENT USERNAME": "MME02001",
      "ADDRESS": "Unnumbered shop at Burma camp",
      "Location": "Near st Catherine Catholic Church ",
      "GPS COORDINATES": "(37.3898090, -122.0814130)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1149,
      "AGENT BUSINESS NAME": "Godwin Baah enterprise ",
      "AGENT USERNAME": "GBE00201",
      "ADDRESS": "Unnumbered shop at labadi palm wine",
      "Location": "Near zenith bank",
      "GPS COORDINATES": "(5.5748980, -0.1532830)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1150,
      "AGENT BUSINESS NAME": "DORC DEE VENTURES ",
      "AGENT USERNAME": "DVE70102",
      "ADDRESS": "D 54 FIAPRE",
      "Location": "OPPOSITE O.K PHARMACY ",
      "GPS COORDINATES": "7. 21' 07. 1' N 2. 20' 41. 7' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1151,
      "AGENT BUSINESS NAME": "Immobile Enterprise ",
      "AGENT USERNAME": "IENSUB02001",
      "ADDRESS": "Unnumbered shop at la ",
      "Location": "Near Kpogas junction ",
      "GPS COORDINATES": "(5.5711070, -0.1513430)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1152,
      "AGENT BUSINESS NAME": "JESUS SAVE BUSINESS CENTRE ",
      "AGENT USERNAME": "JSB70401",
      "ADDRESS": "BOX 206 FIAPRE",
      "Location": "OPPOSITE Abibiduro fie",
      "GPS COORDINATES": "7. 21' 36. 5' N 2. 20' 52. 5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1153,
      "AGENT BUSINESS NAME": "3D 7D PLUS ENTERPRISE",
      "AGENT USERNAME": "3PE40301",
      "ADDRESS": "UNNUMBERED SHOP AT ELUBO",
      "Location": "CLOSE TO ECOBANK AND THE POLICE STATION",
      "GPS COORDINATES": "5°17'23.0'N 2°46'43.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1154,
      "AGENT BUSINESS NAME": "REHOBOATH ENTERPRISE ",
      "AGENT USERNAME": "DOE02001",
      "ADDRESS": "Unnumbered shop at tse addo",
      "Location": "Near tse addo roundabout ",
      "GPS COORDINATES": "(5.5711070, -0.1513430)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1155,
      "AGENT BUSINESS NAME": "EDUNA TRADING ENTERPRISE",
      "AGENT USERNAME": "ETESUB02801",
      "ADDRESS": "UNN SHOP AT GBETSILE JUNCTION",
      "Location": "NEAR GBETSILE TRTRO STATION",
      "GPS COORDINATES": "5.7422770,-0.0130660",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1156,
      "AGENT BUSINESS NAME": "EDUNA TRADING ENTERPRISE",
      "AGENT USERNAME": "ETESUB02802",
      "ADDRESS": "UNNUMBERED SHOP AT GBETSILE 2ND JUNCTION",
      "Location": "NEAR DEL'S MINI MART",
      "GPS COORDINATES": "5.7422770,-0.0130660",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1157,
      "AGENT BUSINESS NAME": "EDUNA TRADING ENTERPRISE ",
      "AGENT USERNAME": "ETESUB02803",
      "ADDRESS": "UNN SHOP AT TULAKU",
      "Location": "OPPOSITE THE COW MARKET",
      "GPS COORDINATES": "5.723560,- 0.0145390",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1158,
      "AGENT BUSINESS NAME": "JOAN ANOINTED VENTURES",
      "AGENT USERNAME": "JAV02801",
      "ADDRESS": "HSE NO G0274-8601 KAKASUNANKA NO 1",
      "Location": "NEAR THE LONDON BRIDGE",
      "GPS COORDINATES": "5.7416530,- 0.0187760",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1159,
      "AGENT BUSINESS NAME": "DOBEMAA ENTERPRISE",
      "AGENT USERNAME": "DOE02801",
      "ADDRESS": "HSE NOR/11/58 GOLF CITY",
      "Location": "NEAR ROSES SCHOOL",
      "GPS COORDINATES": "5.7166060,- 0.068190",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1160,
      "AGENT BUSINESS NAME": "MASHIETEL VENTURES",
      "AGENT USERNAME": "MAV02801",
      "ADDRESS": "UNN SHOP AT GBETSILE SANCO",
      "Location": "NEAR SANCO PURE OIL STATION",
      "GPS COORDINATES": "5.7660300,-0.0437060",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1161,
      "AGENT BUSINESS NAME": "EXAGGREATE GLORY ENTERPRISE",
      "AGENT USERNAME": "EGESUB02801",
      "ADDRESS": "UNN SHOP AT KAKASUNANKA NO 1",
      "Location": "NEAR DEEPER LIFE CHURCH",
      "GPS COORDINATES": "5.7369200,-0.0162380",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1162,
      "AGENT BUSINESS NAME": "DANESTHER BUSINESS ENTERPRISE",
      "AGENT USERNAME": "DBESUB90102",
      "ADDRESS": "UNNUMBERED CONTAINER POBAGA ESTATE",
      "Location": "OPPOSITE PETROSOL",
      "GPS COORDINATES": "10°46'13.1'N 0°51'24.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1163,
      "AGENT BUSINESS NAME": "EXAGGREATE GLORY ENTERPRISE ",
      "AGENT USERNAME": "EGESUB02802",
      "ADDRESS": "UNN SHOP AT GBETSILE, US ROAD",
      "Location": "NEAR THE CHURCH OF PENTECOST CENTRAL",
      "GPS COORDINATES": "5.7653040,-0.043670",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1164,
      "AGENT BUSINESS NAME": "PRINCESS BOATEMAA ENTERPRISE ",
      "AGENT USERNAME": "PBE60401",
      "ADDRESS": "ESERESO ",
      "Location": "NEAR ESERESO MARKET ",
      "GPS COORDINATES": "6°37'54.9'N1°33'47.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1165,
      "AGENT BUSINESS NAME": "MAXIPRO INVESTMENT LIMITED",
      "AGENT USERNAME": "MIL02801",
      "ADDRESS": "UNNUMBERED SHOP AT AHAIMAN NEW YORK",
      "Location": "NEAR NEW YORK STATION",
      "GPS COORDINATES": "5.7399570,-0.541340",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1166,
      "AGENT BUSINESS NAME": "ADEPA GRACE ENTERPRISE ",
      "AGENT USERNAME": "AGE60401",
      "ADDRESS": "OPHELIA ",
      "Location": "OPHELIA JUNCTION ",
      "GPS COORDINATES": "6°37'26.5'NQ°33'41.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1167,
      "AGENT BUSINESS NAME": "MERICOBEE ENTERPRISE ",
      "AGENT USERNAME": "MEN60402",
      "ADDRESS": "Adagya",
      "Location": "Near adagya taxi rank",
      "GPS COORDINATES": "6°37'10.2N1°33'50.9'N",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1168,
      "AGENT BUSINESS NAME": "REBECCA OSEI 83 ENTERPRISE",
      "AGENT USERNAME": "ROE60401",
      "ADDRESS": "Adagya town",
      "Location": "Adagya M/A school",
      "GPS COORDINATES": "6°37'10.2'N1°34'43.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1169,
      "AGENT BUSINESS NAME": "DANNY KAC ENTERPRISE ",
      "AGENT USERNAME": "DKE60401",
      "ADDRESS": "KUWAIT",
      "Location": "NEAR KUWAIT STATION",
      "GPS COORDINATES": "6°37'44.0'N1°36'02.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1170,
      "AGENT BUSINESS NAME": "PETERMONIC ENTERPRISE ",
      "AGENT USERNAME": "PVE60402",
      "ADDRESS": "KAASE",
      "Location": "NEAR BOST",
      "GPS COORDINATES": "6°38'39.0'N1°36'29.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1171,
      "AGENT BUSINESS NAME": "PETERMONIC VENTURES ",
      "AGENT USERNAME": "PVE60402",
      "ADDRESS": "KAASE",
      "Location": "NEAR BOST",
      "GPS COORDINATES": "6°38'39.0'N1°36'29.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1172,
      "AGENT BUSINESS NAME": "AFIA OPRAH ENTERPRISE ",
      "AGENT USERNAME": "AOE60401",
      "ADDRESS": "Ophelia",
      "Location": "Near kareeken enterprise ",
      "GPS COORDINATES": "6°37'25.4'N1°33'40.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1173,
      "AGENT BUSINESS NAME": "MED CAPITAL ",
      "AGENT USERNAME": "MCA00301",
      "ADDRESS": "MAKOLA NO. 2",
      "Location": "NEAR MAKOLA NO. 2 MOSQUE",
      "GPS COORDINATES": "5.550721,-0.217547",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1174,
      "AGENT BUSINESS NAME": "Marketing Concept Bureau ",
      "AGENT USERNAME": "MCB03101",
      "ADDRESS": "Unnumbered shop at la apapa",
      "Location": "Near la tenu radio ",
      "GPS COORDINATES": "(5.5643510, -0.1585480)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1175,
      "AGENT BUSINESS NAME": "EFF-ESS PHARMACY LIMITED ",
      "AGENT USERNAME": "EPLSUB40601",
      "ADDRESS": "MARKET CIRCLE ",
      "Location": "OPPOSITE ASEMPA HOTEL",
      "GPS COORDINATES": "4.9017740,-1.7665070",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1176,
      "AGENT BUSINESS NAME": "BASE POINT VENTURES ",
      "AGENT USERNAME": "BPV40101",
      "ADDRESS": "INCHABAN ",
      "Location": "NEAR THE LORRY STATION ",
      "GPS COORDINATES": "4.9970320,-1.6800360",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1177,
      "AGENT BUSINESS NAME": "JENSUB40502",
      "AGENT USERNAME": "JAMTAY enterprise ",
      "ADDRESS": "Unnumbered shop at Dompim",
      "Location": "Near the New Police station",
      "GPS COORDINATES": "5.11’56.8'N  2.03’31.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1178,
      "AGENT BUSINESS NAME": "SIMON DAWN ENTERPRISE ",
      "AGENT USERNAME": "SDE70201",
      "ADDRESS": "D 55 wamfie",
      "Location": "OPPOSITE PRESBY SCHOOL ",
      "GPS COORDINATES": "7. 17'57. 7' N 2. 41' 59. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1179,
      "AGENT BUSINESS NAME": "JAMTAY ENTERPRISE ",
      "AGENT USERNAME": "JENSUB40501",
      "ADDRESS": "Unnumbered shop at Dompim",
      "Location": "Behind 12 Apostles Church",
      "GPS COORDINATES": "5.15’58.9'N  2.02’38.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1180,
      "AGENT BUSINESS NAME": "Oppong-mystik enterprise ",
      "AGENT USERNAME": "MYE02001",
      "ADDRESS": "Unnumbered shop at labadi mami ",
      "Location": "Near total filling station ",
      "GPS COORDINATES": "(5.5573875, -0.1653906)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1181,
      "AGENT BUSINESS NAME": "REBOHOT VENTURES ",
      "AGENT USERNAME": "NRV70201",
      "ADDRESS": "D 67 WAMFIE",
      "Location": "ADJACENT PRESBY SCHOOL ",
      "GPS COORDINATES": "7. 17' 54. 5' N 2. 42' 00. 2'",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1182,
      "AGENT BUSINESS NAME": "SMART ACCESS MICRO CREDIT SERVICE ",
      "AGENT USERNAME": "SAMSUB02802",
      "ADDRESS": "ASHAIMAN NOGHT MARKET",
      "Location": "ADJACENT THE MOSQUE",
      "GPS COORDINATES": "506898700,-0.0347970",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1183,
      "AGENT BUSINESS NAME": "IKRATE GHANA COMPANY LIMITED",
      "AGENT USERNAME": "IGC02801",
      "ADDRESS": "UNN SHOP AT SANTOE ",
      "Location": "NEAR SANTOE STATION ",
      "GPS COORDINATES": "5.7048680,-0.0788880",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1184,
      "AGENT BUSINESS NAME": "DORDUMEX VENTURES",
      "AGENT USERNAME": "DVESUB02801",
      "ADDRESS": "UNN SHOP AT GBETSILE ",
      "Location": "NEAR SCHOOL JUNCTION",
      "GPS COORDINATES": "5.7453510,-0.0283160",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1185,
      "AGENT BUSINESS NAME": "TRANSCARD VENTURES ",
      "AGENT USERNAME": "TVE01401",
      "ADDRESS": "CIRCLE ",
      "Location": "NERA GRA",
      "GPS COORDINATES": "5.570830,-0.211072",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1186,
      "AGENT BUSINESS NAME": "DORDUMEX VENTURES",
      "AGENT USERNAME": "DVESUB02802",
      "ADDRESS": "UNNUMBERED SHOP AT GBETSILE ",
      "Location": "NEAR THE FIRE SERVICE",
      "GPS COORDINATES": "5.7432960,-0.0173550",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1187,
      "AGENT BUSINESS NAME": "ERICUS PLACE ",
      "AGENT USERNAME": "ERP40501",
      "ADDRESS": "Unnumbered shop at Dompim",
      "Location": "5",
      "GPS COORDINATES": "5.12’11.1'N  2.03’31.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1188,
      "AGENT BUSINESS NAME": "SABAOTHWYSE VENTURES ",
      "AGENT USERNAME": "SAB01401",
      "ADDRESS": "ACCRA RING ROAD ",
      "Location": "CLOSE TO MTN OFFICE ",
      "GPS COORDINATES": "5.571338,-0.210190",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1189,
      "AGENT BUSINESS NAME": "BDUL-RAUF IDDRISU ENTERPRISE",
      "AGENT USERNAME": "ARI02801",
      "ADDRESS": "UNNUMBERED SHOP AT SANTOE",
      "Location": "NEAR PEACE TECH SOLUTIONS",
      "GPS COORDINATES": "5.7077290,-0.0772720",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1190,
      "AGENT BUSINESS NAME": "PDT COVENANT ENTERPRISE",
      "AGENT USERNAME": "PCE02801",
      "ADDRESS": "UNN HOUSE AT SHAI HILLS GREEN STONE",
      "Location": "NEAR DORIQEN ENTERPRISE",
      "GPS COORDINATES": "5.8175970,-0.0241660",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1191,
      "AGENT BUSINESS NAME": "KALOS POIMEN ENTERPRISE ",
      "AGENT USERNAME": "SAB01401",
      "ADDRESS": "KOKOMLEMLE",
      "Location": "NEAR PALOMA HOTEL",
      "GPS COORDINATES": "5.573228,-0.206165",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1192,
      "AGENT BUSINESS NAME": "ASOMDWE RENE VENTURES",
      "AGENT USERNAME": "ARV00501",
      "ADDRESS": "NORTH KANESHIE",
      "Location": "NEAR PICCADELI BISCUITS ",
      "GPS COORDINATES": "5.5789010, -0.2275540",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1193,
      "AGENT BUSINESS NAME": "JMK SOLUTIONS-HUB",
      "AGENT USERNAME": "JSH02801",
      "ADDRESS": "UNNUMBERED HOUSE AT GBETSILE SANCO",
      "Location": "NEAR THE BAPTIST CHURCH",
      "GPS COORDINATES": "5.7643930,-0.0350500",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1194,
      "AGENT BUSINESS NAME": "DANBLESS  ENTERPRISE ",
      "AGENT USERNAME": "DENSUB30201",
      "ADDRESS": "CAPECOAST ",
      "Location": "BECKY KAY RESTAURANT ",
      "GPS COORDINATES": "5°07'15.5'N1°16'05.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1195,
      "AGENT BUSINESS NAME": "K.PEE MERCHANT AND ENGINEERING GHANA LIMITED ",
      "AGENT USERNAME": "KME01401",
      "ADDRESS": "ASYLUM DOWN ",
      "Location": "BEHIND GOIL FILLING STATION ",
      "GPS COORDINATES": "5.570925,-0.206205",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1196,
      "AGENT BUSINESS NAME": "ASOMDWE  RENE VENTURES",
      "AGENT USERNAME": "ARV00501",
      "ADDRESS": "NORTH KANESHIE",
      "Location": "NEAR PICCADELI BISCUITS",
      "GPS COORDINATES": "5.5789010, -0.2275540",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1197,
      "AGENT BUSINESS NAME": "ROUTE MARKETING CONSULT ",
      "AGENT USERNAME": "RMCSUBP4601",
      "ADDRESS": "KANESHIE ",
      "Location": "BUILDING WITTH HALLEL SCHOOL COMPLEX",
      "GPS COORDINATES": "5.5673875, -0.2352344",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1198,
      "AGENT BUSINESS NAME": "TAPHA FATAYI VENTURES ",
      "AGENT USERNAME": "TFV03201",
      "ADDRESS": "ZONGO JUCTION ",
      "Location": "NEAR BABA LASHI STORE ",
      "GPS COORDINATES": "5.5546625, -0.2377969",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1199,
      "AGENT BUSINESS NAME": "MAKKIKOUR",
      "AGENT USERNAME": "MAK00201",
      "ADDRESS": "SPINTEX ",
      "Location": "OFF SHELL SIGNBOARD TRAFFIC LIGHT",
      "GPS COORDINATES": "5'37'10.7'N 0'0.6'3.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1200,
      "AGENT BUSINESS NAME": "EBENEZER OBOSU VENTURE ",
      "AGENT USERNAME": "EOVSUB02701",
      "ADDRESS": "SPINTEX SHELL ",
      "Location": "NEAR BOTTLES PUB ",
      "GPS COORDINATES": "5'38'10.3'N 0'0.6'23.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1201,
      "AGENT BUSINESS NAME": "ALL IS WELL PALACE TRADING ",
      "AGENT USERNAME": "AWP04901",
      "ADDRESS": "NUNGUA COCO BEACH ",
      "Location": "NEAR SANGO BEACH",
      "GPS COORDINATES": "5'35'05.9'N 0'05'25.0'N",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1202,
      "AGENT BUSINESS NAME": "KOKYCASH ENTERPRISE ",
      "AGENT USERNAME": "KEN70401",
      "ADDRESS": "UNNUMBERED HOUSE AT SUNYANI ",
      "Location": "OPPOSITE ECOBANK ",
      "GPS COORDINATES": "7.20'08.4'N2.19'38.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1203,
      "AGENT BUSINESS NAME": "ROBSIKOB ENTERPRISE ",
      "AGENT USERNAME": "ROB30201",
      "ADDRESS": "CAPECOAST ADISADEL ",
      "Location": "ADISADEL ESTATE - OKYESEO NYAME STORE",
      "GPS COORDINATES": "5°06'52.2'N1°15'59.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1204,
      "AGENT BUSINESS NAME": "PAULKAN TRAVEL ANG AND BUSINESS SERVICES",
      "AGENT USERNAME": "PTT60801",
      "ADDRESS": "KWADASO ",
      "Location": "OPPOSITE  HILL CHAPEL",
      "GPS COORDINATES": "6°41'39.0'N 1°39'21.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1205,
      "AGENT BUSINESS NAME": "WNR70101",
      "AGENT USERNAME": "WHY NOT REWINDING  ELECTRICAL  AND MOBILE MONEY ENTERPRISE ",
      "ADDRESS": "N208",
      "Location": "Adjacent  GCB",
      "GPS COORDINATES": "6.53'40.8'N2.33'22.O'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1206,
      "AGENT BUSINESS NAME": "Paulkan Travel ANG And Business Service",
      "AGENT USERNAME": "PTT60801",
      "ADDRESS": "Kwadaso",
      "Location": "Opposite  Hill Chapel",
      "GPS COORDINATES": "6°41'39.0'N 1°39'21.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1207,
      "AGENT BUSINESS NAME": "THOMAS KAKRABA ENTERPRISE ",
      "AGENT USERNAME": "TKA70101",
      "ADDRESS": "UNNUMBERED  SHOP AT MIM",
      "Location": "CLOSE TO BARNAHENE STOREY BUILDING ",
      "GPS COORDINATES": "6.54'17.0'N2.3343.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1208,
      "AGENT BUSINESS NAME": "Ponyman Ventures ",
      "AGENT USERNAME": "PON60801",
      "ADDRESS": "Kwadaso",
      "Location": "Inside Onion Market",
      "GPS COORDINATES": "6°41'50.0'N 1°39'10.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1209,
      "AGENT BUSINESS NAME": "MARKUS ENTERPRISE ",
      "AGENT USERNAME": "MPV70401",
      "ADDRESS": "UNNUMBERED  SHOP AT DUAYAW NKWATA",
      "Location": "CLOSE TO DUAYAW Nkwamta",
      "GPS COORDINATES": "7.062089,-2.035476",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1210,
      "AGENT BUSINESS NAME": "LUCKY FRANCOM ENT",
      "AGENT USERNAME": "LRE20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT NKAWKAW BARRIER",
      "Location": "ADJACENT KENOP HOSPITAL ",
      "GPS COORDINATES": "6°32'01.3' N 0°45'08.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1211,
      "AGENT BUSINESS NAME": "BERNER CONNER VENTURES ",
      "AGENT USERNAME": "BCV20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT FODOA",
      "Location": "NEAR LORRY STATION ",
      "GPS COORDINATES": "6°36'00.2' N 0°53'38.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1212,
      "AGENT BUSINESS NAME": "UR MAJESTY ENTERPRISE ",
      "AGENT USERNAME": "UME60801",
      "ADDRESS": "OBUASI",
      "Location": "WAWASI HIGH STREET ",
      "GPS COORDINATES": "6°11'56.2'N 1°39'14.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1213,
      "AGENT BUSINESS NAME": "ADOFO PHILIP VENTURES ",
      "AGENT USERNAME": "APV20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT KWAHU PRASO",
      "Location": "NEAR FUNERAL GROUNDS",
      "GPS COORDINATES": "6°37'32.8' N 0°54'55.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1214,
      "AGENT BUSINESS NAME": "YAWUKWAY ROYAL ENTERPRISE ",
      "AGENT USERNAME": "YRE60801",
      "ADDRESS": "OBUASI ",
      "Location": "KUNKA JUNCTION MARKET",
      "GPS COORDINATES": "6°12'50.4'N 1°41'25.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1215,
      "AGENT BUSINESS NAME": "BMIC ONE ENTERPRISE ",
      "AGENT USERNAME": "BOE60501",
      "ADDRESS": " OBUASI",
      "Location": "OPPOSITE  PUMA ENERGY, KUNKA JUNCTION",
      "GPS COORDINATES": "6°12'48.4'N 1°41'19.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1216,
      "AGENT BUSINESS NAME": "J D ENTERPRISE ",
      "AGENT USERNAME": "JDE60801",
      "ADDRESS": "OBUASI",
      "Location": "NEAR KUNKA JUNCTION ",
      "GPS COORDINATES": "6°12'48.1'N 1°41'18.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1217,
      "AGENT BUSINESS NAME": "FRANCONUEL ENTERPRISE ",
      "AGENT USERNAME": "FEN60501",
      "ADDRESS": "OBUASI",
      "Location": "NEAR DUNKWA JUNCTION ",
      "GPS COORDINATES": "6°12'41.8'N 1°41'21.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1218,
      "AGENT BUSINESS NAME": "Money3 Mart Ventures",
      "AGENT USERNAME": "MMV60501",
      "ADDRESS": "OBUASI BONGOBIRI",
      "Location": "NEAR the club",
      "GPS COORDINATES": "6°12'28.2'N 1°41'01.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1219,
      "AGENT BUSINESS NAME": "YB MICRO CREDIT ENTERPRISE ",
      "AGENT USERNAME": "YMC60801",
      "ADDRESS": "OBUASI",
      "Location": "NEAR MUNICIPAL JUNCTION ",
      "GPS COORDINATES": "6°12'21.5'N 1°40'54.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1220,
      "AGENT BUSINESS NAME": "DEDICATED SHEPHERD ENTERPRISE ",
      "AGENT USERNAME": "DSE60801",
      "ADDRESS": "OBUASI MARKET ",
      "Location": "NEAR ADANSI RURAL BANK ",
      "GPS COORDINATES": "6°12'08.6'N 1°40'00.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1221,
      "AGENT BUSINESS NAME": "MOH-FUBAH INVESTMENT ",
      "AGENT USERNAME": "MFI20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT NKAWKAW AKUAJOO",
      "Location": "NEAR SALVATION ARMY SCHOOL",
      "GPS COORDINATES": "6°32'50.5' N 0°45'22.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1222,
      "AGENT BUSINESS NAME": "FE PRINTING AND INTERNET SERVICES ",
      "AGENT USERNAME": "FPI20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT NKAWKAW HOTEL JUNCTION",
      "Location": "NEAR FIRE SERVICE",
      "GPS COORDINATES": "6°33'24.5' N 0°46'37.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1223,
      "AGENT BUSINESS NAME": "VIDA ASAMOAH ENT",
      "AGENT USERNAME": "VAE20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT NKAWKAW HOTEL JUNCTION ",
      "Location": "INFRONT OF IRS NEW COMPLEX ",
      "GPS COORDINATES": "6°33'23.6' N 0°46'38.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1224,
      "AGENT BUSINESS NAME": "Viral marketing lead",
      "AGENT USERNAME": "VML03301",
      "ADDRESS": "Unnumbered house at Tema comm 5",
      "Location": "Near comm 5 station",
      "GPS COORDINATES": "5°38'32.3'N 0°01'07.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1225,
      "AGENT BUSINESS NAME": "My kids pride ",
      "AGENT USERNAME": "MKP05001",
      "ADDRESS": "Unnumbered house at Tema comm 2",
      "Location": "Opposite gcb Tema comm 2",
      "GPS COORDINATES": "5°37'58.3'N 0°00'48.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1226,
      "AGENT BUSINESS NAME": "Never be the same ",
      "AGENT USERNAME": "NBTSUB05001",
      "ADDRESS": "Unnumbered house at Kpone barrier",
      "Location": "Near bell Aqua ",
      "GPS COORDINATES": "5°42'57.2'N 0°00'52.2'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1227,
      "AGENT BUSINESS NAME": "Invest wide trading enterprise ",
      "AGENT USERNAME": "ITE05001",
      "ADDRESS": "Unnumbered house at Tema comm 1",
      "Location": "Near unn building ",
      "GPS COORDINATES": "5°38'34.4'N 0°00'13.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1228,
      "AGENT BUSINESS NAME": "Darl twums enterprise ",
      "AGENT USERNAME": "DTE05001",
      "ADDRESS": "Unnumbered house at Tema comm 1",
      "Location": "Opposite standard chartered",
      "GPS COORDINATES": "5°38'48.8'N 0°00'04.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1229,
      "AGENT BUSINESS NAME": "ISHNAN VENTURES ",
      "AGENT USERNAME": "ISV02001",
      "ADDRESS": "Unnumbered shop at teshie",
      "Location": "Near Church of Christ",
      "GPS COORDINATES": "(5.6074800, -0.1207000)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1230,
      "AGENT BUSINESS NAME": "ACHEAMPOMAA PORTIA ENTERPRISE ",
      "AGENT USERNAME": "APE70201",
      "ADDRESS": "D 12 BEREKUM MAGAZINE",
      "Location": "OPPOSITE SAWMILL",
      "GPS COORDINATES": "7. 26' 40. 8' N 2. 35' 13. 0' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1231,
      "AGENT BUSINESS NAME": "Dashen Kay ventures ",
      "AGENT USERNAME": "DKV00101",
      "ADDRESS": "Unnumbered shop at elwak military barracks",
      "Location": "Near el wak stadium ",
      "GPS COORDINATES": "(5.5850625, -0.1731875)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1232,
      "AGENT BUSINESS NAME": "PRISCA ENTERPRISE",
      "AGENT USERNAME": "PEN 30101.00",
      "ADDRESS": "HOUSE NO.AK 35 ASSIN AKOFOUM",
      "Location": "NEAR AKOFOUM D/A SCHOOL",
      "GPS COORDINATES": "CS-2111-4630",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1233,
      "AGENT BUSINESS NAME": "NARTLIN MONEY LENDING",
      "AGENT USERNAME": "NML30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR FINEST PUP AND RESTAURANT",
      "GPS COORDINATES": "CR-0014-5740",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1234,
      "AGENT BUSINESS NAME": "EBENKB PRIME ENTERPRISE",
      "AGENT USERNAME": "EBESUB30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR  O' YES OBIRI YEBOAH SCHOOL",
      "GPS COORDINATES": "CR-0014-9203",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1235,
      "AGENT BUSINESS NAME": "How far God has brought me ",
      "AGENT USERNAME": "HFGSUB04806",
      "ADDRESS": "Unnumbered shop at la apapa",
      "Location": "Near Apapa supermarket ",
      "GPS COORDINATES": "5.567405,-0.163718",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1236,
      "AGENT BUSINESS NAME": "KKA WADIE VENTURES",
      "AGENT USERNAME": "KWV30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR DABOASE TWIFO PRASO MAIN ROAD",
      "GPS COORDINATES": "CR-0008-1515",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1237,
      "AGENT BUSINESS NAME": "Royale Assets",
      "AGENT USERNAME": "RAC04801",
      "ADDRESS": "Unnumbered shop at Dansoman",
      "Location": "Near Methodist university ",
      "GPS COORDINATES": "(5.5661990, -0.2571000)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1238,
      "AGENT BUSINESS NAME": "EWURADZE TIE ME SUFRE VENTURES ",
      "AGENT USERNAME": "ETM40601",
      "ADDRESS": "NTANKOFUL ",
      "Location": "NEAR THE CHURCH OF PENTECOST ",
      "GPS COORDINATES": "4.9440270,-1.7655530",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1239,
      "AGENT BUSINESS NAME": "HEDICT LINKS ",
      "AGENT USERNAME": "HELSUB40501",
      "ADDRESS": "Unnumbered shop at Tarkwa ",
      "Location": "Inside Goldfields Ghana Limited",
      "GPS COORDINATES": "5.19’11.1'N  1.59’22.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1240,
      "AGENT BUSINESS NAME": "BMU40501",
      "AGENT USERNAME": "Blessed Mary Ultimate Ventures ",
      "ADDRESS": "Unnumbered shop at Teberebe, Tarkwa ",
      "Location": "Near the community center ",
      "GPS COORDINATES": "5.16’05.0'N  2.01’39.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1241,
      "AGENT BUSINESS NAME": "DUYO RICHARD ENT",
      "AGENT USERNAME": "DRESUB20101",
      "ADDRESS": "STORE NUMBER 004, NKAWKAW NUSTA",
      "Location": "NEAR EVERYDAY WATER JUNCTION ",
      "GPS COORDINATES": "6°34'15.9' N 0°46'49.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1242,
      "AGENT BUSINESS NAME": "Position is not Property Enterprise ",
      "AGENT USERNAME": "PNP40501",
      "ADDRESS": "Unnumbered shop at Tarkwa Mile 8",
      "Location": "Near the Roundabout ",
      "GPS COORDINATES": "5.16’47.0'N  2.03’11.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1243,
      "AGENT BUSINESS NAME": "SHEIFFAMAA ENT",
      "AGENT USERNAME": "SHESUB20106",
      "ADDRESS": "UNNUMBERED STORE AT NKAWKAW ABEPOTIA",
      "Location": "AFTER THE OVERHEAD BRIDGE, NKAWKAW ABEPOTIA",
      "GPS COORDINATES": "6°32'32.2' N 0°47'26.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1244,
      "AGENT BUSINESS NAME": "EIPROSA ENTERPRISE ",
      "AGENT USERNAME": "EPI70101",
      "ADDRESS": "Ad 45 sunyani",
      "Location": "OPPOSITE MARKET ",
      "GPS COORDINATES": "7. 20' 03. 7' N 2. 19' 09. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1245,
      "AGENT BUSINESS NAME": "PETER PLUS ",
      "AGENT USERNAME": "PPE04501",
      "ADDRESS": "ASHONGMAN",
      "Location": "NEAR PRESBY CHURCH JUNCTION",
      "GPS COORDINATES": "5.681970,-0.236623",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1246,
      "AGENT BUSINESS NAME": "SAFREMUUN ENTERPRISE",
      "AGENT USERNAME": "SFE03101",
      "ADDRESS": "KOKOMLEMLE",
      "Location": "OPPOSITE JOY FM",
      "GPS COORDINATES": "5.576930,-0.214095",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1247,
      "AGENT BUSINESS NAME": "SGR JASEMAA ENTERPRISE ",
      "AGENT USERNAME": "SJV01401",
      "ADDRESS": "ASYLUM DOWN ",
      "Location": "OPPOSITE AMPEX HOTEL",
      "GPS COORDINATES": "5.569626,-0.204905",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1248,
      "AGENT BUSINESS NAME": "DAVJEI BOANEGRES ENT",
      "AGENT USERNAME": "DBE20101",
      "ADDRESS": "UNNUMBERED AT NKAWKAW UNITY GARDENS ",
      "Location": "NEAR MUINCIPAL ASSEMBLY JUNCTION",
      "GPS COORDINATES": "6°33'04.0' N 0°45'59.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1249,
      "AGENT BUSINESS NAME": "LAF -G ENTERPRISE",
      "AGENT USERNAME": "LGE03101",
      "ADDRESS": "KOKOMLEMLE",
      "Location": "NEAR JOY FM",
      "GPS COORDINATES": "5.577501,0.214793",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1250,
      "AGENT BUSINESS NAME": "LEXXIS SYSTEMS ",
      "AGENT USERNAME": "LES00301",
      "ADDRESS": "ASYLUM DOWN ",
      "Location": "NEAR ASYLUM DOWN ROUND ABOUT ",
      "GPS COORDINATES": "5.569672,-0.204918",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1251,
      "AGENT BUSINESS NAME": "SIM AND TOP UP",
      "AGENT USERNAME": "STP03101",
      "ADDRESS": "KOKOMLEMLE",
      "Location": "NEAR CHINA CLINIC",
      "GPS COORDINATES": "5.578027,-0.215727",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1252,
      "AGENT BUSINESS NAME": "EASY ACCESS SUSU SERVICES ",
      "AGENT USERNAME": "EAS02401",
      "ADDRESS": "ADABRAKA ",
      "Location": "OPPOSITE TRANS AFRICAN COLLEGE ",
      "GPS COORDINATES": "5.567191,-0.212521",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1253,
      "AGENT BUSINESS NAME": "BABS-TECH SOLUTIONS BUSINESSES ",
      "AGENT USERNAME": "BSB01401",
      "ADDRESS": "CIRCLE ",
      "Location": "BEHIND CALBANK",
      "GPS COORDINATES": "5.566950,-0.214082",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1254,
      "AGENT BUSINESS NAME": "MONOTHEIST GODDEY ENTERPRISE ",
      "AGENT USERNAME": "MGDSUB80101",
      "ADDRESS": "E EXTENSION 66 CHANGLI",
      "Location": "BEHIND NIB BANK",
      "GPS COORDINATES": "NT-000-8332",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1255,
      "AGENT BUSINESS NAME": "BERTLINE VENTURES ",
      "AGENT USERNAME": "BEVSUB03501",
      "ADDRESS": "TUDU",
      "Location": "NEAR STANBIC BANK ",
      "GPS COORDINATES": "5.550832,-0.206404",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1256,
      "AGENT BUSINESS NAME": "Tresore ventures ",
      "AGENT USERNAME": "TVE00101",
      "ADDRESS": "Unnumbered shop at Teshie Agblezaa",
      "Location": "Near noble junction ",
      "GPS COORDINATES": "(5.6122170, -0.1236560)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1257,
      "AGENT BUSINESS NAME": "DOVE BAAH VENTURES ",
      "AGENT USERNAME": "DBV03501",
      "ADDRESS": "TUDU",
      "Location": "INSIDE AFLAO STATION ",
      "GPS COORDINATES": "5.5550115,-0.206560",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1258,
      "AGENT BUSINESS NAME": "DOM-WEPIA ENTERPRISE ",
      "AGENT USERNAME": "DWESUB40101",
      "ADDRESS": "UNNUMBERED CONTAINER AT TTI, TAKORADI ",
      "Location": "NEAR TOTAL FILLING STATION",
      "GPS COORDINATES": "4°55'08.4 'N°46'04.2 'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1259,
      "AGENT BUSINESS NAME": "DOM-WEPIA ENTERPRISE ",
      "AGENT USERNAME": "DWESUB40102",
      "ADDRESS": "UNNUMBERED CONTAINER AT TTI GATE",
      "Location": "OPPOSITE GOD IS LOVE CHOP BAR",
      "GPS COORDINATES": "4°55'02.3 'N 1° 46' 07.2 'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1260,
      "AGENT BUSINESS NAME": "IK BEDIAKO ENTERPRISE ",
      "AGENT USERNAME": "IKBSUB03501",
      "ADDRESS": "TUDU",
      "Location": "OPPOSITE TUDU POLICE STATION ",
      "GPS COORDINATES": "5.550011,-0.209384",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1261,
      "AGENT BUSINESS NAME": "HAZARD 10 VENTURES",
      "AGENT USERNAME": "HVESUB40101",
      "ADDRESS": "A SHOP AT COLINS STREET,TAKORADI ",
      "Location": "NEAR ANNA NEWMAN COLD STORE",
      "GPS COORDINATES": "4°54'00.0 ' N 1° 45'00.0' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1262,
      "AGENT BUSINESS NAME": "THE INGENIOUS CENTRE",
      "AGENT USERNAME": "TIC40101",
      "ADDRESS": "UNNUMBERED PLOT AT RACE COURSE,TAKORADI ",
      "Location": "NEAR SHELL FILLING STATION",
      "GPS COORDINATES": "4°54'53. 8 'N 1°47'37.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1263,
      "AGENT BUSINESS NAME": "KOSASEM VENTURES ",
      "AGENT USERNAME": "KVE40301",
      "ADDRESS": "A CONTAINER AT KWEIKUMA JUNCTION, SEKONDI",
      "Location": "CLOSE TO KWEIKUMA HIGH COURT",
      "GPS COORDINATES": "4°55'57. 6'N 1° 44'19.8 'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1264,
      "AGENT BUSINESS NAME": "NYAME ADOM ARAKWA ENTERPRISE ",
      "AGENT USERNAME": "NAE40301",
      "ADDRESS": "UNNUMBERED PLOT AT SEKCO JUNCTION,INCHABAN-SEKONDI",
      "Location": "OPPOSITE SEKCO JUNCTION",
      "GPS COORDINATES": "4°59' 05.0 'N 1°41'24.7 'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1265,
      "AGENT BUSINESS NAME": "T. T MAKARIOS ENTERPRISE ",
      "AGENT USERNAME": "TTM30201",
      "ADDRESS": "ELMINA CP",
      "Location": "WASHING BAY",
      "GPS COORDINATES": "5°05'49.3'N1°19'46.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1266,
      "AGENT BUSINESS NAME": "ELSEI AMOAH VENTURES ",
      "AGENT USERNAME": "EAV20101",
      "ADDRESS": "B23C NEW JEJETI",
      "Location": "NEAR METHODIST SCHOOL",
      "GPS COORDINATES": "6°28'22.1' N 0°38'42.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1267,
      "AGENT BUSINESS NAME": "ROCK BRIDGE VENTURES ",
      "AGENT USERNAME": "RBV40301",
      "ADDRESS": "H/NO. 47,AMANFUL, TAKORADI",
      "Location": "NEAR ABAATAN DRUG STORE",
      "GPS COORDINATES": "4°54' 06.6' N 1° 45'46 .6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1268,
      "AGENT BUSINESS NAME": "GAPHIL VENTURES ",
      "AGENT USERNAME": "GVESUB40101",
      "ADDRESS": "UNNUMBERED SHOP AT HALF ASSINI",
      "Location": "CLOSE TO THE HOSPITAL ",
      "GPS COORDINATES": "5°02'57.8'N 2° 52'41.3 ' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1269,
      "AGENT BUSINESS NAME": "RUTHFOSUA VENTURES ",
      "AGENT USERNAME": "RVE20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT KWAHU PRASO",
      "Location": "NEAR KINDOM HALL",
      "GPS COORDINATES": "6°37'28.8' N 0°54'52.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1270,
      "AGENT BUSINESS NAME": "GAPHIL VENTURES ",
      "AGENT USERNAME": "GVESUB40102",
      "ADDRESS": "UNNUMBERED SHOP AT HALF ASSINI",
      "Location": "OPPOSITE GCB BANK",
      "GPS COORDINATES": "5°03'07.6 ' N2°53' 04. 0' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1271,
      "AGENT BUSINESS NAME": "OKUANIPA AGRICULTURAL INPUTS",
      "AGENT USERNAME": "OAI40101",
      "ADDRESS": "AN OFFICE AT AXIM",
      "Location": "OPPOSITE CHURCH OF PENTECOST",
      "GPS COORDINATES": "4°51 '47. 8 ' N 2°14 '20.8 ' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1272,
      "AGENT BUSINESS NAME": "PHAGIES VENTURES ",
      "AGENT USERNAME": "PHVSUB40101",
      "ADDRESS": "A SHOP AT EFFIAKUMA NO.1,TAKORADI",
      "Location": "NEAR THE PRESBY CHURCH",
      "GPS COORDINATES": "4°55'30. 7' N 1°45' 45' 48.3 'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1273,
      "AGENT BUSINESS NAME": "KING BUKARI VENTURES ",
      "AGENT USERNAME": "KBV40301",
      "ADDRESS": "UNNUMBERED STORE AT AXIM",
      "Location": "NEAR FIRST OF ALL SUPERMARKET",
      "GPS COORDINATES": "4°52'08. 4'N 2° 14' 31.6 'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1274,
      "AGENT BUSINESS NAME": "JOSEY-ERZENRANE VENTURES ",
      "AGENT USERNAME": "JEV40101",
      "ADDRESS": "UNNUMBERED CONTAINER AT ABEN BOBOM,RACE COURSE,TAKORADI ",
      "Location": "CLOSE TO ZEN FILLING STATION ",
      "GPS COORDINATES": "4°54 '47.0' N1° 47'37'37. 5 'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1275,
      "AGENT BUSINESS NAME": "MARKEV RESOURCE SUSU",
      "AGENT USERNAME": "MRS20101",
      "ADDRESS": "APPOLO BUILDING NKAWKAW ",
      "Location": "NEAR AGBOLOSHIE MARKET",
      "GPS COORDINATES": "6°33'00.5' N 0°46'03.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1276,
      "AGENT BUSINESS NAME": "BLAZIN FIRE VENTURES ",
      "AGENT USERNAME": "BFV40101",
      "ADDRESS": "UNNUMBERED SHOP AT KANSAWORODO,TAKORADI ",
      "Location": "AT KWANSAWORODO JUNCTION ",
      "GPS COORDINATES": "4°57'04.3 'N 1° 45' 39.9 'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1277,
      "AGENT BUSINESS NAME": "RICHLAND DESMOND ENT",
      "AGENT USERNAME": "RDE20101",
      "ADDRESS": "STORE NUMBER OD F87 BEGORO ODUMASE",
      "Location": "NEAR APAA JUNCTION ",
      "GPS COORDINATES": "6°23'21.0' N 0°22'41.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1278,
      "AGENT BUSINESS NAME": "CHARLES BILLS ENTERPRISE ",
      "AGENT USERNAME": "CBE40301",
      "ADDRESS": "UNNUMBERED STORE AT AXIM",
      "Location": "NEAR VICTORIA PARK/ NEAR GCB BANK",
      "GPS COORDINATES": "4°52 '07.0 .' N 2° 14'36.5 'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1279,
      "AGENT BUSINESS NAME": "FAZASE MOBILE SERVICES",
      "AGENT USERNAME": "FAM12301",
      "ADDRESS": "SHUKURA ",
      "Location": "NEAR BANKU JUNCTION ",
      "GPS COORDINATES": "5.5525790, -0.2502870",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1280,
      "AGENT BUSINESS NAME": "SAIQUA UNIQUE VENTURES ",
      "AGENT USERNAME": "SUV12301",
      "ADDRESS": "CHOKOR ",
      "Location": "BESIDE MOSQUE ",
      "GPS COORDINATES": "5.5284880, -0.2416210",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1281,
      "AGENT BUSINESS NAME": "MEDDY'S UNIQUE VENTURES ",
      "AGENT USERNAME": "MUV12301",
      "ADDRESS": "SOKO",
      "Location": "NEAR THE  CHURCH OF PENTECOST",
      "GPS COORDINATES": "5.5451060, -0.2474520",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1282,
      "AGENT BUSINESS NAME": "SERICK ENTERPRISE",
      "AGENT USERNAME": "SENSUB50102",
      "ADDRESS": "DABALA",
      "Location": "NEAR DABALA POLICE STATION",
      "GPS COORDINATES": "5.9823206,0.06737201",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1283,
      "AGENT BUSINESS NAME": "I4CODE SOLUTION LTD",
      "AGENT USERNAME": "iCSSUB20101",
      "ADDRESS": "STORE NUMBER M14 ANYINAM",
      "Location": "ADJACENT LORRY STATION ",
      "GPS COORDINATES": "6°22'50.9' N 0°32'55.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1284,
      "AGENT BUSINESS NAME": "PROFMAXY ENT",
      "AGENT USERNAME": "PRE20101",
      "ADDRESS": "UNNUMBERED STORE AT OBO KWAHU",
      "Location": "NEAR OBO PRESBY SCHOOL",
      "GPS COORDINATES": "6°36'08.8' N 0°47'00.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1285,
      "AGENT BUSINESS NAME": "PAGE ONE TELECOM",
      "AGENT USERNAME": "POT02201",
      "ADDRESS": "UNNUMBERED SHOP AT DOME ",
      "Location": "NEAR THE RAILWAYS TAXI RANK ",
      "GPS COORDINATES": "5.6479902,-0.2385537",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1286,
      "AGENT BUSINESS NAME": "BEYOND E TRANSACT  ",
      "AGENT USERNAME": "BET03101",
      "ADDRESS": "UNNUMBERED SHOP AT POKUASE ",
      "Location": "NEAR CBG BANK",
      "GPS COORDINATES": "5.6835457,-0.2789161",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1287,
      "AGENT BUSINESS NAME": "CIM90101",
      "AGENT USERNAME": "CCMI ENTERPRISE",
      "ADDRESS": "UNNUMBERED CONTAINER ZORBISI",
      "Location": "URA RADIO",
      "GPS COORDINATES": "10°48'08.8'N 0°51'51.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1288,
      "AGENT BUSINESS NAME": "ALL IS WELL PALACE TRADING ",
      "AGENT USERNAME": "AWP04901",
      "ADDRESS": "NUNGUA ",
      "Location": "CLOSE TO COCO BEACH ",
      "GPS COORDINATES": "5'35'08.9'N0'05'25.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1289,
      "AGENT BUSINESS NAME": "EMMA KOFI GEE ENT",
      "AGENT USERNAME": "EKG04901",
      "ADDRESS": "NUNGUA ",
      "Location": "BEHIND ADB BANK/ NUNGUA MARKET",
      "GPS COORDINATES": "5.599780,-0.0794110",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1290,
      "AGENT BUSINESS NAME": "AMOS LAST HOUR VENTURES ",
      "AGENT USERNAME": "AHV02701",
      "ADDRESS": "NUNGUA ",
      "Location": "OPPOSITE ITALIAN PUB",
      "GPS COORDINATES": "5.6066170,-0.0778612",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1291,
      "AGENT BUSINESS NAME": "KING TEIKO COMM. AND BUSINESS CENTRE ",
      "AGENT USERNAME": "KTCSUB04902",
      "ADDRESS": "TESHIE CENTURY ROAD",
      "Location": "OPPOSITE CHURCH OF PENTECOST DK ANNOH MEMORIAL TEMPLE ",
      "GPS COORDINATES": "5.597599,-0.1020521",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1292,
      "AGENT BUSINESS NAME": "KING TEIKO COMM AND BUSINESS CENTRE ",
      "AGENT USERNAME": "KTCSUB04901",
      "ADDRESS": "TESHIE CENTURY ",
      "Location": "NEAR EV OIL FEULING STATION ",
      "GPS COORDINATES": "5'35'58.2'N0'06'11.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1293,
      "AGENT BUSINESS NAME": "ALEXMAY MYANE ENTERPRISE ",
      "AGENT USERNAME": "AME02701",
      "ADDRESS": "SAKUMONO JUNCTION ",
      "Location": "OPPOSITE ESTATE JUNCTION BUS STOP",
      "GPS COORDINATES": "5.623707,-0.069513",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1294,
      "AGENT BUSINESS NAME": "PHILIP SENANU ENT",
      "AGENT USERNAME": "PSE02701",
      "ADDRESS": "LASHIBI ",
      "Location": "OPPOSITE VIVIAN FARMS BUS STOP",
      "GPS COORDINATES": "5,630235,-0.066298",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1295,
      "AGENT BUSINESS NAME": "AUGUJOAN VENTURES ",
      "AGENT USERNAME": "AVE02701",
      "ADDRESS": "NUNGUA LEISURE ",
      "Location": "5 METRES FROM ST. AUGUSTINE ANGLICAN CHURCH",
      "GPS COORDINATES": "5.601698,-0.084569",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1296,
      "AGENT BUSINESS NAME": "EBENEZER MARKWEI VENTURES ",
      "AGENT USERNAME": "EMV02701",
      "ADDRESS": "TESHIE MENSAH SARBAH ",
      "Location": "NEAR MENSAH SARBAH SCHOOL ",
      "GPS COORDINATES": "5.596971,-0.108657",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1297,
      "AGENT BUSINESS NAME": "TAGPADU ENTERPRISE ",
      "AGENT USERNAME": "TEN02701",
      "ADDRESS": "AGEGE",
      "Location": "OPPOSITE AGEGE CEMETERY ",
      "GPS COORDINATES": "5.56801,-0.02562",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1298,
      "AGENT BUSINESS NAME": "GODSVYEW VENTURES ",
      "AGENT USERNAME": "GOVSUB01201",
      "ADDRESS": "TESHIE",
      "Location": "CLOSE TO 31ST DWM SCHOOL",
      "GPS COORDINATES": "5.586580,-0.115809",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1299,
      "AGENT BUSINESS NAME": "GODSVYEW VENTURES ",
      "AGENT USERNAME": "GOVSUB02702",
      "ADDRESS": "TESHIE ",
      "Location": "BEHIND KALVARY SCHOOL",
      "GPS COORDINATES": "5.594192,-0.127902",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1300,
      "AGENT BUSINESS NAME": "MAXWELL PHONES AND ACCESSORIES ",
      "AGENT USERNAME": "MPA04901",
      "ADDRESS": "NUNGUA",
      "Location": "NEAR KINGSWAY",
      "GPS COORDINATES": "5.594692,-0.077061",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1301,
      "AGENT BUSINESS NAME": "BELALOVE VENTURES ",
      "AGENT USERNAME": "BLV02701",
      "ADDRESS": "NUNGUA ",
      "Location": "NEAR ITALIAN PUB ",
      "GPS COORDINATES": "5.612087,-0.079075",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1302,
      "AGENT BUSINESS NAME": "THE TRUSTED LEGACY ",
      "AGENT USERNAME": "TTL04901",
      "ADDRESS": "TESHIE ",
      "Location": "NEAR ANNE-MARIE SCHOOL ",
      "GPS COORDINATES": "5.594923,-0.0128492",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1303,
      "AGENT BUSINESS NAME": "EMATESANT ENTERPPRISE ",
      "AGENT USERNAME": "EME04901",
      "ADDRESS": "TESHIE GONNO SCHOOL ",
      "Location": "NEAR LEKMA 11&12",
      "GPS COORDINATES": "5.591431,-0,107971",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1304,
      "AGENT BUSINESS NAME": "J E AHLICO TRADING ENT ",
      "AGENT USERNAME": "JAT04901",
      "ADDRESS": "NUNGUA - NAUTICAL ",
      "Location": "OPPOSITE AM HOSPITAL ",
      "GPS COORDINATES": "5.602607,-0.062790",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1305,
      "AGENT BUSINESS NAME": "SHEIFAMAA ENT",
      "AGENT USERNAME": "SHESUB20103",
      "ADDRESS": "ADAMU STORES NKAWKAW CENTRAL ",
      "Location": "BEHIND MULTI CREDIT",
      "GPS COORDINATES": "6°33'03.3' N 0°45'57.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1306,
      "AGENT BUSINESS NAME": "BAGYINA-BA VENTURES ",
      "AGENT USERNAME": "BBV40501",
      "ADDRESS": "Unnumbered shop at Nzema Lane, Tarkwa ",
      "Location": "Opposite Menzgold Building ",
      "GPS COORDINATES": "5.18’16.6'N  1.59’26.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1307,
      "AGENT BUSINESS NAME": "SW Logistics and Distribution ",
      "AGENT USERNAME": "SLA01201",
      "ADDRESS": "Unnumbered Shop Inside Max Mart, A & C Mall, East Legon",
      "Location": "Inside Max Mart.",
      "GPS COORDINATES": "5.6416633 - 0.1520205",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1308,
      "AGENT BUSINESS NAME": "Adipa Royal Ent",
      "AGENT USERNAME": "ARE01801",
      "ADDRESS": "Adenta Shopping Centre ",
      "Location": "Close to Fire Service Station ",
      "GPS COORDINATES": "5.704914 - 0.148403",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1309,
      "AGENT BUSINESS NAME": "AHMEDBINBAZZ ENTERPRISE ",
      "AGENT USERNAME": "AHE60701",
      "ADDRESS": "ABOABO",
      "Location": "NEAR ABOABO MOSQUE",
      "GPS COORDINATES": "6°41'48.9'N 1°35'47.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1310,
      "AGENT BUSINESS NAME": "Debbyash Ventures",
      "AGENT USERNAME": "DEV01801",
      "ADDRESS": "Unnumbered Shop Adenta Washing Bay",
      "Location": "Close to Fidelity Bank / Philipos ",
      "GPS COORDINATES": "5.713949 - 0.167470",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1311,
      "AGENT BUSINESS NAME": "St Johnson Commerce Point ",
      "AGENT USERNAME": "Sjcsub04701",
      "ADDRESS": "Unnumbered Shop Adenta Barrier ",
      "Location": "Same Compound with KFC",
      "GPS COORDINATES": "5.7060149 - 0.1708205",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1312,
      "AGENT BUSINESS NAME": "Zen Premiere Services ",
      "AGENT USERNAME": "ZPS01901",
      "ADDRESS": "Numbered Shop Madina ",
      "Location": "Close to the Post office ",
      "GPS COORDINATES": "5.6774552 - 0.1822403",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1313,
      "AGENT BUSINESS NAME": "ADEBAYO ENTERPRISE ",
      "AGENT USERNAME": "ABB60101",
      "ADDRESS": "ABOABO",
      "Location": "NEAR NPP OFFICE ABOABO",
      "GPS COORDINATES": "6°41'50.6'N 1°35'45.6'N",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1314,
      "AGENT BUSINESS NAME": "QUICK SUSU SERVICES",
      "AGENT USERNAME": "QSS70301",
      "ADDRESS": "KWAME DANSO -BONO EAST",
      "Location": "INSIDE KWAME DANSO CENTRAL MARKET",
      "GPS COORDINATES": "TS-00000-1037",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1315,
      "AGENT BUSINESS NAME": "ABONTULA GHANA LIMITED ",
      "AGENT USERNAME": "ABG09001",
      "ADDRESS": "CATHEDRAL WA",
      "Location": "CLOSE TO ST ANDREW'S CATHEDRAL ",
      "GPS COORDINATES": "10°03'43.9' N 2°30'01.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1316,
      "AGENT BUSINESS NAME": "BUG DREAMS VENTURES",
      "AGENT USERNAME": "BDV70301",
      "ADDRESS": "KINTAMPO, BONO EAST",
      "Location": "OPPOSITE ABOSOMAKOTERE CREDIT UNION",
      "GPS COORDINATES": "8.048097,-1.728869",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1317,
      "AGENT BUSINESS NAME": "UMAR DEMI VENTURES",
      "AGENT USERNAME": "UDV70301",
      "ADDRESS": "YEJI MARKET CENTER,BONO EAST",
      "Location": "NEAR YEJI CETRAL MARKET",
      "GPS COORDINATES": "8.228460,-0.650426",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1318,
      "AGENT BUSINESS NAME": "STILL THINK TWICE VENTURES",
      "AGENT USERNAME": "STT70301",
      "ADDRESS": "TECHIMAN ZONGO, BONO EAST",
      "Location": "NEAR ZONGO TRAFIC LIGHT",
      "GPS COORDINATES": "7.587676, -1.1939051",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1319,
      "AGENT BUSINESS NAME": "ABDUL-RAZY ENTERPRISE",
      "AGENT USERNAME": "ARE70301",
      "ADDRESS": "TECHIMAN MAMPRUSI LINE, BONO EAST",
      "Location": "NEAR GYARKO MARKET TRAFIC LIGHT",
      "GPS COORDINATES": "7.588259,-1.941506",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1320,
      "AGENT BUSINESS NAME": "4K FAN VENTURES",
      "AGENT USERNAME": "4FV05101",
      "ADDRESS": "UNNUMBERED SHOP AT TETEGU ",
      "Location": "NEAR THE MOSQUE, TETEGU ",
      "GPS COORDINATES": "5.5495974, -0.3116938",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1321,
      "AGENT BUSINESS NAME": "Dannyflex Ventures",
      "AGENT USERNAME": "DFVSUB20301",
      "ADDRESS": "Onoka, Nsawam",
      "Location": "Near Onoka Durbar g",
      "GPS COORDINATES": "5.811956, -0.401811",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1322,
      "AGENT BUSINESS NAME": "ASIEDU F.VENTURES",
      "AGENT USERNAME": "AFVSUB70301",
      "ADDRESS": "TECHIMAN, BONO EAST",
      "Location": "NEAR MAMPRUSI LINE JUNCTION",
      "GPS COORDINATES": "7.589192, -1.941729",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1323,
      "AGENT BUSINESS NAME": "ASIEDU F. VENTURES",
      "AGENT USERNAME": "AFVSUB70301",
      "ADDRESS": "TECHIMAN,BONO EAST ",
      "Location": "ADJACENT MAMPRUSI LINE TECHIMAN",
      "GPS COORDINATES": "7.589262,-1.941776",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1324,
      "AGENT BUSINESS NAME": "Dannyflex Ventures",
      "AGENT USERNAME": "DFVSUB20302",
      "ADDRESS": "Along the Juaso- Nsawam road, Onoka, Nsawam",
      "Location": "Near Maame Attaa eatery",
      "GPS COORDINATES": "5.812402, -0.401813",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1325,
      "AGENT BUSINESS NAME": "E-Phyical Ent",
      "AGENT USERNAME": "EPE01801",
      "ADDRESS": "Unnumbered Shop Sasaabi, Adenta-Dodowa Road",
      "Location": "Near Bakhita Hospitality ",
      "GPS COORDINATES": "5.833207 - 0.117442",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1326,
      "AGENT BUSINESS NAME": "Icliq Ent",
      "AGENT USERNAME": "ICE03401",
      "ADDRESS": "Numbered Shop Ashaley Botwe Old town.",
      "Location": "Near Ebenezer Congregation Presbyterian Church ",
      "GPS COORDINATES": "5.6801320, -0.1345210",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1327,
      "AGENT BUSINESS NAME": "GERSHPEA FAVOURED ENTERPRISE",
      "AGENT USERNAME": "GFE19101",
      "ADDRESS": "NSU 001 LORRY STATION, KRACHI",
      "Location": "INSIDE MAIN LORRY STATION",
      "GPS COORDINATES": "0.054215,7.7977110",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1328,
      "AGENT BUSINESS NAME": "SURO NYAME enterprise ",
      "AGENT USERNAME": "SNG00101",
      "ADDRESS": "Unnumbered shop at labadi mami",
      "Location": "Near Olympia bus stop ",
      "GPS COORDINATES": "(5.5576799, -0.1576382)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1329,
      "AGENT BUSINESS NAME": "Wise Rut Ventures",
      "AGENT USERNAME": "WRV19102",
      "ADDRESS": "Old Town,Dambai",
      "Location": "Near GCB BANK PLC",
      "GPS COORDINATES": "0.1783050, 8.0692930",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1330,
      "AGENT BUSINESS NAME": "Willie Aleenor  Enterprise",
      "AGENT USERNAME": "WAESUB20301",
      "ADDRESS": "In front of Adeiso main station, Adeiso",
      "Location": "In front of Adeiso station",
      "GPS COORDINATES": "5.794656, -0.486639",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1331,
      "AGENT BUSINESS NAME": "TEKPE-DEVINE GRACE VENTURES ",
      "AGENT USERNAME": "TDG03801",
      "ADDRESS": "LAPAZ ",
      "Location": "LAS PALMAS ",
      "GPS COORDINATES": "5.609480,-0.249066",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1332,
      "AGENT BUSINESS NAME": "REBOOTH VENTURES ",
      "AGENT USERNAME": "NRV70201",
      "ADDRESS": "D 45 WAMFIE",
      "Location": "ADJACENT PRESBY SCHOOL ",
      "GPS COORDINATES": "7. 17' 57. 7' N 2. 41' 59. 2' w",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1333,
      "AGENT BUSINESS NAME": "GRADEK VENTURES LIMITED ",
      "AGENT USERNAME": "GRV03801",
      "ADDRESS": "ABEKA ",
      "Location": "JACOB SCHOOL ",
      "GPS COORDINATES": "5.604603,-0.244948",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1334,
      "AGENT BUSINESS NAME": "Melaf Money Lending. Enterprise",
      "AGENT USERNAME": "MML50101",
      "ADDRESS": "Station Junction, Krachi",
      "Location": "Hospital Street Krachi",
      "GPS COORDINATES": "7.797511,-0.052753",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1335,
      "AGENT BUSINESS NAME": "TIXDAT VENTURES ",
      "AGENT USERNAME": "TRV03801",
      "ADDRESS": "SCORPION ",
      "Location": "ABEKA MOTORWAYS",
      "GPS COORDINATES": "5.615783,-0.259713",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1336,
      "AGENT BUSINESS NAME": "CHRIST IS ALL ANNEX ",
      "AGENT USERNAME": "CIA70201",
      "ADDRESS": "D 90 WAMFIE",
      "Location": "OPPOSITE presby SCHOOL ",
      "GPS COORDINATES": "7. 17' 57. 7' N 2 41' 59. 2 ' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1337,
      "AGENT BUSINESS NAME": "IMANKAT INVESTMENT ",
      "AGENT USERNAME": "IMI03801",
      "ADDRESS": "TABORA",
      "Location": "SHELL FILLING STATION ",
      "GPS COORDINATES": "5.606257,-0259750",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1338,
      "AGENT BUSINESS NAME": "KINGGI ENTERPRISE ",
      "AGENT USERNAME": "KGE70201",
      "ADDRESS": "D 12 ASUOTIANO",
      "Location": "OPPOSITE PRESBY CHURCH ",
      "GPS COORDINATES": "7. 16' 58. 5' N 2. 41' 57. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1339,
      "AGENT BUSINESS NAME": "MOSBEC ENTERPRISE ",
      "AGENT USERNAME": "MOS03801",
      "ADDRESS": "FADAMA ",
      "Location": "CPC CHURCH ",
      "GPS COORDINATES": "5.600406,-0.259750",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1340,
      "AGENT BUSINESS NAME": "HOLSPID COMPANY LIMITED ",
      "AGENT USERNAME": "HCL05101",
      "ADDRESS": "UNNUMBERED HOUSE AT TETEGU ",
      "Location": "NEAR REDEEMER SCHOOL ",
      "GPS COORDINATES": "5.5507370,-0.3096044",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1341,
      "AGENT BUSINESS NAME": "MAH FUZ AMIN ENTERPRISE ",
      "AGENT USERNAME": "MFA61101",
      "ADDRESS": "ASAWASI",
      "Location": "NEAR AKWATIA LINE MOSQUE",
      "GPS COORDINATES": "6°41'50.6'N 1°35'45.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1342,
      "AGENT BUSINESS NAME": "KASLAC ENTERPRISE ",
      "AGENT USERNAME": "KAE60101",
      "ADDRESS": "ASAWASI ",
      "Location": "INSIDE ASAWASI MARKET",
      "GPS COORDINATES": "6°41'56.3'N 1°36'31.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1343,
      "AGENT BUSINESS NAME": "J. O NTIRI ENTERPRISE ",
      "AGENT USERNAME": "JONSUB30201",
      "ADDRESS": "KOMENDA ",
      "Location": "KOMENDA SHELL FILLING STATION ",
      "GPS COORDINATES": "5°05'08.6'N1°30'16.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1344,
      "AGENT BUSINESS NAME": "UNCLE ATO'S BUSINESS HOME",
      "AGENT USERNAME": "UAB30201",
      "ADDRESS": "KOMENDA JUNCTION ",
      "Location": "OPPOSITE TAXI RANK",
      "GPS COORDINATES": "5°05'08.5'N1°30'13.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1345,
      "AGENT BUSINESS NAME": "JAHALONE ALONE ELECTROTECH AND TRADING SERVICES ",
      "AGENT USERNAME": "JETSUB30302",
      "ADDRESS": "KOMENDA TOWNSHIP ",
      "Location": "TAX RANK ",
      "GPS COORDINATES": "5°03'07.5'N1°29'34.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1346,
      "AGENT BUSINESS NAME": "JAHALONE ALONE ELECTROTECH AND TRADING SERVICES ",
      "AGENT USERNAME": "JETSUB30302",
      "ADDRESS": "KOMENDA TOWNSHIP ",
      "Location": "OPPOSITE FAN MILK DEPO",
      "GPS COORDINATES": "5°03'12.6'N1°29'38.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1347,
      "AGENT BUSINESS NAME": "TRAFTECH SIGNALS",
      "AGENT USERNAME": "TTS03801",
      "ADDRESS": "HIGH TENSION",
      "Location": "GRAND VIEW HOTEL ",
      "GPS COORDINATES": "5.615983,-0.259713",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1348,
      "AGENT BUSINESS NAME": "UNITYCASH VENTURES ",
      "AGENT USERNAME": "UVE03801",
      "ADDRESS": "LAPAZ ",
      "Location": "ABRANTIE SPOT",
      "GPS COORDINATES": "5.605070,-0.259037",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1349,
      "AGENT BUSINESS NAME": "UNITYCASH VENTURES ",
      "AGENT USERNAME": "UVE02601",
      "ADDRESS": "LAPAZ ",
      "Location": "ABRANTIE SPOT",
      "GPS COORDINATES": "5.605070,-0.251676",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1350,
      "AGENT BUSINESS NAME": "SOLEEMPRESS VENTURES ",
      "AGENT USERNAME": "SOV03801",
      "ADDRESS": "CHANTAN ",
      "Location": "OBAMA CHURCH ",
      "GPS COORDINATES": "5.626090,-0.273505",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1351,
      "AGENT BUSINESS NAME": "PRENET SOLUTIONS ",
      "AGENT USERNAME": "PRS03801",
      "ADDRESS": "SOWUTUOM PENTECOST ",
      "Location": "PENTECOST UNIVERSITY ",
      "GPS COORDINATES": "5.626090,-0.273505",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1352,
      "AGENT BUSINESS NAME": "ROBERTO FARMING AND TRADING ENTERPRISE ",
      "AGENT USERNAME": "RFT40101",
      "ADDRESS": "H/NO.B 30, INSIDE PORT AND RAILWAYS QUARTERS, TAKORADI",
      "Location": "NEAR THE NEW MARKET",
      "GPS COORDINATES": "4°53'52. 1'N1°45'21.9 'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1353,
      "AGENT BUSINESS NAME": "AK FASHION AND PHOTOGRAPHY ",
      "AGENT USERNAME": "AKE12301",
      "ADDRESS": "MAMPROBI ",
      "Location": "NEAR TUESDAY MARKET",
      "GPS COORDINATES": "5.5339625, -0.2322344",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1354,
      "AGENT BUSINESS NAME": "PERFECT RUTHIE BUZINEX",
      "AGENT USERNAME": "PRB40101",
      "ADDRESS": "UNNUMBERED SHOP AT AIYINASE",
      "Location": "OPPOSITE TWYFORD SHOP,NEAR JAH LIVE",
      "GPS COORDINATES": "5°00'01.8 'N 2°30'17.8 'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1355,
      "AGENT BUSINESS NAME": "FASIWORLD ENTERPRISE ",
      "AGENT USERNAME": "FEN12301",
      "ADDRESS": "DANSOMAN",
      "Location": "PREMISES OF DANSOMAN MARKET ",
      "GPS COORDINATES": "5.5417125, -0.2654844",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1356,
      "AGENT BUSINESS NAME": "FREEJOY KAY MULTIMEDIA",
      "AGENT USERNAME": "FKM40101",
      "ADDRESS": "A SHOP AT TAKORADI ",
      "Location": "NEAR AHENFIE HOTEL",
      "GPS COORDINATES": "4°54'00.2 ' N 1° 45'25. 4 ' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1357,
      "AGENT BUSINESS NAME": "GIBSON TOPSTAR VENTURES ",
      "AGENT USERNAME": "GTVSUB30202",
      "ADDRESS": "AYENSODO ",
      "Location": "AYENSODO MARKET ",
      "GPS COORDINATES": "5°05'27.7'N1°26'59.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1358,
      "AGENT BUSINESS NAME": "FOCUS SNIPPLES TECHNOLOGIES",
      "AGENT USERNAME": "FST02801",
      "ADDRESS": "UNNUMBERED SHOP AT ASHAIMAN LEBANON",
      "Location": "NEAR P-SQUARE RESTOURANT",
      "GPS COORDINATES": "5.7475720.-0.0589510",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1359,
      "AGENT BUSINESS NAME": "NAWENCO COMPANY LIMITED",
      "AGENT USERNAME": "NCLSUB02801",
      "ADDRESS": "IBN OF INFANTRY, MICHEL CAMP MARKET",
      "Location": "NEAR MICHEL CAMP MOSQUE",
      "GPS COORDINATES": "5.7316510,-0.0238960",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1360,
      "AGENT BUSINESS NAME": "NAWENCO COMPANY LIMITED",
      "AGENT USERNAME": "NCLSUB02802",
      "ADDRESS": "UNNUMBERED SHOP AT KAKASUNANKA NO 1",
      "Location": "NEAR NO 1 PARK",
      "GPS COORDINATES": "5.7324521,-0.0237430",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1361,
      "AGENT BUSINESS NAME": "NEXAPEX VENTURES",
      "AGENT USERNAME": "NVESUB02801",
      "ADDRESS": "UNNUMBERED SHOP AT ASHAIMAN NEW TOWN",
      "Location": "O0PPOSITE RAPONGE HOTEL",
      "GPS COORDINATES": "5.7058830,-0.0266870",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1362,
      "AGENT BUSINESS NAME": "NEXAPEX VENTURES",
      "AGENT USERNAME": "NVESUB02802",
      "ADDRESS": "UNNUMBERED SHOP AT LEBANON",
      "Location": "NEAR BAMBOO SPOT",
      "GPS COORDINATES": "5.709660,-0.036375",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1363,
      "AGENT BUSINESS NAME": "NEXAPEX VENTURES",
      "AGENT USERNAME": "NVESUB02803",
      "ADDRESS": "UNNUMBERED SHOP AT TEMA COMM 11",
      "Location": "NEAR DATA LINK UNIVERSITY",
      "GPS COORDINATES": "5.6620540,-0.021630",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1364,
      "AGENT BUSINESS NAME": "LIN KUNAMAH VENTURES",
      "AGENT USERNAME": "LKV02801",
      "ADDRESS": "UNNUMBERED SHOP AT OFFICIAL TOWN",
      "Location": "NEAR OFFICIAL TOWN TAXI RANK",
      "GPS COORDINATES": "5.6978770,-0.0248660",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1365,
      "AGENT BUSINESS NAME": "HAPPY RESURRECTION VENTURES ",
      "AGENT USERNAME": "HRV02601",
      "ADDRESS": "NYAMEKYE ",
      "Location": "HISENSE ",
      "GPS COORDINATES": "5.604306,-0.255245",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1366,
      "AGENT BUSINESS NAME": "NSBEN VENTURES ",
      "AGENT USERNAME": "NBV1231",
      "ADDRESS": "PAMBROS",
      "Location": "OPPOSITE EMMANUEL VILLA INTERNATIONAL SCHOOL ",
      "GPS COORDINATES": "5.5184625, -0.2849531",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1367,
      "AGENT BUSINESS NAME": "TBM VENTURES ",
      "AGENT USERNAME": "TVESUB03601",
      "ADDRESS": "DANSOMAN LAST DOWN",
      "Location": "NEAR TAXI RANK ",
      "GPS COORDINATES": "5.5268875, -0.2692656",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1368,
      "AGENT BUSINESS NAME": "GLORIOUS SHADE VENTURES",
      "AGENT USERNAME": "GSV61001",
      "ADDRESS": "WIAMOASE",
      "Location": "WITHIN WIAMOASE STATION",
      "GPS COORDINATES": "7°03'10.4'1°31'19.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1369,
      "AGENT BUSINESS NAME": "Christian journey",
      "AGENT USERNAME": "CJESUB05002",
      "ADDRESS": "Unnumbered house at doyim ",
      "Location": "Near doyim police station ",
      "GPS COORDINATES": "5°55'15.0'N 0°03'06.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1370,
      "AGENT BUSINESS NAME": "Christian journey ",
      "AGENT USERNAME": "CJESUB05003",
      "ADDRESS": "Unnumbered house at Tsopoli ",
      "Location": "Near toll both ",
      "GPS COORDINATES": "5°46'40.2'N 0°38'07.5'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1371,
      "AGENT BUSINESS NAME": "Future M enterprise ",
      "AGENT USERNAME": "FME03301",
      "ADDRESS": "Unnumbered house at Tema comm 1",
      "Location": "Near fidelity bank ",
      "GPS COORDINATES": "5°38'34.4'N 0°00'13.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1372,
      "AGENT BUSINESS NAME": "KMVSUB05001",
      "AGENT USERNAME": "Kasim Mohammed ventures ",
      "ADDRESS": "Unnumbered house at Kpone ",
      "Location": "Near bola filling station ",
      "GPS COORDINATES": "5°41'18.5'N 0°03'35.6'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1373,
      "AGENT BUSINESS NAME": "Safe wallet solutions ",
      "AGENT USERNAME": "SWSSUB04201",
      "ADDRESS": "Unnumbered house at Tema new town ",
      "Location": "Near Newtown station ",
      "GPS COORDINATES": "5°39'27.8'N 0°01'32.9'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1374,
      "AGENT BUSINESS NAME": "LEONYHIRA ENTERPRISE ",
      "AGENT USERNAME": "LNE70201",
      "ADDRESS": "B 12 BEREKUM",
      "Location": "ADJACENT EXCEL FILLING STATION ",
      "GPS COORDINATES": "7. 27' 19. 7' N 2. 35' 34. 8' N",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1375,
      "AGENT BUSINESS NAME": "YF FRANZY 1 VENTURES",
      "AGENT USERNAME": "YFV70101",
      "ADDRESS": "DC 12 CHIRAA",
      "Location": "OPPOSITE SDA PHARMACY ",
      "GPS COORDINATES": "7. 65' 12. 6' N 2. 35' 34. 8' w",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1376,
      "AGENT BUSINESS NAME": "PAUL AMANKWAH ENTERPRISE ",
      "AGENT USERNAME": "PAE70201",
      "ADDRESS": "F 12 FENTENTAA",
      "Location": "Main station ",
      "GPS COORDINATES": "7. 21' 15. 5' N 2. 43' 46. 9' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1377,
      "AGENT BUSINESS NAME": "Nash Teku Ansu VENTURES ",
      "AGENT USERNAME": "NAS70201",
      "ADDRESS": "J 45 JININ",
      "Location": "OPPOSITE MARKET ",
      "GPS COORDINATES": "7. 26' 47. 8 ' N 2. 38. 56' . 6' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1378,
      "AGENT BUSINESS NAME": "OSIKA DON VENTURES ",
      "AGENT USERNAME": "ODV70201",
      "ADDRESS": "D 79 jinijin",
      "Location": "MARKET ",
      "GPS COORDINATES": "7. 25' 49. 8' N 2. 86' 62. 7' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1379,
      "AGENT BUSINESS NAME": "AUTHENTIC 95 VENTURES",
      "AGENT USERNAME": "AUV70201",
      "ADDRESS": "D 65 DROBO",
      "Location": "OPPOSITE MAIN MARKET ",
      "GPS COORDINATES": "7. 34' 59. 5' N 2 . 47' 07. 5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1380,
      "AGENT BUSINESS NAME": "TWENEBOA KODUA VENTURES ",
      "AGENT USERNAME": "IAT70101",
      "ADDRESS": "D 76 DROBO",
      "Location": "OPPOSITE MARKET Deobo ",
      "GPS COORDINATES": "7. 35' 58. 5' N 2 . 47' 08. 6' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1381,
      "AGENT BUSINESS NAME": "Agruigo joe VENTURES ",
      "AGENT USERNAME": "AGA70201",
      "ADDRESS": "D 56 DROBO",
      "Location": "ADJACENT ADOM NO NTI ENTERPRISE ",
      "GPS COORDINATES": "7. 34' 60. 0' N 2. 47' 06. 4' w",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1382,
      "AGENT BUSINESS NAME": "Y. Richard VENTURES ",
      "AGENT USERNAME": "YRV70401",
      "ADDRESS": "4 D DROBO",
      "Location": "ADJACENT Sampa station ",
      "GPS COORDINATES": "7. 33' 02.6' N 2. 49' 06. 4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1383,
      "AGENT BUSINESS NAME": "MURFTY VENTURES ",
      "AGENT USERNAME": "MUR 70201.00",
      "ADDRESS": "S 12 sampa",
      "Location": "OPPOSITE DISTRICT ASSEMBLY ",
      "GPS COORDINATES": "7. 56' 57. 9' N 2. 41' 54. 6' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1384,
      "AGENT BUSINESS NAME": "SIAKA IBRAHIM VENTURES ",
      "AGENT USERNAME": "SIV70501",
      "ADDRESS": "D 30 SAMPA",
      "Location": "OPPOSITE GRA SAMAPA",
      "GPS COORDINATES": "7. 56' 50. 5' N 2. 41' 46. 8' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1385,
      "AGENT BUSINESS NAME": "ADANE SHADRACK VENTURES ",
      "AGENT USERNAME": "ASV70501",
      "ADDRESS": "D 35 Samoa",
      "Location": "OPPOSITE main station ",
      "GPS COORDINATES": "7. 57' 00. 9' N 2 41' 44. 0' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1386,
      "AGENT BUSINESS NAME": "IN HIM I TRUST ENTERPRISE ",
      "AGENT USERNAME": "IHT70501",
      "ADDRESS": "45 SAMPA",
      "Location": "OPPOSITE MAIN STATION ",
      "GPS COORDINATES": "7. 57' 01. 8' N 2. 41' 44. 0' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1387,
      "AGENT BUSINESS NAME": "ADMARO LIMITED ",
      "AGENT USERNAME": "ALI05101",
      "ADDRESS": "UNNUMBERED SHOP AT WEIJA SCC",
      "Location": "NEAR THE DVLA OFFICE ",
      "GPS COORDINATES": "5.5561870,-0.3399013",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1388,
      "AGENT BUSINESS NAME": "YAWEH IS THE ANSWER ",
      "AGENT USERNAME": "YIA04901",
      "ADDRESS": "LASHIBI ",
      "Location": "NEAR CIMA PHARMACY ",
      "GPS COORDINATES": "5.647430,-0.061837",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1389,
      "AGENT BUSINESS NAME": "NIINOYAA ROYAL VENTURES ",
      "AGENT USERNAME": "NRV02701",
      "ADDRESS": "TESHIE ",
      "Location": "OPPOSITE GONNO CLUSTER OF SCHOOLS ",
      "GPS COORDINATES": "5.591053,-0.107854",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1390,
      "AGENT BUSINESS NAME": "MUSAH LARTEY VENTURES ",
      "AGENT USERNAME": "MLV04901",
      "ADDRESS": "TESHIE MANGOASE",
      "Location": "NEAR APOSTOLIC CHURCH",
      "GPS COORDINATES": "5.5805130,-0.1007860",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1391,
      "AGENT BUSINESS NAME": "WITH-JOY TRADING & IT SERVICES ",
      "AGENT USERNAME": "WJTSUB04901",
      "ADDRESS": "NUNGUA ",
      "Location": "CLOSE TO GNAT HALL",
      "GPS COORDINATES": "5.60098,-0.00958",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1392,
      "AGENT BUSINESS NAME": "SIMOEH VENTURES ",
      "AGENT USERNAME": "SVE70401",
      "ADDRESS": "D 67sampa",
      "Location": "OPPOSITE Ghana post",
      "GPS COORDINATES": "7. 56' 57. 7' N 2. 41. 44 5' N",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1393,
      "AGENT BUSINESS NAME": "REVELATION 1:3 LTD",
      "AGENT USERNAME": "RLT05101",
      "ADDRESS": "UNNUMBERED SHOP AT WEIJA SCC",
      "Location": "NEAR DVLA OFFICE",
      "GPS COORDINATES": "5.5569625,-0.3399841",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1394,
      "AGENT BUSINESS NAME": "NURTURE TRUST BUSINESS VENTURES ",
      "AGENT USERNAME": "NTB02701",
      "ADDRESS": "NUNGUA ",
      "Location": "NEAR QUEEN JANE ",
      "GPS COORDINATES": "5.6163782,-0.621756",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1395,
      "AGENT BUSINESS NAME": "NORAFLEX VENTURES ",
      "AGENT USERNAME": "NOV04901",
      "ADDRESS": "BANGLADESH ",
      "Location": "BEHIND GUEST INN APOSTOLIC CHURCH",
      "GPS COORDINATES": "5.591053,-0.017854",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1396,
      "AGENT BUSINESS NAME": "KEEP ON THE WATCH INVESTMENT ",
      "AGENT USERNAME": "KOTSUB02701",
      "ADDRESS": "TESHIE ",
      "Location": "FEW DRIVE AWAY FROM SUNRISE SCHOOL ",
      "GPS COORDINATES": "5.597730,-0.120164",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1397,
      "AGENT BUSINESS NAME": "KEEP ON THE WATCH INVESTMENT ",
      "AGENT USERNAME": "KOTSUB02702",
      "ADDRESS": "TESHIE MENSAH SARBAH ",
      "Location": "NEAR MENSAH SARBAH SCHOOL ",
      "GPS COORDINATES": "5.597007,-0.108736",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1398,
      "AGENT BUSINESS NAME": "SUCCESS REIGN ENT",
      "AGENT USERNAME": "SRE02701",
      "ADDRESS": "TESHIE ",
      "Location": "CLOSE TO SAMMY ADJEI PARK",
      "GPS COORDINATES": "5.600001,-0.115594",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1399,
      "AGENT BUSINESS NAME": "TONYMAY VENTURES ",
      "AGENT USERNAME": "TMV02701",
      "ADDRESS": "NUNGUA ",
      "Location": "BEHIND SSNIT OFFICE",
      "GPS COORDINATES": "5.595452,-0.086111",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1400,
      "AGENT BUSINESS NAME": "IKIS UNIQUE VENTURES ",
      "AGENT USERNAME": "IUV02701",
      "ADDRESS": "TESHIE ",
      "Location": "OPPOSITE ICGC HOSSANA TEMPLE",
      "GPS COORDINATES": "5.602612,-0.103932",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1401,
      "AGENT BUSINESS NAME": "GEVEDEN ENTERPRISE ",
      "AGENT USERNAME": "GEVSUB12302",
      "ADDRESS": "NUNGUA ",
      "Location": "CLOSE TO NII SHIPI",
      "GPS COORDINATES": "5.610910,-0.075887",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1402,
      "AGENT BUSINESS NAME": "GEVEDEN ENTERPRISE ",
      "AGENT USERNAME": "GEVSUB12301",
      "ADDRESS": "MAMPROBI ",
      "Location": "CLOSE TO FIVE -FIVE PUB",
      "GPS COORDINATES": "5.610261, -0.075924",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1403,
      "AGENT BUSINESS NAME": "GEVEDEN ENTERPRISE ",
      "AGENT USERNAME": "GEV12301",
      "ADDRESS": "KORLE GONNO",
      "Location": "CLOSE TO 3 FOR 10",
      "GPS COORDINATES": "5'32'49.3'N 0.12'39.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1404,
      "AGENT BUSINESS NAME": "GLOVER KING JAMES VENTURES ",
      "AGENT USERNAME": "GKV70201",
      "ADDRESS": "D 45 SAMPA",
      "Location": "OPPOSITE MARKET sampa",
      "GPS COORDINATES": "7. 56' 56. 6' N 2. 41'35. 6' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1405,
      "AGENT BUSINESS NAME": "BE SUBMISSIVE TO ALMIGHTY ALLAH ",
      "AGENT USERNAME": "BST70201",
      "ADDRESS": "F 56 Sampa",
      "Location": "OPPOSITE MARKET ",
      "GPS COORDINATES": "7. 56' 56. 5' N 2. 41' 32. 4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1406,
      "AGENT BUSINESS NAME": "AD-ROSE VENTURES",
      "AGENT USERNAME": "ARV04501",
      "ADDRESS": "UNNUMBRERED SHOP AT AMASAMAN OBEYEYIE",
      "Location": "NEAR OBEYEYIE TAXI STATION ",
      "GPS COORDINATES": "5.6820598,-0.3365437",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1407,
      "AGENT BUSINESS NAME": "F2PHONES VENTURES",
      "AGENT USERNAME": "FVESUB30301",
      "ADDRESS": "ANOMABO ",
      "Location": "ANOMABO MARKET ",
      "GPS COORDINATES": "5°10'39.1'N1°07'18.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1408,
      "AGENT BUSINESS NAME": "E BARNERS VENTURES",
      "AGENT USERNAME": "EBVSUB04401",
      "ADDRESS": "KASOA OBON ROAD",
      "Location": "NEAR AFAJOY INTERNATIONAL SCHOOL",
      "GPS COORDINATES": "5.555401,-0.436802",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1409,
      "AGENT BUSINESS NAME": "JENNYTEX-LINKS VENTURES",
      "AGENT USERNAME": "JLV04401",
      "ADDRESS": "KASOA NEW MARKET ROAD",
      "Location": "NEAR KASOA OLD MARKET",
      "GPS COORDINATES": "5.536287,-0.425819",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1410,
      "AGENT BUSINESS NAME": "GYESINATO COMPANY LTD",
      "AGENT USERNAME": "GCL04401",
      "ADDRESS": "KASOA OPEIKUMAH",
      "Location": "NEAR GENERATION OF GLORY CHURCH",
      "GPS COORDINATES": "5.558682,-0.457640",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1411,
      "AGENT BUSINESS NAME": "K-ONE BUSINESS ACCOUNTING COMPANY LTD",
      "AGENT USERNAME": "KBASUB04401",
      "ADDRESS": "KASOA NYANYANOR",
      "Location": "NEAR ASSEMBLIES OF GOD CHURCH",
      "GPS COORDINATES": "5.508222,-0.419283",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1412,
      "AGENT BUSINESS NAME": "BORNRICH CLASSIC TRADING ENT",
      "AGENT USERNAME": "BCT04401",
      "ADDRESS": "KASOA WALANTU",
      "Location": "NEAR CITYDIA SHOPING CENTRE",
      "GPS COORDINATES": "5.528098,-0.424443",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1413,
      "AGENT BUSINESS NAME": "DANCEE MEDIA PRODUCTION",
      "AGENT USERNAME": "DMPSUB04401",
      "ADDRESS": "KASOA KOJO OKU",
      "Location": "NEAR PACIFIC FILLING STATION",
      "GPS COORDINATES": "5.518401,-0.495161",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1414,
      "AGENT BUSINESS NAME": "CEDAR JAY GHANA LTD",
      "AGENT USERNAME": "CJGSUB04401",
      "ADDRESS": "KASOA NEW MARKET",
      "Location": "NEAR STAMBIC BANK ",
      "GPS COORDINATES": "5.546676,-0.433705",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1415,
      "AGENT BUSINESS NAME": "EVANS OBOSU ENTERPRISE ",
      "AGENT USERNAME": "EOE30201",
      "ADDRESS": "ANOMABO ",
      "Location": "ANOMABO METHODIST JHS ",
      "GPS COORDINATES": "5°10'34.9'N1°07'17.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1416,
      "AGENT BUSINESS NAME": "SEPHORA GOLDEN BEAUTY STUDIO",
      "AGENT USERNAME": "SGBSUB04401",
      "ADDRESS": "KASOA AKWELEY",
      "Location": "NEAR MTN SERVICE CENTRE",
      "GPS COORDINATES": "5.561503,-0.441989",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1417,
      "AGENT BUSINESS NAME": "CEDAR JAY GHANA LTD",
      "AGENT USERNAME": "CJGSUB04403",
      "ADDRESS": "KASOA  NEW TOWN",
      "Location": "NEAR AMOAKO PRAYER CENTRE",
      "GPS COORDINATES": "5.533000,0.421425",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1418,
      "AGENT BUSINESS NAME": "J.A TREASURE OF PEACE ",
      "AGENT USERNAME": "JAT04401",
      "ADDRESS": "KASOA  KAKRABA",
      "Location": "NEAR GIJ MICRO CREDIT",
      "GPS COORDINATES": "5.505491,-0.4175500",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1419,
      "AGENT BUSINESS NAME": "CEDAR JAY GHANA LTD",
      "AGENT USERNAME": "CJGSUB04402",
      "ADDRESS": "KASOA PAPPASE",
      "Location": "OPPOSITE THE GOIL FILLING STATION",
      "GPS COORDINATES": "5.726843,-0.380961",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1420,
      "AGENT BUSINESS NAME": "A. F AZIZ ENTERPRISE",
      "AGENT USERNAME": "AAE80101",
      "ADDRESS": "NY/95",
      "Location": "CLOSE TO STADIUM ROUDABOUT",
      "GPS COORDINATES": "9` 24'36.0'N0 51'49.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1421,
      "AGENT BUSINESS NAME": "Thousands business line",
      "AGENT USERNAME": "TBL80101",
      "ADDRESS": "NY BLK 5",
      "Location": "OPPOSITE TAMALE SPORST STADIUM",
      "GPS COORDINATES": "9.412102-0.861823",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1422,
      "AGENT BUSINESS NAME": "BUD VENTURES",
      "AGENT USERNAME": "BVEN80102",
      "ADDRESS": "SH/256",
      "Location": "CLOSE  SHALLOT FOOD COMPLEX",
      "GPS COORDINATES": "9* 24'20.5'N0*51'36.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1423,
      "AGENT BUSINESS NAME": "ADINKRA ISAAC ENTERPRISE ",
      "AGENT USERNAME": "AIE70501",
      "ADDRESS": "Box 12 sampa",
      "Location": "OPPOSITE GAZMBO FILLING STATION",
      "GPS COORDINATES": "7. 57' 13.9' N 2. 41' 43. 5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1424,
      "AGENT BUSINESS NAME": "RUHAINA TIYUMBER ENTERPRISE",
      "AGENT USERNAME": "RTE80101",
      "ADDRESS": "I EXT. 6 ABOABO",
      "Location": "OPPOSITE TOTAL FILLING STSTION",
      "GPS COORDINATES": "9.404435-0.846898",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1425,
      "AGENT BUSINESS NAME": "SIR TWIST VENTURES ",
      "AGENT USERNAME": "STV70101",
      "ADDRESS": "11  Sampa",
      "Location": "OPPOSITE CASHEW PARK",
      "GPS COORDINATES": "7. 57' 10. 1' N 2. 41' 22. 2' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1426,
      "AGENT BUSINESS NAME": "GODPA ENTERPRISE ",
      "AGENT USERNAME": "GEN70201",
      "ADDRESS": "3 Sampa",
      "Location": "ADJACENT VRA SAMPA",
      "GPS COORDINATES": "7. 56' 10. 1' N 2. 41' 22. 2' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1427,
      "AGENT BUSINESS NAME": "OKYERE J VENTURES ",
      "AGENT USERNAME": "OJVSUB30301",
      "ADDRESS": "ANOMABO ",
      "Location": "ANOMABO FORT",
      "GPS COORDINATES": "5°10'26.2'N1°07'13.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1428,
      "AGENT BUSINESS NAME": "G. START VENTURES ",
      "AGENT USERNAME": "GSV70201",
      "ADDRESS": "56 SAMPA",
      "Location": "OPPOSITE VRA SAMPA",
      "GPS COORDINATES": "7. 05' 56. 5' N 2. 14' 11. 1'",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1429,
      "AGENT BUSINESS NAME": "yoggu-bia  enterprise",
      "AGENT USERNAME": "YBE80101",
      "ADDRESS": "TH EXT. 89",
      "Location": "CLOSE TO AMBARIYA SCHOOL COMPLEX",
      "GPS COORDINATES": "9.427831,-0.836644",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1430,
      "AGENT BUSINESS NAME": "LEONARD KWADWO OBAH ENTERPRISE ",
      "AGENT USERNAME": "LKE70101",
      "ADDRESS": "D 56 Sampa",
      "Location": "ADJACENT VRA ",
      "GPS COORDINATES": "7. 57' 01. 1' N 2. 90' 45. 2' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1431,
      "AGENT BUSINESS NAME": "PEE BOOSTMA VENTURES",
      "AGENT USERNAME": "PBV70501",
      "ADDRESS": "56 Sampa",
      "Location": "OPPOSITE RUNNERS HOTEL",
      "GPS COORDINATES": "7. 87' 01. 3' N 2. 54' 43. 2 ' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1432,
      "AGENT BUSINESS NAME": "DARASIMI ENTERPRISE",
      "AGENT USERNAME": "DARSUB04401",
      "ADDRESS": "AMANFROM GALELIA",
      "Location": "NEAR GALALIA MARKET",
      "GPS COORDINATES": "5.539751,-0.401258",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1433,
      "AGENT BUSINESS NAME": "D-RHEMA MICRO SUSU",
      "AGENT USERNAME": "DMSSUB05102",
      "ADDRESS": "OFAAKOR KASOA",
      "Location": "NEAR BAWJIASE RURAL BANK",
      "GPS COORDINATES": "5.589853,-0.449434",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1434,
      "AGENT BUSINESS NAME": "SACKCESS DE ONE VENTURES ",
      "AGENT USERNAME": "SDO30201",
      "ADDRESS": "ANOMABO ",
      "Location": "ANOMABO EBENEZER METHODIST CHURCH ",
      "GPS COORDINATES": "5°10'33.9'N1°07'07.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1435,
      "AGENT BUSINESS NAME": "MENS MO ENTERPRISE ",
      "AGENT USERNAME": "MME03801",
      "ADDRESS": "LAPAZ",
      "Location": "PAPAYE",
      "GPS COORDINATES": "5.606474,-0.248436",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1436,
      "AGENT BUSINESS NAME": "LIZIOUS ROYAL VENTURES ",
      "AGENT USERNAME": "LRV03801",
      "ADDRESS": "CHANTAN ",
      "Location": "6 TO 6 TAXI STATION",
      "GPS COORDINATES": "5.620263,-0.255704",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1437,
      "AGENT BUSINESS NAME": "JENNIPRA SERVICES",
      "AGENT USERNAME": "TSE03801",
      "ADDRESS": "LAPAZ ",
      "Location": "TOTAL FILLING STATION ",
      "GPS COORDINATES": "5.606257,-0.247529",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1438,
      "AGENT BUSINESS NAME": "VICTO PLUS VICTORY ENTERPRISE ",
      "AGENT USERNAME": "VPVSUB03802",
      "ADDRESS": "FADAMA ",
      "Location": "IBM FILLING STATION ",
      "GPS COORDINATES": "5.599105,-0.245034",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1439,
      "AGENT BUSINESS NAME": "VIS VENDING VENTURES ",
      "AGENT USERNAME": "VVVSUB02602",
      "ADDRESS": "LAPAZ",
      "Location": "NEAR ABRANTIE ",
      "GPS COORDINATES": "5.604887-,0.252256",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1440,
      "AGENT BUSINESS NAME": "ASEDA VENTURES",
      "AGENT USERNAME": "ASVSUP19101",
      "ADDRESS": "WS/103 KOTOMASE",
      "Location": "NEAR THE POLICE STATION ",
      "GPS COORDINATES": "7.510545,0.376453",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1441,
      "AGENT BUSINESS NAME": "BENITO CLASSIC ENTERPRISE",
      "AGENT USERNAME": "BCE19101",
      "ADDRESS": "TNT/DKS/031B, KPANDO",
      "Location": "BESIDE ADB BANK",
      "GPS COORDINATES": "7.132421, 0.952437",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1442,
      "AGENT BUSINESS NAME": "SANDRA DETAILS VENTURES",
      "AGENT USERNAME": "SDV1901",
      "ADDRESS": "KPE/L/107 KPEME, HOHOE",
      "Location": "OPPOSITE KPEME HIGH SCHOOL",
      "GPS COORDINATES": "7,94210, 0.431092",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1443,
      "AGENT BUSINESS NAME": "PRECIOUS CAPITAL SUSU",
      "AGENT USERNAME": "PCSSUB20101",
      "ADDRESS": "STORE NUMBER  0024 ABETIFI KWAHU",
      "Location": "ABENE RD, NEAR POST OFFICE ",
      "GPS COORDINATES": "6°40'21.6' N 0°45'02.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1444,
      "AGENT BUSINESS NAME": "OPES CAPITAL PLUS",
      "AGENT USERNAME": "OCP20101",
      "ADDRESS": "HNO. NK 189 NKAWKAW ACCRA TOWN",
      "Location": "ADJACENT DISTRICT COURT",
      "GPS COORDINATES": "6°33'01.2' N 0°45'44.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1445,
      "AGENT BUSINESS NAME": "HON. TIYOHIMA ENTERPRISE ",
      "AGENT USERNAME": "HTE80101",
      "ADDRESS": "242281721",
      "Location": "CLOSE TO CHELPANG CHOP BAR",
      "GPS COORDINATES": "9.404206, -0.888074",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1446,
      "AGENT BUSINESS NAME": "TOTAL HOPE ENTERPRISE ",
      "AGENT USERNAME": "TOT80101",
      "ADDRESS": "SH 61",
      "Location": "OPPOSITE SOUL PHARMACY ",
      "GPS COORDINATES": "9.404135, - 0.886838",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1447,
      "AGENT BUSINESS NAME": "NANTER MICAH VENTURES ",
      "AGENT USERNAME": "NVE80101",
      "ADDRESS": "SH/98",
      "Location": "CLOSE TO BISCO MAIN ENTRANCE ",
      "GPS COORDINATES": "9.404126,- 0.879814",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1448,
      "AGENT BUSINESS NAME": "WUNITIRA VENTURES ",
      "AGENT USERNAME": "WUV80101",
      "ADDRESS": "NY BLK 06",
      "Location": "OPPOSITE NYOHINI CHIEF PALACE ",
      "GPS COORDINATES": "9.404251,- 0.865606",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1449,
      "AGENT BUSINESS NAME": "MA HALIK ENTERPRISE ",
      "AGENT USERNAME": "MHE80101",
      "ADDRESS": "NY ExT8",
      "Location": "CLOSE TO NYOHINI NPP OFFICE ",
      "GPS COORDINATES": "9.404066, - 0.860278",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1450,
      "AGENT BUSINESS NAME": "NSHA ALLAH DOTCOM ENTERPRISE ",
      "AGENT USERNAME": "NDE80101",
      "ADDRESS": "SH, 54",
      "Location": "OPPOSITE DIKUNYELALA CHOP BAR",
      "GPS COORDINATES": "9.404170,- 0.857023",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1451,
      "AGENT BUSINESS NAME": "FREE GUY ENTERPRISE ",
      "AGENT USERNAME": "FGESUB80101",
      "ADDRESS": "TS 66",
      "Location": "CLOSE TO ZAA RADIO ",
      "GPS COORDINATES": "9.409221,- 0.842242",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1452,
      "AGENT BUSINESS NAME": "Free Guy enterprise ",
      "AGENT USERNAME": "FGESUB80102",
      "ADDRESS": "TS 22",
      "Location": "CLOSE TO NDC OFFICE,  TISHIGU",
      "GPS COORDINATES": "9.412075,- 0.840011",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1453,
      "AGENT BUSINESS NAME": "KPACHIKOLI ENTERPRISE ",
      "AGENT USERNAME": "KPA80101",
      "ADDRESS": "S EXT 4",
      "Location": "OPPOSITE AFA AJURA MOSQUE ",
      "GPS COORDINATES": "9.413806, - 0.842336",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1454,
      "AGENT BUSINESS NAME": "GEOBENG 99 VENTURES",
      "AGENT USERNAME": "GEV61401",
      "ADDRESS": "KEJETIA",
      "Location": "INSIDE KEJETIA MARKET",
      "GPS COORDINATES": "6°41'57.9'N 1°37'25.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1455,
      "AGENT BUSINESS NAME": "OT ARMSTRONG VENTURES ",
      "AGENT USERNAME": "OAV61401",
      "ADDRESS": "KEJETIA",
      "Location": "INSIDE KEJETIA MARKET",
      "GPS COORDINATES": "6°41'54.3'N 1°37'26.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1456,
      "AGENT BUSINESS NAME": "M S INVESTMENT ",
      "AGENT USERNAME": "MIL60601",
      "ADDRESS": "ADUM PZ",
      "Location": "ADJACENT ULTIMATE FASHION BUILDING",
      "GPS COORDINATES": "6°41'407'N 1°37'23.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1457,
      "AGENT BUSINESS NAME": "KASLAC ENTERPRISE ",
      "AGENT USERNAME": "KAE60101",
      "ADDRESS": "ASAWASI",
      "Location": "NEAR ASAWASI MARKET ",
      "GPS COORDINATES": "6°41'56.3'N 1°36'31.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1458,
      "AGENT BUSINESS NAME": "AL WAHAB BROTHERS",
      "AGENT USERNAME": "AWB60701",
      "ADDRESS": "MANHYIA",
      "Location": "NEAR MANHYIA HOSPITAL",
      "GPS COORDINATES": "6°42'11.6'N 1°36'42.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1459,
      "AGENT BUSINESS NAME": "AMENS POINT VENTURES ",
      "AGENT USERNAME": "APV60101",
      "ADDRESS": "ASAWASI",
      "Location": "NEAR ODOTOBRI RURAL BANK ",
      "GPS COORDINATES": "6°41'53.9'N 1°36'28.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1460,
      "AGENT BUSINESS NAME": "MUAISH PLUS VENTURES",
      "AGENT USERNAME": "MPV60101",
      "ADDRESS": "ABOABO",
      "Location": "NEAR ABOABO SCHOOL PARK",
      "GPS COORDINATES": "6°41'55.8'N 1°35'48.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1461,
      "AGENT BUSINESS NAME": "EMMANUEL KINGDOM NEST VENTURES ",
      "AGENT USERNAME": "EKNSUB40601",
      "ADDRESS": "ANAJI ",
      "Location": "NEAR THE POLICE STATION ",
      "GPS COORDINATES": "4.9374375,-1.7780781",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1462,
      "AGENT BUSINESS NAME": "EMMANUEL KINGDOM NEST VENTURES ",
      "AGENT USERNAME": "EKNSUB40602",
      "ADDRESS": "ANAJI ",
      "Location": "NEAR THE GOIL FILLING STATION ",
      "GPS COORDINATES": "4.9360824,-1.77873125",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1463,
      "AGENT BUSINESS NAME": "BHADOCK COMPANY",
      "AGENT USERNAME": "BCL02501",
      "ADDRESS": "UNNUMBERED SHOP AT OFANKOR ROUND ABOUT ",
      "Location": "OPOSITE OFANKOR ANGLICAN SCHOOL",
      "GPS COORDINATES": "5.6589723,-0.2678955",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1464,
      "AGENT BUSINESS NAME": "BLESSED HAND PRINTING & INVESTMENT ",
      "AGENT USERNAME": "BHP03801",
      "ADDRESS": "UNNUMBERED SHOP AT MALLAM ",
      "Location": "OPPOSITE THE MALLAM MARKET ",
      "GPS COORDINATES": "5.5731173,-0.2802823",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1465,
      "AGENT BUSINESS NAME": "EXIMALL ENTERPRISE ",
      "AGENT USERNAME": "EEN80101",
      "ADDRESS": "NS-099-4478",
      "Location": "NEAR KPALSI CHIEF PALACE",
      "GPS COORDINATES": "NS-099-4478",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1466,
      "AGENT BUSINESS NAME": "ODONGO ENTERPRISE ",
      "AGENT USERNAME": "OEN80101",
      "ADDRESS": "BA424 CHISEL ST",
      "Location": "Close to treasurer friends",
      "GPS COORDINATES": "NS-099–3890",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1467,
      "AGENT BUSINESS NAME": "BESTINIES VENTURES ",
      "AGENT USERNAME": "BTV05101",
      "ADDRESS": "UNNUMBERED SHOP AT WEST HILLS MALL",
      "Location": "NEAR THE BUS STOP ",
      "GPS COORDINATES": "5.5460038,-0.3414180",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1468,
      "AGENT BUSINESS NAME": "PROFONEGH VENTURES",
      "AGENT USERNAME": "PVE70302",
      "ADDRESS": "P.O.BOX 65,TECHIMAN,BONO EAST",
      "Location": "NEAR S.D.A SCHOOL",
      "GPS COORDINATES": "7'35'59.1'N1'56'27/7.5997410,-1.9410370",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1469,
      "AGENT BUSINESS NAME": "LIZMORT VENTURES",
      "AGENT USERNAME": "LVE04501",
      "ADDRESS": "UNNUMBERED SHOP AT DOME ",
      "Location": "NEAR FIDELITY BANK, DOME ",
      "GPS COORDINATES": "5.641576,-0.2416378",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1470,
      "AGENT BUSINESS NAME": "A.MM ENTERPRISE ",
      "AGENT USERNAME": "AME80103",
      "ADDRESS": "NS-051-9677",
      "Location": "Near AFA KURELI JUMA MOSQUE",
      "GPS COORDINATES": "NS-051-9677",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1471,
      "AGENT BUSINESS NAME": "FIRST INTERNET LIMITED ",
      "AGENT USERNAME": "FIL05101",
      "ADDRESS": "UNNUMBERED HOUSE AT SCC WEIJA ",
      "Location": "NEAR THE BUS STOP",
      "GPS COORDINATES": "5.5470879,-0.3387248",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1472,
      "AGENT BUSINESS NAME": "YER DA ENTERPRISE ",
      "AGENT USERNAME": "YDE80101",
      "ADDRESS": "U197 KUMBUGU ST",
      "Location": "Near fulera maternity ",
      "GPS COORDINATES": "NS-028-2259",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1473,
      "AGENT BUSINESS NAME": "Baguma ultimate",
      "AGENT USERNAME": "BUE80102",
      "ADDRESS": "Z34 education ridge",
      "Location": "Close to fulera maternity home",
      "GPS COORDINATES": "NS-028-3651",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1474,
      "AGENT BUSINESS NAME": "Sham enterprise ",
      "AGENT USERNAME": "SHE80101",
      "ADDRESS": "G726 education ridge",
      "Location": "Near Nobisco junction ",
      "GPS COORDINATES": "NS-049-5837",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1475,
      "AGENT BUSINESS NAME": "RAYAD RAY ENT",
      "AGENT USERNAME": "RRE04501",
      "ADDRESS": "UNNUMBERED SHOP AT MEDEA KOTOKU ",
      "Location": "NEAR THE KOTOKU STATION ",
      "GPS COORDINATES": "5.740025,-0.3558215",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1476,
      "AGENT BUSINESS NAME": "BSYSTEM LIMITED",
      "AGENT USERNAME": "BSTSUB00102",
      "ADDRESS": "KEJETIA ",
      "Location": "INSIDE ACHEAMFOUR MARKET",
      "GPS COORDINATES": "6°41'53.7'N 1°37'17.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1477,
      "AGENT BUSINESS NAME": "Jara enterprise ",
      "AGENT USERNAME": "JJE80102",
      "ADDRESS": "28 nobisco",
      "Location": "Near nobisco senior high school ",
      "GPS COORDINATES": "NS-068-0209",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1478,
      "AGENT BUSINESS NAME": "AYEDUASEMAN COOPERATIVE ",
      "AGENT USERNAME": "ACC60101",
      "ADDRESS": "AYEDUASE",
      "Location": "NEAR AYEDUASE  ACCESS BANK",
      "GPS COORDINATES": "6°40'29.7'N 1°33'40.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1479,
      "AGENT BUSINESS NAME": "M.T MART ENTERPRISE ",
      "AGENT USERNAME": "MME61101",
      "ADDRESS": "KOTEI",
      "Location": "NEAR D&D ACADEMY SCHOOL",
      "GPS COORDINATES": "6°39'42.4'N 1°32'54.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1480,
      "AGENT BUSINESS NAME": "SERANGE VENTURES ",
      "AGENT USERNAME": "SRV40501",
      "ADDRESS": "Unnumbered shop at Bibiani ",
      "Location": "Near the roundabout ",
      "GPS COORDINATES": "6.27’52.7'N  2.16’56.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1481,
      "AGENT BUSINESS NAME": "O4O2 TAHIRU VENTURES",
      "AGENT USERNAME": "TVE70301",
      "ADDRESS": "P.O.BOX 28, NKORANZA",
      "Location": "NEAR PRESBY MISSION CHURCH",
      "GPS COORDINATES": "8'32'55.5N1'44'03.2'W/7.5487560,-1.7342210",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1482,
      "AGENT BUSINESS NAME": "Ahlul-Bayt Ventures ",
      "AGENT USERNAME": "ABV40501",
      "ADDRESS": "Unnumbered shop at Bibiani",
      "Location": "Near the roundabout ",
      "GPS COORDINATES": "6.27’52.9'N  2.16’56.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1483,
      "AGENT BUSINESS NAME": "Vison 100 enterprise",
      "AGENT USERNAME": "VEN02901",
      "ADDRESS": "Unnumbered shop at 37",
      "Location": "Near DVLA office ",
      "GPS COORDINATES": "(5.5923990, -0.1799990)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1484,
      "AGENT BUSINESS NAME": "ERIC ASARE 93 VENTURES",
      "AGENT USERNAME": "EAV40501",
      "ADDRESS": "Unnumbered shop at Bibiani ",
      "Location": "Near Upper Amenfi rural bank ",
      "GPS COORDINATES": "6.27’13.3'N  2.18’59.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1485,
      "AGENT BUSINESS NAME": "EDD-RIFF VENTURES ",
      "AGENT USERNAME": "ERV40501",
      "ADDRESS": "Unnumbered shop at ",
      "Location": "Near the market",
      "GPS COORDINATES": "6.27’52.9'N  2.16’56.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1486,
      "AGENT BUSINESS NAME": "NIITECHSCO COMPUTER SERVICE",
      "AGENT USERNAME": "NCS20301",
      "ADDRESS": "Inside Adeiso Station, Adeiso.",
      "Location": "Near Adeiso Market",
      "GPS COORDINATES": "5.794661, -0.486324",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1487,
      "AGENT BUSINESS NAME": "WILLIE ALEENOR ENTERPRISE",
      "AGENT USERNAME": "WAE20302",
      "ADDRESS": "Near Bawjiase Rural Bank, Adeiso.",
      "Location": "Near Bawjiase Rural Bank",
      "GPS COORDINATES": "5.793836, -0.487367",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1488,
      "AGENT BUSINESS NAME": "GODS HANDS MULTIMEDIA",
      "AGENT USERNAME": "GHM03801",
      "ADDRESS": "HNO.89, DOBRO, NSAWAM",
      "Location": "Near Dobro Old station",
      "GPS COORDINATES": "5.7820891, -0.3362012",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1489,
      "AGENT BUSINESS NAME": "IBROAFT VENTURES ",
      "AGENT USERNAME": "IVE40101",
      "ADDRESS": "UNNUMBERED SHOP AT KWESIMINTSIM ",
      "Location": "NEAR ALATA MOSQUE",
      "GPS COORDINATES": "4°54'59. 1'N 1°47'15.8' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1490,
      "AGENT BUSINESS NAME": "SYSTEMS TECHNOLOGY ",
      "AGENT USERNAME": "STE02401",
      "ADDRESS": "CIRCLE ADABRAKA ",
      "Location": "ADJACENT SAMSUNG OFFICE ",
      "GPS COORDINATES": "5.564830,-0.214621",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1491,
      "AGENT BUSINESS NAME": "VIDA BOAKYE YIADOM ENTERPRISE",
      "AGENT USERNAME": "VBY61201",
      "ADDRESS": "Breman New York",
      "Location": "Behind Goil filling station",
      "GPS COORDINATES": "6°44'52.8'N 1°38'22.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1492,
      "AGENT BUSINESS NAME": "CHARJEFF VENTURES",
      "AGENT USERNAME": "CHV01501",
      "ADDRESS": "UNNUMBERED SHOP AT POKUASE ",
      "Location": "NEAR POKUASE TAXI RANK ",
      "GPS COORDINATES": "5.7003,-0.240062",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1493,
      "AGENT BUSINESS NAME": "2J MULTIPURPOSE",
      "AGENT USERNAME": "2JM00701",
      "ADDRESS": "ADABRAKA ",
      "Location": "NEAR ADABRAKA WASHING BAY",
      "GPS COORDINATES": "5.564606,-0.215871",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1494,
      "AGENT BUSINESS NAME": "JONATHAN AWUKUS ENTERPRISE",
      "AGENT USERNAME": "JAE04401",
      "ADDRESS": "KASOA DOMEABRA",
      "Location": "NEAR WORD TRANSFORMATION CHAPEL",
      "GPS COORDINATES": "5.589480,-0.395162",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1495,
      "AGENT BUSINESS NAME": "SULIN TOP ENTERPRISE ",
      "AGENT USERNAME": "STE02401",
      "ADDRESS": "ODORNA",
      "Location": "INSIDE ODORNA FITTING SHOP",
      "GPS COORDINATES": "5.557851,-0.217644",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1496,
      "AGENT BUSINESS NAME": "DORCKY’S TRANSFER SERVICES",
      "AGENT USERNAME": "DTS40501",
      "ADDRESS": "Unnumbered shop at Gaman",
      "Location": "Opposite love Zone bar",
      "GPS COORDINATES": "5.58’45.6'N  1.54’42.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1497,
      "AGENT BUSINESS NAME": "SYSTEMS TECHNOLOGY ",
      "AGENT USERNAME": "SYT02401",
      "ADDRESS": "CIRCLE ADABRAKA ",
      "Location": "ADJACENT SAMSUNG OFFICE ",
      "GPS COORDINATES": "5.564830,-0.214621",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1498,
      "AGENT BUSINESS NAME": "JENKASH VENTURES",
      "AGENT USERNAME": "JVESUB04401",
      "ADDRESS": "KASOA NEW MARKET",
      "Location": "NEAR SPEED DRIVING SCHOOL",
      "GPS COORDINATES": "5.546349,-0.432925",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1499,
      "AGENT BUSINESS NAME": "MORDERNAGE OVERCOMERS ENT",
      "AGENT USERNAME": "MOASUB03805",
      "ADDRESS": "Opposit Goil Fuel Station, Nsawam",
      "Location": "Near Nsawam Police Station",
      "GPS COORDINATES": "5.810267, -0.348826",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1500,
      "AGENT BUSINESS NAME": "SAFANDY VENTURES",
      "AGENT USERNAME": "SVE20301",
      "ADDRESS": "Opposite Dukes Fuel station, Akim Akroso",
      "Location": "Opposit Duke fuel station",
      "GPS COORDINATES": "5.77445, -0.768399",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1501,
      "AGENT BUSINESS NAME": "RC CUDJOE ENTERPRISE ",
      "AGENT USERNAME": "RCC01001",
      "ADDRESS": "OKAISHIE",
      "Location": "NEAR OKASHIE METRO MASS STATION ",
      "GPS COORDINATES": "5.547765,-0.209536",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1502,
      "AGENT BUSINESS NAME": "Danhagar",
      "AGENT USERNAME": "DEN20301",
      "ADDRESS": "HNO. B 8854, Hospital Road, Nsawam",
      "Location": "Near Change Gardens",
      "GPS COORDINATES": "5.810327, -0.345798",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1503,
      "AGENT BUSINESS NAME": "PARTHUR SERVICES ",
      "AGENT USERNAME": "PSESUB01001",
      "ADDRESS": "OKAISHIE ",
      "Location": "NEAR GCB",
      "GPS COORDINATES": "5.547926,-0.207991",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1504,
      "AGENT BUSINESS NAME": "CHRIS AA NHYIRA NYINAA FIR WO ENTERPRISE ",
      "AGENT USERNAME": "CAN40501",
      "ADDRESS": "Unnumbered shop at Wassa Akropong ",
      "Location": "Opposite ST. Mark Hospital ",
      "GPS COORDINATES": "5.47.07.5'N  2.11’25.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1505,
      "AGENT BUSINESS NAME": "BENZZ VENTURES ",
      "AGENT USERNAME": "BEV30201",
      "ADDRESS": "MFANTSIMAN ",
      "Location": "LONDON GH FITNESS",
      "GPS COORDINATES": "5°06'51.2'N1°14'60.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1506,
      "AGENT BUSINESS NAME": "Winkayd Books and Business Services ",
      "AGENT USERNAME": "WBB60801",
      "ADDRESS": "Tanoso",
      "Location": "Close to IPT Junction",
      "GPS COORDINATES": "6°41'43•9'N 1°40'40•2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1507,
      "AGENT BUSINESS NAME": "KWG",
      "AGENT USERNAME": "KWE04901",
      "ADDRESS": "TESHIE ADJORMAN ",
      "Location": "OPPOSITE ADJORMAN ROUNDABOUT ",
      "GPS COORDINATES": "5.610195,-0.106225",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1508,
      "AGENT BUSINESS NAME": "PHILOBLEY ENTERPRISE ",
      "AGENT USERNAME": "PLE60802",
      "ADDRESS": "EDWINASE",
      "Location": "Close to Market",
      "GPS COORDINATES": "6°40'44.2'N 1°39'22.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1509,
      "AGENT BUSINESS NAME": "PADRIT VENTURES ",
      "AGENT USERNAME": "PAD60801",
      "ADDRESS": "Edwinase",
      "Location": "Close to the Market",
      "GPS COORDINATES": "6°40'40•5'N 1°39'25•5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1510,
      "AGENT BUSINESS NAME": "SELINA ASAMOAH VENTURES",
      "AGENT USERNAME": "SAV60801",
      "ADDRESS": "Edwinase",
      "Location": "Close to the market",
      "GPS COORDINATES": "6°40'48.1'N 1°39'21.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1511,
      "AGENT BUSINESS NAME": "Frimsway Enterprise ",
      "AGENT USERNAME": "FRI60801",
      "ADDRESS": "Edwinase",
      "Location": "Close to the supermarket ",
      "GPS COORDINATES": "6°41'02•1'N 1°39'29•1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1512,
      "AGENT BUSINESS NAME": "Onko one red ventures",
      "AGENT USERNAME": "OOR04801",
      "ADDRESS": "Unnumbered shop at prisons barracks ",
      "Location": "Near prison barracks basketball courts ",
      "GPS COORDINATES": "(5.5707280, -0.1789650)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1513,
      "AGENT BUSINESS NAME": "PRINAPLUX",
      "AGENT USERNAME": "PRISUB04401",
      "ADDRESS": "KASOA NEW MARKET",
      "Location": "OLD GN BANK OFFICE",
      "GPS COORDINATES": "5.547854,0.433762",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1514,
      "AGENT BUSINESS NAME": "ESIDJE GHANA LTD",
      "AGENT USERNAME": "EGL04401",
      "ADDRESS": "MILLENIUM CITY",
      "Location": "NEAR GRA OFFICE",
      "GPS COORDINATES": "5.498781,-0.447162",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1515,
      "AGENT BUSINESS NAME": "RICHANS ENTERPRISE",
      "AGENT USERNAME": "RENSUB00502",
      "ADDRESS": "KANESHIE",
      "Location": "NEAR KANESHIE MARKET COMPLEX ",
      "GPS COORDINATES": "5.5700875, -0.2360781",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1516,
      "AGENT BUSINESS NAME": "EMMANUEL A. SKY ENTERPRISE",
      "AGENT USERNAME": "ESESUB04401",
      "ADDRESS": "KASOA OFF TOWN",
      "Location": "KASOA OFF TOWN",
      "GPS COORDINATES": "5.538171,-0.403489",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1517,
      "AGENT BUSINESS NAME": "HAZARD 10 VENTURES",
      "AGENT USERNAME": "HVESUB40103",
      "ADDRESS": "UNNUMBERED SHOP AT KOKOMPE,TAKORADI ",
      "Location": "NEAR QUANSAH MOTORS",
      "GPS COORDINATES": "4°53'15.9'N 1°46'01.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1518,
      "AGENT BUSINESS NAME": "Lego's corner",
      "AGENT USERNAME": "LCVSUB03801",
      "ADDRESS": "NII BOI ",
      "Location": "Nsawam STATION ",
      "GPS COORDINATES": "5.609149,-0.249696",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1519,
      "AGENT BUSINESS NAME": "IBK INVESTMENT LTD",
      "AGENT USERNAME": "IIL04401",
      "ADDRESS": "KASOA AMERICAN JUNCTION",
      "Location": "NEAR ADOM SAVINGS AND LOAN",
      "GPS COORDINATES": "5.530171,-0.424338",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1520,
      "AGENT BUSINESS NAME": "JOSE-AMPADU VENTURES",
      "AGENT USERNAME": "JVE20101",
      "ADDRESS": "HNO A/ 41, AYEBROM, BEHIND A.D.B., SUHUM",
      "Location": "Behoind A.D.B",
      "GPS COORDINATES": "6.038693, -0.449850",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1521,
      "AGENT BUSINESS NAME": "ISAAC BIZ-EXCHANGE ENTERPRISE",
      "AGENT USERNAME": "ISB04401",
      "ADDRESS": "KASOA AUNTIE MERCY ROAD",
      "Location": "OPPOSITE KASOA POST OFFICE",
      "GPS COORDINATES": "5.528381,-0.424380",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1522,
      "AGENT BUSINESS NAME": "KING HAGGAI ENTERPRISE",
      "AGENT USERNAME": "KHESUB19101",
      "ADDRESS": "KW/33 HOHOE",
      "Location": "NEAR THE MAIN STATION",
      "GPS COORDINATES": "7.148595, 0.473034",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1523,
      "AGENT BUSINESS NAME": "Suhum Co-operative Cocoa Farmers And Marketing Union Ltd",
      "AGENT USERNAME": "SCCSUB20306",
      "ADDRESS": "Near South Akim Rural Bank, Suhum.",
      "Location": "Near South Akim Rural Bank",
      "GPS COORDINATES": "6.038109, -0.451975",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1524,
      "AGENT BUSINESS NAME": "BURUJ VENTURES",
      "AGENT USERNAME": "BVE19101",
      "ADDRESS": "ZE/23 HOHOE ZONGO",
      "Location": "OPPOSITE ALINGO PHONES",
      "GPS COORDINATES": "7.156166, 0.477562",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1525,
      "AGENT BUSINESS NAME": "PETERPAUL ENTERPRISE ",
      "AGENT USERNAME": "PET09001",
      "ADDRESS": "FADAMA WA",
      "Location": "CLOSE NEAR RAZMAK PHARMACY ",
      "GPS COORDINATES": "10°03'48.4' N 2°30'27.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1526,
      "AGENT BUSINESS NAME": "EXPRESS MEDIA AND TRADING ",
      "AGENT USERNAME": "EMT09001",
      "ADDRESS": "KONTA WA",
      "Location": "CLOSE TO ST ANDREW'S SCHOOL",
      "GPS COORDINATES": "10°03'03.5' N 2°29'35.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1527,
      "AGENT BUSINESS NAME": "NAGASTI WA ENTERPRISE ",
      "AGENT USERNAME": "NWE09001",
      "ADDRESS": "KAMBALI ",
      "Location": "CLOSE TO WONUO JUNCTION ",
      "GPS COORDINATES": "10°03'25.0' N 2°31'23.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1528,
      "AGENT BUSINESS NAME": "BOGA-RED JATOE ENTERPRISE ",
      "AGENT USERNAME": "BRJ09001",
      "ADDRESS": "SOMBO ",
      "Location": "CLOSE TO GHANA NATIONAL FIRE SERVICE REGIONAL OFFICE ",
      "GPS COORDINATES": "10°03'12.8' N 2°32'09.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1529,
      "AGENT BUSINESS NAME": "TEE QUE TECHNOLOGY ",
      "AGENT USERNAME": "TQT09001",
      "ADDRESS": "DOBILE ",
      "Location": "CLOSE TO THE V. I. P. BUS TERMINAL ",
      "GPS COORDINATES": "10°03'59.8' N 2°30'47.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1530,
      "AGENT BUSINESS NAME": "GIDICELL TECHNOLOGY",
      "AGENT USERNAME": "GIT19101",
      "ADDRESS": "AT/22 ATABU",
      "Location": "BESIDE EP SCHOOL",
      "GPS COORDINATES": "7.160009, 0.477777",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1531,
      "AGENT BUSINESS NAME": "ABONTULA GHANA LIMITED ",
      "AGENT USERNAME": "ABG09001",
      "ADDRESS": "CATHEDRAL WA",
      "Location": "CLOSE TO ST ANDREW'S CATHEDRAL ",
      "GPS COORDINATES": "10°03'43.9' N 2°30'01.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1532,
      "AGENT BUSINESS NAME": "VA SERVICES",
      "AGENT USERNAME": "VAS19101",
      "ADDRESS": "GD/ZONGO, HOHOE",
      "Location": "NEAR ATTC DRIVING SCHOOL",
      "GPS COORDINATES": "7.160840, 0.477605",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1533,
      "AGENT BUSINESS NAME": "GRADUAL GRADUAL INVESTMENT CENTER ",
      "AGENT USERNAME": "GGC09001",
      "ADDRESS": "KALEO ",
      "Location": "CLOSE TO THE NEW KALEO MARKET ",
      "GPS COORDINATES": "10°10'21.1' N 2°32'33.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1534,
      "AGENT BUSINESS NAME": "GAVOR RUBEN ENTERPRISE",
      "AGENT USERNAME": "GRE19101",
      "ADDRESS": "ZZ/W22 ZONGO",
      "Location": "OPPOSITE STAR OIL",
      "GPS COORDINATES": "7.1165204, 0.478291",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1535,
      "AGENT BUSINESS NAME": "DE JAMOBA ENTERPRISE",
      "AGENT USERNAME": "DJESUB19101",
      "ADDRESS": "JK/23B JASIKAN",
      "Location": "NEAR THE STATION ",
      "GPS COORDINATES": "7.406580, 0.465417",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1536,
      "AGENT BUSINESS NAME": "AWUNI BOARE ENTERPRISE ",
      "AGENT USERNAME": "ABE30201",
      "ADDRESS": "ABURA ",
      "Location": "ABURA ROMAN CATHOLIC SCHOOL ",
      "GPS COORDINATES": "5°08'00.8'N1°16'35.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1537,
      "AGENT BUSINESS NAME": "PRESTIGE ENT ",
      "AGENT USERNAME": "PRE80101",
      "ADDRESS": "SA 20",
      "Location": "BEHIND M WAHAB ENTERPRISE ",
      "GPS COORDINATES": "9.404796,- 0.845626",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1538,
      "AGENT BUSINESS NAME": "KAYASCO VENTURES ",
      "AGENT USERNAME": "KVE80102",
      "ADDRESS": "SHY 81",
      "Location": "ADJACENT NAGAMMNI FILLING STATION,  NYOHINI ",
      "GPS COORDINATES": "9.395543, - 0.860052",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1539,
      "AGENT BUSINESS NAME": "DAMDALLA INVESTMENT ",
      "AGENT USERNAME": "DAMSUB80101",
      "ADDRESS": "Ch 33",
      "Location": "OPPOSITE NDC OFFICE,  LAMASHEGU ",
      "GPS COORDINATES": "9.387946, -0.856946",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1540,
      "AGENT BUSINESS NAME": "MONI NAT FAVOUR CENTRE ",
      "AGENT USERNAME": "MFC80101",
      "ADDRESS": "Y 33, LAMASHEGU",
      "Location": "ADJACENT SHELL FILLING STATION ",
      "GPS COORDINATES": "9.386667, - 0.857985",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1541,
      "AGENT BUSINESS NAME": "YANKAZIA BUSINESS HUB ",
      "AGENT USERNAME": "YBHSUB80101",
      "ADDRESS": "SL 56, LAMASHEGU",
      "Location": "CLOSE TO LAMASHEGU ROUNDABOUT ",
      "GPS COORDINATES": "9.38578,- 0.855751",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1542,
      "AGENT BUSINESS NAME": "YANKAZIA BUSINESS HUB ",
      "AGENT USERNAME": "YBHSUB80102",
      "ADDRESS": "SB 77, SABONJIDA",
      "Location": "OPPOSITE YANAA HOUSE ",
      "GPS COORDINATES": "9.398035, - 0.844483",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1543,
      "AGENT BUSINESS NAME": "MIND ALIKE COMPANY LTD ",
      "AGENT USERNAME": "MAC80101",
      "ADDRESS": "I EXT B 7",
      "Location": "OPPOSITE GCB, ABOABO",
      "GPS COORDINATES": "9.404444,- 0.848615",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1544,
      "AGENT BUSINESS NAME": "SANDRA ADUAKO ENTERPRISE",
      "AGENT USERNAME": "SAE61001",
      "ADDRESS": "TAFO",
      "Location": "CLOSER TO ROMAN CATHOLIC CHURCH",
      "GPS COORDINATES": "6°43'47.9'N1°34'38.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1545,
      "AGENT BUSINESS NAME": "EMELIA OPPONG ENTERPRISE",
      "AGENT USERNAME": "EOE61001",
      "ADDRESS": "PANKRONO",
      "Location": "OPPPSITE TRUS VINE HOAPITAL",
      "GPS COORDINATES": "6°43'47.9'N1°34'38.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1546,
      "AGENT BUSINESS NAME": "Praisejoy Enterprise",
      "AGENT USERNAME": "PJESUB61001",
      "ADDRESS": "PANKRONO",
      "Location": "WITHIN PANKRONO MARKET ",
      "GPS COORDINATES": "6°43'47?3'N1°31'14.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1547,
      "AGENT BUSINESS NAME": "Praisejoy Enterprise",
      "AGENT USERNAME": "PJESUB61002",
      "ADDRESS": "Pankrono Estate",
      "Location": "Near Pankrono Estate Trotro Station",
      "GPS COORDINATES": "6°34'30.7N1°47'44.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1548,
      "AGENT BUSINESS NAME": "Absert One Ventures",
      "AGENT USERNAME": "ABV61002",
      "ADDRESS": "Pankrono Estate",
      "Location": "Near SDA Church",
      "GPS COORDINATES": "6°47'44.5'N1°14'30.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1549,
      "AGENT BUSINESS NAME": "B2V61001",
      "AGENT USERNAME": "BENSLYLV 20 ENTERPRISE",
      "ADDRESS": "PANKRONO ESTATE",
      "Location": "NEAR METHODIST CHURCH",
      "GPS COORDINATES": "6°43'44.9'N1°38'34.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1550,
      "AGENT BUSINESS NAME": "Agartha Otchere Darko Enterprise",
      "AGENT USERNAME": "AOD61001",
      "ADDRESS": "PANKRONO",
      "Location": "NEAR OSEI ASSIBEY HOTEL",
      "GPS COORDINATES": "7°46'47.8'N1°20'42.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1551,
      "AGENT BUSINESS NAME": "K-VIC ENTERPRISE",
      "AGENT USERNAME": "KEN61001",
      "ADDRESS": "BUOKROM",
      "Location": "NEAR THE POLICE STATION",
      "GPS COORDINATES": "6°44'34.6'N1°35'35.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1552,
      "AGENT BUSINESS NAME": "I.K SPEEDY ENTERPRISE",
      "AGENT USERNAME": "IKS60301",
      "ADDRESS": "BUOKROM",
      "Location": "Near Washing Bay",
      "GPS COORDINATES": "6°44'42.6'N1'20'16.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1553,
      "AGENT BUSINESS NAME": "P.KWASIBENG ENTERPRISE",
      "AGENT USERNAME": "PKS61001",
      "ADDRESS": "DOTE",
      "Location": "DOTE JUNCTION",
      "GPS COORDINATES": "6°72'99.9'N1'57'73.32'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1554,
      "AGENT BUSINESS NAME": "Green Master Company Limited",
      "AGENT USERNAME": "GMC61201",
      "ADDRESS": "DUASE NEW SITE",
      "Location": "BEHIND ADONKO PUB",
      "GPS COORDINATES": "6°48'44.6'N1°74'98.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1555,
      "AGENT BUSINESS NAME": "JONLY ENTERPRISE",
      "AGENT USERNAME": "JEN60301",
      "ADDRESS": "SEPE",
      "Location": "NEAR AKATE FARMS",
      "GPS COORDINATES": "6°47'09.1'N1°34'15.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1556,
      "AGENT BUSINESS NAME": "Akate Farms and Trading Enterprise",
      "AGENT USERNAME": "AFA 60501.00",
      "ADDRESS": "DOTE",
      "Location": "NEAR DOTE JUNCTION",
      "GPS COORDINATES": "6°34'47.1'N1°34'20.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1557,
      "AGENT BUSINESS NAME": "Wilslove 16 Enterprise",
      "AGENT USERNAME": "W1E61001",
      "ADDRESS": "New Suame",
      "Location": "Near King Faisal School",
      "GPS COORDINATES": "6°40'45.9'N1°15'30.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1558,
      "AGENT BUSINESS NAME": "Vickers 91 Enterprise",
      "AGENT USERNAME": "VEN61001",
      "ADDRESS": "Sepe ",
      "Location": "Within Sepe Magazine",
      "GPS COORDINATES": "6°47.09.1'N1°34'05.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1559,
      "AGENT BUSINESS NAME": "OFFEC FREEHEART ENTERPRISE",
      "AGENT USERNAME": "OFE60701",
      "ADDRESS": "BUOKROM",
      "Location": "OPPOSITE BUOKROM JHS",
      "GPS COORDINATES": "6°43'47.9°N1°34'38.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1560,
      "AGENT BUSINESS NAME": "Augustine Roofing System",
      "AGENT USERNAME": "ARS 61001.00",
      "ADDRESS": "Dlte",
      "Location": "Closer to Dote Washing Bay",
      "GPS COORDINATES": "6°47'09.1'N1°34'15.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1561,
      "AGENT BUSINESS NAME": "NIMO FRIMPONG VENTURES",
      "AGENT USERNAME": "NFV61201",
      "ADDRESS": "TAFO",
      "Location": "NEAR MORO MARKET",
      "GPS COORDINATES": "6°90'40'.1°N1°43'55.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1562,
      "AGENT BUSINESS NAME": "SK MARANATHA VENTURES",
      "AGENT USERNAME": "SMV61001",
      "ADDRESS": "TAFO",
      "Location": "NEAR ONIWAA SCHOOL",
      "GPS COORDINATES": "6°47'06.1'N1°43'51.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1563,
      "AGENT BUSINESS NAME": "Francis Obeng Memorial Ventures",
      "AGENT USERNAME": "FOM61001",
      "ADDRESS": "Magazine",
      "Location": "Near Garages Office",
      "GPS COORDINATES": "6°43'16.0'N1°37'48.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1564,
      "AGENT BUSINESS NAME": "Malick Chamber Enterprise",
      "AGENT USERNAME": "MCH61001",
      "ADDRESS": "New Suame",
      "Location": "Near Roman Catholic Church",
      "GPS COORDINATES": "6°42'50.7'N1°38'08.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1565,
      "AGENT BUSINESS NAME": "Elvis Tawiah Royal Enterprise",
      "AGENT USERNAME": "ETR61001",
      "ADDRESS": "KROFROM",
      "Location": "Near Wisdom Evangelical Church",
      "GPS COORDINATES": "6°42'50.9'N1°37'44.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1566,
      "AGENT BUSINESS NAME": "VASTMURPH VENTURES",
      "AGENT USERNAME": "VEN61002",
      "ADDRESS": "MAMPONTENG",
      "Location": "NEAR MAMPONTENG STATION",
      "GPS COORDINATES": "6°47'09.1'N1'34'15.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1567,
      "AGENT BUSINESS NAME": "Megagroves Enterprise",
      "AGENT USERNAME": "MGE61001",
      "ADDRESS": "AHWIAA",
      "Location": "NEAR AHWIAA MARKET",
      "GPS COORDINATES": "6°44'51.6'N1°36'29.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1568,
      "AGENT BUSINESS NAME": "Pekab De II Enterprise",
      "AGENT USERNAME": "PDESUB61001",
      "ADDRESS": "MAMPONTENG",
      "Location": "OPPOSITE THE FIRE SERVICE",
      "GPS COORDINATES": "6°46'59.4'N1°34'36.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1569,
      "AGENT BUSINESS NAME": "Gofason Ventures",
      "AGENT USERNAME": "GVE61001",
      "ADDRESS": "FAWOADE",
      "Location": "OPPOSITE SIMMS SHS",
      "GPS COORDINATES": "6°45'55.0'N1°35'42.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1570,
      "AGENT BUSINESS NAME": "Via Chrismers Enterprise",
      "AGENT USERNAME": "VCE61001",
      "ADDRESS": "FAWOADE",
      "Location": "OPPOSITE OK ACADEMY",
      "GPS COORDINATES": "6°45'55.0'N1°35'24.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1571,
      "AGENT BUSINESS NAME": "N.ESSEL VENTURES",
      "AGENT USERNAME": "NEV61001",
      "ADDRESS": "MAMPONTENG",
      "Location": "WITHIN THE MARKET CORNMILL CENTRE",
      "GPS COORDINATES": "6°46'59.4'N1°34'36.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1572,
      "AGENT BUSINESS NAME": "R AND B VENTURES ",
      "AGENT USERNAME": "RBV09001",
      "ADDRESS": "BABILE",
      "Location": "CLOSE TO THE POLYCLINIC ",
      "GPS COORDINATES": "10°31'44.8' N 2°50'42.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1573,
      "AGENT BUSINESS NAME": "JIM-LA VENTURES ",
      "AGENT USERNAME": "JLV09001",
      "ADDRESS": "FADAMA",
      "Location": "INSIDE FADAMA MARKET",
      "GPS COORDINATES": "10°03'46.0' N 2°30'28.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1574,
      "AGENT BUSINESS NAME": "QUINSHEF ENTERPRISE ",
      "AGENT USERNAME": "QEN09001",
      "ADDRESS": "MINISTRIES ",
      "Location": "OPPOSITE GHANA POLICE SERVICE REGIONAL OFFICE ",
      "GPS COORDINATES": "10°03'39.7' N 2°29'53.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1575,
      "AGENT BUSINESS NAME": "TINO MULTIMEDIA HUB ",
      "AGENT USERNAME": "TMH09001",
      "ADDRESS": "GWOLLU",
      "Location": "CLOSE TO THE AHLASUNNAH MOSQUE ",
      "GPS COORDINATES": "10°58'39.9' N 2°12'52.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1576,
      "AGENT BUSINESS NAME": "CLIFFORD K. APPIAH ENTERPRISE ",
      "AGENT USERNAME": "CKE05101",
      "ADDRESS": "UNNUMBERED SHOP AT MANHEAN, NEAR SAMA OIL",
      "Location": "NEAR SAMA OIL",
      "GPS COORDINATES": "5.6562010,-0.3397293",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1577,
      "AGENT BUSINESS NAME": "BENEVOLENT LINKS",
      "AGENT USERNAME": "BKI02501",
      "ADDRESS": "UNNUMBERED SHOP AT MANHEAN ",
      "Location": "NEAR SAMA OIL",
      "GPS COORDINATES": "5.6569390,-0.3395781",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1578,
      "AGENT BUSINESS NAME": "JAIVIK ENTERPRISE ",
      "AGENT USERNAME": "JAE02001",
      "ADDRESS": "Unnumbered shop at tse addo ",
      "Location": "Near Zion hut restaurant ",
      "GPS COORDINATES": "(5.5773150, -0.1370220)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1579,
      "AGENT BUSINESS NAME": "SALVATION ARK ENTERPRISE ",
      "AGENT USERNAME": "SAE05101",
      "ADDRESS": "UNNUMBERED SHOP AT MANHEAN ",
      "Location": "NEAR MANHEAN JUNCTION ",
      "GPS COORDINATES": "5.6432621,-0.3446525",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1580,
      "AGENT BUSINESS NAME": "PREMIER DIGITAL",
      "AGENT USERNAME": "PDH02501",
      "ADDRESS": "UNNUMBERED SHOP AT BARRIER ASOFAN ",
      "Location": "NEAR KLAY PHARMACY ",
      "GPS COORDINATES": "5.6589997,-0.2746904",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1581,
      "AGENT BUSINESS NAME": "KAYPHEY ENTERPRISE ",
      "AGENT USERNAME": "KAYSUB03802",
      "ADDRESS": "UNNUMBERED SHOP AT ABLEKUMA ",
      "Location": "NEAR NIC BUS STOP ",
      "GPS COORDINATES": "5.6154439,-0.2953206",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1582,
      "AGENT BUSINESS NAME": "Yabre Enterprise ",
      "AGENT USERNAME": "YEN80103",
      "ADDRESS": "Y40 banana street",
      "Location": "Close to old NDC office",
      "GPS COORDINATES": "NU-0757-8462",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1583,
      "AGENT BUSINESS NAME": "Taba Naa enterprise ",
      "AGENT USERNAME": "TNE80101",
      "ADDRESS": "KT 10 katariga",
      "Location": "Close to first November primary school ",
      "GPS COORDINATES": "9.465574-0.869848",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1584,
      "AGENT BUSINESS NAME": "Rashsuf ventures ",
      "AGENT USERNAME": "YVE80101",
      "ADDRESS": "Plot 9 katariga",
      "Location": "Close to Greg pub ",
      "GPS COORDINATES": "9.465574 -0.869848",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1585,
      "AGENT BUSINESS NAME": "HEPHZIBAH ANALYTICS ",
      "AGENT USERNAME": "HAN40301",
      "ADDRESS": "BEACH ROAD ",
      "Location": "NEAR SAHARA BAR ",
      "GPS COORDINATES": "4.884179,-1.758693",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1586,
      "AGENT BUSINESS NAME": "SAMUEL NANA CATO VENTURES ",
      "AGENT USERNAME": "SNCSUB40601",
      "ADDRESS": "MARKET CIRCLE ",
      "Location": "NEAR BANK OF GHANA ",
      "GPS COORDINATES": "4.895800,-1.756562",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1587,
      "AGENT BUSINESS NAME": "APELEY ONE VENTURES",
      "AGENT USERNAME": "AOV20301",
      "ADDRESS": "HNO E31",
      "Location": "NEAR PRESBY TRAINING COLLEGE",
      "GPS COORDINATES": "5.972184-0.086722",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1588,
      "AGENT BUSINESS NAME": "AKYEM EBENEZER VENTURS",
      "AGENT USERNAME": "AEV20301",
      "ADDRESS": "NA",
      "Location": "OPPOSITE COOPERATIVE STATION",
      "GPS COORDINATES": "6.167560,0.066121",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1589,
      "AGENT BUSINESS NAME": "KOO WILLIE ENTERPRISE",
      "AGENT USERNAME": "KWE20301",
      "ADDRESS": "NA",
      "Location": "OPPOSITE ADWESO MARKET",
      "GPS COORDINATES": "6.069840-0.252877",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1590,
      "AGENT BUSINESS NAME": "EBLIN VENTURES ",
      "AGENT USERNAME": "EBV30201",
      "ADDRESS": "AJUMAKO BESEASE ",
      "Location": "NEAR ROMAN CATHOLIC BASIC SCHOOL ",
      "GPS COORDINATES": "5°27'26.3'N0°58'28.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1591,
      "AGENT BUSINESS NAME": "ADAMSCO THE GREAT VENTURES",
      "AGENT USERNAME": "AGV20301",
      "ADDRESS": "NA",
      "Location": "OPPOSITE SLAUGHTER HOUSE",
      "GPS COORDINATES": "6.100210-0.256344",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1592,
      "AGENT BUSINESS NAME": "ANDEK-PRO  ENTERPRISE",
      "AGENT USERNAME": "APESUB20301",
      "ADDRESS": "HNO M39/11",
      "Location": "BEHIND PENTECOST SHS",
      "GPS COORDINATES": "6.004-0001-223000",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1593,
      "AGENT BUSINESS NAME": "ANDEK-PRO  ENTERPRISE",
      "AGENT USERNAME": "APESUB20302",
      "ADDRESS": "HNO M39/12",
      "Location": "OPPOSITE ST JAMES",
      "GPS COORDINATES": "6.0032-0023-30022",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1594,
      "AGENT BUSINESS NAME": "HASSY EXPRESS VENTURES",
      "AGENT USERNAME": "HEC20301",
      "ADDRESS": "NA",
      "Location": "BEHIND CENTRAL HOSPITAL",
      "GPS COORDINATES": "6.099034-0.257460",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1595,
      "AGENT BUSINESS NAME": "PRIME TOUCH MEDIA",
      "AGENT USERNAME": "PTM03101",
      "ADDRESS": "MILE 7",
      "Location": "CLOSE TO FIRST TIME MARKETING",
      "GPS COORDINATES": "5.622155,-0.244428",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1596,
      "AGENT BUSINESS NAME": "RASTEMOATY VENTURES ",
      "AGENT USERNAME": "RAV70401",
      "ADDRESS": "UNNUMBERED HOUSE AT WAMAHINSO ",
      "Location": "CLOSE TO THE SECOND ROUND ABOUT",
      "GPS COORDINATES": "7.05'14.6'N2.20'29.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1597,
      "AGENT BUSINESS NAME": "JANEDUAH ENTERPRISE",
      "AGENT USERNAME": "JEN02101",
      "ADDRESS": "KOKOMLEMLE",
      "Location": "OPPOSITE ATTC SCHOOL",
      "GPS COORDINATES": "5.573507,-0.208024",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1598,
      "AGENT BUSINESS NAME": "RICHARD SARPONG 2021 VENTURES",
      "AGENT USERNAME": "RSV70401",
      "ADDRESS": "UNNUMBERED SHOP AT GOASO ",
      "Location": "CLOSE TO B.R.C ",
      "GPS COORDINATES": "6.48'24.4'N2.31'06.2",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1599,
      "AGENT BUSINESS NAME": "TOP BERRY ENTERPRISE",
      "AGENT USERNAME": "TBE03101",
      "ADDRESS": "MANHEMAN",
      "Location": "NEAR POLO",
      "GPS COORDINATES": "5.664172,-0.338273",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1600,
      "AGENT BUSINESS NAME": " HAMZMED SUSU VENTURES",
      "AGENT USERNAME": "HSV03101",
      "ADDRESS": "MALLAM ATTAH MARKET",
      "Location": "INSIDE THE MARKET",
      "GPS COORDINATES": "5.5797672,-0.2105212",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1601,
      "AGENT BUSINESS NAME": " PRINCE ANING ENTERPRISE",
      "AGENT USERNAME": "PAE03101",
      "ADDRESS": "KWABENYA",
      "Location": "OPPOSITE ADOM PLAZA",
      "GPS COORDINATES": "5.690614,-0.254265",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1602,
      "AGENT BUSINESS NAME": " MCKLINGH ENTERPRISE",
      "AGENT USERNAME": "MLE70101",
      "ADDRESS": "UNNUMBERED SHOP AT AREA 4",
      "Location": "CLOSE TO VIP BUS TERMINAL ",
      "GPS COORDINATES": "7.19'59.9'N2.19'15.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1603,
      "AGENT BUSINESS NAME": "DIRECT  TRUST MICRO CREDIT ENTERPRISE",
      "AGENT USERNAME": "DTM03101",
      "ADDRESS": "SOMANYA",
      "Location": "OPPOSITE G&J RESTUARNT",
      "GPS COORDINATES": "6.114373,-0.005606",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1604,
      "AGENT BUSINESS NAME": "LEOFIELD MAX ENTERPRISE",
      "AGENT USERNAME": "LME02101",
      "ADDRESS": "NSAWAM",
      "Location": "NSAWAM TROTRO STATION",
      "GPS COORDINATES": "5.6733231,-0.5101403",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1605,
      "AGENT BUSINESS NAME": "ALL DAYS COLLINS EHUREN ",
      "AGENT USERNAME": "ADCSUB30201",
      "ADDRESS": "AJUMAKO STATION ",
      "Location": "TAXI STATION ",
      "GPS COORDINATES": "5°25'41.1'N0°57'30.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1606,
      "AGENT BUSINESS NAME": "ABBA ESTATE SURVEYING AND VALUATION CONSULT",
      "AGENT USERNAME": "AEV03101",
      "ADDRESS": "AMASAMAN TOLL BOOTH",
      "Location": "NEAR TOLL BOOTH",
      "GPS COORDINATES": "5.6341615,-0.2412325",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1607,
      "AGENT BUSINESS NAME": "FIRST STEPPING STONE VENTURES",
      "AGENT USERNAME": "FSS03101",
      "ADDRESS": "AMSAMAN",
      "Location": "NEAR TROTRO STATION",
      "GPS COORDINATES": "5.7067146.-0.308828",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1608,
      "AGENT BUSINESS NAME": "WILLOYEB VENTURES",
      "AGENT USERNAME": "WIV03101",
      "ADDRESS": "AMASAMAN",
      "Location": "NEAR MELCOME",
      "GPS COORDINATES": "GW-0108-3325",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1609,
      "AGENT BUSINESS NAME": "AFRICA PARCEL SERVICE LIMITED",
      "AGENT USERNAME": "APS02101",
      "ADDRESS": "TESANO",
      "Location": "NEXT TO ZOOZOO RESTAURANT",
      "GPS COORDINATES": "5.600175,-0.228552",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1610,
      "AGENT BUSINESS NAME": "BADWENBA KARIKARI VENTURES ",
      "AGENT USERNAME": "BKV70401",
      "ADDRESS": "UNNUMBERED SHOP GAMBIA NO 2",
      "Location": "CLOSE TO MTN TOWER ",
      "GPS COORDINATES": "7.03'42.7'N2.39'23.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1611,
      "AGENT BUSINESS NAME": "ERNECHRIS ENTERPRISE ",
      "AGENT USERNAME": "EEN12301",
      "ADDRESS": "DANSOMAN",
      "Location": "BEHIND STEP BY STEP MONTESORI",
      "GPS COORDINATES": "5.5568717, -0.2598267",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1612,
      "AGENT BUSINESS NAME": "ERIK SOW ENTERPRISE",
      "AGENT USERNAME": "ESESUB12302",
      "ADDRESS": "DANSOMAN ",
      "Location": "OPPOSITE DIVINE HEALERS CHURCH ",
      "GPS COORDINATES": "5.5308125, -0.2539844",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1613,
      "AGENT BUSINESS NAME": "BIG SAM KORANKYE ENTERPRISE",
      "AGENT USERNAME": "BSK19101",
      "ADDRESS": "WR 80 WORAWORA",
      "Location": "NEAR ASEDA STORE",
      "GPS COORDINATES": "7.515224, 0.373558",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1614,
      "AGENT BUSINESS NAME": "FADFORT VENTURES ",
      "AGENT USERNAME": "FVE12302",
      "ADDRESS": "DANSOMAN DOWN",
      "Location": "OPPOSITE APOSTOLIC CHURCH ",
      "GPS COORDINATES": "5.5443125, -0.2716406",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1615,
      "AGENT BUSINESS NAME": "RICHEUNICE DIAMOND VENTURES ",
      "AGENT USERNAME": "RDV12301",
      "ADDRESS": "BANNA INN  ",
      "Location": "NEAR EV OIL ",
      "GPS COORDINATES": "5.5398375, -0.2517031",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1616,
      "AGENT BUSINESS NAME": "RICHEUNICE DIAMOND VENTURES",
      "AGENT USERNAME": "RDV12301",
      "ADDRESS": "BANNA INN DANSOMAN ",
      "Location": "NEAR EV OIL ",
      "GPS COORDINATES": "5.5398375, -0.2517031",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1617,
      "AGENT BUSINESS NAME": "RICHANS ENTERPRISE ",
      "AGENT USERNAME": "RENSUB00501",
      "ADDRESS": "BUBUASHIE AYIGBE TOWN ",
      "Location": "NEAR CHURCH OF PENTECOST ",
      "GPS COORDINATES": "5.5830375, -0.2402031",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1618,
      "AGENT BUSINESS NAME": "LEGO'S CORNER VENTURES ",
      "AGENT USERNAME": "LCVSUB03802",
      "ADDRESS": "LAPAZ ",
      "Location": "NSAWAM STATION ",
      "GPS COORDINATES": "5.609235,0.246105",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1619,
      "AGENT BUSINESS NAME": "STEE G VENTURES ",
      "AGENT USERNAME": "SGV03801",
      "ADDRESS": "NII BOI TOWN ",
      "Location": "MAMBO ",
      "GPS COORDINATES": "5.614226,-0.244739",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1620,
      "AGENT BUSINESS NAME": "TEME EXPRESS VENTURES ",
      "AGENT USERNAME": "TEV02601",
      "ADDRESS": "LAPAZ ",
      "Location": "FOOT BRIDGE ",
      "GPS COORDINATES": "5.605174,-0.252979",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1621,
      "AGENT BUSINESS NAME": "MELCHIZEDEK TRADING ",
      "AGENT USERNAME": "MET03801",
      "ADDRESS": "LAPAZ ",
      "Location": "LAS PALMAS ",
      "GPS COORDINATES": "5.607124,-0.249079",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1622,
      "AGENT BUSINESS NAME": "KHAE ENTERPRISE ",
      "AGENT USERNAME": "KHA03801",
      "ADDRESS": "ABEKA ",
      "Location": "FIDELITY BANK ",
      "GPS COORDINATES": "5.606068,-0.247302",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1623,
      "AGENT BUSINESS NAME": "MUSTABASH ENTERPRISE ",
      "AGENT USERNAME": "MUSSUB80101",
      "ADDRESS": "cy 32, choggu",
      "Location": "CLOSE TO T POLY JUNCTION ",
      "GPS COORDINATES": "9.428232,- 0.859146",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1624,
      "AGENT BUSINESS NAME": "GENERAL ASARE ENTERPRISE ",
      "AGENT USERNAME": "GAE80101",
      "ADDRESS": "Yc 71",
      "Location": "ADJACENT HALAL FOOD COMPLEX ",
      "GPS COORDINATES": "9.440314,- 0.863211",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1625,
      "AGENT BUSINESS NAME": "HAMZA Z ENTERPRISE ",
      "AGENT USERNAME": "HZE80101",
      "ADDRESS": "G44, Gurugu",
      "Location": "CLOSE TO JISONAYILI JUNCTION ",
      "GPS COORDINATES": "9.458030, - 0.867317",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1626,
      "AGENT BUSINESS NAME": "NYANSA MFIASE ENT",
      "AGENT USERNAME": "NME20101",
      "ADDRESS": "C 8 NORYEM",
      "Location": "NEAR LORRY STATION ",
      "GPS COORDINATES": "6°27'12.4' N 0°55'52.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1627,
      "AGENT BUSINESS NAME": "SHOT MARKETING CONSult ",
      "AGENT USERNAME": "SMASUB03202",
      "ADDRESS": "LATERNIOKORSHIE",
      "Location": "NEAR TOWN CONUNCIL PARK ",
      "GPS COORDINATES": "5.5533125, -0.2430625",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1628,
      "AGENT BUSINESS NAME": "HATE NONE ENTERPRISE ",
      "AGENT USERNAME": "HNE80101",
      "ADDRESS": "k66, kalariga",
      "Location": "OPPOSITE 31 NOVEMBER SCHOOL COMPLEX",
      "GPS COORDINATES": "9.460734, - 0.868127",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1629,
      "AGENT BUSINESS NAME": "ACHEMAN ROYAL VENTURES ",
      "AGENT USERNAME": "ARV20101",
      "ADDRESS": "UNNUMBERED STORE AT NKAWKAW ADOAGYRI",
      "Location": "NEAR ROMAN HOSPITAL OPD BLOCK",
      "GPS COORDINATES": "6°32'51.7' N 0°46'25.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1630,
      "AGENT BUSINESS NAME": "PETER APPIAH MENSAH ENT",
      "AGENT USERNAME": "PAM20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT KONONGO",
      "Location": "NEAR MAYANKA MARKET",
      "GPS COORDINATES": "6°37'21.3' N 1°12'38.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1631,
      "AGENT BUSINESS NAME": "SM- YUZAA ENTERPRISE ",
      "AGENT USERNAME": "SYE80101",
      "ADDRESS": "ky45, KALARIGA",
      "Location": "CLOSE TO BI WATER JUNCTION ",
      "GPS COORDINATES": "9.467239,- 0.870473",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1632,
      "AGENT BUSINESS NAME": "BRILIN TOP ENT",
      "AGENT USERNAME": "BRTSUB20101",
      "ADDRESS": "NKAWKAW POST OFFICE PREMISES ",
      "Location": "NEAR CENTRAL POLICE STATION NKAWKAW ",
      "GPS COORDINATES": "6°33'12.0' N 0°46'06.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1633,
      "AGENT BUSINESS NAME": "HANNY YUMZAA ENTERPRISE ",
      "AGENT USERNAME": "HYV80101",
      "ADDRESS": "kk31, KALARIGA",
      "Location": "CLOSE TO SPRINGFORD INTERNATIONAL ",
      "GPS COORDINATES": "9.463441, -0.864608",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1634,
      "AGENT BUSINESS NAME": "PARDIA ENTERPRISE ",
      "AGENT USERNAME": "PEN 80101.00",
      "ADDRESS": "JH39, JISONAYILI",
      "Location": "CLOSE TO TAMALE INTERNATIONAL SCHOOL ",
      "GPS COORDINATES": "9453951,- 0.859883",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1635,
      "AGENT BUSINESS NAME": "NASADAL VENTURES ",
      "AGENT USERNAME": "NVE80101",
      "ADDRESS": "J 55! Jisonayili",
      "Location": "ADJACENT FAMILY AND FRIENDS ",
      "GPS COORDINATES": "9.450426, -850285",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1636,
      "AGENT BUSINESS NAME": "OFOSU BOATENG ENT",
      "AGENT USERNAME": "OBE20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT BUNSU JUNCTION ",
      "Location": "NEAR ADONTENG COMMUNITY BANK",
      "GPS COORDINATES": "6°17'35.7' N 0°28'27.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1637,
      "AGENT BUSINESS NAME": "ASIEDU LORD VENTURES ",
      "AGENT USERNAME": "ASLSUB20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT NKAWKAW NOVOTEX",
      "Location": "NEAR MTN OFFICE ",
      "GPS COORDINATES": "6°33'25.9' N 0°46'51.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1638,
      "AGENT BUSINESS NAME": "PEACE BLESS investments ",
      "AGENT USERNAME": "PBI80101",
      "ADDRESS": "sk76, SAKASAKA",
      "Location": "CLOSE TO AMBARIYA SCHOOL ",
      "GPS COORDINATES": "9.421834,.- 838922",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1639,
      "AGENT BUSINESS NAME": "UNCLE DEMBEE ENTERPRISE ",
      "AGENT USERNAME": "UDE80101",
      "ADDRESS": "SAK 43, sakasaka",
      "Location": "Close to sakasaka",
      "GPS COORDINATES": "9.419859, -836259",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1640,
      "AGENT BUSINESS NAME": "IM INUSAH ENTERPRISE ",
      "AGENT USERNAME": "IME80101",
      "ADDRESS": "KAP, 44, KALPOHINI",
      "Location": "CLOSE TO KALPOHINI TIMBER MARKET ",
      "GPS COORDINATES": "9.420898, - 0.826134",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1641,
      "AGENT BUSINESS NAME": "BRA UBAID VENTURES ",
      "AGENT USERNAME": "BUV80101",
      "ADDRESS": "KL40, KALPOHINI",
      "Location": "CLOSE TO KALPOHINI ANGLICAN SCHOOL ",
      "GPS COORDINATES": "9.425140, - 0.827489",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1642,
      "AGENT BUSINESS NAME": "ANOINTED NINE ENT ",
      "AGENT USERNAME": "ANE80102",
      "ADDRESS": "KP 54, SSNIT FLATS",
      "Location": "CLOSE TO SSNIT FLATS ",
      "GPS COORDINATES": "9.418555, - 0.817849",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1643,
      "AGENT BUSINESS NAME": "IS GOD ENTERPRISE ",
      "AGENT USERNAME": "IGESUB80101",
      "ADDRESS": "YH 41, TISHIGU",
      "Location": "OPPOSITE UMB BANKS ",
      "GPS COORDINATES": "9.407222, - 0.838762",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1644,
      "AGENT BUSINESS NAME": "ABDUL RAUF HADIJA ENTERPRISE ",
      "AGENT USERNAME": "ARH80101",
      "ADDRESS": "sh33",
      "Location": "ADJACENT FORMAL TIGO OFFICE ",
      "GPS COORDINATES": "9.406995, - 0.87026",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1645,
      "AGENT BUSINESS NAME": "Servers servers Enterprise ",
      "AGENT USERNAME": "SES80101",
      "ADDRESS": "Water works street ",
      "Location": "Near park and gardens ",
      "GPS COORDINATES": "9.413032-0.846986",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1646,
      "AGENT BUSINESS NAME": "UHURU BUSINESS CENTRE ",
      "AGENT USERNAME": "UBC80101",
      "ADDRESS": "44, changli",
      "Location": "OPPOSITE PASSPORTS OFFICE ",
      "GPS COORDINATES": "9.401914, - 0.837026",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1647,
      "AGENT BUSINESS NAME": "SAMRUF ENTERPRISE ",
      "AGENT USERNAME": "SAN80101",
      "ADDRESS": "54",
      "Location": "OPPOSITE S.D.A HOSPITAL ",
      "GPS COORDINATES": "9.399404,- 0.832495",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1648,
      "AGENT BUSINESS NAME": "GOMBILANA ENTERPRISE ",
      "AGENT USERNAME": "BILL80101",
      "ADDRESS": "Metro mass street ",
      "Location": "Close to Bonzali rural bank",
      "GPS COORDINATES": "9.421776-0.887244",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1649,
      "AGENT BUSINESS NAME": "FUZZY BUSINESS CENTRE ",
      "AGENT USERNAME": "FBC80101",
      "ADDRESS": "Ee 97",
      "Location": "ADJACENT TOTAL FILLING STATION ",
      "GPS COORDINATES": "9.396093, - 0.826502",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1650,
      "AGENT BUSINESS NAME": "H- HELLEN VENTURES ",
      "AGENT USERNAME": "AHV80101",
      "ADDRESS": "55",
      "Location": "INSIDE TAMALE TEACHING HOSPITAL ",
      "GPS COORDINATES": "9.393938,- 0.823426",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1651,
      "AGENT BUSINESS NAME": "PEACEFUL MAJEED ENTERPRISE ",
      "AGENT USERNAME": "PME80101",
      "ADDRESS": "22",
      "Location": "OPPOSITE GOIL STATION ",
      "GPS COORDINATES": "9.379166, - 0.8831095",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1652,
      "AGENT BUSINESS NAME": "MALINDAA ENT ",
      "AGENT USERNAME": "MEN80106",
      "ADDRESS": "34",
      "Location": "BEHIND PRESEC ",
      "GPS COORDINATES": "9.364455, - 839395",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1653,
      "AGENT BUSINESS NAME": "EFUA ENTERPRISE ",
      "AGENT USERNAME": "EFE80101",
      "ADDRESS": "34",
      "Location": "BANVIM JUNCTION ",
      "GPS COORDINATES": "9.379051, -0.840580",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1654,
      "AGENT BUSINESS NAME": "HAHIA GWEN ENTERPRISE ",
      "AGENT USERNAME": "HGE80101",
      "ADDRESS": "Sw37, LAMASHEGU",
      "Location": "OPPOSITE UPSONIC HOUSE ",
      "GPS COORDINATES": "9.383087, - 0.852547",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1655,
      "AGENT BUSINESS NAME": "NNWB services ",
      "AGENT USERNAME": "MSE80101",
      "ADDRESS": "OA street",
      "Location": "Behind OA bus terminal ",
      "GPS COORDINATES": "9.416459-0.891598",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1656,
      "AGENT BUSINESS NAME": "See-Azi enterprise ",
      "AGENT USERNAME": "ZAZ80101",
      "ADDRESS": "Aboabo street",
      "Location": "Close to metro mass station ",
      "GPS COORDINATES": "9.416532-0.888847",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1657,
      "AGENT BUSINESS NAME": "Fast truck ultimate ",
      "AGENT USERNAME": "FTUSUB80101",
      "ADDRESS": "Aboabo",
      "Location": "Timber market Tamale ",
      "GPS COORDINATES": "9.417027-0.889597",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1658,
      "AGENT BUSINESS NAME": "Fast truck ultimate ",
      "AGENT USERNAME": "FTUSUB80102",
      "ADDRESS": "Aboabo",
      "Location": "Close to metro mass station",
      "GPS COORDINATES": "9.413032-0.846985",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1659,
      "AGENT BUSINESS NAME": "M badawi Enterprise ",
      "AGENT USERNAME": "MBE80101",
      "ADDRESS": "Aboabo ",
      "Location": "Opposite ADB BANK",
      "GPS COORDINATES": "9.416457-0.891598",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1660,
      "AGENT BUSINESS NAME": "D-Dalas Enterprise ",
      "AGENT USERNAME": "DDE80101",
      "ADDRESS": "Aboabo ",
      "Location": "Opposite ADB bank ",
      "GPS COORDINATES": "9.416534-0.888751",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1661,
      "AGENT BUSINESS NAME": "Hakmolan enterprise ",
      "AGENT USERNAME": "HVE80101",
      "ADDRESS": "Zongo",
      "Location": "Pagsara joint Tamale ",
      "GPS COORDINATES": "9.407428-0.835561",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1662,
      "AGENT BUSINESS NAME": "MABCOM SOLUTIONS GHANA LTD",
      "AGENT USERNAME": "MSGSUB05101",
      "ADDRESS": "UNNUMBERED HOUSE AT NSUMFA",
      "Location": "OPPOSITE THE PENTECOST CHURCH ",
      "GPS COORDINATES": "5.6199254,-0.2908319",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1663,
      "AGENT BUSINESS NAME": "Darfu ventures ",
      "AGENT USERNAME": "DAV80102",
      "ADDRESS": "H50 Nyohini",
      "Location": "Sabondija adjacent Tuffour building ",
      "GPS COORDINATES": "9.407547-0.835648",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1664,
      "AGENT BUSINESS NAME": "CAPSIS VENTURES ",
      "AGENT USERNAME": "CVE 90101.00",
      "ADDRESS": "HAMILE",
      "Location": "OPPOSITE THE LORRY STATION",
      "GPS COORDINATES": "10°59'50.3'N 2°44'54.6' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1665,
      "AGENT BUSINESS NAME": "ST. OFORI ATTA'S VENTURES ",
      "AGENT USERNAME": "STA09001",
      "ADDRESS": "KPAGURI ",
      "Location": "CLOSE TO NANDOM RURAL BANK ",
      "GPS COORDINATES": "10°03'04.0' N 2°30'57.4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1666,
      "AGENT BUSINESS NAME": "NUHU MOHAMMED VENTURES ",
      "AGENT USERNAME": "NMV70201",
      "ADDRESS": "D ASUOTIANO ",
      "Location": "ADJACENT ROMAN CATHOLIC ",
      "GPS COORDINATES": "7. 18' 44. 8' N 2 . 42' 2. 5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1667,
      "AGENT BUSINESS NAME": "AKOKYEM BA ENTERPRISE",
      "AGENT USERNAME": "ABE70301",
      "ADDRESS": "MENJI, BONO EAST REGION",
      "Location": "NEAR MENJI STATION LAST STOP",
      "GPS COORDINATES": "7'55'32.3'N2'22'49.1'W/7.9256400,-2.3803000",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1668,
      "AGENT BUSINESS NAME": "OSMAN SEABOY VENTURES",
      "AGENT USERNAME": "OSS70301",
      "ADDRESS": "WENCHI, BONO EAST",
      "Location": "NEAR WENCHI DISTRICT OFFICE",
      "GPS COORDINATES": "7.7337800,-2.1030360/7'.44'01.6'N2'06'10.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1669,
      "AGENT BUSINESS NAME": "NABOAT NETWORKS",
      "AGENT USERNAME": "NNESUB70301",
      "ADDRESS": "WENCHI, BONO EAST REGION",
      "Location": "NEAR BADUMAN RURAL BANK",
      "GPS COORDINATES": "7.7393350,-2.1053350/7'44'21.6'N2'06'19.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1670,
      "AGENT BUSINESS NAME": "NABOAT NETWORKS",
      "AGENT USERNAME": "NNESUB70302",
      "ADDRESS": "WENCHI, BONO EAST REGION",
      "Location": "NEAR KRAMO STORE, WENCHI",
      "GPS COORDINATES": "7.7393960,-2.1055980/7'44'21.8'N2'06'20.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1671,
      "AGENT BUSINESS NAME": "ZK BASHIRU ENTERPRISE",
      "AGENT USERNAME": "ZKB20301",
      "ADDRESS": "HNO D527/A",
      "Location": "OPPOSITE ADWESO MARKET",
      "GPS COORDINATES": "6.001004-33000-2001",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1672,
      "AGENT BUSINESS NAME": "SMART VENTURES",
      "AGENT USERNAME": "SVE20301",
      "ADDRESS": "UNNUMBERED SHOP AT ZONGO",
      "Location": "NEAR ZONGO MARKET",
      "GPS COORDINATES": "6.011019515-0.256954",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1673,
      "AGENT BUSINESS NAME": "ZESTY SWING VENTURES",
      "AGENT USERNAME": "ZSV20301",
      "ADDRESS": "UNNUMBERED HOUSE AT OKORASE",
      "Location": "BEHIND OKORASE METHODIST",
      "GPS COORDINATES": "6.0045-000.11115",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1674,
      "AGENT BUSINESS NAME": "TRAWULE BUSINESS VENTURE ",
      "AGENT USERNAME": "TBV70101",
      "ADDRESS": "D kabila ",
      "Location": "OPPOSITE Baccsod ",
      "GPS COORDINATES": "7. 57' 43. 9' N 2. 38' 58. 3' w",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1675,
      "AGENT BUSINESS NAME": "JASCO GEE ENTERPRISE ",
      "AGENT USERNAME": "JGE70201",
      "ADDRESS": "D Wammanfo",
      "Location": "OPPOSITE station ",
      "GPS COORDINATES": "7. 15'44.0' N 2. 43' 02. 0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1676,
      "AGENT BUSINESS NAME": "COSMOS MULTI BUSINESS ",
      "AGENT USERNAME": "CMB70401",
      "ADDRESS": "D 89 kokoa",
      "Location": "OPPOSITE MARKET ",
      "GPS COORDINATES": "7. 51' 04. 0' N 2. 38' 53' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1677,
      "AGENT BUSINESS NAME": "Abdul sommed enterprise ",
      "AGENT USERNAME": "ASS80102",
      "ADDRESS": "Victin",
      "Location": "Adjacent Ghana Hotel",
      "GPS COORDINATES": "9.407547,-0.835648",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1678,
      "AGENT BUSINESS NAME": "EMMANUEL BUSINESS 2020 CENTRE",
      "AGENT USERNAME": "EBC7051",
      "ADDRESS": "D DUADASO no 1",
      "Location": "OPPOSITE NAFANA RURAL BANK ",
      "GPS COORDINATES": "7. 50' 07. 1' N 2. 54' 38. 4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1679,
      "AGENT BUSINESS NAME": "Joe Ahenfo enterprise ",
      "AGENT USERNAME": "JJE80101",
      "ADDRESS": "Victin street",
      "Location": "Close to Frimps ool",
      "GPS COORDINATES": "9.407428-0.835556",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1680,
      "AGENT BUSINESS NAME": "MALLAM SAH BUSINESS Centre ",
      "AGENT USERNAME": "MSB70101",
      "ADDRESS": "D 67 DUADASO",
      "Location": "ADJACENT NAFANA RURAL BANK",
      "GPS COORDINATES": "7. 67' 03' 2' N 2. 36' 54. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1681,
      "AGENT BUSINESS NAME": "PENKWASE BETTER DAYS VENTURES ",
      "AGENT USERNAME": "DBD70401",
      "ADDRESS": "D 45 PENKWASE",
      "Location": "OPPOSITE SIX STAR PHARMACY STORES ",
      "GPS COORDINATES": "7. 15' 42. 4' N 2. 42' 58. 4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1682,
      "AGENT BUSINESS NAME": "GRACE NO NTI ENTERPRISE ",
      "AGENT USERNAME": "GNN70201",
      "ADDRESS": "D BEREKUM ",
      "Location": "OPPOSITE ROMAN CATHOLIC ",
      "GPS COORDINATES": "7. 51' 24' 4' N 2. 42' 58. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1683,
      "AGENT BUSINESS NAME": "Tarim enterprise ",
      "AGENT USERNAME": "TEN80102",
      "ADDRESS": "Gushegu ",
      "Location": "Opposite Tizaa rural bank ",
      "GPS COORDINATES": "NG-00003-5273",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1684,
      "AGENT BUSINESS NAME": "DEW GOODNESS COMMUNICATIONS",
      "AGENT USERNAME": "DGC50101",
      "ADDRESS": "ZIOPE",
      "Location": "AT THE ZIOPE MARKET",
      "GPS COORDINATES": "6.546206, 0.696127",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1685,
      "AGENT BUSINESS NAME": "TEKPOR PATRICK VENTURES",
      "AGENT USERNAME": "TPVSUB50101",
      "ADDRESS": "KPETOE",
      "Location": "AT KPETOE JUNCTION",
      "GPS COORDINATES": "6.547230,0.694681",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1686,
      "AGENT BUSINESS NAME": "TEKPOR PATRICK VENTURES",
      "AGENT USERNAME": "TPVSUB50102",
      "ADDRESS": "KPETOE",
      "Location": "CLOSE TO AMERICA HOUSE",
      "GPS COORDINATES": "6.546890, 0.695286",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1687,
      "AGENT BUSINESS NAME": "HUBERT K. SAH ENTERPRISE ",
      "AGENT USERNAME": "HKS7051",
      "ADDRESS": "D 56 kabile",
      "Location": "ADJACENT BACCSOD ",
      "GPS COORDINATES": "7. 56' 42. 9' N 2. 38' 68. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1688,
      "AGENT BUSINESS NAME": "JAMES TWENEBOAH VENTURES ",
      "AGENT USERNAME": "JTV70101",
      "ADDRESS": "Sankore ",
      "Location": "Close to sankore Station ",
      "GPS COORDINATES": "6.30'14.5'N2.30'04.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1689,
      "AGENT BUSINESS NAME": "Ring and bell investment ",
      "AGENT USERNAME": "RAB04801",
      "ADDRESS": "Unnumbered shop at osu ",
      "Location": "Near Kareena cakes",
      "GPS COORDINATES": "(5.5549620, -0.1775090)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1690,
      "AGENT BUSINESS NAME": "LILIAN STORE",
      "AGENT USERNAME": "LST50101",
      "ADDRESS": "TSITO",
      "Location": "NEAR ADULT COLLEGE",
      "GPS COORDINATES": "6.548426, 0.291949",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1691,
      "AGENT BUSINESS NAME": "RAY 97 ENTERPRISE",
      "AGENT USERNAME": "REN70101",
      "ADDRESS": "D WAMFIE ",
      "Location": "ADJACENT WAMFIE RURAL BANK ",
      "GPS COORDINATES": "7. 18' 14. 6' N 2. 41' 58. 0' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1692,
      "AGENT BUSINESS NAME": "GODSWAY 200 ENTERPRISE",
      "AGENT USERNAME": "G2E70201",
      "ADDRESS": "D 70",
      "Location": "ADJACENT WAMFIE HOSPITAL ",
      "GPS COORDINATES": "7. 51' 43. 4' N 2. 24' 57. 9'",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1693,
      "AGENT BUSINESS NAME": "EVAYEB ENTERPRISE ",
      "AGENT USERNAME": "EEN70201",
      "ADDRESS": "34 WAMFIE",
      "Location": "D WAMFIE,  ADJACENT HOSPITAL ",
      "GPS COORDINATES": "7. 51' 34. 4' N 2. 76' 9' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1694,
      "AGENT BUSINESS NAME": "E-ROBERT ENTERPRISE",
      "AGENT USERNAME": "ERE50101",
      "ADDRESS": "JUAPONG",
      "Location": "NEAR JUAPONG TEXTILE FACTORY",
      "GPS COORDINATES": "6.249827, 0.130459",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1695,
      "AGENT BUSINESS NAME": "THOMAS MICHAEL ENTERPRISE",
      "AGENT USERNAME": "TME50102",
      "ADDRESS": "DZEMENI",
      "Location": "NEAR THE DZEMENI MARKET",
      "GPS COORDINATES": "6.603064, 0.175163",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1696,
      "AGENT BUSINESS NAME": "STAR BRIGHT SUPERMARKET ",
      "AGENT USERNAME": "SBSSUB05101",
      "ADDRESS": "BLOCK 200,MADINA HOUSE, ABLEKUMA",
      "Location": "NEAR FLASH PHARMACY ",
      "GPS COORDINATES": "5.6188924,-0.3148353",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1697,
      "AGENT BUSINESS NAME": "BIG SAM KORANKYE ENTERPRISE",
      "AGENT USERNAME": "BSK19101",
      "ADDRESS": "WR-80 WORAWORA",
      "Location": "NEAR ASEDA STORE",
      "GPS COORDINATES": "7.515224, 0.373558",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1698,
      "AGENT BUSINESS NAME": "BRIGHT GOD ULTIMATE ",
      "AGENT USERNAME": "BGU70401",
      "ADDRESS": "D  WAMFIE ",
      "Location": "OPPOSITE MARKET ",
      "GPS COORDINATES": "7. 15'43. 8' N 2. 43' 04. 4 W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1699,
      "AGENT BUSINESS NAME": "TESTAMENT TECHNOLOGIES",
      "AGENT USERNAME": "TTESUB50101",
      "ADDRESS": "JUAPONG",
      "Location": "NEAR THE JUAPONG MARKET",
      "GPS COORDINATES": "6.258884, 0.136433",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1700,
      "AGENT BUSINESS NAME": "JOSEPH ASEKRE",
      "AGENT USERNAME": "JAS19101",
      "ADDRESS": "DASCO JUNCTION",
      "Location": "NEAR DAMBAI COLLEGE OF EDUCATION",
      "GPS COORDINATES": "8.0669800, 0.1788860",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1701,
      "AGENT BUSINESS NAME": "GOODWISH COMMUNICATION",
      "AGENT USERNAME": "GWC50101",
      "ADDRESS": "ZIOPE",
      "Location": "AT THE ZIOPE MARKET",
      "GPS COORDINATES": "6.546206, 0.696127",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1702,
      "AGENT BUSINESS NAME": "Mallam bush business centre ",
      "AGENT USERNAME": "MBB80101",
      "ADDRESS": "Gushegu-pigu road",
      "Location": "Close to central mosque Gushiegu ",
      "GPS COORDINATES": "NG-00000-4913",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1703,
      "AGENT BUSINESS NAME": "DEW GOODNESS COMMUNICATIONS",
      "AGENT USERNAME": "DGC50101",
      "ADDRESS": "AFLAO",
      "Location": "OPPOSITE CEPS LAST CHECK POINT AND MELCOM AFLOA MAIN BORDER",
      "GPS COORDINATES": "6.11235, 1.19786",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1704,
      "AGENT BUSINESS NAME": "EBENFRIMPS VENTURES ",
      "AGENT USERNAME": "EVE70101",
      "ADDRESS": "UNNUMBERED  SHOP AT SANKORE",
      "Location": "Behind sankore Station ",
      "GPS COORDINATES": "6.30'11.1'N2.30'04.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1705,
      "AGENT BUSINESS NAME": "HA business Ventures",
      "AGENT USERNAME": "HBV80101",
      "ADDRESS": "Airport ",
      "Location": "Tamale Airport Junction",
      "GPS COORDINATES": "NS-814-6963",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1706,
      "AGENT BUSINESS NAME": "ESSENTIAL HOPE ENTERPRISE ",
      "AGENT USERNAME": "EHE70101",
      "ADDRESS": "D WAMFIE ",
      "Location": "OPPOSITE MARKET ",
      "GPS COORDINATES": "7. 17' 44. 9' N 2. 42' 01. 1'",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1707,
      "AGENT BUSINESS NAME": "DIVINE STRATEGY ENTERPRISE ",
      "AGENT USERNAME": "DSE70201",
      "ADDRESS": "S 12 WAMFIE",
      "Location": "ADJACENT COURT",
      "GPS COORDINATES": "7. 18' 55. 8' N 2. 41' 01. 2' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1708,
      "AGENT BUSINESS NAME": "BIG QUASAH ENTERPRISE ",
      "AGENT USERNAME": "BQE70201",
      "ADDRESS": "R 12 WAMFIE",
      "Location": "OPPOSITE WAMFIE RURAL BANK ",
      "GPS COORDINATES": "7. 18' 45. 6' N 2 .65' 01. 2' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1709,
      "AGENT BUSINESS NAME": "THE ESS VENTURES ",
      "AGENT USERNAME": "TES00401",
      "ADDRESS": "Unnumbered shop at osu",
      "Location": "Near kingdom fine wine",
      "GPS COORDINATES": "(5.5528000, -0.1887810)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1710,
      "AGENT BUSINESS NAME": "Soudi's Business Solution",
      "AGENT USERNAME": "SBS02801",
      "ADDRESS": "Unnumbered Shop Dodowa on the New Hospital Road",
      "Location": "Near Biolink Pharmacy",
      "GPS COORDINATES": "5.891235 - 0.088910",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1711,
      "AGENT BUSINESS NAME": "Saka Xpress",
      "AGENT USERNAME": "SAXSUB04701",
      "ADDRESS": "Unnumbered Shop Hannah Road, Madina",
      "Location": "Near Hannah School",
      "GPS COORDINATES": "5.670535 - 0.170336",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1712,
      "AGENT BUSINESS NAME": "SAVE IT SUSU ENT",
      "AGENT USERNAME": "SIS01801",
      "ADDRESS": "Unnumbered Shop Mensah Bar",
      "Location": "Mensah Bar Bus Stop",
      "GPS COORDINATES": "5.841404 - 0.115709",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1713,
      "AGENT BUSINESS NAME": "MANUEL OBIRI YEBOAH ENTERPRISE",
      "AGENT USERNAME": "MOY20301",
      "ADDRESS": "Hospital Road, Suhum",
      "Location": "Near Suhum government hospital6.",
      "GPS COORDINATES": "6.035786, --0.446517",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1714,
      "AGENT BUSINESS NAME": "CLEARANCE VENTURES",
      "AGENT USERNAME": "CVESUB20301",
      "ADDRESS": "Near the MTN  mast, Teacher Mante",
      "Location": "Near the MTN mast",
      "GPS COORDINATES": "5.904960, -0.381376",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1715,
      "AGENT BUSINESS NAME": "CLEARANCE VENTURES",
      "AGENT USERNAME": "CVESUB20302",
      "ADDRESS": "Near Presby Church, Teacher Mante",
      "Location": "Near Presby Church",
      "GPS COORDINATES": "5.903130, -0.387066",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1716,
      "AGENT BUSINESS NAME": "ABEAM PUBLICATION",
      "AGENT USERNAME": "APUSUB03801",
      "ADDRESS": "Near Old Station, Dobro Nsawam, ",
      "Location": "Near Dobro Chuef's palace, Dobro, Nsawam",
      "GPS COORDINATES": "5.781898, -0.33562012",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1717,
      "AGENT BUSINESS NAME": "BENEVOLENT LINKS",
      "AGENT USERNAME": "BKI02501",
      "ADDRESS": "AMASAMAN-MANHEN",
      "Location": "GHANA FLAG JUNCTION",
      "GPS COORDINATES": "5.659664,-0.338805",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1718,
      "AGENT BUSINESS NAME": "SAWADGO VENTURES",
      "AGENT USERNAME": "ISV03101",
      "ADDRESS": "CAPRICE",
      "Location": "NEAR RAIWAY",
      "GPS COORDINATES": "5.580268,-0.219614",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1719,
      "AGENT BUSINESS NAME": "G4EVER ENTERPRISE",
      "AGENT USERNAME": "GENSUB20302",
      "ADDRESS": "Near Amanase Post Office, Amanase",
      "Location": "Near Amanase Post Office,",
      "GPS COORDINATES": "5.993245, -0.429228",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1720,
      "AGENT BUSINESS NAME": "G4EVER ENTERPRISE",
      "AGENT USERNAME": "GENSUB20301",
      "ADDRESS": "Opposite Amanase Market, Amanase.",
      "Location": "Opposite Amanase Market.",
      "GPS COORDINATES": "5.994995, -0.427979",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1721,
      "AGENT BUSINESS NAME": "ESAMITE",
      "AGENT USERNAME": "EEN04501",
      "ADDRESS": "TAIFA",
      "Location": "NEAR ",
      "GPS COORDINATES": "5.652103,-0.245096",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1722,
      "AGENT BUSINESS NAME": "FIRSTOFORI VENTURES ",
      "AGENT USERNAME": "FIVSUB20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT ANYINAM ",
      "Location": "NEAR HEALTH INSURANCE OFFICE ",
      "GPS COORDINATES": "6°22'57.5' N 0°33'01.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1723,
      "AGENT BUSINESS NAME": "SHIRYTECH ENT",
      "AGENT USERNAME": "SENSUB20301",
      "ADDRESS": "STORE NUMBER 25, NEW TAFO ZONGO",
      "Location": "OPPOSITE THE MOSQUE",
      "GPS COORDINATES": "6°13'43.4' N 0°22'08.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1724,
      "AGENT BUSINESS NAME": "SAMA SSIB VENTURES ",
      "AGENT USERNAME": "SSV03401",
      "ADDRESS": "Unnumbered Shop Madina Market ",
      "Location": "Inside Madina Market, Near the Madina Butchers  Shop",
      "GPS COORDINATES": "5.678710 - 0.169218",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1725,
      "AGENT BUSINESS NAME": "MOBILE 2 NET",
      "AGENT USERNAME": "MNESUB30301",
      "ADDRESS": "CAPE COAST KOTOKRABA ",
      "Location": "CAPECOAST PHARMACY ",
      "GPS COORDINATES": "5°06'39.4'N1°14'39.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1726,
      "AGENT BUSINESS NAME": "SLOWMAN 95 VENTURES",
      "AGENT USERNAME": "SVE70101",
      "ADDRESS": "UNNUMBERED SHOP AT SANKORE",
      "Location": "INFRONT OF SANKORE MARKET",
      "GPS COORDINATES": "6.30'04.1'N2.30'02.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1727,
      "AGENT BUSINESS NAME": "AA NYANKOM VENTURES",
      "AGENT USERNAME": "AAN03101",
      "ADDRESS": "TAIFA",
      "Location": "OPPOSITE MAXON FILLING STATION",
      "GPS COORDINATES": "5.667635,-0.250567",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1728,
      "AGENT BUSINESS NAME": "T2A VENTURES",
      "AGENT USERNAME": "TVE03101",
      "ADDRESS": "NEW TOWN KPEHE",
      "Location": "NEAR SDA CHURCH",
      "GPS COORDINATES": "5.585976,-0.212801",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1729,
      "AGENT BUSINESS NAME": "SAMPOK CHEMICALS ",
      "AGENT USERNAME": "SCH12301",
      "ADDRESS": "LATERBIOKORSHIE ",
      "Location": "NEAR TOWN COUNCIL PARK ",
      "GPS COORDINATES": "5.5530125, -0.2438594",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1730,
      "AGENT BUSINESS NAME": "ADINKRA DIRECT VENTURES ",
      "AGENT USERNAME": "ADVSUB70101",
      "ADDRESS": "UNNUMBERED SHOP AT SANKORE ",
      "Location": "Close to the market",
      "GPS COORDINATES": "6.30'02.0'N2.30'02.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1731,
      "AGENT BUSINESS NAME": "ADINKRA DIRECT  VENTURES ",
      "AGENT USERNAME": "ADVSUB70101",
      "ADDRESS": "UNNUMBERED SHOP AT SANKORE ",
      "Location": "Close to the market ",
      "GPS COORDINATES": "6.30'02.0'N2.30'02.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1732,
      "AGENT BUSINESS NAME": "EL-PORTLAND CONSULT LTD ",
      "AGENT USERNAME": "EPC02001",
      "ADDRESS": "LAPAZ",
      "Location": "ADJACENT ABRANTIE SPOT ",
      "GPS COORDINATES": "5.6050625, -0.2516094",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1733,
      "AGENT BUSINESS NAME": "PAPALOLO VENTURES",
      "AGENT USERNAME": "PVE04501",
      "ADDRESS": "ASHONHMAN MUSUKU",
      "Location": "OPPOSITE MEPP GUEST HOUSE",
      "GPS COORDINATES": "5.6817161,-0.236128",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1734,
      "AGENT BUSINESS NAME": "ADINKRA DIRECT VENTURES ",
      "AGENT USERNAME": "ADVSUP70101",
      "ADDRESS": "UNNUMBERED SHOP AT KWAPONG",
      "Location": "Opposite ADB Bank",
      "GPS COORDINATES": "6.30'03.0'N4.20'02.6W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1735,
      "AGENT BUSINESS NAME": "JU RICH ELECTRICAL",
      "AGENT USERNAME": "JRE04401",
      "ADDRESS": "KASOA OBOM",
      "Location": "NEAR BALOON HOTEL ",
      "GPS COORDINATES": "5.575961,-0.422320",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1736,
      "AGENT BUSINESS NAME": "DEEP LAUNCH LTD ",
      "AGENT USERNAME": "DLV04601",
      "ADDRESS": "DARKUMA ",
      "Location": "DARKUMA OPPOSITE TOTAL FILLING STATION ",
      "GPS COORDINATES": "5.5759625, -0.2544219",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1737,
      "AGENT BUSINESS NAME": "GEB -BEAU VENTURES ",
      "AGENT USERNAME": "GBV04601",
      "ADDRESS": "BUBUASHIE",
      "Location": "NEAR  AYIGBE TOWN BUS STOP ",
      "GPS COORDINATES": "5.5887625, -0.2401406",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1738,
      "AGENT BUSINESS NAME": "ANNOR DERRICK ENT ",
      "AGENT USERNAME": "ADE03601",
      "ADDRESS": "CHORKOR ",
      "Location": "NEAR LATTER DAY SAINTS ",
      "GPS COORDINATES": "5.5265625, -0.2484531",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1739,
      "AGENT BUSINESS NAME": "QUICK ASSURANCE INVESTMENT",
      "AGENT USERNAME": "QAI04401",
      "ADDRESS": "KASOA DOMEABRA",
      "Location": "NEAR CHURCH OF PENTECOST",
      "GPS COORDINATES": "5.575961,-0.422320",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1740,
      "AGENT BUSINESS NAME": "GAMELI ENTERPRISE",
      "AGENT USERNAME": "GEN19101",
      "ADDRESS": "D 2401 HEALTH CENTER JUNCTION",
      "Location": "HEALTH CENTER STREET",
      "GPS COORDINATES": "8.061874, 0.1830630",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1741,
      "AGENT BUSINESS NAME": "VANSELA PREMIUM ENTERPRISE",
      "AGENT USERNAME": "VPESUB20302",
      "ADDRESS": "Near Hushpippis appartment, Amanase",
      "Location": "Near Hushpippis appartment",
      "GPS COORDINATES": "59935712, -0.4271599",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1742,
      "AGENT BUSINESS NAME": "GEORGE DARKWA ROYAL ENT",
      "AGENT USERNAME": "GDR20301",
      "ADDRESS": "AD 1 OSINO",
      "Location": "OPPOSITE MTN CONNECT OFFICE ",
      "GPS COORDINATES": "6°20'50.9' N 0°29'04.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1743,
      "AGENT BUSINESS NAME": "AB TRIUMPH ENTERPRISE",
      "AGENT USERNAME": "ABT19102",
      "ADDRESS": "JUNCTION DAMBAI",
      "Location": "OPPOSITE NPP OFFICE",
      "GPS COORDINATES": "8.062784, 0.1820230",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1744,
      "AGENT BUSINESS NAME": "ewusie isaac ventures",
      "AGENT USERNAME": "ewusub04401",
      "ADDRESS": "obon road kasoa",
      "Location": "near So Filling station",
      "GPS COORDINATES": "5.548402,-0.434924",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1745,
      "AGENT BUSINESS NAME": "JAK-VAGOF VENTURES ",
      "AGENT USERNAME": "JVV20101",
      "ADDRESS": "UNNUMBERED STORE AT NEW JEJETI",
      "Location": "ADJACENT POLICE STATION",
      "GPS COORDINATES": "6°28'25.5' N 0°39'02.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1746,
      "AGENT BUSINESS NAME": "JOSHUA BUSINESS ENTERPRISE ",
      "AGENT USERNAME": "JBE00701",
      "ADDRESS": "PALADIUM ",
      "Location": "NEAR METHODIST CHURCH ",
      "GPS COORDINATES": "5.542233,-0.215652",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1747,
      "AGENT BUSINESS NAME": "JAMES KWAKYE ENT",
      "AGENT USERNAME": "JKV20101",
      "ADDRESS": "STORE NUMBER KHP 185 ,KWAHU PRASO",
      "Location": "NEAR LORRY STATION ",
      "GPS COORDINATES": "6°37'21.1' N 0°54'48.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1748,
      "AGENT BUSINESS NAME": "CARISH 90  CENTRE",
      "AGENT USERNAME": "CBC00701",
      "ADDRESS": "PALADIUM ",
      "Location": "OPPOSITE METHODIST CHURCH ",
      "GPS COORDINATES": "5.542247,-0.215000",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1749,
      "AGENT BUSINESS NAME": "KF MBEAH ENTERPRISE ",
      "AGENT USERNAME": "KFMSUB00702",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR GCB",
      "GPS COORDINATES": "5.547941,-0.211070",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1750,
      "AGENT BUSINESS NAME": "ASEDA VENTURES",
      "AGENT USERNAME": "AVESUP19101",
      "ADDRESS": "WJ 57 WORAWORA",
      "Location": "NEAR DA PRIMARY",
      "GPS COORDINATES": "7.510534, 0.376367",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1751,
      "AGENT BUSINESS NAME": "SAVE ME YASHUA VENTURES ",
      "AGENT USERNAME": "SMY01001",
      "ADDRESS": "OKAISHIE ",
      "Location": "NEAR OKAISHIE METRO MASS STATION ",
      "GPS COORDINATES": "5.547720,-0.210316",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1752,
      "AGENT BUSINESS NAME": "FRIMAUD VENTURES ",
      "AGENT USERNAME": "FRVSUB01001",
      "ADDRESS": "OKAISHIE ",
      "Location": "NEAR FIDELITY BANK ",
      "GPS COORDINATES": "5.547016,-0.210225",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1753,
      "AGENT BUSINESS NAME": "BROTHER'S  04 VENTURES",
      "AGENT USERNAME": "BRV70401",
      "ADDRESS": "UNNUMBERED SHOP AT SANKORE ATECHEM",
      "Location": "Close  to the market ",
      "GPS COORDINATES": "6.30'01.0'N2.30'02.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1754,
      "AGENT BUSINESS NAME": "ASEDA VENTURES",
      "AGENT USERNAME": "AVESUB19101",
      "ADDRESS": "AFRIWAA ROYAL, WORAWORA",
      "Location": "NEAR ROYAL LODGE, WORAWORA",
      "GPS COORDINATES": "7.865012, 0.393671",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1755,
      "AGENT BUSINESS NAME": "SAGYARIDOO VENTURES ",
      "AGENT USERNAME": "SVE80101",
      "ADDRESS": "Saveligu ",
      "Location": "Opposite Savulugu post office ",
      "GPS COORDINATES": "NU-0000-2478",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1756,
      "AGENT BUSINESS NAME": "GYAN BAT VENTURES",
      "AGENT USERNAME": "GBVSUP19101",
      "ADDRESS": "AMB/14 ABNSE",
      "Location": "OPPOSITE RC CHURCH",
      "GPS COORDINATES": "7.124119, 0.027119",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1757,
      "AGENT BUSINESS NAME": "ASEDA VENTURES",
      "AGENT USERNAME": "AVESUB19101",
      "ADDRESS": "GJ 98 WORAWORA",
      "Location": "NEAR PRESBY CHURCH",
      "GPS COORDINATES": "7.142759,0.347910",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1758,
      "AGENT BUSINESS NAME": "NABENFORD",
      "AGENT USERNAME": "NVESUB04401",
      "ADDRESS": "KASOA NYANYANOR",
      "Location": "NEAR GOSHEN METHODIST CHURCH",
      "GPS COORDINATES": "5.5.479822,-0.417970",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1759,
      "AGENT BUSINESS NAME": "EDWARD ANKOMAH ENT",
      "AGENT USERNAME": "EAE20101",
      "ADDRESS": "HOUSE NUMBER D/479 ABOMOSU",
      "Location": "NEAR LORRY STATION ",
      "GPS COORDINATES": "6°18'14.5' N 0°43'29.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1760,
      "AGENT BUSINESS NAME": "NABENFORD VENTURES",
      "AGENT USERNAME": "NVESUB04401",
      "ADDRESS": "KASOA OLD MARKET",
      "Location": "NEAR KUFFOURS WATCH",
      "GPS COORDINATES": "5.534384,-0.42241220",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1761,
      "AGENT BUSINESS NAME": "GYAN BAT VENTURES",
      "AGENT USERNAME": "GBVSUB19101",
      "ADDRESS": "MM/14 AHADO",
      "Location": "NEAR ADB",
      "GPS COORDINATES": "7.417124, 0.912421",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1762,
      "AGENT BUSINESS NAME": "GYAN BAT VENTURES",
      "AGENT USERNAME": "GBVSUB19102",
      "ADDRESS": "HH/22M LOWCOST",
      "Location": "NEAR THE WASHING BAY",
      "GPS COORDINATES": "7.014914, 0.911429",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1763,
      "AGENT BUSINESS NAME": "EDENLAND ENTERPRISE",
      "AGENT USERNAME": "EDESUB04402",
      "ADDRESS": "IRON CITY-AMANFROM",
      "Location": "NEAR JD LODGE",
      "GPS COORDINATES": "5.539273,-0.402221",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1764,
      "AGENT BUSINESS NAME": "TAWAKUL VENTURES ",
      "AGENT USERNAME": "TVE20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT NKAWKAW AMANFROM ",
      "Location": "NEAR WINNERS SHS",
      "GPS COORDINATES": "6°33'58.3' N 0°47'30.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1765,
      "AGENT BUSINESS NAME": "GYAN BAT VENTURES",
      "AGENT USERNAME": "GBVSUB19103",
      "ADDRESS": "ABM/14 ABD HOHOE",
      "Location": "NEAR THE RC CHURCH ",
      "GPS COORDINATES": "7.199101, 0.2179121",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1766,
      "AGENT BUSINESS NAME": "VANSELA PREMIUM ENTERPRISE",
      "AGENT USERNAME": "VPESUB20301",
      "ADDRESS": "Near Methodist Jhs, Suhum",
      "Location": "Near Methodist JHS",
      "GPS COORDINATES": "6.032857, -0.448370",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1767,
      "AGENT BUSINESS NAME": "JAMES FOR SURE ",
      "AGENT USERNAME": "JSE03601",
      "ADDRESS": "SAKAMAN",
      "Location": "NEAR GREAT ACCRA POULTRY FARMERS ",
      "GPS COORDINATES": "5.5730625, -0.2719844",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1768,
      "AGENT BUSINESS NAME": "E-MENS PHONES AND ACCESSORIES ",
      "AGENT USERNAME": "EPASUB0051",
      "ADDRESS": "SAKAMAN ",
      "Location": "NEAR CONCERN TEACHERS ASSOCIATION ",
      "GPS COORDINATES": "5.5722875, -0.2730469",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1769,
      "AGENT BUSINESS NAME": "MAWULIFIAM ENTERPRISE",
      "AGENT USERNAME": "MAW50101",
      "ADDRESS": "SOGAKOPE",
      "Location": "NEAR AGAVE RURAL BANK",
      "GPS COORDINATES": "6.000575,0.594564",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1770,
      "AGENT BUSINESS NAME": "EMMANUEL ASIAMAH BOAHEN ENT",
      "AGENT USERNAME": "EAB20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT ASIKAM",
      "Location": "NEAR CHURCH OF PENTECOST",
      "GPS COORDINATES": "6°37'60.0' N 0°49'60.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1771,
      "AGENT BUSINESS NAME": "DECENT MARKETING LINK",
      "AGENT USERNAME": "DML50101",
      "ADDRESS": "SOGAKOPE",
      "Location": "BESIDE HOLY CROSS CATHOLIC CHURCH",
      "GPS COORDINATES": "6.000117, 0.590478",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1772,
      "AGENT BUSINESS NAME": "WILLQUAYE VENTURES ",
      "AGENT USERNAME": "WVESUB20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT KWABENG",
      "Location": "NEAR LORRY STATION ",
      "GPS COORDINATES": "6°19'09.4' N 0°35'18.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1773,
      "AGENT BUSINESS NAME": "SIR MCCALL VENTURES",
      "AGENT USERNAME": "SMV50101",
      "ADDRESS": "DZOLO",
      "Location": "NEAR DZOLO SENIOR HIGH SCHOOL",
      "GPS COORDINATES": "6.773815, 0.481935",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1774,
      "AGENT BUSINESS NAME": "FASTLINKCOM ENTERPRISE",
      "AGENT USERNAME": "FLE19101",
      "ADDRESS": "AKATSI",
      "Location": "NEAR GCB BANK",
      "GPS COORDINATES": "6.128255,0.801123",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1775,
      "AGENT BUSINESS NAME": "PEACE SAM VENTURES",
      "AGENT USERNAME": "PSASUP19101",
      "ADDRESS": "BLI/L234 ZONGO",
      "Location": "ADJACENT STAUGHTER HOUSE",
      "GPS COORDINATES": "7.692146, 0.926785",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1776,
      "AGENT BUSINESS NAME": "ATTIPOULT ENTERPRISE",
      "AGENT USERNAME": "ATT50101",
      "ADDRESS": "KPETOE",
      "Location": "ATTIPOULT FARMS",
      "GPS COORDINATES": "6.548864, 0.682010",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1777,
      "AGENT BUSINESS NAME": "HASART INVESTMENT ",
      "AGENT USERNAME": "HAISUB20102",
      "ADDRESS": "UNNUMBERED CONTAINER AT NKAWKAW DOMEABRA",
      "Location": "NAER MARKET ",
      "GPS COORDINATES": "6°32'27.1' N 0°45'44.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1778,
      "AGENT BUSINESS NAME": "PONSAHNUEL ENT",
      "AGENT USERNAME": "PEN 20101.00",
      "ADDRESS": "UNNUMBERED CONTAINER AT MAMPONG KORANTENG",
      "Location": "NEAR KORANTENG D/A PRIMARY SCHOOL ",
      "GPS COORDINATES": "6°34'36.1' N 0°49'44.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1779,
      "AGENT BUSINESS NAME": "CEDI CITIZEN ",
      "AGENT USERNAME": "CCE03601",
      "ADDRESS": "MATAHEKO",
      "Location": "NEAR PAA WILL JUCTION OR BUS STOP",
      "GPS COORDINATES": "5.5596125, -0.2515469",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1780,
      "AGENT BUSINESS NAME": "EMPIRE DESIRE PREMIUM",
      "AGENT USERNAME": "EDP20301",
      "ADDRESS": "NEAR MUSTEPHAR WOODWORK, Nsawam",
      "Location": "NEAR MUSTEPHAR WOODWORK",
      "GPS COORDINATES": "5.813539, -0.348763",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1781,
      "AGENT BUSINESS NAME": "SAM OYEBS ENTERPRISE ",
      "AGENT USERNAME": "SOE70201",
      "ADDRESS": "D 56 Japekrom",
      "Location": "ADJACENT market ",
      "GPS COORDINATES": "7. 20' 53. 1' N 2. 18' 23. 9' N",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1782,
      "AGENT BUSINESS NAME": "ARMANAHAN ENTERPRISE ",
      "AGENT USERNAME": "AME70101",
      "ADDRESS": "D Sunyani ",
      "Location": "ADJACENT EASY ",
      "GPS COORDINATES": "7. 21' 56. 1' N 2. 16' 23. 9' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1783,
      "AGENT BUSINESS NAME": "NYAME TEASE 2020 ENTERPRISE",
      "AGENT USERNAME": "NTE70101",
      "ADDRESS": "12 SUNYANI",
      "Location": "OPPOSITE FIDELITY BANK ",
      "GPS COORDINATES": "7. 32' 43. 2' N 2. 54' 23. 6' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1784,
      "AGENT BUSINESS NAME": "Maldivda Trading ENTERPRISE ",
      "AGENT USERNAME": "MTE70201",
      "ADDRESS": "D BEREKUM ",
      "Location": "OPPOSITE ZONGO CLINIC",
      "GPS COORDINATES": "7. 26' 80. 4' N 2. 34' 54. 7' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1785,
      "AGENT BUSINESS NAME": "KABMEAL ENTERPRISE...",
      "AGENT USERNAME": "KAE70101",
      "ADDRESS": "Ds 56  sunyani",
      "Location": "ADJACENT FIDELITY SUNYANI ",
      "GPS COORDINATES": "7. 18' 15. 6' N 2. 41' 34. 4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1786,
      "AGENT BUSINESS NAME": "EXGAMEX BUSINESS SERVICES ",
      "AGENT USERNAME": "EBS70101",
      "ADDRESS": "D SAMPA",
      "Location": "ADJACENT FIDELITY SAMPA ",
      "GPS COORDINATES": "7. 15' 35. 5' N 2. 45' 56. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1787,
      "AGENT BUSINESS NAME": "GOD REMEMBER ME HANNAH ENTERPRISE ",
      "AGENT USERNAME": "GRM70101",
      "ADDRESS": "D 56  SUNYANI",
      "Location": "BEHIND TWENE AMANFO SHS",
      "GPS COORDINATES": "7. 57' 43. 9' N 2. 39' 58. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1788,
      "AGENT BUSINESS NAME": "SOLOMON SATELLITE NETWORKS ",
      "AGENT USERNAME": "SSN70201",
      "ADDRESS": "D DORMAA AHENKRO ",
      "Location": "OPPOSITE GCB DORMAA ",
      "GPS COORDINATES": "7. 56' 43. 9' N 2. 33' 34. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1789,
      "AGENT BUSINESS NAME": "MICKEY 26 VENTURES",
      "AGENT USERNAME": "MIV70201",
      "ADDRESS": "D 56/D DORMAA",
      "Location": "OPPOSITE WAMFIE RURAL BANK ",
      "GPS COORDINATES": "7. 75' 43. 9' 2. 38' 65. 8' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1790,
      "AGENT BUSINESS NAME": "GYAU MARTIN VENTURES ",
      "AGENT USERNAME": "GMV70101",
      "ADDRESS": "45 CHIRAA",
      "Location": "BEHIND ",
      "GPS COORDINATES": "7. 34' 67. 6' N 2. 41'45. 0' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1791,
      "AGENT BUSINESS NAME": "DANNY BUSINESS VENTURES ",
      "AGENT USERNAME": "DBU70101",
      "ADDRESS": "45 CHIRAA",
      "Location": "ADJACENT SDA ",
      "GPS COORDINATES": "7 . 15' 44. 0' N 2. 43' 00. 2' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1792,
      "AGENT BUSINESS NAME": "PEAK DIAMONDS",
      "AGENT USERNAME": "PDE70201",
      "ADDRESS": "56 DORMAA AHENKRO",
      "Location": "MARKET INSIDE",
      "GPS COORDINATES": "7. 10'55. 0' N 2. 43' 67. 0' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1793,
      "AGENT BUSINESS NAME": "BISABOAT VENTURES",
      "AGENT USERNAME": "BVE02501",
      "ADDRESS": "TABORA",
      "Location": "AP FILLING STATION ",
      "GPS COORDINATES": "5.626955-0.253865",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1794,
      "AGENT BUSINESS NAME": "D O HOPE ",
      "AGENT USERNAME": "DOH02501",
      "ADDRESS": "TABORA ",
      "Location": "AP FILLING STATION ",
      "GPS COORDINATES": "5.626212,-0.254599",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1795,
      "AGENT BUSINESS NAME": "ANTWI BOASIAKO PHONES AND ACCESSORIES",
      "AGENT USERNAME": "APASUB02501",
      "ADDRESS": "TABORA ALHAJI",
      "Location": "ALHAJI STATION ",
      "GPS COORDINATES": "5.628355,-0.262096",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1796,
      "AGENT BUSINESS NAME": "ANTWI BOASIAKO PHONES AND ACCESSORIES",
      "AGENT USERNAME": "APASUB02502",
      "ADDRESS": "ALHAJI ",
      "Location": "ALHAJI STATION ",
      "GPS COORDINATES": "5.628008,-0.262030",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1797,
      "AGENT BUSINESS NAME": "WINIFRED AGYEKUMS VENTURES ",
      "AGENT USERNAME": "WAVSUB03801",
      "ADDRESS": "CHANTAN ",
      "Location": "HAPPY HOME SCHOOL ",
      "GPS COORDINATES": "5.623991,-0.257432",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1798,
      "AGENT BUSINESS NAME": "FAMOUS K.S ENTERPRISE ",
      "AGENT USERNAME": "FKESUB12301",
      "ADDRESS": "DANSOMAN ",
      "Location": "CLOSE TO TRIUMPHANT ASSEBLIES OF GOD CHURCH ",
      "GPS COORDINATES": "5.5267375, -0.2697031",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1799,
      "AGENT BUSINESS NAME": "B JAMAS ENTERPRISE ",
      "AGENT USERNAME": "BJE80102",
      "ADDRESS": "Kpalsi ",
      "Location": "Close to JANDA OIL KPALSI",
      "GPS COORDINATES": "NS-075-3268",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1800,
      "AGENT BUSINESS NAME": "ABRASA ENTERPRISE ",
      "AGENT USERNAME": "ABRSUB80101",
      "ADDRESS": "Choggu Round about ",
      "Location": "Choggu Pentecost church  ",
      "GPS COORDINATES": "NS-038-1297",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1801,
      "AGENT BUSINESS NAME": "Zion juda Enterprise ",
      "AGENT USERNAME": "Zion Juda Enterprise ",
      "ADDRESS": "Airtel Tigo Office ",
      "Location": "Inside around Airtel Tigo office",
      "GPS COORDINATES": "NT-0025-1391",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1802,
      "AGENT BUSINESS NAME": "Bulugu Entert",
      "AGENT USERNAME": "BGE80101",
      "ADDRESS": "Mossi Zongo",
      "Location": "Opposite ADB bank ",
      "GPS COORDINATES": "NT-0013-7076",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1803,
      "AGENT BUSINESS NAME": "Elias BUSINESS centre ",
      "AGENT USERNAME": "ANEN70102",
      "ADDRESS": "Sd 56 SUNYANI",
      "Location": "CHIRAA STATION ",
      "GPS COORDINATES": "7. 20' 01. 2' N 19' 45. 5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1804,
      "AGENT BUSINESS NAME": "POINT 7 ULTIMATE VENTURES",
      "AGENT USERNAME": "PUVSUP70401",
      "ADDRESS": "56 sunyani",
      "Location": "ADJACENT HIGH COURT",
      "GPS COORDINATES": "7. 21' 01. 3' N 2. 19' 45. 5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1805,
      "AGENT BUSINESS NAME": "AKWASI KYEI BAFFOUR ENTERPRISE ",
      "AGENT USERNAME": "AKB70101",
      "ADDRESS": "Box 45 ODUMASE",
      "Location": "ADJACENT NDC OFFICE",
      "GPS COORDINATES": "7. 20' 01. 2' N 2. 91' 46. 5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1806,
      "AGENT BUSINESS NAME": "KEY IT SOLUTIONS ",
      "AGENT USERNAME": "KIS70401",
      "ADDRESS": "BOX 45 SUNYANI",
      "Location": "OPPOSITE NURSING AND MIDWIFERY SCHOOL ",
      "GPS COORDINATES": "7. 30' 01. 2' N 2. 91' 54. 5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1807,
      "AGENT BUSINESS NAME": "KHATILE ULTIMATE VENTURES ",
      "AGENT USERNAME": "KUV70501",
      "ADDRESS": "423 SAMPA",
      "Location": "ADJACENT GOIL STATION ",
      "GPS COORDINATES": "7. 32' 01. 4' N 2. 32'45. 5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1808,
      "AGENT BUSINESS NAME": "DUNEE P B BUSINESS VENTURES ",
      "AGENT USERNAME": "DPB09001",
      "ADDRESS": "NAPOGBAKOLE",
      "Location": "CLOSE TO THE MILITARY BARRACKS ",
      "GPS COORDINATES": "10°02'01.2' N 2°30'18.0' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1809,
      "AGENT BUSINESS NAME": "DVE09001",
      "AGENT USERNAME": "DADDYKINS VENTURES ",
      "ADDRESS": "NAPOGBAKOLE",
      "Location": "CLOSE TO DEEPER CHRISTIAN LIFE CHURCH ",
      "GPS COORDINATES": "10°02'42.5' N 2°30'19.5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1810,
      "AGENT BUSINESS NAME": "MEDTONS ENTERPRISE ",
      "AGENT USERNAME": "MTE09001",
      "ADDRESS": "KONTA ",
      "Location": "OPPOSITE WA SENIOR HIGH SCHOOL ",
      "GPS COORDINATES": "10°02'42.0' N 2°29'30.1' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1811,
      "AGENT BUSINESS NAME": "CAPTAIN LAMPTEY ENTERPRISE ",
      "AGENT USERNAME": "CLE 9001.00",
      "ADDRESS": "KABANYE",
      "Location": "OPPOSITE SENA CLINIC ",
      "GPS COORDINATES": "10°03'22.2' N 2°30'02.8' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1812,
      "AGENT BUSINESS NAME": "BASSAW BASHIT ENTERPRISE ",
      "AGENT USERNAME": "BBE09001",
      "ADDRESS": "ZONGO",
      "Location": "CLOSE TO ALHAJI 1000 CHEMICAL SHOP",
      "GPS COORDINATES": "10°03'35.6' N 2°30'15.3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1813,
      "AGENT BUSINESS NAME": "WAAHU ENTERPRISE ",
      "AGENT USERNAME": "WAE09001",
      "ADDRESS": "TANINA ",
      "Location": "CLOSE TO TANINA BASIC SCHOOL",
      "GPS COORDINATES": "10°54'36.2' N 2°27'28.5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1814,
      "AGENT BUSINESS NAME": "CAPSIS VENTURES ",
      "AGENT USERNAME": "CVE 90101.00",
      "ADDRESS": "HAMILE",
      "Location": "OPPOSITE THE LORRY STATION ",
      "GPS COORDINATES": "10°59'50.3' N 2°44'54.6' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1815,
      "AGENT BUSINESS NAME": "ST OFORI ATTA'S VENTURES ",
      "AGENT USERNAME": "STA09001",
      "ADDRESS": "KPAGURI ",
      "Location": "CLOSE TO NANDOM RURAL BANK ",
      "GPS COORDINATES": "10°03'04.0' N 2°30'57.4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1816,
      "AGENT BUSINESS NAME": "ISAAC DIEL VENTURES ",
      "AGENT USERNAME": "IDV09001",
      "ADDRESS": "KPAGURI ",
      "Location": "CLOSE TO THE GUYS PUB",
      "GPS COORDINATES": "10°02'58.7' N 2°30'57.9' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1817,
      "AGENT BUSINESS NAME": "NEVER 2 GIVE UP ENTERPRISE",
      "AGENT USERNAME": "NGE09001",
      "ADDRESS": "DOBILE ",
      "Location": "CLOSE ALHAJI CONDITION'S RESIDENCE ",
      "GPS COORDINATES": "10°03'57.4' N 2°30'48.1' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1818,
      "AGENT BUSINESS NAME": "SULEBAN ENTERPRISE ",
      "AGENT USERNAME": "SEN90101",
      "ADDRESS": "WAPAANI",
      "Location": "CLOSE TO NIB BANK",
      "GPS COORDINATES": "10°03'52.5' N 2°30'20.8' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1819,
      "AGENT BUSINESS NAME": "GOD'S NATURE",
      "AGENT USERNAME": "GNA09001",
      "ADDRESS": "FONGU",
      "Location": "IN FRONT OF FONGU CHIEF'S PALACE",
      "GPS COORDINATES": "10°03'58.0' N 2°30'13.2' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1820,
      "AGENT BUSINESS NAME": "BIG ALOKO ENTERPRISE ",
      "AGENT USERNAME": "BAE09001",
      "ADDRESS": "DOKPONG",
      "Location": "CLOSE TO WA AIRPORT ",
      "GPS COORDINATES": "10°04'26.6' N 2°30'27.9' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1821,
      "AGENT BUSINESS NAME": "TOREKUUBU VENTURES ",
      "AGENT USERNAME": "TVE09001",
      "ADDRESS": "DOKPONG ",
      "Location": "OPPOSITE SINAPI ABA SAVINGS AND LOANS",
      "GPS COORDINATES": "10°04'22.8' N 2°30'23.6' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1822,
      "AGENT BUSINESS NAME": "ADEL ALHASSAN ENTERPRISE ",
      "AGENT USERNAME": "AAE09001",
      "ADDRESS": "WA CENTRAL MARKET ",
      "Location": "BEHIND STANBIC BANK",
      "GPS COORDINATES": "10°03'46.1' N l2°30'18.7' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1823,
      "AGENT BUSINESS NAME": "HM QUICK LINKS ",
      "AGENT USERNAME": "HMQ02701",
      "ADDRESS": "SPINTEX ",
      "Location": "OPPOSITE ADOM PLAZA",
      "GPS COORDINATES": "5'37'49,8'N 0'05'31,4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1824,
      "AGENT BUSINESS NAME": "GRACE ALONE VENTURES ",
      "AGENT USERNAME": "GAVSUB02701",
      "ADDRESS": "NUNGUA ",
      "Location": "FEW METRES AWAY FROM GBC BANK ROAD ",
      "GPS COORDINATES": "5'36'00.3'N 0'05'09.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1825,
      "AGENT BUSINESS NAME": "GRACE ALONE VENTURES ",
      "AGENT USERNAME": "GAVSUB02702",
      "ADDRESS": "NUNGUA ",
      "Location": "CLOSE TO NUNGUA SHS",
      "GPS COORDINATES": "5,600076,-0.086028",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1826,
      "AGENT BUSINESS NAME": "21ST CENTURY TECHNOLOGY",
      "AGENT USERNAME": "2CTSUB00201",
      "ADDRESS": "SPINTEX ",
      "Location": "FEW METRES FROM TOBINCO GROUP ",
      "GPS COORDINATES": "5,643887,-0.111276",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1827,
      "AGENT BUSINESS NAME": "AMARABA HUB",
      "AGENT USERNAME": "AMH80102",
      "ADDRESS": "41",
      "Location": "OPPOSITE ZEN FILLING STATION ",
      "GPS COORDINATES": "9.421200, - 0.885338",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1828,
      "AGENT BUSINESS NAME": "GURU JAY ENTERPRISE ",
      "AGENT USERNAME": "GJE09001",
      "ADDRESS": "WECHIAU ",
      "Location": "CLOSE TO THE WECHIAU MARKET ",
      "GPS COORDINATES": "9°49'52.4' N 2°40'58.5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1829,
      "AGENT BUSINESS NAME": "K O SPOT  & POOL BAR",
      "AGENT USERNAME": "KSP70301",
      "ADDRESS": "TECHIMAN MARKET -BONO EAST",
      "Location": "BEHIND U -TRACK SAVINGS AND LOANS",
      "GPS COORDINATES": "7'34'54.8'N1'56'31.6'W/7.5819000,-1.9421050",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1830,
      "AGENT BUSINESS NAME": "ZEBA ENTERPRISE",
      "AGENT USERNAME": "ZEN70301",
      "ADDRESS": "TECHIMAN, BONO EAST",
      "Location": "NEAR ADB, TECHIMAN",
      "GPS COORDINATES": "7'35'32.2'N1'56'12.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1831,
      "AGENT BUSINESS NAME": "HUM-K ENTERPRISE",
      "AGENT USERNAME": "HKESUB20301",
      "ADDRESS": "UNNUMBERED SHOP AT HUHUNYA",
      "Location": "NEAR POLICE JUNCTION HUHUNYA",
      "GPS COORDINATES": "6.128335-0.210599",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1832,
      "AGENT BUSINESS NAME": "HUM K ENTERPRISE",
      "AGENT USERNAME": "HKESUB20302",
      "ADDRESS": "UNNUMBERED SHOP AT HUHUNYA",
      "Location": "NEAR THE MARKET",
      "GPS COORDINATES": "6.165695-0.177794",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1833,
      "AGENT BUSINESS NAME": "JEEWIN VENTURES ",
      "AGENT USERNAME": "JVE02701",
      "ADDRESS": "SPINTEX ",
      "Location": "BASKET JUNCTION- 5 METRES FROM AIRTEL-TIGO OFFICE",
      "GPS COORDINATES": "5.6389700 -0.1061990",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1834,
      "AGENT BUSINESS NAME": "BUKASON EXPRESS ENTERPRISE ",
      "AGENT USERNAME": "BEE02701",
      "ADDRESS": "SPINTEX ",
      "Location": "AROUND RED CARPET EVENT CENTRE ",
      "GPS COORDINATES": "5.625910,-0.086212",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1835,
      "AGENT BUSINESS NAME": "LOUIS APPIAH VENTURES ",
      "AGENT USERNAME": "LPV03601",
      "ADDRESS": "UNNUMBERED SHOP AT ODORKOR ",
      "Location": "NEAR ASA SAVINGS AND LOANS",
      "GPS COORDINATES": "5.579154,-0.266520",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1836,
      "AGENT BUSINESS NAME": "KANEL EXPERT ENTERPRISE ",
      "AGENT USERNAME": "KEX05101",
      "ADDRESS": "UNNUMBERED SHOP AT MANHEAN ",
      "Location": "NEAR THE LORRY STATION ",
      "GPS COORDINATES": "5.638010,-0351701",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1837,
      "AGENT BUSINESS NAME": "SALVATION ARK ENTERPRISE ",
      "AGENT USERNAME": "SAE05101",
      "ADDRESS": "UNNUMBERED SHOP AT MANHEAN ",
      "Location": "NEAR MANHEAN JUNCTION ",
      "GPS COORDINATES": "5.643919,-0.344238",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1838,
      "AGENT BUSINESS NAME": "STAEWANA VENTURES ",
      "AGENT USERNAME": "SVE03401",
      "ADDRESS": "Unnumbered Shop Madina Market",
      "Location": "Inside Madina Market Near Cassava Dough park ",
      "GPS COORDINATES": "5.670265-0.168792",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1839,
      "AGENT BUSINESS NAME": "A.K. Appiah Ent",
      "AGENT USERNAME": "AKA01501",
      "ADDRESS": "Unnumbered Shop Adenta Sakora ",
      "Location": "Near Jaytee Klosset or Junction 5 Lounge",
      "GPS COORDINATES": "5.695149 - 0.184851",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1840,
      "AGENT BUSINESS NAME": "Bitremitter Exchange ",
      "AGENT USERNAME": "BIT01801",
      "ADDRESS": "Unnumbered Shop Oyarifa",
      "Location": "Same building with Abokobi Rural Bank",
      "GPS COORDINATES": "5.74344 - 0.1770089",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1841,
      "AGENT BUSINESS NAME": "Billspot Limited ",
      "AGENT USERNAME": "BSL01901",
      "ADDRESS": "Unnumbered Shop UPSA, ",
      "Location": "Opposite UMB ",
      "GPS COORDINATES": "5.6595601 - 0.1648902",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1842,
      "AGENT BUSINESS NAME": "Cyntamak Enterprise ",
      "AGENT USERNAME": "CYE04701",
      "ADDRESS": "HNO EA7/2 Wuntumi Street, East Adenta",
      "Location": "Opposite EP CHURCH ",
      "GPS COORDINATES": "5.6595601 - 0.1648902",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1843,
      "AGENT BUSINESS NAME": "Cyntamak Enterprise ",
      "AGENT USERNAME": "CYE04701",
      "ADDRESS": "HNo EA7/2 Wuntumi Street Adenta East",
      "Location": "Opposite EP CHURCH",
      "GPS COORDINATES": "5.6916313 - 5.6916313",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1844,
      "AGENT BUSINESS NAME": "Dzifa Phidzi Services ",
      "AGENT USERNAME": "DPSSUB01901",
      "ADDRESS": "Unnumbered Shop Madina Estate ",
      "Location": "Near Action School",
      "GPS COORDINATES": "5.667124 - 0.159514",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1845,
      "AGENT BUSINESS NAME": "MS TELECOMMUNICATION AND BUSINESS ENTERPRISE",
      "AGENT USERNAME": "MST20301",
      "ADDRESS": "AKWATIA STATION, AKWATIA",
      "Location": "At Akwatia station",
      "GPS COORDINATES": "6.040554, -0.8086232%",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1846,
      "AGENT BUSINESS NAME": "RAPHLAND COMMUNICATIONS ENTERPRISE",
      "AGENT USERNAME": "RCE20301",
      "ADDRESS": "Unnumbered Shop, Near Liberty transport station",
      "Location": "Near Liberty station",
      "GPS COORDINATES": "5.925710, -0.987752",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1847,
      "AGENT BUSINESS NAME": "Placid Tarwar Ventures",
      "AGENT USERNAME": "PTVSUB20301",
      "ADDRESS": "Hno.D6, Market lane, Nsawam.",
      "Location": "Near Vodaphone office",
      "GPS COORDINATES": "5.811875, -0.350812",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1848,
      "AGENT BUSINESS NAME": "NOBLE MULTITECH AND BUSINESS ENTERPRISE",
      "AGENT USERNAME": "NMA20301",
      "ADDRESS": "Hno. B24, Akyinso Asene Akroso",
      "Location": "Near Akroso Market",
      "GPS COORDINATES": "5.770996, -0.767543",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1849,
      "AGENT BUSINESS NAME": "EFRIPA VENTURES",
      "AGENT USERNAME": "EFV20301",
      "ADDRESS": "Hno. B167 Anum Via, Asamankese",
      "Location": "Near Asamankese Market",
      "GPS COORDINATES": "5.862626, -0.665873",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1850,
      "AGENT BUSINESS NAME": "SELOVENT ENTERPRISE",
      "AGENT USERNAME": "SEE20302",
      "ADDRESS": "Unnumbered Shop, opposite South Akim Rural Bank, Adowagyiri, Nsawam",
      "Location": "Opposite,, South Akim Rural Bank",
      "GPS COORDINATES": "5.819834, -0.354549",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1851,
      "AGENT BUSINESS NAME": "AJAS94 VENTURES",
      "AGENT USERNAME": "AJASUB30101",
      "ADDRESS": "UNNUMBERED LOCATION AT AKROFOUM",
      "Location": "NEAR THEIR MARKET",
      "GPS COORDINATES": "CS-2111-3372",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1852,
      "AGENT BUSINESS NAME": "FEK20301",
      "AGENT USERNAME": "FLO ETERNAL KING VENTURES",
      "ADDRESS": "Unumbered Shop, opposite Royal Chapel, Djankrom, Nsawam.",
      "Location": "Opposite Royal Chapel, Djankrom",
      "GPS COORDINATES": "5.814680, -0.346216",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1853,
      "AGENT BUSINESS NAME": "FRANKO BOOKS AND STATIONARY",
      "AGENT USERNAME": "FBS20301",
      "ADDRESS": "Unnumbered shop, inside Kasoa station, Asamankese",
      "Location": "Inside Kasoa station",
      "GPS COORDINATES": "5.862422, -0.667555",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1854,
      "AGENT BUSINESS NAME": "Dynamic Reigns LTD",
      "AGENT USERNAME": "DRL01501",
      "ADDRESS": "Redco Flat Third Block Crescent Street",
      "Location": "Inside Redco Flat",
      "GPS COORDINATES": "5.682896 - 0.173225",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1855,
      "AGENT BUSINESS NAME": "FIISCO HOME ENTERPRISE",
      "AGENT USERNAME": "FIHSUB20302",
      "ADDRESS": "Unumbered shop, adjacent St Dominic hospital, Akwatia",
      "Location": "Adjacent St. Dominic hospital",
      "GPS COORDINATES": "6.0466688, -0.7970831",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1856,
      "AGENT BUSINESS NAME": "PRISCA ENTERPRISE",
      "AGENT USERNAME": "PEN 30101.00",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN AKROFOUM",
      "Location": "NEAR THEIR FOOTBALL FIELD ",
      "GPS COORDINATES": "CS-2111-4630",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1857,
      "AGENT BUSINESS NAME": "BY GOD'S GRACE ABOO VENTURES",
      "AGENT USERNAME": "GGASUB20301",
      "ADDRESS": "Hno C259A, Asamankese",
      "Location": "Along The Suhum road",
      "GPS COORDINATES": "5.863665, -0.666548",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1858,
      "AGENT BUSINESS NAME": "GKE HALIGAH VENTURES ",
      "AGENT USERNAME": "GHV02701",
      "ADDRESS": "TEMA",
      "Location": "BEHIND DVLA",
      "GPS COORDINATES": "5'41'10.7'N 0.00'05.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1859,
      "AGENT BUSINESS NAME": "ALL NETWORK PHONES ",
      "AGENT USERNAME": "ANP00201",
      "ADDRESS": "SPINTEX ",
      "Location": "FEW DRIVE FROM CBG ",
      "GPS COORDINATES": "5.630835,-0.093599",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1860,
      "AGENT BUSINESS NAME": "PRINCEAIDOO VENTURES",
      "AGENT USERNAME": "PAVSUB30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN DANSAME ",
      "Location": "NEAR DANSAME M/A SCHOOL ",
      "GPS COORDINATES": "CR-3457-1762",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1861,
      "AGENT BUSINESS NAME": "SAM'S GOD IS KING VENTURES ",
      "AGENT USERNAME": "SIV01101",
      "ADDRESS": "SPINTEX ",
      "Location": "NOT FAR FROM ACTION CHAPEL",
      "GPS COORDINATES": "5.624567,-0.152329",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1862,
      "AGENT BUSINESS NAME": "KOO WILLIE ENTERPRISE",
      "AGENT USERNAME": "KWE20301",
      "ADDRESS": "UNNUMBERED SHOP AT ADWESO",
      "Location": "OPPOSITE ADWESO MARKET",
      "GPS COORDINATES": "6.069840-0.252877",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1863,
      "AGENT BUSINESS NAME": "OPHELIA 78 ENTERPRISE",
      "AGENT USERNAME": "OMO70101",
      "ADDRESS": "D 56 SUNYANI",
      "Location": "OPPOSITE BISVEL DEALERS",
      "GPS COORDINATES": "7. 20' 08. 5' N 2. 19' 33. 8' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1864,
      "AGENT BUSINESS NAME": "RANSFORD PHONES AND TRADING SERVICES ",
      "AGENT USERNAME": "RPT70401",
      "ADDRESS": "R 40 sunyani",
      "Location": "OPPOSITE WAMFIE RURAL BANK ",
      "GPS COORDINATES": "7. 20' 07. 3' N 2. 19' 32. 3 ' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1865,
      "AGENT BUSINESS NAME": "Haatso Pharmacy ",
      "AGENT USERNAME": "HPL01501",
      "ADDRESS": "Unnumbered Shop Haatso Ecomog",
      "Location": "Near Sam J Hospital ",
      "GPS COORDINATES": "5.6764518 - 0.2022815",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1866,
      "AGENT BUSINESS NAME": "Iorigin Apple Office ",
      "AGENT USERNAME": "IAP04701",
      "ADDRESS": "Unnumbered Shop Agbogba ",
      "Location": "Near Custom Bonded Warehouse ",
      "GPS COORDINATES": "5.6898990 - 01961550",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1867,
      "AGENT BUSINESS NAME": "Smart Amfoh",
      "AGENT USERNAME": "SAM04701",
      "ADDRESS": "Unnumbered Shop Agbogba ",
      "Location": "Near Agbogba Police Station  / Goil Filling Station ",
      "GPS COORDINATES": "5.6866923 - 0.1943955",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1868,
      "AGENT BUSINESS NAME": "Island Link Multimedia Firm",
      "AGENT USERNAME": "ILM04701",
      "ADDRESS": "Unnumbered Shop Agbogba Ashongman Road ",
      "Location": "Near Ashongman GPRTU station",
      "GPS COORDINATES": "5.702975-0.210315",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1869,
      "AGENT BUSINESS NAME": "JA Best Value ",
      "AGENT USERNAME": "JBV01501",
      "ADDRESS": "Unnumbered Shop Haatso ",
      "Location": "Opposite Ecobank",
      "GPS COORDINATES": "5.667496-0.198978",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1870,
      "AGENT BUSINESS NAME": "Jecita Company Ltd",
      "AGENT USERNAME": "JCL01801",
      "ADDRESS": "Unnumbered Shop Adenta ",
      "Location": "Near Rowi",
      "GPS COORDINATES": "5.7170143-0.1640826",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1871,
      "AGENT BUSINESS NAME": "PEACE-SAM VENTURES",
      "AGENT USERNAME": "PSASUB19101",
      "ADDRESS": "D",
      "Location": "D",
      "GPS COORDINATES": "7.011459, 0.547231",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1872,
      "AGENT BUSINESS NAME": "EDZORDZI FARMS",
      "AGENT USERNAME": "EDF19101",
      "ADDRESS": "AB/88C ATABU",
      "Location": "OPPOSITE THE EP CHURCH ",
      "GPS COORDINATES": "7.2100657, 0.365711",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1873,
      "AGENT BUSINESS NAME": "ASEUNAX 92 VENTURES",
      "AGENT USERNAME": "AVE61202",
      "ADDRESS": "Abofour Chariben",
      "Location": "Near the clinic ",
      "GPS COORDINATES": "7°07'40.7'N 1°43'47.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1874,
      "AGENT BUSINESS NAME": "BAFFOUR IKE VENTURES ",
      "AGENT USERNAME": "BIVSUB61201",
      "ADDRESS": "Abofour ",
      "Location": "Abofour Close to hospital  Junction ",
      "GPS COORDINATES": "7°07'44.4'N 1°44'04.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1875,
      "AGENT BUSINESS NAME": "BAFFOUR IKE VENTURES ",
      "AGENT USERNAME": "BIVSUP61201",
      "ADDRESS": "Abofour",
      "Location": "Close to hospital Junction ",
      "GPS COORDINATES": "7°07'44.4'N 1°44'04.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1876,
      "AGENT BUSINESS NAME": "ABDULAI MOHAMMED 96 ENTERPRISE",
      "AGENT USERNAME": "AM961201",
      "ADDRESS": "Abofour",
      "Location": "Close to Opportunity International Bank",
      "GPS COORDINATES": "7°07'56.3'N 1°44'04.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1877,
      "AGENT BUSINESS NAME": "GOD'S ATTITUDE VENTURES ",
      "AGENT USERNAME": "GAV61201",
      "ADDRESS": "Abofour",
      "Location": "Close to Aofour Bus stop",
      "GPS COORDINATES": "7°08'02.1'N 1°44'04.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1878,
      "AGENT BUSINESS NAME": "BAFFOUR IKE VENTURES ",
      "AGENT USERNAME": "BIVSUB61202",
      "ADDRESS": "Abofour ",
      "Location": "Off the Abofour old town road",
      "GPS COORDINATES": "7°08'03.4'N 1°44'08.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1879,
      "AGENT BUSINESS NAME": "GK AMANKWAAH ENTERPRISE LIMITED",
      "AGENT USERNAME": "GKA60101",
      "ADDRESS": "Amakom",
      "Location": "INSIDE AMAKOM SHELL",
      "GPS COORDINATES": "6°41'22.1'N 1°36'24.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1880,
      "AGENT BUSINESS NAME": "MALLAM HARIS VENTURES ",
      "AGENT USERNAME": "MHV60101",
      "ADDRESS": "ADikrom",
      "Location": "NEAR ADIKROM GOIL FILLING ",
      "GPS COORDINATES": "6°42'15.3'N 1°35'18.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1881,
      "AGENT BUSINESS NAME": "SILVER SUN ENTERPRISE ",
      "AGENT USERNAME": "SSE61301",
      "ADDRESS": "ASOKORE MAMPONG",
      "Location": "BEHIND ASOKORE MAMPONG RURAL BANK",
      "GPS COORDINATES": "6°42'28.8'N 1°34'00.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1882,
      "AGENT BUSINESS NAME": "JAHAD SAH ENTERPRISE",
      "AGENT USERNAME": "JSE61301",
      "ADDRESS": "TECH JUNCTION ",
      "Location": "INSIDE TECH JUNCTION",
      "GPS COORDINATES": "6°41'15.4'N 1°34'22.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1883,
      "AGENT BUSINESS NAME": "DANNY OPEKU ENTERPRISE ",
      "AGENT USERNAME": "DOE60101",
      "ADDRESS": "SAWABA",
      "Location": "NEAR SAWABA CUSTOMS ",
      "GPS COORDINATES": "6°41'43.2'N 1°35'33.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1884,
      "AGENT BUSINESS NAME": "KENNETH COL VENTURES",
      "AGENT USERNAME": "KCV60701",
      "ADDRESS": "STADIUM ",
      "Location": "NEAR ABOUDEY FAST FOOD STADIUM",
      "GPS COORDINATES": "6°41'14.2'N 1°36'14.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1885,
      "AGENT BUSINESS NAME": "F DONKOR ENTERPRISE ",
      "AGENT USERNAME": "FDE60101",
      "ADDRESS": "STADIUM",
      "Location": "NEAR MY KITCHEN RESTRUANT",
      "GPS COORDINATES": "6°41'02.0'N 1°36'14.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1886,
      "AGENT BUSINESS NAME": "NHYIRABA AMPONSAH VENTURES ",
      "AGENT USERNAME": "NAV60101",
      "ADDRESS": "OFORIKROM",
      "Location": "NEAR MAGNETIC HOTEL ",
      "GPS COORDINATES": "6°40'59.4'N 1°35'38.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1887,
      "AGENT BUSINESS NAME": "IN HIM MULTY PURPOSE  VENTURES ",
      "AGENT USERNAME": "IMV61002",
      "ADDRESS": "TAFO SANTA",
      "Location": "OPPOSITE THE  PUBLIC  TOILET ",
      "GPS COORDINATES": "6°23'20.2'N1°33'11.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1888,
      "AGENT BUSINESS NAME": "Great Makama Ventures ",
      "AGENT USERNAME": "GMV61002",
      "ADDRESS": "Tafo",
      "Location": "Near Oniwaa Memorial  School",
      "GPS COORDINATES": "6°43'25.5'N1°37'07.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1889,
      "AGENT BUSINESS NAME": "Holy Spirit  Money Lending Services",
      "AGENT USERNAME": "HSM61001",
      "ADDRESS": "Tafo New Road",
      "Location": "Near Tumi Ye Junction ",
      "GPS COORDINATES": "6°43'39.0'N12°37'26.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1890,
      "AGENT BUSINESS NAME": "HUBRUSH  ENTERPRISE ",
      "AGENT USERNAME": "HUB61001",
      "ADDRESS": "TAFO",
      "Location": "OPPOSITE PLUS ENERGY FILLING STATION ",
      "GPS COORDINATES": "6°43'25.8'N1°37'10.12'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1891,
      "AGENT BUSINESS NAME": "BENADD SERVICES ",
      "AGENT USERNAME": "BSE61001",
      "ADDRESS": "TAFO",
      "Location": "OPPOSITE TAFO NEW JUNCTION ",
      "GPS COORDINATES": "6°43'29.1'N1°37'06.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1892,
      "AGENT BUSINESS NAME": "KWARTENG DANIEL SARFO ",
      "AGENT USERNAME": "KDSSUB03801",
      "ADDRESS": "UNNUMBERED SHOP AT NSAKINA ",
      "Location": "NEAR POLICEMAN JUNCTION ",
      "GPS COORDINATES": "5.6721022,-0.3270997",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1893,
      "AGENT BUSINESS NAME": "Twumasi  Galaxy  Enterprise ",
      "AGENT USERNAME": "TGE61001",
      "ADDRESS": "TAFO",
      "Location": "OPPOSITE  NEW ROAD TAXI STATION ",
      "GPS COORDINATES": "6°14'28.1'N1°37'06.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1894,
      "AGENT BUSINESS NAME": "JERIJONA ENTERPRISE",
      "AGENT USERNAME": "JEN50101",
      "ADDRESS": "JUAPONG",
      "Location": "NEAR JUAPONG MARKET",
      "GPS COORDINATES": "6.250256, 0.145188",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1895,
      "AGENT BUSINESS NAME": "PEDAS B ENTERPRISE",
      "AGENT USERNAME": "PBESUB50101",
      "ADDRESS": "TSITO",
      "Location": "NEAR THE TSITO SUMMER HUNT",
      "GPS COORDINATES": "6.548298, 0.292295",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1896,
      "AGENT BUSINESS NAME": "CRISPAT INSTALLATIONS",
      "AGENT USERNAME": "CINSUB02801",
      "ADDRESS": "ASHAIMAN LEBANON",
      "Location": "NEAR 2ND STEP BUS STOP",
      "GPS COORDINATES": "5.7015380,-0.0412930",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1897,
      "AGENT BUSINESS NAME": "ABI AWUKU VENTURES",
      "AGENT USERNAME": "AAV02801",
      "ADDRESS": "ASHAIMAN MIDDLE EAST BEHIND QUEENS HOTEL",
      "Location": "NEAR ICGC TEMPLE",
      "GPS COORDINATES": "5.6884770,-0.0214520",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1898,
      "AGENT BUSINESS NAME": "UNIQUE EA VENTURES",
      "AGENT USERNAME": "UEV02801",
      "ADDRESS": "AFIENYA LAST STOP",
      "Location": "NEAR THE ZONGO JUNCTION",
      "GPS COORDINATES": "5.8012080,-0.0061170",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1899,
      "AGENT BUSINESS NAME": "SAMSA FOREVER GRATEFUL VENTURES",
      "AGENT USERNAME": "SFG02801",
      "ADDRESS": "ASHAIMAN FETER LINE ",
      "Location": "BEHIND CHINA MALL",
      "GPS COORDINATES": "5.6885470,-0.0214570",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1900,
      "AGENT BUSINESS NAME": "MJ STRONG ENTERPRISE",
      "AGENT USERNAME": "MSE02801",
      "ADDRESS": "ASHAIMAN ZONE 5",
      "Location": "NEAR BOMBO SPOT",
      "GPS COORDINATES": "5.7071130,-0.0374320",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1901,
      "AGENT BUSINESS NAME": "LARE 1 BUSINESS SOLUTION",
      "AGENT USERNAME": "LBS02801",
      "ADDRESS": "ASHAIMAN NEW TOWN",
      "Location": "NEAR CHRIST EMBASSY CHURCH",
      "GPS COORDINATES": "5.7039140,-0.0296310",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1902,
      "AGENT BUSINESS NAME": "JOELIA'S VENTURES",
      "AGENT USERNAME": "JVE02801",
      "ADDRESS": "ASHAIMAN OFFICIAL TOWN",
      "Location": "NEAR THE TAXI RANK",
      "GPS COORDINATES": "5.697880,-0.027319",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1903,
      "AGENT BUSINESS NAME": "SUZZIE'S BEAUTY PARLOUR AND TRADING",
      "AGENT USERNAME": "SBP02801",
      "ADDRESS": "ASHAIMAN ZENU BLOCK FACTORY",
      "Location": "OPPOSITE AGAPET FILLING STATION",
      "GPS COORDINATES": "5.7187150,-0.0518810",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1904,
      "AGENT BUSINESS NAME": "EKF APEX PRINTING AND BUSINESS ENTERPRISE",
      "AGENT USERNAME": "EKF02801",
      "ADDRESS": "ASHAIMAN TAIFA",
      "Location": "NEAR SMART PHARMACY",
      "GPS COORDINATES": "5.6978561,-0.0284780",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1905,
      "AGENT BUSINESS NAME": "SAINT IKE VENTURES",
      "AGENT USERNAME": "SIV02802",
      "ADDRESS": "HSE NO F/535 OFFICIAL TOWN",
      "Location": "NEAR THE TAXI RANK",
      "GPS COORDINATES": "5.697834,-0.0252620",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1906,
      "AGENT BUSINESS NAME": "MIT-STONE VENTURES",
      "AGENT USERNAME": "MSV02801",
      "ADDRESS": "HSE NI/117 ASHAIMAN TIAFA",
      "Location": "NEAR ANCHOR HOUSE ",
      "GPS COORDINATES": "5.696948,-0.0325930",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1907,
      "AGENT BUSINESS NAME": "BLISSFUL SALPARKER OPTIMUM ENTERPRISE",
      "AGENT USERNAME": "BSO02801",
      "ADDRESS": "HSE NO PR/PA22 AFIENYA",
      "Location": "NEAR THE MAIN STATION",
      "GPS COORDINATES": "5.800753,-0.0053860",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1908,
      "AGENT BUSINESS NAME": "BLESSED SAN BILLS ENTERPRISE",
      "AGENT USERNAME": "BSB02801",
      "ADDRESS": "UNNSHOPM AT ASHAIMAN",
      "Location": "BEHIND THE POLICE STATION",
      "GPS COORDINATES": "5.688488,-0.0320660",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1909,
      "AGENT BUSINESS NAME": "DYNASTY STAR VENTURES",
      "AGENT USERNAME": "DSV02801",
      "ADDRESS": "UNNUMBERED SHOP AT GBETSILE ",
      "Location": "OPPOSITE CASH OIL",
      "GPS COORDINATES": "5.743385,-0.0173250",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1910,
      "AGENT BUSINESS NAME": "PHILI-LINA ENTERPRISE",
      "AGENT USERNAME": "PLE02501",
      "ADDRESS": "UNNUMBERED SHOP AT ASOFA",
      "Location": "NEAR THE ASOFAN BASIC BASIC SCHOOL",
      "GPS COORDINATES": "5.65382,-0.2886923",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1911,
      "AGENT BUSINESS NAME": "CCM SEDRVICES ",
      "AGENT USERNAME": "CSE04501",
      "ADDRESS": "UNNUMBERED SHOP AT AMASAMAN STADIUM ROAD ",
      "Location": "NEAR THE AMSAMAN BUS STATION ",
      "GPS COORDINATES": "5.7088675,-0.3008793",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1912,
      "AGENT BUSINESS NAME": "CAPO VENTURES",
      "AGENT USERNAME": "CVE 70301.00",
      "ADDRESS": "TECHIMAN, BONO EAST",
      "Location": "NEAR ABRAFI HOSPITAL, TECHIMAN",
      "GPS COORDINATES": "7'34'49.1'N1'56'42.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1913,
      "AGENT BUSINESS NAME": "TOP IMAGE WITH GOD VENTURES",
      "AGENT USERNAME": "TIW70301",
      "ADDRESS": "TECHIMAN, BONO EAST",
      "Location": "NEAR AMEYAW TRAFIC LIGHT",
      "GPS COORDINATES": "7.582496,-1.930215",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1914,
      "AGENT BUSINESS NAME": "K GYAMFI ENTERPRISE",
      "AGENT USERNAME": "KGE70301",
      "ADDRESS": "DWIMOH TECHIMAN,BONO EAST ",
      "Location": "NEAR LITTLE ANGELS SHOOL, DWIMOH",
      "GPS COORDINATES": "7.581559,-1.930708",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1915,
      "AGENT BUSINESS NAME": "GARBA -TECH SOLUTION",
      "AGENT USERNAME": "GTS70401",
      "ADDRESS": "DWIMOH TECHIMAN BONO EAST",
      "Location": "NEAR AMEYAW TRAFIC LIGHT",
      "GPS COORDINATES": "7.581964,-1.930476",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1916,
      "AGENT BUSINESS NAME": "Y A KALANBA",
      "AGENT USERNAME": "YKE80101",
      "ADDRESS": "UNNUMBERED CONTAINER CHERIPONI",
      "Location": "NEAR CHERIPONI MAIN STATION, CHERIPONI",
      "GPS COORDINATES": "10.136444,0.290402",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1917,
      "AGENT BUSINESS NAME": "EL-ROI OLAM",
      "AGENT USERNAME": "EOE00501",
      "ADDRESS": "MATAHEKO",
      "Location": "NEAR PAA WIlI",
      "GPS COORDINATES": "5.5603125, -0.2510625",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1918,
      "AGENT BUSINESS NAME": "GOD'S MINUTE VENTURES ",
      "AGENT USERNAME": "GMV12301",
      "ADDRESS": "MAMPROBI",
      "Location": "NEAR TUESDAY MARKET ",
      "GPS COORDINATES": "5.5318625, -0.2357656",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1919,
      "AGENT BUSINESS NAME": "KALANBA ENTERPRISE",
      "AGENT USERNAME": "KLE80101",
      "ADDRESS": "UNNUMBERED CONTAINER NEAR ASSEMBLE,  CHERIPONI",
      "Location": "NEAR CHERIPONI DISTRICT ASSEMBLY ",
      "GPS COORDINATES": "10°08'05.7'N 0°17'22.8'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1920,
      "AGENT BUSINESS NAME": "BRILIN TOP ENT",
      "AGENT USERNAME": "BRTSUB20102",
      "ADDRESS": "NKAWKAW POST OFFICE PREMISES ",
      "Location": "NEAR CENTRAL POLICE STATION ",
      "GPS COORDINATES": "6°33'12.2' N 0°46'06.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1921,
      "AGENT BUSINESS NAME": "YOKONIBA TRADING ENT",
      "AGENT USERNAME": "YTE20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT KWAHU NKWATIA",
      "Location": "NEAR ST PETER'S SHS JUNCTION ",
      "GPS COORDINATES": "37°23'23.3' N 122°04'53.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1922,
      "AGENT BUSINESS NAME": "BERNICE OWUSU 20 ENT",
      "AGENT USERNAME": "BOE20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT NKAWKAW HOTEL JUNCTION ",
      "Location": "NEAR AUDIT SERVICE OFFICE ",
      "GPS COORDINATES": "6°33'24.0' N 0°46'44.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1923,
      "AGENT BUSINESS NAME": "WILLQUAYE VENTURES ",
      "AGENT USERNAME": "WVESUB20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT KWABENG",
      "Location": "NEAR POST OFFICE ",
      "GPS COORDINATES": "6°19'07.4' N 0°35'17.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1924,
      "AGENT BUSINESS NAME": "SHRYTECH ENT",
      "AGENT USERNAME": "SENSUB20302",
      "ADDRESS": "UNNUMBERED STORE AT NEW TAFO ZONGO",
      "Location": "NEAR ALLIDE OIL FILLING STATION ",
      "GPS COORDINATES": "6°13'49.5' N 0°22'15.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1925,
      "AGENT BUSINESS NAME": "Namokos ",
      "AGENT USERNAME": "NAE05001",
      "ADDRESS": "Unnumbered house Tema comm 4",
      "Location": "Opposite narh bita ",
      "GPS COORDINATES": "5°39'29.9'N 0°00'36.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1926,
      "AGENT BUSINESS NAME": "Marnicad ",
      "AGENT USERNAME": "MEN05001",
      "ADDRESS": "Unnumbered house at kpone ",
      "Location": "Near goil filling station ",
      "GPS COORDINATES": "5°41'43.3'N 0°02'50.6'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1927,
      "AGENT BUSINESS NAME": "Oak glory ventures ",
      "AGENT USERNAME": "OGVSUB05001",
      "ADDRESS": "Unnumbered house at Tema safebond ",
      "Location": "Near safebond branch",
      "GPS COORDINATES": "5°37'42.3'N 0°00'36.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1928,
      "AGENT BUSINESS NAME": "Edem mawutor ventures ",
      "AGENT USERNAME": "EMV03301",
      "ADDRESS": "Unnumbered house at Tema comm 4",
      "Location": "Near hantch ",
      "GPS COORDINATES": "5°39'08.8'N 0°00'19.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1929,
      "AGENT BUSINESS NAME": "PER CASH VENTURES ",
      "AGENT USERNAME": "PCV80101",
      "ADDRESS": "Nyohini",
      "Location": "Opposite fire service ",
      "GPS COORDINATES": "9.386973-0.824196",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1930,
      "AGENT BUSINESS NAME": "SAM'S GOD IS KING ",
      "AGENT USERNAME": "SIV01101",
      "ADDRESS": "SPINTEX ",
      "Location": "NEAR C'S PUB AND KITCHEN ",
      "GPS COORDINATES": "5.624608, -0,152296",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1931,
      "AGENT BUSINESS NAME": "OWULIN ENTERPRISE ",
      "AGENT USERNAME": "OWE02701",
      "ADDRESS": "NUNGUA ",
      "Location": "BEHIND AKUSHIKA PLAZA",
      "GPS COORDINATES": "5.610358,-0.068608",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1932,
      "AGENT BUSINESS NAME": "JCS INVESTMENT LTD",
      "AGENT USERNAME": "JILSUB00201",
      "ADDRESS": "SPINTEX ",
      "Location": "CLOSE TO MARTEY TSURU CLOSE",
      "GPS COORDINATES": "5.62851,-0.145765",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1933,
      "AGENT BUSINESS NAME": "PERPSY-CHRISTADONA ENTERPRISE ",
      "AGENT USERNAME": "PCE40501",
      "ADDRESS": "Unnumbered shop at Sefwi Bekwai",
      "Location": "Opposite Anglican Church",
      "GPS COORDINATES": "6.15’05.7'N  2.19’19'9W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1934,
      "AGENT BUSINESS NAME": "2R VISION AND TRADING ENTERPRISE",
      "AGENT USERNAME": "2TE40501",
      "ADDRESS": "Unnumbered shop at Bekwai",
      "Location": "Near the hospital ",
      "GPS COORDINATES": "6.12’54.6'N  2.17’35.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1935,
      "AGENT BUSINESS NAME": "Bunduz Tech ",
      "AGENT USERNAME": "BTE40501",
      "ADDRESS": "Unnumbered shop at Sefwi Bekwai ",
      "Location": "Inside the Market ",
      "GPS COORDINATES": "6.11’55.7'N  2.15’32.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1936,
      "AGENT BUSINESS NAME": "Trevis Palace ventures ",
      "AGENT USERNAME": "TPV40501",
      "ADDRESS": "Unnumbered shop at Sefwi Dwinase",
      "Location": "Opposite the Wiawso SSNIT office",
      "GPS COORDINATES": "6.13’04.7'N  2.28’56.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1937,
      "AGENT BUSINESS NAME": "JESUS POWER A+ ENTERPRISE",
      "AGENT USERNAME": "JPA40501",
      "ADDRESS": "Unnumbered shop at Sefwi Dwinase",
      "Location": "Behind SSNIT office ",
      "GPS COORDINATES": "6.13’00.6'N  2.28’57.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1938,
      "AGENT BUSINESS NAME": "ODELL MCE ENTERPRISE ",
      "AGENT USERNAME": "OMESUB30201",
      "ADDRESS": "ELMINA ",
      "Location": "ANKAFUL JUNCTION ",
      "GPS COORDINATES": "5°05'51.8'N1°20'28.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1939,
      "AGENT BUSINESS NAME": "G-PEX VENTURES ",
      "AGENT USERNAME": "GPV40501",
      "ADDRESS": "Unnumbered location at Sefwi Dwinase ",
      "Location": "Behind Adom Coldstore",
      "GPS COORDINATES": "6.13’01.4'N  2.28’57.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1940,
      "AGENT BUSINESS NAME": "J. O NTIRI ENTERPRISE ",
      "AGENT USERNAME": "JONSUB30202",
      "ADDRESS": "ELMINA ",
      "Location": "ELMINA SHELL",
      "GPS COORDINATES": "5°05'48.7'N1°20'09.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1941,
      "AGENT BUSINESS NAME": "SHADY INSHA ALLAHU VENTURES ",
      "AGENT USERNAME": "SIA30201",
      "ADDRESS": "ELMINA ",
      "Location": "ELMINA COMMERCIAL BANK",
      "GPS COORDINATES": "5°05'52.9'N1°20'31.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1942,
      "AGENT BUSINESS NAME": "B-ZEN INVESTMENT ",
      "AGENT USERNAME": "BZISUB30201",
      "ADDRESS": "ELMINA ",
      "Location": "ELMINA KEEA MUNICIPAL ASSEMBLY ",
      "GPS COORDINATES": "5°05'52.6'N1°20'30.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1943,
      "AGENT BUSINESS NAME": "KING BUKARI VENTURES ",
      "AGENT USERNAME": "KBV40301",
      "ADDRESS": "AXIM ",
      "Location": "NEAR THE CATHOLIC CHURCH ",
      "GPS COORDINATES": "4.8739360,-2.2445310",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1944,
      "AGENT BUSINESS NAME": "PINESTHER ENTERPRISE ",
      "AGENT USERNAME": "PENSUB05103",
      "ADDRESS": "UNNUMBERED SHOP AT OBEYEYIE ",
      "Location": "NEAR THE TAXI RANK",
      "GPS COORDINATES": "5.6817715,-0.3362176",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1945,
      "AGENT BUSINESS NAME": "SHALOM AGRICULTURAL & TRADING SERVICES ",
      "AGENT USERNAME": "SATSUB30202",
      "ADDRESS": "ELMINA ",
      "Location": "ELMINA MARKET ",
      "GPS COORDINATES": "5°05'41.9'N1°20'41.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1946,
      "AGENT BUSINESS NAME": "ANCIENT TRIBE AFRIQUE VENTURES ",
      "AGENT USERNAME": "ATA30301",
      "ADDRESS": "ELMINA GOUDA",
      "Location": "ELMINA POLICE STATION ",
      "GPS COORDINATES": "5°05'30.1'N1°20'44.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1947,
      "AGENT BUSINESS NAME": "KING KERRY ENTERPRISE ",
      "AGENT USERNAME": "KKE00501",
      "ADDRESS": "CIRCLE ",
      "Location": "OPPOSITE ROYAL VVIP TERMINAL",
      "GPS COORDINATES": "5.570204,-0.214232",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1948,
      "AGENT BUSINESS NAME": "STEPHEN ADJEI VENTURES ",
      "AGENT USERNAME": "SAV01001",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR HOTEL DE HORSES ",
      "GPS COORDINATES": "5.548209,-0.214166",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1949,
      "AGENT BUSINESS NAME": "Solution with God Enterprise ",
      "AGENT USERNAME": "SWG40501",
      "ADDRESS": "Unnumbered shop at Sefwi Asawinso ",
      "Location": "Opposite The Roman Church ",
      "GPS COORDINATES": "6.25’25.5'N  2.42’25.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1950,
      "AGENT BUSINESS NAME": "EB- NAKAY VENTURES ",
      "AGENT USERNAME": "EBV00301",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR NPP OFFICE",
      "GPS COORDINATES": "5.549082,-0.214289",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1951,
      "AGENT BUSINESS NAME": "STEPHEN DONKOH VENTURES ",
      "AGENT USERNAME": "SDV00301",
      "ADDRESS": "ART CENTRE ",
      "Location": "OPPOSITE NATIONAL LOTTERIES",
      "GPS COORDINATES": "5.545889,-0.201577",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1952,
      "AGENT BUSINESS NAME": "DEVINE GROWTH VENTURES ",
      "AGENT USERNAME": "DGV00301",
      "ADDRESS": "ART CENTRE ",
      "Location": "NEAR ART CENTRE MOSQUE",
      "GPS COORDINATES": "5.544111,-0.200743",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1953,
      "AGENT BUSINESS NAME": "JY3 ADOMBI VENTURES",
      "AGENT USERNAME": "JYA30301",
      "ADDRESS": "ELMINA COURT ",
      "Location": "ANGLICAN CHURCH ",
      "GPS COORDINATES": "5°05'19.8'N1°20'55.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1954,
      "AGENT BUSINESS NAME": "JR Rhema Business Services ",
      "AGENT USERNAME": "JBS01901",
      "ADDRESS": "Unnumbered Shop Lakeside Estate ",
      "Location": "Same building with Kyei Chemist ",
      "GPS COORDINATES": "5.7074300, -0.1250270",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1955,
      "AGENT BUSINESS NAME": "L.A Okerchiri Ventures ",
      "AGENT USERNAME": "LOV01901",
      "ADDRESS": "Unnumbered Shop Asheley Botwe ",
      "Location": "Near EV Filling Station ",
      "GPS COORDINATES": "5.685622, -0.142560",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1956,
      "AGENT BUSINESS NAME": "PEPSVIEW LTD",
      "AGENT USERNAME": "PLISUB04701",
      "ADDRESS": "HNO 7/1 Ritz Junction, on the Ashaley Botwe Road",
      "Location": "opposite Zainab Restaurant ",
      "GPS COORDINATES": "5.686451, -0.169808",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1957,
      "AGENT BUSINESS NAME": "Los Palos Trading Ent ",
      "AGENT USERNAME": "LPT01501",
      "ADDRESS": "Unnumbered Shop Ashongman Estate Mangose ",
      "Location": "Opposite Sping Kids School Around Osamanpa Park",
      "GPS COORDINATES": "5.697777, -0.230077",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1958,
      "AGENT BUSINESS NAME": "SOAFIA TRANSPORT SERVICES ",
      "AGENT USERNAME": "STS40501",
      "ADDRESS": "Unnumbered shop at Sefwi Asawinso ",
      "Location": "Near CBG Bank",
      "GPS COORDINATES": "6.28’27.5'N  2.43’27.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1959,
      "AGENT BUSINESS NAME": "Minaphil Ventures ",
      "AGENT USERNAME": "MVE01901",
      "ADDRESS": "Unnumbered Shop Adenta Commandos",
      "Location": "Near Anoyeb Hotel ",
      "GPS COORDINATES": "5.712505, -0.151060",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1960,
      "AGENT BUSINESS NAME": "Prime Priority Investment ",
      "AGENT USERNAME": "PPI01901",
      "ADDRESS": "Unnumbered Shop Madina Rawlings Circle ",
      "Location": "Near P-cular height ",
      "GPS COORDINATES": "5.666569, -0.164979",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1961,
      "AGENT BUSINESS NAME": "Spearpoint Ent ",
      "AGENT USERNAME": "SPESUP03401",
      "ADDRESS": "Unnumbered Shop Ashaley Botwe 3rd Gate",
      "Location": "Opposite Neighbours Supermarket ",
      "GPS COORDINATES": "5.686188, -0.148075",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1962,
      "AGENT BUSINESS NAME": "Wahab Bin Hassan Ent",
      "AGENT USERNAME": "WBH01801",
      "ADDRESS": "Unnumbered Shop Dodowa Night Market ",
      "Location": "Near Presbyterian Basic School 2",
      "GPS COORDINATES": "5.882219, -0.099806",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1963,
      "AGENT BUSINESS NAME": "Yusifo Trading Enterprise ",
      "AGENT USERNAME": "YTESUB40502",
      "ADDRESS": "Unnumbered shop at Adwuofua ",
      "Location": "Near the market",
      "GPS COORDINATES": "6.35’16.2'N  3.00’30.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1964,
      "AGENT BUSINESS NAME": "Yusifo Trading Enterprise ",
      "AGENT USERNAME": "YTESUB40501",
      "ADDRESS": "Unnumbered shop at Sefwi Adwuofua ",
      "Location": "Inside the Engen fuel station ",
      "GPS COORDINATES": "6.34’16.3'N  3.00’32.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1965,
      "AGENT BUSINESS NAME": "MARTHA APPIAH KUBI VENTURES",
      "AGENT USERNAME": "MAV70301",
      "ADDRESS": "NSUTA, BONO EAST",
      "Location": "NEAR THE TAXI STATION",
      "GPS COORDINATES": "7'31'54.5'N2'04'27.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1966,
      "AGENT BUSINESS NAME": "GATUSO ULTIMATE  VENTURES",
      "AGENT USERNAME": "GAV70301",
      "ADDRESS": "NSUTA, BONO EAST",
      "Location": "NEAR TECHIMAN TAXI STATION",
      "GPS COORDINATES": "7.531805.-2074176",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1967,
      "AGENT BUSINESS NAME": "EBEN BOTWE ENTERPRISE ",
      "AGENT USERNAME": "EBE61001",
      "ADDRESS": "PANKRONO ",
      "Location": "NEAR  PANKRONO MOSQUE ",
      "GPS COORDINATES": "6°45'04.6'N1°36'34.12'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1968,
      "AGENT BUSINESS NAME": "Ahavah enterprise ",
      "AGENT USERNAME": "AEN05001",
      "ADDRESS": "Unnumbered house at kpone icgc ",
      "Location": "On top of icgc building ",
      "GPS COORDINATES": "5°41'18.5'N 0°03'35.6'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1969,
      "AGENT BUSINESS NAME": "KCLSUB05001",
      "AGENT USERNAME": "Ken and hajj company limited",
      "ADDRESS": "Unnumbered house at Tema comm 6",
      "Location": "Near sos school ",
      "GPS COORDINATES": "5°38'00.1'N 0°00'10.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1970,
      "AGENT BUSINESS NAME": "Action papa ",
      "AGENT USERNAME": "APV03301",
      "ADDRESS": "Unnumbered house at Tema new town ",
      "Location": "Near Roman Catholic school",
      "GPS COORDINATES": "5°93'47.6'N 0°02'22.8'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1971,
      "AGENT BUSINESS NAME": "Ken and hajj",
      "AGENT USERNAME": "KHCSUB05002",
      "ADDRESS": "Unnumbered house at Tema motorway ",
      "Location": "Near China mall",
      "GPS COORDINATES": "5°40'33.9'N 0°02'37.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1972,
      "AGENT BUSINESS NAME": "Ken and hajj",
      "AGENT USERNAME": "KHCSUB05003",
      "ADDRESS": "Unnumbered house at Tema harbor",
      "Location": "Near GPHA",
      "GPS COORDINATES": "5°39'01.4'N 0°00'49.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1973,
      "AGENT BUSINESS NAME": "Ken and hajj",
      "AGENT USERNAME": "KHCSUB05004",
      "ADDRESS": "Unnumbered house at Tema comm 7",
      "Location": "Near comm 7 washing bay",
      "GPS COORDINATES": "5°39'01.4'N 0°00'49.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1974,
      "AGENT BUSINESS NAME": "Ken and hajj",
      "AGENT USERNAME": "KHCSUB05005",
      "ADDRESS": "Unnumbered house at Tema comm 5 traffic",
      "Location": "Near Ecobank ",
      "GPS COORDINATES": "5°42'38.0'N 0°00'32.6'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1975,
      "AGENT BUSINESS NAME": "Beautibela Aj and cosmetics ",
      "AGENT USERNAME": "BAC03301",
      "ADDRESS": "Unnumbered house at Tema comm 1",
      "Location": "Near hiring station ",
      "GPS COORDINATES": "5°38'24.3'N 0°00'03.4'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1976,
      "AGENT BUSINESS NAME": "Richard serich ventures ",
      "AGENT USERNAME": "RSVSUB05001",
      "ADDRESS": "Unnumbered house at Tema industrial area ",
      "Location": "Near vehrad ",
      "GPS COORDINATES": "5°40'06.6'N 0°00'02.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1977,
      "AGENT BUSINESS NAME": "Sam samadel enterprise ",
      "AGENT USERNAME": "SSE05001",
      "ADDRESS": "Unnumbered house at new ningo ",
      "Location": "Near former gn bank ",
      "GPS COORDINATES": "5°60'08.3'N 0°13'16.2'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1978,
      "AGENT BUSINESS NAME": "Alloteys photography hub ",
      "AGENT USERNAME": "APH05001",
      "ADDRESS": "Unnumbered house at tema comm 2",
      "Location": "Behind former Adom fm ",
      "GPS COORDINATES": "5°37'53.1'N 0°00'47.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1979,
      "AGENT BUSINESS NAME": "Oak glory ventures ",
      "AGENT USERNAME": "OGVSUB00602",
      "ADDRESS": "Unnumbered house at Tema comm 7",
      "Location": "Near Starbite ",
      "GPS COORDINATES": "5°39'51.1'N 0°00'25.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1980,
      "AGENT BUSINESS NAME": "Adevey 79",
      "AGENT USERNAME": "ADESUB05001",
      "ADDRESS": "Unnumbered house at savanna junction ",
      "Location": "Near Michelle camp ",
      "GPS COORDINATES": "5°44'16.8'N 0°00'48.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1981,
      "AGENT BUSINESS NAME": "Adevey 79",
      "AGENT USERNAME": "ADESUB05002",
      "ADDRESS": "Unn plot afariwa ",
      "Location": "Near ravican construction ",
      "GPS COORDINATES": "5°48'03.2'N 0°00'09.8'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1982,
      "AGENT BUSINESS NAME": "Adevey 79",
      "AGENT USERNAME": "ADESUB05003",
      "ADDRESS": "Unnumbered house at tilapia junction ",
      "Location": "Near tilapia junction ",
      "GPS COORDINATES": "5°43'47.5'N 0°00'39.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1983,
      "AGENT BUSINESS NAME": "Ayittah Enoch ventures ",
      "AGENT USERNAME": "AEV05001",
      "ADDRESS": "N1 mt near ningo",
      "Location": "Near ningo clinic ",
      "GPS COORDINATES": "5°05'08.3'N 0°1316.2'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1984,
      "AGENT BUSINESS NAME": "Plus 2 wisdom",
      "AGENT USERNAME": "PWV03301",
      "ADDRESS": "AAUC 28 A Tema Newtown",
      "Location": "Near manhean station ",
      "GPS COORDINATES": "5°39'42.9'N 0°02'15.0'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1985,
      "AGENT BUSINESS NAME": "Setko telecom and trading ",
      "AGENT USERNAME": "STT05001",
      "ADDRESS": "Unnumbered house at Tema comm 1",
      "Location": "Near ADB ",
      "GPS COORDINATES": "5°39'00.5'N 0°00'06.5'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1986,
      "AGENT BUSINESS NAME": "ZAron zeal enterprise ",
      "AGENT USERNAME": "ZZE05001",
      "ADDRESS": "Unnumbered house at Kpone barrier ",
      "Location": "Near bell Acqua ",
      "GPS COORDINATES": "5°42'58.6'N 0°00'09.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1987,
      "AGENT BUSINESS NAME": "Ideas and business ",
      "AGENT USERNAME": "IAB05001",
      "ADDRESS": "Unnumbered house at Tema comm 1",
      "Location": "Opposite acces bank comm 1",
      "GPS COORDINATES": "5°38'34.4'N 0°00'13.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1988,
      "AGENT BUSINESS NAME": "CAAK A enterprise ",
      "AGENT USERNAME": "CAAK-A enterprise ",
      "ADDRESS": "Unnumbered house at Tema comm 1",
      "Location": "Near TMA",
      "GPS COORDINATES": "5°39'03.1'N 0°00'15.8'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1989,
      "AGENT BUSINESS NAME": "C.E wood",
      "AGENT USERNAME": "CWP03301",
      "ADDRESS": "Unnumbered house at timber market ",
      "Location": "Near timber market ",
      "GPS COORDINATES": "5°39'03.1'N 0°00'15.8'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1990,
      "AGENT BUSINESS NAME": "Mimshack glo ",
      "AGENT USERNAME": "MGLSUb05001",
      "ADDRESS": "Unnumbered house at peace be ",
      "Location": "Near santes gym ",
      "GPS COORDINATES": "5°44'16.8'N 0°01'41.6'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1991,
      "AGENT BUSINESS NAME": "Mimshack glo ",
      "AGENT USERNAME": "MGLSUB05002",
      "ADDRESS": "Unnumbered house Tema comm 25",
      "Location": "Near comm 25 mall",
      "GPS COORDINATES": "5°44'07.6'N 0°01'50.8'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1992,
      "AGENT BUSINESS NAME": "AD ROSE VENTURES",
      "AGENT USERNAME": "ARV04501",
      "ADDRESS": "UNNUMBERED AHOP AT OBEYEYIE ",
      "Location": "NEAR OBEYEYIE TAXI STATION",
      "GPS COORDINATES": "5.68086,-0.3378707,",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1993,
      "AGENT BUSINESS NAME": "PHILDZAKS",
      "AGENT USERNAME": "PHISUB05101",
      "ADDRESS": "UNNUMBERED SHOP AT AMASAMAN ",
      "Location": "NEAR THE AMASAMAN DISTRICT COURT",
      "GPS COORDINATES": "5.7052121,-0.3018345",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1994,
      "AGENT BUSINESS NAME": "FEDCAROL LIMITED",
      "AGENT USERNAME": "FLI03101",
      "ADDRESS": "UNNUMBERED SHOP AT AMASAMAN ",
      "Location": "OPPOSITE AMASAMAN POLICE STATION",
      "GPS COORDINATES": "5.704565,-0.3007044",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1995,
      "AGENT BUSINESS NAME": "CAPE CAPITAL SERVICES ",
      "AGENT USERNAME": "CCS03101",
      "ADDRESS": "UNNUMBERED SHOP AT AMASAMAN ",
      "Location": "NEAR OLD AMASAMAN STAR OIL ",
      "GPS COORDINATES": "5.7034049,-0.2985473",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1996,
      "AGENT BUSINESS NAME": "DAVID GABIANU VENTURES ",
      "AGENT USERNAME": "DGV02201",
      "ADDRESS": "UNNUMBERED SHOP AT SOWUTUOM",
      "Location": "NEAR ATTRAM SOCCER ACADEMY",
      "GPS COORDINATES": "5.630475, - 0.272635",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1997,
      "AGENT BUSINESS NAME": "AWIAGAHS VENTURES ",
      "AGENT USERNAME": "AVE04501",
      "ADDRESS": "UNNUMBERED SHOP AT ADJEN KOTOKO",
      "Location": "NEAR THE KOTOKU LORRY STATION ",
      "GPS COORDINATES": "5.7403224,-0.3563661",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1998,
      "AGENT BUSINESS NAME": "TAKE CARE ULTIMATE VENTURES ",
      "AGENT USERNAME": "TCU40501",
      "ADDRESS": "Unnumbered shop at Bonsu Nkwanta ",
      "Location": "Near the market ",
      "GPS COORDINATES": "6.19’33.1'N  3.00’50.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 1999,
      "AGENT BUSINESS NAME": "Jonsaff Enterprise ",
      "AGENT USERNAME": "JEN40501",
      "ADDRESS": "Unnumbered shop at Sefwi Debiso ",
      "Location": "Opposite the main Lorry station ",
      "GPS COORDINATES": "6.39’42.3'N  3.05’38.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2000,
      "AGENT BUSINESS NAME": "NCO0401",
      "AGENT USERNAME": "NYASAK CONSULT",
      "ADDRESS": "GALELIA AMANFROM",
      "Location": "NEAR GALELIA MARKET",
      "GPS COORDINATES": "5.533625,-0.423544",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2001,
      "AGENT BUSINESS NAME": "EUNIKEZIA ENTERPRISE ",
      "AGENT USERNAME": "EEN40502",
      "ADDRESS": "Unnumbered shop at Enchi ",
      "Location": "Near the Fanmilk Depot ",
      "GPS COORDINATES": "5.49.22.1'N  2.49’26.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2002,
      "AGENT BUSINESS NAME": "FOMAUEL ENTERPRISE",
      "AGENT USERNAME": "FOM02501",
      "ADDRESS": "TANTRA HILLS",
      "Location": "CLOSE TO PENTECOST CHURCH",
      "GPS COORDINATES": "5.633240,-0.256042",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2003,
      "AGENT BUSINESS NAME": "BRIHAL VENTURES",
      "AGENT USERNAME": "BVE03001",
      "ADDRESS": "NIMA",
      "Location": "NEAR HOLLIANS HOUSE",
      "GPS COORDINATES": "5.584751,-0.201060",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2004,
      "AGENT BUSINESS NAME": "EDEM  COMMUNICATION  VENTURES",
      "AGENT USERNAME": "ECV 3101.00",
      "ADDRESS": "NIMA",
      "Location": "NEAR BELING BRIDGE",
      "GPS COORDINATES": "5.587815,-0.199709",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2005,
      "AGENT BUSINESS NAME": "EL DANIELS VENTURES",
      "AGENT USERNAME": "EDV03001",
      "ADDRESS": "NIMA ",
      "Location": "OPPOSITE THE MOSQUE",
      "GPS COORDINATES": "5.588030,-0.198839",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2006,
      "AGENT BUSINESS NAME": "CHAFAL COMMUNICATION VENTURES",
      "AGENT USERNAME": "CCVSUB03102",
      "ADDRESS": "NIMA",
      "Location": "CLOSE TO THE BRANCH",
      "GPS COORDINATES": "5.592738,-0.195380",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2007,
      "AGENT BUSINESS NAME": "YAROGIWA VENTURES",
      "AGENT USERNAME": "Y",
      "ADDRESS": "NIMA ",
      "Location": "OPPOSITE TAXI RANK",
      "GPS COORDINATES": "5.593955,-0.194905",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2008,
      "AGENT BUSINESS NAME": "SADIATU MARIAM ENTERPRISE",
      "AGENT USERNAME": "SMA03001",
      "ADDRESS": "NIMA ",
      "Location": "NO THE WAY MOSQUE",
      "GPS COORDINATES": "5.594162,-0.193120",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2009,
      "AGENT BUSINESS NAME": "PAPIRO ENTERPRISE",
      "AGENT USERNAME": "PKE03001",
      "ADDRESS": "NIMA",
      "Location": "CLOSE TO WENICO PHARMACY",
      "GPS COORDINATES": "5.595244,-0.193893",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2010,
      "AGENT BUSINESS NAME": "OTHAMIST",
      "AGENT USERNAME": "OMV03001",
      "ADDRESS": "MAAMOBI",
      "Location": "OPPOSITE PAN AFRICA BANK",
      "GPS COORDINATES": "5.595931,-0.193827",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2011,
      "AGENT BUSINESS NAME": "LordMary ventures ",
      "AGENT USERNAME": "LVE40501",
      "ADDRESS": "Unnumbered shop at Sefwi Bodi",
      "Location": "Inside the Bodi Main station",
      "GPS COORDINATES": "6.13’10.8'N  2.45’24.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2012,
      "AGENT BUSINESS NAME": "AL-TIZZA INVESTMENT COMPANY LIMITED",
      "AGENT USERNAME": "AIC50101",
      "ADDRESS": "DENU",
      "Location": "BESIDE SSNIT",
      "GPS COORDINATES": "6.102490, 1.149225",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2013,
      "AGENT BUSINESS NAME": "T K PHONES",
      "AGENT USERNAME": "TKP20301",
      "ADDRESS": "MAIN STATION, AKIM ODA",
      "Location": "NEAR MULTI CREDIT",
      "GPS COORDINATES": "5.9235193, -0.9893167",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2014,
      "AGENT BUSINESS NAME": "TWUMS BOUTIQUE",
      "AGENT USERNAME": "TBO20301",
      "ADDRESS": "ODA BARRIER, AKIM ODA",
      "Location": "Near ECG",
      "GPS COORDINATES": "5.930612, -0.980970",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2015,
      "AGENT BUSINESS NAME": "T K PHONES AND SEVICES",
      "AGENT USERNAME": "TKP20301",
      "ADDRESS": "ODA MAIN STATION,,  AKIM ODA.",
      "Location": "NEAR MULTI CREDIT",
      "GPS COORDINATES": "5.9235193, -0.9893167",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2016,
      "AGENT BUSINESS NAME": "R AND B VENTURES ",
      "AGENT USERNAME": "RBV09001",
      "ADDRESS": "BABILE ",
      "Location": "CLOSE TO THE POLYCLINIC ",
      "GPS COORDINATES": "10°31'44.8' N 2°50'42.9' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2017,
      "AGENT BUSINESS NAME": "QUEEN HASSY VENTURES ",
      "AGENT USERNAME": "QHV30301",
      "ADDRESS": "CAPECOAST KOTOKURABA BY PASS",
      "Location": "MTN OFFICE / CELL SITE ",
      "GPS COORDINATES": "5°06'53.3'N1°14'46.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2018,
      "AGENT BUSINESS NAME": "DIVINE SEAL MULTI-BUSINESS ",
      "AGENT USERNAME": "DSM09001",
      "ADDRESS": "BAMAHU ",
      "Location": "NEAR PAL-ELMA HOTEL ",
      "GPS COORDINATES": "10°00'55.6' N 2°29'09.6' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2019,
      "AGENT BUSINESS NAME": "HUTCHLAND INVESTMENTS ",
      "AGENT USERNAME": "HIN09001",
      "ADDRESS": "BAMAHU ",
      "Location": "CLOSE TO BEST JOINT FAST FOOD ",
      "GPS COORDINATES": "10°00'24.8' N 2°28'53.5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2020,
      "AGENT BUSINESS NAME": "MASTER JESUS ENTERPRISE ",
      "AGENT USERNAME": "MJE09001",
      "ADDRESS": "SOKPAYIRI",
      "Location": "CLOSE TO THE METHODIST CHURCH ",
      "GPS COORDINATES": "10°03'31.4' N 2°30'27.6' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2021,
      "AGENT BUSINESS NAME": "CAPTAIN LAMPTEY ENTERPRISE ",
      "AGENT USERNAME": "CLE 9001.00",
      "ADDRESS": "KABANYE",
      "Location": "OPP",
      "GPS COORDINATES": "10°03'22.2' N 2°30'02.8' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2022,
      "AGENT BUSINESS NAME": "THE EMPORIUM ENTERPRISE ",
      "AGENT USERNAME": "TEE40601",
      "ADDRESS": "SEKONDI ",
      "Location": "NEAR TACOTEL LIMITED ",
      "GPS COORDINATES": "4.9161390-1.7509470",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2023,
      "AGENT BUSINESS NAME": "ASAAWA DESIGNER WEAR AND TRADING",
      "AGENT USERNAME": "ADW09001",
      "ADDRESS": "TUMU",
      "Location": "CLOSE TO THE COMMERCIAL BANK",
      "GPS COORDINATES": "10°52'43.8' N 1°59'07.3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2024,
      "AGENT BUSINESS NAME": "DWENE ASEDA ENT ",
      "AGENT USERNAME": "DAESUB12301",
      "ADDRESS": "MATAHEKO",
      "Location": "OPPOSITE ECG SUB STATION ",
      "GPS COORDINATES": "5.5670875, -0.2489531",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2025,
      "AGENT BUSINESS NAME": "GREAT FORTUNE ",
      "AGENT USERNAME": "GRFSUB30201",
      "ADDRESS": "CAPECOAST - NSTIN",
      "Location": "MELCOM CAPECOAST BRANCH ",
      "GPS COORDINATES": "5°06'28.0'N1°14'28.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2026,
      "AGENT BUSINESS NAME": "DWENE ASEDA ENTERPRISE",
      "AGENT USERNAME": "DAE12301",
      "ADDRESS": "MATAHEKO",
      "Location": "NEAR ECG  SUBSTATION OFFICE ",
      "GPS COORDINATES": "5.5670625, -0.2496875",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2027,
      "AGENT BUSINESS NAME": "GRAXLINE  EXCLUSIVE ",
      "AGENT USERNAME": "GXC12301",
      "ADDRESS": "DANSOME ",
      "Location": "NEAR ABLEKUMA NORTH MUNICIPAL ASSEMBLY",
      "GPS COORDINATES": "5.5675375, -0.2569531",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2028,
      "AGENT BUSINESS NAME": "YEBRIGHT VENTURES ",
      "AGENT USERNAME": "YEN12301",
      "ADDRESS": "MAMPROBI",
      "Location": "BEHIND MAMPROBI POLICE STATION ",
      "GPS COORDINATES": "5.5326875, -0.2411094",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2029,
      "AGENT BUSINESS NAME": "BY GOD'S GRACE ABOO VENTURES",
      "AGENT USERNAME": "GGASUB20302",
      "ADDRESS": "Hno. C259A, Near Old Clinic, Asamankese",
      "Location": "Near Old Clinic",
      "GPS COORDINATES": "5.855467, -0.678292",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2030,
      "AGENT BUSINESS NAME": "GODFRED NORVISI ENTERPRISE",
      "AGENT USERNAME": "GNESUB20301",
      "ADDRESS": "Unnumbered shop, near Mumuadu Rural Bank, Suhum.",
      "Location": "Near Information Center",
      "GPS COORDINATES": "6.037098, -0.448590",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2031,
      "AGENT BUSINESS NAME": "GODFRED NORVISI ENTERPRISE",
      "AGENT USERNAME": "GNESUB20302",
      "ADDRESS": "SUHUM MARKET, SUHUM.",
      "Location": "OPPOSITE THE ABATTOIR",
      "GPS COORDINATES": "6.040336, -0.449492",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2032,
      "AGENT BUSINESS NAME": "Kobby-Ike Ventures ",
      "AGENT USERNAME": "KIV40501",
      "ADDRESS": "Unnumbered shop at Asankragwa ",
      "Location": "Near Petrosol filling station ",
      "GPS COORDINATES": "5.48’12.3'N  2.25’52.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2033,
      "AGENT BUSINESS NAME": "AVRAHAM MANBERG COMPANY LIMITED ",
      "AGENT USERNAME": "AMC02401",
      "ADDRESS": "ACCRA CITY CAMPUS ",
      "Location": "NEAR ACCRA CITY CAMPUS",
      "GPS COORDINATES": "5.557545,-0.208632",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2034,
      "AGENT BUSINESS NAME": "KAD-MAN DORC VENTURES ",
      "AGENT USERNAME": "KMD30201",
      "ADDRESS": "CAPECOAST - KINGSWAY ",
      "Location": "CAPE COAST, SSNIT BRANCH ",
      "GPS COORDINATES": "5°06'19.9'N1°14'28.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2035,
      "AGENT BUSINESS NAME": "OLANDO'S",
      "AGENT USERNAME": "OLASUB20301",
      "ADDRESS": "COALTAR STATION",
      "Location": "Near Sikapa enterprise",
      "GPS COORDINATES": "5.909063, -0.468233",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2036,
      "AGENT BUSINESS NAME": "AYIKEM VENTURES ",
      "AGENT USERNAME": "AYV03501",
      "ADDRESS": "ACCRA CITY CAMPUS ",
      "Location": "OPPOSITE ACCRA CITY CAMPUS ",
      "GPS COORDINATES": "5.557833,-0.208069",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2037,
      "AGENT BUSINESS NAME": "CHRISWISE VENTURES ",
      "AGENT USERNAME": "CHVSUB00301",
      "ADDRESS": "ACCRA CITY CAMPUS ",
      "Location": "NEAR ACCRA CITY CAMPUS ",
      "GPS COORDINATES": "5.557728,-0.207096",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2038,
      "AGENT BUSINESS NAME": "Merchandise 244 Enterprise",
      "AGENT USERNAME": "M2E60401",
      "ADDRESS": "Nyinahin",
      "Location": "Near the New Chief Palace",
      "GPS COORDINATES": "6°35'41.8'N 2°06'58.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2039,
      "AGENT BUSINESS NAME": "West Side court",
      "AGENT USERNAME": "WSC40501",
      "ADDRESS": "Unnumbered shop at Asankragwa ",
      "Location": "Opposite the Education office ",
      "GPS COORDINATES": "5.47’38.2'N  2.25’40.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2040,
      "AGENT BUSINESS NAME": "Prine Dack Ventures",
      "AGENT USERNAME": "PDV60801",
      "ADDRESS": "Nyinahin",
      "Location": "Near the kumasi lorry Station ",
      "GPS COORDINATES": "6°35'57.1' N 2°07'00.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2041,
      "AGENT BUSINESS NAME": "Frareko Ventures ",
      "AGENT USERNAME": "FVE40501",
      "ADDRESS": "Unnumbered shop at Asankragwa ",
      "Location": "Near The MTN office ",
      "GPS COORDINATES": "5.48’24.2'N  2.26’05.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2042,
      "AGENT BUSINESS NAME": "Marvellious Prince ",
      "AGENT USERNAME": "MPR60611",
      "ADDRESS": "POKUKROM",
      "Location": "NEAR THE LORRY STATION ",
      "GPS COORDINATES": "6°42'50.5'N 1°41'44.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2043,
      "AGENT BUSINESS NAME": "Abuzeewin",
      "AGENT USERNAME": "ABE60801",
      "ADDRESS": "POKUKROM",
      "Location": "Near the lorry Station ",
      "GPS COORDINATES": "6°42'46.9'N 1°41'41.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2044,
      "AGENT BUSINESS NAME": "Righteous Business Enterprise ",
      "AGENT USERNAME": "RBE60801",
      "ADDRESS": "Abuakwa",
      "Location": "Near S.D.A Junction ",
      "GPS COORDINATES": "6°42'01.6'N 1°43'07.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2045,
      "AGENT BUSINESS NAME": "Hope Is In Christ 27 Enterprise",
      "AGENT USERNAME": "HIC60801",
      "ADDRESS": "ASUOYEBOAH ",
      "Location": "Near the Sunyani road",
      "GPS COORDINATES": "6°41'45.9'N 1°40'02.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2046,
      "AGENT BUSINESS NAME": "MargAdu Enterprise ",
      "AGENT USERNAME": "MAE60801",
      "ADDRESS": "Kwadaso",
      "Location": "Opposite Siloam Junction",
      "GPS COORDINATES": "6°41'55.8'N 1°39'35.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2047,
      "AGENT BUSINESS NAME": "Wuschristopher 19 Ventures",
      "AGENT USERNAME": "WSV60801",
      "ADDRESS": "APATRAPA",
      "Location": "Near the station",
      "GPS COORDINATES": "6°42'29.3'N 1°41'12.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2048,
      "AGENT BUSINESS NAME": "Wuschristopher 19 Ventures",
      "AGENT USERNAME": "WSV60801",
      "ADDRESS": "APATRAPA",
      "Location": "Near the Station ",
      "GPS COORDINATES": "6°42'29.3'N 1°41'12.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2049,
      "AGENT BUSINESS NAME": "THE MARSHAL ENTERPRISE",
      "AGENT USERNAME": "TMESUB70301",
      "ADDRESS": "P.O.BOX 12,TANOSO TECHIMAN",
      "Location": "OPPOSITE TANOSO MAIN BUS STOP",
      "GPS COORDINATES": "BT-1857-0391",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2050,
      "AGENT BUSINESS NAME": "DELIGENCE 11 VENTURES",
      "AGENT USERNAME": "DEV40101",
      "ADDRESS": "HOUSE NUMBER 1/2A ,HAYFORD ROAD TAKORADI AMANFUL",
      "Location": "CLOSE TO AYEFROR BOUTIQUE AND A D MOTORS",
      "GPS COORDINATES": "4°54'01.5'N 1°45'49.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2051,
      "AGENT BUSINESS NAME": "JUSTSON VENTURES ",
      "AGENT USERNAME": "JVESUB40301",
      "ADDRESS": "MPINTSIM 1ST JUNCTION, SEKONDI",
      "Location": "IN FRONT OF K AND H CONSTRUCTION",
      "GPS COORDINATES": "4°58'26.3 'N 1°42'54.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2052,
      "AGENT BUSINESS NAME": "JUSTSON VENTURES ",
      "AGENT USERNAME": "JVESUB40302",
      "ADDRESS": "UNNUMBERED SHOP AT MPINTSIM 1ST JUNCTION, SEKONDI",
      "Location": "IN FRONT OF PLOT COMPANY",
      "GPS COORDINATES": "4°58'48.9' N1°43'09.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2053,
      "AGENT BUSINESS NAME": "RES LINKS",
      "AGENT USERNAME": "RLI40102",
      "ADDRESS": "A SHOP AT EAST FIJIA ,SEKONDI",
      "Location": "CLOSE TO FIJIA EAST WATER WEST",
      "GPS COORDINATES": "4°56'08.9' N1° 45'04.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2054,
      "AGENT BUSINESS NAME": "DG-DAVAL ENTERPRISE ",
      "AGENT USERNAME": "DGD40101",
      "ADDRESS": "UNNUMBERED CONTAINER AT WEST TANOKROM,TAKORADI ",
      "Location": "CLOSE TO SETH CHINESE FAST FOOD",
      "GPS COORDINATES": "4°54'33.1 'N 1°46'12.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2055,
      "AGENT BUSINESS NAME": "ZAAB ALLAH SARIKI ENTERPRISE ",
      "AGENT USERNAME": "ZAS61001",
      "ADDRESS": "PANKRONO ",
      "Location": "OPPOSITE CONSTANT HOSPITAL",
      "GPS COORDINATES": "6°45'04.6'N12°36'34.12'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2056,
      "AGENT BUSINESS NAME": "EMEFRIMPS STAR ENTERPRISE ",
      "AGENT USERNAME": "ESE61001",
      "ADDRESS": "PANKRONO",
      "Location": "OPPOISTE DE QUINCY ACADEMY ",
      "GPS COORDINATES": "6°44'02.0'N1'36'18.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2057,
      "AGENT BUSINESS NAME": "IBRA-JOY ENTERPRISE ",
      "AGENT USERNAME": "IEN61201",
      "ADDRESS": "MOSHIE ZONGO",
      "Location": "ADJACENT MMAREMMA PHARMACY ",
      "GPS COORDINATES": "6°44'002.0'N1°37'12.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2058,
      "AGENT BUSINESS NAME": "RALPHORT ENTERPRISE ",
      "AGENT USERNAME": "RAL70401",
      "ADDRESS": "45 sunyani",
      "Location": "ADJACENT ERICOSE ENTERPRISE ",
      "GPS COORDINATES": "7. 51' 04. 0' N 2. 38' 53. 5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2059,
      "AGENT BUSINESS NAME": "SAMRUK FITNESS CENTRE",
      "AGENT USERNAME": "SFC610001",
      "ADDRESS": "MOSHIE ZONGO",
      "Location": "NEAR OLD ASH FM",
      "GPS COORDINATES": "6°44'03.0'N1°30'10.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2060,
      "AGENT BUSINESS NAME": "EMMANUEL KUSI 2020  BUSINESS CENTRE",
      "AGENT USERNAME": "EKB70101",
      "ADDRESS": "G 45 GREENHILL",
      "Location": "OPPOSITE DR. BERKO CLINIC ",
      "GPS COORDINATES": "7. 15' 40.0' N 2. 65' 54. 5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2061,
      "AGENT BUSINESS NAME": "SETHOO DEGOUNG VENTURES ",
      "AGENT USERNAME": "SDV70201",
      "ADDRESS": "56 ABRIRIKASU",
      "Location": "OPPOSITE DROBO COMMUNITY BANK ",
      "GPS COORDINATES": "7. 51' 03. 1' N 2. 45' 30. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2062,
      "AGENT BUSINESS NAME": "PETER TIEKU ENTERPRISE ",
      "AGENT USERNAME": "PTE 61001.00",
      "ADDRESS": "SEPE BUOKROM",
      "Location": "NEAR DIVINE INTERNATIONAL SCHOOL ",
      "GPS COORDINATES": "6°14'50.0'N1°46'55.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2063,
      "AGENT BUSINESS NAME": "Point 7 Ultimate VENTURES",
      "AGENT USERNAME": "PUVSUN70402",
      "ADDRESS": "D 56  sunyani",
      "Location": "ADJACENT HIGH COURT ",
      "GPS COORDINATES": "7. 60' 08. 3' N 2. 09' 55. 0' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2064,
      "AGENT BUSINESS NAME": "HOME OF QUALITY SMOCKS",
      "AGENT USERNAME": "HQS70101",
      "ADDRESS": "UNNUMBERED  CONTAINER AT KENYASE NO.2",
      "Location": "Opposite Methodist  school",
      "GPS COORDINATES": "6.58'58.6'N2.23'21.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2065,
      "AGENT BUSINESS NAME": "BROWN ALMONG ENTERPRISE ",
      "AGENT USERNAME": "BAE61001",
      "ADDRESS": "MOSHIE ZONGO ",
      "Location": "OPPOSITE SDA CHURCH ",
      "GPS COORDINATES": "6°43'16.2'N1°36'45.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2066,
      "AGENT BUSINESS NAME": "MT 1926 B ENTERPRISE",
      "AGENT USERNAME": "MBE612201",
      "ADDRESS": "ATIMATIM",
      "Location": "NEAR THE STATION ",
      "GPS COORDINATES": "6°45'312.1'N1°36'38.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2067,
      "AGENT BUSINESS NAME": "ATV70401",
      "AGENT USERNAME": "ADOM TA VENTURES DMMT",
      "ADDRESS": "Duayawnkwata  magazine",
      "Location": "Opposite magazine ",
      "GPS COORDINATES": "7.173285,-2.100357",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2068,
      "AGENT BUSINESS NAME": "OMAR LINK ENTERPRISE ",
      "AGENT USERNAME": "OLE61001",
      "ADDRESS": "ATIMATIM ",
      "Location": "OPPOSITE PUMA FILLING STATION ",
      "GPS COORDINATES": "6°43'47.9'N1°34'38.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2069,
      "AGENT BUSINESS NAME": "JUMALEF SUSU ENTERPRISE ",
      "AGENT USERNAME": "JSE60301",
      "ADDRESS": "PANKRONO ZONGO",
      "Location": "NEAR SALIKI DRINKING WATER ",
      "GPS COORDINATES": "6°43'47.5'N1°34'38.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2070,
      "AGENT BUSINESS NAME": "TIKYA KWAKU PRINTING AND MULTI SATELLITE ",
      "AGENT USERNAME": "TKP61001",
      "ADDRESS": "ATIMATIM ",
      "Location": "NEAR ATIMATIM TROTRO STATION ",
      "GPS COORDINATES": "6°43'47.9'N1°34'38.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2071,
      "AGENT BUSINESS NAME": "EMMAFAMBA UN1IQUE VENTURES",
      "AGENT USERNAME": "EUV61001",
      "ADDRESS": "PANKRONO MARKET",
      "Location": "WITHIN PANKRONO MARKET ",
      "GPS COORDINATES": "6°43'47.9'N1°34'38.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2072,
      "AGENT BUSINESS NAME": "EBEN BOTWE ENTERPRISE ",
      "AGENT USERNAME": "EBE610001",
      "ADDRESS": "PANKRONO ",
      "Location": "NEAR MOSQUE ",
      "GPS COORDINATES": "6°45'04.6'N1°36'34.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2073,
      "AGENT BUSINESS NAME": "GREMAR ENTERPRISE ",
      "AGENT USERNAME": "GVE161002",
      "ADDRESS": "PANKRONO ZONGO",
      "Location": "NEAR THE MOSQUE ",
      "GPS COORDINATES": "6°43'47.9'N1°34'38.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2074,
      "AGENT BUSINESS NAME": "Ohemaa linda ventures ",
      "AGENT USERNAME": "OLV60401",
      "ADDRESS": "Adagya",
      "Location": "Near the lorry station",
      "GPS COORDINATES": "6°36'46.2'N1°35'02.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2075,
      "AGENT BUSINESS NAME": "Thank you Allah ventures ",
      "AGENT USERNAME": "TAV60401",
      "ADDRESS": "Adagya",
      "Location": "Near the lorry station",
      "GPS COORDINATES": "6°37'00.6'N1°35'.003'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2076,
      "AGENT BUSINESS NAME": "Oster Adanse Ventures ",
      "AGENT USERNAME": "FAV60401",
      "ADDRESS": "Bohyen",
      "Location": "Near the police station ",
      "GPS COORDINATES": "6°43'10.2N1°38'53.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2077,
      "AGENT BUSINESS NAME": "Eddy glory enterprise ",
      "AGENT USERNAME": "EGE60401",
      "ADDRESS": "MORO MARKET",
      "Location": "INSIDE MORO MARKET ",
      "GPS COORDINATES": "6°43'22.7'N1°36'50.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2078,
      "AGENT BUSINESS NAME": "DARKMENS 352 ENTERPRISE",
      "AGENT USERNAME": "DEN61001",
      "ADDRESS": "ATIMATIM ",
      "Location": "NEAR THE ROMAN CATHOLIC CHURCH ",
      "GPS COORDINATES": "6°45'19.0'N1°36'37.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2079,
      "AGENT BUSINESS NAME": "EOA 89 VENTURES",
      "AGENT USERNAME": "EAV61001",
      "ADDRESS": "TAFO NHYIAESO ",
      "Location": "OPPPOSITE TAFO NHYIAESO POLICE STATION JUNCTION ",
      "GPS COORDINATES": "6°42'49.7'N12°36'52.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2080,
      "AGENT BUSINESS NAME": "UNIUE AWUDU ENTERPRISE ",
      "AGENT USERNAME": "UAE61001",
      "ADDRESS": "ATIMATIM NEW SITE",
      "Location": "NEAR ROYAL CHURCH",
      "GPS COORDINATES": "6°43'47.9'N1°34'38.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2081,
      "AGENT BUSINESS NAME": "POKA-J ENTERPRISE ",
      "AGENT USERNAME": "PJE61001",
      "ADDRESS": "ATIMATIM  NEWSITE",
      "Location": "NEAR ATIMATIM NEW SITE STATION ",
      "GPS COORDINATES": "6°45'31.1'N°36'38.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2082,
      "AGENT BUSINESS NAME": "CR CAPITAL VENTURES ",
      "AGENT USERNAME": "CCV40301",
      "ADDRESS": "BENSO ",
      "Location": "NEAR THE METHODIST CHURCH ",
      "GPS COORDINATES": "5.156890,-1.8933160",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2083,
      "AGENT BUSINESS NAME": "DE-POWER OF GOD VENTURES",
      "AGENT USERNAME": "POVSUB70301",
      "ADDRESS": "TECHIMAN MARKET, BONO EAST",
      "Location": "NEAR GCB, MARKET BRANCH",
      "GPS COORDINATES": "7.581248,-1.945508",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2084,
      "AGENT BUSINESS NAME": "DE-POWER OF GOD VENTURES",
      "AGENT USERNAME": "POVSUB70302",
      "ADDRESS": "TECHIMAN MARKET, BONO EAST",
      "Location": "OPPOSITE TECHIMAN MAIZE/YAM MARKET",
      "GPS COORDINATES": "7.581235,-1.945515",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2085,
      "AGENT BUSINESS NAME": "SETH AMEYAW ENTERPRISE",
      "AGENT USERNAME": "SEA7O301",
      "ADDRESS": "TECHIMAN WA STATION,BONO EAST",
      "Location": "NEAR WA STATION/LATEX FOAM,TECHIMAN",
      "GPS COORDINATES": "7.584875,-1.940144",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2086,
      "AGENT BUSINESS NAME": "EFFAH DANSO ENTERPRISE ",
      "AGENT USERNAME": "EFD03801",
      "ADDRESS": "SANTA MARIA ",
      "Location": "GA CENTRAL HOSPITAL ",
      "GPS COORDINATES": "5.601767,-0.274260",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2087,
      "AGENT BUSINESS NAME": "F. TIJANI ENTERPRISE ",
      "AGENT USERNAME": "FTE03801",
      "ADDRESS": "SANTA MARIA",
      "Location": "FBN BANK ",
      "GPS COORDINATES": "5.599322,-0.272395",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2088,
      "AGENT BUSINESS NAME": "EM BUSINESS CENTER",
      "AGENT USERNAME": "EBC02801",
      "ADDRESS": "UN SHOP AT GBETSILE",
      "Location": "Gbetsile Near The Main Station",
      "GPS COORDINATES": "5.747188,-0.027061",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2089,
      "AGENT BUSINESS NAME": "DOREBEN TECHNOLOGIES",
      "AGENT USERNAME": "DTE02801",
      "ADDRESS": "UNN SHOP AT GBETSILE",
      "Location": "NEAR GBETSILE SCHOOL JUNCTION",
      "GPS COORDINATES": "5.744615,-0.021776",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2090,
      "AGENT BUSINESS NAME": "MIC-NARH ENTERPRISE",
      "AGENT USERNAME": "MNESUB02801",
      "ADDRESS": "UNN SHOP AT GBETSILE",
      "Location": "NEAR GBETSILE US STATION",
      "GPS COORDINATES": "5.744345,0.034710",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2091,
      "AGENT BUSINESS NAME": "ELIM PHARMACY ",
      "AGENT USERNAME": "EPH60101",
      "ADDRESS": "OBUASI WAWASI",
      "Location": "AGA HOSPITAL  STREET ",
      "GPS COORDINATES": "1°11'49.5'N 1°39'38.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2092,
      "AGENT BUSINESS NAME": "CEDARCOM ENTERPRISE",
      "AGENT USERNAME": "CEN02801",
      "ADDRESS": "J/108 Old Tulaku, Ashaiman",
      "Location": "ON THE CHINA MALL ROAD",
      "GPS COORDINATES": "5.687604,-0.027944",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2093,
      "AGENT BUSINESS NAME": "YOUR PALM VENTURES",
      "AGENT USERNAME": "YPV04201",
      "ADDRESS": "UNN SHOP AT ASHAIMAN TULAKU",
      "Location": "OPPOSITE ALAVANYO CHOP BAR",
      "GPS COORDINATES": "5.688383,-0.026411",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2094,
      "AGENT BUSINESS NAME": "DEL BRYTE ENTERPRISE",
      "AGENT USERNAME": "DBE02801",
      "ADDRESS": "UNNUMBERED SHOP AT ASHAIMAN TULAKU",
      "Location": "BEHIND BEST POINT SAVINGS AND LOANS",
      "GPS COORDINATES": "5.688328,-0.028014",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2095,
      "AGENT BUSINESS NAME": "BESTOPTION PROFESSIONAL SERVICES",
      "AGENT USERNAME": "BPS05001",
      "ADDRESS": "UNN SHOP AT ASHAIMAN",
      "Location": "OPPOSITE ACCESS BANK",
      "GPS COORDINATES": "5.684548,-0.034662",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2096,
      "AGENT BUSINESS NAME": "ATINKAPA CASH",
      "AGENT USERNAME": "ACA02801",
      "ADDRESS": "UNN SHOP AT ASHAIMAN KUFFOUR STATION",
      "Location": "OPPOSITE FORMER  SENA RADIO",
      "GPS COORDINATES": "5.685238,-0.033320",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2097,
      "AGENT BUSINESS NAME": "FOUNDING VENTURES ",
      "AGENT USERNAME": "FVE02601",
      "ADDRESS": "UNNUMBERED SHOP AT BORTIANOR ",
      "Location": "NEAR THE WASHING BAY",
      "GPS COORDINATES": "5.55114156,-0.3345100",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2098,
      "AGENT BUSINESS NAME": "SANUSI VENTURES ",
      "AGENT USERNAME": "SAV05101",
      "ADDRESS": "UNNUMBERED SHOP AT BORTIANOR ",
      "Location": "NEAR THE LAKESIDE BEACH",
      "GPS COORDINATES": "5.5054916,-0.3409993",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2099,
      "AGENT BUSINESS NAME": "SAAKPALE TRADING ENTERPRISE ",
      "AGENT USERNAME": "STESUB05101",
      "ADDRESS": "UNNUMBERED SHOP AT APLAKU",
      "Location": "NEAR THE MOSQUE",
      "GPS COORDINATES": "5.5271730,-0.3256158",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2100,
      "AGENT BUSINESS NAME": "HARIJAGA ENTERPRISE ",
      "AGENT USERNAME": "HEN09001",
      "ADDRESS": "WAPAANI ",
      "Location": "CLOSE TO WA CENTRAL MARKET ",
      "GPS COORDINATES": "10°03'48.2' N 2°30'13.4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2101,
      "AGENT BUSINESS NAME": "HE IS POTENT VENTURES ",
      "AGENT USERNAME": "HIP40101",
      "ADDRESS": "UNNUMBERED SHOP INSIDE FOSS MARKET,TAKORADI ",
      "Location": "BEHIND CAL BANK",
      "GPS COORDINATES": "4°53'54.8491' N,1° 45' 28.5916' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2102,
      "AGENT BUSINESS NAME": "PRESTIGE TOUCH LINK ",
      "AGENT USERNAME": "PTL03601",
      "ADDRESS": "SAKAMAN JUNCTION ",
      "Location": "NEAR AMSER FILLING STATION ",
      "GPS COORDINATES": "5.5737125, -0.2733281",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2103,
      "AGENT BUSINESS NAME": "ERICTECH CONSULT AND CONSTRUCTION ",
      "AGENT USERNAME": "ECC12301",
      "ADDRESS": "MAMPROBI",
      "Location": "NEAR MAMPROBI POLICE STATION ",
      "GPS COORDINATES": "5.5338375, -0.2393594",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2104,
      "AGENT BUSINESS NAME": "KOJOE P ENTERPRISE ",
      "AGENT USERNAME": "KPESUB12301",
      "ADDRESS": "MAMPROBI ",
      "Location": "AKOSHIE JUNCTION ",
      "GPS COORDINATES": "5.5365375, -0.2464844",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2105,
      "AGENT BUSINESS NAME": "KOJOE P ENTERPRISE ",
      "AGENT USERNAME": "KPESUB12302",
      "ADDRESS": "MAMPROBI ",
      "Location": "AKOSHIE JUNCTION ",
      "GPS COORDINATES": "5.5365375, -0.2464844",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2106,
      "AGENT BUSINESS NAME": "Be-Belon",
      "AGENT USERNAME": "BCL04701",
      "ADDRESS": "Unnumbered Shop Madina Zongo Junction ",
      "Location": "Opposite Libya Quarters Taxi station",
      "GPS COORDINATES": "5.6787271, -0.1748625",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2107,
      "AGENT BUSINESS NAME": "VALUECASH ENTERPRISE ",
      "AGENT USERNAME": "VEN40101",
      "ADDRESS": "UNNUMBERED BUILDING AT ANAJI,TAKORADI ",
      "Location": "ADJECENT AHANTAMAN RURAL BANK",
      "GPS COORDINATES": "4°56'10.0' N 1°46'33.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2108,
      "AGENT BUSINESS NAME": "IKE-IKE VENTURES ",
      "AGENT USERNAME": "IIVSUB40101",
      "ADDRESS": "UNNUMBERED SHOP AT TACOTEL,TAKORADI ",
      "Location": "CLOSE TO TACOTEL,NEAR WVLC BUILDING ",
      "GPS COORDINATES": "4°55'03. 5 ' N 1° 44'46.2 'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2109,
      "AGENT BUSINESS NAME": "IKE-IKE VENTURES ",
      "AGENT USERNAME": "IIVSUB40102",
      "ADDRESS": "UNNUMBERED SHOP AT CHINESE,TAKORADI ",
      "Location": "OPPOSITE TOTAL FILLING STATION",
      "GPS COORDINATES": "4°54'58. 7'N 1° 45'04.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2110,
      "AGENT BUSINESS NAME": "BLESSED KONADU ENTERPRISE",
      "AGENT USERNAME": "BLESUB04202",
      "ADDRESS": "UNN SHOP AT AFARIWA TULAKU",
      "Location": "NEAR THE POLICE BARRER",
      "GPS COORDINATES": "5.704587,-0.014578",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2111,
      "AGENT BUSINESS NAME": "AWASE BUSINESS ENT",
      "AGENT USERNAME": "ABE20101",
      "ADDRESS": "UNNUMBERED STORE AT EKYE AMANFROM ",
      "Location": "NEAR THE MARKET ",
      "GPS COORDINATES": "6°44'34.2' N 0°30'14.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2112,
      "AGENT BUSINESS NAME": "DESSY'S ENTERPRISE ",
      "AGENT USERNAME": "DEN20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT KADEWASO",
      "Location": "NEAR NEW EDEN SCHOOL ",
      "GPS COORDINATES": "6°25'50.2' N 0°49'33.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2113,
      "AGENT BUSINESS NAME": "ARTICLE WAY VENTURES ",
      "AGENT USERNAME": "AWVSUB20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT NKAWKAW AWENADE",
      "Location": "NEAR SCHOOL JUNCTION ",
      "GPS COORDINATES": "6°35'03.2' N 0°48'56.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2114,
      "AGENT BUSINESS NAME": "HARIJAGA ENTERPRISE ",
      "AGENT USERNAME": "HEN09001",
      "ADDRESS": "WAPAANI ",
      "Location": "CLOSE TO WA CENTRAL MARKET",
      "GPS COORDINATES": "10°03'48.2' N 2°30'13.4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2115,
      "AGENT BUSINESS NAME": "BIGZYAD VENTURES ",
      "AGENT USERNAME": "BIG09001",
      "ADDRESS": "WAPAANI ",
      "Location": "CLOSE TO WA COMMUNITY COOPERATIVE UNION ",
      "GPS COORDINATES": "10°03'54.3' N 2°30'26.4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2116,
      "AGENT BUSINESS NAME": "DODOSON VENTURES ",
      "AGENT USERNAME": "DOVSUB09002",
      "ADDRESS": "WAPAANI ",
      "Location": "CLOSE TO NIB BANK",
      "GPS COORDINATES": "10°03'54.3' N 2°30'26.4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2117,
      "AGENT BUSINESS NAME": "BIGZYAD VENTURES ",
      "AGENT USERNAME": "BIG09001",
      "ADDRESS": "WAPAANI ",
      "Location": "CLOSE TO WA COMMUNITY COOPERATIVE UNION ",
      "GPS COORDINATES": "10°04'00.7' N 2°30'24.2' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2118,
      "AGENT BUSINESS NAME": "ASAAWA DESIGNER WEAR AND TRADING ",
      "AGENT USERNAME": "ADW09001",
      "ADDRESS": "TUMU",
      "Location": "CLOSE TO GCB BANK ",
      "GPS COORDINATES": "10°52'43.8' N 1°59'07.3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2119,
      "AGENT BUSINESS NAME": "BABZY MONEY CREATION ",
      "AGENT USERNAME": "BMC20101",
      "ADDRESS": "STORE NUMBER AD 517, ANYINAM",
      "Location": "NEAR LORRY STATION, ANYINAM ",
      "GPS COORDINATES": "6°22'54.8' N 0°33'00.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2120,
      "AGENT BUSINESS NAME": "ABODIE ENT",
      "AGENT USERNAME": "AEN20102",
      "ADDRESS": "UNNUMBERED CONTAINER AT ENYIRESI",
      "Location": "NEAR ENYIRESI GOV. HOSPITAL ",
      "GPS COORDINATES": "6°26'12.4' N 0°35'09.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2121,
      "AGENT BUSINESS NAME": "TUGA KINGSAM VENTURES ",
      "AGENT USERNAME": "TKV20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT NKAWKAW NEW RD.",
      "Location": "NEAR BYPASS JUNCTION ",
      "GPS COORDINATES": "6°31'49.5' N 0°44'07.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2122,
      "AGENT BUSINESS NAME": "SASA LINK",
      "AGENT USERNAME": "SAL20101",
      "ADDRESS": "UNNUMBERED STORE AT NKAWKAW ZONGO",
      "Location": "NEAR THE MOSQUE ",
      "GPS COORDINATES": "6°32'49.6' N 0°45'45.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2123,
      "AGENT BUSINESS NAME": "DREWKUM VENTURES ",
      "AGENT USERNAME": "DVE20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT MPRAESO ",
      "Location": "NEAR POST OFFICE ",
      "GPS COORDINATES": "6°35'36.1' N 0°44'02.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2124,
      "AGENT BUSINESS NAME": "K.A.11 ENT",
      "AGENT USERNAME": "KAE20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT MPRAESO ",
      "Location": "NEAR MARKET SQUARE ",
      "GPS COORDINATES": "6°35'28.5' N 0°44'06.2°",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2125,
      "AGENT BUSINESS NAME": "YUSSIF 1 ENTERPRISE",
      "AGENT USERNAME": "YEN80101",
      "ADDRESS": "UNNUMBERED CONTAINER ",
      "Location": "NEAR LAMASHEGU MARKET",
      "GPS COORDINATES": "9.392174,-0.852025",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2126,
      "AGENT BUSINESS NAME": "SOLONKO ENTERPRISE ",
      "AGENT USERNAME": "SEN02501",
      "ADDRESS": "UNNUMBERED SHOP AT MILE 7",
      "Location": "NEAR FIDELITY BANK ACHIMOTA BRANCH ",
      "GPS COORDINATES": "5.6342859,-0.2431879",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2127,
      "AGENT BUSINESS NAME": "STANDARD AVENUE ",
      "AGENT USERNAME": "SAV02501",
      "ADDRESS": "UNNUMBERED SHOP AT CHANTAN ",
      "Location": "NEAR KIDS PALACE AND LIVING GOD AVENUE ",
      "GPS COORDINATES": "5.6275277,-0.261332",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2128,
      "AGENT BUSINESS NAME": "DAN DE LION VENTURES",
      "AGENT USERNAME": "DDLSUB04501",
      "ADDRESS": "UNNUMBERED SHOP AT DOME JUNCTION",
      "Location": "NEAR ACHIMOTA ECG",
      "GPS COORDINATES": "5.6383424,-0.2440426",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2129,
      "AGENT BUSINESS NAME": "PANNIES LINK",
      "AGENT USERNAME": "PLI02501",
      "ADDRESS": "UNNUMBERED SHOP AT KOTOKO MEDEA ",
      "Location": "NEAR TWELLIUM INDUSTRIES ",
      "GPS COORDINATES": "5.7466607,-0.3494134",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2130,
      "AGENT BUSINESS NAME": "AWIAGAH VENTURES ",
      "AGENT USERNAME": "AWV04501",
      "ADDRESS": "UNNUMBERED SHOP AT MEDEA KOTOKU ",
      "Location": "NEAR THE KOTOKU STATION ",
      "GPS COORDINATES": "5.7400413,-0.358874",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2131,
      "AGENT BUSINESS NAME": "ADAR COMMUNICATION AND BUSINESS CENTRE ",
      "AGENT USERNAME": "ACASUB30201",
      "ADDRESS": "Winneba Roundabout ",
      "Location": "Winneba Roundabout lorry station ",
      "GPS COORDINATES": "5°22'56.1'N0°38'42.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2132,
      "AGENT BUSINESS NAME": "VEEKISS CASH POINT",
      "AGENT USERNAME": "VCP03801",
      "ADDRESS": "NII BOI TOWN ",
      "Location": "Links Garden ",
      "GPS COORDINATES": "5.6142770,-0.2460000",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2133,
      "AGENT BUSINESS NAME": "CHRISBEE 505 VENTURES",
      "AGENT USERNAME": "CSV61002",
      "ADDRESS": "SUAME MAGAZINE",
      "Location": "CLOSE TO POST OFFICE",
      "GPS COORDINATES": "6°43'17.6'N1°37'57.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2134,
      "AGENT BUSINESS NAME": "PHONDAC ENTERPRISE ",
      "AGENT USERNAME": "PHE02101",
      "ADDRESS": "NORTH KANESHIE ",
      "Location": "SUNFLOWER SCHOOL ",
      "GPS COORDINATES": "5.590768-0.244801",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2135,
      "AGENT BUSINESS NAME": "SWANZY WANN ENTERPRISE ",
      "AGENT USERNAME": "SWE03801",
      "ADDRESS": "SANTA MARIA",
      "Location": "DONEWEL METHODIST CHURCH ",
      "GPS COORDINATES": "5.5606191-,0.275886",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2136,
      "AGENT BUSINESS NAME": "ADU BEKEO 87 VENTURES",
      "AGENT USERNAME": "ADV60401",
      "ADDRESS": "Anomangye",
      "Location": "Close to Baba Alhassan Bridge",
      "GPS COORDINATES": "6°43'31.5'N 1°38'39.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2137,
      "AGENT BUSINESS NAME": "MODERN AGE OVERCOMERS ENTERPRISE ",
      "AGENT USERNAME": "MAOSUB03801",
      "ADDRESS": "LAPAZ ",
      "Location": "NEW MARKET ",
      "GPS COORDINATES": "5.609070-,0.256534",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2138,
      "AGENT BUSINESS NAME": "MODERN AGE OVERCOMERS ENTERPRISE ",
      "AGENT USERNAME": "MAOSUB03802",
      "ADDRESS": "LAPAZ ",
      "Location": "NEW MARKET COLD STORE",
      "GPS COORDINATES": "5.560732-0.257259",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2139,
      "AGENT BUSINESS NAME": "TRICMON HUB",
      "AGENT USERNAME": "THU03801",
      "ADDRESS": "LAPAZ ",
      "Location": "NEW MARKET ",
      "GPS COORDINATES": "5.607527-0.256287",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2140,
      "AGENT BUSINESS NAME": "C-MONEY ENTERPRISE ",
      "AGENT USERNAME": "CME",
      "ADDRESS": "NEW SITE TAKORADI ",
      "Location": "NEAR THE TTU CAMPUS ",
      "GPS COORDINATES": "4.910841,-1.756345",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2141,
      "AGENT BUSINESS NAME": "C-MONEY ENTERPRISE ",
      "AGENT USERNAME": "CMESUB40602",
      "ADDRESS": "TAKORADI NEW SITE ",
      "Location": "NEAR THE TTU CAMPUS ",
      "GPS COORDINATES": "4.910841,-1.756345",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2142,
      "AGENT BUSINESS NAME": "SUPERNATURAL GRACE VENTURES ",
      "AGENT USERNAME": "SGVSUB40601",
      "ADDRESS": "KANSAWORODO",
      "Location": "NEAR THE NEW STATION ",
      "GPS COORDINATES": "4.952972,-1.7632420",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2143,
      "AGENT BUSINESS NAME": "MOBILE 2 NET",
      "AGENT USERNAME": "MNESUB30202",
      "ADDRESS": "CAPECOAST ABEASE ",
      "Location": "ABEASE ROUNDABOUT - CHILD EVANGELISM FELLOWSHIP CHURCH ",
      "GPS COORDINATES": "5°60'23.7'N1°14'50.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2144,
      "AGENT BUSINESS NAME": "FRANCIKUMI ENTERPRISE ",
      "AGENT USERNAME": "FVE70401",
      "ADDRESS": "UNNUMBERED SHOP AT HWIDEM ",
      "Location": "ADJACENT GCB",
      "GPS COORDINATES": "6.934250-2.356397",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2145,
      "AGENT BUSINESS NAME": "Ben who knows Tomorrow Ventures ",
      "AGENT USERNAME": "BWK40501",
      "ADDRESS": "Unnumbered shop at Efuanta",
      "Location": "Near Longji Hotel",
      "GPS COORDINATES": "5.17’10.2'N  2.00’12.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2146,
      "AGENT BUSINESS NAME": "E.A ANTWI ENTERPRISE ",
      "AGENT USERNAME": "EAA40601",
      "ADDRESS": "ANAJI- C.K MANN ",
      "Location": "OPPOSITE THE C.K MANN PARK ",
      "GPS COORDINATES": "4.928321,-1.7719520",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2147,
      "AGENT BUSINESS NAME": "MABECK SOLUTIONS ",
      "AGENT USERNAME": "MAS40601",
      "ADDRESS": "ANAJI ",
      "Location": "NEAR QUEENSLAND HOTEL ",
      "GPS COORDINATES": "4.9398890,-1.7757200",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2148,
      "AGENT BUSINESS NAME": "Abubakari Masha Allah Enterprise",
      "AGENT USERNAME": "AMA61002",
      "ADDRESS": "TAFO AHENBRONUM",
      "Location": "NEAR T-JUNCTION",
      "GPS COORDINATES": "37°23'23.3'N122°04'53.1",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2149,
      "AGENT BUSINESS NAME": "TRIMPPLE M. MOHAMMED ENTERPRISE",
      "AGENT USERNAME": "TRM61001",
      "ADDRESS": "TAFO 3 MILES",
      "Location": "OPPOSITE AGYA ABRANTE3 ADONKO PUB",
      "GPS COORDINATES": "37°23'23.3'N122°04'53.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2150,
      "AGENT BUSINESS NAME": "BESHEBA LINK ENTERPRISE",
      "AGENT USERNAME": "BLE1001",
      "ADDRESS": "MAGAZINE",
      "Location": "NEAR GARAGES",
      "GPS COORDINATES": "6°43'27.8'N1°37.46.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2151,
      "AGENT BUSINESS NAME": "M.BALLACK ENTERPRISE",
      "AGENT USERNAME": "MBA61001",
      "ADDRESS": "MAGAZINE",
      "Location": "NEAR GARAGES OFFICE",
      "GPS COORDINATES": "6°43'20.8'N1°37'58.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2152,
      "AGENT BUSINESS NAME": "Platinum Farms and Trading Enterprise",
      "AGENT USERNAME": "PFT61001",
      "ADDRESS": "Magazine",
      "Location": "Opposite Glamous House",
      "GPS COORDINATES": "6°49'30.5'N1°37'57.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2153,
      "AGENT BUSINESS NAME": "ANKRAHFAM VENTURES",
      "AGENT USERNAME": "ANK20301",
      "ADDRESS": "P.O BOX 234 MAMPONG",
      "Location": "OPPOSITE MEDIFAM",
      "GPS COORDINATES": "5.910537-0.143147",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2154,
      "AGENT BUSINESS NAME": "OFFMART ENTERPRISE",
      "AGENT USERNAME": "OHM20301",
      "ADDRESS": "P.O BOX 123 TINKONG",
      "Location": "NEAR TINKONG TAXI RANK ",
      "GPS COORDINATES": "5.990302-0.236847",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2155,
      "AGENT BUSINESS NAME": "ABROKWA BECCA ENTERPRISE",
      "AGENT USERNAME": "ABE30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR THE AUDIT SERVICE",
      "GPS COORDINATES": "5.6990170,1.2788540",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2156,
      "AGENT BUSINESS NAME": "EMGOL COMPUTER SYSTEMS",
      "AGENT USERNAME": "ECSSUB30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR GHANA REVENUE",
      "GPS COORDINATES": "5.6984070,-1.2785980",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2157,
      "AGENT BUSINESS NAME": "NARTLIN MICRO CREDIT ENTERPRISE",
      "AGENT USERNAME": "NML30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU",
      "Location": "OPPOSITE MELCOM",
      "GPS COORDINATES": "5.711718,-1.286757",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2158,
      "AGENT BUSINESS NAME": "BABYASK BUSINESS CENTER",
      "AGENT USERNAME": "BBC30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR THE MAIN FOSU STATION",
      "GPS COORDINATES": "5.696869,-1.276648",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2159,
      "AGENT BUSINESS NAME": "GOLDEN PHONES",
      "AGENT USERNAME": "GPHSUB30102",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR THE MAIN TROTRO STATION",
      "GPS COORDINATES": "5.696387,-1.276972",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2160,
      "AGENT BUSINESS NAME": "4KD TRADING ENTERPRISE",
      "AGENT USERNAME": "KDTSUB30107",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR THE MAIN MARKET",
      "GPS COORDINATES": "5.6958530,-1.2764020",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2161,
      "AGENT BUSINESS NAME": "4KD  TRADING ENTERPRISE",
      "AGENT USERNAME": "KDTSUB30102",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR THE MARKET",
      "GPS COORDINATES": "5.696387,-1.276972",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2162,
      "AGENT BUSINESS NAME": "4KD TRADING ENTERPRISE",
      "AGENT USERNAME": "KDTSUB30104",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU",
      "Location": "NEAR THE WOMEN MARKET",
      "GPS COORDINATES": "5.695529,-1.276636",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2163,
      "AGENT BUSINESS NAME": "4KD TRADING ENTERPRISE",
      "AGENT USERNAME": "KDTSUB30105",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "INSIDE THE MAIN MARKET",
      "GPS COORDINATES": "5.695666,-1.276244",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2164,
      "AGENT BUSINESS NAME": "ZOE FO VENTURES",
      "AGENT USERNAME": "ZFV30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU",
      "Location": "NEAR THE COLD STORE INSIDE THE MARKET",
      "GPS COORDINATES": "5.695324,-1.275912",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2165,
      "AGENT BUSINESS NAME": "1NANA KUSI ULTIMATE ENTERPRISE",
      "AGENT USERNAME": "NKUSUB30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR NANA KUSI SHOES ",
      "GPS COORDINATES": "5.6947840,-1.2765020",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2166,
      "AGENT BUSINESS NAME": "1NANA KUSI ULTIMATE  ENTERPRISE",
      "AGENT USERNAME": "NKUSUB30102",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "OPPOSITE SPN MICRO FINANCE ",
      "GPS COORDINATES": "5.694544,-1.276455",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2167,
      "AGENT BUSINESS NAME": "1NANA KUSI ULTIMATE ENTERPRISE",
      "AGENT USERNAME": "NKUSUB30103",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR IMMIGRATION ROAD",
      "GPS COORDINATES": "5.694194,-1.277256",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2168,
      "AGENT BUSINESS NAME": "SPN MICRO CREDIT",
      "AGENT USERNAME": "SMC30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU",
      "Location": "NEAR THE MARKET",
      "GPS COORDINATES": "5.693348,-1.277101",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2169,
      "AGENT BUSINESS NAME": "EBENKB ENTERPRISE",
      "AGENT USERNAME": "EPESUB30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR OBIRI YABOAH SCHOOL",
      "GPS COORDINATES": "5.706479,-1.285736",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2170,
      "AGENT BUSINESS NAME": "EAGLES ROYAL MONTESSORI SCHOOL",
      "AGENT USERNAME": "ERMSUB30101",
      "ADDRESS": "UNNUMBERED LOCATION AT ASSIN FOSU ",
      "Location": "NEAR THE STATIONARY SHOP ",
      "GPS COORDINATES": "5.701568,-1.284411",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2171,
      "AGENT BUSINESS NAME": "LESSBONY MULTIMEDIA",
      "AGENT USERNAME": "LMU61001",
      "ADDRESS": "Anomangye ",
      "Location": "Close to Anomangye M/A Primary School",
      "GPS COORDINATES": "6°43'40.5'N 1°38'34.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2172,
      "AGENT BUSINESS NAME": "Agormedah ventures ",
      "AGENT USERNAME": "AGV05001",
      "ADDRESS": "Unnumbered house at Tema Newtown ",
      "Location": "Near catholic school",
      "GPS COORDINATES": "5°39'47.6'N 0°02'22.8'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2173,
      "AGENT BUSINESS NAME": "Inshamen ",
      "AGENT USERNAME": "ICL05001",
      "ADDRESS": "Unnumbered house at Tema comm 8",
      "Location": "Near Starbite comm 9",
      "GPS COORDINATES": "5°39'47.6'N 0°02'22.8'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2174,
      "AGENT BUSINESS NAME": "Caak ",
      "AGENT USERNAME": "CAE05001",
      "ADDRESS": "Unnumbered house at Tema com 1 mankoadze",
      "Location": "Near mankoadze roundabout ",
      "GPS COORDINATES": "5°39'00.5'N 0°00'06.5'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2175,
      "AGENT BUSINESS NAME": "Ken and hajj ",
      "AGENT USERNAME": "KHCSUB05004",
      "ADDRESS": "Unnumbered house at comm 7",
      "Location": "Near comm 7 shell",
      "GPS COORDINATES": "5°39'51.1'N 0°00'25.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2176,
      "AGENT BUSINESS NAME": "MIDLAND TELECOM",
      "AGENT USERNAME": "MTESUB40501",
      "ADDRESS": "Unnumbered house at Daman",
      "Location": "Near the station",
      "GPS COORDINATES": "5.30’46.6'N  1.51’52.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2177,
      "AGENT BUSINESS NAME": "DARFU VENTURES ",
      "AGENT USERNAME": "DAV80102",
      "ADDRESS": "H50 NYOHINI",
      "Location": "Adjacent Tufour buildings ",
      "GPS COORDINATES": "NS-037-6865",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2178,
      "AGENT BUSINESS NAME": "Senior man o. Enterprise ",
      "AGENT USERNAME": "SEN02201",
      "ADDRESS": "Unnumbered shop at dzorwulu ",
      "Location": "Opposite beauty technicians",
      "GPS COORDINATES": "(5.6118680, -0.1982240)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2179,
      "AGENT BUSINESS NAME": "OHENE BRENYA VENTURES ",
      "AGENT USERNAME": "OBV40501",
      "ADDRESS": "Unnumbered shop at Huni Valley",
      "Location": "Near the Methodist church ",
      "GPS COORDINATES": "5.28’14.3'N  1.54’59.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2180,
      "AGENT BUSINESS NAME": "MIDLAND TELECOM ",
      "AGENT USERNAME": "MTESUB40501",
      "ADDRESS": "Unnumbered shop at Huni Valley",
      "Location": "Near the Taxi station",
      "GPS COORDINATES": "5.28’16.2'N  1.55’57.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2181,
      "AGENT BUSINESS NAME": "KEZDICK ENTERPRISE",
      "AGENT USERNAME": "KDE60701",
      "ADDRESS": "MMROM",
      "Location": "OPPOSITE OSONS CHEMIST",
      "GPS COORDINATES": "8°24'25.8'S1°37'58.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2182,
      "AGENT BUSINESS NAME": "Seftpad Susu Enterprise",
      "AGENT USERNAME": "SSE60201",
      "ADDRESS": "MBROM",
      "Location": "OPPOSITE SAINTS LOIUS JHS",
      "GPS COORDINATES": "6°42'26.8'N1°37'27.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2183,
      "AGENT BUSINESS NAME": "SIX PHOTOS ENTERPRISE",
      "AGENT USERNAME": "SPE60701",
      "ADDRESS": "ASHANTI NEW TOWN",
      "Location": "OPPOSITE UMB",
      "GPS COORDINATES": "6°42'10.1'N1°37'15.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2184,
      "AGENT BUSINESS NAME": "Fresh Era Ventures",
      "AGENT USERNAME": "FEV61001",
      "ADDRESS": "Old Suame",
      "Location": "Opposite Kotoko Mosque",
      "GPS COORDINATES": "6°42'45.0'1°38'02.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2185,
      "AGENT BUSINESS NAME": "Wahkom Ventures",
      "AGENT USERNAME": "WVE60701",
      "ADDRESS": "Suame Market",
      "Location": "Within Avocado Market",
      "GPS COORDINATES": "6.712889,1.631183",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2186,
      "AGENT BUSINESS NAME": "Nuhu Yussif Enterprise",
      "AGENT USERNAME": "NYE61001",
      "ADDRESS": "SUAME MARKET",
      "Location": "WITHIN THE INFORMATION CENTRE",
      "GPS COORDINATES": "6°43'20.8'N1°37'58.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2187,
      "AGENT BUSINESS NAME": "S-DUAH ENTERPRISE",
      "AGENT USERNAME": "SDESUB61003",
      "ADDRESS": "Magazine",
      "Location": "BEHIND Nurom Hotel",
      "GPS COORDINATES": "6°42'54.9'N1°37'30.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2188,
      "AGENT BUSINESS NAME": "Serwaa Papabi Enterprise",
      "AGENT USERNAME": "SPE60701",
      "ADDRESS": "KO Methodist",
      "Location": "Opposite fidelity bank",
      "GPS COORDINATES": "6.699784,-1.621982",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2189,
      "AGENT BUSINESS NAME": "W.T.Sadia  Enterprise",
      "AGENT USERNAME": "WTS60701",
      "ADDRESS": "Allabar",
      "Location": "Within Allabar Market",
      "GPS COORDINATES": "6°41'45.7'N1°37'11.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2190,
      "AGENT BUSINESS NAME": "Adusei Feel Free Enterprise",
      "AGENT USERNAME": "AFF60701",
      "ADDRESS": "Ashanti New Town",
      "Location": "Near the Post Office",
      "GPS COORDINATES": "6°42'02.7'N1°37'09.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2191,
      "AGENT BUSINESS NAME": "REGIBEN FAMILY PHARMACY LTD ",
      "AGENT USERNAME": "RFPSUB30201",
      "ADDRESS": "WINNEBA ",
      "Location": "WINNESEC JUNCTION ",
      "GPS COORDINATES": "5°21'30.1'N0°37'58.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2192,
      "AGENT BUSINESS NAME": "NTIM TELECOM ",
      "AGENT USERNAME": "NTT30201",
      "ADDRESS": "WINNEBA ",
      "Location": "UEW MAIN CAMPUS - WINNEBA ",
      "GPS COORDINATES": "5°21'35.1'N0°37'57.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2193,
      "AGENT BUSINESS NAME": "MEMANA ENTERPRISE ",
      "AGENT USERNAME": "MEMSUB30202",
      "ADDRESS": "WINNEBA ",
      "Location": "MUNICIPAL ASSEMBLY SCHOOL - JHS",
      "GPS COORDINATES": "5°21'34.4'N0°37'51.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2194,
      "AGENT BUSINESS NAME": "BERTFRED VENTURES ",
      "AGENT USERNAME": "BVE30201",
      "ADDRESS": "WINNEBA ",
      "Location": "REPUBLIC BANK",
      "GPS COORDINATES": "5°21'25.2'N0°37'55.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2195,
      "AGENT BUSINESS NAME": "SAVIOUR JUNCTION ",
      "AGENT USERNAME": "SATSUB30202",
      "ADDRESS": "WINNEBA ",
      "Location": "WINNEBA MARKET ",
      "GPS COORDINATES": "5°20'51.3'N0°37'34.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2196,
      "AGENT BUSINESS NAME": "MEMANA ENTERPRISE ",
      "AGENT USERNAME": "MEMSUB30201",
      "ADDRESS": "WINNEBA ",
      "Location": "UEW CENTRAL CAMPUS ",
      "GPS COORDINATES": "5°20'46.2'N0°37'32.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2197,
      "AGENT BUSINESS NAME": "Kumi Unique Ventures",
      "AGENT USERNAME": "KUV61001",
      "ADDRESS": "COLOMBIA",
      "Location": "NEAR JB DANKWA SCHOPOL",
      "GPS COORDINATES": "6°42'53.1'N1°37'03.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2198,
      "AGENT BUSINESS NAME": "Mistyboat Prints and Trading Enterprise",
      "AGENT USERNAME": "MPA61001",
      "ADDRESS": "ASOKORE MAMPONG",
      "Location": "OPPOSITE KUMACA MAIN GATE",
      "GPS COORDINATES": "6°42'36.2'N1°34'10.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2199,
      "AGENT BUSINESS NAME": "Naabebie Plus Enterprise",
      "AGENT USERNAME": "NPE61001",
      "ADDRESS": "ASOKORE MAMPONG ",
      "Location": "OPPOSITE KUMACA",
      "GPS COORDINATES": "6°42'37.6'N1°34.13.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2200,
      "AGENT BUSINESS NAME": "Mocobilly Enterprise",
      "AGENT USERNAME": "MEN61001",
      "ADDRESS": "ASOKORE MAMPONG",
      "Location": "NEAR SOCCERBET",
      "GPS COORDINATES": "6°42'38.7'N1°33'55.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2201,
      "AGENT BUSINESS NAME": "RIGHT DIRECTION ENTERPRISE ",
      "AGENT USERNAME": "RDE03201",
      "ADDRESS": "UNNUMBERED SHOP AT DARKUMAN ",
      "Location": "NEAR DARKUMAN JUNCTION ",
      "GPS COORDINATES": "5.5774058,-0.2554215",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2202,
      "AGENT BUSINESS NAME": "ALBERTO ELECTRONICS AND TRADING VENTURES ",
      "AGENT USERNAME": "AET03201",
      "ADDRESS": "UNNUMBERED SHOP AT DARKUMAN ",
      "Location": "DICKSON STREET, NEAR GOIL FILLING STATION ",
      "GPS COORDINATES": "5.5828612,-0.2531076",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2203,
      "AGENT BUSINESS NAME": "YOMBO BI ENTERPRISE ",
      "AGENT USERNAME": "YBE01501",
      "ADDRESS": "UNNUMBERED HOUSE AT DARKUMAN ",
      "Location": "NEAR THE MOSQUE",
      "GPS COORDINATES": "5.5858606,-0.2518517",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2204,
      "AGENT BUSINESS NAME": "YA RAFI INVESTMENT ",
      "AGENT USERNAME": "YRI03801",
      "ADDRESS": "UNNUMBERED SHOP AT DARKUMAN ",
      "Location": "NEAR THE METHODIST CHURCH ",
      "GPS COORDINATES": "5.5870856,-0.2512076",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2205,
      "AGENT BUSINESS NAME": "LOC YAAKOV ENTERPRISE ",
      "AGENT USERNAME": "LYE04601",
      "ADDRESS": "UNNUMBERED SHOP AT DARKUMAN ",
      "Location": "NEAR CIRCLE STATION ",
      "GPS COORDINATES": "5.5905682,-0.2534661",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2206,
      "AGENT BUSINESS NAME": "THE PRINCE LINKS ENTERPRISE ",
      "AGENT USERNAME": "TPE 5101.00",
      "ADDRESS": "UNNUMBERED SHOP AT DARKUMAN ",
      "Location": "NEAR DARKUMAN-NYAMEKYE ROAD",
      "GPS COORDINATES": "5.5984185,-0.2546763",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2207,
      "AGENT BUSINESS NAME": "AK ANOINTED HANDS ENTERPRISE",
      "AGENT USERNAME": "AKASUB02801",
      "ADDRESS": "Ashaiman Christian Village ",
      "Location": "Near Church Of Pentecost",
      "GPS COORDINATES": "5.703317,-0.024539",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2208,
      "AGENT BUSINESS NAME": "GEALDS ADVERTISING",
      "AGENT USERNAME": "GAD04201",
      "ADDRESS": "33 Debora Avenue, Saki Tema",
      "Location": "BEHIND THE CHIEFS PALACE",
      "GPS COORDINATES": "5.723286,-0.0028940",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2209,
      "AGENT BUSINESS NAME": "FELISTOWEL ENTERPRISE ",
      "AGENT USERNAME": "FELSUB30201",
      "ADDRESS": "MANKESSIM ",
      "Location": "MANKESSIM GOIL FILLING STATION ",
      "GPS COORDINATES": "5°16'03.9'N1°01'03.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2210,
      "AGENT BUSINESS NAME": "BLESSED KONADU ENTERPRISE",
      "AGENT USERNAME": "BLESUB04203",
      "ADDRESS": "UNN SHOP AT KLAGON",
      "Location": "NEAR KLAGON TOTAL ENERGIES",
      "GPS COORDINATES": "5.6716350,-0.0461660",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2211,
      "AGENT BUSINESS NAME": "SHAMZY FF VENTURES",
      "AGENT USERNAME": "SFVSUB70301",
      "ADDRESS": "TECHIMAN, BONO EAST",
      "Location": "NEAR OLD MELCOM TECHIMAN",
      "GPS COORDINATES": "7.590678,-1.9355640",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2212,
      "AGENT BUSINESS NAME": "SHAMZY FF VENTURES",
      "AGENT USERNAME": "SFVSUB70302",
      "ADDRESS": "DAGOMBA LINE -TECHIMAN, BONO EAS REGION",
      "Location": "NEAR DAGOMBA LINE/JUNCTION,TECHIMAN",
      "GPS COORDINATES": "7.5924930,-1.9322650",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2213,
      "AGENT BUSINESS NAME": "SISALA VENTURES",
      "AGENT USERNAME": "SIV70301",
      "ADDRESS": "KENTEN TECHIMAN,BONO EAST REGION",
      "Location": "BEHIND EXCELL FILLING STATION,KENTEN",
      "GPS COORDINATES": "7.599480,-1.9442660",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2214,
      "AGENT BUSINESS NAME": "BABA AHMED ROYAL VENTURES",
      "AGENT USERNAME": "BAR70301",
      "ADDRESS": "BANDA NKWANTA, BONO EAST REGION",
      "Location": "NEAR BANDA NKWANTA TAXI STATION",
      "GPS COORDINATES": "8.351253,-2.136192",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2215,
      "AGENT BUSINESS NAME": "DOMINIC ANKOMAH ENTERPRISE",
      "AGENT USERNAME": "DAE70301",
      "ADDRESS": "NEW LONGORO- BAMBOI,BONO EAST REGION",
      "Location": "NEAR WENCHI RURAL BANK, BAMBOI",
      "GPS COORDINATES": "8.1592540,-2.0319260",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2216,
      "AGENT BUSINESS NAME": "CHRISTIAN@TSINASI MOURINO VENTURES",
      "AGENT USERNAME": "CTM70301",
      "ADDRESS": "YEJI, BONO EAST REGION",
      "Location": "NEAR YEJI RIVER SIDE",
      "GPS COORDINATES": "BP-0001-0889",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2217,
      "AGENT BUSINESS NAME": "MOHAMMED @ ABD ENTERPRISE",
      "AGENT USERNAME": "MAA70301",
      "ADDRESS": "YEJI, BONO EAST REGION",
      "Location": "NEAR YEJI MARKET ROUNDABOUT",
      "GPS COORDINATES": "8.231790,-0.647590",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2218,
      "AGENT BUSINESS NAME": "VIBRANT AUGUSTINE VENTURES",
      "AGENT USERNAME": "VAV70301",
      "ADDRESS": "TAKO-TECHIMAN, BONO EAST REGION",
      "Location": "NEAR TAKO BY NIGHT SPOT",
      "GPS COORDINATES": "7.599869,-1.934272",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2219,
      "AGENT BUSINESS NAME": "FAMILY AND FRIENDS VEN9",
      "AGENT USERNAME": "FAF70301",
      "ADDRESS": "SAABUZONGO TECHIMAN,BONO EAST REGION",
      "Location": "NEAR SABUZOGU MARKET",
      "GPS COORDINATES": "7.594482,-1.923330",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2220,
      "AGENT BUSINESS NAME": "CAPADOMA VENTURES",
      "AGENT USERNAME": "CVE 2801.00",
      "ADDRESS": "UNN SHOP AT COMMUNITY 25",
      "Location": "ADJACENT PERFECT EBONY AND IVORY",
      "GPS COORDINATES": "5.739405,0.0458960",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2221,
      "AGENT BUSINESS NAME": "DAG MAABAY VENTURES",
      "AGENT USERNAME": "DMV02801",
      "ADDRESS": "UNN SHOP AT COMMUNITY 25",
      "Location": "OPPOSITE DPS INT. SCHOOL",
      "GPS COORDINATES": "5.7344560,0.0151480",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2222,
      "AGENT BUSINESS NAME": "MEMS-DEKINGS ENTERPRISE",
      "AGENT USERNAME": "MDE02801",
      "ADDRESS": "UNN SHOP AT GOLF CITY ",
      "Location": "BEHIND GOLF CITY POLICE STATION",
      "GPS COORDINATES": "5.7195040,-0.0019460",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2223,
      "AGENT BUSINESS NAME": "PRINCE ALORNYENU ENTERPRISE",
      "AGENT USERNAME": "PAE02801",
      "ADDRESS": "HOUSE NUMBER C-LON-33 GBETSILE",
      "Location": "NEAR THE TYRE JUNCTION",
      "GPS COORDINATES": "5.748705,-0.0326700",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2224,
      "AGENT BUSINESS NAME": "JUSTCLEAN RICH ENTERPRISE",
      "AGENT USERNAME": "JRE02801",
      "ADDRESS": "UNN SHOP AT GBETSILE ",
      "Location": "NEAR US JUNCTION",
      "GPS COORDINATES": "5.749541,1-0.029601",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2225,
      "AGENT BUSINESS NAME": "BLESSED MIPHY ENTERPRISE",
      "AGENT USERNAME": "BMESUB02802",
      "ADDRESS": "HSE NO GB/17 GBETSILE",
      "Location": "NEAR BUMBER  PARK",
      "GPS COORDINATES": "5.7650410,-0.0435020",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2226,
      "AGENT BUSINESS NAME": "BLESSED MIPHY ENTERPRISE",
      "AGENT USERNAME": "BMESUB02802",
      "ADDRESS": "UNN SHOP AT TEMA NEW TOWN",
      "Location": "NEAR ROCK SPOT",
      "GPS COORDINATES": "5.649927,-0.0159350",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2227,
      "AGENT BUSINESS NAME": "MOUNT SUNSET ADOM VENTURES",
      "AGENT USERNAME": "MSA02801",
      "ADDRESS": "HSE NO CU 97 ASHAIMAN",
      "Location": "NEAR GLOBAL EVANGELICAL",
      "GPS COORDINATES": "5.7033280,-0.0220740",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2228,
      "AGENT BUSINESS NAME": "JOMOSDU ENTERPRISE",
      "AGENT USERNAME": "JEN02802",
      "ADDRESS": "HSE NO 5 OSABUTEY ST. ASHAIMAN",
      "Location": "NEAR ASHAIMAN POLYCLINIC",
      "GPS COORDINATES": "5.685330,-0.039025",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2229,
      "AGENT BUSINESS NAME": "SAMMYOUNG GRAND ENTERPRISE",
      "AGENT USERNAME": "SGE02801",
      "ADDRESS": "HSE NO AK3 ADJEI KOJO -ASHAIMAN",
      "Location": "BEHIND CHURCH OF PENTECOST",
      "GPS COORDINATES": "5.680923,-0.0523330",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2230,
      "AGENT BUSINESS NAME": "YUSSIF SPADO AJAASUMA VENTURES ",
      "AGENT USERNAME": "YSA09001",
      "ADDRESS": "UNNUMBERED SHOP TENDAMBA WA UPPER WEST REGION ",
      "Location": "CLOSE TO NURIYA ISLAMIC SCHOOL",
      "GPS COORDINATES": "10°03'15.7' N 2°30'28.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2231,
      "AGENT BUSINESS NAME": "PRECIOUS ONE INVESTMENTS ",
      "AGENT USERNAME": "POI09001",
      "ADDRESS": "UNNUMBERED SHOP KABANYE WA UPPER WEST REGION ",
      "Location": "IN FRONT OF SSNIT OFFICE",
      "GPS COORDINATES": "10°03'42.4' N 2°29'52.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2232,
      "AGENT BUSINESS NAME": "YELVIELBAYIRE ENTERPRISE ",
      "AGENT USERNAME": "YBE09001",
      "ADDRESS": "UNNUMBERED SHOP DABO UPPER WEST REGION ",
      "Location": "IN FRONT OF THE MARKET ",
      "GPS COORDINATES": "10°06'58.3' N 2°46'16.0' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2233,
      "AGENT BUSINESS NAME": "JERIGU SUR-IDD ENTERPRISE ",
      "AGENT USERNAME": "JSI09001",
      "ADDRESS": "UNNUMBERED SHOP KEJETIA WA UPPER WEST REGION ",
      "Location": "INSIDE WA CENTRAL MARKET ",
      "GPS COORDINATES": "10°03'48.3' N 2°30'16.8' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2234,
      "AGENT BUSINESS NAME": "RANSFORD SONI-ALA ENTERPRISE ",
      "AGENT USERNAME": "RSE09001",
      "ADDRESS": "UNNUMBERED SHOP NYOLI ",
      "Location": "CLOSE TO LAMENE HAIR CUT",
      "GPS COORDINATES": "9°44'11.5' N 2°29'36.4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2235,
      "AGENT BUSINESS NAME": "F-NUMBU VENTURES ",
      "AGENT USERNAME": "FNV09001",
      "ADDRESS": "UNNUMBERED SHOP BAMAHU WA UPPER WEST REGION ",
      "Location": "CLOSE TO BEST JOINT FAST FOOD",
      "GPS COORDINATES": "10°00'23.3' N 2°28'53.4' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2236,
      "AGENT BUSINESS NAME": "i 95 Enterprises",
      "AGENT USERNAME": "IEN60201",
      "ADDRESS": "Kumasi  Danyame",
      "Location": "NEAR Sunset Hotel,",
      "GPS COORDINATES": "6°40'56.7'N1°38'12.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2237,
      "AGENT BUSINESS NAME": "HILARY GIGANIC VENTURES ",
      "AGENT USERNAME": "HGV09001",
      "ADDRESS": "UNNUMBERED SHOP BUSSIE UPPER WEST REGION ",
      "Location": "OPPOSITE THE DAM",
      "GPS COORDINATES": "10°29'18.1' N 2°30'04.1' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2238,
      "AGENT BUSINESS NAME": "E-MINAS ENTERPRISE ",
      "AGENT USERNAME": "EME09001",
      "ADDRESS": "UNNUMBERED SHOP TEEGBER UPPER WEST REGION ",
      "Location": "CLOSE TO DESERT OIL FUEL STATION ",
      "GPS COORDINATES": "10°05'03.5' N 2°30'56.3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2239,
      "AGENT BUSINESS NAME": "Francis Abekah Mensah Enterprise",
      "AGENT USERNAME": "FAM61201",
      "ADDRESS": "Kronum Station",
      "Location": "Near Kronum Abuohia Taxi station",
      "GPS COORDINATES": "6°43'35.8'N 1°48'04.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2240,
      "AGENT BUSINESS NAME": "EDITH ANS COLLECTIONS",
      "AGENT USERNAME": "EAC20101",
      "ADDRESS": "HNO NJ 374, NKAWKAW ACHIESE",
      "Location": "NEAR ECG POWER LINE , NKAWKAW ACHIESE",
      "GPS COORDINATES": "6°33'35.2' N 0°46'34.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2241,
      "AGENT BUSINESS NAME": "DIJARAHIM ENTERPRISE ",
      "AGENT USERNAME": "DIE20101",
      "ADDRESS": "HNO E 31 KWAHU MPRAESO",
      "Location": "INSIDE CENTRAL MARKET",
      "GPS COORDINATES": "6°35'32.6' N 0°44'07.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2242,
      "AGENT BUSINESS NAME": "AWAL ALHAMDULILAH ENT",
      "AGENT USERNAME": "AAE20101",
      "ADDRESS": "HNO F 110, KWABENG",
      "Location": "NEAR CENTRAL MOSQUE ",
      "GPS COORDINATES": "6°19'34.0' N 0°35'11.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2243,
      "AGENT BUSINESS NAME": "OBENG CLEMENT",
      "AGENT USERNAME": "COB20101",
      "ADDRESS": "D 57 OSEIM",
      "Location": "NEAR EAST AKIM RURAL BANK",
      "GPS COORDINATES": "6°15'12.8' N 0°25'20.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2244,
      "AGENT BUSINESS NAME": "CENTERWORLD BUSINESS SERVICES ",
      "AGENT USERNAME": "CBS20101",
      "ADDRESS": "PHC/0825 NKAWKAW NSUTA",
      "Location": "NEAR STARTING POINT HOTEL",
      "GPS COORDINATES": "6°34'40.4' N 0°46'45.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2245,
      "AGENT BUSINESS NAME": "Sampson Boahen 90 Ventures",
      "AGENT USERNAME": "SBV612001",
      "ADDRESS": "Kronum Station",
      "Location": "Close to Kronum Barrier",
      "GPS COORDINATES": "6°43'57.9'N 1°38'05.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2246,
      "AGENT BUSINESS NAME": "Master Mind Ventures",
      "AGENT USERNAME": "MMV61201",
      "ADDRESS": "Nkenkaasu Station ",
      "Location": "Opposite the Palace",
      "GPS COORDINATES": "7°18'50.6'N 1°54'06.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2247,
      "AGENT BUSINESS NAME": "Morbee Multimedia",
      "AGENT USERNAME": "MMU61201",
      "ADDRESS": "Anomangye",
      "Location": "Close to the information center",
      "GPS COORDINATES": "6°43'43.0'N 1°38'37.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2248,
      "AGENT BUSINESS NAME": "Waggiraw Ventures",
      "AGENT USERNAME": "WAV60601",
      "ADDRESS": "Kronum Kwapra",
      "Location": "In front of Kwapra taxi station",
      "GPS COORDINATES": "6°45'14.7'N 1°38'25.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2249,
      "AGENT BUSINESS NAME": "Yacoba Ventures",
      "AGENT USERNAME": "YVE61201",
      "ADDRESS": "Suame Magazine",
      "Location": "Close to Garages",
      "GPS COORDINATES": "6°43'31.9'N 1°37'38.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2250,
      "AGENT BUSINESS NAME": "Sir Gerv Ventures",
      "AGENT USERNAME": "SGV61201",
      "ADDRESS": "Asuoso",
      "Location": "50 meters from the station",
      "GPS COORDINATES": "7°15'59.1'N 1°49'39.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2251,
      "AGENT BUSINESS NAME": "Anibo AB Ventures",
      "AGENT USERNAME": "AAV61201",
      "ADDRESS": "Maakro",
      "Location": "Maakro close to GCB Bank",
      "GPS COORDINATES": "6°43'41.4'N 1°37'53.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2252,
      "AGENT BUSINESS NAME": "Felimens Mother Care",
      "AGENT USERNAME": "FMC61201",
      "ADDRESS": "Maakro - Kumasi",
      "Location": "Opposite Cal Bank and close to Eziway Loans",
      "GPS COORDINATES": "6°43'39.3'N 1°37'53.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2253,
      "AGENT BUSINESS NAME": "Adom Nyame Tumiso Enterprise",
      "AGENT USERNAME": "ANT61201",
      "ADDRESS": "Offinso",
      "Location": "Off the Mpehin Road",
      "GPS COORDINATES": "6°55'49.4'N 1°41'04.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2254,
      "AGENT BUSINESS NAME": "Theonyce Ventures",
      "AGENT USERNAME": "TVE61201",
      "ADDRESS": "Afrancho Station",
      "Location": "Close to Afrancho USA",
      "GPS COORDINATES": "6°41'59.1'N 1°37'24.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2255,
      "AGENT BUSINESS NAME": "MICKYTHESS VENTURES",
      "AGENT USERNAME": "MIC03001",
      "ADDRESS": "NIMA",
      "Location": "NEAR OLD BARCLAYS BANK",
      "GPS COORDINATES": "5.579883,-0.201718",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2256,
      "AGENT BUSINESS NAME": "VIEWERS COMPUTERS",
      "AGENT USERNAME": "VCE03101",
      "ADDRESS": "NIMA",
      "Location": "OPPOSITE 31ST DEC MOVEMENT SCHOOL",
      "GPS COORDINATES": "5.580068-0.199681",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2257,
      "AGENT BUSINESS NAME": "ALAZA BARRERING",
      "AGENT USERNAME": "ABB03001",
      "ADDRESS": "NIMA",
      "Location": "OPPOSITE CROSS CLINIC",
      "GPS COORDINATES": "5.581901,0.199507",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2258,
      "AGENT BUSINESS NAME": "BRIHAL VENTURES",
      "AGENT USERNAME": "BVE03001",
      "ADDRESS": "NIMA",
      "Location": "CLOSE HOLLINDIANS HOUSE",
      "GPS COORDINATES": "5.584804,0.200053",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2259,
      "AGENT BUSINESS NAME": "E.Dominico Enterprise ",
      "AGENT USERNAME": "EDE60801",
      "ADDRESS": "Abuakwa Sepaase",
      "Location": "Close the bus stop ",
      "GPS COORDINATES": "6°42'05•5'N1°45'04•0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2260,
      "AGENT BUSINESS NAME": "LAWRENCIA SARKODIE ENTERPRISE ",
      "AGENT USERNAME": "LSA60801",
      "ADDRESS": "NEREBEHI ",
      "Location": "Close to the school park",
      "GPS COORDINATES": "6°42'04•3'N1°48'13•4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2261,
      "AGENT BUSINESS NAME": "PAK AGYEWODIN ENTERPRISE ",
      "AGENT USERNAME": "PAESUB60801",
      "ADDRESS": "KUMASI TUC",
      "Location": "Near Abudey Restaurant ",
      "GPS COORDINATES": "6°40'06•0'N1°38'02•5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2262,
      "AGENT BUSINESS NAME": "PAK AGYEWODIN ENTERPRISE ",
      "AGENT USERNAME": "PAESUB60802",
      "ADDRESS": "SANTASI ROUNDABOUT ",
      "Location": "Near the Taxi Rank",
      "GPS COORDINATES": "6°40'18•9'N1°38'23•9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2263,
      "AGENT BUSINESS NAME": "AMSSUB60401",
      "AGENT USERNAME": "ABANK MULTI SERVICES ",
      "ADDRESS": "EMENA ",
      "Location": "NEAR THE M/A SCHOOL",
      "GPS COORDINATES": "6°39'46.8 N1°32'06'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2264,
      "AGENT BUSINESS NAME": "EK BOAKYE ENTERPRISE ",
      "AGENT USERNAME": "EKB60401",
      "ADDRESS": "APPIADU",
      "Location": "NEAR THE COMMUNITY CENTRE ",
      "GPS COORDINATES": "6°39'50.6'N1°31'42.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2265,
      "AGENT BUSINESS NAME": "PA PATDABS ENTERPRISE ",
      "AGENT USERNAME": "PAP60401",
      "ADDRESS": "GYINYASE ",
      "Location": "NEAR HIGH SCHOOL SHS",
      "GPS COORDINATES": "6°39'37.6N1°34'48.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2266,
      "AGENT BUSINESS NAME": "OWUSU BEMPAH VENTURES ",
      "AGENT USERNAME": "OBV60402",
      "ADDRESS": "GYINYASE",
      "Location": "NEAR KUMASI SNR HIGH SCHOOL",
      "GPS COORDINATES": "6°39'40.5'N1°34'35.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2267,
      "AGENT BUSINESS NAME": "STEPHEN PREMPEH VENTURES ",
      "AGENT USERNAME": "SPV60401",
      "ADDRESS": "GYINYASE ",
      "Location": "NEAR GYINYASE PARK",
      "GPS COORDINATES": "6°39'41.1'N1°34'28.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2268,
      "AGENT BUSINESS NAME": "PRINCE NIMO 10 VENTURES",
      "AGENT USERNAME": "PNV60501",
      "ADDRESS": "Unnumbered shop, Sokoban ",
      "Location": "NEAR NEW JERUSALEM  CHAPLE CHURCH ",
      "GPS COORDINATES": "6°37'23.6N1°37'14.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2269,
      "AGENT BUSINESS NAME": "F-Net Ventures",
      "AGENT USERNAME": "FENASS60702",
      "ADDRESS": "AIRPORT ROUNDABOUT",
      "Location": "OPPOSITE  JOFEL RESTAURANT",
      "GPS COORDINATES": "6°42'37.4'N1°35'56.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2270,
      "AGENT BUSINESS NAME": "Collins Digital Ventures ",
      "AGENT USERNAME": "CDV60501",
      "ADDRESS": "Unnumbered shop , Sokoban Ampayoo",
      "Location": "NEAR Sokoban Station ",
      "GPS COORDINATES": "6°36'59.6'N1°37'23.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2271,
      "AGENT BUSINESS NAME": "Festus  Agewinum Enterprise ",
      "AGENT USERNAME": "FAE61101",
      "ADDRESS": "Unnumbered shop,  Aboabo Kesse",
      "Location": "NEAR Information centre ",
      "GPS COORDINATES": "6°35'12.3'N1°37'06.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2272,
      "AGENT BUSINESS NAME": "Boah's Way Enterprise",
      "AGENT USERNAME": "BWE61201",
      "ADDRESS": "Magazine",
      "Location": "Close to B Adams",
      "GPS COORDINATES": "6°43'04.0'N 1°37'55.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2273,
      "AGENT BUSINESS NAME": "Mohammed Ibrahim 1998 Enterprise",
      "AGENT USERNAME": "MIE61201",
      "ADDRESS": "Denase",
      "Location": "Close to the Station",
      "GPS COORDINATES": "6°50'12.2'N 1°39'01.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2274,
      "AGENT BUSINESS NAME": "Revelation 20:15 Enterprise",
      "AGENT USERNAME": "REN61201",
      "ADDRESS": "Kronum Kyeraase",
      "Location": "Near Kyeraase last stop",
      "GPS COORDINATES": "6°45'56.8'N 1°39'22.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2275,
      "AGENT BUSINESS NAME": "Lexis Supermarket",
      "AGENT USERNAME": "LSU61201",
      "ADDRESS": "Kodie Kumasi",
      "Location": "In front of Kodie Methodist",
      "GPS COORDINATES": "6°48'53.4'N 1°38'55.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2276,
      "AGENT BUSINESS NAME": "Owusco 96 Ventures",
      "AGENT USERNAME": "OVE61201",
      "ADDRESS": "Maakro",
      "Location": "Opposite crossing",
      "GPS COORDINATES": "6°43'29.3'N 1°37'56.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2277,
      "AGENT BUSINESS NAME": "Perousia Ventured",
      "AGENT USERNAME": "PVE61201",
      "ADDRESS": "Afrancho ",
      "Location": "Afrancho New market",
      "GPS COORDINATES": "6°46'15.0'N 1°38'45.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2278,
      "AGENT BUSINESS NAME": "Lord 1 Enterprise",
      "AGENT USERNAME": "L1E61201",
      "ADDRESS": "Anomangye",
      "Location": "Close to Mpatasia cemetery",
      "GPS COORDINATES": "6°44'01.1'N 1°38'45.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2279,
      "AGENT BUSINESS NAME": "Elsarp Media",
      "AGENT USERNAME": "ELM61101",
      "ADDRESS": "Ashtanti New Town",
      "Location": "Opposite Abis Park",
      "GPS COORDINATES": "6°42°04.4'1°37'10.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2280,
      "AGENT BUSINESS NAME": "Big Osbrio Ventures",
      "AGENT USERNAME": "BOV 60701.00",
      "ADDRESS": "Dichemso",
      "Location": "Adjacent Abrafi Hospital",
      "GPS COORDINATES": "37°23'23.3'N122°04'53.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2281,
      "AGENT BUSINESS NAME": "Skylight Moneycode Ventures",
      "AGENT USERNAME": "SLV61001",
      "ADDRESS": "Dichemso",
      "Location": "Opposite Unity Oil",
      "GPS COORDINATES": "6°42'51.2'N1°36'28.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2282,
      "AGENT BUSINESS NAME": "Nyame Safo 01 Ventures",
      "AGENT USERNAME": "NSV61001",
      "ADDRESS": "TAFO MILE FOUR",
      "Location": "OPPOSITE SHELL FILLING STATION",
      "GPS COORDINATES": "6°44'24.1'N1°36'41.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2283,
      "AGENT BUSINESS NAME": "SLY GLO ENTERPRISE",
      "AGENT USERNAME": "SGE61001",
      "ADDRESS": "MAGAZINE",
      "Location": "NEAR MAGAZINE",
      "GPS COORDINATES": "6°43'15.1'N1°37'56.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2284,
      "AGENT BUSINESS NAME": "Mamadu Azizu Enterprise",
      "AGENT USERNAME": "MAZ61001",
      "ADDRESS": "SUANE MAGAZINE",
      "Location": "OPPOSITE MATHIAS JUNCTION",
      "GPS COORDINATES": "6°43'10.2'N1°37'55.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2285,
      "AGENT BUSINESS NAME": "Hagar Forkuo Ventures ",
      "AGENT USERNAME": "HFV60501",
      "ADDRESS": "DABAN",
      "Location": "NEAR  CICOA MERCHANT",
      "GPS COORDINATES": "6°38'54.4'N1°37'01.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2286,
      "AGENT BUSINESS NAME": "ABIGAIL AMANKWAH ENTERPRISE ",
      "AGENT USERNAME": "AAE60501",
      "ADDRESS": "UNNUMBERED SHOP,  KAASE.",
      "Location": "NEAR ST THERESAH CATHOLIC CHURCH ",
      "GPS COORDINATES": "6°39'21.7'N 1°36'33.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2287,
      "AGENT BUSINESS NAME": "HELPLINK TRADING",
      "AGENT USERNAME": "HTE03801",
      "ADDRESS": "KWASHIEMAN",
      "Location": "NEAR THE CHIEF PALACE",
      "GPS COORDINATES": "5.589932,-0.267524",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2288,
      "AGENT BUSINESS NAME": "F. TIJANI ENTERPRISE",
      "AGENT USERNAME": "FTE03801",
      "ADDRESS": "SANTA MARIA",
      "Location": "FBN BANK",
      "GPS COORDINATES": "5.599040,-0.272358",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2289,
      "AGENT BUSINESS NAME": "TRICMON HUB",
      "AGENT USERNAME": "5.607527,-0.256287",
      "ADDRESS": "LAPAZ NEW MARKET",
      "Location": "NEW MARKET",
      "GPS COORDINATES": "5.607527,-0.256287",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2290,
      "AGENT BUSINESS NAME": "OF AND OY ENTERPRISE",
      "AGENT USERNAME": "OAE03801",
      "ADDRESS": "LAPAZ",
      "Location": "ABRANTIE SPOT",
      "GPS COORDINATES": "5.605481.-0.252277",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2291,
      "AGENT BUSINESS NAME": "MOSBEC ENTERPRISE",
      "AGENT USERNAME": "MOSSUB03801",
      "ADDRESS": "LAPAZ",
      "Location": "TEWU HOSTEL",
      "GPS COORDINATES": "5.602630,-0.251562",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2292,
      "AGENT BUSINESS NAME": "AKASSI FASHION DESIGN",
      "AGENT USERNAME": "AFD03801",
      "ADDRESS": "ABEKA",
      "Location": "NHIS",
      "GPS COORDINATES": "5.603349,-0.245158",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2293,
      "AGENT BUSINESS NAME": "SETHSON PLUS ENTERPRISE",
      "AGENT USERNAME": "SPE03801",
      "ADDRESS": "SAWUTUOM ",
      "Location": "NEAR PENTECOST JUNCTION",
      "GPS COORDINATES": "5.622383,-0.278500",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2294,
      "AGENT BUSINESS NAME": "FAZASE MOBILE SERVICES ",
      "AGENT USERNAME": "FAM12301",
      "ADDRESS": "SHUKURA ",
      "Location": "NEAR BANKU JUNCTION ",
      "GPS COORDINATES": "5.5541000, -0.2476249",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2295,
      "AGENT BUSINESS NAME": "GEB BEAU VENTURES ",
      "AGENT USERNAME": "GBV04601",
      "ADDRESS": "BUBUASHIE ",
      "Location": "Behind cable and wireless government school  ",
      "GPS COORDINATES": "5.5849990, -0.2387800",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2296,
      "AGENT BUSINESS NAME": "GODFRED OWUSU  GOD'S PLAN  INVESTMENT",
      "AGENT USERNAME": "GOG12301",
      "ADDRESS": "DANSOMAN ",
      "Location": "NEAR NEAR SUCCESS SCHOOL JUNCTION ",
      "GPS COORDINATES": "5.5309625, -0.2536406",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2297,
      "AGENT BUSINESS NAME": "RICHANS 91 ENTERPRISE",
      "AGENT USERNAME": "RENSUB00501",
      "ADDRESS": "KANESHIE ",
      "Location": "OPPOSITE GCB BANK ",
      "GPS COORDINATES": "5.5660290, -0.2359930",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2298,
      "AGENT BUSINESS NAME": "GEORGINA DUNYA VENTURES ",
      "AGENT USERNAME": "GDV03201",
      "ADDRESS": "KANESHIE ",
      "Location": "NEAR FIDELITY BANK ",
      "GPS COORDINATES": "5.566029,-0.235993",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2299,
      "AGENT BUSINESS NAME": "DEEGYAB INVESTMENTS ",
      "AGENT USERNAME": "DIN03201",
      "ADDRESS": "ABOSSEY OKAI ",
      "Location": "NEAR ST. ANDREWS ANGLICAN CHURCH ",
      "GPS COORDINATES": "5.5612875, -0.2386719",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2300,
      "AGENT BUSINESS NAME": "SARAJUST ENT ",
      "AGENT USERNAME": "SRE12301",
      "ADDRESS": "CHORKOR ",
      "Location": "NEAR METHODIST CHURCH ",
      "GPS COORDINATES": "5.5339880, -0.2303800",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2301,
      "AGENT BUSINESS NAME": "MATT-DJEI VENTURES ",
      "AGENT USERNAME": "MDV03201",
      "ADDRESS": "KANESHIE ",
      "Location": "NEAR  ADVANS SAVINS AND LOANS ",
      "GPS COORDINATES": "5.5634510, -0.2376530",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2302,
      "AGENT BUSINESS NAME": "CHRISTY LOYALTY VENTURES ",
      "AGENT USERNAME": "CLV00701",
      "ADDRESS": "CHORKOR ",
      "Location": "NEAR GETHSEMANE METHODIST CHURCH ",
      "GPS COORDINATES": "5.5270680, -0.2436620",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2303,
      "AGENT BUSINESS NAME": "EVALCO  VENTURES ",
      "AGENT USERNAME": "EVESUB03203",
      "ADDRESS": "KANESHIE ",
      "Location": "NEAR FIRST LIGHT ",
      "GPS COORDINATES": "5.5651930, -0.2381040",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2304,
      "AGENT BUSINESS NAME": "DAILY OFFERING ",
      "AGENT USERNAME": "DDO03201",
      "ADDRESS": "Kaneshie ",
      "Location": "BEHIND FIDELITY BANK ",
      "GPS COORDINATES": "5.5660290, -0.2379940",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2305,
      "AGENT BUSINESS NAME": "NELMANDELA ENTERPRISE ",
      "AGENT USERNAME": "NENSUB03603",
      "ADDRESS": "DANSOMAN ",
      "Location": "DANSOMAN LAST STOP ",
      "GPS COORDINATES": "5.5341875, -0.2642969",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2306,
      "AGENT BUSINESS NAME": "EVE'S E-MONEY SERVICES AND TRADING ",
      "AGENT USERNAME": "EEM12301",
      "ADDRESS": "DANSOMAN ",
      "Location": "NEAR ST ANTHONY'S SCHOOL ",
      "GPS COORDINATES": "5.5341875, -0.2642969",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2307,
      "AGENT BUSINESS NAME": "ASODWE RENE VENTURES ",
      "AGENT USERNAME": "ARV00501",
      "ADDRESS": "NORTH KANESHIE ",
      "Location": "NEAR TOTAL FILLING STATION ",
      "GPS COORDINATES": "5.5789010, -0.2275540",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2308,
      "AGENT BUSINESS NAME": "HILDA ATANGA ENTERPRISE ",
      "AGENT USERNAME": "HAE02101",
      "ADDRESS": "UNNUMBERED SHOP AT AMASAMAN ",
      "Location": "NEAR THE AMASAMAN TIPA TRUCK STATION",
      "GPS COORDINATES": "5.7056915, -0.3007746",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2309,
      "AGENT BUSINESS NAME": "STEWUJANE ENTERPRISE ",
      "AGENT USERNAME": "STE02201",
      "ADDRESS": "UNNUMBERED SHOP AT TAIFA ",
      "Location": "OPPOSITE PRUDENTIAL BANK",
      "GPS COORDINATES": "5.6521057,-0.2526898",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2310,
      "AGENT BUSINESS NAME": "PRUDENCE DREAMS ENETERPRISE ",
      "AGENT USERNAME": "PDE02201",
      "ADDRESS": "UNNUMBERED SHOP AT AMASAMAN ",
      "Location": "NEAR MELCOM",
      "GPS COORDINATES": "5.6521954,-0.2855208",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2311,
      "AGENT BUSINESS NAME": "DICTA GYAMEA VENTURES ",
      "AGENT USERNAME": "DGV02202",
      "ADDRESS": "UNNUMBERED SHOP AT POKUASE MAYERA ",
      "Location": "NEAR MEYERA JHS ",
      "GPS COORDINATES": "5.7292433,-0.281367",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2312,
      "AGENT BUSINESS NAME": "STEVOO DORS VENTURES ",
      "AGENT USERNAME": "SDV04501",
      "ADDRESS": "UNNUMBERED SHOP AT OFANKOR BARRIER ",
      "Location": "NEAR THE SHELL FILLING STATION",
      "GPS COORDINATES": "5.657935, -0.266634",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2313,
      "AGENT BUSINESS NAME": "YEBOAH ZUSAIN ENTERPRISE ",
      "AGENT USERNAME": "YZE04501",
      "ADDRESS": "UNNUMBERED SHOP AT MEDEA ",
      "Location": "NEAR ST. JOSEPH THE MAKER CATHOLIC CHURCH",
      "GPS COORDINATES": "5.761721, - 0.324777",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2314,
      "AGENT BUSINESS NAME": "WILLY-BOAT CLASSIC VENTURES ",
      "AGENT USERNAME": "WBV02501",
      "ADDRESS": "UNNUMBERED SHOP AT AMASAMAN ",
      "Location": "NEAR THE AMASAMAN TAXI RANK ",
      "GPS COORDINATES": "5.704773, - 0.297159",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2315,
      "AGENT BUSINESS NAME": "CLAUSAAC VENTURES ",
      "AGENT USERNAME": "CLV02101",
      "ADDRESS": "UNNUMBERED SHOP AT KWABENYA ",
      "Location": "NEAR THE KWABENYA BLOCK FACTORY ",
      "GPS COORDINATES": "5.42147, - 0.15076",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2316,
      "AGENT BUSINESS NAME": "JEBRIM MOHAMMED PLEASURE VENTURES ",
      "AGENT USERNAME": "JMV02101",
      "ADDRESS": "UNNUMBERED SHOP AT SAPIEMAN OPAH ",
      "Location": "NEAR THE CHRSIT APOSTOLIC CHURCH ",
      "GPS COORDINATES": "5.723878,-0.306708",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2317,
      "AGENT BUSINESS NAME": "CL-ALPHA AND OMEGA ENTERPRISE ",
      "AGENT USERNAME": "COE02201",
      "ADDRESS": "UNNUMBERED SHOP AT AMASAMAN 3 JUNCTION",
      "Location": "NEAR THE TAXI RANK",
      "GPS COORDINATES": "5.7195966,-0.3430796",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2318,
      "AGENT BUSINESS NAME": "Fajaji Enterprise",
      "AGENT USERNAME": "FAJ61201",
      "ADDRESS": "Maakro - Magazine ",
      "Location": "Close to Kwesi Oppong Co.Ltd",
      "GPS COORDINATES": "6°43'40.6'N 1°37'24.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2319,
      "AGENT BUSINESS NAME": "Salvadisco Ventures",
      "AGENT USERNAME": "SAV61201",
      "ADDRESS": "Maakro ",
      "Location": "Close to Pillar of Zion Church",
      "GPS COORDINATES": "6°43'49.7'N 1°37'51.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2320,
      "AGENT BUSINESS NAME": "Obaa Conny's Enterprise",
      "AGENT USERNAME": "OCE61201",
      "ADDRESS": "Maakro ",
      "Location": "Close to Tarkwa junction",
      "GPS COORDINATES": "6°43'38.7'N 1°37'50.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2321,
      "AGENT BUSINESS NAME": "De-Adale Pharmacy",
      "AGENT USERNAME": "DAP61201",
      "ADDRESS": "Buoho",
      "Location": "Opposite B5 Company Limited",
      "GPS COORDINATES": "6°47'14.4'N 1°38'40.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2322,
      "AGENT BUSINESS NAME": "Princess Boatemaa ventures",
      "AGENT USERNAME": "PBV60402",
      "ADDRESS": "Esereso",
      "Location": "Near the station",
      "GPS COORDINATES": "6°37'53.2'N1°33'49.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2323,
      "AGENT BUSINESS NAME": "CHARTER ONE ALLIED",
      "AGENT USERNAME": "COA02701",
      "ADDRESS": "BUADE ROAD",
      "Location": "FEW METRES FROM THE NUNGUA FIDELITY BRANCH",
      "GPS COORDINATES": "5.610289,-0.078607",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2324,
      "AGENT BUSINESS NAME": "JOEBEL CATERING SERVICES",
      "AGENT USERNAME": "JCS04901",
      "ADDRESS": "BEACH ROAD NUNGUA",
      "Location": "CLOSE TO OLD KASAPREKO COMPANY",
      "GPS COORDINATES": "5.585135,-0.090682",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2325,
      "AGENT BUSINESS NAME": "SHADIKO'S CORNER",
      "AGENT USERNAME": "SDC00101",
      "ADDRESS": "TESHIE TSUIBLEOO",
      "Location": "ADJACENT RAPTURE SCHOOL",
      "GPS COORDINATES": "5.599673,-0.110031",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2326,
      "AGENT BUSINESS NAME": "CADOM ENT.",
      "AGENT USERNAME": "CENSUB00202",
      "ADDRESS": "TESHIE MALIK",
      "Location": "CLOSE TO THE MALIK RAILINE",
      "GPS COORDINATES": "5.633135,-0.1002340",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2327,
      "AGENT BUSINESS NAME": "CADOM ENT",
      "AGENT USERNAME": "CENSUB00201",
      "ADDRESS": "COASTAL SPINTEX",
      "Location": "BEHIND ABSA SPINTEX BRANCH",
      "GPS COORDINATES": "5'37'59.3N0.'06'00,8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2328,
      "AGENT BUSINESS NAME": "MOYANA ENTERPRISE",
      "AGENT USERNAME": "MOY60701",
      "ADDRESS": "ALABAR",
      "Location": "OPPOSITE OLD TAMALE STATION",
      "GPS COORDINATES": "6°41'55.8'N1°36'57.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2329,
      "AGENT BUSINESS NAME": "CELTAM VENTURES",
      "AGENT USERNAME": "CELSUB04902",
      "ADDRESS": "ADDO GONNO",
      "Location": "BEHIND SHELL FILLING STATION",
      "GPS COORDINATES": "5'37;18.1'N0'05'26.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2330,
      "AGENT BUSINESS NAME": "CLASSIC EVANS AFOTEY VENTURES",
      "AGENT USERNAME": "CEA02701",
      "ADDRESS": "NUNGUA NII SHIPI",
      "Location": "NEAR FIFA HOUSE",
      "GPS COORDINATES": "5.605661,-0.073473",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2331,
      "AGENT BUSINESS NAME": "AMOUNT CONNECTIONS",
      "AGENT USERNAME": "ACO02701",
      "ADDRESS": "BUADE ROAD NUNGUA",
      "Location": "BEHIND CHRISTIAN MEDICAL CENTRE",
      "GPS COORDINATES": "5.608112,-0.078231",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2332,
      "AGENT BUSINESS NAME": "BDG DIVINE VENTURES",
      "AGENT USERNAME": "BDV02701",
      "ADDRESS": "SAKUMONO ",
      "Location": "OPPOSITE SAKUMONO TENNIS COURT",
      "GPS COORDINATES": "5.37'28.7'N0.03'35.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2333,
      "AGENT BUSINESS NAME": "DA SETH INVESTMENT ",
      "AGENT USERNAME": "DSISUB04401",
      "ADDRESS": "UNNUMBERED SHOP AT BORTIANOR ",
      "Location": "NEAR TSOKOMEY JUNCTION ",
      "GPS COORDINATES": "5.511532, - 0.333269",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2334,
      "AGENT BUSINESS NAME": "BHADOCK COMPANY",
      "AGENT USERNAME": "BCL02501",
      "ADDRESS": "UNNUMBERED SHOP AT OFANKOR BARRIER",
      "Location": "NEAR THE OFANKOR ROUND ABOUT",
      "GPS COORDINATES": "5.658855, -0.266031",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2335,
      "AGENT BUSINESS NAME": "ANDY D ENTERPRISE ",
      "AGENT USERNAME": "ADESUB00701",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR ECOBANK",
      "GPS COORDINATES": "5.549398, -0.214564",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2336,
      "AGENT BUSINESS NAME": "RIVIC EVENTS AND TRADING ",
      "AGENT USERNAME": "RET02401",
      "ADDRESS": "ADABRAKA ODORNA ",
      "Location": "INSIDE ODORNA MECHANICS SHOP",
      "GPS COORDINATES": "5.558889,-0.217675",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2337,
      "AGENT BUSINESS NAME": "SULIN TOP ENTERPRISE ",
      "AGENT USERNAME": "STE02401",
      "ADDRESS": "ADABRAKA ODORNA ",
      "Location": "INSIDE ODORNA MECHANICS SHOP",
      "GPS COORDINATES": "5.557866,-0.217720",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2338,
      "AGENT BUSINESS NAME": "MAGSELORM VENTURES ",
      "AGENT USERNAME": "MVEN01001",
      "ADDRESS": "ACCRA ZONGO LANE",
      "Location": "NEAR RAWLINGS PARK ",
      "GPS COORDINATES": "5.545604,-0.210747",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2339,
      "AGENT BUSINESS NAME": "THE MORE TRADING VENTURES ",
      "AGENT USERNAME": "TMT 1001.00",
      "ADDRESS": "MAKOLA",
      "Location": "OPPOSITE GHANA SCHOOL OF LAW",
      "GPS COORDINATES": "5.546794,-0.206240",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2340,
      "AGENT BUSINESS NAME": "NATLEE VENTURES ",
      "AGENT USERNAME": "NVESUB00302",
      "ADDRESS": "TEMA STATION ",
      "Location": "INSIDE TEMA STATION ",
      "GPS COORDINATES": "5.548444,-0.201659",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2341,
      "AGENT BUSINESS NAME": "SUPER MICRO ENTERPRISE ",
      "AGENT USERNAME": "SUPSUB00701",
      "ADDRESS": "ACCRA ",
      "Location": "OPPOSITE CHILDREN'S HOSPITAL ",
      "GPS COORDINATES": "5.557221,-0.216522",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2342,
      "AGENT BUSINESS NAME": "PSALM 2:8 ENTERPRISE",
      "AGENT USERNAME": "PENSUB00702",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR HOTEL DEHORSES",
      "GPS COORDINATES": "5.548488,-0.214374",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2343,
      "AGENT BUSINESS NAME": "STEPHEN ADJEI VENTURES ",
      "AGENT USERNAME": "SAV01001",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR HETEL DEHORSES",
      "GPS COORDINATES": "5.548144,-0.214307",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2344,
      "AGENT BUSINESS NAME": "PROVERBS 10:2 VENTURES",
      "AGENT USERNAME": "PRVSUB00702",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR GRANDVIEW HOTEL ",
      "GPS COORDINATES": "5.547692,-0.214196",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2345,
      "AGENT BUSINESS NAME": "M K Boateng Enterprise ",
      "AGENT USERNAME": "MBE60501",
      "ADDRESS": "Trede",
      "Location": "NEAR  BOSOMTWE RURAL BANK",
      "GPS COORDINATES": "6°34'33.0'N1°40'16.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2346,
      "AGENT BUSINESS NAME": "ANHWERE S VENTURES",
      "AGENT USERNAME": "ASV60401",
      "ADDRESS": "KAASE",
      "Location": "WITHIN THE ABATTOIR",
      "GPS COORDINATES": "6.6623°N1.6036°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2347,
      "AGENT BUSINESS NAME": "PRINCESS BOATEMAA VENTURES",
      "AGENT USERNAME": "PBV60402",
      "ADDRESS": "ESERESO",
      "Location": "NEAR THE MARKET",
      "GPS COORDINATES": "606251°N,1.5645W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2348,
      "AGENT BUSINESS NAME": "REIGNBOAT ENTERPRISE",
      "AGENT USERNAME": "REN60401",
      "ADDRESS": "KYEREAPATERE",
      "Location": "NEAR THE FIRE SERVICE OFFICE",
      "GPS COORDINATES": "6.06543°N,1.5882°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2349,
      "AGENT BUSINESS NAME": "WILLI-VIV ENTERPRISE",
      "AGENT USERNAME": "WVE60401",
      "ADDRESS": "ATONSU AGOGO",
      "Location": "INSIDE ATONSU SHOE FACTORY",
      "GPS COORDINATES": "6°38'4.4736''N1°35.0309'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2350,
      "AGENT BUSINESS NAME": "VERONIMIKE ENTERPRISE",
      "AGENT USERNAME": "VEN60401",
      "ADDRESS": "FEYIASE",
      "Location": "NEAR WISCONSIN UNIVERSITY",
      "GPS COORDINATES": "6°36'49.28''N1°33'40.21''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2351,
      "AGENT BUSINESS NAME": "DANNY RHO ENTERPRISE",
      "AGENT USERNAME": "DRE60401",
      "ADDRESS": "BANTAMA",
      "Location": "NEAR PENTECOST CHURCH",
      "GPS COORDINATES": "6.7066°N,1.6299°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2352,
      "AGENT BUSINESS NAME": "ALICHRISTO VENTURES",
      "AGENT USERNAME": "AVE60402",
      "ADDRESS": "ATONSU",
      "Location": "NEAR DOPOASE JUNCTION",
      "GPS COORDINATES": "6.6484°N,1.6095°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2353,
      "AGENT BUSINESS NAME": "NEINA ND ENTERPRISE",
      "AGENT USERNAME": "NNE60401",
      "ADDRESS": "BOKORO",
      "Location": "NEAR THE STATION",
      "GPS COORDINATES": "6.6419°N,1.5907°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2354,
      "AGENT BUSINESS NAME": "P TEKUNI VENTURES",
      "AGENT USERNAME": "PTVSUB60401",
      "ADDRESS": "ATONSU",
      "Location": "ADJACENT FBGL ",
      "GPS COORDINATES": "6°38'42.601''N1°36'46.616''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2355,
      "AGENT BUSINESS NAME": "P TEKUNI VENTURES",
      "AGENT USERNAME": "PYVSUB60402",
      "ADDRESS": "ATONSU",
      "Location": "NEAR ATONSU M/A SCHOOL",
      "GPS COORDINATES": "6°39'30''N1°35'24''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2356,
      "AGENT BUSINESS NAME": "EA BAOTENG 93 ENTERPRISE",
      "AGENT USERNAME": "EBE60401",
      "ADDRESS": "ABREPO",
      "Location": "NEAR SAMAD HOTEL",
      "GPS COORDINATES": "6.72559-1.6544",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2357,
      "AGENT BUSINESS NAME": "JAMES ADU 05 ENTERPRISE",
      "AGENT USERNAME": "J0E60401",
      "ADDRESS": "KUNTENASE",
      "Location": "NEAR THE LORRY STATION",
      "GPS COORDINATES": "605282°N,1.4773°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2358,
      "AGENT BUSINESS NAME": "FOG TRUST VENTURES",
      "AGENT USERNAME": "FOG30301",
      "ADDRESS": "ESERESO",
      "Location": "NEAR THE STATION",
      "GPS COORDINATES": "606251°N,105645°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2359,
      "AGENT BUSINESS NAME": "TEARS OF CHRIST ENTERRPISE",
      "AGENT USERNAME": "TCE60401",
      "ADDRESS": "ATONSU",
      "Location": "NEAR SALISBERG HOTEL",
      "GPS COORDINATES": "6°38'42.601''N1°36'46.616''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2360,
      "AGENT BUSINESS NAME": "EZEKEIL A GYAMFI VENTURES",
      "AGENT USERNAME": "EGV60401",
      "ADDRESS": "KOTEI",
      "Location": "NEAR THE STATION",
      "GPS COORDINATES": "6°39'59.76''N1°36'58.57W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2361,
      "AGENT BUSINESS NAME": "SERWAA CHRIST ALONE ENTERPRISE",
      "AGENT USERNAME": "SCE60801",
      "ADDRESS": "SANTASI",
      "Location": "NEAR APPLE TU DEPOT",
      "GPS COORDINATES": "6°38'57.4''N1°39'02.3''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2362,
      "AGENT BUSINESS NAME": "AK-FORD ENTERPRISE",
      "AGENT USERNAME": "AFESUB60602",
      "ADDRESS": "GYINYASE",
      "Location": "NEAR KUMASI HIGH SCHOOL",
      "GPS COORDINATES": "6.6584°N,1.5678°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2363,
      "AGENT BUSINESS NAME": "TWO THINGS INVOLVED ENTERPRISE",
      "AGENT USERNAME": "TTI60401",
      "ADDRESS": "BANTAMA",
      "Location": "NEAR CBG",
      "GPS COORDINATES": "6°42.2228'N1°38.0285'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2364,
      "AGENT BUSINESS NAME": "CHARIDON 12 VENTURES",
      "AGENT USERNAME": "CVE 60402.00",
      "ADDRESS": "ATONSU BOKORO",
      "Location": "NEAR THE MARKET",
      "GPS COORDINATES": "6.6419°N,1.5907°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2365,
      "AGENT BUSINESS NAME": "O.EMMANUEL STAR ENTERPRISE",
      "AGENT USERNAME": "OES61101",
      "ADDRESS": "BANTAMA",
      "Location": "NEAR CULTURAL CENTRE",
      "GPS COORDINATES": "6.7066°N,1.6299°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2366,
      "AGENT BUSINESS NAME": "ANTERNESTEPEE VENTURES",
      "AGENT USERNAME": "AVE61401",
      "ADDRESS": "SEPAASE",
      "Location": "NEAR THE MARKET",
      "GPS COORDINATES": "6.702500N-1.746900W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2367,
      "AGENT BUSINESS NAME": "OFSTAR EASY WAY ENTERPRISE ",
      "AGENT USERNAME": "OEW60501",
      "ADDRESS": "ADAMESU",
      "Location": "NEAR THE MARKET ",
      "GPS COORDINATES": "6°31'24.5'N 1°39'37.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2368,
      "AGENT BUSINESS NAME": "JEFFDOR ROYAL ENTERPRISE ",
      "AGENT USERNAME": "JRE60501",
      "ADDRESS": "OBUASI KWABRAFOSO",
      "Location": "NEAR THE CHURCH OF GOD",
      "GPS COORDINATES": "6.7470793, - 1.6019068",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2369,
      "AGENT BUSINESS NAME": "ONLY BELIEVE ONE ENTERPRISE ",
      "AGENT USERNAME": "OBO60501",
      "ADDRESS": "OBUASI -BOETE",
      "Location": "NEAR THE LORRY STATION",
      "GPS COORDINATES": "6°11'54.6'N 1°38'42.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2370,
      "AGENT BUSINESS NAME": "BTECH SERVICE ",
      "AGENT USERNAME": "BSE60501",
      "ADDRESS": "BEDIESO OBUASI ",
      "Location": "NEAR THE CHURCH OF CHRIST",
      "GPS COORDINATES": "6°12'34.6'N1°41'03.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2371,
      "AGENT BUSINESS NAME": "FRANK BOAKYE 2 ENTERPRISE",
      "AGENT USERNAME": "FBE60502",
      "ADDRESS": "DOMINASE",
      "Location": "NEAR THE MARKET ",
      "GPS COORDINATES": "6°30'54.5 'N1°38'44.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2372,
      "AGENT BUSINESS NAME": "LIL GINA ENTERPRISE ",
      "AGENT USERNAME": "LGE60501",
      "ADDRESS": "KWADASO ESTATE ",
      "Location": "NEAR THE LORRY STATION ",
      "GPS COORDINATES": "6°4142.1'N1.38'51.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2373,
      "AGENT BUSINESS NAME": "GODS WAY PRIME ENTERPRISE ",
      "AGENT USERNAME": "GWP 60501.00",
      "ADDRESS": "SOKOBAN ",
      "Location": "NEAR WOODVILLAGE ",
      "GPS COORDINATES": "6°37'10.7'N 1°36'12.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2374,
      "AGENT BUSINESS NAME": "OFOSUAMOS ENTERPRISE ",
      "AGENT USERNAME": "OEN60501",
      "ADDRESS": "DABAN ",
      "Location": "Near the hospital ",
      "GPS COORDINATES": "6°38'25.5'N1°37'33.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2375,
      "AGENT BUSINESS NAME": "FAVOR AND GRACE 19 ENTERPRISE",
      "AGENT USERNAME": "FGE60501",
      "ADDRESS": "BEKWAI ABODOM",
      "Location": "NEAR THE ABODOM STATION ",
      "GPS COORDINATES": "6°26'07.4'N1°32'05.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2376,
      "AGENT BUSINESS NAME": "MK FOSU ENTERPRISE ",
      "AGENT USERNAME": "MFE60501",
      "ADDRESS": "SOKOBAN TIMPOM",
      "Location": "Near the Methodist church ",
      "GPS COORDINATES": "6°37'30.1'N 1°37'07.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2377,
      "AGENT BUSINESS NAME": "Vital Edwards Enterprise ",
      "AGENT USERNAME": "VEE60501",
      "ADDRESS": "Atasemanso",
      "Location": "NEAR THE SATELLITE MARKET ",
      "GPS COORDINATES": "6°38'45.4'N1°37'52.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2378,
      "AGENT BUSINESS NAME": "GODIYA GA ALLAH ENTERPRISE ",
      "AGENT USERNAME": "GGA60501",
      "ADDRESS": "OBUASI ",
      "Location": "NEAR JJ FITTING SHOP",
      "GPS COORDINATES": "6°12'30.0'N1°41'37.5'E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2379,
      "AGENT BUSINESS NAME": "MAYWEALTH VENTURES ",
      "AGENT USERNAME": "MVE60501",
      "ADDRESS": "SOKOBAN WOODVILLAGE ",
      "Location": "NEAR CBG BANK",
      "GPS COORDINATES": "6°37'21.3'N1°36'22.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2380,
      "AGENT BUSINESS NAME": "MARGAGYEI ENTERPRISE ",
      "AGENT USERNAME": "MEN60501",
      "ADDRESS": "KAASE",
      "Location": "NEAR SUNDA INTERNATIONAL ",
      "GPS COORDINATES": "6°39'12.6'N 1°36'53.O'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2381,
      "AGENT BUSINESS NAME": "Vida owusu ansah Enterprises ",
      "AGENT USERNAME": "VOA60501",
      "ADDRESS": "Daaban",
      "Location": "NEAR paramagnetic Palace ",
      "GPS COORDINATES": "6°38'27.9'N1°37'31.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2382,
      "AGENT BUSINESS NAME": "LOYALTY AND MEGA VENTURES",
      "AGENT USERNAME": "LMV02801",
      "ADDRESS": "UNN SHOP AT NEW YORK",
      "Location": "NEAR PETROSOL FILLING STATION",
      "GPS COORDINATES": "5.7342110,-0.0540210",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2383,
      "AGENT BUSINESS NAME": "JDL SERVICES",
      "AGENT USERNAME": "JDL02801",
      "ADDRESS": "UNNUMBERED SHOP AT MATAHEKO",
      "Location": "NEAR AFIENYA TOLL BOOTH",
      "GPS COORDINATES": "5.7838760,-8.3366400",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2384,
      "AGENT BUSINESS NAME": "FIDELA IS HERE",
      "AGENT USERNAME": "FIH03001",
      "ADDRESS": "MAAMOBI",
      "Location": "ADJACENT ABII NATIONAL",
      "GPS COORDINATES": "5.5890009,-0.1987302",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2385,
      "AGENT BUSINESS NAME": "ESTYVONNE ENTERPRISE",
      "AGENT USERNAME": "EEN03101",
      "ADDRESS": "KOTOBABI",
      "Location": "BEHIND ASSEMBLIES OF GOD",
      "GPS COORDINATES": "5.5958197,-0.2099117",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2386,
      "AGENT BUSINESS NAME": "GATOR'S PRIME",
      "AGENT USERNAME": "GPR03001",
      "ADDRESS": "NIMA",
      "Location": "NEAR LESSON PHARMACY",
      "GPS COORDINATES": "5.5821315,-0.2007214",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2387,
      "AGENT BUSINESS NAME": "CITY LONDRI MART",
      "AGENT USERNAME": "CLM03101",
      "ADDRESS": "TANTRA HILLS",
      "Location": "OPPOSITE TRUST HOSPITAL",
      "GPS COORDINATES": "5.6435003,0.2646613",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2388,
      "AGENT BUSINESS NAME": "I-M ONE VENTURES",
      "AGENT USERNAME": "IOV03101",
      "ADDRESS": "ATOMIC ROUNDABOUT",
      "Location": "OPPOSITE AMPOMA PHRMACY",
      "GPS COORDINATES": "5.6679741,-0.2445475",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2389,
      "AGENT BUSINESS NAME": "AFFORD LEGACY TRADING ENTERPRISE",
      "AGENT USERNAME": "ALE03101",
      "ADDRESS": "ACHIMOTA",
      "Location": "NEAR SHELL FILLING STATION",
      "GPS COORDINATES": "5.6184053,-0.2317586",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2390,
      "AGENT BUSINESS NAME": "ROSESANG VENTURES",
      "AGENT USERNAME": "RVE03102",
      "ADDRESS": "KOKOMLEMLE",
      "Location": "OPPOSITE PENTECOST CHURCH HEAD QUARTERS",
      "GPS COORDINATES": "5.578178,-0.2817429",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2391,
      "AGENT BUSINESS NAME": "2020 MPI ENTERPRISE",
      "AGENT USERNAME": "2ME02601",
      "ADDRESS": "ASOFAN",
      "Location": "CLOSE TO BLOCK FACTORY JUNCTION",
      "GPS COORDINATES": "5.646765.-0.286228",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2392,
      "AGENT BUSINESS NAME": "PEACEDOMICK ENTERPRISE",
      "AGENT USERNAME": "PEN 3102.00",
      "ADDRESS": "POKUASE",
      "Location": "NEAR PENTECOST CHURCH",
      "GPS COORDINATES": "5.728508,0.275811",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2393,
      "AGENT BUSINESS NAME": "KANWARITO ENTERPRISE",
      "AGENT USERNAME": "KEN03001",
      "ADDRESS": "MAAMOBI",
      "Location": "CLOSE TO TROTRO STATION",
      "GPS COORDINATES": "5.6060955,-0.1703122",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2394,
      "AGENT BUSINESS NAME": "GHPOST TAMALE ",
      "AGENT USERNAME": "GPOSTSUB80101",
      "ADDRESS": "TAMALE GHANA POST OFFICE ",
      "Location": "INSIDE GHANA POST OFFICE TAMALE",
      "GPS COORDINATES": "9°24'25.6'N 0°50'26.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2395,
      "AGENT BUSINESS NAME": "OBUASI GHPOST ",
      "AGENT USERNAME": "GPOSTSUB60801",
      "ADDRESS": "GHANA POST OFFICE OBUASI",
      "Location": "INSIDE GHANA POST OFFICE OBUASI",
      "GPS COORDINATES": "6°10'52.6'N 1°40'04.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2396,
      "AGENT BUSINESS NAME": "MICARA PRESTIGE ENTERPRISE",
      "AGENT USERNAME": "MPE03601",
      "ADDRESS": "ADENTA SSNIT FLAT",
      "Location": "NEAR FATTY GRILL RESTUARANT",
      "GPS COORDINATES": "5.5508992,-0.196608",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2397,
      "AGENT BUSINESS NAME": "WALEWALE GHPOST ",
      "AGENT USERNAME": "GPOSTSUB80102",
      "ADDRESS": "WALEWALE GHANA POST OFFICE ",
      "Location": "INSIDE GHANA POST OFFICE WALEWALE",
      "GPS COORDINATES": "10°21'22.1'N 0°47'34.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2398,
      "AGENT BUSINESS NAME": "EFBEES ENTERPRISE",
      "AGENT USERNAME": "EEN02101",
      "ADDRESS": "ACP POKUASE",
      "Location": "NEAR HEAVEN GATE SCHOOL",
      "GPS COORDINATES": "5.679558,-0.278707",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2399,
      "AGENT BUSINESS NAME": "BECHEM GHPOST ",
      "AGENT USERNAME": "GPOSTSUB70101",
      "ADDRESS": "BECHEM GHANA POST OFFICE ",
      "Location": "INSIDE GHANA POST OFFICE BECHEM ",
      "GPS COORDINATES": "7°05'09.4'N 2°01'43.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2400,
      "AGENT BUSINESS NAME": "NKORANZA GHPOST ",
      "AGENT USERNAME": "GPOSTSUB70301",
      "ADDRESS": "GHANA POST OFFICE NKORANZA",
      "Location": "INSIDE GHANA POST OFFICE NKORANZA",
      "GPS COORDINATES": "7°33'50.1'N 1°42'17.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2401,
      "AGENT BUSINESS NAME": "SNGNK OVERCOMERS ENTERPRISE",
      "AGENT USERNAME": "SNE02101",
      "ADDRESS": "OFANKOR",
      "Location": "AROUND THE OFANKOR BARRIERS",
      "GPS COORDINATES": "5.65823,-0.2688154",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2402,
      "AGENT BUSINESS NAME": "PRINELSMAN ENTERPRISE",
      "AGENT USERNAME": "PEN 1501.00",
      "ADDRESS": "KISSEMAN",
      "Location": "CLOSE KISSEMAN MARKET",
      "GPS COORDINATES": "5.6376686,-0.2151203",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2403,
      "AGENT BUSINESS NAME": "KENYASI GHPOST ",
      "AGENT USERNAME": "GPOSTSUB70401",
      "ADDRESS": "GHANA POST  OFFICE ",
      "Location": "INSIDE GHANA POST OFFICE KENYASI ",
      "GPS COORDINATES": "6°58'34.8'N 2°23'06.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2404,
      "AGENT BUSINESS NAME": "FEXSOG ENTERPRISE",
      "AGENT USERNAME": "FEN02101",
      "ADDRESS": "ASOFAN",
      "Location": "CLOSE TO PENTECOST CHURCH",
      "GPS COORDINATES": "5.660769,0.2844234",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2405,
      "AGENT BUSINESS NAME": "EJISU GHPOST",
      "AGENT USERNAME": "GPOSTSUB60601",
      "ADDRESS": "GHANA POST OFFICE EJISU",
      "Location": "INSIDE GHANA POST OFFICE EJISU ",
      "GPS COORDINATES": "6°43'16.9'N 1°28'32.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2406,
      "AGENT BUSINESS NAME": "LAARMO SERVIVES",
      "AGENT USERNAME": "LSE03101",
      "ADDRESS": "MALLAM ATTAH MARKET",
      "Location": "INSIDE THE MARKET",
      "GPS COORDINATES": "5.5797672,0.2105212",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2407,
      "AGENT BUSINESS NAME": "AGOGO GHPOST ",
      "AGENT USERNAME": "GPOSTSUB61301",
      "ADDRESS": "GHANA POST OFFICE AGOGO",
      "Location": "INSIDE GHANA POST OFFICE AGOGO",
      "GPS COORDINATES": "6°47'52.0'N 1°05'01.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2408,
      "AGENT BUSINESS NAME": "OFFINSO GHPOST ",
      "AGENT USERNAME": "GPOSTSUB61201",
      "ADDRESS": "GHANA POST OFFICE OFFINSO",
      "Location": "INSIDE GHANA POST OFFICE OFFINSO",
      "GPS COORDINATES": "6°54'37.1'N 1°41'21.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2409,
      "AGENT BUSINESS NAME": "OFFINSO GHPOST ",
      "AGENT USERNAME": "GPOSTSUB61201",
      "ADDRESS": "GHANA POST OFFICE OFFINSO",
      "Location": "INSIDE GHANA POST OFFICE OFFINSO",
      "GPS COORDINATES": "6°54'37.1'N 1°41'21.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2410,
      "AGENT BUSINESS NAME": "JOSCOM GROCERY & COLD STORE",
      "AGENT USERNAME": "JGC05101",
      "ADDRESS": "UNNUMBERED SHOP AT GBAWE",
      "Location": "NEAR SAMALA CLINIC",
      "GPS COORDINATES": "5.577196,-0.298835",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2411,
      "AGENT BUSINESS NAME": "JOE MOMO VENTURES",
      "AGENT USERNAME": "JOESUB03101",
      "ADDRESS": "KOTOBABI",
      "Location": "NEAR MODEX FILLING STATION",
      "GPS COORDINATES": "5.5968123537,-0.209992112939",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2412,
      "AGENT BUSINESS NAME": "JOE MOMO VENTURES",
      "AGENT USERNAME": "JOESUB03102",
      "ADDRESS": "MAAMOBI",
      "Location": "CLOSE TO THE MAAMOBI POLYCLINC",
      "GPS COORDINATES": "53529.7''N0.56.7''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2413,
      "AGENT BUSINESS NAME": "Phenstill Ventures ",
      "AGENT USERNAME": "PVE04401",
      "ADDRESS": "KASOA Kuwait ",
      "Location": "Near Pentecost church ",
      "GPS COORDINATES": "5.520562,-0.402903",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2414,
      "AGENT BUSINESS NAME": "Analisam Enterprise ",
      "AGENT USERNAME": "AEN04401",
      "ADDRESS": "Millennium city kasoa",
      "Location": "Millennium city police station ",
      "GPS COORDINATES": "5.500052,-0.448308",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2415,
      "AGENT BUSINESS NAME": "EDENLAND ENTERPRISE ",
      "AGENT USERNAME": "EDESUB04401",
      "ADDRESS": "Galelia ",
      "Location": "Near start oil",
      "GPS COORDINATES": "(5.5367981, -0.4073456)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2416,
      "AGENT BUSINESS NAME": "Edelweiss ENTERPRISE ",
      "AGENT USERNAME": "EDESUB04402",
      "ADDRESS": "Amanfrom",
      "Location": "Mary May school ",
      "GPS COORDINATES": "5.5369984, -0.4074977",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2417,
      "AGENT BUSINESS NAME": "Samkaisa Enterprise ",
      "AGENT USERNAME": "SAE04401",
      "ADDRESS": "Obon road Kaso",
      "Location": "Grid filling station ",
      "GPS COORDINATES": "5.5534420, -0.4199020",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2418,
      "AGENT BUSINESS NAME": "REINDYSWEET VENTURES ",
      "AGENT USERNAME": "RSVSUB04401",
      "ADDRESS": "Opeikuma ",
      "Location": "Near rockcity",
      "GPS COORDINATES": "5.560511,-0.435559",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2419,
      "AGENT BUSINESS NAME": "GHANA POST  TELLER ",
      "AGENT USERNAME": "GPOSTSUB40101",
      "ADDRESS": "SEKONDI-KOMFOASE",
      "Location": "Quagis Food Joint and Catering Service",
      "GPS COORDINATES": "4°55'57.8'N1°42'57.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2420,
      "AGENT BUSINESS NAME": "GHANA POST TELLER",
      "AGENT USERNAME": "GPOSTSUB30201",
      "ADDRESS": "Cape Coast ",
      "Location": "ADISADEL COLLEGE ",
      "GPS COORDINATES": "5.116462,- 1.264348",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2421,
      "AGENT BUSINESS NAME": "GHANA POST TELLER",
      "AGENT USERNAME": "GHPOSTSUB30301",
      "ADDRESS": "ABURA DUNKWA ",
      "Location": "ABURAMAN SENIOR HIGH",
      "GPS COORDINATES": "5.337141,-1.174998",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2422,
      "AGENT BUSINESS NAME": "GHANA POST TELLER",
      "AGENT USERNAME": "GPOSTSUB02501",
      "ADDRESS": "AMASAMAN",
      "Location": "Global Evangelical Church  ",
      "GPS COORDINATES": "5.701683,-0.295559",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2423,
      "AGENT BUSINESS NAME": "GHANA POST TELLER",
      "AGENT USERNAME": "GPOSTSUB20302",
      "ADDRESS": "AKOSOMBO",
      "Location": "AKWAMU - AKOSOMBO MARKET",
      "GPS COORDINATES": "6.273953,0.055590",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2424,
      "AGENT BUSINESS NAME": "GHANA POST TELLER ",
      "AGENT USERNAME": "GPOSTSUB04401",
      "ADDRESS": "AGONA SWEDRU ",
      "Location": "TOTAL FILLING STATION ",
      "GPS COORDINATES": "5.527635,-0.702338",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2425,
      "AGENT BUSINESS NAME": "GHANA POST TELLER",
      "AGENT USERNAME": "GPOSTSUB20101",
      "ADDRESS": "AKIM ODA",
      "Location": "CALVARY LOVE ASSEMBLIES OF GOD",
      "GPS COORDINATES": "5.915045,-0.990363",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2426,
      "AGENT BUSINESS NAME": "GHANA POST TELLER",
      "AGENT USERNAME": "GPOSTSUB20304",
      "ADDRESS": "KIBI",
      "Location": "KIBI SENIOR HIGH TECH. SCHOOL",
      "GPS COORDINATES": "6.155576,-0.562189",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2427,
      "AGENT BUSINESS NAME": "GHANA POST TELLER",
      "AGENT USERNAME": "GPOSTSUB20301",
      "ADDRESS": "Koforidua ",
      "Location": "The Apostolic Church ",
      "GPS COORDINATES": "6.108694,-0.272533",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2428,
      "AGENT BUSINESS NAME": "GHANA  POST TELLER",
      "AGENT USERNAME": "GPOSTSUB20303",
      "ADDRESS": "Akuapem  Mampong",
      "Location": "Amanokrom Asssmbly, The  Church of Pentecost ",
      "GPS COORDINATES": "5.920082, - 0.124693",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2429,
      "AGENT BUSINESS NAME": "GHANA POST TELLER ",
      "AGENT USERNAME": "GPOSTSUB30101",
      "ADDRESS": "Dunkwa-On-Offin",
      "Location": "The church of Pentecost, Dunkwa Central ",
      "GPS COORDINATES": "5.960362,-1.780066",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2430,
      "AGENT BUSINESS NAME": "Zehenpong Ventures",
      "AGENT USERNAME": "ZEV61001",
      "ADDRESS": "MAGAZINE",
      "Location": "NEAR MATHIAS JUNCTION",
      "GPS COORDINATES": "6°43'12.0'N1°37'54.3W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2431,
      "AGENT BUSINESS NAME": "Mamadu Azizu Enterprise",
      "AGENT USERNAME": "MAZ61001",
      "ADDRESS": "Magazine",
      "Location": "Adjacent Access Bank",
      "GPS COORDINATES": "6°4310.4'N1°37'55.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2432,
      "AGENT BUSINESS NAME": "SLY GLO ENTERPRISE",
      "AGENT USERNAME": "SGE61002",
      "ADDRESS": "SUAME",
      "Location": "BEHIND FORMAL FIRST ALIED SAVINGS AND LOANS",
      "GPS COORDINATES": "6°43'15.2'N1'37'56.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2433,
      "AGENT BUSINESS NAME": "PRINCE ODURO BOAKYE VENTURES",
      "AGENT USERNAME": "PBVSUB60401",
      "ADDRESS": "FEYIASE",
      "Location": "NEAR ST. MARGARET SCHOOL",
      "GPS COORDINATES": "6.5993°N,1.5580°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2434,
      "AGENT BUSINESS NAME": "PRINCE ODURO BOAKYE VENTURES",
      "AGENT USERNAME": "PBVSUB60402",
      "ADDRESS": "POKUKROM",
      "Location": "NEAR THE MARKET",
      "GPS COORDINATES": "7.0088°N,1.9643°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2435,
      "AGENT BUSINESS NAME": "JONATHAN AFARI TAMOH ENTERPRISE",
      "AGENT USERNAME": "JAE60401",
      "ADDRESS": "KUWAIT",
      "Location": "NEAR ECG OFFICE",
      "GPS COORDINATES": "6.6684°N,1.6095°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2436,
      "AGENT BUSINESS NAME": "GEORGE DUKU 29 VENTURES",
      "AGENT USERNAME": "GDV60401",
      "ADDRESS": "RACE HORSE",
      "Location": "INSIDE RACE HORSE",
      "GPS COORDINATES": "6.7066°N,1.6299°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2437,
      "AGENT BUSINESS NAME": "ELOHIM ROYAL ENTERPRISE",
      "AGENT USERNAME": "ERE60401",
      "ADDRESS": "BANTAMA",
      "Location": "NEAR THE MARKET",
      "GPS COORDINATES": "05°43'37.05''N00°45'18.43W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2438,
      "AGENT BUSINESS NAME": "ROCKSON KOJO DEBRAH VENTURES",
      "AGENT USERNAME": "RKV60401",
      "ADDRESS": "AMANFROM",
      "Location": "NEAR THE STATION",
      "GPS COORDINATES": "6.1935°N,0.5388°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2439,
      "AGENT BUSINESS NAME": "RAFIA PLUS 13 VENTURES",
      "AGENT USERNAME": "RPV60401",
      "ADDRESS": "HIGH TENSION",
      "Location": "NEAR THE HIGH TENSION",
      "GPS COORDINATES": "6.67678N,1.52075W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2440,
      "AGENT BUSINESS NAME": "ARKMAN 22 ENTERPRISE",
      "AGENT USERNAME": "A2E60402",
      "ADDRESS": "AHINSAN",
      "Location": "NEAR THE METHODIST CHURCH",
      "GPS COORDINATES": "606623°N,1.6036°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2441,
      "AGENT BUSINESS NAME": "SERWAA PAPABI ENTERPRISE",
      "AGENT USERNAME": "SPS60701",
      "ADDRESS": "UNNUMBERED SHOP AT ADEHYEMAN",
      "Location": "NEAR FIDELITY BANK, K. O METHODIST BRANCH",
      "GPS COORDINATES": "6.70018,-1.62258",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2442,
      "AGENT BUSINESS NAME": "AHMED FATAI ABDUL ENTERPRISE",
      "AGENT USERNAME": "AFA 61401.00",
      "ADDRESS": "AKWATIA LINE",
      "Location": "NEAR FIRST BAPTIST CHURCH",
      "GPS COORDINATES": "6.6998, -1.61079",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2443,
      "AGENT BUSINESS NAME": "HAWAWU SULEMANA ENTERPRISE",
      "AGENT USERNAME": "HSE60701",
      "ADDRESS": "ALABAR",
      "Location": "NEAR TAMALE LORRY STATION",
      "GPS COORDINATES": "6.41'50.0 N 1.36.54.5 W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2444,
      "AGENT BUSINESS NAME": "ALLAHU AKBAR TECHNOLOGIES",
      "AGENT USERNAME": "AAT60701",
      "ADDRESS": "SEPE TINPOM",
      "Location": "NEAR GALCO HOUSE",
      "GPS COORDINATES": "7.053137, -1.399997",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2445,
      "AGENT BUSINESS NAME": "IBRAHIM ADNAN ENTERPRISE",
      "AGENT USERNAME": "IAE60701",
      "ADDRESS": "ALABAR",
      "Location": "NEAR THE CHURCH",
      "GPS COORDINATES": "6.7002,-1.61696",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2446,
      "AGENT BUSINESS NAME": "FIDAUS SEIDU ENTERPRISE ",
      "AGENT USERNAME": "FSE61301",
      "ADDRESS": "OFORIKROM",
      "Location": "NEAR OFORIKROM M/A SCHOOL",
      "GPS COORDINATES": "6°41'18.1''N 1°36'29.5'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2447,
      "AGENT BUSINESS NAME": "Stemnant Enterprise ",
      "AGENT USERNAME": "SEN60502",
      "ADDRESS": "Kwabenakwa,  Obuasi ",
      "Location": "NEAR the lorry station ",
      "GPS COORDINATES": "6°12'52.7'N 1°35'24.5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2448,
      "AGENT BUSINESS NAME": "Donathony Enterprise ",
      "AGENT USERNAME": "DEN60801",
      "ADDRESS": "Kwabenakwa,  Obuasi ",
      "Location": "Near",
      "GPS COORDINATES": "NAKADU HOSPITAL ",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2449,
      "AGENT BUSINESS NAME": "Menstutu Enterprise",
      "AGENT USERNAME": "MEN60701",
      "ADDRESS": "ASHANTI NEW TOWN",
      "Location": "NEAR POST OFFICE",
      "GPS COORDINATES": "6°42'07.4'N1°37'05.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2450,
      "AGENT BUSINESS NAME": "B.Achies Enterprise ",
      "AGENT USERNAME": "BAE60601",
      "ADDRESS": "Amakom",
      "Location": "Near Abuotia school - Amakom",
      "GPS COORDINATES": "6°41'18.1'N 1°36'29.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2451,
      "AGENT BUSINESS NAME": "Redhoth Enterprise ",
      "AGENT USERNAME": "REN60101",
      "ADDRESS": "Asafo",
      "Location": "Near the church of Christ - Asafo",
      "GPS COORDINATES": "6°41'14.8'N 1°36'31.3'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2452,
      "AGENT BUSINESS NAME": "B - Fred Express Ventures",
      "AGENT USERNAME": "BFE60101",
      "ADDRESS": "Asafo",
      "Location": "Close to Puma filling station  - Asafo",
      "GPS COORDINATES": "6°41'19.4'N 1°36'45.0'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2453,
      "AGENT BUSINESS NAME": "Gyapat Heavens Ventures",
      "AGENT USERNAME": "GHV04401",
      "ADDRESS": "KASOA Breku",
      "Location": "Near Breku taxi rank",
      "GPS COORDINATES": "5.522568,-0.478479",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2454,
      "AGENT BUSINESS NAME": "Majesty Authentic ",
      "AGENT USERNAME": "MAUSUB04401",
      "ADDRESS": "KASOA ",
      "Location": "Near KASOA overhead ",
      "GPS COORDINATES": "5.534111,-0.428344",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2455,
      "AGENT BUSINESS NAME": "Cedar Jay Ghana Ltd",
      "AGENT USERNAME": "CJGSUB04401",
      "ADDRESS": "KASOA new market ",
      "Location": "Near Ashfoam",
      "GPS COORDINATES": "5.546955,-0.434052",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2456,
      "AGENT BUSINESS NAME": "CEDITRUST  ",
      "AGENT USERNAME": "CED04401",
      "ADDRESS": "KASOA Walantu",
      "Location": "SDA church ",
      "GPS COORDINATES": "5.514203,-0.448824",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2457,
      "AGENT BUSINESS NAME": "Majesty authentic ",
      "AGENT USERNAME": "MAUSUB04402",
      "ADDRESS": "KASOA old maker ",
      "Location": "Lorry station ",
      "GPS COORDINATES": "5.534837,-0.426806",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2458,
      "AGENT BUSINESS NAME": "Belinda Klenam Enterprise ",
      "AGENT USERNAME": "BKE04401",
      "ADDRESS": "Lamptey mills KASOA ",
      "Location": "Afajoy school ",
      "GPS COORDINATES": "5.5696327, -0.4214096",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2459,
      "AGENT BUSINESS NAME": "Lusak Royal Ventures ",
      "AGENT USERNAME": "LRV04401",
      "ADDRESS": "KASOA old market ",
      "Location": "Near GIS ",
      "GPS COORDINATES": "5.5381452, -0.4224375",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2460,
      "AGENT BUSINESS NAME": "QUICKEAGLE SERVICE ",
      "AGENT USERNAME": "QSESUB04402",
      "ADDRESS": "KASOA OLD MARKET ",
      "Location": "JUCAD PHARMACY ",
      "GPS COORDINATES": "5.534057,-0.424686",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2461,
      "AGENT BUSINESS NAME": "Joskin Enterprises ",
      "AGENT USERNAME": "JEN60801",
      "ADDRESS": "Ahodwo ",
      "Location": "Near Ahodwo Roundabout ",
      "GPS COORDINATES": "6°40'08.8'N 1 °37'04.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2462,
      "AGENT BUSINESS NAME": "Abay Enterprise ",
      "AGENT USERNAME": "ABE60501",
      "ADDRESS": "Ahodwo ",
      "Location": "Near Ahodwo Melcom",
      "GPS COORDINATES": "6°39'40.4'N1°37'05.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2463,
      "AGENT BUSINESS NAME": "Elolosman Ventures ",
      "AGENT USERNAME": "EMV60502",
      "ADDRESS": "Ahodwo ",
      "Location": "Near Ahodwo Fire city Restaurant ",
      "GPS COORDINATES": "6°39'37.1'N 1°37'06.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2464,
      "AGENT BUSINESS NAME": "PERFECT ZEAL ENTERPRISE ",
      "AGENT USERNAME": "PZE00701",
      "ADDRESS": "AGBOGBLOSHIE ",
      "Location": "NEAR TOTAL FILLING STATION ",
      "GPS COORDINATES": "5.547710,-0.217520",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2465,
      "AGENT BUSINESS NAME": "GESS-BAM",
      "AGENT USERNAME": "GBE04401",
      "ADDRESS": "KASOA overheard ",
      "Location": "Near SED door ",
      "GPS COORDINATES": "5.5344573, -0.4276283",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2466,
      "AGENT BUSINESS NAME": "Lizzy@105 Ventures",
      "AGENT USERNAME": "LIV60701",
      "ADDRESS": "KROFROM,",
      "Location": "OPPOSITE PLAYBOY",
      "GPS COORDINATES": "6°42'38.8'N1°37.21.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2467,
      "AGENT BUSINESS NAME": "ESCOBA 1 VENTURES",
      "AGENT USERNAME": "EVESUP02701",
      "ADDRESS": "NUNGUA ",
      "Location": "CLOSE TO ST. FRANCIS IPMC",
      "GPS COORDINATES": "5'36'24.8''N 0'05'19.4''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2468,
      "AGENT BUSINESS NAME": "ESCOBA 1 VENTURES",
      "AGENT USERNAME": "EVESUB02701",
      "ADDRESS": "BUADE",
      "Location": "NEAR BUADE JOINT",
      "GPS COORDINATES": "5.613456,-0.083171",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2469,
      "AGENT BUSINESS NAME": "ESCOBA 1 VENTURES",
      "AGENT USERNAME": "EVESUB02702",
      "ADDRESS": "BANK ROAD",
      "Location": "OPPOSITE ICGC",
      "GPS COORDINATES": "5'36'13.3N0'04,55.1''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2470,
      "AGENT BUSINESS NAME": "ESCOBA 1 VENTURES",
      "AGENT USERNAME": "EVESUB02702",
      "ADDRESS": "ST. FRANCIS-NUNGUA",
      "Location": "NEAR ST. FRANCIS ",
      "GPS COORDINATES": "5'36'24.8''N0'05'19.4''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2471,
      "AGENT BUSINESS NAME": "HADASSAH M VENTURES",
      "AGENT USERNAME": "HMV02701",
      "ADDRESS": "NUNGUA 5000",
      "Location": "CLOSE TO ASSEMBLIES OF GOD CHURCH",
      "GPS COORDINATES": "5.604845-0.07914",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2472,
      "AGENT BUSINESS NAME": "NADUS-SAM TRADING ENT.",
      "AGENT USERNAME": "NST02701",
      "ADDRESS": "NUNGUA",
      "Location": "BEHIND NUNGUA MAMPROBI CEMETERY",
      "GPS COORDINATES": "5'36'24.9''N0'05''19.6''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2473,
      "AGENT BUSINESS NAME": "TERFA POSSIBILITY ENTERPRISE",
      "AGENT USERNAME": "TPE 2701.00",
      "ADDRESS": "NAUTICAL",
      "Location": "FEW DRIVE FROM MARITIME UNIVERSITY",
      "GPS COORDINATES": "5'36'17.3'N 0'03'58.7'N",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2474,
      "AGENT BUSINESS NAME": "BORLEY VISION ENT",
      "AGENT USERNAME": "BVE02703",
      "ADDRESS": "NUNGUA ZONGO JUNCTION",
      "Location": "NEAR GCB",
      "GPS COORDINATES": "5.597122,-0.083873",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2475,
      "AGENT BUSINESS NAME": "BECKLINKS",
      "AGENT USERNAME": "BVE02701",
      "ADDRESS": "TESHIE ADJORMAN",
      "Location": "NEAR ADJORMN ROUNDABOUT",
      "GPS COORDINATES": "5.613172,-0.108434",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2476,
      "AGENT BUSINESS NAME": "FOREVER FAVOURERD ENT",
      "AGENT USERNAME": "FFE02701",
      "ADDRESS": "NUNGUA ",
      "Location": "BEHIND GCB",
      "GPS COORDINATES": "5.597230,-0.083880",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2477,
      "AGENT BUSINESS NAME": "FORDGIFT CONSULT",
      "AGENT USERNAME": "FCO02701",
      "ADDRESS": "TESHIE ABOMA",
      "Location": "NEAR ABOMA PRESBY CHURCH",
      "GPS COORDINATES": "5'35'05.3''N0'06'45.8''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2478,
      "AGENT BUSINESS NAME": "HERTYFIO VENTURES",
      "AGENT USERNAME": "HVE03501",
      "ADDRESS": "NUNGUA",
      "Location": "NEAR MARITAL SCHOOL",
      "GPS COORDINATES": "5.608957,-0.068864",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2479,
      "AGENT BUSINESS NAME": "ARISTO LOGISTICS & TRADING",
      "AGENT USERNAME": "ALT02701",
      "ADDRESS": "ADDOGONNO",
      "Location": "OPPOSITE SDA CHURCH OR LAWEH UNIVERISTY",
      "GPS COORDINATES": "5.609637,-0.087011",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2480,
      "AGENT BUSINESS NAME": "ZEWUNAM ENT",
      "AGENT USERNAME": "ZEN02701",
      "ADDRESS": "NUNGUA",
      "Location": "NEAR FIFA HOUSE",
      "GPS COORDINATES": "5'36'15.8''N 0'0'4''24.5''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2481,
      "AGENT BUSINESS NAME": "MIZZ AD-TSUI ENT",
      "AGENT USERNAME": "MAE02701",
      "ADDRESS": "NUNGUA",
      "Location": "INSIDE NUNGUA MARKET",
      "GPS COORDINATES": "5.35'59.5'N0'04'43.2''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2482,
      "AGENT BUSINESS NAME": "ERIC RIV VENTURES",
      "AGENT USERNAME": "ERV02701",
      "ADDRESS": "NUNGUA",
      "Location": "NEAR NUNGUA MARKET",
      "GPS COORDINATES": "5.601056,-0.078352",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2483,
      "AGENT BUSINESS NAME": "MY DREAMS MULTI-PURPOSE ENT",
      "AGENT USERNAME": "MDM02701",
      "ADDRESS": "NUNGUA",
      "Location": "NEAR NUNGUA MANTSE PALACE",
      "GPS COORDINATES": "5.599436,-0.072277",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2484,
      "AGENT BUSINESS NAME": "BEACHARMS VENTURES",
      "AGENT USERNAME": "BVE02702",
      "ADDRESS": "NUNGUA KANTAMANTO",
      "Location": "NEAR GREEN TV",
      "GPS COORDINATES": "5'36'24.7'N0'04'37.0''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2485,
      "AGENT BUSINESS NAME": "AMOUNT CONNECTIONS",
      "AGENT USERNAME": "ACOSUB02703",
      "ADDRESS": "SPINTEX",
      "Location": "OPPOSITE SHELL FUEL STATION",
      "GPS COORDINATES": "5'37'18.4''N0'05;27.3''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2486,
      "AGENT BUSINESS NAME": "SHINEHOOD ENT",
      "AGENT USERNAME": "SEN01101",
      "ADDRESS": "SPINTEX",
      "Location": "FEW DRIVE AWAY FROM COCA COLA ROUNDABOUT",
      "GPS COORDINATES": "5.643135,-0.112956",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2487,
      "AGENT BUSINESS NAME": "Dorh Nyark Enterprise ",
      "AGENT USERNAME": "DNESUB04403",
      "ADDRESS": "KASOA ",
      "Location": "Near Goil Filling Station ",
      "GPS COORDINATES": "5.5354061, -0.4239101",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2488,
      "AGENT BUSINESS NAME": "Life change micro credit ",
      "AGENT USERNAME": "LCM02001",
      "ADDRESS": "Unnumbered shop at tse addo ",
      "Location": "Near zenith university ",
      "GPS COORDINATES": "5.573725, -0.140898",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2489,
      "AGENT BUSINESS NAME": "Emma’s mobile enterprise ",
      "AGENT USERNAME": "EME02001",
      "ADDRESS": "Unnumbered shop at la",
      "Location": "Behind old police barracks ",
      "GPS COORDINATES": "(5.5653810, -0.1584390)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2490,
      "AGENT BUSINESS NAME": "Hands of peace ventures ",
      "AGENT USERNAME": "HPV02702",
      "ADDRESS": "Unnumbered shop at bushroad curve",
      "Location": "Near bush road curve ",
      "GPS COORDINATES": "5.595552, -0.131084",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2491,
      "AGENT BUSINESS NAME": "ERNESTEVA ENTERPRISE",
      "AGENT USERNAME": "EEN02102",
      "ADDRESS": "LAMPTEY JUNCTION",
      "Location": "NEAR LAMPTEY MILLS JUNCTION",
      "GPS COORDINATES": "5.5677223,-0.424131",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2492,
      "AGENT BUSINESS NAME": "DE REAL TYCOON VENTURES",
      "AGENT USERNAME": "DRT02101",
      "ADDRESS": "ASHONGMAN ESTATE",
      "Location": "OPPOSITE ADOM SUPERMARKET",
      "GPS COORDINATES": "5.6580325,-0.2266735",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2493,
      "AGENT BUSINESS NAME": "NETOVITISH VENTURES",
      "AGENT USERNAME": "NVE02101",
      "ADDRESS": "AMASAMAN",
      "Location": "INSIDE THE TROTRO STATION",
      "GPS COORDINATES": "5.7056742,-0.3009687",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2494,
      "AGENT BUSINESS NAME": "SMG ROYAL ENTERPRISE",
      "AGENT USERNAME": "SRE02101",
      "ADDRESS": "ALAJO",
      "Location": "NEAR VIRTUE",
      "GPS COORDINATES": "5.594076,-0.213556",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2495,
      "AGENT BUSINESS NAME": "Abuisa lai Enterprise ",
      "AGENT USERNAME": "ABUSUB02003",
      "ADDRESS": "Unnumbered shop at tse addo",
      "Location": "Near tse addo container ",
      "GPS COORDINATES": "(5.5756460, -0.1386060)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2496,
      "AGENT BUSINESS NAME": "Vanard solutions ",
      "AGENT USERNAME": "VSO02001",
      "ADDRESS": "Unnumbered shop at la",
      "Location": "Opposite KPOGAS furniture ",
      "GPS COORDINATES": "(5.5720080, -0.1507630)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2497,
      "AGENT BUSINESS NAME": "Vidash tight-sight Enterprise ",
      "AGENT USERNAME": "VTS02001",
      "ADDRESS": "Unnumbered shop at tse addo ",
      "Location": "Near Jane Montessori school ",
      "GPS COORDINATES": "(5.5756240, -0.1391040)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2498,
      "AGENT BUSINESS NAME": "EXTRAORDINARY PEACE ENTERPRISE",
      "AGENT USERNAME": "EPE02101",
      "ADDRESS": "ACHIMOTA",
      "Location": "CLOSE TO ACHIMOTA",
      "GPS COORDINATES": "5.622580,-0.219496",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2499,
      "AGENT BUSINESS NAME": "AA NYANKOM ENTERPRISE",
      "AGENT USERNAME": "AAN03101-SUB",
      "ADDRESS": "TAIFA",
      "Location": "OPPOSITE MAXXON FILLLING STATION",
      "GPS COORDINATES": "5.667703,-0.250469",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2500,
      "AGENT BUSINESS NAME": "AA NYANKOM ENTERPRISE",
      "AGENT USERNAME": "AAN03102-SUB",
      "ADDRESS": "ATOMIC ROUNDABOUT",
      "Location": "NEAR TAXI RANK",
      "GPS COORDINATES": "5.667703,-0-250469",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2501,
      "AGENT BUSINESS NAME": "JOCOMF ENTERPRISE ",
      "AGENT USERNAME": "JEN04402",
      "ADDRESS": "KASOA ",
      "Location": "Opposite Ecobank ",
      "GPS COORDINATES": "5.5449775, -0.4314491",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2502,
      "AGENT BUSINESS NAME": "Cedar Jay Ghana ltd",
      "AGENT USERNAME": "CJGSUB04404",
      "ADDRESS": "KASOA",
      "Location": "Behind Nsanyia school ",
      "GPS COORDINATES": "5.5446130, -0.4320200",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2503,
      "AGENT BUSINESS NAME": "CEDAR JAY GHANA LTD ",
      "AGENT USERNAME": "CJGSUB04403",
      "ADDRESS": "KASOA Adade ",
      "Location": "Near ASO PHARMACY ",
      "GPS COORDINATES": "5.5045110, -0.4345970",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2504,
      "AGENT BUSINESS NAME": "GEOMEC PLUS ENTERPRISE ",
      "AGENT USERNAME": "GPE03201",
      "ADDRESS": "UNNUMBERED SHOP AT AWOSHIE ABRANTIE ",
      "Location": "ABRANTIE BUS STOP ",
      "GPS COORDINATES": "5.5883338,-0.2823406",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2505,
      "AGENT BUSINESS NAME": "Ernesto hub",
      "AGENT USERNAME": "EHUSUB00401",
      "ADDRESS": "Unnumbered shop at osu",
      "Location": "Near osu children’s library ",
      "GPS COORDINATES": "5.553520, -0.177213",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2506,
      "AGENT BUSINESS NAME": "GOOD GENERATION ENTERPRISE ",
      "AGENT USERNAME": "GGSUB02202",
      "ADDRESS": "UNNUMBERED SHOP AT SAPIEMAN ",
      "Location": "NEAR THE GREATER HOPE SCHOOL",
      "GPS COORDINATES": "5.6480329,-0.2539204",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2507,
      "AGENT BUSINESS NAME": "GOOD GENERATION ENTERPRISE ",
      "AGENT USERNAME": "GGSUB02201",
      "ADDRESS": "UNNUMBERED SHOP AT ABC ",
      "Location": "NEAR ROCKTERS ROOFING COMPANY ",
      "GPS COORDINATES": "506667272,-0.3581963",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2508,
      "AGENT BUSINESS NAME": "CL ALPHA AND OMEGA ENTERPRISE ",
      "AGENT USERNAME": "COE02201",
      "ADDRESS": "UNNUMBERERED SHOP AT AMASAMAN 3 JUNCTION",
      "Location": "NEAR THE TAXI RANK ",
      "GPS COORDINATES": "507195966,-0.3430796",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2509,
      "AGENT BUSINESS NAME": "REJOICE ADJOR VENTURES ",
      "AGENT USERNAME": "RAV02201",
      "ADDRESS": "UNNUMBERED SHOP AT POKUASE SDA ",
      "Location": "OPPOSITE THE SDA CHURCH ",
      "GPS COORDINATES": "5.690914,-0.284020",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2510,
      "AGENT BUSINESS NAME": "RUBY LEAD ENTERPRISE ",
      "AGENT USERNAME": "RLE02201",
      "ADDRESS": "UNNUMBERED SHOP AT AMASAMAN ANTIE ADWOA ",
      "Location": "NEAR AMASAMAN MELCOM ",
      "GPS COORDINATES": "5.6521954,-0.2855208",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2511,
      "AGENT BUSINESS NAME": "FINE HALAL VENTURES ",
      "AGENT USERNAME": "FHV02201",
      "ADDRESS": "UNNUMBERED SHOP AT POKUASE ACP",
      "Location": "OPPOSITE BIG APPLE GYM ",
      "GPS COORDINATES": "5.681792,-0.267265",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2512,
      "AGENT BUSINESS NAME": "JEBRIM MOHAMMED PLEASURE VENTURES",
      "AGENT USERNAME": "JMP02201",
      "ADDRESS": "UNNUMBERED SHOP AT SAPIEMAN ",
      "Location": "NEAR THE CHRIST APOSTOLIC CHURCH ",
      "GPS COORDINATES": "50723878,-0.306708",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2513,
      "AGENT BUSINESS NAME": "ERIDAT LINKS ",
      "AGENT USERNAME": "ERL02901",
      "ADDRESS": "UNNUMBERED SHOP AT OFANKOR ",
      "Location": "NEAR OFANKOR POST OFFICE ",
      "GPS COORDINATES": "5.659955,-0.265236",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2514,
      "AGENT BUSINESS NAME": "ENNYWOODBERT VENTURES ",
      "AGENT USERNAME": "JEV02901",
      "ADDRESS": "UNNUMBERED SHOP AT AMASAMAN STADIUM ROAD ",
      "Location": "OPOSITE THE AMASAMAN SATIDUIM ",
      "GPS COORDINATES": "5.42514,-0.17514",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2515,
      "AGENT BUSINESS NAME": "DICTA GYAAMEA VENTURES ",
      "AGENT USERNAME": "DGV02202",
      "ADDRESS": "UNNUMNERED SHOP AT POKUASE MAYERA ",
      "Location": "NEAR MAYERA JHS ",
      "GPS COORDINATES": "5.7292433,-0.281367",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2516,
      "AGENT BUSINESS NAME": "HILDA ATANGA ENTERPRISE ",
      "AGENT USERNAME": "HAE02101",
      "ADDRESS": "UNNUMBERED SHOP AT AMASAMAN ",
      "Location": "NEAR CHRIST APOSTOLIC CHURCH",
      "GPS COORDINATES": "5.7056915,-0.3007746",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2517,
      "AGENT BUSINESS NAME": "ODEHYEABA PASTY VENTURES ",
      "AGENT USERNAME": "OPV04501",
      "ADDRESS": "UNNUMBERED SHOP AT MEDEA KOTOKU ",
      "Location": "NEAR THE ONION MARKET",
      "GPS COORDINATES": "5.7353278,-0.3612748",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2518,
      "AGENT BUSINESS NAME": "ANOINTED PROMISE VENTURES ",
      "AGENT USERNAME": "APV02201",
      "ADDRESS": "UNNUMBERED SHOP AT FESTUS",
      "Location": "OPPOSITE LEAD INTERNATIOANL SCHOOL",
      "GPS COORDINATES": "505915088,-0.2496215",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2519,
      "AGENT BUSINESS NAME": "OHEMENG JAMES ENTERPRISE ",
      "AGENT USERNAME": "OJE02501",
      "ADDRESS": "UNNUMBERED SHOP AT AMASAMAN 3 JUNCTION",
      "Location": "NEAR THE TAXI RANK ",
      "GPS COORDINATES": "5.6958174,-0.3168384",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2520,
      "AGENT BUSINESS NAME": "ALBERT ZONE ENTERPRISE ",
      "AGENT USERNAME": "AZE02501",
      "ADDRESS": "UNNUMNBERED SHOP AT MAYERA ",
      "Location": "NEAR THE ICGC CHURCH ",
      "GPS COORDINATES": "5.6813752,-0.3355147",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2521,
      "AGENT BUSINESS NAME": "NANTWIMA ENTERPRISE ",
      "AGENT USERNAME": "NAE02501",
      "ADDRESS": "UNNUMBERED SHOP AT DOME ",
      "Location": "NEAR DOME RAIL WAYS",
      "GPS COORDINATES": "507614909,-0.3253516",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2522,
      "AGENT BUSINESS NAME": "DARKTHEOLARB VENTURES ",
      "AGENT USERNAME": "DVE02101",
      "ADDRESS": "UNNUMBERED SHOP AT SAPIEMAN ",
      "Location": "NEAR OPAH STATION ",
      "GPS COORDINATES": "5.7240501,-0.317287",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2523,
      "AGENT BUSINESS NAME": "SHALOM LIFE VENTURES ",
      "AGENT USERNAME": "SLV02201",
      "ADDRESS": "UNNUMBERED SHOP AT KPOBI NEWTOWN ",
      "Location": "NEAR THE METHODIST CHURCH ",
      "GPS COORDINATES": "5.44095,-0.17233",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2524,
      "AGENT BUSINESS NAME": "RATTY DOGBEY VENTURES ",
      "AGENT USERNAME": "RDV02501",
      "ADDRESS": "UNNUMBERED SHOP AT POBIMAN ",
      "Location": "NEAR THE TOLLBOOT",
      "GPS COORDINATES": "507154507,-0.32168",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2525,
      "AGENT BUSINESS NAME": "H AFRA VENTURES ",
      "AGENT USERNAME": "HAV02501",
      "ADDRESS": "UNNUMBERED SHOP AT AMASAMAN 3 JUNCTION",
      "Location": "NEAR THE TAXI RANK",
      "GPS COORDINATES": "5.696938-,-0.316307",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2526,
      "AGENT BUSINESS NAME": "YEBOAH ZUSAIN ENTERPRISE ",
      "AGENT USERNAME": "YZE04501",
      "ADDRESS": "UNNUMBERED SHOP AT MEDEA ",
      "Location": "NEAR ST JOSEPH THE MAKER CATHOLIC CHURCH ",
      "GPS COORDINATES": "5.761721,-0.324777",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2527,
      "AGENT BUSINESS NAME": "OFPAW VENTURES",
      "AGENT USERNAME": "OVE02501",
      "ADDRESS": "UNNUMBERED SHOP AT MILE 7",
      "Location": "BEHIND BEST POINT SAVINGS AND LOANS",
      "GPS COORDINATES": "5.636423,-0.238823",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2528,
      "AGENT BUSINESS NAME": "PHISAM EYIAH ENTERPRISE ",
      "AGENT USERNAME": "PEE02501",
      "ADDRESS": "UNNUMBERED SHOP AT SAPIEMAN ",
      "Location": "NEAR THE ROCK CHURCH",
      "GPS COORDINATES": "5.728977,-0.318892",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2529,
      "AGENT BUSINESS NAME": "EDWARD ANGELO'S ELECTRICAL ENTERPRISE ",
      "AGENT USERNAME": "EAE02501",
      "ADDRESS": "UNNUMBERED SHOP AT KPOBI KOPE",
      "Location": "NEAR THE METHODIST CHURCH ",
      "GPS COORDINATES": "5.727049,-0.307482",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2530,
      "AGENT BUSINESS NAME": "YESU DEM POWER BATTERIES ",
      "AGENT USERNAME": "YDP00501",
      "ADDRESS": "ABOSEEY OKAI ",
      "Location": "BESIDE GCB BANK ",
      "GPS COORDINATES": "5.5615520, -0.2315740",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2531,
      "AGENT BUSINESS NAME": "PAMADDY LORD VENTURES ",
      "AGENT USERNAME": "PLV00701",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR FACO HOTEL",
      "GPS COORDINATES": "5.547792,-0.215527",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2532,
      "AGENT BUSINESS NAME": "EXPRESS KWABENA AGYEMANG ENTERPRISE ",
      "AGENT USERNAME": "EKA01001",
      "ADDRESS": "OKAISHIE",
      "Location": "OPPOSITE GCB ",
      "GPS COORDINATES": "5.547469,-0.210626",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2533,
      "AGENT BUSINESS NAME": "SOLOMON ASOKIWENE ENTERPRISE ",
      "AGENT USERNAME": "SAE00701",
      "ADDRESS": "TIMBER MARKET ",
      "Location": "NEAR THE MOSQUE ",
      "GPS COORDINATES": "5.544751,-0.218238",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2534,
      "AGENT BUSINESS NAME": " WAKDUAH ENTERPRISE ",
      "AGENT USERNAME": "WEN00701",
      "ADDRESS": "TUDU",
      "Location": "OPPOSITE TUDU POLICE STATION ",
      "GPS COORDINATES": "5.556485,-0.209906",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2535,
      "AGENT BUSINESS NAME": "ENYOMENS VENTURES ",
      "AGENT USERNAME": "EVE02401",
      "ADDRESS": "ADABRAKA",
      "Location": "OPPOSITE TOTAL HOUSE CLINIC ",
      "GPS COORDINATES": "5.556485,-0.209906",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2536,
      "AGENT BUSINESS NAME": "CHEREMAMAN ENTERPRISE ",
      "AGENT USERNAME": "CEN00701",
      "ADDRESS": "JAMES TOWN ",
      "Location": "NEAR SOCCER BET ",
      "GPS COORDINATES": "5.538211,-0.213671",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2537,
      "AGENT BUSINESS NAME": "Adora Fashion ",
      "AGENT USERNAME": "AFA 4401.00",
      "ADDRESS": "Millennium City",
      "Location": "Glorious Child ",
      "GPS COORDINATES": "5.4956250, -0.4170970",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2538,
      "AGENT BUSINESS NAME": "D RHEMA MICRO SAVE",
      "AGENT USERNAME": "DMSSUB05104",
      "ADDRESS": "KASOA Amanfrom",
      "Location": "Near ECG office ",
      "GPS COORDINATES": "5.5355188, -0.4123270",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2539,
      "AGENT BUSINESS NAME": "IYKE WANN ENTERPRISSE",
      "AGENT USERNAME": "IWE03801",
      "ADDRESS": "SANTA MARIA ",
      "Location": "NEAR INSITE MEDIA COLLEGE",
      "GPS COORDINATES": "5.597140-,0.274477",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2540,
      "AGENT BUSINESS NAME": "IBMANDEEYA ",
      "AGENT USERNAME": "EBE00701",
      "ADDRESS": "AGBOGBLOSHIE ",
      "Location": "NEAR BIMBILA STATION",
      "GPS COORDINATES": "5.558508,-0.218748",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2541,
      "AGENT BUSINESS NAME": "HE IS IN CONTROL 1",
      "AGENT USERNAME": "HIC00701",
      "ADDRESS": "ADABRAKA ",
      "Location": "NEAR ADABRAKA MOSQUE",
      "GPS COORDINATES": "5.564338,-0.2212809",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2542,
      "AGENT BUSINESS NAME": "MARKET WAVE ENTERPRISE ",
      "AGENT USERNAME": "MWE00301",
      "ADDRESS": "TUDU",
      "Location": "NEAR CORAL PAINT ",
      "GPS COORDINATES": "5.550306,-0.207249",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2543,
      "AGENT BUSINESS NAME": "NATURE PEE ENTERPRISE",
      "AGENT USERNAME": "NPE03801",
      "ADDRESS": "SOWUTUOM",
      "Location": "NEAR PENTECOST UNIVERSITY ",
      "GPS COORDINATES": "5.623590-0.274913",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2544,
      "AGENT BUSINESS NAME": "EWUSI ISAAC VENTURE ",
      "AGENT USERNAME": "EWUSUB04401",
      "ADDRESS": "Obon Road KASOA ",
      "Location": "Near Zen Filling Station ",
      "GPS COORDINATES": "5.543100,-0.421046",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2545,
      "AGENT BUSINESS NAME": "ADM MIKKEYS SERVICES",
      "AGENT USERNAME": "AMS00701",
      "ADDRESS": "KANDA",
      "Location": "NEAR MOUNTRES UNIVERSITY ",
      "GPS COORDINATES": "5.579091,-0.196042",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2546,
      "AGENT BUSINESS NAME": "KEN-L ONE ENTERPRISE",
      "AGENT USERNAME": "YOF03801",
      "ADDRESS": "ABEKA",
      "Location": "NEAR ABEKA CHURCH OF PENTECOST",
      "GPS COORDINATES": "5.603728-0.241872",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2547,
      "AGENT BUSINESS NAME": "KLINSANTE ENTERPRISE ",
      "AGENT USERNAME": "KEN00701",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR HOTEL DE HORSES",
      "GPS COORDINATES": "5.548422,-0.213420",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2548,
      "AGENT BUSINESS NAME": "LINLAR-PLUS ENTERPRISE ",
      "AGENT USERNAME": "LPE00701",
      "ADDRESS": "TIMBER MARKET ",
      "Location": "INSIDE TIMBER MARKET ",
      "GPS COORDINATES": "5.543903,-0.216866",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2549,
      "AGENT BUSINESS NAME": "YOUR OWN FUTURE",
      "AGENT USERNAME": "YOF03801",
      "ADDRESS": "ABEKA",
      "Location": "NEAR ABEKA PENTECOST CHURCH",
      "GPS COORDINATES": "5.603728-0.241872",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2550,
      "AGENT BUSINESS NAME": "AES BIG BRAINS ENTERPRISE ",
      "AGENT USERNAME": "ABB00701",
      "ADDRESS": "AGBOGBLOSHIE ",
      "Location": "NEAR AGBOGBLOSHIE YAM MARKET ",
      "GPS COORDINATES": "5.536410,-0.214421",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2551,
      "AGENT BUSINESS NAME": "PRISEI MANAGEMENT ",
      "AGENT USERNAME": "PMA00701",
      "ADDRESS": "MAKOLA",
      "Location": "NEAR MAKOLA MALL",
      "GPS COORDINATES": "5.549800,-0.207403",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2552,
      "AGENT BUSINESS NAME": "GYE NYAME ALUPLUS ",
      "AGENT USERNAME": "GNA01401",
      "ADDRESS": "ASYLUM DOWN ",
      "Location": "NEAR ASYLUM DOWN ROUND ABOUT ",
      "GPS COORDINATES": "5.569134,-0.206518",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2553,
      "AGENT BUSINESS NAME": "FIMAUD VENTURES",
      "AGENT USERNAME": "FRVSUB00103",
      "ADDRESS": "OKAISHIE",
      "Location": "NEAR METRO MASS STATION ",
      "GPS COORDINATES": "5.547115,-0.210063",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2554,
      "AGENT BUSINESS NAME": "FIMAUD VENTURES",
      "AGENT USERNAME": "FRVSUB00103",
      "ADDRESS": "OKAISHIE",
      "Location": "NEAR METRO MASS STATION ",
      "GPS COORDINATES": "5.547115,-0.210063",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2555,
      "AGENT BUSINESS NAME": "KINGWONDERS ENTERPRISE ",
      "AGENT USERNAME": "KEN00101",
      "ADDRESS": "DANSOMAN EBENEZER DOWN",
      "Location": "NEAR EBENEZER SHS",
      "GPS COORDINATES": "5.521760,-0.254734",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2556,
      "AGENT BUSINESS NAME": "GOD IS GOOD AMADI ENTERPRISE",
      "AGENT USERNAME": "GIG02801",
      "ADDRESS": "ASHAIMAN TEMA STATION",
      "Location": "NEAR EGINE FILLING STATION",
      "GPS COORDINATES": "5.687309,-0.0292700",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2557,
      "AGENT BUSINESS NAME": "CEDARCOM ENTERPRISE",
      "AGENT USERNAME": "CEN02801",
      "ADDRESS": "ASHAIMAN TULAKU",
      "Location": "NEAR LOCAL MILK",
      "GPS COORDINATES": "5.687641,-0.0279710",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2558,
      "AGENT BUSINESS NAME": "GILFIALOR PREMIUM ENTERPRISE",
      "AGENT USERNAME": "GPE02801",
      "ADDRESS": "ASHAIMAN TIMBER MARKET",
      "Location": "NEAR UMB BANK",
      "GPS COORDINATES": "5.696796,-0.012220",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2559,
      "AGENT BUSINESS NAME": "NAF 1 LTD",
      "AGENT USERNAME": "N1L02801",
      "ADDRESS": "UNN SHOP AT GBETSILE ",
      "Location": "OPPOSITE JESUS TEMPLE ROYAL CHURCH",
      "GPS COORDINATES": "5.762005,-0.038859",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2560,
      "AGENT BUSINESS NAME": "ROCK HAY VENTURES",
      "AGENT USERNAME": "RHV02801",
      "ADDRESS": "UNN SHOP AT MATAHEKO",
      "Location": "NEAR NEWLAND JUNCTION",
      "GPS COORDINATES": "5.7827019,0.0180430",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2561,
      "AGENT BUSINESS NAME": "AKPENESCO ENTERPRISE",
      "AGENT USERNAME": "AEN02802",
      "ADDRESS": "UNN SHOP AT KATAMANSO",
      "Location": "NEAR KATAMANSO SCHOOL JUNCTION",
      "GPS COORDINATES": "5.743819,0.0790930",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2562,
      "AGENT BUSINESS NAME": "GATSEDI VENTURES",
      "AGENT USERNAME": "GVE02801",
      "ADDRESS": "UNN SHOP AT ASHAIMAN",
      "Location": "NEAR LEBENE JUNCTION",
      "GPS COORDINATES": "5.691442,-0.032830",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2563,
      "AGENT BUSINESS NAME": "EAGLET POINT VENTURES",
      "AGENT USERNAME": "EPV02801",
      "ADDRESS": "HSE NO NW237B ASHAIMAN LEBANON",
      "Location": "OPPOSITE ADA STORE",
      "GPS COORDINATES": "5.698722,-0.0426140",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2564,
      "AGENT BUSINESS NAME": "ADEVEY 79",
      "AGENT USERNAME": "ADESUB05004",
      "ADDRESS": "UNN SHOP AT VIC BOSS",
      "Location": "NEAR VICBOSS BUS STOP",
      "GPS COORDINATES": "5.7156730,-0.0145740",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2565,
      "AGENT BUSINESS NAME": "LOYALTY AND MEGA VENTURES",
      "AGENT USERNAME": "LMV02801",
      "ADDRESS": "UNN SHOP AT ASHAIMAN NEW YORK",
      "Location": "NEAR PATROSOL FILLING STATION",
      "GPS COORDINATES": "5.7342110,-0.0540210",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2566,
      "AGENT BUSINESS NAME": "JDL SERVICES",
      "AGENT USERNAME": "JDL00901",
      "ADDRESS": "UNN SHOP AT MATAHEKO",
      "Location": "NEAR AFIENTA TOLL BOOTH",
      "GPS COORDINATES": "5.7838760,-8.3366400",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2567,
      "AGENT BUSINESS NAME": "PRVSUB04603",
      "AGENT USERNAME": "PERP ROYALE ",
      "ADDRESS": "SAKAMAN ",
      "Location": "OPPOSITE DELA BUS STOP ",
      "GPS COORDINATES": "5.5703660, -0.2712260",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2568,
      "AGENT BUSINESS NAME": "MAXIPRO INVESTMENT LIMITED",
      "AGENT USERNAME": "MILSUB02801",
      "ADDRESS": "UNN SHOP AT ASHAIMAN NEW YORK",
      "Location": "NEAR NEW YORK POLICE STATION",
      "GPS COORDINATES": "5.7432610,-0.0540360",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2569,
      "AGENT BUSINESS NAME": "MAXIPRO INVESTMENT LIMITED",
      "AGENT USERNAME": "MILSUB02802",
      "ADDRESS": "UNN SHOP AT KATAMANSO",
      "Location": "NEAR RESTITUTED LIFE CHAPEL INTERNATIONAL",
      "GPS COORDINATES": "5.746267,-0.096483",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2570,
      "AGENT BUSINESS NAME": "METLYN ENTERPRISE",
      "AGENT USERNAME": "MEN02801",
      "ADDRESS": "HOUSE NO 108, GOLF CITY",
      "Location": "NEAR POLY TANK BUS STOP",
      "GPS COORDINATES": "5.720223,-0.0029030",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2571,
      "AGENT BUSINESS NAME": "FREBERYMIX ENTERPRISE",
      "AGENT USERNAME": "FEN02801",
      "ADDRESS": "HSE NO ZA/22 DODOWA",
      "Location": "NEAR SHAI RURAL BANK",
      "GPS COORDINATES": "5.8830850,-0.0952720",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2572,
      "AGENT BUSINESS NAME": "ONE SIDE JALLO POWER VENTURES ",
      "AGENT USERNAME": "OSV02801",
      "ADDRESS": "UNN SHOP AT AFIENYA",
      "Location": "NEAR THE LORRY STATION",
      "GPS COORDINATES": "5.7931510.0027850",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2573,
      "AGENT BUSINESS NAME": "A M C MODIC VENTURES ",
      "AGENT USERNAME": "AMV02801",
      "ADDRESS": "UNN SHOP AT AFIENYA",
      "Location": "NEAR THE MAIN STATION",
      "GPS COORDINATES": "5.800038,-0.0051190",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2574,
      "AGENT BUSINESS NAME": "STAR OF DAVID SODAV VENTURES",
      "AGENT USERNAME": "SDS02801",
      "ADDRESS": "UNN SHOP AT AFIENYA ",
      "Location": "OPPOSITE THE MOSQUE",
      "GPS COORDINATES": "5.802858,-0.003351",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2575,
      "AGENT BUSINESS NAME": "BLUE-ZONE ALUMINIUM VENTURES",
      "AGENT USERNAME": "BZA02801",
      "ADDRESS": "UNN SHOP AT AFIENYA",
      "Location": "NEAR AFIENYA TOLL BOOTH",
      "GPS COORDINATES": "5.7864190,-0.0013830",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2576,
      "AGENT BUSINESS NAME": "GABBY INTEGRITY VENTURES",
      "AGENT USERNAME": "GIV02801",
      "ADDRESS": "UNN SHOP AT MATAHEKO ABLEKUMA",
      "Location": "OPPOSITE CALVARY PRESBY CHURCH",
      "GPS COORDINATES": "5.7843530,-0.0014100",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2577,
      "AGENT BUSINESS NAME": "MATTDARK EAGLE VENTURES",
      "AGENT USERNAME": "MEV02801",
      "ADDRESS": "HSE NO GB-052-2900 ASHAIMAN LEBANON",
      "Location": "OPPOSITE JIREH INT. SCHOOL",
      "GPS COORDINATES": "5.7056240,-0.0470990",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2578,
      "AGENT BUSINESS NAME": "OBENG TECH GAINT VENTURES ",
      "AGENT USERNAME": "OTV02801",
      "ADDRESS": "HSE NO SK-A-181, ASHAIMAN ROMAN DOWN",
      "Location": "NEAR OKANTA MEMORIAL CLINIC",
      "GPS COORDINATES": "5.686929,-0.039532",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2579,
      "AGENT BUSINESS NAME": "ELI RANSOM ENTERPRISE",
      "AGENT USERNAME": "ERESUB02801",
      "ADDRESS": "UNN SHOP AT MATAHEKO 1ST JUNCTION",
      "Location": "OPPOSITE PRIME ACADEMY",
      "GPS COORDINATES": "5.7635910,-0.0063870",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2580,
      "AGENT BUSINESS NAME": "ELI RANSOM ENTERPRISE",
      "AGENT USERNAME": "ERESUB02802",
      "ADDRESS": "UNN SHOP AT KAKASUNANKA NO ONE",
      "Location": "NEAR THE MAIN STATION",
      "GPS COORDINATES": "5.7385490,-0.0169780",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2581,
      "AGENT BUSINESS NAME": "GSK SQUARE VENTURES ",
      "AGENT USERNAME": "GSV02801",
      "ADDRESS": "UNN SHOP AT SANCO 4",
      "Location": "NEAR SANCO 4 BUS STOP",
      "GPS COORDINATES": "50722815,-0.0126720",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2582,
      "AGENT BUSINESS NAME": "DIBRAIN DAANY ENTERPRISE",
      "AGENT USERNAME": "DDE02802",
      "ADDRESS": "UNN SHOP AT ASHAIMAN LEBANON",
      "Location": "OPPOSITE LEBANON POLICE STATION",
      "GPS COORDINATES": "5.698893,-0.0473100",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2583,
      "AGENT BUSINESS NAME": "TUFF- KAY VENTURES",
      "AGENT USERNAME": "TKV02801",
      "ADDRESS": "PLOT NUMBER 165 LEBANON ZONE 2",
      "Location": "NEAR JESUS CARES EDUCATION COMPLEX",
      "GPS COORDINATES": "5.7006730,-0.0517040",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2584,
      "AGENT BUSINESS NAME": "KEN-L ONE ENTERPRISE ",
      "AGENT USERNAME": "KOE02601",
      "ADDRESS": "NII BOI TOWN",
      "Location": "NEAR THE NII BIO STATION ",
      "GPS COORDINATES": "5.618768,0.242750",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2585,
      "AGENT BUSINESS NAME": "TERRIFIC AFRICNET ",
      "AGENT USERNAME": "TAF03801",
      "ADDRESS": "NII BOI",
      "Location": "NEAR ACCESS BANK",
      "GPS COORDINATES": "5.608672,0.242750",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2586,
      "AGENT BUSINESS NAME": "MEWISA ELOHIM ENTERPRISE ",
      "AGENT USERNAME": "MEESUB03801",
      "ADDRESS": "LAPAZ ",
      "Location": "NEAR PENTECOST SCHOOL ",
      "GPS COORDINATES": "5.608725,-0.246694",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2587,
      "AGENT BUSINESS NAME": "MEWISA ELOHIM ENTERPRISE ",
      "AGENT USERNAME": "MEESUB03802",
      "ADDRESS": "TESANO ",
      "Location": "NEAR JEHOVAH IS MY FRIEND ",
      "GPS COORDINATES": "5.609356,-0.232398",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2588,
      "AGENT BUSINESS NAME": "DAVIDICK CITY CONSULT",
      "AGENT USERNAME": "DCC03801",
      "ADDRESS": "FADAMA ",
      "Location": "NEAR DR. BERCLAY CHURCH ",
      "GPS COORDINATES": "5.601607,-0.246672",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2589,
      "AGENT BUSINESS NAME": "BEN-S LINK TRAVAL AND TOUR ",
      "AGENT USERNAME": "BLT02101",
      "ADDRESS": "AWOSHIE ",
      "Location": "NEAR THE STATION",
      "GPS COORDINATES": "5.587140,-0.278821",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2590,
      "AGENT BUSINESS NAME": "MARK'S TRUSTWORTHY VENTURES ",
      "AGENT USERNAME": "MTV02601",
      "ADDRESS": "CHANTAN 6 TO 6",
      "Location": "NEAR 6 TO 6 SPOT",
      "GPS COORDINATES": "5.615727,-0.255853",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2591,
      "AGENT BUSINESS NAME": "E.A ENAM VENTURES ",
      "AGENT USERNAME": "EAV02601",
      "ADDRESS": "TABORA ",
      "Location": "NEAR TABORA JUNCTION ",
      "GPS COORDINATES": "5.619295,-0.261529",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2592,
      "AGENT BUSINESS NAME": "THANK YOU SERVE PLUS",
      "AGENT USERNAME": "TYS02602",
      "ADDRESS": "CHANTAN ",
      "Location": "NEAR THE BLOCK FACTORY ",
      "GPS COORDINATES": "5.627034,-0.257499",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2593,
      "AGENT BUSINESS NAME": "STERLINANDMORE ",
      "AGENT USERNAME": "SAM03801",
      "ADDRESS": "ABEKA",
      "Location": "NEAR ABEKA MARKET ",
      "GPS COORDINATES": "5.598688,-0.240690",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2594,
      "AGENT BUSINESS NAME": "EVANS BAY ENTERPRISE ",
      "AGENT USERNAME": "EBE02601",
      "ADDRESS": "HIGH TENSION ",
      "Location": "NEAR ST. MICHAEL SCHOOL ",
      "GPS COORDINATES": "5.614778,-0.249981",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2595,
      "AGENT BUSINESS NAME": "WILLYJOY HOUSE OF BENZ ",
      "AGENT USERNAME": "WHB02601",
      "ADDRESS": "LAPAZ ",
      "Location": "NEAR TIGO OFFICE ",
      "GPS COORDINATES": "5.605895,-0.251471",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2596,
      "AGENT BUSINESS NAME": "VICRANI VENTURES ",
      "AGENT USERNAME": "VVE03801",
      "ADDRESS": "LOMNAVA",
      "Location": "NEAR THE NURSING SCHOOL ",
      "GPS COORDINATES": "5.633015,-0.278805",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2597,
      "AGENT BUSINESS NAME": "CONTEND FOR THE FAITH ENTERPRISE ",
      "AGENT USERNAME": "CFTSUB05101",
      "ADDRESS": "H/NO AN/B/117,AWOSHIE,",
      "Location": "NEAR APOSTLE SAFO SCHOOL",
      "GPS COORDINATES": "5.5911908,-0.2914937",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2598,
      "AGENT BUSINESS NAME": "SARFOA VENTURES ",
      "AGENT USERNAME": "SVE05101",
      "ADDRESS": "UNNUMBERED SHOP AT AWOSHIE ",
      "Location": "OPPOSITE VICTORY BIBLE CHURCH ",
      "GPS COORDINATES": "5.5843360,0.2748285",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2599,
      "AGENT BUSINESS NAME": "Lintos Panel Ventures ",
      "AGENT USERNAME": "LPV05101",
      "ADDRESS": "UNNUMBERED SHOP AT KWASHIEMAN ",
      "Location": "OPPOSITE VICTORY BIBLE CHURCH ",
      "GPS COORDINATES": "5.5844508,-0.2750820",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2600,
      "AGENT BUSINESS NAME": "COVLADY-U TOUCH VENTURES ",
      "AGENT USERNAME": "CTV05101",
      "ADDRESS": "UNNUMBERED SHOP AT ABLEKUMA OLEBU",
      "Location": "NEAR VICOLIS JUNCTION ",
      "GPS COORDINATES": "5.6451798, - 0.3105156",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2601,
      "AGENT BUSINESS NAME": "AIR-GOLD TRADING ENTERPRISE ",
      "AGENT USERNAME": "ATE05101",
      "ADDRESS": "UNNUMBERED SHOP AT ABLEKUMA-OLEBU ",
      "Location": "NEAR THE MOSQUE ",
      "GPS COORDINATES": "5.6449681,-0.3110474",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2602,
      "AGENT BUSINESS NAME": "AIR-GOLD TRADING ENTERPRISE ",
      "AGENT USERNAME": "ATE05101",
      "ADDRESS": "UNNUMBERED SHOP AT ABLEKUMA OLEBU",
      "Location": "NEAR THE MOSQUE ",
      "GPS COORDINATES": "5.6420256,-0.3121699",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2603,
      "AGENT BUSINESS NAME": "CL LINKS",
      "AGENT USERNAME": "CLL05101",
      "ADDRESS": "UNNUMBERED SHOP AT ANYAA MARKET ",
      "Location": "NEAR THE BUS STOP ",
      "GPS COORDINATES": "5.5990398,-0.2907002",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2604,
      "AGENT BUSINESS NAME": "DEN TANOR VENTURES ",
      "AGENT USERNAME": "DTV02601",
      "ADDRESS": "UNNUMBERED SHOP AT ANYAA LAST STOP ",
      "Location": "NEAR NAGHARA HOTEL",
      "GPS COORDINATES": "5.6083598,0.2972196",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2605,
      "AGENT BUSINESS NAME": "JOSCOM GROCERY & COLD STORE ",
      "AGENT USERNAME": "JGC05101",
      "ADDRESS": "UNNUMBERED HOUSE AT GBAWE ",
      "Location": "NEAR SAMALA CLINIC",
      "GPS COORDINATES": "5.5772285,-0.2989128",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2606,
      "AGENT BUSINESS NAME": "DISANTE CRYSTAL ENTERPRISE ",
      "AGENT USERNAME": "DCE05101",
      "ADDRESS": "UNNUMBERED SHOP AT AYIGBE TOWN ",
      "Location": "NEAR EBENEZER FUNERAL PARLOUR ",
      "GPS COORDINATES": "5.5506811,-0.3522116",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2607,
      "AGENT BUSINESS NAME": "DORDOE GLORY ENTERPRISE ",
      "AGENT USERNAME": "DGE05101",
      "ADDRESS": "UNNUMBERED SHOP AT OLEBU ABLEKUMA ",
      "Location": "NEAR THE OLEBU OSHUIMAN POLICE POST",
      "GPS COORDINATES": "5.6526683,-0.3060920",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2608,
      "AGENT BUSINESS NAME": "JULIMEX VENTURES ",
      "AGENT USERNAME": "JUV05101",
      "ADDRESS": "UNNUMBERED SHOP AT MANHEAN JUNCTION ",
      "Location": "NEAR MANHEAN JUNCTION ",
      "GPS COORDINATES": "5.6434319,-0.3445505",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2609,
      "AGENT BUSINESS NAME": "KANEL EXPERT ENTERPRISE ",
      "AGENT USERNAME": "KEX05101",
      "ADDRESS": "UNNUMBERED SHOP AT AFUAMAN PENTECOST JUNCTION ",
      "Location": "NEAR THE PENTECOST JUNCTION ",
      "GPS COORDINATES": "5.6345414,-0.3558021",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2610,
      "AGENT BUSINESS NAME": "SALVATION ARK ENTERPRISE ",
      "AGENT USERNAME": "SAE05101",
      "ADDRESS": "UNNUMBERED SHOP AT MANHEAN JUNCTION ",
      "Location": "NEAR MANHEAN JUNCTION ",
      "GPS COORDINATES": "5.6440035, - 0.3441968",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2611,
      "AGENT BUSINESS NAME": "GAE05101",
      "AGENT USERNAME": "G AMEYAW ELECTRICAL SHOP ",
      "ADDRESS": "UNNUMBERED SHOP AT MAHEAN",
      "Location": "NEAR KEMET HOSPITAL ",
      "GPS COORDINATES": "5.6514081,-0.3408716",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2612,
      "AGENT BUSINESS NAME": "IAG05101",
      "AGENT USERNAME": "IA DIVINE GRACE ENTERPRISE ",
      "ADDRESS": "UNNUMBERED SHOP AT MANHEAN ",
      "Location": "NEAR 44 JUNCTION, KEMET HOSPITAL",
      "GPS COORDINATES": "5.6514755,-0.3409591",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2613,
      "AGENT BUSINESS NAME": "BENEVOLENT LINKS",
      "AGENT USERNAME": "BKI02501",
      "ADDRESS": "UNNUMBERED SHOP AT MANHEAN ",
      "Location": "NEAR SALMA OIL FUEL STATION ",
      "GPS COORDINATES": "5.6569703,-0.3396029",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2614,
      "AGENT BUSINESS NAME": "CLIFFORD K. APPIAH ENTERPRISE ",
      "AGENT USERNAME": "CKE05101",
      "ADDRESS": "UNNUMBERED SHOP AT MANHEAN ",
      "Location": "OPPOSITE SALMA OIL FUEL STATION ",
      "GPS COORDINATES": "5.6563311,-0.3397601",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2615,
      "AGENT BUSINESS NAME": "PINESTHER ENTERPRISE ",
      "AGENT USERNAME": "PENSUB05101",
      "ADDRESS": "UNNUMBERED SHOP AT MANHEAN ",
      "Location": "NEAR TIHO POLE LAST STOP",
      "GPS COORDINATES": "5.659685,-0.339047",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2616,
      "AGENT BUSINESS NAME": "AKESIWAA L'OR VENTURES ",
      "AGENT USERNAME": "ALV02601",
      "ADDRESS": "UNNUMBERED SHOP AT MANHEAN ",
      "Location": "NEAR PARADISE JUNCTION ",
      "GPS COORDINATES": "5.6340709,-0.3267269",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2617,
      "AGENT BUSINESS NAME": "Anthaff Orbit Technology",
      "AGENT USERNAME": "AOTSUB40101",
      "ADDRESS": "Takoradi-Main Office",
      "Location": "Daavi Ama Special Chop Bar",
      "GPS COORDINATES": "4.895147,-1.763505",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2618,
      "AGENT BUSINESS NAME": "Anthaff Orbit Technology",
      "AGENT USERNAME": "AOTSUB40102",
      "ADDRESS": "Accra - Circle",
      "Location": "Calvary Baptist Church",
      "GPS COORDINATES": "5.567705,-0.213516",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2619,
      "AGENT BUSINESS NAME": "Anthaff Orbit Technology",
      "AGENT USERNAME": "AOTSUB40103",
      "ADDRESS": "Essiama",
      "Location": "Mtn Office",
      "GPS COORDINATES": "4.938489,-2.354461",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2620,
      "AGENT BUSINESS NAME": "Anthaff Orbit Technology",
      "AGENT USERNAME": "AOTSUB40104",
      "ADDRESS": "Aiyinase",
      "Location": "Market Road-Teacher God",
      "GPS COORDINATES": "5.044066,-2.472580",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2621,
      "AGENT BUSINESS NAME": "Anthaff Orbit Technology",
      "AGENT USERNAME": "AOTSUB40105",
      "ADDRESS": "Bogoso",
      "Location": "Krobo Fitting Shop",
      "GPS COORDINATES": "5.556944,-1.997709",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2622,
      "AGENT BUSINESS NAME": "JESSI DAIS SPA CONSULT ",
      "AGENT USERNAME": "JDC05101",
      "ADDRESS": "UNNUMBERED SHOP AT GBAWE ",
      "Location": "NEAR VEROS PETROLEUM ",
      "GPS COORDINATES": "5.5771851,0.3064042",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2623,
      "AGENT BUSINESS NAME": "GREEN LIFE ELECTRICALS ",
      "AGENT USERNAME": "GLE04601",
      "ADDRESS": "UNNUMBERED SHOP AT GBAWE",
      "Location": "NEAR GRAVEL JUNCTION ",
      "GPS COORDINATES": "5.5776230,-0.3029873",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2624,
      "AGENT BUSINESS NAME": "ACKON ROYAL VENTURES ",
      "AGENT USERNAME": "ARV05101",
      "ADDRESS": "UNNUMBERED SHOP AT SCC",
      "Location": "NEAR THE BUS STOP",
      "GPS COORDINATES": "5.5472247,-0.3387104",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2625,
      "AGENT BUSINESS NAME": "RENCIA PLUS ENTERPRISE ",
      "AGENT USERNAME": "RPE05101",
      "ADDRESS": "UNNUMBERED SHOP AT NEW BORTIANOR ",
      "Location": "NEAR THE BUS STOP",
      "GPS COORDINATES": "5.5473709,-0.3479375",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2626,
      "AGENT BUSINESS NAME": "IMPACT PRAISE SUCCESS VENTURES ",
      "AGENT USERNAME": "IPS05101",
      "ADDRESS": "UNNUMBERED SHOP AT KASOA BRIGADE",
      "Location": "NEAR THE GALILEA TAXI RANK",
      "GPS COORDINATES": "5.541566,-0.390904",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2627,
      "AGENT BUSINESS NAME": "DORMENYO - AL ENTERPRISE ",
      "AGENT USERNAME": "DAE05101",
      "ADDRESS": "UNNUMBERED SHOP AT ABLEKUMA ",
      "Location": "OPPOSITE WINNERS CHAPEL",
      "GPS COORDINATES": "5.6274912,-0.3086371",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2628,
      "AGENT BUSINESS NAME": "STRESSLESS MOMENT ENTERPRISE ",
      "AGENT USERNAME": "SME05101",
      "ADDRESS": "UNNUMBERED SHOP AT ABLEKUMA ",
      "Location": "NEAR GA RURAL BANK",
      "GPS COORDINATES": "5.6275933,-0.3115869",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2629,
      "AGENT BUSINESS NAME": "THE TERRITORY OF MONEY CENTRE ",
      "AGENT USERNAME": "TMC02601",
      "ADDRESS": "UNNUMBERED SHOP AT ABLEKUMA ",
      "Location": "OPPOSITE GA RURAL BANK ",
      "GPS COORDINATES": "5.6268799,-0.3111507",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2630,
      "AGENT BUSINESS NAME": "BIZMOJO ENTERPRISE ",
      "AGENT USERNAME": "BEN05102",
      "ADDRESS": "UNNUMBERED SHOP AT KOKROBITE ",
      "Location": "NEAR THE GAS FILLING STATION ",
      "GPS COORDINATES": "5.4998282,0.3687786",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2631,
      "AGENT BUSINESS NAME": "BESOBER ENTERPRISE ",
      "AGENT USERNAME": "BEN05102",
      "ADDRESS": "UNNUMBERED SHOP AT AYIGBE TOWN ",
      "Location": "NEAR THE DAM SITE",
      "GPS COORDINATES": "5.5641327,-0.3424142",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2632,
      "AGENT BUSINESS NAME": "PRISCILLA TETTEH VENTURES ",
      "AGENT USERNAME": "PTV05101",
      "ADDRESS": "UNNUMBERED SHOP AT ABLEKUMA ",
      "Location": "OPPOSITE KFC",
      "GPS COORDINATES": "5.6271572,-0.3138436",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2633,
      "AGENT BUSINESS NAME": "HA-JEEQ BENJI'S ",
      "AGENT USERNAME": "HJB05101",
      "ADDRESS": "UNNUMBERED HOUSE AT TETEGU ",
      "Location": "NEAR THE GAS FUEL STATION ",
      "GPS COORDINATES": "5.5332239,-0.3155890",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2634,
      "AGENT BUSINESS NAME": "GODBOAT VENTURES ",
      "AGENT USERNAME": "GBV05101",
      "ADDRESS": "UNNUMBERED SHOP AT ABLEKUMA ",
      "Location": "NEAR PENTECOST JUNCTION BUS STOP",
      "GPS COORDINATES": "5.6255933,-0.3060032",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2635,
      "AGENT BUSINESS NAME": " ALLINONE ENTERPRISE ",
      "AGENT USERNAME": "ALE05101",
      "ADDRESS": "UNNUMBERED SHOP AT TETEGU ",
      "Location": "NEAR THE BUS STOP",
      "GPS COORDINATES": "5.5539789,-0.3109324",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2636,
      "AGENT BUSINESS NAME": "CALYXTON ENTERPRISE ",
      "AGENT USERNAME": "CAE05101",
      "ADDRESS": "UNNUMBERED HOUSE AT WEIJA, RED TOP",
      "Location": "BEHIND WEST HILLS MALL",
      "GPS COORDINATES": "5.5364422,-0.3444647",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2637,
      "AGENT BUSINESS NAME": "CCM SERVICES",
      "AGENT USERNAME": "CSESUB04501",
      "ADDRESS": "AMASAMAN",
      "Location": "STADIUM AMASAMAN",
      "GPS COORDINATES": "5.7074605,-0.3124786",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2638,
      "AGENT BUSINESS NAME": "CCM SERVICES",
      "AGENT USERNAME": "CSESUB04502",
      "ADDRESS": "TAIFA",
      "Location": "BRYT TV ",
      "GPS COORDINATES": "5.6524148,-0.2479037",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2639,
      "AGENT BUSINESS NAME": "J.K OKOTA VENTURES",
      "AGENT USERNAME": "JKO03101",
      "ADDRESS": "AMASAMAN",
      "Location": "NEAR OBEYIEYIE MOSQUE",
      "GPS COORDINATES": "5.6997842,-0.323848",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2640,
      "AGENT BUSINESS NAME": "ALLEZINAHUM ENTERPRISE ",
      "AGENT USERNAME": "ALE03801",
      "ADDRESS": "UNNUMBERED HOUSE AT ABLEKUMA JOMA",
      "Location": "NEAR JOMA JERUSALEM SCHOOL",
      "GPS COORDINATES": "5.623533,-0.339553",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2641,
      "AGENT BUSINESS NAME": "ABBA ESTATE SURVEYING AND VALUATION CONSULT",
      "AGENT USERNAME": "AEV03101",
      "ADDRESS": "AMASAMAN POBIMAN",
      "Location": "NEAR TOLL BOOTH",
      "GPS COORDINATES": "54403.11849.6",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2642,
      "AGENT BUSINESS NAME": "DANPRIX ENTERPRSIE",
      "AGENT USERNAME": "DPRSUB03101",
      "ADDRESS": "KISSEMAN",
      "Location": "CLOSE TO KOFORIDUA HOUSE",
      "GPS COORDINATES": "5.643683,-0.224081",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2643,
      "AGENT BUSINESS NAME": "DANPRIX ENTERPRISE",
      "AGENT USERNAME": "DPRSUB03102",
      "ADDRESS": "KISSEMAN",
      "Location": "NEAR PARAKU ESTATE",
      "GPS COORDINATES": "5.643684,-0.224088",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2644,
      "AGENT BUSINESS NAME": "AIRYRAM DYAMOND ENTERPRISE ",
      "AGENT USERNAME": "ADE03801",
      "ADDRESS": "UNNUMBERED SHOP AT ABLEKUMA JOMA",
      "Location": "NEAR JOMA MARKET",
      "GPS COORDINATES": "5.619757,-0.337702",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2645,
      "AGENT BUSINESS NAME": "E.N IT IS WELL VENTURES ",
      "AGENT USERNAME": "ENW05101",
      "ADDRESS": "UNNUMBERED SHOP AT ABLEKUMA JOMA JUNCTION ",
      "Location": "NEAR JOMA JUNCTION ",
      "GPS COORDINATES": "5.6271772,-0.3241963",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2646,
      "AGENT BUSINESS NAME": "JUANHEPS ENTERPRISE ",
      "AGENT USERNAME": "JENSUB05101",
      "ADDRESS": "UNNUMBERED HOUSE AT NEW GBAWE",
      "Location": "NEAR THE SHELL FUEL STATION ",
      "GPS COORDINATES": "5.5775184,-0.2929546",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2647,
      "AGENT BUSINESS NAME": "JUANHEPS ENTERPRISE ",
      "AGENT USERNAME": "JENSUB05102",
      "ADDRESS": "UNNUMBERED SHOP AT GBAWE",
      "Location": "OPPOSITE SERWAA'S KITCHEN ",
      "GPS COORDINATES": "5.5770549,-0.2958694",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2648,
      "AGENT BUSINESS NAME": "PERFECT OSBIE VENTURES ",
      "AGENT USERNAME": "POV04601",
      "ADDRESS": "UNNUMBERED SHOP AT GBAWE BULLEMIN",
      "Location": "NEAR WAAKYE JUNCTION",
      "GPS COORDINATES": "5.581180,-0.317487",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2649,
      "AGENT BUSINESS NAME": "NASMAS ENTERPRISE ",
      "AGENT USERNAME": "NMESUB04402",
      "ADDRESS": "UNNUMBERED SHOP AT GBAWE BULLEMIN",
      "Location": "NEAR BULLEMIN TAXI RANK",
      "GPS COORDINATES": "5.5816892,-0.3200509",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2650,
      "AGENT BUSINESS NAME": "LIPEN",
      "AGENT USERNAME": "LIP05101",
      "ADDRESS": "UNNUMBERED HOUSE AT GBAWE TOP BASE",
      "Location": "NEAR ANSONG SCHOOL, CHURCH OF CHRIST JUNCTION ",
      "GPS COORDINATES": "5.5690814,-0.3124898",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2651,
      "AGENT BUSINESS NAME": "AS MULTIMEDIA AND EVENT CONSULT ",
      "AGENT USERNAME": "AME03201",
      "ADDRESS": "UNNUMBERED SHOP AT WEIJA ",
      "Location": "NEAR THE WEIJA/GBAWE HIGH DISTRICT COURT ",
      "GPS COORDINATES": "5.5575625,-0.3072839",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2652,
      "AGENT BUSINESS NAME": "Anthaff Orbit Technology",
      "AGENT USERNAME": "AOTSUB40105",
      "ADDRESS": "Bogoso",
      "Location": "Krobo Fitting Shop",
      "GPS COORDINATES": "5.570273,-2.008891",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2653,
      "AGENT BUSINESS NAME": "Anthaff Orbit Technology",
      "AGENT USERNAME": "AOTSUB40106",
      "ADDRESS": "Cape Coast",
      "Location": "Former ADB Bank-Ntsin Road",
      "GPS COORDINATES": "5.214714,-1.060357",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2654,
      "AGENT BUSINESS NAME": "Anthaff Orbit Technology",
      "AGENT USERNAME": "AOTSUB40107",
      "ADDRESS": "Tarkwa-Market circle ",
      "Location": "Africana Drug Store",
      "GPS COORDINATES": "5.298781,-1.990250",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2655,
      "AGENT BUSINESS NAME": "ENVY NO MAN TELEMERCH ",
      "AGENT USERNAME": "ENM01801",
      "ADDRESS": "UNNUMBERED SHOP ADENTA WASHING BAY",
      "Location": "NEAR PUMA FILLING STATION",
      "GPS COORDINATES": "5.715020-0.166794",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2656,
      "AGENT BUSINESS NAME": "Crispat Installation",
      "AGENT USERNAME": "CINSUB02801",
      "ADDRESS": "Ashaiman-Lebanon",
      "Location": "Christ Apostolic Church International",
      "GPS COORDINATES": "5.689682,-0.047400",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2657,
      "AGENT BUSINESS NAME": "LOLONYO MARISCA VENTURES",
      "AGENT USERNAME": "LMV04701",
      "ADDRESS": "UNNUMBERED SHOP AYIMENSAH",
      "Location": "NEAR ZANZIBA RESTAURANT ",
      "GPS COORDINATES": "5.783925-0.179410",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2658,
      "AGENT BUSINESS NAME": "LEADS GENERAL SERVICES",
      "AGENT USERNAME": "LGS01501",
      "ADDRESS": "UNNUMBERED SHOP HAATSO PAPAO",
      "Location": "BEHIND ECOBANK GHANA",
      "GPS COORDINATES": "5.6672449-0.199031",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2659,
      "AGENT BUSINESS NAME": "GGM LUVMIC ENTERPRISE",
      "AGENT USERNAME": "GLE01801",
      "ADDRESS": "UNNUMBERED SHOP AMRAHIA, ADENTA ",
      "Location": "NEAR BARON DISTILLERY",
      "GPS COORDINATES": "5.7620125-0.1447031",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2660,
      "AGENT BUSINESS NAME": "MR S.A.A. ENTERPRISE ",
      "AGENT USERNAME": "MSE01501",
      "ADDRESS": "UNNUMBERED SHOP WEST LEGON",
      "Location": "NEAR KINGS COURT HOSTEL",
      "GPS COORDINATES": "5.645927-0.207041",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2661,
      "AGENT BUSINESS NAME": "Crispat Installation",
      "AGENT USERNAME": "CINSUB02802",
      "ADDRESS": "Ashaiaman-Lebanon",
      "Location": "Second Step-PCG Congregation",
      "GPS COORDINATES": "5.699908,-0.051293",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2662,
      "AGENT BUSINESS NAME": "NIIAPP TA VENTURES",
      "AGENT USERNAME": "NTV04701",
      "ADDRESS": "UNNUMBERED SHOP ASHALEY BOTWE",
      "Location": "OPPOSITE AMERICAN PREMIUM MALL",
      "GPS COORDINATES": "5.682614-0.129818",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2663,
      "AGENT BUSINESS NAME": "Goodnews Technosat",
      "AGENT USERNAME": "GTE01001",
      "ADDRESS": "Spintex ",
      "Location": "Shell Junction Bus Stop",
      "GPS COORDINATES": "5.640831,-0.108711",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2664,
      "AGENT BUSINESS NAME": "OKYERE@DERICK VENTURES",
      "AGENT USERNAME": "ODVSUB04701",
      "ADDRESS": "UNNUMBERED SHOP LEGON, UNIVERSITY OF GHANA",
      "Location": "VOLTA HALL CAR PARK",
      "GPS COORDINATES": "5.651791-0.189279",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2665,
      "AGENT BUSINESS NAME": "Insamen Company Limited",
      "AGENT USERNAME": "ICL05001",
      "ADDRESS": "Tema Com 8",
      "Location": "Shell Filling Station",
      "GPS COORDINATES": "5.668045,-0.008605",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2666,
      "AGENT BUSINESS NAME": "VICTORY REDEEM VENTURES",
      "AGENT USERNAME": "VRV01801",
      "ADDRESS": "UNNUMBERED SHOP AMRAHIA ",
      "Location": "NEAR SOJAMAN PLAZA",
      "GPS COORDINATES": "5.5836672-0.2097152",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2667,
      "AGENT BUSINESS NAME": "Proactive Measure",
      "AGENT USERNAME": "PRM12301",
      "ADDRESS": "Dansoman Hansonic",
      "Location": "Shell Filling Station-KFC",
      "GPS COORDINATES": "5.570934,-0.254176",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2668,
      "AGENT BUSINESS NAME": "GRACE SOUL ENTERPRISE",
      "AGENT USERNAME": "GSE01801",
      "ADDRESS": "UNNUMBERED SHOP AMRAHIA ",
      "Location": "NEAR REGAL GOSPEL CHURCH",
      "GPS COORDINATES": "5.774505-0.144706",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2669,
      "AGENT BUSINESS NAME": "JUDKING",
      "AGENT USERNAME": "JUDSUB03402",
      "ADDRESS": "UNNUMBERED SHOP MADINA MARKET",
      "Location": "INSIDE MADINA MARKET, NEAR THE BUTCHERY",
      "GPS COORDINATES": "5.678933-0.169085",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2670,
      "AGENT BUSINESS NAME": "FULLY HEAVEN ENTERPERISE ",
      "AGENT USERNAME": "FHE04701",
      "ADDRESS": "UNNUMBERED SHOP MADINA REDCO FLATS",
      "Location": "NEAR THE FIRE SERVICE STATION",
      "GPS COORDINATES": "5.682491-0.172209",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2671,
      "AGENT BUSINESS NAME": "GODNUEL ENTERPISE ",
      "AGENT USERNAME": "GEN04701",
      "ADDRESS": "UNNUMBERED SHOP MADINA",
      "Location": "INSIDE MADINA MARKET BEHIND FIRE SERVICE STATION",
      "GPS COORDINATES": "5.682109-0.172620",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2672,
      "AGENT BUSINESS NAME": "Clementa-Palachi Enterprise",
      "AGENT USERNAME": "CPE03801",
      "ADDRESS": "Abeka-Lapaz",
      "Location": "GPRTU Office",
      "GPS COORDINATES": "5.608417,-0.247411",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2673,
      "AGENT BUSINESS NAME": "RALPHJANNI ENTERPISE ",
      "AGENT USERNAME": "RENSUB03401",
      "ADDRESS": "UNNUMBERED SHOP MADINA MARKET",
      "Location": "NEAR FIDELITY BANK, MADINA MARKET BRANCH",
      "GPS COORDINATES": "5.6786803-0.1696653",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2674,
      "AGENT BUSINESS NAME": "NASAD ZEI ENTERPISE ",
      "AGENT USERNAME": "NZE03401",
      "ADDRESS": "UNNUMBERED SHOP TEIMAN",
      "Location": "NEAR BLOOM MART",
      "GPS COORDINATES": "5.747912-0.188224",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2675,
      "AGENT BUSINESS NAME": "Appivan Supermarket",
      "AGENT USERNAME": "AEN30301",
      "ADDRESS": "Cape Coast-Abura Academy Road",
      "Location": "Abura Market",
      "GPS COORDINATES": "5.114671,-1.258628",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2676,
      "AGENT BUSINESS NAME": "Penta Tony Enterprise",
      "AGENT USERNAME": "PTESUB05101",
      "ADDRESS": "New Takoradi,Takoradi",
      "Location": "A.A Mensah",
      "GPS COORDINATES": "4.904876,-1.742377",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2677,
      "AGENT BUSINESS NAME": "RITTY-KAF ENTERPRISE ",
      "AGENT USERNAME": "RKE05201",
      "ADDRESS": "HNO CAG/537, ASHALEY BOTWE OLD TOWN",
      "Location": "NEAR PRESBY CHURCH, OLD TOWN",
      "GPS COORDINATES": "5.685214-0.132319",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2678,
      "AGENT BUSINESS NAME": "Penta Tony Enterprise",
      "AGENT USERNAME": "PTESUB05102",
      "ADDRESS": "Twifo Praso- Cape Coast",
      "Location": "Praso Station",
      "GPS COORDINATES": "5.600522,-1.536447",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2679,
      "AGENT BUSINESS NAME": "ASAGIMI J ENT",
      "AGENT USERNAME": "AJE01801",
      "ADDRESS": "UNNUMBERED SHOP PANTANG ABOKOBI ",
      "Location": "NEAR YAKASIM ESTATES",
      "GPS COORDINATES": "5.729110, -0.193542",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2680,
      "AGENT BUSINESS NAME": "Penta Tony Enterprise",
      "AGENT USERNAME": "PTESUB05103",
      "ADDRESS": "Asankragua,Tarkwa",
      "Location": "Christ Apostolic Church",
      "GPS COORDINATES": "5.325785,-1.981603",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2681,
      "AGENT BUSINESS NAME": "ROYAL DIASA ENT",
      "AGENT USERNAME": "RDE01201",
      "ADDRESS": "PLOT NO 42, 2ND DZORMAN ADJEI LINK, WEST TRASACO",
      "Location": "NEAR ZOOM LION MOSQUE, ",
      "GPS COORDINATES": "5.672674-0.115463",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2682,
      "AGENT BUSINESS NAME": "VEGAS 2020",
      "AGENT USERNAME": "VEG01901",
      "ADDRESS": "UNNUMBERED SHOP ASHALEY BOTWE OLD TOWN",
      "Location": "NEAR VEGAS 2020 CAR WASH",
      "GPS COORDINATES": "5.684514-0.136962",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2683,
      "AGENT BUSINESS NAME": "Adaf Ventures",
      "AGENT USERNAME": "AVESUB30201",
      "ADDRESS": "Winnesec Road,Winneba",
      "Location": "Winnesec School",
      "GPS COORDINATES": "5.356141,-0.637093",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2684,
      "AGENT BUSINESS NAME": "Adaf Ventures",
      "AGENT USERNAME": "AVESUB30202",
      "ADDRESS": "Winneba Township,Winneba",
      "Location": "Windy Lodge",
      "GPS COORDINATES": "5.335479,-0.670490",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2685,
      "AGENT BUSINESS NAME": "ZEEMED TECHNOLOGIES",
      "AGENT USERNAME": "ZTE02901",
      "ADDRESS": "UNNUMBERED SHOP OYARIFA SCHOOL JUNCTION",
      "Location": "OPPOSITE SPECIAL ICE ",
      "GPS COORDINATES": "5.765372-0.180068",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2686,
      "AGENT BUSINESS NAME": "360 Technologies",
      "AGENT USERNAME": "TECSUB30201",
      "ADDRESS": "Pedu,Cape Coast",
      "Location": "Pedu Traffic Light",
      "GPS COORDINATES": "5.122845,-1.274140",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2687,
      "AGENT BUSINESS NAME": "KLORLANYE ENTERPRISE",
      "AGENT USERNAME": "KEN04701",
      "ADDRESS": "UNNUMBERED SHOP MADINA WASHINGTON",
      "Location": "NEAR THE ASTROSTURF",
      "GPS COORDINATES": "5.677457-0.181284",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2688,
      "AGENT BUSINESS NAME": "ATAURO DOT V",
      "AGENT USERNAME": "ADV01501",
      "ADDRESS": "UNNUMBERED SHOP ABOKOBI",
      "Location": "NEAR GOIL FILLING STATION",
      "GPS COORDINATES": "5.741305-0.197398",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2689,
      "AGENT BUSINESS NAME": "360 Technologies",
      "AGENT USERNAME": "TECSUB30202",
      "ADDRESS": "Interberton Junc. Cape Coast",
      "Location": "Iinterbeton hospital",
      "GPS COORDINATES": "5.132939,-1.248537",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2690,
      "AGENT BUSINESS NAME": "ANDREWS DANYO ENT",
      "AGENT USERNAME": "ADE01801",
      "ADDRESS": "UNNUMBERED SHOP ADENTA FRAFRAHA",
      "Location": "NEAR PAPA'S PIZZA",
      "GPS COORDINATES": "5.717891-0.164782",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2691,
      "AGENT BUSINESS NAME": "BFAG ENTERPRISE",
      "AGENT USERNAME": "BFE04701",
      "ADDRESS": "UNNUMBERED SHOP ADENTA RITZ JUNCTION",
      "Location": "NEAR TOTAL FILLING STATION",
      "GPS COORDINATES": "5.686131-0.168834",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2692,
      "AGENT BUSINESS NAME": "ALADO VENTURES",
      "AGENT USERNAME": "AVE01901",
      "ADDRESS": "UNNUMBERED SHOP AMANFRO",
      "Location": "NEAR AMANFRO CEMETERY",
      "GPS COORDINATES": "5.748932-0.146967",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2693,
      "AGENT BUSINESS NAME": "AMPONFI BA TEODORA ",
      "AGENT USERNAME": "ABT05201",
      "ADDRESS": "UNNUMERED SHOP LEGON, AKUAFO HALL",
      "Location": "NEAR AKUAFO HALL LIBRARY",
      "GPS COORDINATES": "5.6499393-0.1864712",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2694,
      "AGENT BUSINESS NAME": "RICHSEKOU BUSINESS CENTRE",
      "AGENT USERNAME": "RBC04701",
      "ADDRESS": "UNNUMBERED SHOP MADINA REDCO FLATS",
      "Location": "NEAR ASK AMEH, REDCO FLATS",
      "GPS COORDINATES": "5.682917-0.172240",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2695,
      "AGENT BUSINESS NAME": "KHAIRULLAH VENTURES",
      "AGENT USERNAME": "KVE05301",
      "ADDRESS": "UNNUMERED SHOP ASHALEY BOTWE",
      "Location": "NEAR UNIQUE CARE SCHOOL",
      "GPS COORDINATES": "5.686049-0.146605",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2696,
      "AGENT BUSINESS NAME": "Slickers Enterprise",
      "AGENT USERNAME": "SLE05101",
      "ADDRESS": "Laterbiokorshie,Accra",
      "Location": "Prudential Bank",
      "GPS COORDINATES": "5.556834,-0.239129",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2697,
      "AGENT BUSINESS NAME": "FAVOURED VARIETY BUSINESS",
      "AGENT USERNAME": "FVB01801",
      "ADDRESS": "UNNUMBERED SHOP ASHIYIE FULANI",
      "Location": "NEAR HOME AWAY FROM HOME",
      "GPS COORDINATES": "5.741855-0.141504",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2698,
      "AGENT BUSINESS NAME": "ADOM EMMJOY VENTURES",
      "AGENT USERNAME": "EMV01901",
      "ADDRESS": "UNNUMBERED SHOP DANFA, AYI MENSAH",
      "Location": "NEAR PRESBY CHURCH ",
      "GPS COORDINATES": "5.7894125-0.1611406",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2699,
      "AGENT BUSINESS NAME": "Samasa Bells Enterprise",
      "AGENT USERNAME": "SBSSUB30201",
      "ADDRESS": "Agona Abodom,Swedru",
      "Location": "Abodom Methodist Church",
      "GPS COORDINATES": "5.526472,-0.821717",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2700,
      "AGENT BUSINESS NAME": "Samasa Bells Enterprise",
      "AGENT USERNAME": "SBSSUB30202",
      "ADDRESS": "Agona Borbikuma,Swedru",
      "Location": "Aboso AME Zion Church",
      "GPS COORDINATES": "5.456382,-0.765068",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2701,
      "AGENT BUSINESS NAME": "First Innovation SuSu Enterprise",
      "AGENT USERNAME": "FIS30301",
      "ADDRESS": "Ajumako Abrofoa",
      "Location": "Abrofoa School Junction",
      "GPS COORDINATES": "5.334076,-0.901464",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2702,
      "AGENT BUSINESS NAME": "Ju-Inch Enterprise",
      "AGENT USERNAME": "JIESUB30201",
      "ADDRESS": "Domenase Mankessim",
      "Location": "Marigold Film Production Ghana",
      "GPS COORDINATES": "5.346815,-1.090124",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2703,
      "AGENT BUSINESS NAME": "Ju-Inch Enterprise",
      "AGENT USERNAME": "JIESUB30202",
      "ADDRESS": "Biriwa,Mfantsiman",
      "Location": "Brirwa Methodist Junior High School",
      "GPS COORDINATES": "5.161771,-1,150684",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2704,
      "AGENT BUSINESS NAME": "Yeeniz Technique",
      "AGENT USERNAME": "YTESUB30201",
      "ADDRESS": "Kasoa-Opeikuma Junction",
      "Location": "ECG Bulk Supply Point",
      "GPS COORDINATES": "5.536784,-0.434816",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2705,
      "AGENT BUSINESS NAME": "Yeeniz Technique",
      "AGENT USERNAME": "YTESUB30202",
      "ADDRESS": "Opeikuma- Opposite YES School",
      "Location": "Opposite YES School",
      "GPS COORDINATES": "5.531929,-0.440715",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2706,
      "AGENT BUSINESS NAME": "Ikhlas Multi Satellite Ventures",
      "AGENT USERNAME": "IMSSUB30201",
      "ADDRESS": "Dunkwa-On-Offin",
      "Location": "Dunkwa-On-Offin Market",
      "GPS COORDINATES": "5.959707,-1.789242",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2707,
      "AGENT BUSINESS NAME": "Ikhlas Multi Satellite Ventures",
      "AGENT USERNAME": "IMSSUB30202",
      "ADDRESS": "Dunkwa-On-Offin -KyeKyere",
      "Location": "Teachers Co-Operative",
      "GPS COORDINATES": "5.964546,-1.777547",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2708,
      "AGENT BUSINESS NAME": "Ikhlas Multi Satellite Ventures",
      "AGENT USERNAME": "IMSSUB30203",
      "ADDRESS": "Dunkwa-On-Offin- Kumasi Station",
      "Location": "Kumasi Station",
      "GPS COORDINATES": "5.955132,-1.787911",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2709,
      "AGENT BUSINESS NAME": "Jedna Travel and Tour Company",
      "AGENT USERNAME": "JTA03801",
      "ADDRESS": "Star Oil,Lapaz Apenkwa",
      "Location": "Star Oil",
      "GPS COORDINATES": "5.603391,-0.239907",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2710,
      "AGENT BUSINESS NAME": "Ebenezer Unique Ventures",
      "AGENT USERNAME": "EUQSUB30201",
      "ADDRESS": "Dunkwa-On-Offin -Community Radio",
      "Location": "Community Radio",
      "GPS COORDINATES": "5.963484,-1.810282",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2711,
      "AGENT BUSINESS NAME": "Ebenezer Unique Ventures",
      "AGENT USERNAME": "EUQSUB30202",
      "ADDRESS": "Dunkwa-On-Offin -Ayanfuri",
      "Location": "Ayanfuri Market",
      "GPS COORDINATES": "5.962323,-1.898354",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2712,
      "AGENT BUSINESS NAME": "Banie Frempong Enterprise",
      "AGENT USERNAME": "BFESUB05101",
      "ADDRESS": "Ayigbe Town -New Bortianor",
      "Location": "Latex Form Show Room",
      "GPS COORDINATES": "5.542913,-0.348891",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2713,
      "AGENT BUSINESS NAME": "Banie Frempong Enterprise",
      "AGENT USERNAME": "BFESUB05102",
      "ADDRESS": "Kasoa Market",
      "Location": "Kasoa Market",
      "GPS COORDINATES": "5.576823,-0.447729",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2714,
      "AGENT BUSINESS NAME": "One Step Enterprise",
      "AGENT USERNAME": "ONE03201-SUB",
      "ADDRESS": "Kaneshie-Takoradi Station",
      "Location": "Takoradi Station",
      "GPS COORDINATES": "5.563889,-0.236679",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2715,
      "AGENT BUSINESS NAME": "One Step Enterprise",
      "AGENT USERNAME": "ONE03202-SUB",
      "ADDRESS": "Kaneshie-Taxi Rank",
      "Location": "Taxi Rank",
      "GPS COORDINATES": "5.565265,-0.234541",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2716,
      "AGENT BUSINESS NAME": "Turriba Awilla Ventures",
      "AGENT USERNAME": "TAV05101",
      "ADDRESS": "Osu Shell",
      "Location": "Osu Shell Fuel Station",
      "GPS COORDINATES": "5.558512,-0.181601",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2717,
      "AGENT BUSINESS NAME": "Stapont Enterprise Ltd",
      "AGENT USERNAME": "SELSUB05101",
      "ADDRESS": "Ashaley Botwi -School Junc",
      "Location": "Nii Sowa Cluster of Schools",
      "GPS COORDINATES": "5.674270,-0.126766",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2718,
      "AGENT BUSINESS NAME": "Stapont Enterprise Ltd",
      "AGENT USERNAME": "SELSUB05102",
      "ADDRESS": "Dome Kwabenya-Wonder Junc",
      "Location": "Ga East Municipal Hospital",
      "GPS COORDINATES": "5.668251,-0.240212",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2719,
      "AGENT BUSINESS NAME": "Stapont Enterprise Ltd",
      "AGENT USERNAME": "SELSUB05103",
      "ADDRESS": "Dansoman Police Station",
      "Location": "Goil Filling Station",
      "GPS COORDINATES": "5.542508,-0.264587",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2720,
      "AGENT BUSINESS NAME": "AYINESOMA enterprise ",
      "AGENT USERNAME": "AYI02001",
      "ADDRESS": "Unnumbered shop at 37",
      "Location": "Inside 37 station",
      "GPS COORDINATES": "(5.5888170, -0.1803200)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2721,
      "AGENT BUSINESS NAME": "MAKOMA SO ADEE MUSIC PRODUCTION AND TRADING ENTERPRISE ",
      "AGENT USERNAME": "MSA60101",
      "ADDRESS": "SUSUANSO ",
      "Location": "NEAR FAMILY CHAPEL CHURCH ",
      "GPS COORDINATES": "6°40'31.0'N 1°32'33.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2722,
      "AGENT BUSINESS NAME": "GEORGE THOMPSON VENTURES",
      "AGENT USERNAME": "GTV61101",
      "ADDRESS": "RACE COURSE ",
      "Location": "NEAR TAMALE STATION RACE COURSE ",
      "GPS COORDINATES": "6°70'53.0'N 1°63'53.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2723,
      "AGENT BUSINESS NAME": "TUMI WURA BUSINESS VENTURES",
      "AGENT USERNAME": "TWB20301",
      "ADDRESS": "AE35 AKROPONG",
      "Location": "INSIDE OKUAPEMAN SCHOOL",
      "GPS COORDINATES": "5.003-004-330001",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2724,
      "AGENT BUSINESS NAME": "EMMAFED ENTERPRISE",
      "AGENT USERNAME": "EEN20302",
      "ADDRESS": "AN 56/1 ABURI",
      "Location": "OPPOSITE ABURI PALACE",
      "GPS COORDINATES": "6.004-008-0012.003",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2725,
      "AGENT BUSINESS NAME": "YALTONALSHIWA AUTO PARTS ",
      "AGENT USERNAME": "YAP61101",
      "ADDRESS": "RACE COURSE ",
      "Location": "INSIDE THE RACE COURSE MARKET ",
      "GPS COORDINATES": "6°70'52.0'N 1°63'52.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2726,
      "AGENT BUSINESS NAME": "KOBI J. ENTERPRISE",
      "AGENT USERNAME": "KMV20301",
      "ADDRESS": "HOUSE NUMBER L472/2 KPONG",
      "Location": "OPPOSITE WATER WORKS",
      "GPS COORDINATES": "6.0048-003-22001",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2727,
      "AGENT BUSINESS NAME": "CISCOSAT IT SYSTEMS",
      "AGENT USERNAME": "CIS20301",
      "ADDRESS": "BUNGALOW NUMBER 1 MAMPONG",
      "Location": "MAMPONG PRESEC",
      "GPS COORDINATES": "5.004-003-0001",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2728,
      "AGENT BUSINESS NAME": "K-MOZEY VENTURES",
      "AGENT USERNAME": "KMV20301",
      "ADDRESS": "UNNUMBERED SHOP AT ATIMPOKU",
      "Location": "NEAR METHODIST SCHOOL",
      "GPS COORDINATES": "6.003-004-0001",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2729,
      "AGENT BUSINESS NAME": "SAY AND BEE VENTURES",
      "AGENT USERNAME": "SAB20301",
      "ADDRESS": "AC 51-ATIMPOKU",
      "Location": "NEAR ATIMPOKU METHODIST SCHOOL",
      "GPS COORDINATES": "6.0045-00123-001",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2730,
      "AGENT BUSINESS NAME": "EL-KABODHI ENTERPRISE",
      "AGENT USERNAME": "EKE20301",
      "ADDRESS": "HNO A1 MAMPONG",
      "Location": "OPPOSITE TETTEH QUARSHIE HOSPITAL",
      "GPS COORDINATES": "6.0045-003-220001",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2731,
      "AGENT BUSINESS NAME": "COUNTLESS GLORY ENTERPRISE",
      "AGENT USERNAME": "CGE20301",
      "ADDRESS": "UNNUMBERED SHOP AT OBOSOMASE",
      "Location": "NEAR ECG TRANSFOMRMER",
      "GPS COORDINATES": "5.0043-004-0001",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2732,
      "AGENT BUSINESS NAME": "ERICKUS VIBRANT VENTURES",
      "AGENT USERNAME": "EVVSUB20301",
      "ADDRESS": "HNO TW 20-TUTU",
      "Location": "OPPOSITE PRESBY CHURCH",
      "GPS COORDINATES": "5.004-003211-0056",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2733,
      "AGENT BUSINESS NAME": "ERICKUS VIBRANT VENTURES",
      "AGENT USERNAME": "EVVSUB20302",
      "ADDRESS": "UNNUMBERED SHOP AT TUTU",
      "Location": "NEAR TUTU MARKET",
      "GPS COORDINATES": "5.005-0001-001",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2734,
      "AGENT BUSINESS NAME": "ANTWI F-VENTURES",
      "AGENT USERNAME": "AFVSUB20101",
      "ADDRESS": "SHOP NUMBER 14-ASOKORE",
      "Location": "NEAR COMMUNITY CENTER",
      "GPS COORDINATES": "6.00430-33200-1111",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2735,
      "AGENT BUSINESS NAME": "GYE NYAME ENTERPRISE",
      "AGENT USERNAME": "GNE20301",
      "ADDRESS": "HOUSE NO E18-LARTEH",
      "Location": "OPPOSIE KUBEASE MARKET",
      "GPS COORDINATES": "5-004-33332-00123",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2736,
      "AGENT BUSINESS NAME": "RICHMONDEM PRIME ENTERPRISE",
      "AGENT USERNAME": "RPESUB20301",
      "ADDRESS": "UNNUMBERED SHOP AT KIBI",
      "Location": "KIBI TECHNICAL SCHOOL",
      "GPS COORDINATES": "6.160035-0.557400",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2737,
      "AGENT BUSINESS NAME": "RICHMONDEM PRIME ENTERPRISE",
      "AGENT USERNAME": "RPESUB20302",
      "ADDRESS": "HNO KB 103-KIBI",
      "Location": "NEAR KITCO",
      "GPS COORDINATES": "6.166897-0.555957",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2738,
      "AGENT BUSINESS NAME": "DADDY KWABOAD ENTERPRISE",
      "AGENT USERNAME": "DKE20301",
      "ADDRESS": "HNO 42/A KOFORIDUA",
      "Location": "NEAR KUMASI STATION",
      "GPS COORDINATES": "5.330-223-001-241",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2739,
      "AGENT BUSINESS NAME": "EMMABIS ENTERPRISE",
      "AGENT USERNAME": "EME20301",
      "ADDRESS": "AD/55",
      "Location": "NEAR CANADIAN HOTEL",
      "GPS COORDINATES": "6.069940-0.225877",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2740,
      "AGENT BUSINESS NAME": "CAPITANO PLUS ENTERPRISE ",
      "AGENT USERNAME": "CPE60101",
      "ADDRESS": "BOADI ",
      "Location": "NEAR BOADI PALACE ",
      "GPS COORDINATES": "6°40'31.0'N 1°32'33.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2741,
      "AGENT BUSINESS NAME": "Wilberforce O. 7 Ventures",
      "AGENT USERNAME": "WOV60701",
      "ADDRESS": "Duase ",
      "Location": "Near Catholic Church ",
      "GPS COORDINATES": "6.7314640, -1.5724930",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2742,
      "AGENT BUSINESS NAME": "Happymore Enterprise ",
      "AGENT USERNAME": "HVE61001",
      "ADDRESS": "Sepe Junction ",
      "Location": "Near the station ",
      "GPS COORDINATES": "6.7175° N, 1.5620° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2743,
      "AGENT BUSINESS NAME": "CCG-BAMAE ENTERPRISE*",
      "AGENT USERNAME": "CCG61001",
      "ADDRESS": "Sepe ",
      "Location": "Sepe Station",
      "GPS COORDINATES": "6.7175° N, 1.5620° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2744,
      "AGENT BUSINESS NAME": "ALVES PRIME VENTURES ",
      "AGENT USERNAME": "APV60701",
      "ADDRESS": "Parkoso",
      "Location": "Near the station ",
      "GPS COORDINATES": "6.72375,-1.54893",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2745,
      "AGENT BUSINESS NAME": "Ju rich electricals",
      "AGENT USERNAME": "JRE04401",
      "ADDRESS": "Lamptey mills ",
      "Location": "Near Baloon Hotel ",
      "GPS COORDINATES": "5.5758819, -0.4219941",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2746,
      "AGENT BUSINESS NAME": "Tikya Kwaku Printing and Multi Satellite",
      "AGENT USERNAME": "TKP61001",
      "ADDRESS": "PANKRONO",
      "Location": "ADJACENT PANKRONO CEMENTARY, CLOSER TO ATIMATIM JUNCTION",
      "GPS COORDINATES": "6°45'12.4'N11°36'14.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2747,
      "AGENT BUSINESS NAME": "Gremar Enterprise",
      "AGENT USERNAME": "GVE61002",
      "ADDRESS": "PANKRONO",
      "Location": "ADJACENT SALAFIA MOSQUE",
      "GPS COORDINATES": "6°45'17.6'N1°36'06.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2748,
      "AGENT BUSINESS NAME": "RASHAD ADAMS ENTERPRISE ",
      "AGENT USERNAME": "RAE60701",
      "ADDRESS": "Alabar",
      "Location": "Near Atwima Rural Bank",
      "GPS COORDINATES": "6.6991770, -1.6159070",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2749,
      "AGENT BUSINESS NAME": "Geo-Minks Ventures",
      "AGENT USERNAME": "GMV60301",
      "ADDRESS": "PANKRONO",
      "Location": "ADJACENT PANKRONO CEMETARY",
      "GPS COORDINATES": "6°47'02.8'N1°32'25.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2750,
      "AGENT BUSINESS NAME": "MERCY NHYIRA ENTERPRISE ",
      "AGENT USERNAME": "MNE40301",
      "ADDRESS": "BEACH ROAD ",
      "Location": "NEAR THE ECG OFFICE ",
      "GPS COORDINATES": "4.8993189,-1.7533677",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2751,
      "AGENT BUSINESS NAME": "PRISCILLA BOGNINI VENTURES ",
      "AGENT USERNAME": "PBV40601",
      "ADDRESS": "BUTUMAGYEBU ",
      "Location": "NEAR THE CHIEFS PALACE ",
      "GPS COORDINATES": "4.9481375,-1.7482520",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2752,
      "AGENT BUSINESS NAME": "IKE AK OPENWORLD VENTURES ",
      "AGENT USERNAME": "IAO40601",
      "ADDRESS": "NEW SITE ",
      "Location": "NEAR TTU ",
      "GPS COORDINATES": "4.9149416,-1.7603723",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2753,
      "AGENT BUSINESS NAME": "BEST CHANCE LINKS ",
      "AGENT USERNAME": "BCLSUB40601",
      "ADDRESS": "INCHABAN ",
      "Location": "NEAR THE ANONKORE BRIDGE ",
      "GPS COORDINATES": "4.9968375,-1.6803281",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2754,
      "AGENT BUSINESS NAME": "BEST CHANCE LINKS",
      "AGENT USERNAME": "BCLSUB40602",
      "ADDRESS": "INCHABAN ",
      "Location": "NEAR THE TOTAL FILLING STATION ",
      "GPS COORDINATES": "4.9764284,-1.6742491",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2755,
      "AGENT BUSINESS NAME": "MIMIKAYS COLLECTION ",
      "AGENT USERNAME": "MCO40601",
      "ADDRESS": "EFFIAKUMA ",
      "Location": "NEAR TTI SCHOOL ",
      "GPS COORDINATES": "5.069409,-1.657064",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2756,
      "AGENT BUSINESS NAME": "EDIKE-FORTUNE BUSINESS SERVICES ",
      "AGENT USERNAME": "EBS40601",
      "ADDRESS": "ANAJI ",
      "Location": "CLOSE TO JUPIZO PHARMACY ",
      "GPS COORDINATES": "4.9318125,-1.7789375",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2757,
      "AGENT BUSINESS NAME": "NYAME NHYIRA PRAH ENTERPRISE ",
      "AGENT USERNAME": "NNP40601",
      "ADDRESS": "KOJOKROM",
      "Location": "NEAR WESTERN GOSHEN INTERNATIONAL SCHOOL",
      "GPS COORDINATES": "4.966825,-1.7193890",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2758,
      "AGENT BUSINESS NAME": "BLESS TO BE BLESSING ",
      "AGENT USERNAME": "BTB40601",
      "ADDRESS": "EFFIAKUMA ",
      "Location": "NEAR MAFIA CHOP BAR ",
      "GPS COORDINATES": "4.926613,-1.766248",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2759,
      "AGENT BUSINESS NAME": "BRIGHT ETERNAL LIFE VENTURES ",
      "AGENT USERNAME": "BEL 40601.00",
      "ADDRESS": "NKROFUL ",
      "Location": "NEAR YALEX HOTEL ",
      "GPS COORDINATES": "4.952986,-1.748177",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2760,
      "AGENT BUSINESS NAME": "RICHARD AGANA VENTURES ",
      "AGENT USERNAME": "RAV40601",
      "ADDRESS": "EFFIA ",
      "Location": "NEAR ROYAL HOUSE CHAPEL ",
      "GPS COORDINATES": "4.928688,-1.759565",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2761,
      "AGENT BUSINESS NAME": "AFFULIN VENTURES ",
      "AGENT USERNAME": "AVE40301",
      "ADDRESS": "SEKONDI ",
      "Location": "CLOSE TO THE ZONGO MOSQUE ",
      "GPS COORDINATES": "4.9339906,-1.7167854",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2762,
      "AGENT BUSINESS NAME": "VERONICA ESSIEN ENTERPRISE ",
      "AGENT USERNAME": "VEE40601",
      "ADDRESS": "KOJOKROM ",
      "Location": "CLOSE TO MR. ESSIEN PARK ",
      "GPS COORDINATES": "4.9713875,-1.7267344",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2763,
      "AGENT BUSINESS NAME": "JOH-TECH ENTERPRISE ",
      "AGENT USERNAME": "JTE40601",
      "ADDRESS": "NKROFUL ",
      "Location": "NEAR ECLIPSE BAY RESTAURANT ",
      "GPS COORDINATES": "4.9516948,-1.7492851",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2764,
      "AGENT BUSINESS NAME": "SHABUTU ENTERPRISE ",
      "AGENT USERNAME": "SHE40601",
      "ADDRESS": "ASSAKAE ",
      "Location": "NEAR OBIRI LOTTERIES ",
      "GPS COORDINATES": "4.9228875,-1.7933281",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2765,
      "AGENT BUSINESS NAME": "ELTHUR BUSINESS LINC ",
      "AGENT USERNAME": "EBL40601",
      "ADDRESS": "KWESIMINTIM ",
      "Location": "NEAR THE LATEX FOAM DEPOT ",
      "GPS COORDINATES": "4.960345,-1.624582",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2766,
      "AGENT BUSINESS NAME": "NATDZYNS-KISSPEE BUSINESS LINKS ",
      "AGENT USERNAME": "NKB40601",
      "ADDRESS": "EFFIA ",
      "Location": "NEAR THE ROMAN CHURCH ",
      "GPS COORDINATES": "4.931635,-1.761291",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2767,
      "AGENT BUSINESS NAME": "Jessinda ODOI’s enterprise ",
      "AGENT USERNAME": "JOV04801",
      "ADDRESS": "Unnumbered shop at la apapa",
      "Location": "Near divine preparatory school ",
      "GPS COORDINATES": "(5.5677940, -0.1648170)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2768,
      "AGENT BUSINESS NAME": "Sirsan Ronnie enterprise ",
      "AGENT USERNAME": "SRE02001",
      "ADDRESS": "Unnumbered shop at la greencourt",
      "Location": "Behind fidelity bank",
      "GPS COORDINATES": "(5.5654130, -0.1458360)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2769,
      "AGENT BUSINESS NAME": "Latif Fuseini enterprise ",
      "AGENT USERNAME": "LFE00401",
      "ADDRESS": "Unnumbered shop at osu 5junction",
      "Location": "Opposite 5 junction",
      "GPS COORDINATES": "(5.5527010, -0.1843350)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2770,
      "AGENT BUSINESS NAME": "Bankizu Enterprise ",
      "AGENT USERNAME": "BEN00401",
      "ADDRESS": "Unnumbered shop at osu",
      "Location": "Near Asomdwe park",
      "GPS COORDINATES": "(5.5494600, -0.1893800)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2771,
      "AGENT BUSINESS NAME": "Prince Nimo 10 Ventures",
      "AGENT USERNAME": "PNV60502",
      "ADDRESS": "Sokoban ",
      "Location": "Near New Jerusalem Church ",
      "GPS COORDINATES": "6°37'20.5'N1°37'15.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2772,
      "AGENT BUSINESS NAME": "Collins Digital Ventures ",
      "AGENT USERNAME": "CDV60501",
      "ADDRESS": "Ampayoo",
      "Location": "Near Ampayoo Station ",
      "GPS COORDINATES": "6°36'59.4'N 1°37'23.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2773,
      "AGENT BUSINESS NAME": "Royal Kenaat Enterprise ",
      "AGENT USERNAME": "RKE60501",
      "ADDRESS": "Aboabo Kesse Kwaso",
      "Location": "Near Fishmu",
      "GPS COORDINATES": "6°35'56.0'N1°36'43.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2774,
      "AGENT BUSINESS NAME": "Wizii Apar Enterprise ",
      "AGENT USERNAME": "WAE60501",
      "ADDRESS": "Daban newsite ",
      "Location": "Near Agudie fast catering services ",
      "GPS COORDINATES": "6°38'08.7'N1°37 '31.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2775,
      "AGENT BUSINESS NAME": "MARGAGYEI ENTERPRISE ",
      "AGENT USERNAME": "MEN60501",
      "ADDRESS": "KAASE ",
      "Location": "NEAR SUNDA",
      "GPS COORDINATES": "6°39'12.3'N1°36'53.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2776,
      "AGENT BUSINESS NAME": "ELLASTAR ENTERPRISE ",
      "AGENT USERNAME": "ELESUB00301",
      "ADDRESS": " KORLE GONNO ",
      "Location": "NAROM JUNCTION ",
      "GPS COORDINATES": "5.5344130, -0.2260990",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2777,
      "AGENT BUSINESS NAME": "RUBY FASTLINK VENTURES  ",
      "AGENT USERNAME": "RFV12301",
      "ADDRESS": "KORLE BU ",
      "Location": "NEAR TAXI STATION ",
      "GPS COORDINATES": "5.5352125, -0.2312656",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2778,
      "AGENT BUSINESS NAME": "RICHMARYS D-JAN VENTURES",
      "AGENT USERNAME": "RDJ70501",
      "ADDRESS": "P. O BOX 26 BEREKUM",
      "Location": "OPPOSITE BEREKUM M/A SCHOOL",
      "GPS COORDINATES": "7.46117°N,2.58480°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2779,
      "AGENT BUSINESS NAME": "EL-DAN 2022 BUSINESS CENTRE",
      "AGENT USERNAME": "EBC70201",
      "ADDRESS": "P. O BOX 4",
      "Location": "ADJACENT VOICE OF DELIVERANCE CHURCH KYIRIBAAH",
      "GPS COORDINATES": "7.45164°N,2.58261°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2780,
      "AGENT BUSINESS NAME": "DONALDGLO VENTURES",
      "AGENT USERNAME": "DVE70201",
      "ADDRESS": "P.O BOX 21 BEREKUM",
      "Location": "OPPOSITE SAMFAK WASHING BAY",
      "GPS COORDINATES": "7,46202°N,2.59771°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2781,
      "AGENT BUSINESS NAME": "AUGUSTINE APPIAH 252 VENTURES",
      "AGENT USERNAME": "AAV70201",
      "ADDRESS": "P. O BOX 70 SAMPA",
      "Location": "OPPOSITE VODAFONE OFFICE BEREKUM",
      "GPS COORDINATES": "7°27'00.5'N2°35'03.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2782,
      "AGENT BUSINESS NAME": "LUCKY YENNUBE VENTURES",
      "AGENT USERNAME": "LYV70201",
      "ADDRESS": "HOUSE NUMBER H 38 NYAMEBEKYERE, P.O BOX 36 BEREKUM",
      "Location": "NEAR BEREKUM MAIN STATION",
      "GPS COORDINATES": "7.45092°N,2.58306°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2783,
      "AGENT BUSINESS NAME": "FIRST BRIGHT-AT PRESTIGE VENTURES",
      "AGENT USERNAME": "FBP70201",
      "ADDRESS": "P.O BOX 280 BEREKUM",
      "Location": "NEAR RAWLINGS PARK MARKET",
      "GPS COORDINATES": "7.44778°N,2.60646°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2784,
      "AGENT BUSINESS NAME": "SKIIDO YEB VENTURES",
      "AGENT USERNAME": "SYV70201",
      "ADDRESS": "P. O BOX 150 BEREKUM",
      "Location": "NEAR ESKOM PREPARATORY SCHOOL",
      "GPS COORDINATES": "7.46102°N,2.56986°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2785,
      "AGENT BUSINESS NAME": "FABIOSA EXERT",
      "AGENT USERNAME": "FEX70201",
      "ADDRESS": "P.O BOX 505 BEREKUM",
      "Location": "OPPOSITE NKORAMAN RURAL BANK",
      "GPS COORDINATES": "7.45266°N,2.58553°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2786,
      "AGENT BUSINESS NAME": "FELS-EMPORIUM",
      "AGENT USERNAME": "FEM70201",
      "ADDRESS": "P,O BOX 23 BEREKUM",
      "Location": "INSIDE BEREKUM CENTRAL MARKET",
      "GPS COORDINATES": "7.45207°N,2.57967°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2787,
      "AGENT BUSINESS NAME": "ADAM SALGO VENTURES",
      "AGENT USERNAME": "ASV70501",
      "ADDRESS": "P. O BOX 255 BEREKUM",
      "Location": "NEAR KATO LORRY STATION",
      "GPS COORDINATES": "7.42820°N,2.56657°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2788,
      "AGENT BUSINESS NAME": "BABSON PRINTING PRESS",
      "AGENT USERNAME": "BPPSUB70201",
      "ADDRESS": "P. O BOX 20 BEREKUM",
      "Location": "OPPOSITE PEHU BOOKSHOP",
      "GPS COORDINATES": "7.45108°N,2.58252°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2789,
      "AGENT BUSINESS NAME": "BABSON PRINTING PRESS",
      "AGENT USERNAME": "BPPSUB70202",
      "ADDRESS": "P. O BOX 20 BEREKUM",
      "Location": "BEHIND MULTI CREDIT UNION",
      "GPS COORDINATES": "7.45103°N,2.58372°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2790,
      "AGENT BUSINESS NAME": "GIFTY ANTWI 29 ENTERPRISE",
      "AGENT USERNAME": "GAESUB70201",
      "ADDRESS": "P. O BOX 119 BEREKUM",
      "Location": "ADJACENT GCB BANK BEREKUM",
      "GPS COORDINATES": "7.45084°N,2.58360°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2791,
      "AGENT BUSINESS NAME": "GIFTY ANTWI 29 ENTERPRISE",
      "AGENT USERNAME": "GAESUB70202",
      "ADDRESS": "P. O BOX 119 BEREKUM",
      "Location": "NEAR THE CHURCH OF PENTECOST KYIRIBAA",
      "GPS COORDINATES": "7.44938°N,2.56990°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2792,
      "AGENT BUSINESS NAME": "JOJO 83 VENTURES",
      "AGENT USERNAME": "JVE70201",
      "ADDRESS": "P. O BOX 132 BEREKUM",
      "Location": "NEAR GOLDEN CITY MARKET BEREKUM",
      "GPS COORDINATES": "7.45269°N,2.58413°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2793,
      "AGENT BUSINESS NAME": "T.I 240 VENTURES",
      "AGENT USERNAME": "TIV70201",
      "ADDRESS": "P. O BOX 3 BEREKUM",
      "Location": "NEAR TECHIMANTIA STATION",
      "GPS COORDINATES": "7.18489°N,2.02803°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2794,
      "AGENT BUSINESS NAME": "YARBUSCO ENTERPRISE",
      "AGENT USERNAME": "YEN70201",
      "ADDRESS": "P.O BOX 5 KENYASI",
      "Location": "BESIDE THE P.B.C SHED",
      "GPS COORDINATES": "7.02404°N,2.34133°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2795,
      "AGENT BUSINESS NAME": "E.Y.A JAKOBOAH ENTERPRISE",
      "AGENT USERNAME": "EJE70201",
      "ADDRESS": "P. O BOX 39 WAMFIE",
      "Location": "NEAR HAPPY HOSPITAL",
      "GPS COORDINATES": "7.450122-2.580792",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2796,
      "AGENT BUSINESS NAME": "AYUBA IBRAHIM 123 ENTERPRISE",
      "AGENT USERNAME": "AIE70201",
      "ADDRESS": "P. O BOX 147 BEREKUM",
      "Location": "NEAR PARADISE SCHOOL",
      "GPS COORDINATES": "7.464670,-2.572781",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2797,
      "AGENT BUSINESS NAME": "R J MANYA",
      "AGENT USERNAME": "RJM04401",
      "ADDRESS": "Bawjiase ",
      "Location": "Near Bawjiase Farms ",
      "GPS COORDINATES": "5.6561240, -0.5820830",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2798,
      "AGENT BUSINESS NAME": " Mkojo bay Enterprise",
      "AGENT USERNAME": "MBE04601",
      "ADDRESS": "KANESHIE ",
      "Location": "NEAR ST .THERESA SCHOOL ",
      "GPS COORDINATES": "5.5800080, -0.2276390",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2799,
      "AGENT BUSINESS NAME": "Nueloboat enterprise ",
      "AGENT USERNAME": "NEN02901",
      "ADDRESS": "Unnumbered shop at Burma camp",
      "Location": "Near supply bus stop ",
      "GPS COORDINATES": "(5.5892420, -0.1567630)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2800,
      "AGENT BUSINESS NAME": "TRACESTON ENTERPRISE ",
      "AGENT USERNAME": "TEN70201",
      "ADDRESS": "P. O BOX 148 BEREKUM",
      "Location": "NEAR BEREKUM GOLDEN CITY PARK",
      "GPS COORDINATES": "7°27’14.6'N 2°35’04.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2801,
      "AGENT BUSINESS NAME": "Sackeydor ventures ",
      "AGENT USERNAME": "SAV02201",
      "ADDRESS": "Unnumbered shop at dzorwulu ",
      "Location": "Opposite fidelity bank ",
      "GPS COORDINATES": "(5.6110140, -0.2040170)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2802,
      "AGENT BUSINESS NAME": "Senior man O enterprise ",
      "AGENT USERNAME": "SEM02201",
      "ADDRESS": "Unnumbered shop at dzorwulu ",
      "Location": "Near special ice company",
      "GPS COORDINATES": "(5.6120130, -0.1979500)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2803,
      "AGENT BUSINESS NAME": "Fodekwas ventures ",
      "AGENT USERNAME": "FVE02001",
      "ADDRESS": "Unnumbered shop at Teshie LEKMA road",
      "Location": "Near Paris villa",
      "GPS COORDINATES": "(5.6060020, -0.1224510)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2804,
      "AGENT BUSINESS NAME": "MIC MAVERICK VENTURES  ",
      "AGENT USERNAME": "MMV04401",
      "ADDRESS": "KASOA old market ",
      "Location": "Opposite Obaatampa Radio ",
      "GPS COORDINATES": "5.6561240, -0.5820830",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2805,
      "AGENT BUSINESS NAME": "Stareonuela Ventures ",
      "AGENT USERNAME": "SVE04401",
      "ADDRESS": "Ofaakor ",
      "Location": "Near Pentecost Church ",
      "GPS COORDINATES": "5.5606990, -0.4407000",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2806,
      "AGENT BUSINESS NAME": "Bless Sm Enterprise ",
      "AGENT USERNAME": "BSM02001",
      "ADDRESS": "Unnumbered shop at Teshie ",
      "Location": "Near St Barbara school ",
      "GPS COORDINATES": "(5.6035000, -0.1204570)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2807,
      "AGENT BUSINESS NAME": "Christiana Darko ventures ",
      "AGENT USERNAME": "CDV04801",
      "ADDRESS": "Unnumbered shop at teshie",
      "Location": "Opposite LEKMA bus stop ",
      "GPS COORDINATES": "(5.6035000, -0.1204570)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2808,
      "AGENT BUSINESS NAME": "EVANS NKRUMAH ASEM NTI VENTURES",
      "AGENT USERNAME": "ENA70201",
      "ADDRESS": "P.O BOX 1550 SUNYANI",
      "Location": "OPPOSITE THE KATO OLD MARKET",
      "GPS COORDINATES": "7°26'02.1'N2°33'53.4W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2809,
      "AGENT BUSINESS NAME": "ADADE PLUS VENTURES",
      "AGENT USERNAME": "APV70201",
      "ADDRESS": "P. O BOX 2 TECHIMANTIA",
      "Location": "INSIDE TECHIMANTIA LORRY STATION",
      "GPS COORDINATES": "7°11'04.9'N2°01'43.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2810,
      "AGENT BUSINESS NAME": "MICH-BEKOE ENTERPRISE",
      "AGENT USERNAME": "MBE70201",
      "ADDRESS": "P.O BOX 23 SEIKWA",
      "Location": "NEAR THE TRADITIONAL COUNCIL",
      "GPS COORDINATES": "7.72061°N,2.51764°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2811,
      "AGENT BUSINESS NAME": "MANUBEC EXTRA ENTERPRISE",
      "AGENT USERNAME": "MEE70201",
      "ADDRESS": "P.O BOX 51 BEREKUM",
      "Location": "NEAR THE TOTAL FILLING STATION",
      "GPS COORDINATES": "7°26'54.7'N2°34'59.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2812,
      "AGENT BUSINESS NAME": "EXPRESS STELLY VENTURES ",
      "AGENT USERNAME": "ESV01001",
      "ADDRESS": "OKAISHIE ",
      "Location": "NEAR FIDELITY BANK ",
      "GPS COORDINATES": "5.547576,-0.210143",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2813,
      "AGENT BUSINESS NAME": "E.B CONNERSTONE ",
      "AGENT USERNAME": "EBC12301",
      "ADDRESS": "SHUKURA ",
      "Location": "BESIDE NPP OFFICE ",
      "GPS COORDINATES": "5.5558320, -0.2470680",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2814,
      "AGENT BUSINESS NAME": "NIGEL KWARTENG VENTURES ",
      "AGENT USERNAME": "NKV03801",
      "ADDRESS": "LOMNAVA ",
      "Location": "NEAR LOMNAVA STATION ",
      "GPS COORDINATES": "5.635978,-0.278793",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2815,
      "AGENT BUSINESS NAME": "Space Up Multimedia ",
      "AGENT USERNAME": "SUM60101",
      "ADDRESS": "An unnumbered building Ayeduase Gate",
      "Location": "Near KNUST Campus",
      "GPS COORDINATES": "6°40'35.1''N 1°33'49.5''W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2816,
      "AGENT BUSINESS NAME": "Hagan Noi Enterprise ",
      "AGENT USERNAME": "HNE60101",
      "ADDRESS": "unnumbered Container, Kumasi Technical University ",
      "Location": "Near Kumasi Technical University ",
      "GPS COORDINATES": "6°41'26.6'N 1°36'38.0'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2817,
      "AGENT BUSINESS NAME": "Asafoatse Royal business center ",
      "AGENT USERNAME": "ARB60101",
      "ADDRESS": "Unnumbered Shop Aboabo",
      "Location": "Near the mosque ",
      "GPS COORDINATES": "6°41'35.9'N 1°35'57.6'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2818,
      "AGENT BUSINESS NAME": "Mother's Smile Enterprise ",
      "AGENT USERNAME": "MSE61101",
      "ADDRESS": "Central Market Roman Hill",
      "Location": "Near the Filling Station Roman Hill",
      "GPS COORDINATES": "6°41'47.7'N 1°36'59.4'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2819,
      "AGENT BUSINESS NAME": "Journal Square Ventures ",
      "AGENT USERNAME": "JSV60201",
      "ADDRESS": "Adum behind Oyerepa FM Storey Building",
      "Location": "Behind Oyerepa FM Storey Building ",
      "GPS COORDINATES": "6°41'36.2'N 1°37'22.2'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2820,
      "AGENT BUSINESS NAME": "ANITA AMPONSAH VENTURES",
      "AGENT USERNAME": "AAV70302",
      "ADDRESS": "TECHIMAN -MARKET, BONO EAST",
      "Location": "INSIDE TECHIMAN MAIN MARKET CENTER",
      "GPS COORDINATES": "7.583131,-1.941404",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2821,
      "AGENT BUSINESS NAME": "NELSON ANKOMAH VENTURES",
      "AGENT USERNAME": "NAV70301",
      "ADDRESS": "TECHIMAN-MARKET,BONO EAST",
      "Location": "INSIDE TECHIMAN MAIN MARKET",
      "GPS COORDINATES": "7.583208,-1.941757",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2822,
      "AGENT BUSINESS NAME": "ANKO VINE YARD SUSU SERVICE",
      "AGENT USERNAME": "AVS70301",
      "ADDRESS": "TECHIMAN-MARKET BONO EAST",
      "Location": "OPPOSITE THE SLAUGHTER HOUSE",
      "GPS COORDINATES": "7.5838510,-1.9420650",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2823,
      "AGENT BUSINESS NAME": "M.A.JAZZ VENTURES",
      "AGENT USERNAME": "MAJ70301",
      "ADDRESS": "TECHIMAN, DAGOMBA LINE,BONO EAST",
      "Location": "NEAR SANSAMA JUNCTION",
      "GPS COORDINATES": "7.589958,-1.935203",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2824,
      "AGENT BUSINESS NAME": "DOMINIC ANKOMAH VENTURES",
      "AGENT USERNAME": "DAE70301",
      "ADDRESS": "NEW LONGORO/BAMBOI, BONO EAST",
      "Location": "NEAR BAMBOI STATION",
      "GPS COORDINATES": "8.1579500,-2.0315190",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2825,
      "AGENT BUSINESS NAME": "EMMA TOUCH VENTURES",
      "AGENT USERNAME": "ETV70501",
      "ADDRESS": "P 47 penkwase",
      "Location": "OPPOSITE  ASSEMBLIES OF GOD CHURCH ",
      "GPS COORDINATES": "7.60. 54.6.2N 3. 00. 30 4'' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2826,
      "AGENT BUSINESS NAME": "ADECAS VENTURES ",
      "AGENT USERNAME": "AVE70102",
      "ADDRESS": "A 45 AREA 4",
      "Location": "OPPOSITE BRO NI  STORE ",
      "GPS COORDINATES": "7. 09. 35. 4N 2. 89. 54 3'' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2827,
      "AGENT BUSINESS NAME": "EMMANUEL KUSI 2020 BUSINESS CENTRE",
      "AGENT USERNAME": "EKB70101",
      "ADDRESS": "OPPOSITE DR. BERKO CLINIC ",
      "Location": "OPPOSITE DR. BERKO CLINIC ",
      "GPS COORDINATES": "7. 01. 30. 4N 3. 05 .32.2'' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2828,
      "AGENT BUSINESS NAME": "BETTER DIANA ENTERPRISE ",
      "AGENT USERNAME": "BDE70102",
      "ADDRESS": "BOX 20 , AREA 4",
      "Location": "ADJACENT PRESBY STORES",
      "GPS COORDINATES": "7. 06. 41. 4N 3. 07. 40. 3'' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2829,
      "AGENT BUSINESS NAME": "HOVAN PRIME ENTERPRISE",
      "AGENT USERNAME": "HPE70301",
      "ADDRESS": "NSAWKAW-TECHIMAN BONO EAST",
      "Location": "ADJACENT GCB, NSAWKAW BRANCH",
      "GPS COORDINATES": "BZ-0000-6511",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2830,
      "AGENT BUSINESS NAME": "SEBRAC ENTERPRISE ",
      "AGENT USERNAME": "SEN70501",
      "ADDRESS": "Box 243 FIAPRE",
      "Location": "OPPOSITE GETFUND HOSTEL ",
      "GPS COORDINATES": "7. 53. 23. 4N 1. 56. 60. 7'' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2831,
      "AGENT BUSINESS NAME": "SAM K. D ENTERPRISE ",
      "AGENT USERNAME": "SKD70101",
      "ADDRESS": "D 58 ABESIM",
      "Location": "OPPOSITE FIRE SERVICE ",
      "GPS COORDINATES": "7. 55. 23. 8. N 1. 56. 05. 9'' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2832,
      "AGENT BUSINESS NAME": "EMMANUEL AWUAH ENTERPRISE ",
      "AGENT USERNAME": "EAE70101",
      "ADDRESS": "BOX 543 SUNYANI",
      "Location": "OPPOSITE  STANBIC BANK ",
      "GPS COORDINATES": "7. 09. 40. 4'N 1. 03. 66. 3'' w",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2833,
      "AGENT BUSINESS NAME": "SNOW BIRD CONSULT",
      "AGENT USERNAME": "SCO60601",
      "ADDRESS": "Box 20 sunyani",
      "Location": "ADJACENT WEDESADAY ",
      "GPS COORDINATES": "7.36. 24. 9'N 2. 46. 07. 9' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2834,
      "AGENT BUSINESS NAME": "BRIGHTGOD PRESTIGE ENTERPRISE",
      "AGENT USERNAME": "BGPSUB70201",
      "ADDRESS": "UNNUMBERED STORE AT AMANGOASE, SEIKWA ROAD",
      "Location": "OPPOSITE ZONGO CLINIC",
      "GPS COORDINATES": "7.45376°N,2.58229°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2835,
      "AGENT BUSINESS NAME": "AHAD PRESTIGE VENTURES",
      "AGENT USERNAME": "AHP70201",
      "ADDRESS": "UNNUMBERED STORE AT BRENYEKWA SEIKWA ROAD",
      "Location": "OPPOSITE KIA STATION, BEREKUM",
      "GPS COORDINATES": "7.45634°N, 2.58217°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2836,
      "AGENT BUSINESS NAME": "GRACE NO NTI ",
      "AGENT USERNAME": "GNN70201",
      "ADDRESS": "UNNUMBERED CONTAINER AT JAMDEDE, SAMPA-BEREKUM(BENNEH ROAD) BEREKUM ",
      "Location": "NEAR JAMDEDE ROMAN CATHOLIC CHURCH ",
      "GPS COORDINATES": "7.45963°N, 2.59984°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2837,
      "AGENT BUSINESS NAME": "LEO AT NHYIRA ENTERPRISE",
      "AGENT USERNAME": "LNE70201",
      "ADDRESS": "UNNUMBERED CONTAINER AT JAMDEDE, SAMPA-BEREKUM(BENNEH ROAD) BEREKUM ",
      "Location": "OPPOSITE MEDCOURT HOSPITAL ",
      "GPS COORDINATES": "7.45537°N,2.59268°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2838,
      "AGENT BUSINESS NAME": "PERFECT COMPUTER CENTER",
      "AGENT USERNAME": "PCC70201",
      "ADDRESS": "UNNUMBERED CONTAINER AT JAMDEDE SAMPA - BEREKUM (BENNEH ROAD), BEREKUM",
      "Location": "NEAR WATER WORKS JUNCTION BEREKUM",
      "GPS COORDINATES": "7.45433°N, 2.5886°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2839,
      "AGENT BUSINESS NAME": "ROBVEE VENTURES ",
      "AGENT USERNAME": "RVVSUB70501",
      "ADDRESS": "P.O Box 50 SAMPA",
      "Location": "INSIDE SAMPA MARKET",
      "GPS COORDINATES": "7.94942°N, 2.69192°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2840,
      "AGENT BUSINESS NAME": "KHATILE ULTIMATE VENTURES",
      "AGENT USERNAME": "KUV70501",
      "ADDRESS": "UNNUMBERED STORE AT BONDOUKOU - SAMPA",
      "Location": "NEAR THE GOIL FILLING STATION",
      "GPS COORDINATES": "7.95055°N, 2.69643°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2841,
      "AGENT BUSINESS NAME": "IN HIM I TRUST ENTERPRISE ",
      "AGENT USERNAME": "IHT70501",
      "ADDRESS": "UNNUMBERED STORE AT SAMPA JAMERA - KABILE ROAD",
      "Location": "NEAR THE ROUNDABOUT ",
      "GPS COORDINATES": "7.95061°N, 2.69576°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2842,
      "AGENT BUSINESS NAME": "ADANE SHADRACK VENTURES",
      "AGENT USERNAME": "ASV70501",
      "ADDRESS": "UNNUMBERED CONTAINER AT SAMPA JAMERA - KABILE ROAD ",
      "Location": "NEAR SAMPA MARKET ",
      "GPS COORDINATES": "7.95029°N, 2.69558°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2843,
      "AGENT BUSINESS NAME": "GODPA ENTERPRISE ",
      "AGENT USERNAME": "GEN70201",
      "ADDRESS": "UNNUMBERED STORE AT SAMPA",
      "Location": "NEAR THE MARKET ",
      "GPS COORDINATES": "7.95121°N, 2.69126°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2844,
      "AGENT BUSINESS NAME": "JAYSEC BUSINESS CONSULT ",
      "AGENT USERNAME": "JBC70201",
      "ADDRESS": "UNNUMBERED PRESBY STORES AT BEREKUM",
      "Location": "OPPOSITE ABSA BANK BEREKUM",
      "GPS COORDINATES": "7.45041° N, 2.58435° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2845,
      "AGENT BUSINESS NAME": "ELVIS ASAM VENTURES ",
      "AGENT USERNAME": "EAV70201",
      "ADDRESS": "UNNUMBERED PRESBY STORES AT BEREKUM",
      "Location": "NEAR EMMANUEL PRESBY CHURCH BEREKUM",
      "GPS COORDINATES": "7.45005° N, 2.58486° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2846,
      "AGENT BUSINESS NAME": "SHAQMAN BUSINESS HUB",
      "AGENT USERNAME": "SBHSUB40102",
      "ADDRESS": "UNNUMBERED SHOP INSIDE KOJOKROM STATION TAKORADI",
      "Location": "BEHIND U 84 SUPERMARKET",
      "GPS COORDINATES": "4°53'54.8491'N 1°45'28.5916'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2847,
      "AGENT BUSINESS NAME": "THUNDER STORM VENTURES",
      "AGENT USERNAME": "TSV40101",
      "ADDRESS": "47 A/5 AHANTA ROAD, TAKORADI",
      "Location": "NEAR HISENSE OFFICE",
      "GPS COORDINATES": "4°53'51.2'N 1°45'45.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2848,
      "AGENT BUSINESS NAME": "IKE-IKE VENTURES",
      "AGENT USERNAME": "IISUB40103",
      "ADDRESS": "UNNUMBERED SHOPAT NEW TAKORADI ",
      "Location": "NEAR THE GOIL DEPOT",
      "GPS COORDINATES": "4°54'44.9'N 1°44'52.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2849,
      "AGENT BUSINESS NAME": "FLOTHOMY ENTERPRISE",
      "AGENT USERNAME": "FEN40101",
      "ADDRESS": "UNNUMBERED BUILDING AT AIYINASE",
      "Location": "AT THE BASE",
      "GPS COORDINATES": "5°02'13.2'2°27'50.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2850,
      "AGENT BUSINESS NAME": "DAN.CUDJOE ENTERPRISE",
      "AGENT USERNAME": "DCE40101",
      "ADDRESS": "UNNUMBERED SHOP AT NKROFUL",
      "Location": "NEAR MP'S OFFICE",
      "GPS COORDINATES": "4°57'56.2'N 2°19'27.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2851,
      "AGENT BUSINESS NAME": "AKTIV SIKANEKT SOLUTIONS",
      "AGENT USERNAME": "ASS40101",
      "ADDRESS": "HNO. 4A/1, C.P. KAINYAY AVENUE TAKORADI",
      "Location": "CLOSE TO NHIS OFFICE",
      "GPS COORDINATES": "4°53'54.8491' N 1°45'28.5916'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2852,
      "AGENT BUSINESS NAME": "AAHYE CAPITAL",
      "AGENT USERNAME": "ACA40101",
      "ADDRESS": "UNNUMBERED BUILDING AT TIKOBO NO.1",
      "Location": "OPPOSITE THE POLICE STATION",
      "GPS COORDINATES": "5°03'04.7'N 2°41'38.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2853,
      "AGENT BUSINESS NAME": "MONEY B VENTURES",
      "AGENT USERNAME": "MBVSUB40101",
      "ADDRESS": "UNNUMBERED SHOP AT KOKOMPE,TAKORADI",
      "Location": "AT ADAKOPE JUNCTION",
      "GPS COORDINATES": "4°53'14.5'N 1°46'08.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2854,
      "AGENT BUSINESS NAME": "MBVSUB40102",
      "AGENT USERNAME": "MBVSUB40102",
      "ADDRESS": "UNNUMBERED CONTAINER AT KOKOMPE, TAKORADI",
      "Location": "NEAR THE TOTAL FILLING STATION",
      "GPS COORDINATES": "4°53'20.7'N 1°46'02.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2855,
      "AGENT BUSINESS NAME": "GOD'S GIFT KB VENTURES",
      "AGENT USERNAME": "GGK40101",
      "ADDRESS": "STORE NO.3,ESSIKAFOAMBANTEM,BONYERE",
      "Location": "OPPOSITE SACRED ACTION CHURCH",
      "GPS COORDINATES": "5°00'53.3'N 2°42'03.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2856,
      "AGENT BUSINESS NAME": "JUST AUTHENTIC ENTERPRISE",
      "AGENT USERNAME": "JAE40101",
      "ADDRESS": "A SHOP AT TAKORADI NEWSITE",
      "Location": "NEAR PENTECOST PREPRATORY SCHOOL",
      "GPS COORDINATES": "4°54'55.1'N 1°45'30.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2857,
      "AGENT BUSINESS NAME": "PERFECT RUTHIE BUZINEX",
      "AGENT USERNAME": "PRB40101",
      "ADDRESS": "UNNUMBERED SHOP AT AIYINASE",
      "Location": "NEAR JAH LIVE",
      "GPS COORDINATES": "5°00'01.8'N 2°30'17.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2858,
      "AGENT BUSINESS NAME": "ESSIENMAHDEEN VENTURES",
      "AGENT USERNAME": "ESV40101",
      "ADDRESS": "UNNUMBERED CONTAINER AT AGONA",
      "Location": "CLOSE TO BAIDOO BONSU SHS",
      "GPS COORDINATES": "4°53'32.9' N 1°57'59.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2859,
      "AGENT BUSINESS NAME": "EMMANUEL TELECOM",
      "AGENT USERNAME": "EMT40101",
      "ADDRESS": "UNNUMBERED PLOT AT TEACHERS' QUARTERS, TAKORADI",
      "Location": "NEAR THE NEW MARKET",
      "GPS COORDINATES": "4°53'53.1'N 1°45'24.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2860,
      "AGENT BUSINESS NAME": "LATER GLORY ULTIMATE VENTURES",
      "AGENT USERNAME": "LGU40101",
      "ADDRESS": "UNNUMBERED SHOP AT AKYEMPIM",
      "Location": "ADJECENT THE COMMUNITY CENTRE",
      "GPS COORDINATES": "WZ-5430-1003",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2861,
      "AGENT BUSINESS NAME": "SABAAZY ENTERPRISE",
      "AGENT USERNAME": "SABSUB40101",
      "ADDRESS": "UNNUMBERED SHOP AT TAKORADI",
      "Location": "CLOSE TO FIDELITY BANK TMC",
      "GPS COORDINATES": "4°53'49.6'N 1°45'33.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2862,
      "AGENT BUSINESS NAME": "SABAAZY ENTERPRISE",
      "AGENT USERNAME": "SABSUB40102",
      "ADDRESS": "UNNUMBERED SHOP AT TAKORADI NEW MARKET",
      "Location": "ADJACENT BAPTIST CHURCH",
      "GPS COORDINATES": "4°53'52.7'N 1°45'31.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2863,
      "AGENT BUSINESS NAME": "ROBERTO FARMING AND TRADING ENTERPRISE",
      "AGENT USERNAME": "RFT40101",
      "ADDRESS": "H/NO. B30, INSIDE PORT AND RAILWAY QUARTERS, TAKORADI",
      "Location": "ADJACENT VICTORY BIBLE CHURCH INT",
      "GPS COORDINATES": "4°54'52.1'N 1°45'21.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2864,
      "AGENT BUSINESS NAME": "GYENI ADU VENTURES",
      "AGENT USERNAME": "GAV40102",
      "ADDRESS": "UNN.BUILDING AT ELUBO",
      "Location": "AT ELUBO MAIN STATION",
      "GPS COORDINATES": "5°17'23.9'N 2° 46'40.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2865,
      "AGENT BUSINESS NAME": "IBROAFT VENTURES",
      "AGENT USERNAME": "IVE40101",
      "ADDRESS": "UNNUMBERED SHOP AT KWESIMINTSIM",
      "Location": "NEAR ALATA MOSQUE",
      "GPS COORDINATES": "4°54'59.1'N1°47'15.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2866,
      "AGENT BUSINESS NAME": "HABIDES ENTERPRISE",
      "AGENT USERNAME": "HAE40101",
      "ADDRESS": "4°53'56.2'N 1°45'47.5'W",
      "Location": "NEAR GPRTU MAIN OFFICE",
      "GPS COORDINATES": "4°53'56.2'N 1°45'47.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2867,
      "AGENT BUSINESS NAME": "PEACEDOMICK ENTERPRISE",
      "AGENT USERNAME": "PEN 3102.00",
      "ADDRESS": "POKUASE",
      "Location": "NEAR PENTECOST CHURCH",
      "GPS COORDINATES": "5.728508,0.275811",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2868,
      "AGENT BUSINESS NAME": "HANAN SUGLO ENTERPRISE",
      "AGENT USERNAME": "HSE80101",
      "ADDRESS": "BEHIND ST.LUCY HOSPITAL",
      "Location": "ST.LUCY HOSPITAL",
      "GPS COORDINATES": "9.440726,-0.882691",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2869,
      "AGENT BUSINESS NAME": "MICARA PRESTIGE ENTERPRISE",
      "AGENT USERNAME": "MPE03602",
      "ADDRESS": "ADENTA SSNIT",
      "Location": "NEAR FATTY GRILL RESTUARANT",
      "GPS COORDINATES": "5.5508992,-0.196608",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2870,
      "AGENT BUSINESS NAME": "NANDOS POWER ENTERPRISE",
      "AGENT USERNAME": "NPE80102",
      "ADDRESS": "KPALSI LAST STOP",
      "Location": "CLOSE TO KPALSI LAST STOP",
      "GPS COORDINATES": "9.441045,-0.879591",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2871,
      "AGENT BUSINESS NAME": "MELCHIZARETH TRADE ENTERPRISE",
      "AGENT USERNAME": "MTE03501",
      "ADDRESS": "TAIFA ",
      "Location": "ADJACENT WASHING BAY",
      "GPS COORDINATES": "5.666868,-0.215724",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2872,
      "AGENT BUSINESS NAME": "PSYCHO ENTERPRISE",
      "AGENT USERNAME": "PEN 80103.00",
      "ADDRESS": "CLOSE TO KPALSI CHIEF PALACE",
      "Location": "KPALSI CHIEF PALACE",
      "GPS COORDINATES": "9.440225,-0.877282",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2873,
      "AGENT BUSINESS NAME": "J.K. OKOTA VENTURES",
      "AGENT USERNAME": "JKO03101",
      "ADDRESS": "AMASAMAN",
      "Location": "NEAR OBYEYIE MOSQUE",
      "GPS COORDINATES": "5.6997842,-0.323848",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2874,
      "AGENT BUSINESS NAME": "LEOFIELD MAX ENTERPRISE",
      "AGENT USERNAME": "LME02101",
      "ADDRESS": "NSAWAM",
      "Location": "INSIDE THE TROTRO STATION",
      "GPS COORDINATES": "5.6733231,-0.5101403",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2875,
      "AGENT BUSINESS NAME": "PRIME TIME ENTERPRISE",
      "AGENT USERNAME": "PTE 80101.00",
      "ADDRESS": "KPALSI ROAD ROAD",
      "Location": "NEAR KPALSI CHIEF PALACE",
      "GPS COORDINATES": "9.440140,-0.877806",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2876,
      "AGENT BUSINESS NAME": "PRINCE ANING ENTERPRISE",
      "AGENT USERNAME": "PAE03101",
      "ADDRESS": "KWABENYA POKUASE",
      "Location": "OPPOSITE ADOM PLAZA",
      "GPS COORDINATES": "5.690614,-0.254265",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2877,
      "AGENT BUSINESS NAME": "FIRST STEPPING STONE VENTURES",
      "AGENT USERNAME": "FSS03101",
      "ADDRESS": "AMASAMAN",
      "Location": "NEAR TROTRO STATION",
      "GPS COORDINATES": "5.7067146,-0.308828",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2878,
      "AGENT BUSINESS NAME": "WILLOYEB VENTURES",
      "AGENT USERNAME": "WIV03101",
      "ADDRESS": "AMASAMAN OBEYIYIE",
      "Location": "CLOSE TO MELCOM",
      "GPS COORDINATES": "GW-0108-3325",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2879,
      "AGENT BUSINESS NAME": "HA DINGBIRI ENTERPRISE",
      "AGENT USERNAME": "HDE80102",
      "ADDRESS": "FLEMISH SPOT",
      "Location": "CLOSE TO THE GRINDING MILL",
      "GPS COORDINATES": "9.433027,-0.874416",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2880,
      "AGENT BUSINESS NAME": "AROUND THE CROSS VENTURES",
      "AGENT USERNAME": "ACV03101",
      "ADDRESS": "POKUASE",
      "Location": "NEXT TO SOCCER BET",
      "GPS COORDINATES": "5.6873144,-0.2840547",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2881,
      "AGENT BUSINESS NAME": "TECHSTUFF",
      "AGENT USERNAME": "TECSUB01401",
      "ADDRESS": "CIRCLE",
      "Location": "NEAR TIP TOE LANE",
      "GPS COORDINATES": "5.573542,-0.2172699",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2882,
      "AGENT BUSINESS NAME": "TECHSTUFF",
      "AGENT USERNAME": "TECSUB01402",
      "ADDRESS": "LEGON CAMPUS",
      "Location": "INSIDE LEGON CAMPUS ",
      "GPS COORDINATES": "5.651687,-0.1920167",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2883,
      "AGENT BUSINESS NAME": "MILOVE SMART DEVICES",
      "AGENT USERNAME": "MSD03101",
      "ADDRESS": "ACCRA NEW TOWN",
      "Location": "OPPOSITE GCB",
      "GPS COORDINATES": "5.5851489,-0.2104872",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2884,
      "AGENT BUSINESS NAME": "PRINTHEL ENTERPRISE",
      "AGENT USERNAME": "PEN 80102.00",
      "ADDRESS": "PASSPORT OFFICE",
      "Location": "NEAR JUBILEE PARK",
      "GPS COORDINATES": "9.402004,-0.838089",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2885,
      "AGENT BUSINESS NAME": "TETBECKS ENTERPRISE",
      "AGENT USERNAME": "TEN03101",
      "ADDRESS": "KOKOMLEMLE",
      "Location": "OPPOSITE KOKOMLEMLE FIDELITY",
      "GPS COORDINATES": "5.5710114,-0.2141353",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2886,
      "AGENT BUSINESS NAME": "KURACHIE-PONG ENTERPRISE",
      "AGENT USERNAME": "K",
      "ADDRESS": "ASHONGMAN ESTATE",
      "Location": "CLOSE VEGGIES AND GRILL RESTUARNT",
      "GPS COORDINATES": "5.6814336,-0.2331413",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2887,
      "AGENT BUSINESS NAME": "RAJA ENTERPRISE",
      "AGENT USERNAME": "REN80102",
      "ADDRESS": "GETFUND HOSTEL",
      "Location": "CLOSE TO GETFUND HOSTEL",
      "GPS COORDINATES": "9.429229,-0.869282",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2888,
      "AGENT BUSINESS NAME": "BIG TYM LINK",
      "AGENT USERNAME": "BTL03101",
      "ADDRESS": "OFANKOR JOHN-TEYE",
      "Location": "OPPOSITE EMPIRE PRAYER",
      "GPS COORDINATES": "5.6649225,-0.2713267",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2889,
      "AGENT BUSINESS NAME": "MALTITI ENTERPRISE",
      "AGENT USERNAME": "MAE80101",
      "ADDRESS": "MALSHEGU ROAD",
      "Location": "MALSHEGU",
      "GPS COORDINATES": "NS-394-7460",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2890,
      "AGENT BUSINESS NAME": "AZINDOW 99 ENTERPRISE",
      "AGENT USERNAME": "A9E80101",
      "ADDRESS": "UDS",
      "Location": "CLOSE TO GUSS HOSTEL",
      "GPS COORDINATES": "NT-0271-3144",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2891,
      "AGENT BUSINESS NAME": "CAPE CAPITAL SERVICES",
      "AGENT USERNAME": "CCS03101",
      "ADDRESS": "AMASAMAN",
      "Location": "ADJACENT UNIVERSAL FILLING",
      "GPS COORDINATES": "GW-0008-0548",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2892,
      "AGENT BUSINESS NAME": "EMMANUEL PREMIUM CONSULT ",
      "AGENT USERNAME": "EBP70201",
      "ADDRESS": "Box 37 SUNYANI",
      "Location": "ADJACENT SUNYANI market branch ",
      "GPS COORDINATES": "7. 02. 80. 4N 1. 50. 11. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2893,
      "AGENT BUSINESS NAME": "OPTIMIST ZONE ENTERPRISE",
      "AGENT USERNAME": "OZE03101",
      "ADDRESS": "ALAJO ",
      "Location": "OPPOSITE MOTHER HEN",
      "GPS COORDINATES": "5.593292,-0.2144611",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2894,
      "AGENT BUSINESS NAME": "ASAKORO ENTERPRISE",
      "AGENT USERNAME": "ASE80103",
      "ADDRESS": "LAMAKARA",
      "Location": "CLOSE TO INUSAH FUSEINI BUILDING",
      "GPS COORDINATES": "NT-0044-4790",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2895,
      "AGENT BUSINESS NAME": "ISAAC NYAMPON  TEASE ENTERPRISE ",
      "AGENT USERNAME": "INT70101",
      "ADDRESS": "BOX 30 SUNYANI",
      "Location": "ADJACENT FIRE SERVICE ",
      "GPS COORDINATES": "7. 05. 4. 03. 2N 1. 03. 91. 2' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2896,
      "AGENT BUSINESS NAME": "CHAFAL COMMUNICATION VENTURES",
      "AGENT USERNAME": "CCVSUB03104",
      "ADDRESS": "KWASHIMAN",
      "Location": "INFRONT OF KFC",
      "GPS COORDINATES": "5.592681,-0.268333",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2897,
      "AGENT BUSINESS NAME": "KIVIA PLUMBING WISE ",
      "AGENT USERNAME": "KWP70401",
      "ADDRESS": "Box 32 SUNYANI",
      "Location": "ADJACENT TWENE SHS",
      "GPS COORDINATES": "7. 09. 31. 00.4N 3. 40. 21. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2898,
      "AGENT BUSINESS NAME": "CHAFAL COMMUNICATION VENTURES",
      "AGENT USERNAME": "CCVSUB03105",
      "ADDRESS": "NUNGUA",
      "Location": "CLOSE TO NUNGUA POLICE STATION",
      "GPS COORDINATES": "5.5949618,-0.0884163",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2899,
      "AGENT BUSINESS NAME": "CHAFAL COMMUNICATION VVENTURES",
      "AGENT USERNAME": "CCVSUB03104",
      "ADDRESS": "ACHIMOTA",
      "Location": "INSIIDE NAA DENSUA PLAZA",
      "GPS COORDINATES": "53609.3012262",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2900,
      "AGENT BUSINESS NAME": "FRENET PLUS ENTERPRISE ",
      "AGENT USERNAME": "FPE70101",
      "ADDRESS": "Box 20 SUNYANI",
      "Location": "ADJACENT SUNYANI MAIN ",
      "GPS COORDINATES": "7. 09. 03. 30. 3N 2. 65. 09. 1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2901,
      "AGENT BUSINESS NAME": "MAVEG GROUP LIMITED",
      "AGENT USERNAME": "MGLSUB03101",
      "ADDRESS": "TAIFA",
      "Location": "CLOSE TO PRUDENTICAL BANK",
      "GPS COORDINATES": "GE -331-0530",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2902,
      "AGENT BUSINESS NAME": "MAVEG GROUP LIMITED",
      "AGENT USERNAME": "MGLSUB03102",
      "ADDRESS": "OFANKOR",
      "Location": "NEAR LIGHT HOUSE",
      "GPS COORDINATES": "GW-0366-2246",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2903,
      "AGENT BUSINESS NAME": "WALSAPONG ENTERPRISE ",
      "AGENT USERNAME": "WTE70401",
      "ADDRESS": "Box 40 SUNYANI",
      "Location": "OPPOSITE EUROPA ABESIM",
      "GPS COORDINATES": "7. 60. 41. 4N 2. 03. 04. 2' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2904,
      "AGENT BUSINESS NAME": "EDEMS COMMUNICATION VENTURES",
      "AGENT USERNAME": "ECV 3101.00",
      "ADDRESS": "NIMA",
      "Location": "NEAR  NIMA BELLING",
      "GPS COORDINATES": "GA-011-5279",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2905,
      "AGENT BUSINESS NAME": "ABOVE ALL BOOKSHOP AND BUSINESS SERVICE ",
      "AGENT USERNAME": "AAB70101",
      "ADDRESS": "Box 43 SUNYANI",
      "Location": "NEAR PRESBY CHURCH ",
      "GPS COORDINATES": "7. 01. 09. 1N 4. 03. 44. 2' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2906,
      "AGENT BUSINESS NAME": "TRANSPARENT MMA VENTURES",
      "AGENT USERNAME": "TMV03101",
      "ADDRESS": "ASHALAJA",
      "Location": "OPPOSITE ASHALAJA MA GROVE",
      "GPS COORDINATES": "GS-0822-5188",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2907,
      "AGENT BUSINESS NAME": "FRIMPEE A1 ENTERPRISE",
      "AGENT USERNAME": "FAE70101",
      "ADDRESS": "BOX 43 SUNYANI",
      "Location": "ADJACENT SUNYANIPOST ",
      "GPS COORDINATES": "7. 99. 76. 02. 1N 3. 43. 08. 2' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2908,
      "AGENT BUSINESS NAME": "PEH GIDEON ENTERPRISE ",
      "AGENT USERNAME": "PGE70501",
      "ADDRESS": "OPPOSITE BACCSOD DUADASO 1",
      "Location": "OPPOSITE NAFANA RURAL BANK ",
      "GPS COORDINATES": "7. 09. 06. 56. 1N 3. 35. 32. 3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2909,
      "AGENT BUSINESS NAME": "DARK-EMM SURVIVE ENTERPRISE ",
      "AGENT USERNAME": "DES70101",
      "ADDRESS": "BOX 21 SUNYANI",
      "Location": "ADJACENT CHIEF PALACE",
      "GPS COORDINATES": "7.32. 49. 4N 1.88. 08. 9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2910,
      "AGENT BUSINESS NAME": "KORMAMS ENTERPRISE",
      "AGENT USERNAME": "KOE02201",
      "ADDRESS": "ALAJO",
      "Location": "NEAR PAMAS HOTEL",
      "GPS COORDINATES": "5.5776997,-0.2121747",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2911,
      "AGENT BUSINESS NAME": "WIN AMOFRED ENTERPRISE ",
      "AGENT USERNAME": "WAE70401",
      "ADDRESS": "BOX 60 SUNYANI",
      "Location": "NEAR WEDESADAY MARKET ",
      "GPS COORDINATES": "7. 09. 77. 4N 1. 05. 61. 2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2912,
      "AGENT BUSINESS NAME": "NISADAV VENTURES ",
      "AGENT USERNAME": "NIV7010",
      "ADDRESS": "Box ....09 AFRISPA",
      "Location": "OPPOSITE MARKET",
      "GPS COORDINATES": "7. 21. 47. 3' N 2. 20. 52. 5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2913,
      "AGENT BUSINESS NAME": "BRETHREN OF PEACE ENTERPRISE ",
      "AGENT USERNAME": "BPE09001",
      "ADDRESS": "UNNUMBERED SHOP POYENTANGA",
      "Location": "OPPOSITE POYENTANGA MARKET",
      "GPS COORDINATES": "9°48'36.9' N 2°29'03.7' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2914,
      "AGENT BUSINESS NAME": "DONGU K SAMAD ENTERPRISE ",
      "AGENT USERNAME": "DKS09001",
      "ADDRESS": "UNNUMBERED SHOP KATUA ",
      "Location": "NEAR KATUA MARKET ",
      "GPS COORDINATES": "9°59'00.4' N 1°55'40.3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2915,
      "AGENT BUSINESS NAME": "PRIFID VENTURES ",
      "AGENT USERNAME": "PVE09001",
      "ADDRESS": "UNNUMBERED SHOP JIRAPA ",
      "Location": "CLOSE TO JIRAPA MUNICIPAL ASSEMBLY ",
      "GPS COORDINATES": "10°31'37.9' N 2°42'46.2' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2916,
      "AGENT BUSINESS NAME": "SICHELLY FARMS AND GENERAL TRADING ",
      "AGENT USERNAME": "SFG09001",
      "ADDRESS": "UNNUMBERED SHOP PIINA",
      "Location": "CLOSE TO THE PIINA MARKET ",
      "GPS COORDINATES": "10.838777, -2.646414",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2917,
      "AGENT BUSINESS NAME": "WHITESPOT",
      "AGENT USERNAME": "WHI09001",
      "ADDRESS": "UNNUMBERED SHOP NANDOM",
      "Location": "NEAR THE VRA OFFICE",
      "GPS COORDINATES": "10°50'59.5' N 2°45'37.2' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2918,
      "AGENT BUSINESS NAME": "SISALA VENTURES",
      "AGENT USERNAME": "SIV70301",
      "ADDRESS": "TMA 1173,KENTEN-TECHIMAN,BONO EAST",
      "Location": "BEHIND EXCELL FILLING STATION",
      "GPS COORDINATES": "7.5994870,-1.9442660",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2919,
      "AGENT BUSINESS NAME": "BABA AHMED ROYAL VENTURES",
      "AGENT USERNAME": "BAR70301",
      "ADDRESS": "BANDA NKWANTA, BONO EAST",
      "Location": "NEAR BANDA NKWANTA STATION",
      "GPS COORDINATES": "8.351253,-2.136192",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2920,
      "AGENT BUSINESS NAME": "GOWUS ROYAL VENTURES",
      "AGENT USERNAME": "GRV70301",
      "ADDRESS": "NANA ABENA MARKET ROUNDABOUT, TECHIMAN",
      "Location": "NEAR NANA ABENA MARKET,TECHIMAN",
      "GPS COORDINATES": "7.582593,-1.932369",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2921,
      "AGENT BUSINESS NAME": "ABRABO YE DE VENTURES",
      "AGENT USERNAME": "AYD70301",
      "ADDRESS": "7.5935550,-1.9361870",
      "Location": "OPPOSITE ADB / TAMALE STATION",
      "GPS COORDINATES": "7.5935550,-1.9361870",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2922,
      "AGENT BUSINESS NAME": "DEPENDALE GOD AGRO CHEMICALS AND MOBILE MONEY SERVICE",
      "AGENT USERNAME": "DGASUB70302",
      "ADDRESS": "KWAAGYA-BUSUNYA-NKORANZA NORTH",
      "Location": "NEAR THE ROMAN SCHOOL",
      "GPS COORDINATES": "BN-0003-5642",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2923,
      "AGENT BUSINESS NAME": "0402 TAHIRU VENTURES",
      "AGENT USERNAME": "TVE70301",
      "ADDRESS": "AKUMSA DOMASE, NKORANZA,BONO EAST",
      "Location": "NEAR AKUMSA PRESBYTERIAN CHURCH",
      "GPS COORDINATES": "7.5467630,-1.7349620",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2924,
      "AGENT BUSINESS NAME": "MOHAMED@ABD ENTERPRISE",
      "AGENT USERNAME": "MAA70301",
      "ADDRESS": "YEN PRU-YEJI,BONO EAST",
      "Location": "NEAR YEJI MARKET ROUNDABOUT",
      "GPS COORDINATES": "8.231790,-0.647590",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2925,
      "AGENT BUSINESS NAME": "UMAR DEMI VENTURES",
      "AGENT USERNAME": "UDV70301",
      "ADDRESS": "KONKOMA-YEJI, BONO EAST",
      "Location": "NEAR YEJI MARKET",
      "GPS COORDINATES": "8.2267340,-0.6555880",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2926,
      "AGENT BUSINESS NAME": "PASGO BUSINESS SOLUTION",
      "AGENT USERNAME": "PBS 70301",
      "ADDRESS": "MAMPRUSI LINE-TECHIMAN",
      "Location": "BEHIND MENDADAWO STORY BUILDING",
      "GPS COORDINATES": "7.5943290,-1.9441580",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2927,
      "AGENT BUSINESS NAME": "OMAMA YEBOAH ENTERPRISE",
      "AGENT USERNAME": "OYE70301",
      "ADDRESS": " TECHIMAN MARKET,BONO EAST",
      "Location": "INSIDE TECHIMAN MARKET",
      "GPS COORDINATES": "BT-0005-6174",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2928,
      "AGENT BUSINESS NAME": "BISSAMACLI ENTERPRISE",
      "AGENT USERNAME": "BEN70301",
      "ADDRESS": "VATICAN CITY ,TECHIMAN-BONO EAST",
      "Location": "NEAR TIME OUT SPOT",
      "GPS COORDINATES": "7.590294,-1.929963",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2929,
      "AGENT BUSINESS NAME": "Nyasak Consult ",
      "AGENT USERNAME": "NCO0401",
      "ADDRESS": "Millennium City",
      "Location": "Zakmus Central Mosque ",
      "GPS COORDINATES": "5.524676,-0.401147",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2930,
      "AGENT BUSINESS NAME": "NAS MAS ENTERPRISE ",
      "AGENT USERNAME": "NMESUB04401",
      "ADDRESS": "KASOA Old Market ",
      "Location": "Behind the old market ",
      "GPS COORDINATES": "5.532420,-0.420988",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2931,
      "AGENT BUSINESS NAME": "NAS-Mas Enterprise ",
      "AGENT USERNAME": "NMESUB04402",
      "ADDRESS": "KASOA ",
      "Location": "Near Mustapha Mosque ",
      "GPS COORDINATES": "5.5323352, -0.4209546",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2932,
      "AGENT BUSINESS NAME": "MEDIMAFO TEASE MOBILE MONEY SERVICE",
      "AGENT USERNAME": "MTM70301",
      "ADDRESS": "SUBINSO NO. 2-WENCHI, BONO EAST",
      "Location": "NEAR SUBINSO NO.2 TAXI RANK",
      "GPS COORDINATES": "7.939855,-2.0531690",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2933,
      "AGENT BUSINESS NAME": "BIG BROTHERS ENTERPRISE",
      "AGENT USERNAME": "BBE90101",
      "ADDRESS": "UNNUMBERED CONTAINER SIRIGU-GUNWOKO",
      "Location": "OPPOSITE THE POLICE STATION",
      "GPS COORDINATES": "10'57'15.7''N 0'56'05.1.W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2934,
      "AGENT BUSINESS NAME": "IPMO VENTURES",
      "AGENT USERNAME": "IVE70301",
      "ADDRESS": "TMA 579, JAMES TOWN-TECHIMAN",
      "Location": "OPPOSITE JEHOVAH WITNESS CHURCH,JAMES TOWN",
      "GPS COORDINATES": "BT-0105-8071",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2935,
      "AGENT BUSINESS NAME": "TRADE INVEST GH",
      "AGENT USERNAME": "TIG90101",
      "ADDRESS": "BOLGATANGA, MILLET MARKET",
      "Location": "NEAR ABRANTIE SPOT BOLGA",
      "GPS COORDINATES": "10'47'19.4''N0'50'39.9''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2936,
      "AGENT BUSINESS NAME": "ABUPET 14 TRADING ENTERPRISE",
      "AGENT USERNAME": "ATE70301",
      "ADDRESS": "DIASEMPA -TECHIMAN,BONO EAST",
      "Location": "NEAR REX PALACE SPOT",
      "GPS COORDINATES": "7.5725780,-1.9234110",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2937,
      "AGENT BUSINESS NAME": "GODS LOVE VIVI ENTERPRISE",
      "AGENT USERNAME": "GLV90101",
      "ADDRESS": "BOLGA-ZAARE",
      "Location": "NEAR GRA- BOLGATANGA",
      "GPS COORDINATES": "10'48'38.0N0'51''18.6''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2938,
      "AGENT BUSINESS NAME": "YINNE-EMI ENTERPRISE",
      "AGENT USERNAME": "YNE90101",
      "ADDRESS": "PWALUGU MARKET",
      "Location": "NEAR PWALUGU MARKET",
      "GPS COORDINATES": "10.6030010, -0.8564430",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2939,
      "AGENT BUSINESS NAME": "GLOBERTSON ENTERPRISE",
      "AGENT USERNAME": "GSE90101",
      "ADDRESS": "UNNUMBERED CONTAINER SUMBURUNGU",
      "Location": "NEAR NEW JOY MEDICAL CENTRE",
      "GPS COORDINATES": "10.819535-0.933306",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2940,
      "AGENT BUSINESS NAME": "STRONG FATHERS FAITH ENTERPRISE ",
      "AGENT USERNAME": "SFFSUB00302",
      "ADDRESS": "RAWLINGS PARK",
      "Location": "INSIDE RAWLINGS PARK ",
      "GPS COORDINATES": "5.545809,-0.208580",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2941,
      "AGENT BUSINESS NAME": "LOGIC AND COMMON SENSE VENTURES",
      "AGENT USERNAME": "LCS00701",
      "ADDRESS": "KANTAMANTO ",
      "Location": "INSIDE KANTAMANTO ",
      "GPS COORDINATES": "5.548734,-0.212859",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2942,
      "AGENT BUSINESS NAME": "OPHELIA AYISI ENTERPRISE ",
      "AGENT USERNAME": "OAE00701",
      "ADDRESS": "KANTAMANTO ",
      "Location": "INSIDE KANTAMANTO MARKET ",
      "GPS COORDINATES": "5.548915,-0.212939",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2943,
      "AGENT BUSINESS NAME": "WELL POINT VENTURES",
      "AGENT USERNAME": "WPT00701",
      "ADDRESS": "KANTAMANTO ",
      "Location": "OPPOSITE HOTEL DE HORSES",
      "GPS COORDINATES": "5.548312,-0.2140142",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2944,
      "AGENT BUSINESS NAME": "ZAIZE ASUMNEYA",
      "AGENT USERNAME": "ZAS01001",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR HOTEL DE HORSES",
      "GPS COORDINATES": "5.548233,-0.214230",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2945,
      "AGENT BUSINESS NAME": "STEPHEN ADJEI VENTURES ",
      "AGENT USERNAME": "SAV01001",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR FIDELITY BANK ",
      "GPS COORDINATES": "5.547970,-0.214605",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2946,
      "AGENT BUSINESS NAME": "SHANAT J.A ENTERPRISE ",
      "AGENT USERNAME": "SJA00301",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR FIDELITY BANK ",
      "GPS COORDINATES": "5.547250,-0.214767",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2947,
      "AGENT BUSINESS NAME": "SUPER STAR AUTOTEHNIK",
      "AGENT USERNAME": "SUA03201",
      "ADDRESS": "MATAHEKO ",
      "Location": "OPPOSITE GRA OFFICE ",
      "GPS COORDINATES": "5.5702320, -0.2452510",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2948,
      "AGENT BUSINESS NAME": "ROSELOVE AMP VENTURES ",
      "AGENT USERNAME": "RAV70501",
      "ADDRESS": "Box 54 SUNYANI",
      "Location": "OPPOSITE MARKET ",
      "GPS COORDINATES": "7. 08. 05. 4'N 3. 43. 01. 3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2949,
      "AGENT BUSINESS NAME": "HUBERT KWADWO SAH ENTERPRISE ",
      "AGENT USERNAME": "HKS70501",
      "ADDRESS": "BOX 30 SUNYANI",
      "Location": "OPPOSITE NAFANA RURAL ",
      "GPS COORDINATES": "7. 03. 35. 7' N 1. 50. 04 2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2950,
      "AGENT BUSINESS NAME": "COSMO MULT BUSINESS ",
      "AGENT USERNAME": "CMC70401",
      "ADDRESS": "Box 40 SAMPA KOKOA",
      "Location": "OPPOSITE DURBAR",
      "GPS COORDINATES": "7. 66.09.1'N 4. 01. 14. 54. 3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2951,
      "AGENT BUSINESS NAME": "Chiko Techno ENTERPRISE ",
      "AGENT USERNAME": "CTH70101",
      "ADDRESS": "BOX 4 SUNYANI",
      "Location": "OPPOSITE WISELY CATHEDRAL METHODIST ",
      "GPS COORDINATES": "7. 99. 30. 4' N 1. 00. 43. 6' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2952,
      "AGENT BUSINESS NAME": "KRIZREEN ENTERPRISE ",
      "AGENT USERNAME": "KEN70103",
      "ADDRESS": "Box 3 SUNYANI",
      "Location": "OPPOSITE  ASSEMBLIES OF GOD CHURCH,  FIAPRE",
      "GPS COORDINATES": "7. 77. 01. 5' N 3. 05. 20. 1' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2953,
      "AGENT BUSINESS NAME": "AGGREY BEE HONEY AND BUSINESS CENTER ",
      "AGENT USERNAME": "ABE70201",
      "ADDRESS": "P. O Box 133 Berekum",
      "Location": "Adjacent Fidelity Bank",
      "GPS COORDINATES": "7.45043° N, 2.58432° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2954,
      "AGENT BUSINESS NAME": "KOPHAY MOBILE MONEY VENTURES ",
      "AGENT USERNAME": "KMMSUB70201",
      "ADDRESS": "UNNUMBERED STORE AT BEREKUM AHENBRONOSO",
      "Location": "NEAR NPP OFFICE",
      "GPS COORDINATES": "7.44900° N, 2.58060° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2955,
      "AGENT BUSINESS NAME": "NASH ANSU-TEKU VENTURES",
      "AGENT USERNAME": "NAT70201",
      "ADDRESS": "UNNUMBERED STORE AT JINIJINI, BEREKUM",
      "Location": "NEAR THE JINIJINI STATION",
      "GPS COORDINATES": "7.44653° N, 2.64851° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2956,
      "AGENT BUSINESS NAME": "DAAVAS-NICO VENTURES",
      "AGENT USERNAME": "DNV70201",
      "ADDRESS": "UNNUMBERED STORE AT JINIJINI, BEREKUM",
      "Location": "ADJACENT THE JINIJINI LORRY STATION",
      "GPS COORDINATES": "7.44656° N, 2.64867° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2957,
      "AGENT BUSINESS NAME": "SEREBOUR CO LIMITED SERAUT",
      "AGENT USERNAME": "SAC70201",
      "ADDRESS": "UNNUMBERED STORE AT BEREKUM NYANSAYE CURVE",
      "Location": "BEHIND BEREKUM GOLDEN CITY PARK",
      "GPS COORDINATES": "7.45378° N, 2.58603° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2958,
      "AGENT BUSINESS NAME": "Dorh Nyark Enterprise ",
      "AGENT USERNAME": "DNESUB04402",
      "ADDRESS": "KASOA overhead ",
      "Location": "Overhead ",
      "GPS COORDINATES": "5.5350920, -0.4227810",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2959,
      "AGENT BUSINESS NAME": "Dorh Nyark Enterprise ",
      "AGENT USERNAME": "DNESUB04401",
      "ADDRESS": "KASOA ",
      "Location": "Opposite Goil ",
      "GPS COORDINATES": "5.5433527, -0.4308815",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2960,
      "AGENT BUSINESS NAME": "RASTIAN ENTERPRISE",
      "AGENT USERNAME": "REN90101",
      "ADDRESS": "GARU",
      "Location": "NEAR MAXX ENERGY FILLING STATION",
      "GPS COORDINATES": "10.847080, -01.177167",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2961,
      "AGENT BUSINESS NAME": "NEW VISION ROYAL ENTERPRISE",
      "AGENT USERNAME": "NVR90101",
      "ADDRESS": "NYARIGA",
      "Location": "NEAR NYARIGA JUNCTION",
      "GPS COORDINATES": "10'48'27.9''N 0'52'33.6''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2962,
      "AGENT BUSINESS NAME": "Dr Asante Enterprise ",
      "AGENT USERNAME": "DAE04401",
      "ADDRESS": "KASOA new town",
      "Location": "Holy Christ Chapel ",
      "GPS COORDINATES": "5.5087610, -0.4091140",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2963,
      "AGENT BUSINESS NAME": "ADM MIKEYS SERVICES",
      "AGENT USERNAME": "AMS00701",
      "ADDRESS": "KANDA",
      "Location": "NEAR MOUNTRES UNIVERSITY ",
      "GPS COORDINATES": "5.579091,-0.196042",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2964,
      "AGENT BUSINESS NAME": "LE LUCYA REIGN VENTURES ",
      "AGENT USERNAME": "LLRSUB00301",
      "ADDRESS": "OKAISHIE ",
      "Location": "NEAR EXCELLENT BOUTIQUE ",
      "GPS COORDINATES": "5.545747,-0.210666",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2965,
      "AGENT BUSINESS NAME": "OHEMAA FORD SERVICES ",
      "AGENT USERNAME": "OFS00301",
      "ADDRESS": "DANSOMAN AGEGE",
      "Location": "NEAR PENTECOST CHURCH ",
      "GPS COORDINATES": "5.530800,-0.254942",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2966,
      "AGENT BUSINESS NAME": "AMPAABENG 32 ENTERPRISE",
      "AGENT USERNAME": "A3E01001",
      "ADDRESS": "OKAISHIE ",
      "Location": "NEAR GCB",
      "GPS COORDINATES": "5.548564,-0.211514",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2967,
      "AGENT BUSINESS NAME": "KINGWONDERS ENTERPRISE ",
      "AGENT USERNAME": "KEN01001",
      "ADDRESS": "DANSOMAN EBENEZER DOWN ",
      "Location": "NEAR EBENEZER SHS",
      "GPS COORDINATES": "5.521760,-0.254734",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2968,
      "AGENT BUSINESS NAME": "Phredadel Enterprise ",
      "AGENT USERNAME": "PEN 4401.00",
      "ADDRESS": "Jei Krodu KASOA ",
      "Location": "Near Krodua Cemetery ",
      "GPS COORDINATES": "5.6486110, -0.4947708",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2969,
      "AGENT BUSINESS NAME": "Porsh NYSA VENTURES ",
      "AGENT USERNAME": "PNVSUB04401",
      "ADDRESS": "AWUTU Bereku ",
      "Location": "Bereku Durba Ground ",
      "GPS COORDINATES": "5.5126770, -0.5136570",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2970,
      "AGENT BUSINESS NAME": "OSECOM PRIME VENTURES",
      "AGENT USERNAME": "OPV01401",
      "ADDRESS": "CIRCLE ",
      "Location": "INSIDE CIRCLE STATION ",
      "GPS COORDINATES": "5.546130,-0.201361",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2971,
      "AGENT BUSINESS NAME": "MOUDCARE ENTERPRISE ",
      "AGENT USERNAME": "MOESUB00301",
      "ADDRESS": "OKAISHIE ",
      "Location": "NEAR GCB",
      "GPS COORDINATES": "5.548201,-0.214831",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2972,
      "AGENT BUSINESS NAME": "LYNNFAUSE VENTURES",
      "AGENT USERNAME": "LYNSUB00701",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR FIDELITY BANK ",
      "GPS COORDINATES": "5.550639,-0.206917",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2973,
      "AGENT BUSINESS NAME": "NURUL HAMISH ENTERPRISE ",
      "AGENT USERNAME": "NHE03501",
      "ADDRESS": "TUDU",
      "Location": "NEAR STANBIC BANK ",
      "GPS COORDINATES": "5.661634,-0.294597",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2974,
      "AGENT BUSINESS NAME": "TORMOR VENTURES",
      "AGENT USERNAME": "TVE70501",
      "ADDRESS": "P. O Box Sampa",
      "Location": "OPPOSITE ROSEZEEBO FILLING STATION SAMPA",
      "GPS COORDINATES": "7.9543220, -2.6945950",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2975,
      "AGENT BUSINESS NAME": "ALPHA GSM ENTERPRISE ",
      "AGENT USERNAME": "AGE01401",
      "ADDRESS": "CIRCLE ",
      "Location": "NEAR TV AFRICA",
      "GPS COORDINATES": "5.572487,-0.224920",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2976,
      "AGENT BUSINESS NAME": "WOFA TODA VENTURES ",
      "AGENT USERNAME": "WTVSUB03502",
      "ADDRESS": "TUDU",
      "Location": "NEAR TUDU POLICE STATION ",
      "GPS COORDINATES": "5.550639,-0.206927",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2977,
      "AGENT BUSINESS NAME": "KROXX-TECH ENTERPRISE ",
      "AGENT USERNAME": "KTE00301",
      "ADDRESS": "DANSOMAN BEACH ROAD",
      "Location": "NEAR ROYAL HOSPITAL ",
      "GPS COORDINATES": "5.521860,-0.2648420",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2978,
      "AGENT BUSINESS NAME": "EBENEZER KOJO AMOAH ENTERPRISE ",
      "AGENT USERNAME": "EJM00701",
      "ADDRESS": "KANTAMANTO ",
      "Location": "NEAR FIDELITY BANK ",
      "GPS COORDINATES": "5.546960,-0.215706",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2979,
      "AGENT BUSINESS NAME": "EXPRESS STELLY VENTURES ",
      "AGENT USERNAME": "ESV01001",
      "ADDRESS": "OKAISHIE ",
      "Location": "NEAR FIDELITY BANK ",
      "GPS COORDINATES": "5.547576,-0.210143",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2980,
      "AGENT BUSINESS NAME": "Derfour Solomon VENTURES ",
      "AGENT USERNAME": "DSV70301",
      "ADDRESS": "UNNUMBERED CONTAINER AT SAMPA",
      "Location": "OPPOSITE AO AHMED LICENSED CHEMICAL LTD",
      "GPS COORDINATES": "8.0117740, -2.7653360",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2981,
      "AGENT BUSINESS NAME": "BIG BROTHERS ENTERPRISE",
      "AGENT USERNAME": "BBE90101",
      "ADDRESS": "SIRIGU MARKET",
      "Location": "NEAR SIRIGU POLICE STATION",
      "GPS COORDINATES": "10.953275, -0.932238",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2982,
      "AGENT BUSINESS NAME": "PRINCIPAL CAPITAL MICROFINANCE ",
      "AGENT USERNAME": "PCM01501",
      "ADDRESS": "20 BLOHUM ROAD, DZORWULU,",
      "Location": "NEAR FIDELITY BANK",
      "GPS COORDINATES": "5.610372-0.204632",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2983,
      "AGENT BUSINESS NAME": "ZIBA COMMODITIES",
      "AGENT USERNAME": "ZIC01801",
      "ADDRESS": "UNNUMBERED SHOP ABOKOBI",
      "Location": "NEAR ABOKOBI RUAL BANK",
      "GPS COORDINATES": "5.730880-0.205095",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2984,
      "AGENT BUSINESS NAME": "PHONE TECHNICIAN ENTERPRISE ",
      "AGENT USERNAME": "PTE 4701.00",
      "ADDRESS": "UNNUMBERED SHOP MADINA LIBYA QUARTERS ",
      "Location": "IN FRONT OF NURUL SALAM MOSQUE ",
      "GPS COORDINATES": "5.678472-0.181090",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2985,
      "AGENT BUSINESS NAME": "JUDKING",
      "AGENT USERNAME": "JUDSUB03401",
      "ADDRESS": "UNNUMBERED SHOP TAIFA",
      "Location": "NEAR EARLY BIRD SCHOOL",
      "GPS COORDINATES": "5.676668-0.255065",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2986,
      "AGENT BUSINESS NAME": "RITTY-KAF ENT",
      "AGENT USERNAME": "RKE05201",
      "ADDRESS": "HNO CAG/537 ASHALEY BOTWE PENTECOST DOWN",
      "Location": "NEAR CALVARY PRESBY CHURCH",
      "GPS COORDINATES": "5.684182-0.133715",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2987,
      "AGENT BUSINESS NAME": "BILLIONAIRE CAPITAL",
      "AGENT USERNAME": "BIC05201",
      "ADDRESS": "UNNUMBERED SHOP UNIVERSITY OF GHANA ",
      "Location": "INSIDE NIGHT MARKTE NEAR BANKING SQUARE",
      "GPS COORDINATES": "5.642275-0.185803",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2988,
      "AGENT BUSINESS NAME": "CONCIERGE ENTERPRISE",
      "AGENT USERNAME": "CEN01201",
      "ADDRESS": "HNO 7 ABAYATEYE STREET, NANAKROM",
      "Location": "NEAR BRITISH INTERNATIONAL SCHOOL",
      "GPS COORDINATES": "5.695297-0.103362",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2989,
      "AGENT BUSINESS NAME": "RICHEVE BOUNDLESS ENTERPRISE",
      "AGENT USERNAME": "RBE01501",
      "ADDRESS": "UNNUMBERED SHOP KWABENYA COMPUTER SCHOOL",
      "Location": "NEAR CHRIST INTERNATIONAL SCHOOL",
      "GPS COORDINATES": "5.682406-0.252238",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2990,
      "AGENT BUSINESS NAME": "EMMANUEL EXPRESS LAUNDRY AND CLEANING SERVICES",
      "AGENT USERNAME": "EEL04701",
      "ADDRESS": "UNNUMBERED SHOP OYARIFA GHANA FLAG",
      "Location": "GHANA FLAG BUS STOP",
      "GPS COORDINATES": "5.766790-0.180030",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2991,
      "AGENT BUSINESS NAME": "LORD VENTURES",
      "AGENT USERNAME": "LOV01501",
      "ADDRESS": "UNNUMBERED SHOP HAATSO STATION",
      "Location": "NEAR MAXXON FILLING STATION",
      "GPS COORDINATES": "5.667700-0.203537",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2992,
      "AGENT BUSINESS NAME": "Baba sule ventures",
      "AGENT USERNAME": "BSVSUB70401",
      "ADDRESS": "Goaso",
      "Location": "Near the roundabout",
      "GPS COORDINATES": "6.803383-2.5717106",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2993,
      "AGENT BUSINESS NAME": "PELBONY ENTERPRISE",
      "AGENT USERNAME": "PEN 30301.00",
      "ADDRESS": "PEDU ASHFOAM",
      "Location": "NEAR PEDU ASHFOAM",
      "GPS COORDINATES": "5°07'48.1'1°16'30.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2994,
      "AGENT BUSINESS NAME": "LEMON BOSOO VENTURES",
      "AGENT USERNAME": "LBV30301",
      "ADDRESS": "NKANFOA",
      "Location": "NKANFOA TAXI STATION",
      "GPS COORDINATES": "5°08'25.1'N1°14'41.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2995,
      "AGENT BUSINESS NAME": "JEHOVAH INSTANT CASH ENTERPRISE",
      "AGENT USERNAME": "JIC30301",
      "ADDRESS": "TANTRI",
      "Location": "INSIDE TANTRI LORRY STATION",
      "GPS COORDINATES": "5°06'45.2'N1°14'29.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2996,
      "AGENT BUSINESS NAME": "ROBERT-KM ENTERPRISE",
      "AGENT USERNAME": "RKM30301",
      "ADDRESS": "KOTOKURABA",
      "Location": "NEAR CCMA",
      "GPS COORDINATES": "5°06'45.1'N1°14'46.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2997,
      "AGENT BUSINESS NAME": "ABOTWEY LINK VENTURES",
      "AGENT USERNAME": "ALV30201",
      "ADDRESS": "MANKESSIM",
      "Location": "OPPOSITE OPPORTUNITY INTERNATIONAL ",
      "GPS COORDINATES": "5°16'02.3'N1°01'07.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2998,
      "AGENT BUSINESS NAME": "OBED'S AUTHENTIC PHONES AND TRADING",
      "AGENT USERNAME": "OAPSUP30201",
      "ADDRESS": "AMAMOMA",
      "Location": "NEAR THE COMMUNITY LIBRARY",
      "GPS COORDINATES": "5°06'34.5'N1°17'50.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 2999,
      "AGENT BUSINESS NAME": "OBED'S AUTHENTIC PHONES AND TRADING",
      "AGENT USERNAME": "OAPSUB30201",
      "ADDRESS": "AMAMOMA",
      "Location": "NEAR THE COMMUNITY LIBRARY",
      "GPS COORDINATES": "5°06'34.4'N1°17'30.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3000,
      "AGENT BUSINESS NAME": "OBED'S AUTHENTIC PHONES AND TRADING",
      "AGENT USERNAME": "OAPSUB30202",
      "ADDRESS": "AMAMOMA",
      "Location": "NEAR WHITE HOSTEL",
      "GPS COORDINATES": "5°06'34.5'N1°17'50.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3001,
      "AGENT BUSINESS NAME": "WHO KNOWZ MY FUTURE ENTERPRISE",
      "AGENT USERNAME": "WKE30201",
      "ADDRESS": "MANKESSIM",
      "Location": "NEAR MANKESSIM SENIOR HIGH",
      "GPS COORDINATES": "5°15'56.6'N1°01'10.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3002,
      "AGENT BUSINESS NAME": "STEPHEN AKESE",
      "AGENT USERNAME": "SAK30201",
      "ADDRESS": "AKOTOKYIR, UCC",
      "Location": "OPPOSITE PENTECOST CHURCH",
      "GPS COORDINATES": "5°13'55.5'N1°29'30.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3003,
      "AGENT BUSINESS NAME": "KOFIMENS 1677 ENTERPRISE",
      "AGENT USERNAME": "K1E30201",
      "ADDRESS": "MANKESSIM, OBOKOR",
      "Location": "NEAR THE CATHOLIC CHURCH",
      "GPS COORDINATES": "5°17'29.6'N1°04'26.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3004,
      "AGENT BUSINESS NAME": "OSEI OWUSU EUGENE ENTERPRISE",
      "AGENT USERNAME": "OOESUB30201",
      "ADDRESS": "KOMENDA COLLEGEN OF EDUCATION",
      "Location": "NEAR THE TAX RANK",
      "GPS COORDINATES": "5°04'59.3'N1°50'63.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3005,
      "AGENT BUSINESS NAME": "OSEI OWUSU EUGENE ENTERPRISE",
      "AGENT USERNAME": "OOESUB30202",
      "ADDRESS": "OBUASI KWAMEDUAKROM",
      "Location": "KWAMEDUAKROM, NEAR THE TRANSFORMER",
      "GPS COORDINATES": "6°18'19.1'N1°64'53.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3006,
      "AGENT BUSINESS NAME": "ILLUME INVESTMENTS",
      "AGENT USERNAME": "ILLSB30205",
      "ADDRESS": "KOTOKURABA",
      "Location": "OPPOSITE SONTURK SUPER MARKET",
      "GPS COORDINATES": "5°06'48.8'N1°14'44.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3007,
      "AGENT BUSINESS NAME": "BY HIS GRACE JANET VENTURES",
      "AGENT USERNAME": "BHG30301",
      "ADDRESS": "BAKAANO",
      "Location": "NEAR MTTU ",
      "GPS COORDINATES": "5°06'13.3'N1°14'47.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3008,
      "AGENT BUSINESS NAME": "ZAKIRUNA ENT",
      "AGENT USERNAME": "ZAE70201",
      "ADDRESS": "Ata Mills junction",
      "Location": "NEAR SUNA MOSQUE",
      "GPS COORDINATES": "6.787335-2.517342",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3009,
      "AGENT BUSINESS NAME": "BENKISSI VENTURES",
      "AGENT USERNAME": "BVE30202",
      "ADDRESS": "TWIFO PRASO",
      "Location": "NEAR TOPP CLINIC",
      "GPS COORDINATES": "5°05'59.1'N1°18'16.8W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3010,
      "AGENT BUSINESS NAME": "P.O. DWAMENA ENTERPRISE",
      "AGENT USERNAME": "PODSUB30301",
      "ADDRESS": "MANKESSIM",
      "Location": "OPPOSITE HISENSE",
      "GPS COORDINATES": "5°16'04.8'N1°00'48.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3011,
      "AGENT BUSINESS NAME": "Rusdaud Enterprise",
      "AGENT USERNAME": "RUE70101",
      "ADDRESS": "Goaso shabash junction",
      "Location": "Opposite RC SCHOOL",
      "GPS COORDINATES": "6.802263-2.517342",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3012,
      "AGENT BUSINESS NAME": "P.O. DWAMENA ENTERPRISE",
      "AGENT USERNAME": "PODSUB30302",
      "ADDRESS": "MANKESSIM",
      "Location": "NEAR HISENSE",
      "GPS COORDINATES": "5°16'01.8'N1°00'42.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3013,
      "AGENT BUSINESS NAME": "BANJA LUKA ENTERPRISE",
      "AGENT USERNAME": "BLE30201",
      "ADDRESS": "ELMINA",
      "Location": "NEAR ELMINA POLYCLINIC",
      "GPS COORDINATES": "5°05'47.8'N1°20'49.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3014,
      "AGENT BUSINESS NAME": "WAAKCLENZY ENTERPRISE ",
      "AGENT USERNAME": "WAE50101",
      "ADDRESS": "ADIDOME",
      "Location": "NEAR GASO FILLING STATION",
      "GPS COORDINATES": "6.069576,0.504669",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3015,
      "AGENT BUSINESS NAME": "PREMIER FIRST SEEDS VENTURES",
      "AGENT USERNAME": "PFSSUB50101",
      "ADDRESS": "MEPE",
      "Location": "AT KIZITO JUNCTION ",
      "GPS COORDINATES": "6.079164,0.427070",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3016,
      "AGENT BUSINESS NAME": "DES DON VENTURES ",
      "AGENT USERNAME": "DDV50101",
      "ADDRESS": "KPETOE",
      "Location": "NEAR AGOTIME SENIOR HIGH SCHOOL",
      "GPS COORDINATES": "6.551257,0.696006",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3017,
      "AGENT BUSINESS NAME": "TEKPOR PATRICK VENTURES",
      "AGENT USERNAME": "TPVSUB50101",
      "ADDRESS": "KPETOE",
      "Location": "AT THE KPETOE JUNCTION, PHARMACY ",
      "GPS COORDINATES": "6.546788,0.695397",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3018,
      "AGENT BUSINESS NAME": "GLORIOUS VENTURES ",
      "AGENT USERNAME": "GVESUB03801",
      "ADDRESS": "Unnumbered Shop, New Station, Akim Oda",
      "Location": "Near Akimmansa FM",
      "GPS COORDINATES": "5.934727, -0.978596",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3019,
      "AGENT BUSINESS NAME": "GLORIOUS VENTURES ",
      "AGENT USERNAME": "GVESUB03802",
      "ADDRESS": "Unnumbered Shop,  near Asene Station ",
      "Location": "Near Apostolic church",
      "GPS COORDINATES": "5.914163, -0.923978",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3020,
      "AGENT BUSINESS NAME": "BOOGIE SOUNDS ELECTRONIC",
      "AGENT USERNAME": "BSE30301",
      "ADDRESS": "ABEASE CAPE COAST",
      "Location": "NEAR OLD ACADEMY SCHOOL",
      "GPS COORDINATES": "5°06'23.5'N1°14'37.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3021,
      "AGENT BUSINESS NAME": "MORE LIFE MORE MONEY",
      "AGENT USERNAME": "MLM30201",
      "ADDRESS": "ABURA",
      "Location": "NEAR DIS CLINIC",
      "GPS COORDINATES": "5°07'47.7'N1°16'30.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3022,
      "AGENT BUSINESS NAME": "DREAM AND DREAMS ENTERPRISE",
      "AGENT USERNAME": "DAD30201",
      "ADDRESS": "CAPE COAST ABOOM",
      "Location": "NEAR MR SAM",
      "GPS COORDINATES": "5°06'47.3'N1°15'09.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3023,
      "AGENT BUSINESS NAME": "MS TELECOMMUNICATION AND BUSINESS ENTERPRISE ",
      "AGENT USERNAME": "MST20301-SUB",
      "ADDRESS": "S/N NOC 110, Near Sadams Residence mosque,  Akwatia",
      "Location": "Inside Akwatia main station",
      "GPS COORDINATES": "6.040554, -0.908623",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3024,
      "AGENT BUSINESS NAME": "MS TELECOMMUNICATION AND BUSINESS ENTERPRISE ",
      "AGENT USERNAME": "MST20302-SUB",
      "ADDRESS": "Unnumbered Shop, near Akwatia Market",
      "Location": "Near De- Chance",
      "GPS COORDINATES": "6.3201029, -0.821994",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3025,
      "AGENT BUSINESS NAME": "JOE WISE VENTURES ",
      "AGENT USERNAME": "JWV03801",
      "ADDRESS": "UNNUMBERED SHOP,  PRISONS  BARRACKS",
      "Location": "Nsawam Prisons",
      "GPS COORDINATES": "5.804828, -0.332495",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3026,
      "AGENT BUSINESS NAME": "ERIC KARIKARI",
      "AGENT USERNAME": "ENY20101",
      "ADDRESS": "OBA 25 BEGORO",
      "Location": "NEAR CHIEF'S PALACE",
      "GPS COORDINATES": "6°23'13.5' N 0°22'35.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3027,
      "AGENT BUSINESS NAME": "PRETTY NETWORK VENTURES ",
      "AGENT USERNAME": "PNV20101",
      "ADDRESS": "HNO AM 109, KWAHU TAFO",
      "Location": "BEHIND CHIEF'S PALACE",
      "GPS COORDINATES": "6°39'25.8' N 0°39'49.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3028,
      "AGENT BUSINESS NAME": "DEBORAH ASABEA 1817 ENTERPRISE",
      "AGENT USERNAME": "DAESUB61301",
      "ADDRESS": "EJISU ABANKRO",
      "Location": "ADJACENT THE EJISU TRAFFIC LIGHT",
      "GPS COORDINATES": "6°43'20.2'N 1°28'20.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3029,
      "AGENT BUSINESS NAME": "DEBORAH ASABEA 1817 ENTERPRISE",
      "AGENT USERNAME": "DAESUB61302",
      "ADDRESS": "EJISU BESEASE",
      "Location": "NEAR EJISU BESEASE MARKET",
      "GPS COORDINATES": "6°44'21.2'N 1°27'21.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3030,
      "AGENT BUSINESS NAME": "AMBRIS 1988 ENTERPRISE",
      "AGENT USERNAME": "A1E60101",
      "ADDRESS": "AMAKOM",
      "Location": "NEAR BRIGINIA SPOT ",
      "GPS COORDINATES": "6°41'58.1'N 1°37'22.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3031,
      "AGENT BUSINESS NAME": "CYNTHIA OWUSU AFRIYIE VENTURES ",
      "AGENT USERNAME": "COA60101",
      "ADDRESS": "ASOKWA",
      "Location": "NEAR THE METHODIST CHURCH ",
      "GPS COORDINATES": "6°40'47.4'N 1°36'05.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3032,
      "AGENT BUSINESS NAME": "HAMD UNIQUE ENTERPRISE ",
      "AGENT USERNAME": "HUE61101",
      "ADDRESS": "PRASO ",
      "Location": "NEAR PRASO ZONGO MOSQUE ",
      "GPS COORDINATES": "6°61'71.0'N 1°15'69.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3033,
      "AGENT BUSINESS NAME": "MAKOMA SO ADEE MUSIC PRODUCTION AND TRADING ENTERPRISE ",
      "AGENT USERNAME": "MSA60101",
      "ADDRESS": "SUSANSO",
      "Location": "NEAR FAMILY CHAPEL INTERNATIONAL ",
      "GPS COORDINATES": "6°40'31.0'N 1°32'33.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3034,
      "AGENT BUSINESS NAME": "GEORGINA THOMPSON VENTURES ",
      "AGENT USERNAME": "GTV61301",
      "ADDRESS": "RACE COURSE ",
      "Location": "INSIDE RACE COURSE MARKET",
      "GPS COORDINATES": "6°70'53.0'N 1°63'53.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3035,
      "AGENT BUSINESS NAME": "YALTONALSHIWA AUTO PARTS ",
      "AGENT USERNAME": "YAP61101",
      "ADDRESS": "RACE COURSE ",
      "Location": "NEAR TAMALE STATION RACE COUSE ",
      "GPS COORDINATES": "6°70'52.0'N 1°63'52.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3036,
      "AGENT BUSINESS NAME": "CAPITANO PLUS ENTERPRISE ",
      "AGENT USERNAME": "CPE60101",
      "ADDRESS": "BOADI ",
      "Location": "NEAR THE BOADI PALACE ",
      "GPS COORDINATES": "6°40'31.0'N 1°32'33.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3037,
      "AGENT BUSINESS NAME": "FASANT TRAVEL CONSULT ",
      "AGENT USERNAME": "FTC60101",
      "ADDRESS": "AMAKOM",
      "Location": "OPPOSITE SANTINOS RESTRAUANT ",
      "GPS COORDINATES": "6°41'15.4'N 1°36'11.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3038,
      "AGENT BUSINESS NAME": "GINAL 77 ENTERPRISE",
      "AGENT USERNAME": "GEN60101",
      "ADDRESS": "EMENA ",
      "Location": "NEAR EMENA SCHOOL PARK ",
      "GPS COORDINATES": "6°40'24.2'N 1°32'33.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3039,
      "AGENT BUSINESS NAME": "MBB 40 ENTERPRISE",
      "AGENT USERNAME": "MBE61101",
      "ADDRESS": "RACE COURSE ",
      "Location": "INSIDE RACE COURSE MARKET ",
      "GPS COORDINATES": "6°41'57.1'N 1°37'27.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3040,
      "AGENT BUSINESS NAME": "KYEI AMPONG ENTERPRISE ",
      "AGENT USERNAME": "KAE61301",
      "ADDRESS": "AYEDUASE ",
      "Location": "NEAR REALMA SALVATION CHURCH ",
      "GPS COORDINATES": "6°41'29.1'N 1°38'21.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3041,
      "AGENT BUSINESS NAME": "BOAVINC ENTERPRISE ",
      "AGENT USERNAME": "BEN60102",
      "ADDRESS": "KEJETIA ",
      "Location": "NEAR KEJETIA MARKET F1256",
      "GPS COORDINATES": "6°41'58.8'N 1°37'24.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3042,
      "AGENT BUSINESS NAME": "ZION EAGLE LIMITED ",
      "AGENT USERNAME": "ZEL61101",
      "ADDRESS": "MAXZIMA JUNCTION",
      "Location": "NEARMAXZIMA GOIL FILLING SATION ",
      "GPS COORDINATES": "6°40'31.9'N 1°33'06.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3043,
      "AGENT BUSINESS NAME": "GEOBENG 99 VENTURES",
      "AGENT USERNAME": "GEVSUB61401",
      "ADDRESS": "KEJETIA ",
      "Location": "INSIDE KEJETIA MARKET S1895",
      "GPS COORDINATES": "6°41'56.1'N 1°27'23.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3044,
      "AGENT BUSINESS NAME": "GEOBENG 99 VENTURES",
      "AGENT USERNAME": "GEVSUB61402",
      "ADDRESS": "RACE COURSE ",
      "Location": "INSIDE KEJETIA MARKET ",
      "GPS COORDINATES": "6°41'56.1'N 1°37'27.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3045,
      "AGENT BUSINESS NAME": "VIKAY PLUS ENTERPRISE ",
      "AGENT USERNAME": "VPE60101",
      "ADDRESS": "KENTIKRONO",
      "Location": "INSIDE KENTIKRONO",
      "GPS COORDINATES": "6°41'32.9'N 1°33'05.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3046,
      "AGENT BUSINESS NAME": "ANYQUAI'S 2014 ENTERPRISE",
      "AGENT USERNAME": "AEN610301",
      "ADDRESS": "KONONGO ",
      "Location": "OPPOSITE GCB KONONGO",
      "GPS COORDINATES": "6°37'46.1'N 1°10'12.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3047,
      "AGENT BUSINESS NAME": "CYNO LABS ",
      "AGENT USERNAME": "CLASUB61301",
      "ADDRESS": "AFRICAN HALL",
      "Location": "INSIDE AFRICA HALL KNUST ",
      "GPS COORDINATES": "6°40'50.0'N 1°34'31.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3048,
      "AGENT BUSINESS NAME": "CYNO LABS ",
      "AGENT USERNAME": "CLASUB61402",
      "ADDRESS": "KNUST ",
      "Location": "INSIDE FACULTY OF ARTS ",
      "GPS COORDINATES": "6°40'27.0'N 1°33'53.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3049,
      "AGENT BUSINESS NAME": "KINGSLEY AFUM VENTURES",
      "AGENT USERNAME": "KAV20302",
      "ADDRESS": "UNNUMBERED SHOP AT HO STATION",
      "Location": "NEAR HO STATION",
      "GPS COORDINATES": "6.0033-001-223-001",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3050,
      "AGENT BUSINESS NAME": "AIKINS PAGE VENTURES",
      "AGENT USERNAME": "APV20301",
      "ADDRESS": "HOUSE NUMBER AD37 ATIMPOKU",
      "Location": "OPPOSITE ATIMPOKU ROUNDABOUT",
      "GPS COORDINATES": "6.0048-0033-220",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3051,
      "AGENT BUSINESS NAME": "NHYIRAH AKROFI VENTURES",
      "AGENT USERNAME": "NAV20301",
      "ADDRESS": "HOUSE NUMBER B106",
      "Location": "NEAR AKRADE POST OFFICE",
      "GPS COORDINATES": "6.004-002-001",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3052,
      "AGENT BUSINESS NAME": "E.A AWUAH ENTERPRISE",
      "AGENT USERNAME": "EAA20302-SUB",
      "ADDRESS": "UNNUMBERED SHOP AT LARTEH",
      "Location": "NEAR LARTEH MARKET",
      "GPS COORDINATES": "6.0001-222-001",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3053,
      "AGENT BUSINESS NAME": "ZAYA EMPIRE",
      "AGENT USERNAME": "ZEMSUB20306",
      "ADDRESS": "UNNUMERED SHOP AT ASESEWA",
      "Location": "OPPOSITE THE STAR FILING STATION",
      "GPS COORDINATES": "6.0214-111-220",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3054,
      "AGENT BUSINESS NAME": "KOBBY-KHEM PHONES AND ACCESSORIES ",
      "AGENT USERNAME": "KKP20101",
      "ADDRESS": "NJ 616 NKAWKAW CENTRAL",
      "Location": "NEAR OBUORBA FM",
      "GPS COORDINATES": "6°33'07.6' N 0°46'04.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3055,
      "AGENT BUSINESS NAME": "SOME UNITS VENTURES",
      "AGENT USERNAME": "SUVSUB30203",
      "ADDRESS": "UCC",
      "Location": "SCIENCE MARKET",
      "GPS COORDINATES": "5°06'56.0'N1°17'34.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3056,
      "AGENT BUSINESS NAME": "BAGO MONEY VENTURES",
      "AGENT USERNAME": "BMV30203",
      "ADDRESS": "BANTAMA ELMINA",
      "Location": "PENTECOST CHURCH",
      "GPS COORDINATES": "5°04'52.7'N1°21'32.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3057,
      "AGENT BUSINESS NAME": "SOME UNITS VENTURES",
      "AGENT USERNAME": "SUVSUB30201",
      "ADDRESS": "UCC",
      "Location": "SCIENCE MARKET",
      "GPS COORDINATES": "5°06'56.0N1°17'34.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3058,
      "AGENT BUSINESS NAME": "FREMWINA ENT ",
      "AGENT USERNAME": "FEN20102",
      "ADDRESS": "HN TC - 45  TWENEDURASE",
      "Location": "NEAR PRESBY CHURCH",
      "GPS COORDINATES": "6°36'16.7'  N 0°47'02.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3059,
      "AGENT BUSINESS NAME": "MIZQUAYE VENTURES ",
      "AGENT USERNAME": "MVE20102",
      "ADDRESS": "HN M 24 ABETIFI KWAHU",
      "Location": "OPPOSITE POLICE STATION ",
      "GPS COORDINATES": "6°40'05.7'N 0°44'35.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3060,
      "AGENT BUSINESS NAME": "Juvyblinkz KY2",
      "AGENT USERNAME": "JKE90101",
      "ADDRESS": "NAVRONGU",
      "Location": "NEAR NAVRONGU POLICE STATION",
      "GPS COORDINATES": "10.896838, -1.089975",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3061,
      "AGENT BUSINESS NAME": "KAD EXCLUSIVE ENT",
      "AGENT USERNAME": "KEE20101",
      "ADDRESS": "AB 53 NKWATIA",
      "Location": "NEAR LORRY STATION ",
      "GPS COORDINATES": "6°37'52.0' N 0°44'24.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3062,
      "AGENT BUSINESS NAME": "GLOBERTSON ENTERPRISE",
      "AGENT USERNAME": "GSE90101",
      "ADDRESS": "SUMBRUNGU",
      "Location": "NEAR NEW JOY MEDICAL CENTRE",
      "GPS COORDINATES": "10.819586-0.933289",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3063,
      "AGENT BUSINESS NAME": "GREAT GRACE VENTURES ",
      "AGENT USERNAME": "GGV20101",
      "ADDRESS": "TG 1B ATI, NEW TAFO AKIM",
      "Location": "NEAR ATI MARKET",
      "GPS COORDINATES": "6°13'00.5' N 0°21'59.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3064,
      "AGENT BUSINESS NAME": "NAAWAHASAD VENTURES ",
      "AGENT USERNAME": "NVE20101",
      "ADDRESS": "HN 680 NKAWKAW ACHIESE",
      "Location": "NEAR STAR LIGHT HOTEL JUNCTION ",
      "GPS COORDINATES": "6°33'29.7' N 0°46'36.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3065,
      "AGENT BUSINESS NAME": "HONEST TO ALL ENTERPRISE",
      "AGENT USERNAME": "HTA90101",
      "ADDRESS": "NAVRONGU, NEAR FIRE SERVICE",
      "Location": "NEAR NAVRONGU FIRE SERVICE",
      "GPS COORDINATES": "10.895839-1,090099",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3066,
      "AGENT BUSINESS NAME": "FREMWINA ENT ",
      "AGENT USERNAME": "FEN20102",
      "ADDRESS": "HN TC - 45 KWAHU BESEASE",
      "Location": "NEAR THE MOSQUE ",
      "GPS COORDINATES": "6°36'24.5' N 0°53'47.1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3067,
      "AGENT BUSINESS NAME": "SIMON YUSUNE ENTERPRISE",
      "AGENT USERNAME": "SYE90101",
      "ADDRESS": "UNNUMBERED CONTAINER, DACHIO",
      "Location": "NEAR DACHIO PRIMARY SCHOOL",
      "GPS COORDINATES": "10840425,-0.762393",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3068,
      "AGENT BUSINESS NAME": "ABIJOO 1 ENTERPRISE",
      "AGENT USERNAME": "AEN20104",
      "ADDRESS": "HN NF 659 NKAWKAW CENTRAL",
      "Location": "NEAR AGBLOSHIE MARKET ",
      "GPS COORDINATES": "6°33'03.4' N 0°46'01.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3069,
      "AGENT BUSINESS NAME": "ERYCKO VENTURES ",
      "AGENT USERNAME": "EVE20102",
      "ADDRESS": "BT A 110 BONTRESE BEGORO",
      "Location": "NEAR POST OFFICE ",
      "GPS COORDINATES": "6°22'55.8' N 0°22'39.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3070,
      "AGENT BUSINESS NAME": "SARAH KONLAN ENTERPRISE",
      "AGENT USERNAME": "SKE90101",
      "ADDRESS": "BUKERE, BOLGA",
      "Location": "NEAR MACLEAN DAM",
      "GPS COORDINATES": "10'47'49.0''N0'50'59.6''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3071,
      "AGENT BUSINESS NAME": "K.ODAME VENTURES ",
      "AGENT USERNAME": "KOV20101",
      "ADDRESS": "OBD 50 OBUASE BEGORO",
      "Location": "NEAR OBORHO STATION ",
      "GPS COORDINATES": "6°23'15.4' N 0°22'31.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3072,
      "AGENT BUSINESS NAME": "KINGSBERG VENTURES ",
      "AGENT USERNAME": "KVE20101",
      "ADDRESS": "BT 93 APAA JUNCTION,  BEGORO",
      "Location": "NEAR APAA STATION ",
      "GPS COORDINATES": "6°23'25.2' N 0°22'47.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3073,
      "AGENT BUSINESS NAME": "KWAUDREY COMPANY LIMITED ",
      "AGENT USERNAME": "KCL40101",
      "ADDRESS": "NKROFUL ",
      "Location": "NEAR ROOF DEPOT ",
      "GPS COORDINATES": "4.953049,-1.750219",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3074,
      "AGENT BUSINESS NAME": "ENYIDASO WO NYAME HO VENTURES ",
      "AGENT USERNAME": "EWN40601",
      "ADDRESS": "KOJOKROM",
      "Location": "CLOSE TO THE CHIEFS PALACE ",
      "GPS COORDINATES": "4.985234,-1.762452",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3075,
      "AGENT BUSINESS NAME": "ELIBEN VENTURES ",
      "AGENT USERNAME": "EVE40602",
      "ADDRESS": "KOJOKROM",
      "Location": "NEAR ROYAL CHILD EDUCATION ",
      "GPS COORDINATES": "4.971051,-1.728890",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3076,
      "AGENT BUSINESS NAME": "DOMINIC AGYEMAN VENTURES ",
      "AGENT USERNAME": "DAV40601",
      "ADDRESS": "EFFIAKUMA ",
      "Location": "NEAR TOTAL FILLING STATION ",
      "GPS COORDINATES": "4.9309374,-1.7632721",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3077,
      "AGENT BUSINESS NAME": "BIG DANNS VENTURES",
      "AGENT USERNAME": "BDA90101",
      "ADDRESS": "UNNUMBERED CONTAINER BUNKPURUNGU",
      "Location": "NEAR WANG GUEST HOUSE",
      "GPS COORDINATES": "10'31'20.7''N0'05'19.8''E",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3078,
      "AGENT BUSINESS NAME": "WEST HOPE BUSINESS SERVICES ",
      "AGENT USERNAME": "WHB40601-SUB",
      "ADDRESS": "EFFIAKUMA ",
      "Location": "CLOSE TO WESTERN VIP HOTEL ",
      "GPS COORDINATES": "4.9239634,-1.7661636",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3079,
      "AGENT BUSINESS NAME": "WEST HOPE BUSINESS SERVICES ",
      "AGENT USERNAME": "WHB40602-SUB",
      "ADDRESS": "KETAN ",
      "Location": "NEAR AHANTAMAN SHS",
      "GPS COORDINATES": "4.9592875,-1.7288594",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3080,
      "AGENT BUSINESS NAME": "WEST HOPE BUSINESS SERVICES ",
      "AGENT USERNAME": "WHB40603-SUB",
      "ADDRESS": "ANAJI ",
      "Location": "NEAR QUEENSLAND HOTEL ",
      "GPS COORDINATES": "4.9383790,-1.7774550",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3081,
      "AGENT BUSINESS NAME": "ADEPA GRACE ENTERPRISE",
      "AGENT USERNAME": "AGE60401",
      "ADDRESS": "Ophelia",
      "Location": "Near the taxi rank",
      "GPS COORDINATES": "37.9101°N,75.2836°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3082,
      "AGENT BUSINESS NAME": "A A DIVINE ENTERPRISE ",
      "AGENT USERNAME": "ADE60401",
      "ADDRESS": "Abrepo",
      "Location": "Near kumasi girls school ",
      "GPS COORDINATES": "6.7273°N6°43'38'0W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3083,
      "AGENT BUSINESS NAME": "Sir Manu Nyame  Nti Enterprise ",
      "AGENT USERNAME": "SMN60401",
      "ADDRESS": "Sewua",
      "Location": "Near the high tension",
      "GPS COORDINATES": "6.6442°N,1.5721°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3084,
      "AGENT BUSINESS NAME": "Simple Kwame 186 Ventures",
      "AGENT USERNAME": "SKV60401",
      "ADDRESS": "Adankwame ",
      "Location": "Near the market",
      "GPS COORDINATES": "6.7994°N,1.7127°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3085,
      "AGENT BUSINESS NAME": "Free street enterprise",
      "AGENT USERNAME": "FSE60401",
      "ADDRESS": "Abrepo junction ",
      "Location": "Opposite angel FM",
      "GPS COORDINATES": "6.7084°N,1.6372°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3086,
      "AGENT BUSINESS NAME": "Trust none of them ventures",
      "AGENT USERNAME": "TNT60401",
      "ADDRESS": "Bohyen",
      "Location": "Opposite light house chapel",
      "GPS COORDINATES": "6.7156°N,1.6617°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3087,
      "AGENT BUSINESS NAME": "Ignatus metal engineering",
      "AGENT USERNAME": "IME60401",
      "ADDRESS": "Kokoben",
      "Location": "Near Royal aroma pub",
      "GPS COORDINATES": "6.7994°N,1.7127°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3088,
      "AGENT BUSINESS NAME": "Emmanuel yeboah 75 enterprise",
      "AGENT USERNAME": "EYE60401",
      "ADDRESS": "Bokoro",
      "Location": "Near bokoro market",
      "GPS COORDINATES": "6.645167N-1.612949W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3089,
      "AGENT BUSINESS NAME": "The Ess ventures ",
      "AGENT USERNAME": "TEESUB00401",
      "ADDRESS": "Unnumbered shop at osu",
      "Location": "Opposite kingdom fine wine",
      "GPS COORDINATES": "(5.5527060, -0.1887490)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3090,
      "AGENT BUSINESS NAME": "John Addai mununkum enterprise ",
      "AGENT USERNAME": "JAMSUB60401",
      "ADDRESS": "Asuofua ",
      "Location": "Near the market ",
      "GPS COORDINATES": "6.6540°N,1.6265°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3091,
      "AGENT BUSINESS NAME": "GB plus ventures ",
      "AGENT USERNAME": "GPV00401",
      "ADDRESS": "Unnumbered shop at osu ",
      "Location": "Near access bank",
      "GPS COORDINATES": "(5.5527400, -0.1899570)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3092,
      "AGENT BUSINESS NAME": "John Addai Mununkum enterprise ",
      "AGENT USERNAME": "JAMSUB60402",
      "ADDRESS": "Nketia",
      "Location": "Near the taxi rank",
      "GPS COORDINATES": "6.6540°N,1.6265°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3093,
      "AGENT BUSINESS NAME": "Appoh one enterprise ",
      "AGENT USERNAME": "AEN02701",
      "ADDRESS": "Unnumbered shop at Teshie ",
      "Location": "Near LEKMA hospital ",
      "GPS COORDINATES": "(5.6044130, -0.1217740)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3094,
      "AGENT BUSINESS NAME": "Senior Man O enterprise ",
      "AGENT USERNAME": "SEM02201",
      "ADDRESS": "Unnumbered shop at dzorwulu ",
      "Location": "Near special ice company ",
      "GPS COORDINATES": "(5.6120130, -0.1979500)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3095,
      "AGENT BUSINESS NAME": "Great Saabsco enterprise ",
      "AGENT USERNAME": "GSE02201",
      "ADDRESS": "Unnumbered shop at dzorwulu ",
      "Location": "Opposite the high tension ",
      "GPS COORDINATES": "(5.6114410, -0.2005620)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3096,
      "AGENT BUSINESS NAME": "REHOVOT HALAL",
      "AGENT USERNAME": "RHA40101",
      "ADDRESS": "PT 127 ANAJI",
      "Location": "CLOSE TO MORNING GLORY INTERNATIONAL SCHOOL",
      "GPS COORDINATES": "4°55'30.9'N 1°46'27.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3097,
      "AGENT BUSINESS NAME": "ERNEST OBENG",
      "AGENT USERNAME": "EOB20101",
      "ADDRESS": "TB 52 , NEW TAFO AKIM",
      "Location": "ADJACENT KYEIBEE HOTEL ",
      "GPS COORDINATES": "6°13'14.0' N 0°21'53.8' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3098,
      "AGENT BUSINESS NAME": "Humble Amoateng Ventures ",
      "AGENT USERNAME": "HAV60401",
      "ADDRESS": "Kuntenase ",
      "Location": "Kuntenase station",
      "GPS COORDINATES": "6°32'.28.9'N1°28'36.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3099,
      "AGENT BUSINESS NAME": "PARTHUR SERVICES ",
      "AGENT USERNAME": "PSE01004",
      "ADDRESS": "TESHIE TSUIBLEOO ",
      "Location": "OPPOSITE MTN NETWORK TOWER ",
      "GPS COORDINATES": "5'36'01.0'06'54.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3100,
      "AGENT BUSINESS NAME": "STARBOY NATH VENTURES ",
      "AGENT USERNAME": "SNV20101",
      "ADDRESS": "HN A 58 KWAHU TAFO",
      "Location": "NEAR LORRY STATION ",
      "GPS COORDINATES": "6°39'25.4' N 0°39'44.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3101,
      "AGENT BUSINESS NAME": "Mary ayarmah enterprise ",
      "AGENT USERNAME": "MAE60401",
      "ADDRESS": "Kuntenase ",
      "Location": "Kuntenase station",
      "GPS COORDINATES": "6°32'28.7'N1°28'37.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3102,
      "AGENT BUSINESS NAME": "PARTHUR SERVICES ",
      "AGENT USERNAME": "PSE01005",
      "ADDRESS": "TESHIE MAAMLI",
      "Location": "NEAR KLANAA",
      "GPS COORDINATES": "5'34'43.3'N0'06'07.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3103,
      "AGENT BUSINESS NAME": "ROSEJERSY ENTERPRISE",
      "AGENT USERNAME": "REN40101",
      "ADDRESS": "UNNUMBERED SHOP INSIDE QUEEN OF PEACE ANAJI",
      "Location": "CLOSE TO MANFORD FIELD SCHOOL",
      "GPS COORDINATES": "4°57'00.2'N1°46'52.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3104,
      "AGENT BUSINESS NAME": "CHARLES YEBOAH VENTURES ",
      "AGENT USERNAME": "CYV60401",
      "ADDRESS": "Pramso ",
      "Location": "Near St Michael's midwifery",
      "GPS COORDINATES": "6°34'06.8'N1°31'35.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3105,
      "AGENT BUSINESS NAME": "Pillars mother care ",
      "AGENT USERNAME": "PMC02901",
      "ADDRESS": "Unnumbered shop at dzorwulu ",
      "Location": "Near uba bank",
      "GPS COORDINATES": "(5.6119550, -0.2030530)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3106,
      "AGENT BUSINESS NAME": "AUTO UPDATE ENGINEERING VENTURES ",
      "AGENT USERNAME": "AUE20101",
      "ADDRESS": "HN Z 11 ABETIFI KWAHU",
      "Location": "BEHIND POLICE STATION ",
      "GPS COORDINATES": "6°40'13.9' N 0°44'29.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3107,
      "AGENT BUSINESS NAME": "Lizzy o 2020 ent",
      "AGENT USERNAME": "L0E60401",
      "ADDRESS": "Atonsu",
      "Location": "Near Atonsu FBGL",
      "GPS COORDINATES": "6°39'23.7'N1°35'31.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3108,
      "AGENT BUSINESS NAME": "INNO-KET ENT.",
      "AGENT USERNAME": "IKE02701",
      "ADDRESS": "NUNGUA ",
      "Location": "NEAR COCO BEACH ",
      "GPS COORDINATES": "5.592805,-0.078861",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3109,
      "AGENT BUSINESS NAME": "Sirsan Ronnie enterprise ",
      "AGENT USERNAME": "SRE02001",
      "ADDRESS": "Unnumbered shop at la ",
      "Location": "Behind fidelity bank",
      "GPS COORDINATES": "(5.5654130, -0.1458360)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3110,
      "AGENT BUSINESS NAME": "Doorstep digital satellite ",
      "AGENT USERNAME": "DDS60401",
      "ADDRESS": "Atonsu",
      "Location": "Near FBLG, atonsu branch",
      "GPS COORDINATES": "6°39'22.9'N1°35'24.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3111,
      "AGENT BUSINESS NAME": "THRE WHYTDOVS ENT",
      "AGENT USERNAME": "TWE20101",
      "ADDRESS": "HN E 108 MPRAESO KWAHU",
      "Location": "NEAR POST OFFICE ",
      "GPS COORDINATES": "6°35'32.2' N 0°44'02.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3112,
      "AGENT BUSINESS NAME": "442 VENTURES",
      "AGENT USERNAME": "4VE40101",
      "ADDRESS": "HOUSE NUMBER BU91/01 BUSUA",
      "Location": "NEAR TAXI RANK",
      "GPS COORDINATES": "WH-1039-2428",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3113,
      "AGENT BUSINESS NAME": "Migyikra word of service enterprise ",
      "AGENT USERNAME": "MWS02201",
      "ADDRESS": "Unnumbered shop at tse addo ",
      "Location": "Near God’s spanned shop",
      "GPS COORDINATES": "(5.5751630, -0.1362030)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3114,
      "AGENT BUSINESS NAME": "Frank osei enterprise ",
      "AGENT USERNAME": "FOE60401",
      "ADDRESS": "Atonsu ",
      "Location": "Near atonsu FBGL",
      "GPS COORDINATES": "6°39'24.8'N1°35'28.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3115,
      "AGENT BUSINESS NAME": "JACQUELINE EMEFA ENT.",
      "AGENT USERNAME": "JEE04901",
      "ADDRESS": "NUNGUA ",
      "Location": "FEW DRIVE DOWN COLDSTORE ",
      "GPS COORDINATES": "5.592264,-0.087119",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3116,
      "AGENT BUSINESS NAME": "Samplus multimedia and printing works",
      "AGENT USERNAME": "SMP60401",
      "ADDRESS": "Atonsu",
      "Location": "Near joy plus pub",
      "GPS COORDINATES": "6°39'17.6'N1°34'49.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3117,
      "AGENT BUSINESS NAME": "ADOM PRAISE'S CREATION",
      "AGENT USERNAME": "APC40101",
      "ADDRESS": "UNNUMBERED SHOP AT TAKORADI ",
      "Location": "INSIDE CAPE COAST STATION-TAKORADI",
      "GPS COORDINATES": "4°53'54.8491'N1°45'28.5916'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3118,
      "AGENT BUSINESS NAME": "SHINEHOOD ENT ",
      "AGENT USERNAME": "SHE01101",
      "ADDRESS": "SPINTEX ",
      "Location": "FEW DRIVE AWAY FROM COCA-COLA ROUNDABOUT ",
      "GPS COORDINATES": "5.643135,-0.112956",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3119,
      "AGENT BUSINESS NAME": "Willi viv enterprise ",
      "AGENT USERNAME": "WVE60401",
      "ADDRESS": "Agogo",
      "Location": "Inside show factory",
      "GPS COORDINATES": "6°39'09.4'N1°35'08.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3120,
      "AGENT BUSINESS NAME": "ASAREGEE SMART WAVE VENTURES ",
      "AGENT USERNAME": "ASW20101",
      "ADDRESS": "HN BG 97 , OBO KWAHU",
      "Location": "OPPOSITE COMMUNITY CENTRE ",
      "GPS COORDINATES": "6°36'21.0' N 0°46'11.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3121,
      "AGENT BUSINESS NAME": "Ahmadu Abubakari 89 enterprise",
      "AGENT USERNAME": "A8E60401",
      "ADDRESS": "Asaamang",
      "Location": "Near the park",
      "GPS COORDINATES": "6°46'18.7'N1°41'26.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3122,
      "AGENT BUSINESS NAME": "CLASSIC EVANS AFOTEY VENTURES ",
      "AGENT USERNAME": "CEV02701",
      "ADDRESS": "NUNGUA ",
      "Location": "NEAR FIFA HOUSE ",
      "GPS COORDINATES": "5.605661,-0.073473",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3123,
      "AGENT BUSINESS NAME": "PACVAN VENTURES",
      "AGENT USERNAME": "PRB40101",
      "ADDRESS": "STORE NO. 3 ESSIAMA KPOLE",
      "Location": "CLOSE TO ESSIAMA SENIOR HIGH TECHNICAL SCHOOL",
      "GPS COORDINATES": "4°56'11.6'N2°20'48.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3124,
      "AGENT BUSINESS NAME": "ALONZY TRADING VENTURES ",
      "AGENT USERNAME": "ATV20102",
      "ADDRESS": "HN A 25 MPRAESO KWAHU",
      "Location": "OPPOSITE PAGE ONE WASHING BAY",
      "GPS COORDINATES": "6°35'45.3' N 0°43'40.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3125,
      "AGENT BUSINESS NAME": "BDG DIVINE VENTURES ",
      "AGENT USERNAME": "BDV02701",
      "ADDRESS": "SAKUMONO ",
      "Location": "OPPOSITE SAKUMONO SCHOOL ",
      "GPS COORDINATES": "5'37'28.7'N0'03'35.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3126,
      "AGENT BUSINESS NAME": "GOD'S GIFT KB VENTURES",
      "AGENT USERNAME": "GGK40101",
      "ADDRESS": "STORE NO 3,ESSIKAFOAMBANTEM,BONYERE",
      "Location": "INSIDE AMANDI COMPANY",
      "GPS COORDINATES": "5°00'53.3'N2°42'03.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3127,
      "AGENT BUSINESS NAME": "ZEKEV ONE ON ONE VENTURES ",
      "AGENT USERNAME": "ZEN02701",
      "ADDRESS": "TESHIE TSUIBLEOO ",
      "Location": "OPPOSITE EV OIL",
      "GPS COORDINATES": "5.607004,-0.113731",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3128,
      "AGENT BUSINESS NAME": "IKE-IKE VENTURES",
      "AGENT USERNAME": "IIVSUB40103",
      "ADDRESS": "UNNUMBERED SHOP AT NEW TAKORADI",
      "Location": "NEAR THE GOIL DEPOT",
      "GPS COORDINATES": "4°54'44.9'N1°44'52.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3129,
      "AGENT BUSINESS NAME": "ALL IS WELL PALACE TRADING ",
      "AGENT USERNAME": "APT04901",
      "ADDRESS": "COCO BEACH ",
      "Location": "NEAR SANGO BEACH",
      "GPS COORDINATES": "5'35'08.9'N0'05'25.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3130,
      "AGENT BUSINESS NAME": "EBENEZER OBOSU VENTURE ",
      "AGENT USERNAME": "EOVSUB02701",
      "ADDRESS": "SPINTEX ",
      "Location": "NEAR COCA-COLA ROUNDABOUT ",
      "GPS COORDINATES": "5..643811,-0.111328",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3131,
      "AGENT BUSINESS NAME": "Sparks express ",
      "AGENT USERNAME": "(5.5643625, -0.1524531)",
      "ADDRESS": "Unnumbered shop at la",
      "Location": "Near la police station ",
      "GPS COORDINATES": "(5.5643625, -0.1524531)",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3132,
      "AGENT BUSINESS NAME": "EBIGYAH EBEN ENT ",
      "AGENT USERNAME": "E",
      "ADDRESS": "NUNGUA ",
      "Location": "ADJACENT NUNGUA POLICE STATION ",
      "GPS COORDINATES": "5.595069,-0.088402",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3133,
      "AGENT BUSINESS NAME": "DAN MISS BUSINESS LINKS",
      "AGENT USERNAME": "DBL40101",
      "ADDRESS": "UNNUMBERED SHOP AT AMANFUL,TAKORADI",
      "Location": "NEAR DAAVI AMA CHOP BAR",
      "GPS COORDINATES": "4°53'54.3'N1°45'48.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3134,
      "AGENT BUSINESS NAME": "HABIDES ENTERPRISE",
      "AGENT USERNAME": "HAE40101",
      "ADDRESS": "UNNUMBERED SHOP AT TAKORADI",
      "Location": "NEAR GPRTU MAIN OFFICE",
      "GPS COORDINATES": "4°53'56.2'N1°45'47.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3135,
      "AGENT BUSINESS NAME": "FRANHOR TRADE",
      "AGENT USERNAME": "FTR40101",
      "ADDRESS": "UNNUMBERED SHOP AT STC-TAKORADI",
      "Location": "NEAR STC YARD",
      "GPS COORDINATES": "4.8960625,-1.7648125",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3136,
      "AGENT BUSINESS NAME": "SIMMONS BILLS",
      "AGENT USERNAME": "SIB40101",
      "ADDRESS": "UNNUMBERED PLOT AT TAKORADI",
      "Location": "NEAR SEKONDI TAXI STATION",
      "GPS COORDINATES": "4°53'55.4'N1°45'29.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3137,
      "AGENT BUSINESS NAME": "EVEHAK VENTURES ",
      "AGENT USERNAME": "EVE40601",
      "ADDRESS": "BUTUMAGYEBU",
      "Location": "NEAR ALCATANRA RESTAURANT",
      "GPS COORDINATES": "4.9477080,-1.7428590",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3138,
      "AGENT BUSINESS NAME": "RES LINKS",
      "AGENT USERNAME": "RLI40101",
      "ADDRESS": "A SHOP AT EAST FIJIA,TAKORADI",
      "Location": "NEAR FIJIA EAST WATER WEST",
      "GPS COORDINATES": "4°56'08.9'N1°45'04.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3139,
      "AGENT BUSINESS NAME": "MAMA DOT COM ",
      "AGENT USERNAME": "MDC 40601.00",
      "ADDRESS": "EFFIAKUMA ",
      "Location": "NEAR THE SDA CHURCH ",
      "GPS COORDINATES": "4.924376,-1.763295",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3140,
      "AGENT BUSINESS NAME": "BLANDY BLINKS ENTERPRISE ",
      "AGENT USERNAME": "BBE40601",
      "ADDRESS": "BUTUMAGYEBU",
      "Location": "NEAR THE TTU CAMPUS ",
      "GPS COORDINATES": "4.9470587,-1.7438627",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3141,
      "AGENT BUSINESS NAME": "EON INTERACTIVE ",
      "AGENT USERNAME": "EIN40301",
      "ADDRESS": "ANAJI ",
      "Location": "NEAR NHYIRA HOTEL",
      "GPS COORDINATES": "4.8922917,-1.7501042",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3142,
      "AGENT BUSINESS NAME": "De-May Telecom and Business Centre",
      "AGENT USERNAME": "DBC61001",
      "ADDRESS": "Buokrom Estate",
      "Location": "Near B-Line Park",
      "GPS COORDINATES": "6°44'08.5'N1°35'12 0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3143,
      "AGENT BUSINESS NAME": "SEL 360 ENT",
      "AGENT USERNAME": "SEN03301",
      "ADDRESS": "TEMA COMMUNITY 1",
      "Location": "INFRONT OF FIDELITY BANK ",
      "GPS COORDINATES": "5.638670,-0.002126",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3144,
      "AGENT BUSINESS NAME": "K-Vic Enterprise",
      "AGENT USERNAME": "KVE61001",
      "ADDRESS": "Buokrom Estate F-Line",
      "Location": "Near the Police Station ",
      "GPS COORDINATES": "6°44'45 7'1°35'37.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3145,
      "AGENT BUSINESS NAME": "I.K Speedy Enterprise ",
      "AGENT USERNAME": "IKS60301",
      "ADDRESS": "Buokrom Estate",
      "Location": "Near CTI School",
      "GPS COORDINATES": "6°44'02.5'N1°35'38'7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3146,
      "AGENT BUSINESS NAME": "SEFTPAD SUSU ENTERPRISE ",
      "AGENT USERNAME": "SSE60201",
      "ADDRESS": "MMROM",
      "Location": "Near MMROM APPI DARK CHEMIST",
      "GPS COORDINATES": "6.703631,-1.623247",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3147,
      "AGENT BUSINESS NAME": "AWUNI BOARE ENTERPRISE",
      "AGENT USERNAME": "ABE30201",
      "ADDRESS": "ABURA",
      "Location": "ABURA TAXI RANK",
      "GPS COORDINATES": "5°08'00.5'N1°16'35.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3148,
      "AGENT BUSINESS NAME": "AL-RUFTOP ENTERPRISE ALRUFTOP",
      "AGENT USERNAME": "AEN60701",
      "ADDRESS": "ALABAR ",
      "Location": "NEAR IMAM LAMIN MOSQUE",
      "GPS COORDINATES": "6.699419,-1.616876",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3149,
      "AGENT BUSINESS NAME": "LUCKY RINO ENTERPRISE",
      "AGENT USERNAME": "LUR60701",
      "ADDRESS": "MMROM",
      "Location": "OPPOSITE ST. LOUIS DEMONSTRATION SCHOOL",
      "GPS COORDINATES": "6.70642,-1.62546",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3150,
      "AGENT BUSINESS NAME": "MENSTUTU ENTERPRISE",
      "AGENT USERNAME": "MEN60703",
      "ADDRESS": "ASHTOWN",
      "Location": "BEHIND ABIS PARK ",
      "GPS COORDINATES": "6.701938, -1.6181990",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3151,
      "AGENT BUSINESS NAME": "BRIDGET OWUSU 80 VENTURES",
      "AGENT USERNAME": "BO860701",
      "ADDRESS": "ASHTOWN",
      "Location": "SAINT LOUIS DEMONSTRATION SCHOOL",
      "GPS COORDINATES": "6.70642,-1.62546",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3152,
      "AGENT BUSINESS NAME": "STPH. O ANSAH ENTERPRISE",
      "AGENT USERNAME": "STA60701",
      "ADDRESS": "K.O METHODIST",
      "Location": "NEAR FIDELITY BANK",
      "GPS COORDINATES": "6.69746,-1.62985.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3153,
      "AGENT BUSINESS NAME": "STRENUOUS EFFORT ENTERPRISE STREN0802189692",
      "AGENT USERNAME": "SEE60701",
      "ADDRESS": "ASHTOWN",
      "Location": "INSIDE ADWUMIM MARKET",
      "GPS COORDINATES": "6.7000090, -1.16199640",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3154,
      "AGENT BUSINESS NAME": "Wedaga Ventures ",
      "AGENT USERNAME": "WVE60601",
      "ADDRESS": "AN UNNUMBERED STORE - ADUM",
      "Location": "NEAR THE MILITARY BARRACKS ADUM",
      "GPS COORDINATES": "6°41'35.8'N 1°37'33.8'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3155,
      "AGENT BUSINESS NAME": "S.K BREFO 3 ENTERPRISE",
      "AGENT USERNAME": "SBE60701",
      "ADDRESS": "ASHTOWN",
      "Location": "NEAR NEW ZONGO",
      "GPS COORDINATES": "6.6996460,-1.6192580",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3156,
      "AGENT BUSINESS NAME": "JASS-2 VENTURES",
      "AGENT USERNAME": "JVE61001",
      "ADDRESS": "ASABI",
      "Location": "NEAR ASABI ROAD TO ASOKPRE MAMPONG",
      "GPS COORDINATES": "6.71573,-1.57233",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3157,
      "AGENT BUSINESS NAME": "Hagan Noi Enterprise ",
      "AGENT USERNAME": "HNE60101",
      "ADDRESS": "An unnumbered shop  Asafo",
      "Location": "Near Kumasi Technical University ",
      "GPS COORDINATES": "6°44'00.7'N 1°38'37.9'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3158,
      "AGENT BUSINESS NAME": "KENNQUENN VENTURES",
      "AGENT USERNAME": "KQV61001",
      "ADDRESS": "KENYASE ABIREM",
      "Location": "NEAR ABROSANASE",
      "GPS COORDINATES": "6.72533,-1.57024",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3159,
      "AGENT BUSINESS NAME": "O2 STARS Enterprise",
      "AGENT USERNAME": "2SE60101",
      "ADDRESS": "An unnumbered store Adum",
      "Location": "Near Aseda House",
      "GPS COORDINATES": "6°41'20.4'N 1°37'11.5'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3160,
      "AGENT BUSINESS NAME": "Eric Adusei Enterprise ",
      "AGENT USERNAME": "EAE61101",
      "ADDRESS": "An unnumbered Shop Adum Pampaso",
      "Location": "Near the Central Police station ",
      "GPS COORDINATES": "6°41'46.2'N 1°37'28.4'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3161,
      "AGENT BUSINESS NAME": "POSSIBLE FARMS AND TRADING ENTERPRISE ",
      "AGENT USERNAME": "PFA61001",
      "ADDRESS": "ALABAR",
      "Location": "NEAR ALABAR MARKET",
      "GPS COORDINATES": "6.7002,-1.61696",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3162,
      "AGENT BUSINESS NAME": "NKUMENGNAYA JOSEPH VENTURES ",
      "AGENT USERNAME": "JNV61401",
      "ADDRESS": "An unnumbered Shop Adum",
      "Location": "Near Central  police station ",
      "GPS COORDINATES": "6'41'20.4'N 1°37'11.5'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3163,
      "AGENT BUSINESS NAME": "RASHAD ADAM ENTERPRISE",
      "AGENT USERNAME": "RAE60102",
      "ADDRESS": "ALABAR",
      "Location": "BEHIND IMAM LAMIN MOSQUE",
      "GPS COORDINATES": "6.699419,-1.616876",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3164,
      "AGENT BUSINESS NAME": "SUGLO VEL 2017 ENTERPRISE SUGLO2906179450",
      "AGENT USERNAME": "SUV61201",
      "ADDRESS": "DUASE",
      "Location": "NEAR DUASE STATION",
      "GPS COORDINATES": "6.72427,-1.5737",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3165,
      "AGENT BUSINESS NAME": "SIX PHOTO STUDIO ENTERPRISE",
      "AGENT USERNAME": "SPS60701",
      "ADDRESS": "ASHTOWN",
      "Location": "OPPOSITE UNIVERSAL MERCHANT BANK",
      "GPS COORDINATES": "6.70637,-1.62237",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3166,
      "AGENT BUSINESS NAME": "BROS BABS ENTERPRISE",
      "AGENT USERNAME": "BBE60701",
      "ADDRESS": "ALABAR",
      "Location": "NEAR ROXY CINEMA",
      "GPS COORDINATES": "6.70083,-1.61579",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3167,
      "AGENT BUSINESS NAME": "AL MALIKUL MULK ENTERPRISE",
      "AGENT USERNAME": "AMM60701",
      "ADDRESS": "ALABAR",
      "Location": "BEHIND ARB LIMITED",
      "GPS COORDINATES": "6.699419,-1.616876",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3168,
      "AGENT BUSINESS NAME": "SHERIFFMOD ENTERPRISE SHERI2011194235",
      "AGENT USERNAME": "SHE61001",
      "ADDRESS": "DUASE ",
      "Location": "NEAR GARDEN CITY JUNCTION",
      "GPS COORDINATES": "6.73963,-1.56506",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3169,
      "AGENT BUSINESS NAME": "NATHANIEL OWUSU ENTERPRISE",
      "AGENT USERNAME": "NAE61001",
      "ADDRESS": "ABIREM ",
      "Location": "NEAR SCHOOL JUNCTION",
      "GPS COORDINATES": "6.72533,-1.57024.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3170,
      "AGENT BUSINESS NAME": "Amens Point Ventures ",
      "AGENT USERNAME": "APV60101",
      "ADDRESS": "Unnumbered house Asawasi",
      "Location": "Near Odotobri Rural Bank",
      "GPS COORDINATES": "6°41'55.2'N 1°36'28.8'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3171,
      "AGENT BUSINESS NAME": "Journal Square Ventures ",
      "AGENT USERNAME": "JSV60201",
      "ADDRESS": "An unnumbered  Store Adum Kumasi",
      "Location": "Near Oyerepa FM Adum",
      "GPS COORDINATES": "6°41'36.0'N 1°37'22.0'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3172,
      "AGENT BUSINESS NAME": "PALACE ROYAL ENTERPRISE",
      "AGENT USERNAME": "prbsub90101",
      "ADDRESS": "BOLGATANGA MARKET",
      "Location": "NEAR REPUBLIC BANK, BOLGATANGA",
      "GPS COORDINATES": "10'47'10.0''N0'50'41.0''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3173,
      "AGENT BUSINESS NAME": "SUCCESS BUSINESS CENTRE",
      "AGENT USERNAME": "SBU90101",
      "ADDRESS": "BOLGATANGA ",
      "Location": "OPPOSOTE THE MAIN STATION ENTRANCE, BOLGATANGA",
      "GPS COORDINATES": "10'47'06.7''N0'50'54.2''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3174,
      "AGENT BUSINESS NAME": "SARPSON ENTERPRISE",
      "AGENT USERNAME": "SAR 70301.00",
      "ADDRESS": "ATEBUBU, BONO EAST REGION",
      "Location": "OPPOSITE EJURAMAN RURAL MAN, ATEBUBU",
      "GPS COORDINATES": "7.750465,-0.986773",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3175,
      "AGENT BUSINESS NAME": "KANYODIN ENT.",
      "AGENT USERNAME": "KEN03301",
      "ADDRESS": "TEMA COMMUNITY 1",
      "Location": "OPPOSITE ZENITH BANK",
      "GPS COORDINATES": "5'38'14.1'N0'00'4.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3176,
      "AGENT BUSINESS NAME": "J.O. NTIRI ENTERPRISE",
      "AGENT USERNAME": "JONSUB30204",
      "ADDRESS": "ELMINA",
      "Location": "OPPOSITE SSNIT FLAT",
      "GPS COORDINATES": "4°49'27.9'N1°13'31.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3177,
      "AGENT BUSINESS NAME": "BLESSED FRANCIS VENTURES",
      "AGENT USERNAME": "BFV70301",
      "ADDRESS": "TECHIMAN -.MAMPRUSI BONO EAST REGION",
      "Location": "NEAR OPPOSITE MAMPRUSI MAIN MOSQUE",
      "GPS COORDINATES": "7.590673,-1.942236",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3178,
      "AGENT BUSINESS NAME": "MAX -UNIMAX VENTURES",
      "AGENT USERNAME": "MUV70301",
      "ADDRESS": "TECHIMAN MAIN MARKET, BONO EAST REGION",
      "Location": "OPPOSITE LATEX FORM COMPANY INSIDE TECHIMAN MARKET,WA STATION",
      "GPS COORDINATES": "7.5845010,-1.9403690",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3179,
      "AGENT BUSINESS NAME": "JANICE -GEE VENTURES",
      "AGENT USERNAME": "JGV70301",
      "ADDRESS": "TECHIMAN ZONGO L/A, BONO EAST REGION",
      "Location": "BEHIND ZONGO L/A BASIC SCHOOL",
      "GPS COORDINATES": "7.592151,-1.935037",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3180,
      "AGENT BUSINESS NAME": "NICE-LYGLO VENTURES ",
      "AGENT USERNAME": "NLV70101",
      "ADDRESS": "Box 23 SUNYANI",
      "Location": "OPPOSITE QUAPTAIN",
      "GPS COORDINATES": "7. 11. 08. 1N 2. 04. 23. 3'w",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3181,
      "AGENT BUSINESS NAME": "SARA GOD FIRST ENTERPRISE ",
      "AGENT USERNAME": "SGF70501",
      "ADDRESS": "BOX 60 SUNYANI",
      "Location": "OPPOSITE  ASSEMBLIES OF GOD,  ODUMASE",
      "GPS COORDINATES": "7. 14. 30. 5N 3. 01. 34. 4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3182,
      "AGENT BUSINESS NAME": "EMMANUEL 95 ENTERPRISE",
      "AGENT USERNAME": "E9E70102-SUB",
      "ADDRESS": "BLOCK 12 AREA 4",
      "Location": "OPPOSITE TWENE AMANFO SHS",
      "GPS COORDINATES": "7. 31. 01. 2N 3 . 03 18. 3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3183,
      "AGENT BUSINESS NAME": "OK EMMA's VENTURES ",
      "AGENT USERNAME": "OEV70101",
      "ADDRESS": "BOX 34 SUNYANI",
      "Location": "OPPOSITE SDA SCHOOL,  ODUMASE",
      "GPS COORDINATES": "7. 31. 04. 3N 1. 60. 41. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3184,
      "AGENT BUSINESS NAME": "AGYENGO EUGENE ENTERPRISE ",
      "AGENT USERNAME": "AEE70101",
      "ADDRESS": "Bx 12 BEREKUM",
      "Location": "OPPOSITE GOIL STATION",
      "GPS COORDINATES": "7. 38. 43. 3N 1. 08. 43. 4 ' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3185,
      "AGENT BUSINESS NAME": "DARK-EMM SURVIVAL ENTERPRISE ",
      "AGENT USERNAME": "DES70101",
      "ADDRESS": "B 60 Fiapre",
      "Location": "OPPOSITE CHIEF PALACE ",
      "GPS COORDINATES": "7. 06. 14. 3 N 2. 09. 38. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3186,
      "AGENT BUSINESS NAME": "MICHAEL VIBE VENTURES ",
      "AGENT USERNAME": "MVV70101",
      "ADDRESS": "B 80 Dreamfield , ABESIM",
      "Location": "OPPOSITE  SIBCO SCHOOL ",
      "GPS COORDINATES": "7. 01. 13. 3'N 3. 02. 47. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3187,
      "AGENT BUSINESS NAME": "EMMA TOUCH VENTURES ",
      "AGENT USERNAME": "ETV70501",
      "ADDRESS": "B 76 SUNYANI",
      "Location": "NEAR PENKWASE TRAFIIC",
      "GPS COORDINATES": "7. 11. 13. 3' N 1. 02. 57. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3188,
      "AGENT BUSINESS NAME": "AMO -WINFRED ENTERPRISE ",
      "AGENT USERNAME": "WAE70401",
      "ADDRESS": "B 76 SUNYANI",
      "Location": "OPPOSITE market",
      "GPS COORDINATES": "7. 35. 23. 9'N 2. 56. 07. 9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3189,
      "AGENT BUSINESS NAME": "PAPA JAKHOTA ENTERPRISE ",
      "AGENT USERNAME": "PJE70101",
      "ADDRESS": "B 43 Kotoktom",
      "Location": "OPPOSITE FUNERAL GROUND",
      "GPS COORDINATES": "7. 56. 06. 1'N 3. 45. 23. 9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3190,
      "AGENT BUSINESS NAME": "ROCK SPANKY ENTERPRISE ",
      "AGENT USERNAME": "RSE70501",
      "ADDRESS": "B 57 SUMA AHENKRO",
      "Location": "OPPOSITE  ENG FILLING STATION",
      "GPS COORDINATES": "7. 44. 06. 1'N 2. 48. 32. 9' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3191,
      "AGENT BUSINESS NAME": "ABOVE ALL BOOKSHOP AND BUSINESS SERVICE ",
      "AGENT USERNAME": "AAB70101",
      "ADDRESS": "B 56 FIAPRE",
      "Location": "ADJACENT FIRE SERVICE ",
      "GPS COORDINATES": "8.0. 39. 1'N 0. 09. 42. 0' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3192,
      "AGENT BUSINESS NAME": "KING SHARE ENTERPRISE ",
      "AGENT USERNAME": "KSE70101",
      "ADDRESS": "PA 79 suma Ahenkro",
      "Location": "OPPOSITE  POLICE STATION",
      "GPS COORDINATES": "7.45. 65. 2'N 1. 61. 87. 0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3193,
      "AGENT BUSINESS NAME": "GLOVERS KING JAMES VENTURES",
      "AGENT USERNAME": "GKV70201",
      "ADDRESS": "UNNUMBERED STORE AT SAMPA",
      "Location": "NEAR SAMPA MARKET ",
      "GPS COORDINATES": "7.94910° N, 2.69306° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3194,
      "AGENT BUSINESS NAME": "BRIGHTGOD PRESTIGE ENTERPRISE ",
      "AGENT USERNAME": "BGPSUB70204",
      "ADDRESS": "UNNUMBERED STORE AT WAMFIE",
      "Location": "NEAR WAMFIE OLD LORRY STATION",
      "GPS COORDINATES": "7.29579° N, 2.70048° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3195,
      "AGENT BUSINESS NAME": "CHIEF STEPHEN VENTURES",
      "AGENT USERNAME": "CSV70201",
      "ADDRESS": "UNNUMBERED CONTAINER AT DORMAA AKWAMU",
      "Location": "NEAR THE DORMAA AKWAMU MARKET",
      "GPS COORDINATES": "7.32040° N, 2.73951° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3196,
      "AGENT BUSINESS NAME": "CHRIST IS ALL ANNEX",
      "AGENT USERNAME": "CIA70201",
      "ADDRESS": "P. O BOX 49 WAMFIE",
      "Location": "NEAR THE PRESBY SCHOOL ",
      "GPS COORDINATES": "7.30289° N, 2.69915° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3197,
      "AGENT BUSINESS NAME": "MAMA LINK ENTERPRISE ",
      "AGENT USERNAME": "MLE70201",
      "ADDRESS": "UNNUMBERED STORE AT BEREKUM",
      "Location": "ADJACENT LIBAWS PHARMACY ",
      "GPS COORDINATES": "7.45002° N, 2.58373° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3198,
      "AGENT BUSINESS NAME": "SIMON’S NEW DAWN ENTERPRISE ",
      "AGENT USERNAME": "SND70201",
      "ADDRESS": "UNNUMBERED STORE AT WAMFIE",
      "Location": "NEAR THE PRESBY SCHOOL ",
      "GPS COORDINATES": "7.29930° N, 2.69982° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3199,
      "AGENT BUSINESS NAME": "DIVINE STRATEGY ENTERPRISE",
      "AGENT USERNAME": "DSE70201",
      "ADDRESS": "UNNUMBERED CONTAINER AT DORMAA AKWAMU",
      "Location": "INSIDE SAINT AMBROSE TRAINING COLLEGE ",
      "GPS COORDINATES": "7.30626° N, 2.73970° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3200,
      "AGENT BUSINESS NAME": "Omar Luches Enterprise ",
      "AGENT USERNAME": "OLE60301",
      "ADDRESS": "KASOA Overhead ",
      "Location": "Near Takoradi Station ",
      "GPS COORDINATES": "5.5347117,-0.4266564",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3201,
      "AGENT BUSINESS NAME": "Jista-‘Em Business Centre ",
      "AGENT USERNAME": "JEB04401",
      "ADDRESS": "KASOA New Market Rd ",
      "Location": "Near Ecobank ",
      "GPS COORDINATES": "5.5445000,-0.4318816",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3202,
      "AGENT BUSINESS NAME": "SAFA MIRASH ENTERPRISE ",
      "AGENT USERNAME": "SMESUB04401",
      "ADDRESS": "Millennium City ",
      "Location": "Near Nigerian Supermarket ",
      "GPS COORDINATES": "5.4907691,-0.443475",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3203,
      "AGENT BUSINESS NAME": "SAFA MIRASH enterprise ",
      "AGENT USERNAME": "SMESUB04402",
      "ADDRESS": "Millennium City ",
      "Location": "Near Pickmore Supermarket ",
      "GPS COORDINATES": "5.4933530,-0.4365540",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3204,
      "AGENT BUSINESS NAME": "BENELI REHOBOTH VENTURES LIMITED",
      "AGENT USERNAME": "NRV70201",
      "ADDRESS": "UNNUMBERED STORE AT WAMFIE, DORMAA ROAD",
      "Location": "ADJACENT NDC OFFICE",
      "GPS COORDINATES": "7.29821° N, 2.70008° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3205,
      "AGENT BUSINESS NAME": "NUHU MOHAMMED 2020 VENTURES",
      "AGENT USERNAME": "NMV70201",
      "ADDRESS": "UNNUMBERED CONTAINER AT ASUOTIANO, DORMAA ROAD",
      "Location": "ADJACENT THE METHODIST CHURCH ",
      "GPS COORDINATES": "7.32495° N, 2.70575° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3206,
      "AGENT BUSINESS NAME": "QUACE UNITY STORES",
      "AGENT USERNAME": "QUS70201",
      "ADDRESS": "UNNUMBERED CONTAINER AT BEREKUM SEIKWA ROAD",
      "Location": "NEAR THE LORRY STATION ",
      "GPS COORDINATES": "7.45197° N, 2.58183° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3207,
      "AGENT BUSINESS NAME": "OKYEADIE NYAME ENTERPRISE ",
      "AGENT USERNAME": "ONE70201",
      "ADDRESS": "UNNUMBERED STORE AT BEREKUM, MPATAPO ROAD",
      "Location": "NEAR BEREKUM MARKET",
      "GPS COORDINATES": "7.45144° N, 2.58125° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3208,
      "AGENT BUSINESS NAME": "STARBOY DACOSTA ENTERPRISE ",
      "AGENT USERNAME": "SDE70201",
      "ADDRESS": "UNNUMBERED STORE AT BEREKUM EAST MUNICIPALITY ",
      "Location": "BEHIND THE MARKET",
      "GPS COORDINATES": "7.45090° N, 2.58118° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3209,
      "AGENT BUSINESS NAME": "DANIEL KYERE ENTERPRISE",
      "AGENT USERNAME": "DKE70201",
      "ADDRESS": "UNNUMBERED STORE AT KATO, BEREKUM EAST MUNICIPALITY ",
      "Location": "OPPOSITE GATEWAY SUSU & SAVINGS ",
      "GPS COORDINATES": "7.45090° N, 2.58118° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3210,
      "AGENT BUSINESS NAME": "PROMPT LINK ",
      "AGENT USERNAME": "PRL04401",
      "ADDRESS": "Kasoa Krispol",
      "Location": "Mother and Child Hospital ",
      "GPS COORDINATES": "5.5310960, -0.4509500",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3211,
      "AGENT BUSINESS NAME": "BEK PRAB ENTERPRISE ",
      "AGENT USERNAME": "BPE70201",
      "ADDRESS": "UNNUMBERED CONTAINER AT KATO, BEREKUM EAST MUNICIPALITY ",
      "Location": "OPPOSITE THE PENTECOST CHURCH ",
      "GPS COORDINATES": "7.45090° N, 2.58118° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3212,
      "AGENT BUSINESS NAME": "Prompt Link ",
      "AGENT USERNAME": "PRL04401",
      "ADDRESS": "Kryspol City ",
      "Location": "Near Mother and Child ",
      "GPS COORDINATES": "5.5310960, -0.4509500",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3213,
      "AGENT BUSINESS NAME": "GLOBAL EXCELLENCE DISTRIBUTION SERVICES",
      "AGENT USERNAME": "GLDSUB70202",
      "ADDRESS": "UNNUMBERED STORE AT DORMAA AHENKRO",
      "Location": "OPPOSITE GCB BANK DORMAA AHENKRO",
      "GPS COORDINATES": "7.27471° N, 2.85994° W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3214,
      "AGENT BUSINESS NAME": "RAJA ENTERPRISE",
      "AGENT USERNAME": "REN80102",
      "ADDRESS": "TAMALE POLYTECHNIC",
      "Location": "GETFUND HOSTEL",
      "GPS COORDINATES": "9.429229-0.869282",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3215,
      "AGENT BUSINESS NAME": "WHY ALWAYS ME",
      "AGENT USERNAME": "WAM80101",
      "ADDRESS": "MTN OFFICE",
      "Location": "CLOSE TO MTN OFFICE",
      "GPS COORDINATES": "9.407324-0.839857",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3216,
      "AGENT BUSINESS NAME": "AZINDOW 99 ENTERPRISE",
      "AGENT USERNAME": "A9E80101",
      "ADDRESS": "UDS",
      "Location": "NEAR GUSS HOSTEL",
      "GPS COORDINATES": "NT-0271-3144",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3217,
      "AGENT BUSINESS NAME": "PRINTHEL ENTERPRISE",
      "AGENT USERNAME": "PEN 80102.00",
      "ADDRESS": "JUBLEE PARK",
      "Location": "CLOSE TO PASSPORT OFFICE",
      "GPS COORDINATES": "9.402004-0.838089",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3218,
      "AGENT BUSINESS NAME": "ALIZ ENTERPRISE",
      "AGENT USERNAME": "AEN80106",
      "ADDRESS": "BISHOP",
      "Location": "CLOSE TO BISHOPS",
      "GPS COORDINATES": "9.425058-0.856604",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3219,
      "AGENT BUSINESS NAME": "UNIVERSAL VISION TECHNOLOGIES LIMITED ",
      "AGENT USERNAME": "UVT80101",
      "ADDRESS": "BISHOPS",
      "Location": "OPPOSITE BISHOPS JSS",
      "GPS COORDINATES": "NS-047-3574",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3220,
      "AGENT BUSINESS NAME": "NANDOS POWER ENTERPRISE",
      "AGENT USERNAME": "NPE80102",
      "ADDRESS": "GBOLO KPALSI",
      "Location": "NEAR GBOLO KPALSI LAST STOP",
      "GPS COORDINATES": "9.441045-0.879591",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3221,
      "AGENT BUSINESS NAME": "YIN-GUTE YARO ENTERPRISE",
      "AGENT USERNAME": "YYE80101",
      "ADDRESS": "KPALPOHINI",
      "Location": "NEAR ALUI MAHAMA HOUSE",
      "GPS COORDINATES": "NS-273-5400",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3222,
      "AGENT BUSINESS NAME": "HANAN SUGLO ENTERPRISE",
      "AGENT USERNAME": "HSE80101",
      "ADDRESS": "GBOLO KPALSI",
      "Location": "BEHIND ST. LUCY POLYTECHNIC",
      "GPS COORDINATES": "9.440726-0.882691",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3223,
      "AGENT BUSINESS NAME": "MUBAK ENTERPRISE",
      "AGENT USERNAME": "MUE80101",
      "ADDRESS": "MTN OFFICE",
      "Location": "OPPOSITE MTN OFFICE",
      "GPS COORDINATES": "9.427580-0.840533",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3224,
      "AGENT BUSINESS NAME": "ASAKORO ENTERPRISE",
      "AGENT USERNAME": "ASE80103",
      "ADDRESS": "LAMAKARA",
      "Location": "OPPOSITE HON. INUSAH FUSEINI BUILDING",
      "GPS COORDINATES": "NT-0044-4790",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3225,
      "AGENT BUSINESS NAME": "MALTITI ENTERPRISE",
      "AGENT USERNAME": "MAE80101",
      "ADDRESS": "KUMBUYILI",
      "Location": "NEAR THE MOSQUE",
      "GPS COORDINATES": "9.451552-0.907922",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3226,
      "AGENT BUSINESS NAME": "ALFRED BATIMYA KOLAN ENTERPRISE",
      "AGENT USERNAME": "KBC80101",
      "ADDRESS": "GBOLO KPALSI",
      "Location": "CLOSE TO ST. LUCY POLYCLINIC",
      "GPS COORDINATES": "9.440250-0.881406",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3227,
      "AGENT BUSINESS NAME": "SIMLI M AWAL ENTERPRISE",
      "AGENT USERNAME": "SMA80101",
      "ADDRESS": "AGRIC",
      "Location": "CLOSE TO AGRIC TRAFFIC LIGHTS",
      "GPS COORDINATES": "9.425655-0.842528",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3228,
      "AGENT BUSINESS NAME": "MAJ SUGLO MAYINLORI ENTERPRISE",
      "AGENT USERNAME": "MSE80103",
      "ADDRESS": "GURUGU",
      "Location": "BEHIND SALVIN PHARMACY",
      "GPS COORDINATES": "9.443872-0.869598",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3229,
      "AGENT BUSINESS NAME": "MIMHAD VENTURES",
      "AGENT USERNAME": "MVE80102",
      "ADDRESS": "YENDI",
      "Location": "NEAR MTN OFFICE",
      "GPS COORDINATES": "NY-0011-5454",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3230,
      "AGENT BUSINESS NAME": "DADDY PALACE ENTERPRISE",
      "AGENT USERNAME": "DPE80101",
      "ADDRESS": "SSNIT ROAD",
      "Location": "OPPOSITE SSNIT BUILDING ",
      "GPS COORDINATES": "9.407024-0.833032",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3231,
      "AGENT BUSINESS NAME": "AK FREEMAN",
      "AGENT USERNAME": "AKF80101",
      "ADDRESS": "TOWN CENTRAL",
      "Location": "OPPOSITE OLD FIDELITY BANK",
      "GPS COORDINATES": "9.403467-0.841415",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3232,
      "AGENT BUSINESS NAME": "PBE GHANA LIMITED",
      "AGENT USERNAME": "PBESUB70102",
      "ADDRESS": "GOASO",
      "Location": "OPPOSITE ADB",
      "GPS COORDINATES": "6.804816-2.514971",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3233,
      "AGENT BUSINESS NAME": "ORIGINAL-ANT BARBERING SALON ",
      "AGENT USERNAME": "OBS70201",
      "ADDRESS": "UNNUMBERED STORE AT DOMINASE BEREKUM",
      "Location": "BEHIND FIDELITY BANK",
      "GPS COORDINATES": "7.45032°N, 2.58435°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3234,
      "AGENT BUSINESS NAME": "BABA SULE VENTURES",
      "AGENT USERNAME": "BSVSUB70403",
      "ADDRESS": "GOASO",
      "Location": "Goaso Old Station",
      "GPS COORDINATES": "6.804188-2.515758",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3235,
      "AGENT BUSINESS NAME": "KARIM KAPITO VENTURES",
      "AGENT USERNAME": "KKV70501",
      "ADDRESS": "UNNUMBERED CONTAINER AT SAMPA",
      "Location": "NEAR THE ROUNDABOUT",
      "GPS COORDINATES": "BJ-0002-8604",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3236,
      "AGENT BUSINESS NAME": "STARS OF AFRICAN MONTESSORI ACADEMY",
      "AGENT USERNAME": "SAM70201",
      "ADDRESS": "P. O BOX 25 BEREKUM",
      "Location": "BEHIND THE THURSDAY MARKET",
      "GPS COORDINATES": "BB-0004-9356",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3237,
      "AGENT BUSINESS NAME": "WOFA ATTA SECRETARIAL SERVICE",
      "AGENT USERNAME": "WAS70401",
      "ADDRESS": "GOASO",
      "Location": "GOASO ADJACENT ADB",
      "GPS COORDINATES": "6.805331-2.513839",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3238,
      "AGENT BUSINESS NAME": "DONYINA BJ ENTERPRISE",
      "AGENT USERNAME": "DBE70201",
      "ADDRESS": "UNNUMBERED STORE AT JAPEKROM, DROBO ",
      "Location": "BEHIND ANIDASO PLAZA",
      "GPS COORDINATES": "7.57530°N, 2.78508°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3239,
      "AGENT BUSINESS NAME": "BABA SULE VENTURES",
      "AGENT USERNAME": "BSVSUB70404",
      "ADDRESS": "GOASO",
      "Location": "OPPOSITE MARKET",
      "GPS COORDINATES": "6.807057-2.516126",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3240,
      "AGENT BUSINESS NAME": "ENOCK GOD IS GREAT ENTERPRISE",
      "AGENT USERNAME": "EGI70201",
      "ADDRESS": "UNNUMBERED CONTAINER AT BEREKUM",
      "Location": "OPPOSITE THE TOTAL FILLING STATION",
      "GPS COORDINATES": "7.44891°N, 2.58294°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3241,
      "AGENT BUSINESS NAME": "NASARA ENTERPRISE",
      "AGENT USERNAME": "NET80101",
      "ADDRESS": "VICTIN",
      "Location": "CLOSE TO VICTIN SENIOR HIGH SCHOOL",
      "GPS COORDINATES": "9.389210-0.813836",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3242,
      "AGENT BUSINESS NAME": "ALFA BUSINESS CENTRE",
      "AGENT USERNAME": "ABC80101",
      "ADDRESS": "SAVELUGU",
      "Location": "SAVELUGU MARKET",
      "GPS COORDINATES": "9.62424-0.828830",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3243,
      "AGENT BUSINESS NAME": "AA MAJEED ENTERPRISE",
      "AGENT USERNAME": "AME80102",
      "ADDRESS": "KUNBUNGU",
      "Location": "CLOSE TO KUNBUNGU ASSEMBLY",
      "GPS COORDINATES": "9.541248-0.931463",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3244,
      "AGENT BUSINESS NAME": "T.J WUNI BRILI ENTERPRISE",
      "AGENT USERNAME": "TWS80101",
      "ADDRESS": "WAMALI",
      "Location": "ADJACENT GOIL FILLING STATION",
      "GPS COORDINATES": "9.380151-0.772644",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3245,
      "AGENT BUSINESS NAME": "D-HACKMAN BUSINESS CENTRE ",
      "AGENT USERNAME": "DBC03301",
      "ADDRESS": "TEMA COMMUNITY 1 MARKET",
      "Location": "INSIDE THE MARKET",
      "GPS COORDINATES": "5.637400,-0.000770",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3246,
      "AGENT BUSINESS NAME": "ABDUL JABARU ABDULAI",
      "AGENT USERNAME": "TPE 80102.00",
      "ADDRESS": "GUHIBIHNI",
      "Location": "CLOSE TO WINNERS FOUNDATION",
      "GPS COORDINATES": "9.420048-0.845716",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3247,
      "AGENT BUSINESS NAME": "LEXIS BUILDING CONSULT AND BUSINESS SERVICE ",
      "AGENT USERNAME": "LBC70101",
      "ADDRESS": "BOX 12 SUNYANI",
      "Location": "OPPOSITE STU MAIN GATE",
      "GPS COORDINATES": "7. 40. 54. 4'N 2. 08. 32. 1'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3248,
      "AGENT BUSINESS NAME": "TINABAE-AMP ENTERPRISE ",
      "AGENT USERNAME": "TAE70101",
      "ADDRESS": "BOX 12 SUNYANI",
      "Location": "OPPOSITE metro Mass",
      "GPS COORDINATES": "7. 04. 11. 2' N 3. 89. 50 . 1N",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3249,
      "AGENT BUSINESS NAME": "SNOWBIRD CONSULT ",
      "AGENT USERNAME": "SCO60601",
      "ADDRESS": "D 40 AREA 4",
      "Location": "OPPOSITE ODEEFO STORE",
      "GPS COORDINATES": "7. 09. 18. 4' N 2. 40. 88. 1' w",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3250,
      "AGENT BUSINESS NAME": "STREWENK ENTERPRISE ",
      "AGENT USERNAME": "SEN70401",
      "ADDRESS": "D 50 SUNYANI",
      "Location": "INSIDE VODAFONE YARD",
      "GPS COORDINATES": "7. 33. 09. 2N 1. 09. 11. 5.' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3251,
      "AGENT BUSINESS NAME": "EROW FARMS",
      "AGENT USERNAME": "EFA70101",
      "ADDRESS": "D 55 PENKWASE",
      "Location": "OPPOSITE REGIONAL HOSPITAL ",
      "GPS COORDINATES": "7. 09. 77. 4N 3. 01. 00. 5' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3252,
      "AGENT BUSINESS NAME": "HUPGO VENTURES ",
      "AGENT USERNAME": "HVE70402",
      "ADDRESS": "G 40 PENKWASE",
      "Location": "OPPOSITE REGIONAL HOSPITAL ",
      "GPS COORDINATES": "6. 09. 57. 1N 2. 39. 45. 0' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3253,
      "AGENT BUSINESS NAME": "EBENEZER GOD IS LIGHT ENTERPRISE ",
      "AGENT USERNAME": "EBI70401",
      "ADDRESS": "34 SUNYANI",
      "Location": "INSIDE MARKET ",
      "GPS COORDINATES": "7. 45. 00. 4N 2. 81. 57. 4W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3254,
      "AGENT BUSINESS NAME": "E. ADJENSKO VENTURES",
      "AGENT USERNAME": "EAV70301",
      "ADDRESS": "TECHIMAN KUMASI STATION, BONO EAST",
      "Location": "ADJECENT TOTAL FILLING STATION",
      "GPS COORDINATES": "BT-0000-7582",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3255,
      "AGENT BUSINESS NAME": "NEXTHRONE VENTURES",
      "AGENT USERNAME": "NEX70301",
      "ADDRESS": "TUOBODOM-TECHIMAN, BONO EAST",
      "Location": "NEAR TUOBODOM NAGAZINE",
      "GPS COORDINATES": "7.6281510,-1.9146140",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3256,
      "AGENT BUSINESS NAME": "SHARATY ENTERPRISE",
      "AGENT USERNAME": "SEN70301",
      "ADDRESS": "HANSUA-TECHIMAN",
      "Location": "NEAR HANSUA VRA OFFICE",
      "GPS COORDINATES": "7.5519790,-1.9368060",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3257,
      "AGENT BUSINESS NAME": "Ahmedbinbazz Enterprise ",
      "AGENT USERNAME": "AHE60701",
      "ADDRESS": "An unnumbered store - Aboabo No.2",
      "Location": "Near the aboabo Mosque",
      "GPS COORDINATES": "6°41'30.0'N 1°35'44.5'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3258,
      "AGENT BUSINESS NAME": "B-Fred Express Ventures ",
      "AGENT USERNAME": "BFE60101",
      "ADDRESS": "An unnumbered shop Asafo",
      "Location": "Near the Puma filling Station ",
      "GPS COORDINATES": "6°41'19.8'N 1°36'42.2'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3259,
      "AGENT BUSINESS NAME": "ALHAJI-LAMIN VENTURES",
      "AGENT USERNAME": "ALV70101",
      "ADDRESS": "GOASO",
      "Location": "Opposite Republic bank",
      "GPS COORDINATES": "6.803852-2.516316",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3260,
      "AGENT BUSINESS NAME": "GOD TIME IS THE BEST",
      "AGENT USERNAME": "GTI19101",
      "ADDRESS": "KPO/14 KPOETA",
      "Location": "OPPOSITE GOIL FUEL STATION ",
      "GPS COORDINATES": "6,35214. 0,11475",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3261,
      "AGENT BUSINESS NAME": "DAUDA ENTERPRISE",
      "AGENT USERNAME": "DEN19101",
      "ADDRESS": "HH/24 GOLOKUATI HOHOE",
      "Location": "NEAR THE DISTRICT ASSEMBLY ",
      "GPS COORDINATES": "7.24565, 0.15241",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3262,
      "AGENT BUSINESS NAME": "NEW EARTH ENTERPRISE",
      "AGENT USERNAME": "NEE04201",
      "ADDRESS": "JA/K24 GOLOKUATI",
      "Location": "NEAR THE BARRIEL",
      "GPS COORDINATES": "7.56113 ,0.31123",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3263,
      "AGENT BUSINESS NAME": "PROLIFIC DERBY ENTERPRISE",
      "AGENT USERNAME": "PDE19101",
      "ADDRESS": "AH/34 AHADO HOHOE",
      "Location": "NEAR FIDELITY BANK GHANA LIMITED ",
      "GPS COORDINATES": "7.153693,0475974",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3264,
      "AGENT BUSINESS NAME": "DOMINION VENTURES",
      "AGENT USERNAME": "DVE19102",
      "ADDRESS": "GH/34 BANGALOW HOHOE",
      "Location": "NEAR THE WASHING BAY",
      "GPS COORDINATES": "7.153693,0475974",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3265,
      "AGENT BUSINESS NAME": "QUEEN PORSH VENTURES",
      "AGENT USERNAME": "QPV19101",
      "ADDRESS": "JD/23M BANSE HOHOE",
      "Location": "OPPOSITE THE BLA POLICE STATION ",
      "GPS COORDINATES": "7.121693,0475911",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3266,
      "AGENT BUSINESS NAME": "LEVEL CHANGES ENTERPRISE",
      "AGENT USERNAME": "LCE19101",
      "ADDRESS": "KPO/23 KPOETA HOHOE",
      "Location": "NEAR LIGHT HOUSE CHARPEL ",
      "GPS COORDINATES": "7.121693,0475911",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3267,
      "AGENT BUSINESS NAME": "DT-DEMASCOT ENTERPRISE",
      "AGENT USERNAME": "DDE19101",
      "ADDRESS": "HHM34 HOHOE",
      "Location": "NEAR THE HOHOE REGIONAL HOSPITAL ",
      "GPS COORDINATES": "7.121693,0425311",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3268,
      "AGENT BUSINESS NAME": "I Put My Trust In Jesus Enterprise ",
      "AGENT USERNAME": "IPM61001",
      "ADDRESS": "Suame ",
      "Location": "Opposite Mother's care ",
      "GPS COORDINATES": "6°46'56 O'N1°38'06.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3269,
      "AGENT BUSINESS NAME": "BOBCEE LAUNDRY AND CLEANING SERVICES ",
      "AGENT USERNAME": "BLC40601",
      "ADDRESS": "NTANKORFUL ",
      "Location": "OPPOSITE THE METHODIST CHURCH ",
      "GPS COORDINATES": "4.9454910,-1.7651020",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3270,
      "AGENT BUSINESS NAME": "DESSI ADK ENTERPRISE ",
      "AGENT USERNAME": "DAE40601",
      "ADDRESS": "EFFIAKUMA ",
      "Location": "NEAR LOWER PRA RURAL BANK ",
      "GPS COORDINATES": "4.9211541,-1.7663952",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3271,
      "AGENT BUSINESS NAME": "ADINKRAH DIRECT VEN",
      "AGENT USERNAME": "ADVSUB70102",
      "ADDRESS": "Kwapong",
      "Location": "Opposite ADB",
      "GPS COORDINATES": "6.619406-2.480320",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3272,
      "AGENT BUSINESS NAME": "TREZEGUET SM ENTERPRISE",
      "AGENT USERNAME": "TSE70301",
      "ADDRESS": "DROMANKESE-NKORANZA NORTH, BONO EAST",
      "Location": "NEAR THE ME MARKET",
      "GPS COORDINATES": "7.712086,-1.553514",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3273,
      "AGENT BUSINESS NAME": "GARBATECH-TECH SOLUTIONS",
      "AGENT USERNAME": "GTS70301",
      "ADDRESS": "TECHIMAN, NEAR AMEYAW TRAFIC LIGHT",
      "Location": "NEAR AMEYAW TRAFIC LIGHT",
      "GPS COORDINATES": "7.5819700,-1.9312130",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3274,
      "AGENT BUSINESS NAME": "RECENCY 87 VENTURES",
      "AGENT USERNAME": "DEV70301",
      "ADDRESS": "DIASEMPA -TECHIMAN, BONO EAST",
      "Location": "NEAR BASSCOD DIASEMPA-TECHIMAN",
      "GPS COORDINATES": "7.574083,-1.923780",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3275,
      "AGENT BUSINESS NAME": "Baba sule ventures",
      "AGENT USERNAME": "BSVSUB70402",
      "ADDRESS": "Kukuom",
      "Location": "Near Nhis office",
      "GPS COORDINATES": "6.694792-2.443603",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3276,
      "AGENT BUSINESS NAME": "Trustrich-P Enterprise ",
      "AGENT USERNAME": "TRV61001",
      "ADDRESS": "Suame",
      "Location": "Near Mothercare residence ",
      "GPS COORDINATES": "6°42'54.9'N1°38'02.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3277,
      "AGENT BUSINESS NAME": "One Marcus 22 Enterprise",
      "AGENT USERNAME": "OME61001",
      "ADDRESS": "Suame ",
      "Location": "Opposite GCB",
      "GPS COORDINATES": "6°42'59.1'N1°37'53.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3278,
      "AGENT BUSINESS NAME": "Ayishetu Ibrahim 20 Enterprise",
      "AGENT USERNAME": "AIE61002",
      "ADDRESS": "Suame ",
      "Location": "Opposite Video Centre",
      "GPS COORDINATES": "6°42'57.6'N1°38'01.9'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3279,
      "AGENT BUSINESS NAME": "PF Pasco Ventures ",
      "AGENT USERNAME": "PPV61301",
      "ADDRESS": "An unnumbered store - Oyoko Afigyaase",
      "Location": "Near the assemblies of God Church - Oyoko",
      "GPS COORDINATES": "6°52'12.9'N 1°23'08.1'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3280,
      "AGENT BUSINESS NAME": "Wedaga Ventures ",
      "AGENT USERNAME": "WVE60601",
      "ADDRESS": "An unnumbered store - Adum",
      "Location": "Near the Military barracks",
      "GPS COORDINATES": "6°41'35.2'N 1°37'34.1'W.",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3281,
      "AGENT BUSINESS NAME": "ERIC'S HANDS CLASSIC BUSINESS",
      "AGENT USERNAME": "EHC02801",
      "ADDRESS": "HSE NO J24A GBETSILE",
      "Location": "OPPOSITE AJM STATION",
      "GPS COORDINATES": "5.7637000,-0.0485350",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3282,
      "AGENT BUSINESS NAME": "DEY SOLUTIONS",
      "AGENT USERNAME": "DSO02801",
      "ADDRESS": "UNN SHOP AT ASHAIMAN NEW TOWN",
      "Location": "NEAR NEW TOWN JUNCTION",
      "GPS COORDINATES": "5.697651,-0.037524",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3283,
      "AGENT BUSINESS NAME": "K.DANI PAPABI VENTURES",
      "AGENT USERNAME": "KDP02801",
      "ADDRESS": "SHE NO Z388 ZENU, ASHAIMAN",
      "Location": "NEAR OBAATAN SCHOOL",
      "GPS COORDINATES": "5.724806,-0.055032",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3284,
      "AGENT BUSINESS NAME": "BKT74 INVESTMENT",
      "AGENT USERNAME": "BKT02801",
      "ADDRESS": "UNN SHOP AT GBETSILE 2ND JUNCTION",
      "Location": "NEAR THE GASS FILLING STATION",
      "GPS COORDINATES": "50744358,-0.0126420",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3285,
      "AGENT BUSINESS NAME": "QUEEN-ELI FAST LINK ENTERPRISE",
      "AGENT USERNAME": "QEFSUB02801",
      "ADDRESS": "UNN SHOP AT MIOTSO, PRAMPRAM",
      "Location": "NEAR MIOTSO JUNCTION",
      "GPS COORDINATES": "5.7558080,-0.0838310",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3286,
      "AGENT BUSINESS NAME": "QUEEN ELI FAST LINK ENTERPRISE",
      "AGENT USERNAME": "QEFSUB02802",
      "ADDRESS": "UNN SHOP AT MIOTSO",
      "Location": "NEAR THE YAM FACTORY",
      "GPS COORDINATES": "5.7558080,-0.0838310",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3287,
      "AGENT BUSINESS NAME": "QUEEN-ELI FAST LINK ENTERPRISE",
      "AGENT USERNAME": "QEFSUB02803",
      "ADDRESS": "UNN SHOP AT PRAMPRAM",
      "Location": "NEAR POLICE BAREER",
      "GPS COORDINATES": "5.7548720-0.0814310",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3288,
      "AGENT BUSINESS NAME": "BLESSED TIMELINE BUSINESS ENTERPRISE",
      "AGENT USERNAME": "BTBSUB02801",
      "ADDRESS": "UNN SHOP AT TEMA COMM 25",
      "Location": "OPPOSITE FIDELITY ABNK",
      "GPS COORDINATES": "5.731646,-0.026758",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3289,
      "AGENT BUSINESS NAME": "BLESSED TIMELINE BUSINESS ENTERPRISE",
      "AGENT USERNAME": "BTBSUB02802",
      "ADDRESS": "UNUMBERED SHOP AT TEMA COMM 25",
      "Location": "NEAR MELS GIFT LIMITED",
      "GPS COORDINATES": "5.727467,-0.0240900",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3290,
      "AGENT BUSINESS NAME": "Niena ND enterprise",
      "AGENT USERNAME": "NNE60401",
      "ADDRESS": "Atonsu Monacco",
      "Location": "Near Osofo Maggie",
      "GPS COORDINATES": "6°39'29.4N''1°36'12.3''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3291,
      "AGENT BUSINESS NAME": "Michael Opoku Junior Enterprise",
      "AGENT USERNAME": "MOJ60401",
      "ADDRESS": "Ahinsan",
      "Location": "Nea Latex foam",
      "GPS COORDINATES": "6°38'56.2N''1°35'29.9''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3292,
      "AGENT BUSINESS NAME": "Febflor Ventures",
      "AGENT USERNAME": "FER60401",
      "ADDRESS": "Ako Junction",
      "Location": "Near Ako Junction",
      "GPS COORDINATES": "6°38'45.4''N1°35'17.2''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3293,
      "AGENT BUSINESS NAME": "De berak plus ventures",
      "AGENT USERNAME": "DBP60401",
      "ADDRESS": "Atonsu Bokoro",
      "Location": "Near the market",
      "GPS COORDINATES": "6°38'59.2''N1°35'39.4''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3294,
      "AGENT BUSINESS NAME": "Charidon ventures",
      "AGENT USERNAME": "CVE 60402.00",
      "ADDRESS": "Atonsu bokoro",
      "Location": "Near the market",
      "GPS COORDINATES": "6°38'30.5''N1°35'27.9''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3295,
      "AGENT BUSINESS NAME": "Collins boahen ventures",
      "AGENT USERNAME": "CBV60401",
      "ADDRESS": "atonsu bokoro",
      "Location": "near the station",
      "GPS COORDINATES": "6°38'28.9''N1°35'29.4''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3296,
      "AGENT BUSINESS NAME": "Gloria Birago enterprise",
      "AGENT USERNAME": "GBE60401",
      "ADDRESS": "atonsu",
      "Location": "Near Rojel montessori school",
      "GPS COORDINATES": "6°38'47.3''N1°35'24.6''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3297,
      "AGENT BUSINESS NAME": "Afriyie Bonsu Ventures",
      "AGENT USERNAME": "AFB60401",
      "ADDRESS": "S line",
      "Location": "near  washing  bay",
      "GPS COORDINATES": "6°39'11.6''N1°35'43.7''W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3298,
      "AGENT BUSINESS NAME": "J.O. NTIRI ENTERPRISE",
      "AGENT USERNAME": "JONSUB30202",
      "ADDRESS": "ELMINA JUNCTION",
      "Location": "SHELL FUEL STATION",
      "GPS COORDINATES": "5°05'04.3'N1°19'54.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3299,
      "AGENT BUSINESS NAME": "J.O. NTIRI ENTERPRISE",
      "AGENT USERNAME": "JONSUB30201",
      "ADDRESS": "KOMENDA JUNCTION",
      "Location": "SHELL FUEL STATION",
      "GPS COORDINATES": "5°05'08.8'N1°30'16.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3300,
      "AGENT BUSINESS NAME": "J. O. NTIRI ENTERPRSIE",
      "AGENT USERNAME": "JONSUB30203",
      "ADDRESS": "ADU EGYIR, AYENSUDO",
      "Location": "CAR WASH",
      "GPS COORDINATES": "5°05'58.7'N1°24'57.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3301,
      "AGENT BUSINESS NAME": "TINABAE-AMP ",
      "AGENT USERNAME": "TAE70101",
      "ADDRESS": "B 60 MARKET",
      "Location": "OPPOSITE Metro Mass station ",
      "GPS COORDINATES": "7. 40. 08.1N3. 22. 09. 2' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3302,
      "AGENT BUSINESS NAME": "EVANS PRIME ENTERPRISE ",
      "AGENT USERNAME": "EPE70401",
      "ADDRESS": "G 70 KENYASI",
      "Location": "ADJACENT MARKET ",
      "GPS COORDINATES": "7. 09. 80. 3' N 2. 30. 57. 3' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3303,
      "AGENT BUSINESS NAME": "GENRAZA ENTERPRISE ",
      "AGENT USERNAME": "GEN70501",
      "ADDRESS": "D 40 NEW DORMAA",
      "Location": "OPPOSITE ABAFRESH",
      "GPS COORDINATES": "6. 55. 90. 4'W 3. 20. 57. 1' W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3304,
      "AGENT BUSINESS NAME": "ADOM AMEYAA KORAH JULIANA VENTURES",
      "AGENT USERNAME": "AAK70201",
      "ADDRESS": "P.O BOX 471 BEREKUM",
      "Location": "OPPOSITE THE PRESBY CHURCH ",
      "GPS COORDINATES": "BB-0027-3355",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3305,
      "AGENT BUSINESS NAME": "SUSANA AGYEIWAA 252 VENTURES",
      "AGENT USERNAME": "SAE70202",
      "ADDRESS": "P.O BOX 70 SAMPA",
      "Location": "OPPOSITE THE ROMAN CATHOLIC CHURCH ",
      "GPS COORDINATES": "BB-0007-5153",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3306,
      "AGENT BUSINESS NAME": "NATURE PEE ENTERPRISE",
      "AGENT USERNAME": "NPE03801",
      "ADDRESS": "SOWUTUOM",
      "Location": "PENTECOAST UNIVERSITY",
      "GPS COORDINATES": "5.623590,-0.274913",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3307,
      "AGENT BUSINESS NAME": "NIGEL KWATENG VENTURES",
      "AGENT USERNAME": "NKV03801",
      "ADDRESS": "LOMNAVA",
      "Location": "NEAR LOMNAVA",
      "GPS COORDINATES": "5.635978,-0.278793",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3308,
      "AGENT BUSINESS NAME": "WILLYJOY HOUSE OF BENZ VENTURE",
      "AGENT USERNAME": "WHB02601",
      "ADDRESS": "LAPAZ",
      "Location": "NEAR GT BANK",
      "GPS COORDINATES": "5.605895,-0.251471",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3309,
      "AGENT BUSINESS NAME": "WINIFRED AGYEKUM VENTURES",
      "AGENT USERNAME": "WASUBV03801",
      "ADDRESS": "CHANTAN",
      "Location": "NEAR O.K SPOT ",
      "GPS COORDINATES": "5.623397,-0.256833",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3310,
      "AGENT BUSINESS NAME": "RYANRESCUE ENTERPRISE",
      "AGENT USERNAME": "RENSUB03802",
      "ADDRESS": "OFANKOR",
      "Location": "NEAR SWEET MOTHER VENTURE",
      "GPS COORDINATES": "5.635978,-0.269486",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3311,
      "AGENT BUSINESS NAME": "OKODIE ABENAA VENTURES",
      "AGENT USERNAME": "OAV70201",
      "ADDRESS": "P.0 Box 119 Berekum KYERE Dartey Avenue",
      "Location": "BEHIND THE CENTRAL MOSQUE",
      "GPS COORDINATES": "BB-0000-8250",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3312,
      "AGENT BUSINESS NAME": "ASAANA NETWORKS",
      "AGENT USERNAME": "ANV70301",
      "ADDRESS": "KENTEN -TECHIMAN, BONO EAST REGION",
      "Location": "OPPOSITE EXCEL FILLING STATION",
      "GPS COORDINATES": "7.5971030,-1.9461720",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3313,
      "AGENT BUSINESS NAME": "STILL THINK TWICE VENTURES",
      "AGENT USERNAME": "STT70301",
      "ADDRESS": "TECHIMAN",
      "Location": "NEAR ZONGO TRAFIC LIGHT",
      "GPS COORDINATES": "7.5878090,-1.9388790",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3314,
      "AGENT BUSINESS NAME": "NA GOD OO VENTURES",
      "AGENT USERNAME": "NGO70301",
      "ADDRESS": "TECHIMAN,  KUMASI STATION, BONO EAST",
      "Location": "NEAR KUMASI GPRTU STATION",
      "GPS COORDINATES": "7.5840550,-1.9376740",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3315,
      "AGENT BUSINESS NAME": "YESU ADOM 82 VENTURES",
      "AGENT USERNAME": "YAE70301",
      "ADDRESS": "TUOBODOM-TECHIMAN,BONO EAST",
      "Location": "NEAR TUOBODOM MAIN STATION",
      "GPS COORDINATES": "7.6404400,-1.9058870",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3316,
      "AGENT BUSINESS NAME": "SHARATY ENTERPRISE",
      "AGENT USERNAME": "SEN70301",
      "ADDRESS": "HANSUA-TECHIMAN, BONO EAST",
      "Location": "NEAR THE VRA OFFICE",
      "GPS COORDINATES": "7.551990,-1.9368060",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3317,
      "AGENT BUSINESS NAME": "BIG JOE OKYERE VENTURES",
      "AGENT USERNAME": "BJOSUB30201",
      "ADDRESS": "UCC SCIENCE",
      "Location": "WISHES HOSTEL",
      "GPS COORDINATES": "5°06'52.8'N1°17'32.4'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3318,
      "AGENT BUSINESS NAME": "EBLIN VENTURES",
      "AGENT USERNAME": "EBV30201",
      "ADDRESS": "BESEASE ",
      "Location": "BESEASE TAXI RANK",
      "GPS COORDINATES": "5°27'21.1'N0°58'30.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3319,
      "AGENT BUSINESS NAME": "REJOICE OTENG ENTERPRISE ",
      "AGENT USERNAME": "ROE03802",
      "ADDRESS": "UNNUMBERED SHOP AT OFANKOR BARRIER ",
      "Location": "NEAR JOHN TEYE MEMORIAL SCHOOL ",
      "GPS COORDINATES": "5.667832, - 0.271641",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3320,
      "AGENT BUSINESS NAME": "FELLOW PRINCE VEBTURES ",
      "AGENT USERNAME": "FPV03801",
      "ADDRESS": "UNNUMBERED SHOP AT OFANKOR 7 DAYS",
      "Location": "NEAR GA NORTH MUNICIPAL HOSPITAL ",
      "GPS COORDINATES": "5.655846, - 0.275724",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3321,
      "AGENT BUSINESS NAME": "DANAK COMMERCIAL ",
      "AGENT USERNAME": "DCO02601",
      "ADDRESS": "UNNUMBERED SHOP AT MUSE ",
      "Location": "WITHIN MUSE WOOD DEPOT ",
      "GPS COORDINATES": "5.650201,- 0.255287",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3322,
      "AGENT BUSINESS NAME": "NY SIKAPA VENTURES ",
      "AGENT USERNAME": "NSV03801",
      "ADDRESS": "UNNUMBERED SHOP AT AMASAMAN COURT ",
      "Location": "NEAR THE AMASAMAN DISTRICT COURT ",
      "GPS COORDINATES": "5.703741, - 0.293330",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3323,
      "AGENT BUSINESS NAME": "BARONS IN CHRIST ENTERPRISE ",
      "AGENT USERNAME": "BCE03801",
      "ADDRESS": "UNNUMBERED SHOP AT SOWUTUOM ",
      "Location": "NEAR PENTECOST UNIVERSITY ",
      "GPS COORDINATES": "5.626206'- 0.27302",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3324,
      "AGENT BUSINESS NAME": "KORAN DEAURORA ENTERPRISE ",
      "AGENT USERNAME": "KDE03801",
      "ADDRESS": "UNNUMBERED SHOP AT NEW ABENSU POKUASE ",
      "Location": "NEAR DESTINY CHILD SCHOOL ",
      "GPS COORDINATES": "5.712067, - 0.283397",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3325,
      "AGENT BUSINESS NAME": "KARIOUS J ENTERPRISE ",
      "AGENT USERNAME": "KJC02501",
      "ADDRESS": "UNNUMBERED SHOP AT SAPIEMAN ",
      "Location": "NEAR JOYAT GUEST HOUSE",
      "GPS COORDINATES": "5.7251211,-0.3148418",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3326,
      "AGENT BUSINESS NAME": "J.O. NTIRI ENTERPRISE",
      "AGENT USERNAME": "JONSUB30204",
      "ADDRESS": "ELMINA ",
      "Location": "ELMINA CASTLE",
      "GPS COORDINATES": "5°04'58.0'N1°21'06.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3327,
      "AGENT BUSINESS NAME": "EDEN AND ABAN FARMS LTD",
      "AGENT USERNAME": "EAFSUB30201",
      "ADDRESS": "EDUNFA",
      "Location": "PROMISE PREPARATORY SCHOOL",
      "GPS COORDINATES": "5.3153750,-1.1601510",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3328,
      "AGENT BUSINESS NAME": "EDEN AND ABAN FARMS LTD",
      "AGENT USERNAME": "EAFSUB30202",
      "ADDRESS": "EDUNFA",
      "Location": "HEAVENLY MINISTRY CHURCH",
      "GPS COORDINATES": "5°18'55.4'N1°09'36.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3329,
      "AGENT BUSINESS NAME": "EDEN AND ABAN FARMS LTD",
      "AGENT USERNAME": "EAFSUB30204",
      "ADDRESS": "EDUNFA",
      "Location": "LOVERS SPOT",
      "GPS COORDINATES": "5.3019570.-1.1534991",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3330,
      "AGENT BUSINESS NAME": "EDEN AND ABAN FARMS LTD",
      "AGENT USERNAME": "EAFSUB30203",
      "ADDRESS": "EDUNFA",
      "Location": "MDCC CHURCH",
      "GPS COORDINATES": "5°18'55.4'N1°09'36.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3331,
      "AGENT BUSINESS NAME": "Officer Dan 96 Enterprise",
      "AGENT USERNAME": "ODE7020",
      "ADDRESS": "Goaso",
      "Location": "In front of prince mark store",
      "GPS COORDINATES": "6.808461-2.9139",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3332,
      "AGENT BUSINESS NAME": "Ernesto-Ky 2022",
      "AGENT USERNAME": "EKE70201",
      "ADDRESS": "Mim",
      "Location": "NEAR CMB COCOA SHED",
      "GPS COORDINATES": "6.906110-2.563323",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3333,
      "AGENT BUSINESS NAME": "Chris Views Enterprise",
      "AGENT USERNAME": "CVE 70101.00",
      "ADDRESS": "Mim",
      "Location": "OPPOSITE GCB BANK",
      "GPS COORDINATES": "6.900283-2.558553",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3334,
      "AGENT BUSINESS NAME": "WHY NOT REWINDING ELECTRIC",
      "AGENT USERNAME": "WNR70101",
      "ADDRESS": "MIM",
      "Location": "Opposite mim Methodist park",
      "GPS COORDINATES": "6.900319-2.558687",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3335,
      "AGENT BUSINESS NAME": "VANDESCO-N VENTURES",
      "AGENT USERNAME": "VNV70201",
      "ADDRESS": "Mim",
      "Location": "ABOABO ADJACENT TAXI RANK",
      "GPS COORDINATES": "6.906393-2.563527",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3336,
      "AGENT BUSINESS NAME": "Ohemaa Linda ventures ",
      "AGENT USERNAME": "OLV60401",
      "ADDRESS": "Adegya ",
      "Location": "Near the station",
      "GPS COORDINATES": "6°37'01.1'1N1°34'55.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3337,
      "AGENT BUSINESS NAME": "Thank you Allah ventures ",
      "AGENT USERNAME": "TYA60401",
      "ADDRESS": "Adagya",
      "Location": "Near the lorry station",
      "GPS COORDINATES": "6°37'00.5'N1°34'59.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3338,
      "AGENT BUSINESS NAME": "Nhyiraba trading enterprise ",
      "AGENT USERNAME": "NTE60401",
      "ADDRESS": "Bantama",
      "Location": "Near Bantama parliament",
      "GPS COORDINATES": "6°42'05.3'N1°37'07'.5'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3339,
      "AGENT BUSINESS NAME": "Antwi 1995 Enterprise",
      "AGENT USERNAME": "A1E60401",
      "ADDRESS": "Bantama",
      "Location": "Near bantama parliament",
      "GPS COORDINATES": "6°42'05.5'N1°37'58.7'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3340,
      "AGENT BUSINESS NAME": "OB ventures ",
      "AGENT USERNAME": "OBV60401",
      "ADDRESS": "Bantama",
      "Location": "Near NHIS office",
      "GPS COORDINATES": "6°42'08.2'N1°38'.00.6'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3341,
      "AGENT BUSINESS NAME": "Robust Faith enterprise ",
      "AGENT USERNAME": "RFE60401",
      "ADDRESS": "Abrepo junction",
      "Location": "Near the magazine ",
      "GPS COORDINATES": "6°42'47.0'N1°37'56.2'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3342,
      "AGENT BUSINESS NAME": "Empress J Enterprise ",
      "AGENT USERNAME": "EJE04401",
      "ADDRESS": "KASOA ",
      "Location": "Navita nails ",
      "GPS COORDINATES": "5.5490356, -0.4328595",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3343,
      "AGENT BUSINESS NAME": "PILLOW LOVE JAH SALES ENTERPRISE",
      "AGENT USERNAME": "PJS70301",
      "ADDRESS": "JAMA-TECHIMAN, BONO EAST",
      "Location": "NEAR JAMA MA4KET",
      "GPS COORDINATES": "BX-0054-8389",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3344,
      "AGENT BUSINESS NAME": "OBAAPA MAGGI ENTERPRISE",
      "AGENT USERNAME": "OME70301",
      "ADDRESS": "ATEBUBU, BONO EAST",
      "Location": "OPPOSITE OLD ANGLICAN CHURCH",
      "GPS COORDINATES": "7.7528170,-0.9868300",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3345,
      "AGENT BUSINESS NAME": "ALEXANDER K BIO ENTERPRISE",
      "AGENT USERNAME": "ABE70302",
      "ADDRESS": "NSAWKAW-WENCHI, BONO EAST",
      "Location": " NEAR SERWAA AKOTO GUEST HOUSE",
      "GPS COORDINATES": "BZ-0003-4965",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3346,
      "AGENT BUSINESS NAME": "CM HALAL",
      "AGENT USERNAME": "CHA70301",
      "ADDRESS": "TECHIMAN- BONO EAST",
      "Location": "ADJACENT ABRAFI CHILDREN'S HOSPITAL",
      "GPS COORDINATES": "7.5800810,-1.9462820",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3347,
      "AGENT BUSINESS NAME": "ABDUL FATAWU DALIRI VENTURES",
      "AGENT USERNAME": "AFD70301",
      "ADDRESS": "TECHIMAN BLUE CROSS, BONO EAST",
      "Location": "BEHIND S.D.A CHURCH",
      "GPS COORDINATES": "BT-0003-8898",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3348,
      "AGENT BUSINESS NAME": "JOSHUA MORTTEY ENTERPRISE",
      "AGENT USERNAME": "JME70201",
      "ADDRESS": "UNNUMBERED CONTAINER AT AYAKORASE, BEREKUM",
      "Location": "NEAR FREEMAN METHODIST CHURCH",
      "GPS COORDINATES": "BB-0007-3656",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3349,
      "AGENT BUSINESS NAME": "LEAVING A LEGACY LBG",
      "AGENT USERNAME": "LLL70201",
      "ADDRESS": "P.O BOX 550 BEREKUM",
      "Location": "INSIDE BEREKUM CENTRAL MARKET",
      "GPS COORDINATES": "7.45050°N, 2.58155°W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3350,
      "AGENT BUSINESS NAME": "AMESON OHENENANA ENT ",
      "AGENT USERNAME": "AOE20101",
      "ADDRESS": "UNNUMBERED CONTAINER AT ADUAMOAH KWAHU",
      "Location": "NEAR LORRY STATION ",
      "GPS COORDINATES": "6°38'27.5' N 0°45'26.3'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3351,
      "AGENT BUSINESS NAME": "SAMCONY- AMOUNT VENTURES ",
      "AGENT USERNAME": "SAV20101",
      "ADDRESS": "GD 12, NKAWKAW ECOWAS",
      "Location": "ADJACENT TRUE FAITH CHURCH ",
      "GPS COORDINATES": "6°33'43.5' N 0°47'02.0'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3352,
      "AGENT BUSINESS NAME": "K SAMMY ENTERPRISE",
      "AGENT USERNAME": "KSESUB02801",
      "ADDRESS": "ASHAIMAN KANEWU",
      "Location": "NEAR THE TAXI STATION",
      "GPS COORDINATES": "5.675206,-0.058319",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3353,
      "AGENT BUSINESS NAME": "DE-DIESTA VENTURES",
      "AGENT USERNAME": "DDV50102",
      "ADDRESS": "HO MARKET TOP, HO",
      "Location": "NEAR GCB BANK, HO MARKET BRANCH",
      "GPS COORDINATES": "6.622317,0.473664",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3354,
      "AGENT BUSINESS NAME": "MUSAH TRADING ENTERPRISE",
      "AGENT USERNAME": "MTE50101",
      "ADDRESS": "DZODZE",
      "Location": "NEAR DZODZE MARKET JUNCTION",
      "GPS COORDINATES": "6.233514,0.994234",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3355,
      "AGENT BUSINESS NAME": "EMMANUEL ENTERPRISE",
      "AGENT USERNAME": "EEN50101",
      "ADDRESS": "HO",
      "Location": "BEHIND HO STADIUM",
      "GPS COORDINATES": "6.599630,0.467648",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3356,
      "AGENT BUSINESS NAME": "P-KAY ENTERPRISE",
      "AGENT USERNAME": "PKV50101",
      "ADDRESS": "KPEDZE,HO",
      "Location": "NEAR KPEDZE POLICE STATION",
      "GPS COORDINATES": "6.841917,0.495596",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3357,
      "AGENT BUSINESS NAME": "ELNICK GLOBAL COMPANY LIMITED",
      "AGENT USERNAME": "EGC50101",
      "ADDRESS": "MAFI KUMASI, HO",
      "Location": "NEAR THE MAFI KUMASI MARKET",
      "GPS COORDINATES": "6.1624,0.3428",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3358,
      "AGENT BUSINESS NAME": "MAWUME IMPORT AND EXPORT ",
      "AGENT USERNAME": "MTE50101",
      "ADDRESS": "LOKOE, HO",
      "Location": "NEAR DATALINK SCHOOL",
      "GPS COORDINATES": "6.60440,0.44928",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3359,
      "AGENT BUSINESS NAME": "RAINMAKER VENTURES",
      "AGENT USERNAME": "RVE50101",
      "ADDRESS": "DZOLOKPUITA",
      "Location": "OPPOSITE DZOLOKPUITA POLICE STATION",
      "GPS COORDINATES": "6.786629,0.440695",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3360,
      "AGENT BUSINESS NAME": "K.D. DODZI VENTURES",
      "AGENT USERNAME": "KDV19101",
      "ADDRESS": "ABOATOASE",
      "Location": "INSIDE THE LORRY STATION",
      "GPS COORDINATES": "0.349517,7.46708",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3361,
      "AGENT BUSINESS NAME": "GPDA ENTERPRISE",
      "AGENT USERNAME": "GEN19102",
      "ADDRESS": "DAMBAI",
      "Location": "OPPOSITE POLICE QUARTER",
      "GPS COORDINATES": "0.1799630,8.0592580",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3362,
      "AGENT BUSINESS NAME": "DIVINE TOUCH VENTURES",
      "AGENT USERNAME": "DTV19101",
      "ADDRESS": "DAMBAI",
      "Location": "OPPOSITE ARENA SPOT",
      "GPS COORDINATES": "-122.0814,37.389",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3363,
      "AGENT BUSINESS NAME": "GROWING VENTURES",
      "AGENT USERNAME": "GVE50104",
      "ADDRESS": "HO",
      "Location": "BESIDE HO MELCOM SHOPPING MALL",
      "GPS COORDINATES": "6.603111,0.467005",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3364,
      "AGENT BUSINESS NAME": "JAYLETT ENTERPRISE",
      "AGENT USERNAME": "JENSUB50101-IND",
      "ADDRESS": "AHOE, HO",
      "Location": "NEAR THE AHOE ROUNDABOUT",
      "GPS COORDINATES": "0.6033,0.47053",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3365,
      "AGENT BUSINESS NAME": "JAYLETT ENTERPRISE",
      "AGENT USERNAME": "JENSUB50102-IND",
      "ADDRESS": "HO",
      "Location": "NEAR GUINESS ROUNDABOUT",
      "GPS COORDINATES": "6.604778,0.475838",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3366,
      "AGENT BUSINESS NAME": "LAMBANO AION ENTERPRISE",
      "AGENT USERNAME": "LAE50101",
      "ADDRESS": "AFLAO",
      "Location": "NEAR HOLY FM STATION",
      "GPS COORDINATES": "6.121273,1.182787",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3367,
      "AGENT BUSINESS NAME": "T AND J VENTURES",
      "AGENT USERNAME": "TJV50101",
      "ADDRESS": "SOKODE LOKOE, HO",
      "Location": "NEAR GOIL FILLING STATION",
      "GPS COORDINATES": "6.610967, 0.470245",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3368,
      "AGENT BUSINESS NAME": "AYAMEM CENTRE",
      "AGENT USERNAME": "ACE50101",
      "ADDRESS": "JUAPONG",
      "Location": "NEAR CHURCH OF PENTECOST",
      "GPS COORDINATES": "6.253980,0.138566",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3369,
      "AGENT BUSINESS NAME": "JIKDS TECHNOLOGIES AND MULTIMEDIA",
      "AGENT USERNAME": "JTM50101",
      "ADDRESS": "MAFI KUMASE, HO",
      "Location": "CLOSE TO THE STOOL HOUSE",
      "GPS COORDINATES": "6.271291,0.571076",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3370,
      "AGENT BUSINESS NAME": "GHANSTONE TRUST FUND LBG",
      "AGENT USERNAME": "GTF50101",
      "ADDRESS": "DAVE, HO",
      "Location": "AT DAVE JUNCTION",
      "GPS COORDINATES": "6.611008,0.470338",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3371,
      "AGENT BUSINESS NAME": "AL-TIZZA INVESTMENT COMPANY LIMITED ",
      "AGENT USERNAME": "AICSUB50101",
      "ADDRESS": "DENU",
      "Location": "NEAR SSNIT OFFICE",
      "GPS COORDINATES": "6.102490,1.149225",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3372,
      "AGENT BUSINESS NAME": "AL-TIZZA INVESTMENT COMPANY LIMITED",
      "AGENT USERNAME": "AICSUB50103",
      "ADDRESS": "SOGAKOPE",
      "Location": "NEAR SOGAKOPE STATION",
      "GPS COORDINATES": "5.999595,0.596810",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3373,
      "AGENT BUSINESS NAME": "RELIX COMPANY LTD",
      "AGENT USERNAME": "RCL30202",
      "ADDRESS": "PEDU",
      "Location": "OPPOSITE ASHFOAM DEPOT",
      "GPS COORDINATES": "5°07'48.6'N1°16'30.8'W",
      "Lat": "",
      "Lng": ""
    },
    {
      "ID": 3374,
      "AGENT BUSINESS NAME": "FAUSTIYOUS DE VENTURES",
      "AGENT USERNAME": "FDV30201",
      "ADDRESS": "ANOMABO MARKET",
      "Location": "OPPOSITE ANOMABO BUS STOP STATIO",
      "GPS COORDINATES": "5°10'39.0'1°07'18.5'W",
      "Lat": "",
      "Lng": ""
    }
]


for (let i = 0; i < agency_points.length; i++ ){
    console.log('Old coordinate is ', agency_points[i]["GPS COORDINATES"]);
    agency_points[i]['Transformed'] = parse_gps(agency_points[i]['GPS COORDINATES']);
    //parse_gps(agency_points[i]["GPS COORDINATES"]);
    console.log(agency_points[i]);
    console.log('counter is ', i);
    i++;
}


//console.log(agency_points);



require('fs').writeFile(

    './AgencyGPS.json',

    JSON.stringify(agency_points),

    function (err) {
        if (err) {
            console.error('Crap happens');
        }
    }
);

// const fs = require('fs');
// const content = agency_points.toLocaleString();
// fs.writeFile('\Users\nurudin\Documents\Projects\LatLngConverter\Transformed.csv', content, err =>{
//     if(err){
//         console.error(err);
//     }else{
//         console.log('File Wirtten successfully');
//     }
// })