# Ho'oponopono 108

Um espaço simples para acompanhar sua prática de Ho'oponopono. O app transforma as 108 repetições em uma contagem visual inspirada em um japamala, com recursos para deixar o momento mais pessoal e confortável.

## Sobre o projeto

O **Ho'oponopono 108** é um aplicativo Android desenvolvido com HTML, CSS e JavaScript, empacotado com Capacitor.

A cada toque no círculo central, uma das 108 contas do japamala é marcada.

## Recursos

- Contador visual de 108 repetições.
- Acompanhamento de progresso, desfazer e reiniciar.
- Personalização do título.
- Imagem de objetivo.
- Música ambiente que funciona offline.
- Reprodução de músicas do dispositivo.
- Controle de volume e sons nos toques.
- Vibração tátil no Android.
- Ritmo das frases calmo, normal e rápido.
- Tema claro e escuro.
- Armazenamento local das preferências.

## Tecnologias

- HTML5, CSS3 e JavaScript
- [Capacitor 8](https://capacitorjs.com/)
- [Capacitor Haptics](https://capacitorjs.com/docs/apis/haptics)
- [esbuild](https://esbuild.github.io/)

## Como executar

### Pré-requisitos

- Node.js 22 ou superior
- Android Studio
- Android SDK configurado

### Instalação

```bash
git clone https://github.com/mariaferleal/hoponopono108.git
cd hoponopono108
npm install
npm run sync
npm run abrir
```

No Android Studio, aguarde a sincronização do Gradle e acesse **Build > Build Bundle(s) / APK(s) > Build APK(s)**.

### Gerar APK pelo terminal

```bash
cd android
./gradlew assembleDebug
```

No Windows:

```powershell
cd android
.\gradlew.bat assembleDebug
```

O arquivo será gerado em:

```
android/app/build/outputs/apk/debug/app-debug.apk
```

O APK gerado é uma versão de desenvolvimento. Para publicar na Play Store, é necessário gerar uma versão assinada.

## Estrutura do projeto

```
hoponopono108/
├── assets/
├── src/
│   └── native.js
├── www/
│   ├── index.html
│   └── native.js
├── android/
├── capacitor.config.json
└── package.json
```

- `www/index.html`: interface, estilos e lógica do aplicativo.
- `src/native.js`: integração de vibração nativa.
- `assets/`: ícone e recursos visuais do Android.
- `capacitor.config.json`: configurações do aplicativo.

Após alterações, execute `npm run sync` para atualizar o projeto Android.

## Dados e privacidade

As configurações, a contagem, a imagem de objetivo e a música escolhida ficam armazenadas localmente no dispositivo. Não há sincronização com uma conta ou servidor. A desinstalação pode apagar esses dados.

## Identificação

| Propriedade | Valor |
| --- | --- |
| Nome | Ho'oponopono 108 |
| Identificador | `com.mafeleal.hoponopono` |
| Plataforma | Android |
| Empacotamento | Capacitor |

---

Desenvolvido por [Maria Fernanda Leal Pinheiro](https://github.com/mariaferleal).