(function() {
  AIM.extend({
    web:{
      site:{
        index:[
          [
            ['H2', '', 'Mijn Schiphol'],
            ['P', '', [
              ['A', 'button', 'Mijn Schiphol', {'href': '/om/' }, ],
            ]],
          ],
          [
            ['H2', '', 'Workorder'],
            ['P', '', `
            `],
            ['P', '', [
              ['A', 'button', 'Workorder', {'href': '/workorder' }, ],
            ]],
          ],
          [
            ['H2', '', 'Baanstation J2'],
            ['P', '', [
              ['A', 'button', 'Mijn Baanstation', {'href': '/sites/schiphol/j2/qnode/webroot', target: 'qnode'}, ],
            ]],
          ],
          [
            ['H2', '', 'NAV'],
            ['P', '', [
              ['A', 'button', 'Navigator', {'href': '/nav', target: 'nav'}, ],
            ]],
          ],
        ]
      }
    }
  });
})();
