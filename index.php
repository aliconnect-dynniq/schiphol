<?php
require_once ($_SERVER['DOCUMENT_ROOT'].'/../node_modules/@aliconnect/api/php/aim.php');
aim()->login();
$par = [
  [
    ['H1', '', 'Aliconnect'],
    // ['P', '', '
    // Aliconnect is een veelzijdige werkomgeving waarin u zonder programmeren een webapplicatie maakt voor het beheren van al uw formulieren en lijsten.
    // Makkelijker dan in excel of word bouwt u flexibele lijsten die u kunt bijhouden in een webapplicatie, kunt delen met anderen.
    // '],
    ['P', '', '
    <b>One Source, One Truth</b><br>
    Improve the quality of your business process and daily decisions,<br>
    based on one consistent reality
    '],
  ],
  [
    // ['IMG', '', [ 'src'=> 'image/tablet1.png', 'style'=> 'position:absolute;object-fit:cover;height:100%;width:100%;' ] ],
    [
      'DIV', 'row',
      [
        ['IMG', '', [ 'src'=> 'image/tablet2.png' ] ],
        [
          'DIV', 'col', [
            ['H2', '', 'What if…? You and your Employees work 24/7 with  the Actual Truth?'],
            ['P', '', '
            Een standaard applicatie voor al uw gegevens. Een werkomgeving voor CRM, project management, artikel beheer en al uw persoonlijke lijsten.
            '],
          ],
        ],
      ],
    ],
  ],
];

$idToken = empty($_COOKIE['id_token']) ? null : get_token($_COOKIE['id_token']);

if ($idToken) {
  $sub = $idToken['sub'];
  $par[] = [
    ['H2', '', 'Welkom gebruiker '.$sub],
    ['P', '', '
    U bent aangemeld bij Aliconnect en kunt nu gebruik maken van uw data of werken met de object manager.
    '],
    ['P', '', '
    Aliconnect koppelt uw persoonlijke data met uw microsoft outlook gegevens. Uw contactgegevens, afspraken en emails georganiseerd binnen uw persoonlijke, project en/of organisatie informatie.
    Uw contacten worden gesynchroniseerd tussen uw ERP, telefoon, CRM omgeving en contacten van uw collega\'s.
    '],
    ['P', '', [
      ['A', 'button', 'Aanmelden met uw Microsoft account', ['href'=> '/api/mse/login'], ],
      ['A', 'button', 'Afmelden', ['href'=> '?prompt=logout'], ],
      ]],
    ];
  } else {
    $par[] = [
      ['H2', '', 'Voor iedereen een eigen account'],
      ['P', '', '
      Ieder persoon heeft zijn eigen account gekoppeld aan zijn persoonlijke email adres of telefoon.
      U kunt zich gemakkelijk aanmelden op al uw applicaties en die van andere bedrijven.
      Integratie van het Aliconnect account beheer is mogelijk in vele software applicaties.
      '],
      ['P', '', '
      Aliconnect koppelt uw persoonlijke data met uw microsoft outlook gegevens. Uw contactgegevens, afspraken en emails georganiseerd binnen uw persoonlijke, project en/of organisatie informatie.
      Uw contacten worden gesynchroniseerd tussen uw ERP, telefoon, CRM omgeving en contacten van uw collega\'s.
      '],
      ['P', '', [
        // ['A', 'button', 'Aanmelden met uw microsoft account', ['href'=> '/api/mse/login'], ],
        // ['A', 'button', 'Aanmelden', ['href'=> '?prompt=login'], ],
        // ['A', 'button', 'ObjectManager', ['href'=> '/om/'], ]
        // ['A', 'button', 'Maak nu een account', ['href'=> 'https://login.aliconnect.nl?prompt=create_account'], ],
        ]],
      ];
    }
    $par = array_merge($par, [
      [
        ['H2', '', 'Aan het werk met de ObjectManager'],
        ['P', '', '
        Een standaard applicatie voor al uw gegevens. Een werkomgeving voor CRM, project management, artikel beheer en al uw persoonlijke lijsten.
        '],
        ['P', '', [
          ['A', 'button', 'Mijn Aliconnect', ['href'=> '/om/'], ],
          ['A', 'button', 'Lees meer', ['href'=> '/docs/learn/configuration/create_schema_and_form/'], ],
          // $idToken ? ['A', 'button', 'Open de ObjectManager', ['href'=> '/om/'], ] : null,
          ]],
        ],
        [
          ['H2', '', 'Configureer je eigen werkomgeving'],
          ['P', '', '
          Het bouwen van software is nooit zo makkelijk geweest. Geen enkele regel code.
          Beschrijf eenvoudig wat u wilt, welke lijsten u nodig heeft of hoe uw menu er uit moet zien.
          En uw applicatie is online.
          '],
          ['P', '', [
            ['A', 'button', 'Lees hier hoe', ['href'=> '/docs/learn/configuration/create_schema_and_form/'], ],
            $idToken ? ['A', 'button', 'Maak jouw configuratie', ['href'=> '/om/?prompt=config_edit'], ] : null,
            ]],
          ],
          [
            ['H2', '', 'Een veilige opslag van al uw data (Cyber Security)'],
            ['P', '', '
            Alleen toegang voor iedereen die daar de rechten voor heeft.
            Authenticatie conform standaarden als OAuth2 zijn door het gehele systeem geintegreerd.
            Meerder verificaties en versleutelde certificaten zorgen dat ervoor dat alleen bevoegde gebruikers en applicaties bij uw data kunnen.
            '],
            ['P', '', [
              ['A', 'button', 'Lees hier hoe', ['href'=> '/docs/learn/configuration/create_schema_and_form/'], ],
              ]],
            ],
            [
              ['H2', '', 'Algemene verordening gegevensbescherming (AVG)'],
              ['P', '', '
              U kunt per gegevens veld exact aangeven wie wat mag zien en wijzigen, dit gaat veel verder dan bijvoorbeeld Excel.
              U bepaalt zelf wie er toegang heeft tot welke gegevens en voor hoelang. Dus alleen toegang tot de gegevens die zij nodig hebben.
              U bent 100% eigenaar van uw persoonlijke data.
              '],
              ['P', '', [
                ['A', 'button', 'Lees hier hoe', ['href'=> '/docs/learn/configuration/create_schema_and_form/'], ],
                ]],
              ],
              [
                ['H2', '', 'Één database voor al uw gegevens (One Source, One truth)'],
                ['P', '', '
                De AIM database is zelflerend. U kunt hier ieder datamodel in opslaan zonder programmeren.
                Configureer uw datamodel conform de <a href="/docs/learn/open_standards/api_application_programming_interfaces/oas_open_api_specification/">Open API Specificatie</a> en uw data management server is online.
                Al uw software heeft toegang tot deze data via een REST API conform het standaard OData protocol.
                '],
                ['P', '', [
                  ['A', 'button', 'Lees hier hoe', ['href'=> '/docs/learn/configuration/create_schema_and_form/'], ],
                  ]],
                ],
                [
                  ['H2', '', 'Start met bouwen van je eigen web applicatie'],
                  ['P', '', '
                  Een eigen server of installatie van software is niet nodig.
                  U kunt een eigen applicatie bouwen in HTML, CSS en Javascript.
                  Wilt u uw grenzen verleggen dan biedt de SDK een snelle start voor PHp en NodeJS.
                  '],
                  ['P', '', [
                    ['A', 'button', 'Bouw een applicatie', ['href'=> '/docs/explore/tutorials/file_based_web_application/get_started/'], ],
                    ['A', 'button', 'Met PHP', ['href'=> '/docs/learn/configuration/create_schema_and_form/'], ],
                    ['A', 'button', 'Met NodeJS', ['href'=> '/docs/learn/configuration/create_schema_and_form/'], ],
                    ]],
                  ],
                  [
                    ['H2', '', 'Internet of things (IoT)'],
                    ['P', '', 'Data uitwisselen met machines of apparaten. Visualisatie van de status van uw machinepark. U bouwt gemakkelijk realtime visualisaties met web techniek. De AIM SDK regelt alle communicatie.'],
                    ['P', '', [
                      ['A', 'button', 'Lees hier hoe', ['href'=> '/docs/learn/configuration/create_schema_and_form/'], ],
                      ['A', 'button', 'Bouw je eerste IoT applicatie', ['href'=> 'docs/explore/tutorials/control_solution/get_started/'], ],
                      ]],
                    ],
                    [
                      ['H2', '', 'Project Management, Systeem ontwerp en 3D visualisatie'],
                      ['P', '', '
                      De AIM database is object georienteerd en relationeel.
                      Hierdoor kunnen oneindige structuren, hiërarchisch of willekeurig, worden aangebracht tussen alle objecten van iedere klasse.
                      Middel het overerven van eigenschappen en structuren kunnen systemen opgebouwd worden uit typicals.
                      Deze systeem structuren zijn te visualiseren als webpagina, document, diagram tot een 3D model.
                      Configuratie templates bieden een snelle start voor het werken conform Systems Engineering voor het beheer van eisen, functies, systeem, werk en organisatie structuren.
                      '],
                      ['P', '', [
                        ['A', 'button', 'Lees hier hoe', ['href'=> '/docs/learn/configuration/create_schema_and_form/'], ],
                        ]],
                      ],
                      [
                        ['H2', '', 'Ontwikkel mee aan het AIM framework'],
                        ['P', '', 'Het AIM framework is een opensource ontwikkeling. U kunt de AIM SDK gemakkelijk toepassen binnen uw eigen software ontwikkeling. Ontwikkelaars over de hele weeld werken mee aan het continue verbeteren en uitbreiden van functionaliteit.'],
                        ['P', '', [
                          ['A', 'button', 'Naar GitHub', ['href'=> 'https://github.com/aliconnect'], ],
                        ]
                      ],
                    ],
                    [
                          ['H2', '', 'Een nederlandse ontwikkelaar'],
                          ['P', '', 'De core van het AIM Framework is ontwikkeld door Alicon. Een nederlandse automatiseerder met meer dan 30 jaar ervaring in industriele en kantoor automatisering.'],
                          ['P', '', [
                            ['A', 'button', 'Meer over Alicon', ['href'=> 'https://alicon.aliconnect.nl'], ],
                            ['A', 'button', 'Meer over SourceForce', ['href'=> 'https://sourceforce.aliconnect.nl'], ],
                            ]],
                          ],
                        ]);


                        printf(file_get_contents(__DIR__.'/index.html'), json_encode($par));
                        die();

                        extract($_GET);
                        $url = parse_url($_SERVER['REQUEST_URI']);
                        if (!empty($_GET['code'])) {
                          $AIM->get_access_token();
                          // debug(1,$_GET);
                          die (header('Location: '.explode('?',$_SERVER['REQUEST_URI'])[0]));
                        } else if (!empty($_GET['response_type'])) {
                          readfile(__DIR__.'/login.html');
                        } else if (!empty($_COOKIE['access_token'])) {
                          readfile(__DIR__.'/om.html');
                        } else if (empty($_GET['prompt'])) {
                          die (header('Location: ?prompt=login'));
                        } else if (!empty($_GET['prompt'])) {
                          // die('a');
                          // if ($_GET['prompt']==='logout') {
                          //   $AIM->logout();
                          //   die(header('Location: /' ) );
                          //   // die('logout');
                          // }
                          readfile(__DIR__.'/login.html');
                        } else if (empty($_COOKIE['access_token'])) {
                          readfile(__DIR__.'/index.html');
                        } else {
                          readfile(__DIR__.'/om.html');
                          // die (header('Location: /om'.(empty($url['query']) ? '' : '?' . $url['query'])));
                        }
