#!/bin/bash

# Instala os pacotes de dependências do projeto
npm install

FILENAME="~/.bashrc"

# Checa se já existe o alias no arquivo bashrc
if grep -c "### ---------- ###" ~/.bashrc
then
    echo "Instalação já existente !"
else
    echo "### ---------- ###" >> ~/.bashrc
    echo "# Alias para o projeto Shortcut.js" >> ~/.bashrc
    echo "alias short='node ~/Shortcut/index.js'" >> ~/.bashrc
    echo "### ---------- ###" >> ~/.bashrc
    
    # Reset no arquivo bashrc
    source ~/.bashrc

    echo "Projeto Shortcut.js instalado com sucesso !"
fi