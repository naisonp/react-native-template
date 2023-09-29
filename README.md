# react-native-template
Utilize este projeto como base para qualquer projeto React Native. Mantenha a estrutura do projeto existente e siga a lógica e os princípios dos arquivos de exemplo ao estendê-lo. Para obter mais informações, consulte a [página Notion](https://www.notion.so/React-Native-project-initialisation-aea5ad3c29d1424b80f6df18de63b8dc).

## Instalação

```
cp .env.example .env
yarn
```

## Como executar

> Se você executou o storybook antes, certifique-se de limpar a compilação primeiro.

```
yarn ios
yarn android
```

## Storybook

> Se você executou o aplicativo antes, certifique-se de limpar a compilação primeiro.

```
yarn storybook:ios
yarn storybook:android
```

## Configurar CI/CD para Android
[Documentação do Android aqui](https://www.notion.so/Android-CI-CD-Setup-f7d13a94be1f48e187739296b144ed3c)

## Configurar CI/CD para iOS
[Documentação do iOS aqui](https://www.notion.so/IOS-CI-CD-Setup-9cd6f951ee89479d8f91d8f4ad9db253)

## Integração do Slack para CI/CD
Para habilitar notificações do Slack em compilações automáticas, siga as instruções na seção correspondente do arquivo ./.github/workflows/(ios_build/android_build).yml

## Renomear o Projeto

Após a instalação das dependências, execute
```
yarn rename <NovoNomeDoProjeto> <BundleIdParaAndroid>
```
BundleIdParaAndroid é um Identificador de Pacote personalizado, como com.reactnativetemplate.

Após a conclusão do script, procure no seu IDE o nome do projeto antigo e substitua-o manualmente pelo novo. Existem alguns lugares onde o script não pode substituir automaticamente os nomes. Os nomes em vermelho devem estar em letras minúsculas e corresponder ao seu BundleIdParaAndroid, e os em amarelo devem corresponder ao NovoNomeDoProjeto.