# Chá de Bebê Surpresa da Lavínia

Mini site responsivo para compartilhar pelo WhatsApp.

## Arquivos

- `index.html`: estrutura da página.
- `style.css`: aparência e animações.
- `script.js`: compartilhamento pelo WhatsApp.
- `manifest.json`: configuração para instalação no celular.
- `assets/qr-pix.png`: QR Code Pix.
- `assets/preview-whatsapp.jpg`: imagem de prévia do link.

## Publicar no GitHub Pages

1. Crie um repositório chamado `cha-bebe-lavinia`.
2. Envie todos os arquivos mantendo a mesma estrutura de pastas.
3. No GitHub, abra **Settings > Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/root`.
6. Salve e aguarde a publicação.

O endereço será semelhante a:

`https://SEU-USUARIO.github.io/cha-bebe-lavinia/`

## Importante sobre a prévia no WhatsApp

Para a imagem de prévia aparecer corretamente, depois que o site estiver publicado,
troque no arquivo `index.html`:

```html
<meta property="og:image" content="assets/preview-whatsapp.jpg">
```

por uma URL completa, por exemplo:

```html
<meta property="og:image" content="https://SEU-USUARIO.github.io/cha-bebe-lavinia/assets/preview-whatsapp.jpg">
```

## Link do Mercado Pago

O botão já está configurado para:

`https://link.mercadopago.com.br/coisafyna`
