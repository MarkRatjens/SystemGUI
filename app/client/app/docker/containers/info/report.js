app.docker.containers.info.report = (info) =>
app.report({
  object: info,
  horizontal: true,
  report: r => [
    r.field({
      key: 'Image',
      ingest: value => value.substring(7, 19),
    }),
    r.field({
      key: 'Config',
      label: false,
      as: 'one',
      horizontal: false,
      report: rr => [
        rr.field({
          key: 'FQDN',
          as: 'url',
          value: `http://${rr.object.Hostname}.${rr.object.Domainname}`
        }),
      ]
    }),
    r.field({
      key: 'NetworkSettings',
      label: false,
      as: 'one',
      horizontal: false,
      report: rr => [
        rr.field({
          key: 'Ports',
          as: 'many',
          ingest: (value) => {
            let ports = []
            for (let name in value) {
              ports.push({name, ports: value[name].map(port => `${port.HostIp}:${port.HostPort}`)})
            }
            return ports
          },
          report: rrr => [
            rrr.field({
              key: 'ports',
              label: `${rrr.object.name}`,
            }),
            a.hr,
          ]
        }),
        rr.field({
          key: 'Networks',
          as: 'many',
          ingest: (value) => {
            let networks = []
            for (let name in value) {
              networks.push({name, ...value[name]})
            }
            return networks
          },
          report: rrr => [
            a.p(`${rrr.object.name}`),
            rrr.field({
              key: 'IPAddress',
            }),
            a.hr,
          ]
        }),
      ],
    }),
  ]
})
