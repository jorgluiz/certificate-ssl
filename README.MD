 certificado autoassinado usando o OpenSSL

[x] Crie um diretório para certificado:

# mkdir projeto-ssl

[x] Vá até pasta onde você criou execute o comando

# openssl req -nodes -new -x509 -keyout server.key -out server.cert


Ao gerar um certificado autoassinado usando OpenSSL, você será solicitado a fornecer algumas informações, incluindo o "Country Name (2 letter code)" (Código de País, geralmente representado por duas letras). Este campo requer o código de país de acordo com o padrão ISO 3166-1 alfa-2, que são códigos de duas letras para representar países e territórios.

Por exemplo:

Para os Estados Unidos, você pode inserir "US".
Para o Brasil, você pode inserir "BR".
Para o Canadá, você pode inserir "CA".
Para o Reino Unido, você pode inserir "GB".

Escolha o código de país que corresponda ao país em que você está localizado ou para o qual você está
 gerando o certificado SSL. Se você não tiver certeza do código de
  país correto, você pode consultar a lista de códigos de país ISO 3166-1 alfa-2 online.

  # https://www.rallybel.com/pt/links_iso_code2.html


  ISO 3166-1 alpha-2	País	ISO 3166-1 alpha-3	ISO numericamente
AD	Andorra	AND	020
AE	Emirados árabes Unidos	ARE	784
AF	Afeganistão	AFG	004
AG	Antígua e Barbuda	ATG	028
AI	Anguilla	AIA	660
AL	Albânia	ALB	008
AM	Arménia	ARM	051
AO	Angola	AGO	024
AQ	Antártida	ATA	010
AR	Argentina	ARG	032
AS	Samoa Americana	ASM	016
AT	Austria	AUT	040
AU	Austrália	AUS	036
AW	Aruba	ABW	533
AZ	Azerbaijão	AZE	031
BA	Bósnia e Herzegovina	BIH	070
BB	Barbados	BRB	052
BD	Bangladesh	BGD	050
BE	Bélgica	BEL	056
BF	Burkina Faso	BFA	854
BG	Bulgária	BGR	100
BH	Bahrein	BHR	048
BI	Burundi	BDI	108
BJ	Benim	BEN	204
BL	São Bartolomeu	BLM	652
BM	Bermudas	BMU	060
BN	Brunei	BRN	096
BO	Bolívia	BOL	068
BQ	Países Baixos Caribenhos	BES	535
BR	Brasil	BRA	076
BS	Bahamas	BHS	044
BT	Butão	BTN	064
BW	Botswana	BWA	072
BY	Bielorrússia	BLR	112
BZ	Belize	BLZ	084
CA	Canadá	CAN	124
CC	Ilhas Cocos	CCK	166
CD	República Democrática do Congo	COD	180
CF	República Centro-áfricana	CAF	140
CG	República do Congo	COG	178
CH	Suíça	CHE	756
CI	Costa do Marfim	CIV	384
CK	Ilhas Cook	COK	184
CL	Chile	CHL	152
CM	Camarões	CMR	120
CN	China	CHN	156
CO	Colômbia	COL	170
CR	Costa Rica	CRI	188
CU	Cuba	CUB	192
CV	Cabo Verde	CPV	132
CW	Curaçao	CUW	531
CX	Ilha Christmas	CXR	162
CY	Chipre	CYP	196
CZ	Tchéquia	CZE	203
DE	Alemanha	DEU	276
DJ	Djibouti	DJI	262
DK	Dinamarca	DNK	208
DM	Dominique	DMA	212
DO	República Dominicana	DOM	214
DZ	Argélia	DZA	012
EC	Equador	ECU	218
EE	Estónia	EST	233
EG	Egitoe	EGY	818
EH	República Democrática árabe Saariana	ESH	732
ER	Eritreia	ERI	232
ES	Espanha	ESP	724
ET	Etiópia	ETH	231
FI	Finlândia	FIN	246
FJ	Fiji	FJI	242
FK	Ilhas Malvinas	FLK	238
FM	Micronésia	FSM	583
FO	Ilhas Feroé	FRO	234
FR	França	FRA	250
GA	Gabão	GAB	266
GB	Reino Unido	GBR	826
GD	Grenada	GRD	308
GE	Geórgia	GEO	268
GF	Guiana Francesa	GUF	254
GG	Guernsey	GGY	831
GH	Gana	GHA	288
GI	Gibraltar	GIB	292
GL	Groelândia	GRL	304
GM	Gâmbia	GMB	270
GN	Guiné	GIN	324
GP	Guadalupe	GLP	312
GQ	Guiné Equatorial	GNQ	226
GR	Grécia	GRC	300
GS	Ilhas Geórgia e Sandwich do Sul	SGS	239
GU	Guam	GUM	316
GT	Guatemala	GTM	320
GW	Guiné-Bissau	GNB	624
GY	Guiana	GUY	328
HK	Hong Kong	HKG	344
HN	Honduras	HND	340
HR	Croácia	HRV	191
HT	Haití	HTI	332
HU	Hungria	HUN	348
ID	Indonesia	IDN	360
IE	Irlanda	IRL	372
IL	Israel	ISR	376
IM	Ilha de Man	IMN	833
IN	índia	IND	356
IO	Território Britânico do Oceano índico	IOT	086
IQ	Iraque	IRQ	368
IR	Irão	IRN	364
IS	Islândia	ISL	352
IT	Itália	ITA	380
JE	Jersey	JEY	832
JM	Jamaïca	JAM	388
JO	Jordânia	JOR	400
JP	Japão	JPN	392
KE	Quênia	KEN	404
KG	Quirguistão	KGZ	417
KH	Camboja	KHM	116
KI	Kiribati	KIR	296
KM	Comores	COM	174
KN	São Cristóvão e Nevis	KNA	659
KP	Coreia do Norte	PRK	408
KR	Coreia do Sul	KOR	410
KW	Kuwait	KWT	414
KY	Ilhas Cayman	CYM	136
KZ	Cazaquistão	KAZ	398
LA	Laos	LAO	418
LB	Líbano	LBN	422
LC	Santa Lúcia	LCA	662
LI	Liechtenstein	LIE	438
LK	Sri Lanka	LKA	144
LR	Libéria	LBR	430
LS	Lesoto	LSO	426
LT	Lituânia	LTU	440
LU	Luxemburgo	LUX	442
LV	Letónia	LVA	428
LY	Líbia	LBY	434
MA	Marrocos	MAR	504
MC	Monaco	MCO	492
MD	Moldávia	MDA	498
ME	Montenegro	MNE	499
MF	São Martinho	MAF	534
MG	Madagáscar	MDG	450
MH	Ilhas Marshall	MHL	584
MK	Macedónia	MKD	807
ML	Mali	MLI	466
MM	Mianmar	MMR	104
MN	Mongólia	MNG	496
MO	Macau	MAC	446
MP	Ilhas Marianas Setentrionais	MNP	580
MQ	Martinica	MTQ	474
MR	Mauritanie	MRT	478
MS	Montserrat	MSR	500
MT	Malta	MLT	470
MU	Maurícia	MUS	480
MV	Maldivas	MDV	462
MW	Malawi	MWI	454
MY	Malásia	MYS	458
MX	México	MEX	484
MZ	Moçambique	MOZ	508
NA	Namíbia	NAM	516
NC	Nova Caledónia	NCL	540
NE	Níger	NER	562
NF	Ilha Norfolk	NFK	574
NG	Nígeria	NGA	566
NI	Nicarágua	NIC	558
NL	Países Baixos	NLD	528
NO	Noruega	NOR	578
NP	Nepal	NPL	524
NR	Nauru	NRU	520
NU	Niue	NIU	570
NZ	Nova Zelândia	NZL	554
OM	Omã	OMN	512
PA	Panama	PAN	591
PE	Perú	PER	604
PF	Polinésia Francesa	PYF	258
PG	Papua-Nova Guiné	PNG	598
PH	Filipinas	PHL	608
PK	Paquistão	PAK	586
PL	Polónia	POL	616
PM	São Pedro e Miquelão	SPM	666
PN	Ilhas Pitcairn	PCN	612
PR	Puerto Rico	PRI	630
PS	Palestina	PSE	275
PT	Portugal	PRT	620
PW	Palau	PLW	585
PY	Paraguai	PRY	600
QA	Catar	QAT	634
RE	Reunião	REU	638
RO	Roménia	ROU	642
RS	Sérvia	SRB	688
RU	Rússia	RUS	643
RW	Ruanda	RWA	646
SB	Ilhas Salomão	SLB	090
SH	Santa Helena, Ascensão e Tristão da Cunha	SHN	654
SA	Arábia Saudita	SAU	682
SC	Seicheles	SYC	690
SD	Sudão	SDN	729
SE	Suécia	SWE	752
SG	Singapura	SGP	702
SI	Eslovênia	SVN	705
SK	Eslováquia	SVK	703
SL	Serra Leoa	SLE	694
SM	San Marino	SMR	674
SN	Senega	SEN	686
SO	Somália	SOM	706
SR	Suriname	SUR	740
SS	Sudão do Sul	SSD	728
ST	São Tomé e Príncipe	STP	678
SV	El Salvador	SLV	222
SX	Sint-Maarten	SXM	663
SY	Síria	SYR	760
SZ	eSwatani	SWZ	748
TC	Ilhas Turcas e Caicos	TCA	796
TD	Chade	TCD	148
TF	Terras Austrais e Antárticas Francesas	ATF	260
TG	Togo	TGO	768
TH	Tailândia	THA	764
TJ	Tajiquistão	TJK	762
TK	Tokelau	TKL	772
TL	Timor-Leste	TLS	626
TM	Turquemenistão	TKM	795
TN	Tunísia	TUN	788
TO	Tonga	TON	776
TR	Turquía	TUR	792
TT	Trindade e Tobag	TTO	780
TW	Taiwan	TWN	158
TV	Tuvalu	TUV	798
TZ	Tanzânia	TZA	834
UA	Ucrânia	UKR	804
UG	Uganda	UGA	800
US	Estados Unidos	USA	840
UY	Uruguai	URY	858
UZ	Uzbequistão	UZB	860
VA	Vaticano	VAT	336
VC	São Vicente e Granadinas	VCT	670
VE	Venezuela	VEN	862
VG	Ilhas Virgens Britânicas	VGB	092
VN	Vietnã	VNM	704
VU	Vanuatu	VUT	548
VI	Ilhas Virgens dos Estados Unidos	VIR	850
WF	Wallis e Futuna	WLF	876
WS	Samoa	WSM	882
XK	Kosovo	XKX	153
YE	Iémen	YEM	887
YT	Maiote	MYT	175
ZA	áfrica do Sul	ZAF	710
ZM	Zâmbia	ZMB	894
ZW	Zimbabwe	ZWE	716