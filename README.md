# Ho'oponopono 108

Contador de 108 repetições do hoponopono, empacotado com Capacitor para virar um app Android.

## Para gerar o APK

Você precisa do Node 22 ou mais novo e do Android Studio instalado.

```
npm install
npm run sync
npm run abrir
```

O último comando abre o projeto no Android Studio. Espere o Gradle terminar de sincronizar e depois use o menu Build, Build Bundle(s) / APK(s), Build APK(s).

Se preferir o terminal, com o Android SDK configurado, rode isto dentro da pasta android.

```
./gradlew assembleDebug
```

O arquivo sai em android/app/build/outputs/apk/debug/app-debug.apk e já pode ser instalado no celular.

## Onde mexer

- www/index.html tem todo o app, com o visual e a lógica
- src/native.js liga a vibração nativa do Android, e npm run sync já gera o www/native.js a partir dele
- depois de editar, rode npm run sync para levar a mudança ao projeto Android
- assets tem o ícone e a tela de abertura, que podem ser trocados e gerados de novo com npx capacitor-assets generate --android
- o nome do pacote é com.mafeleal.hoponopono e fica em capacitor.config.json

Esse APK é de teste (debug). Para publicar na Play Store é preciso gerar um pacote assinado.

## Imagem e música

A imagem do objetivo aparece no fundo do círculo da contagem. Ela e a música escolhida ficam salvas só no próprio celular, dentro do app. Se você desinstalar o app, elas somem.
# hoponopono108
