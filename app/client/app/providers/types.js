app.providers.types = {
  qualifiers: {
    docker: 'Docker',
    docker_compose: 'Docker Compose',
    terraform: 'Terraform',
    power_dns: 'Power DNS',
  },
  data: {
    oci: {
      identifier: 'oci',
      label: 'OCI',
      description: 'Open Container Initiative',
      roles: ['runtime']
    },
    docker: {
      identifier: 'docker',
      label: 'Docker',
      description: 'Docker container system',
      roles: ['runtime', 'packing']
    },
    packer: {
      identifier: 'packer',
      label: 'Packer',
      description: 'Hashicorp image builder',
      roles: ['packing'],
    },
    terraform: {
      identifier: 'terraform',
      label: 'Terraform',
      description: 'Hashicorp provisioner',
      roles: ['orchestration'],
    },
    docker_compose: {
      identifier: 'docker_compose',
      label: 'Docker Compose',
      description: 'Docker container orchestrator',
      roles: ['orchestration'],
    }
  },
  identifiers: function() {
    return Object.keys(this.data)
  },
  labelFor: function(identifier) {
    return this.modelFor(identifier).label
  },
  modelFor: function(identifier) {
    return this.data[identifier]
  },
  selectionsFor: function(role) {
    return Object.values(this.data).filter(provider => provider.roles.includes(role)).map(provider => [provider.identifier, provider.label])
  },


  // identifiers: {
  //   docker_local: 'Local Docker',
  //   terraform_local: 'Local Terraform',
  // }
}
