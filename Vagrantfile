Vagrant.configure(2) do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.hostname = "vmpreso"

    config.vm.network "forwarded_port", guest: 80, host: 8000
    config.vm.synced_folder "presentation", "/var/lib/vmpreso"

    config.vm.provider "virtualbox" do |vbx|
        vbx.name = "vmpreso"
        vbx.memory = 512
        vbx.cpus = 1
    end
end
