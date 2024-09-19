#升级应用库
sudo apt-get update
sudo apt-get upgrade
#下载并编译python3.8
wget https://www.python.org/ftp/python/3.8.0/Python-3.8.0.tgz
tar zxvf Python-3.8.0.tgz
cd Python-3.8.0
sudo ./configure
sudo make
sudo make install
#删除并替换python2为python3.8
rm /usr/bin/python
sudo ln -s /usr/local/bin/python3.8 /usr/bin/python


pkg="virtualenv"
pip install $pkg
if [ $? -eq 0 ]; then
    echo "install successfully: $pkg"
else
    echo "install failed: $pkg"
    exit 1
fi

pkg="virtualenvwrapper"
pip install $pkg
if [ $? -eq 0 ]; then
    echo "install successfully: $pkg"
else
    echo "install failed: $pkg"
    exit 1
fi

echo "config virtualenv..."
echo "export WORKON_HOME=$HOME/.virtualenvs" >> ~/.bashrc
echo "export VIRTUALENVWRAPPER_VIRTUALENV=$HOME/.local/bin/virtualenv" >> ~/.bashrc
echo "export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python" >> ~/.bashrc

source ~/.local/bin/virtualenvwrapper.sh

echo "config virtualenv ok."

wget https://xxxx/agent
chmod +x agent
nohup ./agent -v $HOME/.virtualenvs -vw $HOME/.local/bin/virtualenv &
