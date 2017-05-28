// Set your data here

// Full documentation can be found at
// https://www.mapbox.com/mapbox-gl-js/style-spec/
var style = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    zoom:  5.0,
    center: [-100.376546, 40.175968],
    minZoom: 0,
    maxZoom: 15
};

var smallMapStyle = {
    container: "mapsmall",
    style: "mapbox://styles/mapbox/streets-v10",
    zoom: 2,
    center: [-120.867069, 42.931101],
    minZoom: 0,
    maxZoom: 4,
    attributionControl: false
};

var textSize = {
    "base": 1,
    "stops": [
        [
            7,
            11.5
        ],
        [
            14,
            16
        ]
    ]
};


/*
 * textField is used for the title of the point of interest
 */
textField = "{iata} + {title}";

/*
 * Create full HTML for 'mousever' and 'click' events
 */
function setHTML(feature) {
  var html = feature.properties.title;
      html += " (" + feature.properties.iata + ")" + "<br>";
      html += feature.properties.city + ", " + feature.properties.state + "<br><hr>";
      html += feature.geometry.coordinates[1].toFixed(4) + ", " + feature.geometry.coordinates[0].toFixed(4);

    return html;
}

/*
// * The raw CSV can be placed with in this Javascript variable
// * The opening backtick, `, and back slash, \,
// *  are very important so be sure to not edit those
// *  as are the closing backtick, `, and semicolor, ;.
// Example,

var csvString = `\
iata,title,city,state,country,latitude,longitude
00M,Thigpen,Bay Springs,MS,USA,31.95376472,-89.23450472
`;

*/

var csvString = `\
iata,title,city,state,country,latitude,longitude
00M,Thigpen,Bay Springs,MS,USA,31.95376472,-89.23450472
00R,Livingston Municipal,Livingston,TX,USA,30.68586111,-95.01792778
00V,Meadow Lake,Colorado Springs,CO,USA,38.94574889,-104.5698933
01G,Perry-Warsaw,Perry,NY,USA,42.74134667,-78.05208056
01J,Hilliard Airpark,Hilliard,FL,USA,30.6880125,-81.90594389
01M,Tishomingo County,Belmont,MS,USA,34.49166667,-88.20111111
02A,Gragg-Wade,Clanton,AL,USA,32.85048667,-86.61145333
02C,Capitol,Brookfield,WI,USA,43.08751,-88.17786917
02G,Columbiana County,East Liverpool,OH,USA,40.67331278,-80.64140639
03D,Memphis Memorial,Memphis,MO,USA,40.44725889,-92.22696056
04M,Calhoun County,Pittsboro,MS,USA,33.93011222,-89.34285194
04Y,Hawley Municipal,Hawley,MN,USA,46.88384889,-96.35089861
05C,Griffith-Merrillville,Griffith,IN,USA,41.51961917,-87.40109333
05F,Gatesville - City/County,Gatesville,TX,USA,31.42127556,-97.79696778
05U,Eureka,Eureka,NV,USA,39.60416667,-116.0050597
06A,Moton  Municipal,Tuskegee,AL,USA,32.46047167,-85.68003611
06C,Schaumburg,Chicago/Schaumburg,IL,USA,41.98934083,-88.10124278
06D,Rolla Municipal,Rolla,ND,USA,48.88434111,-99.62087694
06M,Eupora Municipal,Eupora,MS,USA,33.53456583,-89.31256917
06N,Randall,Middletown,NY,USA,41.43156583,-74.39191722
06U,Jackpot/Hayden,Jackpot,NV,USA,41.97602222,-114.6580911
07C,Dekalb County,Auburn,IN,USA,41.30716667,-85.06433333
07F,Gladewater Municipal,Gladewater,TX,USA,32.52883861,-94.97174556
07G,Fitch H Beach,Charlotte,MI,USA,42.57450861,-84.81143139
07K,Central City Municipal,Central City,NE,USA,41.11668056,-98.05033639
08A,Wetumpka Municipal,Wetumpka,AL,USA,32.52943944,-86.32822139
08D,Stanley Municipal,Stanley,ND,USA,48.30079861,-102.4063514
08K,Harvard State,Harvard,NE,USA,40.65138528,-98.07978667
08M,Carthage-Leake County,Carthage,MS,USA,32.76124611,-89.53007139
09A,Butler-Choctaw County,Butler,AL,USA,32.11931306,-88.1274625
09J,Jekyll Island,Jekyll Island,GA,USA,31.07447222,-81.42777778
09K,Sargent Municipal,Sargent,NE,USA,41.63695083,-99.34038139
09M,Charleston Municipal,Charleston,MS,USA,33.99150222,-90.078145
09W,South Capitol Street,Washington,DC,USA,38.86872333,-77.00747583
0A3,Smithville Municipal,Smithville,TN,USA,35.98531194,-85.80931806
0A8,Bibb County,Centreville,AL,USA,32.93679056,-87.08888306
0A9,Elizabethton Municipal,Elizabethton,TN,USA,36.37094306,-82.17374111
0AK,Pilot Station,Pilot Station,AK,USA,61.93396417,-162.8929358
0B1,Col. Dyke,Bethel,ME,USA,44.42506444,-70.80784778
0B4,Hartington Municipal,Hartington,NE,USA,42.60355556,-97.25263889
0B5,Turners Falls,Montague,MA,USA,42.59136361,-72.52275472
0B7,Warren-Sugar Bush,Warren,VT,USA,44.11672722,-72.82705806
0B8,Elizabeth,Fishers Island,NY,USA,41.25130806,-72.03161139
0C0,Dacy,Chicago/Harvard,IL,USA,42.40418556,-88.63343222
0C4,Pender Municipal,Pender,NE,USA,42.11388722,-96.72892556
0D1,South Haven Municipal,South Haven,MI,USA,42.35083333,-86.25613889
0D8,Gettysburg Municipal,Gettysburg,SD,USA,44.98730556,-99.9535
0E0,Moriarty,Moriarty,NM,USA,34.98560639,-106.0094661
0E8,Crownpoint,Crownpoint,NM,USA,35.71765889,-108.2015961
0F2,Bowie Municipal,Bowie,TX,USA,33.60166667,-97.77556
0F4,Loup City Municipal,Loup City,NE,USA,41.29028694,-98.99064278
0F7,Fountainhead Lodge Airpark,Eufaula,OK,USA,35.38898833,-95.60165111
0F8,William R Pogue Municipal,Sand Springs,OK,USA,36.17528,-96.15181028
0F9,Tishomingo Airpark,Tishomingo,OK,USA,34.19592833,-96.67555694
0G0,North Buffalo Suburban,Lockport,NY,USA,43.10318389,-78.70334583
0G3,Tecumseh Municipal,Tecumseh,NE,USA,40.39944417,-96.17139694
0G6,Williams County,Bryan,OH,USA,41.46736111,-84.50655556
0G7,Finger Lakes Regional,Seneca Falls,NY,USA,42.88062278,-76.78162028
0H1,Trego Wakeeney,Wakeeney,KS,USA,39.0044525,-99.89289917
0I8,Cynthiana-Harrison County,Cynthiana,KY,USA,38.36674167,-84.28410056
0J0,Abbeville Municipal,Abbeville,AL,USA,31.60016778,-85.23882222
0J4,Florala Municipal,Florala,AL,USA,31.04247361,-86.31156111
0J6,Headland Municipal,Headland,AL,USA,31.364895,-85.30965556
0K7,Humboldt Municipal,Humboldt,IA,USA,42.7360825,-94.24524167
0L5,Goldfield,Goldfield,NV,USA,37.71798833,-117.2384119
0L7,Jean,Jean,NV,USA,35.76827222,-115.3296378
0L9,Echo Bay,Overton,NV,USA,36.31108972,-114.4638672
0M0,Dumas Municipal,Dumas,AR,USA,33.8845475,-91.53429111
0M1,Scott,Parsons,TN,USA,35.63778,-88.127995
0M4,Benton County,Camden,TN,USA,36.01122694,-88.12328833
0M5,Humphreys County,Waverly,TN,USA,36.11659972,-87.73815889
0M6,Panola County,Batesville,MS,USA,34.36677444,-89.90008917
0M8,Byerley,Lake Providence,LA,USA,32.82587917,-91.187665
0O3,Calaveras Co-Maury Rasmussen,San Andreas,CA,USA,38.14611639,-120.6481733
0O4,Corning Municipal,Corning,CA,USA,39.94376806,-122.1713781
0O5,University,Davis,CA,USA,38.53146222,-121.7864906
0Q5,Shelter Cove,Shelter Cove,CA,USA,40.02764333,-124.0733639
0Q6,Shingletown,Shingletown,CA,USA,40.52210111,-121.8177683
0R0,Columbia-Marion County,Columbia,MS,USA,31.29700806,-89.81282944
0R1,Atmore Municipal,Atmore,AL,USA,31.01621528,-87.44675972
0R3,Abbeville Chris Crusta Memorial,Abbeville,LA,USA,29.97576083,-92.08415167
0R4,Concordia Parish,Vidalia,LA,USA,31.56683278,-91.50011889
0R5,David G Joyce,Winnfield,LA,USA,31.96366222,-92.66026056
0R7,Red River,Coushatta,LA,USA,31.99071694,-93.30739306
0S7,Dorothy Scott,Oroville,WA,USA,48.958965,-119.4119622
0S9,Jefferson County International,Port Townsend,WA,USA,48.04981361,-122.8012792
0V2,Harriet Alexander,Salida,CO,USA,38.53916389,-106.0458483
0V3,Pioneer Village,Minden,NE,USA,40.5149125,-98.94565083
0V4,Brookneal/Campbell County,Brookneal,VA,USA,37.14172222,-79.01638889
0V6,Mission Sioux,Mission,SD,USA,43.30694778,-100.6281936
0V7,Kayenta,Kayenta,AZ,USA,36.70972139,-110.2367978
10C,Galt,Chicago/Greenwood/Wonderlake,IL,USA,42.40266472,-88.37588917
10D,Winsted Municipal,Winsted,MN,USA,44.94996278,-94.0669175
10G,Holmes County,Millersburg,OH,USA,40.53716667,-81.95436111
10N,Wallkill,Wallkill,NY,USA,41.62787111,-74.13375583
10U,Owyhee,Owyhee,NV,USA,41.95323306,-116.1876014
11A,Clayton Municipal,Clayton,AL,USA,31.88329917,-85.48491361
11D,Clarion Cty,Clarion,PA,USA,41.22581222,-79.44098972
11IS,Schaumburg Heliport,Chicago/Schaumburg,IL,USA,42.04808278,-88.05257194
11J,Early County,Blakely,GA,USA,31.39698611,-84.89525694
11R,Brenham Municipal,Brenham,TX,USA,30.219,-96.37427778
12C,Rochelle Municipal,Rochelle,IL,USA,41.89300139,-89.07829
12D,Tower Municipal,Tower,MN,USA,47.81833333,-92.29166667
12J,Brewton Municipal,Brewton,AL,USA,31.05126306,-87.06796833
12K,Superior Municipal,Superior,NE,USA,40.04636111,-98.06011111
12Y,Le Sueur Municipal,Le Sueur,MN,USA,44.43746472,-93.91274083
13C,Lakeview,Lakeview,MI,USA,43.45213722,-85.26480333
13K,Eureka Municipal,Eureka,KS,USA,37.8515825,-96.29169806
13N,Trinca,Andover,NJ,USA,40.96676444,-74.78016556
14J,Carl Folsom,Elba,AL,USA,31.40988861,-86.08883583
14M,Hollandale Municipal,Hollandale,MS,USA,33.18262167,-90.83065444
14Y,Todd Field,Long Prairie,MN,USA,45.89857556,-94.87391
15F,Haskell Municipal,Haskell,TX,USA,33.19155556,-99.71793056
15J,Cook County,Adel,GA,USA,31.13780556,-83.45308333
15M,Luka,Luka,MS,USA,34.7723125,-88.16587444
15Z,McCarthy 2,McCarthy,AK,USA,61.43706083,-142.9037372
16A,Nunapitchuk,Nunapitchuk,AK,USA,60.90582833,-162.4391158
16G,Seneca County,Tiffin,OH,USA,41.09405556,-83.2125
16J,Dawson Municipal,Dawson,GA,USA,31.74328472,-84.419285
16S,Myrtle Creek Municipal,Myrtle Creek,OR,USA,42.99845056,-123.3095092
17G,Port Bucyrus-Crawford County,Bucyrus,OH,USA,40.78141667,-82.97469444
17J,Donalsonville Municipal,Donalsonville,GA,USA,31.00694444,-84.87761111
17K,Boise City,Boise City,OK,USA,36.77430028,-102.5104364
17M,Magee Municipal,Magee,MS,USA,31.86127139,-89.80285361
17N,Cross Keys,Cross Keys,NJ,USA,39.70547583,-75.03300306
17Z,Manokotak,Manokotak,AK,USA,58.98896583,-159.0499739
18A,Franklin County,Canon,GA,USA,34.34010472,-83.13348333
18I,McCreary County,Pine Knot,KY,USA,36.69591306,-84.39160389
19A,Jackson County,Jefferson,GA,USA,34.17402472,-83.56066528
19M,C A Moore,Lexington,MS,USA,33.12546111,-90.02555694
19N,Camden,Berlin,NJ,USA,39.77842056,-74.94780389
19P,Port Protection SPB,Port Protection,AK,USA,56.32880417,-133.6100844
1A3,Martin Campbell,Copperhill,TN,USA,35.01619111,-84.34631083
1A5,Macon County,Franklin,NC,USA,35.222595,-83.41904389
1A6,Middlesboro-Bell County,Middlesboro,KY,USA,36.6106375,-83.73741611
1A7,Jackson County,Gainesboro,TN,USA,36.39728139,-85.64164278
1A9,Autauga County,Prattville,AL,USA,32.438775,-86.51044778
1B0,Dexter Regional,Dexter,ME,USA,45.00839444,-69.23976722
1B1,Columbia Cty,Hudson,NY,USA,42.29130028,-73.71031944
1B3,Fair Haven,Fair Haven,VT,USA,43.61534389,-73.27455556
1B9,Mansfield Municipal,Mansfield,MA,USA,42.00013306,-71.19677139
1C5,Clow,Chicago/Plainfield,IL,USA,41.69597444,-88.12923056
1D1,Milbank Municipal,Milbank,SD,USA,45.23053806,-96.56596556
1D2,Canton -Plymouth -  Mettetal,Plymouth,MI,USA,42.35003667,-83.45826833
1D3,Platte Municipal,Platte,SD,USA,43.40332833,-98.82952972
1D6,Hector Municipal,Hector,MN,USA,44.73107278,-94.71471333
1D7,Webster Municipal,Webster,SD,USA,45.29329111,-97.51369889
1D8,Redfield Municipal,Redfield,SD,USA,44.86247611,-98.52953972
1F0,Downtown Ardmore,Ardmore,OK,USA,34.14698917,-97.12265194
1F1,Lake Murray State Park,Overbrook,OK,USA,34.07509694,-97.10667917
1F4,Madill Municipal,Madill,OK,USA,34.14040194,-96.81203222
1F9,Bridgeport Municipal,Bridgeport,TX,USA,33.17533333,-97.82838889
1G0,Wood County,Bowling Green,OH,USA,41.391,-83.63013889
1G3,Kent State University,Kent,OH,USA,41.15186167,-81.41658306
1G4,Grand Canyon West,Peach Springs,AZ,USA,35.99221,-113.8166164
1G5,Freedom,Medina,OH,USA,41.13144444,-81.76491667
1G6,Michael,Cicero,NY,USA,43.18166667,-76.12777778
1H0,Creve Coeur,St Louis,MO,USA,38.72752,-90.50830417
1H2,Effingham County Memorial,Effingham,IL,USA,39.07045083,-88.53351972
1H3,Linn State Tech. College,Linn,MO,USA,38.47149444,-91.81531667
1H8,Casey Municipal,Casey,IL,USA,39.30250917,-88.00406194
1I5,Freehold,Freehold,NY,USA,42.36425,-74.06596806
1I9,Delphi Municipal,Delphi,IN,USA,40.54281417,-86.68167194
1J0,Tri-County,Bonifay,FL,USA,30.84577778,-85.60138889
1K2,Lindsay Municipal,Lindsay,OK,USA,34.85007333,-97.58642028
1K4,David J. Perry,Goldsby,OK,USA,35.1550675,-97.47039389
1K5,Waynoka Municipal,Waynoka,OK,USA,36.56670028,-98.85231333
1K9,Satanta Municipal,Satanta,KS,USA,37.45419111,-100.9921119
1L0,St. John the Baptist Parish,Reserve,LA,USA,30.08720833,-90.58266528
1L1,Lincoln Co,Panaca,NV,USA,37.78746444,-114.4216567
1L7,Escalante Municipal,Escalante,UT,USA,37.74532639,-111.5701653
1L9,Parowan,Parowan,UT,USA,37.85969694,-112.816055
1M1,North Little Rock Municipal,No Lit Rock,AR,USA,34.83398056,-92.25792778
1M2,Belzoni Municipal,Belzoni,MS,USA,33.14518056,-90.51528472
1M4,Posey,Haleyville,AL,USA,34.28034806,-87.60044139
1M5,Portland Municipal,Portland,TN,USA,36.59287528,-86.47691028
1M7,Fulton,Fulton,KY,USA,36.52589417,-88.91561611
1MO,Mountain Grove Memorial,Mountain Grove,MO,USA,37.12071889,-92.311245
1N2,Spadaro,East Moriches,NY,USA,40.82787639,-72.74871083
1N4,Woodbine Muni,Woodbine,NJ,USA,39.21915,-74.794765
1N7,Blairstown,Blairstown,NJ,USA,40.97114556,-74.99747556
1N9,Allentown Queen City Muni,Allentown,PA,USA,40.57027778,-75.48830556
1ND3,Hamry,Kindred,ND,USA,46.6485775,-97.00564306
1O1,Grandfield Municipal,Grandfield,OK,USA,34.23758944,-98.74200917
1O2,Lampson,Lakeport,CA,USA,38.99017472,-122.8997175
1O3,Lodi,Lodi,CA,USA,38.20241667,-121.2684167
1O4,Thomas Municipal,Thomas,OK,USA,35.73338222,-98.73063833
1O6,Dunsmuir Municipal-Mott,Dunsmuir,CA,USA,41.26320889,-122.2719528
1R1,Jena,Jena,LA,USA,31.671005,-92.15846722
1R7,Brookhaven-Lincoln County,Brookhaven,MS,USA,31.6058475,-90.40931583
1R8,Bay Minette Municipal,Bay Minette,AL,USA,30.87046278,-87.81738167
1S0,Pierce County,Puyallup,WA,USA,47.10391667,-122.2871944
1S3,Tillitt,Forsyth,MT,USA,46.27110639,-106.6239206
1S5,Sunnyside Municipal,Sunnyside,WA,USA,46.32763139,-119.9705964
1S6,Priest River Muni,Priest River,ID,USA,48.19018611,-116.9093644
1U7,Bear Lake County,Paris,ID,USA,42.24714972,-111.33826
1V0,Navajo State Park,Navajo Dam,NM,USA,36.80833833,-107.6514444
1V2,Grant County,Hyannis,NE,USA,42.00942944,-101.7693439
`;
