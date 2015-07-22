# vmpreso

Ansible playbooks to orchestrate disposable presentation environments based on Reveal.js.

### Dependencies

* Ansible
* Virtualbox
* Vagrant

## Presenter

Once the dependencies above have been installed, the presenter can be deployed. A basic Vagrantfile has been provided to provision a local instance that can be customized as needed.

Navigate to the project directory and provision the local presenter instance.

    $ vagrant up
    $ ansible-playbook presenter.yml

The presenter playbook will install common packages and configuration. In addition, the presentation directory is deployed in a web server running on the local instance. Once the presenter playbook has finished successfully, the demo presentation should be available at the following address.

http://localhost:8000/

Any changes made to the files in the presentation directory will be reflected on the local instance after a browser refresh.

## Rackspace Cloud

A playbook has been provided that will deploy the presentation onto a Rackspace Cloud Server instance.

TODO: Explain where to put credentials (group_vars/all)

    $ ansible-playbook raxcloud.yml

## Rackspace Cloud Files

A playbook has been provided that will deploy the presentation into a Rackspace Cloud Files container.

TODO: Explain where to put credentials (group_vars/all)

    $ ansible-playbook raxfiles.yml
