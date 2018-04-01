# Shortcut.js

Crie atalhos para seu terminal de forma bem fácil em seu ambiente linux, apenas editando um arquivo `.json` !

``` bash
# Rode o atalho `short` seguido do comando definido em seu json
short <comando>
```

## Install

### Requeriments
- Linux OS
- Node.js e NPM

Para instalar e utilizar a funcionalida é preciso rodar os comandos abaixo em seu terminal linux

``` bash
# Baixe o repositório Git e instale via node.js
cd ~/ && git clone https://github.com/igorferrani/Shortcut.git

# Acesse o path e instale as dependências do projeto
cd ~/Shortcut && npm install

# Execute o arquivo `install.sh` para a instalação
./install.sh

```

Após instalar execute o comando teste. Se exibir a mensagem de ok, o projeto está pronto pra ser usado

``` bash
short test
# >> Comando teste. Projeto ok !
```

## Examples

Na pasta do projeto existe o arquivo `commands.json`, é nele onde você irá criar seus comandos para usar no terminal de forma global. A escrita no arquivo é feita de forma fácil com `{ "chave" : "valor" }`

``` bash
# Exemplo de comandos
{
    "test": "echo Comando teste. Projeto ok !",
    "build": "cd ~/Shortcut && npm run build"
}
```


## Used Packages

- jsonfile (realiza a leitura do arquivo json)
- process.argv (organiza os parâmetros vindos do shell)
- shelljs (Executa comandos no shell do linux)